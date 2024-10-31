---
slug: release-notes-802
title: Release Notes 8.0.2
authors: [dewacloud]
date: 2024-10-11
---
# Dewacloud Application Platform 8.0.2

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.0.2**.

:::tip Baru

## Dukungan Tipe Kunci SSH{#ssh-key-types-support}

Menambahkan dukungan untuk tipe kunci _ECDSA_ dan membatasi penambahan kunci _DSA_ [Pelajari lebih lanjut](<#ssh-key-types-support>)

:::

:::info Perubahan

## Metadata Lingkungan yang Diperluas{#extended-environment-metadata}

Menyediakan bidang metadata baru untuk informasi tambahan lingkungan [Pelajari lebih lanjut](<#extended-environment-metadata>)

## Data Kustom dalam Respon Scripting Cloud{#custom-data-in-cloud-scripting-response}

Mengimplementasikan bidang tambahan untuk mengembalikan data kustom saat menjalankan perintah API melalui Scripting Cloud [Pelajari lebih lanjut](<#custom-data-in-cloud-scripting-response>)

## Deskripsi Kesalahan Instalasi SSL{#ssl-installation-error-description}

Memperpanjang deskripsi kesalahan untuk operasi kegagalan instalasi SSL [Pelajari lebih lanjut](<#ssl-installation-error-description>)

## Perubahan API{#api-changes}

Mencantumkan semua perubahan pada API platform publik dalam rilis saat ini [Pelajari lebih lanjut](<#api-changes>)

## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Daftar terkini dari template OS yang didukung dan versi tumpukan perangkat lunak [Pelajari lebih lanjut](<#software-stack-versions>)

:::

:::warning Perbaikan

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Perbaikan bug yang diimplementasikan dalam rilis saat ini dan diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai [Pelajari lebih lanjut](<#fixes-compatible-with-prior-versions>)

:::

{/* truncate */}

## Dukungan Tipe Kunci SSH{#ssh-key-types-support}

Tipe kunci _**ECDSA**_ dengan cepat mendapatkan popularitas sebagai alternatif untuk kunci _RSA_ standar. Sebagai akibat dari permintaan yang terus meningkat ini, platform mengimplementasikan dukungan untuk tipe kunci SSH baru ini dalam versi 8.0.2 PaaS saat ini. Selain itu, algoritma kunci publik _**ssh-dss**_ (_DSA_) yang sudah usang sekarang secara eksplisit dilarang, bukan hanya direkomendasikan untuk tidak digunakan. Platform akan menunjukkan peringatan tentang tingkat keamanan yang tidak memadai saat mencoba menambahkan kunci DSA. Namun, kunci yang sudah ada tidak akan terpengaruh dengan cara apa pun.

Saat ini, platform mendukung tipe kunci SSH berikut:

  * _ECDSA_
  * _EdDSA_
  * _RSA_

[Info lebih lanjut](<https://docs.dewacloud.com/docs/ssh-generate-key/>)



## Metadata Lingkungan yang Diperluas{#extended-environment-metadata}

Setiap lingkungan pada platform menyimpan informasi umumnya melalui berkas JSON yang didedikasikan. Implementasi semacam itu menyederhanakan berbagai proses internal dengan memungkinkan PaaS mendapatkan data yang dibutuhkan dengan cepat. Selain itu, data ini digunakan selama operasi [eksport lingkungan](<https://docs.dewacloud.com/docs/environment-export/>). Dalam upgrade platform saat ini, metadata lingkungan diperluas dengan bidang JSON untuk berbagai informasi tambahan (misalnya, _ProjectName_ atau _ProjectScope_).



## Data Kustom dalam Respon Scripting Cloud{#custom-data-in-cloud-scripting-response}

[Scripting Cloud](<https://docs.cloudscripting.com/>) adalah bahasa pemrograman yang didedikasikan untuk platform yang dikembangkan untuk pengemasan aplikasi, otomatisasi operasi, dan integrasi alur kerja CI/CD yang kompleks. Alat otomatisasi yang kuat ini mengimplementasikan solusi populer seperti add-on _Let’s Encrypt_ atau berbagai [auto-cluster](<https://docs.dewacloud.com/docs/what-is-auto-clustering/>). Ini juga dapat digunakan oleh pengguna akhir platform untuk mengotomatisasi operasi mereka sendiri.

Dalam rilis 8.0.2 PaaS saat ini, kemampuan untuk mengembalikan data kustom dengan respon permintaan API diimplementasikan. Misalnya, ini digunakan untuk menambahkan informasi tentang domain yang di-skip ke respon instalasi add-on _Let’s Encrypt_.

[Info lebih lanjut](<https://docs.cloudscripting.com/>)



## Deskripsi Kesalahan Instalasi SSL{#ssl-installation-error-description}

Platform menawarkan banyak cara untuk bekerja dengan protokol keamanan [SSL](<https://docs.dewacloud.com/docs/secure-sockets-layer/>) untuk membangun koneksi terenkripsi antara lingkungan dan web. Namun, terkadang instalasi sertifikat gagal tanpa memberikan pengguna deskripsi yang jelas tentang permasalahan tersebut. Untuk membantu pelanggan kami, pesan “_SSL installed with Error!_” yang tidak deskriptif diganti dengan respon yang lebih rinci yang didasarkan pada masalah yang sebenarnya terjadi.



## Perubahan API{#api-changes}

Di bawah ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.0.2

  * Menambahkan metode baru ke dalam layanan **[environment> control](<https://docs.jelastic.com/api/private/#!/api/environment.Control>)** yang memungkinkan menambahkan dan mengelola data kustom dalam lingkungan – _**AddEnvProperty**_, _**RemoveEnvProperty**_, _**ApplyEnvProperty**_, _**GetEnvProperty**_

[Info lebih lanjut](<https://docs.jelastic.com/api/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.0.2 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.0.2  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-55647 | 3.3 | Kesalahan terjadi saat menghubungkan kontainer _Docker CE_ ke kluster _Swarm_ yang ada  
JE-64407 | 3.3 | Kesalahan izin dan struktur berkas terjadi saat menginstal aplikasi _Plesk_ dari Marketplace  
JE-64223 | 5.0 | Deploy dan undeploy hooks dari add-on _Let’s Encrypt_ tidak bekerja dengan jalur berkas  
JE-61943 | 5.0.5 | Akses dari Internet diizinkan oleh aturan firewall yang dikonfigurasi antara _Node.js_ dan node _load balancer_  
JE-61808 | 5.7.4 | Kesalahan terjadi saat mengkloning lingkungan dengan kluster _GlusterFS_ di lapisan _extra_  
JE-64270 | 5.8 | Kesalahan terjadi saat menginstal aplikasi _Jenkins DevOps Pack_ dari Marketplace  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)

