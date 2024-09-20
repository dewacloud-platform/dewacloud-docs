---
sidebar_position: 1
slug: /nfs
title: NFS
---

# NFS

**NFS** atau **[Network File System](<https://tools.ietf.org/html/rfc7862>)** adalah protokol yang dirancang untuk mengakses file pada host jarak jauh melalui jaringan komputer dan menjalankannya seolah-olah itu adalah file lokal. Ini adalah standar yang populer dan banyak tersebar yang tersedia untuk semua orang.

NFS adalah aplikasi client-server, yang berarti bahwa server NFS harus diinstal pada host yang menyediakan ruang disk bersama dan klien NFS pada server yang mendapatkan akses ke file yang dibagikan.

Platform ini menyediakan dukungan NFS yang siap pakai untuk semua container (baik klien maupun server). Platform ini sepenuhnya mendukung versi ketiga dari protokol di semua stack yang bersertifikat. Versi keempat didukung sebagai klien saja. Server NFSv4 diimplementasikan di **[Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)** khusus:

  * **semua container** (kecuali node berbasis _alpine_) - NFSv3 (klien dan server) dan NFSv4 (klien saja)
  * **Shared Storage** \- NFSv3 (klien dan server) dan NFSv4 (klien dan server)

:::tip 
NFS direkomendasikan untuk topologi yang berorientasi pada kinerja, sementara Gluster Native memastikan keamanan data melalui backup dan replikasi.
:::

1\. Platform ini menggunakan konfigurasi berikut ketika mengatur klien NFS:

  * **untuk NFS 3:** _nfsvers=3,nolock,udp,soft,timeo=120,retrans=20,_netdev_
  * **untuk NFS 4:** _nolock,soft,timeo=30,retrans=2,_netdev_

2\. Pertimbangkan keunikan berikut dari berbagi data dengan NFS di platform:

  * file reguler tidak dapat diekspor (hanya direktori)
  * direktori yang di-mount tidak dapat dimulai dengan _**/proc**_ , _**/dev**_ , _**/sys**_ , _**/run**_, atau sama dengan: _**/**_ , _**/bin**_ , _**/lib**_ , _**/lib64**_ , _**/lib32**_ , _**/usr**_ , _**/usr/bin**_ , _**/usr/sbin**_ , _**/usr/lib**_ , atau _**/usr/lib64**_ (daftar ini mungkin bervariasi berdasarkan pengaturan penyedia Anda)
  * NFS shares tidak berfungsi dengan environment yang sedang tidur dan selama [live migration](<https://docs.dewacloud.com/docs/environment-regions-migration/#live-migration>)

3\. Ketika menghadapi masalah dengan NFS, Anda dapat memeriksa **[Tasks Panel](<https://docs.dewacloud.com/docs/dashboard-guide/#tasks-panel>)** di dashboard. Juga, log berikut dapat memberikan beberapa informasi tambahan:

  * **/var/log/messages** pada server NFS
  * jalankan perintah _**journalctl**_ pada Shared Storage, Docker kustom, atau container VPS

Ikuti panduan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) atau [exporting data](<https://docs.dewacloud.com/docs/storage-exports/>) untuk berbagi file melalui protokol NFS.

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)
  * [GlusterFS](<https://docs.dewacloud.com/docs/glusterfs/>)