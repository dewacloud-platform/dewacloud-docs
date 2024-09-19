---
sidebar_position: 9
slug: /dump-import-export-to-mongodb
title: Dump Import/Export
---
# Impor dan Ekspor File Dump ke MongoDB

Anda dapat mengimpor dan mengekspor file dump ke MongoDB dengan dua cara:

  * [menggunakan **klien MongoDB**](<https://docs.dewacloud.com/docs/#mongodb-client-database-master>)
  * [menggunakan alat GUI administrasi **RockMongo**](<https://docs.dewacloud.com/docs/#rockmongo-admin-panel>)

:::note
Jika Anda ingin menggunakan klien MongoDB, Anda perlu mengaktifkan fitur IP publik di node MongoDB Anda.
:::

## Klien MongoDB (Database Master){#mongodb-client-database-master}

### Impor Dump ke MongoDB{#dump-import-to-mongodb}

1. Setelah koneksi jarak jauh ke **MongoDB**, klik **Impor** di klien desktop (kami menggunakan _Database Master 4_ sebagai contoh) dan pilih jenis file yang ingin Anda impor.

![Database Master file import](#)

2. Telusuri file **XML/Csv** yang ingin Anda impor. Kemudian telusuri file log.

![browse XML and log file](#)

3. Gabungkan tabel sumber ke tabel target.

![merge source and target tables](#)

![XML import success](#)

4. Sekarang Anda dapat kembali ke dashboard platform, buka MongoDB di browser web dan temukan dump yang diimpor di direktori **test**.

![check imported dump](#)

### Ekspor Dump dari MongoDB{#dump-export-from-mongodb}

1. Klik **Ekspor > Ekspor Data**.

![Database Master data export](#)

2. Telusuri folder target dan pilih tabel untuk diekspor.

![select tables for export](#)

3. Pilih opsi ekspor data dan klik **Selesai**.

![data export options](#)

4. Ekspor data selesai dengan sukses. Anda dapat memeriksa folder target Anda untuk memastikan semuanya baik-baik saja.

![data export success](#)

## Panel Admin RockMongo{#rockmongo-admin-panel}

1. Klik tombol **Buka di Browser** untuk node MongoDB di lingkungan Anda:

![open MongoDB in browser](#)

2. Di jendela yang terbuka, Anda akan diminta untuk login dengan kredensial yang Anda terima melalui email setelah membuat node MongoDB.

3. Untuk **Ekspor** atau **Impor** file dump, gunakan tombol yang sesuai:

![RockMongo import export](#)

Semoga instruksi ini bermanfaat bagi Anda.

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
