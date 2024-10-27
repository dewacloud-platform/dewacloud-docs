---
sidebar_position: 1
slug: /db-auto-clustering
title: Auto-Сlustering
---
# MariaDB/MySQL/Percona Auto-Сlustering

Klasterisasi basis data adalah persyaratan wajib untuk aplikasi produksi dengan beban tinggi untuk memastikan ketersediaan data dan kinerja tinggi. Namun, konfigurasi klaster yang andal bukanlah tugas yang sepele bahkan untuk pengembang dan administrator sistem yang berpengalaman. Untuk memecahkan masalah ini, platform memperkenalkan klasterisasi bawaan untuk MariaDB/MySQL/Percona agar aplikasi sangat tersedia secara default.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-1.png" alt="MySQL MariaDB Percona scheme" width="50%"/>

Solusi yang diimplementasikan memberikan serangkaian manfaat:

  * **ketersediaan tinggi dengan opsi replikasi yang sudah dikonfigurasi sebelumnya** - Primary-Secondary, Primary-Primary, Galera, XtraDB
  * **skalabilitas dan penemuan otomatis** – node baru, ditambahkan selama [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>), terhubung ke klaster dengan semua penyesuaian yang diperlukan diterapkan secara otomatis
  * **load balancing yang efisien** – setiap klaster dilengkapi dengan dua node ProxySQL untuk load balancing dengan pemisahan otomatis permintaan baca/tulis
  * **failover otomatis** – node basis data yang sementara tidak tersedia atau memiliki latensi tinggi secara otomatis dikeluarkan dari klaster dan ditambahkan kembali setelah koneksi dipulihkan

