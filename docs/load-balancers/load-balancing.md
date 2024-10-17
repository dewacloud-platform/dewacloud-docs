---
sidebar_position: 1
slug: /load-balancing
title: Load Balancing
---
# Load Balancing

Load balancing adalah proses navigasi lalu lintas dan distribusi beban kerja di beberapa komponen, yang dilakukan oleh jenis node khusus yang disebut **load balancers**. Di platform, node semacam itu ditambahkan secara otomatis saat [application server scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) untuk mendistribusikan permintaan di antara backend. Selain itu, jika diperlukan, Anda dapat menambahkan dan men-scale instance load balancer secara manual dalam environment topology.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/load%20balancing/01-environment-load-balancer-layer.png" alt="environment load balancer layer" width="70%"/>

:::warning
Platform menyediakan load balancing pada lapisan aplikasi (dokumen ini) dan lapisan infrastruktur (dijelaskan dalam dokumen Shared Load Balancer). Yang pertama menangani permintaan di dalam environment dan yang kedua - dari luar platform ke environment (kecuali koneksi langsung melalui public IP).
:::

Saat ini, platform menyediakan dukungan out-of-box untuk lima stack load balancer yang dikelola berikut:

  * _**NGINX**_ adalah salah satu server open-source paling populer di dunia, yang memberikan kinerja luar biasa kepada pelanggan, memastikan efisiensi aplikasi mereka. Menggunakan NGINX tidak memerlukan langkah tambahan atau pra-konfigurasi. Ini menawarkan _Layer 7_ load balancing bawaan dan caching konten untuk menyediakan platform hosting aplikasi yang hemat biaya dan sangat tersedia berkat skalabilitas, keamanan, dan efisiensi penggunaan sumber daya yang tinggi.

  * _**HAProxy**_ (_High Availability Proxy_) adalah solusi open-source yang cepat dan andal yang dapat menangani lalu lintas besar serta menawarkan ketersediaan tinggi, load balancing, dan proxying untuk aplikasi berbasis TCP dan HTTP. Mirip dengan balancer NGINX, HAProxy menggunakan model penanganan permintaan single-process, event-driven. Ini mengonsumsi jumlah memori yang rendah (dan stabil), memungkinkan HAProxy memproses banyak permintaan bersamaan, memastikan load balancing yang mulus dengan persistensi pintar dan mitigasi DDOS.

  * _**Varnish**_ adalah akselerator aplikasi web yang juga dikenal sebagai caching HTTP reverse proxy untuk situs web dinamis dengan lalu lintas tinggi. Tidak seperti server proxy lainnya, Varnish awalnya dirancang fokus secara eksklusif pada HTTP. Namun, dalam implementasi platform, ia disertakan dalam bundle dengan server NGINX (dijalankan sebagai proxy HTTPS), yang memberikan kemampuan untuk bekerja dengan data aman dan opsi Custom SSL. Fokusnya pada kecepatan terutama dicapai melalui caching, mempercepat situs web dengan mengurangi beban pengiriman objek statis.

  * _**Apache**_ load balancer adalah server distribusi lalu lintas open-source yang menyediakan opsi kustomisasi tinggi melalui struktur modularnya. Apache balancer dapat dikonfigurasi untuk memenuhi persyaratan unik setiap environment, sekaligus memastikan manfaat seperti keamanan, ketersediaan tinggi, kecepatan, keandalan, dan autentikasi/otorisasi terpusat.

  * _**LiteSpeed Web ADC**_ (Application Delivery Controller) adalah solusi load balancing HTTP dengan kinerja tinggi yang bersifat komersial. LiteSpeed mengimplementasikan semua teknologi terkini (mis. dukungan protokol transportasi [HTTP/3 atau QUIC](<https://docs.dewacloud.com/docs/http3/>)), menyediakan keamanan tingkat lanjut (perlindungan firewall aplikasi web, pemfilteran layer-7 anti-DDOS, dll.), kinerja tingkat enterprise (caching, akselerasi, optimisasi, offloading, dll.), dan masih banyak lagi.

Menggunakan beberapa compute nodes dengan load balancer adalah pendekatan yang disukai untuk tujuan produksi, karena ini memastikan redundansi dan ketersediaan sistem yang tinggi.

## Backend Health Checks{#backend-health-checks}

Setiap load balancer di tingkat environment menyediakan implementasi health check default untuk memastikan backend dapat diakses dan berfungsi dengan benar. Temukan detail lengkapnya dalam daftar di bawah ini:

  * _**NGINX**_ \- pemeriksaan _TCP check_ sederhana (mis. memverifikasi ketersediaan port server yang diperlukan) tepat sebelum meneruskan permintaan pengguna; jika pemeriksaan gagal, node berikutnya dalam layer akan dicoba
  * _**HAProxy**_ \- pemeriksaan _**TCP checks**_ reguler (setiap 2 detik secara default), menyimpan hasilnya dalam tabel status backend dan terus memperbaruinya
  * _**Apache Balancer**_ \- tidak ada prosedur health check yang diterapkan secara default
  * _**Varnish**_ \- semua backend diberi parameter berikut dalam konfigurasi balancer (sehingga pemeriksaan kesehatan dilakukan sekali per menit dengan timeout 30 detik):

    ```  
    probe = { .url = "/"; .timeout = 30s; .interval = 60s; .window = 5; .threshold = 2; }
    ```  

  * _**LiteSpeed ADC**_ \- pemeriksaan _TCP check_ dilakukan oleh IP internal setiap detik dengan timeout satu detik (pemeriksaan kesehatan diterapkan sebagai fungsi default di level _Worker Group_)

Pengaturan default untuk health check jelas dapat disesuaikan secara manual sesuai kebutuhan Anda (baik melalui GUI [file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) atau melalui [SSH](<https://docs.dewacloud.com/docs/ssh-access/>)). Gunakan dokumentasi resmi sebagai referensi - _[NGINX](<https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check/>)_, _[HAProxy](<https://www.haproxy.com/documentation/hapee/2-0r1/load-balancing/health-checking/active-health-checks/>)_, _[Apache Balancer](<https://httpd.apache.org/docs/2.4/mod/mod_proxy_hcheck.html>)_, _[Varnish](<https://varnish-cache.org/docs/7.0/users-guide/vcl-backends.html#health-checks>)_, dan _[LiteSpeed](<https://docs.litespeedtech.com/products/lsadc/settings/>)_.

## Baca Juga{#whats-next}

  * [NGINX TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)
  * [NGINX Balancer Configuration](<https://docs.dewacloud.com/docs/nginx-balancer-config/>)
  * [LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>)
  * [HAProxy](<https://docs.dewacloud.com/docs/haproxy/>)
  * [Varnish](<https://docs.dewacloud.com/docs/varnish/>)
