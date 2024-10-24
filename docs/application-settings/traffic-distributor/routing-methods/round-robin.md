---
sidebar_position: 1
slug: /round-robin
title: Round Robin
---

# Round Robin Routing untuk Traffic Distributor

**Round Robin** adalah metode routing yang paling sederhana dan paling sering digunakan untuk **Traffic Distributor**. Metode ini mendistribusikan permintaan yang masuk ke backend secara bergilir berdasarkan bobot server yang telah ditentukan sebelumnya, menyediakan ketersediaan tinggi dan distribusi beban yang seimbang untuk aplikasi Anda.

### Fitur Utama:
- **Distribusi Merata**: Permintaan didistribusikan secara merata di antara backend berdasarkan bobot server.
- **Load Balancing**: Setiap backend digunakan sesuai dengan bobot yang ditugaskan, memastikan penggunaan sumber daya yang optimal.

### Cara Kerjanya:
Permintaan diarahkan secara siklis ke setiap backend berdasarkan bobot yang ditetapkan, menghasilkan distribusi lalu lintas yang seimbang. 

Contoh:
- **Bobot Sama (50% / 50%)**: Setiap server bergantian memproses permintaan, menghasilkan distribusi lalu lintas yang seimbang.
- **Distribusi Berbobot (70% / 30%)**: Dari setiap 10 permintaan, 7 dikirim ke server pertama dan 3 ke server kedua, memungkinkan manajemen beban yang fleksibel.
- **Single Backend (100%)**: Semua permintaan diarahkan ke satu server. Ini bisa berguna untuk skenario seperti **Blue-Green Deployment** atau migrasi hardware tanpa downtime.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/routing-methods/round-robin/1.png" alt="Traffic Distributor round robin routing" width="30%"/>

### Pertimbangan Kasus Penggunaan:
- Metode ini ideal ketika backend memiliki **konten identik**, karena permintaan diproses oleh kedua server.
- Jika konten berbeda antara environment, pertimbangkan metode routing lain seperti **Sticky Sessions** atau **Failover**.

## Baca Juga
- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Sticky Sessions](<https://docs.dewacloud.com/docs/sticky-sessions-traffic-routing/>)
- [Failover](<https://docs.dewacloud.com/docs/failover-traffic-routing/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)