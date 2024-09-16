---
sidebar_position: 2
slug: /wordpress-paas-2.1
title: WordPress PaaS 2.1
---

# Virtuozzo Application Platform untuk WordPress 2.1

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan yang terlihat yang termasuk dalam rilis Virtuozzo Application Platform for WordPress 2.1.

Ruang lingkup perubahan umum sama seperti untuk rilis _[Virtuozzo Application Platform (DevOps PaaS) 8.3](https://docs.dewacloud.com/docs/release-notes-83/)_. Semua peningkatan yang spesifik untuk WordPress PaaS saja disorot dalam daftar di bawah ini.

## Peningkatan Langganan{#subscription-improvements}

Diimplementasikan fitur baru untuk langganan, termasuk pembaruan langganan, migrasi, dan menonaktifkan/mengaktifkan opsi _Auto Pay_ [Pelajari lebih lanjut](https://docs.dewacloud.com/#subscription-improvements)

## Dukungan Endpoints{#endpoints-support}

Diimplementasikan fitur _Endpoints_ baru yang memungkinkan pembentukan koneksi langsung ke node tanpa alamat IP publik yang wajib [Pelajari lebih lanjut](https://docs.dewacloud.com/#endpoints-support)

## Informasi Akun{#account-information}

Ditambahkan bagian _User Information_ baru dalam pengaturan akun untuk menentukan informasi akun [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#account-information)

## Lokalisasi Dashboard{#dashboard-localization}

Ditambahkan kemampuan untuk mengubah bahasa dashboard (ketersediaan tergantung pada pengaturan penyedia hosting) [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#dashboard-localization)

## Peningkatan UI{#ui-improvements}

Ditambahkan tautan langsung ke panel admin komponen proyek (WordPress, LiteSpeed, dll.) di dashboard [Pelajari lebih lanjut](https://docs.dewacloud.com/#ui-improvements)

## Peningkatan Langganan{#subscription-improvements}

Beberapa peningkatan untuk manajemen langganan diimplementasikan dalam rilis 2.1 saat ini untuk memastikan pengalaman terbaik bagi pelanggan. Salah satu fitur yang paling banyak diminta - kemungkinan untuk memperbarui jumlah situs web untuk langganan yang ada - sepenuhnya diimplementasikan. Opsi untuk **Edit Subscription** tersedia dari menu Y _our Account > Subscriptions_. Ini memungkinkan peningkatan/penurunan _Quantity_ berdasarkan persyaratan baru (harga per instalasi dihitung sesuai dengan periode penagihan yang tersisa):

- _Saat peningkatan_ (meningkatkan jumlah instalasi), platform secara otomatis menghasilkan faktur "update quantity" tambahan.
- _Dalam hal penurunan_ (tidak kurang dari jumlah instance yang ada), platform secara otomatis menghasilkan faktur pengembalian dana dan mengisi kembali saldo akun.

![managing account subscriptions](#)

Juga, kemampuan untuk **Enable/Disable Auto Pay** diimplementasikan, memungkinkan untuk beralih antara pembayaran otomatis (dengan metode pembayaran default) dan pembayaran manual untuk langganan.

Fitur baru utama lainnya adalah kemampuan untuk beralih paket langganan dalam produk yang sama. Ketersediaan solusi ini tergantung pada konfigurasi penyedia hosting. Jika tersedia, Anda akan melihat opsi **Change Plan** yang sesuai dalam bagian **Settings > Subscription Plan** proyek spesifik.

![changing project subscription plan](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/wp-dashboard-overview/)

[Kembali ke atas](https://docs.dewacloud.com/#back)

## Dukungan Endpoints{#endpoints-support}

Fitur **Endpoints** menyediakan kemampuan untuk membangun koneksi langsung (melalui protokol TCP atau UDP mentah) ke node yang sesuai tanpa alamat _Public IP_ yang wajib. Ini dapat digunakan untuk mengatur akses jarak jauh ke proyek di platform melalui klien lokal. Misalnya, salah satu penggunaan endpoint yang paling umum adalah mendapatkan akses jarak jauh ke instance database Anda.

Anda dapat menemukan fitur baru ini dengan memilih proyek tertentu dan menavigasi ke bagian **Settings > Endpoints**. Di sini, Anda dapat melihat dan mengelola daftar endpoint yang ada (jika ada) dan **Add** yang baru.

![project endpoints](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/wp-dashboard-project-management/)

[Kembali ke atas](https://docs.dewacloud.com/#back)

## Informasi Akun{#account-information}

Dalam rilis platform 2.1 saat ini, bagian **User Information** baru ditambahkan ke konfigurasi _Your Account_. Ini memungkinkan untuk mempersonalisasi akun dengan memberikan detail akun dalam formulir khusus. Di sini Anda dapat menentukan informasi berikut:

- **First Name** pemilik akun
- **Last Name** pemilik akun
- **Email** pemilik akun (tidak dapat diedit)
- Nama **Company** untuk akun
- **Preferred Time zone** untuk menjalankan bisnis
- **Maintenance time** untuk melakukan aktivitas dukungan

![user information](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/wp-dashboard-overview/#account-settings)

[Kembali ke atas](https://docs.dewacloud.com/#back)

## Peningkatan UI{#ui-improvements}

Dashboard Virtuozzo Application Platform for WordPress dirancang untuk memberikan pengalaman pengguna terbaik bagi pelanggan. Dalam peningkatan platform 2.1 saat ini, tautan langsung ke panel admin WordPress proyek ditambahkan langsung ke dashboard, memungkinkan akses cepat ke panel.

![WodPress admin panel link](#)

Selain itu, jika proyek memiliki panel admin lain (mis., untuk server _LiteSpeed_), tautan yang sesuai akan ditampilkan di samping informasi database. Perubahan ini memastikan manajemen proyek yang lebih cepat dengan menyederhanakan proses dan menghilangkan kebutuhan untuk mencari email dengan kredensial akses setiap kali Anda ingin mengakses salah satu panel administrasi.

[Kembali ke atas](https://docs.dewacloud.com/#back)

## Lokalisasi Dashboard{#dashboard-localization}

Virtuozzo Application Platform for WordPress mengimplementasikan dukungan untuk lokalisasi dashboard kustom (sebagai tambahan dari yang _English_ default). Namun, daftar bahasa yang tepat untuk setiap platform tertentu bergantung pada pengaturan penyedia hosting yang sesuai. Daftar pilihan **Language** baru akan ditampilkan dalam menu pengaturan akun jika beberapa opsi tersedia.

![changing dashboard language](#)

[Kembali ke atas](https://docs.dewacloud.com/#back)