# Menyiapkan Lingkungan

Langkah pertama dalam hosting aplikasi adalah membuat [lingkungan](https://www.virtuozzo.com/application-platform-docs/paas-components-definition/#environment) dengan kontainer terisolasi yang diperlukan. Platform ini menyediakan antarmuka pengguna yang kuat dan intuitif untuk membuat dan mengkonfigurasi lingkungan sesuai kebutuhan spesifik Anda. Dokumen ini akan memandu Anda melalui semua langkah yang diperlukan, memberikan penjelasan mendalam tentang spesifikasi dan fitur yang tersedia.

1. Masuk ke dasbor platform dan klik tombol **New Environment** di sudut kiri atas.

![PaaS main buttons](#)

2. Dalam dialog _**topology wizard**_ yang terbuka, Anda dapat mengatur semua kustomisasi yang diperlukan. Kami merekomendasikan untuk melakukan penyesuaian dalam urutan berikut:

  * pilih bahasa pemrograman atau solusi penerapan khusus (_Docker Engine_ atau _Kubernetes Cluster_)
  * atur topologi dengan menambahkan tumpukan perangkat lunak yang diperlukan
  * konfigurasikan sumber daya dan spesifikasi node
  * tinjau estimasi, beri nama lingkungan, dan konfirmasi pembuatannya

![configure environment via wizard](#)

Di bawah ini, kami akan mengulas setiap poin ini secara rinci, memberikan penjelasan tentang semua kemungkinan yang tersedia. Prosesnya mungkin tampak kompleks pada awalnya, tetapi setelah terbiasa, Anda akan bisa mengkonfigurasi lingkungan baru (atau menyesuaikan yang sudah ada) dalam waktu kurang dari satu menit.

## Memilih Bahasa Pemrograman atau Opsi Penerapan Khusus

Langkah pertama dalam pembuatan lingkungan Anda adalah memilih solusi penerapan yang dibutuhkan untuk proyek Anda. PaaS adalah platform yang sangat fleksibel yang mendukung banyak opsi untuk pengembangan dan hosting aplikasi sehingga cocok bahkan untuk klien yang paling menuntut.

1. Pilihan yang paling umum dan direkomendasikan (kecuali Anda mengejar aplikasi/arsitektur tertentu) adalah **certified containers**. Tumpukan ini secara khusus dikonfigurasi dan dikelola oleh platform (misalnya, pembaruan versi, patch keamanan). Secara default, mereka mendukung semua fitur platform (scaling, penerapan otomatis, redeploy, SSL, dll.) untuk pengembangan dan hosting yang paling mulus dan nyaman.

![environment programming languages in wizard](#)

Klik pada tab dengan bahasa pemrograman yang diperlukan (_Java_, _PHP_, _Ruby_, _.NET_, _Node.js_, atau _Python_) untuk melanjutkan dengan kontainer bersertifikat platform.

2. Opsi penerapan lainnya tersedia melalui tab _Custom_. Semua varian di bawah ini memanfaatkan [system container](https://www.virtuozzo.com/application-platform-docs/what-are-system-containers/) dasar platform (disebut OS container), yang membuatnya kompatibel dengan sebagian besar fitur pembeda platform (misalnya, skala vertikal dan horizontal).

![topology wizard docker tab](#)

  * **Custom Container Images** \- setiap _Docker image_ (berdasarkan [OS yang didukung](https://www.virtuozzo.com/application-platform-docs/docker-supported-distributions/)) yang diterapkan ke dalam kontainer sistem. Dibandingkan dengan **managed containers**, opsi ini memberikan akses ke berbagai solusi yang lebih luas, menelusuri seluruh registry Docker Hub atau menggunakan repository pribadi Anda. Namun, keberoperasian perangkat lunak dan kompatibilitas dengan platform tidak dapat dijamin karena konten dikelola oleh pemelihara gambar masing-masing. Dianjurkan untuk membuat gambar kontainer kustom berdasarkan [gambar bersertifikat platform](https://hub.docker.com/u/jelastic) menggunakan [FROM instruction](https://docs.docker.com/engine/reference/builder/#from).

  * **Docker Engine** \- sebuah [_Docker Engine CE_](https://www.virtuozzo.com/company/blog/docker-engine-automatic-install-swarm-connect/) yang diterapkan ke dalam kontainer sistem. Ini menyediakan akses ke semua fungsionalitas asli Docker, termasuk penerapan, skala, dan manajemen beberapa [application containers](https://www.virtuozzo.com/application-platform-docs/what-are-application-containers/) di dalamnya.

  * **Kubernetes Cluster** \- _[Kubernetes cluster](https://www.virtuozzo.com/application-platform-docs/kubernetes-cluster/)_ siap pakai dengan control plane dan node pekerja yang sudah dikonfigurasi berdasarkan kontainer sistem. Penerapan, skala, dan orkestrasi mikrosingkat di dalamnya ditangani oleh unit kontrol Kubernetes, sementara platform mengukur dan mengelola control plane dan node pekerja.

3. Juga, disarankan untuk memilih [region](https://www.virtuozzo.com/application-platform-docs/environment-regions/) yang diinginkan (jika tersedia) sebelum melanjutkan lebih jauh.

![environment regions list](#)

## Mengonfigurasi Topologi

Anda dapat mengonfigurasi struktur topologi lingkungan ([layers](https://www.virtuozzo.com/application-platform-docs/paas-components-definition/#layer)) melalui bagian kiri wizard. Anggaplah ini sebagai pembangun yang membantu Anda membuat lingkungan Anda. Di sini, blok berikut tersedia:

  * **[Load Balancers](https://www.virtuozzo.com/application-platform-docs/load-balancing/)** \- tumpukan yang berfungsi sebagai titik masuk untuk lingkungan guna mendistribusikan permintaan masuk dan menciptakan beban yang merata pada node lainnya
  * **[Application Servers](https://www.virtuozzo.com/application-platform-docs/tomcat/)** (compute nodes) - server web yang menjalankan aplikasi Anda
  * **[Databases](https://www.virtuozzo.com/application-platform-docs/database-hosting/)** (_SQL_ & _NoSQL_) - solusi database untuk menyimpan dan mengelola data
  * **[Cache Node](https://www.virtuozzo.com/application-platform-docs/memcached/)** \- sistem caching objek Memcached untuk mempercepat aplikasi web dengan mengurangi beban database
  * **[Shared Storage](https://www.virtuozzo.com/application-platform-docs/shared-storage-container/)** \- node penyimpanan khusus dengan dukungan NFSv4, kapasitas disk yang diperbesar dan kinerja yang dioptimalkan
  * **[Elastic VPS](https://www.virtuozzo.com/application-platform-docs/vps/)** \- server virtual private di atas OS _CentOS_, _Ubuntu_, _Debian_, dan _Windows_
  * **[Build Node](https://www.virtuozzo.com/application-platform-docs/java-vcs-deployment/)** \- alat otomatisasi build untuk proyek Java
  * **Extra** (custom layers) - salah satu dari tumpukan yang disebutkan di atas

![environment topology builder ui](#)

**Tip:** Urutan blok yang ditampilkan di atas adalah urutan default. Namun, Anda dapat mencampur dan mencocokkannya dengan cara apa pun yang Anda inginkan untuk membuat topologi khusus Anda.

![custom topology order](#)

1. Platform ini menawarkan sejumlah opsi yang paling populer untuk masing-masing bagian ini berdasarkan peran default. Jika Anda ingin menambahkan [stack](https://www.virtuozzo.com/application-platform-docs/software-stacks-versions/) dengan peran berbeda, klik opsi **More** di bagian bawah daftar. Anda juga dapat menggunakan **Search** untuk dengan cepat menemukan tumpukan yang dikelola oleh platform mana pun.

![categorized stacks with search](#)

**Tip:** Jika Anda tidak dapat menemukan solusi perangkat lunak yang diperlukan, Anda dapat menambahkannya sebagai [custom container](https://www.virtuozzo.com/application-platform-docs/custom-containers-deployment/) dari Docker Hub atau repository pribadi Anda.

2. Perlindungan **SSL** dapat dikonfigurasi untuk lingkungan Anda melalui bagian yang sama. Di sini, dua opsi tersedia:

  * _**[Built-In SSL](https://www.virtuozzo.com/application-platform-docs/built-in-ssl/)**_ \- mengaktifkan sertifikat SSL terpercaya yang sudah ada, menghindari pemeriksaan tambahan dan menghemat waktu Anda dalam validasi sertifikat. Namun, ini hanya diterapkan pada nama domain lingkungan default (mis. dengan domain host pada akhir) dan tidak bekerja jika [public IP](https://www.virtuozzo.com/application-platform-docs/public-ip/) terhubung ke server Anda.
  * _**[Custom SSL](https://www.virtuozzo.com/application-platform-docs/custom-ssl/)**_ \- menunjukkan pra-kondisi penggunaan sertifikat SSL kustom Anda untuk lingkungan. Klik tombol **Enable** untuk secara otomatis memenuhi persyaratan (misalnya, aktifkan Public IP) dan lihat instruksi terhubung untuk panduan lebih lanjut.

**Tip:** Anda juga dapat menerapkan _**[Let’s Encrypt SSL](https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/)**_ add-on setelah pembuatan lingkungan untuk secara otomatis mengeluarkan dan mengintegrasikan sertifikat SSL gratis.

![environment ssl configuration](#)

## Mengonfigurasi Sumber Daya dan Spesifikasi Node

Setelah Anda selesai dengan struktur topologi, Anda dapat menyesuaikan setiap layer tertentu melalui bagian tengah wizard. Mari kita ulas opsi yang tersedia dari atas ke bawah bagian ini.

1. Anda dapat mengaktifkan/mematikan layer, serta memberikan alias khusus untuknya.

![environment layer switcher](#)

2. Konfigurasikan [automatic vertical scaling](https://www.virtuozzo.com/application-platform-docs/automatic-vertical-scaling/) dengan menetapkan jumlah yang dapat dicadangkan dan 
 dinamis [cloudlets](https://www.virtuozzo.com/application-platform-docs/cloudlet/) (1 cloudlet = **128 MiB** RAM dan **400 MHz** CPU) untuk node di dalam layer.

![layer vertical scaling configuration](#)

Anggap ini sebagai kapasitas minimum dan maksimum CPU & RAM per server. Perlu disebutkan bahwa tidak peduli seberapa tinggi batas skala, hanya sumber daya yang benar-benar dikonsumsi yang akan dikenakan biaya. Ini membantu mengatasi lonjakan beban dan, pada saat yang sama, tidak membayar lebih untuk memori atau prosesor yang tidak digunakan.

3. Bagian _[Horizontal Scaling](https://www.virtuozzo.com/application-platform-docs/horizontal-scaling/)_ memungkinkan untuk mendefinisikan jumlah node dalam layer dan memilih mode penskalaan yang diinginkan (stateful atau stateless).

![horizontal scaling and engine search](#)

Anda dapat menggunakan daftar drop-down untuk mengubah tipe/versi stack dan engine (jika perlu, perluas dan mulai mengetik untuk **Search**). Untuk penyesuaian lingkungan yang ada, daftar ini akan mengarah ke dialog [container redeploy](https://www.virtuozzo.com/application-platform-docs/container-redeploy/) untuk menerapkan perubahan.

**Tip:** Klik ikon _gear_ (dilingkari dalam gambar di bawah) untuk opsi [manajemen tambahan](https://www.virtuozzo.com/application-platform-docs/horizontal-scaling/#managing-nodes-within-layer) selama penskalaan.

![scaled nodes management](#)

4. Selanjutnya, Anda perlu mengonfigurasi pengaturan tambahan.

![additional layer configuration](#)

Daftar ini mungkin berbeda tergantung pada tumpukan dan izin akun tertentu:

  * **[Auto-Clustering](https://www.virtuozzo.com/application-platform-docs/auto-clustering/)** \- klasterisasi otomatis untuk beberapa template yang disertifikasi oleh platform. Bidang tambahan dapat muncul setelah aktifasi, misalnya, pemilihan skema (_master-slave_, _master-master_, atau _galera_) untuk kluster database.
  * **Disk Limit** \- jumlah ruang disk yang dicadangkan per node. Kontainer [Shared Storage](https://www.virtuozzo.com/application-platform-docs/shared-storage-container/) yang didedikasikan biasanya diberikan dengan kapasitas penyimpanan yang diperbesar.
  * **Sequential restart delay** \- keterlambatan antara penyelesaian operasi restart pada satu node dan memulai di node lain. Ini digunakan untuk menghindari downtime, memastikan setidaknya satu server aktif. Anda dapat mengaturnya ke “ _-1_ ” untuk restart secara bersamaan semua node dalam layer.
  * **[High-Availability](https://www.virtuozzo.com/application-platform-docs/session-replication/)** (opsi usang, direkomendasikan untuk melakukan redeploy ke versi terbaru dari stack dan menggunakan fitur _Auto-Clustering_ sebagai gantinya) - replikasi sesi otomatis untuk server aplikasi _Tomcat_ dan _TomEE_
  * **[Access via SLB](https://www.virtuozzo.com/application-platform-docs/shared-load-balancer/#deny-access-via-shared-load-balancer)** \- memblokir akses ke node dari layer melalui platform _Shared Load Balancer_
  * **[Public IPv4/IPv6](https://www.virtuozzo.com/application-platform-docs/public-ip/)** \- melampirkan jumlah alamat IP eksternal yang ditentukan ke setiap node dalam layer

5. Di bagian bawah bagian ini, Anda dapat menemukan tombol untuk alat konfigurasi kontainer:

  * **[Variables](https://www.virtuozzo.com/application-platform-docs/container-variables/)** \- mengulas dan mengelola daftar [environment variables](https://www.virtuozzo.com/application-platform-docs/environment-variables/) untuk layer saat ini
  * **[Links](https://www.virtuozzo.com/application-platform-docs/container-links/)** \- saling menghubungkan layer di dalam lingkungan
  * **[Volumes](https://www.virtuozzo.com/application-platform-docs/container-volumes/)** \- mengelola daftar volume data untuk memastikan integritas file selama siklus hidup kontainer
  * **[Ports](https://www.virtuozzo.com/application-platform-docs/container-ports/)** \- melihat informasi tentang port kontainer
  * **[CMD / Entry Point](https://www.virtuozzo.com/application-platform-docs/container-run-configuration/)** \- mengonfigurasi _Entry Point_ dan _Run Command_ kontainer

![layer containers configuration](#)

## Meninjau dan Mengonfirmasi Pembuatan Lingkungan

Setelah semua konfigurasi selesai, Anda dapat melihat jumlah sumber daya yang dialokasikan dan perkiraan biaya lingkungan tersebut.

1. Unit pengukuran sumber daya utama di platform adalah [cloudlets](https://www.virtuozzo.com/application-platform-docs/cloudlet/). Di sini, Anda dapat melihat jumlah cloudlet yang _tercadangkan_ dan batas skala (_dinamis_) untuk seluruh lingkungan.

![environment resource usage](#)

Untuk analisis yang lebih baik, nilai-nilai ini dibagi menjadi kelompok yang ditandai dengan warna:

  * _green_ \- load balancers
  * _blue_ \- application servers
  * _orange_ \- databases and cache nodes
  * _gray_ \- all other stacks

2. Selanjutnya, Anda dapat melihat **Estimated Cost** dari lingkungan Anda. Widget menampilkan harga menggunakan penandaan warna yang sama seperti di atas, dan Anda dapat mengubah periode - _hourly_, _daily_, atau _monthly_.

![environment estimated cost](#)

Tab **FROM** menunjukkan harga yang akan sepenuhnya dikenakan karena mencakup sumber daya yang dicadangkan. Tab **TO** menunjukkan harga maksimum yang mungkin jika semua node dalam lingkungan akan sepenuhnya mengonsumsi semua sumber daya hingga batas skala selama seluruh periode.

**Tip:** Arahkan kursor ke widget penetapan harga untuk melihat detail yang diperluas tentang perhitungan biaya yang diestimasikan:

![extended details on environment cost](#)

Jika perlu, Anda dapat mengklik tautan di bawah widget untuk informasi tambahan tentang [bagaimana perhitungan harga](https://www.virtuozzo.com/application-platform-docs/pricing-model/) dan [apa yang dikenakan biaya di platform](https://www.virtuozzo.com/application-platform-docs/chargeable-resources/).

3. Terakhir, beri nama lingkungan Anda dan klik tombol **Create** untuk melanjutkan.

![environment name](#)

Itu saja! Dalam beberapa menit, lingkungan baru Anda akan muncul di dasbor.

![created environment in dashboard](#)

Sekarang, Anda sudah siap untuk [deployment aplikasi](https://www.virtuozzo.com/application-platform-docs/deployment-guide/) dan penggunaan lebih lanjut dari lingkungan cloud Anda.

## Apa yang Selanjutnya?

  * [Deploy Application](https://www.virtuozzo.com/application-platform-docs/deployment-guide/)
  * [Application Configuration](https://www.virtuozzo.com/application-platform-docs/configuration-file-manager/)
  * [Share Environment](https://www.virtuozzo.com/application-platform-docs/share-environment/)