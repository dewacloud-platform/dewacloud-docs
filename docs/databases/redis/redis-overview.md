---
sidebar_position: 1
slug: /redis-overview
title: Redis Overview
---
# Redis

**[Redis](<https://redis.io>)** adalah cache dan penyimpanan data key-value tingkat lanjut yang bersifat open-source, yang menyediakan daya tahan yang tinggi. Ini sering dipandang sebagai server struktur data, karena kunci dapat berisi berbagai jenis data: string, hash, daftar, set, sorted set, bitmap, dan hyperloglogs. Semua elemen data ini dapat diproses dengan berbagai operasi atomik, seperti menambahkan ke string, memasukkan elemen ke dalam daftar, meningkatkan nilai dalam hash, mendapatkan anggota dengan peringkat tertinggi dalam sorted set, dll.

Satu fitur penting lainnya dari Redis adalah kinerja yang luar biasa. Ini dicapai dengan cara beroperasi pada dataset di memori. Untuk menyimpan database semacam itu, Anda dapat menggunakan baik dumping ke disk setiap kali atau menambahkan setiap perintah ke dalam log. Persistensi ini juga dapat dinonaktifkan secara opsional, jika yang Anda butuhkan hanyalah cache jaringan yang kaya fitur dan berbasis memori.

Dan sekarang mari kita cari tahu cara mendapatkan lingkungan Anda sendiri dengan server struktur data Redis hanya dalam beberapa klik.

## Instalasi Redis{#redis-installation}

1. Masuk ke platform.

2. Klik **Lingkungan Baru** di sudut kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/redis-overview/redis-overview-1.png" alt="create new environment button" width="70%"/>

3. Anda akan melihat wizard topologi lingkungan terbuka. Navigasikan ke tab dengan bahasa pemrograman yang diinginkan dan pilih instance **Redis** dari daftar database NoSQL yang tersedia. Atur jumlah cloudlet tetap dan dinamis untuk itu, beri nama lingkungan Anda, dan klik tombol **Buat**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/redis-overview/redis-overview-2.png" alt="select Redis NoSQL database versions" max-width="100%"/>

4. Setelah lingkungan berhasil dibuat, Anda akan menerima email dengan data node Redis Anda: alamat DNS, alamat IP, nomor port yang dapat dihubungkan, dan kredensial akses.

Gunakan informasi ini untuk melakukan konfigurasi yang diperlukan dan mengelola server Redis Anda.

## Baca Juga{#whats-next}

  * [Mengatur Lingkungan](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Hosting Database](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [String Koneksi Database](<https://docs.dewacloud.com/docs/database-connection-strings/>)
  * [Tutorial Diaspora*](<https://docs.dewacloud.com/docs/diaspora/>)