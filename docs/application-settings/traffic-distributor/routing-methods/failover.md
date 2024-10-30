---
sidebar_position: 3
slug: /failover-traffic-routing
title: Failover
---

# Failover Routing untuk Traffic Distributor

**Failover** adalah metode routing yang dirancang untuk memberikan ketersediaan tinggi dengan menjaga lingkungan cadangan yang sepenuhnya berfungsi sebagai cadangan. Metode ini memastikan bahwa semua permintaan masuk awalnya diarahkan ke server utama, sementara server sekunder (cadangan) tetap dalam mode siaga. Jika server utama menjadi tidak tersedia, server cadangan secara otomatis mengambil alih untuk menangani permintaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/routing-methods/failover/1.png" alt="Traffic Distributor failover routing" max-width="30%"/>

### Cara Kerja Failover Routing:
- **Pengaturan Utama dan Cadangan**: Anda dapat mengkonfigurasi satu server sebagai utama dan satu lagi sebagai cadangan. Semua permintaan masuk ke server utama selama masih berfungsi.
- **Failover Otomatis**: Jika server utama mengalami kegagalan, sistem secara otomatis mengarahkan permintaan ke server cadangan.
- **Tanpa Downtime**: Pengguna tidak akan menyadari adanya gangguan karena server cadangan akan menangani semua permintaan tanpa masalah.
- **Redundansi Geografis**: Dengan meletakkan server utama dan cadangan Anda di [region environment](https://docs.dewacloud.com/docs/environment-regions/) yang berbeda, Anda dapat memastikan ketahanan yang lebih tinggi dan melindungi terhadap kegagalan perangkat keras spesifik wilayah.

### Karakteristik Utama:
- **Rasio Lalu Lintas**: Metode ini tidak memungkinkan distribusi rasio lalu lintas (selalu 100% ke 0%). Server utama menangani semua lalu lintas hingga terjadi kegagalan, di mana lalu lintas diarahkan ke cadangan.
- **Ketersediaan Tinggi**: Menjamin waktu henti minimal dengan cepat beralih ke lingkungan cadangan dalam peristiwa kegagalan.
- **Transparansi Pengguna**: Pengguna secara otomatis diarahkan ke server yang berfungsi tanpa mengalami downtime atau gangguan.

## Baca Juga

- [Gambaran Umum Traffic Distributor](https://docs.dewacloud.com/docs/traffic-distributor/)
- [Round Robin](https://docs.dewacloud.com/docs/round-robin-traffic-routing/)
- [Sticky Sessions](https://docs.dewacloud.com/docs/sticky-sessions-traffic-routing/)
- [Instalasi Traffic Distributor](https://docs.dewacloud.com/docs/traffic-distributor-installation/)
- [Traffic Distributor Injection](https://docs.dewacloud.com/docs/traffic-distributor-integration/)