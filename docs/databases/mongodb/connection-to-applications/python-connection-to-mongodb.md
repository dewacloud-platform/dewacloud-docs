---
sidebar_position: 3
slug: /connection-to-mongodb-python
title: Python Connection to MongoDB
---
# Python Application Connection to MongoDB

**MongoDB** adalah salah satu database NoSQL paling populer, yang memungkinkan pengembang untuk dengan mudah bekerja dengan data yang disimpan. Tutorial ini memberikan contoh koneksi ke server MongoDB dari aplikasi **Python** Anda.

1\. Dalam kasus kami, kami memiliki environment dengan kontainer _Python_ dan _MongoDB_ di dalamnya (Anda dapat [create](<https://www.virtuozzo.com/application-platform-docs/setting-up-environment>) seperti itu kapan saja), tetapi instruksi ini juga cocok untuk server jarak jauh.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/python-connection/python-connection-1.png" alt="Python MongoDB environment" max-width="100%"/>

2\. Sambungkan node komputasi Anda melalui [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate>).
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/python-connection/python-connection-2.png" alt="SSH Gate" max-width="100%"/>

3\. Instal [driver MongoDB untuk Python](<https://github.com/mongodb/mongo-python-driver>) menggunakan perintah di bawah ini:

```
pip install pymongo
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/python-connection/python-connection-3.png" alt="install MongoDb driver for Python" max-width="100%"/>

4\. Siapkan skrip sederhana untuk memeriksa koneksi server DB Anda. Untuk itu, gunakan editor teks yang disukai dan buat file dengan ekstensi _**.py**_ (misalnya, _**vim script.py**_).

```
from pymongo import MongoClient
client = MongoClient("mongodb://{user}:{password}@{host}:{port}")
db = client.{database}
try:
    db.command("serverStatus")
except Exception as e:
    print(e)
else:
    print("You are connected!")
client.close()
```

Just adjust the [connection string](<https://docs.mongodb.com/manual/reference/connection-string/>) with relevant data, which can be gained from email for your MongoDB node:

  * `{user}` \- nama pengguna untuk masuk ke database
  * `{password}` \- kata sandi untuk pengguna yang sesuai
  * `{host}` \- tautan ke kontainer MongoDB Anda
  * `{port}` \- port yang digunakan untuk koneksi (gunakan yang default - _27017_)
  * `{database}` \- database yang diakses (misalnya, yang default _admin_)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/python-connection/python-connection-4.png" alt="MongoDB connection script" max-width="100%"/>

Skrip ini akan terhubung ke server database yang ditentukan dan akan mencoba mendapatkan statusnya. Jika terjadi kesalahan dalam proses, deskripsinya akan dicetak; jika tidak, hanya string “ _You are connected!_ ” yang akan ditampilkan.

5\. Jadi, eksekusi kode dalam file dengan menjalankan perintah yang sesuai:

```
python script.py
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/python-connection/python-connection-5.png" alt="run DB connection script" max-width="100%"/>

String “ _You are connected!_ ” memastikan bahwa aplikasi berhasil menghubungkan server DB, sehingga Anda dapat mulai mengelola node database dengan [menambah kode](<http://api.mongodb.com/python/current/api/pymongo/>) dengan operasi lain.

## Baca Juga{#whats-next}

  * [Java Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-java/>)
  * [PHP Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-php/>)
  * [Node.js Connection to MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-nodejs/>)
  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>)