---
sidebar_position: 2
slug: /deployment-manager
title: Deployment Manager
---
# Deployment Manager

**Deployment Manager** terletak di bagian bawah dashboard dan digunakan untuk menyimpan aplikasi agar mempermudah penerapan (deployment) ke dalam environment. Terdapat dua subseksi yang menyediakan dukungan untuk jenis deployment berikut:

  * _**[Archive](<#archive>)**_ \- menyimpan paket aplikasi, yang dapat diunggah dari mesin lokal Anda atau dari tautan eksternal mana pun
  * _**[Git / SVN](<#vcs>)**_ \- menyimpan tautan ke proyek Anda di dalam repositori Git / SVN jarak jauh dan kredensial akses yang sesuai (jika diperlukan)

## Application Archives{#application-archives}

1\. Tab _**Archive**_ di dalam bagian Deployment Manager memungkinkan untuk melihat semua arsip aplikasi yang disimpan di akun Anda. Daftar ini menyediakan informasi berikut:

  * **Name** \- nama dari arsip yang diunggah
  * **Comment** \- catatan khusus untuk aplikasi Anda
  * **Size** \- ukuran arsip aplikasi
  * **Upload Date** \- tanggal penambahan arsip ke Deployment Manager

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/01-archive-deployment-manager.png" alt="archive deployment manager" max-width="100%"/>

2\. Klik **Upload** dan dalam kotak dialog yang muncul, sediakan file yang sesuai baik dari mesin lokal Anda (tab _Local File_) atau dari Internet (_URL_): <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/02-upload-archive-to-deployment-manager.png" alt="upload archive to deployment manager" max-width="100%"/>

**Note:** Ukuran arsip maksimum untuk unggahan file lokal adalah _150 MB_. Jika ukuran aplikasi Anda melebihi batas ini, silakan gunakan opsi URL.

Isi kolom **Comment** (jika diperlukan) dan klik **Upload**.

3\. Untuk menerapkan aplikasi dari arsip, arahkan kursor ke file yang diperlukan dan klik tombol **Deploy to** yang muncul. <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/03-deploy-archive-from-deployment-manager.png" alt="deploy archive from deployment manager" max-width="100%"/>

Dalam jendela yang terbuka, Anda dapat [mengonfigurasi deployment](<https://docs.dewacloud.com/deployment-guide#archive>) sesuai kebutuhan Anda.

4\. Arsip yang tidak lagi diperlukan dapat dihapus dengan memilihnya menggunakan kotak centang sebelum nama dan mengklik tombol **Delete** di panel atas. <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/04-deployment-manager-delete-archives.png" alt="deployment manager delete archives" max-width="100%"/>

Sekarang, Anda tahu cara kerja tab arsip dari Deployment Manager dan dapat menggunakannya untuk mengorganisasi paket deployment Anda.

## Git / SVN Projects{#git-svn-projects}

1\. Bagian _**Git / SVN**_ dari Deployment Manager menyimpan tautan ke repositori jarak jauh dengan proyek Anda, dan jika diperlukan, kredensial autentikasi yang sesuai. <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/05-git-svn-deployment-manager.png" alt="git svn deployment manager" max-width="100%"/>

2\. Untuk menambahkan proyek baru, klik tombol **Add Repo** dan isi kolom-kolom pada jendela _**Add Repository**_ yang muncul:

  * **Name** \- nama aplikasi Anda (tidak boleh ada spasi atau simbol khusus)

  * pilih tipe repo _**Git**_

    * _URL_ \- URL yang sesuai ke repositori
    * _Branch_ \- cabang proyek yang diinginkan (_master_ secara default)
    * opsional, centang kotak _Use Authentication_ dan sediakan kredensial berbasis _Password or Token_ atau _[SSH Key](<https://docs.dewacloud.com/git-ssh>)_ 

**Note:** Jika repositori Anda dilindungi dengan autentikasi dua faktor, Anda perlu menggunakan token akses yang sesuai (misalnya untuk [GitHub](<https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line>) atau [GitLab](<https://docs.gitlab.com/ee/user/project/deploy_tokens/>)) alih-alih kata sandi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/05.1-deployment-authentication-with-git-access-token.png" alt="deployment authentication with git access token" max-width="100%"/>

Selain itu, Anda dapat mengelola cakupan izin yang diberikan selama pembuatan token akses untuk memastikan keamanan repositori Anda.

  * pilih tipe repo _**SVN**_

    * _URL_ \- tautan ke repositori Anda
    * _Login_ dan _Password_ \- kredensial autentikasi (jika diperlukan)

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/06-add-vcs-repository-to-deployment-manager.png" alt="add vcs repository to deployment manager" max-width="100%"/>

Anda bisa **Add** proyek ini ke Deployment Manager atau **Add + Deploy** untuk langsung memulai [deployment](<https://docs.dewacloud.com/deployment-guide#vcs>) aplikasi ini.

3\. Arahkan kursor ke proyek Git / SVN di Deployment Manager untuk mengakses opsi **Deploy to**, **Edit**, dan **Delete**.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-manager/07-manage-vcs-repositories-in-deployment-manager.png" alt="manage vcs repositories in deployment manager" max-width="100%"/>

Sekarang, Anda tahu cara mengelola proyek VCS di dalam platform Deployment Manager.

## Baca Juga{#whats-next}

  * [Deployment Guide](<https://docs.dewacloud.com/deployment-guide/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/deployment-hooks/>)
  * [SSH Access to GIT Repository](<https://docs.dewacloud.com/git-ssh/>)
  * [Git / SVN Auto-Deploy](<https://docs.dewacloud.com/git-svn-auto-deploy/>)