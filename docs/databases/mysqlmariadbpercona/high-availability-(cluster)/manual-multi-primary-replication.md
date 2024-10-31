---
sidebar_position: 3
slug: /multi-primary-replication
title: Manual Multi-Primary Replication
---
# Multi-Primary Replication untuk MySQL/MariaDB/Percona

Platform ini memungkinkan Anda untuk dengan mudah mengatur dua jenis replika database yang berbeda - **primary-secondary** dan **primary-primary** \- untuk menyelesaikan berbagai masalah performa, mendukung backup database, mengatasi kegagalan sistem, dan banyak lagi. Informasi tentang cara mengkonfigurasi master-slave replication untuk database MySQL Anda dapat ditemukan [di sini](<https://docs.dewacloud.com/docs/database-primary-secondary-replication/>).

Dan dalam tutorial ini kami akan menjelaskan cara mengkonfigurasi master-master (multi-master) replication di MySQL, khususnya untuk diterapkan pada environments. Proses ini cukup sederhana, tetapi membutuhkan perhatian pada beberapa detail penting.

Jadi, mari kita mulai!

## Buat Environments{#create-environments}

Hal pertama yang Anda butuhkan untuk mengkonfigurasi database replication adalah, setidaknya, dua server db. Mari buat dua environments dengan instansi MySQL.

1\. Masuk ke platform. Setelah dashboard Anda terbuka, klik pada **Create Environment** di panel atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-1.png" alt="create environment" width="60%"/>

2\. Dengan bantuan wizard topologi yang terbuka, atur environments berikut:

  * **the first master DB environment**

Tambahkan server aplikasi **Apache** dengan dukungan **PHP** dan database **MySQL**. Atur batas cloudlet untuk setiap container. Beri nama environment Anda (misalnya, _mysql-master-1_) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-2.png" alt="first master environment" max-width="100%"/>

  * **the second master DB environment**

Untuk membuat environment kedua (**master-mysql-2**) Anda akan diminta untuk mengulangi langkah-langkah pembentukan environment **master-mysql-1**.

Atau, Anda bisa [mengkloning](<https://docs.dewacloud.com/docs/clone-environment/>) environment pertama, dengan menyebutkan nama yang tepat dalam kolom yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-3.png" alt="multi master mysql replication clone environment" max-width="100%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-4.png" alt="master environments" max-width="100%"/>

3\. Perhatikan bahwa versi dan konfigurasi environments dapat bervariasi sesuai dengan kebutuhan Anda dan juga bergantung pada konfigurasi penyedia hosting Anda. Sebagai contoh, alih-alih menjalankan PHP Anda mungkin ingin menjalankan aplikasi Java atau Ruby. Namun demikian, referensi dalam artikel tersebut hanya boleh digunakan untuk mereplikasi server MySQL yang berjalan di platform ini.

:::note
Jika Anda ingin mereplikasi environments Anda antara penyedia hosting yang berbeda, Anda harus mengaktifkan alamat IP publik untuk node MySQL.
:::

## Konfigurasi First Master DB{#configure-the-first-master-db}

Sekarang bahwa server MySQL telah terinstal dan berjalan, kita perlu mengaturnya untuk replikasi.

1\. Mari mulai dengan **master-mysql-1**. Klik ikon MySQL **Config** untuk environment pertama Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-5.png" alt="config first MySQL" max-width="100%"/>

2\. Dalam Configuration manager yang terbuka, navigasikan ke file **/etc/my.cnf**, temukan string **#skip-networking** dan masukkan parameter berikut seperti di bawah ini:

```
server-id = 1 
binlog-do-db = example
binlog-do-db = teste
log-bin = /var/log/mysql/mysql-bin.log
auto_increment_increment= 1
auto_increment_offset = 1
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-6.png" alt="first skip networking configs" max-width="100%"/>

Mari kita tinjau secara detail apa yang sebenarnya kita konfigurasikan dengan opsi-opsi ini:

  * **server-id** - opsi umum yang digunakan oleh server replikasi untuk mengidentifikasi diri mereka sendiri. Harus unik untuk setiap server.
  * **bin-log-do-db = example** dan **bin-log-do-db = teste** - memberitahu server untuk membatasi pencatatan biner ke pembaruan untuk database yang ditentukan. Catatan: database ini belum boleh dibuat. Setelah Anda merasa nyaman dengan Multi-Master Replication Anda dapat memasukkan database Anda sendiri.
  * **log-bin = /var/log/mysql/mysql-bin.log** - mendefinisikan apakah log biner diaktifkan atau tidak. Nilai opsi, jika diberikan, adalah basename untuk urutan log.
  * **auto_increment_increment = 1** - digunakan untuk mengontrol interval antara nilai kolom yang berurutan.
  * **auto_increment_offset = 1** - dalam konteks replikasi multi-master dapat digunakan untuk menghindari konflik replikasi. Dalam artikel ini, kami menetapkan nilai **1** untuk server _master-mysql-1_ dan **2** untuk _master-mysql-2_.

Kedua opsi **auto_increment_increment** dan **auto_increment_offset** dimaksudkan untuk digunakan dengan master-to-master replication dan harus diatur sesuai dengan persyaratan aplikasi Anda. Kami menyarankan agar Anda menetapkan nilai opsi **auto_increment_offset** sama dengan parameter **server-id**'s satu, untuk menghindari konflik replikasi.

3\. Setelah Anda selesai memodifikasi file **/etc/my.cnf**, cukup klik **Save** dan restart node MySQL di environment **master-mysql-1** seperti yang ditunjukkan di bawah ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-7.png" alt="restart first MySQL" max-width="100%"/>

4\. Untuk memeriksa apakah MySQL berhasil di-restart, Anda dapat menavigasikan ke tab **actions** yang terbuka otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-8.png" alt="first MySQL actions" max-width="100%"/>

Jika terjadi kesalahan selama tahap ini, ulangi prosedurnya lagi atau hubungi Dukungan Teknis Anda.

## Konfigurasi Second Master DB{#configure-the-second-master-db}

Sekarang saatnya untuk mulai mengatur server DB kedua (yang termasuk dalam environment **master-mysql-2**).

1\. Buka _configuration manager_ untuk node MySQL di environment yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-9.png" alt="config second server" max-width="100%"/>

2\. Buka file yang sama **/etc/my.cnf**, temukan parameter **#skip-networking** lagi, dan tempelkan baris-baris berikut setelahnya:

```
server-id = 2
binlog-do-db = example
binlog-do-db = teste
log-bin = /var/log/mysql/mysql-bin.log
auto_increment_increment= 1
auto_increment_offset = 2
```

:::note
Kami telah mengubah nilai opsi server-id dan auto_increment_offset, karena mereka harus unik untuk setiap server.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-10.png" alt="second skip networking configs" max-width="100%"/>

3\. Setelah Anda selesai memodifikasi, cukup klik **Save** dan restart MySQL node di **master-mysql-2**, persis seperti yang Anda lakukan untuk node di environment **master-mysql-1**.

4\. Untuk memeriksa bahwa MySQL telah berhasil di-restart, klik pada tab **actions** yang muncul dan lihat hasilnya. Jika terjadi kesalahan selama tahap ini, ulangi prosedurnya lagi atau hubungi Dukungan Teknis Anda.

## Mengaktifkan Replication Master-Master{#enabling-master-master-replication}

Akhirnya, mari kita atur replika itu sendiri. Untuk itu, Anda harus menjalankan beberapa perintah dengan bantuan panel **phpMyAdmin**.

1\. Klik **Open in Browser** untuk server MySQL di environment pertama (**master-mysql-1**).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-11.png" alt="open first MySQL" max-width="100%"/>

2\. Anda akan diarahkan ke panel administrator. Masuk ke panel tersebut dengan kredensial untuk pengguna _root_ yang Anda terima melalui email selama penciptaan environment dan navigasikan ke tab **SQL**. Dalam jendela yang terbuka, jalankan perintah berikut:

```
create user 'replicator'@'%' identified by 'password';
grant replication slave on *.* to 'replicator'@'%';
```

:::note
Nilai password harus diganti dengan password Anda sendiri. JANGAN gunakan nilai default - ini tidak aman.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-12.png" alt="create first replication user" max-width="100%"/>

Dengan cara ini, kami telah membuat pengguna _replicator_ baru dan memberinya izin global untuk melakukan operasi replikasi.

Ingat kredensial yang Anda tentukan dan klik tombol **Go** di bawah.

3\. Untuk memeriksa apakah konfigurasi sudah benar sejauh ini, jalankan baris ini:

```
show master status;
```

Anda harus mendapatkan hasil yang mirip dengan berikut ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-13.png" alt="master status first node" max-width="100%"/>

Ingatlah nama file binlog dan posisinya. Kami akan menggunakannya dalam konfigurasi lebih lanjut.

4\. Ulangi langkah 1-3 untuk server MySQL kedua, buat pengguna dengan nama yang sama dan ingat parameter file lognya.

:::note
Jika Anda telah menggunakan pengkloningan untuk pembuatan environment kedua, kredensial untuk server MySQL-nya akan tetap sama seperti yang pertama.
:::

5\. Sekarang saatnya mengaktifkan replikasi. Buka tab **SQL** di panel phpMyAdmin dari server MySQL kedua (yang termasuk dalam environment **master-mysql-2**) dan jalankan perintah berikut:

```
STOP SLAVE;
CHANGE MASTER TO MASTER_HOST = 'first_server_IP', MASTER_USER = 'replicator', MASTER_PASSWORD = 'password', MASTER_LOG_FILE = 'binlog_file_name', MASTER_LOG_POS = binlog_file_position;
START SLAVE;
```

di mana:

  * **first_server_IP** - alamat IP internal dari server MySQL di environment pertama. Jika Anda ingin mengkonfigurasi replikasi antara server dari penyedia hosting yang berbeda, Anda harus melampirkan alamat IP eksternal ke kedua node DB Anda dan menentukan salah satu dari server pertama dalam parameter ini.

:::note
Alamat IP internal/eksternal dapat dilihat dengan menekan tombol Info di sebelah server yang sesuai:
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-14.png" alt="server ip1" max-width="100%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-15.png" alt="server ip2" max-width="100%"/>
:::

  * _password_ - yang Anda tentukan saat membuat pengguna DB untuk server MySQL pertama

  * _binlog_file_name_ - nilai di kolom **File** dari tabel status server pertama

  * _binlog_file_position_ - posisi file binlog dari tabel yang sama

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-16.png" alt="slave at second server" max-width="100%"/>

6\. Untuk memeriksa apakah perintah berhasil dijalankan atau tidak, jalankan perintah berikut:

```
show slave status;
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-17.png" alt="slave status second node" max-width="100%"/>

7\. Buka panel administrator untuk node MySQL dari environment **master-mysql-1** dan jalankan baris yang sama dengan mengganti nilai parameter dengan data server DB kedua:

```
STOP SLAVE;
CHANGE MASTER TO MASTER_HOST = 'second_server_IP', MASTER_USER = 'replicator', MASTER_PASSWORD = 'password', MASTER_LOG_FILE = 'binlog_file_name', MASTER_LOG_POS = binlog_file_position;
START SLAVE;
```

8\. Periksa jika semua sudah dikonfigurasi dengan benar dengan cara yang sama:

```
show slave status;
```

Selamat! Replikasi telah berhasil diaktifkan pada kedua server.

## Pengujian Replikasi{#testing-the-replication}

Dan akhirnya, mari kita pastikan semuanya bekerja dengan baik.

1\. Masuk ke server DB pertama dan buat database _example_ baru:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-18.png" alt="create example database" max-width="100%"/>

Seperti yang Anda lihat, itu sudah ditandai sebagai direplikasi dalam kolom **Master replication**.

:::note
Nama database baru ini sesuai dengan yang kami tentukan dalam konfigurasi server (binlog-do-db = example). Untuk penggunaan lebih lanjut, Anda dapat membuat database Anda sendiri dan mengganti nilai parameter binlog-do-db dengan namanya.
:::

2\. Sekarang, masuk ke server kedua dalam kluster MySQL Anda dan periksa database yang baru dibuat muncul dalam daftar.

Klik padanya dan tambahkan tabel baru dengan setidaknya satu kolom:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-19.png" alt="add table to database" max-width="100%"/>

Tentukan nilai apapun yang diinginkan dan klik **Save**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-20.png" alt="set column properties" max-width="100%"/>

3\. Kembali ke panel admin dari server MySQL pertama dan pastikan database _example_ yang direplikasi sekarang berisi tabel _**jelastic**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-multi-primary-replication/manual-multi-primary-replication-21.png" alt="multi master MySQL replication" max-width="100%"/>

Anda juga dapat melakukan beberapa tindakan lainnya (mis. mengoperasikan catatan, triggers, indeks, dll.) untuk memastikan semua data langsung direplikasi dalam kluster MySQL.

Itu sangat mudah! Nikmati keamanan data lengkap dengan hosting platform ini.

## Baca Juga{#whats-next}

  * [Java Connection ke MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-java/>)
  * [PHP Connection ke MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Multi Master Replication](<https://docs.dewacloud.com/docs/multi-primary-replication/>)
  * [Remote Access ke MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)