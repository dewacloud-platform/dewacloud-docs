---
sidebar_position: 4
slug: /mongodb-license
title: MongoDB License Pricing
---
# MongoDB License Pricing

:::warning
Ketersediaan layanan tergantung pada penyedia hosting - periksa daftar platform yang didukung.
:::

Secara historis, Platform Aplikasi Virtuozzo menyediakan tumpukan perangkat lunak MongoDB sebagai container bersertifikat tanpa biaya tambahan. Namun, karena perubahan lisensi, versi MongoDB yang lebih baru dari **3.6.8** dan **4.0.2** tidak dapat didistribusikan secara bebas dan memerlukan perjanjian tambahan.

Jika Anda ingin menggunakan versi terbaru dari MongoDB dengan Platform Aplikasi Virtuozzo, biaya **lisensi tambahan** akan diterapkan secara otomatis. Jumlah yang tepat dapat bervariasi untuk penyedia hosting yang berbeda, tetapi Anda selalu dapat memeriksa harga melalui [topology wizard](<https://docs.dewacloud.com/docs/setting-up-environment/>) (baik sebelum instalasi maupun untuk environment yang sudah ada). Setelah topologi environment diatur, pilih periode estimasi biaya _per jam/hari/bulan_, dan arahkan kursor ke harga di bagian kanan wizard:

:::tip
Platform Aplikasi Virtuozzo menyediakan gambar MongoDB Sandbox untuk tujuan pengujian. Ini ditawarkan tanpa lisensi tetapi termasuk beberapa batasan dibandingkan dengan versi produksi.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/mongodb-license-pricing/01-license-cost-in-wizard.png" alt="license cost in wizard" width="100%"/>

Harga lisensi MongoDB berkorelasi dengan jumlah cloudlet dinamis (batas skala) yang disediakan untuk node MongoDB.

__Sebagai contoh,__ untuk set replika dengan 3 node masing-masing dengan 32 cloudlet dan biaya lisensi 10$/bulan untuk 8 cloudlet (setara dengan 1 GB RAM per cloudlet):

* 3 * 32 = **96** (total batas cloudlet untuk MongoDB)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/mongodb-license-pricing/02-mongodb-nodes-cloudlets.png" alt="mongodb nodes cloudlets" width="100%"/>

* 10 / 8 = **1.25** (biaya lisensi untuk satu cloudlet sumber daya)
* 96 * 1.25 = **120** (total biaya lisensi)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/mongodb-license-pricing/03-total-license-cost.png" alt="03-total license cost" width="100%"/>

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)