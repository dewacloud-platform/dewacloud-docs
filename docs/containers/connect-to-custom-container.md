---
sidebar_position: 6
slug: /connect-to-custom-container
title: Connect to Custom Container
---

# How to Connect to Your Custom Container{#how-to-connect-to-your-custom-container}

Integrasi [Containers](<https://docs.dewacloud.com/docs/container-types/>) ke dalam platform adalah salah satu layanan yang paling penting dan banyak diminati. Sintesis portabilitas container, bersama dengan pengelolaan platform yang fleksibel, menarik bagi pengembang dan memungkinkan untuk hosting dan pemeliharaan semua jenis aplikasi yang tersedia dalam Docker templates dengan mudah.

Tutorial berikut membahas prinsip-prinsip utama bekerja dengan aplikasi berbasis Docker, yang mungkin menjadi titik minat bagi pengembang pemula dan menengah.

Di bawah ini kita akan mendapatkan wawasan yang sangat rinci tentang cara menghubungkan ke container di platform, mempertimbangkan peluang internal dan eksternal, dan mengamati di mana menemukan informasi container dasar yang diperlukan untuk pembentukan koneksi tersebut.

Jadi, mari kita lihat cara untuk:

  * [mengatur koneksi internal container](<https://docs.dewacloud.com/docs/#internal-connection>)
  * [mengakses container dari luar](<https://docs.dewacloud.com/docs/#external-connection>)

## Internal Connection{#internal-connection}

Setiap container di platform secara otomatis mendapatkan nama domain internal yang unik dan alamat IP internal segera setelah pembuatan. Selanjutnya, parameter-parameter ini dapat digunakan untuk mengakses containers di dalam batasan satu Cloud (misalnya, untuk membangun koneksi antara mereka melalui jaringan internal platform).

1\. Opsi pertama yang perlu dipertimbangkan jika ada kebutuhan untuk mengatur interkoneksi antara containers adalah fungsionalitas bawaan dari [container linking](<https://docs.dewacloud.com/docs/container-links/>). Ini memungkinkan untuk menghubungkan containers dari berbagai layer dalam satu environment untuk mentransfer informasi environment variables secara aman dari image Docker sumber ke penerima tanpa membuka port secara eksternal.

Untuk itu, Anda hanya perlu memilih layer yang diperlukan dan menentukan alias untuk denominasi koneksi (sementara semua variabel yang sesuai akan mendapatkan prefix yang sesuai dengannya):

<img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-1.png" alt="container linking" max-width="100%"/>

Jangan lupa untuk **Save** dan **Apply** perubahan yang telah Anda buat.

Setelah itu, Anda dapat merujuk ke bagian [Variables](<https://docs.dewacloud.com/docs/container-variables/>) dari pengaturan container Anda dan menyesuaikan salah satu dari mereka secara terpisah sesuai kebutuhan. Namun, mengubah nilai environment variable untuk container, yang sudah terhubung ke yang lain, juga akan menyebabkan pembaruan otomatis dalam container yang diterapkan link ini.

2\. Jika ada kebutuhan untuk membangun koneksi internal dari jenis lain (misalnya, yang memerlukan beberapa penyesuaian manual melalui file konfigurasi yang terdiri), Anda memerlukan nama domain container yang tepat atau alamat IP yang dapat diakses melalui jaringan internal platform.

Informasi yang sesuai dapat diperoleh dengan dua cara:

  * melalui notifikasi email yang Anda terima setelah pembuatan environment. Nama domain internal yang sesuai dan alamat IP terdaftar dalam bagian dengan data admin container: !
  <img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-2.png" alt="custom container email notification" width="80%"/> Di sini, nama domain container ditampilkan di string _Access URL_ dan alamat IP internalnya - dalam baris _IP_ di bawah.

  * di dalam dashboard platform, data yang sama dapat ditemukan dengan cara berikut:

    * klik tombol **Open in Browser** di sebelah container yang Anda minati untuk membuka antarmuka node yang diperlukan di tab browser baru, sehingga Anda dapat dengan mudah menyalin domainnya dari bilah alamat.
    <img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-3.png" alt="container domain name" max-width="100%"/> Atau, cukup klik kanan pada string domain di bawah nama environment (dilingkari di atas) dan salin link yang diberikan.
    * alamat IP internal node dapat dilihat melalui memperluas daftar **Additionally** untuk container yang diperlukan, seperti yang ditunjukkan pada gambar di bawah. 
    <img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-4.png" alt="container internal IP" max-width="100%"/>

Dengan cara ini, informasi yang diperoleh dapat digunakan untuk membangun koneksi internal ke containers Anda di platform.

## External Connection{#external-connection}

Untuk mengakses container Anda dari luar platform (misalnya, dari Internet), Anda memiliki solusi berikut:

1\. Jika layanan atau aplikasi Anda, yang dijalankan dalam container, mendengarkan port _80_, maka itu akan otomatis diekspos ke jaringan eksternal (melalui nama domain yang ditugaskan) melalui [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-5.png" alt="custom container" max-width="100%"/>

Dalam kasus seperti itu, Anda hanya perlu mengklik **Open in Browser** untuk node terkait untuk meluncurkannya (opsi ini berfungsi untuk koneksi HTTP).

:::note
Jika container Anda tidak memiliki IP eksternal yang dilampirkan, platform melakukan redirect port otomatis. Ini berarti jika aplikasi mendengarkan port custom pada tingkat TCP, platform akan mencoba mendeteksinya secara otomatis dan meneruskan semua permintaan masuk ke nomor port ini. Akibatnya, dalam banyak kasus, aplikasi atau layanan Anda akan menjadi tersedia di Internet di bawah domain node terkait segera setelah pembuatan. Namun, jika Anda ingin melarang kemungkinan seperti itu, Anda dapat menyatakan aturan yang sesuai dalam pengaturan firewall container Anda.
:::

2\. Untuk implementasi yang lebih kompleks, platform menyediakan fungsionalitas [endpoints](<https://docs.dewacloud.com/docs/endpoints/>) khusus (tersedia di bagian dengan nama yang sama dalam **Settings** environment mana pun):

<img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-6.png" alt="container endpoints" max-width="100%"/>

Ini memungkinkan untuk membagikan port privat yang diperlukan pada container Anda melalui port publik acak yang dipilih di Shared Load Balancer platform, sehingga dapat diakses melalui **Access URL** yang disediakan.

3\. Dan opsi terakhir, yang memberikan kebebasan maksimal (memungkinkan, misalnya, untuk mengamankan koneksi Anda dengan [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>), menghilangkan batasan pada jumlah koneksi yang bersamaan, dll.) adalah melampirkan alamat [public IP](<https://docs.dewacloud.com/docs/public-ip/>) ke container Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/connect-to-custom-container/connect-7.png" alt="container public IP" max-width="100%"/>

Dengan cara ini, aplikasi Anda dapat dikonfigurasi untuk mendengarkan port yang Anda butuhkan dan, dengan cara seperti itu, menjadi dapat diakses melalui jaringan eksternal.

**Catatan:** Opsi Public IP adalah add-on berbayar. Biaya tepat untuk penggunaannya dapat dilihat dengan mengarahkan kursor ke widget harga di bagian kanan wizard topologi Anda atau melalui navigasi ke _[Quotas & Pricing](<https://docs.dewacloud.com/docs/resource-consumption/#how-much-do-resources-cost>)_ > _Pricing_ > _Options_ tab.

Itu saja! Sekarang Anda dapat memanfaatkan opsi koneksi yang paling sesuai di antara yang dijelaskan saat bekerja dengan Docker containers Anda.

Jika Anda menghadapi masalah saat mengatur koneksi ke container Anda di platform, jangan ragu untuk mencari bantuan dari pakar teknis kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Custom Container SSH Access](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>) 
  * [Container Linking](<https://docs.dewacloud.com/docs/container-links/>) 
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>) 
  * [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)