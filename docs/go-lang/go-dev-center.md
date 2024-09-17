---
sidebar_position: 1
slug: /go-dev-center
title: Go Dev Center
---
# Golang Hosting

PaaS adalah platform cloud multibahasa sejati, yang saat ini menyediakan Java, PHP, Python, Ruby, Node.js, .NET, dan sekarang ada environment Go untuk menjalankan proyek dari semua ukuran dan berbagai jenis.

Dalam panduan ini, Anda akan diperkenalkan dengan fitur unik dari hosting Go dan diperkenalkan dengan kemungkinan terkait Go di dalam platform. Gunakan tabel konten di bawah ini untuk menemukan informasi yang diperlukan di dalam panduan dengan lebih cepat:

  * [Go Environment Hosting](<https://docs.dewacloud.com/docs/#go-environment-hosting>)
  * [Golang Versioning](<https://docs.dewacloud.com/docs/#golang-versioning>)
  * [Go Application Deployment](<https://docs.dewacloud.com/docs/#go-application-deployment>)
  * [Domains Management](<https://docs.dewacloud.com/docs/#domains-management>)
  * [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/#automatic-vertical-scaling>)
  * [Manual Horizontal Scaling](<https://docs.dewacloud.com/docs/#manual-horizontal-scaling>)
  * [Automatic Horizontal Scaling](<https://docs.dewacloud.com/docs/#automatic-horizontal-scaling>)

## Go Environment Hosting{#go-environment-hosting}

Untuk meng-host aplikasi Go Anda, Anda perlu [membuat](<https://docs.dewacloud.com/docs/setting-up-environment/>) environment yang sesuai dengan menggunakan **Topology Wizard**.

Beralih ke tab mesin **Go**, tambahkan _Golang_ sebagai server aplikasi Anda dan perangkat lunak lainnya yang diperlukan untuk proyek Anda (misalnya load balancers, databases atau shared storage). Jika diperlukan, sesuaikan jumlah node dalam environment Anda, batas cloudlet untuk RAM dan CPU, lampirkan IP publik, dll.

:::note
Template ini menggunakan daemon inisialisasi modern systemd.
:::

![Golang topology wizard](https://assets.dewacloud.com/dewacloud-docs/go-lang/Golang%20topology%20wizard.png)

:::note
Semua instance di platform adalah container yang sepenuhnya terisolasi, yang didistribusikan secara merata di seluruh host yang tersedia (server fisik atau VM) menggunakan aturan anti-ketergantungan otomatis. Ini menghilangkan risiko downtime aplikasi Anda, misalnya memastikan ketersediaan tinggi.
:::

Untuk informasi lebih lanjut tentang penyiapan environment, lihat dokumen [Create Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>).

## Golang Versioning{#golang-versioning}

Saat ini (pada saat penulisan ini), template stack _Golang_ yang didukung oleh platform adalah versi berikut:

  * 1.17.12
  * 1.18.10
  * 1.19.12
  * 1.20.14
  * 1.21.13
  * 1.22.7
  * 1.23.1

Daftar terbaru dari rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara berkala (mingguan).

Anda dapat memilih versi yang diinginkan selama pembuatan environment dan mengubahnya nanti melalui [container redeploy](<https://www.virtuozzo.com/application-platform-docs/container-redeploy/>). Di sini, semua data kustom di dalam node(s) akan disimpan, yang memungkinkan, misalnya, untuk dengan mudah meningkatkan versi perangkat lunak Anda setelah rilis template stack yang baru.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/03-go-containers-redeploy.png" alt="Go containers redeploy" width="50%"/>
</p>

## Go Application Deployment{#go-application-deployment}

Setelah pembuatan environment, Anda dapat [mendeploy](<https://docs.dewacloud.com/docs/deployment-guide/>) proyek Go Anda dari repositori Git (pendistribusian dari arsip aplikasi akan diimplementasikan dalam rilis platform mendatang).

Ada kemungkinan untuk menyesuaikan proses pendistribusian dengan menyediakan atau menyesuaikan [variabel](<https://www.virtuozzo.com/application-platform-docs/environment-variables/#go-golang>) container berikut:

  * _**GO_RUN**_ \- mengatur nama file biner yang dapat dieksekusi (jika tidak ditentukan, skrip pendistribusian akan mencoba menemukan satu berdasarkan nama proyek Git)
  * _**GOPATH**_ \- mendefinisikan folder distribusi (_/home/jelastic/webapp_ , secara default)
  * _**GO_BUILD_OPTIONS**_ \- menyediakan [opsi tambahan untuk operasi build](<https://golang.org/cmd/go/#hdr-Compile_packages_and_dependencies>) (_-a_, secara default, untuk memaksa membuat ulang paket yang sudah terbaru)
  * _**GO_RUN_OPTIONS**_ \- menyediakan [opsi tambahan untuk operasi run](<https://golang.org/cmd/go/#hdr-Compile_and_run_Go_program>)

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/04-go-application-deployment.png" alt="Go application deployment" width="50%"/>
</p>

Selama pendistribusian, platform secara otomatis melaksanakan langkah-langkah berikut:

  * menganalisis URL Git yang diberikan untuk mendapatkan tautan ke proyek Go
  * mengunduh paket dengan semua dependensi menggunakan perintah _**[go get](<https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them>)**_
  * jika terjadi kesalahan, mengunduh sebagai proyek Git umum dan mencoba kembali mendapatkan dependensi Go
  * membuat proyek dengan perintah _**go build**_ (menggunakan opsi tambahan yang ditentukan dalam variabel **GO_BUILD_OPTIONS**)
  * menjalankan biner yang ditentukan oleh variabel **GO_RUN** dengan perintah _**go run**_ (menggunakan opsi tambahan yang ditentukan dalam **GO_RUN_OPTIONS**)

Setelah pendistribusian berhasil, proyek Go terletak di direktori yang ditetapkan dengan variabel _**GOPATH**_. Di sini, [hierarki workspace](<https://golang.org/doc/gopath_code.html#Organization>) di dalamnya didasarkan pada persyaratan dalam dokumentasi resmi.

Anda dapat mempelajari lebih lanjut tentang deploy aplikasi Go melalui dokumen yang sesuai:

  * [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Auto-Deploy Overview](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)

## Domains Management{#domains-management}

Dengan platform, Anda dapat dengan mudah menghubungkan [domain eksternal (custom)](<https://docs.dewacloud.com/docs/custom-domains/>) ke aplikasi Go Anda untuk digunakan sebagai pengganti domain environment default. Tergantung pada entry point yang digunakan, ada dua opsi:

  * **CNAME redirect** jika menggunakan _Shared Load Balancer_; direkomendasikan untuk lingkungan _**dev**_ dan _**test**_
  * **DNS A Record** jika menggunakan _public IP_; dapat menangani beban lalu lintas tinggi dan cocok untuk lingkungan _**production**_

Anda juga dapat dengan mudah [menukar domain](<https://docs.dewacloud.com/docs/swap-domains/>) untuk mengarahkan lalu lintas dari satu environment ke environment lainnya (misalnya, untuk beralih ke versi aplikasi yang lebih baru tanpa downtime).

![Golang custom domains management](https://assets.dewacloud.com/dewacloud-docs/go-lang/05-golang-custom-domains-management.png)

:::tip
Untuk akses via public IP, lalu lintas dapat dialihkan ke environment lain dengan metode SwapExtIpsAPI (juga tersedia melalui CLI).
:::

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Skalabilitas vertikal otomatis dipastikan oleh kemampuan platform untuk secara dinamis menyediakan sumber daya (RAM dan CPU) untuk server dalam batas yang telah ditentukan sesuai dengan permintaan saat ini, tanpa memerlukan intervensi manual. Fitur ini menjamin Anda [tidak membayar lebih untuk sumber daya yang tidak digunakan](<https://www.virtuozzo.com/company/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>) dan menghemat waktu Anda dengan menghilangkan kebutuhan untuk menangani penyesuaian terkait beban atau perubahan arsitektural.

Proses skala secara otomatis ditangani oleh platform, Anda hanya perlu menentukan batas [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) bawah dan atas (masing-masing setara dengan _128 MiB_ RAM dan _400 MHz_ CPU) untuk server Go Anda melalui topology wizard:

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/06-golang-automatic-vertical-scaling.png" alt="Golang automatic vertical scaling" width="75%"/>
</p>

Aplikasi Anda akan bekerja dalam batas-batas ini mengurangi konsumsi sumber daya ketika beban rendah atau meningkatkannya ketika beban tinggi. Jadi, Anda hanya membayar untuk sumber daya yang benar-benar terpakai. Untuk informasi lebih lanjut, silakan merujuk ke dokumentasi [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>).

## Manual Horizontal Scaling{#manual-horizontal-scaling}

Server Golang tambahan dapat dengan mudah ditambahkan melalui topology wizard selama pembuatan atau penyesuaian environment. Cukup klik tombol “**+** ” pada bagian _Horizontal Scaling_ dan tambahkan jumlah instance yang diperlukan.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/07-golang-horizontal-scaling.png" alt="Golang horizontal scaling" width="50%"/>
</p>

Jumlah maksimum server jenis yang sama dalam satu lapisan environment tergantung pada pengaturan hosting provider tertentu (biasanya batas ini untuk 16 node dan dapat diperbesar dengan mengirimkan permintaan yang sesuai ke support).

Juga, Anda dapat melihat bahwa setelah melakukan scaling server Golang, node [load balancing](<https://docs.dewacloud.com/docs/load-balancing/>) secara otomatis ditambahkan ke topologi environment (diperlukan untuk distribusi permintaan yang tepat). Cari detail lebih lanjut tentang [manual horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) dalam dokumentasi.

## Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Skalabilitas horizontal otomatis diimplementasikan melalui pemicu yang dapat disesuaikan, yang memungkinkan untuk menambah atau mengurangi jumlah node karena beban aplikasi. Untuk mengonfigurasi penyesuaian otomatis, buka bagian **Settings > Monitoring > Auto Horizontal Scaling** pada environment dan klik tombol **Add**.

Di sini, Anda dapat mengatur pemicu untuk stack dan sumber daya tertentu (_CPU_, _RAM_, _Network_, _Disk_) dengan menyesuaikan kondisi penyesuaian skala.

![Golang automatic horizontal scaling](https://assets.dewacloud.com/dewacloud-docs/go-lang/08-golang-automatic-horizontal-scaling.png)

Pelajari lebih lanjut tentang [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) dalam dokumen terkait.

Selain itu, ada banyak fitur dan fungsionalitas lain yang disediakan oleh platform hosting Go, di antaranya:

  * Custom atau Built-In SSL
  * Public IPv4 dan IPv6
  * Pilihan yang luas dari managed databases
  * Firewall container, endpoint, dan isolasi environment
  * Antarmuka pengguna yang ramah dan akses SSH langsung untuk manajemen
  * Open API dan Cloud Scripting untuk otomasi
  * Model harga pay-as-you-use
  * Fungsionalitas kolaborasi untuk kerja tim
  * Distribusi multi-cloud

Hosting cloud Go siap untuk menjalankan dev, test, dan production environments Anda.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)