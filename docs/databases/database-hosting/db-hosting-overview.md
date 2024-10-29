---
sidebar_position: 1
slug: /database-hosting
title: DB Hosting Overview
---
# Database Hosting

Platform menyediakan satu set server database yang skalabel dan sepenuhnya dapat dikelola yang dapat Anda instal dan operasikan dengan mudah. Proses pembuatan database baru cukup sederhana dan dapat diselesaikan hanya dalam beberapa menit.

1\. Buka wizard Topologi dengan mengklik **New Environment** (untuk membuat environment baru) atau memilih tombol **Change environment topology** (untuk menambahkan database ke environment yang sudah ada).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/db-hosting-overview/db-hosting-overview-1.png" alt="new environment wizard" width="80%"/>

2\. Kemudian, buka bagian wizard **SQL** atau **NoSQL** untuk memilih server database sesuai jenisnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/db-hosting-overview/db-hosting-overview-2.png" alt="create environment with database" width="100%"/>

Gunakan daftar drop-down untuk memilih di antara sistem manajemen DB yang tersedia:

  * untuk **SQL** \- MySQL, MariaDB, PostgreSQL, PerconaDB
  * untuk **NoSQL** \- MongoDB, Couchbase, Redis, OpenSearch

:::note
Daftar server database yang tersedia dapat bervariasi dan tergantung pada pengaturan penyedia hosting Anda. Jika beberapa server ini tidak tersedia di wizard Anda, silakan hubungi penyedia hosting Anda untuk aktivasi.
:::

Ketika server database yang sesuai telah dibuat, Anda akan menerima notifikasi email dengan kredensial (_URL akses_ , _login_ dan _password_) ke panel administrasi database.

3\. Untuk meluncurkan panel admin database Anda, klik tombol **Open in Browser** di sebelah node database yang dituju di dashboard (atau susun URL panel admin [secara manual](<https://docs.dewacloud.com/docs/#database-admin-panel-url>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/db-hosting-overview/db-hosting-overview-3.png" alt="access database admin panel" width="100%"/>

Di halaman yang terbuka, gunakan kredensial dari email untuk masuk dan mulai menerapkan konfigurasi yang diperlukan oleh aplikasi Anda.

:::tip
Untuk kontainer tanpa alamat _Public IP_ yang terpasang, konsol admin database tersedia via https:// secara default.
:::

Setelah server database Anda siap, Anda dapat [Menghubungkan aplikasi Anda ke DB](<https://docs.dewacloud.com/docs/database-connection-strings/>).

## Reset Password Database {#database-password-reset}

Untuk **Reset password** untuk node database, klik tombol dengan nama yang sama di sebelahnya pada dashboard (atau untuk satu set [scaled DB](<https://docs.dewacloud.com/docs/horizontal-scaling/>) instances untuk mendapatkan kredensial baru untuk semuanya sekaligus).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/db-hosting-overview/db-hosting-overview-4.png" alt="database password reset" width="100%"/>

Hasilnya, Anda akan menerima email dengan password baru untuk mengakses konsol admin database Anda.

## URL Panel Admin Database {#database-admin-panel-url}

URL panel administrasi untuk server DB harus terdiri dari bagian-bagian berikut:

```
node{node_id}-{environment_name}.{hoster_domain}
```

di mana

  * `{node_id}` \- ID dari kontainer database yang dituju yang dapat ditemukan di dashboard (misalnya, _35316_ untuk MongoDB)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/db-hosting-overview/db-hosting-overview-5.png" alt="database node ID" width="100%"/>

  * `{environment_name}` \- nama environment yang Anda tambahkan server ke dalamnya (misalnya, _database_)
  * `{hoster_domain}` \- domain dewacloud (misalnya, `user.cloudjkt01.com`);

:::note
Jika platform penyedia hosting Anda memiliki beberapa _environment regions_ untuk dipilih, nilai `{hoster_domain}` untuk environment Anda bisa berbeda dari platform umum.
:::

Dengan demikian, URL akses lengkap untuk panel administrasi database dalam kasus kami akan menjadi:

_https://node35316-database.jelastic.com_

## Baca Juga {#whats-next}

  * [Koneksi ke Database](<https://docs.dewacloud.com/docs/database-connection-strings/>)
  * [Konfigurasi Database](<https://docs.dewacloud.com/docs/database-configuration-files/>)
  * [Menjadwalkan Backup DB](<https://docs.dewacloud.com/docs/database-backups/>)
  * [Koneksi ke DB via JNDI](<https://docs.dewacloud.com/docs/connection-to-db-via-jndi/>)
  * [Koneksi ke DB menggunakan Hibernate](<https://docs.dewacloud.com/docs/connect-db-hibernate/>)