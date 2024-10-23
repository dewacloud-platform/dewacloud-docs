---
sidebar_position: 1
slug: /secure-sockets-layer
title: Secure Sockets Layer
---

# Secure Sockets Layer (SSL)

**SSL (Secure Sockets Layer)** adalah protokol keamanan yang digunakan untuk membangun koneksi terenkripsi antara server web dan browser. Enkripsi ini memastikan bahwa data yang dipertukarkan tetap pribadi dan tidak dapat dicegat oleh pihak ketiga. SSL sangat penting untuk melindungi informasi sensitif, seperti kredensial login, detail kartu kredit, dan data rahasia lainnya selama transmisi.

Enkripsi SSL menggunakan dua kunci:
- **Kunci Publik**: Tersedia untuk siapa saja dan digunakan untuk mengenkripsi data.
- **Kunci Privat**: Hanya dikenal oleh penerima dan digunakan untuk mendekripsi data.

Setelah SSL dikonfigurasi di server, koneksi beralih dari HTTP ke **HTTPS**, beroperasi melalui port 443 untuk memberikan akses yang aman.

Untuk membangun koneksi SSL, server memerlukan **Sertifikat SSL** yang mengikat secara digital kunci kriptografi ke detail entitas, seperti nama domain. Sertifikat SSL biasanya diverifikasi oleh otoritas terpercaya untuk memastikan keandalan dan kepercayaan koneksi.

## Solusi SSL Tersedia di Platform

Platform ini menyediakan tiga pilihan utama untuk mengintegrasikan SSL ke dalam environment Anda:

### 1. [Sertifikat SSL Built-In](https://docs.dewacloud.com/docs/built-in-ssl)
Sertifikat SSL Built-In secara otomatis diaktifkan di platform, menghemat waktu dan usaha dengan melewati kebutuhan untuk validasi dari otoritas sertifikat eksternal.

- **Keunggulan**: Cepat dan mudah, diterapkan pada domain platform default.
- **Keterbatasan**: Tidak kompatibel dengan server yang memiliki IP publik dan hanya berlaku untuk domain environment default platform (misalnya, dengan domain penyedia hosting di akhirnya).

### 2. [Sertifikat SSL Let’s Encrypt](https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/)
Opsi ini memberikan akses mudah ke sertifikat SSL gratis dan terpercaya dari **Let’s Encrypt**, sebuah otoritas sertifikat terkenal. Dengan add-on yang telah dikonfigurasi sebelumnya, platform mengelola penerbitan sertifikat dan pembaharuan secara otomatis.

- **Keunggulan**: Gratis, otomatis, sertifikat terpercaya.
- **Keterbatasan**: Memerlukan konfigurasi dan validasi domain.

### 3. [Sertifikat SSL Kustom](https://docs.dewacloud.com/docs/custom-ssl)
Untuk pengguna yang lebih memilih kontrol penuh atas proses SSL, Custom SSL memungkinkan Anda untuk mengkonfigurasi sertifikat secara manual, menghasilkan permintaan sertifikat, dan memilih otoritas sertifikat yang diinginkan.

- **Keunggulan**: Fleksibilitas dalam pilihan otoritas sertifikat dan kontrol domain.
- **Keterbatasan**: Memerlukan pengaturan manual dan validasi sertifikat.

## Baca Juga

Untuk mempelajari lebih lanjut tentang integrasi SSL dan mengamankan environment Anda, lihat sumber-sumber berikut:
- [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Custom Domain Names](https://docs.dewacloud.com/docs/custom-domains/)
- [Container Firewall](https://docs.dewacloud.com/docs/custom-firewall/)