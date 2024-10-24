---
sidebar_position: 11
slug: /bitninja-server-security-add-on
title: BitNinja Server Security Add-On
---
# BitNinja Server Security Add-On

**[BitNinja](https://bitninja.io/)** adalah alat pertahanan keamanan-sebagai-layanan yang mudah digunakan yang dirancang untuk melindungi server dari peretas, botnet, penyerang, dan aktivitas berbahaya dengan upaya minimal. BitNinja mengumpulkan dan membagikan data serangan di seluruh jaringan server yang dilindungi, menciptakan **Defense Network** yang kuat. Add-on ini memungkinkan Anda melindungi server Anda dengan BitNinja melalui platform hanya dalam beberapa klik.

## Instalasi BitNinja

Add-on **[BitNinja](https://github.com/jelastic-jps/bitninja)** tersedia untuk semua node bersertifikasi (kecuali _[VPS](https://docs.dewacloud.com/docs/vps/)_).

1. **Buka Marketplace**: 
   - Akses dashboard platform, cari **BitNinja Service** di bagian **Add-Ons**, dan klik **Install**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/01-marketplace-bitninja-add-on.png" alt="marketplace BitNinja add-on" max-width="100%"/>

   :::tip
   Anda juga dapat menginstal BitNinja langsung dari panel **Add-Ons** untuk lapisan environment tertentu.
   :::

2. **Pilih Environment Target**:
   - Pilih environment dan lapisan yang diinginkan. BitNinja menyediakan berbagai modul keamanan berdasarkan lapisan yang dipilih, seperti:
     - **Load Balancer**: IP Reputation, Web Application Firewall, DOS Detection, Port Honeypot
     - **Application Server**: IP Reputation, Proxy Filter, FTP Captcha, SMTP Captcha, Malware Detection, Web Application Firewall, Defense Robot
     - **Database**: IP Reputation
     - **Shared Storage**: IP Reputation, Proxy Filter, FTP Captcha, SMTP Captcha, Malware Detection
     - **Build Node**: IP Reputation, Malware Detection

   :::note
   Semua fitur tersedia untuk diaktifkan, namun modul yang terdaftar di atas diaktifkan secara default berdasarkan kasus penggunaan umum.
   :::

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/03-bitninja-service-installation.png" alt="BitNinja service installation" max-width="100%"/>

   :::warning
   BitNinja memerlukan lisensi untuk digunakan. Detail lisensi dijelaskan di bagian **License Pricing** di bawah.
   :::

3. **Aktifkan BitNinja**:
   - Setelah instalasi, Anda akan menerima email berjudul "BitNinja Account Activation". Ikuti tautan untuk mengatur kata sandi dan konfirmasi akun Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/04-bitninja-account-activation-email.png" alt="BitNinja account activation email" max-width="100%"/>

   :::warning
   Hanya satu akun BitNinja yang dapat dibuat per alamat email.
   :::

### License Pricing

BitNinja mengikuti model penagihan **pay-as-you-go**, ditagih setiap jam (730 jam per bulan) untuk container aktif. Lisensi dikelola secara otomatis:
- Lisensi diterbitkan untuk setiap container ketika BitNinja diinstal.
- Container baru yang dibuat melalui skala horizontal secara otomatis diterbitkan lisensi.
- Lisensi dihentikan untuk container yang dihentikan atau dihapus.

Setiap lisensi ditagih sebesar **$10 per bulan** (atau sekitar **$0.014 per jam**).

:::warning
Biaya mungkin berbeda untuk platform dengan mata uang selain USD karena kurs konversi.
::: 

Sebagai contoh, jika Anda memiliki environment dengan load balancer, beberapa application server, dan kluster database, Anda akan dikenakan biaya untuk setiap node berlisensi. BitNinja secara otomatis menyesuaikan jumlah lisensi saat node ditambahkan atau dihapus.

## Opsi Add-On BitNinja

Anda dapat mengelola BitNinja melalui bagian **Add-Ons**:
- **BitNinja Admin Panel**: Akses untuk memantau acara keamanan.
- **Restart Agent**: Memulai ulang agen BitNinja.
- **Uninstall**: Menghapus BitNinja dari environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/05-bitninja-add-on-options.png" alt="BitNinja add-on options" max-width="100%"/>

   Anda dapat masuk ke konsol BitNinja untuk memantau serangan dan acara keamanan secara real time.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/06-bitninja-admin-panel-events.gif" alt="BitNinja admin panel events" width="70%" max-width="100%"/>

## Dukungan Vendor

Jika Anda mengalami masalah, Anda dapat menghubungi dukungan BitNinja melalui opsi **chat** cepat atau mengirimkan tiket melalui menu **Get Help**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/bitninja-server-security-add-on/07-bitninja-support.png" alt="BitNinja support" width="70%" max-width="100%"/>

## Baca Juga

- [Monitoring with New Relic](https://docs.dewacloud.com/docs/new-relic-installation/)
- [Managing Locale Settings](https://docs.dewacloud.com/docs/locale-settings/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Managing Timezone Settings](https://docs.dewacloud.com/docs/timezone-management/)