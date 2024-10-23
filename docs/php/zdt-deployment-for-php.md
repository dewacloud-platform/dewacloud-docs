---
sidebar_position: 5
slug: /zdt-deployment-for-php
title: ZDT Deployment for PHP
---
# Zero DownTime (ZDT) Deployment for PHP

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/01-zdt-redeploy-logo.png" alt="zero downtime deploy" width="20%"/>

Mayoritas layanan web modern harus dapat diakses oleh pengguna setiap saat. Masalah umum namun sering diabaikan di sini adalah proses penerapan ulang proyek (yaitu pembaruan), yang menyebabkan aplikasi Anda mati atau menunjukkan kesalahan hingga operasi selesai. Ini dapat diselesaikan dengan berbagai alat seperti Capistrano, Fabric, dan lainnya. Namun, suplemen ini sering memerlukan waktu tambahan, biaya, dan pengetahuan khusus untuk berhasil diintegrasikan dan dikonfigurasi dengan benar (misalnya, ini dapat dilakukan dengan menyiapkan beberapa server dengan load-balancer di depannya; sementara penerapan berjalan di satu server - itu dikeluarkan dari daftar rute, setelah itu server lainnya dapat diperbarui). Jelas, penerapan semacam itu cukup rumit dan memerlukan banyak sumber daya tambahan, oleh karena itu diperlukan metode yang lebih baik.

