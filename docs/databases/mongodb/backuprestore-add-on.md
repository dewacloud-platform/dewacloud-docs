---
sidebar_position: 6
slug: /mongodb-backup-restore-addon
title: Backup/Restore Add-On
---
# Database Backup/Restore Add-On

Add-on **[Database Backup](<https://github.com/jelastic-jps/database-backup-addon>)** kompatibel dengan semua database MongoDB standalone dan clustered (replica set) di Virtuozzo Application Platform. Ini bekerja berdampingan dengan [Backup Storage](<https://github.com/jelastic-jps/backup-storage>) untuk membantu pengguna secara otomatis membuat dan menyimpan backup database di penyimpanan jarak jauh.

## Add-On Installation{#add-on-installation}

Sebelum pemasangan add-on, Anda perlu membuat instansi penyimpanan khusus untuk menyimpan semua data backup.

1\. Jika Anda tidak memiliki, itu dapat dibuat dalam beberapa menit menggunakan paket **Backup Storage** khusus di [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>) platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-1.png" alt="marketplace backup storage" max-width="100%"/>

Jika Anda sudah memiliki penyimpanan semacam itu, Anda dapat melewati ke langkah _keempat_.

2\. Dalam jendela instalasi, Anda dapat memilih antara opsi penyimpanan _**Standalone**_ dan _**Cluster**_. Selanjutnya, tentukan **Number of nodes** yang diinginkan (untuk opsi Cluster) dan **Storage size**. Akhiri dengan memberikan data standar:

  * **Environment** – nama domain environment
  * **Display Name** – [alias environment](<https://docs.dewacloud.com/docs/environment-aliases/>)
  * **Region** – [region environment](<https://docs.dewacloud.com/docs/environment-regions/>) (jika ada beberapa)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-2.png" alt="backup storage installation" max-width="100%"/>

3\. Klik tombol Install dan tunggu beberapa menit untuk pembuatan penyimpanan. Ini akan secara otomatis ditambahkan ke grup “_Backup storage nodes_”.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-3.png" alt="backup storage environment" max-width="100%"/>

:::tip
Satu penyimpanan dapat digunakan oleh sebanyak mungkin database yang diperlukan.
:::

4\. Setelah penyimpanan siap, Anda dapat memasang add-on backup. Arahkan mouse ke atas database Anda dan klik ikon **Add-Ons**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-4.png" alt="backup restore add-on" width="70%"/>

Temukan _**Database Backup/Restore Add-On**_ yang diperlukan dan klik **Install**.

5\. Berikan data berikut:

  * Pilih opsi penjadwalan 
    * **Pre-defined** – pilih dari daftar interval backup standar (setiap jam, harian, mingguan, bulanan)
    * **Custom** – pilih Waktu yang tepat, Hari yang diperlukan dalam minggu, dan Zona Waktu 

    <img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-5.png" alt="custom backup schedule" max-width="100%"/>

    * **Manual (crontab)** \- berikan ekspresi berbasis [cron](<https://en.wikipedia.org/wiki/Cron#Overview>) sederhana (menggunakan zona waktu UTC) untuk menjadwalkan backup 

    <img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-6.png" alt="crontab backup schedule" max-width="100%"/>

  * **Backup storage** – pilih dari daftar penyimpanan backup yang dipasang pada akun 
  * **Number of backups** – atur jumlah backup terbaru yang akan disimpan untuk database saat ini
  * **Database User** dan **Database Password** – berikan kredensial pengguna untuk mengakses database

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-7.png" alt="backup restore add-on installation" max-width="100%"/>

6\. Dalam satu menit, Anda akan melihat pop-up keberhasilan instalasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-8.png" alt="add-on installed" width="70%"/>

Add-on backup Anda sudah bekerja. Tunggu saja waktu yang ditentukan untuk backup dibuat atau picu secara manual (lihat bagian di bawah).

## Managing Add-On{#managing-add-on}

Setelah instalasi, add-on memberi Anda opsi untuk:

  * **Backup Now** – membuat backup segera
  * **Configure** – menyesuaikan parameter yang ditentukan selama pembuatan (jadwal, node penyimpanan, jumlah backup, kredensial pengguna)
  * **Restore** – mengembalikan dari backup
  * **Uninstall** – menghapus add-on backup

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-9.png" alt="managing add-on" width="70%"/>

__Selama proses backup,__ snapshot dari database dibuat menggunakan utilitas standar _**mongodump**_. Itu disimpan di _Backup Storage_ di bawah folder khusus (dinamai berdasarkan database yang di-backup) dan menggunakan nama yang berbeda (stempel waktu eksekusi). Struktur semacam ini membantu menjaga backup terorganisir, terutama ketika bekerja dengan banyak database.

__Selama proses restore,__ direktori yang sesuai pada server penyimpanan dipasang ke node master dari database target. Selanjutnya, SQL dump dari snapshot backup yang diperlukan dipulihkan (menggunakan utilitas standar _**mongorestore**_) dan diterapkan ke database.

:::warning
Pertimbangkan bahwa semua operasi dilakukan hanya pada node master lapisan database. Jadi, untuk database non-clustered dengan banyak node, data akan dipulihkan hanya pada satu node.
:::

## Restoring Database{#restoring-database}

_Pengembalian database dari backup akan menimpa semua data yang ada. Setiap perubahan terbaru yang dilakukan sejak pembuatan backup akan hilang secara permanen._

Untuk memulihkan database dari backup, Anda perlu memilih opsi **Restore** untuk add-on. Jendela dialog dengan opsi berikut akan dibuka:

  * **Restore from** – pilih environment target (beberapa opsi mungkin tersedia jika add-on backup digunakan pada beberapa environments)
  * **Backup** – pilih dari daftar backup untuk environment yang dipilih (nama mengandung stempel waktu untuk identifikasi cepat)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/backup-restore-addon/backup-restore-addon-10.png" alt="restore from backup" max-width="100%"/>

Klik **Restore** dan konfirmasikan melalui pop-up. Setelah dimulai, tindakan tidak dapat dibatalkan atau dikembalikan. Anda akan melihat notifikasi keberhasilan di dashboard setelah proses selesai.

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)