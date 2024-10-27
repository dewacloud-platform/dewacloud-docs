---
sidebar_position: 1
slug: /postgresql-auto-clustering
title: Auto-Clustering
---
# PostgreSQL Database Replication

**Replication** adalah teknologi mendasar untuk server database karena downtime atau kehilangan data dapat mengakibatkan berkurangnya aksesibilitas, produktivitas, dan kepercayaan produk. Menggunakan replikasi data dari primary ke satu atau lebih server standby mengurangi kemungkinan kehilangan data. Dengan PostgreSQL, Anda dapat dengan mudah membuat cluster database dengan topologi **Primary-Secondary** (sebelumnya dikenal sebagai master-slave replication) dengan satu atau lebih server standby.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-1.png" alt="PostgreSQL cluster primary-secondary scheme" width="50%"/>

Menggunakan data WAL (Write-Ahead Logging) adalah cara tercepat yang tersedia untuk replikasi dengan kinerja tinggi, yang disebut **asynchronous replication**. Dalam kasus ini, server database primary bekerja dalam mode archiving, hanya menulis file WAL ke penyimpanan dan menyebarkannya ke server database standby yang beroperasi dalam mode recovery. File-file ini ditransfer ke server database standby segera setelah penulisan selesai.

Mari kita lihat bagaimana cluster database Primary-Secondary PostgreSQL dapat diinstal dan dikonfigurasi.

## Creating PostgreSQL Primary-Secondary Cluster{#creating-postgresql-primary-secondary-cluster}

