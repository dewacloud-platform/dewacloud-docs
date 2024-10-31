---
sidebar_position: 1
slug: /redmine
title: Redmine
---
# How to Deploy Redmine

**Redmine** adalah sistem berbasis web open-source untuk manajemen proyek dan pelacakan masalah. Ditulis menggunakan kerangka kerja Ruby on Rails, Redmine bersifat lintas platform dan lintas basis data.

Dalam tutorial ini, kami akan menunjukkan cara menginstal dan menjalankan aplikasi Redmine Anda sendiri di dalam platform.

Anda dapat memiliki instance **Redmine** yang berjalan dalam hitungan menit menggunakan opsi penginstalan sekali klik.

Prosesnya sederhana - cukup klik **Get it hosted now**, ketik email Anda dan instal Redmine dalam satu menit melewati langkah instalasi manual. Temukan daftar lengkap aplikasi yang tersedia untuk penginstalan sekali klik di [halaman Marketplace kami](<https://www.virtuozzo.com/application-platform/marketplace/>).

Jika Anda ingin mengkonfigurasi dan menjalankan instance Redmine Anda secara manual, ikuti instruksi langkah demi langkah di bawah ini.

## Environment Creation{#environment-creation}

1. Masuk ke platform dashboard dan klik tombol **Create environment**.

2. Navigasikan ke tab **Ruby**, pilih **Apache** sebagai server aplikasi Anda dan **MySQL** sebagai database. Tentukan batas cloudlet untuk node yang dipilih, beri nama environment Anda (contoh: _redmine_) dan klik **Create**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/01-environment-topology-wizard.png" alt="environment topology wizard" max-width="100%"/>

3. Tunggu hingga pembuatan selesai, ini hanya memerlukan waktu semenit.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/02-redmine-environment-created.png" alt="Redmine environment created" max-width="100%"/>

## Redmine Deployment{#redmine-deployment}

1. Buka [situs web resmi Redmine](<https://www.redmine.org/projects/redmine/wiki/Download>) dan unduh rilis stabil terbaru sebagai arsip **.tar.gz** atau **.zip**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/03-download-redmine-package.png" alt="download Redmine package" max-width="100%"/>

2. Kembali ke platform dashboard dan unggah arsip ini melalui Deployment Manager.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/04-upload-redmine-archive.png" alt="upload Redmine archive" max-width="100%"/>

3. Terakhir, deploy paket Redmine ke environment yang telah dibuat sebelumnya. Untuk itu, klik tombol **Deploy to..** di samping arsip yang diunggah dan pilih environment yang diinginkan.

   Kemudian pilih jenis deployment aplikasi (_Production_ dalam kasus kami) dan klik tombol **Deploy**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/05-deploy-redmine-to-production.png" alt="deploy Redmine to production" max-width="100%"/>

Dalam beberapa saat, Redmine akan dihosting di dalam environment yang dipilih.

## Database Configurations{#database-configurations}

1. Tekan tombol **Open in Browser** untuk node MySQL di environment.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/06-open-mysql-in-browser.png" alt="open MySQL in browser" max-width="100%"/>

2. Masuk ke panel admin menggunakan kredensial yang dikirimkan platform kepada Anda setelah pembuatan environment. Navigasikan ke tab **SQL**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/07-database-sql-tab.png" alt="database SQL tab" max-width="100%"/>

3. Anda akan melihat formulir kosong untuk menjalankan permintaan SQL. Masukkan baris berikut di sana dan klik **Go** untuk membuat database baru.

   ```
   CREATE DATABASE redmine CHARACTER SET utf8;
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/08-database-execute-sql-query.png" alt="database execute SQL query" max-width="100%"/>

4. Kemudian kembali ke platform dashboard dan klik tombol **Config** di samping server **Apache**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/09-apache-config-button.png" alt="Apache config button" max-width="100%"/>

5. Dalam Configuration Manager yang terbuka, navigasikan ke folder **webroot > ROOT > config**, temukan file _**database.yml.example**_ dan salin isinya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/10-copy-database-yml-example.png" alt="copy database.yml example" max-width="100%"/>

6. Kemudian buat file _**database.yml**_ baru di folder yang sama (**config**) dan tempelkan string yang telah disalin ke dalamnya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/11-create-database-yml.png" alt="create database.yml" max-width="100%"/>

7. Sekarang Anda perlu mengkonfigurasi koneksi ke DB menggunakan data dari database MYSQL Anda.

Bagian untuk konfigurasi khusus harus dipilih tergantung pada jenis deployment yang Anda pilih saat pembuatan environment (_production_ dalam kasus kami).

Tentukan _**host**_ MySQL (URL ke database Anda tanpa _http://_) dan kredensial yang Anda terima saat pembuatan environment dalam string _**username**_ dan _**password**_.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/12-configure-mysql-connection.png" alt="configure MySQL connection" max-width="100%"/>

:::note
Jika Anda berencana untuk mengubah jenis deployment ke yang lain (development atau testing) nanti, Anda harus menentukan parameter koneksi ini di semua bagian yang sesuai.
:::

8. **Save** perubahan yang telah dibuat.

## Application Server Configurations{#application-server-configurations}

1. Klik tombol **Config** untuk node **Apache** di environment Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/09-apache-config-button.png" alt="Apache config button" max-width="100%"/>

2. Di folder **webroot > ROOT** buat file baru dan beri nama _**rake_deploy**_.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/13-create-rake-deploy-file.png" alt="create rake_deploy file" max-width="100%"/>

3. Tempelkan string berikut ke dalam file yang baru dibuat:

   ```
   generate_secret_token
   db:migrate
   redmine:load_default_data
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/14-configure-rake-deploy.png" alt="configure rake_deploy" max-width="100%"/>

4. **Save** perubahan dan **Restart** node Apache.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/15-restart-apache-node.png" alt="restart Apache node" max-width="100%"/>

5. Terakhir, tekan tombol **Open in Browser** di samping environment Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/16-open-redmine-in-browser.png" alt="open Redmine in browser" max-width="100%"/>

Halaman beranda aplikasi Redmine Anda akan terbuka.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Redmine/17-redmine-home-page.png" alt="Redmine home page" max-width="100%"/>

Itu saja. Sekarang Anda memiliki aplikasi Redmine Anda sendiri yang siap dijalankan di platform. Nikmati!

## Baca Juga{#whats-next}

- [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
- [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [Ruby Post Deploy Configuration](<https://docs.dewacloud.com/docs/ruby-post-deploy-configuration/>)
- [Ruby Dependency Management](<https://docs.dewacloud.com/docs/ruby-dependency-management/>)
