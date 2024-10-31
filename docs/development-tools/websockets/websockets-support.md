---
sidebar_position: 1
slug: /websockets-support
title: Websockets Support
---
# Dukungan WebSockets

**WebSockets** adalah teknologi web terkemuka yang memastikan pembentukan koneksi full-duplex yang berkelanjutan antara klien dan server untuk pesan bi-direksional agar dapat dikirim secara instan dengan overhead yang sangat sedikit. Komunikasi melalui protokol berbasis TCP ini menghasilkan latensi koneksi yang sangat rendah dan interaksi yang cepat, sehingga membuat aplikasi Anda lebih cepat dan efisien.

Anda dapat mencapai manfaat berikut menggunakan WebSockets:

  * Mengurangi penundaan respons dan konsumsi lalu lintas jaringan yang tidak perlu karena distribusi full-duplex melalui satu koneksi
  * Streaming melalui proxy dan firewall, baik hulu maupun hilir sekaligus
  * Kompatibilitas mundur dengan dunia sebelum WebSocket, dengan beralih dari koneksi HTTP ke WebSockets

Platform ini menyediakan dukungan WebSockets yang maju dan lengkap dengan cara mengintegrasikan teknologi ini ke dalam [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) dan [NGINX-balancer node](<https://docs.dewacloud.com/docs/nginx-load-balancer/>), sehingga Anda dapat menggunakannya bahkan tanpa alamat IP eksternal yang terhubung ke server aplikasi Anda.

Cara termudah untuk mengaktifkan dukungan WebSockets adalah dengan menempatkan NGINX balancer di depan aplikasi Anda, menjadikannya titik masuk dari environment dan menghilangkan konfigurasi tambahan. Lebih dari itu, server ini juga dapat digunakan untuk menghapus pengaturan default dengan mudah menggunakan pengaturan khusus Anda, misalnya mengubah nomor port pendengar.

Namun demikian, teknologi WebSockets juga didukung oleh server aplikasi yang disediakan di platform - contoh konfigurasi yang sesuai tersedia dalam dokumentasi kami:

  * [WebSockets untuk Java](<https://docs.dewacloud.com/docs/websockets-java/>)
  * [WebSockets untuk PHP](<https://docs.dewacloud.com/docs/websockets-php/>)

Dan panduan di bawah ini akan memberikan wawasan tentang cara mengkonfigurasi dukungan WebSockets untuk aplikasi Anda, yang di-host di platform, dengan bantuan node **NGINX-balancer**. Sebagai contoh, kami akan menggunakan aplikasi chat sederhana, yang ditulis dalam PHP. Jadi, mari kita mulai dan bergerak langkah demi langkah dari awal sekali.

## Environment Creation and Application Deployment{#environment-creation-and-application-deployment}

1\. Masuk ke dashboard platform dengan kredensial Anda dan klik tombol **New environment** di pojok kiri atasnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-1.png" alt="WebSockets new environment" width="50%"/>

2\. Dalam frame **Environment Topology** yang muncul, Anda perlu membuat environment yang sesuai sesuai dengan persyaratan aplikasi Anda (misalnya, kami memilih server aplikasi **Apache** untuk aplikasi **PHP** kami). Satu-satunya elemen yang wajib adalah node **NGINX-balancer**.

Kemudian setel batas penggunaan sumber daya untuk node yang dipilih dengan slider cloudlet, ketik nama environment (misalnya, _balancer-websockets_) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-2.png" alt="environment wizard" max-width="100%"/>

3\. Dalam beberapa menit environment baru Anda akan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-3.png" alt="environment for WebSockets created" max-width="100%"/>

4\. Unggah dan deploy aplikasi Anda ke konteks yang diinginkan (kami akan menggunakan yang default yaitu _ROOT_) menggunakan arsip/URL atau melalui repositori VCS jarak jauh - tautan ke instruksi yang sesuai dapat ditemukan di [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>).

Setelah ini selesai, nama sumber proyek Anda akan muncul di kolom panel _Deployed_.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-4.png" alt="WebSockets application deployed" max-width="100%"/>

## NGINX Balancer Configurations{#nginx-balancer-configurations}

Sekarang Anda perlu mengubah pengaturan proxy default di server NGINX-balancer Anda untuk menentukan ke mana permintaan masuk harus dialihkan dan mengaktifkan streaming WebSockets.

1\. Akses tab **Configuration Manager** dengan memilih tombol **Config** untuk node balancer Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-5.png" alt="NGINX config button" max-width="100%"/>

2\. Kemudian buka file _**nginx-jelastic.conf**_ dalam direktori **conf**, temukan blok _location_ di dalam bagian kode _server_ pertama dan tempelkan baris berikut tepat sebelum itu:

    
```nginx
location /ws/ {  
    proxy_pass http://{appserver_ip}:{port};  
    proxy_http_version 1.1;  
    proxy_set_header Upgrade $http_upgrade;  
    proxy_set_header Connection "upgrade";  
}   
```    

di mana

  * `{appserver_ip}` \- Alamat IP dari node server aplikasi dengan aplikasi WebSockets Anda di-deploy. Dapat ditemukan dengan mengklik tombol **Additionally** untuk instance yang diperlukan.
  <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-6.png" alt="application server IP" max-width="100%"/>
  * `{port}` \- nomor port, didengarkan oleh aplikasi Anda

Dalam kasus kami, pengaturan yang diperlukan akan terlihat seperti pada gambar di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-7.png" alt="NGINX configuration file" max-width="100%"/>

:::note 
Biasanya kami merekomendasikan untuk mengubah konfigurasi di dalam file `nginx.conf` dan menjaga konten file `nginx-jelastic.conf` sebagai pengaturan default/cadangan. Tetapi dalam kasus ini, karena perubahan yang diperlukan cukup sederhana dan kami yakin bahwa kami tahu apa yang kami lakukan, akan lebih mudah untuk bekerja langsung dengan file nginx-jelastic. 
:::

3\. Itu saja untuk konfigurasi NGINX, jangan lupa untuk **Save** perubahan yang dibuat dan **Restart** balancer menggunakan tombol dengan nama yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-8.png" alt="restart NGINX nodes" max-width="100%"/>

## Application Configurations{#application-configurations}

Setelah dukungan WebSockets diaktifkan, satu-satunya hal yang perlu dilakukan adalah mengkonfigurasi aplikasi Anda. Anda perlu menyesuaikan kodenya serupa dengan langkah-langkah di bawah ini untuk menentukan string koneksi yang benar, sesuai dengan lokasi file WebSocket yang baru:

1\. Klik tombol **Config** di samping server aplikasi yang dipilih.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-9.png" alt="Apache config button" max-width="100%"/>

2\. Dalam tab **Configuration Manager** yang terbuka, Anda dapat mengakses file aplikasi Anda dengan menavigasi ke folder **webroot/ROOT** (atau, nama yang terakhir dapat berbeda jika Anda telah menentukan konteks khusus Anda selama penempatan aplikasi).

Buka file dengan pengaturan WebSockets yang dinyatakan dan sesuaikan jalur _**ws**_ sesuai dengan format berikut:

```
_ws://**{env_domain}{path_to_ws_file}**_
```

Di sini, nilai `{env_domain}` harus diganti dengan domain environment Anda (dapat dilihat di bawah nama environment di dashboard) dan nilai `{path_to_ws_file}` harus mengarah ke file, yang harus diakses pada saat membangun koneksi WebSockets.

Sebagai contoh, dalam kasus kami string ini tampak seperti berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-10.png" alt="wsUri string for Apache" max-width="100%"/>

Jangan lupa untuk **Save** perubahan yang dilakukan.

3\. Terakhir, **Restart** server aplikasi Anda dengan tombol yang sesuai untuk menerapkan konfigurasi baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-11.png" alt="restart Apache nodes" max-width="100%"/>

4\. Setelah layanan aktif kembali, Anda dapat mengklik **Open in Browser** di sebelah environment Anda dan mengakses aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-12.png" alt="open application in browser" max-width="100%"/>

5\. Hebat, kita sudah selesai!

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support/websockets-support-13.png" alt="WebSockets-based application" max-width="100%"/>

Seperti yang Anda lihat, jendela chat kecil kita berjalan, memungkinkan mengirim dan menerima pesan secara real-time, tanpa menyegarkan tab browser.

## Baca Juga{#whats-next}

  * [Dukungan WebSockets untuk Java](<https://docs.dewacloud.com/docs/websockets-java/>)
  * [Dukungan Websockets untuk PHP](<https://docs.dewacloud.com/docs/websockets-php/>)
  * [NGINX Load Balancer](<https://docs.dewacloud.com/docs/nginx-load-balancer/>)