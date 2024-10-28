---
sidebar_position: 1
slug: /local-filesystem-storage
title: Local Filesystem
---

# Penyimpanan Data di Sistem File Lokal

Jenis penyimpanan ini digunakan untuk menyimpan data yang perlu dipertahankan selama siklus hidup container, tetapi tidak perlu dibagikan di antara node lainnya. Jika diibaratkan, ini pada dasarnya adalah semacam folder yang Anda buat di dalam server. Biasanya, tidak disebutkan bahwa data yang dikandung oleh folder semacam itu harus dipertahankan selama berbagai proses pemeliharaan. Namun, dalam lingkup [Dukungan Standar Docker](<https://docs.dewacloud.com/docs/container-types/>) di platform tersebut, membuat volume lokal di dalam container semacam itu merupakan cara yang sangat efisien untuk melindungi data Anda (mis. selama operasi [redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/use-case/local-filesystem/01-local-filesystem-storage.png" alt="local filesystem storage" width="10%"/>

Di antara keuntungan utama dari jenis penyimpanan sistem file lokal ini, dapat diakui sebagai kesederhanaan pengendalian data dan ketersediaannya secara penuh secara lokal (karena tidak ada masalah jaringan yang dapat mempengaruhi aksesibilitasnya). Penyimpanan semacam ini dapat digunakan, misalnya, untuk menyimpan file log, yang tidak ingin Anda hapus, atau untuk file konfigurasi load balancer Anda, agar tidak kehilangan struktur penghubung node yang ada.

## Pelajari cara:[![](#)](<https://docs.dewacloud.com/docs/local-filesystem-storage/#learn-how-to>)

  * Menambahkan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) untuk mengakses data dalam folder jarak jauh
  * [Ekspor data](<https://docs.dewacloud.com/docs/storage-exports/>) dari satu node ke node lainnya
  * Menyimpan data dalam [master layer container](<https://docs.dewacloud.com/docs/master-container-storage/>)