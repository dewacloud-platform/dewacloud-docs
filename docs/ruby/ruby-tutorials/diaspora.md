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

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/01-environment-wizard.png" alt="environment wizard" max-width="100%"/>

3. Setelah sekitar satu menit, environment baru Anda akan muncul di dashboard.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/02-environment-for-diaspora-created.png" alt="environment for Diaspora created" max-width="100%"/>

## Diaspora* Deployment{#diaspora-deployment}

1. Navigasikan ke [Diaspora GitHub repository](<https://github.com/diaspora/diaspora>). Di sana, ubah cabang ke _**master**_ dan klik tombol **Download ZIP**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/03-download-diaspora-zip.png" alt="download Diaspora zip" max-width="100%"/>

   Anda akan ditawarkan untuk menyimpan arsip **.zip** dengan versi stabil Diaspora* terbaru.

2. Kemudian kembali ke platform dashboard dan unggah arsip ini dengan bantuan **Deployment manager**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/04-upload-diaspora-archive.png" alt="upload Diaspora archive" width="60%"/>

3. Kemudian tekan tombol **Deploy to..** di sebelah paket _diaspora-master.zip_. Pada jendela yang terbuka pilih tipe deployment _test_ dan klik **Deploy**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/05-deploy-diaspora-application.png" alt="deploy Diaspora application" width="60%"/>

   :::note
   Untuk menjalankan Diaspora* dalam mode produksi, Anda perlu memiliki sertifikat otoritas sertifikat (CA) yang terinstal di server Anda.
   :::

4. Proses deployment bisa memakan waktu, jadi harap bersabar. Akhirnya, Anda akan melihat konteks _test_ baru yang terdaftar untuk Apache.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/06-diaspora-application-deployed.png" alt="Diaspora application deployed" max-width="100%"/>

## Database Configurations{#database-configurations}

1. Tekan tombol **Open in Browser** di sebelah node **MySQL** di environment Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/07-open-mysql-in-browser.png" alt="open MySQL in browser" max-width="100%"/>

2. Pada tab browser yang terbuka, masuk menggunakan kredensial MySQL yang Anda terima saat pembuatan environment dan navigasikan ke bagian **SQL**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/08-database-admin-sql-tab.png" alt="database admin SQL tab" max-width="100%"/>

3. Anda akan melihat formulir kosong untuk eksekusi permintaan SQL. Masukkan baris berikut di sana dan klik **Go** untuk membuat database baru bernama _diaspora_test_.

   ```
   CREATE DATABASE diaspora_test CHARACTER SET utf8;
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/09-create-diaspora-database.png" alt="create Diaspora database" width="60%"/>

4. Setelah itu buka platform dashboard lagi dan tekan tombol **Config** untuk server aplikasi **Apache**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/10-apache-config-button.png" alt="Apache config button" width="80%"/>

5. Pada manager konfigurasi yang terbuka, navigasikan ke folder **webroot > config**, temukan file _**database.yml.example**_ dan salin isinya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/11-database-yml-example.png" alt="database yml example" max-width="100%"/>

6. Kemudian buat file baru _**database.yml**_ di folder (**config**) yang sama dan tempelkan string yang telah disalin ke dalamnya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/12-crerate-database-yml.png" alt="create database yml" max-width="100%"/>

7. Sekarang perlu untuk mengatur koneksi antara aplikasi Anda dan database MySQL.

   Temukan bagian untuk konfigurasi MySQL. Tentukan _**host**_ MySQL Anda (URL ke database Anda tanpa _http://_) dan kredensial yang Anda terima saat pembuatan environment di string _**username**_ dan _**password**_.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/13-configure-database-connection.png" alt="configure database connection" max-width="100%"/>

   Jangan lupa untuk **Save** perubahan yang telah dibuat.

## Application Server and Redis Configurations{#application-server-and-redis-configurations}

1. Tekan tombol **Config** untuk server aplikasi **Apache** lagi.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/10-apache-config-button.png" alt="Apache config button" width="80%"/>

2. Navigasikan ke folder **webroot > config** dan buat file baru _**diaspora.yml**_ di sana. Kemudian temukan file konfigurasi _**diaspora.yml.example**_ di folder yang sama, salin isinya, dan tempelkan ke file yang baru dibuat.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/14-create-diaspora-yml.png" alt="create diaspora yml" max-width="100%"/>

3. Setelah itu navigasikan ke bagian _**configuration**_ dalam file ini dan ubah nilai-nilai berikut:

   - Temukan string _**#url: “https://example.org/"**_ dan tempelkan URL environment Anda sebagai pengganti nilai _https://example.org/_ (Anda bisa menemukannya dengan menekan tombol **Open in Browser** untuk environment Anda dan menyalin URL di bilah alamat).

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/15-configure-environment-url.png" alt="configure environment URL" max-width="100%"/>

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

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/16-redis-db-credentials-email.png" alt="Redis DB credentials email" max-width="100%"/>

     Ubah nilai _**username**_ dan _**password**_ ke kredensial untuk akses admin ke node Redis Anda. Hal yang sama dengan kata _**host**_: ganti dengan **alamat DNS** yang dapat Anda temukan dalam surat ini.

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/17-configure-redis-connection.png" alt="configure Redis connection" max-width="100%"/>

   - Akhirnya, temukan baris _**#require_ssl: true**_ dan ubah nilai _true_ menjadi _false_.

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/18-set-ssl-config-false.png" alt="set SSL config false" max-width="100%"/>

   Saatnya untuk **Save** perubahan.

4. Kemudian navigasikan ke file _**application.rb**_, yang terletak di folder **config** yang sama. Temukan string _**#config.i18n.default_locale = :de**_ dan ubah nilainya menjadi _**:en**_.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/19-set-default-locale-english.png" alt="set default locale English" max-width="100%"/>

   Jangan lupa untuk menekan tombol **Save** di panel atas.

5. Setelah itu temukan file _**defaults.yml**_ (masih di folder **config**). Di baris #142-144 (atau sekitar itu) Anda dapat melihat baris-baris berikut:

   ```
   i_am_a_dummy: # Remove if you add an actual override
   test:
   environment:
   url: 'http://localhost:9887/'
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/20-dummy-url-override.png" alt="dummy URL override" max-width="100%"/>

   Silakan hapus baris yang dimulai dengan string _i_am_a_dummy_, dan ubah nilai parameter **url** menjadi URL host dari environment Anda (dapat dilihat di email yang Anda terima sebelumnya atau dengan menekan tombol **Open in Browser** di sebelah environment Anda dan menyalin URL di bilah alamat).

   Anda akan mendapatkan sesuatu seperti berikut:

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/21-url-override-to-environment.png" alt="URL override to environment" max-width="100%"/>

   **Save** perubahan.

6. Akhirnya, buat file baru _**rake_deploy**_ di folder **webroot**. Masukkan string berikut di sana:

   ```
   db:create
   db:schema:load
   assets:precompile
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/22-configure-rake-deploy.png" alt="configure rake deploy" width="80%"/>

7. Tekan tombol **Save** sekali lagi dan **Restart** node Apache untuk menerapkan semua konfigurasi yang telah Anda buat.

   :::note
   Restart pertama server setelah menerapkan pengaturan baru mungkin memakan waktu, harap bersabar.
   :::

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/23-apache-restart-button.png" alt="Apache restart button" max-width="100%"/>

8. Sekarang Anda dapat menekan tombol **Open in Browser** untuk environment Anda dan mulai bekerja dengan aplikasi Diaspora* Anda sendiri yang dihosting.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Diaspora/24-diaspora-start-page.png" alt="Diaspora start page" max-width="100%"/>

Nikmati!

## Baca Juga{#whats-next}

- [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
- [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>)
- [Redis Overview](<https://docs.dewacloud.com/docs/redis/>)
- [Redmine](<https://docs.dewacloud.com/docs/redmine/>)
