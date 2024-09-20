---
sidebar_position: 6
slug: /dump-postgres
title: Dump Import/Export to PostgreSQL
---
# Import and Export Dump Files to PostgreSQL

Buat dua environment database dan hubungkan ke mereka menggunakan klien desktop apa pun (kami menggunakan _pgAdmin4_ sebagai contoh. Pelajari lebih lanjut di [tutorial](<https://docs.dewacloud.com/docs/remote-access-postgres>)).

![create two postgresql databases](#)

## Dump Export dari PostgreSQL{#dump-export-from-postgresql}

1\. Kami menempatkan environments **remotepostgres.vip.jelastic.cloud** dan **destination.vip.jelastic.cloud** ke dalam grup server masing-masing **backupsource** dan **destination** pada aplikasi _pgAdmin4_.

![pgadmin server groups](#)

2\. Klik kanan pada database yang diperlukan untuk dibackup misalnya **Jelastic** dan pilih **Backup**.

![backup required database](#)

3\. Tentukan nama file dump Anda dan format file outputnya. Misalnya, **mybackup** dan format file **Tar**.

![backup dialog general](#)

4\. Klik pada tab **Dump options** dan pilih opsi backup untuk objek database.

![backup dialog dump options](#)

5\. Akhirnya, klik tombol **Backup**. Jendela keberhasilan seharusnya akan muncul.

![successful backup](#)

File dump Anda akan disimpan di direktori rumah pengguna atau dengan jalur yang Anda tentukan pada host tempat _pgAdmin4_ sedang berjalan.

## Dump Import ke PostgreSQL{#dump-import-to-postgresql}

1\. Buat database kosong pada server tujuan.

![create new database](#)

2\. Tetapkan nama di kolom **Database** baik yang sama misalnya **Jelastic** atau nama sewenang-wenang lainnya.

![create database dialog](#)

3\. Untuk melakukan dump import ke database PostgreSQL, klik kanan pada database baru dan pilih **Restore**.

![restore database](#)

4\. Pilih format file yang digunakan selama operasi backup database. Dalam contoh kami, kami menggunakan format **tar**. Tentukan nama file backup atau gunakan dialog buka file di sebelah kanan kolom **Filename** untuk memilih file yang diperlukan.

![restore dialog general](#)

5\. Atur opsi pemulihan lanjutan jika diperlukan.

![restore dialog options](#)

6\. Akhirnya, klik tombol **Restore**.

7\. Navigasikan kembali ke database **Jelastic** di grup server **destination** dan pastikan bahwa database dipulihkan dengan benar dengan kontennya di kedua server **Master** dan **Slave**.

![ensure database restored and replicated](#)

Itu saja! Semoga panduan ini bermanfaat bagi Anda.

## Baca Juga{#whats-next}

  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres>)
  * [Java Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-for-php>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-database-replication>)