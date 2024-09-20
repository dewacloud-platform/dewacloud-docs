---
sidebar_position: 2
slug: /php-connection-to-postgresql
title: PHP Connection to PostgreSQL
---
# Connection to PostgreSQL for PHP Applications

Ikuti instruksi di bawah ini untuk mempelajari cara menghubungkan aplikasi PHP Anda, yang di-host di dalam platform, ke server database PostgreSQL:

  * [create environment](<https://docs.dewacloud.com/docs/#create-environment>)
  * [configure PHP server](<https://docs.dewacloud.com/docs/#configure-database-connection>)
  * [check connection](<https://docs.dewacloud.com/docs/#connection-check-up>)

## Create Environment{#create-environment}

1\. Masuk ke dashboard platform.

2\. [Create](<https://docs.dewacloud.com/docs/setting-up-environment/>) sebuah environment dengan server aplikasi **PHP** (misalnya, _Apache PHP_) dan database **PostgreSQL**.

![create php environment with postgresql](#)

3\. Periksa kotak masuk email Anda untuk pesan dengan kredensial database (login dan password).

![postgresql credentials email](#)

Sekarang, Anda dapat mengakses database melalui panel admin web dan menghubungkannya ke aplikasi PHP Anda.

## Configure Database Connection{#configure-database-connection}

1\. Klik tombol **Config** untuk server _Apache_ Anda.

![apache php config button](#)

2\. Arahkan ke folder **etc** dan buka file _**php.ini**_.

Tambahkan baris **extension=pgsql.so** seperti yang ditunjukkan pada gambar di bawah ini.

![apache php add pgsql module](#)

3\. **Simpan** perubahan dan **Restart nodes** untuk server Apache Anda.

![apache php restart nodes button](#)

4\. Terdapat dua fungsi utama **[PG functions](<http://php.net/manual/en/ref.pgsql.php>)** untuk beroperasi dengan server database:

  * membuka koneksi PostgreSQL:

```
pg_connect("host={host} port={port} dbname={dbname} user={user} password={password}");
```

  dimana:

  * _**{host}**_ \- Host server PostgreSQL (yaitu URL akses _**tanpa http://**_) yang Anda terima melalui email, misalnya _node171206-php-postgresql.jelastic.com_
  * _**{port}**_ \- port koneksi (defaultnya adalah _5432_)
  * _**{dbname}**_ \- nama database Anda
  * _**{user}**_ \- nama akun untuk mengakses database (kami akan menggunakan _webadmin_ sebagai default)
  * _**{password}**_ \- password untuk pengguna yang sesuai
  * menutup koneksi PostgreSQL: _pg_close()_

5\. Anda perlu menulis fungsi yang diperlukan di setiap halaman * **.php** yang harus terhubung ke database.

## Connection Check Up{#connection-check-up}

  * periksa koneksi menggunakan kode berikut:

```
<?php
$dbconn = pg_connect("host=postgres.jelastic.com port=5432 dbname=postgres user=webadmin password=passw0rd");
//connect to a database named "postgres" on the host "host" with a username and password
if (!$dbconn){
echo "<center><h1>Doesn't work =(</h1></center>";
}else
echo "<center><h1>Good connection</h1></center>";
pg_close($dbconn);
?>
```

  * eksekusi permintaan sederhana dan keluarkan dalam bentuk tabel:

```
<?php
$conn = pg_connect("host=postgres.jelastic.com port=5432 dbname=postgres user=webadmin password=passw0rd");
if (!$conn) {
 echo "An error occurred.\n";
 exit;
}
$result = pg_query($conn, "SELECT * FROM test_table");
if (!$result) {
 echo "An error occurred.\n";
 exit;
}
while ($row = pg_fetch_row($result)) {
 echo "value1: $row[0] value2: $row[1]";
 echo "<br />\n";
}
?>
```

Anda dapat menggunakan contoh-contoh yang dijelaskan di atas untuk membuat aplikasi PHP Anda sendiri, yang menggunakan koneksi ke database **PostgreSQL**.

## Baca Juga{#whats-next}

  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres/>)
  * [PostgreSQL Replication](<https://docs.dewacloud.com/docs/postgresql-database-replication/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)