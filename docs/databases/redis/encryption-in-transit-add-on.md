---
sidebar_position: 4
slug: /redis-ssl-addon
title: Encryption in Transit Add-On
---
# SSL/TLS Encryption in Transit for Redis

Database Redis bersertifikat Virtuozzo dilengkapi dengan add-on bawaan yang mengimplementasikan “_**encryption in transit**_”. Fungsionalitas ini memastikan perlindungan data dengan koneksi terenkripsi SSL/TLS saat bergerak antar server. Setelah pemasangan add-on, dukungan untuk koneksi aman dikonfigurasi pada port terpisah _6380_, sambil tetap mempertahankan port default _6379_ untuk menerima koneksi yang tidak terenkripsi demi kompatibilitas dengan sistem sebelumnya (jika perlu, itu dapat dinonaktifkan melalui pengaturan).

## Add-On Installation{#add-on-installation}

Add-on ini hanya dapat dipasang di atas node Redis.

1\. Dalam dashboard platform, pergi ke bagian **Add-Ons** dari lapisan database Redis yang sesuai, dan klik **Install** untuk solusi _Redis Encrypted Connection_.

:::tip
Add-on ini juga tersedia dari Marketplace dan dapat diimpor dari repositori GitHub yang sesuai.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-1.png" alt="Redis SSL add-on" max-width="100%"/>

2\. Dalam jendela instalasi yang terbuka, pilih **Environment** dan **Node Group(s)** target di mana add-on akan dipasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-2.png" alt="install Redis SSL" max-width="100%"/>

Klik **Install** untuk melanjutkan.

3\. Dalam satu menit, environment Anda akan dikonfigurasikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-3.png" alt="SSL add-on installed" width="70%"/>

:::warning
Port 6380 digunakan untuk koneksi aman secara default dan otomatis ditambahkan ke aturan firewall selama pemasangan add-on.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-4.png" alt="Redis port 6380" max-width="100%"/>
:::

Anda dapat menemukan sertifikat SSL yang dihasilkan di dalam folder **/var/lib/jelastic/keys/SSL-TLS**.

## Add-On Specifics{#add-on-specifics}

