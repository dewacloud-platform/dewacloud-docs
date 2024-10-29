---
sidebar_position: 5
slug: /varnish
title: Varnish
---
# Varnish

Stack _Varnish_ siap untuk [HTTP/3](<https://docs.dewacloud.com/docs/http3/>) dengan dukungan fitur yang diaktifkan secara default sejak versi _5.2.x_ dan _6.x.x_. Namun, [alamat IP publik](<https://docs.dewacloud.com/docs/public-ip/>) diperlukan untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.

**Varnish** adalah akselerator aplikasi web yang juga dikenal sebagai caching HTTP reverse proxy untuk situs web dinamis dengan lalu lintas tinggi. Berbeda dengan server proxy lainnya, ini awalnya dirancang untuk fokus secara eksklusif pada HTTP. Namun, dalam implementasi platform, ini disediakan dalam satu paket dengan server NGINX (dijalankan di port _443_ sebagai proxy HTTPS), yang memberikan kemampuan untuk bekerja dengan data yang aman dan opsi [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>) secara khusus. Dalam kasus ini, setelah dekripsi lalu lintas masuk, NGINX mengarahkannya langsung ke Varnish (dijalankan di port _80_) untuk diproses lebih lanjut.

Sebagai akselerator, Varnish hanya memiliki dukungan load balancing dasar, yang, bagaimanapun, masih mencakup opsi _round robin_ dan _random redirector_, pemeriksaan kesehatan _backend_, dan banyak lagi. Namun, penekanannya adalah pada kecepatan, yang sebagian besar dicapai melalui caching, yang membuat situs web lebih cepat dengan melepaskan pengiriman objek statis.

Selain itu, Varnish adalah perangkat lunak modular dengan berbagai modul yang tersedia, termasuk alat untuk statistik (seperti _varnishstat_, _varnishhist_), penganalisis lalu lintas langsung yang kuat (_varnishlog_) dan banyak lainnya. Selanjutnya, server ini sangat berulir, dengan setiap koneksi klien ditangani oleh utas pekerja terpisah. Ketika jumlah utas pekerja aktif mencapai batas yang dikonfigurasi, koneksi masuk ditempatkan dalam antrean overflow. Jika antrean ini tumbuh hingga batas yang dinyatakan, koneksi masuk lebih lanjut akan ditolak.

:::note
Template ini menggunakan modernsystemdinitialization daemon.
:::

Jadi, jika Anda ingin mendapatkan Varnish sebagai load balancer untuk lingkungan Anda, cukup selesaikan beberapa langkah sederhana yang dijelaskan di bawah ini.

## Varnish Load Balancer Installation{#varnish-load-balancer-installation}

1\. Masuk ke dashboard PaaS dengan kredensial Anda.

2\. Klik tombol **New environment**, yang terletak di pojok kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/new-env.png" alt="Varnish new environment" width="50%"/>

3\. Di dalam tab bahasa pemrograman mana pun yang Anda pilih, aktifkan bagian _Balancing_ wizard dan pilih **Varnish** menggunakan daftar drop-down yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/env-wiz.png" alt="Varnish environment wizard" width="100%"/>

Atur konfigurasi lain yang diperlukan (tambahkan server aplikasi dan instance lainnya, nyatakan batasan sumber daya melalui slider cloudlets, aktifkan [IP eksternal](<https://docs.dewacloud.com/docs/public-ip/>) untuk node, dll.). Kemudian beri nama environment baru Anda (misalnya _varnish_) dan lanjutkan dengan tombol **Create**.

4\. Dalam beberapa menit, environment Anda akan dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/env-created.png" alt="Varnish created" width="100%"/>

Itulah semua tentang instalasi Varnish! Sekarang Anda dapat melanjutkan ke konfigurasinya.

## Varnish Server Configurations{#varnish-server-configurations}

Load balancer Varnish dapat disesuaikan sesuai kebutuhan Anda dengan salah satu cara berikut:

  * melalui akses ke server yang diperlukan melalui [SSH Gateway](<https://docs.dewacloud.com/docs/ssh-access/>) platform: 

    <img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/ssh.png" alt="Varnish SSH" width="100%"/>

  * atau dengan menggunakan file manager tersemat untuk mengedit file konfigurasi: 

    <img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/config-button.png" alt="Varnish config button" width="100%"/>

Berikut adalah beberapa contoh konfigurasi yang dapat dilakukan langsung melalui dashboard:

1\. Hubungkan server (bahkan dari environment lain), yang akan ditempatkan sebagai backend dari load balancer ini. Untuk itu, tambahkan catatan baru di awal file **vcl > _default.vcl_**, mirip dengan yang di bawah ini:

```
backend server_identifier { .host = "server_intenal_ip"; .port = "80"; }
```

di mana nilai-nilai berikut harus diganti dengan milik Anda sendiri:

  * _server_identifier_ \- nama yang diinginkan dari server yang dihubungkan
  * _server_internal_ip_ \- alamat dari server yang diperlukan, yang dapat ditemukan melalui tombol **Additionally** di sampingnya

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/config.png" alt="Varnish configs" width="100%"/>

Setelah itu, tambahkan string lain sedikit lebih rendah di bagian _**sub vcl_init**_ di bawah baris _new myclust = directors.hash();_ dalam format berikut:

```
myclust.add_backend(server_identifier, 1);
```

di mana, tentu saja, nilai _server_identifier_ harus ditentukan, sama seperti yang digunakan dalam string yang ditambahkan sebelumnya. Gunakan gambar di atas sebagai contoh.

Setelah konfigurasi ini selesai, **Simpan** perubahan yang dibuat dan **Restart** server load balancer untuk menerapkannya.

2\. Terapkan modul Varnish khusus ke server Anda dengan cara mengunggahnya ke folder **vmods**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/mods.png" alt="Varnish modules" width="100%"/>

3\. Sesuaikan parameter awal demon Varnish, yang dibaca dari file konfigurasi **sysconfig > _varnish_** setiap kali balancer mulai.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/varnish/demon.png" alt="varnish daemon" width="100%"/>

Kami berharap instruksi ini akan membantu Anda untuk mengonfigurasi Varnish load balancer sesuai kebutuhan Anda.

## Baca Juga{#whats-next}

  * [Load Balancing Overview](<https://docs.dewacloud.com/docs/http-load-balancing/>)
  * [NGINX Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)
  * [HAProxy](<https://docs.dewacloud.com/docs/haproxy/>)
