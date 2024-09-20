---
sidebar_position: 5
slug: /diaspora-tutorial
title: Diaspora* Tutorial
---
# Cara Menginstal Diaspora*

**Diaspora*** adalah jaringan sosial terdistribusi yang dimiliki oleh pengguna dan bersifat open-source dengan lebih dari 1 juta akun di seluruh dunia. Ini terdiri dari node terpisah yang disebut pode. Setiap pode mengoperasikan salinan perangkat lunak Diaspora dan mewakili server web pribadi.

Mari kita cari tahu cara membuat pode Diaspora* Anda sendiri dengan bantuan PaaS.

## Buat Lingkungan{#create-environment}

1. Masuk ke dashboard platform menggunakan kredensial Anda.

2. Tekan tombol **Buat lingkungan**. Dalam wizard topologi lingkungan yang terbuka, navigasikan ke tab bahasa pemrograman **Ruby**. Pilih node berikut:

  * **Server aplikasi Apache**
  * **Database MySQL**
  * **Server struktur data Redis**

Kemudian tentukan batas sumber daya untuk node yang dipilih. Terakhir, masukkan nama untuk lingkungan Anda (misalnya, _diaspora-network_), dan klik tombol **Buat**.

![environment wizard](#)

3. Setelah sekitar satu menit, lingkungan baru Anda akan muncul di dashboard.

![environment for Diaspora created](#)

## Penyebaran Diaspora*{#diaspora-deployment}

1. Navigasikan ke [repositori GitHub Diaspora](<https://github.com/diaspora/diaspora>). Di sana, ubah cabang menjadi _**master**_ dan klik tombol **Download ZIP**.

![download Diaspora zip](#)

Anda akan ditawari untuk menyimpan arsip **.zip** dengan versi stabil terbaru Diaspora*.

2. Kemudian navigasikan kembali ke dashboard platform dan unggah arsip ini dengan bantuan **Deployment manager**.

![upload Diaspora archive](#)

3. Kemudian tekan tombol **Deploy to..** di samping paket _diaspora-master.zip_. Di jendela yang terbuka, pilih tipe penyebaran _test_ dan klik **Deploy**.

![deploy Diaspora application](#)

:::note
Untuk menjalankan Diaspora* dalam mode produksi, Anda perlu menginstal sertifikat otoritas (CA) di server Anda.
:::

4. Proses penyebaran dapat memakan waktu, jadi harap bersabar. Akhirnya, Anda akan melihat konteks _test_ baru yang terdaftar untuk Apache.

![Diaspora application deployed](#)

## Konfigurasi Database{#database-configurations}

1. Tekan tombol **Buka di Browser** di samping node **MySQL** di lingkungan Anda.

![open MySQL in browser](#)

2. Di tab browser yang terbuka, masuk menggunakan kredensial MySQL yang Anda terima saat membuat lingkungan dan navigasikan ke bagian **SQL**.

![database admin SQL tab](#)

3. Anda akan melihat formulir kosong untuk mengeksekusi permintaan SQL. Masukkan baris berikut dan klik **Go** untuk membuat database baru bernama _diaspora_test_.

```
CREATE DATABASE diaspora_test CHARACTER SET utf8;
```

![create Diaspora database](#)

4. Setelah itu, buka kembali dashboard platform dan tekan tombol **Config** untuk server aplikasi **Apache**.

![Apache config button](#)

5. Di manajer konfigurasi yang terbuka, navigasikan ke folder **webroot > config**, temukan file _**database.yml.example**_ dan salin isinya.

![database yml example](#)

6. Kemudian buat file baru _**database.yml**_ di folder yang sama (**config**) dan tempelkan string yang disalin ke dalamnya.

![crerate database yml](#)

7. Sekarang perlu mengatur koneksi antara aplikasi Anda dan database MySQL.

Temukan bagian untuk konfigurasi MySQL. Tentukan _**host**_ MySQL Anda (URL ke database Anda tanpa _http://_) dan kredensial yang Anda terima saat membuat lingkungan di string _**username**_ dan _**password**_.

![configure database connection](#)

Jangan lupa untuk **Simpan** perubahan yang dibuat.

## Konfigurasi Server Aplikasi dan Redis{#application-server-and-redis-configurations}

1. Tekan tombol **Config** untuk server aplikasi **Apache** sekali lagi.

![Apache config button](#)

2. Navigasikan ke folder **webroot > config** dan buat file baru _**diaspora.yml**_ di sana. Kemudian temukan file konfigurasi _**diaspora.yml.example**_ di folder yang sama, salin isinya, dan tempelkan ke dalam file yang baru dibuat.

![create diaspora yml](#)

3. Setelah itu, navigasikan ke bagian _**configuration**_ di file ini dan ubah nilai berikut:

  * Temukan string _**#url: “https://example.org/"**_ dan ganti nilai _https://example.org/_ dengan URL lingkungan Anda (Anda dapat menemukannya dengan menekan tombol **Buka di Browser** untuk lingkungan Anda dan menyalin URL di bilah alamat).

![configure environment URL](#)

  * Gulir sedikit ke bawah dan temukan pengaturan untuk koneksi Redis jarak jauh di file yang sama:

```
## URL untuk redis jarak jauh.
## Jangan lupa untuk membatasi akses IP!
## Biarkan ini dikomentari untuk default (localhost)
#redis: 'redis://exmaple_host'
#redis: 'redis://username:password@host:6379/0'
#redis: 'unix:///tmp/redis.sock'
```

Hapus simbol **#** dari baris _**#redis: 'redis://username:password@host:6379/0'**_. Kemudian ganti nilai dalam parameter ini dengan data Anda sendiri yang diterima melalui email setelah pembuatan lingkungan.

![Redis DB credentials email](#)

Ganti nilai _**username**_ dan _**password**_ dengan kredensial untuk akses admin ke node Redis Anda. Cerita yang sama berlaku untuk kata _**host**_: ganti dengan **alamat DNS** yang dapat Anda temukan dalam surat ini.

![configure Redis connection](#)

  * Akhirnya, temukan baris _**#require_ssl: true**_ dan ubah nilai _true_ menjadi _false_.

![set SSL config false](#)

Saatnya untuk **Simpan** perubahan.

4. Kemudian navigasikan ke file _**application.rb**_, yang terletak di folder **config** yang sama. Temukan string _**#config.i18n.default_locale = :de**_ dan ubah nilainya menjadi _**:en**_.

![set default locale English](#)

Jangan lupa untuk menekan tombol **Simpan** di panel di atas.

5. Setelah itu, temukan file _**defaults.yml**_ (masih di folder **config**). Di baris #142-144 (atau sekitar itu), Anda dapat melihat baris berikut:

```
i_am_a_dummy: # Hapus jika Anda menambahkan override yang sebenarnya
test:
  environment:
    url: 'http://localhost:9887/'
```

Silakan, hapus baris yang dimulai dengan string _i_am_a_dummy_, dan ubah nilai parameter **url** menjadi URL host lingkungan Anda (dapat dilihat dalam email yang Anda terima sebelumnya atau dengan menekan tombol **Buka di Browser** di samping lingkungan Anda dan menyalin URL di bilah alamat).

Anda harus mendapatkan sesuatu seperti ini:

![URL override to environment](#)

**Simpan** perubahan.

6. Terakhir, buat file baru _**rake_deploy**_ di folder **webroot**. Masukkan string berikut di sana:

```
db:create
db:schema:load
assets:precompile
```

![configure rake deploy](#)

7. Tekan tombol **Simpan** sekali lagi dan **Restart** node Apache untuk menerapkan semua konfigurasi yang telah Anda buat.

:::note
Restart pertama server setelah menerapkan pengaturan baru dapat memakan waktu, harap bersabar.
:::

![Apache restart button](#)

8. Sekarang Anda dapat menekan tombol **Buka di Browser** untuk lingkungan Anda dan mulai bekerja dengan aplikasi Diaspora* Anda sendiri yang dihosting.

![Diaspora start page](#)

Selamat menikmati!

## Baca Juga{#whats-next}

  * [Mengatur Lingkungan](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Hosting Database](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Ikhtisar Redis](<https://docs.dewacloud.com/docs/redis/>)
  * [Redmine](<https://docs.dewacloud.com/docs/redmine/>)