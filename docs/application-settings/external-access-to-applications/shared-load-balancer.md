---
sidebar_position: 1
slug: /shared-load-balancer
title: Shared Load Balancer
---
# Shared Load Balancer

Platform ini memanfaatkan beberapa komponen **Shared Load Balancer** (SLB) untuk memproses semua permintaan yang masuk (kecuali koneksi langsung melalui [public IP](https://docs.dewacloud.com/docs/public-ip/)) yang dikirim ke environment yang di-host. SLB bertindak sebagai **NGINX proxy server**, menghubungkan klien (misalnya, browser) dengan aplikasi Anda yang di-deploy di platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/shared-load-balancer/01-shared-load-balancer-overview.png" alt="shared load balancer overview" width="50%"/>

Shared Load Balancers mengarahkan permintaan eksternal melalui jaringan internal untuk terhubung ke aplikasi yang diperlukan. SLB membatasi setiap alamat sumber hingga 50 koneksi simultan untuk mencegah _DDoS attacks_.

Untuk memastikan ketersediaan tinggi, platform ini menggunakan **multiple synchronized Shared Load Balancers** yang di-host di server yang berbeda, menangani permintaan secara bersamaan. Load balancer ini bekerja dengan penyimpanan data bersama, memastikan pertukaran penuh jika satu instance gagal.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/shared-load-balancer/02-shared-load-balancer-high-availability.svg" alt="shared load balancer high availability" width="70%"/>

Pendekatan ini menciptakan banyak titik masuk untuk environment, mendistribusikan lalu lintas yang masuk secara efisien.

:::note
Kami merekomendasikan menggunakan SLB untuk environment **development** dan **test**. Untuk environment **production** yang menangani lalu lintas tinggi, lebih tepat menggunakan [public IP](https://docs.dewacloud.com/docs/public-ip/) untuk keamanan yang lebih baik dan opsi kustomisasi, seperti **Custom SSL** dan **Custom Domain**.
:::

## Backend Health Check dengan Shared Load Balancer{#backend-health-check}

SLB platform menggunakan [NGINX upstream check module](https://github.com/yaoweibin/nginx_upstream_check_module) untuk memantau kesehatan server secara konstan menggunakan pengaturan ini:

```bash
check interval=15000 rise=2 fall=3 timeout=2000 default_down=false;
```

- SLB menganggap semua container sebagai "up" saat startup.
- Sistem memeriksa ketersediaan node setiap 15 detik.
- Jika tidak ada respons yang diterima dalam 2 detik, pemeriksaan gagal.
- Tiga kegagalan berturut-turut menandai node sebagai "down."
- Dua kesuksesan berturut-turut menandai node sebagai "up."

:::tip
Jika environment memiliki beberapa backend (server aplikasi), node load balancer khusus ditambahkan secara otomatis untuk mengelola lalu lintas dan melakukan pemeriksaan kesehatan.
:::

## Menolak Akses melalui Shared Load Balancer{#deny-access}

Anda dapat dengan mudah menonaktifkan akses eksternal ke node environment melalui SLB dengan opsi yang sudah ditentukan di platform. Ini melarang akses melalui nama domain default dengan satu klik, tanpa perlu public IP atau penyesuaian firewall. Anda dapat mengaktifkan atau menonaktifkan **Access via SLB** di topology wizard.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/shared-load-balancer/04-access-via-slb.png" alt="access via SLB" width="50%"/>

:::note
Jika public IP ditambahkan ke sebuah layer, **Access via SLB** secara otomatis dinonaktifkan untuk layer itu untuk meningkatkan keamanan. Namun, Anda dapat mengaktifkan kembali akses SLB untuk menggunakan kedua opsi secara bersamaan.
:::

### Akses SLB Diaktifkan (Default):
- Node dapat diakses melalui SLB melalui nama domain environment pada port default (_80_, _8080_, _8686_, _8443_, _4848_, _4949_, _7979_).
- Tombol **Open in Browser** membuka layanan terkait (misalnya, panel admin basis data).
- Tautan node dimasukkan dalam email.

### Akses SLB Dinonaktifkan:
- Node tidak dapat diakses melalui SLB, dan layer diisolasi dari SLB.
- Mengklik **Open in Browser** mengembalikan _403 Forbidden_ error.
- Tautan node dikecualikan dari email.
- Akses **SSH** dan **endpoints** tetap tidak terpengaruh.

Layer dengan akses SLB yang dinonaktifkan diberi label sesuai di dashboard:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/shared-load-balancer/05-no-slb-access-label.png" alt="no SLB access label" width="100%"/>

Mencoba mengakses node semacam itu akan menghasilkan **403 Forbidden** error:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/shared-load-balancer/06-403-forbidden-access.png" alt="403 forbidden access" width="100%"/>

### Penggunaan Umum:
- Menutup akses publik SLB ke node yang dimaksudkan untuk penggunaan internal saja (misalnya, basis data).
- Melarang akses SLB ke node dengan public IP dan custom domains.
- Mengonfigurasi topologi yang memungkinkan koneksi load balancer tetapi memblokir akses URL langsung ke container.

Untuk environment **development** dan **testing**, akses SLB sering mencukupi. Namun, untuk environment **production**, disarankan untuk menonaktifkan akses SLB dan menggunakan [public IP](https://docs.dewacloud.com/docs/public-ip/) dan [custom domains](https://docs.dewacloud.com/docs/custom-domains/) untuk keamanan yang lebih baik.

## Baca Juga{#whats-next}

- [Load Balancing](https://docs.dewacloud.com/docs/load-balancing/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Endpoints](https://docs.dewacloud.com/docs/endpoints/)
- [Isolated Containers](https://docs.dewacloud.com/docs/isolated-containers/)