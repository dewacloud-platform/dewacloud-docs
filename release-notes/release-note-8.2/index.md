---
slug: release-notes-8.2
title: Release Notes 8.2
authors: [dewacloud]
date: 2024-10-13
---
# Dewacloud Application Platform 8.2.2

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.2.2**.

:::tip Baru

## Solusi Berbasis Langganan{#subscription-based-solutions}

Mengimplementasikan dukungan asli untuk solusi berbasis langganan dengan harga tetap [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#subscription-based-solutions>)

:::

:::info Perubahan

## Pengisian Ulang dengan Kartu 3DS{#refilling-with-3ds-cards}

Memberikan pemberitahuan bahwa langkah tambahan diperlukan untuk menyelesaikan faktur jika metode pembayaran yang dipilih menggunakan 3DS [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#refilling-with-3ds-cards>)

## Perubahan API{#api-changes}

Mencantumkan semua perubahan pada API platform publik dalam rilis saat ini [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#api-changes>)

## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Daftar terkini dari template OS yang didukung dan versi tumpukan perangkat lunak [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#software-stack-versions>)

:::

:::warning Perbaikan

## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Perbaikan bug yang diimplementasikan dalam rilis saat ini dan diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#fixes-compatible-with-prior-versions>)

## Perbaikan Bug{#bug-fixes}

Daftar perbaikan yang diterapkan pada platform dimulai dari rilis saat ini [Pelajari lebih lanjut](<https://docs.dewacloud.com/docs/#bug-fixes>)

:::

{/* truncate */}

## Solusi Berbasis Langganan{#subscription-based-solutions}

Versi 8.2.2 dari platform ini mengimplementasikan kemampuan asli untuk menawarkan produk berdasarkan model berlangganan. Alurnya adalah standar untuk implementasi layanan berlangganan modern – biaya satu kali untuk mendapatkan produk yang ditentukan untuk periode waktu tertentu. Solusinya memberi Anda alternatif harga tetap untuk [model berbasis penggunaan](<https://docs.dewacloud.com/docs/pricing-model/>) default.

:::note Ketersediaan fitur ini tergantung pada pengaturan penyedia hosting tertentu. :::

Semua langganan yang tersedia tersedia di Marketplace di bawah bagian baru _**Subscription Plans**_. Setelah memilih, Anda akan melihat beberapa paket untuk dipilih (misalnya menawarkan jumlah sumber daya yang berbeda, fitur tambahan, dll.). Klik tombol **Beli** untuk opsi yang diinginkan untuk melihat dialog pembelian. Anda dapat membayar bulanan atau tahunan, mengaktifkan pembayaran otomatis dengan metode pembayaran default Anda, dan mengatur jumlah instance produk yang diperlukan dalam langganan Anda.

![get subscription plan](#)

Semua **Langganan** ditambahkan ke bagian yang didedikasikan dalam pengaturan akun. Di sini, Anda dapat melihat semua informasi yang relevan tentang langganan (termasuk faktur), menginstal/menghapus instance, dan menghentikan langganan.

![dashboard subscriptions section](#)

Karena konsep langganan, beberapa tindakan dibatasi untuk instance yang diinstal (misalnya penyesuaian topologi atau kloning lingkungan). Baca lebih lanjut tentang langganan dalam dokumen khusus **[Produk Berbasis Langganan](<https://docs.dewacloud.com/docs/subscription-products/>)**.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/subscription-products/>)



## Pengisian Ulang dengan Kartu 3DS{#refilling-with-3ds-cards}

Protokol **3D Secure (3DS)** menambahkan lapisan ekstra autentikasi pembayaran untuk perlindungan tambahan terhadap penipuan selama transaksi online. Jika digunakan, pemilik kartu diminta untuk memberikan bukti identitas dengan memasukkan kata sandi unik, kode SMS, atau PIN sementara. 3DS dapat wajib di beberapa wilayah (misalnya Eropa karena regulasi _Strong Customer Authentication_) dan optional di wilayah lain (tetapi tetap dapat digunakan untuk mengurangi penipuan).

Ketika mengisi saldo akun menggunakan metode pembayaran yang disimpan dengan 3DS, platform akan memberikan pemberitahuan eksplisit bahwa faktur telah dibuat, tetapi transaksi harus diselesaikan melalui autentikasi eksternal tambahan.



## Perubahan API{#api-changes}

Di bawah ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.2.2 (dibandingkan dengan yang sebelumnya [8.0.2](<https://docs.dewacloud.com/docs/release-notes-802/#api-changes>)):

  * Menambahkan layanan **[Billing> Subscriptions](<https://docs.jelastic.com/api/#!/api/billing.Subscription>)** baru dengan metode API untuk mendukung fitur [subscriptions](<https://docs.dewacloud.com/docs/#subscription-based-solutions>).

[Info lebih lanjut](<https://docs.dewacloud.com/docs/application-platform-api-docs/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.2.2 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.2.2  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-64745 | any | Kesalahan terjadi saat menginstal paket aplikasi _Spring Boot Fat Jar Builder_ dari Marketplace platform  
JE-64955 | any | Kesalahan terjadi saat menginstal beberapa plugin _WordPress_ di server _LiteSpeed_ dan _LLSMP_  
JE-65165 | any | Kesalahan “_ERR_TOO_MANY_REDIRECTS_” terjadi saat mengakses panel admin untuk _WordPress Cluster_ berdasarkan server _NGINX_  
JE-64833 | 3.3 | Kesalahan terjadi saat menginstal paket aplikasi _osTicket_ yang berbasis _PHP 8.2_ dari Marketplace platform  
JE-52335 | 3.3 | Kesalahan terjadi saat meng-deploy tumpukan pada _Docker Swarm_ dari file YAML yang tidak berada di direktori root  
JE-58868 | 3.3 | Semua kesalahan “_incorrect domain_” untuk add-on _Let’s Encrypt_ harus memiliki kode kesalahan  
JE-60560 | 3.3 | Deskripsi yang hilang untuk kesalahan _Let’s Encrypt_ terkait dengan masalah jaringan  
JE-64794 | 3.3 | Kesalahan terjadi saat menginstal _Eclipse Che_ dari versi gambar ‘_release candidate_’  
JE-65224 | 3.3 | Kesalahan terjadi saat mengakses aplikasi _Jitsi_ setelah instalasi dari Marketplace platform  
JE-65452 | 3.3 | Kesalahan terjadi saat menginstal versi aplikasi _Eclipse Che 7.0.0-RC-1.1_ dari Marketplace platform  
JE-65545 | 3.3 | Kesalahan terjadi saat mengakses aplikasi _IOTA_ setelah instalasi dari Marketplace platform  
JE-49507 | 5.0.5 | Layanan _httpd_ gagal pada node _Apache_ jika file _pid_ hilang selama kontainer memulai/berhenti/direstart  
JE-59151 | 5.0.5 | Cloned _LiteSpeed ADC_ balancer memiliki backends dari lingkungan asli yang terdaftar dalam konfigurasi  
JE-60325 | 5.0.5 | Nilai _workerProcesses_ tidak diperbarui dalam file _lslbd_config.xml_ jika diubah melalui add-on  
JE-64529 | 5.0.5 | Akses ke folder home _/home/jelastic_ tidak diberikan setelah instalasi add-on _FTP_ pada server _Spring Boot_  
JE-65397 | 5.4 | Node load balancer _Varnish_ tidak dimulai setelah redeployment  
JE-60553 | 5.7 | Kesalahan terjadi saat menginstal _Multi-Regional WordPress Cluster_  
JE-61492 | 5.7.2 | Sertifikat _self-signed SSL_ tidak dihasilkan setelah pembuatan balancer _LiteSpeed ADC_  
JE-59090 | 5.7.4 | File _lsrestart.log_ memiliki pemilik yang salah pada server _LiteSpeed_ dan _LLSMP_  
JE-59478 | 5.7.4 | Nilai yang salah dalam file _/etc/jelastic/metainf.conf_ pada server _LLSMP_  
JE-59515 | 5.7.4 | Opsi _skip-networking_ hilang saat mereset password _MariaDB_ pada server _LEMP/LLSMP_  
JE-60211 | 5.7.4 | Upaya registrasi kunci lisensi harus dihitung dalam log server _LiteSpeed WS_ dan _ADC_  
JE-60629 | 5.7.4 | Kesalahan terjadi saat me-reload server _LLSMP_ dengan perintah ‘_jem service reload_’  
JE-65020 | 5.8 | Kesalahan terjadi saat mengembalikan dari cadangan _WordPress_ setelah node penyimpanan cadangan diubah  
JE-65589 | 5.8 | Kesalahan terjadi saat mengakses aplikasi _Jenkins_ setelah redeployment dari versi berbasis _Java 11_ ke _Java 17_  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.2.2:

Dewacloud Application Platform 8.2.2  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-65170 | 8.2 | Kesalahan terjadi saat memasang file dari beberapa kontainer Docker kustom  
JE-65227 | - | Kesalahan dicatat selama proyek auto-deploy pada kontainer dengan fungsionalitas _sendmail_ diaktifkan  
JE-65272 | - | Kesalahan terjadi saat mengeksekusi beberapa perintah yang melibatkan operasi pengunduhan file  
JE-65325 | - | Kontainer Docker kustom tidak dapat dibuat dari gambar yang menggunakan skema manifest _OCI_  
JE-65414 | - | Sebuah scroll slider muncul di panel pengaturan konfigurasi lingkungan meskipun ada cukup ruang untuk menampung konten  
JE-65499 | - | Pemilik file yang dibagikan diubah menjadi _root_ saat mereset password untuk add-on _FTP_ pada node _Shared Storage_  
JE-65625 | 7.2 | Placeholder _URL_DOCS_OOM_KILLER_TROUBLESHOOTING_ tidak diganti dengan tautan dalam email  
  
