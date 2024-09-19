---
sidebar_position: 3
slug: /navigation-across-groups
title: Navigation Across Groups
---
# Navigation Across Environment Groups

Mengorganisir aplikasi ke dalam [environment groups](<https://docs.dewacloud.com/docs/environment-groups>) memungkinkan proses kerja Anda menjadi lebih nyaman. Ini dicapai melalui penetapan **Tags** khusus, yang digunakan untuk pemfilteran environment dan ditampilkan dalam kolom dengan nama yang sama di layar dashboard utama pengguna.

![environment tags](#)

Anda dapat beralih dan menavigasi antar grup environment Anda dengan elemen UI berikut:

  * [via the Tags column](<https://docs.dewacloud.com/docs/#via-tags>)
  * [via the Env Groups menu](<https://docs.dewacloud.com/docs/#via-env-groups>)

## Navigation via Tags{#navigation-via-tags}

Kolom **Tags** mencantumkan semua grup yang dimiliki oleh suatu environment - klik pada tag tertentu untuk merujuk ke grup yang sesuai.

![navigation via tags](#)

Pemfilteran yang diperlukan akan diterapkan secara otomatis, sementara label grup yang dipilih akan ditampilkan sebagai elemen bersarang di panel navigasi **Env Groups** di bagian atas.

![env groups navigation panel](#)

Dengan begitu, nama grup yang sesuai akan sementara disembunyikan dalam kolom **Tags** (karena Anda sudah berada di dalamnya).

:::note 
Jika grup yang saat ini dipilih berisi item anak lebih lanjut (yaitu subgrup), daftar mereka dapat dilihat di menu manajemen grup yang dipilih pada panel navigasi atas. Cukup klik pada string dengan subgrup tersebut untuk membukanya.
:::

Untuk membatalkan penyaringan dan kembali ke daftar keseluruhan environments yang tersedia, klik pada **Env Groups**.

## Navigation via Env Groups Panel{#navigation-via-env-groups-panel}

Setelah memperluas menu utama **Env Groups** di bagian atas, Anda akan ditunjukkan daftar semua grup environment dalam akun Anda, termasuk [subgroup](<https://docs.dewacloud.com/docs/environment-groups-management#add-subgroup>) yang termasuk (jika ada).

![env groups panel](#)

Mengklik yang tertentu akan menerapkan pemfilteran yang sesuai ke daftar environment Anda.  
Selain itu, di sini Anda disediakan dengan dua opsi penyortiran yang sudah ditentukan berdasarkan parameter berikut:

  * **Shared with Me** \- pilih opsi ini untuk mengakses daftar environments [dibagikan](<https://docs.dewacloud.com/docs/share-environment>) dengan akun Anda 

    ![shared environments](#)

:::note 
Ketika mengarahkan mouse ke Shared with Me, Anda akan melihat daftar pemilik kolaborasi yang Anda ikuti; memilih catatan tertentu di sini akan menampilkan environments yang dibagikan kepada Anda oleh orang ini. Dan jika memilih Manage di submenu ini bagian bawah, pengaturan Akun > Shared with Me tab akan dibuka.
:::

  * **Region** \- gunakan opsi ini untuk memfilter environments berdasarkan daftar [environment regions](<https://docs.dewacloud.com/docs/environment-regions>) yang tersedia untuk akun Anda 

    ![environment regions](#)

Sekarang, ketika Anda tahu cara dengan mudah menavigasi antar grup environment yang berbeda, periksa beberapa kemungkinan tambahan yang disediakan untuk [group management](<https://docs.dewacloud.com/docs/environment-groups-management>) pada dashboard platform.

## Baca Juga{#whats-next}

  * [Environment Groups Overview](<https://docs.dewacloud.com/docs/environment-groups/>)
  * [Environment Groups Management](<https://docs.dewacloud.com/docs/environment-groups-management/>)
  * [Environment Collaboration](<https://docs.dewacloud.com/docs/share-environment/>)
  * [Environment Regions](<https://docs.dewacloud.com/docs/environment-regions/>)