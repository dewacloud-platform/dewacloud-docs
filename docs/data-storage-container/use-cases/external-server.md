---
sidebar_position: 5
slug: /external-server
title: External Server
---

# Penyimpanan Data di Server Eksternal

Mounting server eksternal ditujukan untuk membangun koneksi ke penyimpanan NAS third party, yang berbagi data melalui NFS. Dengan PaaS, proses integrasi relatif sederhana, karena Anda tidak perlu melakukan konfigurasi tambahan di sisi platform maupun penyimpanan.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/use-case/external-server/01-external-storage-server.png" alt="external storage server" width="12%"/>

Jadi, jika Anda memiliki server penyimpanan dengan konten yang telah terstruktur dengan baik, dengan opsi ini Anda dapat menghilangkan keharusan untuk menyalin atau mentransfernya ke mana pun - cukup mounting dan berbagi data di seluruh lapisan, lingkungan, atau bahkan instalasi PaaS yang multiple.

Sebaliknya, jika Anda baru merencanakan untuk membuat penyimpanan yang sangat kinerja dan andal, pertimbangkan untuk memanfaatkan [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>). Itu disediakan dengan semua software yang diperlukan yang sudah terpasang, sehingga Anda dapat [memanfaatkan penyimpanan tersebut](<https://docs.dewacloud.com/docs/dedicated-storage/>) segera setelah pembuatan tanpa konfigurasi tambahan yang diperlukan.

## Pelajari cara:[![](#)](<https://docs.dewacloud.com/docs/external-nfs-storage/#learn-how-to>)

  * Menambahkan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) untuk mengakses data dalam folder jarak jauh
  * [Ekspor data](<https://docs.dewacloud.com/docs/storage-exports/>) dari satu node ke node lainnya
  * Konfigurasi container sebagai [penyimpanan NFS eksternal](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)
  * Menggunakan [dedicated container](<https://docs.dewacloud.com/docs/dedicated-storage/>) untuk penyimpanan data