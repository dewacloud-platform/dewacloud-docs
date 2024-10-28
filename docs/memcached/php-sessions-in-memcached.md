---
sidebar_position: 4
slug: /memcached-php-sessions
title: PHP Sessions in Memcached
---

# PHP Sessions Clustering

High availability untuk aplikasi PHP Anda dapat dicapai dengan mengimplementasikan clustering sesi PHP di cloud. Untuk menangani failover server aplikasi dengan sukses, kita membuat environment dengan Memcached, beberapa server Apache, dan load balancer NGINX:

1. Masuk ke dashboard Dewacloud.

2. Klik tombol **Create environment**.

3. Dalam menu **Environment topology**, pilih dua atau lebih server yang ingin Anda gunakan (misalnya, dua instance **Apache**) dan node **Memcached**. Ketik nama environment dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-php-1.png" alt="Memcached environment" width="100%"/>

Node Memcached digunakan sebagai mesin caching terdistribusi dalam environment dengan beberapa node. Dalam kasus ini, memcached menyediakan sesi web yang bersifat sticky yang berjalan di beberapa server aplikasi. Jika satu server gagal, sesi-sesi tersebut disimpan sebagai backup pada node Memcached. Server lain dapat mengambil sesi dari Memcached dan mulai serving sesinya.

<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-php-2.png" alt="memcached PHP cluster" width="60%"/>

## Cara Kerjanya{#how-it-works}

Ketika setiap permintaan sesi selesai, sesi dikirim ke node Memcached untuk backup. Sesi ini tetap tersedia di server aplikasi asli dan dapat digunakan untuk melayani permintaan berikutnya. Setelah permintaan kedua selesai, sesi diperbarui di Memcached.

Jika server asli gagal, permintaan berikutnya dialihkan ke server aplikasi lain. Server yang baru akan diminta mencari sesi yang tidak dikenalnya. Maka server baru ini akan menemukan sesi yang diperlukan di node Memcached. Hal tersebut diidentifikasi sesuai dengan ID yang ditambahkan ke sessionID saat pembuatan sesi. Hasilnya, server dapat mengambil sesi dari node Memcached.

Ketika server menjawab permintaan, itu juga memperbarui sesi di node Memcached. Dengan demikian, tidak ada gangguan pada aplikasi yang disebabkan oleh kegagalan server asli - failover berhasil ditangani.

Pada saat yang sama, load balancer NGINX mendistribusikan lalu lintas ke seluruh cluster yang berisi sumber daya HTTP. Anda dapat [memeriksa load balancing](https://docs.dewacloud.com/docs/testing-load-balancing/) di Dewacloud menggunakan berbagai tool load balancing.

## Cara Mengkonfigurasi{#how-to-configure}

1. Masuk ke environment Anda di dashboard dan klik tombol **Config** untuk Apache.

2. Di tab yang terbuka, masuk ke directory _**etc > php.ini**_.

3. Pastikan extension **memcached** sudah di-enable. Jika belum, bisa tambahkan line berikut:

   ```
   extension=memcached.so
   ```


<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-php-3.png" alt="memcached enabling" width="100%"/>


4. Buat perubahan pada line berikut:

   ```
   session.save_handler = memcached
   session.save_path = "< server >:11211"
   ```


<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-php-4.png" alt="session save path" width="100%"/>


:::note
**server** menyatakan IP atau URL yang dapat dilihat pada node memcached di environment Anda.
:::

5. Simpan perubahan dan restart node **Apache**.

Itu saja! Sekarang jika salah satu instance gagal, pengguna akan secara otomatis beralih ke instance lain dalam cluster ini dan tidak akan menyadari adanya perubahan.

## Baca Juga{#whats-next}

- [Memcached Configuration](https://docs.dewacloud.com/docs/memcached-configuration/)
- [Setting Up a Cronjob](https://docs.dewacloud.com/docs/cron-job/)