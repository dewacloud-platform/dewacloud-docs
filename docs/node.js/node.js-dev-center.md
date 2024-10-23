---
sidebar_position: 1
slug: /nodejs-center
title: Node.js Dev Center
---

# Node.js Hosting

Dewacloud menyediakan integrasi NodeJS siap pakai yang cepat, ringan, dan dapat discaling. Integrasi tersebut secara otomatis dilengkapi dengan berbagai tools optimisasi dan manajemen untuk membuat proses hosting semaksimal mungkin dan nyaman bagi developer. Dalam artikel ini, kita akan membahas tools dan fitur utama yang tersedia di Dewacloud untuk menyediakan tingkat hosting Node.js yang diperlukan.


Gunakan daftar isi di bawah ini untuk menemukan informasi yang diperlukan dalam panduan lebih cepat:

  * [Node.js Environment Hosting](<https://docs.dewacloud.com/docs/#nodejs-environment-hosting>)
  * [Node.js Versioning](<https://docs.dewacloud.com/docs/#nodejs-versioning>)
  * [Node.js Application Deployment](<https://docs.dewacloud.com/docs/#nodejs-application-deployment>)
  * [Node.js Package Managers](<https://docs.dewacloud.com/docs/#nodejs-package-managers>)
  * [Node.js Process Managers](<https://docs.dewacloud.com/docs/#nodejs-process-managers>)
  * [Domains Management](<https://docs.dewacloud.com/docs/#domains-management>)
  * [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/#automatic-vertical-scaling>)
  * [Manual Horizontal Scaling](<https://docs.dewacloud.com/docs/#manual-horizontal-scaling>)
  * [Automatic Horizontal Scaling](<https://docs.dewacloud.com/docs/#automatic-horizontal-scaling>)

## Node.js Environment Hosting{#nodejs-environment-hosting}

Untuk menjalankan aplikasi Node.js Anda, Anda perlu [mengatur](<https://docs.dewacloud.com/docs/setting-up-environment/>) environment yang sesuai menggunakan **Topology Wizard**. Pilih tab _**Node.js**_, lalu pilih versi engine yang diperlukan untuk server aplikasi Anda dan tambahkan [software stack](<https://docs.dewacloud.com/docs/software-stacks-versions/>) lainnya jika diperlukan. Jika perlu, sesuaikan parameter lainnya, seperti jumlah cloudlets dan nodes, Public IPv4 dan IPv6, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-1.png" alt="Node.js cloud hosting" width="100%"/>

:::note 
Setiap instance adalah container yang sepenuhnya terisolasi, sepenuhnya independen dan tidak dipengaruhi oleh stack lainnya. Selain itu, node yang discaling secara otomatis didistribusikan di seluruh server fisik (atau VM) untuk memastikan availability yang tinggi.
:::

## Node.js Versioning{#nodejs-versioning}

Saat ini (pada saat penulisan ini), versi Node.js berikut didukung:

  * 14.21.3
  * 16.20.0
  * 18.20.4
  * 20.17.0
  * 21.7.3
  * 22.5.1
  * 22.8.0

Daftar terbaru dari release yang tersedia di Dewacloud disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>).

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-2.png" alt="Node.js versions" width="40%"/>

Anda dapat memilih [versi Node.js](<https://docs.dewacloud.com/docs/nodejs-versions/>) yang diperlukan langsung dari topology wizard selama pembuatan environment baru dan menyesuaikannya untuk container yang sudah ada melalui [redeployment container](<https://docs.dewacloud.com/docs/container-redeploy/>).

## Node.js Application Deployment{#nodejs-application-deployment}

Platform ini mengotomatisasi proses deployment untuk server aplikasi NodeJS yang dikelola menggunakan:

  * _archive_ aplikasi yang diupload dari komputer lokal atau melalui URL eksternal
  * repository remote _VCS_ (mis. GitHub)

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-3.png" alt="deploy Node.js application" width="50%"/>

:::tip
Biasanya, berkat algoritma auto-redirect port, project yang dideploy dapat diakses secara instan tanpa manipulasi tambahan. Namun, untuk akurasi yang lebih tinggi, Anda dapat secara manual exclude beberapa service dari pencarian auto-redirect dengan mendaftarkan port yang sesuai melalui variable REDIRECT_EXCLUDE_PORTS.
:::

Anda dapat membaca dokumen yang sesuai untuk mempelajari lebih lanjut tentang deployment aplikasi Node.js:

  * [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Auto-Deploy Overview](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)

## Node.js Package Managers{#nodejs-package-managers}

Setiap server aplikasi NodeJS berisi development tool bawaan yang disebut **[Package Manager](<https://docs.dewacloud.com/docs/nodejs-package-managers/>)**, yang menyediakan standarisasi dan otomatisasi dari proses instalasi, pembaruan, konfigurasi, dan penghapusan.

Dewacloud mendukung dua jenis package manager:

  * _**[npm](<https://www.npmjs.com/>)**_ \- mengelola requirement project Anda dengan menginstal module tambahan, package, dan aplikasi siap pakai
  * _**[yarn](<https://classic.yarnpkg.com/en/>)**_ \- mengoperasikan requirements yang sama seperti di _npm_ (jadi tidak ada perubahan yang diperlukan untuk aplikasi yang sudah ada), sambil memberikan kecepatan, keandalan, dan kenyamanan yang lebih tinggi

Secara default, package manager _npm_ digunakan untuk server aplikasi NodeJS, tetapi jika diperlukan, _npm_ dapat dengan mudah diganti ke _yarn_. Caranya, akses frame [container variables](<https://docs.dewacloud.com/docs/container-variables/>) dan atur value _**PACKAGE_MANAGER**_ yang sesuai (baik _npm_ atau _yarn_).

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-4.png" alt="Node.js package manager" width="100%"/>

## Node.js Process Managers{#nodejs-process-managers}

**[Process Managers](<https://docs.dewacloud.com/docs/nodejs-process-managers/>)** memberikan kemampuan untuk mengontrol application life cycle, memantau service yang berjalan, dan menjaga operabilitas project. Dewacloud menyediakan dukungan bagi process manager berikut untuk stack NodeJS:

  * _**[npm](<https://docs.npmjs.com/cli/v8/commands/npm-run-script>)**_ \- menyediakan kemampuan untuk start aplikasi
  * _**[pm2](<https://pm2.keymetrics.io/>)**_ \- menyediakan berbagai fitur manajemen aplikasi yang sangat besar, termasuk pemantauan proses Node.js yang dilaunch
  * _**[forever](<https://www.npmjs.com/package/forever>)**_ \- memungkinkan proses Node.js Anda berjalan terus menerus dan restart secara otomatis jika gagal

Pengguna dapat memilih process manager yang diperlukan selama [redeployment container](<https://docs.dewacloud.com/docs/container-redeploy/>) atau dengan menyesuaikan [variable](<https://docs.dewacloud.com/docs/container-variables/>) _**PROCESS_MANAGER**_ (menggunakan _forever_, _npm_, atau _pm2_ sebagai value, restart container diperlukan untuk menerapkan opsi baru).

## Domains Management{#domains-management}

Aplikasi Node.js Anda dapat dengan mudah dilengkapi dengan [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) untuk digunakan menggantikan yang default. Ada dua opsi berdasarkan topologi environment Anda:

  * **CNAME redirect** jika menggunakan _Shared Load Balancer_ ; direkomendasikan untuk environment _**dev**_ dan _**test**_
  * **DNS A Record** jika menggunakan _Public IP_ ; dapat menangani load traffic tinggi dan cocok untuk environment _**production**_

Selain itu, Anda dapat dengan cepat mengalihkan traffic antara environment Anda (mis. untuk mengarahkan pelanggan ke versi aplikasi yang lebih baru tanpa downtime) dengan memanfaatkan fitur [swap domains](<https://docs.dewacloud.com/docs/swap-domains/>) atau dengan bantuan metode _**SwapExtIps**_ [API](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps>)/[CLI](<https://docs.dewacloud.com/docs/cli-ip-swap/>) .

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-5.png" alt="Node.js domain management" width="100%"/>

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Dewacloud secara dinamis menyediakan jumlah resource yang tepat (RAM dan CPU) yang dibutuhkan oleh node Anda sesuai dengan load saat ini tanpa intervensi manual yang diperlukan. Sebagai hasilnya, Anda [tidak pernah membayar lebih untuk sumber daya yang tidak digunakan](<https://docs.dewacloud.com/docs/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>) dan menghemat waktu Anda karena Dewacloud menghilangkan kebutuhan untuk menangani penyesuaian terkait load atau perubahan arsitektural.

Anda hanya perlu menetapkan limit [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) maksimum (satu cloudlet setara dengan _128 MiB_ RAM dan _400 MHz_ CPU) untuk server aplikasi NodeJS Anda dan semuanya akan ditangani secara otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-6.png" alt="Node.js vertical scaling" width="40%"/>

Referensi dokumentasi [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) untuk informasi lebih lanjut.

## Manual Horizontal Scaling{#manual-horizontal-scaling}

Untuk memperbesar/memperkecil server aplikasi NodeJS, Anda perlu mengakses topology wizard dan menekan tombol **+/-** dalam bagian _Horizontal Scaling_ untuk mengatur jumlah node yang diperlukan. Juga, mulai dengan versi platform 5.5, Anda dapat menyesuaikan mode penskalaan yang diinginkan:

  * _**Stateless**_ \- secara bersamaan membuat semua node baru dari template image dasar
  * _**Stateful**_ \- secara berturut-turut menyalin file system dari master container ke dalam node baru

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-7.png" alt="Node.js horizontal scaling" width="40%"/>

Jumlah limitnya adalah 8 node dan dapat diperbesar dengan mengirimkan request yang sesuai ke tim support Dewacloud.

Selain itu, untuk distribusi request yang tepat, sebuah instance [load balancer](<https://docs.dewacloud.com/docs/load-balancing/>) otomatis ditambahkan saat scaling server NodeJS. Lihat referensi dokumentasi [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) untuk detail lebih lanjut.

## Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Akses bagian **Settings > Monitoring > Auto Horizontal** Scaling environment untuk mengatur trigger khusus yang dapat disesuaikan, yang memungkinkan meningkatkan atau mengurangi jumlah node sesuai dengan load aplikasi. Konfigurasikan jenis resource yang akan dipantau (_CPU_, _RAM_, _Network_, _Disk_) dan kondisi scaling yang tepat.

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/nodejs-dev/nodejs-dev-8.png" alt="Node.js automatic horizontal scaling" width="100%"/>

Pelajari lebih lanjut tentang [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) dalam dokumen terhubung.

Selain itu, hosting di Dewacloud memungkinkan penggunaan alat dan fitur inbuilt lainnya, misalnya:

  * Custom atau Built-In SSL
  * IPv4 dan IPv6 Public
  * Sejumlah besar software stacks yang dikelola
  * Firewalls container, endpoints, dan isolasi environment
  * UI yang mudah digunakan dan akses SSH langsung untuk manajemen
  * Open API dan Cloud Scripting untuk otomatisasi
  * Model harga sesuai penggunaan (_pay-per-use_)
  * Fungsi kolaborasi untuk kerja tim
  * Distribusi multi-cloud

Seperti yang Anda lihat, Dewacloud menyediakan semua kondisi yang diperlukan untuk hosting Node.js yang lancar!

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [Node.js Tutorials](<https://docs.dewacloud.com/docs/nodejs-tutorials/>)