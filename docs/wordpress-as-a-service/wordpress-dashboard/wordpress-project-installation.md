---
sidebar_position: 2
slug: /wordpress-project-installation
title: WordPress Project Installation
---

# Instalasi Proyek WordPress

Dewacloud Application Platform untuk WordPress menyediakan prosedur instalasi cepat dan otomatis untuk pembuatan proyek baru. Fungsionalitas produksi/staging bawaan membantu mengimplementasikan berbagai integrasi DevOps. Mari kita lihat proses ini secara detail:

- [Installing Project](#installing-project)
- [Staging Project](#staging-project)
- [Deleting Project](#deleting-project)

## Installing Project{#installing-project}

Platform ini memiliki wizard instalasi yang sederhana namun kuat yang mengotomatiskan pembuatan proyek WordPress baru sesuai kebutuhan Anda.

1. Klik tombol **Create New Project** di sudut kanan atas dashboard.

![create new project](#)

2. Di wizard yang terbuka, Anda perlu memberikan **Project** (alias untuk identifikasi mudah) dan **Sub-domain Names** sebagai langkah pertama.

![project domain](#)

Klik **Continue** untuk melanjutkan.

3. Pilih **Region** dari peta interaktif (tergantung pada opsi yang tersedia, hanya sebagian peta yang mungkin tersedia) dan **Continue** ke langkah berikutnya.

![project region](#)

4. Pada langkah **Pricing**, Anda dapat melihat daftar langganan yang ada (jika ada) dan menambahkan proyek baru Anda ke salah satu dari mereka menggunakan tombol **Apply Subscription**. Jika batasan situs web tercapai, instance baru tidak dapat ditambahkan ke langganan tersebut.

![project existing subscriptions](#)

5. Jika Anda tidak memilikinya atau ingin menambahkan langganan baru (klik tombol **Add A New Plan**), konfigurasikan topologi yang diinginkan sebagai berikut:

- pilih _package_ dasar untuk proyek Anda (tab di bagian atas)
- gunakan toggle untuk beralih antara langganan _monthly_ dan _annual_
- klik **Select** untuk _tariff plan_ berdasarkan harga dan batasan sumber daya:
  - aktifkan atau nonaktifkan opsi **Auto Pay** untuk rencana yang diperlukan untuk melakukan biaya otomatis menggunakan metode pembayaran default Anda
  - atur jumlah **Websites** yang diperlukan (yaitu berapa banyak proyek yang dapat dibuat di bawah langganan ini)

![project pricing](#)

:::tip
Jika tarif yang terdaftar tidak sesuai dengan kebutuhan Anda, Anda dapat menghubungi Tim Dukungan platform untuk mendiskusikan rencana yang dipersonalisasi.
:::

Klik **Continue** untuk membuat langganan baru Anda dan tambahkan proyek dengan tombol **Apply Subscription** (seperti yang dijelaskan di langkah sebelumnya).

6. Terakhir, tinjau ringkasan proyek Anda dan klik **Create New Project** untuk memulai instalasi.

![project summary](#)

7. Proyek baru Anda akan muncul di dashboard dalam beberapa menit. Pastikan untuk memeriksa email Anda untuk informasi tambahan tentang proyek (misalnya, kredensial akses untuk panel database dan admin WordPress).

![project installing](#)

Sekarang Anda dapat melanjutkan ke panduan [Project Management](https://docs.dewacloud.com/docs/wp-dashboard-project-management/).

## Staging Project{#staging-project}

Jika Anda ingin membuat pasangan _development/staging_ untuk proyek Anda, platform menyediakan fungsionalitas bawaan untuk menjaganya tetap terorganisir (tidak perlu membuat proyek terpisah).

1. Proyek baru dianggap sebagai " _production_ " secara default. Untuk menambahkan yang " _staging_ ", pergi ke proyek yang diperlukan dan gunakan daftar drop-down yang sesuai (dilingkari dalam gambar di bawah).

![open staging project](#)

2. Setelah beralih ke **Staging**, klik opsi _Copy from production_ untuk membuat lingkungan staging dengan __topologi yang sama__ seperti lingkungan produksi Anda (dengan perubahan khusus yang dibuat terbaru).

![create staging environment](#)

Platform akan memulai pembuatan lingkungan staging setelah konfirmasi. Setelah siap, Anda dapat mulai mengimplementasikan flow DevOps Anda menggunakan lingkungan _stage_ dan _production_.

## Deleting Project{#deleting-project}

Untuk menghapus proyek, Anda dapat memilih opsi **Delete** yang sesuai dari menu proyek di halaman beranda.

![dashboard delete project](#)

Sebagai alternatif, ini dapat dilakukan dari halaman proyek dengan menavigasi ke bagian **Settings** dan mengklik tombol **Delete Project** di bagian bawah.

![settings delete project](#)

Anda akan diminta untuk mengonfirmasi tindakan dengan mengetikkan nama proyek.

![delete project confirmation](#)

**Note:** Menghapus _production_ akan menghapus seluruh proyek, sementara menghapus _[staging](#staging-project)_ – hanya lingkungan yang sesuai (yang produksi akan tetap utuh).

Proyek akan dihapus segera setelah konfirmasi.

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/docs/virtuozzo-application-platform-for-wordpress/)
- [WordPress Dashboard Overview](https://docs.dewacloud.com/docs/wp-dashboard-overview/)
- [WordPress Project Management](https://docs.dewacloud.com/docs/wp-dashboard-project-management/)
- [WordPress Topologies](https://docs.dewacloud.com/docs/wordpress-topologies/)
- [WordPress Backups](https://docs.dewacloud.com/docs/wordpress-backups/)
- [WordPress Security](https://docs.dewacloud.com/docs/wordpress-security/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/docs/wordpress-php-optimization/)