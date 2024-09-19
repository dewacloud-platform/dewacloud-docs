---
sidebar_position: 6
slug: /app-security-with-nginx-balancer
title: App Security with NGINX Balancer
---
:::

3\. **Save** perubahan dan **Restart** node NGINX Anda menggunakan tombol yang sesuai.

![NGINX balancer security restart](#)

4\. Hasilnya, pengguna dengan alamat IP yang diblokir akan dihadapkan pada kesalahan _403 Forbidden_ saat mencoba mengakses aplikasi Anda.

![NGINX balancer security forbidden](#)

## Methods Combination{#methods-combination}

Untuk menggabungkan kedua metode pembatasan akses dengan alamat IP dan penerapan autentikasi, Anda perlu menggunakan direktif _[satisfy](<http://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy>)_. Secara default (yaitu jika tidak dinyatakan secara eksplisit dalam konfigurasi), nilainya disetel ke **all**, yang berarti bahwa pengguna harus memenuhi kedua jenis kondisi untuk diberikan akses. Jika Anda menentukan direktif ini di dalam file konfigurasi Anda dan mengatur nilainya ke **any**, pengguna akan dapat membuka aplikasi jika salah satu kondisi terpenuhi. Berikut adalah contoh konfigurasi tersebut:

![NGINX balancer security conf 3](#)

Dengan demikian, pengguna yang tidak terautentikasi akan diberikan akses jika alamat IP-nya terdaftar di antara yang diizinkan. Atau, pengguna dengan alamat IP yang diblokir masih akan dapat mengakses situs web jika mereka memasukkan nama pengguna dan kata sandi yang valid.

Jadi, sekarang Anda tahu beberapa cara dasar untuk melindungi aplikasi Anda dengan memberikan izin akses hanya kepada pengguna tepercaya, serta menolaknya kepada pengguna yang tidak tepercaya dan mungkin berbahaya. Ingatlah bahwa menghabiskan sedikit waktu untuk meningkatkan keamanan aplikasi Anda sekarang dapat menghemat banyak waktu dan uang di kemudian hari dan tentu saja, tidak akan merugikan.

## Baca Juga{#whats-next}

  * [Tomcat Security](<https://docs.dewacloud.com/docs/tomcat-security/>)
  * [Jetty Security](<https://docs.dewacloud.com/docs/jetty-security/>)
  * [Apache Security](<https://docs.dewacloud.com/docs/apache-security-configurations/>)
  * [NGINX-PHP Security](<https://docs.dewacloud.com/docs/nginx-security-configurations/>)