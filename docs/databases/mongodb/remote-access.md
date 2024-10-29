---
sidebar_position: 8
slug: /remote-access-to-mongodb
title: Remote Access
---
# Akses Jarak Jauh ke MongoDB

Anda dapat bekerja dengan database Anda dari jarak jauh menggunakan komputer Anda tanpa harus login ke dashboard kami. Berikut adalah beberapa instruksi tentang cara melakukannya dengan MongoDB. Instruksi ini dapat digunakan untuk lingkungan Java dan PHP.

## Buat Lingkungan{#create-the-environment}

1. Masuk ke platform.

2. Klik tombol **Buat lingkungan** di bagian kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-1.png" alt="create environment" width="50%"/>

3. Dalam dialog **Topologi Lingkungan**, pilih server aplikasi Anda (misalnya, **Tomcat**) dan **MongoDB** sebagai database yang ingin Anda gunakan. Aktifkan **Public IPv4** untuk **MongoDB**. Kemudian ketik nama lingkungan Anda, misalnya, _remotemongo_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-2.png" alt="environment wizard" width="100%"/>

Tunggu sebentar hingga lingkungan Anda dibuat.

4. Klik tombol **info** untuk MongoDB dan Anda akan melihat **Public IP** Anda di akhir daftar dropdown.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-3.png" alt="MongoDB node public IP" width="100%"/>

## Koneksi Jarak Jauh ke MongoDB{#remote-connection-to-mongodb}

1. Buat proyek baru menggunakan klien desktop yang sesuai untuk **MongoDB** (kami menggunakan Database Master 4 sebagai contoh).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-4.png" alt="remote connection new project" width="70%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-5.png" alt="add remote connection" width="100%"/>

2. Tentukan **host** (IP publik Anda), **nomor port** (27017), **username**, dan **password** (ketika Anda membuat lingkungan, platform mengirimkan email kepada Anda dengan kredensial ke database).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-6.png" alt="remote connection credentials" width="100%"/>

Kemudian klik **Uji Koneksi**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-7.png" alt="test remote connection" width="60%"/>

Seperti yang Anda lihat, koneksi berhasil dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/remote-access/remote-access-8.png" alt="remote connection created" width="100%"/>

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)