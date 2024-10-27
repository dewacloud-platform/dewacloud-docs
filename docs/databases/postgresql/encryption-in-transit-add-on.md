---
sidebar_position: 4
slug: /postgres-ssl-addon
title: Encryption in Transit Add-On
---
# SSL/TLS Encryption in Transit for PostgreSQL

Platform ini menyediakan add-on bawaan yang menerapkan fungsionalitas “**encryption in transit**” untuk solusi PostgreSQL. Add-on ini menciptakan koneksi terenkripsi SSL/TLS untuk melindungi data saat bergerak antara klien dan server database. Perlindungan meliputi enkripsi data sebelum transmisi, otentikasi titik akhir, dekripsi konten, dan verifikasi saat tiba.

## Add-On Installation{#add-on-installation}

Add-on ini hanya dapat dipasang pada node **PostgreSQL** dan **Pgpool-II** (untuk cluster database).

1\. Temukan lapisan database PostgreSQL yang sesuai di dashboard Anda, pergi ke bagian **Add-Ons**, dan klik **Install** untuk add-on _SSL/TLS Encryption_.

:::tip
Solusi ini juga tersedia dari Marketplace dan dapat diimpor dari repositori di GitHub.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-1.png" alt="PostgreSQL SSL/TLS add-on" width="100%"/>

2\. Dalam jendela instalasi yang terbuka, pilih **Environment** dan **Node Group(s)** target di mana add-on akan dipasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-2.png" alt="PostgreSQL SSL add-on installation" width="100%"/>

:::warning
Kedua lapisan harus dipilih jika dipasang untuk cluster PostgreSQL dengan node penyeimbang beban Pgpool-II.
:::

Klik **Install** untuk melanjutkan.

3\. Dalam satu menit, database Anda akan dikonfigurasi ulang untuk bekerja melalui koneksi terenkripsi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-3.png" alt="PostgreSQL SSL add-on installed" width="70%"/>

## Add-On Specifics{#add-on-specifics}

Di bawah ini Anda dapat mempelajari tentang proses dan spesifikasi pembuatan sertifikat:

  * Sertifikat dibuat dengan utilitas _**/usr/local/sbin/selfcertgen**_.
  * Sertifikat bersifat self-signed dan diterbitkan untuk hostname node tertentu. Artinya, setiap node memiliki satu set sertifikat sendiri, dan Anda harus menggunakan yang sesuai dengan node yang diakses untuk otentikasi.
  * Sertifikat disimpan dalam folder **/var/lib/jelastic/keys/SSL-TLS** (dapat diakses melalui pintasan _**keys**_ di file manager). Terdapat dua subfolder: 
    * _**server**_ – sertifikat server digunakan untuk memberikan enkripsi TLS dari koneksi ke database PostgreSQL
    * _**client**_ – sertifikat klien yang dapat diunduh dapat digunakan untuk mengotentikasi koneksi klien ke server database (fungsionalitas tidak tersedia untuk node _Pgpool-II_)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-4.png" alt="PostgreSQL SSL certificates" width="100%"/>

