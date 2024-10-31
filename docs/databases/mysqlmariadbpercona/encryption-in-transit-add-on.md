---
sidebar_position: 5
slug: /db-ssl-addon
title: Encryption in Transit Add-On
---
# SSL/TLS Encryption in Transit for MySQL/MariaDB/Percona

Solusi database MySQL/MariaDB/Percona dilengkapi dengan add-on bawaan yang menerapkan “**encryption in transit** ”. Fungsionalitas ini memastikan perlindungan data dengan koneksi terenkripsi SSL/TLS saat data berpindah antar server. Setelah pemasangan add-on, semua operasi terkait ditangani secara otomatis - enkripsi data sebelum transmisi, otentikasi titik akhir, dekripsi konten, dan verifikasi saat tiba.

## Add-On Installation{#add-on-installation}

Add-on dapat dipasang di atas node **MySQL/MariaDB/Percona** dan **ProxySQL** (untuk cluster database) saja.

1\. Dalam dashboard platform, pergi ke bagian **Add-Ons** dari lapisan database yang sesuai, dan klik **Install** untuk solusi _SSL/TLS Encrypted Connection_.

:::tip
Add-on ini juga tersedia dari Marketplace dan dapat diimpor dari repositori GitHub yang sesuai.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-1.png" alt="MySQL SSL add-on" max-width="100%"/>

2\. Dalam jendela instalasi yang terbuka, pilih **Environment** dan **Node Group(s)** target di mana add-on akan dipasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-2.png" alt="install MySQL SSL add-on" max-width="100%"/>

:::warning
Baik lapisan MySQL/MariaDB/Percona dan ProxySQL (jika ditambahkan) harus dipilih untuk solusi clustered.
:::

Klik **Install** untuk melanjutkan.

3\. Dalam satu menit, database Anda akan dikonfigurasi ulang untuk bekerja melalui koneksi terenkripsi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-3.png" alt="SSL add-on installed" width="60%"/>

## Add-On Specifics{#add-on-specifics}

Di bawah ini Anda dapat mempelajari tentang proses dan spesifikasi pembuatan sertifikat:

  * Sertifikat dibuat dengan utilitas _**/usr/local/sbin/selfcertgen**_.
  * Sertifikat bersifat self-signed dan diterbitkan untuk hostname node tertentu. Artinya setiap node memiliki satu set sertifikat sendiri, dan Anda harus menggunakan yang sesuai dengan node yang diakses untuk otentikasi.
  * Sertifikat disimpan dalam folder **/var/lib/jelastic/keys/SSL-TLS** (dapat diakses melalui pintasan _**keys**_ di file manager). Terdapat dua subfolder:
    * _**server**_ – sertifikat server digunakan untuk memberikan enkripsi TLS dari koneksi ke database
    * _**client**_ – sertifikat client yang dapat diunduh dapat digunakan untuk mengotentikasi koneksi klien ke server database

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-4.png" alt="SSL add-on certificates" max-width="100%"/>

**Konfigurasi MySQL/MariaDB/Percona:**

  * Semua konfigurasi add-on disediakan melalui file konfigurasi terpisah _**/etc/mysql/conf.d/ssl-config.cnf**_:

    ```ini
    [mysqld]
    ssl_cert=/var/lib/jelastic/keys/SSL-TLS/server/server.crt
    ssl_key=/var/lib/jelastic/keys/SSL-TLS/server/server.key
    ssl-cipher=ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-SHA
    #require_secure_transport=ON
    ```
  
  <img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-5.png" alt="SSL configuration file" max-width="100%"/>

  * Konfigurasinya menyediakan jalur ke file SSL server dan daftar cipher yang didukung. Juga, termasuk opsi (dikomentari secara default) untuk membuat server meminta penggunaan koneksi aman. Jika diubah, klien tidak akan dapat terhubung ke server ini menggunakan koneksi biasa yang tidak terenkripsi.

