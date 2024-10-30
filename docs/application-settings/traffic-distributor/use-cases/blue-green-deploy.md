---
sidebar_position: 1
slug: /blue-green-deploy
title: Blue-Green Deploy
---

# Blue-Green Deployment dengan TD

Dengan bantuan [Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor>), Anda dapat melakukan pembaruan "tak terlihat" menggunakan metode blue-green deployment, yang tidak akan menyebabkan downtime untuk aplikasi Anda. Kemampuan ini sangat penting dalam realitas saat ini yang membutuhkan pengembangan yang cepat dan peningkatan konvergensi yang cepat, karena Anda perlu terus-menerus memperbarui proyek Anda agar tetap diminati, menaklukkan pengguna baru, dan umumnya, tidak kalah dari pesaing Anda. Dan jika pemeliharaan yang sering ini mengganggu pekerjaan aplikasi normal dan ketersediaannya, hal ini akan berdampak negatif pada daya tarik layanan Anda.

Jadi mari kita ungkap bagaimana menghilangkan masalah tersebut dan menerapkan pembaruan blue-green pada proyek Anda dengan solusi routing lalu lintas yang diusulkan.

1\. Misalkan kita memiliki dua environment (dengan _Blue_ dan _Green_ [alias](<https://docs.dewacloud.com/docs/environment-aliases>) yang diatur untuk masing-masing sebagai pembeda) dan Traffic Distributor dalam environment terpisah, dirancang untuk merute lalu lintas di antara mereka:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/blue-green-deploy/1.png" alt="blue-green deploy environments structure" max-width="100%"/>

2\. Untuk memperbarui aplikasi pada backend ke versi terbaru tanpa downtime proyek keseluruhan, ini harus dilakukan secara bergantian. Jadi, pertama-tama, mari kita mencegah lalu lintas diarahkan ke salah satu environment kita (misalnya _Blue_) dengan [mengkonfigurasi ulang add-on Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-installation#reconfigure>).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/blue-green-deploy/02.png" alt="route traffic to the Green environment only" max-width="100%"/>

Untuk itu, geser slider **Traffic ratio** ke posisi _0 … 100_, dengan cara ini memastikan bahwa backend pertama tidak akan diakses.  
Klik **Apply** untuk melanjutkan.

3\. Sekarang, ketika semua lalu lintas yang masuk hanya diproses oleh environment kedua (_Green_), Anda dapat menerapkan perubahan apa pun pada yang _Blue_ tanpa terburu-buru, misalnya, meng-deploy dan menguji versi aplikasi baru:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/blue-green-deploy/3.png" alt="update Blue environment, while Green processes requests" max-width="100%"/>

4\. Sekarang, karena Anda perlu memperbarui proyek pada host kedua, cukup ulangi langkah _2 - 3_ di atas dan tukar peran environment (misalnya, atur slider **Traffic ratio** ke posisi berlawanan dari _100 … 0_). Ini akan memungkinkan salinan proyek _Blue_ untuk memproses semua permintaan dan _Green_ untuk melakukan pemeliharaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/blue-green-deploy/4.png" alt="update Green environment, while Blue processes requests" max-width="100%"/>

5\. Terakhir, buka kerangka konfigurasi Distributor sekali lagi dan kembalikan bobot server yang diinginkan untuk mengembalikan operabilitas asli, misalnya:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/blue-green-deploy/05.png" alt="re-configure Traffic Distributor" max-width="100%"/>

Itu dia! Sebagai hasilnya, aplikasi Anda diperbarui pada kedua backend, sementara pelanggan Anda tetap dapat menggunakan layanan tanpa gangguan selama semua operasi ini.

## Baca Juga{#whats-next}

* [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
* [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
* [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-integration/>)
* [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
* [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)