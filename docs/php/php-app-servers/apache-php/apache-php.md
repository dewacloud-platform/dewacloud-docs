---
sidebar_position: 1
slug: /apache-php
title: Apache PHP
---
# Apache PHP

Platform ini mengadaptasi [Apache HTTP Server](<https://httpd.apache.org/>) ("_httpd_") yang kuat, kelas komersial, dan sumber terbuka untuk membuat server aplikasi yang aman, efisien, dan skalabel untuk hosting PHP. **Apache PHP** stack oleh platform menyediakan dukungan bawaan untuk bahasa pemrograman PHP dan protokol HTTP/2 ([SSL](<https://docs.dewacloud.com/docs/secure-sockets-layer/>) diperlukan) melalui penggunaan modul _**php7_module**_ dan _**http2_module**_ masing-masing.

:::note 
Template ini menggunakan modernsystemdinitialization daemon. Daftar semua modul yang dimuat di server dapat dilihat dengan perintah apachectl -M atau pada halaman phpinfo default.
<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/01-phpinfo-loaded-modules.png" alt="phpinfo loaded modules" max-width="100%"/>
:::

Untuk mendapatkan server _Apache PHP_ Anda, ikuti langkah-langkah di bawah ini:

1\. Masuk ke akun PaaS Anda dan klik **New Environment** di bagian atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/02-new-environment-button.png" alt="new environment button" width="70%"/>

2\. Dalam _topology wizard_ yang terbuka, beralihlah ke tab **PHP** dan pilih _**Apache**_ sebagai server aplikasi Anda. Atur konfigurasi lain sesuai kebutuhan Anda (misalnya [cloudlets limit](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), [public IPs](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/03-apache-php-topology-wizard.png" alt="Apache PHP topology wizard" max-width="100%"/>

Ketik nama environment Anda dan klik **Create**.

3\. Setelah environment dibuat, Anda dapat mengklik tombol **Open in Browser** di samping server aplikasi _Apache_:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/04-apache-php-open-in-browser.png" alt="Apache PHP open in browser" max-width="100%"/>

4\. Pada halaman default yang terbuka, Anda akan melihat data _**phpinfo**_ server Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/05-apache-phpinfo-start-page.png" alt="Apache phpinfo start page" max-width="100%"/>

Sekarang, Anda dapat [mendeploy](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi PHP Anda ke dalam environment.

## Apache Configuration{#apache-configuration}

Apache PHP memiliki beberapa file konfigurasi utama yang mungkin ingin Anda sesuaikan untuk memodifikasi server aplikasi Anda sesuai dengan kebutuhan spesifik:

  * _**/etc/php.ini**_ \- mencantumkan [direktif](<https://www.php.net/manual/en/ini.list.php>) yang mengkonfigurasi pengaturan **PHP** Anda
  * _**/etc/httpd/conf.d/php.conf**_ \- mengkonfigurasi eksekusi skrip PHP
  * _**/etc/httpd/conf/httpd.conf**_ \- mencantumkan [direktif](<https://httpd.apache.org/docs/2.4/mod/directives.html>) yang mengkonfigurasi server **Apache** Anda

Sebagai contoh, kami akan menunjukkan bagaimana Anda dapat mengubah ukuran file yang dapat diunggah ke aplikasi Anda.

1\. Klik tombol **Config** untuk server Apache Anda untuk mengakses [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>):

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/06-apache-php-config-button.png" alt="Apache PHP config button" max-width="100%"/>

2\. Buka file _**/etc/php.ini**_ (tersedia melalui pintasan _Favorites_) dan temukan parameter berikut:

  * _**upload_max_filesize**_ \- ukuran maksimum file yang dapat diunggah ke server (_100MB_ secara default)
  * _**post_max_size**_ \- ukuran maksimum data POST yang diterima PHP (_100MB_ secara default)

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/07-apache-adjust-phpini-file.png" alt="Apache adjust php.ini file" width="80%"/>

:::warning
Terlepas dari pengaturan ini, ukuran file maksimum yang dapat diunggah melalui pengelola file platform dari mesin lokal adalah _150MB_ (dapat bervariasi berdasarkan pengaturan penyedia hosting). Untuk mengoperasikan file yang lebih besar, gunakan opsi **URL** atau lampirkan [public IP](<https://docs.dewacloud.com/docs/public-ip/>) dan gunakan pengelola Anda sendiri (misalnya, [FTP add-on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/08-file-upload-via-url.png" alt="file upload via URL" width="70%"/>
:::

3\. Jangan lupa untuk **Save** perubahan dan **Restart Nodes** dari server aplikasi Anda untuk menerapkan pengaturan baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-php/09-apache-php-restart-nodes.png" alt="Apache PHP restart nodes" max-width="100%"/>

Untuk informasi lebih lanjut tentang konfigurasi server PHP, lihat panduan yang sesuai:

  * [PHP Dev Center](<https://docs.dewacloud.com/docs/php-center/>)
  * [PHP.INI Security Settings](<https://docs.dewacloud.com/docs/php-security-settings/>)
  * [PHP Extensions](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)
  * [PHP Auto Configurations](<https://docs.dewacloud.com/docs/php-auto-configuration/>)

## Baca Juga{#whats-next}

  * [Apache Security Configurations](<https://docs.dewacloud.com/docs/apache-security-configurations/>)
  * [Apache Modules](<https://docs.dewacloud.com/docs/apache-nginx-modules/>)
  * [Add Apache Modules](<https://docs.dewacloud.com/docs/add-apache-modules/>)
  * [Apache WebDav Module](<https://docs.dewacloud.com/docs/apache-webdav-module/>)
  * [Apache Statistics Module](<https://docs.dewacloud.com/docs/apache-statistics-module/>)
  * [Name-Based Virtual Host in Apache](<https://docs.dewacloud.com/docs/name-based-apache-virtual-host/>)