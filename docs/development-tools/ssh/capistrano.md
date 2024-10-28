---
sidebar_position: 7
slug: /ssh-capistrano
title: Capistrano
---
# Capistrano

Capistrano adalah alat open-source untuk menjalankan skrip di server jarak jauh. Paling sering, ini digunakan untuk melakukan deployment aplikasi melalui koneksi SSH. Capistrano ditulis dalam Ruby sebagai komponen dari framework Ruby on Rails, oleh karena itu, banyak digunakan untuk deployment aplikasi Ruby. Namun, ini dapat dengan mudah bekerja dengan bahasa pemrograman lainnya, misalnya PHP.

Jadi, dalam instruksi ini kita akan mengetahui cara melakukan deployment aplikasi PHP secara jarak jauh, melalui alat Capistrano. Awalnya Anda akan membutuhkan:

  * environment PHP yang sudah dibuat dengan server aplikasi Apache;
  * [kunci SSH publik yang dihasilkan](<https://docs.dewacloud.com/docs/ssh-generate-key/>) dan [ditambahkan ke dashboard](<https://docs.dewacloud.com/docs/ssh-add-key/>) platform Anda;
  * repositori GIT dengan aplikasi PHP yang ingin Anda deploy (saat ini alat Capistrano 3 hanya mendukung jenis GIT VCS);
  * salinan lokal dari proyek ini di komputer Anda.

Mari kita mulai!

:::note
Commands below should be executed at your local machine’s user, similar to one you’ve used during SSH key pair generation, in order to avoid permission/connection errors.
:::

## Install Capistrano{#install-capistrano}

1\. Untuk menggunakan Capistrano, Anda perlu memiliki Ruby yang terinstal di komputer lokal Anda. Oleh karena itu, jalankan perintah yang sesuai:

```
apt-get install ruby rubygems  
```

2\. Kemudian, instal alat Capistrano dengan memasukkan perintah berikut:

```
gem install capistrano  
```

3\. Pastikan Anda memiliki folder **config** di direktori lokal dengan proyek Anda (karena ini adalah folder default dengan konfigurasi untuk Ruby on Rails). Buat folder ini jika Anda belum memilikinya.

```
mkdir {path_to_your_project}/config  
```

## Capify Your Application{#capify-your-application}

Setelah instalasi, Anda perlu mengkapifikasi aplikasi Anda, yaitu konfigurasi Capistrano untuk deployment aplikasi. Untuk melakukan ini, navigasikan ke folder root dari proyek PHP lokal Anda dan jalankan perintah berikut:

```
cap install  
```

Ini akan membuat file dan direktori baru di dalam proyek Anda:

  * **Capfile** adalah file utama Capistrano yang mengurusi konfigurasi yang diperlukan dan globs untuk tugas kustom.
  * Folder **config/deploy/** dengan dua file (_**staging.rb**_ dan _**production.rb**_) untuk pengaturan deployment khusus environment.
  * Skrip Ruby **config/_deploy.rb_** yang berisi konfigurasi aplikasi dan instruksi Capistrano.
  * Folder **lib/capistrano/tasks/** untuk tugas kustom Anda.

:::tip
As an option, you can try the dedicatedcapistrano-jelasticgem, maintained bygerado-navarro, for automating your Rails apps' deployment to the platform.
:::

## Set Custom Configurations{#set-custom-configurations}

1\. Navigate to the _**config/deploy.rb**_ file and configure it corresponding to your settings. Initially it looks like following:

Modify the next strings:

  * masukkan nama untuk aplikasi Anda:
    
```
set :application, "my_app_name"  
```
  
  * tentukan URL ke repositori VSC dengan kode aplikasi PHP Anda:
    
```
set :repo_url, "git@example.net:me/my_repo.git"  
```

:::note
Anda perlu memiliki kunci SSH publik yang terhubung ke akun GIT Anda (yang sama yang telah Anda tambahkan ke dasbor platform). Jika tidak, Anda akan mendapatkan kesalahan "Permission denied" saat mencoba melakukan deployment aplikasi Anda. Anda juga dapat menggunakan https:link dari tipe berikut:1set :repo_url, "https://example.net/GIT_user_name/repo_name.git". Dalam kasus ini, otentikasi tidak diperlukan dan Anda dapat menyatakan URL ke repositori open-source PHP apa pun yang ingin Anda deploy.
:::

  * uncomment the following line and state the directory your application will be deployed to (this value is default for the platform PHP app servers): 
    
```
# set :deploy_to, '/var/www/webroot'  
```
  
  * uncomment the following lines: 

```
set :scm, :git
set :format, :pretty
set :pty, true  
```

  * hapus string dengan kode tugas di akhir file (dimulai dari perintah _**namespace :deploy do**_) dan tempelkan baris berikut sebagai gantinya:

```
namespace :deploy do
  desc 'Restart Apache'
  task :apache do
    on roles(:app) do
      execute :sudo, "service httpd restart"
    end
  end

  desc 'Creating symlink'
  task :symlink do
    on roles(:app) do
      execute :rm, "-rf /var/www/webroot/ROOT"
      execute :ln, "-s /var/www/webroot/current /var/www/webroot/ROOT"
    end
  end

  desc 'Restart Apache and create symlink'
  task :restart
  before :restart, :symlink
  before :restart, :apache
end

after 'deploy:publishing', 'deploy:restart'
```

Anda juga dapat mengkonfigurasi pengaturan tambahan di file ini (misalnya, tentukan cabang repositori atau tautkan file/folder tambahan) jika diperlukan.

Simpan perubahan yang Anda buat.

2\. Selanjutnya navigasikan ke file _**config/deploy/staging.rb**_. Konten defaultnya adalah:

Edit tiga string _**role :**_ di bagian _Simple Role Syntax_ dengan menempelkan `{nodeid-uid@your.SSH.host}` menggantikan `{deploy@example.com}`. Gunakan nilai berikut:

  * _**nodeid**_ \- nilai ID node dari container server aplikasi Apache di ringkasan Anda.
  * _**uid**_ \- nomor sebelum simbol @ dalam string koneksi SSH Anda. Setelah itu, ubah garis pengaturan server (_bagian Extended Server Syntax_):
  * tentukan host SSH Anda, misalnya _**server 'gate.jelastic.com'**_
  * masukkan nilai `{nodeid}` `{uid}` untuk parameter **user**, misalnya _**user: '190403-136'**_

Dengan demikian, baris pengaturan server Anda akan terlihat seperti berikut:

```
server 'gate.jelastic.com', user: '190403-136', roles: %w{web app}, my_property: :my_value 
```

Akhirnya, tentukan port server yang akan digunakan untuk koneksi SSH:

```
set :ssh_options, {
  port: 3022
} 
```

Jangan lupa untuk menyimpan konfigurasi khusus ini.

3\. Buka **Capfile** (terletak di folder root dari proyek lokal Anda) dan tambahkan baris berikut ke dalamnya:

```
Rake::Task[:staging].invoke 
```

## Configure SSH Agent{#configure-ssh-agent}

1\. Pastikan Anda memiliki _**ssh-agent**_ yang berjalan di sistem Anda. 2. Tambahkan kunci SSH privat Anda ke agen. Itu harus sesuai dengan kunci publik yang telah Anda tambahkan ke dashboard.

```
ssh-add {full_path_to_the_necessary_private_SSH_key} 
```

3\. Anda juga bisa memeriksa apakah kunci yang benar telah ditambahkan dengan memasukkan perintah _**ssh-add -l**_.

## Check Configurations{#check-configurations}

Sekarang, mari pastikan bahwa semuanya telah dikonfigurasi dengan benar.

Navigasikan ke folder root dari proyek lokal Anda dan jalankan perintah berikut:

```
cap staging deploy:check 
```

Capistrano akan terhubung ke container jarak jauh, membuat folder yang diperlukan di direktori deployment (dinyatakan dalam parameter _set :deploy_to_), dan memeriksa semua file yang diperlukan, hak yang diperlukan, alat, dll. pada server jarak jauh dan lokal.

Jika ada yang hilang, Anda akan mendapatkan pesan kesalahan yang sesuai.

## Deploy Application{#deploy-application}

Akhirnya, lanjutkan ke deployment aplikasi. Untuk melakukan ini, jalankan perintah berikut di folder root proyek:

```
cap staging deploy 
```

Ketika operasi ini berhasil diselesaikan, navigasikan ke URL environment Anda dan pastikan aplikasi Anda telah dideploy.

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [Generate SSH Key](<https://docs.dewacloud.com/docs/ssh-generate-key/>)
  * [Add SSH Key](<https://docs.dewacloud.com/docs/ssh-add-key/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [SSH Protocols](<https://docs.dewacloud.com/docs/ssh-protocols/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)