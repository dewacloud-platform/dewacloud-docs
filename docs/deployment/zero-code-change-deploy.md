---
sidebar_position: 1
slug: /zero-code-change-deploy
title: Zero Code Change Deploy
---
# Zero Code Change Deploy dengan Tanpa Vendor Lock-In untuk Migrasi Lancar antar
Platform Cloud

Berbeda dengan mayoritas layanan hosting, platform ini tidak memaksa pengembang
untuk mengikuti persyaratan spesifik dari infrastruktur yang tidak dapat diubah,
runtime proprietary, atau API untuk meng-hosting proyek. Pendekatan semacam ini
menjadi sangat penting terutama dalam hal migrasi dari virtual machine ke
container, dekomposisi monolith tradisional (yang sering disebut sebagai
legacy) ke microservices, atau saat berpindah dari satu penyedia ke penyedia
lain.

Menghilangkan kebutuhan untuk merancang ulang aplikasi,
[deployment](<https://docs.dewacloud.com/docs/deployment-guide>) dapat dengan mudah dilakukan menggunakan arsip (zip, tar.gz, war, jar,
ear), FTPS/SFTP, GIT/SVN dengan pembaruan otomatis langsung dari panel dev atau
melalui plugin terintegrasi untuk Maven, Eclipse, NetBeans, IntelliJ IDEA.
Semua ini membuat entry point lebih mudah dan lebih mulus, mengurangi waktu
go-to-market dan menghilangkan vendor lock-in.

![zero code change deployment sources](#)

Pendekatan zero code change, serta dukungan container aplikasi dan sistem,
memungkinkan untuk menjalankan baik microservices cloud-native maupun aplikasi
monolith legacy yang berbasis Java, PHP, Ruby, Node.js, Python, dan Docker.

![zero code change containers vs VM](#)

Selain itu, deployment dan pengoperasian aplikasi di dalam container tidak akan
dibatasi setelah migrasi dari VM, yang memungkinkan Anda untuk:

  * Menjalankan beberapa layanan di dalam satu container
  * Menggunakan port node apa pun yang diperlukan
  * Menyertakan beberapa Public IPv4 atau IPv6 per container
  * Menulis ke file system lokal atau remote
  * Mengakses container melalui SSH dengan kompatibilitas terhadap alat manajemen konfigurasi seperti Chef atau Puppet
  * Meng-deploy control panel terkenal untuk manajemen VPS dan shared hosting (cPanel, Plesk, dan ISPManager)
  * Melakukan live migration seperti vMotion
  * Meng-deploy Docker Engine dengan cara yang sama seperti VM
  * Menjalankan operasi lainnya yang sebelumnya diimplementasikan dalam VPS

Juga, platform ini menjaga IP dan hostname yang sama untuk setiap container
setelah downtime yang direncanakan atau tidak terduga. Akibatnya, Anda
terbebas dari keharusan untuk menulis ulang agar layanan dapat terus melacak
koneksi yang tepat.

## Project Deployment dengan Zero Code Change{#project-deployment-with-zero-code-change}

Untuk membuat hal di atas lebih jelas, mari kita pertimbangkan beberapa langkah
sederhana yang diperlukan untuk deploy proyek di platform:

1\. Buat environment melalui wizard topologi komprehensif dengan berbagai
pilihan [software stacks](<https://docs.dewacloud.com/docs/software-stacks-versions>)
yang sudah terkonfigurasi sebelumnya (misalnya, application server, database,
load balancer, cache, dan build nodes). ![zero code change create environment](#)

  2. Ketika environment yang sesuai sudah dibuat, Anda dapat [deploy aplikasi Anda](<https://docs.dewacloud.com/docs/deployment-guide>) dengan salah satu opsi deployment yang didukung:
     * sediakan arsip (_zip_ , _bzip2_ , _tar_ , _tar.gz_ , _tar.bz2_ , _war_ , _jar_ atau _ear_) dengan resource aplikasi yang sudah dipaketkan sebelumnya dengan mengunggahnya ke platform storage atau memberikan tautan ke lokasi penyimpanannya
     * kirim file instalasi melalui [FTPS/SFTP](<https://docs.dewacloud.com/docs/ftp-ftps-support>)
     * ambil sumber dari repository GIT/SVN (selain itu, Anda dapat mengatur pembaruan otomatis)
     * gunakan plugin terintegrasi (_Maven_ , _Eclipse_ , _NetBeans_ , _IntelliJ IDEA_)

Setelah proses inisiasi, terlepas dari tipe deployment yang dipilih, semua
konfigurasi (misalnya, menghubungkan ke load balancer, pengaturan penggunaan
memori, mengaktifkan SSL atau IP jika diperlukan, dll.) akan diatur oleh sistem
secara otomatis. Tidak perlu mengubah kode sumber aplikasi - penyesuaian yang
mungkin diperlukan hanyalah mengatur beberapa pengaturan aplikasi khusus
karena lokasi baru (misalnya, alamat IP atau nama domain - semua konfigurasi
server yang sesuai selalu tersedia untuk diedit langsung melalui dashboard
platform dengan [File Manager](<https://docs.dewacloud.com/docs/application-configuration>) yang terintegrasi).

Dengan cara ini Anda dapat dengan mudah memigrasikan aplikasi apa pun ke PaaS
dari Cloud, VPS, atau VM lainnya tanpa perlu penyesuaian kode khusus.

## Baca Juga{#whats-next}

  * [Apa itu PaaS & CaaS](<https://docs.dewacloud.com/docs/what-is-paas-and-caas/>)
  * [PaaS Cluster Overview](<https://docs.dewacloud.com/docs/software-stacks-versions/>)
  * [Panduan Deployment](<https://docs.dewacloud.com/docs/deployment-guide/>)
