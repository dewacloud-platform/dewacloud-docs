---
sidebar_position: 5
slug: /caching-nginx-server
title: Caching in NGINX App Server
---
# Caching in NGINX App Server

Caching di NGINX adalah proses penyimpanan data di depan server web. Misalnya, file yang diminta pengguna secara otomatis dengan melihat halaman web dapat disimpan dalam direktori cache NGINX Anda. Ketika pengguna kembali ke halaman yang baru saja dilihatnya, browser dapat mengambil file-file tersebut dari direktori cache NGINX daripada server asli, menghemat waktu dan lalu lintas.

Jadi caching meningkatkan kinerja saat mengakses sumber daya dengan dua cara:

  * mengurangi waktu akses ke sumber daya dengan menyalinnya lebih dekat ke pengguna.
  * meningkatkan kecepatan pembangunan sumber daya dengan mengurangi jumlah akses. Misalnya, alih-alih membangun halaman depan blog Anda di setiap permintaan, Anda dapat menyimpannya dalam cache.

Instruksi ini menunjukkan cara mengatur cache pada server NginxPHP di platform.

Dengan **server NginxPHP** Anda dapat menggunakan caching untuk meningkatkan kinerja melalui mendapatkan dari cache balasan html yang telah dikompilasi untuk permintaan PHP yang berulang.

:::note
Kami membatasi ukuran disk cache menjadi 5 GB.
:::

Untuk melakukan caching ikuti instruksi berikut:

1\. Masuk ke dashboard platform.

2\. Klik tombol **Create environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/01-create-environment.png" alt="create environment" width="40%"/>

3\. Buat lingkungan dengan NGINX sebagai server aplikasi, tentukan batasan cloudlet, ketik nama environment, dan klik tombol **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/02-environment-wizard.png" alt="environment wizard" width="100%"/>

Dalam satu menit lingkungan Anda akan dibuat dan muncul dalam daftar environment.

4\. Untuk mengatur cache, klik tombol **Config** untuk node NGINX di environment Anda dan navigasikan ke **etc > php.ini**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/03-nginx-php-config.png" alt="NGINX PHP config" width="70%"/>

5\. Untuk mengaktifkan cache pada server NginxPHP Anda, Anda dapat menggunakan APC atau eAccelerator.

  * _**eAccelerator**_

Untuk menggunakan eAccelerator, Anda harus menghapus komentar di bagian **Accelerators**:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/04-nginx-php-eaccelerator.png" alt="NGINX PHP eAccelerator" width="100%"/>

Sekarang Anda perlu menentukan direktori yang akan digunakan untuk disk cache. Untuk itu tambahkan baris berikut seperti yang ditunjukkan pada gambar di bawah ini:

```
eaccelerator.cache_dir = /var/lib/nginx/cache
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/05-eaccelerator-cache-directory.png" alt="eAccelerator cache directory" width="100%"/>

Semua pengaturan tambahan dapat Anda temukan [di sini](<https://github.com/eaccelerator/eaccelerator/wiki/Settings>).

  * _**APC**_

Untuk menggunakan akselerator APC, Anda hanya perlu menghapus komentar di bagian Accelerators:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/nginx-php/caching-in-nginx-app-server/06-nginx-php-apc.png" alt="NGINX PHP APC" width="100%"/>

Untuk mengetahui fungsi tambahan APC yang tersedia, ikuti [tautan ini](<https://www.php.net/manual/en/book.apcu.php>).

Itu saja! Sekarang, Anda dapat menggunakan **NGINX caching** untuk aplikasi PHP Anda.

## Baca Juga{#whats-next}

  * [NGINX PHP](<https://docs.dewacloud.com/docs/nginx-php/>)
  * [PHP App Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [NGINX Modules](<https://docs.dewacloud.com/docs/nginx-modules/>)
  * [Apache PHP](<https://docs.dewacloud.com/docs/apache-php/>)