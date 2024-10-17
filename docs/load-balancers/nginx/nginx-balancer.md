---
sidebar_position: 1
slug: /nginx-balancer
title: NGINX Balancer
---
# NGINX Load Balancer

Stack _NGINX balancer_ sudah mendukung [HTTP/3](<https://docs.dewacloud.com/docs/http3/>) dengan fitur yang diaktifkan secara default sejak rilis _1.16.1_. Namun, diperlukan [alamat IP publik](<https://docs.dewacloud.com/docs/public-ip/>) untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.

**[NGINX](<http://nginx.org/en/>)** adalah server proxy TCP/UDP, HTTP, dan reverse proxy open-source. Ini adalah salah satu solusi paling populer untuk load balancing di dunia, yang memberikan pelanggan kinerja tinggi dan penggunaan sumber daya yang efisien. Arsitektur modular NGINX memastikan kustomisasi yang dipersonalisasi yang dapat mendukung semua kebutuhan pelanggan, termasuk fitur-fitur seperti:

  * proxying umum untuk TCP dan UDP
  * melayani file statis, auto-indexing
  * reverse proxying yang dipercepat dengan caching
  * pengalihan kode kesalahan 3xx-5xx
  * dukungan SSL dan TLS SNI
  * kontrol akses, fault tolerance, dan banyak lagi

Load balancing dengan NGINX cocok untuk sebagian besar kasus karena skalabilitasnya, keamanan, keandalan, dan efisiensi biaya. Membuat load balancer berbasis NGINX baru adalah proses yang sederhana di platform.

1\. Masuk ke dashboard dan klik tombol **New Environment** di sudut kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20balancer/01-new-environment-button.png" alt="new environment button" width="100%"/>

2\. Di dalam topology wizard yang terbuka secara otomatis, pilih **NGINX** di bagian _Balancing_ (dilingkari pada gambar di bawah). Jika load balancer ditambahkan ke environment dengan server aplikasi, semua konfigurasi yang diperlukan untuk mendistribusikan permintaan di antara instance yang tersedia akan diterapkan secara otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20balancer/02-add-nginx-load-balancer.png" alt="add NGINX load balancer" width="100%"/>

Selanjutnya, Anda perlu mengatur konfigurasi yang diinginkan untuk NGINX balancer Anda ([cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>), ruang disk, [alamat IP](<https://docs.dewacloud.com/docs/public-ip/>), dll.), tambahkan stack lain yang diperlukan (misalnya, server aplikasi atau database), dan klik **Create**.

3\. Tunggu beberapa saat hingga platform menyiapkan environment untuk Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20balancer/03-environment-with-nginx-balancer.png" alt="environment with NGINX balancer" width="100%"/>

Selamat, NGINX load balancer Anda siap digunakan! Sekarang, Anda bisa melanjutkan ke konfigurasinya.

## Baca Juga{#whats-next}

  * [NGINX Balancer Security Configs](<https://docs.dewacloud.com/docs/nginx-balancer-security/>)
  * [TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)
  * [Testing Load Balancing](<https://docs.dewacloud.com/docs/testing-load-balancing/>)
  * [Caching in NGINX Balancer](<https://docs.dewacloud.com/docs/nginx-caching/>)
