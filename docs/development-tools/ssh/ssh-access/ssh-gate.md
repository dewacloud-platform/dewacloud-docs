---
sidebar_position: 3
slug: /ssh-gate-access
title: SSH Gate
---
# Access via SSH Gate

Untuk membangun koneksi melalui SSH Gate, Anda perlu [menghasilkan pasangan kunci SSH](<https://docs.dewacloud.com/docs/ssh-generate-key>) dan [menambahkan kunci publik](<https://docs.dewacloud.com/docs/ssh-add-key>) ke akun Anda di dashboard (jika perlu, baca panduan langkah-demi-langkah yang dilampirkan untuk bantuan).

Selanjutnya, dapatkan string koneksi SSH untuk akun Anda dengan mengklik tombol **Settings** di panel atas dashboard. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-1.png" alt="account settings button" width="60%"/>

Dalam jendela **Account settings** yang terbuka, tab **SSH Keys > SSH Connect** akan terbuka secara default. Di sini, Anda dapat melihat informasi yang diperlukan untuk mengakses akun, termasuk string koneksi SSH. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-2.png" alt="account settings ssh connect information" max-width="100%"/>

:::tip 
Di bagian kanan dari bagian tersebut, Anda dapat mengatur koneksi Web SSH ke node mana saja langsung di browser. 
:::

Sekarang, Anda dapat mengakses [seluruh akun PaaS](#ssh-access-to-platform-account) atau hanya [container tertentu](#direct-access-to-container) dengan klien SSH lokal Anda.

## SSH Access to Platform Account{#ssh-access-to-platform-account}

Tergantung pada sistem operasi Anda, Anda perlu melakukan langkah-langkah berikut:

  * _**Linux/MacOS/FreeBSD**_

Buka terminal Anda dan jalankan string koneksi SSH. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-3.png" alt="ssh access via terminal" max-width="100%"/>

  * _**Windows**_

Unduh dan jalankan klien SSH Anda (misalnya [PuTTY](<http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html>)).

Navigasikan ke tab **Session** dalam daftar di sebelah kiri dan isi kolom **Host Name (or IP address)** dan **Port** sesuai dengan string koneksi SSH Anda. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-4.png" alt="ssh access with PuTTY client" width="70%"/>

:::warning
Untuk menambahkan kunci SSH pribadi Anda dengan PuTTY, unduh dan jalankan Pageant tool, klik tombol Add Key dan pilih file kunci SSH yang sesuai. 
<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-5.png" alt="putty pageant tool" width="70%"/>
:::

1\. Setelah terhubung, Anda akan melihat daftar [kelompok environment](<https://docs.dewacloud.com/docs/environment-groups>) (dengan jumlah container yang disediakan dalam tanda kurung) dan environment yang tidak dikelompokkan tersedia untuk akun Anda. Pilih titik yang diperlukan dengan memasukkan nomor yang sesuai. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-6.png" alt="PaaS account via SSH" max-width="100%"/>

:::note 
Hanya environment yang sedang berjalan yang dapat diakses. 
:::

2\. Setelah memilih environment, Anda akan melihat daftar lengkap dari containernya, yang dikelompokkan berdasarkan layer. Di sini, node induk (diperlukan untuk clustering, scaling, cloning, dll.) ditandai dengan tanda _[M]_. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-7.png" alt="connect environment via SSH" max-width="100%"/>

Selain itu, setiap container dilengkapi dengan data **nodeid**, **LAN IP**, **WAN IP**, dan **Alias**. Untuk mengakses node yang diperlukan cukup masukkan nomornya.

## Direct Access to Container{#direct-access-to-container}

Anda dapat "melompat" langsung ke container yang diperlukan, melewati langkah memilih environment dan node yang sesuai. Cukup nyatakan ID container yang sesuai (dapat dilihat di dashboard di sebelah node yang bersangkutan) di awal string koneksi. 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/ssh-gate/ssh-gate-8.png" alt="node ID" width="80%"/>

Sebagai contoh, untuk mengakses container Tomcat, yang ditunjukkan dalam gambar di atas, Anda harus menambahkan awalan _36864-_ ke string koneksi akun default dengan cara berikut:

```
ssh 36864-4790@gate.infra.dewacloud.com -p 3022
```

Kemungkinan ini dapat berguna untuk skrip otomatisasi atau untuk mengatur konfigurasi aplikasi (misalnya, [Capistrano](<https://docs.dewacloud.com/docs/ssh-capistrano>)).

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [Generate SSH Key](<https://docs.dewacloud.com/docs/ssh-generate-key/>)
  * [Add SSH Key](<https://docs.dewacloud.com/docs/ssh-add-key/>)
  * [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)