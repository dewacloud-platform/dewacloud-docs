---
sidebar_position: 3
slug: /ssl-for-pgsql
title: SSL Connection to PostgreSQL
---
# Establishing SSL Connection to PostgreSQL DB Server

Ketika berusaha menjaga informasi dalam database PostgreSQL Anda tetap aman, hal pertama yang perlu Anda lakukan adalah mengenkripsi semua koneksi untuk melindungi kredensial otentikasi (username / password) dan data yang disimpan dari penyadapan. Panduan ini dimaksudkan untuk membantu Anda dalam membangun koneksi SSL yang aman ke container PostgreSQL Anda yang di-host di platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-1.png" alt="SSL for PostgreSQL" width="70%"/>

Di bawah ini, kami akan mengeksplorasi [penyesuaian server database](<https://docs.dewacloud.com/docs/#postgresql-server-configuration>) yang tepat, diperlukan untuk pengaktifan SSL, dan pembuatan sertifikat untuk itu. Kemudian, kami akan membuat dan menambahkan sertifikat untuk mesin [klien](<https://docs.dewacloud.com/docs/#client-certificates>), dan akhirnya, akan membangun koneksi aman ke server kami melalui alat [pgAdmin](<https://docs.dewacloud.com/docs/#establish-connection-via-pgadmin>). Jadi, mari kita mulai!

## PostgreSQL Server Configuration{#postgresql-server-configuration}

Jelas, untuk tutorial ini, kita akan menggunakan environment dengan database PostgreSQL di dalamnya - Anda dapat dengan mudah [membuatnya](<https://docs.dewacloud.com/docs/setting-up-environment/>) jika Anda belum melakukannya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-2.png" alt="create PostgreSQL database" width="100%"/>

1\. Untuk memulai, hubungkan ke server database Anda melalui [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate/>).

:::tip
Jika Anda belum melakukan operasi serupa sebelumnya, Anda perlu: 
- menghasilkan pasangan kunci SSH
- menambahkan kunci SSH publik Anda ke dashboard
- mengakses akun Anda melalui protokol SSH
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-3.png" alt="connect to PostgreSQL via SSH" width="100%"/>

2\. Sekarang, agar dapat bekerja dengan SSL, Anda perlu menambahkan tiga file berikut ke direktori server **/var/lib/pgsql/data**:

  * _server.key_ \- kunci pribadi
  * _server.crt_ \- sertifikat server
  * _root.crt_ \- sertifikat root terpercaya

Dalam tutorial ini, kami secara singkat akan mempertimbangkan bagaimana Anda dapat menghasilkan mereka sendiri.

:::note
Kami tidak akan menjelaskan parameter perintah secara mendetail di sini, tetapi jika Anda ingin tahu lebih banyak, cukup rujuk ke halaman Self-Signed Custom SSL di dokumentasi kami atau periksa situs resmi OpenSSL untuk daftar lengkap tindakan yang tersedia. Anda juga dapat menggunakan sertifikat SSL kustom mirip dengan yang dijelaskan di bawah (ikuti bagian Generate a Custom SSL Certificate dari panduan terkait untuk mendapatkannya). Dalam kasus terakhir ini, Anda dapat melewatkan instruksi pembuatan dan langsung melompat ke langkah keenam instruksi ini.
:::

Jadi, navigasikan ke folder yang disebutkan dan lanjutkan dengan langkah-langkah di bawah ini.

3\. Pertama-tama, mari buat file pertama - kunci pribadi:

  * jalankan perintah berikut:

    ```bash
    cd /var/lib/pgsql/data
    openssl genrsa -des3 -out server.key 1024
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-4.png" alt="generate SSL private key" width="100%"/>

Selama pembuatan _server.key_, Anda akan diminta untuk _pass phrase_ - tentukan dan konfirmasi untuk menyelesaikan pembuatan.

  * Sekarang, agar dapat bekerja dengan kunci ini lebih lanjut, diperlukan untuk menghapus pass phrase yang Anda tambahkan sebelumnya. Jalankan perintah berikut untuk ini:

    ```bash
    openssl rsa -in server.key -out server.key
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-5.png" alt="remove pass phrase from SSL key" width="100%"/>

Masukkan kembali pass phrase satu kali lagi untuk konfirmasi.

  * Setel izin yang sesuai dan hak kepemilikan untuk file kunci pribadi Anda dengan perintah berikut:

    ```bash
    chmod 400 server.key
    chown postgres.postgres server.key
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-6.png" alt="change SSL key owner and permissions" width="100%"/>

4\. Sekarang, Anda perlu membuat _sertifikat server_ berdasarkan file _server.key_ Anda, misalnya:

    ```bash
    openssl req -new -key server.key -days 3650 -out server.crt -x509 -subj '/C=US/ST=California/L=PaloAlto/O=Jelastic/CN=mysite.com/emailAddress=mail@jelastic.com'
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-7.png" alt="create server SSL certificate" width="100%"/>

:::warning
Diperlukan untuk mengatur data pribadi Anda untuk parameter _subj_ jika sertifikat dimaksudkan untuk digunakan dalam produksi:
- Unit: Country/State/Location/Organization/Organizational Unit (optional)
- Common Name: contoh.com/email@example.com

Anda juga dapat melewatkan parameter _subj_ dalam perintah dan memasukkan semua argumen ini dalam mode interaktif dalam kotak pertanyaan yang terbuka secara otomatis.
:::

5\. Karena kita akan menandatangani sertifikat itu sendiri, sertifikat _server_ yang dihasilkan dapat digunakan sebagai sertifikat _root_ yang tepercaya juga, jadi cukup buat salinannya dengan nama yang sesuai:

    ```bash
    cp server.crt root.crt
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-8.png" alt="copy server SSL certificate" width="100%"/>

Sekarang, karena Anda sudah memiliki semua tiga file sertifikat, Anda dapat melanjutkan ke konfigurasi database PostgreSQL yang diperlukan untuk aktivasi dan penggunaan SSL.

6\. Buka file _**pg_hba.conf**_, yang terletak dalam folder yang sama, untuk diedit dengan editor terminal yang Anda sukai (_vim_ misalnya) atau langsung melalui dashboard.

Gantikan isi defaultnya dengan baris berikut:

    ```plaintext
    # TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD
    # "local" is for Unix domain socket connections only
    local   all         all                               trust
    # IPv4 local connections:
    host    all         all         127.0.0.1/32          trust
    # IPv4 remote connections for authenticated users
    hostssl all         webadmin    0.0.0.0/0             md5 clientcert=verify-full
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-9.png" alt="setup SSL via pg_hba file" width="100%"/>

:::warning
Jika Anda ingin bekerja dengan database sebagai pengguna selain _webadmin_ default, ubah nilai yang sesuai dalam baris terakhir konfigurasi ke nama yang diperlukan. Dalam hal ini, Anda perlu menggunakan nama pengguna yang sama untuk semua perintah selanjutnya (kami akan menunjukkan di mana ini diperlukan). Juga, untuk versi PostgreSQL yang lebih lama (10 dan lebih rendah), Anda perlu mengganti nilai _clientcert_ ke "md5 clientcert=1" dalam baris terakhir dari konfigurasi:
```plaintext
hostssl all webadmin 0.0.0.0/0 md5 clientcert=1
```
:::

Simpan file yang diperbarui.

7\. Untuk menyelesaikan konfigurasi, Anda perlu menerapkan beberapa perubahan lagi ke file _**postgresql.conf**_.

Arahkan ke bagian _Security and Authentication_ (sekitar baris _80_) dan aktifkan penggunaan **SSL** itu sendiri, dengan membatalkan komentar pada pengaturan yang sama dan mengubah nilainya menjadi " _on_ ". Juga, tambahkan parameter baru **ssl_ca_file** di bawah ini:

    ```plaintext
    ssl = on
    ssl_ca_file = 'root.crt'
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-10.png" alt="enable SSL on PostgreSQL server" width="100%"/>

Jangan lupa untuk menyimpan perubahan ini.

8\. Terakhir, restart container PostgreSQL Anda untuk menerapkan pengaturan baru:

    ```bash
    sudo service postgresql restart
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-11.png" alt="restart PostgreSQL server" width="100%"/>

## Client Certificates{#client-certificates}

Sekarang, mari buat satu set file sertifikat SSL lagi untuk instansi klien, untuk mendukung koneksi aman di kedua sisi.

1\. Kembali ke jendela terminal dengan koneksi SSH ke server PostgreSQL Anda yang telah Anda operasikan selama [pengaturan server](<https://docs.dewacloud.com/docs/#postgresql-server-configuration>) (atau sambungkan kembali ke sana) - Anda akan memerlukan sertifikat server Anda untuk tindakan selanjutnya.

Begitu di dalam, buatlah kunci pribadi untuk klien (juga tanpa _pass phrase_, sama seperti yang dilakukan pada bagian sebelumnya), misalnya dalam direktori **tmp**:

    ```bash
    openssl genrsa -des3 -out /tmp/postgresql.key 1024
    openssl rsa -in /tmp/postgresql.key -out /tmp/postgresql.key
    ```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-12.png" alt="generate SSL key and remove pass phrase" width="100%"/>

2\. Selanjutnya, buat sertifikat SSL untuk pengguna database PostgreSQL Anda (_webadmin_ secara default) dan tanda tangani dengan file _**root.crt**_ tepercaya di server.

    ```bash
    openssl req -new -key /tmp/postgresql.key -out /tmp/postgresql.csr -subj '/C=US/ST=California/L=PaloAlto/O=Jelastic/CN=webadmin'
    openssl x509 -req -in /tmp/postgresql.csr -CA root.crt -CAkey server.key -out /tmp/postgresql.crt -CAcreateserial
    ```

:::note
Walaupun biasanya data untuk parameter _subj_ dapat diubah ke data pribadi Anda di sini, nama umum (Common Name /CN=) harus sama dengan nama pengguna database yang Anda tetapkan selama pembuatan sertifikat pertama dalam file konfigurasi server (webadmin dalam kasus kami).

_file_ _root.crt_ dan _server.key_ harus berada di folder yang sama dengan perintah kedua dieksekusi dari; jika tidak, jalur lengkap ke mereka harus ditentukan.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-13.png" alt="create and sign certificate for SSL user" width="100%"/>

3\. Setelah file - _postgresql.key_, _postgresql.crt_, _root.crt_ siap, Anda perlu memindahkannya ke folder **.postgresql** di mesin klien Anda (untuk itu, Anda dapat menggunakan [FTP add-on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>) atau cukup salin dan tempel isi file).

:::tip
Jika direktori tersebut belum ada, buatlah dengan perintah _mkdir ~/.postgresql_ atau perintah serupa sesuai dengan distribusi OS Anda.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-14.png" alt="SSL certificates for client" width="100%"/>

Juga, jika diperlukan, Anda dapat mengatur izin baca kunci untuk pemilik saja dengan perintah _chmod 0400 ~/.postgresql/postgresql.key_ untuk lebih meningkatkan keamanan.

:::tip
Jangan lupa untuk menghapus kunci dari direktori tmp di server DB Anda setelahnya.
:::

## Establish Connection via PgAdmin{#establish-connection-via-pgadmin}

Akhirnya, setelah konfigurasi server dan klien selesai, Anda siap untuk membangun koneksi. Dalam kasus kami, kami akan menggunakan alat **[pgAdmin 3](<https://www.pgadmin.org/>)** sebagai contoh, jadi dapatkan aplikasi ini (atau yang lain yang Anda sukai) diinstal terlebih dahulu.

1\. Untuk terhubung ke server DB melalui SSL, Anda membutuhkan [public IP](<https://docs.dewacloud.com/docs/public-ip/>) atau [endpoint](<https://docs.dewacloud.com/docs/endpoints/>) yang terlampir untuk container database PostgreSQL Anda.

Kami akan mempertimbangkan kasus terakhir - akses pengaturan environment, beralih ke bagian _**Endpoints**_ dan **Tambah** endpoint baru dengan tombol bernama sama di bagian atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-15.png" alt="attach endpoint to PostgreSQL" width="100%"/>

2\. Sekarang, setelah Anda memiliki titik akses, jalankan klien **pgAdmin 3** Anda dan pilih opsi **New Server Registration**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-16.png" alt="configure properties for connection via pgAdmin3" width="100%"/>

Di tab _**Properties**_ dari jendela yang terbuka, tentukan data berikut:

  * **Name** \- nama koneksi yang diinginkan (misalnya, _ssl-to-pgsql_)
  * **Host** \- titik akses yang Anda tambahkan pada langkah pertama (alamat IP publik atau _URL Akses_ endpoint tanpa nomor port)
  * **Port** \- gunakan port default _5432_ untuk IP Eksternal atau _Port Publik_ endpoint (ditunjukkan dalam bagian bernama sama dari kolom yang sesuai)
  * **Username** \- pengguna database yang Anda tetapkan sertifikat SSL dan konfigurasi (yaitu _webadmin_ secara default)
  * **Password** \- password pengguna yang bersangkutan (dikirim melalui email untuk _webadmin_ atau password yang Anda tetapkan)

Sisa kolom dapat dibiarkan tidak berubah atau disesuaikan sesuai kebutuhan Anda.

3\. Selanjutnya, beralih ke tab _**SSL**_ dan, untuk baris bernama sama, pilih opsi _require_ dari daftar drop-down.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/connection-to-applications/ssl-connection/ssl-connection-17.png" alt="configure SSL for connection via pgAdmin3" width="100%"/>

Itu saja! Sertifikat yang diperlukan akan dimuat secara otomatis selama pembentukan koneksi pertama, jadi cukup klik **OK** untuk mulai mengelola database Anda melalui koneksi aman.

Sekarang Anda dapat menghubungkan aplikasi Anda ke database (gunakan panduan [Connect to Database](<https://docs.dewacloud.com/docs/database-connection/>) sebagai contoh) dan mengaktifkan konfigurasi SSL untuk proyek Anda untuk mengenkripsi data Anda saat mengambil/mentransfer.

Jika Anda menghadapi masalah saat mengkonfigurasi koneksi SSL Anda, jangan ragu untuk mengajukan permohonan bantuan kepada tim teknis kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Secure Sockets Layer](<https://docs.dewacloud.com/docs/secure-sockets-layer/>)
  * [Self-Signed Custom SSL](<https://docs.dewacloud.com/docs/self-signed-ssl/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)