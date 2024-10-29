---
slug: release-notes-88
title: Release Notes 8.8
authors: [dewacloud]
date: 2024-10-22
---
# Dewacloud Application Platform 8.8

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.8**.

:::tip Baru

## Infrastruktur Berbasis AlmaLinux{#almalinux-based-infrastructure}

Memperbarui komponen infrastruktur platform berdasarkan image OS dasar modern _AlmaLinux 9_ [Pelajari lebih lanjut](<#almalinux-based-infrastructure>)

:::

:::info Perubahan

## Pengalih Waktu UTC/Lokal untuk Riwayat Penagihan{#utclocal-time-switch-for-billing-history}

Menambahkan kemampuan untuk beralih antara UTC dan waktu lokal saat bekerja dengan tab _Riwayat Penagihan_ dan laporan CSV yang dapat diunduh [Pelajari lebih lanjut](<#utclocal-time-switch-for-billing-history>)

## Perubahan API{#api-changes}

Mencantumkan semua perubahan pada API platform publik dalam rilis saat ini [Pelajari lebih lanjut](<#api-changes>)

## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Daftar terkini dari template OS yang didukung dan versi tumpukan perangkat lunak [Pelajari lebih lanjut](<#software-stack-versions>)

:::

:::warning Perbaikan

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Perbaikan bug yang diimplementasikan dalam rilis saat ini dan diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai [Pelajari lebih lanjut](<#fixes-compatible-with-prior-versions>)

## Perbaikan Bug{#bug-fixes}

Daftar perbaikan yang diterapkan pada platform dimulai dari rilis saat ini [Pelajari lebih lanjut](<#bug-fixes>)

:::

{/* truncate */}

## Infrastruktur Berbasis AlmaLinux{#almalinux-based-infrastructure}

Karena masa akhir dukungan (EOL) gambar _CentOS 7_ yang akan datang pada 30 Juni 2024, Dewacloud Application Platform beralih ke gambar OS dasar _**AlmaLinux 9**_ untuk semua [software stacks](<https://docs.dewacloud.com/release-notes/release-notes-83/#almalinux-9-base-os-image>) yang disertifikasi. Selama upgrade PaaS 8.8 saat ini, semua komponen infrastruktur akan secara otomatis dimigrasikan ke OS dasar baru. Transisi ini memastikan dukungan untuk semua fungsi modern, standar keamanan terkini, dan kompatibilitas dengan semua solusi perangkat lunak terbaru. Selain itu, fungsi _iptables_ akan digantikan dengan alternatif netfilter _**[nftables](<https://netfilter.org/projects/nftables/>)**_ yang lebih sederhana dan efisien dengan penanganan IPv4/IPv6 yang terintegrasi.



## Pengalih Waktu UTC/Lokal untuk Riwayat Penagihan{#utclocal-time-switch-for-billing-history}

Dalam rilis platform 8.8 saat ini, kemampuan untuk beralih antara _UTC_ dan _waktu lokal_ ditambahkan ke bagian **[Riwayat Penagihan](<https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history>)** dari dashboard. Ini menyediakan pengguna dengan pendekatan yang lebih fleksibel untuk melacak biaya akun. Misalnya, Anda dapat melihat dan mengunduh laporan dalam waktu lokal Anda dan beralih ke UTC untuk perbandingan yang lebih nyaman dengan faktur dalam UTC.

Tombol pengalih baru “_**UTC time**_” ditambahkan ke tab _Riwayat Penagihan_ (baik untuk seluruh akun maupun per lingkungan spesifik). Pilih waktu tampilan yang diinginkan dan klik **Refresh** untuk menerapkan. Status pengalihan juga akan mempengaruhi laporan CSV yang dapat diunduh.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.8/01-utc-billing-history.png" alt="riwayat penagihan UTC" width="100%"/>

[Info lebih lanjut](<https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history>)



## Perubahan API{#api-changes}

Dewacloud Application Platform menyediakan file sumber dengan semua metode API yang didukung dalam standar **[OpenAPI Specification](<https://swagger.io/resources/open-api/>)**. Paket ini telah ditinjau secara menyeluruh dalam rilis 8.8 saat ini dan diperbarui dengan banyak perbaikan, pengoptimalan, dan perbaikan. Seperti biasa, paket baru dapat diunduh dalam format YAML dan JSON dengan mengklik tautan yang sesuai di sudut kanan atas situs [Dewacloud Application Platform API](<https://docs.dewacloud.com/docs/application-platform-api-docs/>) :

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.8/02-download-openapi.png" alt="download OpenAPI" width="100%"/>

[Info lebih lanjut](<https://docs.dewacloud.com/docs/application-platform-api-docs/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.8 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.8  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-63660 | any | Kesalahan terjadi saat memulai ulang node _NGINX Ruby_ untuk aplikasi _Redmine_  
JE-66167 | any | Peringatan UI untuk penskalaan node dalam aplikasi _PostgreSQL Multi-Region Cluster_ tidak ada  
JE-70952 | any | Kesalahan terjadi saat mengakses aplikasi _Laravel_ karena file database yang hilang  
JE-71569 | any | Kesalahan terjadi saat menginstal add-on _Let’s Encrypt_ untuk kontainer dengan IPv6 terhubung  
JE-71784 | any | Kesalahan terjadi saat menginstal aplikasi _Redmine_  
JE-71820 | any | Kesalahan terjadi saat menginstal add-on _Fail2Ban_ untuk kontainer berbasis _AlmaLinux_  
JE-59734 | 3.3 | Kesalahan konten campuran terjadi untuk aplikasi _Cyclos 4 Cluster_ dengan SSL diaktifkan  
JE-71043 | 5.0.5 | Kesalahan terjadi selama pembuatan proyek dengan aplikasi _Spring Boot Fat Jar Builder_  
JE-71439 | 5.0.5 | Logrotate tidak berfungsi pada beberapa versi tumpukan perangkat lunak _Apache PHP_  
JE-71611 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _Ghost_  
JE-71747 | 5.0.5 | Add-on _Let’s Encrypt_ memerlukan log panjang dari tugas cron  
JE-61819 | 8.3 | Kesalahan terjadi saat mengakses aplikasi dengan spasi kosong di folder konteks aplikasi atau beberapa nama file  
JE-69974 | 8.3 | Pengguna root untuk database _MariaDB_ hanya memiliki izin localhost  
JE-71501 | 8.3 | _mysql uid:gid_ harus dipulihkan setelah redeployment kontainer _LLSMP_  
JE-71939 | 8.3 | Jaringan rusak pada kontainer _LLSMP/LiteSpeed_ mandiri setelah mencopot pemasangan add-on _NewRelic_  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.8:

Dewacloud Application Platform 8.8  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-70054 | 8.0.2 | Kesalahan terjadi saat menambahkan _SSH Key_ dengan spasi kosong dalam komentar kunci  
JE-70744 | 8.4 | Kesalahan terjadi saat mengakses file node setelah redeployment dari template berbasis _AlmaLinux_ ke _CentOS_  
JE-71667 | 8.6 | Paket yang dibutuhkan tidak terinstal untuk template _Ubuntu_  
JE-71674 | 8.6.2 | Kesalahan terjadi saat mengeksekusi metode API _AddPortRedirect_  
JE-71694 | 8.6 | Kesalahan terjadi saat membuat titik mount dengan _Ubuntu_ sebagai server NFS  
JE-72009 | 8.3 | _OpenSSH_ terdampak oleh kerentanAN _CVE-2024-6387_  
JE-72025 | - | _AlmaLinux_ harus menjadi opsi VPS default dalam wizard topologi  
  
