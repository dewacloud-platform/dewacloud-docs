---
sidebar_position: 2
slug: /diaspora
title: Diaspora*
---
# How to Install Diaspora*

**Diaspora*** adalah jaringan sosial terdistribusi open-source yang dimiliki pengguna dengan lebih dari 1 juta akun di seluruh dunia. Jaringan ini terdiri dari node-node terpisah yang disebut pod. Setiap pod menjalankan salinan perangkat lunak Diaspora dan mewakili server web pribadi.

Mari kita pelajari cara membuat pod Diaspora* Anda sendiri dengan bantuan PaaS.

## Create Environment{#create-environment}

1. Masuk ke platform dashboard menggunakan kredensial Anda.

2. Tekan tombol **Create environment**. Pada wizard topologi lingkungan yang terbuka, navigasikan ke tab bahasa pemrograman **Ruby**. Pilih node berikut:

   - **Apache** application server
   - **MySQL** database
   - **Redis** data structure server

   Kemudian tentukan batas sumber daya untuk node yang dipilih. Terakhir, masukkan nama untuk environment Anda (mis. _diaspora-network_), dan klik tombol **Create**.

   ![environment wizard](#)

3. Setelah sekitar satu menit, environment baru Anda akan muncul di dashboard.

   ![environment for Diaspora created](#)

## Diaspora* Deployment{#diaspora-deployment}

1. Navigasikan ke [Diaspora GitHub repository](<https://github.com/diaspora/diaspora>). Di sana, ubah cabang ke _**master**_ dan klik tombol **Download ZIP**.

   ![download Diaspora zip](#)

   Anda akan ditawarkan untuk menyimpan arsip **.zip** dengan versi stabil Diaspora* terbaru.

2. Kemudian kembali ke platform dashboard dan unggah arsip ini dengan bantuan **Deployment manager**.

   ![upload Diaspora archive](#)

3. Kemudian tekan tombol **Deploy to..** di sebelah paket _diaspora-master.zip_. Pada jendela yang terbuka pilih tipe deployment _test_ dan klik **Deploy**.

   ![deploy Diaspora application](#)

   :::note
   Untuk menjalankan Diaspora* dalam mode produksi, Anda perlu memiliki sertifikat otoritas sertifikat (CA) yang terinstal di server Anda.
   :::

4. Proses deployment bisa memakan waktu, jadi harap bersabar. Akhirnya, Anda akan melihat konteks _test_ baru yang terdaftar untuk Apache.

   ![Diaspora application deployed](#)

## Database Configurations{#database-configurations}

1. Tekan tombol **Open in Browser** di sebelah node **MySQL** di environment Anda.

   ![open MySQL in browser](#)

2. Pada tab browser yang terbuka, masuk menggunakan kredensial MySQL yang Anda terima saat pembuatan environment dan navigasikan ke bagian **SQL**.

   ![database admin SQL tab](#)

3. Anda akan melihat formulir kosong untuk eksekusi permintaan SQL. Masukkan baris berikut di sana dan klik **Go** untuk membuat database baru bernama _diaspora_test_.

   ```
   CREATE DATABASE diaspora_test CHARACTER SET utf8;
   ```

   ![create Diaspora database](#)

4. Setelah itu buka platform dashboard lagi dan tekan tombol **Config** untuk server aplikasi **Apache**.

   ![Apache config button](#)

5. Pada manager konfigurasi yang terbuka, navigasikan ke folder **webroot > config**, temukan file _**database.yml.example**_ dan salin isinya.

   ![database yml example](#)

6. Kemudian buat file baru _**database.yml**_ di folder (**config**) yang sama dan tempelkan string yang telah disalin ke dalamnya.

   ![create database yml](#)

7. Sekarang perlu untuk mengatur koneksi antara aplikasi Anda dan database MySQL.

   Temukan bagian untuk konfigurasi MySQL. Tentukan _**host**_ MySQL Anda (URL ke database Anda tanpa _http://_) dan kredensial yang Anda terima saat pembuatan environment di string _**username**_ dan _**password**_.

   ![configure database connection](#)

   Jangan lupa untuk **Save** perubahan yang telah dibuat.

## Application Server and Redis Configurations{#application-server-and-redis-configurations}

1. Tekan tombol **Config** untuk server aplikasi **Apache** lagi.

   ![Apache config button](#)

2. Navigasikan ke folder **webroot > config** dan buat file baru _**diaspora.yml**_ di sana. Kemudian temukan file konfigurasi _**diaspora.yml.example**_ di folder yang sama, salin isinya, dan tempelkan ke file yang baru dibuat.

   ![create diaspora yml](#)

3. Setelah itu navigasikan ke bagian _**configuration**_ dalam file ini dan ubah nilai-nilai berikut:

   - Temukan string _**#url: “https://example.org/"**_ dan tempelkan URL environment Anda sebagai pengganti nilai _https://example.org/_ (Anda bisa menemukannya dengan menekan tombol **Open in Browser** untuk environment Anda dan menyalin URL di bilah alamat).

   ![configure environment URL](#)

   - Gulir sedikit ke bawah dan temukan pengaturan untuk koneksi Redis jarak jauh dalam file yang sama:

     ```
     ## URL for a remote redis.
     ## Don't forget to restrict the IP access!
     ## Leave it commented out for the default (localhost)
     #redis: 'redis://exmaple_host'
     #redis: 'redis://username:password@host:6379/0'
     #redis: 'unix:///tmp/redis.sock'
     ```

     Hapus simbol **#** dari baris _**#redis: ‘redis://username:password@host:6379/0’**_. Kemudian ganti nilai dalam parameter ini dengan data Anda sendiri, yang diterima melalui email setelah pembuatan environment.

     ![Redis DB credentials email](#)

     Ubah nilai _**username**_ dan _**password**_ ke kredensial untuk akses admin ke node Redis Anda. Hal yang sama dengan kata _**host**_: ganti dengan **alamat DNS** yang dapat Anda temukan dalam surat ini.

     ![configure Redis connection](#)

   - Akhirnya, temukan baris _**#require_ssl: true**_ dan ubah nilai _true_ menjadi _false_.

     ![set SSL config false](#)

   Saatnya untuk **Save** perubahan.

4. Kemudian navigasikan ke file _**application.rb**_, yang terletak di folder **config** yang sama. Temukan string _**#config.i18n.default_locale = :de**_ dan ubah nilainya menjadi _**:en**_.

   ![set default locale English](#)

   Jangan lupa untuk menekan tombol **Save** di panel atas.

5. Setelah itu temukan file _**defaults.yml**_ (masih di folder **config**). Di baris #142-144 (atau sekitar itu) Anda dapat melihat baris-baris berikut:

   ```
   i_am_a_dummy: # Remove if you add an actual override
   test:
   environment:
   url: 'http://localhost:9887/'
   ```

   ![dummy URL override](#)

   Silakan hapus baris yang dimulai dengan string _i_am_a_dummy_, dan ubah nilai parameter **url** menjadi URL host dari environment Anda (dapat dilihat di email yang Anda terima sebelumnya atau dengan menekan tombol **Open in Browser** di sebelah environment Anda dan menyalin URL di bilah alamat).

   Anda akan mendapatkan sesuatu seperti berikut:

   ![URL override to environment](#)

   **Save** perubahan.

6. Akhirnya, buat file baru _**rake_deploy**_ di folder **webroot**. Masukkan string berikut di sana:

   ```
   db:create
   db:schema:load
   assets:precompile
   ```

   ![configure rake deploy](#)

7. Tekan tombol **Save** sekali lagi dan **Restart** node Apache untuk menerapkan semua konfigurasi yang telah Anda buat.

   :::note
   Restart pertama server setelah menerapkan pengaturan baru mungkin memakan waktu, harap bersabar.
   :::

   ![Apache restart button](#)

8. Sekarang Anda dapat menekan tombol **Open in Browser** untuk environment Anda dan mulai bekerja dengan aplikasi Diaspora* Anda sendiri yang dihosting.

   ![Diaspora start page](#)

Nikmati!

## Baca Juga{#whats-next}

- [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
- [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>)
- [Redis Overview](<https://docs.dewacloud.com/docs/redis/>)
- [Redmine](<https://docs.dewacloud.com/docs/redmine/>)