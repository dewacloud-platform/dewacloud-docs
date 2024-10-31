---
sidebar_position: 7
slug: /dump-import-export-to-mysql
title: Dump Import/Export
---
# Import and Export Dump Files to MySQL/MariaDB/Percona

## Dump Import{#dump-import}

1\. Buat instansi server baru menggunakan klien desktop apa pun untuk **MySQL/MariaDB/Percona** (kami menggunakan MySQL Workbench sebagai contoh).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-1.png" alt="MySQL workbench" max-width="100%"/>

2\. Tentukan **host machine** Anda (cukup tempelkan IP publik Anda ke dalam kolom alamat) dan klik **Next**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-2.png" alt="remote host public IP" max-width="100%"/>

3\. Atur nilai koneksi database: **Alamat IP, nomor port, nama pengguna**, dan **kata sandi** (ketika Anda membuat environment, platform mengirimkan email kepada Anda dengan kredensial ke database).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-3.png" alt="database connection credentials" max-width="100%"/>

4\. Kemudian koneksi database Anda akan diuji selama beberapa menit.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-4.png" alt="testing database connection" max-width="100%"/>

5\. Atur jenis manajemen remote yang ingin Anda gunakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-5.png" alt="do not use remote management" max-width="100%"/>

6\. Masukkan nama untuk instansi server Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-6.png" alt="server instance name" max-width="100%"/>

7\. Anda dapat melihat bahwa instansi server Anda berhasil dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-7.png" alt="database connection established" max-width="100%"/>

8\. Buka instansi Anda dan pilih **Data Import/Restore** dan pilih dump yang ingin Anda impor.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-8.png" alt="data import/restore" max-width="100%"/>

Proses impor dapat memakan waktu beberapa menit.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-9.png" alt="start import" max-width="100%"/>

9\. Kembali ke dashboard platform dan buka **MySQL** (**MariaDB**) di browser. Menggunakan kredensial yang dikirimkan platform kepada Anda, masuk ke halaman admin. Pilih **test**, klik pada **example** dan Anda akan melihat dump yang telah diimpor.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-10.png" alt="phpMyAdmin imported dump" max-width="100%"/>

## Dump Export{#dump-export}

1\. Buka instansi server yang telah Anda buat sebelumnya di klien desktop Anda dan pilih **Data Export** dan pilih objek database untuk diekspor. Tentukan jalur ke direktori, di mana Anda ingin mengekspor dump.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-11.png" alt="data export" max-width="100%"/>

2\. Proses ekspor dapat memakan waktu beberapa menit, tergantung pada ukuran data yang diekspor.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/dump-import-export/dump-import-export-12.png" alt="start export" max-width="100%"/>

File dump Anda akan berada di direktori yang jalurnya telah Anda tentukan.

## Baca Juga{#whats-next}

  * [Java Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-java/>)
  * [PHP Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Remote Access to MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)