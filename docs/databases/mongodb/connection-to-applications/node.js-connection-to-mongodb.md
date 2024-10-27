---
sidebar_position: 4
slug: /node.js-connection-to-mongodb
title: Node.js Connection to MongoDB
---
# Node.js Application Connection to MongoDB

**MongoDB** adalah database NoSQL populer, yang didukung secara native oleh platform dan dapat dengan mudah diinstal di Cloud. Di bawah ini, kita akan mempertimbangkan contoh sederhana tentang cara menghubungkan tumpukan DB ini dari server aplikasi **Node.js** Anda.

1\. Untuk mengikuti panduan ini, Anda memerlukan server _Node.js_ dan _MongoDB_, baik di dalam platform (Anda dapat [create](<https://docs.dewacloud.com/docs/setting-up-environment/>) kapan saja) atau di sumber eksternal mana pun.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/nodejs-connection/nodejs-connection-1.png" alt="MongoDB Node.js environment" width="100%"/>

Dalam kasus kami, kedua instance di-host dalam satu environment.

2\. Sambungkan ke server aplikasi Anda melalui [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/nodejs-connection/nodejs-connection-2.png" alt="SSH connection to Node.js" width="100%"/>

3\. Selanjutnya, unduh dan instal [driver MongoDB resmi untuk Node.js](<https://github.com/mongodb/node-mongodb-native>):

```
npm install -s mongodb
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/nodejs-connection/nodejs-connection-3.png" alt="install MongoDB driver for Node.js" width="100%"/>

Dalam sekejap, paket akan terinstal dengan sukses.

4\. Sekarang, buat file dengan skrip untuk membangun koneksi dengan database Anda. Anda dapat menggunakan editor teks yang disukai untuk tugas ini, serta nama file apa pun dengan ekstensi _**.js**_ (misalnya, _**vim script.js**_).

```
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://{user}:{password}@{host}:{port}/{database}", { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
    if(!err) {
        console.log("You are connected!");
    };
    db.close();
});
```

Di sini, Anda perlu menyesuaikan [connection string](<https://docs.mongodb.com/manual/reference/connection-string/>) (semua informasi yang diperlukan disediakan dalam email untuk node MongoDB Anda):

  * `{user}` \- nama pengguna untuk masuk ke database
  * `{password}` \- kata sandi untuk pengguna yang sesuai
  * `{host}` \- tautan ke kontainer MongoDB Anda
  * `{port}` \- port yang digunakan untuk koneksi (gunakan yang default - _27017_)
  * `{database}` \- database yang diakses (misalnya, yang default - _admin_)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/nodejs-connection/nodejs-connection-4.png" alt="MongoDB connection script" width="100%"/>

Dengan skrip ini, Anda dapat mengakses server database yang ditentukan dan, jika koneksi berhasil dibangun, melihat frase “ _You are connected!_ ”.

5\. Mari kita jalankan kode tersebut, menggunakan perintah yang sesuai:

```
node script.js
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/nodejs-connection/nodejs-connection-5.png" alt="check Node.js connection to MongoDB" width="100%"/>

Jika semuanya ditentukan dengan benar, Anda harus melihat string “ _You are connected!_ ” di terminal. Selanjutnya, Anda dapat [menambah kode](<http://mongodb.github.io/node-mongodb-native/2.2/api/>) untuk mengeksekusi semua tindakan yang diperlukan.

## Baca Juga{#whats-next}

  * [Java Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb/>)
  * [PHP Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-for-php/>)
  * [Python Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-python/>)
  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>)