---
slug: release-notes-84
title: Release Notes 8.4
authors: [dewacloud]
date: 2024-10-19
---
# Dewacloud Application Platform 8.4

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan visual yang termasuk dalam rilis **Dewacloud PaaS 8.4**.

:::tip Baru

## Dukungan Ubuntu 23{#ubuntu-23-support}

Mengimplementasikan template OS dasar untuk mendukung gambar berdasarkan versi _Ubuntu 23.04_ [Pelajari lebih lanjut](<#ubuntu-23-support>)

## Dukungan Debian 12{#debian-12-support}

Mengimplementasikan template OS dasar untuk mendukung gambar berdasarkan versi _Debian 12_ [Pelajari lebih lanjut](<#debian-12-support>)

## Mengecualikan Node dari DNS selama Tindakan Berurutan{#excluding-nodes-from-dns-during-sequential-actions}

Menambahkan opsi untuk mengecualikan node dari DNS saat mengelola lapisan dengan node yang diskalakan [Pelajari lebih lanjut](<#excluding-nodes-from-dns-during-sequential-actions>)

:::

:::info Perubahan

## Pembatasan ICMP Firewall{#firewall-icmp-restriction}

Mengonfigurasi aturan firewall untuk memblokir permintaan _ICMP Timestamp_ yang dapat berbahaya [Pelajari lebih lanjut](<#firewall-icmp-restriction>)

## Skrip Terkait Lingkungan{#environment-associated-scripts}

Mengimplementasikan fungsionalitas untuk membuat asosiasi yang persisten antara lingkungan dan add-on yang diterapkan [Pelajari lebih lanjut](<#environment-associated-scripts>)

## Peningkatan Akun yang Dinonaktifkan{#deactivated-account-improvements}

Memberikan kemampuan bagi pengguna yang dinonaktifkan untuk menghapus lingkungan mereka [Pelajari lebih lanjut](<#deactivated-account-improvements>)

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

## Dukungan Ubuntu 23{#ubuntu-23-support}

Platform ini memperkenalkan dukungan untuk versi terbaru dari salah satu distribusi Linux yang paling populer - **Ubuntu 23.04** (Lunar Lobster). Rilis ini memperkenalkan banyak pembaruan perangkat lunak, peningkatan keamanan, dan perbaikan bug bagi mereka yang membutuhkan patch paling mutakhir. Namun, jika Anda lebih menyukai Dukungan Jangka Panjang, disarankan untuk tetap menggunakan _Ubuntu 22.04 LTS_.

Dukungan distribusi _Ubuntu 23.04_ otomatis tersedia melalui templat [sistem operasi dasar](<https://docs.dewacloud.com/docs/container-image-requirements/#supported-os-distributions>) yang sesuai (untuk kontainer Docker kustom).

Selain itu, templat _Ubuntu 22.10_ dihentikan karena berakhirnya masa dukungan resmi versi tersebut.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/container-image-requirements/>)



## Dukungan Debian 12{#debian-12-support}

Platform ini mengimplementasikan dukungan untuk templat OS **Debian 12** “bookworm” pada semua instalasi PaaS (tersedia untuk semua platform dimulai dengan rilis 8.4). Ini adalah versi LTS terbaru (Dukungan Jangka Panjang) dengan periode dukungan yang diperkirakan setidaknya lima tahun. Rilis baru ini berfokus pada kinerja, stabilitas, dan kemudahan penggunaan. Ini memberikan pembaruan besar dari paket default, membuat arsip paket terpisah untuk firmware non-gratis, memperluas dukungan arsitektur dan kernel, dan memperkenalkan banyak perbaikan, pengoptimalan, dan perbaikan keamanan lainnya. Untuk informasi lebih rinci, lihat catatan resmi [rilis Debian 12](<https://www.debian.org/releases/bookworm/releasenotes>).

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.4/01-debian-12-vps.png" alt="Debian 12 VPS" width="100%"/>

Selain itu, **Debian 12** ditambahkan sebagai tumpukan [Elastic VPS](<https://docs.dewacloud.com/docs/vps-debian/>) bawaan di dashboard platform.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/container-image-requirements/>)



## Pembatasan ICMP Firewall{#firewall-icmp-restriction}

Protokol Pesan Kontrol Internet (ICMP) digunakan untuk melaporkan kesalahan dan melakukan diagnostik jaringan. Namun, beberapa jenis permintaan ICMP dapat dianggap sebagai kerentanan keamanan minor yang memungkinkan penyerang mendapatkan informasi tentang host jarak jauh.

Dalam rilis 8.4, Dewacloud Application Platform menambahkan aturan pada konfigurasi firewall default untuk memblokir pesan permintaan **ICMP Timestamp**. Penyesuaian semacam itu menyelesaikan kerentanan yang dapat dieksploitasi untuk memeriksa jaringan untuk menemukan host aktif, mengumpulkan informasi waktu/tanggal pada host target, atau menghasilkan lalu lintas bersama untuk menipu sistem deteksi intrusi.



## Mengecualikan Node dari DNS selama Tindakan Berurutan{#excluding-nodes-from-dns-during-sequential-actions}

Dewacloud Application Platform menyediakan fungsionalitas [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) yang mudah digunakan untuk kontainer, yaitu menawarkan opsi ketersediaan tinggi yang cepat untuk pengguna. Dikombinasikan dengan opsi konfigurasi _sequential_ yang memungkinkan melakukan tindakan pada node secara berurutan (sehingga setidaknya satu node tetap dapat dioperasikan), bahkan operasi yang mengganggu seperti restart dan redeploy dapat dilakukan tanpa mengganggu pengalaman pengguna akhir.

Namun, bahkan dengan opsi _sequential_ yang diaktifkan, beberapa koneksi dapat hilang dalam kasus lalu lintas yang tinggi. Untuk memastikan ketersediaan aplikasi untuk semua permintaan masuk, sub-opsi tambahan untuk “_Temporarily remove node(s) from DNS_” diimplementasikan. Jika diaktifkan, node akan dikecualikan dari tabel DNS (internal dan eksternal) selama operasi mengganggu.

<img src="https://assets.dewacloud.com/dewacloud-docs/release-notes/release-notes-8.4/02-remove-from-dns.png" alt="remove from DNS" width="60%"/>

Opsi baru ini tersedia selama operasi berikut:

  * _restart node pada lapisan multi-node_
  * _redeploy node pada lapisan multi-node_



## Skrip Terkait Lingkungan{#environment-associated-scripts}

Dalam rilis 8.4 saat ini, fungsionalitas untuk membuat asosiasi yang lebih kuat antara lingkungan dan add-on yang diterapkan diimplementasikan. Implementasi ini menciptakan persistensi yang diperlukan untuk mendukung kasus seperti:

  * semua anggota kolaborasi dapat melihat dan mengelola add-on dari [lingkungan yang dibagikan](<https://docs.dewacloud.com/docs/share-environment/>)
  * manajemen add-ons tersedia untuk pemilik baru setelah [transfer environment](<https://docs.dewacloud.com/docs/environment-transferring/>)

Add-on berikut sudah diperbarui untuk mendapatkan manfaat dari fungsionalitas asosiasi ini: add-ons _Git-Push-Deploy_, _Start/Stop Scheduler_, dan _Let’s Encrypt_. Namun, harap dicatat bahwa perubahan ini hanya mempengaruhi instalasi baru.



## Peningkatan Akun yang Dinonaktifkan{#deactivated-account-improvements}

Platform secara otomatis menonaktifkan akun setelah periode percobaan berakhir atau jika kehabisan dana. Dalam status _**deactivated**_ [status](<https://docs.dewacloud.com/docs/account-statuses/>), semua lingkungan dihentikan secara paksa sampai saldo diisi kembali menjadi positif.

Dimulai dengan rilis PaaS 8.4 saat ini, kemampuan untuk menghapus lingkungan secara manual pada _deactivated account_ ditambahkan. Ini memungkinkan pembersihan akun sebelum diaktifkan kembali dan menghapus lingkungan segera (tidak perlu menunggu penghapusan otomatis saat penghancuran akun).

Selain itu, proses aktivasi akun juga ditingkatkan. Sekarang, proses ini dipicu segera setelah saldo diisi kembali (menjadi nilai positif) dan secara otomatis memulai semua lingkungan yang dihentikan.



## Perubahan API{#api-changes}

Di bawah ini, Anda dapat menemukan daftar semua perubahan pada API publik di versi platform 8.4 (dibandingkan dengan yang sebelumnya [8.3](<https://docs.dewacloud.com/release-notes/release-notes-83/#api-changes>)):

  * Respons diperluas dari metode _**GetSSLCerts**_ untuk memberikan informasi tentang tipe SSL. Parameter baru _**sslType**_ memiliki dua nilai: 
    * _CUSTOM_ – untuk setiap sertifikat yang ditambahkan melalui dashboard atau panggilan API _AddSslCert_
    * _LETSENCRYPT_ – untuk sertifikat yang diterbitkan untuk reseller atau wilayah

Tinjauan dokumentasi API publik telah diselesaikan. Semua layanan, metode, dan parameter disertakan dengan deskripsi yang komprehensif untuk membantu pengguna baru dan yang sudah ada memulai penggunaan API platform.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/application-platform-api-docs/>)



## Perbaikan yang Kompatibel dengan Versi Sebelumnya{#fixes-compatible-with-prior-versions}

Di bawah ini, Anda dapat menemukan perbaikan yang diimplementasikan dalam rilis Dewacloud Application Platform 8.4 dan juga diintegrasikan ke dalam versi platform sebelumnya melalui patch yang sesuai.

Dewacloud Application Platform 8.4  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-53135 | any | Migrasi untuk klaster database yang dihentikan harus dibatasi karena dapat mengakibatkan database yang rusak  
JE-59138 | any | Kesalahan terjadi saat menjalankan perintah “_nginx -t_” pada penyeimbang beban NGINX karena izin yang tidak mencukupi  
JE-62589 | any | Semua node lingkungan di-restart saat me-redeploy kontainer dengan add-on _Time Zone Change_  
JE-63695 | any | Validasi ketersediaan dukungan LiteSpeed harus ditambahkan ke paket _Magento Cluster_  
JE-64958 | any | Kesalahan terjadi saat menginstal _WordPress Cluster_ dengan opsi _WooCommerce_ diaktifkan  
JE-66260 | any | Kesalahan terjadi saat menginstal plugin _LiteSpeed Cache_ untuk aplikasi _WordPress Cluster_  
JE-67000 | any | Kesalahan terjadi saat mengubah jumlah cloudlet untuk kontainer yang didasarkan pada tag _LiteSpeed_ lama  
JE-67035 | any | Variabel “_LITEMAGE_” tidak berubah setelah mengaktifkan/nonaktifkan LiteMage melalui add-on konfigurasi LiteSpeed  
JE-67226 | any | Port yang salah pada URL panel admin dalam email yang diterima setelah instalasi aplikasi _OpenSearch_  
JE-67236 | any | Beban berlebih pada kontainer _Logstash_ segera setelah instalasi  
JE-67639 | any | Kesalahan terjadi saat merestart kontainer _LLSMP_  
JE-67861 | any | Catatan log yang digandakan untuk add-on _SSL/TLS Encrypted Connection_  
JE-68019 | any | Add-on _Service Network IP_ Kubernetes dapat menyebabkan masalah dengan resolusi DNS atau akses ke sumber daya lain di jaringan pribadi  
JE-68103 | any | Parameter tambahan dari konfigurasi _/etc/sysconfig/varnish/varnish_ tidak diterapkan untuk beberapa versi _Varnish_  
WP-341 | any | Add-on klarifikasi cache untuk paket _Multi-Regional WordPress Standalone_ tidak didukung pada stack NGINX  
WP-342 | any | Beberapa add-on untuk paket _Multi-Regional WordPress Standalone_ tidak memiliki ikon kustom  
WP-355 | any | Validasi panjang nama lingkungan tidak benar untuk paket _Multi-Regional WordPress Standalone_  
WP-358 | any | File log diagnostik sinkronisasi konten tidak ada pada node kedua dari paket _Multi-Regional WordPress Standalone_  
WP-389 | any | Informasi yang salah pada email pasca-instalasi untuk beberapa pengaturan paket _Multi-Regional WordPress Standalone_  
WP-639 | any | Validasi jumlah wilayah tidak benar untuk paket _Multi-Regional WordPress Standalone_  
WP-654 | any | Kesalahan terjadi selama instalasi paket _Multi-Regional WordPress Standalone_  
JE-38695 | 5.0.5 | Add-on _New Relic_ tidak berfungsi dengan beberapa versi Java  
JE-65454 | 5.0.5 | Aplikasi _Alfresco_ tidak berfungsi setelah lapisan server aplikasi di-redeploy  
JE-66387 | 5.0.5 | Tagihan yang salah untuk add-on _CDN_ dalam beberapa kasus untuk lingkungan yang dibagikan atau ditransfer  
JE-66396 | 5.0.5 | Penyeimbang beban _NGINX_ secara berkala mengembalikan kesalahan “_502 application down_” jika dua atau lebih backend ditambahkan  
JE-66973 | 5.0.5 | Kesalahan WebSocket di file log _odoo-server.log_ untuk aplikasi _Oddo_  
JE-67040 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _Moodle_  
JE-67057 | 5.0.5 | Variabel _MINIO_SERVER_URL_ tidak ditentukan untuk aplikasi _Minio_  
JE-67516 | 5.0.5 | File dengan pengaturan kustom _Let’s Encrypt_ tidak boleh menjadi sumber selama proses pembaruan otomatis  
JE-67833 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _MODX_  
JE-67917 | 5.0.5 | Kesalahan terjadi saat menginstal aplikasi _Drupal_ di atas versi _8.1.23 PHP_  
JE-68063 | 5.0.5 | Instalasi aplikasi _Cyclos_ gagal karena inisialisasi PostgreSQL yang lambat  
JE-67592 | 5.4 | Kesalahan terjadi selama pembaruan dari repositori VCS pada kontainer _Golang_  
JE-61990 | 6.0 | Sertifikat SSL uji diterbitkan untuk lingkungan yang dikloning dengan _Magento Standalone_ dan _Let’s Encrypt_  
JE-67032 | 8.3 | Server _Node.js_ tidak di-restart setelah mengambil pembaruan VCS dari repositori jarak jauh  
  
Dewacloud Application Platform 8.4.2  
---  
| **#** | **Kompatibel dari** | **Deskripsi**  
---|---|---  
JE-64557 | any | Kesalahan terjadi saat menginstal paket _Multi-Region WordPress Cluster_  
JE-67054 | any | Cache _LiteMage_ tidak diaktifkan secara default untuk paket _Magento_  
JE-67933 | any | Pekerja backend hilang pada lingkungan _WordPress Cluster_ yang dikloning  
JE-69028 | any | Konfigurasi _workerGroup_ yang salah ditambahkan ke konfigurasi _LiteSpeed ADC_ jika ada baris kosong dalam file _hosts_list_  
JE-69128 | any | IP Node tetap tidak berubah setelah memigrasi lingkungan _Redis Cluster_ yang dihentikan ke wilayah yang berbeda  
WP-125 | any | Tautan email untuk paket WordPress tanpa opsi _Let’s Encrypt_ seharusnya tidak menggunakan protokol HTTPS jika fitur SSL bawaan dinonaktifkan untuk akun pengguna  
JE-57401 | 3.3 | Add-on _fail2ban_ tidak berfungsi setelah kontainer di-redeploy  
JE-65628 | 3.3 | Kesalahan terjadi saat memperbarui add-on _Let’s Encrypt_ jika nama domain kustom cocok dengan nama domain lingkungan  
JE-63345 | 5.0.5 | Anggota kolaborasi tidak dapat menginstal add-on _Let’s Encrypt_ pada lingkungan berbagi  
JE-66156 | 5.0.5 | Add-on _BitNinja_ dihapus dari lingkungan yang dikloning setelah menghentikan dan memulai lingkungan  
JE-67792 | 5.0.5 | Konfigurasi SSL yang salah untuk paket _Odoo_ setelah menginstal add-on _Let’s Encrypt_  
JE-47914 | 5.1 | Header _Gzip compression_ dan _Local deploy_ hilang untuk proyek yang diterapkan di server aplikasi _Payara_  
JE-44740 | 5.3.2 | Server aplikasi _WildFly_ tidak memulai jika variabel dengan spasi diatur dalam file _variables.conf_  
JE-67711 | 8.3 | Kesalahan ditampilkan saat keluar dari editor file _Nano_  
JE-40097 | 8.4 | Pembaruan sertifikat SSL tidak berfungsi setelah mentransfer lingkungan dengan add-on _Let’s Encrypt_ ke pengguna yang berbeda  
  


## Versi Tumpukan Perangkat Lunak{#software-stack-versions}

Proses penyediaan tumpukan perangkat lunak independen dari rilis platform, yang memungkinkan solusi perangkat lunak baru untuk disampaikan segera setelah siap. Namun, karena diperlukan untuk beradaptasi dan menguji versi tumpukan baru, ada sedikit penundaan antara rilis perangkat lunak oleh pemelihara upstreamnya dan integrasi ke dalam Dewacloud Application Platform.

Daftar paling akurat dan terkini dari [versi tumpukan perangkat lunak](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang disertifikasi dapat ditemukan pada halaman dokumentasi yang didedikasikan.

[Info lebih lanjut](<https://docs.dewacloud.com/docs/software-stacks-versions/>)



## Perbaikan Bug{#bug-fixes}

Di tabel bawah ini, Anda dapat melihat daftar perbaikan bug yang diterapkan pada platform dimulai dari rilis Dewacloud Application Platform 8.4:

Dewacloud Application Platform 8.4  
---  
| **#** | **Versi Terpengaruh** | **Deskripsi**  
---|---|---  
JE-41735 | - | Kesalahan terjadi saat mengatur ulang kata sandi dari node _Couchbase_ sekunder  
JE-48990 | - | Tindakan penangguhan lingkungan tidak dilacak di panel _Tasks_ dashboard  
JE-52391 | - | Metode API _AddDomains_ harus memproses ruang dengan benar setelah pemisah dalam daftar domain yang disediakan  
JE-53154 | - | Redeployment yang berkepanjangan untuk kontainer dengan alamat IP publik dan pribadi  
JE-59445 | - | Kesalahan terjadi saat menghapus titik mount dari kontainer master  
JE-67003 | 6.1 | Beberapa operasi bisa menggantung karena konfigurasi batas waktu yang hilang  
JE-67115 | 8.1 | Aturan isolasi yang salah untuk lingkungan setelah ditugaskan ke subkelompok yang sama beberapa kali  
JE-67142 | any | Metode API _SwapExtIps_ harus memiliki validasi untuk node yang sama yang disediakan dalam parameter _srcnodeid_ dan _dstnodeid_  
JE-67207 | 8.2.5 | Statistik penggunaan CPU dan disk yang salah di dashboard untuk _Ubuntu VM_  
JE-67360 | 8.0.2 | Kunci publik _EdDSA_ tidak dapat ditambahkan karena validasi panjang kunci yang salah di antarmuka pengguna dashboard  
JE-67503 | - | Peringatan beban _OOM_ tidak diberitahukan melalui email dan tidak ditampilkan di tab riwayat peringatan  
JE-67583 | any | Aturan firewall yang sesuai tidak dihapus setelah menghapus titik mount  
JE-67772 | - | Kesalahan terjadi saat membuat titik mount dengan spasi di jalur  
JE-67809 | 8.3 | Kata sandi satu kali yang sama untuk 2FA dapat digunakan untuk beberapa login  
JE-67811 | 8.3.2 | Dashboard tidak dimuat setelah segarkan pada beberapa mesin _Windows_ menggunakan browser _Firefox_ atau _Edge_  
  