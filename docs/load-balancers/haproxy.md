---
sidebar_position: 4
slug: /haproxy
title: HAProxy
---
# HAProxy

**HAProxy** (singkatan dari _High Availability Proxy_) adalah solusi open-source yang cepat dan andal, yang mampu menangani lalu lintas besar dan menawarkan ketersediaan tinggi, load balancing, dan proxy untuk aplikasi berbasis TCP dan HTTP. Mirip dengan Nginx-Balancer, ini menggunakan model event-driven single-process, yang mengonsumsi jumlah memori yang rendah (dan stabil), memungkinkan HAProxy untuk memproses sejumlah besar permintaan bersamaan, memastikan load balancing yang lancar dengan ketahanan yang cerdas dan mitigasi DDOS.

HAProxy berfokus pada memastikan load balancing yang canggih dengan menyediakan beragam alat dan fitur yang didukung untuk membuatnya secepat, seefisien mungkin (terutama dalam penggunaan RAM dan CPU), dan se-stabil mungkin. Berikut adalah beberapa kemampuan utama yang ditawarkan HAProxy:

  * pengecekan periodik server back-end
  * logging canggih dan kustom
  * alat analisis log yang kuat (_halog_)
  * dukungan penuh HTTP 1.1 di sisi server dan klien
  * antarmuka web grafis dengan statistik kerja

:::note
Template ini menggunakan daemon inisialisasi modern systemd.
:::

Dapatkan server load balancer HAProxy Anda di platform dengan mengikuti langkah-langkah di bawah ini.

## HAProxy Deployment{#haproxy-deployment}

1\. Masuk ke akun PaaS Anda.

2\. Klik tombol **New environment** di pojok kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/01-new-environment-button.png" alt="new environment button" width="50%"/>

3\. Load balancer bekerja dengan server aplikasi apa pun dan semua instance lainnya. Jadi pilih **Haproxy** di bagian _Balancing_ dari wizard menggunakan daftar drop-down yang sesuai (dilingkari pada gambar di bawah ini):

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/02-environment-wizard.png" alt="environment wizard" max-width="100%"/>

Kemudian pilih node lain yang Anda butuhkan untuk environment Anda dan tentukan jumlah sumber daya yang dialokasikan untuk masing-masing. Terakhir, ketik nama environment (misalnya _haproxy_) dan klik **Create**.

4\. Environment Anda akan dibuat dalam beberapa menit.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/03-environment-with-haproxy-created.png" alt="environment with HAProxy created" max-width="100%"/>

Sekarang Anda telah memiliki HAProxy load-balancer yang terinstal dan siap digunakan di depan aplikasi Anda, dan dapat mulai menggunakannya atau, awalnya, menyesuaikannya sesuai kebutuhan Anda.

## HAProxy Configurations{#haproxy-configurations}

Seperti yang disebutkan di atas, HAProxy disediakan dengan panel admin terintegrasi, yang dapat diakses dengan mengklik tombol **Open in Browser** 

![haproxy open in browser](#)

dan menambahkan akhiran _**/haproxy_adm_panel**_ ke URL environment di bilah alamat browser. Setelah itu, Anda hanya perlu menentukan kredensial balancer (dikirimkan kepada Anda melalui email) di jendela otentikasi pop-up yang muncul.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/05-haproxy-admin-panel.png" alt="HAProxy admin panel" max-width="100%"/>

Di halaman yang terbuka, Anda dapat melihat daftar balancer HAProxy dan server yang bekerja dengannya. Selain itu, setiap instance dilengkapi dengan informasi rinci tentang antrian, sesi, peringatan dan kesalahan, informasi pengecekan, dan lainnya. Beberapa tindakan konfigurasi dapat dilakukan menggunakan drop-down tepat di bawah tabel.

Selain itu, Anda dapat menentukan beberapa pengaturan tambahan dengan cara berikut:

1\. Melalui dashboard dengan mengedit file konfigurasi utama **conf > _haproxy.conf_**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/06-haproxy-config-file.png" alt="HAProxy config file" max-width="100%"/>

Di sini, Anda juga dapat menghubungkan server aplikasi ke balancer Anda (bahkan dari environment lain) untuk ditempatkan di belakangnya. Cukup tambahkan catatan yang sesuai ke bagian **backend bk_http** dalam format berikut:

``` 
server webserver{n} {server_intenal_ip}:80 cookie S{n} check   
```

di mana nilai di dalam kurung kurawal harus diganti dengan nilai custom Anda:

  * `{n}` \- pengidentifikasi yang disukai untuk server yang ditautkan
  * `{server_internal_ip}` \- alamat server yang diperlukan, yang dapat ditemukan dengan memilih tombol **Additionally** di sebelahnya

Setelah konfigurasi ini selesai, **Save** perubahan yang dibuat dan **Restart** server load-balancer untuk menerapkannya.

2\. Melalui akses node HAProxy yang sesuai melalui [SSH Gateway](<https://docs.dewacloud.com/docs/ssh-access/>):

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/haproxy/07-haproxy-ssh-access.png" alt="HAProxy SSH access" max-width="100%"/>

Kami berharap Anda menikmati bekerja dengan HAProxy dan memanfaatkan GUI yang kuat untuk mendapatkan manfaat maksimal dari kemungkinan manajemen yang disediakan platform.

## Baca Juga{#whats-next}

  * [Load Balancing Overview](<https://docs.dewacloud.com/docs/load-balancing/>)
  * [NGINX Load Balancing](<https://docs.dewacloud.com/docs/nginx-load-balancer/>)
  * [LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>)
  * [Varnish](<https://docs.dewacloud.com/docs/varnish/>)