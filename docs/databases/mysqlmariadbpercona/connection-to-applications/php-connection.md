---
sidebar_position: 2
slug: /connection-to-mysql-php
title: PHP Connection
---
# Connection to MySQL/MariaDB/Percona for PHP

**MySQL**, **MariaDB**, dan **Percona** adalah database open source yang sangat populer, digunakan oleh pengembang di seluruh dunia. Ikuti instruksi di bawah ini untuk mempelajari cara menghubungkan aplikasi PHP Anda, yang di-host di dalam platform, ke salah satu server DB ini:

  * [buat environment](<https://docs.dewacloud.com/docs/#environment-creation>)
  * [koneksi ke database](<https://docs.dewacloud.com/docs/#connection-to-database>)
  * [periksa koneksi](<https://docs.dewacloud.com/docs/#checking-connection>)
  * [eksekusi permintaan](<https://docs.dewacloud.com/docs/#executing-simple-request>)
  * [konfigurasi tambahan](<https://docs.dewacloud.com/docs/#useful-to-know>)

## Environment Creation{#environment-creation}

1. Masuk ke akun PaaS Anda dan [buat environment](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan server database **MySQL** atau **MariaDB** (keduanya tersedia dalam bagian _**SQL**_ wizard).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-1.png" alt="create PHP MySQL environment" max-width="100%"/>

Untuk memberikan contoh koneksi, kami telah menambahkan server aplikasi **Apache PHP**.

2. Setelah environment dibuat, Anda akan menerima email dengan detail administrasi dan koneksi MySQL (atau MariaDB):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-2.png" alt="email MySQL connection details" width="80%"/>

3. Kembali ke dashboard Anda dan klik tombol **Open in Browser** untuk node database yang sesuai (baik MySQL atau MariaDB).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-3.png" alt="MySQL node open in browser button" max-width="100%"/>

Masuk ke panel admin yang terbuka menggunakan kredensial yang Anda terima di email yang disebutkan di atas.

4. Buka tab _**Databases**_ dan **Buat** database baru (misalnya, _mysqldb_).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-4.png" alt="MySQL create new database" max-width="100%"/>

Sekarang, Anda bisa [deploy](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi Anda (baik dari _archive_ atau _GIT/SVN repository_) ke environment yang telah dibuat.

## Connection to Database{#connection-to-database}

Setelah proyek Anda berhasil di-deploy, Anda perlu menghubungkannya ke database Anda. Untuk itu, aplikasi Anda harus dikonfigurasi dengan tepat, misalnya menggunakan ekstensi [MySQLi](<http://php.net/manual/en/book.mysqli.php>) (MySQL Improved).

Rujuk ke halaman dokumentasi resmi yang tertaut untuk daftar lengkap fungsi yang tersedia, sementara di bawah ini kami akan memberikan gambaran umum fungsi dasar:

1. Untuk mendapatkan string koneksi untuk mengakses node MySQL/MariaDB Anda:

```
mysqli_connect('\{host\}', '\{user\}', '\{password\}', '\{db_name\}');
```

Tempat penampung yang sesuai harus diganti dengan data koneksi Anda dari node MySQL atau MariaDB:

  * \{host\} - tautan ke node DB Anda tanpa bagian protokol
  * \{user\} dan \{password\} - kredensial admin database (untuk penggunaan produksi, disarankan untuk membuat akun khusus dengan izin yang sesuai)
  * \{db_name\} - nama database yang diperlukan (misalnya, yang dibuat sebelumnya, _mysqldb_)

2. Untuk beralih ke database lain dalam server yang sama, gunakan fungsi berikut:

```
mysql_select_db('\{connect\}','\{db_name\}');
```

Di sini, \{connect\} harus diganti dengan string koneksi yang diperoleh menggunakan fungsi _mysqli_connect_ yang dijelaskan di atas.

3. Untuk menutup koneksi ke database Anda, jalankan perintah berikut:

```
mysqli_close();
```

:::warning
Anda perlu menentukan fungsi yang diperlukan di setiap halaman *.php yang harus terhubung ke database.
:::

## Checking Connection{#checking-connection}

Untuk memastikan semuanya berfungsi dengan baik, Anda dapat memeriksa koneksi menggunakan kode ini:

```
<?php
$link = mysqli_connect('\{host\}', '\{user\}', '\{password\}', '\{db_name\}'); 
// jika koneksi tidak berhasil, Anda akan melihat pesan kesalahan 
if (!$link) { die('Could not connect: ' . mysql_error()); } 
// jika koneksi berhasil, Anda akan melihat pesan di bawah ini 
echo 'Connected successfully'; 
mysqli_close($link); 
?>
```

:::warning
Jangan lupa untuk mengganti \{host\}, \{user\}, \{password\}, dan \{db_name\} dalam string koneksi dengan nilai yang sesuai (seperti yang dijelaskan di bagian _Connection to Database_).
:::

Jika semuanya berjalan dengan baik, Anda akan melihat pesan berikut ketika halaman ini dibuka di browser.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-5.png" alt="MySQL database connected" width="60%"/>

## Executing Simple Request{#executing-simple-request}

Dan berikut adalah contoh bagaimana menjalankan permintaan sederhana ke database Anda dan menampilkannya di tabel.

Skrip PHP sederhana di bawah ini akan membuat koneksi ke server database Anda (jangan lupa untuk menentukan hostname dan kredensial yang sesuai), menghubungkan ke database default _mysql_ yang ada, membaca nilai-nilai dari tabel _help_topic_ dan menampilkannya di tabel yang dibuat sendiri.

```
<?php
// Pengecekan koneksi:
$link = mysqli_connect('\{host\}', '\{user\}', '\{password\}', '\{db_name\}');
if (!$link) { echo "<h2>MySQL Error!</h2>"; exit; }
// Beralih ke database lain:
$db="mysql";
mysqli_select_db($link, $db);
// output header tabel:
echo "<table border=\"1\" width=\"100%\" bgcolor=\"#FFFFE1\">";
echo "<tr><td>Value1</td><td>Value2</td><td>Value3</td>";
// Permintaan SQL:
$q = mysqli_query($link, "SELECT * FROM help_topic;");
// Output hasil tabel
for ($c=0; $c<mysqli_num_rows($q); $c++) {
    echo "<tr>";
    $f = mysqli_fetch_array($q); 
    echo "<td>$f[0]</td><td>$f[1]</td><td>$f[5]</td>";
    echo "</tr>";
}
echo "</table>";
?>
```

Sebagai hasilnya, Anda akan menerima semacam indeks untuk semua fungsi MySQL yang tersedia dengan tautan ke instruksi tentang penggunaannya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/connection-to-applications/php-connection/php-connection-6.png" alt="database connection example applicatiom" max-width="100%"/>

Hebat! Sekarang Anda dapat dengan mudah menghubungkan aplikasi PHP Anda ke database **MySQL** atau **MariaDB**.

## Useful to Know{#useful-to-know}

Platform ini juga memungkinkan Anda untuk memperluas fungsionalitas server MySQL/MariaDB Anda dengan mengikuti instruksi yang sesuai dalam dokumentasi kami:

  * atur jenis replikasi database yang disukai - [primary-secondary](<https://docs.dewacloud.com/docs/database-primary-secondary-replication/>) atau [primary-primary](<https://docs.dewacloud.com/docs/multi-primary-replication/>) - untuk meningkatkan kinerja DB dan perlindungan dari kehilangan data
  * sesuaikan [Jadwal Backup](<https://docs.dewacloud.com/docs/database-backups/>) untuk memastikan keamanan informasi di dalam DB Anda jika terjadi kegagalan server yang tak terduga
  * lihat instruksi [Akses Jarak Jauh](<https://docs.dewacloud.com/docs/remote-access-mysql/>) dan pelajari cara mengakses database Anda dari jarak jauh melalui klien MySQL desktop yang disukai
  * gunakan panduan [Impor/Ekspor Dump Files](<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/>) untuk mengetahui cara membuat cadangan dan memulihkan data Anda secara manual dari dump yang telah dibuat sebelumnya

## Baca Juga{#whats-next}

  * [Replikasi Primary-Secondary MySQL/MariaDB](<https://docs.dewacloud.com/docs/database-primary-secondary-replication/>)
  * [Akses Jarak Jauh ke MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Backup Database](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Konfigurasi Database](<https://docs.dewacloud.com/docs/database-configuration-files/>)