Platform menyediakan dua cara otomatis untuk mendapatkan cluster PostgreSQL:

  * [Pre-Packaged Marketplace Solution](<https://docs.dewacloud.com/docs/#pre-packaged-marketplace-solution>)
  * [Topology Wizard Auto-Clustering](<https://docs.dewacloud.com/docs/#topology-wizard-auto-clustering>)

### Pre-Packaged Marketplace Solution{#pre-packaged-marketplace-solution}

Cara tercepat dan paling sederhana untuk membuat cluster PostgreSQL adalah dengan menggunakan solusi yang telah dikemas dari [marketplace](<https://docs.dewacloud.com/docs/marketplace/>).

1\. Klik tombol **Marketplace** di pojok kiri atas dashboard dan cari paket _**PostgreSQL Primary-Secondary Cluster**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-2.png" alt="marketplace PostgreSQL cluster" width="100%"/>

Arahkan ke solusi tersebut dan klik **Install** untuk melanjutkan.

2\. Di dalam dialog yang terbuka, Anda dapat memilih versi PostgreSQL yang diinginkan dan mengaktifkan load balancers Pgpool-II.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-3.png" alt="PostgreSQL cluster installation" width="100%"/>

3\. Tunggu beberapa menit hingga platform mempersiapkan environment Anda dan mengatur konfigurasi replikasi yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-4.png" alt="PostgreSQL cluster successful installation" width="70%"/>

Setelah selesai, Anda akan menerima notifikasi yang sesuai dengan data untuk mengakses antarmuka administrasi PostgreSQL (juga dikirim melalui email).

### Topology Wizard Auto-Clustering{#topology-wizard-auto-clustering}

Cluster database PostgreSQL dapat diaktifkan melalui fitur **Auto-Clustering** yang tertanam di dashboard. Fitur ini menyediakan lebih banyak opsi kustomisasi dibandingkan opsi marketplace, namun tetap mengotomatisasi semua proses konfigurasi.

1\. Buka wizard [topology environment](<https://docs.dewacloud.com/docs/setting-up-environment/>), pilih stack software _**PostgreSQL**_ dan aktifkan switch **Auto-Clustering** khusus. Jika diperlukan, Anda dapat mengaktifkan load balancer _Pgpool-II_ untuk cluster Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-5.png" alt="PostgreSQL auto-clustering" width="100%"/>

Selanjutnya, Anda dapat sepenuhnya memanfaatkan kekuatan kustomisasi wizard untuk mengubah jumlah node per lapisan, mengalokasikan sumber daya tambahan, menambahkan stack software lain ke environment Anda, dll.

2\. Jika sudah siap, klik **Create** dan tunggu beberapa menit hingga platform membuat environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-6.png" alt="PostgreSQL cluster environment" width="100%"/>

## Managing PostgreSQL Cluster{#managing-postgresql-cluster}

Di bawah ini, kami menyediakan beberapa informasi bermanfaat tentang manajemen cluster PostgreSQL:

  * [Cluster Entry Point](<https://docs.dewacloud.com/docs/#cluster-entry-point>)
  * [Cluster Admin Panels](<https://docs.dewacloud.com/docs/#cluster-admin-panels>)
  * [Primary PostgreSQL Configuration](<https://docs.dewacloud.com/docs/#primary-postgresql-configuration>)
  * [Configuring Standby](<https://docs.dewacloud.com/docs/#configuring-standby>)
  * [Replication Check](<https://docs.dewacloud.com/docs/#replication-check>)
  * [Automatic Failover Scenario](<https://docs.dewacloud.com/docs/#automatic-failover-scenario>)
  * [Manual Failover Scenario](<https://docs.dewacloud.com/docs/#manual-failover-scenario>)

### Cluster Entry Point{#cluster-entry-point}

Jika node Pgpool-II tidak ditambahkan ke topologi cluster, gunakan node Primary untuk mengakses cluster. Jika lapisan load balancing diterapkan di depan cluster database, Anda dapat menggunakan salah satu node Pgpool-II sebagai entry point.

### Cluster Admin Panels{#cluster-admin-panels}

Di PaaS, komponen cluster PostgreSQL dapat dikelola melalui [CLI](<https://docs.dewacloud.com/docs/ssh-access/>) atau UI.

  * **Database Management**

Node database memiliki panel administrasi manajemen bawaan phpPgAdmin. Gunakan hanya pada node Primary.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-7.png" alt="phpPgAdmin panel" width="100%"/>

Jika diperlukan, node terpisah dapat diinstal dengan software manajemen database PostgreSQL yang lebih canggih [pgAdmin4](<https://www.pgadmin.org/>) melalui impor [manifest](<https://github.com/jelastic-jps/pgadmin/blob/master/manifest.yaml>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-8.png" alt="pgAdmin panel" width="100%"/>

  * **Pgpool-II Management**

Node Pgpool-II juga dapat dikelola melalui panel administrasi bawaan yang ramah pengguna [pgpoolAdmin](<https://www.pgpool.net/docs/pgpoolAdmin/index_en.html>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-9.png" alt="pgpoolAdmin panel" width="100%"/>

Panel admin Pgpool-II menyediakan kemampuan untuk menyesuaikan:

  * load balancing dan distribusi pada level database (bagaimana permintaan ke setiap database harus diproses dan diatur keseimbangannya)
  * connection pools
  * logging
  * replication
  * debugging
  * failover dan failback

### Primary PostgreSQL Configuration{#primary-postgresql-configuration}

Mari kita lihat parameter konfigurasi node primary yang digunakan dalam auto-clustering.

1\. Temukan environment dengan database primary di daftar environment Anda. Klik tombol **Config** di sebelah node PostgreSQL Primary.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-10.png" alt="PostgreSQL nodes config" width="100%"/>

2\. Buka direktori **conf** dan navigasikan ke file _**postgresql.conf**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-11.png" alt="PostgreSQL conf settings" width="100%"/>

Baris-baris berikut terkait dengan file WAL dapat diubah jika diperlukan:

```
wal_level = hot_standby
max_wal_senders = 10
archive_mode = on
archive_command = 'cd .'
```

Dimana:

  * Parameter **wal_level** menentukan seberapa banyak informasi yang ditulis ke WAL. Ada tiga nilai yang memungkinkan:
    * _minimal_ \- hanya menyimpan informasi yang diperlukan untuk memulihkan dari kegagalan atau shutdown darurat.
    * _replica_ \- nilai default, yang menulis cukup data untuk mendukung WAL archiving dan replication, termasuk menjalankan query read-only di server standby. Dalam rilis sebelum 9.6, nilai _archive_ dan _hot_standby_ diizinkan untuk parameter ini. Di rilis yang lebih baru, mereka dapat diterima tetapi dipetakan ke replica.
    * _logical_ \- nilai ini menambahkan informasi yang diperlukan untuk mendukung logical decoding ke level logging replica.
  * **max_wal_senders** mengatur jumlah maksimum proses transfer WAL yang berjalan secara bersamaan.
  * **archive_mode** memungkinkan WAL archiving bersama dengan parameter **wal_level** (semua nilai memungkinkan archiving kecuali nilai _minimal_).
  * **archive_command** \- perintah shell lokal yang akan dijalankan untuk mengarsipkan segmen WAL yang selesai. Secara default, ini tidak melakukan apa-apa dengan menjalankan ‘ _**cd .**_ ' yang berarti pengarsipan sebenarnya dinonaktifkan. Anda dapat mencoba mengubahnya sebagai berikut untuk menyalin arsip WAL ke direktori tujuan yang Anda inginkan (misalnya _**/tmp/mydata**_):

```
archive_command = 'test ! -f /var/lib/pgsql/data/pg_wal/%f && cp %p /tmp/mydata/%f'
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-12.png" alt="PostgreSQL conf archive command" width="100%"/>

Tekan tombol **Save** di atas editor.

3\. Buka file konfigurasi _**pg_hba.conf**_. Koneksi database standby diizinkan dengan menyatakan parameter berikut:

```
host replication all {standby_IP_address}/32 trust
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-13.png" alt="pg-hba.conf settings" width="100%"/>

Itu saja untuk primary! Mari lanjutkan ke konfigurasi server standby.

### Configuring Standby{#configuring-standby}

Mari kita periksa file konfigurasi pada node Secondary. Ada tiga opsi yang membedakan secondary dari primary:

1\. Buka file _**postgresql.conf**_, temukan bagian _Standby Servers_. Seperti yang Anda lihat, server ini bertindak sebagai standby karena parameter _**hot_standby**_ diatur _**on**_, tidak seperti node primary di mana parameter ini dikomentari.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-14.png" alt="PostgreSQL primary configs" width="100%"/>

2\. Gulir ke akhir file konfigurasi. Terdapat parameter **primary_conninfo** yang menentukan string koneksi yang akan digunakan server standby untuk terhubung ke server pengirim. String koneksi harus menunjukkan nama host (atau alamat) dari server pengirim, serta nomor port. Nama pengguna yang sesuai dengan peran dengan hak istimewa yang sesuai di server pengirim juga disediakan. Password juga harus ditentukan di _primary_conninfo_ atau di file ~/.pgpass terpisah di server backup jika pengirim mem

erlukan autentikasi password.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-15.png" alt="PostgreSQL secondary configs" width="100%"/>

3\. Opsi terakhir yang membuat server database sebagai secondary adalah ketersediaan file **standby.signal**, yang menunjukkan bahwa server harus dimulai sebagai hot standby. File ini harus terletak di direktori data PostgreSQL dan dapat kosong atau berisi informasi apa pun. Setelah secondary dipromosikan menjadi primary, file ini akan dihapus.

:::warning
Ingatlah bahwa sebagian besar opsi yang diubah memerlukan server untuk di-restart. Ini dapat dilakukan dengan dua cara:
1. Dari dashboard Anda dapat merestart salah satu atau kedua node.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-16.png" alt="restart node1" width="100%"/>
2. Melalui antarmuka baris perintah via Web SSH client. Untuk melakukannya, klik tombol Web SSH di node yang diperlukan, misalnya secondary.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-17.png" alt="restart node2" width="100%"/>
Dan keluarkan perintah untuk merestart server database:
```bash
sudo service postgresql restart
```
:::

### Replication Check{#replication-check}

1\. Buka panel **phpPgAdmin** untuk database **primary** Anda dengan mengklik tombol **Open in Browser** di sebelahnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-18.png" alt="PostgreSQL open in browser" width="100%"/>

2\. Masuk dengan kredensial database yang telah Anda terima melalui email sebelumnya dan buat database baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-19.png" alt="phpPgAdmin create database" width="100%"/>

3\. Kemudian, Anda harus membuka panel admin dari server database **standby** Anda (dengan cara yang sama seperti primary) dan memeriksa apakah database baru berhasil direplikasi atau tidak.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-20.png" alt="replicated secondary database" width="100%"/>

### Automatic Failover Scenario{#automatic-failover-scenario}

Fitur _**automatic failover**_ untuk cluster PostgreSQL diimplementasikan dengan bantuan node _Pgpool-II_ dan tidak tersedia untuk topologi tanpa itu ([konfigurasi manual](<https://docs.dewacloud.com/docs/#manual-failover-scenario>) diperlukan). Node load balancing secara otomatis mendeteksi jika database primary down dan mempromosikan salah satu secondary yang tersedia. Setelah node yang bermasalah kembali, node tersebut akan secara otomatis ditambahkan kembali ke cluster (sebagai secondary) dengan semua data yang hilang dipulihkan menggunakan utilitas _pg_rewind_.

### Manual Failover Scenario{#manual-failover-scenario}

PostgreSQL tidak memiliki skenario failover otomatis native untuk cluster database. Di sisi lain, terdapat banyak solusi pihak ketiga yang dapat digunakan untuk memastikan high-availability untuk sistem Anda. Anda juga dapat membuat solusi sendiri untuk mengatasi kegagalan cluster database Anda. Banyak situasi kegagalan cluster yang mungkin terjadi dalam kehidupan nyata. Di sini kami mempertimbangkan hanya satu alur kerja yang paling umum yang dapat membantu Anda mengotomatiskan skenario failover.

Topologi default terdiri dari dua node:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-21.png" alt="PostgreSQL primary-secondary scheme" width="50%"/>

Begitu node primary gagal, node secondary harus dipromosikan menjadi primary baru. Ini dapat dilakukan dengan utilitas _pg_ctl_ yang digunakan untuk menginisialisasi, memulai, menghentikan, atau mengontrol server PostgreSQL. Untuk melakukan ini, masuk ke server standby melalui Web SSH dan keluarkan perintah sebagai berikut:

```
/usr/pgsql-12/bin/pg_ctl promote -D /var/lib/pgsql/data
```

Dimana _/var/lib/pgsql/data_ adalah direktori data database.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-22.png" alt="promote secondary PostgreSQL node" width="100%"/>

Begitu database secondary dipromosikan menjadi primary, Anda harus mengubah string koneksi aplikasi Anda agar mengubah entry point cluster database ke hostname atau alamat IP baru.

Proses failover dapat mengandalkan utilitas **pg_isready** yang mengeluarkan pemeriksaan koneksi ke database PostgreSQL.

Anda dapat membuat script sederhana yang memeriksa ketersediaan server database primary dan mempromosikan standby jika terjadi kegagalan primary. Jalankan script melalui [crontab](<https://en.wikipedia.org/wiki/Cron>) di node secondary dengan interval yang sesuai. Script dapat terlihat seperti di bawah ini. Mari kita sebut sebagai _**failover.sh**_ :

```bash
#!/bin/bash
primary="172.25.2.22"
secondary="172.25.2.31"
status=$(/usr/pgsql-12/bin/pg_isready -d postgres -h $primary)
response="$primary:5432 - no response"
if [ "$status" == "$response" ]
then
/usr/pgsql-12/bin/pg_ctl promote -D /var/lib/pgsql/data
echo "Secondary promoted to new Primary. Change your app connection string to new Primary address $secondary"
else
echo "Primary is alive. Nothing to do."
fi
```

Setelah script dipicu oleh promosi secondary ke primary, output script harus terlihat seperti:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-23.png" alt="PostgreSQL failover script" width="100%"/>

Sekarang database Anda kembali berfungsi dan siap untuk menangani permintaan baca/tulis dengan alamat primary baru.

#### Cluster Restoration{#cluster-restoration}

Dengan alamat primary baru, Anda dapat dengan mudah menghindari penyesuaian string koneksi aplikasi Anda dengan mengubah alamat IP dari database primary. Untuk melakukan ini, Anda harus meletakkan [load balancer](<https://docs.dewacloud.com/docs/#automatic-failover-scenario>) di depan cluster yang akan memantau status komponennya dan mengarahkan lalu lintas ke primary saat ini. Di bawah ini, kami akan menunjukkan cara memulihkan topologi cluster asli sehingga tidak diperlukan perubahan di frontend.

Alasan lain topologi harus dipulihkan terkait dengan memastikan kemampuan scaling dari cluster. Hanya topologi asli yang dapat di-scale in/out secara horizontal.

Mari kita lihat bagaimana melakukan pemulihan cluster database PostgreSQL setelah primary sebelumnya terputus dari cluster dan secondary sebelumnya dipromosikan menjadi primary.

Jadi, tugasnya adalah: primary yang terputus harus menjadi primary sebenarnya dan primary saat ini (secondary sebelumnya) harus menjadi secondary sebenarnya.

Data awalnya adalah:

  * Cluster database terdiri dari dua node primary (_IP: 172.25.2.22_) dan secondary (_IP: 172.25.2.31_).
  * Node primary mengalami down dan database primary dihentikan.
  * Database standby dipromosikan ke peran primary.
  * Sekarang secondary menahan operasi baca/tulis.
  * Node primary sebelumnya telah diperbaiki dan siap untuk diperkenalkan kembali ke replikasi sebagai primary.

Lakukan langkah-langkah berikut untuk mendapatkan cluster dengan topologi awal:

1\. Masuk ke node primary sebelumnya melalui Web SSH dan keluarkan perintah:

```
rm -rf /var/lib/pgsql/data/*
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-24.png" alt="cleanup on primary" width="100%"/>

2\. Tambahkan alamat IP primary sebelumnya 172.22.2.22 ke **pg_hba.conf** di node primary saat ini:

```
host replication replication 172.22.2.22/32 trust
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-25.png" alt="add IP to pg-hba" width="100%"/>

Restart database primary saat ini untuk menerapkan perubahan:

```
sudo service postgresql restart
```

3\. Masuk ke node primary sebelumnya melalui Web SSH dan keluarkan perintah:

```
pg_basebackup -U replication -h 172.25.2.31 -D /var/lib/pgsql/data -Fp -Xs -P -R
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-26.png" alt="replicate data to primary" width="100%"/>

Dimana:

  * _[pg_basebackup](<https://www.postgresql.org/docs/current/app-pgbasebackup.html>)_ \- digunakan untuk mengambil base backup dari cluster database PostgreSQL yang sedang berjalan.
  * _172.25.2.31_ \- alamat IP node primary saat ini.
  * _/var/lib/pgsql/data_ \- direktori data PostgreSQL.

4\. Pastikan alamat IP dalam parameter _**host**_ yang dijelaskan di langkah kedua dari [Configuring Standby](<https://docs.dewacloud.com/docs/#configuring-standby>) berisi alamat IP primary sebelumnya yang benar.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-27.png" alt="recheck primary connection info" width="100%"/>

5\. Buat file _**standby.signal**_ di primary saat ini:

```
touch /var/lib/pgsql/data/standby.signal
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-28.png" alt="create standby.signal file" width="100%"/>

Dan restart node untuk mendapatkan database secondary baru:

```
sudo service postgresql restart
```

Hapus file _standby.signal_ di primary sebelumnya:

```
rm /var/lib/pgsql/data/standby.signal
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-29.png" alt="remove standby.signal file" width="100%"/>

Dan restart node untuk mendapatkan database primary baru:

```
sudo service postgresql restart
```

6\. Terakhir, untuk mencapai status recovery yang konsisten untuk kedua database primary dan standby, restart akhir diperlukan yang dapat dilakukan melalui dashboard sebagai berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/high-availability-cluster/auto-clustering/auto-clustering-30.png" alt="restart PostgreSQL nodes again" width="100%"/>

Setelah proses restart selesai, cluster kembali ke topologi asli dan dapat di-scale secara horizontal.

## Baca Juga{#whats-next}

  * [Java Connection to PostgreSQL](<https://docs.dewacloud.com/company/blog/java-connection-to-postgresql/>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-for-php/>)
  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres/>)