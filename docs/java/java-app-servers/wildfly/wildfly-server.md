---
sidebar_position: 1
slug: /wildfly-server
title: WildFly Server
---

# WildFly Application Server

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-1.png" alt="WildFly logo" width="20%"/>

**[WildFly](<https://wildfly.org/>)** adalah runtime aplikasi modern yang fleksibel, ringan, dan dikelola, yang ditulis dalam Java dan mengimplementasikan standar dan teknologi terbaru dari spesifikasi Java Platform Enterprise Edition (Java EE). WildFly sepenuhnya gratis dan open source, tersedia untuk dijalankan di berbagai platform. Di antara fitur utama dari server aplikasi ini adalah:

- runtime yang dapat disesuaikan berdasarkan subsistem yang dapat dipasang, yang dapat diintegrasikan atau dihilangkan sesuai kebutuhan
- dukungan Java EE8 untuk mengimplementasikan standar Java perusahaan terbaru dalam kerangka kerja yang mudah dikonsumsi
- pendekatan modular dengan kemampuan untuk memulai setiap layanan secara terpisah
- cepat, ringan, dan dioptimalkan untuk performa tertinggi

Untuk membuat server aplikasi **WildFly** untuk hosting proyek Java di dalam platform, ikuti langkah-langkah sederhana di bawah ini.

:::note
Template ini menggunakan daemon inisialisasi modern systemd.
:::

## Membuat WildFly Server{#creating-wildfly-server}

1\. Masuk ke akun PaaS Anda dan klik tombol **New Environment** di sudut kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-2.png" alt="new environment button" width="60%"/>

2\. Dalam wizard topologi lingkungan yang terbuka, navigasikan ke tab **Java** dan pilih **WildFly** (versi _**10-16**_ didukung) dari daftar server aplikasi yang tersedia. Kemudian, tentukan batas sumber daya yang dialokasikan menggunakan penggeser cloudlet, pilih [region](<https://docs.dewacloud.com/docs/environment-regions/>) (jika tersedia beberapa) dan edit nama lingkungan Anda.

:::note
WildFly tidak kompatibel dengan Java 6 dan 7; oleh karena itu versi ini tidak tersedia karena persyaratan sumber daya WildFly yang minimal, sangat disarankan untuk mengalokasikan lebih dari 1 cloudlet untuk node ini. Jika tidak, Anda dapat mengalami kinerja server yang rendah dan bahkan kegagalan server. WildFly dapat diluncurkan dalam mode Standalone menggunakan file konfigurasi yang didefinisikan dalam variabel lingkungan STANDALONE_MODE_CONFIG. Platform menyediakan dukungan dari pengaturan WildFly servers Auto-Clustering dalam mode Managed Domain melalui switcher yang sesuai di wizard topologi.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-3.png" alt="WildFly server topology wizard" width="100%"/>

Klik tombol **Create** ketika sudah siap.

3\. Tunggu beberapa menit hingga lingkungan Anda dibuat dan klik tombol **Open in Browser** di sebelahnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-4.png" alt="WildFly open in browser" width="100%"/>

4\. Halaman standar WildFly menyuguhkan beberapa tautan berguna untuk membantu Anda memulai.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-5.png" alt="WildFly home page" width="100%"/>

Untuk mengakses _**WildFly Administration Console**_ , klik tautan yang sesuai (lingkaran dalam gambar di atas) atau dapatkan URL dari email (diterima setelah pembuatan server) bersama dengan kredensial akses lainnya.

Selain itu, Anda dapat membuat [koneksi SSH](<https://docs.dewacloud.com/docs/ssh-access/>) ke server WildFly Anda dan menggunakan utilitas bawaan [WildFly CLI](<https://docs.wildfly.org/16/Admin_Guide.html#CLI_Recipes>) untuk mengelola.

## Standalone Mode{#standalone-mode}

Server aplikasi WildFly dijalankan dalam mode “_standalone_” secara default sehingga setiap instance adalah proses independen berdasarkan file konfigurasi yang didefinisikan melalui [variabel lingkungan](<https://docs.dewacloud.com/docs/environment-variables/>) _**STANDALONE_MODE_CONFIG**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/wildfly-server/wildfly-server-6.png" alt="WildFly standalone config variable" width="100%"/>

Ada empat profil bersertifikat untuk mode standalone:

- _**standalone.xml**_ (_default_) - konfigurasi untuk _Java Enterprise Edition 8 Web_ dengan teknologi yang diperlukan
- _**standalone-full.xml**_ \- konfigurasi untuk _Java Enterprise Edition 8 Full_ dengan semua teknologi EE 8
- _**standalone-ha.xml**_ \- konfigurasi untuk _Java Enterprise Edition 8 Web_ dengan ketersediaan tinggi
- _**standalone-full-ha.xml**_ \- konfigurasi untuk _Java Enterprise Edition 8 Full_ dengan ketersediaan tinggi

Dalam kasus menggunakan konfigurasi HA (dua opsi terakhir), protokol _**[jgroups](<http://www.jgroups.org/>)**_ digunakan untuk pesan antara node. Ini dikonfigurasi untuk menggunakan otorisasi dengan token MD5 dan enkripsi asimetris secara default. Implementasi seperti ini mencegah node yang tidak berwenang untuk dapat bergabung dalam kluster dan non-anggota dari berkomunikasi dengan anggota kluster.

:::warning
Sangat disarankan untuk mengubah parameter nilai otorisasi default dalam file konfigurasi HA standalone Anda di lingkungan produksi.
:::

Ini menyimpulkan tutorial kami tentang instalasi server WildFly! Sekarang, Anda dapat mengkonfigurasinya sesuai kebutuhan dan melanjutkan ke [deployment aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>).

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)