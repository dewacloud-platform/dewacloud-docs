---
sidebar_position: 2
slug: /concept-and-terminology
title: Basics & Terminology
---
# PaaS: Basic Concepts and Terminology{#paas-basic-concepts-and-terminology}

Dokumen ini merupakan gambaran umum dari konsep dasar platform, solusi serbaguna untuk hosting di dalam Public, Private, Hybrid, atau Multi-Cloud. Referensi di bawah ini ditujukan bagi mereka yang baru mengenal PaaS dan membantu untuk memahami lanskap keseluruhan dari platform ini.

Di sini, kami menawarkan garis besar konsisten dari komponen platform dasar dengan petunjuk ke dokumentasi yang sesuai, yaitu:

  * [Cloudlet](<#cloudlet>)
  * [Container](<#container>)
  * [Layer](<#layer>)
  * [Environment](<#environment>)
  * [Application](<#application>)
  * [Host](<#host>)
  * [Environment Region](<#environment-region>)
  * [Platform Installation](<#platform-installation>)

Dengan mengetahui tentang komponen dasar dan bagaimana mereka saling berhubungan, Anda dapat melanjutkan dengan skenario yang lebih kompleks yang tersedia di dalam platform.

## Cloudlet{#cloudlet}

**[Cloudlet](<https://docs.dewacloud.com/docs/concept-and-terminology/#cloudlet>)** adalah komponen infrastruktur platform terkecil. Ini adalah unit sumber daya khusus yang setara dengan _**128 MiB**_ **RAM** dan _**400 MHz**_ **CPU** secara bersamaan. Granularitas sumber daya yang tinggi ini memungkinkan sistem untuk mengalokasikan kapasitas yang tepat yang dibutuhkan oleh setiap instance di lingkungan. Ini memastikan [harga berbasis penggunaan](<https://docs.dewacloud.com/docs/pricing-model/>) yang benar-benar adil, sehingga hanya sumber daya yang benar-benar dikonsumsi yang dibayar.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/01-cloudlet-resource-unit.png" alt="cloudlet - resource unit" max-width="100%"/>

Ada dua jenis cloudlet di platform ini:

  * **Reserved Cloudlets** adalah jumlah sumber daya tetap yang dipesan di muka dan dibebankan terlepas dari penggunaan aktual. Cloudlet yang direservasi lebih murah daripada yang dinamis dan direkomendasikan untuk digunakan ketika beban aplikasi permanen.
  * **Dynamic Cloudlets** ditambahkan dan dihapus secara otomatis sesuai dengan jumlah sumber daya yang diperlukan oleh aplikasi Anda (ditetapkan ketika beban meningkat dan dihapus segera setelah menurun). Cloudlet dinamis direkomendasikan untuk digunakan untuk aplikasi dengan beban variabel atau ketika tidak dapat diprediksi di muka, memastikan model pembebanan yang benar-benar berbasis penggunaan. Dengan cara ini, Anda membayar berdasarkan penggunaan sumber daya aktual dalam batas skala.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/02-reserved-and-dynamic-cloudlets.png" alt="reserved and dynamic cloudlets" max-width="100%"/>

:::note
Saat menghitung penggunaan cloudlet, sistem hanya mempertimbangkan penggunaan RAM atau CPU yang lebih besar per jam (bukan keduanya digabungkan). Misalnya, jika selama satu jam penggunaan CPU rata-rata Anda adalah 2400 MHz (6 cloudlet), dan penggunaan RAM puncak Anda adalah 1024 MiB (8 cloudlet), Anda membayar untuk 8 cloudlet - bukan total gabungan (14 cloudlet).
:::

Fungsi cloudlet yang direservasi dan dinamis keduanya menyediakan diskon otomatis untuk volume penggunaan - semakin banyak yang digunakan, semakin murah harga dasar.

## Container{#container}

**Container** (node) adalah instance virtual yang terisolasi, disediakan untuk penanganan stack perangkat lunak (seperti server aplikasi, database, load balancer, dll.) dan ditempatkan pada [host](<#host>) tertentu. Setiap container dapat diskalakan secara otomatis, baik [secara vertikal](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) maupun [horizontal](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>), sehingga hosting aplikasi menjadi sangat fleksibel.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/03-container-secure-and-isolated-instance.png" alt="container - secure and isolated instance" max-width="100%"/>

Platform ini menyediakan [container bersertifikat](<https://docs.dewacloud.com/docs/software-stacks-versions/>) untuk _Java_, _PHP_, _Ruby_, _Node.js_, _Python_, _Go_, _.NET_ dan kemampuan untuk menerapkan container [Docker](<https://docs.dewacloud.com/docs/container-types/>) kustom. Setiap container memiliki IP pribadinya sendiri dan catatan DNS unik, sementara [public IP](<https://docs.dewacloud.com/docs/public-ip/>) dapat dengan mudah dilampirkan dalam [UI dashboard](<https://docs.dewacloud.com/docs/dashboard-guide/>) atau melalui [API](<https://docs.dewacloud.com/docs/api-overview/>).

## Layer{#layer}

**Layer**, juga disebut sebagai **Node group**, adalah sekumpulan [container](<#container>) serupa dalam satu [environment](<#environment>). Ada sekumpulan layer yang telah ditentukan sebelumnya di dalam platform [topology wizard](<https://docs.dewacloud.com/docs/setting-up-environment/>) untuk container bersertifikat, seperti:

  * load balancer (LB)
  * compute (CP)
  * database (DB)
  * data storage (DS)
  * cache
  * VPS
  * build node
  * ekstra (layer kustom; beberapa bisa ditambahkan untuk lingkungan [berbasis Docker](<https://docs.dewacloud.com/docs/container-types/>))

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/04-layer-group-of-similar-containers.png" alt="layer - group of similar containers" max-width="100%"/>

Layer dirancang untuk melakukan berbagai tindakan dengan jenis container yang sama sekaligus. Misalnya, node dapat secara bersamaan dimulai ulang atau dideploy ulang, serta diskalakan secara horizontal:

  * secara manual melalui [dashboard](<https://docs.dewacloud.com/docs/dashboard-guide/>), [API platform](<https://docs.dewacloud.com/docs/api-overview/>), [CLI](<https://docs.dewacloud.com/docs/cli/>)
  * secara otomatis berdasarkan [load triggers](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>)

Selain itu, container dari satu layer didistribusikan di berbagai [host](<#host>) menggunakan aturan anti-affinity, memastikan lebih banyak keandalan dan ketersediaan tinggi untuk aplikasi yang di-host.

## Environment{#environment}

**Environment** adalah kumpulan dari [container](<#container>) terisolasi untuk menjalankan layanan aplikasi tertentu. Platform ini menyediakan alat bawaan untuk pengelolaan [environment](<https://docs.dewacloud.com/docs/setting-up-environment/>) yang nyaman (mis. konfigurasi, pemantauan, pemecahan masalah, dll.).

Ada sejumlah tindakan yang dapat dilakukan untuk seluruh lingkungan, seperti berhenti, mulai, kloning, migrasi ke region lain, berbagi dengan anggota tim untuk [kerja kolaboratif](<https://docs.dewacloud.com/docs/share-environment/>), melacak konsumsi sumber daya, dan lain-lain.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/05-environment-interconnected-container-layers.png" alt="environment - interconnected container layers" max-width="100%"/>

Setiap environment memiliki nama domain internal tingkat 3 secara default. Domain eksternal kustom dapat dengan mudah diikat melalui [CNAME atau A record](<https://docs.dewacloud.com/docs/custom-domains/>), dan bahkan lebih lanjut [dipertukarkan](<https://docs.dewacloud.com/docs/swap-domains/>) dengan environment lain untuk pengalihan lalu lintas.

## Application{#application}

**Application** adalah kombinasi dari environment untuk menjalankan satu proyek. Aplikasi sederhana dengan satu atau dua [stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>) dapat dijalankan di dalam satu environment.

:::tip
Aplikasi dengan topologi yang lebih kompleks biasanya memerlukan lebih banyak fleksibilitas selama proses deploy atau update, sehingga lebih baik untuk mendistribusikan berbagai jenis server di beberapa environments, untuk dapat memelihara mereka secara mandiri.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/06-application-environments-of-a-single-project.png" alt="application - environments of a single project" max-width="100%"/>

Kode sumber aplikasi atau biner yang dibangun dapat di-deploy dari:

  * GIT/SVN repository, yang memungkinkan mendapatkan manfaat dari [pembaruan otomatis](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * arsip lokal (_zip_, _war_, _ear_, dll.) melalui [UI dashboard](<https://docs.dewacloud.com/docs/dashboard-guide/>) atau [FTP](<https://docs.dewacloud.com/docs/ftp-ftps-support/>)
  * template [Docker](<https://docs.dewacloud.com/docs/container-types/>) kustom

Selain itu, sejumlah aplikasi yang sudah dipaketkan sebelumnya dapat ditemukan di dalam [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>) platform, yang dapat diatur hanya dalam beberapa klik.

## Host{#host}

**Host** adalah server fisik atau mesin virtual besar yang divirtualisasi melalui KVM, ESXi, Hyper-V, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/07-host-physical-or-virtual-server.png" alt="host - physical or virtual server" max-width="100%"/>

Host dipecah menjadi [container](<#container>) terisolasi kecil yang digunakan untuk membangun [environments](<#environment>). Partisi semacam itu memberikan multitenancy terdepan di industri, serta kepadatan tinggi dan pemanfaatan sumber daya cerdas dengan bantuan distribusi container sesuai dengan beban di seluruh host.

## Environment Region{#environment-region}

**[Environment region](<https://docs.dewacloud.com/docs/environment-regions/>)** adalah sekumpulan [host](<#host>) yang diorkestrasi dalam jaringan terisolasi tunggal.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/08-environment-region-hosts-group.png" alt="environment region - group of hosts" max-width="100%"/>

Setiap region environment memiliki kapasitasnya sendiri di pusat data tertentu, kumpulan alamat IP privat dan publik yang telah ditentukan, serta harga sumber daya yang sesuai. Selain itu, lokasi yang dipilih secara awal dapat dengan mudah diubah dengan [memigrasikan](<https://docs.dewacloud.com/docs/environment-regions-migration/>) proyek di antara region yang tersedia.

## Platform Installation{#platform-installation}

**Platform** adalah sekelompok [environment regions](<#environment-region>) (di mana masing-masing dapat secara fisik terletak di Pusat Data terpisah, mewakili Cloud yang terisolasi) dan kluster orkestrator untuk mengontrol dan bertindak seperti sistem tunggal. Ini menyediakan berbagai kemungkinan untuk mengembangkan, mendistribusikan, menguji, menjalankan, debug, dan memelihara aplikasi karena beberapa opsi saat memilih perangkat keras - kapasitas, harga, lokasi, dll. yang berbeda.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/basics-terminology/09-platform-orchestrator-environment-regions.png" alt="platform - environment regions with orchestrator" max-width="100%"/>

Sebagai hasilnya, Anda mendapatkan solusi multi-data center atau bahkan multi-cloud untuk menjalankan aplikasi Anda dalam satu panel. Selain itu, setiap Platform dikelola oleh penyedia layanan hosting terpisah dengan tim dukungan lokalnya.

## Baca Juga{#whats-next}

  * [Getting Started](<https://docs.dewacloud.com/docs/getting-started/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/>)
  * [Create Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)