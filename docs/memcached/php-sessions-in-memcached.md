---
sidebar_position: 4
slug: /php-sessions-in-memcached
title: PHP Sessions in Memcached
---

# PHP Sessions Clustering

Ketersediaan tinggi untuk aplikasi PHP Anda dapat dicapai dengan mengimplementasikan clustering sesi PHP di cloud. Untuk menangani failover server aplikasi dengan sukses, kita membuat environment dengan Memcached, beberapa server Apache, dan load balancer NGINX:

1. Masuk ke akun PaaS.

2. Klik tombol **Create environment**.

3. Dalam jendela **Environment topology**, pilih dua atau lebih server yang ingin Anda gunakan (misalnya, dua instance **Apache**) dan node **Memcached**. Ketik nama environment dan klik **Create**.

![Memcached environment](#)

Node Memcached digunakan sebagai mesin caching terdistribusi dalam environment dengan beberapa node. Dalam kasus ini, ia menyediakan sesi Web dengan sesi sticky yang berjalan di beberapa server aplikasi. Jika satu server gagal, sesi-sesi tersebut disimpan untuk cadangan pada node Memcached. Server lain dapat mengambil sesi dari Memcached dan mulai melayani sesi.

![memcached PHP cluster](#)

## Cara Kerjanya{#how-it-works}

Ketika setiap permintaan sesi selesai, sesi dikirim ke node Memcached untuk cadangan. Sesi ini tetap tersedia di server aplikasi asli dan dapat digunakan untuk melayani permintaan berikutnya. Setelah permintaan kedua selesai, sesi diperbarui di Memcached.

Jika server asli gagal, permintaan berikutnya dialihkan ke server aplikasi lain. Server yang baru diminta akan mencari sesi yang tidak dikenalnya. Maka server baru ini akan menemukan sesi yang diperlukan di node Memcached. Ia diidentifikasi sesuai dengan ID yang ditambahkan ke sessionID saat pembuatan sesi. Akibatnya, server dapat mengambil sesi dari node Memcached.

Ketika server menjawab permintaan, itu juga memperbarui sesi di node Memcached. Dengan demikian, tidak ada gangguan pada aplikasi yang disebabkan oleh kegagalan server asli - failover berhasil ditangani.

Pada saat yang sama, load balancer NGINX mendistribusikan lalu lintas ke seluruh cluster yang berisi sumber daya HTTP. Anda dapat [memeriksa load balancing](https://docs.dewacloud.com/testing-load-balancing/) di platform menggunakan berbagai alat load balancing.

## Cara Mengkonfigurasi{#how-to-configure}

1. Navigasikan ke environment Anda di dashboard dan klik tombol **Config** untuk Apache.

2. Di tab yang terbuka, pergi ke _**etc > php.ini**_.

3. Tambahkan baris berikut ke **Dynamic Extensions** :

   ```
   extension=memcached.so
   ```

![memcached enabling](#)

4. Buat perubahan dalam blok **[Session]**:

   ```
   session.save_handler = memcached session.save_path = "< server >:11211"
   ```

![session save path](#)

:::note
/<server/> menyatakan untuk memcached IP atau URL yang dapat Anda temukan dengan mengklik tombol Info untuk node memcached di environment Anda.
:::

5. Simpan perubahan dan restart node **Apache**.

Itu saja! Sekarang jika salah satu instance gagal, pengguna akan secara otomatis beralih ke instance lain dalam cluster ini dan tidak akan menyadari adanya perubahan.

## Baca Juga{#whats-next}

- [Memcached Configuration](https://docs.dewacloud.com/memcached-configuration/)
- [WordPress Cluster](https://www.virtuozzo.com/company/blog/wordpress-hosting-enterprise-high-availability-auto-scaling/)
- [Setting Up a Cronjob](https://docs.dewacloud.com/cron-job/)