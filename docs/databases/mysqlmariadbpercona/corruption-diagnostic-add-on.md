---
sidebar_position: 4
slug: /db-corruption-diagnostic-add-on
title: Corruption Diagnostic Add-On
---
# MySQL/MariaDB/Percona Corruption Diagnostic Add-On

Add-on **[Database Corruption Diagnostic](<https://github.com/jelastic-jps/mysql-cluster/tree/master/addons/check-corrupts>)** tersedia untuk semua database MySQL/MariaDB/Percona (termasuk topologi cluster) dan dapat melakukan diagnostik untuk mendeteksi file korrupsi. Ini memeriksa integritas indeks, tabel, dan database dari cluster.

Daftar stack yang didukung untuk diagnostik korrupsi:

  * Standalone MariaDB/MySQL/Percona stacks
  * Primary-Secondary Cluster berbasis stack MariaDB/MySQL/Percona
  * Primary-Primary Cluster berbasis stack MariaDB/MySQL/Percona
  * Galera Cluster berbasis stack MariaDB
  * XtraDB Cluster berbasis stack Percona

## Add-On Installation{#add-on-installtion}

Add-on dapat dipasang baik secara otomatis bersama dengan instalasi database cluster atau secara manual dari [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>).

1\. Pergi ke bagian **Add-Ons** di Marketplace dan pilih add-on **Database Corruption Diagnostic**.

![Marketplace Corruption Diagnostic add-on](#)

2\. Pada jendela instalasi yang terbuka, berikan data yang diperlukan:

  * **User** dan **Password** \- kredensial pengguna admin database
  * **Environment name** \- pilih environment dengan cluster database yang diperlukan dari daftar
  * **Nodes** \- pilih layer dengan cluster database

![install Corruption Diagnostic add-on](#)

Klik **Install** dan tunggu sebentar hingga add-on terpasang.

## Add-On Usage{#add-on-usage}

1\. Anda bisa menemukan add-on _**Database Corruption Diagnostic**_ di bawah tab **Add-On** untuk lapisan database.

![installed add-ons](#)

2\. Klik tombol **Corruption Diagnostic** untuk menjalankan diagnostik untuk database Anda.

:::warning
Operasi ini akan menghentikan layanan database sementara, jadi sadari waktu henti sebelum mengonfirmasi.
:::

![confirm corruption diagnostic](#)

3\. Dalam beberapa menit, Anda akan melihat hasil diagnostik dalam notifikasi pop-up dengan tautan ke file _**/var/log/db_recovery.log**_ untuk lebih banyak detail.

![diagnostic results](#)

Jika menemukan data yang korrup, disarankan untuk memulihkan database Anda dari backup. Anda bisa menggunakan add-on **[Backup/Restore](<https://docs.dewacloud.com/docs/db-backup-restore-addon/>)** untuk menjadwalkan pembuatan backup secara teratur, memastikan Anda selalu memiliki backup untuk memulihkan database Anda dalam keadaan darurat.

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Cluster Recovery Add-On](<https://docs.dewacloud.com/docs/db-cluster-recovery-addon/>)
  * [Backup/Restore Add-On](<https://docs.dewacloud.com/docs/db-backup-restore-addon/>)
  * [Manual Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)