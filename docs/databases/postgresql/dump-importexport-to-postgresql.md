---
sidebar_position: 6
slug: /dump-postgres
title: Dump Import/Export to PostgreSQL
---
# Import and Export Dump Files to PostgreSQL

Buat dua environment database dan hubungkan ke mereka menggunakan klien desktop apa pun (kami menggunakan _pgAdmin4_ sebagai contoh. Pelajari lebih lanjut di [tutorial](<https://docs.dewacloud.com/docs/remote-access-postgres>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-1.png" alt="create two postgresql databases" width="70%"/>

## Dump Export dari PostgreSQL{#dump-export-from-postgresql}

1\. Kami menempatkan environments **remotepostgres.vip.jelastic.cloud** dan **destination.vip.jelastic.cloud** ke dalam grup server masing-masing **backupsource** dan **destination** pada aplikasi _pgAdmin4_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-2.png" alt="pgadmin server groups" width="100%"/>

2\. Klik kanan pada database yang diperlukan untuk dibackup misalnya **Jelastic** dan pilih **Backup**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-3.png" alt="backup required database" width="100%"/>

3\. Tentukan nama file dump Anda dan format file outputnya. Misalnya, **mybackup** dan format file **Tar**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-4.png" alt="backup dialog general" width="100%"/>

4\. Klik pada tab **Dump options** dan pilih opsi backup untuk objek database.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-5.png" alt="backup dialog dump options" width="100%"/>

5\. Akhirnya, klik tombol **Backup**. Jendela keberhasilan seharusnya akan muncul.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-6.png" alt="successful backup" width="100%"/>

File dump Anda akan disimpan di direktori rumah pengguna atau dengan jalur yang Anda tentukan pada host tempat _pgAdmin4_ sedang berjalan.

## Dump Import ke PostgreSQL{#dump-import-to-postgresql}

1\. Buat database kosong pada server tujuan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-7.png" alt="create new database" width="100%"/>

2\. Tetapkan nama di kolom **Database** baik yang sama misalnya **Jelastic** atau nama sewenang-wenang lainnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-8.png" alt="create database dialog" width="100%"/>

3\. Untuk melakukan dump import ke database PostgreSQL, klik kanan pada database baru dan pilih **Restore**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-9.png" alt="restore database" width="100%"/>

4\. Pilih format file yang digunakan selama operasi backup database. Dalam contoh kami, kami menggunakan format **tar**. Tentukan nama file backup atau gunakan dialog buka file di sebelah kanan kolom **Filename** untuk memilih file yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-10.png" alt="restore dialog general" width="100%"/>

5\. Atur opsi pemulihan lanjutan jika diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-11.png" alt="restore dialog options" width="100%"/>

6\. Akhirnya, klik tombol **Restore**.

7\. Navigasikan kembali ke database **Jelastic** di grup server **destination** dan pastikan bahwa database dipulihkan dengan benar dengan kontennya di kedua server **Master** dan **Slave**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/dump-import-export-to-postgresql/dump-import-export-12.png" alt="ensure database restored and replicated" width="100%"/>

Itu saja! Semoga panduan ini bermanfaat bagi Anda.

## Baca Juga{#whats-next}

  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres>)
  * [Java Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-php>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-database-replication>)