---
sidebar_position: 1
slug: /mount-points
title: Mount Points
---

# Mount Points

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/01-mount-points-icon.png" alt="mount points icon" width="30%"/>

**Mount points** adalah fungsi berbagi data antara instance di dalam akun yang sama. Dimulai __dari klien__ dan menciptakan koneksi yang memungkinkan akses dan pengoperasian __data di server__ seolah-olah itu adalah file lokal. Platform menyediakan UI yang nyaman untuk operasi ini langsung di [Configuration Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) bawaan. Dalam beberapa klik saja, Anda dapat menentukan direktori jauh yang terletak secara fisik di node lain tetapi harus dapat diakses pada container saat ini.

:::tip
Operasi yang sama bisa dimulai dari server. Ini disebut Exporting Data - pelajari lebih lanjut di dokumen yang ditautkan.
:::

Saat membuat titik mount, platform mendukung dua protokol klien - **[NFS](<https://docs.dewacloud.com/docs/nfs/>)** dan **[GlusterFS Native](<https://docs.dewacloud.com/docs/glusterfs/>)**. Yang pertama tersedia untuk semua container di platform dan relatif lebih cepat. Sebaliknya, yang kedua adalah fitur unik dari [GlusterFS cluster](<https://docs.dewacloud.com/docs/shared-storage-container/#shared-storage-auto-cluster>), yang direkomendasikan untuk high concurrency, kinerja tinggi dari operasi penulisan, dan failover.

1\. Jadi, untuk melakukan mount data ke container, klik tombol **Config** di sebelah container atau lapisan yang dipilih. Pada tab yang terbuka, beralih ke bagian _**Mount Points**_ di menu sebelah kiri Anda dan klik tombol **Mount**.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/02-create-new-mount.png" alt="create new mount" max-width="100%"/>

2\. Formulir yang terbuka menyediakan tiga jenis operasi berikut:

  * **Data Container** \- mengakses data dari node di akun yang sama
  * **Master Container** \- berbagi data di seluruh node dari lapisan yang sama dalam environment saat ini
  * **External Server** \- mengakses data dari server jarak jauh di luar akun PaaS

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/03-configure-mount-point.png" alt="configure mount point" max-width="100%"/>

3\. Setelah memilih jenis operasi yang diperlukan, berikan detail lain sebagai berikut:

  * **Mount Point** \- jalur ke folder lokal tempat konten yang dipasang akan ditampilkan

**Catatan:**

  * jika direktori yang ditentukan tidak ada, itu akan dibuat secara otomatis
  * jalur tidak dapat dimulai dengan _/proc_ , _/dev_ , _/sys_ , _/run_ atau sama dengan berikut ini: _/_ , _/bin_ , _/lib_ , _/lib64_ , _/lib32_ , _/usr_ , _/usr/bin_ , _/usr/sbin_ , _/usr/lib_ , atau _/usr/lib64_ (daftar ini mungkin berbeda berdasarkan pengaturan penyedia Anda)

  * _**Data Container**_

    * **NFS Server** \- daftar node yang dapat diperluas pada akun Anda yang dapat digunakan sebagai penyimpanan data container
    * **Remote Path** \- lokasi direktori yang diperlukan pada container jarak jauh (Anda dapat mengetiknya secara manual atau memilih salah satu jalur favorit pada node tersebut dari daftar drop-down yang diambil secara otomatis)
    
      :::note
      Jika cluster GlusterFS dipilih sebagai Server, Anda juga dapat memilih preferensi protokol Client Type untuk mount. NFS direkomendasikan untuk topologi yang berorientasi pada kinerja, sedangkan Gluster Native memastikan keamanan data melalui pencadangan dan replikasi.
      :::
  
  * _**Master Container**_

    * **NFS Server** \- node master dari lapisan dipilih secara otomatis
    * **Remote Path** \- folder yang sama dengan yang ditentukan dalam field **Mount Point** digunakan (akan dibagikan di antara semua node dari lapisan)
  
  * _**External Server**_

    * **NFS Server** \- IP eksternal dari server penyimpanan data atau nama [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) nya
    * **Remote Path** \- lokasi file yang diekspor pada NFS server
  * **Mount to all nodes** \- switcher untuk menetapkan mount yang sama agar ditambahkan ke semua node dalam lapisan, termasuk yang dapat ditambahkan di masa depan (secara otomatis diaktifkan untuk jenis **Master Container**)

  * **Read Only** \- hidupkan switcher untuk membatasi pengeditan data yang dipasang di client nodes (secara default, hak _read & write_ disediakan)

Klik **Add** untuk melanjutkan.

:::note
Jika bukan Shared Storage Container dedikasi yang telah dipilih sebagai data container, penundaan satu kali yang singkat (hingga beberapa menit) dapat terjadi karena instalasi perangkat lunak NFS yang diperlukan.
:::

4\. Dalam sekejap, titik mount Anda akan dibuat dan ditambahkan ke daftar. Jadi, Anda dapat **Navigate to directory** (klik dua kali pada rekaman yang sesuai) atau **Unmount** ketika itu menjadi tidak perlu.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/04-manage-existing-mount.png" alt="manage existing mount" max-width="100%"/>

5\. Setelah menavigasi ke dalam, Anda akan melihat konten yang sama seperti di server jarak jauh Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/05-switch-between-nodes.png" alt="switch between nodes" max-width="100%"/>

Berdasarkan konfigurasi mount, konten jarak jauh dapat diedit dari client atau tidak, serta tersedia untuk semua node lapisan atau hanya satu. Anda dapat beralih di antara node menggunakan daftar drop-down di menu sebelah kiri (dilingkari di atas).

**Pertimbangkan** bahwa agar dapat diedit (yaitu jika klien diberikan hak RW), folder di server harus memiliki izin yang sesuai untuk pengguna klien (nama pengguna default dapat bervariasi untuk server yang berbeda - misalnya _root_ dan _jelastic_).

Jika perlu, terhubung ke server penyimpanan Anda melalui [SSH](<https://docs.dewacloud.com/docs/ssh-access/>) dan jalankan perintah berikut untuk menyesuaikan hak:

```
chown {uid}:{gid} {path}
```

Di sini:

  * _**\{uid\}**_ \- ID pengguna, yang dapat ditemukan dalam file _**/etc/passwd**_
  * _**\{gid\}**_ \- pengidentifikasi grup, yang ditampilkan dalam file _**/etc/group**_
  * _**\{path\}**_ \- jalur ke direktori atau file yang ingin Anda ubah haknya

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/mount%20points/06-edit-access-permissions.png" alt="edit access permissions" max-width="100%"/>

Platform mount points menyediakan sejumlah besar [skenario dan kemungkinan](<https://docs.dewacloud.com/docs/data-storage-container/>) untuk pengaturan dan pengendalian data tingkat lanjut.

## Baca Juga{#whats-next}

  * [Data Storage Overview](<https://docs.dewacloud.com/docs/data-storage-container/>)
  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)
  * [NFS](<https://docs.dewacloud.com/docs/nfs/>)
  * [GlusterFS](<https://docs.dewacloud.com/docs/glusterfs/>)
