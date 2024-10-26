---
sidebar_position: 1
slug: /data-storage-container-overview
title: Data Storage Overview
---

# Data Storage Container Overview

**Data Storage Container** adalah solusi yang umum digunakan untuk penyimpanan data sederhana dan remote kontrol. Dalam konteks platform, ini memungkinkan berbagai environment beroperasi dengan data dalam satu penyimpanan semudah jika disimpan secara lokal: misalnya berbagi file media, config umum, atau hanya menyimpan backup, log, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20storage%20overview/01-data-storage-container-logo.png" alt="Data Storage Container logo" width="20%"/>

Dengan menggunakan data storage container, Anda dapat menerapkan organisasi yang cerdas untuk topologi proyek Anda dan mencapai sejumlah manfaat, seperti:

  * _Data Persistence and Security_ \- data benar-benar aman karena dijalankan di dalam container yang sepenuhnya terisolasi dan disimpan terpisah selama pembaruan aplikasi
  * _Simplified Management_ \- satu set konfigurasi untuk beberapa container, berbagai jenis penyimpanan data, integrasi dengan Docker volumes, dan file manager yang terpasang
  * _Funds Saving_ \- data yang dibagikan menyiratkan konsumsi ruang disk yang lebih rendah dan oleh karena itu biaya yang lebih rendah

Integrasi data storage container pada platform didasarkan pada protokol network file system (**NFS**), yang digunakan untuk komunikasi client-server. Sebenarnya, seluruh prosedur dilakukan dalam dua langkah: pada langkah pertama, data diekspor (dibagikan) dari storage container ke beberapa instance lainnya, dan pada langkah kedua - direktori yang sesuai di-mount pada client container.

Dan untuk memastikan pengalaman terbaik saat memanfaatkan fitur ini, disediakan stack [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>) yang berdedikasi. Ini memiliki sejumlah manfaat untuk penyimpanan data dibandingkan dengan jenis container lainnya, seperti software yang sudah terpasang sebelumnya dan jumlah ruang disk yang dialokasikan diperbesar. Selain itu, setiap node di platform dapat diperlakukan sebagai server data storage, termasuk container Docker kustom, di mana integrasi seperti ini diimplementasikan berdasarkan fungsionalitas [volumes](<https://docs.dewacloud.com/docs/container-volumes/>).

Dengan Data Storage Container Anda mendapatkan berbagai peluang untuk memperbaiki struktur filesystem proyek Anda, membuatnya lebih andal dan dapat dikonfigurasi. Untuk mengetahui lebih lanjut, beralih ke dokumen yang terhubung di bawah ini, di mana kami mempertimbangkan secara detail jenis penyimpanan apa yang tersedia di platform dan untuk jenis data apa yang paling cocok:

  * [Local filesystem](<https://docs.dewacloud.com/docs/local-filesystem-storage/>)
  * [Master container](<https://docs.dewacloud.com/docs/master-container-storage/>)
  * [Compound container](<https://docs.dewacloud.com/docs/compound-container-storage/>)
  * [Dedicated container](<https://docs.dewacloud.com/docs/dedicated-storage/>)
  * [External server](<https://docs.dewacloud.com/docs/external-nfs-storage/>)

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)
  * [External NFS Server Configuration](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)
