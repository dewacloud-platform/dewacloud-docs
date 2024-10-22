---
sidebar_position: 1
slug: /auto-deploy-overview
title: Auto-Deploy Overview
---
# Auto-Deploy of Git/SVN Updates

Untuk meningkatkan produktivitas Anda sebagai developer, platform ini menyediakan kemungkinan untuk mengatur **deployment otomatis** periodik dari proyek Anda dan, dengan cara ini, memastikan integrasi kontinu ke server aplikasi yang sesuai. Pengulangan deployment ini dilakukan berdasarkan perubahan yang diterapkan ke repositori jarak jauh yang sesuai, sehingga Anda dapat bekerja melalui layanan Git/SVN yang Anda sukai, tanpa harus meninggalkannya.

Cukup perbarui kode Anda, lakukan commit, dan semua perubahan dalam proyek VCS Anda akan secara otomatis didorong ke lingkungan produksi Anda setelah interval waktu yang ditentukan. Dan sebagai perbedaannya dari Git hooks, fitur auto-deploy platform tidak memerlukan konfigurasi tambahan pada sisi repositori Git dan berfungsi dengan SVN. Mari temukan cara mendapatkannya!

## Preparing a Project{#preparing-a-project}

1. Pertama-tama, siapkan sebuah [environment](https://docs.dewacloud.com/docs/setting-up-environment/) untuk penambahan proyek yang dimaksud dengan kode dari Git/SVN.

   :::note
   Bahwa environment Java memerlukan node Maven tambahan untuk membangun dan mendorong kode ke server aplikasi yang sesuai, sementara untuk bahasa lain, mekanisme ini ditangani oleh node komputasi yang bersangkutan.
   :::

   Kami akan mempertimbangkan ini pada contoh node build Maven untuk Java - namun, server aplikasi lain dapat dikonfigurasikan secara serupa.

2. Setelah environment Anda dibuat, klik tombol **Add project** di sebelah node yang sesuai (mis. _Maven_ untuk Java atau server aplikasi Anda untuk bahasa lain).

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/git_&_svn_auto-deploy/auto-deploy-overview/2dashb.png" alt="git svn auto deploy 2dashb" width="100%"/>

3. Dalam jendela yang terbuka, beralih ke tab dengan jenis VCS yang digunakan dan isi kolom yang diperlukan: masukkan **URL** ke repositori yang diperlukan, tentukan detail autentikasi, dan tunjukkan nama untuk **Context** tempat aplikasi Anda harus ditempatkan.

   Juga, dalam kasus penggunaan node build Maven, Anda perlu menentukan **Name** untuk proyek Anda dan **Environment** yang akan dideploy.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/git_&_svn_auto-deploy/auto-deploy-overview/3add.png" alt="git svn auto deploy 3add" width="100%"/>

   :::tip
   Jika Anda memerlukan informasi lebih rinci tentang opsi-opsi ini, rujuk pada panduan Deployment terkait dan Maven untuk Deploy via Git/SVN untuk spesifikasi engine Java.
   :::

## Setting Automatic Project Update{#setting-automatic-project-update}

Sekarang, karena semua informasi penting untuk deployment telah dicantumkan, Anda dapat melanjutkan ke konfigurasi pembaruan otomatis proyek Anda.

1. Centang garis _**Check and auto-deploy updates**_ untuk mengaktifkannya dan mendapatkan bagian yang sesuai diperluas.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/git_&_svn_auto-deploy/auto-deploy-overview/3.5autodeploy.png" alt="git svn auto deploy 3.5autodeploy" width="100%"/>

   Opsi **Check every (min)** akan ditampilkan, yang digunakan untuk menentukan frekuensi pengecekan repositori untuk commit baru, yang didorong sejak verifikasi terakhir.

   Seperti yang dapat Anda tebak dengan mudah dari nama opsinya, ditentukan dalam menit. Jadi, jika Anda menetapkan interval 1 menit, pemeriksaan akan dilakukan setiap menit, dan jika Anda menentukan interval 1440 menit - pemeriksaan akan dilakukan sekali sehari.

   :::warning
   Jika interval verifikasi lebih kecil dari waktu yang dibutuhkan untuk membangun dan meng-deploy proyek, tugas berikutnya akan menunggu dalam antrian sampai operasi tersebut selesai dalam kasus layer server aplikasi Anda mengandung beberapa node, harap pertimbangkan juga rincian pada urutan pembaruan mereka.
   :::

2. Sebagai hasil dari konfigurasi ini (yang, meskipun dengan deskripsi panjang, memerlukan waktu kurang dari satu menit untuk ditentukan), jika ada perubahan yang dibuat pada sumber aplikasi, perubahan tersebut akan secara otomatis dibangun dan dideploy (untuk proyek Java) atau hanya diterapkan melalui pembaruan proyek (untuk bahasa lainnya) sekali per periode waktu yang ditentukan.

   Klik **Add** untuk konfirmasi.

   :::tip
   Bingkai ini juga mencakup sejumlah pengaturan tambahan, yang dapat berguna untuk mengatur interaksi yang tepat dari sistem platform dengan repositori jarak jauh Anda: Opsi _Checkout now_ (dihadirkan untuk bahasa non-Java) digunakan untuk menunjukkan apakah Anda ingin mendepoy proyek Anda segera setelah penambahannya atau menunda operasi ini (untuk dilakukan baik secara manual kemudian atau dilakukan secara otomatis selama checkout pertama selanjutnya oleh fitur auto deploy yang diaktifkan). Opsi _Auto resolve conflict_ juga aktif secara default dan mewakili analog dari perintah git reset–hard. Ini digunakan untuk mencegah terjadinya konflik merge selama pembaruan proyek berikutnya, yang dapat terjadi jika file yang sama telah dimodifikasi baik dalam repositori jarak jauh dan proyek Anda, yang dihosting di platform. Jika masalah seperti itu terjadi, file yang bertentangan ini akan diperbarui sesuai dengan versi repositorinya (yang dianggap sebagai yang benar), membuang perubahan yang dibuat secara lokal. Kami sangat menyarankan untuk tidak menonaktifkan opsi ini kecuali Anda tahu persis apa yang Anda lakukan. Opsi _Enable zero-downtime deployment_ (saat ini tersedia hanya untuk PHP) memungkinkan untuk terus mendepoy pembaruan aplikasi, yang terletak pada konteks ROOT, tanpa interupsi dalam kerja aplikasi. Berikut ini, jika diaktifkan, pilihan Anda akan diingat dan digunakan selama semua auto-update berikutnya.
   :::

## Tracking Auto-Updates{#tracking-auto-updates}

Untuk memantau proses auto-deployment dan hasilnya, Anda dapat melihat file log yang sesuai (bernama _**vcs_update**_) untuk server aplikasi atau node Maven yang bersangkutan.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/git_&_svn_auto-deploy/auto-deploy-overview/4log.png" alt="git svn auto deploy 4log" width="100%"/>

:::note
Anda juga dapat mengkonfigurasi ulang pengaturan aplikasi yang dideploy via Git/SVN Anda dengan cara menavigasi ke environment Anda dan memilih tombol Edit di samping proyek yang sesuai. Anda akan melihat bingkai terbuka, mirip dengan yang digunakan untuk penambahan proyek, tempat Anda dapat mengubah status untuk opsi mana saja yang dijelaskan di atas (cukup klik _Apply_ untuk mengonfirmasi pengaturan baru).
:::

Itu saja! Cukup buat konfigurasi sederhana ini saat menambahkan proyek Anda ke platform dan merasa bebas untuk terus bekerja dengan kode Anda melalui repositori Git/SVN, tanpa harus kembali ke dashboard kami lagi. Yakinlah bahwa semuanya akan tetap terbarukan di produksi Anda, secara otomatis!

## Baca Juga{#whats-next}

- [Deployment Guide](https://docs.dewacloud.com/docs/deployment-guide/)
- [Deploy Java Projects via GIT/SVN with Maven](https://docs.dewacloud.com/docs/java-vcs-deployment/)
- [GIT & SVN Auto-Deploy for Multiple Containers](https://docs.dewacloud.com/docs/multiple-containers-auto-update/)
- [Gitblit for Java and PHP Apps](https://docs.dewacloud.com/docs/gitblit/)