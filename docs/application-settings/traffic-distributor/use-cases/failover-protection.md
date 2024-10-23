---
sidebar_position: 2
slug: /failover-protection
title: Failover Protection
---

# Failover Protection dengan Traffic Distributor

[Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor/>) menyediakan **failover protection** tingkat lanjut dengan menggunakan modul _health check_ bawaan yang secara teratur menguji ketersediaan backend dan secara otomatis menghapus yang tidak tersedia dari proses routing. Fitur health check ini diaktifkan secara default, tetapi dapat disesuaikan untuk memenuhi kebutuhan Anda. Ikuti langkah-langkah di bawah ini untuk menyesuaikan perilaku modul health check.

## Langkah-langkah untuk Mengonfigurasi Failover Protection

### 1. Akses File Konfigurasi Traffic Distributor

1. Buka panel **Config** untuk NGINX dengan mengklik tombol **Config**.
2. Arahkan ke file `/etc/nginx/nginx-jelastic.conf` di direktori **Root**.

   ![Traffic Distributor config files](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/failover-protection/01-traffic-distributor-config-files.png)

3. Klik dua kali file tersebut untuk membukanya agar bisa diedit.

### 2. Konfigurasikan Modul Health Check

1. Gulir ke bawah hingga kira-kira baris ke-50 dalam file konfigurasi untuk menemukan modul **check**, yang terletak di dalam bagian **upstream common**. Modul ini mengontrol perilaku health check. Parameter konfigurasinya adalah sebagai berikut:

    ```nginx
    check interval={interval} fall={fail_count} rise={rise_count} [timeout={timeout}] [default_down={true/false}] [port={port}] [type={type}]
    ```

   ![Traffic Distributor failover parameters](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/failover-protection/02-traffic-distributor-failover-parameters.png)

   - **\{interval\}**: Waktu antara permintaan check berturut-turut, dalam milidetik.
   - **\{fail_count\}**: Jumlah kegagalan pemeriksaan berturut-turut yang diperlukan untuk menandai server sebagai tidak tersedia.
   - **\{rise_count\}**: Jumlah keberhasilan pemeriksaan berturut-turut yang diperlukan untuk menandai server sebagai tersedia.
   - **\{timeout\}**: Periode timeout (dalam milidetik) untuk backend merespons sebelum pemeriksaan dianggap gagal.
   - **\{default_down\}**: Menetapkan status awal backend (true = down, false = up). Secara default, diatur ke true.
   - **\{port\}**: Port yang digunakan untuk terhubung ke backend. Jika diatur ke 0, port server default (berdasarkan protokol) digunakan.
   - **\{type\}**: Protokol yang digunakan untuk health check. Pilihan yang tersedia:
     - **tcp**: Koneksi socket TCP dasar.
     - **ssl_hello**: Mengirim pesan SSL "Client Hello" dan mengharapkan respons "Server Hello".
     - **http**: Mengirim permintaan HTTP dan mengharapkan respon.
     - **mysql**: Menghubungkan ke server MySQL dan mengharapkan pesan sambutan.
     - **ajp**: Mengirim paket Cping AJP dan mengharapkan respons Cpong.
     - **fastcgi**: Mengirim permintaan FastCGI dan mengharapkan respons.

   Dalam contoh yang ditunjukkan di atas, pemeriksaan kesehatan dijalankan setiap 3 detik, dan jika backend gagal dalam 3 pemeriksaan berturut-turut, itu akan ditandai sebagai "down" dan dihapus dari routing. Setelah server tersedia kembali, server tersebut akan ditambahkan kembali setelah 3 pemeriksaan berturut-turut yang sukses.

### 3. Terapkan Perubahan Konfigurasi

1. Setelah Anda membuat perubahan pada konfigurasi, simpan file tersebut.
2. Untuk menerapkan perubahan tanpa memulai ulang seluruh server NGINX (dan dengan demikian menghindari downtime), gunakan opsi **Reload configuration** di menu add-on Traffic Distributor.

   ![Traffic Distributor reload configuration](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/failover-protection/03-traffic-distributor-reload-configuration.png)

3. Konfirmasikan tindakan reload melalui jendela pop-up, dan pengaturan failover yang baru akan diterapkan dalam beberapa detik.

## Baca Juga

- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Integration](<https://docs.dewacloud.com/docs/traffic-distributor-integration/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)