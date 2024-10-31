---
sidebar_position: 6
slug: /let's-encrypt-ssl-with-node.js
title: Let’s Encrypt SSL Add-On dengan NodeJS
---

# Let’s Encrypt SSL Add-On dengan NodeJS

Platform ini mengotomatisasi binding sertifikat SSL untuk sebagian besar stack software ketika bekerja dengan add-on **[Let’s Encrypt](<https://docs.dewacloud.com/docs/let's-encrypt-ssl>)**. Namun, otomatisasi out-of-box mengalami kesulitan untuk Node.js nodes karena spesifikasi stack. Dalam aplikasi Node.js, sertifikat Let’s Encrypt diterbitkan tetapi tidak terikat - hanya disimpan di direktori **/var/lib/jelastic/keys**. Anda bisa menggunakannya secara manual dalam aplikasi Anda dengan membuat server Web dan membaca sertifikat langsung dari kode.

:::tip 
Sebagai alternatif, Anda dapat menempatkan load balancer node di depan server Node.js Anda untuk bertindak sebagai reverse proxy. Add-on Let’s Encrypt SSL dapat diinstal pada balancer seperti itu, memanfaatkan otomatisasi out-of-box. Pendekatan seperti ini lebih disukai untuk proyek besar yang ingin menggunakan fitur horizontal scaling karena akan membutuhkan node load balancer juga.
:::

Panduan ini akan memberikan contoh dasar bagaimana Anda dapat mengimplementasikan add-on Let’s Encrypt SSL untuk aplikasi Node.js.

## Menggunakan SSL dengan NodeJS {#using-ssl-with-nodejs}

1\. [Buat environment](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan server aplikasi **Node.js**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/01-create-nodejs-environment.png" alt="create Node.js environment" max-width="100%"/>

2\. Install add-on [Let’s Encrypt](<https://docs.dewacloud.com/docs/let's-encrypt-ssl>) untuk menghasilkan sertifikat SSL gratis untuk aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/02-install-lets-encrypt-addon.png" alt="install Let’s Encrypt add-on" max-width="100%"/>

Karena spesifikasi mesin Node.js, add-on Let’s Encrypt hanya menghasilkan sertifikat SSL. Anda harus menyesuaikan kode aplikasi Anda untuk membaca sertifikat dari:

  * _/var/lib/jelastic/keys/privkey.pem_
  * _/var/lib/jelastic/keys/fullchain.pem_
  * _/var/lib/jelastic/keys/ca.cer_

3\. Buat aplikasi baru atau integrasikan [konfigurasi HTTPS](<https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener>) ke dalam aplikasi yang sudah ada. Lihat contoh di bawah ini:

  * **aplikasi baru** – ganti konten file _**server.js**_ default di direktori **/home/jelastic/ROOT**

```
const https = require('node:https'); 
const fs = require('node:fs'); 
const options = { 
  key: fs.readFileSync('/var/lib/jelastic/keys/privkey.pem'), 
  cert: fs.readFileSync('/var/lib/jelastic/keys/fullchain.pem') 
};  
https.createServer(options, (req, res) => { 
  res.writeHead(200);   
  res.end('hello world\n'); 
}).listen(443);  
console.log("The HTTPS server has started at: https://localhost:443/");   
```

  * **aplikasi yang sudah ada** – misalnya, terapkan paket default “_Hello World_” dan edit file _/home/jelastic/ROOT/server.js_ agar dapat bekerja melalui HTTPS

```
#!/usr/bin/env node  
var https = require("https"),     
url = require("url"),     
ejs = require("ejs"),     
fs = require("fs"),     
os = require("os"),     
staticResource = require("static-resource"),     
port = 443,     
serverUrl,     
handler,     
favicon;  

const options = {   
  key: fs.readFileSync('/var/lib/jelastic/keys/privkey.pem'),   
  cert: fs.readFileSync('/var/lib/jelastic/keys/fullchain.pem') 
};  

serverUrl = "https://localhost:" + port + "/"; 

handler = staticResource.createHandler(fs.realpathSync("./public"));  

favicon = fs.realpathSync('./public/favicon.png');  

https.createServer(options, function (req, res) {     
  var path = url.parse(req.url).pathname;      

  if (path === "/") {         
    res.writeHead(200, {"Content-Type": "text/html"});         
    res.write(ejs.render(fs.readFileSync("./index.ejs", "utf8"), {             
      hostname: os.hostname()         
    }));         
    res.end();     
  } else if (req.method === 'GET' && path === '/favicon.png') {         
    res.setHeader('Content-Type', 'image/png');         
    fs.createReadStream(favicon).pipe(res);     
  } else {         
    if (!handler.handle(path, req, res)) {             
      res.writeHead(404);             
      res.write("404");             
      res.end();         
    }     
  } 
}).listen(port);  

console.log("The HTTPS server has started at: " + serverUrl);   
```

4\. Jalankan aplikasi Anda melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>). Dalam contoh kami, kami menggunakan _**forever**_ [process manager](<https://docs.dewacloud.com/docs/nodejs-process-managers/>) (_sudo_ diperlukan untuk mendengarkan port _443_ yang memiliki hak istimewa).

```
cd /home/jelastic/ROOT 
sudo forever start server.js   
```

:::note 
The command should be adjusted for different process managers. Or you can start your application without it:1sudo node server.js
:::

Itu saja! Pergi ke aplikasi Node.js Anda melalui _**https://**_ untuk memverifikasi akses dan validitas sertifikat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/03-nodejs-application-ssl-access.png" alt="Node.js application SSL access" max-width="100%"/>

## Pembaruan Sertifikat {#certificate-update}

Sertifikat Let’s Encrypt SSL tetap berlaku selama 90 hari. Setelah itu, sertifikat tersebut harus diperbarui agar enkripsi tetap valid. Add-on menyediakan pembaruan otomatis 30 hari sebelum kedaluwarsa. Namun, setelah pembaruan sertifikat, Anda perlu me-restart (reload lebih disukai, jika memungkinkan) server untuk menerapkan sertifikat baru.

Proses ini dapat diotomatisasi bersamaan dengan pembaruan sertifikat menggunakan _**webhooks**_ – skrip khusus yang dieksekusi setelah operasi add-on default.

Pergi ke folder **/var/lib/jelastic/keys/letsencrypt** (buat jika tidak ada) dan tambahkan file _**settings-custom**_. Berdasarkan [Node.js process manager](<https://docs.dewacloud.com/docs/nodejs-process-managers/>), skrip muat ulang/restart Anda mungkin berbeda. Contoh:

```
deployHook=sudo forever restart /home/jelastic/ROOT/server.js   
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/04-lets-encrypt-update-webhook.png" alt="Let’s Encrypt update webhook" max-width="100%"/>

:::tip
Sebagai alternatif, Anda dapat menyediakan skrip .sh dengan perintah yang diperlukan:
1. deployHook: /path/to/your/file.sh
Pastikan file skrip Anda dapat dieksekusi (chmod +x \{fileName\}).
Sebagai contoh, isi skrip dapat seperti berikut:
```
#!/bin/bash
echo "This is example of deployHook script" >> /tmp/testFile
```
Selain itu, Anda dapat mengkonfigurasi update hook melalui API dengan menggunakan parameter deployHook. Lihat artikel Let’s Encrypt SSL untuk detail lebih lanjut.
:::

Anda dapat memicu pembaruan sertifikat secara manual dari menu **Add-Ons** untuk server Node.js Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/05-lets-encrypt-manual-update.png" alt="Lets Encrypt manual update" max-width="100%"/>

## Rekomendasi Tambahan {#additional-recommendations}

  * Buat variabel environment dengan jalur ke sertifikat Let’s Encrypt untuk menghindari “hardcoding” dan menyederhanakan pengeditan jika lokasi sertifikat berubah.
    * **Let’s Encrypt certificate** \- _/var/lib/jelastic/keys/fullchain.pem_
    * **Let’s Encrypt private key** \- _/var/lib/jelastic/keys/privkey.pem_

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt-with-nodejs/06-lets-encrypt-certificates-variables.png" alt="Let’s Encrypt certificates variables" max-width="100%"/>

  * Saat bekerja dengan [Let’s Encrypt add-on via API](<https://docs.dewacloud.com/docs/let's-encrypt-ssl>), Anda dapat menggunakan parameter _**deployHook**_ untuk menangani logika khusus setelah sertifikat diterbitkan/diperbarui.

## Baca Juga {#whats-next}

  * [Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl/>)
  * [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>)
  * [Let’s Encrypt SSL](<https://docs.dewacloud.com/docs/let's-encrypt-ssl>)
  * [Custom Domains](<https://docs.dewacloud.com/docs/custom-domains/>)
  * [Self-Signed SSL](<https://docs.dewacloud.com/docs/self-signed-ssl/>)