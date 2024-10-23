---
sidebar_position: 3
slug: /custom-ssl
title: Custom SSL
---

# Sertifikat SSL Kustom

**Sertifikat SSL** menawarkan tingkat keamanan tinggi untuk nama domain, memastikan transmisi data yang aman antara server web dan browser. Platform ini memungkinkan penggunaan **Sertifikat SSL Kustom**, menyediakan beberapa jenis untuk memenuhi berbagai kebutuhan:

- [Self-Signed SSL](https://docs.dewacloud.com/docs/self-signed-ssl/)
- Wildcard
- Multi-Domain
- Extended Validation (Single-Domain dan Multi-Domain)
- Sertifikat Low Assurance/Domain-Validated

Panduan ini akan menunjukkan cara menghasilkan dan menerapkan **Sertifikat SSL Kustom Single-Domain** pada environment Anda.

## Menghasilkan Sertifikat SSL Kustom

Untuk menambahkan sertifikat SSL Kustom ke environment Anda, Anda memerlukan hal-hal berikut:

1. Nama **domain** (misalnya, `mysite.com`) yang telah dibeli sebelumnya.
2. **Server key**.
3. **Sertifikat Intermediate** atau **Certificate Chain (CA)**.
4. **Sertifikat Domain**.

Ikuti langkah-langkah ini untuk menghasilkan sertifikat yang diperlukan:

### 1. Membeli Nama Domain

Beli nama domain dari registrar mana pun (misalnya, `mysite.com`).

### 2. Generasikan Server Key dan Permintaan Sertifikat

Gunakan **OpenSSL** atau alat lainnya untuk menghasilkan **server key** dan **Certificate Signing Request (CSR)** Anda.

#### Windows:

1. [Unduh OpenSSL](https://code.google.com/archive/p/openssl-for-windows/downloads), ekstrak, dan buka file `openssl.exe` yang terletak di folder **bin**.
2. Untuk menghasilkan server key, jalankan perintah berikut:
   ```bash
   genrsa -out server.key 4096
   ```
   Ini akan menghasilkan server key privat 4096-bit (`server.key`).

![Windows generate server key](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/01-windows-generate-server-key.png)

3. Selanjutnya, buat CSR menggunakan:
   ```bash
   req -config C:\path\to\openssl.cnf -new -key server.key -out server.csr
   ```
   Anda akan diminta untuk memberikan informasi tentang domain dan organisasi Anda.

![Windows generate key survey](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/02-windows-generate-key-survey.png)

#### Linux/MacOS/FreeBSD:

1. Instal OpenSSL jika belum terinstal menggunakan manajer paket yang sesuai. Untuk Ubuntu/Debian:
   ```bash
   sudo apt-get install openssl
   ```

2. Buat server key:
   ```bash
   openssl genrsa -out server.key 4096
   ```

![Unix generate server key](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/03-unix-generate-server-key.png)

3. Buat CSR:
   ```bash
   openssl req -new -key server.key -out server.csr
   ```

![Unix generate key survey](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/04-unix-generate-key-survey.png)

Berikan informasi yang diperlukan tentang domain dan organisasi Anda ketika diminta.

### 3. Kirim CSR ke Certificate Authority (CA)

Kirimkan **CSR** ke **Certificate Authority (CA)** untuk ditandatangani. Setelah diverifikasi, CA akan memberikan Anda **Sertifikat Intermediate** dan **Sertifikat Domain**.

### 4. Konfigurasi Environment Anda untuk SSL

Pastikan environment Anda memenuhi persyaratan untuk SSL kustom:

1. **Alamat IP Publik**: Pastikan server aplikasi atau load balancer environment Anda memiliki IP publik yang terpasang.
2. **Domain Kustom**: Pastikan nama domain kustom Anda diatur di pengelola DNS Anda dengan **A Record** yang menunjuk ke IP publik Anda.

![Custom SSL requirements](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/05-custom-ssl-requirements.png)

## Unggah Sertifikat ke Environment Anda

1. Masuk ke platform Anda dan buka **Environment Settings** dari environment yang Anda inginkan.

![Auto adjust topology for custom SSL](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/06-auto-adjust-topology-for-custom-ssl.png)

2. Pada bagian **Custom SSL**, unggah **Server Key**, **Sertifikat Intermediate (CA)**, dan **Sertifikat Domain**.

![Environment settings button](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/08-environment-settings-button.png)

3. Klik **Save** untuk menerapkan sertifikat SSL.

![Custom SSL environment settings](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/09-custom-ssl-environment-settings.png)

Platform akan secara otomatis memulai ulang server environment untuk menerapkan perubahan.

## Verifikasi Konfigurasi SSL

Untuk memverifikasi bahwa sertifikat SSL Anda terinstal dengan benar:

1. Buka browser web Anda dan masukkan domain kustom Anda dengan protokol **HTTPS** (misalnya, `https://mysite.com`).
2. Pastikan situs dimuat dengan aman tanpa ada kesalahan.

![Application over HTTPS with Custom SSL](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/custom-ssl/10-application-over-https-with-custom-ssl.png)

## Baca Juga

Jelajahi lebih banyak solusi SSL dan fitur yang tersedia di platform:

- [Built-In SSL](https://docs.dewacloud.com/docs/built-in-ssl/)
- [Let’s Encrypt SSL](https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/)
- [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
- [Self-Signed Custom SSL](https://docs.dewacloud.com/docs/self-signed-ssl/)