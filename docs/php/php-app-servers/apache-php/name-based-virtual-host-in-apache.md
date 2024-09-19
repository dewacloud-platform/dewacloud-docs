---
sidebar_position: 7
slug: /name-based-virtual-host-in-apache
title: Name-Based Virtual Host in Apache
---
# Name-Based Virtual Host in Apache

Istilah Virtual Host mengacu pada praktik menjalankan lebih dari satu situs web pada satu mesin. Virtual host dapat berupa “_berbasis IP_”, yang berarti Anda memiliki alamat IP berbeda untuk setiap situs web, atau “_berbasis Nama_”, yang berarti Anda memiliki beberapa nama yang berjalan pada setiap alamat IP. Fakta bahwa mereka berjalan di server fisik yang sama tidak tampak bagi pengguna akhir.

Untuk menggunakan Name-Based Virtual Host, ikuti langkah-langkah berikut:

1\. Klik tombol **Config** untuk server Apache di environment Anda.

![name based apache virtual host 1](#)

2\. Navigasikan ke file _**/etc/httpd/conf/httpd.conf**_.

3\. Sebelum Anda benar-benar mulai mengonfigurasi virtual host Anda, pastikan Anda memiliki baris **NameVirtualHosts** yang tidak dikomentari: ![name based apache virtual host 2](#)

4\. Kemudian temukan blok **< VirtualHost >**. Anda harus membuat blok _< VirtualHost >_ untuk setiap host berbeda yang ingin Anda layani.

![name based apache virtual host 3](#)

:::note
Argumen untuk direktif < VirtualHost > harus sesuai dengan direktif NameVirtualHost yang didefinisikan (dalam kasus kami adalah *:80).
:::

Di dalam setiap blok _< VirtualHost >_, Anda setidaknya akan memerlukan dua direktif:

  * Direktif **ServerName** untuk mengidentifikasi unik virtual host. Sebaiknya masukkan di sini nama host utama situs Anda.
  * Direktif **DocumentRoot** untuk menunjukkan di mana dalam sistem file konten untuk host itu berada.

5\. Jika banyak server ingin dapat diakses oleh lebih dari satu nama, Anda dapat menggunakan direktif **ServerAlias**, ditempatkan di dalam bagian _< VirtualHost >_. Anda dapat memasukkan di sana semua nama yang dapat digunakan orang untuk melihat situs web Anda. Dengan memasukkan nama ini Anda juga dapat menggunakan karakter wildcards “*” dan “?”.

![name based apache virtual host 4](#)

6\. Akhirnya, Anda dapat menyesuaikan konfigurasi virtual host dengan menempatkan direktif lainnya di dalam kontainer _< VirtualHost >_. Sebagian besar direktif dapat ditempatkan di kontainer ini dan kemudian akan mengubah konfigurasi hanya dari virtual host yang relevan.

Untuk mengetahui apakah sebuah direktif tertentu diizinkan, ikuti [tautan ini](<https://httpd.apache.org/docs/2.4/mod/directive-dict.html#Context>). Direktif konfigurasi yang diatur dalam konteks server utama (di luar kontainer _< VirtualHost >_ mana pun) hanya akan digunakan jika tidak ditimpa oleh pengaturan virtual host.

## Baca Juga{#whats-next}

  * [PHP Application Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [Apache PHP](<https://docs.dewacloud.com/docs/apache-php/>)