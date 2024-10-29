---
sidebar_position: 4
slug: /data-synchronization
title: Data Synchronization
---
# Workaround of the Data Synchronization

Jika Anda membutuhkan beberapa server aplikasi PHP dalam environment Anda, Anda dapat dengan mudah menambahkannya tanpa khawatir tentang konfigurasi tambahan.

Instance yang baru ditambahkan dapat disinkronkan dengan node pertama yang ditambahkan. Untuk mencapai ini, Anda hanya perlu mengikuti alur kerja berikut:

1\. Masuk ke dashboard platform.

2\. Klik **Create environment** untuk mengatur environment baru.

3\. Di jendela **Environment topology**, pilih satu application server dan instance lain jika diperlukan. Kemudian ketik nama environment Anda dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/data-synchronization/01-environment-wizard.png" alt="environment wizard" width="100%"/>

4\. Unggah proyek Anda menggunakan **Deployment Manager**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/data-synchronization/02-upload-application-archive.png" alt="upload application archive" width="60%"/>

5\. Setelah file diunggah, pilih file tersebut dalam daftar dan klik menu drop-down **Deploy to**. Pilih environment tempat Anda ingin men-deploy aplikasi Anda. Di jendela yang terbuka, tentukan path target aplikasi (jika Anda ingin men-deploy beberapa proyek dalam satu server). Klik **Deploy**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/data-synchronization/03-deploy-application.png" alt="deploy application" width="60%"/>

6\. Aplikasi Anda akan di-deploy ke environment yang dipilih dalam waktu satu menit. Setelah itu, Anda dapat melakukan semua konfigurasi yang diperlukan.

7\. Terakhir, skalakan environment Anda secara horizontal dengan menambahkan jumlah server yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/data-synchronization/04-data-synchronization-during-scaling.png" alt="data synchronization during scaling" width="100%"/>

:::note
Anda perlu menggunakan file manager saat men-deploy aplikasi Anda untuk mencapai efek sinkronisasi. Tidak ada konfigurasi dan perubahan data lebih lanjut yang disinkronkan, hanya yang awal. Selain itu, Anda dapat menyinkronkan data Anda dengan bantuan modul WebDav. Lihat informasi detail tentang mengaktifkan dan menggunakan modul WebDav di platform. Jika diperlukan untuk menyinkronkan sesuatu di environment yang sudah ada, Anda dapat menguranginya menjadi satu node dan kemudian menambahkannya kembali ke jumlah instance yang diperlukan. Anda juga dapat menggunakan modul WebDAV atau melakukan sinkronisasi manual melalui configuration manager. Anda dapat menggunakan node awal (master) dari layer sebagai **storage server** untuk berbagi data dalam seluruh layer.
:::

## Baca Juga{#whats-next}

  * [Multi Nodes](https://docs.dewacloud.com/docs/horizontal-scaling/)
  * [Session Replication](https://docs.dewacloud.com/docs/auto-clustering/)
  * [Isolated Containers](https://docs.dewacloud.com/docs/isolated-containers/)