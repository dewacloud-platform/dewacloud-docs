---
sidebar_position: 7
slug: /self-signed-ssl
title: Self-Signed Custom SSL
---

# Sertifikat SSL Kustom Self-Signed

**Sertifikat SSL Self-Signed** adalah metode untuk mengamankan aplikasi menggunakan koneksi SSL terenkripsi. Sementara sertifikat SSL kustom biasanya ditandatangani oleh Certificate Authority (CA) terpercaya seperti **Let’s Encrypt**, sertifikat self-signed dibuat oleh pengguna dan tidak dipercaya oleh browser secara default.

Sertifikat self-signed berguna dalam lingkungan pengembangan atau pengujian tetapi **tidak disarankan untuk produksi** karena pengunjung akan menerima peringatan yang menyarankan mereka untuk meninggalkan situs karena koneksi yang tidak dipercaya.

![Self-Signed SSL Warning](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/01-ssl-warning.png)

## Cara Menghasilkan Sertifikat SSL Self-Signed

### Persyaratan:
- Nama **domain** (misalnya, _mysite.com_). Ini dapat dibeli dari registrar domain mana saja.
- **OpenSSL** atau alat serupa untuk menghasilkan sertifikat.

Ikuti instruksi di bawah ini tergantung pada sistem operasi Anda.

### Untuk Windows

1. **Unduh dan Instal OpenSSL**
   - [Unduh OpenSSL untuk Windows](https://code.google.com/archive/p/openssl-for-windows/downloads).
   - Ekstrak arsip yang diunduh dan jalankan _**openssl.exe**_ dari folder **bin**.

2. **Hasilkan SSH Private Key**
   - Buka OpenSSL dan hasilkan kunci privat untuk sertifikat root Anda (ini yang menandatangani semua sertifikat yang diterbitkan):

   ```bash
   genrsa -out rootCA.key 2048
   ```

![Windows generate key](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/02-windows-generate-key.png)

3. **Buat Sertifikat Root CA**
   - Hasilkan sertifikat root menggunakan kunci privat:

   ```bash
   req -config C:\path\to\openssl.cnf -x509 -new -key rootCA.key -days 365 -out rootCA.crt
   ```

![Windows generate root certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/03-windows-generate-root-certificate.png)

4. **Buat Kunci Privat untuk Domain Anda**
   - Hasilkan kunci privat untuk domain Anda:

   ```bash
   genrsa -out host.key 2048
   ```

![Windows self-signed certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/04-windows-self-signed-certificate.png)

5. **Buat Permintaan Penandatanganan Sertifikat (CSR)**
   - Hasilkan CSR untuk domain Anda:

   ```bash
   req -config C:\path\to\openssl.cnf -new -key host.key -out host.csr
   ```

   - **Penting:** Pastikan _Common Name_ sesuai dengan nama domain Anda.

![Windows signing request](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/05-windows-signing-request.png)

6. **Hasilkan Sertifikat Self-Signed**
   - Buat sertifikat self-signed menggunakan root CA:

   ```bash
   x509 -req -in host.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out host.crt -days 365
   ```

![Windows get self-signed certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/06-windows-get-self-signed-certificate.png)

### Untuk Linux/MacOS/FreeBSD

1. **Instal OpenSSL (jika belum terinstal)**
   - Gunakan perintah berikut untuk menginstal OpenSSL:

   ```bash
   sudo apt-get install openssl
   ```

2. **Hasilkan Root CA Private Key**
   - Jalankan perintah berikut untuk menghasilkan kunci root CA:

   ```bash
   openssl genrsa -out rootCA.key 2048
   ```

![Unix generate key](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/07-unix-generate-key.png)

3. **Buat Sertifikat Root CA**
   - Hasilkan sertifikat root:

   ```bash
   openssl req -x509 -new -key rootCA.key -days 365 -out rootCA.crt
   ```

![Unix generate root certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/08-unix-generate-root-certificate.png)

4. **Hasilkan Kunci Privat untuk Domain Anda**
   - Buat kunci privat untuk domain Anda:

   ```bash
   openssl genrsa -out host.key 2048
   ```

![Unix self-signed certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/09-unix-self-signed-certificate.png)

5. **Buat Permintaan Penandatanganan Sertifikat (CSR)**
   - Hasilkan CSR:

   ```bash
   openssl req -new -key host.key -out host.csr
   ```

   - **Penting:** Pastikan _Common Name_ sesuai dengan nama domain Anda.

![Unix signing request](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/10-unix-signing-request.png)

6. **Hasilkan Sertifikat Self-Signed**
   - Gunakan perintah berikut untuk membuat sertifikat self-signed:

   ```bash
   openssl x509 -req -in host.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out host.crt -days 365
   ```

![Unix get self-signed certificate](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/11-unix-get-self-signed-certificate.png)

### Melampirkan Sertifikat SSL Self-Signed ke Environment Anda

Setelah sertifikat dibuat, ikuti langkah-langkah biasa untuk melampirkan sertifikat SSL kustom:
1. **Sesuaikan Topologi Environment**: Pastikan environment mendukung SSL kustom.
2. **Nama Domain dan Pengaturan A Record**: Atur domain agar mengarah ke alamat IP publik Anda.
3. **Unggah Sertifikat ke Lingkungan**: Unggah file kunci privat dan sertifikat.

Ketika Anda mengunjungi situs melalui **https://**, Anda akan melihat peringatan tentang sertifikat yang tidak dipercaya. Anda dapat melanjutkan dengan mengklik "Proceed Anyway."

![Self-Signed SSL Warning](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/self-signed-custom-ssl/12-ssl-warning-2.png)

## Baca Juga

- [Built-In SSL](https://docs.dewacloud.com/docs/built-in-ssl/)
- [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl/)
- [Let’s Encrypt SSL](https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/)
- [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)