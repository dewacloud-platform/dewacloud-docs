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

![create new environment button](#)

3\. Di wizard **Environment Topology**, pilih **PostgreSQL** sebagai database yang ingin Anda gunakan. Jika Anda ingin mendapatkan cluster database, cukup geser ke kanan switch Auto-Clustering. Kemudian tambahkan **Public IPv4**. Setelah itu, masukkan nama environment, misalnya, _**remotepostgres**_, dan klik tombol **Create**.

![wizard PostgreSQL auto-clustering](#)

Proses ini dapat memakan waktu sekitar satu menit untuk membuat environment Anda.

![environment created](#)

Kedua node memiliki alamat IP publik yang terpasang.

### Environment without Public IP{#environment-without-public-ip}

Algoritma sama seperti di atas dan environment database cluster akan dibuat tetapi tanpa public IP yang terpasang.

![environment without public IP](#)

Setelah environment siap, pergi ke **Endpoints** di bagian **Settings** dan klik **Add** untuk membuat pemetaan port baru.

![add endpoint](#)

Pilih **Node** yang perlu Anda akses dan **Name** layanan PostgreSQL. Parameter lainnya akan dihasilkan secara otomatis: **Private Port**, **Protocol**, **Public Port**, dan **Access URL**.

![endpoints dialog](#)

Pemetaan port ke node master database mungkin terlihat seperti ini.

![endpoint added](#)

Jika perlu, lakukan hal yang sama untuk node Slave dari cluster database.

## Remote Connection to PostgreSQL{#remote-connection-to-postgresql}

Mari kita buat koneksi baru ke database menggunakan klien desktop atau web apa pun. Di sini kami menggunakan **pgAdmin4**, yang merupakan platform administrasi dan pengembangan Open Source paling populer dan kaya fitur untuk PostgreSQL. Anda dapat mendapatkan perangkat lunak klien yang sesuai dengan platform Anda. Lihat halaman unduhan untuk mendapatkan tautan yang tepat `https://www.pgadmin.org/download/` atau Anda dapat mengenal aplikasi ini di platform dengan menyebarkannya melalui [import](<https://docs.dewacloud.com/docs/environment-import/>) manifest pgAdmin4 yang sesuai [manifest](<https://github.com/jelastic-jps/pgadmin/blob/master/manifest.yaml>).

![pgAdmin panel](#)

1\. Jika Anda memiliki cluster database, akan lebih nyaman untuk membuat grup semua server yang termasuk dalam cluster.

![create server group](#)

2\. Kemudian masukkan Nama grup, misalnya _**remotepostgres**_.

![server group name](#)

3\. Setelah itu, tambahkan satu per satu semua server database ke grup. Mari kita lihat cara melakukannya untuk database Master. Klik kanan pada grup (misalnya _remotepostgres_) dan pilih **Create > Server**.

![add server](#)

4\. Masukkan nama server (misalnya **Master** untuk database utama cluster Anda) di tab **General**.

![create server dialog](#)

5\. Di langkah ini, Anda harus menentukan pengaturan akses server tergantung pada apakah Anda telah membuat database dengan atau tanpa public IP seperti yang dijelaskan di atas.

### Connection to Public IP{#connection-to-public-ip}

Buka tab Connection dan masukkan public IP dari database master Anda di kolom **Host name/address**. Tentukan **Username** dan **Password** yang Anda peroleh saat membuat environment database melalui email.

![server connection public ip](#)

### Connection via Endpoints{#connection-via-endpoints}

Ambil **URL** dan **Public Port** dari pemetaan port yang dihasilkan dan atur pengaturan koneksi server database. **Username** dan **Password** adalah sama seperti yang dijelaskan di atas.

![server connection endpoint](#)

6\. Anda dapat mengubah opsi spesifik lainnya jika Anda cukup percaya diri dalam tindakan Anda.

7\. Akhirnya, tekan **Save** untuk menerapkan perubahan dan Anda akan melihat bahwa koneksi berhasil dibuat.

Dalam contoh kami, baik database master dan slave ditampilkan sebagai berikut:

![check connection](#)

Sekarang akses jarak jauh PostgreSQL telah dikonfigurasi dan Anda dapat mulai menjalankan query.

## Baca Juga{#whats-next}

  * [Java Connection to PostgreSQL](<https://www.virtuozzo.com/company/blog/java-connection-to-postgresql/>)
  * [PHP Connection to PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-php/>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-database-replication/>)
  * [Dump Import/Export to PostgreSQL](<https://docs.dewacloud.com/docs/dump-postgres/>)