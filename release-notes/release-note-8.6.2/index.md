---
slug: release-notes-862
title: Release Notes 8.6.2
authors: [dewacloud]
date: 2024-10-21
---
# Dewacloud Application Platform 8.6.2

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.6.2**.

:::info Baru

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

## Perubahan API{#api-changes}

Di bawah ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.6.2 (dibandingkan dengan yang sebelumnya [8.4](<https://docs.dewacloud.com/release-notes/release-notes-84/#api-changes>)):

  * Menambahkan parameter _**relatedEnvName**_ baru untuk menunjuk ke lingkungan yang terkait dengan aturan firewall (untuk metode **AddRules**, **EditRule**, dan **AddRule**)

[Info lebih lanjut](<https://docs.jelastic.com/api/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.6.2 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.6.2  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-69066 | any | Tugas cron terduplikat untuk add-on _Let’s Encrypt SSL_ dalam lingkungan yang diklon oleh kolaborator  
JE-70084 | any | Konflik port antara add-on _Let’s Encrypt SSL_ dan _BitNinja_  
JE-70832 | any | Kesalahan terjadi saat men-deploy aplikasi ke klaster _WildFly_  
JE-71137 | any | Daemon _Tinyproxy_ untuk add-on _Let’s Encrypt SSL_ tidak mendengarkan alamat IPv6 pada instalasi berbasis _AlmaLinux_  
JE-62980 | 5.0.5 | Untuk kontainer _Docker CE_, pindahkan port admin manajer Portainer dari _443_ ke _4848_  
JE-65840 | 5.4 | Kesalahan terjadi saat men-deploy aplikasi ke kontainer _.NET_  
JE-71280 | 8.3 | Ekspresi reguler yang tidak benar untuk aturan “_icmp host-prohibited_” dalam _nftables_ pada node _Node.js_ dan _Go_  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.6.2:

Dewacloud Application Platform 8.6.2  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-70957 | 8.6 | Kesalahan terjadi saat menambahkan aturan firewall untuk lingkungan yang dibagikan sambil menambahkan lingkungan dibagikan lain sebagai sumber  
JE-71100 | 8.6 | Add-on dengan scheduler berhenti bekerja setelah kolaborator (yang memasangnya) dihapus dari kolaborasi  
JE-71278 | 8.3 | Ekspresi reguler yang tidak benar untuk aturan “_icmp host-prohibited_” dalam _nftables_  
JE-71282 | 8.4.3 | Node build _Maven_ tidak dapat mengeksekusi aksi “_Build and Deploy_” jika auto-deploy diaktifkan  
JE-71387 | 8.6 | Tugas yang dikonfigurasi oleh anggota kolaborasi pada lingkungan pemilik dihancurkan/dinonaktifkan bersamaan dengan akun anggota  
  
