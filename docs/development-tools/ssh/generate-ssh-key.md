---
sidebar_position: 2
slug: /ssh-generate-key
title: Generate SSH Key
---
# Generate SSH Key

Instruksi di bawah ini menjelaskan langkah-langkah untuk membuat kunci SSH. Sejak versi _8.0.2_, platform ini mendukung jenis kunci berikut:

  * _ECDSA_
  * _EdDSA_
  * _RSA_

Ikuti langkah-langkah di salah satu bagian berikut (berdasarkan sistem operasi Anda):

  * [Linux/MacOS](<https://docs.dewacloud.com/docs/#for-linuxmacos>)
  * [Windows](<https://docs.dewacloud.com/docs/#for-windows>)

## For Linux/MacOS{#for-linuxmacos}

Hasilkan kunci SSH baru (misalnya, jenis _RSA_) menggunakan alat _**[ssh-keygen](<https://linux.die.net/man/1/ssh-keygen>)**_:

1\. Mulai pembuatan dengan perintah berikut:

```
ssh-keygen -t rsa  
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-1.png" alt="ssh keygen generate rsa key" width="80%"/>

Jika diperlukan, sesuaikan lokasi kunci yang diinginkan dan passphrase (kami akan melanjutkan dengan nilai default).

2\. Anda dapat melihat nilai dari kunci SSH publik dan privat dengan perintah _**cat**_ (lokasi tepatnya dilingkari pada gambar di atas). Sebagai contoh:

```
cat /home/jelastic/.ssh/id_rsa.pub  
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-2.png" alt="view ssh key value console" width="100%"/>

3\. Sekarang, Anda dapat [menambahkan kunci SSH yang dihasilkan](<https://docs.dewacloud.com/docs/ssh-add-key/>) ke akun PaaS Anda:

  * _kunci publik_ untuk akses melalui [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate-access/>)
  * _kunci privat_ untuk [autentikasi](<https://docs.dewacloud.com/docs/git-ssh/>) di repositori GIT jarak jauh Anda melalui SSH

## For Windows{#for-windows}

1\. Unduh dan jalankan alat SSH keygen, misalnya, [PuTTYgen](<http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html>):

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-3.png" alt="putty keygen tool download" width="80%"/>

2\. Misalnya, tentukan parameter berikut:

  * pilih jenis kunci _SSH-2 RSA_
  * masukkan jumlah bit yang diinginkan (misalnya _2048_)

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-4.png" alt="putty generate rsa ssh key" width="80%"/>

Klik **Generate**.

3\. Sekarang, tergantung pada jenis kunci yang Anda butuhkan:

  * untuk mendapatkan _**kunci publik**_ untuk akses SSH ke akun Anda melalui [klien lokal](<https://docs.dewacloud.com/docs/ssh-gate-access/>) \- salin kunci yang dihasilkan dari bidang output di bagian atas jendela 
  
  <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-5.png" alt="putty view public key value" width="80%"/>

  * untuk mendapatkan _**kunci privat**_ untuk [autentikasi](<https://docs.dewacloud.com/docs/git-ssh/>) di repositori GIT jarak jauh Anda melalui SSH - buka menu **Conversions** dan pilih opsi **Export OpenSSH key** 
  
  <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/generate-ssh-key/generate-ssh-key-6.png" alt="putty export private key" width="80%"/>

Setelah itu, Anda dapat membuka file ini di editor teks apa pun dan menyalin isi kunci untuk [ditambahkan](<https://docs.dewacloud.com/docs/ssh-add-key/>) ke dashboard platform.

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [Add SSH Key](<https://docs.dewacloud.com/docs/ssh-add-key/>)
  * [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)
  * [SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate-access/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)