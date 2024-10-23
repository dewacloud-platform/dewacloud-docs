---
sidebar_position: 1
slug: /traffic-distributor-overview
title: Traffic Distributor Overview
---

# Traffic Distributor Overview

**Traffic Distributor** adalah solusi load balancing yang dirancang untuk mendistribusikan lalu lintas secara efisien di antara beberapa environment, meningkatkan skalabilitas dan keandalan proyek Anda. Solusi ini menawarkan metode routing lalu lintas canggih dan fitur seperti ketersediaan tinggi, Blue-Green deployment, A/B testing, dan perlindungan failover, yang menyederhanakan manajemen aplikasi skala besar.

![Traffic Distributor Logo](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-overview/01-traffic-distributor-logo.png)

## Fitur Utama:
- **Ketersediaan Tinggi & Failover**: Memastikan ketersediaan berkelanjutan dengan mendistribusikan lalu lintas di antara beberapa host, meminimalkan downtime bahkan jika satu instance gagal.
- **Blue-Green Deployment**: Memungkinkan pembaruan yang mulus dengan mengarahkan lalu lintas ke satu environment saat memperbarui yang lain, memastikan tidak ada downtime.
- **A/B Testing**: Memungkinkan routing lalu lintas antara versi aplikasi yang berbeda, memungkinkan perbandingan kinerja secara real-time.
- **Metode Routing Dapat Disesuaikan**: Pilih antara Round Robin, Sticky Sessions, dan Failover routing untuk memenuhi kebutuhan aplikasi Anda.
- **Health Checks**: Secara otomatis memantau backend, memastikan permintaan hanya dikirim ke instance yang sehat.
- **Ekstensibilitas**: Memungkinkan konfigurasi lanjutan melalui NGINX untuk kebutuhan spesifik, seperti caching atau SNI.

## Metode Routing

Traffic Distributor mendukung tiga metode routing untuk memenuhi berbagai kasus penggunaan:

### 1. Round Robin
- **Deskripsi**: Mendistribusikan lalu lintas secara merata di antara semua environment dengan memutar permintaan.
- **Kasus Penggunaan**: Ideal ketika konten identik disajikan oleh semua instance.
- **Pengaturan**: Memerlukan instance aplikasi identik untuk distribusi lalu lintas yang seimbang.

![Round Robin Routing](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-overview/03-traffic-distributor-round-robin-routing.png)

### 2. Sticky Sessions
- **Deskripsi**: Menugaskan pengguna ke backend tertentu berdasarkan informasi sesi, memastikan semua permintaan selama sesi ditangani oleh server yang sama.
- **Kasus Penggunaan**: Berguna saat persistensi sesi diperlukan (misalnya, keranjang belanja).
- **Pengaturan**: Mengkonfigurasi "stickiness" oleh sesi untuk merutekan pengguna secara konsisten ke server yang sama.

![Sticky Sessions Routing](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-overview/04-traffic-distributor-sticky-sessions-routing.png)

### 3. Failover
- **Deskripsi**: Merutekan semua lalu lintas ke server utama tetapi secara otomatis beralih ke server cadangan jika server utama gagal.
- **Kasus Penggunaan**: Kritis untuk mempertahankan uptime dalam aplikasi dengan ketersediaan tinggi.
- **Pengaturan**: Memerlukan environment cadangan untuk memastikan failover yang mulus jika server utama mengalami kegagalan.

![Failover Routing](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-overview/05-traffic-distributor-failover-routing.png)

## Implementasi Traffic Distributor

Traffic Distributor diterapkan sebagai environment terpisah yang berisi node load balancer NGINX. Untuk mengatur, pilih host, tipe routing, dan rasio lalu lintas, serta konfigurasikan melalui formulir sederhana. Instalasi menciptakan sistem load balancing yang fleksibel yang terintegrasi dengan [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) atau alamat [Public IP](<https://docs.dewacloud.com/docs/public-ip/>).

Traffic Distributor dapat menangani beberapa protokol, termasuk HTTP, HTTPS, dan WebSockets. Proses load balancing terjadi selama handshake HTTP, dan koneksi WebSocket tetap persisten setelahnya.

![Traffic Distributor Environment](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-overview/06-traffic-distributor-environment.png)

### Kasus Penggunaan:
- **Distribusi Beban Merata**: Mendistribusikan permintaan di seluruh server untuk mengoptimalkan penggunaan sumber daya.
- **Blue-Green Deployment**: Mengarahkan lalu lintas ke satu environment sambil memperbarui yang lain, memungkinkan pembaruan tanpa downtime.
- **A/B Testing**: Secara bersamaan menguji dua versi aplikasi untuk mengukur perbedaan kinerja.
- **Perlindungan Failover**: Memastikan layanan tanpa gangguan dengan mengalihkan lalu lintas ke server cadangan jika terjadi kegagalan.

## Baca Juga

- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)
- [Blue-Green Deployment](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)