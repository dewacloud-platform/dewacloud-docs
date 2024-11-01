---
sidebar_position: 5
slug: /file-synchronization
title: File Synchronization in Cluster
---
# File Synchronization Between Several Application Servers in a Cluster

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/1.png" alt="file sync logo" width="10%"/>

Ketika lalu lintas yang masuk ke proyek Anda meningkat, Anda perlu meningkatkan kinerja aplikasi Anda untuk mengimbanginya. Ruang kapasitas untuk perluasan elastis secara otomatis disediakan dalam batas server [vertical scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/), tetapi pada akhirnya Anda kemungkinan besar akan menghadapi kebutuhan untuk memperbesar jumlah node (yaitu, menskalakannya secara [horizontal](https://docs.dewacloud.com/docs/horizontal-scaling/)) seiring meningkatnya popularitas layanan Anda.

Untuk banyak aplikasi yang paling banyak digunakan (seperti _WordPress_, _Drupal_, _Joomla_, _Liferay_, _Redmine_ dan sejenisnya), distribusi semacam itu di beberapa instance web server menjadi masalah nyata, karena biasanya semua konten yang disediakan pengguna disimpan hanya pada node yang telah memproses permintaan unggahan file yang sesuai.

Untuk membantu Anda mengatasi masalah konten yang tidak tersinkronisasi saat membangun solusi cluster untuk aplikasi Anda, platform menyediakan add-on khusus **File Synchronization**, yang ditujukan untuk menjaga kesamaan set file yang diunggah di beberapa instance web server. Sinkronisasi ini dapat diterapkan tidak hanya dalam batas satu environment (yaitu, untuk satu node yang di-scale secara horizontal) tetapi bahkan di seluruh application server dalam dua environment yang terpisah, terlepas dari apakah mereka menjalankan stack dan/atau aplikasi yang sama atau berbeda.

Ikuti panduan di bawah ini untuk menyelami [implementasi spesifik](#file-synchronization-add-on-implementation) dari solusi ini dan untuk menemukan bagaimana cara kerjanya dalam praktik dengan langkah-langkah berikut:

  * [Install Example WordPress Application](#install-application)
  * [Test File Upload Without Synchronization](#test-file-upload-without-synchronization)
  * [Apply File Synchronization](#apply-file-synchronization)
  * [Check Sync Logs](#check-logs)

## File Synchronization Add-on Implementation{#file-synchronization-add-on-implementation}

Solusi **File Sync** disediakan sebagai [add-on](https://docs.dewacloud.com/docs/marketplace/) dengan sekali klik, yang diimplementasikan dengan bundel daemon **[lsyncd](http://code.google.com/p/lsyncd/)** dan utilitas **cron**. Dengan dikombinasikan secara cerdas dengan **[inotify](https://en.wikipedia.org/wiki/Inotify)**, _lsyncd_ memulai sinkronisasi file hanya saat ada perubahan nyata yang terdeteksi pada sistem. Realisasi semacam itu secara signifikan mengurangi beban CPU dibandingkan dengan panggilan sinkronisasi reguler dan menjaga data Anda tetap terbaru sepanjang waktu, yang membuat solusi ini mudah digunakan, kuat, dan terjangkau.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/2.png" alt="file sync" width="50%"/>

Add-on **File Sync** dapat diinstal di atas stack application server yang dikelola platform (yaitu, kecuali [Docker](https://docs.dewacloud.com/docs/container-types/) containers). Sebelum pemasangan, Anda akan diminta untuk memilih folder yang akan disinkronkan. Dengan cara ini, Anda dapat menyinkronkan hanya bagian dari sistem file server aplikasi Anda yang benar-benar memerlukannya. Dengan demikian, hanya perubahan dalam direktori yang dipilih (pada instance application server yang ditentukan) yang akan memicu sinkronisasi.

Sekarang, mari kita lihat bagaimana cara menerapkannya langkah demi langkah.

## Install Application{#install-application}

Dalam contoh kami, kami akan menggunakan aplikasi **WordPress**, yang di-deploy ke environment dengan dua application server _NGINX-PHP_.

:::tip
Instruksi di bawah ini sepenuhnya sesuai untuk aplikasi serupa lainnya (Drupal, Joomla, Liferay, Redmine, dan sebagainya) yang didasarkan pada bahasa pemrograman yang didukung seperti Java, PHP, Ruby, dll.
:::

1\. Anda dapat menginstal aplikasi **WordPress** Anda secara manual atau menemukan paket sekali klik yang sesuai di [Marketplace](https://docs.dewacloud.com/docs/marketplace/) untuk men-deploy-nya secara otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/03-marketplace-deploy-wordpress.png" alt="marketplace deploy WordPress" max-width="100%"/>

Klik **Install** dan berikan detail yang diperlukan, seperti _Environment_, _Display Name_ ([alias](https://docs.dewacloud.com/docs/environment-aliases/)) dan _Region_ (jika beberapa [regions](https://docs.dewacloud.com/docs/environment-regions/) tersedia).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/4.png" alt="wordpress cluster" width="60%"/>

Konfirmasikan pemasangan dan tunggu satu menit hingga pesan dengan data admin Anda ditampilkan (informasi yang sama akan dikirimkan kepada Anda melalui email).

2\. Klik **Change environment topology** dan gunakan tombol **+** di bagian _[Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)_ untuk menambahkan satu node app server lagi, sehingga menciptakan cluster.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/5.png" alt="create wordpress cluster" max-width="100%"/>

Setelah selesai, klik **Apply**.

:::tip
Dengan menggunakan instruksi di dokumentasi kami, Anda dapat dengan mudah menambahkan server aplikasi tambahan, mengaktifkan _high availability_, atau bahkan mengonfigurasi solusi _clustered_. Dalam kasus kami, kami hanya menambahkan satu server aplikasi lagi ke environment, tetapi Anda dapat menggunakan skenario yang lebih kompleks dengan mengatur solusi _clustered_ untuk aplikasi WordPress Anda.
:::

## Test File Upload Without Synchronization{#test-file-upload-without-synchronization}

Pada titik ini, mari kita periksa bagaimana proses unggahan file tanpa sinkronisasi.

1\. Akses panel admin Wordpress dengan menambahkan akhiran _/wp-login.php_ ke nama domain environment Anda dan **Log In** menggunakan kredensial yang telah Anda terima melalui email.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/6.png" alt="wordpress login" width="40%"/>

2\. Setelah masuk, lakukan beberapa perubahan kustom (misalnya, unggah gambar atau file lain, edit tema, tambahkan halaman, dll.).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/7.png" alt="wordpress media" max-width="100%"/>

Sebagai contoh, kami telah mengunggah satu gambar ke perpustakaan **Media**.

3\. Sekarang, kembali ke dashboard platform dan klik **Config** di samping layer app server.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/8.png" alt="nginx config" max-width="100%"/>

4\. Arahkan ke direktori **webroot** (klik dari _Favorites_) **> ROOT > wp-content** dan bandingkan isinya dalam kedua node.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/9.png" alt="wordpress content" max-width="100%"/>

:::warning
Direktori dengan file yang diunggah bergantung pada aplikasi yang Anda jalankan. Berikut adalah daftar folder tersebut untuk beberapa aplikasi yang paling umum digunakan:
WordPress - webroot/ROOT/wp-content
Drupal - webroot/ROOT/sites
Joomla - webroot/ROOT/images
Liferay - webroot/home/liferay/data
:::

Seperti yang Anda lihat, salah satu instance app server (_Node ID 54502_ dalam contoh kami) berisi file yang baru ditambahkan di direktori **uploads**, sedangkan instance lainnya (dengan identifier _54505_) belum memilikinya.

## Apply File Synchronization{#apply-file-synchronization}

Untuk menerapkan sinkronisasi konten di dalam cluster kami, mari kita terapkan add-on **File Synchronization**.

1\. Temukan dan **Install** add-on _**File Synchronization**_ di [Marketplace](https://docs.dewacloud.com/docs/marketplace/).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/10.png" alt="file sync addon" max-width="100%"/>

2\. Di kotak dialog yang terbuka, Anda perlu menentukan beberapa parameter sinkronisasi tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/11.png" alt="file sync between app servers" width="60%"/>

Di sini, tentukan apakah sinkronisasi file harus berjalan dalam _One_ environment (seperti dalam contoh kami) atau antara _Two_ _environments_ yang berbeda (lihat opsi terkait di tabel di bawah). Selain itu, berikan detail berikut:

  * **Sync path** \- path ke folder (relatif terhadap direktori **webroot**) yang harus disinkronkan pada server yang dipilih di bawah (dalam field _Nodes_), misalnya _/ROOT/wp-content_
  * **Sync delay (sec)** \- jeda sinkronisasi, dinyatakan dalam detik
  * **Environment name** \- untuk memilih environment yang diperlukan dari daftar yang tersedia
  * **Nodes** \- layer app server diambil secara otomatis setelah memilih environment

Setelah selesai, klik **Install**.

:::tip
Untuk menerapkan sinkronisasi antara dua environment yang berbeda, add-on harus diinstal pada web server di kedua environment (memilih environment lain dalam daftar drop-down yang sesuai setiap kali) dengan opsi sinkronisasi _Two environments_. Di sini, parameter tambahan berikut harus ditentukan:
2nd environment IP - alamat IP dari node application server dalam environment kedua (Anda dapat menggunakan IP internal jika kedua environment dijalankan pada platform dan region perangkat keras yang sama; jika tidak, diperlukan alamat IP eksternal)
Password - kotak opsional untuk mengatur kata sandi pada sinkronisasi (harus dinyatakan sama pada kedua instance)
:::

3\. Setelah pemasangan selesai, Anda akan melihat pesan konfirmasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/12.png" alt="file sync addon installed" max-width="100%"/>

4\. Pada titik ini, Anda dapat memeriksa keberadaan file yang diunggah di kedua node.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/13.png" alt="synchronized files" width="70%"/>

:::tip
Jika Anda mengubah topology environment dengan menambahkan lebih banyak app server, add-on akan menerapkan sinkronisasi file yang sesuai ke node baru secara otomatis, tanpa perlu penyesuaian manual.
:::
:::warning
Jika ada mount points dalam direktori

 yang disinkronkan, Anda perlu menambahkannya ke pengecualian. Pergi ke file `<sync_path>/lsyncd/etc/lsyncd.conf` dan tambahkan path yang sesuai. Setelah itu, mulai ulang sinkronisasi dengan mematikan proses rsync dan lsyncd pada setiap node:
```
for pid in $(ps aux | grep 'rsync\|lsyncd' | awk '!/grep/{print $2}'); do kill -9 $pid; done
```
:::

Mudah, bukan? Sinkronisasi file akan dilakukan secara otomatis setiap kali Anda menambahkan atau mengubah sesuatu di WordPress Anda (atau aplikasi lain yang Anda kelola) sehingga data di server Anda akan selalu identik.

## Check Logs{#check-logs}

Proses sinkronisasi dapat dipantau melalui file log yang terletak di direktori web-server _**webroot/lsyncd/var/log**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/14.png" alt="lsyncd log" max-width="100%"/>

Informasi terpenting dan status sinkronisasi dapat dilihat di file _**lsyncd.log**_ dan _**lsyncd.status**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/file-synchronization-in-cluster/15.png" alt="lsyncd status" max-width="100%"/>

Semoga instruksi ini membantu Anda.

Punya pertanyaan tentang sinkronisasi file antara application servers? Jangan ragu untuk menghubungi ahli teknis kami di [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

  * [WordPress Cluster](https://www.virtuozzo.com/application-platform-docs/wordpress-cluster-devops/)
  * [Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)
  * [High Availability](https://docs.dewacloud.com/docs/auto-clustering/)
  * [Marketplace](https://docs.dewacloud.com/docs/marketplace/)