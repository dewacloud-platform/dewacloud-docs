---
sidebar_position: 6
slug: /remote-access-mysql
title: Remote Access
---
# Remote Access to MySQL/MariaDB/Percona

Anda dapat bekerja dengan database Anda secara remote dari komputer Anda tanpa perlu masuk ke dashboard kami. Berikut adalah beberapa instruksi tentang cara mengakses dengan **MySQL**. Langkah ini dapat digunakan baik untuk lingkungan Java maupun PHP.

:::tip
Langkah yang sama dapat digunakan untuk akses remote ke MariaDB dan Percona.
:::

## Create Environment{#create-environment}

1\. Masuk ke platform.

2\. Klik tombol **Create environment** di kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/remote access/remote-access-1.png" alt="create environment" width="60%"/>

3\. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya, **Tomcat**) dan **MySQL** sebagai database yang ingin Anda gunakan. Aktifkan **Public IPv4** untuk **MySQL**. Kemudian ketik nama environment Anda, misalnya, _dumptest_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/remote access/remote-access-2.png" alt="environment wizard" width="100%"/>

Tunggu beberapa menit hingga environment Anda dibuat.

4\. Klik tombol **info** untuk MySQL dan Anda akan melihat **public IP** Anda di akhir daftar dropdown.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/remote access/remote-access-3.png" alt="MySQL node public IP" width="100%"/>

## Remote Connection to MySQL{#remote-connection-to-mysql}

1\. Buat koneksi terbuka baru untuk mulai melakukan query menggunakan klien desktop apa pun untuk **MySQL** (kami akan menggunakan MySQL Workbench sebagai contoh). Tentukan nama koneksi, masukkan nama host (Public IP Anda), nomor port (3306), nama pengguna dan kata sandi (ketika Anda membuat environment, platform mengirimkan email kepada Anda dengan kredensial ke database).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/remote access/remote-access-4.png" alt="remote connection credentials" width="100%"/>

2\. Sekarang akses MySQL remote telah dikonfigurasikan dan Anda dapat mulai melakukan query.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/remote access/remote-access-5.png" alt="remote access to MySQL" width="100%"/>

## Baca Juga{#whats-next}

  * [Dump Import/Export to MySQL/MariaDB](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>)
  * [Java Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-java/>)
  * [PHP Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)