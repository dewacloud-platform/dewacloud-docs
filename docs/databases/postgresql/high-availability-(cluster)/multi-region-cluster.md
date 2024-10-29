---
sidebar_position: 2
slug: /postgresql-multi-region-cluster
title: Multi-Region Cluster
---
# PostgreSQL Multi-Region Cluster

**PostgreSQL Multi-Region Cluster** adalah solusi yang telah terkemas sebelumnya yang secara otomatis membuat cluster database canggih yang sangat tersedia di atas template stack yang dikelola platform.

## Database Cluster Topology{#database-cluster-topology}

Paket [PostgreSQL Multi-Region Cluster](<https://github.com/jelastic-jps/postgres-multiregion>) menggunakan satu-satunya topologi Cluster PostgreSQL yang didukung secara resmi - **Primary-Secondary**. Namun, satu node sekunder lagi ditambahkan untuk pemulihan bencana. Akibatnya, topologi akhir adalah _Primary-Secondary-Secondary_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/multi-region-cluster/multi-region-cluster-1.png" alt="PostgreSQL multi-region cluster" width="50%"/>

Selain itu, paket ini mencakup lapisan [Pgpool-II Load Balancer](<https://www.pgpool.net/mediawiki/index.php/Main_Page>) yang sangat tersedia untuk mendistribusikan permintaan dan mengelola topologi replikasi PostgreSQL.

Jumlah dari penerapan ini memastikan ketersediaan tinggi dan failover out-of-box untuk cluster database. Itu dijamin pada tingkat pusat data - database tetap dapat diakses bahkan jika salah satu wilayah menjadi tidak tersedia.

## Cluster Installation{#cluster-installation}

1\. Temukan aplikasi _**PostgreSQL Multi-Region Cluster**_ (bagian **Clusters** atau gunakan kolom **Search**) di dalam platform [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/multi-region-cluster/multi-region-cluster-2.png" alt="PostgreSQL multi-region marketplace" width="100%"/>

2\. Di jendela instalasi yang terbuka, tentukan data berikut:

  * **Version** \- pilih versi PostgreSQL yang diinginkan
  * **Environment** \- berikan nama untuk [pengelompokan](<https://docs.dewacloud.com/docs/environment-groups/>) lingkungan cluster database Anda
  * **Create separate environment group** – centang untuk [mengisolasi](<https://docs.dewacloud.com/docs/environment-isolation/#private-network-isolation>) grup lingkungan
  * **PostgreSQL Regions** \- pilih wilayah platform tempat lingkungan cluster akan diterapkan. Perhatikan bahwa urutan wilayah penting, karena yang pertama akan menjadi server Primary dan yang lainnya akan menjadi Sekunder
  * **Pgpool-II enabled** – aktifkan untuk menambahkan node penyeimbang beban, pemantauan, dan manajemen (_Pgpool-II_) di depan node database di setiap wilayah
  * **Pgpool regions** \- pilih wilayah platform tempat node penyeimbang beban akan diterapkan

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/multi-region-cluster/multi-region-cluster-3.png" alt="install PostgreSQL multi-region cluster" width="100%"/>

Klik **Install** ketika sudah siap.

3\. Proses instalasi bisa memakan waktu beberapa menit. Setelah selesai, Anda akan melihat jendela keberhasilan dan menerima email dengan semua data yang sesuai, seperti detail entry point dan kredensial akses.

Untuk dengan mudah melihat semua environment yang terkait, Anda dapat beralih ke grup yang ditentukan pada langkah sebelumnya (_pgcluster_ dalam kasus kami).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/multi-region-cluster/multi-region-cluster-4.png" alt="PostgreSQL cluster group" width="100%"/>

4\. Titik masuk default untuk cluster multi-region Anda adalah pemimpin node _Pgpool-II_ (yang diterapkan di wilayah pertama). Jika gagal, Anda dapat menggunakan node _Pgpool-II_ lainnya dengan menggunakan [hostname](<https://docs.dewacloud.com/docs/container-dns-hostnames/#hostnames-for-specific-containers>) atau alamat IP.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/multi-region-cluster/multi-region-cluster-5.png" alt="PostgreSQL multi-region cluster environments" width="100%"/>

Jika perangkat lunak klien Anda mendukung beberapa titik masuk, Anda dapat mengatur semuanya dalam string koneksi untuk memastikan failover otomatis.

## Baca Juga{#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres/>)
  * [Java Connection to PostgreSQL](<https://www.virtuozzo.com/company/blog/java-connection-to-postgresql/>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-php/>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-database-replication/>)
  * [Dump Import/Export to PostgreSQL](<https://docs.dewacloud.com/docs/dump-postgres/>)