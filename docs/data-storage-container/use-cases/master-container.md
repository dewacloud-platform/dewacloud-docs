---
sidebar_position: 2
slug: /primary-container-storage
title: Primary (Master) Container
---

# Penyimpanan Data di Master Container

Jenis penyimpanan data dengan master container menjadi paling efisien ketika Anda tidak perlu mengekspor file pada lingkungan yang berbeda tetapi perlu berbagi data Anda dalam batas satu lapisan node.

Dalam kasus seperti ini, Anda tidak memerlukan container penyimpanan terpisah dan dapat menggunakan node awal (master) dari lapisan tersebut sebagai server penyimpanan Anda. Misalnya, jika aplikasi Anda menggunakan sejumlah kumpulan gambar pada node kompute, Anda cukup berbagi folder untuk seluruh lapisan. Ini memastikan ketersediaan konten yang sama di semua container dan, pada saat yang sama, menghilangkan kebutuhan untuk menyinkronkan dan menyimpan salinan data ini di setiap node.


<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/use-case/master-container/01-master-container-storage.png" alt="master container storage" width="30%"/>

Dengan cara ini, Anda menghilangkan duplikasi data, mengurangi konsumsi ruang disk, yang juga mengurangi biaya lingkungan secara keseluruhan. Selain itu, karena node Penyimpanan terpisah tidak digunakan di sini (karena semuanya disimpan dalam master container lapisan), tidak ada elemen lingkungan tambahan (dan dengan demikian dana) yang diperlukan untuk menerapkan struktur ini.

## Pelajari cara:[![](#)](<https://docs.dewacloud.com/docs/primary-container-storage/#learn-how-to>)

  * Menambahkan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) untuk mengakses data dalam folder jarak jauh
  * [Eksport data](<https://docs.dewacloud.com/docs/storage-exports/>) dari satu node ke node lainnya
  * Menjaga file tetap aman dalam [sistem file container lokal](<https://docs.dewacloud.com/docs/local-filesystem-storage/>)
  * Menetapkan [peran penyimpanan tambahan](<https://docs.dewacloud.com/docs/compound-container-storage/>) untuk setiap container