[Solusi baru](<https://codeascraft.com/2013/07/01/atomic-deploys-at-etsy/>) semacam ini diusulkan untuk aplikasi PHP, berjalan di atas Apache, oleh pendiri bahasa pemrograman ini dan, sekaligus, penasihat teknis kami - Rasmus Lerdorf. Sebagai pendekatan yang digunakan secara aktif di Etsy, dan, oleh karena itu, menjadi pendekatan yang teruji dalam pertempuran, itu kemudian diambil sebagai dasar untuk fitur Zero Downtime & Atomic Deployment di platform. Ide utama dari metode ini didasarkan pada dua poin berikut:

  * setiap kali proses penerapan baru dijalankan, file aplikasi yang sesuai diduplikasi, disimpan dalam direktori server terpisah (yang secara otomatis diberi nama sesuai dengan tanggal/waktu pembuatannya untuk memudahkan identifikasi)
  * pengalihan permintaan khusus, yang disebut _symlink_ (yaitu tautan simbolik), beralih antara versi aplikasi yang berbeda setelah setiap pembaruan, menunjuk ke yang seharusnya digunakan saat ini

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/02-zdt-redeploy-scheme.gif" alt="php zero downtime deploy scheme" width="30%"/>

Dengan cara demikian, file proyek yang diperbarui dapat diterapkan dengan lancar, sementara versi kode awal terus bekerja dan menangani sesi pengguna. Dan ketika penerapan sepenuhnya selesai, symlink langsung beralih ke versi terbaru dari aplikasi yang berhasil diterapkan, mulai mengalihkan semua permintaan yang masuk kepadanya. Semua ini bersama-sama membuat proses penerapan sepenuhnya atomik dan implisit bagi pelanggan Anda, sambil secara bersamaan membebaskan Anda dari melakukan banyak operasi manual yang sudah dipikirkan.

:::warning
Ketersediaan fungsionalitas ini bergantung pada pengaturan penyedia hosting Anda.
:::

Di bawah ini, kita akan menjelajahi mekanisme ini lebih detail dengan menjelaskan:

  * [aliran kerja penerapan ZDT](<https://docs.dewacloud.com/docs/#workflow>)
  * [bagaimana fungsionalitas ZDT dipastikan di platform](<https://docs.dewacloud.com/docs/#implementation>)
  * [perbandingan mode penerapan atomik dan klasik](<https://docs.dewacloud.com/docs/#comparison>)

Jadi, mari kita mulai!

## ZDT Deployment Workflow{#zdt-deployment-workflow}

Pertama-tama, kami akan mempertimbangkan secara lebih spesifik bagaimana mekanisme penerapan PHP zero-downtime yang dijelaskan di atas sebenarnya bekerja di platform - mari kita periksa semua proses ini selangkah demi selangkah dengan contoh nyata.

1\. Untuk memulai, Anda memerlukan lingkungan PHP (baik [baru](<https://docs.dewacloud.com/docs/setting-up-environment/>) atau yang sudah ada) - kami akan menggunakan Apache untuk contoh ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/03-environment-wizard.png" alt="environment wizard" width="100%"/>

2\. Selanjutnya, lanjutkan ke [penerapan](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi yang diperlukan. Selama prosedur ini, Anda perlu mencentang kotak yang sesuai pada frame konfirmasi yang tepat (tergantung pada jenis sumber proyek yang digunakan) untuk mengaktifkan opsi penerapan ZDT:

  * untuk penerapan melalui file lokal atau URL langsung

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/04-zdt-archive-deploy.png" alt="zero downtime archive deploy" width="50%"/>

:::note 
Saat melakukan ini untuk pertama kalinya untuk aplikasi yang sudah ada, diterapkan ke konteks ROOT, semua data sebelumnya biasanya akan dihapus dan ditimpa dengan instalasi aplikasi "kosong" (untuk penerapan melalui archive/URL saja).
:::

  * untuk penerapan melalui VCS (misalnya dari repo GIT/SVN atau Bitbucket):

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/05-zdt-git-deploy.png" alt="zero downtime deploy from Git" width="50%"/>

:::note 
Aktifkan tanda penerapan zero-downtime menjadi aktif hanya saat mengerahkan ke konteks ROOT dari server aplikasi PHP Anda. Jika tidak, metode klasik akan digunakan. Saat bekerja dengan repositori VCS, mode penerapan yang dipilih akan diingat dan digunakan untuk semua pembaruan otomatis lebih lanjut dari aplikasi ini hingga Anda mengubahnya secara manual. Umumnya, kami merekomendasikan untuk tidak menggunakan jalur absolut "hard-coded" dalam kode dan konfigurasi aplikasi Anda saat menggunakan fitur penerapan atomik, untuk memastikan ia tetap beroperasi terlepas dari nama direktori proyek.
:::

3\. _Selama penerapan awal_, folder **ROOT_timestamp** (yaitu _ROOT_year.mm.dd-hh.mm.ss_) dan file _ROOT_ khusus sebagai symlink ke folder ini dibuat di dalam direktori _**webroot**_ dari server aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/06-first-application-deployed.png" alt="first application deployed" width="100%"/>

Seperti biasa, aplikasi siap menangani permintaan segera setelah proses penerapan selesai.

:::note 
Jika menelusuri di dalam direktori ROOT, dikelilingi di atas, konten dari versi aplikasi yang digunakan saat ini akan terlihat, yaitu berubah setiap kali symlink dialihkan. Hal ini dapat terlihat jelas jika memasuki kontainer server aplikasi Anda melalui SSH dan menjalankan perintah daftar file format panjang untuk folder Anda, yaitu: 
```
ls -l /var/www/webroot
```
<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/07-symlink-in-ssh.png" alt="symlink-in-ssh" width="100%"/>

Dengan cara ini, Anda dapat dengan mudah menemukan symlink, karena warnanya ditandai dalam daftar, dan melihat jalur pengalihan yang sebenarnya.
:::

4\. _Selama penerapan kedua_ (yaitu saat mendeploy pembaruan), folder **ROOT_timestamp** baru dibuat - dengan cara demikian, versi aplikasi saat ini dan pelanggan, yang saat ini menggunakannya, tidak terpengaruh.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/08-second-application-deployed.png" alt="second application deployed" width="100%"/>

Tepat setelah file baru dibongkar, symlink beralih ke folder baru ini, mengalihkan semua permintaan yang baru diterima ke folder tersebut. Di sini, folder pertama disimpan untuk memproses sesi pengguna "lama" (yaitu di mana penanganan dimulai sebelum alih symlink).

:::note 
Saat memperbarui versi aplikasi menggunakan archive/URL, semua konten yang dihasilkan oleh pengguna yang terdiri (jika ada) harus dipindahkan secara manual ke direktori aplikasi yang baru dibuat dari yang lebih lama, disimpan bersama (di sini, sebelumnya operasi semacam itu menyiratkan penimpaan penuh dari semua data konteks). Jika menggunakan VCS, isi direktori aplikasi disalin sepenuhnya (baik file yang dilacak maupun yang tidak dilacak), jadi tidak ada operasi manual yang diperlukan. Namun, kami merekomendasikan untuk mengadopsi praktik penggunaan daftar .gitignore untuk file proyek yang tidak perlu, karena ini akan menghemat sejumlah sumber daya dan waktu selama pengulangan penerapan ulang.
:::

5\. _Semua penerapan atomik berikutnya_ akan dilakukan dengan cara yang serupa. Selama masing-masing dari mereka, folder proyek tertua dihapus, sementara direktori **ROOT_timestamp** baru untuk versi proyek terbaru ditambahkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/09-third-application-deployed.png" alt="second application deployed" width="100%"/>

Dengan cara ini, hanya 2 versi aplikasi yang telah diterapkan - versi terbaru dan yang sebelumnya - yang disimpan dalam server aplikasi secara bersamaan (namun, yang lebih lama juga dapat dengan mudah dihapus secara manual jika tidak lagi diperlukan). Ini memastikan tidak ada konsumsi ruang disk tambahan.

:::note 
Jika Anda ingin menghindari beberapa versi proyek agar tidak dihapus secara otomatis, cukup ganti nama folder yang sesuai sebelum menjalankan penerapan baru.
<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/10-backup-project-version.png" alt="backup project version" width="80%"/>
:::

Semua operasi sepenuhnya otomatis, sehingga tidak memerlukan keterlibatan tambahan dari pengembang, sementara penerapan itu sendiri dilakukan dengan cara "lembut", yaitu bahkan tanpa perlu memulai ulang server aplikasi dan, oleh karena itu, tanpa ada waktu henti aplikasi.

## ZDT Implementation at PHP Servers{#zdt-implementation-at-php-servers}

Dalam menelusuri detail penerapan teknis, dukungan opsi penerapan atomik di platform dipastikan oleh penyesuaian berikut, diterapkan pada instance PHP yang sesuai:

  * **Apache PHP**

Fungsionalitas yang sesuai ditangani dengan bantuan modul _**mod_realdoc**_, yang mengontrol peralihan symlink yang disebutkan di atas. Modul ini dapat dikonfigurasi tambahan (jika diperlukan) melalui dashboard platform di dalam file **conf.d > _mod_realdoc.conf_**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/11-zdt-module-for-apache.png" alt="zero downtime module for Apache" width="100%"/>

:::tip 
Di sini, parameter RealpathEvery mendefinisikan periode waktu di mana jalur tautan simbolik disimpan dan frekuensi penyegarannya. Nilai defaultnya (0, seperti yang ditentukan dalam komentar kode) diubah menjadi 2 untuk memastikan semua operasi yang diperlukan (yaitu penerapan dan peralihan) dapat diselesaikan sebelum mengalihkan permintaan ke versi proyek baru dan dengan demikian, mencegah pelambatan I/O. 

Nilai ini dapat dengan mudah diubah sesuai kebutuhan Anda (jangan lupa untuk memulai ulang node server aplikasi Anda untuk penerapannya). Namun, jika menggunakan fitur penerapan ZDT, kami tidak merekomendasikan untuk mengaturnya terlalu tinggi, karena ini akan menyebabkan penundaan dalam peralihan symlink.
:::

Untuk informasi lebih lanjut tentang detail modul ini, kunjungi halaman [source](<https://github.com/etsy/mod_realdoc>).

  * **NGINX-PHP**

Di sini, penerapan atomik dipastikan dengan cara fungsionalitas bawaan tanpa penyertaan modul tambahan - pengaturan yang sesuai dapat ditemukan pada bagian paling akhir dari file **conf > _nginx.conf_**:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/12-zdt-nginx-config.png" alt="zero downtime NGINX config" width="100%"/>

Saat ini, seperti yang Anda ketahui bagaimana semua ini bekerja, kita dapat membandingkan kedua metode penerapan klasik dan atomik.

## Comparison and Summary{#comparison-and-summary}

Untuk membuktikan manfaat pendekatan pembaruan ZDT, tes load sederhana dijalankan, dengan parameter berikut sebagai dasar:

  * _aplikasi_ - versi dasar dari WordPress CMS dideploy (yaitu distribusi defaultnya tanpa konten berat yang terdiri)
  * _alat generasi beban_ - [Apache JMeter](<http://jmeter.apache.org/>), dikonfigurasikan untuk terus mengirimkan jumlah permintaan bersamaan yang diperlukan ke aplikasi kami selama proses penerapan ulang
  * _kerangka waktu_ - tes dimulai beberapa saat sebelum proses penerapan ulang dijalankan dan berakhir beberapa detik setelah selesai

Jadi, mari kita evaluasi hasil untuk kedua metode penerapan dengan statistik sederhana yang kami terima.

### Archive Deployment{#archive-deployment}

Mari kita mulai dengan varian penerapan proyek yang paling umum digunakan, yaitu - _**klasik**_, yaitu instalasi dari satu paket terarsip tanpa opsi tambahan seperti ZDT diaktifkan:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/13-classic-deployment-graph.png" alt="classic deployment graph" width="100%"/>

Seperti yang Anda lihat, kami sebenarnya mendapatkan hasil yang cukup bagus:

  * _response time_ yang cepat dan stabil (grafik biru), hanya _1.2_ detik rata-rata
  * pemulihan yang cepat ke operabilitas normal (yaitu ketika semua permintaan yang masuk berhasil diproses (garis hijau) tanpa kesalahan (grafik merah) terjadi) setelah penerapan paket baru
  * gagal hanya muncul selama dua detik - lihat lonjakan garis merah (namun, menerapkan proyek yang lebih berat dan kaya konten akan meningkatkan interval ini untuk hotel)

Sekarang, mari kita lakukan tes yang sama dengan pesaing kedua - _**ZDT**_. Untuk persepsi perbandingan yang lebih baik, kami akan tetap menggunakan legenda warna yang sama seperti sebelumnya:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/14-zdt-deployment-graph.png" alt="zero downtime deployment graph" width="100%"/>

_Response time_ tetap stabil dan hampir tidak berubah, tetapi Anda dapat melihat peningkatan sedikit selama prosedur pembaruan, yang disebabkan oleh proses penerapan tambahan yang berjalan seiring dengan pelayan

Jadi, dengan cara demikian, kita dapat menyimpulkan bahwa penerapan tanpa waktu henti mengatasi masalah permintaan gagal selama penerapan ulang aplikasi, sambil mempertahankan waktu respons rata-rata pada tingkat yang sama. Selain itu, opsi atomik memberi Anda kemungkinan untuk menyimpan semua konten yang dihasilkan pengguna, yang terletak di dalam direktori aplikasi, dan dengan mudah memindahkannya ke versi aplikasi baru jika diperlukan (sementara metode klasik biasanya menyiratkan penerapan versi aplikasi yang sepenuhnya baru).

:::note 
Perhatikan bahwa waktu penanganan minimum untuk metode klasik jauh lebih rendah daripada untuk metode atomik dan, oleh karena itu, tampaknya memberikan kinerja yang lebih baik. Tapi jangan salah paham, karena ini hanya efek samping dari keberadaan permintaan yang gagal (di mana waktu layanan juga dihitung, meskipun tidak diproses), sementara waktu respons rata-rata hampir sama untuk kedua metode.
:::

### VCS Deployment{#vcs-deployment}

Selanjutnya, mari kita ulangi tes kami untuk jenis penerapan platform kedua (yaitu jika menggunakan repositori Git/SVN) untuk mengetahui apakah ZDT mempertahankan keuntungannya dalam kasus ini. Dan sekali lagi, kami akan mulai dengan metode _**klasik**_:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/15-vcs-classic-deployment-graph.png" alt="VCS classic deployment graph" width="100%"/>

Karena sumber penerapan ditempatkan pada sumber daya jarak jauh, ini akan memerlukan waktu sedikit lebih lama dibandingkan dengan instalasi dari arsip yang sudah diunggah, yang sebenarnya membantu kita melihat perbedaannya dengan jelas. Sekarang _response time_ memiliki penurunan yang cukup panjang (hampir _4_ detik dalam kasus kami), disebabkan oleh ketidaktersediaan aplikasi (Anda dapat melihat permintaan yang masuk mulai gagal pada waktu yang sama - ini ditunjukkan dengan lonjakan pada grafik _errors_). Segala sesuatu yang lain tetap serupa dengan tipe penerapan sebelumnya.

:::note 
Tidak seperti penerapan arsip (di mana proyek lama dihapus sepenuhnya sebelum penerapan ulang, yang akan selalu menyebabkan waktu henti), di sini prosedur pembaruan mengasumsikan perubahan hanya file yang berbeda. Oleh karena itu, Anda mungkin tidak menghadapi gangguan dalam pekerjaan layanan jika file yang harus diubah saat ini tidak digunakan.
:::

Akhirnya, tes terakhir untuk pendekatan penerapan _**ZDT**_ melalui VCS juga sesuai dengan harapan kami dengan membawa _response time_ yang stabil dengan peningkatan kecilnya selama operasi seperti penanganan sesi pengguna dan penyalinan/pembaruan proyek.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/zdt-deployment-for-php/16-vcs-zdt-deployment-graph.png" alt="VCS zero downtime deployment graph" width="100%"/>

Pada saat yang sama, Anda dapat melihat bahwa tidak ada _errors_ yang muncul dan semua permintaan yang masuk berhasil diproses.

### Conclusion{#conclusion}

Sekarang, ketika Anda memiliki semua informasi (baik teknis mentah dan yang diilustrasikan dalam grafik), pada investigasi dan telah melihat betapa mudahnya menggunakan opsi ZDT di dalam platform, saatnya untuk menyimpulkan dan membuat keputusan tentang manfaat utama yang dibawanya untuk hosting aplikasi PHP Anda:

  * ZDT tidak memerlukan sumber daya tambahan seperti instance/alat terpisah untuk diterapkan - yang Anda butuhkan hanyalah cukup ruang disk untuk menyimpan dua versi proyek (versi saat ini dan sebelumnya). Ini bisa dianggap sebagai solusi hampir gratis, terutama dibandingkan dengan sebagian besar opsi lain yang mungkin, yang mungkin memerlukan server aplikasi tambahan, penyeimbang, layanan eksternal, dll.
  * penerapan tetap sama sederhana seperti sebelumnya - tidak diperlukan konfigurasi atau intervensi manusia tambahan
  * waktu yang dibutuhkan untuk penerapan atomik persis sama dengan metode klasik, sehingga tidak diharapkan ada penundaan
  * akhirnya, Zero-Downtime deployment sesuai dengan namanya dengan memastikan sepenuhnya implisit bagi pelanggan Anda dengan prosedur pembaruan tanpa kesalahan (sebagai lawan dari varian klasik, yang, tanpa peningkatan tambahan, menyebabkan sangat banyak kesalahan bahkan dalam kasus penerapan ulang aplikasi kecil)

Dengan cara seperti ini, penggunaan penerapan ZDT membuat pembaruan proyek Anda sepenuhnya bebas rasa sakit dan tidak terlihat oleh pelanggan, membantu Anda memanfaatkan aplikasi Anda sebaik mungkin!

## Baca Juga{#whats-next}

  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [GIT/SVN Auto-Deploy](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [PHP Extensions](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)