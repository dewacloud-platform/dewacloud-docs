---
sidebar_position: 1
slug: /java-vcs-deployment-with-maven
title: Java VCS Deployment with Maven
---

# Java VCS Deployment with Maven

**Maven** adalah alat build automation dan pemahaman perangkat lunak yang terutama digunakan untuk pemrograman Java. Dengan platform ini, Anda dapat menambahkan proyek _publik_ atau _privat_ langsung dari sistem versi kontrol (VCS) repository Anda menggunakan jenis tautan yang sesuai: _http_, _https_ atau _svn_ untuk **SVN** dan _git_, _http_, _https_ atau _ftp_ untuk **Git**. Setelah ditambahkan, proyek Java dapat didistribusikan ke application server yang tepat menggunakan Maven build node.

Sekarang, mari kita lihat bagaimana Anda dapat menambahkan aplikasi Java privat atau publik dari repository VCS remote langsung ke node Maven dan mendistribusikan proyek ini ke environment Anda.

:::tip
Sebelum melanjutkan ke deployment, Anda perlu menambahkan proyek Anda ke Deployment Manager. Sebagai contoh, Anda dapat menggunakan aplikasi demo “Hello World” dari repository GitHub kami (tidak diperlukan autentikasi) - gunakan tombol Clone atau download untuk mendapatkan URL yang diperlukan.
:::

## Add Project to Maven{#add-project-to-maven}

Anda dapat menambahkan proyek Java langsung ke node build Maven.

1\. Pilih tombol **Add project** di sebelah lapisan _Maven_, node atau garis _Projects_ di bawahnya:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/java-vcs-deployment-with-maven/maven-vcs-deployment-1.png" alt="Maven add project" width="100%"/>

2\. Dalam kotak dialog yang terbuka, Anda perlu mengisi kolom yang diperlukan:

  * **Name** \- menetapkan nama untuk proyek Anda (tidak diperbolehkan ada spasi dan simbol khusus)
  * **Repository** \- memungkinkan untuk memilih proyek Git / SVN dari Deployment Manager (atau langsung ke form penambahannya)
  * **Branch** \- mendefinisikan cabang repository yang digunakan (_master_ secara default)
  * **Working Directory** (opsional) - menyediakan path relatif ke subdirektori repository dengan source code aplikasi
  * **Deploy** \- memilih apakah proyek hanya dibangun di node Maven (jika tidak dicentang) atau dibangun dan langsung didistribusikan (jika dicentang); dengan opsi terakhir, diperlukan pengisian dua kolom tambahan:
    * **Environment** \- memilih environment target dengan application server (dipilih secara otomatis, saat diinstall dari application server)
    * **Context** \- menetapkan konteks kustom yang diinginkan untuk proyek (_ROOT_ secara default)
  * **Hooks** \- menerapkan [scripts](<https://docs.dewacloud.com/docs/deployment-hooks/>) yang disediakan baik sebelum atau setelah proses build / deployment
  * **Check and auto-deploy updates** \- mengaktifkan pemeriksaan berkala untuk perubahan kode di repository Anda (dengan frekuensi yang dapat dikonfigurasi); jika ada, diinisiasi [automatic deployment](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * **Auto-resolve conflicts** \- mencegah terjadinya konflik merge dengan memperbarui file yang bertentangan ke versi repository (yaitu, perubahan yang dibuat secara lokal dibuang)

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/java-vcs-deployment-with-maven/maven-vcs-deployment-2.png" alt="Maven configure project" width="60%"/>

:::tip
Jika memulai deployment dari Java application server, Anda mungkin perlu mengatur beberapa opsi tambahan:

- Build: memungkinkan untuk memilih node build Maven yang ada atau menambahkannya ke environment target.
- Deploy Strategy (untuk deployment ke server yang di-_scale_): memungkinkan memilih antara varian Simultaneous deployment yang relatif lebih cepat, yang menyebabkan downtime singkat, dan opsi Sequential deployment with delay untuk melakukan deployment pada server satu per satu dengan penundaan yang ditetapkan antara operasi, yang memastikan uptime aplikasi.
<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/java-vcs-deployment-with-maven/maven-vcs-deployment-3.png" alt="deploy strategy" width="60%"/>
:::

Akhirnya, pilih **Add** atau **Add + Build** (**Add + Deploy**) di bagian bawah frame. Opsi pertama hanya akan menyimpan data yang disediakan sebagai template proyek (yaitu, tanpa melakukan tindakan nyata apa pun), memungkinkan untuk melakukan operasi _build_ dan _deploy_ dengan mudah di masa mendatang.

3\. Sekarang, proyek Anda akan muncul dalam daftar _Projects_ node Maven. Di sini, ketika mengarahkan kursor dan mengklik tombol yang sesuai, Anda dapat memanggil tindakan berikut:

  * **Build** \- mengunduh proyek dari repository ke node Maven (hanya jika ada perubahan sejak build terakhir) dan mempersiapkannya untuk deployment

:::tip
Proyek yang dibuat dengan opsi ini dapat secara otomatis diunggah ke Deployment Manager sebagai arsip dengan mencentang kotak Upload builds to Deployment Manager.
<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/java-vcs-deployment-with-maven/maven-vcs-deployment-4.png" alt="deployment manager" width="60%"/>
:::

  * **Build and Deploy** \- memeriksa perubahan dan mendistribusikan proyek ke environment target (memungkinkan untuk memilih antara opsi _Simultaneous deployment_ dan _Sequential deployment with delay_, jika mendistribusikan ke [scaled server](<https://docs.dewacloud.com/docs/horizontal-scaling/>))

  * **Edit project** \- membuka form untuk mengedit data yang ditentukan dalam frame penambahan proyek yang dijelaskan pada langkah sebelumnya

  * **Config** \- membuka folder proyek build dalam [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)

  * **Log** \- membuka bagian [Log](<https://docs.dewacloud.com/docs/view-log-files/>) untuk pemecahan masalah dan analisis

  * **Delete** \- menghapus proyek ini dari Maven

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/java-vcs-deployment-with-maven/maven-vcs-deployment-5.png" alt="Maven manage projects" width="100%"/>

Ini adalah opsi GUI yang tersedia untuk manajemen node build Maven, untuk penyesuaian tambahan berkenalan dengan panduan [Maven Configuration](<https://docs.dewacloud.com/docs/maven-configuration/>).

## Baca Juga {#whats-next}

  * [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)
  * [Git / SVN Auto-Deploy](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)