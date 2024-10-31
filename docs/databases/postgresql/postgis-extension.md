---
sidebar_position: 7
slug: /postgis-extension-to-postgresql-for-geoserver-hosting
title: PostGIS Extension
---
# PostGIS Extension to PostgreSQL Database for Hosting GeoServer

**PostGIS** adalah ekstensi spasial untuk database objek-relasional PostgreSQL, yang menambahkan dukungan untuk objek geografis, memungkinkan kueri lokasi dijalankan dalam SQL. Dengan ekstensi PostGIS, PostgreSQL dapat digunakan sebagai database spasial backend untuk GIS.

**GeoServer**, di sisi lain, adalah server perangkat lunak Java sumber terbuka yang digunakan untuk menghasilkan, membagikan, dan mengelola data geospasial. Menggunakan standar terbuka, GeoServer menerbitkan data dari semua sumber data spasial utama.

Mari kita selidiki bagaimana cara memperluas database PostgreSQL dengan PostGIS dan menyebarkan GeoServer ke environment untuk bekerja dengan data geospasial yang dibagikan.

## Create Environment{#create-environment}

Pertama-tama, Anda perlu membuat environment sebagai dasar untuk aplikasi Anda.

1\. Masuk ke akun PaaS Anda dan klik tombol **Create environment**.

2\. Pilih **Tomcat 7** sebagai server aplikasi Anda dan **PostgreSQL 9** sebagai database yang ingin Anda gunakan. Atur batas sumber daya untuk setiap node dan masukkan nama environment Anda (misalnya, _geoserver_). Konfirmasikan pembuatan environment.

