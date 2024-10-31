---
sidebar_position: 1
slug: /python-center
title: Python Dev Center
---
# Python Cloud Hosting

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/01-python-cloud-hosting.png" alt="Python cloud hosting" width="20%"/>

Platform ini menyediakan integrasi _Apache_ application server yang dapat diskalakan untuk hosting aplikasi berbasis Python. Server ini sudah dioptimalkan dan siap untuk manajemen langsung, memungkinkan Anda untuk mulai pengembangan tanpa repot mengurus berbagai tugas orkestrasi, yaitu membuat proses hosting semaksimal mungkin nyaman bagi pengembang.

Melalui artikel ini, Anda akan mengenal alat dan fitur utama yang tersedia di platform untuk memberikan tingkat hosting cloud Python yang diperlukan. Gunakan daftar isi di bawah ini untuk menemukan informasi yang dibutuhkan lebih cepat:

  * [Python Environment Hosting](<#python-environment-hosting>)
  * [Python Versioning](<#python-versioning>)
  * [Python Application Deployment](<#python-application-deployment>)
  * [Python Packages/Modules Management](<#python-packagesmodules-management>)
  * [Domains Management](<#domains-management>)
  * [Automatic Vertical Scaling](<#automatic-vertical-scaling>)
  * [Manual Horizontal Scaling](<#manual-horizontal-scaling>)
  * [Automatic Horizontal Scaling](<#automatic-horizontal-scaling>)
  * [Database Connection to Python Application](<#database-connection-to-python-application>)

## Python Environment Hosting{#python-environment-hosting}

Untuk mulai hosting aplikasi Python Anda di platform, Anda perlu [membuat](<https://docs.dewacloud.com/docs/setting-up-environment/>) lingkungan yang sesuai melalui _topology wizard_ yang kuat (dapat diakses melalui tombol **New Environment** di panel atas dashboard).

Beralih ke tab bahasa _**Python**_ dan pilih versi engine yang diinginkan. _Apache Python_ application server ditambahkan secara otomatis dengan modul _mod_wsgi_. Tentukan batas sumber daya dan jumlah node, serta tambahkan [software stack](<https://docs.dewacloud.com/docs/software-stacks-versions/>) atau opsi lain (misalnya Public IP) jika diperlukan.

:::note
Template ini menggunakan _systemd_ daemon modern.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/02-python-topology-wizard.png" alt="Python topology wizard" max-width="100%"/>

:::note
Setiap instance adalah container yang terisolasi sepenuhnya. Instance dari lapisan yang sama secara otomatis didistribusikan ke host yang tersedia untuk memastikan ketersediaan tinggi.
:::

## Python Versioning{#python-versioning}

Saat ini (pada saat penulisan), versi Python berikut didukung:

  * 3.8.19
  * 3.9.19
  * 3.10.13
  * 3.11.8
  * 3.12.5

Daftar terbaru dari versi yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara teratur (mingguan).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/03-python-versions.png" alt="Python versions" width="40%"/>

Anda dapat memilih [versi Python](<https://docs.dewacloud.com/docs/python-versions/>) yang dibutuhkan langsung dari topology wizard saat membuat lingkungan baru, serta menyesuaikannya untuk lingkungan yang sudah ada menggunakan [container redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>).

## Python Application Deployment{#python-application-deployment}

Deployment ke managed application servers (_Apache Python_) diotomatisasi oleh platform dan dapat dilakukan melalui salah satu alur berikut:

  * dari _VCS_ repository jarak jauh (mis. GitHub)
  * melalui _archive_ aplikasi yang diunggah dari URL eksternal atau dari mesin lokal

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/04-deploy-python-application.png" alt="deploy Python application" width="50%"/>

Git flow menyediakan kemungkinan deploy secara berurutan atau simultan, serta [automatic redeployment](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>) dari repository jika ada perubahan kode baru.

Lihat panduan berikut untuk ikhtisar mendetail tentang proses deployment dan opsi tambahan yang disediakan:

  * [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Auto-Deploy Overview](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)

Lihat contoh hosting aplikasi berbasis Python di platform:

  * [Django CMS](<https://www.virtuozzo.com/company/blog/django-cms-installation-python-cloud-hosting/>)
  * [Mezzanine CMS](<https://www.virtuozzo.com/company/blog/how-to-get-mezzanine-cms-inside-jelastic-cloud/>)
  * [Wagtail CMS](<https://www.virtuozzo.com/company/blog/deploy-wagtail-python-cms/>)

## Python Packages/Modules Management{#python-packagesmodules-management}

Untuk berhasil melakukan deployment dan menjalankan aplikasi Python, beberapa modul atau paket tambahan mungkin perlu diinstal. Praktik umum menjalankan aplikasi web Python dalam _**[virtual environments](<https://virtualenv.pypa.io/en/stable/>)**_ , misalnya menggunakan alat virtual environment, yang memungkinkan manajemen proyek secara independen tanpa hak administrator.

1\. Hubungkan ke lingkungan Python [via SSH](<https://docs.dewacloud.com/docs/ssh-access/>) (menggunakan _local_ atau _Web SSH_ client bawaan) untuk membuat dan memulai virtual environment baru. Jalankan perintah berikut:

```
virtualenv {appName} 
source {appName}/bin/activate
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/05-python-virtual-environment.png" alt="Python virtual environment" width="80%"/>

2\. Pengelolaan paket perangkat lunak yang diperlukan biasanya disediakan oleh _**[pip](<https://pip.pypa.io/en/stable/>)**_ \- sistem manajemen paket Python populer untuk repository [PiPI](<https://pypi.org/>). Di bawah ini adalah beberapa perintah umum:

  * `pip install {packageName}` \- menginstal modul yang diperlukan
  * `pip uninstall {packageName}` \- menghapus modul yang diinstal sebelumnya
  * `pip install -upgrade {packageName}` \- memperbarui modul ke versi terbaru
  * `pip install -r requirements.txt` \- menginstal semua modul yang terdaftar di file _requirements.txt_
  * `pip list` \- menampilkan set modul yang sudah diinstal

:::tip
Dalam kasus paket aplikasi yang telah dikonfigurasi sebelumnya (arsip), semua dependensi disediakan melalui file _requirements.txt_, yang dibaca selama proses deployment untuk menginstal modul Python yang tercantum secara otomatis. Juga, harus berisi file _wsgi.py_ dengan _entry point_ script untuk menjalankan aplikasi di dalam virtual environment menggunakan _mod_wsgi_ untuk Apache.
:::

## Domains Management{#domains-management}

Jika diperlukan, nama domain default aplikasi Python Anda dapat diganti dengan [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) melalui:

  * **CNAME redirect** jika menggunakan _Shared Load Balancer_ ; direkomendasikan untuk lingkungan _**dev**_ dan _**test**_
  * **DNS A Record** jika menggunakan _public IP_ ; dapat menangani beban lalu lintas tinggi dan cocok untuk lingkungan _**production**_

Selain itu, platform memungkinkan pengalihan lalu lintas antara dua lingkungan dengan cepat dan tanpa downtime (mis. untuk secara mulus mengarahkan pelanggan ke versi aplikasi yang lebih baru) menggunakan fungsionalitas [swap domains](<https://docs.dewacloud.com/docs/swap-domains/>) atau dengan bantuan _**SwapExtIps**_ [API](<https://docs.dewacloud.com/docs/cli-ip-swap/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/06-python-custom-domains-management.png" alt="Python custom domains management" max-width="100%"/>

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Automatic vertical scaling yang diimplementasikan oleh platform menyediakan jumlah sumber daya (RAM dan CPU) yang tepat yang dibutuhkan oleh aplikasi Anda. Akibatnya, Anda tidak perlu terus-menerus melakukan penyesuaian terkait beban. Dan dalam kombinasi dengan model harga [Pay-as-You-Use](<https://www.virtuozzo.com/company/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>), memastikan Anda tidak pernah membayar berlebihan untuk sumber daya yang tidak digunakan.

Cukup tetapkan batas [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) atas (masing-masing setara dengan _128 MiB_ RAM dan _400 MHz_ CPU) untuk server aplikasi Python Anda. Segala sesuatu yang lain akan ditangani oleh platform secara otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/07-python-automatic-vertical-scaling.png" alt="Python automatic vertical scaling" width="80%"/>

Lihat panduan [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) untuk detail tambahan.

## Manual Horizontal Scaling{#manual-horizontal-scaling}

Horizontal scaling pada server Python tidak berbeda dengan scaling instance lainnya di platform - cukup tentukan jumlah node yang diperlukan dengan tombol **+/-** di bagian tengah _topology wizard_. Jika diperlukan, pilih [scaling mode](<https://docs.dewacloud.com/docs/horizontal-scaling/#scaling-modes>) yang diinginkan:

  * _**Stateless**_ \- membuat semua node baru secara bersamaan dari template image dasar
  * _**Stateful**_ \- menyalin sistem file container master ke node baru secara berurutan

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/08-python-horizontal-scaling.png" alt="Python horizontal scaling" width="40%"/>

:::tip
Untuk distribusi permintaan yang tepat, [_load balancer_](https://docs.dewacloud.com/docs/load-balancing) akan otomatis ditambahkan ke lingkungan setelah _Python server_ scaling. Lihat dokumentasi [_horizontal scaling_](https://docs.dewacloud.com/docs/horizontal-scaling/#horizontal-scaling-specifics) untuk spesifikasi lebih lanjut.
:::

## Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Navigasikan ke **Settings > [Auto Horizontal Scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>)** untuk mengatur _custom triggers_, yang memungkinkan penambahan/pengurangan jumlah node secara otomatis sesuai dengan beban aplikasi. Pilih jenis sumber daya yang akan dimonitor (_CPU_ , _RAM_ , _Network_ , _Disk_) dan kondisi scaling yang tepat, tindakan lainnya akan diotomatisasi. Anda akan diberi tahu tentang perubahan melalui notifikasi email jika opsi ini diaktifkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-dev-center/09-python-automatic-horizontal-scaling.png" alt="Python automatic horizontal scaling" max-width="100%"/>

## Database Connection to Python Application{#database-connection-to-python-application}

Sekumpulan server database yang dapat diskalakan dan dikelola sepenuhnya tersedia di platform agar Anda mudah menginstal dan menggunakan untuk lingkungan Python. Untuk mengatur koneksi, sesuaikan aplikasi Anda berdasarkan instruksi untuk database yang diperlukan:

  * [MySQL Connection](<https://docs.dewacloud.com/docs/connection-to-mysql-python/>)
  * [MongoDB Connection](<https://docs.dewacloud.com/docs/connection-to-mongodb-python/>)

Selain itu, hosting di platform memungkinkan menggunakan alat dan fitur bawaan lainnya, seperti:

  * Custom atau Built-In SSL
  * Public IPv4 dan IPv6
  * Berbagai macam software stack yang dikelola
  * Container firewalls, endpoint, dan isolasi lingkungan
  * UI yang ramah pengguna dan akses Web SSH langsung untuk manajemen
  * Open API dan Cloud Scripting untuk otomatisasi
  * Model harga Pay-as-you-use
  * Fungsi kolaborasi untuk kerja tim
  * Distribusi multi-cloud

Jelajahi hosting Python berkualitas tinggi dengan PaaS.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)