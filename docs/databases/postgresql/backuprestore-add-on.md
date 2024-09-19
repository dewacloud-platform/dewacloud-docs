---
sidebar_position: 3
slug: /postgresql-backuprestore-add-on
title: Backup/Restore Add-On
---
# Database Backup/Restore Add-On

**[Database Backup](<https://github.com/jelastic-jps/database-backup-addon>)** add-on kompatibel dengan semua database berbasis MySQL (MySQL/MariaDB/Percona), PostgreSQL, dan Redis di Virtuozzo Application Platform. Add-on ini bekerja bersama [Backup Storage](<https://github.com/jelastic-jps/backup-storage>) untuk membantu pengguna secara otomatis membuat dan menyimpan cadangan database di penyimpanan jarak jauh.

:::warning
Saat memperbarui (redeploy) instance PostgreSQL, sangat disarankan untuk membuat cadangan database sebelum proses tersebut. Lihat dokumentasi resmi untuk upgrade data via pg_dumpall dan pg_upgrade.
:::

## Add-On Installation{#add-on-installation}

Sebelum memulai instalasi add-on, Anda perlu membuat instance penyimpanan khusus untuk menyimpan semua data cadangan.

1\. Jika Anda belum memiliki, Anda dapat membuatnya dalam beberapa menit menggunakan paket **Backup Storage** khusus di [Marketplace platform](<https://docs.dewacloud.com/docs/marketplace/>).

![marketplace backup storage](#)

Jika Anda sudah memiliki penyimpanan semacam itu, Anda dapat langsung menuju langkah keempat.

2\. Di dalam jendela instalasi, Anda dapat memilih antara opsi penyimpanan _**Standalone**_ dan _**Cluster**_. Selanjutnya, tentukan **Number of nodes** yang diinginkan (untuk opsi Cluster) dan **Storage size**. Selesaikan dengan memberikan data standar:

  * **Environment** – nama domain environment
  * **Display Name** – [alias environment](<https://docs.dewacloud.com/docs/environment-aliases/>)
  * **Region** – [region environment](<https://docs.dewacloud.com/docs/environment-regions/>) (jika tersedia lebih dari satu)

![backup storage installation](#)

3\. Klik tombol Install dan tunggu beberapa menit hingga penyimpanan dibuat. Penyimpanan tersebut akan otomatis ditambahkan ke “ _Backup storage nodes_ ” [group](<https://docs.dewacloud.com/docs/environment-groups/>).

![backup storage environment](#)

:::tip
Satu penyimpanan dapat digunakan oleh sebanyak mungkin database yang diperlukan.
:::

4\. Setelah penyimpanan siap, Anda dapat menginstal backup add-on. Arahkan ke database Anda dan klik ikon **Add-Ons**.

![backup restore add-on](#)

Temukan _**Database Backup/Restore Add-On**_ yang diperlukan dan klik **Install**.

5\. Berikan data berikut:

  * Pilih opsi penjadwalan:
    * **Pre-defined** – pilih dari daftar interval cadangan standar (setiap jam, harian, mingguan, bulanan)
    * **Custom** – pilih waktu yang tepat, hari yang diperlukan dalam seminggu, dan zona waktu ![custom backup schedule](#)
    * **Manual (crontab)** – berikan ekspresi sederhana berbasis [cron](<https://en.wikipedia.org/wiki/Cron#Overview>) (menggunakan zona waktu UTC) untuk menjadwalkan cadangan ![crontab backup schedule](#)
  * **Backup storage** – pilih dari daftar backup storage yang diinstal di akun
  * **Number of backups** – atur jumlah cadangan terbaru yang akan disimpan untuk database saat ini
  * **Database User** dan **Database Password** – berikan kredensial pengguna untuk mengakses database

![backup restore add-on installation](#)

6\. Dalam satu menit, Anda akan melihat pop-up keberhasilan instalasi.

![add-on installed](#)

Backup add-on Anda sudah bekerja. Tunggu saja waktu yang ditentukan untuk cadangan dibuat.

## Managing Add-On{#managing-add-on}

Setelah instalasi, add-on memberikan opsi berikut:

  * **Backup Now** – membuat cadangan segera
  * **Configure** – menyesuaikan parameter yang ditentukan selama pembuatan (jadwal, node penyimpanan, jumlah cadangan, kredensial pengguna)
  * **Restore** – memulihkan dari cadangan
  * **Uninstall** – menghapus backup add-on

![managing add-on](#)

__Selama proses backup,__ snapshot dari database dibuat. Snapshot ini disimpan di _Backup Storage_ di bawah folder khusus (dinamakan berdasarkan database yang dicadangkan) dan menggunakan nama unik (stempel waktu eksekusi). Struktur semacam ini membantu menjaga backup tetap terorganisir, terutama saat bekerja dengan beberapa database.

__Selama proses restore,__ direktori yang sesuai di server penyimpanan dipasang ke node master dari database target. Selanjutnya, SQL dump dari snapshot cadangan yang diperlukan dipulihkan dan diterapkan ke database.

:::warning
Perhatikan bahwa semua operasi dilakukan hanya pada node master dari lapisan database: Untuk database non-clustered dengan beberapa node, data akan dipulihkan hanya di satu node. Untuk topologi primary-secondary, pastikan node primary dari cluster adalah node master dari lapisan tersebut.
:::

## Restoring Database{#restoring-database}

_Pemulihan database dari cadangan akan menimpa semua data yang ada. Setiap perubahan terbaru yang dilakukan sejak pembuatan cadangan akan hilang secara permanen._

Untuk memulihkan database dari cadangan, Anda perlu memilih opsi **Restore** untuk add-on. Jendela dialog dengan opsi berikut akan dibuka:

  * **Restore from** – pilih environment target (beberapa opsi mungkin tersedia jika backup add-on digunakan pada beberapa environment)
  * **Backup** – pilih dari daftar cadangan untuk environment yang dipilih (nama-nama berisi stempel waktu untuk identifikasi cepat)

![restore from backup](#)

Klik **Restore** dan konfirmasi melalui pop-up. Setelah dimulai, tindakan ini tidak dapat dibatalkan atau dikembalikan. Anda akan melihat notifikasi keberhasilan di dashboard setelah proses selesai.

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Manual Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Cluster Recovery Add-On](<https://docs.dewacloud.com/docs/db-cluster-recovery-addon/>)
  * [Remote Access](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>)