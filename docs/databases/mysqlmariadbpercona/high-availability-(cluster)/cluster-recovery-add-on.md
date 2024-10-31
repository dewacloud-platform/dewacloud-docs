---
sidebar_position: 5
slug: /db-cluster-recovery-addon
title: Cluster Recovery Add-On
---
# Database Cluster Recovery Add-On

Platform ini memiliki beberapa opsi clustering out-of-box yang populer untuk database MariaDB/MySQL, yang dapat diterapkan secara otomatis melalui fitur [auto-clustering](<https://docs.dewacloud.com/docs/auto-clustering/>). Cluster database semacam ini menawarkan ketersediaan tinggi dan skalabilitas otomatis yang canggih sambil tetap dapat diakses oleh pengguna mana pun melalui otomasi.

Untuk membuat solusi ini semakin menarik, platform ini menawarkan add-on diagnostik dan pemulihan gratis untuk membantu pemeliharaan database. Saat ini, add-on **Database Cluster Recovery** mendukung cluster database berikut:

  * **Primary-Secondary Cluster** berbasis stack MySQL/MariaDB/Percona
  * **Primary-Primary Cluster** berbasis stack MySQL/MariaDB/Percona
  * **Galera Cluster** berbasis stack MariaDB
  * **XtraDB Cluster** berbasis stack Percona

## Spesifik Add-On{#add-on-specifics}

Add-on **Database Cluster Recovery** dapat beroperasi dalam mode _diagnostic_ dan _recovery_. Yang pertama memindai database untuk mengidentifikasi apakah ada masalah, dan yang kedua mencoba menyelesaikan masalah berdasarkan informasi yang diperoleh.

Selama diagnostic, add-on memeriksa hal-hal berikut:

  * replikasi untuk topologi Primary-Secondary dan Primary-Primary
  * ukuran cluster untuk cluster Galera/XtraDB
  * status cluster Galera/XtraDB
  * status layanan cluster

Untuk melakukan operasi pemulihan yang diperlukan, add-on menerapkan penyesuaian berikut ke cluster database selama instalasi:

Seorang pengguna _replica_ ditambahkan untuk melakukan validasi cluster. Juga, pengguna ini digunakan dalam konfigurasi ProxySQL. Kredensial dapat dilihat melalui [environment variables](<https://docs.dewacloud.com/docs/environment-variables/>) berdedikasi:

  * **REPLICA_USER:** repl-xxxxxx
  * **REPLICA_PSWD:** xxxxxxxxxxxx

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-1.png" alt="replica user credentials" width="100%"/>

Selain itu, akses SSH dikonfigurasikan antara node database (dengan set kunci SSH khusus) untuk memungkinkan penyalinan data dengan _rsync_ selama prosedur pemulihan.

## Instalasi Add-On{#add-on-installation}

Add-on tersedia melalui platform Marketplace. Sebagai alternatif, Anda dapat mengimpor paket _**[Database Cluster Recovery](<https://github.com/jelastic-jps/mysql-cluster/tree/master/addons/recovery>)**_ yang sesuai dari GitHub.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-2.png" alt="database recovery add-on" width="100%"/>

Dalam jendela konfirmasi yang terbuka, berikan data yang diperlukan:

  * **User** dan **Password** \- kredensial pengguna admin database
  * **Environment name** \- pilih environment dengan cluster database yang diperlukan dari daftar
  * **Nodes** \- pilih lapisan dengan cluster database

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-3.png" alt="recovery add-on installation" width="100%"/>

Klik **Install** dan tunggu beberapa menit agar add-on terinstal. Ini akan muncul dalam daftar add-on dari lapisan yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-4.png" alt="recovery add-on actions" width="100%"/>

## Penggunaan Add-On{#add-on-usage}

Add-on dapat melakukan dua tindakan yang dapat dijalankan dengan mengklik tombol yang sesuai:

  * _**Cluster Diagnostic**_ \- mendeteksi masalah dengan cluster database (memindai apakah node dapat diakses dan database konsisten)
  * _**Cluster Recovery**_ \- mencoba menyelesaikan masalah umum untuk memulihkan operabilitas cluster

Hasil dari tindakan _**Cluster Diagnostic**_ dapat berupa “_Cluster is OK_” atau pemberitahuan dashboard “_Errors discovered_”.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-5.png" alt="recovery add-on diagnostic errors" width="60%"/>

Untuk detail yang lebih lengkap, Anda dapat mengklik tombol **Show Logs** untuk membuka file _**/var/log/db_recovery.log**_:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-6.png" alt="recovery add-on logs" width="100%"/>

Jika ada masalah yang ditemukan, Anda dapat mencoba menyelesaikannya secara otomatis dengan tindakan _**Cluster Recovery**_. Ini harus dapat menangani sebagian besar masalah dan sepenuhnya memulihkan operabilitas cluster:

:::warning
Kami merekomendasikan membuat backup dari database sebelum pemulihan.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/cluster-recovery-addon/cluster-recovery-addon-7.png" alt="successful recovery" width="60%"/>

Untuk detail tambahan atau jika terjadi kegagalan pemulihan, Anda dapat memeriksa [log](<https://docs.dewacloud.com/docs/log-files/>) _**db_recovery**_ yang disebutkan di atas. Juga, periksa panduan **[Manual Recovery](<https://github.com/jelastic-jps/mysql-cluster/blob/master/addons/recovery/docs/ManualRecoveryGuide.md#configuration-file-restoration>)** jika masalah tidak teratasi.

## Baca Juga{#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Galera Cluster Recovery](<https://docs.dewacloud.com/docs/galera-recovery/>)