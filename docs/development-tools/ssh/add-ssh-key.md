---
sidebar_position: 3
slug: /add-ssh-key
title: Add SSH Key
---
# Add SSH Key

Setelah Anda [menghasilkan kunci SSH](<https://docs.dewacloud.com/docs/ssh-generate-key>), Anda dapat menambahkannya ke akun PaaS Anda.

:::note
Untuk mengelola kunci SSH privat yang ditujukan untuk autentikasi di akun GIT Anda, ikuti instruksi yang sesuai di dalam panduan [SSH Access to GIT Repository](<https://docs.dewacloud.com/docs/git-ssh#add-private>).
:::

Untuk menambahkan kunci SSH publik, yang nantinya dapat digunakan untuk mendapatkan [akses SSH](<https://docs.dewacloud.com/docs/ssh-access>) ke akun PaaS Anda, lanjutkan ke langkah-langkah berikut:

1\. Buka platform dashboard dan arahkan ke toolbar atas. 

![ssh add key 5fe565698fc97a20f4c60d3918356107settings button](#) 

Klik tombol **Settings**.

2\. Tab **Account setting** dengan opsi **SSH Keychain** yang sudah dipilih akan terbuka. 

![ssh add key ssh keychain](#)

Dalam bagian ini Anda dapat menemukan beberapa informasi tentang penggunaan protokol SSH di platform dan kemungkinan yang disediakannya dengan beberapa tautan dokumentasi yang berguna.

3\. Setelah Anda mengetahui detail di atas, beralihlah ke subopsi **Public** dan klik tombol **Add Public Key**. 

![ssh add key public](#)

4\. Tempel kunci publik yang sebelumnya dihasilkan ke bidang input **Key**. Bidang **Add Public Key** akan diisi secara otomatis jika kunci Anda sudah berisi nilai ini (atau Anda dapat menentukan kunci baru di sini). Klik **Add Key**. 

![ssh add key add key](#)

5\. Hasilnya, kunci SSH yang ditambahkan akan muncul dalam daftar, dan Anda akan secara bersamaan menerima email dengan detailnya (seperti judul, fingerprint, dan string koneksi untuk klien SSH Anda). 

![ssh add key public key list](#) 

Dengan cara ini, Anda dapat menambahkan beberapa kunci atau menghapus yang tidak diperlukan dengan menggunakan tombol silang merah.

:::note
Kunci SSH yang ditambahkan terhubung ke akun Anda, tetapi tidak hanya ke environment terpisah.
:::

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [Generate SSH Key](<https://docs.dewacloud.com/docs/ssh-generate-key/>)
  * [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)
  * [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate-access/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)