---
sidebar_position: 1
slug: /mongodb-auto-clustering
title: Auto-Clustering
---
# MongoDB Auto-Clustering

Virtuozzo Application Platform menyediakan pengelompokan otomatis untuk tumpukan **MongoDB**, yang memungkinkan Anda untuk membuat [replica set](<https://www.mongodb.com/docs/manual/replication/>) yang andal untuk database Anda dengan sekali klik. Solusi yang diterapkan memberikan serangkaian manfaat:

  * **redundansi dan ketersediaan data yang tinggi** \- beberapa salinan data di server database yang berbeda menawarkan tingkat toleransi kesalahan yang tinggi terhadap kehilangan data
  * **skala dan autodiscovery** – node baru yang ditambahkan selama [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) terhubung ke cluster dengan semua penyesuaian yang diperlukan diterapkan secara otomatis
  * **failover otomatis** – node database yang tidak tersedia sementara atau memiliki latensi tinggi secara otomatis dikecualikan dari cluster dan ditambahkan kembali setelah koneksi dipulihkan

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-1.png" alt="MongoDB Replica Set" width="60%"/>

Semua manfaat ini dapat dicapai hanya dalam beberapa klik dalam wizard topologi. Jelajahi langkah-langkah di bawah ini untuk mengaktifkan auto-clustering untuk database MongoDB Anda di PaaS.

## MongoDB Auto-Clustering Specifics{#mongodb-auto-clustering-specifics}

Sebuah [replica set](<https://www.mongodb.com/docs/manual/replication/>) adalah sekelompok setidaknya tiga instance MongoDB yang mempertahankan data yang sama. Salah satu node dari set dianggap sebagai primary dan bertanggung jawab untuk semua operasi tulis. Ia mencatat semua perubahan dalam _**oplog**_ sehingga node lainnya (_secondaries_) dapat mencerminkan data secara akurat di primary. Jika _primary_ menjadi tidak tersedia, yang baru akan secara otomatis dipilih dari secondaries aktif setelah penundaan singkat.

Nilai default untuk [pengaturan](<https://www.mongodb.com/docs/manual/reference/replica-configuration/#settings>) cluster yang dikonfigurasi secara otomatis disediakan di bawah ini:

  * _**“chainingAllowed” : true**_ \- memungkinkan anggota sekunder untuk mereplikasi dari sekunder lainnya
  * _**“heartbeatIntervalMillis” : 2000**_ \- frekuensi dalam milidetik untuk heartbeat
  * _**“heartbeatTimeoutSecs” : 10**_ \- timeout dalam detik yang ditunggu oleh anggota replica set untuk heartbeat yang sukses sebelum menandai node yang sesuai sebagai tidak dapat diakses.
  * _**“electionTimeoutMillis” : 10000**_ \- timeout dalam milidetik untuk mendeteksi jika anggota _primary_ tidak dapat dijangkau
  * _**“catchUpTimeoutMillis” : -1**_ \- timeout dalam milidetik (_-1_ untuk waktu tak terbatas) bagi primary yang baru terpilih untuk mengejar ketertinggalan dengan anggota yang memiliki tulisan lebih baru
  * _**“catchUpTakeoverDelayMillis” : 30000**_ \- timeout dalam milidetik yang diberikan oleh node sekunder, yang lebih maju dari primary saat ini, untuk mengejar sebelum memulai pemilihan menjadi primary yang baru

:::tip
Jika perlu, pengaturan ini dapat dikonfigurasi ulang secara manual setelah instalasi cluster menggunakan perintah `rs.reconfig()`. Periksa bagian di bawah ini untuk belajar bagaimana Anda dapat terhubung ke cluster MongoDB Anda melalui SSH dan menjalankan perintah yang diperlukan.
:::

Poin penting lainnya adalah keamanan dan perlindungan dari akses yang tidak diinginkan. [Autentikasi](<https://www.mongodb.com/docs/manual/core/security-internal-authentication/>) adalah proses jaminan keamanan yang penting yang memaksa setiap anggota replica set untuk mengidentifikasi dirinya selama komunikasi internal dengan menggunakan file kunci autentikasi unik khusus. Platform secara otomatis menerapkan konfigurasi yang diperlukan (di _**/etc/mongod.conf**_) dan menghasilkan kunci (terletak di _**/home/jelastic/mongodb.key**_) selama konfigurasi cluster. Juga, untuk memastikan konsistensi, file ini ditambahkan ke file _**[redeploy.conf](<https://www.virtuozzo.com/application-platform-docs/container-redeploy/#saving-custom-data-during-container-redeploy>)**_ sehingga tetap ada melalui semua operasi siklus hidup kontainer.

MongoDB menggunakan mesin penyimpanan _**[WiredTiger](<https://www.mongodb.com/docs/manual/core/wiredtiger/>)**_ secara default. Ini memastikan kinerja tinggi (berkat algoritma non-locking) dan pemanfaatan biaya/sumber daya yang efektif. Opsi default untuk WiredTiger dioptimalkan untuk menjalankan satu instance _mongod_ per server, yang juga cocok untuk kontainer platform. MongoDB memanfaatkan baik cache internal WiredTiger maupun cache sistem file. Ukuran _cache internal_ adalah 50% dari total RAM dikurangi 1 GB (tetapi tidak kurang dari 256 MB), sementara _cache sistem file_ mengoperasikan memori bebas yang tidak digunakan oleh WiredTiger atau proses lainnya. Untuk informasi lebih lanjut tentang [konfigurasi WiredTiger](<https://www.mongodb.com/docs/manual/reference/configuration-options/#storage-wiredtiger-options>), lihat dokumentasi resmi MongoDB.

Satu fitur unik lainnya dari auto-cluster MongoDB adalah deteksi otomatis node baru yang ditambahkan melalui [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) dan penyertaan mereka ke dalam replica set tanpa tindakan manual. Demikian pula, node dikecualikan dari cluster saat melakukan scaling in.

## Creating MongoDB Cluster{#creating-mongodb-cluster}

Seluruh proses pembuatan auto-cluster MongoDB dapat dilakukan dalam beberapa klik sederhana.

1\. Buka wizard topologi dengan tombol **New Environment** di pojok kiri atas dashboard, pilih database **MongoDB**, dan aktifkan **[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)** melalui switcher yang sesuai.


<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-2.png" alt="MongoDB auto-clustering" max-width="100%"/>

:::tip
Beberapa spesifikasi topologi cluster MongoDB tercantum di bawah ini: 4 GiB RAM (32 cloudlets) direkomendasikan untuk pekerjaan yang tepat dari node replica set. Secara default, jumlah cloudlets ini ditambahkan sebagai batas skala dinamis, sehingga Anda tidak akan dikenakan biaya kecuali sumber daya benar-benar digunakan. Jumlah minimum node yang diperlukan untuk auto-cluster MongoDB adalah 3.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-3.png" alt="MongoDB recommended specs" width="50%"/>
:::

Konfigurasikan parameter lainnya sesuai kebutuhan Anda ([public IPs](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.) dan klik **Create**.

2\. Tunggu beberapa menit hingga platform mengonfigurasi cluster untuk Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-4.png" alt="MongoDB cluster" max-width="100%"/>

3\. Setelah instalasi, Anda akan menerima email dengan kredensial replica set:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-5.png" alt="email with MongoDB credentials" max-width="100%"/>

Anda dapat menggunakan kredensial ini untuk mengakses panel admin atau untuk membangun koneksi dari aplikasi Anda ke node primary dari replica set.

:::tip
Seperti yang disebutkan, setiap node sekunder dapat menjadi primary jika terjadi kegagalan. Selain itu, pemilihan akan terjadi jika cluster di-restart, dan mungkin node primary yang baru akan muncul. Jadi, string koneksi aplikasi menjadi tidak valid. Untuk menghindari masalah ini, string koneksi harus berisi nama replica set, semua hostname anggota, dan preferensi baca (jika perlu untuk memindahkan node primary untuk menangani baca atau memastikan ketersediaan tinggi cluster dan failover). Berikut adalah contoh string koneksi untuk aplikasi node.js:
```
client = new MongoClient("mongodb://admin:cbfef7418d@node540102-mongo-cluster.madrid.jele.io:27017,node540096-mongo-cluster.madrid.jele.io:27017,node540099-mongo-cluster.madrid.jele.io:27017/admin", { useUnifiedTopology: true, readPreference: 'primaryPreferred', replicaSet: 'rs0' });
```
Di mana:
- `useUnifiedTopology: true` - memaksa MongoDB untuk menggunakan mesin Server Discover and Monitoring yang baru.
- `readPreference: 'primaryPreferred'` - operasi baca dari primary tetapi jika tidak tersedia, operasi membaca dari anggota sekunder.
- `replicaSet: 'rs0'` - secara default, nama replica set adalah rs0 di platform. Anda dapat mengamati nama replica set di setiap node cluster di file mongod.conf atau di prompt shell mongo.
:::

Koneksi aplikasi yang diuraikan di atas dianggap telah dibuat dalam satu platform hosting. Namun, jika diperlukan, Anda dapat membuat koneksi aplikasi eksternal ke replica set melalui [SLB](<https://docs.dewacloud.com/docs/shared-load-balancer/>). Dalam hal ini, Anda hanya perlu mempertahankan koneksi ke node primary untuk read/writes melalui [endpoints](<https://docs.dewacloud.com/docs/endpoints/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-6.png" alt="MongoDB endpoint" max-width="100%"/>

Jika Anda perlu membaca dari sekunder, Anda harus menyesuaikan kode aplikasi Anda untuk melakukan pembacaan dari sekunder dalam thread terpisah seperti yang Anda lakukan untuk primary. Bagaimanapun, untuk kasus seperti itu, Anda harus menghapus parameter _**replicaSet**_ dari string koneksi sehingga terlihat sebagai berikut:

```
client = new MongoClient("mongodb://admin:bfef7418d@node540102-mongo-cluster.madrid.jele.io:11013/admin", { useUnifiedTopology: true });
```

4\. Secara default, auto-cluster memanfaatkan panel administrasi [Mongo Express](<https://github.com/mongo-express/mongo-express>) yang menyediakan dukungan untuk replica set.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-7.png" alt="Mongo Express admin panel" max-width="100%"/>

5\. Anda juga dapat terhubung ke database Anda melalui mongo shell langsung di terminal Anda (misalnya, menggunakan opsi **[Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)** yang terintegrasi).

```
mongosh -u {user} -p {password} {DB_name}
```

:::tip
Jika bekerja dengan versi database yang lebih lama, gunakan perintah mongo (untuk MongoDB 3.x, 4.x) alih-alih mongosh (untuk MongoDB 6.x, 7.x) dengan parameter yang sama.
:::
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-8.png" alt="Mongo SSH connection" max-width="100%"/>

Di mana:

  * `{user}` – nama pengguna administrator (dikirim ke email Anda, _admin_ secara default)
  * `{password}` – kata sandi untuk pengguna DB yang sesuai (dapat ditemukan dalam email yang sama)
  * `{DB_name}` – nama database yang ingin Anda akses (kami akan menggunakan yang default _admin_)

6\. Anda dapat memeriksa status replica set dengan perintah yang sesuai:

```
rs.status()
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/high-availability-cluster/auto-clustering/auto-clustering-9.png" alt="Mongo replica status" max-width="100%"/>

Seperti yang Anda lihat, replica set (dengan nama _**rs0**_ default) sedang berjalan. Perintah [replica set lainnya](<https://www.mongodb.com/docs/manual/reference/method/js-replication/>) dapat ditemukan di dokumentasi resmi. Misalnya, gunakan operasi _**rs.conf()**_ jika Anda ingin melihat konfigurasi replica set.

## Baca Juga{#whats-next}

  * [Auto-Clustering of Instances](<https://docs.dewacloud.com/docs/auto-clustering/>)
  * [Replica Set Manual Setup](<https://docs.dewacloud.com/docs/mongodb-replica-set/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)