---
sidebar_position: 10
slug: /gitlab-cicd-integration
title: GitLab CI/CD Integration
---
# Integrasi Kubernetes dengan GitLab CI/CD Pipeline

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/image22-300x300.png" alt="Kubernetes Integration" width="25%"/>

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

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/image7-1-768x365.png" alt="GitLab DevOps environment" width="50%"/>



## Pemasangan Kubernetes dan GitLab

Masuk ke dashboard platform Jelastic, pergi ke [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>), temukan dan instal aplikasi **DevOps Lab - GitLab Server** dan **Kubernetes Cluster** satu per satu. Urutan pemasangannya bersifat arbitrer. Perlu dicatat bahwa solusi dari panduan ini hanya tersedia untuk pelanggan _billing_.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/image19.png" alt="GitLab Kubernetes Installation" width="90%"/>

  * Jika Anda berencana menggunakan domain kustom, aktifkan opsi [Install Let’s Encrypt Certificates and Custom Domain Addon](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>) saat memasang server GitLab.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/image35.png" alt="Kubernetes in GitLab" width="70%"/>

  * Aplikasi Kubernetes dapat diinstal dengan parameter default atau berdasarkan kebutuhan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/install.png" alt="GitLab Integration" width="70%"/>

Saat Anda menyelesaikan kedua instalasi, topologinya akan terlihat sebagai berikut.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/2envs-topology.png" alt="GitLab Kubernetes Integration Topology" width="70%"/>

## Integrasi Kubernetes dengan GitLab

Anda dapat mengintegrasikan Kubernetes dengan GitLab menggunakan "**Kubernetes GitLab Integration Add-On** ".

1\. Buka daftar Add-Ons di sebelah node **Control Plane**, temukan yang diperlukan dan tekan tombol Configure.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/addons1.png" alt="Kubernetes Cluster" width="70%"/>

2\. Dalam dialog yang terbuka, temukan lingkungan GitLab DevOps dan tekan **Apply**.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/image4-1.png" alt="GitLab Integration Switch" width="70%"/>

3\. Selamat! Integrasi Kubernetes dengan server GitLab selesai.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/gitlab-dash-k8s1-768x285.png" alt="gitlab kubernetes ci cd" width="90%"/>

4\. Klik pada **Kubernetes** untuk mendapatkan detail integrasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/GitLab%20CICD%20Integration/kuber-integration-details-768x537.png" alt="GitLab Kubernetes Integration" width="90%"/>

Sekarang Anda dapat menggunakan pipeline GitLab untuk membangun dan mendistribusikan proyek ke cluster Kubernetes.
