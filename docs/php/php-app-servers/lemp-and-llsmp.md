---
sidebar_position: 4
slug: /lemp-and-llsmp
title: LEMP & LLSMP
---
# LEMP (LLSMP) Application Server

:::note
Stack ini (sejak rilis 1.16.1) & LLSMP siap untuk HTTP/3 dengan dukungan fitur yang diaktifkan secara default. Namun, diperlukan alamat IP publik untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.
:::

**LEMP** adalah solusi bundel perangkat lunak yang didasarkan pada sistem operasi _Linux_, server web HTTP _NGINX_, database _MariaDB_, dan bahasa pemrograman _PHP_. Model semacam ini adalah pilihan populer di kalangan pengembang karena cukup untuk menghosting berbagai proyek dengan satu kontainer.

Jika platform menyediakan dukungan [LiteSpeed](<https://docs.dewacloud.com/docs/litespeed-web-server/>), stack **LLSMP** (_Linux_, _LiteSpeed_, _MariaDB_, _PHP_) serupa dapat tersedia. Ikuti tautan di atas untuk mempelajari tentang manfaat LiteSpeed Web Server.

![LEMP LLSMP containers structure](#)

Struktur topologi di dalam kontainer LEMP dan LLSMP adalah sebagai berikut:

  * server aplikasi _NGINX_ atau _LiteSpeed_ yang didukung PHP berorientasi event
  * server database _MariaDB 10_ bawaan digunakan untuk menyimpan data proyek Anda
  * database _Redis 6_ tambahan diluncurkan secara default sebagai solusi caching objek

[Peculiarities dari stacks](<https://docs.dewacloud.com/docs/#lemp--llsmp-peculiarities>) lainnya dapat dilihat di bagian yang sesuai di bawah ini. Sekarang, mari kita melalui langkah-langkah instalasi yang diperlukan.

1\. Masuk ke dashboard platform Anda ([daftar](<https://docs.dewacloud.com/docs/getting-started/#sign-up-how-to-create-an-account>) jika Anda belum memilikinya) dan klik tombol **New Environment** di bagian atas halaman.

![create new environment button](#)

2\. Beralih ke tab _**PHP**_ dari topology wizard yang terbuka secara otomatis. Pilih **LEMP** (**LLSMP**) sebagai server aplikasi Anda.

![LEMP environment topology wizard](#)

Konfigurasikan parameter lain sesuai kebutuhan Anda (mis. [batas scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), [IP publik](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>)) dan klik **Create** untuk melanjutkan.

3\. Tunggu beberapa menit agar platform mengatur lingkungan Anda. Setelah dibuat, Anda dapat mengklik **Open in Browser** untuk melihat data _phpinfo()_ default di server Anda.

![LEMP environment created](#)

Sekarang, Anda dapat melanjutkan ke [deployment](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi Anda.

## LEMP & LLSMP Peculiarities{#lemp--llsmp-peculiarities}

Saat bekerja dengan stack perangkat lunak LLSMP, semua kekhasan dari [LiteSpeed Web Server](<https://docs.dewacloud.com/docs/litespeed-web-server/>) diterapkan pada node ini (termasuk [biaya lisensi](<https://docs.dewacloud.com/docs/litespeed-web-server/#license-pricing>)). Semua kekhususan lainnya sama untuk kedua server.

1\. Server database bawaan dapat diakses dengan cara berikut:

  * Alat administrasi _phpMyAdmin_ untuk _**MariaDB**_ dapat dihubungkan melalui port _8443_. Tautan dan kredensial akses yang tepat dapat ditemukan dalam email setelah pembuatan. Jika diperlukan, kata sandi dapat direset melalui dashboard dengan mengarahkan mouse ke server aplikasi dan memilih opsi **Additionally > Admin Panel > Reset Password**.
  * Database _**Redis**_ dapat diakses tanpa kata sandi tetapi hanya dari dalam kontainer (yaitu _localhost_).

![LEMP admin panel access](#)

:::tip
Di dalam kontainer LEMP/LLSMP, Anda dapat membangun koneksi klien ke database melalui protokol SOCKET (localhost) dan TCP (127.0.0.1).
:::

Baca panduan yang terhubung untuk mempelajari lebih lanjut tentang [koneksi PHP ke MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>).

2\. Beberapa [variabel environment](<https://docs.dewacloud.com/docs/environment-variables/>) dapat digunakan untuk mengelola kontainer LEMP/LLSMP Anda:

  * _**ADMINPANEL_ENABLED**_ \- mengizinkan (_true_, secara default) atau melarang (_false_) akses ke konsol phpMyAdmin untuk server database MariaDB terintegrasi
  * _**REDIS_ENABLED**_ \- mengaktifkan (_true_, secara default) atau menonaktifkan (_false_) caching objek dengan Redis
  * _**CP_MEM_LIMIT**_ \- menetapkan bagian RAM, yang harus dicadangkan untuk server aplikasi (_NGINX/LiteSpeed_), _**50%**_ dari total RAM kontainer secara default
  * _**CACHE_MEM_LIMIT**_ \- menetapkan bagian RAM, yang harus dicadangkan untuk server cache _Redis_, _**10%**_ dari total RAM kontainer secara default
  * _**DB_MEM_LIMIT**_ \- menetapkan bagian RAM, yang harus dicadangkan untuk server database _MariaDB_, _**40%**_ dari total RAM kontainer secara default

:::tip 
Batas RAM ini dapat ditentukan dalam megabyte (m|mb|M|MB), gigabyte (g|gb|G|GB), atau persentase (%). Jika unit dihilangkan, nilainya dianggap sebagai persentase.
:::

![LEMP environment variables](#)

Restart kontainer diperlukan untuk menerapkan perubahan pada parameter ini.

:::note
LLSMP memiliki variabel tambahan (misalnya WAF, WP_PROTECT, WP_PROTECT_LIMIT) yang spesifik untuk stack LiteSpeed, yang dijelaskan dalam dokumen khusus.
:::

3\. Jelas, semua manfaat dari kontainer platform reguler juga tersedia untuk stacks LEMP dan LLSMP. Misalnya:

  * [skala vertikal otomatis](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>)
  * [penawaran harga berbasis penggunaan](<https://docs.dewacloud.com/docs/pricing-model/>)
  * [akses SSH](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [firewall kontainer](<https://docs.dewacloud.com/docs/custom-firewall/>)
  * [redeploy kontainer](<https://docs.dewacloud.com/docs/container-redeploy/>)
  * [pemantauan statistik](<https://docs.dewacloud.com/docs/view-app-statistics/>)
  * [otomatisasi deployment](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * dan masih banyak lagi di [Platform Documentation](<https://docs.dewacloud.com/docs/>)

## Baca Juga{#whats-next}

  * [PHP Dev Center](<https://docs.dewacloud.com/docs/php-center/>)
  * [LiteSpeed Web Server](<https://docs.dewacloud.com/docs/litespeed-web-server/>)
  * [PHP Extensions](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)
  * [PHP Auto Configurations](<https://docs.dewacloud.com/docs/php-auto-configuration/>)