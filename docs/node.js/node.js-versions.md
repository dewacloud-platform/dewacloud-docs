---
sidebar_position: 2
slug: /nodejs-versions
title: Node.js Versions
---

# Versi Node.js

Platform ini memungkinkan untuk memilih sebelumnya rilis server aplikasi NodeJS utama terbaru dan _process_ serta _package_ manager yang diperlukan. Saat ini, versi berikut dari stack ini tersedia:

- _14.21.3_
- _16.20.0_
- _18.20.4_
- _20.17.0_
- _21.7.3_
- _22.5.1_
- _22.8.0_

Daftar rilis terbaru yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](https://docs.dewacloud.com/software-stacks-versions/#engines) yang diperbarui secara reguler (mingguan).

Versi Node.js yang diperlukan dapat dipilih saat membuat [environment baru](#create-nodejs-environment), serta diubah untuk [yang sudah ada](#change-nodejs-version).

## Membuat Environment Node.js{#create-nodejs-environment}

1. Klik tombol **New Environment** di bagian atas dashboard untuk membuka topology wizard:

![create new environment button](#)

2. Beralih ke tab bahasa pemrograman _**Node.js**_ dan pilih versi server yang diperlukan menggunakan daftar drop-down di bagian tengah kerangka:

![topology wizard select Node.js version](#)

3. Selanjutnya, Anda dapat memilih [process manager](https://docs.dewacloud.com/nodejs-process-managers/) yang diinginkan (_forever_, _npm_, atau _pm2_) melalui daftar drop-down _tags_ (dilingkari dalam gambar di bawah):

![topology wizard select Node.js process manager](#)

Node.js process manager membantu mengontrol siklus hidup aplikasi Anda, menyediakan cara sederhana untuk memulai, menghentikan, dan memulai ulang proses pada node. Selain itu, ini dapat dikonfigurasikan untuk menjalankan ulang skrip secara otomatis jika terjadi kegagalan pemulaan aplikasi atau pembaruan kode:

- _**npm**_ - memungkinkan pengelolaan modul aplikasi dan paket tambahan melalui file konfigurasi _package.json_
- _**forever**_ - mengelola proses node (mis. memulai, menghentikan, me-restart layanan) agar layanan tetap hidup dengan menjalankannya secara terus-menerus
- _**pm2**_ - menyediakan beberapa opsi khusus (seperti pemantauan, keseimbangan beban, deployment, dll.), memungkinkan untuk mengelola aplikasi Anda secara lebih efektif

Tentukan parameter server dan environment lainnya (mis. batas cloudlet, [region](https://docs.dewacloud.com/environment-regions/), nama environment, dll.) dan klik tombol **Create** di pojok bawah kanan kerangka.

## Mengubah Versi Node.js{#change-nodejs-version}

Anda juga dapat mengganti versi server NodeJS dan process manager setelahnya, untuk environment yang sudah ada.

1. Akses dialog [redeploy container(s)](https://docs.dewacloud.com/docs/container-redeploy/) melalui salah satu cara:

- Mengklik tombol **Change Environment Topology** di sebelah environment yang sesuai.
  
  ![change environment topology button](#) Dalam kerangka yang terbuka, pilih untuk mengedit _Nodejs server version_ atau _tag_ Anda (mis. klik ikon pensil di salah satu kolom yang sesuai). 
  
  ![topology wizard Node.js redeploy](#)

- Memilih tombol **Redeploy Container(s)** di sebelah node yang diperlukan (atau lapisan environment yang sesuai, untuk memperbarui semua container yang terdiri sekaligus).

  ![redeploy containers button](#)

2. Dalam dialog _**Redeploy container(s)**_ yang terbuka, konfigurasikan ulang opsi-opsi berikut:

- _**Tag**_ - menyediakan pilihan versi Node.js yang diperlukan dan process manager yang diinginkan
- _**Keep volumes data**_ - memungkinkan penyimpanan data dalam [volumes](https://docs.dewacloud.com/container-volumes/)
- _**Simultaneous**_ or _**Sequential deployment with delay**_ (khusus untuk [scaled servers](https://docs.dewacloud.com/horizontal-scaling/)) - menentukan apakah semua container dalam satu lapisan harus di-redeploy sekaligus atau satu per satu, untuk menghindari downtime

![redeploy dialog for Node.js](#)

3. Untuk menyelesaikan pengubahan versi Node.js, klik **Redeploy** dan konfirmasikan tindakan Anda dalam dialog pop-up yang terbuka.

![confirm Node.js redeployment](#)

:::tip
Untuk panduan detail tentang hosting proyek Node.js, silakan merujuk ke panduan Node.js Developer’s Center.
:::

## Baca Juga{#whats-next}

- [Create Environment](https://docs.dewacloud.com/setting-up-environment/)
- [Node.js Package Managers](https://docs.dewacloud.com/nodejs-package-managers/)
- [Node.js Process Managers](https://docs.dewacloud.com/nodejs-process-managers/)
- [Deployment Guide](https://docs.dewacloud.com/deployment-guide/)
- [Node.js Tutorials](https://docs.dewacloud.com/nodejs-tutorials/)