**Konfigurasi PostgreSQL:**

  * Autentikasi _md5_ diubah menjadi _**scram-sha-256**_ untuk memberikan tingkat keamanan yang lebih baik (dianggap sebagai praktik terbaik oleh pengembang PostgreSQL) dan untuk mendukung SSL dalam topologi cluster dengan node penyeimbang beban _Pgpool-II_.
  * Jika _md5_ digunakan sebagai protokol autentikasi default sebelum pemasangan add-on SSL - pengaturan ini diubah secara global untuk daemon PostgreSQL.
  * Perubahan berikut dilakukan pada file konfigurasi _**/var/lib/pgsql/data/postgresql.conf**_:

    ```plaintext
    ssl_cert_file = '/var/lib/jelastic/keys/SSL-TLS/server/server.crt' 
    ssl_ca_file = '/var/lib/jelastic/keys/SSL-TLS/server/root.crt' 
    ssl_key_file = '/var/lib/jelastic/keys/SSL-TLS/server/server.key' 
    ssl = on
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-5.png" alt="postgresql.conf file" width="100%"/>

  * Karena perubahan algoritma, password pengguna database yang ada harus direset. Ini dilakukan secara otomatis untuk pengguna default ‘ _**webadmin**_ ’ (ke password yang sama seperti sebelumnya) tetapi __harus dilakukan secara manual untuk pengguna kustom yang ada__.
  * Aturan ‘ _**hostssl**_ ’ digunakan sebagai pengganti ‘ _host_ ’ dalam file _**/var/lib/pgsql/data/pg_hba.conf**_ untuk memastikan autentikasi SSL untuk pengguna.

    ```plaintext
    hostssl all all 0.0.0.0/0 scram-sha-256
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-6.png" alt="pg_hba.conf file" width="100%"/>

  * Jika Anda ingin mengaktifkan autentikasi pengguna melalui sertifikat klien, Anda perlu menambahkan “ _cert_ ” secara manual sebagai [metode autentikasi](<https://www.postgresql.org/docs/current/auth-methods.html>).

**Konfigurasi Pgpool-II:**

  * Opsi SSL diaktifkan dalam konfigurasi Pgpool-II (_**/etc/pgpool-II/pgpool.conf**_) secara otomatis selama pemasangan add-on.

    ```plaintext
    ssl = on
    enable_pool_hba = on
    ssl_key = '/var/lib/jelastic/keys/SSL-TLS/server/server.key'
    ssl_cert = '/var/lib/jelastic/keys/SSL-TLS/server/server.crt'
    pool_passwd = 'pool_passwd'
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-7.png" alt="pgpool.conf file" width="100%"/>

  * Aturan ‘ _**hostssl**_ ’ digunakan sebagai pengganti ‘ _host_ ’ dalam file _**/etc/pgpool-II/pool_hba.conf**_ untuk memastikan autentikasi SSL untuk pengguna.

    ```plaintext
    hostssl all all 0.0.0.0/0 scram-sha-256
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-8.png" alt="pool_hba.conf file" width="100%"/>

  * Catatan yang sesuai __harus ditambahkan untuk pengguna kustom__ ke file _**/etc/pgpool-II/pool_passwd**_. Dua catatan untuk pengguna default ‘ _**webadmin**_ ’ dan ‘ _**pgpool**_ ’ ditambahkan secara otomatis. Untuk semua pengguna lainnya, silakan gunakan utilitas **pg_enc**:

    ```bash
    pg_enc -m -f /etc/pgpool-II/pgpool.conf -u $USERNAME $PASSWORD
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-9.png" alt="pool_passwd configuration file" width="100%"/>

## Add-On Configuration{#add-on-configuration}

Setelah pemasangan, add-on dapat ditemukan di bawah tab **Add-Ons** untuk layer yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-10.png" alt="PostgrSQL SSL add-on configuration" width="70%"/>

Opsi konfigurasi yang tersedia cukup sederhana:

  * **Re-issue certificates** – menghasilkan sertifikat SSL untuk koneksi aman yang baru (misalnya, jika kompromi atau terhapus secara tidak sengaja)
  * **Configuration Tutorial** – membuka panduan manual tentang _[Establishing SSL Connection to PostgreSQL](<https://docs.dewacloud.com/docs/ssl-for-pgsql/>)_
  * **Uninstall** (di menu add-on di sudut kanan atas) - menghapus add-on, konfigurasi kustom, dan sertifikat SSL yang dihasilkan dari layer

## Secure Connection to PostgreSQL{#secure-connection-to-postgresql}

1\. Fungsionalitas “**encryption in transit**” (_server-side encryption_) berfungsi segera setelah pemasangan. Anda dapat memeriksanya dengan memberikan kredensial akses kepada klien dan membangun koneksi. Kami akan menggunakan utilitas _**[psql](<https://www.postgresql.org/docs/current/app-psql.html>)**_ untuk contoh ini.

:::tip
Anda dapat menggunakan endpoint atau public IP sebagai titik masuk database Anda untuk koneksi eksternal. Mari kita periksa contoh endpoint (ke node _Pgpool-II_ untuk cluster):
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-11.png" alt="PostgrSQL SSL add-on configuration" width="100%"/>
:::

Hubungkan dari klien dengan perintah berikut (Anda bisa mendapatkan kredensial akses default dari email yang diterima setelah pemasangan database):

```bash
psql -U {userName} {dbName} -h {host} -p {port} -W
```

Di sini:

  * `{userName}` \- nama pengguna database untuk koneksi
  * `{dbName}` \- nama database yang akan dihubungkan
  * `{host}` \- titik masuk database (endpoint, dalam kasus kami)
  * `{port}` \- port untuk koneksi (dari endpoint, dalam kasus kami)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-12.png" alt="PostgreSQL SSL connect" width="100%"/>

2\. Selain itu, Anda dapat menggunakan sertifikat klien untuk otentikasi (_server- and client-side encryption_). Dalam hal ini, file sertifikat SSL harus diberikan kepada klien. Anda dapat mengunduhnya dari direktori **/var/lib/jelastic/keys/SSL-TLS/client** dari node PostgreSQL yang dibutuhkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-13.png" alt="PostgreSQL client certificates" width="100%"/>

Klien perlu mengunggah file sertifikat (_client.crt_, _client.key_, _root.crt_) ke komputer/container/VM mereka. Setelah itu, koneksi ke node PostgreSQL yang dibutuhkan dapat dibangun sebagai berikut:

```bash
psql "sslmode=verify-ca sslrootcert={path/to/root.crt} sslcert={path/to/client.crt} sslkey={path/to/client.key} host={host} port={port} user={userName} dbname={dbName}"
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/encryption-in-transit-addon/encryption-in-transit-14.png" alt="PostgreSQL client certificates connection" width="100%"/>

:::tip
Sebagai alternatif, Anda bisa memeriksa otentikasi dengan sertifikat klien seperti yang dijelaskan dalam panduan SSL Connection to PostgreSQL.
:::

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [SSL Connection to PostgreSQL](<https://docs.dewacloud.com/docs/ssl-for-pgsql/>)
  * [PostgreSQL Auto-Clustering](<https://docs.dewacloud.com/docs/postgresql-auto-clustering/>)
  * [Remote Access to PostgreSQL](<https://docs.dewacloud.com/docs/remote-access-postgres/>)