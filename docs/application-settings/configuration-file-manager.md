---
sidebar_position: 1
slug: /configuration-file-manager
title: Configuration File Manager
---
# Configuration File Manager

Platform configuration manager adalah alat yang sangat berguna, yang memungkinkan Anda untuk mengontrol semua file dalam container tertentu. Hal ini memungkinkan Anda dengan mudah dan cepat menerapkan beberapa konfigurasi umum ke node Anda melalui GUI yang nyaman langsung di browser, tanpa perlu menghubungkan [koneksi SSH](https://docs.dewacloud.com/docs/ssh-gate/), yang mungkin diperlukan untuk beberapa operasi yang kompleks.

Untuk membuka configuration manager, arahkan mouse ke node yang diperlukan dan klik tombol **Config** (yang memiliki ikon kunci pas).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/1.png" alt="Config button" width="100%"/>

Di bagian tengah dashboard, tab konfigurasi yang sesuai akan terbuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/2.png" alt="config manager tab" width="100%"/>

Di sini tersedia beberapa bagian berikut:

  * _**Root**_ (File Manager) - memberikan Anda akses ke filesystem lokal container, di mana Anda dapat mengelola berbagai pengaturan dalam file konfigurasi aplikasi Anda
  * _**Mount Points**_ \- daftar folder, yang secara fisik disimpan pada node jarak jauh tetapi dapat digunakan pada node saat ini (pelajari cara Anda bisa [mount data](https://docs.dewacloud.com/docs/mount-points/) di platform)
  * _**Exports**_ \- daftar folder yang dibagikan dengan node lain, yaitu file ini disimpan secara lokal tetapi juga tersedia di instance jarak jauh (pelajari lebih lanjut di halaman dokumentasi [storage exports](https://docs.dewacloud.com/docs/storage-exports/))
  * _**Favorites**_ \- file dan folder yang Anda tandai sebagai favorit sehingga Anda memiliki akses yang cepat dan mudah ke mereka

Selanjutnya dalam panduan ini, kita akan membahas dasar-dasar penggunaan configuration manager yang dapat diterapkan untuk container platform mana pun. Namun, jika Anda memerlukan informasi spesifik tentang konfigurasi untuk tipe node tertentu, pilih salah satu dokumen berikut:

  * [Container Configuration](https://docs.dewacloud.com/docs/configuration-file-manager/)
  * [Java Application Server Configuration](https://docs.dewacloud.com/docs/java-application-server-config/)
  * [PHP Application Server Configuration](https://docs.dewacloud.com/docs/php-application-server-config/)
  * [Ruby Application Server Configuration](https://docs.dewacloud.com/docs/ruby-application-server-config/)
  * [Database Configuration](https://docs.dewacloud.com/docs/database-configuration-files/)
  * [NGINX Balancer Configuration](https://docs.dewacloud.com/docs/nginx-balancer-config/)
  * [Memcached Configuration](https://docs.dewacloud.com/docs/memcached-configuration/)
  * [Maven Configuration](https://docs.dewacloud.com/docs/maven-configuration/)

## Working with File Manager{#working-with-file-manager}

File manager bawaan platform memberikan akses yang mudah dan nyaman ke file container Anda dan memungkinkan untuk melakukan sebagian besar operasi umum langsung melalui dashboard.

:::tip
Anda juga dapat terhubung ke container melalui SSH untuk mendapatkan lebih banyak kemungkinan dalam pengelolaannya.
:::

1. Saat beralih ke bagian _**Root**_ dari config manager, Anda akan melihat pohon sistem file di bagian kanan, dengan string path dan daftar **Actions for the current directory** yang dapat diperluas di panel alat di atas. Opsi-opsi ini menyediakan fungsi berikut:

  * dengan mudah beralih antar direktori di dalam path dengan mengklik folder antara. Juga, Anda dapat menentukan lokasi target secara manual dengan mengetiknya di kolom input yang sesuai, yang muncul saat mengklik ruang kosong di mana saja pada bar path 
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/3.png" alt="file manager’s navigation string" width="100%"/>

  * daftar aksi berisi sejumlah fungsi untuk manajemen direktori yang dipilih, seperti refresh konten, pembuatan item baru, penambahan item yang dipilih ke favorit, penghapusan item, atau mounting direktori jarak jauh 
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/4.png" alt="current directory actions in file manager" width="100%"/>

2. Di bawah panel alat, Anda dapat melihat pohon file, yang dimaksudkan untuk navigasi sederhana di antara mereka dan menampilkan informasi tambahan tentang file yang disertakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/5.png" alt="managing selected file" width="100%"/>

Dalam kolom-kolomnya, data berikut disajikan:

  * **Name** \- nama file, yang dapat diedit dengan mengklik ikon pensil (muncul saat mengarahkan kursor); juga, Anda dapat mengelola file yang dipilih dengan menggunakan daftar Additionally
  * **Size** \- ruang disk yang dikonsumsi oleh file
  * **Last Modified** \- tanggal pembuatan file atau perubahan terakhirnya
  * **Type** \- kategori file (di mana jenis yang tersedia adalah _regular file_ , _directory_ , _named pipe_ , socket, perangkat karakter, dan perangkat blok)

:::note
Hanya tipe file _regular_ yang dapat diedit melalui Config manager.
:::

3. Setiap file yang dibuka (klik dua kali atau pilih aksi **Open** yang sesuai) akan ditampilkan dalam sub-tab terpisah, sehingga Anda dapat beralih di antara mereka tanpa menutup yang sebelumnya, yang membuatnya lebih nyaman untuk menjelajahi sistem file.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/6.png" alt="search inside of a file" width="100%"/>

Selain itu, untuk menyederhanakan operasi pengelolaan dan pengeditan file, opsi **Search** yang sesuai dapat digunakan, tersedia melalui tombol dengan nama yang sama di panel atas.

Cukup ketik potongan teks yang diperlukan untuk menemukan dan menyorot semua kecocokan di seluruh file Anda. Gunakan opsi tambahan untuk mempersempit hasil pencarian lebih lanjut:

  * _Match Case_ \- memungkinkan pencarian sensitif terhadap huruf besar-kecil
  * _Regex_ \- mengaktifkan [ekspresi reguler](https://en.wikipedia.org/wiki/Regular_expression) untuk spesifikasi kondisi pencarian

4. Setelah Anda selesai mengedit file, jangan lupa untuk **Save** perubahan yang telah Anda buat dengan tombol yang sesuai di bagian atas. Jika Anda bekerja dengan lapisan beberapa node, Anda akan diminta tambahan apakah perlu menyimpan perubahan yang dibuat _hanya untuk instance saat ini_ atau _untuk semua instance_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/7.png" alt="types of file saving" width="100%"/>

:::tip
Saat menyimpan perubahan yang dibuat di file konfigurasi mana pun, pop-up konfirmasi akan muncul. Jika Anda merasa yakin dan ingin melewati pesan ini di masa mendatang, centang opsi “Do not show this dialog again”. Akibatnya, semua edit berikutnya akan disimpan secara instan tanpa meminta konfirmasi ulang. Pengaturan ini akan diterapkan untuk semua jenis file konfigurasi di semua environment Anda.
:::

5. Untuk membuat perubahan pada node lain dalam lapisan yang sama, Anda dapat menggunakan daftar drop-down yang secara otomatis diambil di bagian kiri atas pengelola.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/configuration-file-manager/8.png" alt="switch between nodes in file manager" width="50%"/>

:::note
File yang sudah dibuka akan secara otomatis dimuat ulang untuk node yang sesuai saat beralih.
:::

Itulah semua fungsi utama file manager, yang semoga sangat membantu Anda selama bekerja dengan Platform kami.

## Baca Juga{#whats-next}

  * [Mount Points](https://docs.dewacloud.com/docs/mount-points/)
  * [Exporting Data for Sharing](https://docs.dewacloud.com/docs/storage-exports/)
  * [SSH Access](https://docs.dewacloud.com/docs/ssh-access/)