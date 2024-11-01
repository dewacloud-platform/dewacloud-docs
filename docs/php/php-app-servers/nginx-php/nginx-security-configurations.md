---
sidebar_position: 2
slug: /nginx-security-configurations
title: NGINX Security Configurations
---
# Security Configurations for NGINX

Dalam tutorial ini, kami akan menunjukkan cara menyiapkan konfigurasi keamanan tambahan untuk **aplikasi PHP** Anda yang di-hosting dengan server aplikasi NGINX.

Anda dapat menggunakan jenis konfigurasi keamanan berikut:

  * [Authentication](#a)
  * [Setting up the access criteria](#b)

****

## A. Security through authentication{#a}

Untuk menyediakan ini, ikuti langkah-langkah berikut:

  * Hasilkan hash dari kata sandi Anda. Untuk itu, Anda dapat menggunakan alat **htpasswd** apa pun atau layanan online (misalnya, `http://www.htpasswdgenerator.net/`).

  * Buat file teks sederhana dengan hash yang dihasilkan sebelumnya.

  * Klik tombol **Config** untuk server Anda.

  * Unggah file yang dibuat ke direktori **/var/www/webroot/ROOT**.

    <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/10.png" alt="password hash nginx" max-width="100%"/>

  * Di direktori **/etc/nginx**, buka file _nginx.conf_ dan modifikasi konfigurasi direktori:

    * **autentikasi untuk seluruh aplikasi** Modifikasi konfigurasi lokasi dengan menambahkan string berikut:  
      _auth_basic “Restricted area”;  
      auth_basic_user_file /var/www/webroot/ROOT/.htpasswd;_  
      <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/11.png" alt="nginx security configurations 11" max-width="100%"/>

    * **autentikasi untuk direktori terpisah**  
      Tambahkan string **location** berikut yang menunjukkan jalur ke direktori yang diperlukan:  
      `location ~/directory_path {  
      auth_basic, "Restricted";  
      auth_basic_user_file /var/www/webroot/ROOT/.htpasswd;
      }_`

      <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/12.png" alt="nginx directory authentication" max-width="100%"/>

  * Simpan perubahan dan mulai ulang **NGINX**  
    Akibatnya, saat mengakses aplikasi atau direktori yang dilindungi, pengguna akan diminta untuk melakukan autentikasi.

  <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/authentication-required.png" alt="authentication required" width="50%"/>

****

## B. Security through setting up criteria{#b}

Anda dapat menyediakan keamanan untuk aplikasi Anda dengan menetapkan kriteria berbeda, misalnya, mengizinkan atau menolak akses berdasarkan alamat IP.

  * Direktif **Allow** dan **Deny** digunakan untuk menentukan klien mana yang diizinkan atau tidak diizinkan mengakses server. Aturan diperiksa secara berurutan sampai ditemukan kecocokan pertama.
  * Buka file _nginx.conf_ di direktori **/etc/nginx** dan tambahkan direktif yang diperlukan: 
    * **menolak akses ke seluruh aplikasi** Modifikasi konfigurasi **location** menggunakan string tipe berikut:  
      `deny xx.xx.xx.x;`  
      `allow xx.xx.xx.x;`  
      `deny all;` 
      <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/13.png" alt="deny access nginx" max-width="100%"/>

    * **menolak akses ke direktori terpisah**  
      Tambahkan string **location** berikut yang menyatakan jalur ke **directory** yang diperlukan:  
      ```
      location /directory_path {  
        deny xx.xx.xx.x;  
        allow xx.xx.xx.x;  
        deny all;_  
      }
      ```


      <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/14.png" alt="deny ip access" max-width="100%"/>

Akibatnya, pengguna dengan IP selain yang diizinkan akan melihat kesalahan 403 saat mencoba membuka aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/nginx-security-configurations/403-forbidden-nginx.png" alt="403 forbidden nginx" width="30%"/>

_**Catatan:**_

  * Menolak akses melalui IP hanya masuk akal jika Anda menggunakan fitur Public IP.
  * Pembatasan akses berdasarkan kriteria dan autentikasi berbasis kata sandi dapat diterapkan secara bersamaan. Dalam hal ini, direktif Satisfy digunakan untuk menentukan bagaimana kedua set pembatasan berinteraksi. Informasi lebih lanjut dapat Anda dapatkan [di sini](<https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/#combining-basic-authentication-with-access-restriction-by-ip-address>).

## Baca Juga{#whats-next}

  * [PHP Application Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [NGINX Modules](<https://docs.dewacloud.com/docs/nginx-modules/>)
  * [NGINX-Balancer Security](<https://docs.dewacloud.com/docs/nginx-balancer-security/>)