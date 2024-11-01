---
slug: release-notes-810
title: Release Notes 8.10
authors: [dewacloud]
date: 2024-10-23
---
# Dewacloud Application Platform 8.10

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.10**.

:::tip Baru

## Peningkatan Kinerja Riwayat Tagihan{#billing-history-performance-enhancement}

Menambahkan database dengan data tagihan yang diagregasi untuk mempercepat permintaan riwayat tagihan yang paling sering [Pelajari lebih lanjut](#billing-history-performance-enhancement)

:::

:::info Perubahan

## Pembatasan Restart Node saat Deployment Proyek{#restrict-node-restart-during-project-deploy}

Mengunci tombol restart dan redeploy node di dashboard selama deployment atau pembaruan proyek [Pelajari lebih lanjut](#restrict-node-restart-during-project-deploy)

## Perubahan API{#api-changes}

Mencantumkan semua perubahan pada API platform publik dalam rilis saat ini [Pelajari lebih lanjut](#api-changes)

## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Daftar terkini dari template OS yang didukung dan versi tumpukan perangkat lunak [Pelajari lebih lanjut](#software-stack-versions)

:::

:::warning Perbaikan

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Perbaikan bug yang diimplementasikan dalam rilis saat ini dan diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai [Pelajari lebih lanjut](#fixes-compatible-with-prior-versions)

## Perbaikan Bug{#bug-fixes}

Daftar perbaikan yang diterapkan pada platform dimulai dari rilis saat ini [Pelajari lebih lanjut](#bug-fixes)

:::

{/* truncate */}

## Peningkatan Kinerja Riwayat Tagihan{#billing-history-performance-enhancement}

Platform Aplikasi Dewacloud menyediakan informasi yang sangat rinci dan terperinci tentang semua sumber daya yang digunakan untuk memastikan harga yang adil. Database platform menyimpan data setiap jam untuk setiap sumber daya dari setiap pengguna, yang dapat menjadi sejumlah besar catatan dari waktu ke waktu. Pada titik tertentu, kinerja permintaan ke tabel ini dapat terpengaruh. Untuk menghindari penurunan kinerja riwayat tagihan, database tambahan dengan catatan harian yang diagregasi untuk data terbaru ditambahkan. Database yang diagregasi semacam itu cukup untuk memenuhi permintaan riwayat tagihan yang paling umum, sambil beroperasi secara signifikan lebih cepat (karena jumlah catatan yang lebih sedikit) dan mengurangi beban pada database reguler dengan data setiap jam.

Beberapa spesifik dari implementasinya:

  * Database baru tidak menyediakan akses ke data hari saat ini.
  * Jika hari saat ini termasuk dalam permintaan, data akan diperoleh dari kedua database (data hari ini dari reguler/jam dan sisanya dari agregasi/harian). Pendekatan seperti ini secara komparatif lebih cepat daripada hanya menggunakan database reguler.
  * Semua permintaan setiap jam akan diarahkan ke database reguler (tanpa kehilangan ketelitian).

[Info lebih lanjut](<https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history>)



## Pembatasan Restart Node saat Deployment Proyek{#restrict-node-restart-during-project-deploy}

Untuk mencegah masalah selama deployment atau pembaruan proyek, opsi restart node dan redeploy secara otomatis terkunci di dashboard. Peningkatan ini memastikan bahwa proses deployment aplikasi selesai sebelum memungkinkan pengelolaan lebih lanjut, yang mengurangi risiko gangguan yang tidak disengaja.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.10/01-restrict-restart-during-deploy.png" alt="pembatasan restart selama deploy" max-width="100%"/>

## Perubahan API{#api-changes}

Berikut ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.10 (dibandingkan dengan yang sebelumnya [8.8](<https://docs.dewacloud.com/release-notes/release-notes-88/#api-changes>)):

  * Parameter _envName_ dihapus dari metode _**GetGroups**_, _**CreateGroup**_, _**EditGroup**_, dan _**RemoveGroup**_ dalam layanan **[group](<https://docs.jelastic.com/api/#!/api/environment.Group>)**. Parameter _appid_ default sekarang digunakan untuk autentikasi.

[Info lebih lanjut](<https://docs.jelastic.com/api/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.10 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.10  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-67639 | any | Kesalahan terjadi saat merestart node _LLSMP_ versi _6.0.12_  
JE-70954 | any | Kesalahan HTTP 404 terjadi saat mengakses aplikasi _Liferay_ setelah instalasi dari Marketplace  
JE-71040 | any | Kesalahan terjadi saat menginstal aplikasi _Ametys_ dari Marketplace  
JE-71342 | any | Aplikasi percobaan dari file _compose.yml_ tidak berfungsi di kontainer _Docker Engine CE_  
JE-71762 | any | Add-on _MongoDB Encrypted Connection_ seharusnya tersedia hanya untuk versi _MongoDB 6/7_  
JE-72071 | any | Kesalahan terjadi saat menginstal add-on _Let’s Encrypt_ karena sertifikat repo yang sudah usang  
JE-72126 | any | Kesalahan terjadi saat menginstal aplikasi _Maian Cart_ dari Marketplace  
JE-72193 | any | Kesalahan terjadi saat menginstal aplikasi _Eclipse Vert.x Thin Jar Builder_ dari Marketplace  
JE-72314 | any | Kluster _GlusterFS_ menjadi tidak tersedia sementara setelah redeployment  
JE-72551 | any | Aturan NFT add-on _Let’s Encrypt_ tidak dihapus jika ada beberapa load balancer di environment  
JE-72800 | any | Paket _Cyclos_ berbasis pada versi OS _Ubuntu 24.04_ yang tidak didukung  
JE-36672 | 5.0.5 | Nama parameter dalam file konfigurasi _php.ini_ salah  
JE-42272 | 5.0.5 | Pengalihan otomatis ke port non-standar tidak berfungsi untuk kontainer _Node.js_  
JE-44633 | 5.0.5 | Rotasi file log tidak berfungsi pada kontainer _Varnish_  
JE-52045 | 5.0.5 | Kesalahan “_permission denied_” terjadi jika add-on _Env Start/Stop Scheduler_ diinstal oleh anggota kolaborasi  
JE-63662 | 5.0.5 | Kesalahan terjadi saat mengakses aplikasi _MinIO cluster_ dengan SSL bawaan diaktifkan  
JE-72326 | 5.0.5 | Kata sandi yang salah dikirim via email setelah instalasi aplikasi _Jitsi_  
JE-72400 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _Nexus Repository Manager_ dari Marketplace  
JE-72112 | 5.3.2 | Kesalahan terjadi saat menginstal paket _OpenVPN Access Server_ karena repositori CentOS 7 yang sudah usang  
JE-69846 | 8.3.1 | Kesalahan terjadi saat mengubah bahasa di _phpMyAdmin_ untuk database _MariaDB_  
JE-70036 | 8.3.1 | Kesalahan HTTP 500 terjadi saat mengirimkan permintaan POST via HTTP/3 pada server aplikasi _NGINX PHP_  
JE-71724 | 8.3.1 | Kesalahan terjadi saat mengatur _ModSecurity Web Application Firewall_ pada load balancer _NGINX_  
JE-71863 | 8.3.1 | HTTP/3 tidak berfungsi pada load balancer _NGINX 1.26.0_  
JE-71936 | 8.3.1 | Failover tidak berfungsi untuk _PostgreSQL Cluster_ dengan load balancer _pgpool-II_  
JE-72055 | 8.3.1 | Izin yang tidak tepat untuk file konfigurasi di direktori _/opt/jetty/etc/_ pada server aplikasi _Jetty_  
JE-49037 | 8.4.1 | Perilaku add-on _Env Start/Stop Scheduler_ yang tidak tepat jika diinstal oleh anggota kolaborasi  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.10:

Dewacloud Application Platform 8.10  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-70400 | 8.3.2 | Rute tambahan ke wilayah lain hilang saat menambahkan dua atau lebih alamat IP sekaligus  
JE-70813 | 8.3.2 | Tindakan pasca-instalasi gagal untuk kontainer yang berbasis pada template OS _AlmaLinux 8.7_  
JE-70877 | - | Kesalahan terjadi saat men-deploy konteks dengan simbol “_#_” dalam nama pada server aplikasi Tomcat  
JE-71181 | any | Tidak semua file lama dihapus selama _git deploy_ ke server aplikasi  
JE-72015 | 8.0 | Perilaku tak terduga saat menggunakan metode API _AddRules_ dengan parameter _relatedEnvName/relatedNodeGroup_  
JE-72052 | 8.8 | Deskripsi API yang tidak benar untuk metode API _CreateGroup_  
JE-72057 | - | Kesalahan yang tidak ditangani terjadi saat pengunduhan arsip gagal selama deployment aplikasi  
JE-72245 | 8.6 | Aturan default untuk koneksi yang terjalin/terkait hilang untuk protokol _IPv6_  
JE-72474 | - | Pengguna tidak dapat masuk ke dashboard jika akun adalah anggota dari lebih dari 100 grup kolaborasi  
JE-72543 | - | Kesalahan terjadi saat menginstal kontainer yang berbasis pada template OS _Debian 12_  
JE-72691 | 8.8 | Kesalahan terjadi saat membuat titik mount NFS antara kontainer berbasis _AlmaLinux-_ dan _CentOS_  
  
