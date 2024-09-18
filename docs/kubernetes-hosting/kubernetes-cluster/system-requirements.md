---
sidebar_position: 2
slug: /kubernetes-cluster-requirements
title: System Requirements
---
# Kubernetes Cluster: System Requirements{#kubernetes-cluster-system-requirements}

Paket **Kubernetes Cluster** mungkin tidak tersedia di beberapa [region](<https://docs.dewacloud.com/docs/environment-regions>) karena spesifikasi perangkat keras dari platform tertentu. Dalam kasus seperti itu, silakan hubungi dukungan penyedia hosting Anda.

Konsumsi minimum dan optimal dari RAM, CPU, dan penyimpanan bergantung pada ukuran cluster, komponen yang terinstal, beban kerja aktif, dll.

**Resources[1]** | **Development Cluster[2]** | **Production Cluster[3]**  
---|---|---  
_Cloudlets_ | 14 | 33  
_RAM & CPU_ | 1.4 GiB RAM, 419 MHz CPU | 3.6 GiB RAM, 947 MHz CPU  
_Storage[4]_ | 5.65 GB | 15.01 GB  

:::note
[1]Pengukuran dilakukan pada cluster pengembangan dan produksi bare tanpa beban tambahan. Oleh karena itu, nilai yang ditentukan adalah persyaratan sistem minimum, yang bisa jauh lebih tinggi untuk cluster yang dibebani (terutama produksi).

[2]Topologi cluster pengembangan - satu master, satu pekerja, satu node penyimpanan, tanpa alat pemantauan, deployment _Hello World_ contoh.

[3]Topologi cluster produksi - API balancer, tiga master, dua pekerja, satu node penyimpanan, alat pemantauan, deployment _Hello World_ contoh.

[4]Disk cepat sangat penting untuk performa _etcd_ (penyimpanan key-value yang digunakan oleh K8s), sementara _etcd_ yang lambat dapat menyebabkan ketidakstabilan cluster karena beban kerja yang gagal. Tautan berguna: Persyaratan Disk, Informasi Benchmark, Cara Menjalankan Benchmark, dan Unduh Benchmark.
:::

Di sini, _cluster pengembangan_ direkomendasikan hanya sebagai **lingkungan sandbox**. Untuk **tujuan produksi**, topologi yang sangat tersedia dengan multi-master adalah opsi yang disukai. Selanjutnya, berdasarkan beban yang diharapkan, jumlah pekerja yang diperlukan dapat ditambahkan secara manual, atau [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling>) yang sesuai dapat dikonfigurasikan. Menambahkan lebih banyak node master masuk akal hanya jika ada sejumlah besar permintaan yang datang dari klien (_kubectl_, _dashboard_, pekerjaan _continuous integration_, aplikasi _K8s-native_, dll.).

## Baca Juga{#whats-next}

  * [Kubernetes Overview](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)
  * [K8s Cluster Installation](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation/>)
  * [K8s Cluster Versions](<https://docs.dewacloud.com/docs/kubernetes-cluster-versions/>)
  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access/>)