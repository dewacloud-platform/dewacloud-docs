---
sidebar_position: 3
slug: /websockets-support-for-php
title: WebSockets Support for PHP
---
# Dukungan WebSockets untuk Apache & NGINX

**WebSockets** adalah teknologi klien-server yang luas digunakan, yang memungkinkan Anda untuk mengimplementasikan pertukaran pesan instan dalam aplikasi Anda. Hal ini dicapai dengan membangun koneksi TCP full-duplex berkelanjutan antara server dan browser klien. Menggunakan saluran komunikasi seperti itu menghasilkan latensi koneksi yang sangat rendah dan interaksi yang cepat, sekaligus memastikan streaming melalui proxy dan firewall, baik hulu maupun hilir sekaligus.

Platform ini menyediakan dukungan WebSockets yang maju dan lengkap dengan cara mengintegrasikan teknologi ini ke dalam [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) dan [NGINX-balancer node](<https://docs.dewacloud.com/docs/nginx-load-balancer/>), sehingga Anda dapat menggunakannya bahkan tanpa alamat IP eksternal yang terpasang pada server Anda. Ini diperoleh dengan mem-proxy berbagai port, yang digunakan oleh aplikasi WebSockets Anda, ke satu port - 80 untuk HTTP dan 443 untuk HTTPS.

Cara termudah untuk mengonfigurasi dukungan WebSockets untuk aplikasi Anda adalah dengan menempatkan **NGINX balancer** di depannya (instruksi rinci dapat ditemukan dalam [dokumen](<https://docs.dewacloud.com/docs/websockets/>) yang sesuai). Namun, terkadang metode seperti itu dapat bertentangan dengan persyaratan Anda karena alasan tertentu, sementara aplikasi masih membutuhkan teknologi ini untuk diimplementasikan. Untuk kasus seperti itu, platform memastikan dukungan WebSockets penuh dalam server aplikasi yang tersedia, termasuk **Apache** (dimaksudkan untuk melayani aplikasi PHP, Ruby, dan Python) dan **NGINX** (untuk aplikasi PHP dan Ruby).

Proses integrasi WebSocket dapat bervariasi dari aplikasi ke aplikasi, tetapi untuk pengaturan sisi server, platform menyediakan Anda dengan sampel konfigurasi untuk masing-masing node yang disebutkan di atas, sehingga Anda hanya perlu menghapus komentar dan menambahkan beberapa perubahan kecil sesuai dengan spesifikasi aplikasi Anda (misalnya, nomor port pendengar).

Jadi, dalam tutorial langkah demi langkah di bawah ini, kami akan menunjukkan kepada Anda contoh konfigurasi semacam itu untuk proyek chat PHP sederhana, yang di-deploy dalam environment tanpa server balancer dan menggunakan teknologi WebSockets. Mari kita mulai dari awal sekali.

## Create Environment and Deploy Application{#create-environment-and-deploy-application}

Dengan platform ini, Anda dapat membuat environment yang diperlukan dalam beberapa klik - cukup masuk ke akun PaaS Anda dan ikuti langkah-langkah di bawah ini:

1\. Klik tombol **New environment** di pojok kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-1.png" alt="new environment" width="50%"/>

2\. Dalam jendela **Environment Wizard** yang muncul, beralihlah ke tab bahasa pemrograman yang diperlukan dan pilih server aplikasi yang diinginkan (kami akan menggunakan **Apache** untuk melayani aplikasi PHP kami). Kemudian atur jumlah sumber daya yang dialokasikan untuk itu dengan slider cloudlet, ketik nama untuk environment Anda (_apache-websockets_ dalam kasus kami) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-2.png" alt="environment wizard" width="100%"/>

3\. Dalam beberapa menit, environment baru Anda akan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-3.png" alt="environment for WebSockets created" width="100%"/>

4\. Unggah dan deploy aplikasi Anda menggunakan platform Deployment Manager atau melalui repositori GIT/SVN jarak jauh (instruksi yang diperlukan, sesuai dengan mesin yang dipilih, dapat ditemukan dalam [Panduan Deployment](<https://docs.dewacloud.com/docs/deployment-guide/>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-4.png" alt="WebSockets application deployed" width="100%"/>

Akibatnya, proyek yang Anda deploy akan tercantum dalam bagian yang sesuai di panel environment.

## Server and Application Configurations{#server-and-application-configurations}

Dukungan WebSockets dalam server Apache disediakan melalui modul _**proxy_wstunnel_module**_, yang ditambahkan ke build server default. Adapun server aplikasi NGINX, menggunakan kemampuan tertanam untuk mem-proxy sambungan WebSockets serupa dengan cara [NGINX-balancer](<https://docs.dewacloud.com/docs/websockets/>) melakukannya.

Jadi saatnya untuk mengkonfigurasi server aplikasi Anda.

1\. Klik tombol **Config** di sebelah node server app Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-5.png" alt="[Apache config" width="100%"/>

2\. Di tab **Configuration Manager** yang terbuka, lakukan langkah-langkah dalam salah satu bagian instruksi berikut, sesuai dengan server yang dipilih:

  * **untuk Apache app server**

Temukan file _**httpd.conf**_ di dalam direktori **conf** dan hapus komentar pada string berikut di bagian paling akhir dari file (sekitar baris ke-962).

```apache
<Location /ws>  
    ProxyPass ws://127.0.0.1:<PORT>  
    ProxyPassReverse ws://127.0.0.1:<PORT>  
</Location>   
```

Sekarang ganti kedua parameter _****_ menjadi nomor port, yang didengarkan oleh aplikasi WebSockets Anda (misalnya, kami menggunakan _9000_).

Pastikan tampilannya sama dengan gambar di bawah ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-6.png" alt="Apache httpd conf" width="100%"/>

**Save** perubahan yang dibuat menggunakan tombol dengan nama yang sama di atas editor.

  * **untuk NGINX app server**

Temukan bagian _#Websocket support_ di dalam file _**nginx.conf**_ (terletak di dalam direktori **conf**) dan hapus komentar pada baris berikut:

```apache 
upstream websocket {  
    server 127.0.0.1:<PORT>;  
}  
&hellip;  
location /ws {  
    proxy_pass http://websocket;  
    proxy_http_version 1.1;  
    proxy_set_header Upgrade $http_upgrade;  
    proxy_set_header Connection "Upgrade";  
}   
```

Kemudian ganti nilai _**< PORT>**_ dengan nomor port yang sesuai (yaitu, yang didengarkan oleh aplikasi WebSockets Anda) dan **Save** perubahan yang dilakukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-7.png" alt="NGINX WebSockets configs" width="100%"/>

3\. Itu semua untuk konfigurasi server yang harus Anda lakukan, sehingga satu-satunya hal yang tersisa adalah mengkonfigurasi aplikasi yang Anda deploy. Untuk itu, akses file konfigurasi aplikasi Anda, yang bertanggung jawab atas pengaturan WebSockets, dan sesuaikan jalur _**ws**_ yang termuat sesuai format berikut:

```
ws://{env_domain}{path_to_ws_file}
```

di mana

  * `{env_url}` harus diganti dengan domain environment Anda (dapat dilihat di bawah nama environment di dashboard, _apache-websockets.jelastic.com_ dalam kasus kami)
  * `{path_to_ws_file}` perlu diubah sesuai dengan jalur ke file, yang harus diakses pada saat membangun koneksi WebSockets.

Seharusnya terlihat mirip dengan gambar di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-8.png" alt="application WebSockets path" width="100%"/>

4\. **Save** perubahan dan **Restart** server aplikasi Anda dengan tombol yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-9.png" alt="Apache restart" width="100%"/>

5\. Bagus, sekarang selesai! Klik **Open in Browser** untuk menjalankan aplikasi Anda dalam tab browser baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-10.png" alt="open in browser" width="100%"/>

6\. Seperti yang Anda lihat, aplikasi chat contoh kami bekerja dengan sangat baik.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-php/websockets-php-11.png" alt="WebSockets chat application" width="100%"/>

Bahkan menjalankan aplikasi chat sederhana seperti itu, Anda masih akan merasakan manfaat dari transfer pesan yang sangat cepat, tersedia berkat penggunaan protokol WebSockets. Nikmati!

## Baca Juga{#whats-next}

  * [Dukungan WebSockets](<https://docs.dewacloud.com/docs/websockets/>)
  * [Dukungan WebSockets untuk Java](<https://docs.dewacloud.com/docs/websockets-java/>)
  * [Apache PHP Server](<https://docs.dewacloud.com/docs/apache-php/>)
  * [NGINX PHP Server](<https://docs.dewacloud.com/docs/nginx-php/>)