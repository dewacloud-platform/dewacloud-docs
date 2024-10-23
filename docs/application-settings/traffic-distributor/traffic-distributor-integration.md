---
sidebar_position: 4
slug: /traffic-distributor-integration
title: Traffic Distributor Integration
---

# Integrasi Traffic Distributor dengan Aplikasi yang Sedang Berjalan

Mengintegrasikan **Traffic Distributor (TD)** ke dalam aplikasi yang sudah berjalan adalah cara kuat untuk mendistribusikan lalu lintas di berbagai environment, menyediakan ketersediaan yang ditingkatkan, perlindungan failover, dan lebih banyak lagi. Panduan berikut menjelaskan cara mencapai integrasi ini tanpa downtime, memastikan transisi yang mulus untuk pengguna Anda.

:::note
Traffic Distributor memungkinkan beberapa fitur berguna, seperti pembaruan aplikasi tak terlihat dengan **blue-green deployment**, A/B testing, dan perlindungan failover lanjutan.
:::

## Langkah-Langkah untuk Integrasi

### 1. Tambahkan Salinan Aplikasi ke Routing Lalu Lintas

1. Pertama, pastikan Anda memiliki aplikasi yang berjalan dalam satu environment. Untuk contoh ini, kita akan menyebutnya `primary-env`.
   
   ![primary environment](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/01-primary-environment.png)

2. Buat environment kedua untuk dijadikan cadangan atau versi alternatif dari aplikasi. Anda dapat melakukannya dengan menggandakan environment `primary-env`, yang akan memastikan environment kedua (`second-env`) memiliki data dan pengaturan yang sama.
   
   ![environment clone](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/02-environment-clone.png)

   :::tip
   Pastikan untuk menyesuaikan data "hardcoded", seperti alamat IP atau tautan langsung, dalam environment yang digandakan jika perlu.
   :::

3. Selanjutnya, [instal Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>) dan tentukan kedua environment (`primary-env` dan `second-env`) sebagai backend.
   
   ![Traffic Distributor installation](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/03-traffic-distributor-installation.png)

   :::tip
   Jika tersedia banyak region environment, pertimbangkan menghosting environment kedua di region yang berbeda untuk perlindungan failover yang lebih baik jika terjadi kegagalan perangkat keras.
   :::

4. Setelah instalasi, Traffic Distributor akan siap untuk mengelola lalu lintas antara environment Anda. Namun, Anda perlu merutekan lalu lintas yang masuk ke Traffic Distributor, bukan langsung ke `primary-env`.

### 2. Konfigurasikan Entrypoint Aplikasi via Traffic Distributor

Jika aplikasi Anda menggunakan [domain kustom](<https://docs.dewacloud.com/docs/custom-domains/>), Anda perlu memindahkan titik masuk ini ke environment Traffic Distributor.

#### Tukar Domain (untuk CNAME atau ANAME)

1. Buka **Settings** dari environment Anda saat ini (`primary-env`), di mana domain kustom sudah terkait.
   
   ![primary environment settings](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/05-primary-environment-settings.png)

2. Di bagian **Custom Domains**, pilih **Swap Domains** dan pilih environment Traffic Distributor dari menu drop-down.

   ![swap domains with Traffic Distributor](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/06-swap-domains-with-traffic-distributor.png)

3. Klik **Swap** dan konfirmasikan perubahan. Domain kustom Anda sekarang akan mengarah ke environment Traffic Distributor, yang akan menangani lalu lintas antara kedua backend.

#### Tukar IP Publik (untuk A Records)

Jika domain kustom Anda terkait dengan **A Record**, Anda perlu menukar alamat IP publik antara environment.

1. Pastikan environment Traffic Distributor memiliki [Public IP](<https://docs.dewacloud.com/docs/public-ip/>) yang terlampir. Salin alamat IP baru dari dashboard.
   
   ![Traffic Distributor public IP](https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/traffic-distributor-integration/07-traffic-distributor-public-ip.png)

2. Akses pengelola DNS Anda dan perbarui **A Record** untuk mengarah ke alamat IP baru dari environment Traffic Distributor.

3. Tunggu sampai cache catatan DNS kadaluarsa agar perubahan bisa berlaku. Pengaturan **TTL** (Time To Live) dalam pengelola DNS Anda akan menunjukkan berapa lama alamat IP saat ini tetap dalam cache.

4. Setelah memastikan titik masuk telah diperbarui, Anda dapat melepaskan IP publik dari environment `primary-env` jika tidak lagi diperlukan untuk menghemat biaya.

Sekarang, semua lalu lintas yang masuk untuk domain kustom Anda akan dirutekan melalui Traffic Distributor, yang akan mendistribusikan permintaan antara environment Anda sesuai dengan rasio lalu lintas yang telah Anda tetapkan.

## Baca Juga

- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)