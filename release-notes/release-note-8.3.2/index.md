---
slug: release-notes-8.3.2
title: Release Notes 8.3.2
authors: [dewacloud]
date: 2024-10-18
---
# Dewacloud Application Platform 8.3.2

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.3.2**.

:::info Perubahan

## Peningkatan SSH Gate{#ssh-gate-improvements}

Menyediakan sejumlah pembaruan dan peningkatan untuk meningkatkan keamanan, keandalan, dan kegunaan _SSH Gate_ [Pelajari lebih lanjut](<#ssh-gate-improvements>)

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

## Peningkatan SSH Gate{#ssh-gate-improvements}

Komponen **[SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate/>)** dari platform ini membantu terhubung ke lingkungan melalui protokol SSH. Dalam versi platform 8.3.2 saat ini, beberapa peningkatan diterapkan untuk memastikan keamanan dan keandalan proses:

  * Menerapkan pemrosesan yang tepat dari ekstensi baru _[OpenSSH](<https://github.com/openssh/openssh-portable/blob/V_9_1/PROTOCOL#L288>)_ ke protokol SSH. Klien _OpenSSH 8.5 dan yang lebih baru_ tidak lagi memerlukan direktif “**UpdateHostkeys=no**” untuk menghubungkan gate.
  * Menghapus dukungan untuk algoritma _KEX_ (protokol pertukaran kunci) yang usang guna memastikan keamanan koneksi.
  * Memperbaiki kesalahan dengan crash SSH Gate saat terhubung ke backend yang rusak atau berkinerja buruk.



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.3.2 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.3.2  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-67008 | 5.0.5 | Kesalahan terjadi saat mengaktifkan paket _Cyclos 4 Pro_ dari Marketplace karena cloudlet default yang tidak mencukupi  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.3.2:

Dewacloud Application Platform 8.3.2  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-66810 | 8.3 | Saat menyegarkan daftar faktur, status faktur tidak diperbarui setelah dibayar melalui sistem pembayaran _Stripe_  
JE-66816 | 8.3 | Paket layanan langganan yang dibeli tidak dapat diperbarui jika dihapus oleh penyedia hosting layanan  
JE-66922 | 8.3 | Solusi berkerumun tidak diperbarui saat dimigrasi ke paket layanan langganan yang berbeda  
JE-66944 | 8.3 | Opsi enable/disable _Auto Pay_ tersedia untuk langganan yang dibatalkan  
JE-66954 | 7.1 | Kesalahan terjadi selama konfigurasi pasca-instalasi dari kontainer Docker _gitlab/gitlab-ce_  
JE-66972 | 8.3 | Validasi yang salah untuk frasa sandi saat mengonfirmasi migrasi langganan  
JE-66994 | 8.3 | Batas akun penuh yang salah ditampilkan di jendela _Quotas & Pricing_ dashboard  
  
