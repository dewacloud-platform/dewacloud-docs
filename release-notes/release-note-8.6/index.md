---
slug: release-notes-86
title: Release Notes 8.6
authors: [dewacloud]
date: 2024-10-20
---
# Dewacloud Application Platform 8.6

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.6**.

:::info

## Perubahan Izin Skrip Kolaborasi{#collaboration-scripts-permissions}

Mengubah perilaku skrip kustom yang diinstal oleh anggota kolaborasi untuk dijalankan di bawah sesi akun yang menginstal solusi [Pelajari lebih lanjut](#collaboration-scripts-permissions)

## Membatasi Ubuntu 16.04{#deprecating-ubuntu-1604}

Gambar OS dasar dan tumpukan VPS _Ubuntu 16.04_ dihentikan [Pelajari lebih lanjut](#deprecating-ubuntu-1604)

## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Daftar terkini dari template OS yang didukung dan versi tumpukan perangkat lunak [Pelajari lebih lanjut](#software-stack-versions)

:::

:::warning

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Perbaikan bug yang diimplementasikan dalam rilis saat ini dan diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai [Pelajari lebih lanjut](#fixes-compatible-with-prior-versions)

## Perbaikan Bug{#bug-fixes}

Daftar perbaikan yang diterapkan pada platform dimulai dari rilis saat ini [Pelajari lebih lanjut](#bug-fixes)

:::

{/* truncate */}

## Izin Skrip Kolaborasi{#collaboration-scripts-permissions}

Fitur **[kolaborasi akun](<https://www.virtuozzo.com/application-platform-docs/account-collaboration/>)** menyediakan cara yang fleksibel dan efisien bagi beberapa akun untuk bekerja pada proyek yang sama. Bergantung pada izin yang dibagikan, anggota kolaborasi dapat melakukan berbagai tindakan pada akun utama, termasuk menjalankan skrip kustom. Untuk memastikan keamanan, skrip kustom semacam itu (termasuk dari add-on yang disertifikasi, seperti _Env Start/Stop Scheduler_) akan dieksekusi di bawah sesi anggota yang memicu aksi dan bukan pemilik akun. Akibatnya, skrip yang diinstal oleh anggota kolaborasi akan berhenti bekerja setelah pengguna kehilangan izin yang diperlukan (karena perubahan pada peran dan kebijakan yang dibagikan).

[Info lebih lanjut](<https://www.virtuozzo.com/application-platform-docs/collaboration-roles-policies/>)



## Membatasi Ubuntu 16.04{#deprecating-ubuntu-1604}

Dukungan Dewacloud Application Platform untuk [image OS dasar](<https://docs.dewacloud.com/docs/container-image-requirements/>) **Ubuntu 16.04** dihentikan dalam rilis 8.6 saat ini. Platform membatasi pembuatan kontainer baru berdasarkan Ubuntu 16. Semua kontainer yang sudah ada tetap dapat dioperasikan sepenuhnya. Namun, kami sangat merekomendasikan memperbarui instance tersebut ke versi rilis LTS yang lebih baru (_Ubuntu 18.04 / 20.04 / 22.04_) melalui fitur bawaan [redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>).

Selain itu, tumpukan [VPS Ubuntu 16.04](<https://docs.dewacloud.com/docs/software-stacks-versions/#additional>) dihentikan dan tidak akan tersedia lagi.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/container-image-requirements/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.6 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.6  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-64973 | any | Pengaturan PHP “_memory_limit_” harus diatur dalam _php.ini_ (ke nilai yang sama seperti dalam _php-fpm.conf_) untuk menghindari kebingungan yang mungkin terjadi  
JE-65915 | any | Hanya 10 replika pertama yang terhubung ke node utama dalam klaster database _PostgreSQL_  
JE-69749 | any | Pembaruan otomatis sertifikat gagal untuk instalasi lama dari _Let’s Encrypt_  
JE-70447 | any | Paket _Eclipse Che_ tidak lagi didukung dan harus dihentikan  
JE-70789 | any | Kesalahan terjadi saat mengkloning lingkungan dengan _MariaDB Galera Cluster_  
JE-68209 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _IOTA_ dari Marketplace platform  
JE-69957 | 5.4 | Instalasi aplikasi default _HelloWorld_ platform gagal pada versi terbaru dari server aplikasi _Golang_  
JE-69546 | 5.8 | Kesalahan terjadi saat menginstal aplikasi _OpenVPN Access Server_ dari Marketplace platform  
JE-66780 | 6.0 | Antarmuka WAF (modul WAFManager > opsi antarmuka) tidak diatur untuk add-on _BitNinja_  
JE-63521 | 6.1 | Tiga node penyimpanan berdiri sendiri dibuat alih-alih klaster _GlusterFS_ saat menginstal klaster _Buckup Storage_  
JE-70942 | 8.3 | Kesalahan terjadi saat me-redeploy tumpukan _LLSMP_ ke tag berbasis _AlmaLinux_  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.6:

Dewacloud Application Platform 8.6  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-15860 | 2.2 | Kesalahan terjadi saat men-deploy aplikasi dengan simbol “_#_” dalam nama konteks  
JE-49193 | any | Kesalahan terjadi saat membuat lingkungan dengan panjang nama _32_ simbol  
JE-56726 | - | Mount NFS gagal pada kontainer berbasis _Ubuntu_ dengan cache _apt_ yang usang  
JE-62642 | 6.3.2 | Kesalahan tidak tertangani ketika jalur yang salah ditentukan di file manager dashboard  
JE-62829 | 7.0.2 | Kesalahan tidak tertangani ketika mencoba menambahkan Docker kustom dengan kredensial yang salah  
JE-62930 | - | Kesalahan “_ip6tables: command not found_” terjadi saat bekerja dengan kontainer berbasis _Alpine_  
JE-64659 | - | Beberapa variabel lingkungan hilang setelah mengonfigurasi tautan antara lapisan  
JE-65902 | - | Kesalahan terjadi saat bekerja dengan kontainer karena validasi yang salah dalam _docker.module_  
JE-66030 | - | Perilaku tidak benar ketika melepaskan IP eksternal untuk node VPS tanpa IP internal  
JE-66856 | 8.3 | Entitas lokalisasi hilang untuk kesalahan saldo akun yang tidak mencukupi saat membeli langganan  
JE-67058 | 8.3.2 | Pop-up progresi hilang saat menginstal solusi langganan  
JE-67274 | 8.4 | Ikon lingkungan dan status tidak ditampilkan untuk pengguna yang diundang yang tidak terdaftar di platform  
JE-67346 | 5.7 | Kesalahan terjadi saat menggunakan aksi kustom untuk add-on yang diinstal melalui URL  
JE-67971 | 8.0 | Port _111_ harus dibuka hanya untuk IP klien NFS  
JE-68029 | 8.3 | Beberapa lokal rusak setelah me-redeploy ke tag berbasis _AlmaLinux_  
JE-69316 | 8.0 | Layanan _UNFSD_ tidak dapat menulis file dengan benar melalui protokol _UDP_ dan seharusnya diganti dengan NFS berbasis kernel  
JE-69318 | 8.4 | Kesalahan terjadi saat menginstal _AutoFS_ dalam kontainer berbasis _CentOS 9/AlmaLinux 9_  
JE-69551 | 8.4 | Kunci SSH host hilang pada _Ubuntu 23.10 VPS_ setelah pembuatan  
JE-69969 | - | Kesalahan terjadi saat menginstal _RPCBind_ pada kontainer _Ubuntu 23_  
JE-70125 | 8.3 | Kesalahan OOM terjadi selama pembaruan otomatis paket yum di node _Memcached_ dengan kurang dari _1GB_ RAM  
JE-70360 | any | Kesalahan terjadi selama pengecekan mount ketika terdapat banyak mount dan ekspor  
JE-70474 | 8.3 | Tidak dapat terhubung melalui IPv6 ke kontainer Docker kustom berbasis _AlmaLinux_  
JE-70654 | 8.3.2 | Kesalahan terjadi saat menonaktifkan firewall pada node _CentOS-based Docker Engine CE_  
JE-70903 | 8.3 | Hanya lingkungan yang dibagikan yang harus ditampilkan di drop-down saat mengelola aturan firewall untuk lingkungan yang dibagikan  
  
