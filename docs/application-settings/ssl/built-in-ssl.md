---
sidebar_position: 2
slug: /built-in-ssl
title: Built-In SSL
---

# Sertifikat SSL Built-In

**Wildcard SSL built-in** yang disediakan oleh platform adalah solusi yang nyaman bagi pengguna yang mencari cara cepat dan aman untuk melindungi situs web mereka. Sertifikat SSL ini (disebut sebagai _**\{hosterName\} SSL**_ dalam dasbor) menawarkan manfaat utama berikut:

- **Manajemen yang Mudah**: SSL sudah dikonfigurasi sebelumnya dan dapat diaktifkan dengan hanya satu klik di wizard topologi.
- **Validasi Cepat**: Verifikasi pada tingkat domain selesai dalam hitungan menit, dan segel keamanan diterbitkan segera.
- **Enkripsi Data Tingkat Perusahaan**: Kekuatan enkripsi memastikan bahwa data pelanggan aman.

## Langkah untuk Mengaktifkan SSL Built-In

Untuk memperoleh dan mengkonfigurasi **sertifikat SSL built-in**, ikuti langkah-langkah sederhana berikut:

### 1. Masuk ke Platform Dashboard

Buka dashboard platform dan klik tombol **New Environment** yang terletak di pojok kiri atas, atau pilih ikon **Change Environment Topology** di samping environment Anda yang ada.

![PaaS main buttons](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/built-in-ssl/01-paas-main-buttons.png)

### 2. Siapkan Environment Anda

Di **Topology Wizard**, konfigurasikan environment Anda sesuai kebutuhan Anda. Setelah selesai, navigasikan ke bagian **SSL** yang terletak di pojok kiri atas bingkai. Aktifkan **Built-In SSL** dengan menggeser saklar yang sesuai.

![platform built-in SSL](https://assets.dewacloud.com/dewacloud-docs/application_settings/SSL/built-in-ssl/02-platform-built-in-ssl.png)

> **Catatan**: SSL built-in **tidak kompatibel dengan alamat IP Publik** yang terpasang ke server Anda. SSL ini hanya akan diterapkan pada domain yang ditentukan oleh platform (misalnya, `my-project.jelastic.com`).

### 3. Membuat atau Menerapkan Perubahan

Setelah mengkonfigurasi SSL Anda, klik tombol **Create** untuk mengatur environment baru Anda, atau **Apply** untuk memperbarui SSL bagi environment yang ada.

Setelah environment tersedia, Anda dapat mengaksesnya melalui tombol **Open in Browser**, dan koneksi Anda akan diamankan dengan **HTTPS**.

## Baca Juga

Jelajahi opsi SSL tambahan untuk platform Anda:

- [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl/)
- [Let’s Encrypt SSL](https://docs.dewacloud.com/docs/let's-encrypt-ssl)
- [Self-Signed Custom SSL](https://docs.dewacloud.com/docs/self-signed-ssl/)
- [Security Configs for Applications with NGINX Balancer](https://docs.dewacloud.com/docs/nginx-balancer-security/)