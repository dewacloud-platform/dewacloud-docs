---
sidebar_position: 1
slug: /new-relic-installation
title: Pemasangan New Relic
---

# Pemantauan New Relic untuk Aplikasi Anda di dalam PaaS

**[New Relic](https://newrelic.com/)** adalah alat pemantauan kinerja aplikasi canggih yang dirancang untuk pelacakan dan pemecahan masalah aplikasi secara real-time. Ini memberikan wawasan mendalam tentang transaksi web, pengecualian aplikasi, dan kemacetan kinerja. Platform ini memungkinkan Anda menginstal New Relic dengan mudah, melacak metrik penting, dan mengoptimalkan kinerja aplikasi Anda.

New Relic dapat diintegrasikan ke dalam lingkungan cloud Anda menggunakan **New Relic APM Add-On** yang disederhanakan, yang mendukung lingkungan berbasis Java dan PHP.

## Persyaratan

Sebelum melanjutkan dengan pemasangan New Relic, pastikan bahwa:
- Anda memiliki **akun New Relic** dengan **License Key** Anda.
- Anda memiliki **lingkungan cloud** yang ada di platform dengan aplikasi yang ingin Anda monitor.

### Pemasangan New Relic Add-On

1. **Buka Marketplace**:
   - Masuk ke dashboard platform Anda dan klik **Marketplace** di bagian atas halaman.

   ![PaaS main buttons](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-installation/02-paas-main-buttons.png)

2. **Pilih New Relic APM**:
   - Di bagian **Add-ons**, cari _New Relic APM_ dan klik **Install**.

   ![New Relic add-on package](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-installation/03-new-relic-add-on-package.png)

3. **Konfigurasi New Relic**:
   - Dalam formulir pemasangan, isi kolom-kolom berikut:
     - **Application name**: Nama yang akan muncul di dashboard New Relic Anda (mis. _proyek-saya_).
     - **License key**: Kunci Lisensi New Relic unik Anda (dapat ditemukan di [pengaturan akun New Relic Anda](https://login.newrelic.com/login)).
     - **Environment name**: Pilih lingkungan tempat New Relic akan dipasang.
     - **Nodes**: Pilih node server aplikasi spesifik untuk pemantauan.

   ![New Relic add-on installation](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-installation/04-new-relic-add-on-installation.png)

   :::tip
   Jika Anda melewati memasukkan License Key, pemasangan akan tetap dilanjutkan, tetapi New Relic tidak akan melaporkan data ke akun anda hingga kunci ditambahkan secara manual kemudian melalui **Configuration Manager**.
   :::

4. **Konfirmasi dan Pasang**:
   - Setelah detail diisi, klik **Install** untuk memulai proses.

5. **Restart Application Server**:
   - Setelah pemasangan, Anda harus me-restart server aplikasi untuk mulai mengumpulkan data kinerja. Gunakan tombol **Restart** di samping node server aplikasi.

   ![restart Tomcat server](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-installation/07-restart-tomcat-server.png)

   :::warning
   Me-restart satu node server aplikasi akan menyebabkan downtime sementara. Namun, jika Anda sudah melakukan penskalaan horizontal untuk server aplikasi, dampaknya akan diminimalkan karena server di-restart secara berurutan.
   :::

6. **Lihat Data Pemantauan**:
   - Masuk ke akun New Relic Anda untuk mengakses metrik kinerja real-time, termasuk kesehatan server, waktu transaksi, dan tingkat kesalahan.

   ![monitoring with New Relic](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-installation/08-monitoring-with-new-relic.png)

Dengan mengikuti langkah-langkah ini, Anda akan berhasil mengintegrasikan New Relic ke dalam lingkungan Anda dan mulai melacak kinerja aplikasi Anda dengan waktu pengaturan minimal.

## Baca Juga

- [Application Monitoring](https://docs.dewacloud.com/docs/view-app-statistics/)
- [New Relic Update](https://docs.dewacloud.com/docs/update-new-relic/)
- [Java Agent Integration](https://docs.dewacloud.com/docs/javaagent/)
- [PHP Extensions](https://docs.dewacloud.com/docs/php-extensions/)
- [JPS Collection](https://github.com/jelastic-jps)