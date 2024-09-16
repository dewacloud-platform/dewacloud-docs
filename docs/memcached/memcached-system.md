---
sidebar_position: 1
slug: /memcached-system
title: Memcached System
---

# Sistem Caching Memcached

**[Memcached](http://memcached.org/)** adalah sistem caching objek memori terdistribusi yang berkinerja tinggi, gratis, dan sumber terbuka, bersifat umum, tetapi dimaksudkan untuk digunakan dalam mempercepat aplikasi web dinamis dengan mengurangi beban basis data.

Anda dapat menganggapnya sebagai memori jangka pendek untuk aplikasi Anda.

**API Memcached** menyediakan tabel hash raksasa yang didistribusikan di beberapa mesin. Ketika tabel penuh, penyisipan berikutnya membuat data lama dihapus dalam urutan paling jarang digunakan. Aplikasi yang menggunakan Memcached biasanya menempatkan permintaan dan penambahan ke dalam RAM sebelum kembali ke penyimpanan yang lebih lambat, seperti basis data.

Sistem ini menggunakan arsitektur klien-server. Server memelihara sebuah array asosiatif key-value; klien mengisi array ini dan melakukan kueri. Kunci memiliki panjang hingga 250 byte dan nilai dapat maksimal 1 megabyte.

![Memcached deployment scenario](#)

**Memcached** juga memungkinkan Anda menggunakan memori dengan lebih baik.

Skema yang diberikan mewakili dua skenario deployment:

- **Tanpa Memcached** - dalam kasus ini setiap node benar-benar independen.
- **Dengan Memcached** - dalam kasus ini setiap node dapat menggunakan memori dari node lain.

**Skenario pertama** menggambarkan strategi deployment klasik, namun Anda akan mendapati bahwa ini membuang-buang baik dalam arti bahwa ukuran total cache adalah sebagian kecil dari kapasitas aktual web farm Anda, tetapi juga dalam jumlah upaya yang diperlukan untuk menjaga konsistensi cache di semua node tersebut.

**Dengan Memcached**, Anda dapat melihat bahwa semua server melihat ke dalam kolam memori virtual yang sama. Ini berarti bahwa item tertentu selalu disimpan dan selalu diambil dari lokasi yang sama di seluruh cluster web Anda.

Juga, seiring dengan meningkatnya permintaan untuk aplikasi Anda ke titik di mana Anda perlu memiliki lebih banyak server, biasanya juga tumbuh dalam hal data yang harus diakses secara teratur. Strategi deployment di mana dua aspek sistem Anda ini berkembang bersama-sama sangat masuk akal.

Untuk mendapatkan **Memcached** di lingkungan Anda, cukup:

1. Masuk ke dashboard platform.

2. Klik **Create Environment**.

3. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya, **Tomcat**). Aktifkan **Memcached**. Skalakan secara vertikal. Kemudian masukkan nama environment Anda, misalnya, _memcached_, dan klik **Create**.

![Memcached environment topology](#)

Itu saja yang perlu Anda lakukan! Sekarang, Memcached tersedia di lingkungan Anda.

![environment with Memcached created](#)

## Baca Juga{#whats-next}

- [Memcached Memory Allocation](https://docs.dewacloud.com/memcached-memory-allocation/)
- [Memcached Configuration](https://docs.dewacloud.com/memcached-configuration/)
- [Session Replication via Memcached](https://docs.dewacloud.com/replication-memcached/)
- [PHP Sessions in Memcached](https://docs.dewacloud.com/memcached-php-sessions/)