**Konfigurasi ProxySQL:**

  * SSL pada node ProxySQL diaktifkan dengan menetapkan variabel berikut pada semua server:
    * _**[mysql-have_ssl](<https://proxysql.com/documentation/global-variables/mysql-variables/#mysql-have_ssl>)**_ (_true_) - mengaktifkan SSL untuk koneksi frontend
    * _**use_ssl**_ (_1_) - menetapkan kolom yang sesuai di **mysql_servers**, yang akan memberi tahu ProxySQL bahwa node backend kita menggunakan SSL
  * Perubahan dilakukan dengan kueri SQL berikut:

    ```sql
    UPDATE global_variables SET variable_value='true' WHERE variable_name='mysql-have_ssl';
    LOAD MYSQL VARIABLES TO RUNTIME;
    SAVE MYSQL VARIABLES TO DISK;
    UPDATE mysql_servers SET use_ssl=1 WHERE port=3306;
    LOAD MYSQL VARIABLES TO RUNTIME;
    LOAD MYSQL SERVERS TO RUNTIME;
    SAVE MYSQL SERVERS TO DISK;
    ```
  
## Add-On Configuration{#add-on-configuration}

Setelah pemasangan, add-on dapat ditemukan di bawah tab **Add-Ons** untuk layer yang sesuai. Di sini, Anda dapat menghasilkan ulang sertifikat SSL dengan mengklik tombol **Re-issue certificates** (misalnya jika Anda berpikir mereka dikompromikan atau terhapus secara tidak sengaja).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-6.png" alt="configure MySQL SSL add-on" width="60%"/>

Untuk menghapus add-on dari layer (termasuk konfigurasi khusus dan sertifikat SSL yang dihasilkan), perluas menu di pojok kanan atas panel dan klik **Uninstall**.

## Secure Connection to MySQL/MariaDB/Percona{#secure-connection-to-mysqlmariadbpercona}

1\. Fungsionalitas “**encryption in transit** ” (_**server-side encryption**_) berfungsi segera setelah pemasangan add-on. Anda dapat memeriksanya dengan menghubungkan ke database menggunakan kredensial dari email. Untuk koneksi jarak jauh, Anda bisa menambahkan [endpoint](<https://docs.dewacloud.com/docs/endpoints/>) atau [public IP](<https://docs.dewacloud.com/docs/public-ip/>):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-7.png" alt="database endpoint" max-width="100%"/>

Gunakan perintah berikut untuk menghubungkan ke database:

```bash
mysql --ssl-mode=required -h {host} -P {port} -u {user} -p
```

:::warning
Jika Anda bekerja dengan klien MariaDB, ganti opsi “--ssl-mode=required” dengan “--ssl”.
:::

Di sini:

  * `{user}` \- nama pengguna database untuk koneksi
  * `{host}` \- titik masuk database (endpoint, dalam kasus kita)
  * `{port}` \- port untuk koneksi (dari endpoint, dalam kasus kita)

Setelah terhubung, jalankan perintah _**status**_ dan periksa lini SSL di output.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-8.png" alt="MySQL remote connection with SSL" max-width="100%"/>

2\. Ketika terhubung ke server, Anda dapat mengonfigurasi penggunaan sertifikat klien untuk otentikasi untuk mendapatkan _**server- dan client-side encryption**_. Jalankan perintah di bawah ini untuk membuat otentikasi SSL wajib untuk pengguna yang ditentukan. Misalnya, kita akan memberikan “_**user-2700607**_ ” (gantilah placeholder `{user}`) dari email yang diterima setelah pembuatan environment:

```sql
FLUSH PRIVILEGES;
ALTER USER '{user}'@'%' REQUIRE X509;
ALTER USER '{user}'@'localhost' REQUIRE X509;
FLUSH PRIVILEGES;
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-9.png" alt="alter user command" max-width="100%"/>

:::warning
Common name (CN) tidak diperiksa, setiap sertifikat yang ditandatangani dengan certificate authority (CA) ini akan dianggap sesuai. Jika Anda ingin memeriksa CN dari sertifikat klien (yaitu apakah sertifikat diterbitkan untuk pengguna tertentu), jalankan perintah berikut: `FLUSH PRIVILEGES; ALTER USER '{user}'@'%' REQUIRE SUBJECT 'CN={user}'; ALTER USER '{user}'@'localhost' REQUIRE SUBJECT 'CN={user}'; FLUSH PRIVILEGES;`, Juga, jika Anda ingin menggunakan sertifikat saja untuk login, Anda bisa menghapus persyaratan password dengan perintah ALTER USER juga.
:::

Sekarang, berikan server klien (komputer/container/VM) dengan file sertifikat SSL yang sesuai, yang dapat diunduh dari direktori **/var/lib/jelastic/keys/SSL-TLS/client** dari node target yang dibutuhkan. Setelah selesai, Anda bisa terhubung dengan perintah berikut:

```bash
mysql –h {host} -P {port} -u {user} -p --ssl-mode=required --ssl-ca={path/to/root.crt} --ssl-cert={path/to/client.crt} --ssl-key={path/to/client.key}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/encryption-in-transit-addon/encryption-in-transit-addon-10.png" alt="SSL connection with client certificates" max-width="100%"/>

:::tip
Untuk menghindari menentukan sertifikat sebagai argumen, Anda dapat menambahkan opsi semacam itu ke file my.cnf di server klien:

```ini
[client]
ssl-ca = {path/to/root.crt}
ssl-cert = {path/to/client.crt}
ssl-key = {path/to/client.key}
```
:::

## Baca Juga{#whats-next}

  * [DB Hosting Overview](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [MySQL/MariaDB/Percona Auto-Clustering](<https://docs.dewacloud.com/docs/db-auto-clustering/>)
  * [Remote Access to MySQL/MariaDB/Percona](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
  * [Backup/Restore Add-On](<https://docs.dewacloud.com/docs/db-backup-restore-addon/>)
  * [Corruption Diagnostic Add-On](<https://docs.dewacloud.com/docs/db-corruption-diagnostic-addon/>)