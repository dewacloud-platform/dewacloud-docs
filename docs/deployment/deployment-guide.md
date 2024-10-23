---
sidebar_position: 3
slug: /deployment-guide
title: Deployment Guide
---
# Deployment Guide

Platform ini mendukung berbagai cara deployment aplikasi secara otomatis, sehingga memungkinkan Anda untuk memilih opsi yang paling sesuai dengan kebutuhan spesifik Anda:

- _**Dashboard**_ \- sesuai dengan [deployment via archive](https://docs.dewacloud.com/docs/#archive-deployment-configurations) (disediakan baik sebagai _local file_ atau _URL_)
- _**VCS**_ \- memungkinkan untuk [mendeploy dari repositori VCS](https://docs.dewacloud.com/docs/#git--svn-deployment-configurations) Anda (misalnya, _Git_, _SVN_, _Bitbucket_)
- _**Hub Registry**_ \- membuat container khusus dengan aplikasi Anda berdasarkan image Docker yang disimpan di registry _[publik](https://docs.dewacloud.com/docs/docker-container-deploy/)_ atau _[pribadi](https://docs.dewacloud.com/docs/docker-container-deploy/)_

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/01-deployment-options.png" alt="deployment options" width="100%"/>

Untuk informasi lebih lanjut tentang dua opsi terakhir, gunakan tautan yang sesuai, sementara dalam panduan ini kami akan menjelaskan deployment via archive dan repositori VCS. Mereka dapat dipanggil baik dari **[Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/)** atau dengan mengarahkan kursor ke catatan _**Deployments**_, yang disediakan untuk semua server aplikasi, dan mengklik salah satu tombol yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/02-application-server-deployments.png" alt="application server deployments" width="100%"/>

Dua ikon pertama (_Local file_ dan _URL_) sesuai dengan deployment via archive dan yang terakhir (_Git / SVN_) - untuk deployment dari repositori VCS. Pilih opsi yang sesuai dan klik untuk melanjutkan dengan konfigurasi deployment Anda.

:::note
Tipe deployment VCS untuk server aplikasi Java dilakukan dengan bantuan Maven build node, rujuk ke panduan terkait untuk detail tambahan. Proses deployment .NET untuk server aplikasi berbasiskan Windows IIS berbeda dari alur standar yang dijelaskan di panduan ini.
:::

## Archive Deployment Configurations{#archive-deployment-configurations}

Prosesnya sangat sederhana dan dapat dimulai hanya dalam beberapa detik dengan menetapkan dua parameter utama (yaitu menyediakan _archive_ yang diperlukan dan menentukan _environment_ target). Dengan demikian, deployment dapat disesuaikan dengan kebutuhan spesifik Anda dengan menyesuaikan konfigurasi tambahan.

Di bawah ini, kami telah memberikan deskripsi rinci untuk semua opsi yang mungkin dalam frame deployment:

- **Local file** (atau **URL**) - menunjukkan file arsip yang akan dideploy (dipilih secara otomatis, saat menginstal dari Deployment Manager)
- **Environment** \- memilih lingkungan target dengan server aplikasi (dipilih secara otomatis, saat menginstal dari server aplikasi)
- **Path** \- menetapkan konteks khusus yang diinginkan; di sini, opsi yang tersedia mungkin terbatas karena spesifik bahasa pemrograman yang digunakan (misalnya, _Python_ dan _Node.js_ hanya memiliki satu jalur deployment yang telah ditentukan sebelumnya)
- **Hooks** \- menerapkan [skrip](https://docs.dewacloud.com/docs/deployment-hooks/) yang disediakan baik sebelum atau setelah proses deployment
- **Deploy Strategy** (untuk deployments di [server yang di-scale](https://docs.dewacloud.com/docs/horizontal-scaling/)) - memungkinkan untuk memilih antara varian _Simultaneous deployment_ yang lebih cepat secara relatif, yang menyebabkan downtime singkat, dan opsi _Sequential deployment with delay_ untuk melakukan deployment pada server satu per satu dengan penundaan yang ditentukan di antara operasi, yang memastikan uptime aplikasi
- **Enable zero-downtime deployment** (hanya untuk server PHP) - menyesuaikan (jika opsi dicentang) aliran deployment untuk [menghindari downtime aplikasi](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/03-archive-deployment-configurations.png" alt="archive deployment configurations" width="100%"/>

Klik **Deploy** untuk memulai proses itu sendiri.

## Git / SVN Deployment Configurations{#git--svn-deployment-configurations}

Prosesnya sangat sederhana dan dapat dimulai hanya dalam beberapa detik dengan menetapkan dua parameter utama (yaitu memilih _repository_ yang diperlukan dari Deployment Manager dan menentukan _environment_ target). Dengan demikian, deployment dapat disesuaikan dengan kebutuhan spesifik Anda dengan menyesuaikan konfigurasi tambahan.

Di bawah ini, kami telah memberikan deskripsi rinci untuk semua opsi yang mungkin dalam frame deployment:

- **Repository** \- memungkinkan untuk memilih proyek Git / SVN dari Deployment Manager (atau melompat ke formulir penambahannya)
- **Branch** \- mendefinisikan cabang repositori yang digunakan (_master_ secara default)
- **Environment** \- memilih lingkungan target dengan server aplikasi (dipilih secara otomatis, saat menginstal dari server aplikasi)
- **Path** \- menetapkan konteks khusus yang diinginkan; di sini, opsi yang tersedia mungkin terbatas karena spesifik bahasa pemrograman yang digunakan (misalnya, _Python_ dan _Node.js_ hanya memiliki satu jalur deployment yang telah ditentukan sebelumnya)
- **Build** (untuk deployment aplikasi Java) - memungkinkan untuk memilih [Maven build node](https://docs.dewacloud.com/docs/java-vcs-deployment/) yang sudah ada (atau menambahkannya ke environment target) dan, jika diperlukan, memilih _Working Directory_ repositori
- **Hooks** \- menerapkan [skrip](https://docs.dewacloud.com/docs/deployment-hooks/) yang disediakan baik sebelum atau setelah proses deployment
- **Deploy Strategy** (untuk deployments di [server yang di-scale](https://docs.dewacloud.com/docs/horizontal-scaling/)) - memungkinkan untuk memilih antara varian _Simultaneous deployment_ yang lebih cepat secara relatif, yang menyebabkan downtime singkat, dan opsi _Sequential deployment with delay_ untuk melakukan deployment pada server satu per satu dengan penundaan yang ditentukan di antara operasi, yang memastikan uptime aplikasi
- **Check and auto-deploy updates** \- mengaktifkan pemeriksaan berkala untuk perubahan kode di repositori Anda (dengan frekuensi yang dapat dikonfigurasi); jika ada, [deployment otomatis](https://docs.dewacloud.com/docs/git-svn-auto-deploy/) proyek dimulai
- **Auto-resolve conflicts** \- mencegah terjadinya konflik merge dengan memperbarui file yang bertentangan ke versi repositori (yaitu perubahan yang dibuat secara lokal dibuang)
- **Enable zero-downtime deployment** (hanya untuk server PHP) - menyesuaikan aliran deployment untuk [menghindari downtime aplikasi](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/04-vcs-deployment-configurations.png" alt="vcs deployment configurations" width="100%"/>

Klik **Deploy** untuk memulai proses.

Dalam beberapa menit, aplikasi Anda akan berhasil dideploy. Sekarang, Anda dapat mengaksesnya dengan tombol **Open in Browser**, menganalisis melalui [Logs](https://docs.dewacloud.com/docs/view-log-files/), atau mengelolanya dengan [file manager](https://docs.dewacloud.com/docs/configuration-file-manager/) / melalui [akses SSH](https://docs.dewacloud.com/docs/ssh-access/).

## Editing Git / SVN Projects{#editing-git--svn-projects}

Jika diperlukan, Anda dapat menyesuaikan proyek VCS yang sudah dideploy dengan mengklik tombol **Edit** untuk deployment yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/05-edit-vcs-project.png" alt="edit VCS project" width="100%"/>

Dalam frame yang terbuka, Anda dapat mengedit parameter yang sama seperti yang dijelaskan di atas untuk frame deployment. Misalnya, dimungkinkan untuk beralih cabang, menambahkan hooks, mengaktifkan auto-deploy pembaruan, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment_guide/06-edit-project-dialog.png" alt="edit project dialog" width="100%"/>

:::note
Jika kredensial akses ke repositori proyek berubah, Anda perlu menyediakan yang baru di platform untuk terus bekerja dengan proyek ini. Pertama, edit autentikasi untuk repositori di Deployment Manager. Kemudian, Anda perlu mengedit semua proyek yang sudah ada dari repositori ini. Platform akan secara otomatis bertanya apakah Anda ingin memperbarui kredensial. Klik _Yes_ untuk menerapkan kredensial baru ke proyek.
:::

## Baca Juga{#whats-next}

- [Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/)
- [Java VCS Deployment](https://docs.dewacloud.com/docs/java-vcs-deployment/)
- [ZDT Deployment for PHP](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)
- [Deploy .NET Project](https://docs.dewacloud.com/docs/deploy-dotnet-archive-url/)
- [Deployment Hooks](https://docs.dewacloud.com/docs/deployment-hooks/)