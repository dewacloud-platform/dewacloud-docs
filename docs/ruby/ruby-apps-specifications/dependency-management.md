---
sidebar_position: 1
slug: /ruby-dependency-management
title: Dependency Management
---
# Ruby Dependency Management

Semua server aplikasi berbasis Ruby (_Apache_ dan _NGINX_) disediakan dengan pengelola ketergantungan **[Bundler](<https://bundler.io/>)** secara default. Bundler secara otomatis melacak dan menginstal ketergantungan yang diperlukan oleh aplikasi Anda. Anda hanya perlu menentukan daftar gem yang diperlukan dalam _**[Gemfile](<https://bundler.io/gemfile.html>)**_, yang akan menyelesaikan semua ketergantungan.

Bundler melakukan penyelesaian ketergantungan dalam kasus berikut:

- [deploying applications](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [switching between Ruby versions](<https://docs.dewacloud.com/docs/container-redeploy/>)
- [changing deployment type](<https://docs.dewacloud.com/docs/ruby-center/#ruby-application-deployment>)

Setelah salah satu tindakan yang disebutkan di atas, Bundler mencari ketergantungan yang terdaftar di file konfigurasi dalam [RubyGems.org](<https://rubygems.org/>) (layanan hosting gem komunitas Ruby) dan, jika diperlukan, menginstalnya. Secara default, server aplikasi Ruby hanya disediakan dengan gem yang diperlukan untuk aplikasi contoh.

<img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Dependency%20Management/01-ruby-gemfile-dependencies.png" alt="Ruby Gemfile dependencies" max-width="100%"/>

_**Gemfile**_ mendukung deklarasi versi non-ketat (misalnya, lebih besar dari versi tertentu, _“jquery-rails”, “~ > 2.0.2”_). Dalam kasus seperti itu, Bundler akan mengunduh dan menginstal versi terbaru dari gem yang bersangkutan pada setiap tindakan penyelesaian ketergantungan.

Selain itu, jika aplikasi Anda menggunakan ketergantungan khusus (non-publik), Anda perlu menentukan URL repository mereka di Gemfile. Dengan cara ini, Bundler akan dapat mengunduh dan menginstal gem tersebut.

:::warning 
Ketika mengulang deployment environment Ruby, pastikan bahwa versi engine baru tercakup dengan benar dalam Gemfile. Jika tidak, Anda akan mendapatkan kesalahan ketidaksesuaian setelah prosesnya. Kami merekomendasikan untuk menggunakan deklarasi versi Ruby yang tidak ketat dalam Gemfile Anda, misalnya ruby “~> 2.6.0”. Bentuk fleksibel seperti itu mencegah Anda dari mengganggu proses deployment atau CI Anda sambil memungkinkan peningkatan versi Ruby Anda.
:::

## Baca Juga{#whats-next}

- [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
- [Ruby App Server Configuration](<https://docs.dewacloud.com/docs/ruby-application-server-config/>)
- [Post Deploy Configuration](<https://docs.dewacloud.com/docs/ruby-post-deploy-configuration/>)
