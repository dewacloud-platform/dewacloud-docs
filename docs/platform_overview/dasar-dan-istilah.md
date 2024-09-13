# PaaS: Konsep Dasar dan Terminologi

Dokumen ini mewakili gambaran umum mengenai konsep fundamental dari platform, sebuah solusi yang serbaguna untuk hosting di dalam Public, Private, Hybrid, atau Multi-Cloud. Referensi di bawah ditujukan bagi mereka yang baru mengenal PaaS dan membantu untuk memahami keseluruhan lanskap dari platform.

Di sini, kami menawarkan garis besar yang konsisten dari komponen dasar platform dengan petunjuk ke dokumentasi terkait, yaitu:

  * [Cloudlet](<#cloudlet>)
  * [Container](<#container>)
  * [Layer](<#layer>)
  * [Environment](<#environment>)
  * [Application](<#application>)
  * [Host](<#host>)
  * [Environment Region](<#environment-region>)
  * [Platform Installation](<#platform-installation>)
  * [Cloud Union](<#cloud-union>)

Dengan mengetahui komponen dasar dan bagaimana mereka saling berhubungan, Anda dapat melanjutkan ke skenario yang lebih kompleks yang tersedia dalam platform.

## Cloudlet[![](#)](<application-platform-docs/paas-components-definition/#cloudlet>)

**[Cloudlet](<application-platform-docs/cloudlet/>)** adalah komponen infrastruktur platform terkecil. Ini adalah unit sumber daya khusus yang setara dengan _**128 MiB**_ dari **RAM** dan _**400 MHz**_ dari kekuatan **CPU** secara bersamaan. Granularitas tinggi dari sumber daya ini memungkinkan sistem untuk mengalokasikan kapasitas yang tepat dibutuhkan untuk setiap instance di environment. Hal ini memastikan [harga berbasis penggunaan](<application-platform-docs/pricing-model/>) yang benar-benar adil, sehingga hanya sumber daya yang benar-benar digunakan yang akan dibayar.

![cloudlet - unit sumber daya](#)

Ada dua jenis cloudlet di platform:

  * **Reserved Cloudlets** adalah jumlah tetap sumber daya yang dipesan di muka dan dikenakan biaya terlepas dari penggunaan sebenarnya. Reserved cloudlets lebih murah daripada dynamic dan disarankan digunakan ketika beban aplikasi bersifat permanen.
  * **Dynamic Cloudlets** ditambahkan dan dihapus secara otomatis sesuai dengan jumlah sumber daya yang dibutuhkan oleh aplikasi Anda (ditetapkan ketika beban meningkat dan dihapus segera setelah turun). Dynamic cloudlets direkomendasikan untuk digunakan untuk aplikasi dengan beban variabel atau ketika tidak dapat diprediksi sebelumnya, memastikan model pengisian berbasis penggunaan yang sebenarnya. Dengan cara seperti ini, Anda membayar berdasarkan penggunaan sumber daya aktual Anda dalam batas skala.

![reserved dan dynamic cloudlets](#)

:::note
Catatan: Ketika menghitung penggunaan cloudlet, sistem hanya mempertimbangkan penggunaan yang lebih besar antara RAM atau CPU per jam (bukan gabungan keduanya). Misalnya, jika selama satu jam rata-rata penggunaan CPU Anda adalah 2400 MHz (6 cloudlets), dan puncak penggunaan RAM Anda adalah 1024 MiB (8 cloudlets), Anda membayar untuk 8 cloudlets - bukan total gabungan (14 cloudlets). 
:::

Baik reserved dan dynamic cloudlets menyediakan diskon otomatis untuk volume penggunaan - semakin banyak digunakan, semakin murah harga dasarnya.

## Container[![](#)](<application-platform-docs/paas-components-definition/#container>)

**Container** (node) adalah instance terisolasi yang tervirtualisasi, disediakan untuk penanganan software stack (seperti application servers, databases, load balancers, dll.) dan ditempatkan pada [host](<#host>) tertentu. 
Setiap container dapat di-scaled secara otomatis, baik [vertikal](<application-platform-docs/automatic-vertical-scaling/>) maupun [horizontal](<application-platform-docs/automatic-horizontal-scaling/>), membuat hosting aplikasi menjadi benar-benar fleksibel.

![container - instance aman dan terisolasi](#)

Platform menyediakan [certified containers](<application-platform-docs/software-stacks-versions/>) untuk _Java_, _PHP_, _Ruby_, _Node.js_, _Python_, _Go_, _.NET_ dan kemampuan untuk mendistribusikan custom [Docker](<application-platform-docs/dockers-overview/>) containers. Setiap container memiliki IP pribadi dan catatan DNS yang unik, sementara [public IP](<application-platform-docs/public-ip/>) dapat dengan mudah dilampirkan melalui UI [dashboard](<application-platform-docs/dashboard-guide/>) atau via [API](<application-platform-docs/api-overview/>).

## Layer[![](#)](<application-platform-docs/paas-components-definition/#layer>)

**Layer**, juga disebut sebagai **Node group**, adalah satu set [container](<#container>) yang sama dalam satu [environment](<#environment>). Ada satu set layer yang telah ditentukan dalam [topology wizard](<application-platform-docs/setting-up-environment/>) untuk certified containers, seperti:

  * load balancer (LB)
  * compute (CP)
  * database (DB)
  * data storage (DS)
  * сache
  * VPS
  * build node
  * extra (custom layer; dapat ditambahkan beberapa lapisan untuk environment berbasis [Docker](<application-platform-docs/dockers-overview/>))

![layer - kelompok container yang sama](#)

Layer dirancang untuk melakukan berbagai tindakan dengan jenis container yang sama sekaligus. Misalnya, node dapat secara bersamaan di-restart atau di-redeploy, serta di-[scale](<application-platform-docs/horizontal-scaling/>) secara horizontal:

  * secara manual melalui [dashboard](<application-platform-docs/dashboard-guide/>), platform [API](<application-platform-docs/api-overview/>), [CLI](<application-platform-docs/cli/>)
  * secara otomatis berdasarkan [trigger beban](<application-platform-docs/automatic-horizontal-scaling/>)

Selain itu, dimungkinkan untuk memeriksa log dan statistik umum, atau melakukan konfigurasi yang diperlukan melalui file manager untuk semua container dalam satu layer.

Selain itu, container dari satu layer didistribusikan di seluruh [hosts](<#host>) yang berbeda menggunakan aturan anti-affinity, memastikan lebih banyak keandalan dan ketersediaan tinggi untuk aplikasi yang di-host.

## Environment[![](#)](<application-platform-docs/paas-components-definition/#environment>)

**Environment** adalah kumpulan [containers](<#container>) yang terisolasi untuk menjalankan layanan aplikasi tertentu. Platform ini menyediakan alat bawaan untuk [manajemen environment](<application-platform-docs/setting-up-environment/>) yang nyaman (misalnya, konfigurasi, monitoring, troubleshooting, dll.).

Ada sejumlah tindakan yang dapat dilakukan untuk seluruh environment, seperti menghentikan, memulai, mereplikasi, migrasi ke wilayah lain, berbagi dengan anggota tim untuk [kerja kolaboratif](<application-platform-docs/share-environment/>), melacak konsumsi sumber daya, dan sebagainya.

![environment - lapisan container yang saling terhubung](#)

Setiap environment memiliki nama domain tingkat ke-3 internalnya sendiri secara default. Domain eksternal khusus dapat dengan mudah dihubungkan melalui [CNAME atau A record](<application-platform-docs/custom-domains/>), dan bahkan lebih lanjut dapat di-[swapped](<application-platform-docs/swap-domains/>) dengan environment lain untuk pengalihan lalu lintas.

## Application[![](#)](<application-platform-docs/paas-components-definition/#application>)

**Application** adalah kombinasi dari environment untuk menjalankan satu proyek. Aplikasi sederhana dengan satu atau dua [stacks](<application-platform-docs/software-stacks-versions/>) dapat dijalankan dalam satu environment.

:::tip
Tips: Aplikasi dengan topologi yang lebih kompleks biasanya membutuhkan lebih banyak fleksibilitas selama proses deployment atau pembaruan, jadi lebih baik mendistribusikan berbagai jenis server ke berbagai environment, agar dapat mempertahankan secara independen.
:::

![application - environments dari satu proyek](#)

Kode sumber aplikasi atau binaries yang dibangun dapat di-deploy dari:

  * GIT/SVN repository, yang memungkinkan untuk mendapat manfaat dari [pembaruan otomatis](<application-platform-docs/git-svn-auto-deploy/>)
  * arsip lokal (_zip_, _war_, _ear_, dll.) melalui [UI dashboard](<application-platform-docs/dashboard-guide/>) atau [FTP](<application-platform-docs/ftp-ftps-support/>)
  * custom [Docker](<application-platform-docs/dockers-overview/>) template

Juga, sejumlah aplikasi siap pakai sudah dapat ditemukan di dalam [Marketplace platform](<application-platform-docs/marketplace/>), untuk diatur hanya dalam beberapa klik.

## Host[![](#)](<application-platform-docs/paas-components-definition/#host>)

**Host** adalah server fisik atau mesin virtual besar yang divirtualisasi melalui KVM, ESXi, Hyper-V, dll.

![host - server fisik atau virtual](#)

Hosts dibagi ke dalam [containers](<#container>) yang kecil dan terisolasi yang digunakan untuk membangun [environments](<#environment>). Pembagian ini menyediakan multitenancy terdepan di industri, serta kerapatan tinggi dan pemanfaatan sumber daya yang cerdas dengan bantuan distribusi containers sesuai dengan beban di semua host.

## Environment Region[![](#)](<application-platform-docs/paas-components-definition/#environment-region>)

**[Environment region](<application-platform-docs/environment-regions/>)** adalah seperangkat [hosts](<#host>) yang diorchestrasi dalam satu jaringan terisolasi.

![environment region - kumpulan hosts](#)

Setiap environment region memiliki kapasitas tersendiri di pusat data tertentu, kumpulan alamat IP pribadi dan publik yang telah ditentukan dan penetapan harga sumber daya yang bersangkutan. Lebih jauh lagi, lokasi awal yang dipilih dapat dengan mudah diubah dengan [memigrasi](<application-platform-docs/environment-regions-migration/>) proyek antara zona yang tersedia.

## Platform Installation[![](#)](<application-platform-docs/paas-components-definition/#platform-installation>)

**Platform** adalah kelompok [environment regions](<#environment-region>) (di mana masing-masingnya bisa secara fisik terletak di pusat data terpisah, mewakili Cloud terisolasi) dan cluster orchestrator untuk mengontrol dan berfungsi seperti sistem tunggal. Ini memberikan berbagai kemungkinan untuk mengembangkan, mendistribusikan, menguji, menjalankan, debugging, dan mempertahankan aplikasi karena ada banyak pilihan saat memilih hardware - kapasitas, harga, lokasi yang berbeda, dll.

![platform - environment regions dengan orchestrator](#)

Sebagai hasilnya, Anda mendapatkan solusi multi-pusat data atau bahkan multi-cloud untuk menjalankan aplikasi Anda dalam satu panel. Selain itu, setiap Platform dikelola oleh penyedia layanan hosting terpisah dengan tim dukungan lokalnya.

## Cloud Union[![](#)](<application-platform-docs/paas-components-definition/#cloud-union>)

Platform ini memiliki model bisnis unik dalam mendistribusikan produk cloudnya secara global melalui penyedia hosting yang membentuk **Cloud Union** kami. Ada banyak pilihan vendor platform yang diatur oleh pemerintah dan hukum lokal. Dengan kata lain, mitra hosting kami berbicara bahasa Anda dan memahami kebutuhan spesifik Anda.

![Cloud Union - PaaS hosting providers](#)

Cloud Union sudah mencakup [100 pusat data](<application-platform-partners/>) yang tersedia di 38 negara (lebih banyak daripada yang [ditawarkan oleh raksasa cloud](<company/blog/aws-azure-google-cloud-and-jelastic-choose-your-cloud-hosting-by-location/>)). Komunitas mitra ini menyediakan kebebasan memilih, sambil meng-host aplikasi Anda tanpa terkunci pada vendor tertentu dan tanpa kompromi pada lokasi pusat data, tingkat dukungan, kinerja, atau harga.

## Baca Juga[![](#)](<application-platform-docs/paas-components-definition/#whats-next>)

  * [Memulai](<application-platform-docs/getting-started/>)
  * [Panduan Dashboard](<application-platform-docs/dashboard-guide/>)
  * [Versi Software Stack](<application-platform-docs/software-stacks-versions/>)
  * [Membuat Environment](<application-platform-docs/setting-up-environment/>)