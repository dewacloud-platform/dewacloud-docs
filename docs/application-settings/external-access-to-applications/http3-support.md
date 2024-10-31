---
sidebar_position: 6
slug: /http3
title: HTTP/3 Support
---

# HTTP/3 (QUIC) Support

**HTTP/3** (sebelumnya dikenal sebagai " _HTTP over QUIC_ ") adalah versi ketiga besar yang akan datang dari keluarga Protokol Transfer Hiperteks. Dari segi fitur, ini sangat mirip dengan HTTP/2 tetapi menawarkan beberapa keuntungan signifikan karena perubahan pada metode pemanfaatan yang mendasarinya. Secara khusus, HTTP/3 dibangun di atas protokol transport _**QUIC**_, yang bekerja di atas UDP alih-alih TCP.

Saat ini, HTTP/3 sudah disediakan oleh beberapa solusi (misalnya _LiteSpeed_ dan _NGINX_) dan telah [diadopsi oleh platform](https://docs.dewacloud.com/docs/#http3-support-implementation) melalui rilis terbaru dari tumpukan berikut:

  * _**load balancers:** [LiteSpeed Web ADC](https://docs.dewacloud.com/docs/litespeed-web-adc/), [Varnish](https://docs.dewacloud.com/docs/varnish/), [NGINX](https://docs.dewacloud.com/docs/nginx-load-balancer/)_
  * _**application servers:** [LiteSpeed WS](https://docs.dewacloud.com/docs/litespeed-web-server/), [LLSMP & LEMP](https://docs.dewacloud.com/docs/lemp-llsmp/), [NGINX PHP](https://docs.dewacloud.com/docs/nginx-php/), [NGINX Ruby](https://docs.dewacloud.com/docs/nginx-ruby/)_

Di bawah ini, Anda dapat memeriksa:

  * [prasyarat teknis dari implementasi HTTP/3](https://docs.dewacloud.com/docs/#technical-implementation-specificspreconditions)
  * [keuntungan dari HTTP/3 (QUIC)](https://docs.dewacloud.com/docs/#http3-quic-key-features)
  * [integrasi dalam platform](https://docs.dewacloud.com/docs/#http3-support-implementation)

## Technical Implementation Specifics/Preconditions{#technical-implementation-specificspreconditions}

Alasan utama di balik implementasi HTTP/3 adalah bahwa HTTP/2 mencapai batasnya dalam peningkatan kecepatan karena hambatan dari protokol TCP. Meskipun andal, semua perjalanan bolak-balik yang dibutuhkan oleh proses handshake, umpan balik pengiriman, jaminan urutan, dan checksum dari TCP dapat dianggap lemah dan berlebihan. Oleh karena itu, sebagai bagian dari stack TCP/IP, TCP diimplementasikan dalam kernel sistem operasi, dan firmware perangkat, membuat perubahan signifikan pada TCP hampir tidak mungkin dilakukan.

:::tip
Berikut adalah beberapa contoh keterbatasan yang disediakan oleh TCP: satu koneksi TCP dapat mentransfer data melalui beberapa stream; namun, kehilangan paket menahan seluruh koneksi (dan semua stream-nya) sampai TCP mentransmisikan ulang paket tersebut TCP tidak menyediakan TLS bawaan, sehingga koneksi aman membutuhkan tambahan perjalanan bolak-balik, menciptakan penundaan
:::

UDP tidak memiliki keterbatasan semacam itu dan sama meluasnya dengan TCP, yang memungkinkan pencapaian peningkatan tanpa perubahan signifikan pada sistem operasi dan firmware perangkat yang ada. Dengan demikian, HTTP/3 telah mengadopsi protokol transport QUIC (awalnya dikembangkan oleh Google), yang berbasis di UDP, memberikan [manfaat signifikan](https://www.virtuozzo.com/application-platform-docs/#http3-quic-key-features). Juga, karena sudah digunakan oleh perusahaan internet ternama seperti Google dan Facebook, efisiensi dan keandalan solusi QUIC tidak dapat disangkal.

## HTTP/3 (QUIC) Key Features{#http3-quic-key-features}

Dengan menggunakan QUIC alih-alih TCP sebagai dasarnya, HTTP/3 dapat memanfaatkan banyak manfaat yang disediakannya. Di sini, implementasi QUIC di atas UDP memungkinkan menawarkan fitur yang mirip dengan TCP tetapi tanpa beberapa titik tersedak. Jadi, mari kita rangkum fitur utama yang membedakan HTTP/3 jika dibandingkan dengan pendahulunya HTTP/2:

  * _enhanced multiplexing_ \- kehilangan paket hanya mempengaruhi stream tunggal yang sesuai (tidak semua stream dalam koneksi yang sama)
  * _faster connection setup_ \- protokol menangani fitur keamanan sendiri, mengurangi jumlah perjalanan bolak-balik untuk membangun koneksi (terutama terlihat pada jaringan dengan latensi tinggi, misalnya untuk pengguna mobile)
  * _connection migration_ \- penggunaan ID koneksi alih-alih IP tujuan memungkinkan memastikan pengiriman paket bahkan dalam kasus pergantian jaringan (misalnya, unduhan melalui HTTP/3 akan berlanjut saat koneksi wifi berubah ke jaringan mobile)

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/http3-support/01-http2-vs-http3.gif" alt="HTTP2 vs HTTP3" width="70%"/>

Secara umum, HTTP/3 bertujuan untuk menyediakan koneksi yang lebih cepat dan lebih andal, yang akan sangat terasa oleh mereka dengan jaringan latensi tinggi. Jadi, dari sudut pandang performa, pengguna mobile akan merasakan sebagian besar manfaat, tetapi ini adalah peningkatan yang dapat diapresiasi semua orang.

## HTTP/3 Support Implementation{#http3-support-implementation}

Dukungan untuk protokol HTTP/3 (QUIC) masih dalam tahap implementasi paling awal. Namun, ini sudah disediakan oleh beberapa solusi (misalnya [LiteSpeed](https://www.litespeedtech.com/latest-techs/http-3-is-coming)) dan sedang dikembangkan oleh yang lain.

Di bawah ini, Anda dapat melihat daftar paling akurat dari tumpukan perangkat lunak di platform yang memberikan dukungan HTTP/3 secara default:

  * _**load balancers**_
    * _[LiteSpeed Web ADC](https://docs.dewacloud.com/docs/litespeed-web-adc/):_ semua versi
    * _[Varnish](https://docs.dewacloud.com/docs/varnish/):_ versi _5.2.x_ , _6.x.x_ dan di atasnya
    * _[NGINX](https://docs.dewacloud.com/docs/nginx-load-balancer/):_ sejak rilis _1.16.1_
  * _**application servers**_
    * _[LiteSpeed WS](https://docs.dewacloud.com/docs/litespeed-web-server/):_ semua versi
    * _[LLSMP](https://docs.dewacloud.com/docs/lemp-llsmp/):_ semua versi
    * _[LEMP](https://docs.dewacloud.com/docs/lemp-llsmp/):_ sejak rilis _1.16.1_
    * _[NGINX PHP](https://docs.dewacloud.com/docs/nginx-php/):_ sejak rilis _1.16.1_ untuk versi PHP _7.2.26_ , _7.3.13_ , _7.4.1_ dan di atasnya
    * _[NGINX Ruby](https://docs.dewacloud.com/docs/nginx-ruby/)_ : sejak rilis _1.16.1_ untuk versi Ruby _2.4.9_ , _2.5.7_ , _2.6.5_ , _2.7.0_ dan di atasnya

Cukup [buat topologi lingkungan](https://www.virtuozzo.com/application-platform-docs/setting-up-environment/) yang mencakup salah satu dari application servers atau load balancers yang disebutkan di atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/http3-support/02-http3-ready-servers.png" alt="HTTP3 ready servers" max-width="100%"/>

Di sini, Anda perlu melampirkan [alamat IP publik](https://docs.dewacloud.com/docs/public-ip/) untuk melewati Shared Load Balancer dan memungkinkan bekerja langsung dengan server melalui HTTP/3.

:::warning
Dari sisi klien, dukungan HTTP/3 (QUIC) saat ini diaktifkan secara default di Chromium, dapat dikonfigurasi di Chrome (chrome://flags), dan belum diterapkan oleh browser Firefox.
:::

## Baca Juga{#whats-next}

  * [FTP/FTPS Support](https://docs.dewacloud.com/docs/ftp-ftps-support/)
  * [Websockets Support](https://docs.dewacloud.com/docs/websockets/)
  * [LiteSpeed Web Server](https://docs.dewacloud.com/docs/litespeed-web-server/)
  * [LiteSpeed Web ADC](https://docs.dewacloud.com/docs/litespeed-web-adc/)
  * [Public IP](https://docs.dewacloud.com/docs/public-ip/)