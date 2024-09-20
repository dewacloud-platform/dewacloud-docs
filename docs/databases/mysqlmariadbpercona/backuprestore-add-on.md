---
sidebar_position: 3
slug: /db-backup-restore-addon
title: Backup/Restore Add-On
---
# Database Backup/Restore Add-On

Add-on **[Database Backup](<https://github.com/jelastic-jps/database-backup-addon>)** kompatibel dengan semua database berbasis MySQL (MySQL/MariaDB/Percona), PostgreSQL, dan Redis di Virtuozzo Application Platform. Ini bekerja berdampingan dengan [Backup Storage](<https://github.com/jelastic-jps/backup-storage>) untuk membantu pengguna secara otomatis membuat dan menyimpan database backup di penyimpanan jarak jauh.

:::warning
Saat memperbarui (redeploy) instance PostgreSQL, sangat disarankan untuk membuat backup database sebelum proses. Lihat dokumentasi resmi untuk pembaruan data melalui pg_dumpall dan pg_upgrade.
:::

## Add-On Installation{#add-on-installation}

Sebelum memulai instalasi add-on, Anda perlu membuat penyimpanan khusus untuk menyimpan semua data backup.

1\. Jika Anda tidak memiliki, itu dapat dibuat dalam beberapa menit menggunakan paket **Backup Storage** khusus di [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>) platform.

![marketplace backup storage](#)

Jika Anda sudah memiliki penyimpanan semacam itu, Anda dapat melewati ke langkah keempat.

2\. Dalam jendela instalasi, Anda dapat memilih antara opsi penyimpanan _**Standalone**_ dan _**Cluster**_. Selanjutnya, tentukan **Number of nodes** yang diinginkan (untuk opsi Cluster) dan **Storage size**. Akhiri dengan memberikan data standar:

  * **Environment** – nama domain environment
  * **Display Name** – [alias environment](<https://docs.dewacloud.com/docs/environment-aliases/>)
  * **Region** – [region environment](<https://docs.dewacloud.com/docs/environment-regions/>) (jika ada beberapa)

![backup storage installation](#)

3\. Klik tombol Install dan tunggu beberapa menit untuk pembuatan penyimpanan. Ini akan secara otomatis ditambahkan ke grup “_Backup storage nodes_”.

![backup storage environment](#)

:::tip
Satu penyimpanan dapat digunakan oleh sebanyak mungkin database yang diperlukan.
:::

4\. Setelah penyimpanan siap, Anda dapat memasang add-on backup. Arahkan mouse ke atas database Anda dan klik ikon **Add-Ons**.

![backup restore add-on](#)

Temukan _**Database Backup/Restore Add-On**_ yang diperlukan dan klik **Install**.

5\. Berikan data berikut:

  * Pilih opsi penjadwalan 
    * **Pre-defined** – pilih dari daftar interval backup standar (setiap jam, harian, mingguan, bulanan)
    * **Custom** – pilih Waktu yang tepat, Hari yang diperlukan dalam minggu, dan Zona Waktu

    ![custom backup schedule](#)

    * **Manual (crontab)** \- berikan ekspresi berbasis [cron](<https://en.wikipedia.org/wiki/Cron#Overview>) sederhana (menggunakan zona waktu UTC) untuk menjadwalkan backup 

    ![crontab backup schedule](#)

  * **Backup storage** – pilih dari daftar penyimpanan backup yang dipasang pada akun
  * **Number of backups** – atur jumlah backup terbaru yang akan disimpan untuk database saat ini
  * **Database User** dan **Database Password** – berikan kredensial pengguna untuk mengakses database

![backup restore add-on installation](#)

6\. Dalam satu menit, Anda akan melihat pop-up keberhasilan instalasi.

![add-on installed](#)

Add-on backup Anda sudah bekerja. Tunggu saja waktu yang ditentukan untuk backup dibuat.

## Managing Add-On{#managing-add-on}

Setelah instalasi, add-on memberi Anda opsi untuk:

  * **Backup Now** – membuat backup segera
  * **Configure** – menyesuaikan parameter yang ditentukan selama pembuatan (jadwal, node penyimpanan, jumlah backup, kredensial pengguna)
  * **Restore** – mengembalikan dari backup
  * **Uninstall** – menghapus add-on backup

![managing add-on](#)

__Selama proses backup,__ snapshot dari database dibuat. Ini disimpan di _Backup Storage_ di bawah folder khusus (dinamai berdasarkan database yang dibackup) dan menggunakan nama yang berbeda (stempel waktu pelaksanaan). Struktur semacam ini membantu menjaga backup terorganisir, terutama ketika bekerja dengan banyak database.

__Selama proses restore,__ direktori yang sesuai pada server penyimpanan dipasang ke node master dari database target. Selanjutnya, SQL dump dari snapshot backup yang diperlukan dipulihkan dan diterapkan ke database.

:::warning
Pertimbangkan bahwa semua operasi dilakukan hanya pada node master lapisan database: Untuk database non-clustered dengan banyak node, data akan dipulihkan hanya pada satu node. Untuk topologi primary-secondary, pastikan bahwa node primary dari cluster adalah master node dari lapisan.
:::

## Restoring Database{#restoring-database}

_Pengembalian database dari backup akan menimpa semua data yang ada. Setiap perubahan terbaru yang dilakukan sejak pembuatan backup akan hilang secara permanen._

Untuk memulihkan database dari backup, Anda perlu memilih opsi **Restore** untuk add-on. Jendela dialog dengan opsi berikut akan dibuka:

  * **Restore from** – pilih environment target (beberapa opsi mungkin tersedia jika add-on backup digunakan pada beberapa environments)
  * **Backup** – pilih dari daftar backup untuk environment yang dipilih (nama mengandung stempel waktu untuk identifikasi cepat)

![restore from backup](#)

Klik **Restore** dan konfirmasikan melalui pop-up. Setelah dimulai, tindakan tidak dapat dibatalkan atau dikembalikan. Anda akan melihat notifikasi keberhasilan di dashboard setelah proses selesai.

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Manual Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Cluster Recovery Add-On](<https://docs.dewacloud.com/docs/db-cluster-recovery-addon/>)
  * [Remote Access](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>)