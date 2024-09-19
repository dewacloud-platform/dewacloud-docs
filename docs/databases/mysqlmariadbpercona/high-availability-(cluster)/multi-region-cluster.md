---
sidebar_position: 4
slug: /mariadb-multi-region-cluster
title: Multi-Region Cluster
---
# MariaDB Multi-Region Cluster

**MariaDB Multi-Region Cluster** adalah solusi yang telah terkemas sebelumnya yang secara otomatis membuat cluster canggih yang sangat tersedia di atas stack templates yang dikelola platform.

## Database Cluster Topology{#database-cluster-topology}

Clustering [MariaDB Multi-Region](<https://github.com/jelastic-jps/mysql-multiregion>) didasarkan pada topologi Primary-Primary. Replikasi asinkronnya memungkinkan untuk mengimbangi pengaruh latensi pada commit transaksi. Implementasi semacam ini lebih cocok untuk kasus ketika daerah (pusat data) saling berjauhan secara signifikan.

Untuk pemulihan bencana, satu atau lebih node Sekunder dapat ditambahkan untuk deployment lintas-regional yang diperlukan. Misalnya, pada platform dengan tiga wilayah, topologi yang direkomendasikan adalah _Primary-Primary-Secondary_.

![MariaDB multi-region cluster](#)

Setiap server database atau node load balancer dalam topologi cluster dibuat dalam environment terpisah dengan lapisan [ProxySQL Load Balancer](<https://www.proxysql.com/>) di depan cluster untuk mendistribusikan permintaan antara node Primary. Setelah dibuat, environment semacam itu digabungkan ke dalam cluster multi-region.

Paket ini menyediakan ketersediaan tinggi dan failover out-of-box untuk cluster database. Ini dijamin pada tingkat pusat data - database tetap dapat diakses bahkan jika salah satu wilayah menjadi tidak tersedia. Jika salah satu wilayah Primary gagal, cluster akan tetap tersedia dan dapat menangani kueri _Read and Write_. Bahkan dalam kasus kedua wilayah Primary menjadi tidak tersedia, node Sekunder dapat digunakan untuk menangani permintaan _Read and Write_ tanpa kehilangan data. Namun, hal ini memerlukan pembaruan pengaturan entry point dalam aplikasi klien database (menggantikan hostname ProxySQL dengan hostname server database Sekunder).

## Cluster Installation{#cluster-installation}

1\. Temukan aplikasi _**MariaDB Multi-Region Cluster**_ (bagian **Clusters** atau gunakan kolom **Search**) di dalam platform [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>).

![MariaDB multi-region marketplace](#)

2\. Di jendela instalasi yang terbuka, tentukan data berikut:

  * **Regions** – pilih wilayah platform di mana environment cluster akan diterapkan. Perhatikan bahwa urutan wilayah penting, karena dua yang pertama akan memiliki Primary servers dan lainnya akan menjadi Sekunder
  * **Database version** – pilih versi MariaDB yang diinginkan
  * **Environment** – berikan nama untuk isolasi dan [pengelompokan](<https://docs.dewacloud.com/docs/environment-groups/>) lingkungan cluster database Anda
  * **Display Name** – tetapkan nama khusus untuk lingkungan cluster

![install MariaDB multi-region cluster](#)

Klik **Install** jika sudah siap.

3\. Proses instalasi bisa memakan waktu beberapa menit. Setelah selesai, Anda akan melihat jendela sukses dan menerima email dengan semua data yang sesuai, seperti detail entry point dan kredensial akses.

Untuk melihat semua environment yang terkait dengan mudah, Anda dapat beralih ke grup yang ditentukan pada langkah sebelumnya (_mdbcluster_ dalam kasus kami).

![MariaDB cluster group](#)

4\. Entry point cluster multi-region terdiri dari dua item (satu untuk setiap server Primary). Tautan mencakup nama cluster dan hostname ProxySQL. Jika kedua wilayah Primary down, gunakan hostname atau alamat IP dari node sekunder sebagai entry point.

![MariaDB multi-region cluster environments](#)

## Baca Juga{#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Remote Access to MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Dump Import/Export to MySQL/MariaDB](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>)
  * [Java Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql/>)
  * [PHP Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)