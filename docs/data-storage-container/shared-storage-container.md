---
sidebar_position: 2
slug: /shared-storage-container
title: Shared Storage Container
---

# Shared Storage Container

**Shared Storage Container** adalah jenis node khusus, yang dirancang untuk penyimpanan data. Dibandingkan dengan container lain yang dikelola, ini memberikan sejumlah manfaat yang sesuai:

  * _**Jenis klien NFS dan Gluster Native (FUSE)**_ untuk pemahaman data 
    * **[NFS](<https://docs.dewacloud.com/docs/nfs/>)** \- protokol sistem file yang mudah dimengerti, dirancang untuk pemrosesan yang dipercepat dan kinerja tinggi
    * **[Gluster Native (FUSE)](<https://docs.dewacloud.com/docs/glusterfs/>)** \- protokol sistem file yang andal dengan replikasi otomatis data yang di-mount, dirancang untuk pencadangan data dan failover (mengonsumsi lebih banyak CPU/disk daripada NFS)
  * _**Dukungan NFSv4**_ menggantikan _NFSv3_ pada stack lain yang dikelola, memastikan peningkatan kinerja (terutama untuk banyak file), keamanan yang lebih kuat, dukungan ekspor direktori [FUSE](<https://github.com/libfuse/libfuse>), dan lainnya.
  
    :::note
    Setiap container yang dikelola platform dapat menerima mounts melalui versi keempat dari protokol, tetapi hanya Shared Storage Container yang dapat mengekspor data melalui NFSv4.
    :::
  
  * _**[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)**_ opsi mengkonfigurasi secara otomatis cluster yang andal, memastikan keamanan data. Jika salah satu atau beberapa node gagal, klien _AutoFS_ secara otomatis beralih ke instance yang berfungsi pada upaya operasi baca/tulis berikutnya.
  * _**Ruang Disk Diperbesar**_ dibandingkan dengan node umum lainnya, disediakan untuk Shared Storage Container, memungkinkan bekerja dengan volume data yang lebih besar. Nilai tertentu tergantung pada pengaturan penyedia layanan Anda dan dapat bervariasi berdasarkan jenis akun.
  * _**Kinerja yang Dioptimalkan**_ karena semua software yang diperlukan telah dipasang sebelumnya (mis. _NFS & RPC_ untuk NFSv4, _[GlusterFS](<https://www.gluster.org/>)_ untuk auto-clustering) dan fitur default platform (skala vertikal dan horizontal elastis, model penetapan harga bayar-sesuai-penggunaan yang efisien, UI yang nyaman dengan dukungan ekspor file dan titik mount, dll.)

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/01-shared-storage-container-illustration.png" alt="shared storage container illustration" width="30%"/>

Dan di bawah ini kita akan mempertimbangkan bagaimana mengatur server Shared Storage seperti itu di dalam platform, beberapa tips tentang pengelolaannya, dan kekhususan kasus penggunaannya:

  * [Storage Container Creation](<https://docs.dewacloud.com/docs/#storage-container-creation>)
  * [Shared Storage Auto-Cluster](<https://docs.dewacloud.com/docs/#shared-storage-auto-cluster>)
  * [Storage Container Management](<https://docs.dewacloud.com/docs/#storage-container-management>)

## Storage Container Creation{#storage-container-creation}

Untuk membuat Shared Storage Container baru, aktifkan bagian _**Storage**_ yang sesuai di topology wizard. Opsi ini tersedia untuk semua jenis engine, termasuk container _Docker_.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/02-shared-storage-topology-wizard.png" alt="shared storage topology wizard" width="100%"/>

Di bagian tengah wizard, Anda dapat memberikan konfigurasi tambahan untuk Shared Storage Anda. Jumlah ruang penyimpanan yang disediakan dapat disesuaikan melalui kolom _Disk Limit_. Platform dapat secara otomatis mengkonfigurasi sebuah [cluster penyimpanan yang andal](<https://docs.dewacloud.com/docs/#shared-storage-auto-cluster>) (sebagai pengganti node terpisah) jika Anda mengaktifkan switcher _**Auto-Clustering**_. Juga, jika diperlukan, alamat [public IP](<https://docs.dewacloud.com/docs/public-ip/>) dapat dilampirkan ke node (baik IPv4 dan IPv6).

:::tip
Karena tipe container ini dikembangkan secara khusus untuk digunakan sebagai server data storage, Anda perlu mempertimbangkan beberapa spesifikas tentang konfigurasinya: meskipun RAM & CPU bukan sumber daya utama dari penyimpanan, mereka masih dikonsumsi oleh node karena beroperasi melalui jaringan (jumlah tertentu tergantung pada beban) jika nilai maksimum ruang disk per node penyimpanan tidak cukup, harap hubungi tim dukungan penyedia hosting Anda dan meminta perbesaran batas akun yang sesuai harga node bergantung terutama pada jumlah ruang disk yang digunakan (bukan batasnya) dan lalu lintas jaringan eksternal (cek biaya ini di Quotas & Pricing > Pricing > Disk Space atau Traffic)
:::

Klik **Create** saat sudah siap.

## Shared Storage Auto-Cluster{#shared-storage-auto-cluster}

Setelah mengaktifkan switcher **[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)** untuk Shared Storage Container di topology wizard, platform secara otomatis mengkonfigurasi _replicated volume_ (mereplikasi file di seluruh brick dalam volume). Solusi seperti itu diimplementasikan berdasarkan paket-paket RPM _[GlusterFS](<https://www.gluster.org/>)_ yang telah dipasang dan dimaksudkan untuk environment di mana keandalan tinggi sangat penting.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/03-storage-auto-clustering.png" alt="storage auto-clustering" width="100%"/>

:::tip
Pertimbangkan spesifik berikut: Saat ini, konversi otomatis penyimpanan mandiri yang ada ke dalam cluster GlusterFS tidak didukung. Ikuti panduan migrasi manual. Auto-clustering Shared Storage memerlukan virtualisasi terbaru Virtuozzo 7 yang digunakan pada wilayah environment (tergantung pada penyedia hosting Anda) auto-cluster penyimpanan memerlukan 3 atau lebih node dan tidak dapat dinonaktifkan setelah pembuatan, skalasi dilakukan dengan dua langkah node untuk menjaga pengaturan voting yang berfungsi
:::

Selama pembuatan, volume GlusterFS di-mount ke folder **/data** dan dapat diakses melalui protokol NFSv4. Akibatnya, ketika [mounting](<https://docs.dewacloud.com/docs/mount-points/>) dari/ke cluster penyimpanan Anda, itu dikelola sebagai satu komponen (yaitu bukan kumpulan dari container penyimpanan terpisah). Jika salah satu atau beberapa node gagal, klien _AutoFS_ (yang digunakan dalam container aplikasi secara default) secara otomatis beralih ke instance yang berfungsi pada upaya operasi baca/tulis berikutnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/04-storage-nfs-mounts.png" alt="storage NFS mounts" width="80%"/>

:::tip
Jika menghadapi kesalahan split-brains (yaitu penyimpanan tidak dapat menentukan salinan mana yang dalam replika adalah yang benar), ikuti panduan pemecahan masalah yang terhubung untuk menyelesaikan masalah tersebut.
:::

### Use Cases Peculiarities{#use-cases-peculiarities}

Cluster penyimpanan berdasarkan perangkat lunak Gluster [sesuai untuk sebagian besar solusi](<https://gluster.readthedocs.io/en/latest/Install-Guide/Overview/#is-gluster-going-to-work-for-me-and-what-i-need-it-to-do>). Namun, beberapa kasus lebih mendapatkan manfaat dari penggunaan _GlusterFS & NFS_ dibanding yang lainnya.

__Disarankan__ untuk kasus penggunaan berikut:

  * saat penyimpanan GlusterFS sebagian besar digunakan untuk membaca data (bukan menulis), misalnya situs WordPress atau Magento, sumber daya berbagi untuk data konten media
  * jika aplikasi yang melakukan operasi penulisan ke penyimpanan GlusterFS dapat menangani pengecualian dan melakukan upaya pengulangan jika terjadi kesalahan

__Tidak disarankan__ untuk kasus penggunaan berikut:

  * Gluster tidak mendukung apa yang disebut "data terstruktur", jadi jangan gunakan Penyimpanan Bersama untuk basis data SQL. Namun, menggunakan GlusterFS untuk mencadangkan dan memulihkan basis data akan baik-baik saja
  * NFS tidak cocok untuk aplikasi dengan operasi IO berat, dan, jika terjadi kegagalan node selama operasi penulisan, dapat menyebabkan kerusakan data

Beberapa contoh umum penggunaan penyimpanan dijelaskan dalam dokumentasi [Dedicated Storage](<https://docs.dewacloud.com/docs/dedicated-storage/>).

## Storage Container Management{#storage-container-management}

Segera setelah pembuatan, Anda dapat langsung melanjutkan ke konfigurasi container. Di bawah ini, kami akan menunjukkan beberapa tindakan dasar yang mungkin berguna bagi Anda untuk memulai:

1\. Untuk operasi yang paling umum dengan penyimpanan Anda, pengelola file [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) yang terpasang dapat digunakan. Untuk manajemen yang lebih kompleks, Anda mungkin lebih suka bekerja dengan beberapa third party tool (gunakan detail koneksi dari tab **SFTP / SSH Gate** yang dilingkari pada gambar di bawah).

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/05-storage-file-manager.png" alt="storage file manager" width="100%"/>

:::tip
Untuk berbagi file dengan instance lain dalam platform atau server eksternal, gunakan tab Mount Points dan Exports yang sesuai.
:::

2\. Akses [SSH](<https://docs.dewacloud.com/docs/ssh-access/>) (baik melalui klien SSH _web_ atau _local_) dapat dilakukan untuk mendapatkan kendali penuh atas server penyimpanan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/06-web-ssh-connection-to-storage.png" alt="Web SSH connection to storage" width="100%"/>

3\. Jika Anda ingin menggunakan Shared Storage Container Anda sebagai server eksternal (yaitu tidak hanya dalam instalasi PaaS saat ini) - aktifkan opsi [public IP](<https://docs.dewacloud.com/docs/public-ip/>) untuk membuatnya dapat diakses dari luar. Ikuti instruksi dalam panduan [NFS server configurations](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>) yang berdedikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/07-storage-public-ip.png" alt="storage public IP" width="100%"/>

Alamat IP yang terlampir pada _Shared Storage_ dapat dilihat melalui memperluas node yang sesuai di dashboard.

4\. Saat menghentikan atau menghapus sebuah environment, platform secara otomatis memeriksa konfigurasi mounts yang ada pada node yang terdiri dari environment tersebut dan menyediakan **Details** tentang instance yang terpengaruh oleh tindakan dalam jendela konfirmasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/08-nfs-mount-dependencies.png" alt="NFS mount dependencies" width="80%"/>

:::note
Opsi migrasi langsung tidak tersedia untuk migrasi environment dengan container Shared Storage. Jadi, untuk memeriksa node yang terpengaruh oleh tidak tersedianya sementara penyimpanan, gunakan ketersediaan komponen link yang sesuai yang dilingkari dalam gambar di bawah.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/shared%20storage%20container/09-shared-storage-migration.png" alt="shared storage migration" width="100%"/>

Itu saja! Untuk sekarang, karena Anda sudah mengetahui poin utama dalam menangani Shared Storage Container Anda, jangan ragu untuk melanjutkan dan mengisi dengan konten yang diperlukan.

Jika Anda mengalami masalah dalam penerapan, konfigurasi, atau penggunaan Shared Storage Container, jangan ragu untuk meminta bantuan teknis pakar kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Data Storage Overview](<https://docs.dewacloud.com/docs/data-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)
  * [External NFS Server Configuration](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)
