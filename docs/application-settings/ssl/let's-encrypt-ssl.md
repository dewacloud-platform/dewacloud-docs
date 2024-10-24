---
sidebar_position: 5
slug: /let's-encrypt-ssl
title: Let's Encrypt SSL
---

# Sertifikat SSL Gratis dari Let’s Encrypt: Integrasi Langsung dengan Stack Perangkat Lunak Terpopuler

Memastikan keamanan untuk aplikasi yang dihosting adalah penting, dan salah satu metode utama untuk mengamankan pertukaran data adalah dengan mengenkripsi lalu lintas melalui protokol HTTPS. **Let’s Encrypt** menawarkan solusi gratis dan otomatis untuk mendapatkan sertifikat SSL terpercaya, menyederhanakan proses dan memungkinkan pengguna untuk mengamankan aplikasi dengan cepat.

## Keunggulan Utama Let’s Encrypt SSL
- **Gratis dan Terbuka**: Let’s Encrypt menyediakan sertifikat SSL tanpa biaya, mengurangi biaya yang terkait dengan implementasi SSL.
- **Pembaharuan Otomatis**: Sertifikat berlaku selama 90 hari dan diperbarui secara otomatis, memastikan enkripsi berkelanjutan.
- **Integrasi Luas**: Pengembang Jelastic telah mengintegrasikan Let’s Encrypt dengan beberapa load balancer dan stack server aplikasi populer untuk instalasi yang mudah.

Stack yang didukung termasuk:
- **Load Balancers**: NGINX, Apache LB, HAProxy, Varnish
- **Server Java**: Tomcat, TomEE, GlassFish, Payara, Jetty
- **Server PHP**: Apache PHP, NGINX PHP
- **Server Ruby**: Apache Ruby, NGINX Ruby

Jika Let’s Encrypt SSL diperlukan untuk stack lain, cukup tambahkan load balancer di depan server aplikasi Anda untuk mendukung terminasi SSL.

## Cara Kerjanya
Ketika memasang add-on Let’s Encrypt, platform:
1. Mengunduh dan mengkonfigurasi klien Let’s Encrypt (agen manajemen sertifikat, atau CMA).
2. Meminta sertifikat SSL dari Let’s Encrypt Certificate Authority (CA).
3. Menerapkan sertifikat yang dikeluarkan ke stack perangkat lunak dan menambahkan cron job untuk menangani pembaharuan secara otomatis.

**Validasi Kontrol Domain**:
Let’s Encrypt CA memeriksa titik masuk environment pada port 80 untuk memvalidasi kepemilikan domain. Setelah divalidasi, sertifikat SSL diterbitkan, didistribusikan ke seluruh environment, dan diterapkan ke semua node yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt/2node-lb.png" alt="Let’s Encrypt Add-on Flow" width="100%"/>

## Instalasi Add-On Let’s Encrypt SSL

Untuk memasang add-on SSL, ikuti langkah-langkah berikut:
1. **Login** ke dashboard Jelastic dan pergi ke **Marketplace**.
2. Pada bagian **Add-ons**, temukan paket _Let’s Encrypt Free SSL_ dan klik **Install**.

### Selama Instalasi:
- **Domain Eksternal**: Anda dapat mengosongkan bidang ini untuk membuat sertifikat SSL dummy untuk URL environment internal atau menentukan domain eksternal yang terhubung untuk menghasilkan sertifikat SSL terpercaya.
- **Nama Environment**: Pilih environment untuk menginstal sertifikat SSL.
- **Node**: Pilih lapisan titik masuk yang sesuai (biasanya terdeteksi otomatis).

Setelah dikonfigurasi, klik **Install** untuk memulai proses. Add-on mungkin secara otomatis memasang **IP Publik** ke environment, karena ini diperlukan agar Let’s Encrypt berfungsi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt/lets-encrypt-free-ssl-installation.png" alt="SSL Certificate from Let’s Encrypt" width="100%"/>

Setelah instalasi, Anda dapat mengakses environment melalui HTTPS, memastikan koneksi yang aman dan terpercaya.

## Mengelola Sertifikat Let’s Encrypt

### Pembaharuan Otomatis:
Secara default, sertifikat diperbarui secara otomatis 30 hari sebelum kedaluwarsa. Proses ini ditangani melalui cron job harian. Anda akan menerima pemberitahuan email sebelum pembaharuan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt/updating-lets-encrypt-free-ssl.png" alt="updating Let’s Encrypt Free SSL" width="100%"/>

### Pembaharuan Manual:
Anda dapat memperbarui sertifikat secara manual dengan masuk ke tab **Add-ons** di dasbor dan memilih **Update Now**.

### Rekonfigurasi:
Untuk memodifikasi sertifikat, klik tombol **Configure** di panel Let’s Encrypt dan sesuaikan pengaturan domain. Rekonfigurasi dapat memicu pembuatan sertifikat baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/lets-encrypt/apply-ssl-sertificate-configuration.png" alt="apply SSL certificate configuration" width="100%"/>

## Instalasi dan Manajemen Berbasis API

Sertifikat Let’s Encrypt juga dapat dikelola melalui API Jelastic. Misalnya, untuk menginstal add-on, gunakan metode **install**:

```bash
curl -X POST 'https://<hoster-api-host>/1.0/marketplace/jps/rest/install' -d session=<session> -d jps=letsencrypt-ssl-addon -d envName=<env_name> -d nodeGroup=<node_group> --data-urlencode settings='{"customDomains":"example.com"}'
```

Metode API tambahan tersedia untuk pembaharuan, rekonfigurasi, dan penghapusan sertifikat.

## Kesimpulan

Dengan **Let’s Encrypt**, Anda dapat dengan cepat dan mudah mengamankan environment Anda secara gratis, dengan pembaharuan otomatis dan konfigurasi minimal. Integrasi ini dengan Jelastic PaaS memungkinkan Anda untuk memastikan aplikasi Anda aman tanpa kompleksitas atau biaya dari solusi SSL tradisional.

Untuk informasi lebih lanjut, kunjungi [Penyedia Layanan Dewacloud PaaS](https://assets.dewacloud.com/).