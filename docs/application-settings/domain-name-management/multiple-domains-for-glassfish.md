---
sidebar_position: 4
slug: /multiple-domains-for-glassfish
title: Multiple Domains for GlassFish
---
# Running Multiple Custom Domains on GlassFish Server

Mari kita lihat cara mudah mengatur beberapa nama domain untuk aplikasi Java yang di-host menggunakan GlassFish, sebuah container servlet yang menggabungkan fasilitas kelas enterprise dan efisiensi biaya open-source. GlassFish adalah server aplikasi siap enterprise dengan interoperabilitas yang andal dan berbagai fitur, termasuk dokumentasi, konfigurasi, dan administrasi yang superior.

Untuk menjalankan beberapa domain untuk situs Java Anda di server GlassFish, ikuti langkah-langkah sederhana berikut ini.

1\. Masuk ke dashboard platform dan klik tombol **Create environment**.

2\. Pilih **GlassFish** sebagai server aplikasi dan tentukan batas cloudlet untuknya. Lalu masukkan nama lingkungan Anda dan klik tombol **Create**.

![multiple domains GlassFish environment wizard](#)

3\. Dalam beberapa detik, lingkungan Anda akan berhasil dibuat dan muncul di dashboard dalam daftar lingkungan.

![GlassFish environment created](#)

4\. Setelah itu, Anda perlu menambahkan catatan CNAME atau mengatur A Record, seperti yang dijelaskan dalam dokumen [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/).

5\. Untuk mengikat nama domain kustom Anda, klik tombol **Settings** di sebelah lingkungan Anda dan pilih pengaturan **Custom domains**. Masukkan domain Anda di kolom yang sesuai (sebagai contoh, kami menggunakan _myapplication.com_ dan _myapplication.org_) dan klik tombol **Bind**.

![bind environment domains](#)

:::note
Kami telah memasukkan entri di file hosts untuk pengujian lokal, sehingga ini hanya akan berfungsi dari mesin kami, yang memiliki entri host tersebut.
:::

6\. Ketika Anda membuat lingkungan, platform mengirimkan tautan dan kredensial ke node DAS GlassFish. Masuklah ke panel admin menggunakan kredensial ini dan navigasikan ke tab **Applications** untuk melakukan deploy aplikasi Anda.

![GlassFish admin panel applications](#)

7\. Setelah aplikasi Anda berhasil dideploy, navigasikan ke blok _**Configurations > default-config > Virtual Servers**_ dan klik tombol **New** untuk membuat server virtual baru.

![GlassFish admin panel virtual servers](#)

8\. Masukkan ID untuk server baru, di kolom **Hosts** tentukan domain kustom yang terikat ke lingkungan Anda, dipisahkan dengan koma, lalu pilih listener HTTP yang sesuai dan pilih modul web yang diperlukan.

![GlassFish new virtual server](#)

9\. Simpan perubahan, dan voilà! Sekarang Anda dapat memastikan bahwa aplikasi Anda tersedia melalui semua nama domain yang telah ditentukan.

![GlassFish multiple domain names](#)

Seperti yang Anda lihat, sangat mudah untuk mengelola domain kustom aplikasi dengan alat-alat lengkap dari platform ini. Selamat mencoba!

## Baca Juga{#whats-next}

  * [GlassFish](https://docs.dewacloud.com/docs/glassfish/)
  * [GlassFish Auto-Clustering](https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/)
  * [Multiple Domains on Tomcat Server](https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)