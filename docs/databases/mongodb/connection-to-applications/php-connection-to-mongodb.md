---
sidebar_position: 2
slug: /php-connection-to-mongodb
title: PHP Connection to MongoDB
---
# PHP Connection to MongoDB

**MongoDB** adalah database NoSQL yang banyak digunakan, diimplementasikan berdasarkan model berorientasi dokumen dan ditujukan untuk menyimpan data semi-terstruktur. Panduan di bawah ini memberikan instruksi tentang cara Anda dapat dengan mudah menggunakannya dalam satu paket dengan aplikasi PHP Anda, yang di-host di dalam platform.

## Create an Environment{#create-an-environment}

Masuk ke akun platform Anda dan [buat](<https://docs.dewacloud.com/docs/setting-up-environment/>) environment baru dengan node **MongoDB** dari versi yang diinginkan (dapat ditemukan dalam bagian wizard _NoSQL_).

![create mongodb environment](#)

Tambahkan semua instansi lain yang diperlukan (jika ada - kami juga akan menyertakan _Apache_ untuk kemudian menerapkan aplikasi uji ke dalamnya; namun, ini dapat ditempatkan dalam environment terpisah juga) dan konfigurasikan parameter lain yang diperlukan, seperti jumlah sumber daya, wilayah, nama environment, dll.

Klik tombol **Create** ketika siap dan tunggu beberapa menit agar environment Anda selesai dibuat.

## MongoDB Configurations{#mongodb-configurations}

1\. Masuk ke kotak email Anda dan temukan surat yang berisi detail instansi MongoDB Anda dan data akses:

![email mongo credentials](#)

2\. Di sini, klik pada tautan _Access URL_ atau beralih ke dashboard dan **Open in browser** node _MongoDB_ Anda.

![mongo admin panel log in](#)

Di tab browser yang terbuka, Anda akan melihat formulir _**Sign in**_ untuk panel admin MongoDB. Masukkan kredensial admin yang telah Anda terima dalam email yang disebutkan di atas dan klik **Login** untuk mengaksesnya.

3\. Sekarang, mari kita buat database terpisah untuk membangun koneksi. Untuk itu, beralihlah ke tab **Databases** dan tentukan _Name_ untuknya di dalam bagian _**Create Database**_ (misalnya, _mongodb-connect_).

![create database](#) Klik **Save** untuk melanjutkan.

4\. Langkah berikutnya adalah membuat pengguna DB terpisah untuk bekerja dengan database baru kami. Oleh karena itu, beralihlah ke tab **Execute** dan tempel perintah berikut di dalam kolom input yang ditampilkan:

```
db.createUser({ user: “**user_name** ”, pwd: “**password** ”, roles:[{ role: “readWrite”, db: “**db_name** "}]})
```

di mana:

  * _**user_name**_ \- nama untuk pengguna DB baru Anda
  * _**password**_ \- kata sandi untuk pengguna ini
  * _**db_name**_ \- database (yang telah dibuat sebelumnya) pengguna ini akan memiliki izin _read/write_

![execute command](#)

Kemudian, pilih database yang sesuai menggunakan daftar drop-down di bawah dan **Execute** perintah yang disebutkan dengan tombol bernama sama. Anda akan mendapatkan respons keberhasilan dalam beberapa detik.

5\. Sekarang Anda perlu mengaktifkan driver koneksi khusus untuk memungkinkan interaksi antara server aplikasi Anda dan MongoDB. Di platform, ini sudah termasuk dalam semua build server aplikasi PHP secara default.

:::note
Mulai dari versi 4.3 PaaS, terdapat dua versi driver yang tersedia di semua server aplikasi PHP yang baru dibuat: 
- mongo.so (saat ini dianggap usang)
- mongodb.so
Dua ekstensi ini mengimplementasikan API yang berbeda, jadi kami merekomendasikan menggunakan modul lama untuk menjalankan aplikasi lama, sementara menyesuaikan proyek baru Anda dengan yang terbaru.
:::

![environment node config](#)

Jadi, untuk mengaktifkan driver yang diperlukan, kembali ke dashboard Anda, arahkan mouse ke node komputasi dalam environment Anda dan klik tombol **Config** yang muncul.

6\. Dalam tab pengelola konfigurasi yang terbuka, perluas folder **etc** dan pilih file _**php.ini**_ di dalamnya.

![phpini mongo driver](#)

Gulir ke bawah hingga kira-kira baris _483_ dan batalkan komentar pada baris dengan driver yang diperlukan (baik ekstensi _**mongo.so**_ atau _**mongodb.so**_) dengan menghapus tanda titik koma di awal.

7\. **Save** perubahan yang dilakukan dan **Restart** node server aplikasi Anda untuk menerapkannya.

![restart application server](#)

## Application Deployment{#application-deployment}

Sekarang Anda dapat melanjutkan ke distribusi aplikasi ke dalam environment yang baru saja Anda siapkan menggunakan platform [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-guide/>) (untuk proyek yang dikemas ke dalam satu arsip atau diambil langsung dari repo GIT/SVN).

Sebagai contoh, kami akan menggunakan aplikasi sederhana berikut, yang dirancang untuk memverifikasi pembentukan koneksi antara node komputasi terkait dan server _MongoDB_ yang ditentukan dengan menggunakan ekstensi _mongodb.so_ yang terakhir.

_**index.php**_

```php
<html>
<head>
<title>Test MongoDB Connection</title>
</head>
<body>
<h1>Test MongoDB Connection</h1>
<form action="#" name="form" method="POST">
<table cellspacing="10">
<tr><td>Host</td><td><input type="text" name="host" value="<?php echo htmlspecialchars($_POST['host']); ?>" size="40"></td></tr>
<tr><td>User</td><td><input type="text" name="username" value="<?php echo htmlspecialchars($_POST['username']); ?>" size="20"></td></tr>
<tr><td>Password</td><td><input type="text" name="password" value="<?php echo htmlspecialchars($_POST['password']); ?>" size="20"></td></tr>
<tr><td>Database</td><td><input type="text" name="database" value="<?php echo htmlspecialchars($_POST['database']); ?>" size="20"></td></tr>
<tr></tr>
<tr><td> </td><td><input type="submit" name="sub" value="Test Me!"></td></tr>
</table>
</form>

<?php if (@$_POST['sub']){
$host=$_POST['host'];
$username=$_POST['username'];
$password=$_POST['password'];
$userdb=$_POST['database'];
$database=$userdb.".phptest";

try{
$manager = new MongoDB\Driver\Manager("mongodb://{$host}/{$userdb}", array("username" => $username, "password" => $password));

if ($manager) {
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->insert(['x' => 2]);
$bulk->insert(['x' => 3]);
$manager->executeBulkWrite($database, $bulk);

$filter = ['x' => ['$gt' => 1]];
$options = [
'projection' => ['_id' => 0],
'sort' => ['x' => -1],
];

$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery($database, $query);
}
}catch(Exception $e){
echo "<center><h1>Doesn't work</h1></center>";
print_r($e);
exit;
}
}

if ($host)
echo "<center><h1>Good connection</h1></center>";
?>
</body>
</html>
```

Jadi, jika Anda ingin menguji koneksi itu sendiri, cukup [unduh](https://download.jelastic.com/public.php?service=files&t=1c95797713ca48b40dd0c7106d909337&download) paket yang sudah dibungkus dengan proyek yang ditunjukkan di atas dan distribusikan.

:::tip
Untuk versi driver lama (yaitu _mongo.so_), silakan gunakan [aplikasi uji ini](<https://example.com>). Alurnya akan mirip dengan yang dijelaskan di bawah.
:::

![application deployed](#)

Akibatnya, Anda akan menerima environment yang mirip dengan yang ditunjukkan di atas.

## Connection Check Up{#connection-check-up}

1\. **Open** environment Anda **in Browser** dengan tombol bernama sama - Anda akan melihat formulir sederhana untuk memasukkan detail database MongoDB Anda.

![mongodb connection application](#)

Nilai berikut harus ditentukan:

  * _**Host**_ \- tautan ke panel admin database Anda tanpa bagian _https://_ (dapat ditemukan dalam email terkait atau hanya disalin dari bilah alamat browser setelah mengklik **Open in browser** untuk node _MongoDB_ Anda)
  * _**User**_ \- nama pengguna yang Anda tetapkan untuk database (_dbuser_ dalam kasus kami)
  * _**Password**_ \- kata sandi untuk pengguna, ditentukan dalam kolom sebelumnya
  * _**Database**_ \- nama database yang diperlukan (_mongodb-connect_ dalam kasus kami)

Setelah data dimasukkan ke kolom yang sesuai, klik tombol **Test Me!**.

2\. Jika informasi yang ditentukan benar, pesan Good connection akan ditampilkan.

![good connection](#)

Jika tidak, Anda akan mendapatkan notifikasi bahwa koneksi Anda _**Doesn’t work**_ dan keluaran kesalahan terperinci yang disebabkannya.

3\. Selain itu, setelah pembentukan koneksi yang berhasil, koleksi baru _**phptest**_ dengan beberapa catatan baru di dalamnya akan ditambahkan ke database yang ditentukan.

![check phptest collection](#)

Jadi, Anda dapat menavigasi ke panel admin DB Anda untuk memastikan semuanya bekerja dengan benar dan melanjutkan dengan melakukan operasi lain yang diperlukan.

## Useful to Know{#useful-to-know}

Pusat Pengembang platform juga mengandung sejumlah panduan MongoDB yang lebih spesifik, yang dapat berguna untuk berbagai tugas yang berbeda:

  * konfigurasikan [Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>) dengan jumlah node MongoDB yang tidak genap untuk menerapkan replikasi master-slave dan failover otomatis secara bersamaan
  * tingkatkan keamanan informasi Anda dengan mengatur [Backups Scheduling](<https://docs.dewacloud.com/docs/mongo-backup-restore/>), yang dapat mencegah kehilangan data atau meminimalkan konsekuensinya (melalui pemulihan) jika terjadi kegagalan server yang tidak terduga
  * gunakan opsi [Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>) untuk mengoperasikan database Anda langsung melalui aplikasi klien yang diinginkan, menghilangkan keperluan untuk masuk ke dashboard kami untuk itu
  * pelajari cara [Import & Export Dump](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>) file dengan menggunakan klien manajemen DB bawaan atau pihak ke-3 untuk dengan mudah membuat cadangan data Anda

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>)
  * [Remote Access to MongoDB](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [Dump import/export to MongoDB](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)