Di bawah ini Anda dapat mempelajari tentang proses dan spesifikasi pembuatan sertifikat:

  * Add-on ini menginstal sebelumnya **[Redli](<https://github.com/IBM-Cloud/redli>)** – alternatif berbasis Go yang lebih humanis daripada utilitas _redis-cli_ resmi.
  * Sertifikat dibuat dengan utilitas _**/usr/local/sbin/selfcertgen**_.
  * Sertifikat bersifat self-signed dan diterbitkan untuk hostname dari node tertentu. Artinya, setiap node memiliki satu set sertifikatnya sendiri, dan Anda harus menggunakan yang sesuai dengan node yang diakses untuk otentikasi.
  * Karena spesifikasi Redis, hostname alternatif ditambahkan saat membuat sertifikat server:

```
echo "subjectAltName = @alt_names  [alt_names] IP.1 = ${ALTNAME}" > /tmp/altname.ext
RANDFILE=/tmp/.random openssl x509 -req -in ${CERT_DIR}/server-req.pem -days 3650 -CA ${ROOT_CERT} -CAkey ${ROOT_KEY} -set_serial 01 -extfile /tmp/altname.ext > ${CERT_DIR}/server.crt
```

  * Sertifikat disimpan dalam folder **/var/lib/jelastic/keys/SSL-TLS** (dapat diakses melalui pintasan _**keys**_ di file manager). Terdapat dua subfolder: 
    * _**server**_ – sertifikat server digunakan untuk menyediakan enkripsi TLS dari koneksi ke database Redis
    * _**client**_ – sertifikat klien yang dapat diunduh dapat digunakan untuk mengotentikasi koneksi klien ke server database

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-5.png" alt="Redis SSL certificates" max-width="100%"/>

**Konfigurasi Redis:**

Semua konfigurasi add-on disediakan melalui file konfigurasi _**/etc/redis.conf**_ yang terpisah (juga ditambahkan ke daftar _Favorites_ dalam file manager).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-6.png" alt="Redis configuration file" max-width="100%"/>

Di bawah ini, Anda dapat memeriksa daftar pengaturan paling umum yang terkait dengan SSL:

  * _**tls-port**_ \- menyebutkan port yang digunakan untuk koneksi SSL (_6380_).
  * _**port**_ – menetapkan port yang dapat menerima koneksi yang tidak terenkripsi (_6379_).

:::tip
Kedua nilai sengaja dipisahkan secara default untuk memastikan kompatibilitas ke belakang. Jika Anda ingin menonaktifkan koneksi yang tidak terenkripsi sepenuhnya, atur port ke 0.
:::

  * _**tls-cert-file**_ , _**tls-key-file**_ , _**tls-ca-cert-file**_ – direktif menunjukkan jalur ke sertifikat SSL sisi server
  * _**tls-auth-clients**_ – mengkonfigurasi apakah klien (termasuk server replika) pada port TLS diharuskan untuk mengotentikasi menggunakan sertifikat klien yang valid. Ditetapkan ke " _optional_ " secara default - jika diberikan, sertifikat klien diterima dan harus valid (tetapi tidak diwajibkan).
  * _**tls-replication**_ dan _**tls-cluster**_ \- dapat diaktifkan jika diperlukan untuk mendukung interkoneksi TLS dalam cluster Redis

## Add-On Configuration{#add-on-configuration}

Setelah pemasangan, add-on dapat ditemukan di bawah tab **Add-Ons** untuk layer yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-7.png" alt="manage Redis SSL add-on" max-width="100%"/>

Di sini Anda dapat mengklik tombol **Re-issue certificates** untuk menghasilkan sertifikat SSL untuk koneksi aman yang baru.

Jika tidak lagi dibutuhkan, hapus add-on dari layer dengan memilih opsi **Uninstall** di menu add-on di pojok kanan atas.

## Secure Connection to Redis{#secure-connection-to-redis}

Untuk koneksi aman (kami akan menggunakan utilitas **[redis-cli](<https://redis.io/docs/ui/cli/>)** sebagai contoh), tentukan perintah dengan opsi berikut:

:::tip
Anda dapat menyimpan password database dalam variabel khusus REDISCLI_AUTH untuk menghindari mengeksposnya di baris perintah:
```
export REDISCLI_AUTH={password}
```
:::

```
redis-cli -p 6380 --tls --cacert /var/lib/jelastic/keys/SSL-TLS/client/root.crt {command}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-8.png" alt="Redis secure connect" max-width="100%"/>

Anda dapat menjalankan `{command}` apa pun yang diinginkan atau mengabaikannya untuk terhubung ke database dalam mode interaktif.

Jika server memerlukan otentikasi menggunakan sertifikat klien, Anda dapat menentukan sertifikat dan kunci privat yang sesuai menggunakan parameter _**\--cert**_ dan _**\--key**_.

```
redis-cli -p 6380 --tls --cert /var/lib/jelastic/keys/SSL-TLS/client/client.crt --key /var/lib/jelastic/keys/SSL-TLS/client/client.key --cacert /var/lib/jelastic/keys/SSL-TLS/client/root.crt {command}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/encryption-in-transit-addon/encryption-in-transit-addon-9.png" alt="Redis secure connect certificates" max-width="100%"/>

Untuk koneksi eksternal, klien perlu mengunggah file sertifikat (_client.crt_, _client.key_, _root.crt_) ke komputer/container/VM mereka dan menggunakan opsi _**-h**_ untuk menentukan hostname atau alamat IP jarak jauh.

## SSL Configuration Examples{#ssl-configuration-examples}

  * **memaksakan koneksi SSL (untuk node standalone)**

Tetapkan koneksi terenkripsi TLS dan nonaktifkan sepenuhnya koneksi yang tidak aman untuk klien.

1\. Buka file konfigurasi _**/etc/redis.conf**_ dan ubah direktif “_**port**_” menjadi _0_. Ini akan menonaktifkan koneksi yang tidak terenkripsi.

2\. Selanjutnya, ubah opsi “_**tls-port**_” menjadi port default Redis _6379_ dalam file yang sama.

3\. Jika Anda ingin mewajibkan penggunaan sertifikat klien (untuk otentikasi dan TLS mutual), tetapkan direktif “_**tls-auth-clients**_” menjadi “_yes_”.

4\. Pergi ke pengaturan firewall dan hapus aturan untuk port _6380_, karena tidak lagi diperlukan.

5\. Terakhir, restart kontainer Redis untuk menerapkan perubahan.

Sekarang, layanan Redis hanya tersedia melalui koneksi SSL pada port _6379_.

  * **interkoneksi cluster/sentinel melalui SSL**

Interkoneksi cluster Redis tetap biasa (tidak aman) secara default. Ini memastikan kompatibilitas ke belakang dengan cluster yang sudah ada. Namun, jika Anda ingin mengaktifkan enkripsi interkoneksi, ikuti langkah-langkah di bawah ini:

:::warning
Penskalaan otomatis dan manual dapat bekerja tidak benar setelah perubahan ini karena dirancang untuk koneksi biasa non-SSL.
:::

1\. Jika Anda menggunakan solusi cluster, pastikan bahwa direktif “_**tls-cluster**_” dalam file _**/etc/redis.conf**_ diatur ke “_yes_” (batalkan komentar opsi).

2\. Jika Anda menggunakan replikasi sentinel, batalkan komentar opsi “_**tls-replication**_” juga (seharusnya memiliki nilai “_yes_”).

3\. Direktif “_**tls-auth-clients**_” sebaiknya dibiarkan sebagai “_optional_” (nilai default).

4\. Konfigurasi cluster default menggunakan port _6379_ untuk interkoneksi cluster, jadi Anda sebaiknya mengubah direktif “_**tls-port**_” menjadi _6379_ atau mengubah port cluster/replikasi ke _6380_.

5\. Restart cluster Redis untuk menerapkan perubahan.

  * **interkoneksi SSL multi-regional cluster**

Ketika bekerja dengan [cluster Redis multi-regional](<https://docs.dewacloud.com/docs/redis-multi-region-cluster/>), sertifikat root yang sama harus digunakan di semua node dari semua environment untuk interkoneksi antar node yang berhasil melalui TLS.

1\. Pasang SSL add-on di environment pertama dari cluster multi-regional.

2\. Salin _**/var/lib/jelastic/keys/SSL-TLS/server/root.crt**_ dan _**/var/lib/jelastic/keys/SSL-TLS/server/root.crt**_ ke direktori **/var/lib/jelastic/keys/SSL-TLS/** di semua node environment kedua dan ketiga.

3\. Sekarang pasang SSL add-on pada environment ini seperti biasa – sertifikat root baru tidak akan dihasilkan dengan cara ini.

## Baca Juga{#whats-next}

  * [Redis Overview](<https://docs.dewacloud.com/docs/redis/>)
  * [Redis Auto-Clustering](<https://docs.dewacloud.com/docs/redis-cluster/>)
  * [Redis Multi-Region Cluster](<https://docs.dewacloud.com/docs/redis-multi-region-cluster/>)
  * [Redis Backup/Restore Add-On](<https://docs.dewacloud.com/docs/db-backup-restore-addon/>)