Semua manfaat ini dapat dicapai hanya dengan beberapa klik di dalam wizard topologi. Jelajahi langkah-langkah di bawah ini untuk mengaktifkan [auto-clustering untuk database MariaDB/MySQL/Percona Anda](<https://github.com/jelastic-jps/mysql-cluster>) di PaaS.

## Enable Automatic Clustering for Databases{#enable-automatic-clustering-for-databases}

Klik **New Environment** di dashboard dan pilih basis data **MariaDB/MySQL/Percona**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-2.png" alt="new environment" width="100%"/>

Aktifkan tombol **Auto-Clustering**. Hasilnya, dropdown dengan berbagai skema replikasi akan muncul:

  * **MariaDB** - Primary-Secondary, Primary-Primary, dan Galera
  * **MySQL** - Primary-Secondary dan Primary-Primary
  * **Percona** - Primary-Secondary, Primary-Primary, dan XtraDB

## Auto-Clustering Options{#auto-clustering-options}

Pilih jenis replikasi yang Anda inginkan, tambahkan jumlah node yang diperlukan.

### Highly Available ProxySQL Load Balancer{#highly-available-proxysql-load-balancer}

Setiap solusi klastering otomatis MariaDB/MySQL/Percona memiliki dua node ProxySQL yang diaktifkan secara default di depan klaster basis data. Jika diperlukan, Anda dapat mengecualikan mereka dari topologi klaster sebelum instalasi dengan saklar yang sesuai. Ingatlah bahwa Anda tidak akan dapat melakukannya setelahnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-3.png" alt="auto-clustering ProxySQL" width="70%"/>

### Database Cluster Access Credentials{#database-cluster-access-credentials}

Selama pembuatan klaster, platform secara otomatis menghasilkan kredensial akses basis data, tetapi Anda dapat mengubahnya dengan kredensial Anda sendiri dalam tiga langkah sederhana:

1\. Klik tombol **Variables**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-4.png" alt="database variables" width="100%"/>

2\. Kemudian tekan **Add** untuk menyediakan kredensial basis data pengguna khusus melalui dua variabel **DB_USER** dan **DB_PASS** sebagai berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-5.png" alt="add variables" width="100%"/>

3\. Tekan **Apply** dan kredensial kustom akan dikirimkan melalui email kepada Anda setelah instalasi klaster berhasil sebagai akses ke **PHP MyAdmin at Primary Node** dan **Entry Point** klaster basis data.

### Cluster Horizontal Scaling{#cluster-horizontal-scaling}

Jika Anda memutuskan untuk memperkecil topologi _primary-secondary/primary-primary_ dengan node basis data tambahan, itu akan dibuat melalui penggandaan node sekunder yang ada. Setelah prosedur penggandaan selesai, basis data pada anggota klaster baru menangkap data melalui pemutaran ulang [binlog](<https://dev.mysql.com/doc/internals/en/binary-log-overview.html>). Algoritma semacam itu menjamin binlog tidak akan kedaluwarsa dan penskalaan horizontal memakan waktu singkat.

### Cluster Layers Isolation{#cluster-layers-isolation}

Tergantung apakah Anda akan menggunakan aplikasi eksternal atau tidak, Anda dapat memutuskan [layer](<https://docs.dewacloud.com/docs/paas-components-definition/#layer>) mana yang akan diekspos ke luar - semuanya atau hanya layer proxy entry point. Putar switch [SLB access](<https://docs.dewacloud.com/docs/shared-load-balancer/#deny-access-via-shared-load-balancer>) ke posisi yang diperlukan untuk setiap layer dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-6.png" alt="database access via SLB" width="100%"/>

Itu saja! Tidak ada konfigurasi yang diperlukan, klaster siap digunakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-7.png" alt="database auto-cluster" width="100%"/>

## Database Cluster Access Information{#database-cluster-access-information}

Setelah instalasi berhasil, Anda akan menerima sejumlah email dengan informasi klaster:

  * **PHP MyAdmin at Primary Node** - antarmuka administrasi web dengan kredensial untuk mengakses server basis data untuk manajemen interaktif.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-8.png" alt="access phpMyAdmin" width="100%"/>

  * **Entry Point for Connections to Database Cluster** - [hostname dan kredensial untuk menghubungkan](<https://docs.dewacloud.com/docs/container-dns-hostnames/#hostnames-for-specific-layers>) aplikasi ke klaster basis data. Node-node ini membentuk layer proxy yang disebut sebagai titik masuk untuk klaster basis data dengan hostname sebagai berikut: _**proxy.$\{envName\}.$\{platformDomain\}**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-9.gif" alt="ProxySQL DB replication" width="100%"/>

:::warning
Jika Anda akan membuat dan menggunakan akun pengguna khusus setelah instalasi klaster, Anda harus menambahkannya ke tabel mysql_users pada setiap node ProxySQL, jika tidak, Anda tidak akan dapat menghubungkan ke basis data melalui layer proxy. Untuk melakukannya, keluarkan perintah di bawah ini:  
12$ MYSQL_PWD=admin mysql -h 127.0.0.1 -P6032 -uadmin -e "INSERT INTO mysql_users (username,password,default_hostgroup) VALUES (\<username\>, \<password\>, 2);"  
$ MYSQL_PWD=admin mysql -h 127.0.0.1 -P6032 -uadmin -e "LOAD MYSQL USERS TO RUNTIME; SAVE MYSQL USERS TO DISK;"  
Substituteandwith credentials of a newly created database account.
:::

  * **Cluster Orchestrator Panel** - kredensial untuk mengakses panel Orchestrator, yang ditujukan untuk manajemen klaster yang mudah. Gunakan kredensial yang diterima untuk mengakses panel admin dari [Orchestrator](<https://github.com/openark/orchestrator>) klaster yang terinstal pada node ProxySQL, yang memberikan kemungkinan untuk meninjau informasi topologi klaster: visualisasi topologi yang licin, masalah replikasi jika ada, distribusi baca/tulis, status pemeriksaan kesehatan dan penemuan otomatis node basis data yang baru ditambahkan, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-10.png" alt="MySQL MariaDB Percona scheme" width="100%"/>

## What Replication Type to Choose?{#what-replication-type-to-choose}

Mari kita pertimbangkan detail tentang setiap skema replikasi yang tersedia untuk basis data dalam platform untuk memahami mana yang paling sesuai untuk kebutuhan dan kasus penggunaan tertentu.

### Primary-Secondary MariaDB/MySQL/Percona Replication{#primary-secondary-mariadbmysqlpercona-replication}

_**Primary-secondary**_ replication adalah topologi yang paling umum digunakan, yang menyediakan konsistensi yang baik (yaitu tepat satu node untuk memodifikasi data), tetapi tidak ada failover otomatis pada kegagalan primer. Latensi tulis dalam replikasi asinkron rendah karena tulisannya direkam secara lokal oleh server primer sebelum menulis ke server sekunder. Ini memungkinkan untuk memindahkan pembacaan, memberikan kinerja tertinggi, karena menambahkan lebih banyak replika tidak memengaruhi latensi replikasi. Sekunder dapat dibaca tanpa dampak pada primer, memberikan keuntungan jelas seperti:

  * Kinerja tinggi untuk permintaan baca
  * Cadangan basis data dapat dilakukan tanpa dampak pada instans primer
  * Permintaan analitis dapat memuat instans sekunder saja (tanpa memengaruhi primer)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-11.png" alt="database cluster Primary-Secondary scheme" width="50%"/>

### Primary-Primary MariaDB/MySQL/Percona Replication{#primary-primary-mariadbmysqlpercona-replication}

Replikasi asinkron _**primary-primary**_ beroperasi dengan dua node primer secara bersamaan. Dibandingkan dengan solusi primary-secondary default, ini memiliki keuntungan pada penyeimbangan beban penulisan dan pemulihan yang lebih sederhana pada kegagalan satu node primer.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-12.png" alt="database cluster Primary-Primary scheme" width="50%"/>

Berbeda dengan pengaturan default, penskalaan klaster primary-primary mengarah pada penambahan sekunder ke klaster. Setelah dibuat, instans sekunder didistribusikan secara merata antara node primer yang memungkinkan distribusi beban kerja replikasi dengan lancar dan meningkatkan kapasitas _read_ klaster.

### MariaDB Galera and Percona XtraDB Clusters{#mariadb-galera-and-percona-xtradb-clusters}

Topologi _**Galera dan XtraDB clusters**_ adalah replikasi sinkron multi-primer yang dilakukan pada waktu komit transaksi, dengan menyiarkan set penulisan transaksi ke semua node klaster untuk diterapkan. Mereka memastikan penulisannya dikirim ke semua node di klaster sebelum penulisan ini benar-benar dikomit.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/auto-clustering/auto-clustering-13.png" alt="database cluster XtraDB Galera scheme" width="50%"/>

Aplikasi pengguna dapat mengirim pembacaan dan penulisan ke node mana pun di klaster, yang menyediakan kemampuan untuk memperluas transaksi baca dan tulis. Menambahkan node ke klaster sepenuhnya otomatis. Mengeluarkan node dari klaster hanya masalah menghapus yang tidak diperlukan atau gagal. Tidak perlu lagi menerapkan logika rumit untuk pemisahan pembacaan dan penulisan, potensi penskalaan dapat segera diimplementasikan tanpa perlu mengubah logika aplikasi. Galera dan XtraDB menawarkan perlindungan terbaik terhadap kehilangan data dan basis data yang tidak konsisten karena tidak ada penundaan dalam mereplikasi data. Jika salah satu node klaster gagal, aplikasi pengguna tidak akan melihatnya dan akan terus melayani pengguna menggunakan node lain yang mungkin juga berlokasi di pusat data lain.

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [MySQL/MariaDB/Percona Multi-Region Cluster](<https://docs.dewacloud.com/docs/mariadb-multi-region-cluster/>)
  * [Cluster Recovery Add-On](<https://docs.dewacloud.com/docs/db-cluster-recovery-addon/>)
  * [Backup/Restore Add-On](<https://docs.dewacloud.com/docs/db-backup-restore-addon/>)
  * [Corruption Diagnostic Add-On](<https://docs.dewacloud.com/docs/db-corruption-diagnostic-addon/>)