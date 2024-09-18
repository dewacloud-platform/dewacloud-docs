---
sidebar_position: 4
slug: /volumes
title: Volumes
---

## Volumes{#volumes}

Tab **Volumes** berisi daftar data volumes yang di-mount pada container saat ini, yang dirancang untuk menjaga data secara independen dari siklus hidup container. Mereka ditampilkan dalam bentuk jalur ke titik mount yang sesuai di dalam node:

![volumes layer settings](#)

Menyimpan data dalam volumes memungkinkan berbagai operasi internal (misalnya, [redeploying](<https://docs.dewacloud.com/docs/container-redeploy/>) container ke versi tag yang lain) dilakukan tanpa mempengaruhi atau kehilangan data. Pemeliharaan konten volume semacam itu memberikan tingkat integritas yang tinggi untuk data Anda.

Di bawah ini, kita akan mempertimbangkan bagaimana menambahkan volume custom untuk container Anda dan jenis [data mounting](<https://docs.dewacloud.com/docs/mount-points/>) yang disediakan platform - pada **Local Filesystem**, **Data Container** terpisah, layer **Master Container**, atau **External NFS Server**.

## Operating Custom Volumes{#operating-custom-volumes}

Secara default, volumes yang sudah ditentukan (yaitu, yang ditentukan dalam pengaturan template yang sesuai dan secara otomatis diatur selama pembuatan container) ditampilkan dalam frame **Docker layer settings > Volumes**.

Selain itu, Anda memiliki kemampuan untuk mount dan mengelola custom volumes Anda, yang ditempatkan baik secara lokal, pada instance lain di platform, atau server eksternal apa pun. Untuk itu, ikuti langkah-langkah di bawah ini.

1\. Pilih tombol **Add** di atas daftar untuk melihat empat tab, yang dinamai sesuai dengan jenis volumes yang dapat Anda buat:

  * _**[Local Filesystem](<https://docs.dewacloud.com/docs/local-filesystem-storage/>)**_ \- direktori yang ditentukan akan digunakan sebagai penyimpanan lokal, dimaksudkan untuk menjaga data secara independen dari siklus hidup container saat ini (serta oleh node lainnya)
  
    ![add local filesystem volume](#)

  * _**[Data Container](<https://docs.dewacloud.com/docs/mount-points/>)**_ \- jenis volume ini memungkinkan untuk mount data dari layer lain dalam akun Anda 
  
    ![add data container volume](#)

  * _**[Master Container](<https://docs.dewacloud.com/docs/mount-points/>)**_ \- data, yang disimpan dalam volume semacam itu, secara fisik ditempatkan pada node yang awalnya dibuat dari layer (yang disebut “master node”) dan secara otomatis dibagikan dengan semua instances lainnya pada layer ini 
  
    ![add master container volume](#)

  * _**[External Server](<https://docs.dewacloud.com/docs/mount-points/>)**_ \- opsi ini dimaksudkan untuk mount data dari server NFS eksternal (baik penyimpanan pihak ketiga custom Anda atau [container di platform lain](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)) 
  
    ![add external server volume](#)

Ketika semua parameter untuk jenis mount yang dipilih ditentukan (detailnya dapat dilihat dalam panduan yang terhubung), klik **Add** untuk menyelesaikan konfigurasi.

2\. Dengan opsi **Edit** di panel atas (atau dengan mengklik dua kali pada catatan yang sesuai), Anda dapat mengubah beberapa pengaturan untuk volumes yang sudah ada:

![edit container volume](#)

Di sini, **Local Path** adalah nilai yang tidak dapat diubah, tetapi Anda masih dapat mengalihkan metode mounting (dengan pindah ke tab yang berbeda) dan/atau menyesuaikan izin akses (dengan switcher **Read Only**).

Jangan lupa untuk **Apply** perubahan yang Anda buat.

3\. Jika custom volume Anda tidak lagi diperlukan, itu dapat di-unmount dengan mudah dengan memilih string yang sesuai dan mengklik tombol **Remove** di atas.

**Catatan:**

  * sebelum penghapusan, pastikan volume yang sesuai tidak mengandung data penting, karena akan dihapus secara permanen
  * volumes yang sudah ditentukan (yaitu default) tidak dapat dihapus (sementara masih tersedia untuk diedit)
  * jika Anda ingin menghapus volume tetapi mempertahankan [mount point](<https://docs.dewacloud.com/docs/mount-points/>), hapus tanda centang dari kotak _Unmount path_

![remove container volume](#)

Konfirmasi keputusan Anda dalam bingkai pop-up yang muncul.

Setelah itu, jangan lupa untuk **Apply** semua perubahan Anda dengan tombol yang sesuai di jendela _Docker layer settings_ umum dan, jika diperlukan, di dalam topology wizard (dalam hal memodifikasi environment yang sudah ada).

## Baca Juga{#whats-next}

  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Variables](<https://docs.dewacloud.com/docs/container-variables/>)
  * [Links](<https://docs.dewacloud.com/docs/container-links/>)
  * [Ports](<https://docs.dewacloud.com/docs/container-ports/>)
  * [Run Config](<https://docs.dewacloud.com/docs/container-run-configuration/>)