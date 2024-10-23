---
sidebar_position: 17
slug: /application-lifecycle-management
title: Application Lifecycle Management
---
# Mengelola Siklus Hidup Aplikasi

Manajemen siklus hidup aplikasi yang efektif memastikan bahwa proyek Anda bekerja sesuai yang diinginkan dan memenuhi kebutuhan pengguna sepanjang tahap pengembangan, pengujian, dan produksi. Meskipun proyek Anda tidak terlalu besar, menggunakan environment pengembangan dan pengujian yang terpisah dapat membantu mencegah gangguan bagi pengguna. Di bawah ini adalah panduan langkah demi langkah untuk mengelola siklus hidup aplikasi pada platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/01-application-lifecycle.png" alt="application lifecycle" width="100%"/>

## Langkah-langkah untuk Mengelola Siklus Hidup Aplikasi

### 1. Buat Lingkungan Produksi

1. Masuk ke dashboard platform.
2. Klik **Create environment**.
3. Pilih server aplikasi (misalnya, **GlassFish**), atur batas cloudlets, dan beri nama environment Anda (misalnya, `prodenv`). Klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/03-create-environment.png" alt="create environment" width="100%"/>

Setelah environment dibuat, itu akan siap untuk aplikasi produksi Anda.

### 2. Buat Lingkungan Build

1. Buat environment lain dengan memilih **Maven** sebagai alat build. Atur batas cloudlets dan beri nama environment (misalnya, `buildenv`).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/06-build-environment-wizard.png" alt="build environment wizard" width="100%"/>

Dalam beberapa menit, environment akan siap untuk membangun proyek Anda.

### 3. Build dan Deploy Proyek

1. Tambahkan proyek Anda ke **Maven**.

2. Arahkan ke tab **Git** jika menggunakan Git untuk kontrol versi. Berikan detail proyek seperti **Path**, **Branch**, **Login**, dan **Password**. Tentukan **Environment** dan **Context** untuk deployment, lalu klik **Add**.

3. Klik **Build and Deploy** untuk proyek tersebut.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/10-build-and-deploy.png" alt="build and deploy" width="100%"/>

### 4. Buat Lingkungan Database

1. Buat environment baru dan pilih jenis database (misalnya, **MySQL**).
2. Setelah environment dibuat, buka **MySQL** di browser dan gunakan kredensial yang dikirim via email untuk membuat database.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/11-database-environment-wizard.png" alt="database environment wizard" width="100%"/>

### 5. Konfigurasi Koneksi Database

1. Di dashboard, klik **Config** di sebelah server aplikasi (misalnya, **GlassFish**) di lingkungan produksi Anda.
2. Buat file konfigurasi (misalnya, `mydb.cfg`) dan tambahkan detail koneksi database:

   ```bash
   host=jdbc:mysql://mysql\{node_id\}-\{your_env_name\}.\{hoster_domain\}/\{db_name\}
   username=\{get in the email\}
   password=\{get in the email\}
   driver=com.mysql.jdbc.Driver
   ```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/15-database-connection-configs.png" alt="database connection configs" width="100%"/>

3. Unggah **MySQL connector** ke direktori `lib` dari **GlassFish** dan restart servernya.

### 6. Buat Lingkungan Pengujian

1. Klon environment produksi Anda untuk membuat salinan yang sama persis untuk pengujian (berikan nama `testenv`).
2. Buka environment pengujian di browser untuk memverifikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/20-clone-environment.png" alt="clone environment" width="100%"/>

### 7. Tingkatkan Aplikasi

1. Tambahkan proyek yang diperbarui ke **Maven**.
2. Klik **Build and Deploy** untuk proyek baru. Proyek baru akan diterapkan ke konteks yang ditentukan.
3. Hubungkan domain kustom (misalnya, `test.com`) ke environment pengujian Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/25-bind-test-domain.png" alt="bind test domain" width="100%"/>

4. Buka aplikasi baru di browser untuk melihat pembaruan.

### 8. Tukar Domain

Setelah pengujian, Anda dapat menukar domain antara environment pengujian dan produksi untuk menerapkan perubahan Anda tanpa downtime. Ini memungkinkan pembaruan yang mulus.

1. Di pengaturan environment, pilih **Swap** untuk menukar domain antara lingkungan produksi dan pengujian Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/application-lifecycle-management/27-swap-domains.png" alt="swap domains" width="100%"/>

Setelah ditukar, domain produksi Anda (misalnya, `production.com`) akan mencerminkan aplikasi yang diperbarui.

## Baca Juga

- [Application Configuration](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Clone Environment](https://docs.dewacloud.com/docs/clone-environment/)
- [Deploy Application](https://docs.dewacloud.com/docs/deployment-guide/)