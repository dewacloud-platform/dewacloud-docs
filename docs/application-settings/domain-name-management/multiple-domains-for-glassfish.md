---
sidebar_position: 4
slug: /multiple-domains-glassfish
title: Multiple Domains for GlassFish
---
# Running Multiple Custom Domains on GlassFish Server

Mari kita lihat cara mudah mengatur beberapa nama domain untuk aplikasi Java yang di-host menggunakan GlassFish, sebuah container servlet yang menggabungkan fasilitas kelas enterprise dan efisiensi biaya open-source. GlassFish adalah server aplikasi siap enterprise dengan interoperabilitas yang andal dan berbagai fitur, termasuk dokumentasi, konfigurasi, dan administrasi yang superior.

Untuk menjalankan beberapa domain untuk situs Java Anda di server GlassFish, ikuti langkah-langkah sederhana berikut ini.

1\. Masuk ke dashboard platform dan klik tombol **Create environment**.

2\. Pilih **GlassFish** sebagai server aplikasi dan tentukan batas cloudlet untuknya. Lalu masukkan nama lingkungan Anda dan klik tombol **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/01-environment-wizard.png" alt="multiple domains GlassFish environment wizard" max-width="100%"/>

3\. Dalam beberapa detik, lingkungan Anda akan berhasil dibuat dan muncul di dashboard dalam daftar lingkungan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/02-glassfish-environment-created.png" alt="GlassFish environment created" max-width="100%"/>

4\. Setelah itu, Anda perlu menambahkan catatan CNAME atau mengatur A Record, seperti yang dijelaskan dalam dokumen [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/).

5\. Untuk mengikat nama domain kustom Anda, klik tombol **Settings** di sebelah lingkungan Anda dan pilih pengaturan **Custom domains**. Masukkan domain Anda di kolom yang sesuai (sebagai contoh, kami menggunakan _myapplication.com_ dan _myapplication.org_) dan klik tombol **Bind**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/03-bind-environment-domains.png" alt="bind environment domains" max-width="100%"/>

:::note
Kami telah memasukkan entri di file hosts untuk pengujian lokal, sehingga ini hanya akan berfungsi dari mesin kami, yang memiliki entri host tersebut.
:::

6\. Ketika Anda membuat lingkungan, platform mengirimkan tautan dan kredensial ke node DAS GlassFish. Masuklah ke panel admin menggunakan kredensial ini dan navigasikan ke tab **Applications** untuk melakukan deploy aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/04-glassfish-admin-panel-applications.png" alt="GlassFish admin panel applications" max-width="100%"/>

7\. Setelah aplikasi Anda berhasil dideploy, navigasikan ke blok _**Configurations > default-config > Virtual Servers**_ dan klik tombol **New** untuk membuat server virtual baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/05-glassfish-admin-panel-virtual-servers.png" alt="GlassFish admin panel virtual servers" max-width="100%"/>

8\. Masukkan ID untuk server baru, di kolom **Hosts** tentukan domain kustom yang terikat ke lingkungan Anda, dipisahkan dengan koma, lalu pilih listener HTTP yang sesuai dan pilih modul web yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/06-glassfish-new-virtual-server.png" alt="GlassFish new virtual server" max-width="100%"/>

9\. Simpan perubahan, dan voilà! Sekarang Anda dapat memastikan bahwa aplikasi Anda tersedia melalui semua nama domain yang telah ditentukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-glassfish/07-glassfish-multiple-domain-names.png" alt="GlassFish multiple domain names" max-width="100%"/>

Seperti yang Anda lihat, sangat mudah untuk mengelola domain kustom aplikasi dengan alat-alat lengkap dari platform ini. Selamat mencoba!

## Baca Juga{#whats-next}

  * [GlassFish](https://docs.dewacloud.com/docs/glassfish/)
  * [GlassFish Auto-Clustering](https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/)
  * [Multiple Domains on Tomcat Server](https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)