---
sidebar_position: 7
slug: /dump-import-export-to-mysql
title: Dump Import/Export
---
# Import and Export Dump Files to MySQL/MariaDB/Percona

## Dump Import{#dump-import}

1\. Buat instansi server baru menggunakan klien desktop apa pun untuk **MySQL/MariaDB/Percona** (kami menggunakan MySQL Workbench sebagai contoh).

![MySQL workbench](#)

2\. Tentukan **host machine** Anda (cukup tempelkan IP publik Anda ke dalam kolom alamat) dan klik **Next**.

![remote host public IP](#)

3\. Atur nilai koneksi database: **Alamat IP, nomor port, nama pengguna**, dan **kata sandi** (ketika Anda membuat environment, platform mengirimkan email kepada Anda dengan kredensial ke database).

![database connection credentials](#)

4\. Kemudian koneksi database Anda akan diuji selama beberapa menit.

![testing database connection](#)

5\. Atur jenis manajemen remote yang ingin Anda gunakan.

![do not use remote management](#)

6\. Masukkan nama untuk instansi server Anda.

![server instance name](#)

7\. Anda dapat melihat bahwa instansi server Anda berhasil dibuat.

![database connection established](#)

8\. Buka instansi Anda dan pilih **Data Import/Restore** dan pilih dump yang ingin Anda impor.

![data import/restore](#)

Proses impor dapat memakan waktu beberapa menit.

![start import](#)

9\. Kembali ke dashboard platform dan buka **MySQL** (**MariaDB**) di browser. Menggunakan kredensial yang dikirimkan platform kepada Anda, masuk ke halaman admin. Pilih **test**, klik pada **example** dan Anda akan melihat dump yang telah diimpor.

![phpMyAdmin imported dump](#)

## Dump Export{#dump-export}

1\. Buka instansi server yang telah Anda buat sebelumnya di klien desktop Anda dan pilih **Data Export** dan pilih objek database untuk diekspor. Tentukan jalur ke direktori, di mana Anda ingin mengekspor dump.

![data export](#)

2\. Proses ekspor dapat memakan waktu beberapa menit, tergantung pada ukuran data yang diekspor.

![start export](#)

File dump Anda akan berada di direktori yang jalurnya telah Anda tentukan.

## Baca Juga{#whats-next}

  * [Java Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql/>)
  * [PHP Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Remote Access to MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)