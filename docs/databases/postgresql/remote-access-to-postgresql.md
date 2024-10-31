---
sidebar_position: 5
slug: /remote-access-postgres
title: Remote Access to PostgreSQL
---
# Remote Access to PostgreSQL

Anda memiliki kesempatan untuk bekerja dengan database Anda dari jarak jauh dari komputer Anda tanpa harus masuk ke dashboard kami. Berikut adalah cara untuk pengguna PostgreSQL.

## Create Environment{#create-environment}

Database dapat diakses baik melalui [public IP](<https://docs.dewacloud.com/docs/public-ip/>) atau [endpoints](<https://docs.dewacloud.com/docs/endpoints/>) (tanpa public IP diperlukan). Mari kita lihat kedua opsi untuk membuat environment database.

### Environment with Public IP{#environment-with-public-ip}

1\. Masuk ke platform.

2\. Klik tombol **New Environment** di pojok kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-1.png" alt="create new environment button" width="70%"/>

3\. Di wizard **Environment Topology**, pilih **PostgreSQL** sebagai database yang ingin Anda gunakan. Jika Anda ingin mendapatkan cluster database, cukup geser ke kanan switch Auto-Clustering. Kemudian tambahkan **Public IPv4**. Setelah itu, masukkan nama environment, misalnya, _**remotepostgres**_, dan klik tombol **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-2.png" alt="wizard PostgreSQL auto-clustering" max-width="100%"/>

Proses ini dapat memakan waktu sekitar satu menit untuk membuat environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-3.png" alt="environment created" max-width="100%"/>

Kedua node memiliki alamat IP publik yang terpasang.

### Environment without Public IP{#environment-without-public-ip}

Algoritma sama seperti di atas dan environment database cluster akan dibuat tetapi tanpa public IP yang terpasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-4.png" alt="environment without public IP" max-width="100%"/>

Setelah environment siap, pergi ke **Endpoints** di bagian **Settings** dan klik **Add** untuk membuat pemetaan port baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-5.png" alt="add endpoint" max-width="100%"/>

Pilih **Node** yang perlu Anda akses dan **Name** layanan PostgreSQL. Parameter lainnya akan dihasilkan secara otomatis: **Private Port**, **Protocol**, **Public Port**, dan **Access URL**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-6.png" alt="endpoints dialog" max-width="100%"/>

Pemetaan port ke node master database mungkin terlihat seperti ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-7.png" alt="endpoint added" max-width="100%"/>

Jika perlu, lakukan hal yang sama untuk node Slave dari cluster database.

## Remote Connection to PostgreSQL{#remote-connection-to-postgresql}

Mari kita buat koneksi baru ke database menggunakan klien desktop atau web apa pun. Di sini kami menggunakan **pgAdmin4**, yang merupakan platform administrasi dan pengembangan Open Source paling populer dan kaya fitur untuk PostgreSQL. Anda dapat mendapatkan perangkat lunak klien yang sesuai dengan platform Anda. Lihat halaman unduhan untuk mendapatkan tautan yang tepat `https://www.pgadmin.org/download/` atau Anda dapat mengenal aplikasi ini di platform dengan menyebarkannya melalui [import](<https://docs.dewacloud.com/docs/environment-import/>) manifest pgAdmin4 yang sesuai [manifest](<https://github.com/jelastic-jps/pgadmin/blob/master/manifest.yaml>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-8.png" alt="pgAdmin panel" max-width="100%"/>

1\. Jika Anda memiliki cluster database, akan lebih nyaman untuk membuat grup semua server yang termasuk dalam cluster.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-9.png" alt="create server group" max-width="100%"/>

2\. Kemudian masukkan Nama grup, misalnya _**remotepostgres**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-10.png" alt="server group name" max-width="100%"/>

3\. Setelah itu, tambahkan satu per satu semua server database ke grup. Mari kita lihat cara melakukannya untuk database Master. Klik kanan pada grup (misalnya _remotepostgres_) dan pilih **Create > Server**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-11.png" alt="add server" max-width="100%"/>

4\. Masukkan nama server (misalnya **Master** untuk database utama cluster Anda) di tab **General**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-12.png" alt="create server dialog" max-width="100%"/>

5\. Di langkah ini, Anda harus menentukan pengaturan akses server tergantung pada apakah Anda telah membuat database dengan atau tanpa public IP seperti yang dijelaskan di atas.

### Connection to Public IP{#connection-to-public-ip}

Buka tab Connection dan masukkan public IP dari database master Anda di kolom **Host name/address**. Tentukan **Username** dan **Password** yang Anda peroleh saat membuat environment database melalui email.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-13.png" alt="server connection public ip" max-width="100%"/>

### Connection via Endpoints{#connection-via-endpoints}

Ambil **URL** dan **Public Port** dari pemetaan port yang dihasilkan dan atur pengaturan koneksi server database. **Username** dan **Password** adalah sama seperti yang dijelaskan di atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-14.png" alt="server connection endpoint" max-width="100%"/>

6\. Anda dapat mengubah opsi spesifik lainnya jika Anda cukup percaya diri dalam tindakan Anda.

7\. Akhirnya, tekan **Save** untuk menerapkan perubahan dan Anda akan melihat bahwa koneksi berhasil dibuat.

Dalam contoh kami, baik database master dan slave ditampilkan sebagai berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/remote-access-to-postgresql/remote-access-to-postgresql-15.png" alt="check connection" max-width="100%"/>

Sekarang akses jarak jauh PostgreSQL telah dikonfigurasi dan Anda dapat mulai menjalankan query.

## Baca Juga{#whats-next}

  * [Java Connection to PostgreSQL](<https://www.virtuozzo.com/company/blog/java-connection-to-postgresql/>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-php/>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-auto-clustering>)
  * [Dump Import/Export to PostgreSQL](<https://docs.dewacloud.com/docs/dump-postgres/>)