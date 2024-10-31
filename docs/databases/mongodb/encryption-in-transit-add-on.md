---
sidebar_position: 7
slug: /mongodb-ssl-addon
title: Encryption in Transit Add-On
---
# SSL/TLS Encryption in Transit for MongoDB

Database MongoDB pada Platform Aplikasi Virtuozzo dilengkapi dengan add-on bawaan yang menerapkan "**encryption in transit**". Add-on ini kompatibel dengan solusi standalone dan terkluster, dan fungsionalitasnya memastikan perlindungan data dengan koneksi terenkripsi SSL/TLS selama pertukaran antara server. Setelah instalasi, semua operasi terkait ditangani secara otomatis—enkripsi data sebelum transmisi, autentikasi endpoint, dekripsi konten, dan verifikasi setelah kedatangan.

## Add-On Installation{#add-on-installation}

Add-on ini dapat dipasang di atas node database **MongoDB** versi _**6 dan yang lebih baru**_.

1\. Di dashboard platform, buka bagian Add-Ons dari lapisan database yang sesuai dan klik **Install** untuk solusi _**MongoDB Encrypted Connection**_.

:::tip
Add-on ini juga tersedia di Marketplace dan dapat diimpor dari repositori GitHub yang sesuai.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-1.png" alt="SSL/TLS encryption add-on" width="70%"/>

2\. Di dalam jendela instalasi yang terbuka, pilih **Environment** dan **Node Group(s)** target (beberapa lapisan dapat dipilih jika diperlukan) di mana add-on akan dipasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-2.png" alt="SSL add-on installation" width="90%"/>

Klik **Install** untuk melanjutkan.

3\. Tunggu sebentar, dan database Anda akan dikonfigurasi untuk bekerja melalui koneksi terenkripsi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-3.png" alt="SSL add-on installed" width="70%"/>

## Add-On Specifics{#add-on-specifics}

Di bawah ini, Anda dapat mempelajari tentang proses dan spesifikasi pembuatan sertifikat:

* Sertifikat dihasilkan dengan utilitas _**/usr/local/sbin/selfcertgen**_.
* Sertifikat berformat PEM digunakan di MongoDB.
* Sertifikat bersifat self-signed dan diterbitkan untuk hostname node tertentu. Artinya, setiap node memiliki satu set sertifikat sendiri, dan Anda harus menggunakan yang sesuai dengan node yang diakses untuk autentikasi.
* Sertifikat disimpan dalam folder **/var/lib/jelastic/keys/SSL-TLS** (dapat diakses melalui pintasan _**keys**_ dalam file manager). Terdapat dua subfolder:
  * _**server**_ – sertifikat server digunakan untuk menyediakan enkripsi TLS untuk koneksi ke database MongoDB.
  * _**client**_ – sertifikat klien yang dapat diunduh dapat digunakan untuk mengautentikasi koneksi klien ke server database.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-4.png" alt="MongoDB SSL certificates" max-width="100%"/>

**Konfigurasi MongoDB:**

* Semua konfigurasi add-on disediakan melalui file konfigurasi _**/etc/mongod.conf**_ terpisah:

```yaml
net:
  tls:
    mode: allowTLS
    certificateKeyFile: /var/lib/jelastic/keys/SSL-TLS/server/server.pem
    CAFile: /var/lib/jelastic/keys/SSL-TLS/server/root.pem
    allowConnectionsWithoutCertificates: true
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-5.png" alt="MongoDB SSL configurations" max-width="100%"/>

* Konfigurasinya menyediakan jalur ke file SSL server. Juga, termasuk opsi “_allowConnectionsWithoutCertificates: true_” untuk membuat penggunaan koneksi aman menjadi opsional. Jika dihapus, akan sulit bagi klien untuk terhubung ke server ini menggunakan koneksi yang tidak terenkripsi.

## Add-On Configuration{#add-on-configuration}

Add-on dapat ditemukan di bawah tab **Add-Ons** untuk lapisan yang sesuai. Anda dapat menggunakan tombol berikut untuk memperbarui sertifikat yang diperlukan (jika Anda pikir sertifikat tersebut dikompromikan atau jika secara tidak sengaja dihapus):

* **Renew all certs** – menghasilkan semua sertifikat SSL ulang
* **Renew server certs** – menghasilkan sertifikat SSL server ulang
* **Renew client certs** – menghasilkan sertifikat SSL klien ulang

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-6.png" alt="managing MongoDB SSL add-on" max-width="100%"/>

Untuk menghapus add-on dari lapisan (termasuk konfigurasi khusus dan sertifikat SSL yang dihasilkan), buka menu di sudut kanan atas panel dan klik **Uninstall**.

## Secure Connection to MongoDB{#secure-connection-to-mongodb}

Mari kita cek koneksi aman ke node MongoDB dengan menggunakan opsi _**tls**_ dan _**tlsCAFile**_ dalam string koneksi:

* _**–tls**_ – menentukan penggunaan TLS untuk koneksi ini
* _**–host**_ – menetapkan hostname atau IP database
* _**–tlsCAFile**_ – menyediakan jalur ke file sertifikat CA

```bash
mongosh --tls --host \{hostName\} --tlsCAFile=\{path/to/root.pem\}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-7.png" alt="MongoDB SSL connection" max-width="100%"/>

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)