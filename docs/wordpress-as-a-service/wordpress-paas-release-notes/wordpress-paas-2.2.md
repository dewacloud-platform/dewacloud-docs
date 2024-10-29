---
sidebar_position: 1
slug: /wordpress-paas-2.2
title: WordPress PaaS 2.2
---

# Dewacloud Application Platform untuk WordPress 2.2

_Dokumen ini bersifat sementara dan dapat berubah._

Dalam dokumen ini, Anda akan menemukan semua fitur baru, peningkatan, dan perubahan yang terlihat yang termasuk dalam rilis **Virtuozzo Application Platform for WordPress 2.2**.

Ruang lingkup perubahan umum sama seperti untuk rilis _[Dewacloud Application Platform (DevOps PaaS) 8.4](https://docs.dewacloud.com/release-notes/release-notes-84/)_. Di bawah ini, kami akan menyoroti semua peningkatan spesifik ke WordPress PaaS.

## Refill Balance dari Dashboard{#refill-balance-from-dashboard}

Diimplementasikan kemungkinan untuk mengisi saldo akun dari dashboard [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#refill-balance-from-dashboard)

## Bayar Faktur dari Dashboard{#pay-invoices-from-dashboard}

Ditambahkan tombol untuk membayar faktur yang terbuka atau kadaluwarsa [Pelajari lebih lanjut](#pay-invoices-from-dashboard)

## Restart untuk Cluster Nodes{#restart-for-cluster-nodes}

Diimplementasikan fungsionalitas untuk merestart node terpisah dan kelompok node untuk klaster WordPress [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#restart-for-cluster-nodes)

## Peningkatan Halaman Informasi Pengguna{#user-information-page-improvements}

Diperbarui bagian informasi pengguna dan ditambahkan tabel batasan akun [Pelajari lebih lanjut](#user-information-page-improvements)

## Manajemen Git Repositories{#git-repositories-management}

Ditambahkan opsi untuk mengedit dan menghapus catatan Git repository yang sudah ada [Pelajari lebih lanjut](#git-repositories-management)

## Konfirmasi Tindakan Invasif{#invasive-actions-confimation}

Dikonfigurasi window untuk tindakan yang dapat memengaruhi akun pengguna atau proyek [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#invasive-actions-confimation)

## Data Penggunaan Paket Layanan{#service-plan-usage-data}

Ditambahkan keterangan teks yang jelas untuk instalasi yang digunakan dan total dalam langganan [Pelajari lebih lanjut](https://docs.dewacloud.com/docs/#service-plan-usage-data)

## Refill Balance dari Dashboard{#refill-balance-from-dashboard}

Kemungkinan untuk mengisi saldo akun dari dashboard diimplementasikan dalam rilis WordPress PaaS 2.2 saat ini. Tombol ini terletak di sebelah nilai _Total Balance_ di menu kanan atas.

![refill balance button](#)

Setelah mengklik tombol, dialog _**Refill Balance**_ akan ditampilkan. Di sini, Anda dapat memilih jumlah pengisian (dengan pajak, jika ada) dan metode pembayaran. Mengonfirmasi operasi akan mengarahkan Anda ke sistem pembayaran eksternal untuk melanjutkan pembayaran.

![refill balance dialog](#)

Metode pembayaran dan informasi penagihan secara umum dikelola di sistem penagihan eksternal. Itu dapat diakses dari bagian **[Your Account](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings) > Payment Settings** di dashboard dengan tombol **Manage**.

![payment settings](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/docs/wp-dashboard-overview/)



## Bayar Faktur dari Dashboard{#pay-invoices-from-dashboard}

Untuk menyederhanakan manajemen pembayaran, bagian **[Your Account](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings) > Invoices** diperbarui. Tergantung pada status (_open_ atau _expired_), tombol untuk membayar faktur akan ditampilkan dalam kolom _Actions_ yang baru.

![pay invoices](#)

Klik tombol bayar untuk melihat jendela konfirmasi yang akan menunjukkan semua detail terkait pada faktur dan langganan.

[Informasi lebih lanjut](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings)



## Peningkatan Halaman Informasi Pengguna{#user-information-page-improvements}

Bagian **[Your Account](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings) > User Information** di dashboard memungkinkan personalisasi akun dengan memberikan detail dalam formulir yang khusus. Untuk meningkatkan pengalaman pengguna, perubahan berikut diterapkan ke bagian dalam rilis WordPress PaaS 2.2 saat ini:

- pengoptimalan UI
- penyesuaian informasi yang dapat disediakan
- peninjauan teks
- ditambahkan tabel _Account Limits_

Saat bekerja dengan platform, beberapa fitur dapat sepenuhnya atau sebagian dibatasi (biasanya, hanya untuk akun _trial_). Tabel **Account Limits** yang baru melacak semua ketersediaan dan batasan fungsionalitas inti platform. Selain itu, untuk pengguna percobaan, ini menyediakan perbandingan dengan akun berbayar.

![05-user-information.png](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings)



## Restart untuk Cluster Nodes{#restart-for-cluster-nodes}

Dewacloud Application Platform untuk WordPress menyediakan dukungan untuk solusi klaster yang terdiri dari beberapa node di berbagai grup node (server aplikasi, load balancers, databases, dll.). Penggunaan beberapa node per grup menyediakan redundansi dan memastikan ketersediaan tinggi. Dalam rilis platform 2.2 saat ini, kemungkinan untuk merestart node atau grup terpisah diimplementasikan untuk solusi klaster. Setelah mengklik tombol **Restart** untuk proyek, daftar drop-down dengan semua grup akan ditampilkan. Arahkan kursor ke opsi tertentu untuk memilih node spesifik atau semua node dalam grup.

![restart cluster nodes](#)

Selain itu, saat merestart seluruh kelompok dengan beberapa node, Anda akan mendapatkan opsi untuk melakukan operasi secara berurutan. Dalam mode ini, restart akan dipicu pada node satu per satu (tidak secara bersamaan pada semuanya). Juga, penundaan yang dapat dikonfigurasi antara setiap restart diatur. Implementasi semacam itu memastikan bahwa setidaknya ada satu node yang tetap aktif dan dapat memproses permintaan end-user (tidak ada downtime). Penundaan diperlukan untuk memastikan bahwa node sepenuhnya online setelah restart.

![restart nodes dialog](#)



## Manajemen Git Repositories{#git-repositories-management}

Platform WordPress PaaS memungkinkan Anda [mendeploy proyek WordPress kustom](https://docs.dewacloud.com/docs/wp-dashboard-project-management/#application-deployment) dari repositori Git jarak jauh. Anda dapat menambahkan repositori semacam itu di bagian **System Settings > Git Configuration**, yang diperbarui untuk mendukung pengelolaan repositori yang sudah ada. Untuk saat ini, dua tombol baru ditambahkan di sebelah kanan setiap catatan:

- **Edit** – menyesuaikan detail repositori (field sama seperti saat penambahan)
- **Delete** – menghapus catatan repositori dari dashboard

![manage Git repositories](#)

[Informasi lebih lanjut](https://docs.dewacloud.com/docs/wp-dashboard-overview/#account-settings)



## Konfirmasi Tindakan Invasif{#invasive-actions-confimation}

Dalam rilis platform 2.2 saat ini, dialog konfirmasi ditambahkan untuk semua tindakan kritis yang dapat memengaruhi akun pengguna atau proyek. Hal ini diperlukan untuk memastikan bahwa proses invasif tidak dapat dipicu secara tidak sengaja. Setelah semua tindakan ditinjau, konfirmasi tambahan diimplementasikan untuk tindakan berikut:

- _menghentikan/memulai/memeriksa/menghapus proyek_
- _mereset kata sandi untuk node_
- _menghapus custom SSL_
- _menghapus SSH key_

![09-action-confirmation.png](#)



## Data Penggunaan Paket Layanan{#service-plan-usage-data}

Untuk memberikan kejelasan yang lebih baik saat melacak jumlah paket layanan yang digunakan dan tersedia per langganan, baik jumlah paket yang digunakan dan total secara eksplisit ditampilkan untuk semua langganan. Ini melengkapi diagram penggunaan yang ada, sehingga membuatnya mudah untuk membaca data yang diperlukan bahkan untuk jumlah instalasi yang besar.

![subscription usage data](#)

