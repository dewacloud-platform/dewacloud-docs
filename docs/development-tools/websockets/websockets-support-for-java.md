---
sidebar_position: 2
slug: /websockets-support-for-java
title: WebSockets Support for Java
---
# Dukungan WebSockets untuk Java

**Protokol WebSocket** diimplementasikan untuk menggantikan mekanisme komunikasi bidirectional yang ada yang menggunakan HTTP sebagai lapisan transportasi, karena HTTP pada awalnya tidak dimaksudkan untuk digunakan untuk tujuan ini. Teknologi baru ini memastikan pembentukan koneksi TCP full-duplex tunggal antara klien dan server, di mana pesan diteruskan secara instan dengan overhead yang sangat sedikit, baik hulu maupun hilir sekaligus. Pada saat yang sama, teknologi WebSockets dirancang untuk bekerja pada port HTTP standar (80 dan 443) dan untuk mendukung proxy HTTP serta perantara, yang mewakili kompromi antara efisiensi dan keandalan.

Platform ini menyediakan dukungan WebSockets yang maju dan lengkap dengan cara mengintegrasikan teknologi ini ke dalam [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) dan [NGINX balancer node](<https://docs.dewacloud.com/docs/load-balancing/>), sehingga Anda dapat menggunakannya bahkan tanpa alamat IP eksternal yang terhubung ke server Anda. Cara termudah untuk mengonfigurasi dukungan WebSockets untuk aplikasi Anda adalah dengan menempatkan NGINX balancer di depannya - alur kerja detail dapat dilihat [di sini](<https://docs.dewacloud.com/docs/websockets/>).

Namun demikian, jika metode ini bertentangan dengan persyaratan Anda, penggunaan protokol WebSockets juga didukung oleh semua **Java application server** yang disediakan di platform. Implementasi WebSockets untuk Java umumnya dilakukan melalui konfigurasi aplikasi Anda sendiri dan tidak memerlukan konfigurasi server khusus apa pun, sehingga Anda hanya dibatasi oleh keterampilan pemrograman, ketekunan, dan imajinasi Anda saat ini.

Satu-satunya pengecualian adalah **GlassFish**, karena memerlukan beberapa konfigurasi sisi server untuk pengaktifan dukungan WebSockets. Jadi, mari kita pelajari bagaimana hal ini dapat dilakukan - cukup ikuti instruksi sederhana di bawah ini.

## Create an Environment and Deploy a Project{#create-an-environment-and-deploy-a-project}

1\. Masuk ke dashboard platform dengan login dan password Anda.

2\. Klik **New environment** di bagian kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-1.png" alt="WebSockets Java new env" width="50%"/>

3\. Dalam jendela topologi environment yang muncul, beralihlah ke tab **Java** dan pilih **GlassFish** sebagai server aplikasi Anda. Kemudian setel batas sumber daya untuk itu dengan bantuan slider cloudlet di bagian _Vertical scaling_ wizard, ketik nama environment Anda (misalnya, _java-websockets_) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-2.png" alt="WebSockets Java env wiz" width="100%"/>

4\. Dalam beberapa menit environment Anda dengan server GlassFish akan dibuat dan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-3.png" alt="WebSockets Java env created" width="100%"/>

5\. Sekarang, Anda dapat mem-deploy aplikasi Anda, yang memerlukan dukungan protokol WebSockets, ke environment Anda. Ini dapat dilakukan melalui [arsip lokal/URL](<https://docs.dewacloud.com/docs/deployment-guide/>), atau, jika Anda lebih suka menggunakan repositori VCS jarak jauh, cukup tambahkan node **Maven** ke topologi environment Anda dan ikuti [panduan ini](<https://docs.dewacloud.com/docs/java-vcs-deployment/>).

Sebagai hasilnya, aplikasi yang Anda deploy akan terdaftar di kolom panel yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-4.png" alt="WebSockets Java deployed" width="100%"/>

## Enable GlassFish WebSockets Support{#enable-glassfish-websockets-support}

Langkah berikutnya yang perlu Anda lakukan adalah mengaktifkan dukungan WebSockets untuk server aplikasi GlassFish Anda. Ini harus dilakukan melalui **Administration Console**-nya, jadi langkah-langkah yang diperlukan adalah sebagai berikut:

1\. Navigasikan ke panel admin GlassFish, yang dapat diakses melalui dashboard (dengan mengklik tombol **Additionally** untuk server ini di environment Anda dan memilih opsi **Admin panel > Login** dalam daftar yang muncul) atau tautan langsung (yang dikirimkan platform kepada Anda melalui email setelah pembuatan environment).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-5.png" alt="WebSockets Java admin panel" width="100%"/>

2\. Di tab browser yang baru dibuka, tentukan kredensial yang telah Anda terima dalam email yang sesuai dan lanjutkan dengan tombol **Login**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-6.png" alt="WebSockets Java login" width="100%"/>

3\. Setelah masuk, navigasikan ke bagian **Configurations > gfcluster-config > Network Config > Protocols > http-listener-1** di dalam menu sebelah kiri. Kemudian beralih ke tab **HTTP** dan centang kotak untuk opsi _Websockets Support_ di bagian bawah halaman.

Jangan lupa untuk **Save** pengaturan baru!

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-7.png" alt="WebSockets Java webs supp" width="100%"/>

4\. Kembali ke panel dashboard Anda dan **Restart** GlassFish untuk menerapkan perubahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/websockets/websockets-support-for-java/websockets-java-8.png" alt="WebSockets Java restart" width="100%"/>

Karena semua konfigurasi telah selesai sekarang, Anda dapat **Open** aplikasi Anda **in Browser** dan memastikan bahwa itu berfungsi dengan baik. Nikmati!

## Baca Juga{#whats-next}

  * [Dukungan Websockets](<https://docs.dewacloud.com/docs/websockets/>)
  * [Dukungan Websockets untuk PHP](<https://docs.dewacloud.com/docs/websockets-apache-nginx/>)
  * [GlassFish Application Server](<https://docs.dewacloud.com/docs/glassfish/>)