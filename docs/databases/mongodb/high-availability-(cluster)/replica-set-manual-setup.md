---
sidebar_position: 2
slug: /mongodb-replica-set
title: Replica Set Manual Setup
---
# MongoDB Replication and Automated Failover: Configuration Guide

Replica set adalah istilah yang digunakan untuk mendefinisikan cluster database dengan beberapa node yang memiliki replikasi dan failover otomatis yang dikonfigurasi di antara mereka. Struktur semacam ini biasanya memerlukan jumlah anggota yang ganjil, baik dengan node [Arbiter](<https://docs.mongodb.com/manual/tutorial/add-replica-set-arbiter/>) atau tidak, untuk memastikan pemilihan database PRIMARY yang benar. Database yang terpilih ini akan memproses semua operasi tulis yang masuk, menyimpan informasi tentangnya dalam oplog-nya, di mana dapat diakses dan direplikasi oleh setiap anggota REPLIKA SEKUNDER untuk diterapkan pada dataset mereka. Dengan cara ini, semua server akan mewakili konten yang sama dan memastikan ketersediaannya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-1.png" alt="mongodb replica set" width="50%"/>

Jika terjadi masalah tak terduga yang menyebabkan downtime database primary (misalnya, karena kegagalan perangkat keras atau gangguan koneksi), proses pemilihan baru akan secara otomatis dimulai, membantu memulihkan fungsi aplikasi yang normal, tanpa intervensi manual yang diperlukan. Dengan cara ini, replica set mewarisi manfaat [replikasi biasa](<https://www.virtuozzo.com/company/blog/mongodb-auto-clustering/>) (seperti redundansi failover, peningkatan ketersediaan data dan kapasitas baca, pemulihan bencana, dll.) dan sekaligus menghilangkan kompleksitas pengelolaan banyak database secara terpisah.

Jadi, berikut adalah instruksi sederhana yang akan menunjukkan kepada Anda cara membuat dan mengonfigurasi replica set MongoDB dengan tiga anggota – kompleksitas semacam ini dianggap cukup untuk memastikan margin keamanan informasi yang cukup dan keluaran yang cukup untuk menangani jumlah operasi I/O yang diperlukan, untuk sebagian besar aplikasi yang biasa digunakan. Di bawah ini kita akan menjelajahi cara menyiapkan lingkungan yang sesuai, mengatur autentikasi antar node DB, mengonfigurasi replikasi itu sendiri, dan memastikan semuanya disetel dengan benar.

## Create an Environment

Untuk memulai, Anda memerlukan setidaknya tiga node MongoDB untuk mengonfigurasi replica set, jadi mari kita [create such an environment](<https://docs.jelastic.com/setting-up-environment/>). Dalam contoh ini, kami akan mengalokasikan instance MongoDB versi 4.0.10 dalam satu environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-2.png" alt="mongodb replica set environment" width="100%"/>

Jika perlu, ubah **Environment Name** dan [Region](<https://docs.jelastic.com/environment-regions/>). Setelah instalasi selesai, Anda harus memastikan keamanan komunikasi node dengan bantuan file kunci autentikasi.

## Add Authentication Key File

Autentikasi adalah proses jaminan keamanan penting yang memaksa setiap anggota replica set untuk mengidentifikasi dirinya selama komunikasi internal dengan menggunakan file kunci autentikasi unik khusus. Jadi mari kita buat sendiri untuk melindungi data di dalam DB Anda dari akses ilegal:

1\. Masuk ke salah satu node database melalui [Web SSH](<https://docs.jelastic.com/web-ssh-client/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-3.png" alt="mongodb replica set ssh" width="100%"/>

2\. Gunakan file kunci Anda sendiri atau buat satu dengan [openssl](<https://en.wikipedia.org/wiki/OpenSSL>) (ukuran kunci dalam byte, misalnya 741, dan nama misalnya my.key) dengan perintah:

_**openssl rand -base64 741 > my.key**_

3\. Sekarang Anda harus mendistribusikan file kunci yang baru dibuat ke semua instance MongoDB:

  * Klik pada tombol **Config** di sebelah node database Anda untuk mengakses [File Manager](<https://docs.jelastic.com/configuration-file-manager/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-4.png" alt="mongodb replica set config" width="100%"/>

  * Di tab konfigurasi yang dibuka, temukan file _**my.key**_ di bawah jalur: _**/home/jelastic/my.key**_ dan buka. Kemudian salin isinya ke clipboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-5.png" alt="mongodb replica set key" width="100%"/>

  * Di direktori **keys** (jalur lengkap adalah _**/var/lib/jelastic/keys**_), buat file yang akan digunakan oleh instance MongoDB untuk mengautentikasi satu sama lain, misalnya **mongo-set.key.**

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-6.png" alt="mongodb replica set file" width="100%"/>

  * Tempelkan konten clipboard ke dalamnya dan terapkan perubahan dengan Save untuk semua instance. Dengan demikian file **mongo-set.key** telah didistribusikan ke semua node MongoDB.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-7.png" alt="mongodb replica set save" width="100%"/>

## Configure the MongoDB Replication

Setelah keamanan, sebagai salah satu prinsip utama pengelolaan data, dijamin, Anda akhirnya dapat melanjutkan ke konfigurasi replica set itu sendiri.

1\. Beralih ke file **mongod.conf** di dalam folder **etc** dalam tab konfigurasi yang sama untuk node MongoDB. Gulir ke bawah ke bagian **replication**, kemudian hapus komentar dan tambahkan string berikut yang menentukan nama unik untuk replica set Anda (db-replication, sebagai contoh):

_**replSetName: db-replication**_

2\. Tambahkan parameter **keyFile** di bagian **security** yang harus menentukan jalur ke file kunci Anda (yang dalam kasus kami adalah _**/var/lib/jelastic/keys/mongo-set.key**_).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-8.png" alt="mongodb replica set security" width="100%"/>

3\. Segera **Save** perubahan **untuk semua instance** menggunakan tombol yang sesuai di jendela editor.

4\. **Restart** node **DB** Anda agar parameter konfigurasi baru diterapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-9.png" alt="mongodb replica set restart container" width="100%"/>

**Note:** Perlu diingat bahwa setelah Anda menyelesaikan konfigurasi replica set, proses pemilihan PRIMARY database baru akan dipanggil selama semua node restart atau restart node PRIMARY (yaitu downtime database PRIMARY).

5\. Selanjutnya, akses server MongoDB yang Anda anggap akan digunakan sebagai PRIMARY melalui protokol SSH.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-10.png" alt="mongodb replica set restart node" width="100%"/>

**Note:** Setelah database PRIMARY dipilih, anggota replica set lainnya akan menjadi tidak dapat diakses untuk operasi tulis langsung, yang berarti bahwa setiap perubahan, konfigurasi, dll. (termasuk akses ke panel admin web) hanya dapat dilakukan untuk node PRIMARY yang saat ini. Jadi, Anda harus mengubah string koneksi di aplikasi Anda ke node PRIMARY yang baru, kecuali Anda telah mengatur [priorities](<https://docs.mongodb.com/manual/tutorial/force-member-to-be-primary/>) untuk semua anggota replica set yang menentukan satu node sebagai PRIMARY yang diutamakan.

6\. Akses database yang harus direplikasi, dengan kredensial pengguna admin yang sesuai:  

```
mongo -u {user} -p {password} {DB_name}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-11.png" alt="mongodb replica set access" width="100%"/>

Di mana:

  * `{user}` – nama pengguna administrator (dikirim ke email Anda, biasanya admin secara default)
  * `{password}` – kata sandi untuk pengguna DB yang sesuai (dapat ditemukan dalam email yang sama)
  * `{DB_name}` – nama database yang ingin Anda replikasi dalam replica set ini (kami akan menggunakan yang default admin)

**Note:** Jika pemilihan baru terjadi, kredensial pengguna admin untuk masuk ke database PRIMARY yang baru akan sama dengan yang Anda gunakan untuk yang lama.

7\. Setelah koneksi berhasil, eksekusi baris berikut untuk menentukan parameter untuk node MongoDB saat ini dan memulai replica set Anda:

```
config = {_id : "**{replica_set}**", members : [{_id : 0, host:"**{current_db_ip}**:27017"},]}
rs.initiate()
```

Jelas, nilai dalam tanda kurung harus diganti dengan data yang sesuai, yaitu:

  * `{replica_set}` – nama grup database Anda yang direplikasi, ditentukan di awal bagian ini (db-replication dalam kasus kami)
  * `{current_db_ip}` – alamat IP dari kontainer database yang dipilih

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-12.png" alt="mongodb replica set parameters" width="100%"/>

Dalam contoh kami:

```
**config = {_id : "db-replication", members : [{_id : 0, host:"172.25.2.119:27017"},]}**
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-13.png" alt="mongodb replica set configuration" width="100%"/>

_**rs.initiate()**_

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-14.png" alt="mongodb replica set setup" width="100%"/>

8\. Eksekusi perintah berikut untuk database lainnya di mana `{db_ip}` adalah alamat IP dari setiap database:

```
rs.add("{db_ip}:27017")
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-15.png" alt="mongodb replica set add" width="100%"/>

9\. Setelah Anda menambahkan semua anggota replikasi, Anda akan mendapatkan replica set yang sepenuhnya fungsional. Jika Anda ingin memastikan bahwa semuanya dikonfigurasi dengan benar, eksekusi perintah **rs.status()** untuk mendapatkan informasi lengkap mengenai replica set Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-16.png" alt="mongodb replica set status" width="100%"/>

## ReplicaSet Arbiter

Replikasi menjadi lebih dapat diandalkan jika memiliki jumlah anggota ganjil dalam replica set. Jika Anda telah membuat jumlah anggota yang genap (node), lebih baik menambahkan node **Arbiter** yang menjaga quorum dengan merespons heartbeat dan permintaan pemilihan dari peserta replica set lainnya:

  * Arbiter tidak

 menyimpan data di dalamnya, dan hanya perlu memberikan suara dalam pemilihan ketika node mana pun gagal
  * Arbiter adalah proses ringan, jadi tidak mengonsumsi banyak sumber daya
  * Arbiter hanya bertukar kredensial pengguna antara sekumpulan salinan yang dienkripsi
  * Disarankan untuk menjalankan Arbiter di node terpisah untuk mencapai ketersediaan tinggi

Mari kita tambahkan node Arbiter tambahan ke replica set kami:

1\. Skalakan cluster database secara horizontal dengan satu node:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-17.png" alt="mongodb replica set add arbiter" width="100%"/>
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-18.png" alt="mongodb replica set add arbiter2" width="100%"/>

2\. Di direktori **keys**, buat file kunci **mongo-set.key** dan tempelkan konten file yang serupa dari node database yang sebelumnya dikonfigurasi.

3\. Ubah **mongod.conf**:

  * hapus komentar pada bagian **replication** dan tambahkan **replSetName** (misalnya, replSetName: db-replication)
  * tambahkan parameter **keyFile** ke bagian **security** (_**/var/lib/jelastic/keys/mongo-set.key**_, dalam kasus kami)

4\. Restart node yang baru ditambahkan untuk menerapkan parameter konfigurasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-19.png" alt="mongodb replica set restart" width="100%"/>

**Note:** Jangan restart semua node karena itu akan menyebabkan pemilihan PRIMARY baru kecuali Anda telah menetapkan prioritas untuk memaksa node tertentu untuk dipilih sebagai node database PRIMARY.

5\. Sekarang Arbiter siap ditambahkan ke replica set. Di node PRIMARY, keluarkan perintah untuk menambahkan arbiter ke cluster:

```
rs.addArb("{db_ip}:27017")
```

_Di mana `{db_ip}` adalah alamat IP dari node yang baru ditambahkan._  

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-20.png" alt="mongodb replica set arbiter" width="100%"/>

6\. Terakhir, mari kita periksa apakah node yang baru ditambahkan telah menjadi Arbiter atau tidak. Untuk melakukan ini, masuk ke node baru melalui SSH dan hubungkan instance MongoDB dengan kredensial dari email yang sesuai yang Anda terima saat pembuatan node.  
 
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-21.png" alt="mongodb replica set arbiter access" width="100%"/>

Seperti yang Anda lihat, node yang baru ditambahkan bertindak sebagai Arbiter dari **db-replication**, memastikan quorum dalam situasi apa pun.

## Database Cluster Availability Testing

Cluster MongoDB canggih yang telah kami konfigurasikan memungkinkan Anda untuk terhubung dan melakukan berbagai operasi secara jarak jauh. Sebagai contoh, mari kita ambil status aktualnya dengan menghubungkan dan mengeksekusi beberapa perintah pengecekan melalui sebuah applet PHP sederhana.

Jelas, Anda akan memerlukan server aplikasi untuk itu (misalnya, Apache), jadi tambahkan satu ke environment Anda (seperti yang kami lakukan) atau buat saja di environment terpisah.

1\. Tekan tombol **Change Environment Topology** dan tambahkan server.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-22.png" alt="mongodb replica set change topology" width="100%"/>
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-23.png" alt="mongodb replica set change topology2" width="100%"/>

2\. Buka tab Configuration Manager untuk server **Apache** yang ditambahkan dengan memilih ikon **Config** di sampingnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-24.png" alt="mongodb replica set configure apache" width="100%"/>

3\. Navigasi ke direktori _**/var/www/webroot/ROOT**_, buka file **index.php** dan tempelkan kode berikut alih-alih konten defaultnya:

```php
<?php
try {
    $mongodbConnectionURI = "mongodb://{db_username}:{db_password}@node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017/?replicaSet={replica_set_name}&readPreference=primary";
    $manager = new MongoDB\Driver\Manager($mongodbConnectionURI);
    $command = new MongoDB\Driver\Command(['ping' => 1]);
    $cursor = $manager->executeCommand('db', $command);
    $response = $cursor->toArray()[0];
    var_dump($response);
    echo '<br><br>';
    var_dump($manager->getServers());
} catch (Exception $e) {
    echo $e->getMessage();
}
?>
```

Di mana nilai berikut harus diganti dengan data yang sesuai:

  * `{replica_set_name}` – nama replica set Anda
  * `{db_username}` – pengguna admin dari database PRIMARY yang dipilih (admin, secara default)
  * `{db_password}` – kata sandi pengguna di atas
  * `{NodeID}` – nomor identifikasi node yang sesuai, yang dapat ditemukan di dashboard Jelastic
  * `{environment_domain}` \- domain environment yang dapat ditemukan di dashboard Jelastic

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-25.png" alt="mongodb replica set domain" width="60%"/>

**Note:** Anda perlu menyebutkan ID dari setiap node yang termasuk dalam replica set Anda, dalam bagian mongodbConnectionURI yang sesuai.

Sebagai hasilnya, Anda akan mendapatkan set string yang serupa:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-26.png" alt="mongodb replica set strings" width="100%"/>

Jangan lupa untuk **Save** file ini.

4\. Apache memerlukan modul khusus untuk dapat [berinteraksi dengan server MongoDB](<https://docs.jelastic.com/connection-to-mongodb-php/>), jadi Anda perlu menambahkannya dalam konfigurasi.

Untuk itu, buka folder **etc** dan buka file **php.ini**. Temukan bagian **[mongodb]** dan hapus titik koma sebelum baris **extension=mongodb.so** untuk mengaktifkan ekstensi ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-27.png" alt="mongodb replica set extension" width="100%"/>

5\. Untuk menerapkan konfigurasi baru, klik **Save** dalam jendela editor dan tekan tombol **Restart Nodes** di samping server aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-28.png" alt="mongodb replica set restart server" width="100%"/>

6\. Akhirnya, klik ikon **Open in Browser** di dekatnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-29.png" alt="mongodb replica set open" width="100%"/>

Sebagai hasilnya, dalam tab browser baru, Anda akan melihat informasi tentang anggota replica set Anda dan aksesibilitas mereka.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/replica-set-manual-setup/replica-set-manual-setup-30.png" alt="mongodb replica set information" width="100%"/>

Baris pertama menampilkan hasil pengecekan ketersediaan replica set, yang dilakukan dengan perintah "ping" (baris 6 dari **index.php**):

```
**object(stdClass)#11 (3) { [ "ok"]=> float(1) } **
```

Yang berarti bahwa replica set telah diuji dengan sukses.

Dalam blok keluaran berikutnya, informasi lengkap tentang host replica set ditampilkan, yang diperoleh melalui fungsi **getServers** (baris 11 dari **index.php**). Misalnya, Anda dapat memeriksa beberapa nilai yang ditetapkan selama proses pembuatan replica set ini:

  * **host** – alamat IP database tertentu
  * **port** – port anggota replikasi saat ini
  * **["is_primary"]** dan **["is_secondary"]** \- parameter yang menunjukkan status server (nilai yang sesuai untuk server MongoDB PRIMARY yang dipilih adalah true, false dan untuk dua server MongoDB lainnya - false, true masing-masing)

Selain itu, Anda dapat memulai dan menghentikan salah satu node database Anda dan menyegarkan halaman ini untuk melacak perubahan. Dengan cara ini, Anda dapat memastikan bahwa cluster MongoDB Anda tersedia dan berfungsi sebagaimana mestinya, dan dengan demikian dapat diterapkan untuk kasus nyata sekarang juga!

Dapatkan replica set MongoDB yang sangat tersedia sendiri dengan Jelastic PaaS, cukup daftar untuk [free trial di salah satu penyedia layanan](<https://jelastic.com/public-cloud-registration/>) dan ikuti instruksi.
