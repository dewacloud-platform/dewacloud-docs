---
sidebar_position: 9
slug: /dump-import-export-to-mongodb
title: Dump Import/Export
---
# Impor dan Ekspor File Dump ke MongoDB

Anda dapat mengimpor dan mengekspor file dump ke MongoDB dengan dua cara:

  * [menggunakan **klien MongoDB**](#mongodb-client-database-master)
  * [menggunakan alat GUI administrasi **RockMongo**](#rockmongo-admin-panel)

:::note
Jika Anda ingin menggunakan klien MongoDB, Anda perlu mengaktifkan fitur IP publik di node MongoDB Anda.
:::

## Klien MongoDB (Database Master){#mongodb-client-database-master}

### Impor Dump ke MongoDB{#dump-import-to-mongodb}

1. Setelah koneksi jarak jauh ke **MongoDB**, klik **Impor** di klien desktop (kami menggunakan _Database Master 4_ sebagai contoh) dan pilih jenis file yang ingin Anda impor.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-1.png" alt="mongodb replica set change topology" max-width="100%"/>

2. Telusuri file **XML/Csv** yang ingin Anda impor. Kemudian telusuri file log.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-2.png" alt="browse XML and log file" max-width="100%"/>

3. Gabungkan tabel sumber ke tabel target.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-3.png" alt="merge source and target tables" max-width="100%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-4.png" alt="XML import success" width="60%"/>

4. Sekarang Anda dapat kembali ke dashboard platform, buka MongoDB di browser web dan temukan dump yang diimpor di direktori **test**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-5.png" alt="check imported dump" max-width="100%"/>

### Ekspor Dump dari MongoDB{#dump-export-from-mongodb}

1. Klik **Ekspor > Ekspor Data**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-6.png" alt="Database Master data export" max-width="100%"/>

2. Telusuri folder target dan pilih tabel untuk diekspor.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-7.png" alt="select tables for export" max-width="100%"/>

3. Pilih opsi ekspor data dan klik **Selesai**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-8.png" alt="data export options" max-width="100%"/>

4. Ekspor data selesai dengan sukses. Anda dapat memeriksa folder target Anda untuk memastikan semuanya baik-baik saja.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-9.png" alt="data export success" width="60%"/>

## Panel Admin RockMongo{#rockmongo-admin-panel}

1. Klik tombol **Buka di Browser** untuk node MongoDB di lingkungan Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-10.png" alt="open MongoDB in browser" width="80%"/>

2. Di jendela yang terbuka, Anda akan diminta untuk login dengan kredensial yang Anda terima melalui email setelah membuat node MongoDB.

3. Untuk **Ekspor** atau **Impor** file dump, gunakan tombol yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/dump-import-export/dump-import-export-11.png" alt="RockMongo import export" max-width="100%"/>

Semoga instruksi ini bermanfaat bagi Anda.

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
