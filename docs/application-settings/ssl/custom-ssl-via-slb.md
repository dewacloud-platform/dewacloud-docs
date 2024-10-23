---
sidebar_position: 4
slug: /custom-ssl-via-slb
title: Custom SSL via SLB
---

# Custom SSL via Shared Load Balancer (SLB)

Platform ini mendukung beberapa metode untuk mengonfigurasi sertifikat SSL, tergantung pada pengaturan environment dan konfigurasi domain:

- **Environment dengan IP Publik**: Gunakan _[Let’s Encrypt SSL](https://docs.dewacloud.com/docs/lets-encrypt-ssl)_ dan _[Custom SSL](https://docs.dewacloud.com/docs/custom-ssl)_ untuk mengamankan domain kustom.
- **Environment tanpa IP Publik**: Gunakan _[Built-In SSL](https://docs.dewacloud.com/docs/built-in-ssl)_ untuk domain dasar.
- **Custom SSL via SLB**: Memungkinkan sertifikat SSL kustom untuk environment tanpa IP publik melalui Shared Load Balancer (SLB).

Panduan ini menjelaskan cara mengonfigurasi **Custom SSL via SLB**, yang terutama ditujukan untuk environment yang diterapkan di **Azure** atau **Google Cloud** di mana IP publik tidak tersedia. SLB memastikan distribusi lalu lintas antara node dan menyediakan SSL melalui **Server Name Indication (SNI)**, sebuah ekstensi untuk protokol TLS.

## Langkah untuk Mengonfigurasi Custom SSL via SLB

### Gambaran Umum

**Custom SSL via SLB** memungkinkan Anda mengonfigurasi sertifikat SSL kustom untuk environment tanpa alamat IP publik. Sertifikat diunggah ke platform, dan SSL diaktifkan pada Shared Load Balancers, yang mendistribusikan lalu lintas.

### Dukungan SNI

**Server Name Indication (SNI)** memungkinkan server untuk menampilkan sertifikat SSL yang benar berdasarkan nama domain yang diminta, memastikan penanganan SSL yang tepat ketika beberapa domain di-host pada satu SLB.

### Konfigurasi API

Semua konfigurasi untuk Custom SSL via SLB dilakukan melalui panggilan API. Berikut adalah metode API utama yang tersedia:

- **[GetSSLCerts](https://docs.jelastic.com/api/#!/api/environment.Binder-method-GetSSLCerts)**: Menampilkan semua sertifikat SSL untuk pengguna saat ini.
- **[AddSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-AddSSLCert)**: Mengunggah kunci privat, sertifikat domain, dan sertifikat antara opsional.
- **[EditSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-EditSSLCert)**: Memperbarui sertifikat yang sudah ada.
- **[RemoveSSLCerts](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts)**: Menghapus sertifikat SSL yang ditentukan.
- **[BindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindSSLCert)**: Mengikat sertifikat SSL kustom ke environment atau SLB untuk domain kustom.
- **[UnbindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-UnbindSSLCert)**: Membatalkan pengikatan sertifikat SSL dari environment atau domain spesifik pada SLB.
- **[BindExtDomains](https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindExtDomains)**: Mengikat domain kustom ke environment dan menerapkan sertifikat SSL.
- **[GetExtDomains](https://docs.jelastic.com/api/#!/api/environment.Binder-method-GetExtDomains)**: Menampilkan domain kustom yang terhubung ke environment.

### Kuota

Jumlah maksimum sertifikat SSL kustom via SLB terbatas per akun berdasarkan kuota `slb.customssl.maxcount` (biasanya 50 untuk pengguna berbayar dan 5 untuk pengguna percobaan). Ini untuk mencegah penggunaan berlebihan fitur.

### Contoh Alur Kerja

1. **Unggah Sertifikat**: Gunakan metode **[AddSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-AddSSLCert)** untuk mengunggah kunci privat, sertifikat domain, dan sertifikat antara (jika ada) ke platform.

2. **Mengikat Sertifikat SSL**: Untuk mengikat sertifikat SSL ke environment dan domain Anda, gunakan metode **[BindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindSSLCert)**. Pastikan SLB ditentukan sebagai titik masuk.

3. **Membatalkan Pengikatan Sertifikat SSL**: Jika diperlukan, metode **[UnbindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-UnbindSSLCert)** memungkinkan Anda untuk membatalkan pengikatan sertifikat SSL dari domain kustom tertentu.

## Baca Juga

Jelajahi solusi SSL lain dan fitur terkait:

- [Secure Sockets Layer (SSL)](https://docs.dewacloud.com/docs/secure-sockets-layer)
- [Built-In SSL](https://docs.dewacloud.com/docs/built-in-ssl)
- [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl)
- [Let’s Encrypt SSL](https://docs.dewacloud.com/docs/lets-encrypt-ssl)
- [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer)