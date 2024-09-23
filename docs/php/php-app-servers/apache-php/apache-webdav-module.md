---
sidebar_position: 5
slug: /apache-webdav-module
title: Apache WebDav Module
---
# Apache WebDav Module

Saat mengatur situs web, Anda mungkin menghadapi kebutuhan untuk membangun beberapa metode pengelolaan dan memperbarui informasi di situs tersebut. Ada banyak solusi - menggunakan salinan lokal, menggunakan kombinasi alat HTTP dan FTP untuk mengunduh yang asli dan mengunggah perubahan, dll. Tapi juga sebagai solusi mudah, Anda dapat menggunakan **Web-based Distributed Authoring and Versioning (WebDAV)** yang tersedia di platform.

WebDAV menjadi alat penting di server berbasis Apache. Ini ditemukan untuk menyederhanakan cara Anda memperbarui situs web.

## Enabling WebDAV Module for Apache Server{#enabling-webdav-module-for-apache-server}

1\. Klik tombol **Config** untuk server di environment Anda.

2\. Modul _**mod_dav**_ dan _**mod_dav_fs**_ yang diperlukan dimuat secara default, jadi Anda hanya perlu menambahkan kode berikut ke konfigurasi _VirtualHost_ dalam file **/etc/httpd/conf/_httpd.conf_**:

```
<Directory />
  DAV on
</Directory>
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-webdav-module/01-enable-webdav-module.png" alt="enable WebDAV module" width="100%"/>

3\. Simpan perubahan dan restart **Apache**.

## Setting Up Security Configuration{#setting-up-security-configuration}

1\. Hasilkan hash dari kata sandi Anda. Untuk itu Anda dapat menggunakan alat **htpasswd** apa pun atau layanan online (misalnya, [http://www.htpasswdgenerator.net/](<http://www.htpasswdgenerator.net>)).

2\. Buat file teks sederhana dengan hash yang dihasilkan sebelumnya.

3\. Klik tombol **Config** untuk server **Apache** Anda.

4\. Unggah file yang dibuat ke folder **/var/www/webroot/ROOT**.

5\. Dalam folder **/etc/httpd/conf** buka file _**httpd.conf**_. Modifikasi konfigurasi direktori dengan menambahkan string berikut seperti yang ditunjukkan pada gambar di bawah ini:

```
AuthName "Restricted area"
AuthType Basic
AuthBasicProvider file
AuthUserFile /var/www/webroot/ROOT/.htpasswd
Require valid-user
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-webdav-module/02-apache-security-configuration.png" alt="Apache security configuration" width="100%"/>

6\. Simpan perubahan dan restart **Apache**.

Akhirnya, Anda dapat pergi ke klien **WebDAV** apa pun. Nyatakan di sana host (juga kredensial Anda jika Anda mengatur konfigurasi keamanan) dan hubungkan ke server. Sebagai hasilnya, Anda akan melihat file Anda dan akan dapat mengeditnya, memperbarui, menambahkan beberapa file baru, dll.

## Baca Juga{#whats-next}

  * [Add Apache Modules](<https://docs.dewacloud.com/docs/add-apache-modules/>)
  * [Apache Security Configurations](<https://docs.dewacloud.com/docs/apache-security-configurations/>)
  * [Apache Statistics Module](<https://docs.dewacloud.com/docs/apache-statistics-module/>)