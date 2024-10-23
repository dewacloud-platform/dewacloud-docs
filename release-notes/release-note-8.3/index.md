---
slug: release-notes-8.3
title: Release Notes 8.3
authors: [dewacloud]
date: 2024-10-17
---
# Dewacloud Application Platform 8.3

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.3**.

:::tip Baru

## Gambar OS Dasar AlmaLinux 9{#almalinux-9-base-os-image}

Memulai proses transisi bertahap tumpukan perangkat lunak yang bersertifikat ke gambar berbasis _AlmaLinux 9_ [Pelajari lebih lanjut](<#almalinux-9-base-os-image>)

## Peningkatan Langganan{#subscription-improvements}

Mengimplementasikan fitur baru untuk solusi langganan, termasuk pembaruan langganan, migrasi, dan menonaktifkan/mengaktifkan opsi _Auto Pay_ [Pelajari lebih lanjut](<#subscription-improvements>)

:::

:::info Perubahan

## Pemrakarsa Aksi untuk Email{#action-initiator-for-emails}

Memperluas notifikasi email kolaborasi dengan data “_pemrakarsa aksi_” untuk membantu pelacakan aktivitas akun [Pelajari lebih lanjut](<#action-initiator-for-emails>)

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

## Gambar OS Dasar AlmaLinux 9{#almalinux-9-base-os-image}

Dimulai dengan rilis 8.3 saat ini, Dewacloud Application Platform memulai transisi ke [tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang berbasis pada gambar _AlmaLinux 9_ yang baru (dari yang sebelumnya _CentOS 7_). Perubahan semacam itu memastikan dukungan untuk semua fungsionalitas terbaru, standar keamanan modern, dan kompatibilitas dengan semua solusi perangkat lunak terbaru.

Proses transisi akan berlangsung secara bertahap dan tidak mengganggu. Ini mengikuti poin-poin berikut:

  * __Gambar AlmaLinux 9 didukung mulai dari versi platform 8.3__ dan tidak akan tersedia pada versi sebelumnya.
  * Semua versi tumpukan yang baru dirilis akan berbasis di AlmaLinux 9, sehingga seluruh kumpulan gambar akan digantikan dengan OS baru seiring waktu.
  * Pembaruan untuk gambar berbasis CentOS 7 akan tetap disediakan dalam kasus patch kritis dan masalah keamanan.
  * Di dashboard, tag berdasarkan AlmaLinux 9 akan dinyatakan dengan jelas.
  * [Redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>) dari CentOS 7 ke versi AlmaLinux 9 dari tumpukan dapat dilakukan tanpa hambatan. __Namun, menurunkan kembali ke CentOS 7 tidak didukung.__
  * Daftar terkini dari [tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang berbasis pada gambar AlmaLinux 9 dapat diperiksa dalam dokumen yang ditautkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.3/01-almalinux-image-tags.png" alt="AlmaLinux image tags" width="100%"/>

Bersamaan dengan implementasi gambar AlmaLinux 9, beberapa fungsionalitas baru diperkenalkan, termasuk pembaruan pembuatan kunci (_dukungan tanda tangan rsa-sha2-256 dan rsa-sha2-512_), klien Guacamole ([Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)) yang diperbarui, dan netfilter _nftables_ (menggantikan _iptables_). Solusi _nftables_ adalah pilihan baru yang direkomendasikan untuk manajemen aturan firewall. Ini menawarkan sintaks yang terintegrasi dan konsisten (bertentangan dengan utilitas _xtables_), kinerja tinggi melalui peta dan konkatinasi, dan peningkatan keamanan karena aturan tersebut diterjemahkan menjadi bytecode. Pada saat yang sama, semua antarmuka pengguna dashboard dan panggilan API tetap sama seperti sebelumnya sehingga proses pengelolaan tidak berubah.

Perubahan terkait tumpukan lainnya termasuk pembaruan daftar [distribusi OS yang didukung](<https://docs.dewacloud.com/docs/container-image-requirements/>), termasuk penambahan **CentOS Stream 9** dan penghentian **Debian 9**.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Peningkatan Langganan{#subscription-improvements}

Solusi **[Produk Berbasis Langganan](<https://docs.dewacloud.com/docs/subscription-products/>)** yang baru diimplementasikan lebih lanjut ditingkatkan dalam rilis saat ini untuk memastikan pengalaman terbaik bagi pelanggan. Semua perubahan baru terintegrasi dengan lancar ke dalam bagian _Langganan_ di dashboard yang didedikasikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.3/02-subscriptions-new-features.png" alt="subscriptions new features" width="100%"/>

Salah satu fitur yang paling banyak diminta adalah kemungkinan untuk memperbarui jumlah instalasi untuk langganan yang ada. Dimulai dengan pembaruan platform 8.3, fungsionalitas yang sesuai sepenuhnya diterapkan. Jendela pembaruan tersedia dengan menggunakan opsi **Edit Subscription** yang baru. Di sini, pengguna dapat meningkatkan dan mengurangi _Quantity_ berdasarkan kebutuhan mereka:

  * Setelah pembaruan, faktur tambahan akan secara otomatis dihasilkan oleh platform.
  * Dalam kasus penurunan (tidak kurang dari jumlah instance yang ada), saldo akun akan diisi ulang sesuai dengan harga langganan dan periode penagihan yang tersisa.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.3/03-edit-subscription.png" alt="edit subscription" width="60%"/>

Fitur baru lainnya adalah kemampuan untuk mengganti rencana langganan dalam produk yang sama. Ketersediaan solusi ini bergantung pada penyedia hosting. Jika tersedia, Anda akan melihat opsi **Switch Subscription** yang sesuai untuk instalasi yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.3/04-switch-subscription.png" alt="switch subscription" width="60%"/>

Terakhir, kemampuan untuk mengaktifkan/menonaktifkan opsi **Auto Pay** diimplementasikan, memungkinkan beralih antara pembayaran otomatis (dengan metode pembayaran default) dan manual untuk langganan.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.3/05-disabling-auto-pay.png" alt="disabling auto pay" width="60%"/>

[Info lebih lanjut](<https://docs.dewacloud.com/docs/subscription-products/>)



## Pemrakarsa Aksi untuk Email{#action-initiator-for-emails}

Dewacloud Application Platform menyediakan fungsionalitas [kolaborasi](<https://docs.dewacloud.com/docs/account-collaboration/>) yang kuat yang memungkinkan beberapa pengguna bekerja pada akun yang sama. Namun, dengan jumlah peserta yang banyak dan pengembangan yang aktif, mungkin sulit untuk melacak semua tindakan yang dilakukan oleh individu dan menciptakan kebingungan apakah akun tersebut dikompromikan. Untuk membantu upaya pelacakan, notifikasi email diperluas dengan data “pemrakarsa aksi”. Bergantung pada operasi, itu bisa berupa alamat email anggota kolaborasi atau referensi ke pemicu internal (misalnya, [peningkatan horizontal otomatis](<https://docs.dewacloud.com/docs/account-collaboration/>)).



## Perubahan API{#api-changes}

Di bawah ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.3 (dibandingkan dengan yang sebelumnya [8.2.2](<https://docs.dewacloud.com/docs/release-notes-82/#api-changes>)):

  * Menambahkan metode API baru _**SetAutopay**_, _**MoveProduct**_, _**UpdateSubscription**_, _**UpcomingInvoice**_, dan _**DiscardUpdateSubscription**_ karena perubahan [langganan](<#subscription-improvements>).
  * Menambahkan parameter baru _**invalidateSessions**_ untuk semua metode reset password, yang memungkinkan mengakhiri semua sesi pengguna aktif (kecuali yang saat ini).

Tinjauan lengkap dokumentasi API telah dimulai untuk memberikan deskripsi komprehensif tentang semua metode dan parameter mereka. Saat ini, sebagian besar layanan _billing_ dan _environment_ telah diperbarui. Anda dapat mengharapkan cakupan penuh selama beberapa rilis mendatang.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/application-platform-api-docs/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.3 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.3  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-65381 | Any | Nilai variabel _$\{globals.password\}_ hilang pada _Redis Cluster_ setelah kloning  
JE-66060 | Any | Pengguna _PostgreSQL_ yang dibuat melalui _phpPgAdmin_ tidak dapat mengakses panel admin  
JE-66252 | Any | Login ke _WebAdmin Console_ gagal untuk tumpukan _LiteSpeed/LLSMP_ setelah redeployment ke versi utama yang lebih rendah  
JE-66503 | Any | Instalasi paket _Multi-Regional Redis Cluster_ gagal jika panjang maksimal yang diizinkan digunakan untuk nama domain yang disediakan  
JE-64453 | 3.3 | Kesalahan terjadi saat menginstal versi “_test_” dari paket _Plesk_ dari Marketplace platform  
JE-66406 | 3.3 | Aplikasi _Django_ tidak berfungsi setelah instalasi dari Marketplace platform  
JE-66259 | 5.0.5 | Kesalahan terjadi saat menginstal paket _Eclipse Vert.x Thin Jar Builder_ dari Marketplace platform  
JE-66279 | 5.0.5 | Kesalahan terjadi saat menginstal paket _Nexus_ dari Marketplace platform  
JE-66513 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _Open Liberty_ dalam klaster Kubernetes  
JE-66541 | 5.0.5 | Pengaturan _withExtIp_ kustom tidak diterapkan saat menginstal add-on _Let’s Encrypt_  
JE-66590 | 5.0.5 | Kesalahan terjadi saat menginstal paket _Spring Boot Thin Jar Builder_ dari Marketplace platform  
JE-66799 | 5.0.5 | Kesalahan terjadi saat menginstal paket _Oddo-Ce_ dari Marketplace platform  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.3:

Dewacloud Application Platform 8.3  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-21315 | 3.2 | Nama lingkungan yang salah dalam pop-up migrasi yang berhasil jika nama berisi karakter khusus  
JE-33337 | 5.0.6 | Pesan peringatan batas unggahan tidak ada jika ukuran file yang diunggah terlalu besar  
JE-47088 | - | Kesalahan terjadi saat masuk ke dashboard dengan token _Extended_  
JE-47315 | - | Metode input “_text input_” tidak berfungsi di klien _Web SSH_  
JE-49993 | 5.7.7 | Tidak dapat menyambung kembali ke klien _Web SSH_ setelah kontainer di-restart  
JE-51930 | - | Kesalahan _akses ditolak_ terjadi saat memanggil metode API penagihan menggunakan token  
JE-52137 | 5.7 | Terputus dari _Web SSH_ jika beralih ke tab yang berbeda selama koneksi  
JE-53323 | - | Tindakan binding domain SSL/eksternal tidak ada di manajer _Tasks_ saat bekerja dengan add-on _Let’s Encrypt_  
JE-54683 | - | Deskripsi yang salah untuk metode _EditNodeGroup_ dalam dokumentasi API  
JE-57190 | - | Teks dari _Web SSH_ yang tidak sesuai dengan lebar layar disalin dengan break baris yang tidak perlu  
JE-59606 | - | Kesalahan terjadi saat membuka wizard topologi  
JE-59773 | - | _Tipe MIME_ dari arsip yang diunggah diidentifikasi dengan salah jika namanya mengandung spasi  
JE-63283 | - | Tooltip ikon wilayah diformat dengan salah dalam menu pencarian  
JE-63869 | - | Kesalahan terjadi saat men-deploy proyek GitHub dengan simbol “_/_” dalam nama cabang  
JE-64138 | - | Kesalahan terjadi saat mengunggah file dengan opsi timpa melalui file manager  
JE-65380 | 8.2 | Kesalahan terjadi saat membuka menu _Additionally_ untuk node dengan panel admin  
JE-65402 | any | Perilaku aturan firewall yang tidak konsisten pada node _Memcached_ saat bekerja dengan kontainer dengan IP publik  
JE-65462 | 8.1 | Hasil pencarian tidak ditampilkan setelah penggunaan dashboard yang lama pada akun dengan banyak lingkungan  
JE-65786 | - | Gulungan vertikal harus muncul untuk daftar _kunci publik_ jika tidak sesuai dengan jendela  
JE-65847 | 8.1 | Kesalahan terjadi saat memperbarui proyek dengan opsi “_Auto resolve conflict_” setelah amend commit ke repo  
JE-65875 | - | Jendela instalasi add-on tidak terpusat  
JE-65917 | - | Ejaan yang salah dalam pesan kesalahan  
JE-65962 | - | Penyimpanan NFS tidak stabil dengan kluster _Kubernetes_  
JE-65988 | - | Nama acara yang salah dalam deskripsi metode API _SendEvent_  
JE-66072 | - | Kesalahan terjadi saat bekerja dengan _Object Browser_ pada kluster _Minio_  
JE-66100 | - | Permintaan API mengembalikan respons kosong alih-alih kesalahan jika parameter _platformUrl_ memiliki titik di akhir  
JE-66137 | - | Header host yang salah diatur selama pertukaran domain eksternal  
JE-66300 | - | IP utama diubah saat menambahkan alamat IP eksternal kedua  
JE-66413 | - | Kesalahan “_Got signal 13_” terjadi saat menambahkan node baru ke lingkungan  
JE-66421 | - | Kesalahan terjadi saat mendapatkan status kontainer Docker kustom selama pembuatan lingkungan  
JE-66458 | - | Kesalahan instalasi paket terjadi saat me-redeploy kontainer yang berbasis pada OS _Debian 11_  
JE-66758 | - | Metode API _bindSslCert_ mengembalikan “_result: 0_” alih-alih kesalahan saat parameter _extDomains_ salah ditentukan  
  