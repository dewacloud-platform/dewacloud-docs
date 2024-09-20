---
sidebar_position: 4
slug: /node.js-connection
title: Node.js Connection
---
# Node.js Application Connection to MySQL/MariaDB/Percona

**MySQL**, **MariaDB**, dan **Percona** adalah beberapa database SQL open source yang paling populer, digunakan oleh organisasi terbesar di dunia. Dalam panduan ini, kami akan memberikan gambaran sederhana tentang contoh koneksi aplikasi **Node.js** ke server MySQL atau MariaDB.

1. Masuk ke akun PaaS Anda dan [buat environment](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan server database _MySQL_ (atau _MariaDB_), kami juga akan menambahkan _NodeJS_ compute node untuk tutorial ini.

![create NodeJS MySQL environment](#)

2. Akses server NodeJS Anda melalui SSH, misalnya dengan [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>) yang disediakan.

![NodeJS Web SSH button](#)

3. Setelah terhubung, dapatkan [driver MySQL resmi untuk Node.js](<https://www.npmjs.com/package/mysql>) (kompatibel dengan MariaDB) dengan menjalankan perintah berikut:

```
npm install mysql
```

![NodeJS install MySQL connector](#)

:::note
Driver MySQL untuk NodeJS 10 saat ini sedang dalam pengujian, jadi jika peringatan deprecation muncul saat mengoperasikan versi server ini, Anda mungkin perlu menginstal versi pengujian:
```
npm install mysqljs/mysql
```
:::

Instalasi akan selesai dalam beberapa saat.

4. Siapkan skrip Node.js sederhana untuk memverifikasi koneksi. Buat file dengan ekstensi _**.js**_, menggunakan editor teks apa pun yang Anda pilih (misalnya _**vim script.js**_).

```
var mysql = require('mysql'); 
var con = mysql.createConnection({
  host: "{host}",
  user: "{user}",
  password: "{password}",
  database: "{database}"
}); 

con.connect(function(err) {
  if (err) throw err;
  console.log("You are connected!");
}); 

con.end();
```

Tempat penampung dalam kode di atas harus disesuaikan menggunakan informasi koneksi yang sesuai (diberikan dalam email untuk container MySQL / MariaDB Anda):

  * _**\{user\}**_ \- nama pengguna untuk login ke database
  * _**\{password\}**_ \- kata sandi untuk pengguna yang sesuai
  * _**\{host\}**_ \- tautan ke container MySQL / MariaDB Anda
  * _**\{database\}**_ \- database yang akan diakses (misalnya, default - _mysql_)

![NodeJS MySQL connection code](#)

Dengan menggunakan skrip ini, Anda dapat memeriksa koneksi ke database dari server aplikasi Anda dan, jika gagal, mendapatkan deskripsi kesalahan.

5. Jalankan kode dengan perintah berikut:

```
node script.js
```

![nodejs successful connection](#)

Untuk koneksi yang berhasil, frasa “_You are connected!_” akan ditampilkan di terminal, jika tidak, deskripsi kesalahan akan disediakan. Sekarang, setelah Anda yakin container database Anda dapat diakses, [perluas kode](<https://www.npmjs.com/package/mysql>) untuk menjalankan beberapa tindakan nyata di server DB Anda.

## Baca Juga{#whats-next}

  * [Java Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql/>)
  * [PHP Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Python Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql-python/>)
  * [MySQL Master Slave Replication](<https://docs.dewacloud.com/docs/database-master-slave-replication/>)
  * [MySQL Multi Master Replication](<https://docs.dewacloud.com/docs/multi-master-mysql-replication/>)