---
sidebar_position: 2
slug: /jps-overview
title: JPS Overview
---
# Packaging Standard untuk Otomatisasi CI/CD

**Packaging Standard** (juga dikenal sebagai JPS) adalah alat untuk menyiapkan template aplikasi dan add-on siap pakai. Solusi prasetel seperti ini dapat diintegrasikan ke dalam platform apa pun hanya dengan sekali klik, menyederhanakan instalasi dan konfigurasi untuk aplikasi jenis apa pun.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/jps-overview/jps-overview-1.png" alt="JPS" width="40%"/>

Paket JPS didasarkan pada manifest instalasi JSON. File ini digunakan untuk menggambarkan proses pembuatan environment, deployment dan konfigurasi aplikasi, alokasi sumber daya, dan pengaturan batas skala untuk setiap server dalam sebuah environment.

Teknologi ini memungkinkan untuk [mengotomatisasi skenario CI/CD yang kompleks](<https://docs.dewacloud.com/docs/#application-cicd-automation-with-cloud-scripting>) dan mendistribusikan solusi siap pakai Anda dengan mudah menggunakan [widget instalasi satu klik](<https://docs.dewacloud.com/docs/#widget-for-instant-application-deploy>).

## Otomatisasi CI/CD Aplikasi dengan Cloud Scripting{#application-cicd-automation-with-cloud-scripting}

Ditenagai oleh bahasa [Cloud Scripting](<http://docs.cloudscripting.com/>) yang dikembangkan secara khusus oleh platform, teknologi packaging JPS dapat membantu sepenuhnya mengotomatisasi proses pengiriman aplikasi - misalnya, untuk secara otomatis mentransfer setiap versi aplikasi baru melalui tahap pengembangan, pengujian, dan produksi. Ini dijamin dengan menerapkan logika pemrosesan proyek yang diperlukan melalui penghubung berbagai metode [API platform](<https://docs.dewacloud.com/docs/application-platform-api-docs/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/jps-overview/jps-overview-2.png" alt="cloud scripting" width="40%"/>

Karena banyaknya opsi penyetelan dan otomatisasi yang tersedia, Anda dapat menerapkan hampir semua skenario yang diperlukan melalui Cloud Scripting - dari menjalankan operasi yang cukup sederhana hingga memelihara aplikasi dan klaster terdistribusi yang kompleks. Untuk mencapai ini dan membangun solusi khusus Anda sendiri, dengan CS Anda dapat:

  * mendefinisikan terlebih dahulu properti konfigurasi yang diperlukan dan menyatakan perilaku aplikasi yang diharapkan dengan bantuan [actions](<https://docs.cloudscripting.com/creating-manifest/actions/>) yang sesuai
  * mengaitkan operasi ini ke [events](<https://docs.cloudscripting.com/creating-manifest/events/>) siklus hidup aplikasi tertentu
  * mengambil data [user input](<https://docs.cloudscripting.com/creating-manifest/placeholders/#input-parameters>) dan menggunakannya di dalam
  * menjalankan [custom scripts](<https://docs.cloudscripting.com/creating-manifest/custom-scripts/>) langsung dalam container yang dibuat

:::note 
Sebelum menyiapkan paket Anda sendiri, kami sarankan untuk mengenal sejumlah solusi siap pakai di Koleksi JPS. Salah satu dari mereka dapat dengan mudah diintegrasikan ke dalam proyek Anda atau digunakan sebagai basis untuk membuat solusi otomatisasi Anda sendiri. 
:::

## Widget untuk Deploy Aplikasi Instan{#widget-for-instant-application-deploy}

Setelah aplikasi Anda dikemas dalam JPS, Anda dapat menyediakan **widget** untuk developer lain agar dapat melakukan instalasi dengan cepat. Ini membantu meningkatkan efisiensi distribusi aplikasi dan meningkatkan daya tarik umum karena kesederhanaan deployment. Secara bersamaan, pendekatan semacam ini mengurangi pengeluaran untuk dukungan proyek Anda dan manajemen pasca-instalasi.

Widget berisi **manifest** (atau tautan ke sumbernya) dengan deskripsi cloud environment yang dibutuhkan untuk aplikasi ini, serta instruksi tentang instalasi dan konfigurasi otomatisnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/jps-overview/jps-overview-3.png" alt="application manifest to widget" width="40%"/>

Untuk menginstal aplikasi yang telah dikemas ke dalam platform, pengguna perlu **memulai instalasi** melalui widget yang dipilih dan menerima URL konfirmasi melalui email yang ditentukan. Setelah tautan ini diikuti, platform secara otomatis akan menganalisis dan memproses data manifest untuk membuat atau menyesuaikan environment yang sesuai dan menghubungkan node yang diperlukan. Hasilnya, pengguna mendapatkan aplikasi berjalan yang sepenuhnya dikonfigurasi tanpa langkah konfigurasi tambahan yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/jps-overview/jps-overview-4.png" alt="widget to application" width="40%"/>

Gunakan dokumen di bawah ini untuk mendapatkan informasi tentang cara menyusun manifest aplikasi dengan benar dan membuat widget instalasi tersebut:

  * [Application Manifest](<https://docs.dewacloud.com/docs/application-manifest/>)
  * [Contoh Application Manifest](<https://docs.cloudscripting.com/samples/>)
  * [Placeholders](<https://docs.cloudscripting.com/creating-manifest/placeholders/>)
  * [Koleksi JPS](<https://github.com/jelastic-jps>)

:::note 
Setelah mengemas aplikasi Anda sendiri sesuai dengan instruksi kami, Anda dapat menghubungi penyedia hosting Anda dan melakukan negosiasi untuk menambahkan JPS Anda ke dalam solusi di dalam Marketplace pada dashboard. Dengan cara ini, aplikasi Anda akan tersedia untuk deployment otomatis untuk semua pengguna dalam platform hosting Anda. 
:::

## Baca Juga{#whats-next}

  * [Cloud Scripting](<https://docs.cloudscripting.com/>)
  * [Application Manifest](<https://docs.dewacloud.com/docs/application-manifest/>)
  * [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>)
