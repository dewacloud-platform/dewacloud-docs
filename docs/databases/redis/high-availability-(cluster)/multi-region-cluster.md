---
sidebar_position: 2
slug: /redis-multi-region-cluster
title: Multi-Region Cluster
---
# Redis Multi-Region Cluster

**Redis Multi-Region Cluster** adalah implementasi terdistribusi Redis yang sudah dikemas sebelumnya, di mana data dibagi antara node cluster di berbagai wilayah. Solusi ini memiliki tujuan sebagai berikut:

  * _Kinerja tinggi dan skalabilitas linier._ Tidak ada proxy (replikasi asinkron digunakan), dan tidak ada operasi penggabungan yang dilakukan pada nilai.
  * _Tingkat keamanan penulisan yang dapat diterima._ Sistem berusaha (dalam cara terbaik) untuk mempertahankan semua penulisan yang berasal dari klien yang terhubung dengan sebagian besar node utama. Biasanya, ada jendela kecil di mana penulisan yang diakui dapat hilang. Jendela untuk kehilangan penulisan yang diakui lebih besar ketika klien berada di partisi minoritas.
  * _Ketersediaan._ Redis Cluster dapat bertahan dari partisi di mana sebagian besar node utama dapat dijangkau, dan ada setidaknya satu salinan yang dapat dijangkau untuk setiap node utama yang tidak lagi dapat dijangkau. Selain itu, dengan menggunakan migrasi salinan, node utama yang tidak lagi direplikasi oleh salinan mana pun akan menerima satu dari node utama yang dilindungi oleh beberapa salinan.

## Topologi Cluster Database{#database-cluster-topology}

[Redis Multi-Region Cluster](<https://github.com/jelastic-jps/redis-multiregion>) terdiri dari kelompok node yang diterapkan ke berbagai wilayah (setidaknya tiga). Tergantung pada tingkat kinerja dan ketersediaan tinggi yang dibutuhkan, Anda dapat memilih antara dua opsi topologi:

  * **Kinerja Maksimum** – menyediakan kinerja maksimum dan skalabilitas horizontal

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-1.png" alt="Redis multi-region maximum performance" width="50%"/>

  * **Keandalan Maksimum** – memastikan ketersediaan yang sangat tinggi bahkan jika satu atau dua pusat data gagal, tetapi solusi ini tidak dapat diskalakan

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-2.png" alt="Redis multi-region maximum reliability" width="50%"/>

Kedua topologi menyediakan ketersediaan tinggi dan kemampuan failover secara out-of-box untuk cluster database Anda. Dalam kasus kegagalan node cluster, kedua topologi memastikan bahwa cluster database berfungsi tanpa waktu henti. Namun, topologi _**kinerja**_ dapat terus berfungsi meskipun satu atau dua _node_ gagal, sementara topologi _**keandalan**_ dapat pulih bahkan setelah satu atau dua _wilayah_ tidak tersedia.

## Instalasi Cluster{#cluster-installation}

1. Temukan aplikasi _**Multi-Region Redis Cluster**_ (bagian **Cluster** atau gunakan kolom **Pencarian**) di platform [Marketplace](<https://www.virtuozzo.com/application-platform-docs/marketplace/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-3.png" alt="Redis multi-region marketplace" max-width="100%"/>

2. Di jendela instalasi yang terbuka, tentukan data berikut:

  * **Versi** \- pilih versi Redis yang diinginkan
  * **Lingkungan** \- beri nama untuk [pengelompokan](<https://docs.dewacloud.com/docs/environment-groups/>) lingkungan cluster database Anda
  * **Buat kelompok lingkungan terpisah** – centang untuk [mengisolasi](<https://docs.dewacloud.com/docs/environment-isolation/#private-network-isolation>) kelompok lingkungan
  * **Aktifkan Alamat IP Eksternal untuk node cluster** – centang untuk menambahkan [IP publik](<https://docs.dewacloud.com/docs/public-ip/>) ke node cluster (tiga IP per wilayah), yang diperlukan jika klien Redis berada di luar platform
  * **Topologi** – pilih antara topologi _**Kinerja Maksimum**_ atau _**Keandalan Maksimum**_ (detail dapat ditemukan di bagian [Topologi Cluster](<https://docs.dewacloud.com/docs/#database-cluster-topology>) di atas)
  * **Wilayah** \- pilih wilayah platform di mana lingkungan cluster akan diterapkan. Untuk topologi _**Keandalan Maksimum**_, wilayah pertama akan menjadi tuan rumah server utama dan yang lainnya - database sekunder (salinan)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-4.png" alt="install Redis multi-region cluster" max-width="100%"/>

Klik **Instal** saat siap.

3. Proses instalasi dapat memakan waktu beberapa menit. Setelah selesai, Anda akan melihat jendela sukses dan menerima email dengan semua data yang sesuai, seperti detail titik masuk dan kredensial akses.

Untuk melihat semua lingkungan terkait dengan mudah, Anda dapat beralih ke kelompok yang ditentukan di langkah sebelumnya (_redismulti_ dalam kasus kami).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-5.png" alt="Redis cluster group" max-width="100%"/>

4. Titik masuk default untuk cluster multi-wilayah Anda adalah IP yang ditetapkan ke node cluster (yang utama lebih diutamakan). Juga, sangat disarankan agar perangkat lunak klien Anda mendukung mode cluster.

Jika opsi **Aktifkan Alamat IP Eksternal untuk node cluster** diaktifkan, silakan gunakan IP publik yang ditetapkan ke node cluster.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/multi-region-cluster/multi-region-cluster-6.png" alt="Redis multi-region cluster environments" max-width="100%"/>

## Baca Juga{#whats-next}

  * [Buat Server DB](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Ikhtisar Redis](<https://docs.dewacloud.com/docs/redis/>)
  * [Cluster Redis](<https://docs.dewacloud.com/docs/redis-cluster/>)