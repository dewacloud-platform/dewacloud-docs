---
sidebar_position: 1
slug: /connection-to-mongodb-java
title: Java Connection to MongoDB
---
# Java Connection to MongoDB

**MongoDB** adalah salah satu database NoSQL paling populer yang dapat dengan mudah digunakan di dalam platform. Dalam panduan ini, kami akan menunjukkan cara menghubungkan instance ini dengan aplikasi Anda dan melakukan beberapa operasi sederhana.

## Create Environment{#create-environment}

1\. Masuk ke akun PaaS Anda.

2\. [Buat environment](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan instance **MongoDB** (tersedia dalam bagian _NoSQL_). Server aplikasi yang Anda pilih untuk diterapkan dapat ditempatkan dalam environment yang sama atau terpisah (sebagai contoh, kami telah menambahkan _Tomcat_):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-1.png" alt="create mongodb environment" max-width="100%"/>

Klik **Create** dan tunggu beberapa menit untuk environment Anda muncul di dashboard.

## MongoDB Configurations{#mongodb-configurations}

1\. Periksa kotak masuk email Anda - seharusnya terdapat pesan dengan rincian database:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-2.png" alt="email mongo credentials" max-width="100%"/>

2\. Klik tombol **Open in browser** untuk node _MongoDB_ di dalam dashboard Anda atau gunakan _Access URL_ dari email untuk mengakses panel admin database.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-3.png" alt="mongo admin panel log in" width="70%"/>

Masuk menggunakan kredensial yang telah disebutkan di atas.

3\. Buat database baru dengan beralih ke tab **Databases** dan mengetikkan _Name_ untuknya (misalnya, _mongodb-connect_) dalam formulir _**Create Database**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-4.png" alt="create database" max-width="100%"/>

Klik **Save** untuk melanjutkan.

4\. Selanjutnya, Anda perlu membuat pengguna untuk DB ini - oleh karena itu, navigasikan ke tab **Execute** dan pilih database yang baru Anda buat melalui daftar drop-down yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-5.png" alt="execute command" max-width="100%"/>

Kemudian ketik perintah berikut dalam kolom input di atas:

```
db.createUser({ user: “**user_name** ”, pwd: “**password** ”, roles:[{ role: “readWrite”, db: “**db_name** "}]})
```

di mana:

  * _**user_name**_ \- nama yang diinginkan untuk pengguna DB baru Anda
  * _**password**_ \- kata sandi untuk pengguna ini
  * _**db_name**_ \- nama database tempat pengguna baru akan mendapat izin _read/write_

Setelah itu, klik tombol **Execute** dan tunggu respons keberhasilan.

5\. Sekarang, kembali ke dashboard dan buat file terpisah untuk menyimpan informasi koneksi database.

:::note
Anda dapat menentukan semua data yang diperlukan untuk koneksi langsung di dalam kode Anda (aplikasi). Dalam contoh yang diberikan, kami meletakkan pengaturan ini ke file, yang dibaca oleh aplikasi uji kami (disajikan dalam bagian panduan berikutnya).
:::

Klik tombol **Config** di sebelah server aplikasi Anda dalam environment yang sesuai (_Tomcat_ dalam kasus kami).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-6.png" alt="environment node config" max-width="100%"/>

Dalam tab yang terbuka, buat file _**mydb.cfg**_ baru di dalam direktori **home** dan tentukan string berikut di sana:

```
host={db_access_url}
dbname={db_name}
user={user_name}
password={password}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-7.png" alt="database connection data" max-width="100%"/>

di mana:

  * `{db_access_url}` \- tautan ke panel admin database (temukan di dalam email terkait atau klik **Open in browser** di sebelah node _MongoDB_ Anda dan salin dari bilah alamat) tanpa bagian _https://_
  * `{db_name}` \- nama database yang dibuat (_mongodb-connect_ dalam kasus kami)
  * `{user_name}` \- nama pengguna DB yang Anda tetapkan ke database ini (_dbuser_ dalam kasus kami)
  * `{password}` \- kata sandi pengguna yang bersangkutan

Jangan lupa untuk **Save** perubahan.

## Application Deployment{#application-deployment}

1\. Sekarang Anda dapat mendistribusikan proyek Anda ke environment yang sudah dipersiapkan.

Sebagai contoh, berikut adalah kode aplikasi kami, yang dimaksudkan untuk menguji koneksi ke node MongoDB kami.

**MongoManager.java**

```java
package example;

import com.mongodb.*;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.Properties;

public class MongoManager {

    static String host, dbname, user, password;

    public void addData(int repeats) {
        try {

            Properties prop = new Properties();
            prop.load(new FileInputStream(System.getProperty("user.home") + "/mydb.cfg"));

            host = prop.getProperty("host").toString();
            dbname = prop.getProperty("dbname").toString();
            user = prop.getProperty("user").toString();
            password = prop.getProperty("password").toString();

            System.out.println("host: " + host + "\ndbname: " + dbname + "\nuser: " + user + "\npassword: " + password);

            MongoCredential credential = MongoCredential.createCredential(user, dbname, password.toCharArray());
            MongoClient mongoClient = new MongoClient(new ServerAddress(host), Arrays.asList(credential));

            MongoDatabase db = mongoClient.getDatabase(dbname);

            try {
                db.getCollection("mycollection");
            } catch (Exception e) {
                db.createCollection("mycollection", null);
                System.out.println("Repeats: " + repeats);
                for (int i = 1; i <= repeats; i++) {
                    Document document = new Document("data", new Date());
                    db.getCollection("mycollection").insertOne(document);
                    System.out.println("INFO: row added " + document);
                }
            } finally {
                mongoClient.close();
            }
        } catch (IOException ex) {
        }
    }
}
```

2\. Setiap aplikasi dapat didistribusikan menggunakan [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-guide/>) platform (dengan file lokal/URL sebagai sumber) atau [Maven](<https://docs.dewacloud.com/docs/java-vcs-deployment/>) (untuk distribusi dari GIT/SVN).

Untuk pengujian, Anda dapat mencoba proyek [mongoclient.war](<https://www.virtuozzo.com/application-platform-docs/connection-to-mongodb-java/mongoclient.zip>) yang siap pakai, yang sudah berisi driver konektor yang sesuai (atau unduh [sumbernya](<https://www.virtuozzo.com/application-platform-docs/connection-to-mongodb-java/mongoclient.zip>) dan sesuaikan dengan cara yang Anda inginkan).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-8.png" alt="upload application" max-width="100%"/>

:::note
Untuk menghubungkan proyek Anda sendiri ke database MongoDB Anda, Anda perlu mengunggah perpustakaan _mongo-java-driver.jar_ yang sesuai ke folder _webapps/\{app_context\}/WEB-INF/lib_ dari server aplikasi Anda dengan aplikasi terdistribusi.
:::

3\. Sebagai hasilnya, Anda akan mendapatkan environment yang mirip dengan yang ada di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-9.png" alt="application deployed" max-width="100%"/>

## Connection Check Up{#connection-check-up}

1\. Klik **Open in Browser** di sebelah environment Anda dengan aplikasi contoh yang terdistribusi. Anda akan melihat jendela baru terbuka dengan formulir _**MongoDB Manager**_ yang sederhana ditampilkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-10.png" alt="mongo manager application" width="70%"/>

Ketik jumlah baris yang diinginkan (untuk ditambahkan ke database terkait) ke kolom yang sesuai dan klik tombol **Insert rows**.

2\. Tunggu sebentar sampai halaman berhenti diperbarui dan kembali ke panel admin MongoDB.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/connection-to-applications/java-connection/java-connection-11.png" alt="check mycollection" max-width="100%"/>

Navigasi ke database _mongodb-connect_ dalam daftar di sebelah kiri dan periksa koleksi baru _**mycollection**_ di dalamnya - seharusnya termasuk jumlah catatan yang disebutkan di atas, _5_ dalam kasus kami.

Seperti yang Anda lihat, semuanya berjalan lancar, karena aplikasi dapat terhubung ke DB kami. Sekarang Anda dapat menggunakan panel admin untuk melakukan operasi lain yang diperlukan pada database Anda dengan cara yang sama.

## Useful to Know{#useful-to-know}

Dokumentasi platform juga berisi sejumlah panduan tambahan untuk server MongoDB, yang mungkin berguna bahkan untuk pengguna berpengalaman dan akrab dengan subjek ini:

  * konfigurasikan [Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>) dengan jumlah node MongoDB yang tidak genap untuk menerapkan replikasi master-slave dan failover otomatis secara bersamaan
  * pastikan keamanan informasi melalui penyesuaian [Backups Scheduling](<https://docs.dewacloud.com/docs/database-backups/>) \- ini mencegah kehilangan data dan memungkinkan untuk memulihkannya dalam kasus kegagalan server yang tidak terduga
  * pelajari cara membangun [Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>) ke database Anda untuk mendapatkan kemampuan bekerja dengan itu melalui aplikasi klien yang sesuai, bahkan tanpa perlu masuk ke dashboard kami
  * baca panduan [Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>) untuk menemukan cara melakukan backup data secara manual dengan file dump dan kemudian memulihkannya dari dump yang telah dibuat sebelumnya jika diperlukan

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB Replica Set](<https://docs.dewacloud.com/docs/mongodb-replica-set/>)
  * [Remote Access to MongoDB](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)