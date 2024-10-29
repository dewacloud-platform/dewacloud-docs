---
sidebar_position: 1
slug: /ssh-gate
title: SSH Overview
---
# SSH Gate Overview

**SSH (Secure Shell)** adalah protokol yang digunakan untuk terhubung dengan aman ke container jarak jauh dan menjalankan perintah yang diperlukan di atasnya. Perintah SSH dienkripsi dan aman: koneksi klien/server diautentikasi menggunakan sertifikat digital, dan kata sandi dilindungi dengan dienkripsi.

Untuk membuat akses SSH tersedia di platform, sebuah komponen infrastruktur baru ditambahkan ke inti - **SSH Gate**. SSH Gate menerima koneksi pengguna dari internet dan kemudian mentransmisikan koneksi ini ke container yang diinginkan, menggunakan jaringan internal.

Prosedur autentikasi di SSH Gate dibagi menjadi dua bagian independen:

  * koneksi dari pengguna akhir ke Gate (autentikasi eksternal)
  * koneksi dari Gate ke container pengguna (autentikasi internal)

Kedua bagian dari prosedur autentikasi didasarkan pada protokol SSH standar, menggunakan pasangan kunci publik/pribadi.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-overview/ssh-overview-1.png" alt="SSH Gate authentication" width="30%"/>

Dengan SSH Gate, Anda dapat dengan mudah mengakses:

  * **seluruh akun** di mana Anda dapat menavigasi melintasi environment dan container Anda menggunakan menu interaktif tanpa autentikasi tambahan

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-overview/ssh-overview-2.png" alt="SSH Gate to account" width="90%"/>

  * **container terpisah secara langsung** saat bekerja dengannya dari jarak jauh melalui alat tambahan (misalnya [Capistrano](<https://docs.dewacloud.com/docs/ssh-capistrano/>)) atau menggunakan protokol SFTP dan FISH
  
<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-overview/ssh-overview-3.png" alt="SSH Gate to container" width="80%"/>

Saat mengakses container melalui SSH, pengguna menerima semua izin yang diperlukan dan juga dapat mengelola layanan utama dengan perintah **sudo** dari jenis berikut (dan lainnya):

```
sudo systemctl start jetty
sudo systemctl stop mysql
sudo systemctl restart tomcat
sudo systemctl status memcached
sudo systemctl reload mongod
```

:::warning
Jika Anda melakukan deployment aplikasi apa pun, mengubah konfigurasi, atau menambahkan fungsionalitas ekstra melalui SSH ke environment Anda, ini tidak akan ditampilkan di dashboard platform.
:::

Selain itu, kami menyediakan dukungan **SFTP** (Secure File Transfer Protocol) dengan menerapkan daemon berulir untuk pemrosesan koneksi SFTP. Ini memungkinkan Anda mengakses, mengelola, dan mentransfer file langsung ke container melalui SSH gate, dan dengan cara ini, memastikan keamanan data.

Protokol jaringan aman tambahan adalah **FISH** (Files transferred over Shell protocol). Ini didukung oleh sejumlah klien FTP dan manajer file yang populer (misalnya Midnight Commander, Konqueror, lftp, Krusader, dll.) dan memungkinkan pengguna untuk mengakses dan mengelola sistem file container dengan aman.

Menggunakan dokumentasi kami Anda akan menemukan cara:

  * [menghasilkan kunci SSH](<https://docs.dewacloud.com/docs/ssh-generate-key/>)
  * [menambahkan kunci SSH](<https://docs.dewacloud.com/docs/ssh-add-key/>)
  * [mengakses environment dan container](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [bekerja melalui SSH](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)
  * [menggunakan protokol SFTP dan FISH](<https://docs.dewacloud.com/docs/ssh-protocols/>)
  * [mengelola container melalui SSH dengan Capistrano](<https://docs.dewacloud.com/docs/ssh-capistrano/>)

:::note
Akses SSH disediakan untuk seluruh akun tetapi tidak untuk environment terpisah.
:::
