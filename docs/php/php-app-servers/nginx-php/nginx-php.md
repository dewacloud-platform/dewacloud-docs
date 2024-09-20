---
sidebar_position: 1
slug: /nginx-php
title: NGINX PHP
---
# NGINX PHP

Stack _NGINX PHP_ siap untuk [HTTP/3](<https://docs.dewacloud.com/docs/http3/>) dengan dukungan fitur yang diaktifkan secara default sejak rilis _1.16.1_ untuk PHP _7.2.26_, _7.3.13_, _7.4.1_ dan di atasnya. Namun, [alamat IP publik](<https://docs.dewacloud.com/docs/public-ip/>) diperlukan untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.

**[NGINX](<https://nginx.org/en/>)** adalah server HTTP yang cepat dan ringan, yang banyak digunakan oleh pengembang di seluruh dunia. Itu sangat dapat disesuaikan karena struktur modulernya, yang memungkinkan penggunaan hanya fungsi yang diperlukan, memastikan penggunaan sumber daya yang efisien.

Platform ini menyesuaikan dan mengoptimasi NGINX untuk menyediakannya sebagai server aplikasi PHP yang sepenuhnya kompatibel dengan fungsi platform. Dibandingkan dengan [Apache PHP](<https://docs.dewacloud.com/docs/apache-php/>), ini lebih cocok untuk menangani situs web dengan konten statis, tetapi karena dukungan FastCGI dapat memproses skrip yang kompleks juga.

:::note 
Template ini menggunakan modernsystemdinitialization daemon. 
:::

Untuk membuat server NGINX untuk hosting aplikasi PHP, ikuti langkah-langkah dalam instruksi rinci di bawah ini.

1\. Masuk ke dashboard platform dan klik tombol **New Environment** untuk mengakses topology wizard.

![new environment button](#)

2\. Pada tab **PHP** engine, pilih _**NGINX**_ sebagai server aplikasi Anda dan konfigurasikan parameter lainnya (seperti [cloudlets](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) atau [environment region](<https://docs.dewacloud.com/docs/environment-regions/>)) sesuai kebutuhan Anda.

![nginx php topology wizard](#)

Klik **Create** untuk melanjutkan.

3\. Setelah terbentuk, klik **Open in Browser** di sebelah server NGINX:

![nginx php open in browser](#)

4\. Anda akan melihat data _**phpinfo**_ server secara default.

![nginx phpinfo start page](#)

Langkah berikutnya adalah untuk [mendeploy](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi PHP Anda.

## NGINX Configuration{#nginx-configuration}

Saat menggunakan NGINX sebagai server aplikasi, ada beberapa batasan pada ukuran file yang diunggah ke aplikasi. Anda dapat melakukan konfigurasi berikut untuk menyesuaikannya:

1\. Arahkan ke server aplikasi NGINX dan klik tombol **Config** yang muncul.

![nginx php config button](#)

2\. Dalam [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) yang terbuka, temukan dan sesuaikan file _**/etc/nginx/nginx.conf**_ dengan menambahkan string berikut ke bagian _http_:

```
client_max_body_size 50m;
```

![adjust nginx conf file](#)

Anda dapat mengatur nilai yang diperlukan sebagai pengganti _50MB_ seperti yang digunakan dalam contoh di atas.

**Catatan:** Terlepas dari pengaturan di atas, jika bekerja melalui file manager inbuilt platform, Anda dibatasi ukuran unggahan sampai 150MB (dapat bervariasi berdasarkan pengaturan penyedia hosting). Untuk mengoperasikan file yang lebih besar, Anda perlu melampirkan [IP publik](<https://docs.dewacloud.com/docs/public-ip/>) dan menggunakan pengelola sendiri (misalnya, Anda dapat menggunakan [FTP add-on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>)).

3\. **Simpan** perubahan yang dibuat dan terapkan dengan mengklik tombol **Restart Nodes**.

![nginx php restart nodes](#)

Pelajari lebih lanjut tentang konfigurasi server PHP melalui panduan yang sesuai:

  * [PHP Dev Center](<https://docs.dewacloud.com/docs/php-center/>)
  * [PHP Extensions](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)
  * [PHP Auto Configurations](<https://docs.dewacloud.com/docs/php-auto-configuration/>)

## Baca Juga{#whats-next}

  * [NGINX Security Configurations](<https://docs.dewacloud.com/docs/nginx-security-configurations/>)
  * [NGINX Modules](<https://docs.dewacloud.com/docs/nginx-modules/>)
  * [NGINX WebDav Module](<https://docs.dewacloud.com/docs/nginx-webdav-module/>)
  * [Caching in NGINX App Server](<https://docs.dewacloud.com/docs/caching-nginx-server/>)