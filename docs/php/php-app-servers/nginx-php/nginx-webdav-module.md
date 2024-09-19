---
sidebar_position: 4
slug: /nginx-webdav-module
title: NGINX WebDav Module
---
# NGINX WebDav Module

Saat mengatur situs web, Anda mungkin menghadapi kebutuhan untuk membangun beberapa metode yang rumit untuk melihat dan memperbarui informasi di situs tersebut. Ada banyak solusi - menggunakan salinan lokal, menggunakan kombinasi alat HTTP dan FTP untuk mengunduh yang asli dan mengunggah perubahan, dll. Tetapi juga sebagai solusi mudah, Anda dapat menggunakan **Web-based Distributed Authoring and Versioning (WebDAV)** yang tersedia di platform.

WebDAV menjadi alat penting yang ditemukan untuk menyederhanakan cara Anda memperbarui situs web.

## Enabling WebDAV Module for NGINX Server{#enabling-webdav-module-for-nginx-server}

1\. Klik tombol **Config** untuk server di environment Anda.

2\. Di folder **/etc/nginx**, buka file _**nginx.conf**_. Modifikasi konfigurasi dengan menambahkan string berikut seperti yang ditunjukkan pada gambar di bawah ini:

```
dav_methods PUT DELETE MKCOL COPY MOVE;
dav_ext_methods PROPFIND OPTIONS;
```

![nginx webdav module 1](#)

3\. Simpan perubahan dan restart **NGINX**.

Menggunakan file _nginx.conf_, Anda dapat mengatur konfigurasi lain untuk modul WebDav. Ikuti tautan (`https://nginx.org/en/docs/http/ngx_http_dav_module.html`) untuk menemukan beberapa informasi berguna tambahan.

## Setting Up Security Configuration{#setting-up-security-configuration}

1\. Hasilkan hash dari kata sandi Anda. Untuk itu, Anda dapat menggunakan alat **htpasswd** apa pun atau layanan online (misalnya, `http://www.htpasswdgenerator.net/`).

2\. Buat file teks sederhana dengan hash yang dihasilkan sebelumnya.

3\. Klik tombol **Config** untuk server **NGINX** Anda.

4\. Unggah file yang dibuat ke folder **/var/www/webroot/ROOT**.

5\. Di folder **/etc/nginx**, buka file _**nginx.conf**_. Tambahkan string berikut:

```
auth_basic "Restricted area";
auth_basic_user_file /var/www/webroot/ROOT/.htpasswd;
```

![nginx webdav module 2](#)

6\. Simpan perubahan dan restart **NGINX**.

Akhirnya Anda dapat pergi ke klien **WebDAV** mana pun. Nyatakan host di sana (juga kredensial Anda jika Anda mengatur konfigurasi keamanan) dan hubungkan ke server. Sebagai hasilnya, Anda akan melihat file Anda dan akan dapat mengeditnya, memperbarui, menambahkan beberapa file baru, dll.

## Baca Juga{#whats-next}

  * [NGINX Modules](<https://docs.dewacloud.com/docs/nginx-modules/>)
  * [Caching in NGINX App Server](<https://docs.dewacloud.com/docs/caching-nginx-server/>)