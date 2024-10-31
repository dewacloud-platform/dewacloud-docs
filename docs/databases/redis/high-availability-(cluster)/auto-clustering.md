---
sidebar_position: 1
slug: /redis-cluster
title: Auto-Clustering
---
# Redis Cluster

**Redis Cluster** adalah implementasi terdistribusi dari Redis yang merupakan penyimpanan struktur data dalam memori open-source. Ini sering digunakan untuk penyimpanan data, cache, broker pesan, dan tugas lainnya. Paket untuk Redis Cluster menyediakan topologi minimal tiga server. Setiap node Primary tersebut disertai dengan satu Secondary untuk memastikan distribusi beban baca dan pemulihan otomatis jika Primary mengalami gangguan. Struktur semacam ini menawarkan kinerja tinggi dan ketersediaan tinggi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-1.png" alt="Redis Cluster scheme" width="50%"/>

Cluster dapat diskalakan baik secara otomatis maupun manual. Setiap operasi penskalaan dilakukan oleh pasangan node - satu Primary dan satu Secondary.

:::tip
Jika Anda ingin belajar lebih banyak tentang spesifikasi Redis Cluster, merujuklah ke dokumentasi resmi.
:::

## Redis Cluster Installation{#redis-cluster-installation}

Instalasi dan konfigurasi otomatis tersedia dengan opsi **[Redis Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/#redis>)** di wizard topologi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-2.png" alt="Redis auto-clustering" max-width="100%"/>

Sebagai alternatif, Anda dapat mengimpor _**Redis Cluster**_ [package manifest](<https://github.com/jelastic-jps/redis-cluster/blob/main/manifest.jps>) atau menemukannya di dashboard dalam [Marketplace](<https://docs.dewacloud.com/docs/marketplace/>). Dalam kedua kasus, Anda akan melihat bingkai instalasi, di mana Anda dapat memberikan data berikut:

  * **Nodes count** \- mengatur total jumlah node Redis dalam cluster. Pensakalan dilakukan melalui pasangan _Primary-Secondary_. Jumlah minimal adalah **6** (3 node Primary dan 3 node Secondary) dan maksimal adalah **12** (6 node Primary dan 6 node Secondary).
  * **Enable Horizontal Auto-Scaling** \- melengkapi cluster dengan [pemicu penskalaan](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/#triggers-for-automatic-scaling>) untuk melakukan penskalaan horizontal otomatis. Pemindahan ulang otomatis dan penyeimbangan ulang akan dilakukan setelah penambahan dan sebelum penghapusan node Primary.
  <img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-3.png" alt="horizontal scaling trigger" max-width="100%"/>

:::tip
Penskalaan akan dilakukan sesuai dengan kondisi berikut secara default: tambahkan 2 node ketika beban CPU atau Memori di atas 70% dari total kapasitas cluster selama lebih dari 5 menit (hingga total 12 node); kurangi 2 node ketika beban CPU atau Memori di bawah 40% dari total kapasitas cluster selama lebih dari 15 menit (tidak kurang dari 6 node)
:::

  * **Enable External IP Addresses for cluster nodes** \- menetapkan [IP publik](<https://docs.dewacloud.com/docs/public-ip/>) ke setiap node dan mengonfigurasi ulang cluster agar bekerja hanya melalui IP publik
  * **Environment** \- menyediakan nama environment
  * **Display Name** \- menetapkan [alias environment](<https://docs.dewacloud.com/docs/environment-aliases/>) yang diinginkan
  * **Region** \- memilih [region environment](<https://docs.dewacloud.com/docs/environment-regions/>) dari daftar yang tersedia

Klik **Install** ketika siap.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-4.png" alt="Redis Cluster installation window" max-width="100%"/>

Setelah deployment selesai, Anda akan melihat pop-up sukses dengan kredensial panel admin Redis Cluster. Informasi yang sama juga akan dikirimkan ke email Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-5.png" alt="Redis Cluster deployed" width="70%"/>

Cluster siap digunakan. Cobalah menghubungkan ke panel admin untuk melihat detail cluster dan melakukan konfigurasi serta kustomisasi yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-6.png" alt="Redis Cluster admin panel" max-width="100%"/>

Anda juga dapat terhubung melalui SSH (misalnya [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)) untuk melakukan penyesuaian yang diperlukan. Misalnya, dengan menggunakan alat [_redis-cli_](<https://redis.io/docs/tools/#cli>) dan password dari email, Anda dapat terhubung ke cluster dan memverifikasi bahwa ia bekerja dengan benar:

```
redis-cli auth {passw0rd}
cluster nodes
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/redis/high-availability-cluster/auto-clustering/auto-clustering-7.png" alt="Redis Cluster SSH access" max-width="100%"/>

Informasi ini dapat diperoleh di node cluster mana pun (baik Primary maupun Secondary). Dalam output ini, Anda dapat melihat jumlah node dalam cluster, ID mereka, alamat, peran, dan shards (hash slots) yang dialokasikan untuk masing-masing node.

## Baca Juga{#whats-next}

  * [Redis Overview](<https://docs.dewacloud.com/docs/redis/>)
  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Automatic Horizontal Scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)