---
sidebar_position: 3
slug: /memcached-memory-allocation
title: Memcached Memory Allocation
---

# Alokasi Memory Memcached

**Memcached**, sistem caching memory terdistribusi, sering digunakan untuk meningkatkan kinerja dan ketersediaan aplikasi yang di-hosting dengan mengurangi beban database. Ini menciptakan cache umum untuk semua node aplikasi dan merepresentasikan memory jangka pendek aplikasi Anda.

Mari kita temukan bagaimana **memory allocation** di Memcached bekerja dan cara kita menghilangkan fragmentasi memory saat menggunakan platform ini.

Sistem Memcached menggunakan **slab** alih-alih alokasi memory per item. Akibatnya, ini meningkatkan penggunaan memory dan melindunginya dari fragmentasi jika data expired dari cache.

Setiap slab terdiri dari beberapa halaman berukuran 1 MB dan masing-masing halaman, pada gilirannya, terdiri dari jumlah blok atau chunk yang sama. Setelah penyimpanan data, Memcached menentukan ukuran data dan mencari alokasi yang sesuai di semua slab. Jika alokasi seperti itu ada, data ditulis ke dalamnya. Jika tidak ada alokasi yang sesuai, Memcached membuat slab baru dan membaginya menjadi blok dengan ukuran yang diperlukan. Jika Anda memperbarui item yang sudah disimpan dan nilainya yang baru melebihi ukuran alokasi blok tempat item tersebut disimpan sebelumnya, Memcached memindahkannya ke slab lain yang sesuai. !

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-malloc-1.png" alt="memcached memory allocation 1" width="100%"/>
</p>


Sebagai hasilnya, setiap instance memiliki beberapa halaman yang didistribusikan dan dialokasikan dalam memori Memcached. Metode alokasi ini mencegah fragmentasi memori. Tetapi di sisi lain, ini dapat menyebabkan pemborosan memori jika Anda tidak memiliki jumlah item dengan ukuran alokasi yang sama yang cukup, contohnya hanya ada beberapa chunk terisi di setiap halaman. Oleh karena itu, satu poin penting lainnya adalah distribusi item yang disimpan.

Dengan platform, Anda mendapatkan kemungkinan untuk memodifikasi koefisien pertumbuhan slab langsung selama aplikasi Anda beroperasi. Untuk itu, klik tombol **Config** di sebelah node Memcached, arahkan ke direktori **conf** dan buka file _**memcached**_. Edit file tersebut, misalnya, dengan cara berikut:

_OPTIONS="-vv 2 >> /var/log/memcached/memcached.log -f 2 -n 32"_ 
<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-malloc-2.png" alt="memcached memory allocation memcached config" width="100%"/>
</p>

Dalam contoh ini _**-f 2**_ menunjukkan bahwa Anda akan melihat 14 slab dengan ukuran chunk yang digandakan, dan nilai setelah _**-n**_ mendefinisikan space minimum yang dialokasikan untuk key, flags, dan value.

Kita dapatkan hasil seperti berikut:

- **Detail Chunk:**

  ```
  #  Item_Size  Max_age   Pages   Count   Full?  Evicted Evict_Time    OOM
  3     320B       550s       1     113     yes        0        0       0
  4     640B       681s       1     277     yes        0        0       0
  ```

- **Penggunaan Memory:**

  ```
  total          used        free      shared    buffers     cached
  Mem:           128          84         43          0          0         70
  -/+ buffers/cache:          14        113
  Swap:            0            0
  ```

Sekarang mari kita masukkan pengaturan default lagi dan periksa nilai apa yang akan kita dapatkan:

_OPTIONS="-vv 2 >> /var/log/memcached/memcached.log"_

- **Detail Chunk:**

  ```
  #  Item_Size  Max_age   Pages   Count   Full?  Evicted Evict_Time OOM
  5     240B       765s       1      27     yes        0        0     0
  6     304B       634s       1      93     yes        0        0     0
  7     384B       634s       1     106     yes        0        0     0
  8     480B       703s       1     133     yes        0        0     0
  9     600B       634s       1      57     yes        0        0     0
  ```

- **Penggunaan Memory:**

  ```
  total       used       free     shared    buffers     cached
  Mem:           128         87         40          0          0         70
  -/+ buffers/cache:         17        110
  Swap:            0          0          0
  ```

Anda juga dapat menambahkan parameter _**-L**_ untuk meningkatkan ukuran halaman memory dan dengan cara ini mengurangi jumlah TLB miss serta meningkatkan kinerja.

Berkat optimisasi yang mudah dan langsung ini kita dapat meningkatkan penggunaan memory yang dialokasikan.

## Baca Juga{#whats-next}

- [Memcached System](https://docs.dewacloud.com/memcached/)
- [Session Replication via Memcached](https://docs.dewacloud.com/replication-memcached/)
- [PHP Sessions in Memcached](https://docs.dewacloud.com/php-sessions-memcached/)