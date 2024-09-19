---
sidebar_position: 9
slug: /php-sessions-clustering
title: PHP Sessions Clustering
---
# PHP Sessions Clustering

Ketersediaan tinggi aplikasi PHP Anda dapat dicapai dengan menerapkan klasterisasi sesi PHP di cloud. Untuk menangani failover server aplikasi dengan sukses, kami membuat environment dengan Memcached, beberapa server Apache, dan load balancer NGINX:

1\. Masuk ke akun PaaS.

2\. Klik tombol **Create environment**.

3\. Di jendela **Environment topology**, pilih dua atau lebih server yang ingin Anda gunakan (misalnya, dua instance **Apache**) dan node **Memcached**. Ketik nama environment dan klik **Create**.

![Memcached environment](#)

Node Memcached digunakan sebagai mesin caching terdistribusi dalam environment dengan beberapa node. Dalam kasus kami, ini menyediakan sesi Web dengan sesi berkelanjutan yang berjalan di beberapa server aplikasi. Jika satu server gagal, sesi disimpan untuk cadangan di node Memcached. Server lain dapat mengambil sesi dari Memcached dan mulai melayani sesi tersebut.

![memcached PHP cluster](#)

## How It Works{#how-it-works}

Ketika setiap permintaan sesi selesai, sesi dikirim ke node Memcached untuk cadangan. Sesi ini tetap tersedia di server aplikasi asli dan dapat digunakan untuk melayani permintaan berikutnya. Setelah penyelesaian permintaan kedua, sesi diperbarui di Memcached.

Jika server asli gagal, permintaan berikutnya dialihkan ke server aplikasi lain. Server yang baru diminta meminta sesi yang tidak dia ketahui. Jadi server baru ini akan menemukan sesi yang diperlukan di node Memcached. Ini diidentifikasi berdasarkan ID yang ditambahkan ke sessionID saat pembuatan sesi. Akibatnya, server dapat mengambil sesi dari node Memcached.

Ketika server menjawab permintaan, itu juga memperbarui sesi di node Memcached. Dengan demikian, tidak ada gangguan pada aplikasi yang disebabkan oleh kegagalan server asli - failover berhasil ditangani.

Pada saat yang sama, load balancer NGINX mendistribusikan lalu lintas di seluruh cluster yang mengandung sumber daya HTTP. Anda dapat [memeriksa load balancing](<https://docs.dewacloud.com/docs/testing-load-balancing/>) di platform menggunakan berbagai alat load balancing.

## How to Configure{#how-to-configure}

1\. Arahkan ke environment Anda di dashboard dan klik tombol **Config** untuk Apache.

2\. Di tab yang terbuka, pergi ke _**etc > php.ini**_.

3\. Tambahkan baris berikut ke **Dynamic Extensions**:

```
extension=memcached.so
```

![memcached enabling](#)

4\. Lakukan perubahan di blok **[Session]**:

```
session.save_handler = memcached
session.save_path = "<server>:11211"
```

![session save path](#)

:::note 
**server** menunjukkan IP atau URL memcached yang dapat Anda temukan dengan mengklik tombol Info untuk node memcached di environment Anda.
:::

5\. Simpan perubahan dan mulai ulang node **Apache**.

Itu saja! Sekarang jika salah satu instance gagal, pengguna secara otomatis dialihkan ke instance lain dalam klaster ini dan tidak pernah merasa ada perubahan.

## Baca Juga{#whats-next}

  * [Memcached Configuration](<https://docs.dewacloud.com/docs/memcached-configuration/>)
  * [WordPress Cluster](<https://www.virtuozzo.com/company/blog/wordpress-hosting-enterprise-high-availability-auto-scaling/>)
  * [Setting Up a Cronjob](<https://docs.dewacloud.com/docs/cron-job/>)