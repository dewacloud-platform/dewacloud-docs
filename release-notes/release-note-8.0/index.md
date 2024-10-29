---
slug: release-notes-80
title: Release Notes 8.0
authors: [dewacloud]
date: 2024-10-10
---
# Dewacloud Application Platform 8.0

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.0**.

:::info Perubahan

## Downgrade AutoFS{#autofs-downgrade}

Menetapkan versi _AutoFS 5.1.6_ yang stabil dan tetap alih-alih versi terbaru karena masalah kinerja [Pelajari lebih lanjut](<#autofs-downgrade>)

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

## Downgrade AutoFS{#autofs-downgrade}

**AutoFS** adalah alat sistem file untuk mengotomatisasi operasi [mounting direktori](<https://docs.dewacloud.com/docs/mount-points/>) dan mencapai pendekatan "as-needed". Dengan metode mounting direktori ini, folder bersama hanya dipasang saat diakses dan secara otomatis dilepas setelah periode tidak aktif. Fokus utama dari implementasi ini adalah efisiensi jaringan yang lebih baik dibandingkan dengan mounting statis.

Namun, beberapa masalah kinerja terdeteksi dengan versi _AutoFS_ terbaru. Akibatnya, versi _**AutoFS 5.1.6**_ yang stabil teregresi untuk semua kontainer pada platform. Platform ini akan mengembalikan pembaruan reguler ke rilis terbaru segera setelah masalahnya teratasi.



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.0 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.0  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-58066 | 3.3 | Deskripsi kesalahan yang sama dalam email untuk tindakan instalasi, konfigurasi, dan pembaruan sertifikat _Let’s Encrypt SSL_  
JE-60859 | 3.3 | Kesalahan terjadi saat menginstal add-on _New Relic APM_ pada tumpukan _LLSMP_  
JE-63103 | 3.3 | Kesalahan terjadi saat menginstal paket _Docker Engine_ dan _Docker Swarm_ dengan opsi _Portainer_ diaktifkan  
JE-63279 | 3.3 | Kesalahan terjadi setelah me-restart lingkungan dengan aplikasi _Liferay_ dari Marketplace platform  
JE-63726 | 3.3 | Proses _java.orig_ berfungsi tidak benar dalam aplikasi _Liferay_ dari Marketplace platform  
JE-63927 | 3.3 | Kesalahan OOM terpicu selama instalasi aplikasi _Liferay_ dari Marketplace platform  
JE-63625 | 5.0.5 | Batas _max open files_ yang tidak benar untuk beberapa tumpukan perangkat lunak  
JE-63873 | 5.8 | Volume data _t_tracked_actions_ yang terlalu besar saat menginstal add-on _Backup untuk WordPress_  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.0:

Dewacloud Application Platform 8.0  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-63799 | 7.3 | Kesalahan terjadi saat mengedit pemicu scaling horizontal otomatis  
JE-64201 | - | Tindakan pasca-instalasi gagal pada gambar yang berdasarkan template OS _Ubuntu 21.04_  
  