![postgis extension to postgresql for geoserver hosting create postgis environment](#)

3\. Dalam beberapa menit, environment Anda akan muncul di dashboard.

![postgis extension to postgresql for geoserver hosting geoserver environment](#)

## GeoServer Deployment{#geosever-deployment}

Sekarang kita dapat melanjutkan untuk menyebarkan perangkat lunak GeoServer.

1\. Buka **[GeoServer official web-site](<http://geoserver.org/>)** dan unduh rilis stabil terbaru sebagai arsip web.

![postgis extension to postgresql for geoserver hosting download geoserver](#)

2\. Setelah unduhan selesai, ekstrak arsip yang Anda dapatkan.

![postgis extension to postgresql for geoserver hosting extracted archive](#)

3\. Kembali ke dashboard platform dan unggah file _**geoserver.war**_, yang terletak di folder dengan konten arsip yang diekstrak.

![postgis extension to postgresql for geoserver hosting upload geoserver](#)

![postgis extension to postgresql for geoserver hosting geoserver war file](#)

4\. Terakhir, tekan tombol **Deploy to..** di sebelah file **.war** ini dalam daftar paket dan pilih environment yang telah dibuat sebelumnya untuk menyebarkan aplikasi GeoServer ke sana.

![postgis extension to postgresql for geoserver hosting deploy geoserver](#)

![postgis extension to postgresql for geoserver hosting geoserver deployment](#)

## PostGIS Configurations{#postgis-configurations}

Pada langkah ini, kita akan menambahkan ekstensi PostGIS untuk database PostgreSQL kita.

1\. Buka **phpPgAdmin** untuk database PostgreSQL di environment Anda dengan menekan tombol **Open in browser** di sebelahnya.

![postgis extension to postgresql for geoserver hosting open geoserver](#)

2\. Masuk dengan kredensial PostgreSQL yang Anda terima melalui email setelah pembuatan environment.

![postgis extension to postgresql for geoserver hosting postgresql credentials](#)

3\. Sekarang Anda perlu membuat database baru. Untuk itu, tekan tombol **Create database** di jendela yang terbuka.

![postgis extension to postgresql for geoserver hosting create postgres database](#)

4\. Isi formulir:

  * sebutkan nama untuk database baru (dalam kasus ini, _nyc_)
  * pilih pengkodean _UTF8_ dari daftar drop-down
  * isi kolom lain jika diperlukan

Klik tombol **Create**.

![postgis extension to postgresql for geoserver hosting new database creation](#)

5\. Pilih database yang baru dibuat di daftar yang dapat diperluas di panel kiri dan navigasikan ke tab SQL.

![postgis extension to postgresql for geoserver hosting sql nyc database](#)

6\. Masukkan kueri SQL berikut dan eksekusi:

```
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;
CREATE EXTENSION fuzzystrmatch;
CREATE EXTENSION postgis_tiger_geocoder;
```

dimana atributnya adalah:

  * _postgis_: untuk mengaktifkan PostGIS (termasuk raster)
  * _postgis_topology_: untuk mengaktifkan Topologi
  * _fuzzystrmatch_: pencocokan fuzzy diperlukan untuk Tiger
  * _postgis_tiger_geocoder_: untuk mengaktifkan US Tiger Geocoder

:::note
Jangan lupa untuk mencentang garis **Paginate results** di bawah formulir agar tidak terjadi kesalahan.
:::

![postgis extension to postgresql for geoserver hosting queries executing](#)

Itu saja. Ekstensi PostGIS telah diaktifkan dan dapat digunakan.

## Dataset Import{#dataset-import}

Sekarang mari kita impor dump PostGIS dari dataset ke database PostgreSQL kita. Sebagai contoh, kita akan menggunakan [nyc_buildings.zip](<http://docs.geoserver.org/stable/en/user/_downloads/nyc_buildings.zip>) dengan dataset bangunan dari New York City.

1\. Unduh paket [nyc_buildings.zip](<http://docs.geoserver.org/stable/en/user/_downloads/nyc_buildings.zip>) dan ekstrak. Anda akan mendapatkan file _**nyc_buildings.sql**_.

2\. Masuk ke **phpPgAdmin** untuk PostgreSQL dengan kredensial Anda dan navigasikan kembali ke tab SQL untuk database Anda dengan ekstensi PostGIS (dalam kasus kami, database _**nyc**_).

![postgis extension to postgresql for geoserver hosting sql nyc database](#)

3\. Telusuri dataset yang diekstrak (misalnya _nyc_buildings.sql_) di komputer lokal Anda dan unggah sebagai skrip SQL.

![postgis extension to postgresql for geoserver hosting execute sql query](#)

4\. Centang garis _Paginate results_ di bawah formulir dan **Eksekusi** skrip tersebut.

## Connect GeoServer with Database{#connect-geoserver-with-database}

Sekarang kita perlu menghubungkan aplikasi GeoServer kita dengan database PostgreSQL. Untuk ini, kita akan membuat _**data store**_ untuk database **nyc** kita.

1\. Navigasikan ke dashboard platform dan buka environment GeoServer (tekan **Open in browser** di sebelahnya).

![postgis extension to postgresql for geoserver hosting open geoserver](#)

2\. Di tab browser yang terbuka, masuk dengan kredensial GeoServer default (_admin/geoserver_).

![postgis extension to postgresql for geoserver hosting log in to geoserver](#)

3\. Kemudian navigasikan ke item menu **Data > Stores** di panel kiri dan klik baris **Add new Store**.

![postgis extension to postgresql for geoserver hosting add new store](#)

4\. Di jendela **New data source**, tekan opsi _**PostGIS - PostGIS Database**_.

![postgis extension to postgresql for geoserver hosting postgis source](#)

5\. Di jendela **New Vector Data Source** yang muncul, isi kolom berikut:

  * **Basic Store Info**  
Pilih **cite** _Workspace_ dari daftar drop-down.  
Masukkan **Data Source Name** (misalnya, _nyc_buildings_) dan **Description** singkat.

![postgis extension to postgresql for geoserver hosting basic store info](#)

  * Parameter **Connection** PostGIS database  
_**host**_ \- host database dapat diambil dari tombol _Info_

![postgis extension to postgresql for geoserver hosting database host](#)

_**database**_ \- nama database yang telah Anda buat dengan ekstensi PostGIS (dalam kasus kami, **nyc**)  
_**user**_ dan _**passwd**_ \- kredensial untuk PostgreSQL yang Anda terima saat membuat environment

Kolom lainnya diisi secara default, Anda dapat membiarkan nilai awal.

![postgis extension to postgresql for geoserver hosting data source connection parameters](#)

Juga, gulir sedikit lebih rendah dan periksa apakah garis **Validate connections** dicentang. Kemudian tekan **Save**.

![postgis extension to postgresql for geoserver hosting validate connections](#)

Koneksi telah dibuat dan sebagai hasilnya, Anda dapat melihat _nyc_buildings_ yang diunggah ke PostgreSQL dalam daftar sumber daya aplikasi.

## Publish and Preview Dataset{#publish-and-preview-dataset}

Akhirnya, kita perlu melakukan beberapa konfigurasi untuk menerbitkan dataset (misalnya, _nyc_buildings_) dan membuat objek geografis yang diperlukan siap digunakan.

1\. **New Vector Data Source** (yang disimpan di langkah sebelumnya) akan muncul dalam daftar **New Layers**.  
Tekan **Publish** di sebelah layer yang ditambahkan (misalnya, _nyc_buildings_).

![postgis extension to postgresql for geoserver hosting layer publishing](#)

2\. Di jendela **Edit Layer** yang terbuka, masukkan **Title** dan **Abstract** untuk sumber daya Anda.

![postgis extension to postgresql for geoserver hosting layer title](#)

3\. Gulir sedikit lebih rendah dan tekan tombol _**Compute from data**_ dan _**Compute from native bounds**_ di blok konfigurasi **Bounding Boxes**.

![postgis extension to postgresql for geoserver hosting bounding boxes](#

)

4\. Kemudian beralih ke tab **Publishing** dan pastikan gaya layer **polygon** dipilih sebagai default.

![postgis extension to postgresql for geoserver hosting layer style](#)

5\. Akhirnya, gulir ke bawah halaman dan tekan tombol **Save**. Layer telah diterbitkan.

6\. Sekarang Anda dapat navigasi ke item menu **Data > Layer Preview**. Di sini Anda akan melihat daftar semua layer yang dikonfigurasi di GeoServer dengan pratinjau yang disediakan dalam berbagai format untuk masing-masing.

![postgis extension to postgresql for geoserver hosting layer preview](#)

7\. Tekan tombol **OpenLayers** di sebelah layer Anda (_NYC buildings_, dalam kasus kami).

![postgis extension to postgresql for geoserver hosting openlayers](#)

**Catatan**: Anda dapat memilih mode pratinjau lainnya atau mengunduh sumber daya Anda dalam format yang berbeda menggunakan opsi di daftar drop-down di sebelah layer yang diperlukan.  
---  

8\. Sebagai hasilnya, Anda akan melihat objek geografis yang diperlukan. Dalam kasus kami, ini adalah peta interaktif bangunan di New York City.

![postgis extension to postgresql for geoserver hosting nyc map](#)

Anda dapat menggunakan Peta Pratinjau untuk memperbesar dan menggeser sekitar dataset, serta menampilkan atribut fitur. Nikmati!

## Baca Juga{#whats-next}

  * [Java Connection to PostgreSQL](<https://docs.dewacloud.com/docs/java-connection-to-postgresql/>)
  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres/>)