---
sidebar_position: 3
slug: /redis-backuprestore-add-on
title: Backup/Restore Add-On
---
# Add-On Cadangan/Pemulihan Database

**[Cadangan Database](<https://github.com/jelastic-jps/database-backup-addon>)** adalah add-on yang kompatibel dengan semua database berbasis MySQL (MySQL/MariaDB/Percona), PostgreSQL, dan Redis di Platform Aplikasi Virtuozzo. Ini bekerja bersama dengan [Penyimpanan Cadangan](<https://github.com/jelastic-jps/backup-storage>) untuk membantu pengguna secara otomatis membuat dan menyimpan cadangan database di penyimpanan jarak jauh.

:::warning
Saat memperbarui (melakukan redeploy) instance PostgreSQL, sangat disarankan untuk membuat cadangan database sebelum proses. Rujuk ke dokumentasi resmi untuk meningkatkan data melalui pg_dumpall dan pg_upgrade.
:::

## Instalasi Add-On{#add-on-installation}

Sebelum memulai instalasi add-on, Anda perlu membuat instance penyimpanan yang didedikasikan untuk menyimpan semua data cadangan.

1. Jika Anda belum memiliki satu, itu dapat dibuat dalam beberapa menit menggunakan paket **Penyimpanan Cadangan** yang didedikasikan di [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>).

![marketplace backup storage](#)

Jika Anda sudah memiliki penyimpanan tersebut, Anda dapat melanjutkan ke langkah keempat.

2. Dalam jendela instalasi, Anda dapat memilih antara opsi penyimpanan _**Mandiri**_ dan _**Cluster**_. Selanjutnya, tentukan **Jumlah node** (untuk opsi Cluster) dan **Ukuran penyimpanan**. Selesaikan dengan menyediakan data standar:

  * **Lingkungan** – nama domain lingkungan
  * **Nama Tampilan** – [alias lingkungan](<https://docs.dewacloud.com/docs/environment-aliases/>)
  * **Wilayah** – [wilayah lingkungan](<https://docs.dewacloud.com/docs/environment-regions/>) (jika ada beberapa yang tersedia)

![backup storage installation](#)

3. Klik tombol Instal dan tunggu beberapa menit untuk penyimpanan dibuat. Ini akan secara otomatis ditambahkan ke “_node penyimpanan cadangan_” [kelompok](<https://docs.dewacloud.com/docs/environment-groups/>).

![backup storage environment](#)

:::tip
Satu penyimpanan dapat digunakan oleh sebanyak mungkin database yang dibutuhkan.
:::

4. Setelah penyimpanan siap, Anda dapat menginstal add-on cadangan. Arahkan ke database Anda dan klik ikon **Add-Ons**.

![backup restore add-on](#)

Temukan _**Add-On Cadangan/Pemulihan Database**_ yang diperlukan dan klik **Instal**.

5. Berikan data berikut:

  * Pilih opsi penjadwalan
    * **Prabentuk** – pilih dari daftar interval cadangan standar (setiap jam, harian, mingguan, bulanan)
    * **Kustom** – pilih Waktu yang tepat, Hari yang dibutuhkan dalam seminggu, dan Zona Waktu

![custom backup schedule](#)

    * **Manual (crontab)** – berikan [ekspresi berbasis cron](<https://en.wikipedia.org/wiki/Cron#Overview>) yang sederhana (menggunakan zona UTC) untuk menjadwalkan cadangan

![crontab backup schedule](#)

  * **Penyimpanan cadangan** – pilih dari daftar penyimpanan cadangan yang terinstal di akun
  * **Jumlah cadangan** – atur jumlah cadangan terbaru yang ingin disimpan untuk database saat ini
  * **Pengguna Database** dan **Kata Sandi Database** – berikan kredensial pengguna untuk mengakses database

![backup restore add-on installation](#)

6. Dalam satu menit, Anda akan melihat pop-up sukses instalasi.

![add-on installed](#)

Add-on cadangan Anda sudah berfungsi. Cukup tunggu waktu yang ditentukan untuk membuat cadangan.

## Mengelola Add-On{#managing-add-on}

Setelah instalasi, add-on memberikan Anda opsi untuk:

  * **Cadangkan Sekarang** – membuat cadangan segera
  * **Konfigurasi** – menyesuaikan parameter yang ditentukan selama pembuatan (jadwal, node penyimpanan, jumlah cadangan, kredensial pengguna)
  * **Pulihkan** – mengembalikan dari cadangan
  * **Copot Instalasi** – menghapus add-on cadangan

![managing add-on](#)

__Selama proses cadangan,__ sebuah snapshot dari database dibuat. Ini disimpan di _Penyimpanan Cadangan_ di bawah folder khusus (dinamai berdasarkan database yang dicadangkan) dan menggunakan nama yang berbeda (timestamp eksekusi). Struktur seperti ini membantu menjaga cadangan tetap terorganisir, terutama saat bekerja dengan beberapa database.

__Selama proses pemulihan,__ direktori yang sesuai di server penyimpanan dipasang ke node utama database target. Selanjutnya, SQL dump dari snapshot cadangan yang diperlukan dipulihkan dan diterapkan ke database.

:::warning
Pertimbangkan bahwa semua operasi dilakukan di node utama lapisan database saja: Untuk database non-cluster dengan beberapa node, data hanya akan dipulihkan di satu node saja. Untuk topologi primer-sekunder, pastikan bahwa node utama cluster adalah node utama lapisan.
:::

## Memulihkan Database{#restoring-database}

_Pemulihan database dari cadangan akan menimpa semua data yang ada. Setiap perubahan terbaru yang dilakukan sejak pembuatan cadangan akan hilang secara permanen._

Untuk memulihkan database dari cadangan, Anda perlu memilih opsi **Pulihkan** untuk add-on. Jendela dialog dengan opsi berikut akan terbuka:

  * **Pulihkan dari** – pilih lingkungan target (beberapa opsi mungkin tersedia jika add-on cadangan digunakan di beberapa lingkungan)
  * **Cadangan** – pilih dari daftar cadangan untuk lingkungan yang dipilih (nama mengandung timestamp untuk identifikasi cepat)

![restore from backup](#)

Klik **Pulihkan** dan konfirmasi melalui pop-up. Setelah dimulai, tindakan ini tidak dapat dibatalkan atau dikembalikan. Anda akan melihat notifikasi sukses di dashboard setelah proses selesai.

## Baca Juga{#whats-next}

  * [Ikhtisar Hosting DB](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Cadangan Database Manual](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Add-On Pemulihan Cluster](<https://docs.dewacloud.com/docs/db-cluster-recovery-addon/>)
  * [Akses Jarak Jauh](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Impor/Ekspor Dump](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>)