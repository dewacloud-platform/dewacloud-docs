---
sidebar_position: 2
slug: /glusterfs
title: GlusterFS
---

# GlusterFS

**[GlusterFS](<https://docs.gluster.org/en/latest/>)** adalah protokol sistem file jaringan untuk penyimpanan cloud terdistribusi. Fitur khas dari GlusterFS adalah keandalan, failover, dan skalabilitas. Ini berfungsi berdasarkan antarmuka perangkat lunak _FUSE_ yang gratis dan dengan demikian tidak memerlukan server tambahan untuk metadata (berbeda dengan sistem file terdistribusi lainnya, mis. _[Lustre](<https://www.lustre.org/>)_ dan _[Ceph](<https://ceph.io/>)_).

Dibandingkan dengan protokol **[NFS](<https://docs.dewacloud.com/docs/nfs/>)** yang didukung di platform, GlusterFS terkenal karena keandalannya yang lebih maju. Protokol ini beroperasi dengan beberapa server dan direkomendasikan untuk kasus yang memerlukan concurrency tinggi, kinerja tinggi operasi tulis, dan pemulihan failover jika diperlukan. Anda dapat mempelajari lebih lanjut tentang [implementasi arsitektur](<https://docs.gluster.org/en/latest/Quick-Start-Guide/Architecture/>) dari solusi ini dari dokumentasi resmi.

Platform ini menyediakan dukungan klien **Gluster Native** __mulai dari rilis 6.1__ dan hanya pada [Shared Storage Cluster](<https://docs.dewacloud.com/docs/shared-storage-container/#shared-storage-auto-cluster>) :

  * **semua container** (kecuali node berbasis _alpine_) - klien Gluster Native
  * **Shared Storage Cluster** \- klien dan server Gluster Native

:::tip 
Gluster Native direkomendasikan untuk topologi di mana keamanan data harus dipastikan melalui cadangan dan replikasi. Namun, untuk topologi yang berorientasi pada kinerja, protokol NFS lebih sesuai.
:::

1\. Platform ini mengkonfigurasi **Replicated GlusterFS Volume** yang mengatasi risiko kehilangan data dengan menyimpan salinan eksak dari data di semua brick (server). Volume yang direplikasi digunakan untuk meningkatkan keandalan dan redundansi data, sehingga meskipun satu brick gagal, data masih dapat diakses dari replika. Anda dapat mempelajari lebih lanjut tentang cara kerja replikasi GlusterFS di platform dengan menganalisis [JPS manifest](<https://github.com/jelastic-jps/glusterfs/blob/master/replication-logic.jps>).

:::warning 
Jangan bingungkan volume GlusterFS dengan volume container Docker yang tersedia di platform.
:::

2\. Pengaturan default GlusterFS dikonfigurasi secara otomatis dan tidak boleh diubah secara manual. Konfigurasi mencakup nama volume ("_data_") dan IP server yang sesuai.

3\. Pertimbangkan batasan berikut saat berbagi data dengan GlusterFS:

  * berbagi tidak berfungsi dengan lingkungan yang sedang tidur dan selama [live migration](<https://docs.dewacloud.com/docs/environment-regions-migration/#live-migration>)
  * volume kustom dapat dibuat melalui SSH tetapi __tidak direkomendasikan__ karena keterbatasan fungsionalitas (mis. otomasi penskalaan)

4\. Ketika menghadapi masalah dengan GlusterFS, Anda dapat memeriksa **[Tasks Panel](<https://docs.dewacloud.com/docs/dashboard-guide/#tasks>)** di dashboard. Juga, log berikut dapat memberikan beberapa informasi tambahan:

  * _**/var/log/glusterfs**_ di server GlusterFS
  * jalankan perintah _**journalctl**_ pada Shared Storage, Docker kustom, atau container VPS

Ikuti panduan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) atau [exporting data](<https://docs.dewacloud.com/docs/storage-exports/>) untuk berbagi file melalui protokol GlusterFS.

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)
  * [NFS](<https://docs.dewacloud.com/docs/nfs/>)