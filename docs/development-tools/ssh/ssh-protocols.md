---
sidebar_position: 6
slug: /ssh-protocols
title: SSH Protocols
---
# SFTP/FISH Protocols

**SFTP** (SSH File Transfer Protocol) dan **FISH** (Files transferred over Shell protocol) memungkinkan Anda melakukan berbagai operasi manajemen file (mengakses, mentransfer, dll.) melalui saluran yang aman.

Kami menyediakan dukungan **SFTP** (Secure File Transfer Protocol) dengan menerapkan daemon berulir untuk pemrosesan koneksi SFTP. Ini memungkinkan Anda mengakses, mengelola, dan mentransfer file langsung ke container melalui SSH gate, dan dengan cara ini, memastikan keamanan data.

Protokol **FISH** (Files transferred over Shell protocol) didukung oleh sejumlah klien FTP yang populer dan manajer file (misalnya Midnight Commander, Konqueror, lftp, Krusader, dll.). Ini memungkinkan akses untuk mengelola sistem file container dengan aman. Mari kita lihat contoh penggunaan protokol ini.

## SFTP{#sftp}

Untuk mengakses container yang diperlukan melalui protokol SFTP, Anda perlu memiliki kunci privat pada mesin lokal Anda yang sesuai dengan kunci SSH publik yang sebelumnya ditambahkan ke dashboard platform.  
Untuk pengguna Linux/MacOS, kunci privat ini disimpan secara otomatis selama pembuatan kunci.  
Jika Anda adalah pengguna Windows, Anda harus menyimpan kunci privat yang sesuai dengan kunci SSH publik Anda (kami menggunakan alat PuTTYgen sebagai contoh): 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-1.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6save private key" width="70%"/>

Sekarang kita dapat melanjutkan untuk membangun koneksi SFTP.

1\. Jalankan klien FTP Anda dengan dukungan protokol SFTP. Kami menggunakan FileZilla sebagai contoh, oleh karena itu, navigasikan ke item menu **Edit > Settings**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-2.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6edit settings" width="70%"/>

2\. Di jendela yang terbuka, navigasikan ke bagian **SFTP**. Pilih tombol **Add keyfile** dan pilih kunci SSH privat Anda yang sebelumnya disimpan. Klik **OK**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-3.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6filezilla private key" width="70%"/>

3\. Setelah itu, navigasi ke item menu **File \> Site Manager**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-4.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6site manager" width="70%"/>

4\. Di jendela yang terbuka, klik tombol **New site** dan tentukan parameter berikut:

  * di bidang **Host**, nyatakan host SSH Anda (_gate.\{hoster_domain\}_)
  * di bidang **Port**, masukkan nilai _3022_.
  * pilih **SFTP** dalam daftar drop-down Protocol.
  * pilih tipe Logon **Normal**.
  * di bidang **User**, masukkan Node ID dari container yang diinginkan (dapat dilihat dalam daftar container environment tertentu di kolom _**nodeid**_ terpisah melalui SSH console) dan User ID Anda (nomor sebelum simbol @ dalam string koneksi SSH Anda) dipisahkan dengan tanda hubung. Akhirnya, klik tombol **Connect**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-5.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6filezilla settings" width="70%"/>

5\. Setelah koneksi terjalin, Anda akan melihat daftar folder container dalam frame yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-6.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6remote site" width="70%"/>

Itu saja! Sekarang Anda dapat melanjutkan mengelola dan mentransfer file aplikasi Anda melalui saluran aman.

## FISH{#fish}

Mari kita lihat contoh penggunaan protokol FISH dengan membangun koneksi aman antara container jarak jauh dan alat Midnight Commander.

1\. Pertama, pastikan Anda memiliki kunci privat pada mesin lokal Anda yang sesuai dengan kunci SSH publik yang sebelumnya ditambahkan ke dashboard. Jalur default adalah file `/home/ <username>/.ssh/id_rsa` atau `/home/ <username>/.ssh/id_dsa`, tergantung pada jenis pasangan kunci yang Anda buat.

2\. Periksa kepemilikan dan atribut kunci privat Anda dengan memasukkan salah satu perintah berikut:

  * untuk kunci RSA `ls -la /home/ <username>/.ssh/id_rsa`

  * untuk kunci DSA `ls -la /home/ <username>/.ssh/id_dsa` Kepemilikan harus dinyatakan sebagai **username** Anda dan atribut harus **400** atau **600**. Artinya, kunci privat Anda tidak boleh dapat dibaca oleh pengguna lain, jika tidak, koneksi tidak akan terjalin.

3\. Instal dan jalankan [Midnight Commander](<http://en.wikipedia.org/wiki/Midnight_Commander>).

4\. Pilih F9 untuk menampilkan menu toolbar. Kemudian buka menu panel kiri atau kanan dan pilih item **Shell link**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-7.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6mc1" width="70%"/>

5\. Di frame **Shell link to machine** yang terbuka, masukkan nilai berikut dipisahkan dengan tanda hubung:

  * Node ID dari container yang diinginkan (dapat dilihat dalam daftar container environment tertentu di kolom _**nodeid**_ terpisah melalui SSH console)
  * string koneksi SSH Anda (`{user_id}@{ssh_host}:3022`) Klik **OK**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-8.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6mc2" width="70%"/>

6\. Ketika koneksi terjalin, Anda akan melihat struktur file container di panel yang sesuai (dalam kasus kami, di sebelah kanan).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-protocols/ssh-protocols-9.png" alt="ssh protocols c4d7958e2bfe5a5f906a0013b17aedb6mc3" width="70%"/>

Sekarang, Anda dapat dengan aman mengelola sistem file container Anda menggunakan perintah RSH. Nikmati!

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container//>)
  * [SSH Protocols](<https://docs.dewacloud.com/docs/ssh-protocols/>)
  * [Capistrano](<https://docs.dewacloud.com/docs/ssh-capistrano/>)