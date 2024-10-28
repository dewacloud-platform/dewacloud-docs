---
sidebar_position: 1
slug: /setting-up-environment
title: Setting Up Environment
---
# Menyiapkan Environment

Langkah pertama dari hosting aplikasi apa pun adalah pembuatan [environment](<https://docs.dewacloud.com/docs/concept-and-terminology/#environment>) dengan container terisolasi yang diperlukan. Platform ini menyediakan UI yang kuat dan intuitif untuk membuat dan mengkonfigurasi environment sesuai dengan kebutuhan Anda. Dokumen ini akan memandu Anda melalui semua langkah yang diperlukan, memberikan penjelasan yang lebih luas tentang spesifikasi dan fitur yang tersedia.

1\. Masuk ke dashboard platform dan klik tombol **New Environment** di sudut kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/01-paas-main-buttons.png" alt="PaaS main buttons" max-width="100%"/>

2\. Di dalam dialog _**topology wizard**_ yang terbuka, Anda dapat mengatur semua kustomisasi yang diperlukan. Kami merekomendasikan melakukan penyesuaian dalam urutan berikut:

  * [pilih bahasa pemrograman](<https://docs.dewacloud.com/docs/#choosing-programming-language-or-specific-deployment-option>) atau solusi deployment khusus (_Docker Engine_ atau _Kubernetes Cluster_)
  * [atur topology](<https://docs.dewacloud.com/docs/#configuring-topology>) dengan menambahkan stack perangkat lunak yang diperlukan
  * [konfigurasikan resources dan spesifikasi nodes](<https://docs.dewacloud.com/docs/#configuring-nodes-resources-and-specifics>)
  * tinjau estimasi, beri nama environment, dan [konfirmasi pembuatan](<https://docs.dewacloud.com/docs/#reviewing-and-confirming-environment-creation>)

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/02-configure-environment-via-wizard.png" alt="configure environment via wizard" max-width="100%"/>

Di bawah ini, kami akan meninjau setiap poin ini secara detail, memberikan penjelasan tentang semua kemungkinan yang tersedia. Prosesnya mungkin terlihat rumit pada awalnya, tetapi setelah Anda terbiasa, Anda akan dapat mengkonfigurasi environment baru (atau menyesuaikan environment yang sudah ada) dalam waktu kurang dari satu menit.

## Memilih Bahasa Pemrograman atau Opsi Deployment Khusus {#choosing-programming-language-or-specific-deployment-option}

Sebagai langkah pertama dalam pembuatan environment, Anda perlu memilih solusi deployment yang diperlukan untuk proyek Anda. PaaS adalah platform yang sangat serbaguna yang mendukung berbagai opsi untuk pengembangan dan hosting aplikasi, sehingga cocok bahkan untuk klien yang paling menuntut.

1\. Pilihan paling umum dan direkomendasikan (kecuali Anda mengejar aplikasi/arsitektur tertentu) adalah **container bersertifikat**. Stack [ini](<https://docs.dewacloud.com/docs/software-stacks-versions/>) dikonfigurasi dan dikelola khusus oleh platform (misalnya pembaruan versi, patch keamanan). Secara default, mereka mendukung semua fitur platform (scaling, deployment otomatis, redeploy, SSL, dll.) untuk hosting dan pengembangan yang paling mulus dan nyaman.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/03-environment-programming-languages-in-wizard.png" alt="environment programming languages in wizard" max-width="100%"/>

Klik pada tab dengan bahasa pemrograman yang diperlukan (_Java_, _PHP_, _Ruby_, _.NET_, _Node.js_, atau _Python_) untuk melanjutkan dengan container bersertifikat platform.

2\. Opsi deployment lainnya tersedia melalui tab _Custom_. Semua varian yang tercantum di bawah ini menggunakan [container sistem](<https://docs.dewacloud.com/docs/what-are-system-containers/>) dasar platform (disebut container OS), yang membuatnya kompatibel dengan sebagian besar (tetapi tidak semua) fitur pembeda platform (misalnya, vertical dan horizontal scaling).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/04-topology-wizard-docker-tab.png" alt="topology wizard docker tab" max-width="100%"/>

  * **Custom Container Images** \- image _Docker_ apa pun (berdasarkan [OS yang didukung](<https://docs.dewacloud.com/docs/container-image-requirements/>)) yang dideploy ke dalam container sistem. Dibandingkan dengan **container terkelola**, opsi ini menyediakan akses ke lebih banyak solusi, mencari seluruh registry Docker Hub atau menggunakan repositori pribadi Anda. Namun, keberoperasian perangkat lunak dan kompatibilitas dengan platform tidak dapat dijamin karena konten dikelola oleh pemelihara image masing-masing. Disarankan untuk membangun image container kustom berdasarkan [image bersertifikat platform](<https://hub.docker.com/u/jelastic>) menggunakan instruksi [FROM](<https://docs.docker.com/engine/reference/builder/#from>).

  * **Docker Engine** \- sebuah _[Docker Engine CE](<https://www.virtuozzo.com/company/blog/docker-engine-automatic-install-swarm-connect/>)_ yang dideploy ke dalam container sistem. Ini menyediakan akses ke semua fungsi asli Docker, termasuk deployment, scaling, dan manajemen dari banyak [container aplikasi](<https://docs.dewacloud.com/docs/what-are-application-containers/>) di dalamnya.

  * **Kubernetes Cluster** \- _[Kubernetes cluster](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)_ siap pakai dengan control plane dan worker nodes yang telah dikonfigurasi, dibuat berdasarkan container sistem. Deployment, scaling, dan orkestrasi dari microservices di dalamnya ditangani oleh control units Kubernetes, sementara platform menskalakan dan mengelola control plane dan worker nodes.

3\. Disarankan juga untuk memilih [region](<https://docs.dewacloud.com/docs/environment-regions/>) yang diinginkan (jika tersedia) sebelum melanjutkan lebih jauh.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/05-environment-regions-list.png" alt="environment regions list" max-width="100%"/>

## Mengkonfigurasi Topologi {#configuring-topology}

Anda dapat mengkonfigurasi topologi environment ([struktur layers](<https://docs.dewacloud.com/docs/concept-and-terminology/#layer>)) melalui bagian kiri wizard. Anggaplah itu sebagai konstruksi yang membantu Anda membuat environment Anda. Di sini, blok-blok berikut tersedia:

  * **[Load Balancers](<https://docs.dewacloud.com/docs/load-balancing/>)** \- stack yang beroperasi sebagai titik masuk untuk environment guna mendistribusikan permintaan masuk dan menciptakan beban yang merata pada node lain
  * **[Application Servers](<https://docs.dewacloud.com/docs/tomcat/>)** (compute nodes) \- web server yang menjalankan aplikasi Anda
  * **[Databases](<https://docs.dewacloud.com/docs/database-hosting/>)** (_SQL_ & _NoSQL_) \- solusi database untuk menyimpan dan mengelola data
  * **[Cache Node](<https://docs.dewacloud.com/docs/memcached/>)** \- sistem caching objek Memcached untuk mempercepat aplikasi web dengan mengurangi beban database
  * **[Shared Storage](<https://docs.dewacloud.com/docs/shared-storage-container/>)** \- node penyimpanan khusus dengan dukungan NFSv4, ruang disk yang lebih besar, dan kinerja yang dioptimalkan
  * **[Elastic VPS](<https://docs.dewacloud.com/docs/vps/>)** \- server virtual pribadi di atas OS _CentOS_, _Ubuntu_, _Debian_, dan _Windows_
  * **[Build Node](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)** \- alat otomatisasi build untuk proyek Java
  * **Extra** (custom layers) \- salah satu stack yang disebutkan di atas

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/06-environment-topology-builder-ui.png" alt="environment topology builder ui" max-width="100%"/>

:::tip
Urutan blok yang ditampilkan di atas adalah urutan default. Namun, Anda dapat mencampur dan mencocokkan mereka dengan cara yang diinginkan untuk membuat topologi kustom Anda.
:::

1\. Platform menawarkan sejumlah opsi paling populer untuk setiap bagian ini berdasarkan peran default. Jika Anda ingin menambahkan [stack](<https://docs.dewacloud.com/docs/software-stacks-versions/>) dengan peran yang berbeda, klik opsi **More** di bagian bawah daftar. Anda juga dapat menggunakan **Search** untuk dengan cepat menemukan stack yang dikelola platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/07-categorized-stacks-with-search.png" alt="categorized stacks with search" max-width="100%"/>

:::tip
Jika Anda tidak dapat menemukan solusi perangkat lunak yang diperlukan, Anda dapat menambahkannya sebagai container kustom dari Docker Hub atau repositori pribadi Anda.
:::

2\. Perlindungan **SSL** dapat dikonfigurasi untuk environment Anda melalui bagian dengan nama yang sama. Di sini, dua opsi tersedia:

  * _**[Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl/>)**_ \- mengaktifkan sertifikat SSL yang sudah tepercaya, menghindari pemeriksaan tambahan, dan menghemat waktu Anda dalam validasi sertifikat. Namun, ini hanya diterapkan pada nama domain default environment (yaitu dengan domain hoster di akhir) dan tidak berfungsi jika [public IP](<https://docs.dewacloud.com/docs/public-ip/>) dilampirkan ke server Anda.
  * _**[Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>)**_ \- menampilkan prasyarat penggunaan sertifikat SSL kustom untuk environment. Klik tombol **Enable** untuk secara otomatis memenuhi persyaratan (misalnya, aktifkan Public IP) dan lihat panduan yang terkait untuk petunjuk lebih lanjut.

:::tip
Anda juga dapat menerapkan add-on Let’s Encrypt SSL setelah environment dibuat untuk secara otomatis menerbitkan dan mengintegrasikan sertifikat SSL gratis.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/08-environment-ssl-configuration.png" alt="environment ssl configuration" max-width="100%"/>

## Mengkonfigurasi Resources dan Spesifikasi Node {#configuring-nodes-resources-and-specifics}

Setelah Anda selesai dengan struktur topologi, Anda dapat menyesuaikan setiap layer tertentu melalui bagian tengah wizard. Mari kita tinjau opsi yang tersedia dari atas ke bawah.

1\. Anda dapat menghidupkan/mematikan layer serta memberikan alias kustom untuknya.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/09-environment-layer-switcher.png" alt="environment layer switcher" max-width="100%"/>

2\. Konfigurasikan [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) dengan mengatur jumlah [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) (1 cloudlet = **128 MiB** RAM dan **400 MHz** CPU) yang dicadangkan dan dinamis untuk node dalam layer tersebut.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/10-layer-vertical-scaling-configuration.png" alt="layer vertical scaling configuration" max-width="100%"/>

Anggap ini sebagai kapasitas minimum dan maksimum CPU & RAM per server. Perlu disebutkan bahwa tidak peduli seberapa tinggi batas scaling yang ditetapkan, hanya sumber daya yang sebenarnya digunakan yang akan dikenakan biaya. Ini membantu mengatasi lonjakan beban dan, pada saat yang sama, tidak membayar lebih untuk memori atau prosesor yang tidak digunakan.

3\. Bagian _[Horizontal Scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>)_ memungkinkan Anda mendefinisikan jumlah node dalam layer dan memilih mode scaling yang diinginkan (stateful atau stateless).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/11-horizontal-scaling-and-engine-search.png" alt="horizontal scaling and engine search" max-width="100%"/>

Anda dapat menggunakan daftar drop-down untuk mengubah tipe/versi stack dan engine (jika diperlukan, perluas dan mulai mengetik untuk **Search**). Dalam hal menyesuaikan environment yang ada, daftar ini akan mengarahkan ke dialog [container redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>) untuk menerapkan perubahan.

:::tip
Klik ikon gear (dilingkari pada gambar di bawah) untuk opsi manajemen tambahan selama scaling.
:::

4\. Selanjutnya, Anda perlu mengonfigurasi pengaturan tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/13-additional-layer-configuration.png" alt="additional layer configuration" max-width="100%"/>

Daftar dapat bervariasi tergantung pada stack tertentu dan izin akun:

  * **[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)** \- klasterisasi otomatis untuk beberapa template bersertifikat platform. Kolom tambahan dapat muncul setelah aktivasi, misalnya pemilihan skema (_master-slave_, _master-master_, atau _galera_) untuk cluster database.
  * **Disk Limit** \- jumlah ruang disk yang dicadangkan per node. Container [Shared Storage](<https://docs.dewacloud.com/docs/shared-storage-container/>) biasanya disediakan dengan kapasitas penyimpanan yang lebih besar.
  * **Sequential restart delay** \- penundaan antara penyelesaian operasi restart pada satu node dan dimulai pada node lain. Ini digunakan untuk menghindari downtime, memastikan bahwa setidaknya satu server aktif. Anda dapat mengaturnya ke " _-1_ " untuk restart simultan dari semua node dalam layer.
  * **[High-Availability](<https://docs.dewacloud.com/docs/auto-clustering/>)** (opsi yang tidak disarankan, disarankan untuk redeploy ke versi terbaru stack dan menggunakan fitur _Auto-Clustering_ sebagai gantinya) \- replikasi sesi otomatis untuk server aplikasi _Tomcat_ dan _TomEE_
  * **[Access via SLB](<https://docs.dewacloud.com/docs/shared-load-balancer/#deny-access-via-shared-load-balancer>)** \- memblokir akses ke node layer melalui Shared Load Balancer platform
  * **[Public IPv4/IPv6](<https://docs.dewacloud.com/docs/public-ip/>)** \- melampirkan jumlah alamat IP eksternal yang ditentukan ke setiap node dalam layer

5\. Di bagian bawah, Anda dapat menemukan tombol untuk alat konfigurasi container:

  * **[Variables](<https://docs.dewacloud.com/docs/container-variables/>)** \- tinjau dan kelola daftar [environment variables](<https://docs.dewacloud.com/docs/environment-variables/>) untuk layer saat ini
  * **[Links](<https://docs.dewacloud.com/docs/container-links/>)** \- menghubungkan layer di dalam environment
  * **[Volumes](<https://docs.dewacloud.com/docs/container-volumes/>)** \- kelola daftar data volume untuk memastikan integritas file selama siklus hidup container
  * **[Ports](<https://docs.dewacloud.com/docs/container-ports/>)** \- lihat informasi tentang port container
  * **[CMD / Entry Point](<https://docs.dewacloud.com/docs/container-run-configuration/>)** \- konfigurasikan _Entry Point_ dan _Run Command_ container

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/14-layer-containers-configuration.png" alt="layer containers configuration" max-width="100%"/>

## Meninjau dan Mengonfirmasi Pembuatan Environment {#reviewing-and-confirming-environment-creation}

Setelah semua konfigurasi selesai, Anda dapat meninjau jumlah sumber daya yang dialokasikan dan perkiraan biaya environment.

1\. Satuan pengukuran sumber daya utama di platform adalah [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>). Di sini, Anda dapat melihat jumlah cloudlets _reserved_ dan _scaling limit_ (dinamis) untuk seluruh environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/15-environment-resource-usage.png" alt="environment resource usage" max-width="100%"/>

Untuk analisis yang lebih baik, nilai-nilai tersebut dibagi menjadi kelompok-kelompok yang diberi tanda warna:

  * _hijau_ \- load balancers
  * _biru_ \- server aplikasi
  * _oranye_ \- database dan node cache
  * _abu-abu_ \- semua stack lainnya

2\. Selanjutnya, Anda dapat melihat **Estimated Cost** dari environment Anda. Widget menampilkan harga menggunakan tanda warna yang sama seperti di atas, dan Anda dapat mengubah periode - _hourly_, _daily_, atau _monthly_.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/16-environment-estimated-cost.png" alt="environment estimated cost" max-width="100%"/>

Tab **FROM** menunjukkan harga yang akan dikenakan secara penuh karena mencakup sumber daya yang dicadangkan. Tab **TO** menunjukkan harga maksimum yang mungkin jika semua node di environment mengonsumsi semua sumber daya hingga batas scaling selama periode tersebut.

:::tip
Arahkan kursor ke widget harga untuk melihat detail lebih lanjut tentang perhitungan biaya yang diperkirakan:
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/17-extended-details-on-environment-cost.png" alt="extended details on environment cost" max-width="100%"/>

Jika diperlukan, Anda dapat mengklik tautan di bawah widget untuk informasi tambahan tentang [cara kerja harga](<https://docs.dewacloud.com/docs/pricing-model/>) dan [apa yang dikenakan biaya di platform](<https://docs.dewacloud.com/docs/chargeable-resources/>).

3\. Terakhir, berikan nama untuk environment Anda dan klik tombol **Create** untuk melanjutkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/18-environment-name.png" alt="environment name" max-width="100%"/>

Itu saja! Dalam beberapa menit, environment baru Anda akan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/setting-up-environment/19-created-environment-in-dashboard.png" alt="created environment in dashboard" max-width="100%"/>

Sekarang, Anda siap untuk [deployment aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>) dan penggunaan lebih lanjut dari cloud environment Anda.

## Baca Juga {#whats-next}

  * [Deploy Aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Konfigurasi Aplikasi](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
  * [Berbagi Environment](<https://docs.dewacloud.com/docs/share-environment/>)