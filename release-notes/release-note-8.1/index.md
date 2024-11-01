---
slug: release-notes-81
title: Release Notes 8.1
authors: [dewacloud]
date: 2024-10-12
---
# Dewacloud Application Platform 8.1

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.1**. 

Versi saat ini terutama berfokus pada optimasi internal platform, peningkatan keamanan, dan fitur untuk penyedia layanan hosting. 

:::info Perubahan

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

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.1 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.1  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-63771 | any | Istilah “_Master/Slave_” digunakan alih-alih “_Primary/Secondary_” di jendela sukses paket _Multi-Region WordPress Cluster_  
JE-64515 | any | Tombol _Open in Browser_ di jendela sukses instalasi _Redis/PostgreSQL Multi-Regional Cluster_ tidak berfungsi  
JE-64706 | any | Kesalahan terjadi jika add-on _Let’s Encrypt_ dipasang untuk lingkungan dengan domain eksternal dan DNS diatur dengan tidak benar  
JE-64769 | any | Kesalahan terjadi saat mengkloning lingkungan dengan add-on _BitNinja_ terpasang  
WP-247 | any | Paket _WordPress_ kehilangan kemampuan untuk memilih versi PHP yang diinginkan  
JE-55416 | 3.3 | Add-on _Let’s Encrypt_ tidak berfungsi dengan nama domain lingkungan yang diubah menjadi Punycode  
JE-60130 | 3.3 | Paket _Rocket.Chat_ tidak bekerja setelah lingkungan di-restart  
JE-64407 | 3.3 | Kesalahan terjadi selama instalasi paket _Plesk_  
JE-64509 | 3.3 | Kesalahan terjadi setelah instalasi paket _DjangoCMS_  
JE-64824 | 3.3 | Kesalahan terjadi saat menginstal paket _Drupal_ dengan versi mesin _PHP 8.2_  
JE-64825 | 3.3 | Kesalahan terjadi saat menginstal paket _Moodle_ dengan versi mesin _PHP 8.2_  
JE-64938 | 3.3 | Instalasi add-on _Let’s Encrypt_ tidak mengembalikan kesalahan saat dipasang dengan nama domain yang salah  
JE-47650 | 5.0.5 | Ikon _PerconaDB_ hilang di dashboard platform  
JE-63156 | 5.0.5 | Versi _PostgreSQL_ yang tidak didukung pada template _NGINX Ruby_  
JE-63923 | 5.0.5 | Variabel lingkungan kustom yang dideklarasikan melalui file _.jelenv_ tidak tersedia pada kontainer _NGINX PHP_  
JE-64529 | 5.0.5 | Add-on _FTP_ tidak menyediakan akses ke direktori home pada tumpukan _Spring Boot_  
JE-64678 | 5.4 | Tumpukan _.NET_ memiliki password default yang lemah  
JE-63244 | 5.7.4 | Tab _Export_ tidak bekerja di _PhpMyAdmin_ untuk template _LEMP/LLSMP_  
JE-64564 | 5.7.4 | Modul _Redis_ hilang untuk tumpukan _LiteSpeed 6_ dengan mesin _PHP 8_  
JE-64574 | 5.8.1 | Tidak ada pesan kesalahan di log node _Pgpool-II_ saat kegagalan skrip _followprimary.sh_  
JE-64575 | 5.8.1 | Node _Pgpool-II_ salah mendeteksi basis data primer untuk klaster dua-node  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.1:

Dewacloud Application Platform 8.1  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-61250 | - | Manajemen firewall melalui dashboard pengguna menjadi sangat lambat setelah menambahkan aturan “_Deny Internet Access_”  
JE-64487 | - | Kesalahan terjadi selama _ZDT_ (zero downtime) deployment dari tumpukan PHP  
JE-64618 | any | Dashboard platform tidak dapat diakses menggunakan peramban _Safari_  
JE-64636 | - | Respon lambat dan kesalahan yang tidak benar dikembalikan saat mengakses lingkungan yang tidak ada di port _4848_  
JE-64654 | - | Manajemen sertifikat SSL kustom yang tidak benar pada SLB setelah penghapusan lingkungan  
JE-64782 | 7.0.3 | Penggunaan cloudlet tidak ditampilkan untuk lingkungan _Ubuntu VM_, dan topologi tidak dapat diubah  
JE-64802 | - | Penurunan kinerja setelah mengimpor lingkungan ke grup berbagi sebagai kolaborator  
JE-64915 | - | Field domain kustom tidak diperbarui setelah pemesanan ulang add-on _Let’s Encrypt_  
JE-64925 | 7.3 | Pendaftaran akun baru tidak bekerja jika password yang diberikan mengandung karakter backslash  
  
