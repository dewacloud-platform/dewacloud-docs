---
sidebar_position: 4
slug: /java-multiple-domains-for-glassfish
title: Multiple Domains for GlassFish
---

# Running Multiple Custom Domains on GlassFish Server

Mari kita lihat bagaimana cara mudah mengatur beberapa nama domain untuk aplikasi Java yang di-hosting dengan servlet GlassFish container, yang menggabungkan fasilitas kelas enterprise dan efisiensi biaya open-source. Ini adalah server aplikasi siap-enterprise dengan interoperabilitas sejati dan berbagai fitur termasuk dokumentasi, konfigurasi, dan administrasi yang unggul.

Untuk menjalankan beberapa domain untuk situs Java Anda di server GlassFish, cukup ikuti langkah-langkah sederhana berikut.

1\. Masuk ke dashboard platform dan klik tombol **Create environment**.

2\. Pilih **GlassFish** sebagai server aplikasi dan tentukan batas cloudlet untuknya. Kemudian ketik nama lingkungan Anda dan klik tombol **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-1.png" alt="multiple domains GlassFish environment wizard" width="100%"/>

3\. Dalam hitungan detik, environment Anda akan berhasil dibuat dan muncul di dashboard dalam daftar environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-2.png" alt="GlassFish environment created" width="100%"/>

4\. Setelah itu Anda perlu menambahkan catatan CNAME atau mengatur A Record, seperti yang dijelaskan dalam dokumen [Custom Domains](<https://docs.dewacloud.com/docs/custom-domains/>).

5\. Untuk menghubungkan nama domain kustom Anda, klik tombol **Settings** di sebelah environment Anda dan pilih pengaturan Custom domains. Kemudian masukkan domain Anda di bidang yang sesuai (kami akan menggunakan _myapplication.com_ dan _myapplication.org_ sebagai contoh) dan klik tombol **Bind**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-3.png" alt="bind environment domains" width="100%"/>

:::note

Kami telah memasukkan entri ke dalam file host kami untuk pengujian lokal sehingga ini hanya akan berfungsi dari mesin kami, yang memiliki entri host tersebut.

:::

6\. Ketika Anda telah membuat environment, platform mengirimi Anda tautan dan kredensial ke node GlassFish DAS. Masuk ke panel admin menggunakan kredensial ini dan navigasikan ke tab **Applications** untuk mendeploy aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-4.png" alt="GlassFish admin panel applications" width="100%"/>

7\. Setelah aplikasi Anda berhasil dideploy, navigasikan ke blok _**Configurations > default-config > Virtual Servers**_ dan klik tombol **New** untuk membuat server virtual baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-5.png" alt="GlassFish admin panel virtual servers" width="100%"/>

8\. Masukkan ID untuk server baru, di bidang **Hosts** tentukan domain kustom yang terikat pada environment Anda yang dipisahkan oleh koma, lalu pilih http listener yang sesuai dan pilih modul web yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-6.png" alt="GlassFish new virtual server" width="100%"/>

9\. Simpan perubahan dan voilà! Sekarang Anda dapat memastikan bahwa aplikasi Anda tersedia melalui semua nama domain yang ditentukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/multiple-domains-for-glassfish/multiple-domains-glassfish-7.png" alt="GlassFish multiple domain names" width="100%"/>

Seperti yang Anda lihat, sangat mudah untuk mengelola domain kustom aplikasi dengan set alat platform yang kaya. Nikmati!

## Baca Juga{#whats-next}

  * [GlassFish](<https://docs.dewacloud.com/docs/glassfish/>)
  * [GlassFish Auto-Clustering](<https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/>)
  * [Multiple Domains on Tomcat Server](<https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/>)
  * [Multiple Domains with Public IP](<https://docs.dewacloud.com/docs/multiple-domains/>)