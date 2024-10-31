---
sidebar_position: 2
slug: /environment-export
title: Export Environment
---
# Environment Export

Membuktikan penunjukan Cloud Platform tanpa batasan, platform ini memungkinkan untuk dengan mudah [memindahkan environment antar Cloud](<https://docs.dewacloud.com/docs/how-to-migrate-application/>) untuk menemukan yang paling sesuai dengan kebutuhan Anda. Prosedur ini terdiri dari 2 tahap utama - _export_ dari environment yang sudah ada (kita akan membahas operasi ini secara rinci di bawah) dan [import](<https://docs.dewacloud.com/docs/environment-import/>) ke instalasi PaaS target. Kedua operasi ini hanya akan memakan waktu beberapa menit. Hasilnya, Anda akan menerima salinan siap-pakai yang identik dari environment Anda yang dijalankan di instalasi PaaS lain.

:::note 
Agar fitur Environment Export / Import berfungsi dengan baik, platform penyedia hosting awal (i.e. Anda mengekspor environment darinya) harus memiliki port 7979 terbuka, yang dimaksudkan untuk digunakan dalam mengunduh file sumber dari environment yang dipindahkan selama operasi import berikutnya. Dengan demikian, tergantung pada konfigurasi penyedia tertentu, environment yang diekspor dari beberapa platform mitra kami (terutama Elastx dan Everdata) tidak dapat diimpor ke instalasi PaaS lain. 
:::

## How to Get Environment Copy{#how-to-get-environment-copy}

Selama export, semua informasi tentang environment (i.e. pengaturan topologi, aplikasi yang dideploy, tautan ke arsip dengan konfigurasi dan data pribadi yang dikandungnya, dll.) dikemas menjadi satu file _.json_. Paket JSON yang ringkas ini dapat diunduh dengan mudah ke komputer lokal Anda untuk disimpan dan/atau dideploy di platform lain.

Jadi untuk mengekspor salinan environment Anda, masuklah ke akun PaaS Anda dan ikuti instruksi di bawah:

1\. Pilih tombol **Settings** untuk environment yang ingin Anda ekspor (dalam contoh ini bernama _my-application_).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/export-environment/1.png" alt="environment Settings button" max-width="100%"/>

**Note:** Environment harus memiliki status _Running_ untuk dapat diekspor.

2\. Pada tab **Settings** yang terbuka, navigasikan ke bagian _**Export**_ dan klik tombol dengan nama yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/export-environment/2.png" alt="Export environment section" max-width="100%"/>

3\. Dalam dialog **Environment Export** yang muncul, Anda dapat memilih data mana yang harus diekspor (centang semua opsi untuk mendapatkan salinan environment yang sepenuhnya identik):

  * _**Topology Settings**_ \- konfigurasi environment yang telah Anda tetapkan melalui wizard topologi Environment (titik ini wajib dan diaktifkan secara default)
  * _**Private Data**_ \- file dalam direktori aplikasi yang Anda deploy dan data pribadi yang disimpan dalam database server Anda
  * _**Configuration Files**_ \- semua file yang dapat diakses melalui Configuration Manager pada dashboard Anda, dan pengaturan proyek GIT/SVN yang dideploy (misalnya, tautan repositori, kredensial akses, kunci SSH pribadi terlampir, dll.)

**Note:** Untuk memastikan keamanan aplikasi dan data Anda, sangat disarankan untuk tidak menghapus asli dari environment yang diekspor sampai salinannya berhasil diimpor ke platform lain.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/export-environment/3.png" alt="setup environment export" max-width="100%"/>

Setelah data yang diperlukan untuk export didefinisikan, klik tombol **Export** untuk melanjutkan.

Tergantung pada jenis container yang dikandung environment Anda, Anda harus mempertimbangkan poin-poin berikut:

  * Data dari kontainer _[Elastic VPS](<https://docs.dewacloud.com/docs/vps/>)_ , _[Maven](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)_ , _[Docker](<https://docs.dewacloud.com/docs/container-types/>)_ dan berbasis _Windows_ tidak akan diekspor, meskipun demikian, mereka masih akan dimasukkan ke dalam topologi environment yang diimpor (i.e. dibuat dari awal), sehingga Anda akan dapat mengonfigurasi ulang server-server ini secara manual kemudian.
  * Saat mengekspor server _NGINX_ (baik tipe node load balancer atau aplikasi server), node yang sesuai akan secara singkat berhenti dan secara otomatis dimulai lagi untuk mengambil dump server.
  * [Kunci SSH pribadi](<https://docs.dewacloud.com/docs/git-ssh/>), diekspor bersamaan dengan pengaturan repository GIT lainnya, tidak dapat dihapus dari environment yang diimpor dan tidak ditampilkan pada dashboard, meskipun demikian, tetap akan digunakan untuk koneksi. Namun demikian, itu akan diganti jika memilih yang baru dalam jendela pengaturan proyek GIT.

4\. Setelah ekspor berhasil selesai, string baru yang dapat diklik (dinamakan berdasarkan waktu/tanggal ekspor) akan muncul dalam daftar **Exported Environment Copies**. Pilih untuk mengunduh file _**.json**_ yang telah terkompilasi dengan data environment yang diekspor ke mesin lokal Anda, atau cukup klik kanan untuk menyalin URL langsung ke manifest ini (yang juga dapat digunakan selama import).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/export-environment/4.png" alt="exported environment copies list" max-width="100%"/>

Selain itu, Anda akan menerima pemberitahuan email yang sesuai dengan tautan ke daftar environment yang Anda ekspor.

:::note 
Anda dapat membuat arsip sebanyak yang Anda perlukan dari environment yang diekspor, tetapi semua itu akan disimpan di ruang disk Anda, yang dikenakan biaya sesuai dengan tarif penyedia layanan hosting Anda. Jika file tertentu tidak lagi diperlukan, Anda dapat menghapusnya dengan mengklik tombol silang merah tepat sebelum string yang bersangkutan. 
:::

Itu saja! Anda telah berhasil mengekspor salinan environment Anda. Sekarang, Anda dapat melanjutkan ke [mengimpornya](<https://docs.dewacloud.com/docs/environment-import/>) ke platform target untuk menyelesaikan migrasi.

## Baca Juga{#whats-next}

  * [Import Environment](<https://docs.dewacloud.com/docs/environment-import/>)
  * [Environment Transferring](<https://docs.dewacloud.com/docs/environment-transferring/>)
  * [Account Collaboration](<https://docs.dewacloud.com/docs/account-collaboration/>)
  * [Share Environment](<https://docs.dewacloud.com/docs/share-environment/>)