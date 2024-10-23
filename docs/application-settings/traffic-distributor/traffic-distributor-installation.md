---
sidebar_position: 3
slug: /traffic-distributor-installation
title: Traffic Distributor Installation
---

# Instalasi Traffic Distributor

Menginstal **Traffic Distributor** melalui **Marketplace** platform adalah proses yang mudah. Panduan berikut mengarahkan Anda melalui langkah-langkah yang diperlukan untuk mengatur Traffic Distributor untuk mengelola dan mendistribusikan lalu lintas di berbagai environment.

:::note
Panduan ini berfokus pada pemasangan Traffic Distributor untuk environment baru. Untuk menerapkannya pada proyek yang sudah ada, silakan merujuk ke panduan **Inject Traffic Distributor into Running Project**.
:::

## Langkah-Langkah Instalasi

### Langkah 1: Akses Marketplace
1. Masuk ke dashboard platform.
2. Klik tombol **Marketplace** di bagian atas dashboard.

![PaaS main buttons](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/01-paas-main-buttons.png)

### Langkah 2: Temukan Paket Traffic Distributor
1. Di dalam tab **Apps** dari Marketplace, navigasikan ke bagian **Dev & Admin Tools**, atau gunakan kolom **Search** untuk menemukan **Traffic Distributor**.
2. Klik **Install** untuk melanjutkan.

![Traffic Distributor in Marketplace](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/02-traffic-distributor-in-marketplace.png)

### Langkah 3: Tinjau Overview Traffic Distributor
1. Saat pertama kali Anda menginstal Traffic Distributor, Anda akan ditampilkan overview dari fitur-fiturnya.
2. Klik **OK** untuk melanjutkan.

![Traffic Distributor description and benefits](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/03-traffic-distributor-description-and-benefits.png)

:::tip
Anda dapat memilih opsi **Don’t show this message again** untuk melewati jendela ini di masa mendatang.
:::

### Langkah 4: Konfigurasi Pengaturan Traffic Distributor
1. Dalam bingkai instalasi, konfigurasikan pengaturan berikut:
   - **Entrypoint**: Pilih antara **Shared Load Balancer** atau **Public IP**.
   - **Balancers**: Pilih jumlah instance NGINX yang akan digunakan.
   - **Routing Method**: Pilih salah satu dari tiga metode routing yang tersedia: **Round Robin**, **Sticky Sessions**, atau **Failover**.
   - **Traffic Ratio**: Atur persentase distribusi traffic antar environment.
   - **HTTPS**: Aktifkan ini jika backend menggunakan HTTPS.
   - **Backends**: Pilih dua environment untuk distribusi traffic (dari daftar akun Anda atau tentukan alamat IP/domain kustom).
   - **Environment**: Tetapkan nama domain untuk environment.
   - **Display Name**: Secara opsional, atur alias untuk environment.
   - **Region**: Pilih region untuk environment.
   
2. Klik **Install** untuk menyelesaikan pengaturan.

![Configure Traffic Distributor installation](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/04-configure-traffic-distributor-installation.png)

### Langkah 5: Penyelesaian Instalasi
1. Setelah beberapa menit, instalasi akan selesai.
2. Jendela sukses akan muncul dengan tips tambahan tentang cara menggunakan Traffic Distributor, seperti **Blue-Green Deploy**, **A/B Testing**, dan **Failover Protection**.

![Traffic Distributor installed](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/06-traffic-distributor-installed.png)

:::note
Konfigurasi vertical scaling default (hingga 16 cloudlets) harus cukup untuk menangani sejumlah besar traffic.
:::

## Rekonfigurasi Traffic Distributor

Anda dapat menyesuaikan pengaturan Traffic Distributor Anda kapan saja setelah instalasi.

### Langkah 1: Akses Opsi Rekonfigurasi
1. Arahkan mouse ke instance NGINX dalam environment Traffic Distributor Anda dan klik tombol **Add-Ons**.

![Traffic Distributor add-on](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/07-traffic-distributor-add-on.png)

### Langkah 2: Konfigurasi Pengaturan Add-On
1. Klik **Configure** untuk mengakses opsi rekonfigurasi. Anda dapat mengubah pengaturan yang sama seperti selama instalasi:
   - **Entrypoint**
   - **Balancers**
   - **Routing Method**
   - **Traffic Ratio**
   - **HTTPS**
   - **Backends**
   
2. Konfirmasikan perubahan dengan mengklik **Apply**.

![Reconfigure Traffic Distributor](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/09-reconfigure-traffic-distributor.png)

### Langkah 3: Pantau Perubahan
1. Setelah rekonfigurasi berhasil, Anda akan melihat notifikasi di kanan atas dashboard.
2. Anda juga dapat melihat log dari tindakan dan perubahan Traffic Distributor.

![Show Traffic Distributor logs](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distribution-installation/10-show-traffic-distributor-log.png)

## Baca Juga

- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)