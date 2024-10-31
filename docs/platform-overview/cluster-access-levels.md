---
sidebar_position: 10
slug: /cluster-access-levels
title: Cluster Access Levels
---
# Cluster Access Levels

PaaS ditujukan untuk audiens yang luas, termasuk pengembang dan SMB, perusahaan, dan penyedia hosting. Setiap kelas pelanggan memiliki tingkat akses dan cara interaksi yang spesifik dengan platform kami.

Ada tiga tingkat akses ke PaaS Cluster:

* [administrator](#administrators)
* [pengembang atau SMB](#developers-or-smbs)
* [pengguna akhir](#end-users)

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cluster-access-levels/01-paas-access-levels.png" alt="PaaS access levels" max-width="100%"/>

Platform menyediakan dua panel admin untuk mengakses cluster. Cluster Panel (JCA) tersedia untuk administrator di penyedia hosting dan perusahaan. Panel admin lainnya adalah Platform Dashboard yang digunakan oleh pengembang. Ini membuat sistem ideal untuk tim DevOps.

## Administrators{#administrators}

**Administrator** dari platform adalah departemen operasi dari hosting Dewacloud atau departemen IT perusahaan. Setelah instalasi platform, mereka menjadi pemilik dan mulai mengelola kinerja keseluruhan melalui _Cluster Admin Panel_ dengan mengatur konfigurasi utama (kuota, tarif, kustomisasi, dll.) dan mendukung semua aspek yang diperlukan.

Ada empat tugas utama yang dilakukan oleh administrator selama siklus hidup PaaS Cluster:

* Instalasi
* Peluncuran
* Manajemen
* Pembaruan

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cluster-access-levels/4.71.png" alt="PaaS administrator tasks" max-width="100%"/>

Platform menyediakan rangkaian lengkap analitik, dokumentasi, dan alat yang diperlukan untuk melakukan tugas-tugas di atas dengan efisien dan berkualitas tinggi.

## Developers or SMBs{#developers-or-smbs}

Kelompok pelanggan platform ini dapat membuat environments, mendistribusikan aplikasi mereka dan melakukan semua tindakan yang diperlukan untuk [siklus hidup aplikasi mereka yang sukses](https://www.virtuozzo.com/application-platform-docs/application-lifecycle/). Manajemen environment dan aplikasi dilakukan melalui panel platform untuk pengembang - [PaaS Dashboard](https://www.virtuozzo.com/application-platform-docs/dashboard-guide/).

Aktivitas utama yang tersedia untuk pengembang atau SMB di platform adalah sebagai berikut:

* membuat lingkungan sederhana dan kompleks
* mendistribusikan aplikasi dengan berbagai cara tanpa perubahan kode
* kemampuan untuk menyetel dan menyesuaikan konfigurasi
* menskalakan aplikasi secara vertikal dan horizontal
* menguji dan debug aplikasi dari jarak jauh
* manajemen siklus hidup aplikasi
* mengkloning dan berbagi environments
* menangguhkan dan mengaktifkan environments yang dihentikan
* memproses statistik dan log
* meningkatkan dan mendanai akun, dll.

Saat menggunakan PaaS, pengembang tipikal dapat memulai dari pendaftaran percobaan hingga pengujian fitur selama periode percobaan. Langkah-langkah utama dari siklus hidup ini diwakili dalam diagram di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cluster-access-levels/4.72.png" alt="account lifecycle" max-width="100%"/>

Di akhir periode percobaan, pengembang memutuskan apakah akan meningkatkan akun dan mencapai produksi atau menghancurkan akun tersebut.

Instalasi perusahaan tidak memiliki periode percobaan. Di cloud pribadi perusahaan, pengembang dapat mengelola sendiri environment aplikasi mereka menggunakan dashboard platform yang membebaskan administrator IT dari tugas konfigurasi dan pengaturan environment.

## End Users{#end-users}

**Pengguna akhir** terhubung ke PaaS Cluster secara tidak langsung dengan **menggunakan aplikasi** yang didistribusikan ke environments yang dibuat oleh pengembang atau SMB atau pengembang perusahaan. Semua permintaan pengguna yang masuk dikirim ke nama domain dari aplikasi yang sesuai dan diproses dengan salah satu cara berikut:

* melalui **[Global Resolvers](https://docs.dewacloud.com/docs/shared-load-balancer/)** Platform ini menggunakan beberapa Resolvers (SLBs) yang tersinkronisasi untuk menerima permintaan secara bersamaan. Dengan hasilnya, ada beberapa titik akses untuk environments yang digunakan pada waktu yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cluster-access-levels/4.73.png" alt="cluster access shared balancer" max-width="100%"/>

* melalui **[Public IP](https://docs.dewacloud.com/docs/public-ip/)** jika terpasang pada titik akses environment (balancer, server aplikasi, atau container database). Solusi ini memberikan risiko yang lebih rendah terpengaruh oleh aplikasi lain (seperti dalam kasus dengan shared Resolvers) dan direkomendasikan untuk aplikasi produksi. Juga, penggunaan Public IP membuat lebih banyak fitur tersedia seperti debugging jarak jauh, cadangan jarak jauh, JMX, FTP, Custom SSL, websockets, dan polling, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cluster-access-levels/4.74.png" alt="cluster access public IP" max-width="100%"/>

Tingkat akses membuat penggunaan dan pengelolaan PaaS Cluster menjadi efisien, nyaman dan mudah. Setiap jenis pelanggan diberi hak dan batasan masing-masing, membuat sistem terstruktur dan terorganisir dengan baik.

## Baca Juga{#whats-next}

* [Dashboard Guide](https://docs.dewacloud.com/docs/dashboard-guide/)
* [Application Lifecycle](https://docs.dewacloud.com/docs/application-lifecycle/)
* [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
* [Public IP](https://docs.dewacloud.com/docs/public-ip/)