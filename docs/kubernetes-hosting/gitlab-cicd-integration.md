---
sidebar_position: 10
slug: /gitlab-cicd-integration
title: GitLab CI/CD Integration
---
# Integrasi Kubernetes dengan GitLab CI/CD Pipeline

![GitLab Kubernetes Integration](#)

Dalam artikel “[Private GitLab Server Automatic Installation with Jelastic PaaS](<https://www.virtuozzo.com/company/blog/private-gitlab-server-auto-installation/>)” kami telah membahas tentang pemasangan GitLab, pengaturan awalnya, dan dasar-dasar yang diperlukan untuk siklus hidup proyek (pengimporan proyek git dan mengakses registry docker). Dan hari ini kami akan melanjutkan ke integrasi GitLab dengan Kubernetes, serta menjelaskan bagaimana mengatur continuous integration dan continuous deployment pipeline untuk proyek Anda berdasarkan sampel aplikasi Java.

## Prasyarat untuk Integrasi Kubernetes

Ekosistem GitLab diperkaya dengan sejumlah besar fitur seperti:

  * sistem continuous integration (CI/CD) bawaan memungkinkan Anda membuat pipeline dan mengontrol siklus hidup deployment aplikasi, dari mengunduh kode ke repository, hingga diunggah ke lingkungan produksi
  * dengan AutoDevOps, Anda dapat membangun CI/CD pipeline yang otomatis mendeteksi, membangun, menguji, dan mendistribusikan proyek Anda. Diintegrasikan dengan cluster [Kubernetes (K8S)](<https://www.virtuozzo.com/company/blog/kubernetes-cluster-scaling-pay-per-use-hosting/>), ini memungkinkan Anda untuk mendistribusikan aplikasi tanpa penyediaan sumber daya CI/CD ekstra atau konfigurasi yang diperlukan.

## Detail Integrasi Kubernetes

Di bawah ini kami akan membahas integrasi Kubernetes dengan GitLab di Jelastic PaaS sebagai endpoint dari pipeline. Anda akan melihat bagaimana menghilangkan rutinitas integrasi yang membosankan yang diperlukan untuk menambahkan K8S dengan memasukkan banyak data secara manual:

  * URL API yang Tepat. Untuk mengidentifikasi masalah akses dan izin saat menambahkan cluster, integrasi Kubernetes memeriksa ketersediaan URL API
  * Token akses yang benar
  * Sertifikat CA yang valid
  * Namespace proyek
  * Akses jaringan lokal, dll.

Semua itu dapat dilakukan dengan otomatisasi platform. Juga, kami akan melalui langkah-langkah tentang cara membuat proyek, membangun pipeline dan mendistribusikan aplikasi Java ke cluster Kubernetes yang terintegrasi dengan server GitLab.

![gitlab kubernetes ci cd](#)

## Pemasangan Kubernetes dan GitLab

Masuk ke dashboard platform Jelastic, pergi ke [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>), temukan dan instal aplikasi **DevOps Lab - GitLab Server** dan **Kubernetes Cluster** satu per satu. Urutan pemasangannya bersifat arbitrer. Perlu dicatat bahwa solusi dari panduan ini hanya tersedia untuk pelanggan _billing_.

![GitLab Kubernetes Installation](#)

  * Jika Anda berencana menggunakan domain kustom, aktifkan opsi [Install Let’s Encrypt Certificates and Custom Domain Addon](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>) saat memasang server GitLab.

![GitLab Integration](#)

  * Aplikasi Kubernetes dapat diinstal dengan parameter default atau berdasarkan kebutuhan Anda.

![Kubernetes Integration](#)

Saat Anda menyelesaikan kedua instalasi, topologinya akan terlihat sebagai berikut.

![GitLab Kubernetes Integration Topology](#)

## Integrasi Kubernetes dengan GitLab

Anda dapat mengintegrasikan Kubernetes dengan GitLab menggunakan "**Kubernetes GitLab Integration Add-On** ".

1\. Buka daftar Add-Ons di sebelah node **Control Plane**, temukan yang diperlukan dan tekan tombol Configure.

![Kubernetes Cluster](#)

2\. Dalam dialog yang terbuka, temukan lingkungan GitLab DevOps dan tekan **Apply**.

![GitLab DevOps environment](#)

3\. Selamat! Integrasi Kubernetes dengan server GitLab selesai.

![Kubernetes in GitLab](#)

4\. Klik pada **Kubernetes** untuk mendapatkan detail integrasi.

![GitLab Integration Switch](#)

Sekarang Anda dapat menggunakan pipeline GitLab untuk membangun dan mendistribusikan proyek ke cluster Kubernetes.

