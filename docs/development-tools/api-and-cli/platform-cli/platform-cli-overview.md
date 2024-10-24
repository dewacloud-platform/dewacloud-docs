---
sidebar_position: 1
slug: /cli
title: Platform CLI Overview
---
# Platform CLI Overview

Platform command-line interface (**CLI**) dirancang untuk menyederhanakan interaksi dengan akun Cloud Platform Anda, memungkinkan Anda untuk menjalankan perintah yang diperlukan melalui terminal mesin lokal Anda. Ini dapat menangani sebagian besar operasi yang tersedia dari jarak jauh, melengkapi tumpukan kemampuan luas yang disediakan melalui [dashboard](https://docs.dewacloud.com/docs/dashboard-guide/) dan [platform API](https://www.virtuozzo.com/application-platform-api-docs/).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-1.png" alt="platform CLI logo" width="70%"/>

Manfaat utama di sini adalah alat otomasi canggih dan relatif sederhana yang disediakan CLI untuk pengembang. Perintah teks sederhana dapat dengan mudah dikelompokkan ke dalam skrip dan, dengan cara seperti itu, membentuk mekanisme yang kuat untuk mencapai berbagai tujuan: dari otomatisasi tugas yang paling umum dan sering, hingga memantau aplikasi dan mengelola proses DevOps yang kompleks.

Jadi, mari kita mulai dengan [platform CLI installation](https://docs.dewacloud.com/docs/#cli-installation) dan ungkapkan beberapa [key points](https://docs.dewacloud.com/docs/#getting-started) penggunaannya sebelum melangkah lebih jauh.

Selanjutnya, Anda dapat mendalami dengan [platform CLI tutorials](https://docs.dewacloud.com/docs/#cli-tutorials) untuk operasi tertentu.

## CLI Installation{#cli-installation}

Untuk menginstal platform CLI di mesin lokal Anda, Anda hanya perlu menjalankan satu baris kode melalui terminal Anda:

```
curl -s ftp://ftp.jelastic.com/pub/cli/jelastic-cli-installer.sh | bash
```

:::note
Pastikan Anda memiliki Java versi 8 atau lebih tinggi yang terinstal sebelumnya. Jika Anda menggunakan Windows OS, Anda perlu menginstal lingkungan mirip Unix terlebih dahulu (misalnya Cygwin) dan menjalankan semua perintah yang sesuai dalamnya.
:::

Akibatnya, platform CLI akan diinstal ke dalam folder **jelastic** yang didedikasikan di direktori **home** Anda. Struktur folder dan skrip bash di dalamnya mewakili hierarki [platform API](https://www.virtuozzo.com/application-platform-api-docs/), yang menghasilkan kesamaan lengkap proses kerja yang sesuai, sehingga Anda dengan cepat dapat terbiasa dengan CLI kami.

## Getting Started{#getting-started}

Dasar dari platform CLI diwakili oleh arsip _.jar_ yang dapat dieksekusi dan beberapa perintah yang telah dikonfigurasi sebelumnya (skrip bash) untuk beroperasi. Dengan bantuan perintah-perintah ini, Anda dapat memantau, mengendalikan, dan mengotomatisasi siklus hidup environment Anda.

1\. Untuk memulai, autentikasi harus dilakukan. Autentikasi ini dipanggil secara otomatis saat penggunaan perintah CLI pertama, misalnya:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-2.png" alt="CLI authentication" width="100%"/>

Cukup ikuti kuesioner yang muncul, tentukan nilai yang diminta:

  * _**Platform URL**_ \- URL instalasi PaaS dalam format _app.[\{hoster_domain\}](https://docs.dewacloud.com/docs/paas-hosting-providers/)_
  * _**Email**_ \- email (login) terkait dengan akun Anda
  * _**Password**_ \- password akun Anda

Jika data yang dimasukkan benar, Anda akan melihat logo dan versi platform yang saat ini digunakan.

:::tip
Autentikasi juga dapat dimulai secara manual. Misalnya, jika Anda perlu beralih sesi saat ini dan masuk sebagai pengguna lain atau pada instalasi PaaS yang berbeda. Gunakan perintah berikut:
```
~/jelastic/users/authentication/signin --login {email} --password {password} --platformUrl {platformUrl}
```
<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-3.png" alt="CLI environment login" width="100%"/>
Di sini, nilai yang ada di dalam kurung harus diganti dengan parameter akun yang sesuai (dijelaskan di atas). Properti “result”: 0 dalam respons yang diterima (dilingkari pada gambar di atas) berarti bahwa operasi telah berhasil dilakukan dan tanpa kesalahan. Perilaku semacam itu berlaku untuk semua perintah yang Anda jalankan.
:::

2\. Informasi tentang sesi pengguna sebenarnya (yaitu, alamat platform dan kredensial Anda) disimpan dalam file _**~/.config/jelastic/jelastic.properties**_ yang dihasilkan secara otomatis. Ini secara otomatis diambil ketika diperlukan, memungkinkan Anda untuk berkonsentrasi pada operasi yang dilakukan tanpa langkah-langkah autentikasi berulang yang diperlukan.

Secara default, perintah CLI dianggap berhasil dijalankan meskipun metode API yang dipanggil mengembalikan kesalahan. Anda dapat mengubah perilaku ini dengan parameter _**jelastic.non_zero_exit_code**_ yang ditambahkan ke file konfigurasi. Ini menentukan apakah perintah CLI harus merespons dengan kode nol seperti biasa (_false_ - nilai default) atau dengan kode non-nol ketika metode API yang dieksekusi mengembalikan kesalahan (_true_).

3\. Jika Anda baru mengenal API kami dan memerlukan detail tentang struktur antarmuka baris perintahnya, Anda dapat mengakses file bantuan yang tertanam:

```
~/jelastic/help
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-4.png" alt="CLI help" width="100%"/>

Di sini, Anda dapat melihat daftar hierarkis jenis perintah (metode) yang tersedia. Setiap metode memiliki folder dengan nama yang sama dengan beberapa skrip (i.e. fungsi yang tersedia) di dalamnya.

4\. Untuk mendapatkan daftar semua operasi yang mungkin untuk metode tertentu, Anda dapat menggunakan perintah daftar sederhana untuk direktori yang sesuai, misalnya:

```
ls ~/jelastic/environment/control
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-5.png" alt="CLI environment control list" width="100%"/>

Setiap fungsi yang disajikan dapat dengan mudah dipanggil menggunakan jalur lengkapnya.

5\. Untuk informasi lebih lanjut tentang operasi tertentu, jalankan tanpa parameter untuk melihat daftar lengkap persyaratan yang terlewat.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/platform-cli-overview/platform-cli-overview-6.png" alt="CLI command help" width="100%"/>

Anda juga dapat memeriksa [API documentation](https://www.virtuozzo.com/application-platform-api-docs/) kami untuk mendapatkan informasi tambahan.

6\. Secara default, animasi "loading" ditampilkan saat menunggu pelaksanaan perintah apa pun. Ini memberikan representasi visual dari tindakan yang sedang berlangsung.

Namun, jika Anda perlu menyimpan respons ke dalam file (misalnya untuk menggunakannya dalam beberapa tugas otomatisasi), elemen ini mungkin berlebihan dan merusak pemformatan JSON. Untuk menyembunyikan animasi pemuatan, tambahkan perintah Anda dengan argumen berikut:

```
--silent true
```

Dalam cara seperti itu, output yang diterima dapat segera digunakan oleh skrip otomatisasi Anda tanpa edit tambahan apa pun.

:::tip
CLI yang diinstal secara otomatis memeriksa pembaruan. Ketika versi baru tersedia, Anda akan melihat pemberitahuan yang sesuai dengan instruksi peningkatan.
:::

Sekarang, karena Anda memiliki pengetahuan dasar tentang platform CLI, Anda dapat terus menjelajahinya sendiri.

## CLI Tutorials{#cli-tutorials}

Memastikan manajemen jarak jauh yang berfungsi penuh, platform CLI bekerja dengan semua jenis environments dan aplikasi. Ini mendukung semua tindakan yang sesuai, dari yang paling sederhana hingga yang kompleks. Untuk mengungkapkan kemampuannya dengan menunjukkan nyata, kami mempresentasikan beberapa contoh penggunaan yang paling umum:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [container volumes](https://docs.dewacloud.com/docs/cli-container-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [install JPS](https://docs.dewacloud.com/docs/cli-install-jps/)

Selanjutnya, ketika Anda mendapatkan gambaran tentang cara bekerja dengan platform CLI dan kemungkinan yang diberikannya, Anda dapat mulai membuat skrip otomatisasi Anda sendiri untuk beberapa operasi siklus hidup environment yang sering.

Anda dapat menemukan informasi lengkap tentang semua perintah dan metode yang tersedia dalam [platform API](https://www.virtuozzo.com/application-platform-api-docs/) documentation.

## Baca Juga{#whats-next}

  * [API Overview](https://docs.dewacloud.com/docs/api-overview/)
  * [API Methods](https://www.virtuozzo.com/application-platform-api-docs/)
  * [Container Redeploy](https://docs.dewacloud.com/docs/container-redeploy/)
  * [GIT & SVN Auto-Deploy](https://docs.dewacloud.com/docs/git-svn-auto-deploy/)