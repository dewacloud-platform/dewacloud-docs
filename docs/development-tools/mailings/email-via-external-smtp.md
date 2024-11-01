---
sidebar_position: 1
slug: /email-via-external-smtp
title: Email via External SMTP
---
# SMTP Eksternal untuk Pengiriman Email

**SMTP** (Simple Mail Transfer Protocol) adalah standar untuk mengirim email melalui jaringan Internet protocol (IP). Komunikasi antara pengirim dan penerima dilakukan melalui string perintah yang memancar dan mengirim data menggunakan saluran data stream yang andal, biasanya koneksi TCP. Dalam tutorial ini, kami akan menunjukkan cara mengirim email melalui SMTP menggunakan hosting PaaS PHP. Di sini kami menyajikan dua cara untuk melakukan pengaturan ini:

  * [dengan menggunakan PHPMailer](#phpmailer-for-email-sending)
  * [dengan mengonfigurasi kode khusus dari bentuk untuk pengiriman email](#using-custom-form-for-email-sending)

## PHPMailer untuk Pengiriman Email{#phpmailer-for-email-sending}

PHPMailer adalah kelas pengiriman email penuh fitur klasik untuk PHP, kompatibel dengan PHP v. 5.0 dan lebih tinggi. Mari kita lihat bagaimana mengintegrasikannya ke platform.

1\. Masuk ke dashboard platform.

2\. Buat environment PHP Anda. Untuk itu tekan tombol **Create environment** dan navigasi ke tab **PHP** di kotak dialog yang dibuka.

3\. Pilih server aplikasi **Apache** dan tentukan batas cloudlet untuk itu. Kemudian aktifkan fitur **Public IP** untuk node Apache, ketik nama untuk environment baru Anda (misalnya, _phpmailer_) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-1.png" alt="create PHP environment" max-width="100%"/>

4\. Unduh **[script PHPMailer](<https://download.jelastic.com/public.php?service=files&t=1c0e6f02fd2da054818b86182fc5747d&download&path=//phpmailer.test.tar.gz>)** (di sini kami menyediakan versi khusus kami yang mengecualikan semua pengaturan tambahan dan ditargetkan hanya pada SMTP).

5\. Arahkan ke **Deployment manager** dan **Upload** paket yang diunduh ke dashboard platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-2.png" alt="deployment manager" width="60%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-3.png" alt="upload phpmailer archive" width="60%"/>

6\. Setelah pengunggahan selesai, deploy **paket PHPMailer** ke lingkungan yang telah Anda buat sebelumnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-4.png" alt="deploy PHPMailer" width="60%"/>

7\. Lalu klik tombol **Config** di samping server aplikasi Anda dan buka file `webroot > {context_name} > config.php`.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-5.png" alt="PHPMailer configuration" width="70%"/>

8\. Tentukan semua data yang diperlukan di sana untuk mengonfigurasi pengiriman email melalui localhost atau melalui beberapa akun email tertentu:

### Mengirim melalui Localhost{#sending-via-localhost}

Anda dapat mengirim email langsung dari aplikasi Anda tanpa menentukan akun email asli. Dalam kasus ini, Anda tidak memiliki batasan pada frekuensi dan jumlah email yang dikirim, tetapi pengiriman email Anda dapat terdeteksi sebagai spam.

Untuk menggunakan konfigurasi ini, Anda harus menyatakan nilai parameter berikut:

  * **host**: state localhost value
  * **auth**: state false (akan menonaktifkan otentikasi karena tidak diperlukan untuk localhost)
  * **username**: tentukan nama yang ingin Anda tampilkan sebagai nama pengirim
  * **addreply**: tentukan email yang akan digunakan untuk mengirim balasan ke pengiriman Anda. Perlu dicatat bahwa ini adalah parameter wajib untuk menyatakan nilainya.
  * **replyto**: tentukan email yang sama seperti untuk parameter addreply

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-6.png" alt="email via localhost configs" width="80%"/>

**Save** perubahan yang dibuat. Setelah itu, Anda dapat mengklik tombol **Open in Browser** di sebelah lingkungan Anda dan Anda akan melihat formulir untuk pengiriman email.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-7.png" alt="PHPMailer send email form" width="60%"/>

Masukkan info pengujian di kolom dan klik **Submit**. Dalam beberapa menit email ini akan muncul di kotak masuk Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-8.png" alt="test email from localhost" width="60%"/>

:::note 
Jika Anda tidak menerima email dalam beberapa menit, periksa folder spam.
:::

### Mengirim melalui Akun Email Asli{#sending-via-real-email-account}

Jika Anda memiliki akun email khusus yang terdaftar untuk pengiriman Anda, Anda juga dapat menggunakannya. Dengan cara seperti itu, email Anda kemungkinan besar tidak akan drop di folder spam, tetapi Anda akan menghadapi beberapa batasan, misalnya, jumlah email yang dapat Anda kirim. Dalam contoh berikut, kami akan menggunakan akun email _gmail.com_.

Anda dapat menggunakan konfigurasi berikut sebagai contoh:

  * **host**: state _ssl://smtp.gmail.com_
  * **port**: _465_ (port SMTP penyedia email Anda, gmail dalam kasus kami)
  * **username:** tentukan akun email yang ingin Anda gunakan
  * **password**: tentukan kata sandi untuk akun yang telah Anda tentukan di baris _username_
  * **addreply** dan **replyto**: tentukan email yang sama seperti di baris _username_ (yang akan Anda gunakan untuk pengiriman)

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-9.png" alt="email via GMail configs" width="80%"/>

**Save** perubahan yang dibuat. Klik tombol **Open in Browser** di sebelah lingkungan Anda untuk melihat formulir untuk pengiriman email.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-10.png" alt="PHPMailer send email form" width="60%"/>

Masukkan info pengujian di kolom dan klik **Submit**. Dalam beberapa saat email ini akan muncul di kotak masuk Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-11.png" alt="test email from GMail" width="60%"/>

## Menggunakan Custom Form untuk Pengiriman Email{#using-custom-form-for-email-sending}

Anda dapat menyiapkan kode formulir khusus Anda sendiri dan mengaturnya untuk digunakan dalam pengiriman email:

1\. Tekan tombol **Config** di sebelah server **Apache**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-12.png" alt="Apache config button" width="60%"/>

2\. Arahkan ke folder **webroot/ROOT** (atau konteks lain) dan buat file baru di sana, misalnya, _mailtest.php_.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-13.png" alt="create mailtest page" width="60%"/>

3\. Tempelkan kode dari formulir khusus Anda ke file yang dibuat dan **Save** perubahan yang dibuat.

Anda dapat menggunakan contoh kami:

```php 
<form method=POST ation=#> From <input type=text name=from><br /> To <input type=text name=to><br /> Subject <input type=text name=subj><br /> Type your message <input type=text name=text><br /> <input type=submit name=sub value=Send> </form> <?php if ($_POST['sub']){ system ("echo {$_POST['text']} | mail -s {$_POST['subj']} -r {$_POST['from']} {$_POST['to']}");} ?>  
```    

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-14.png" alt="mailtest page PHP code" max-width="100%"/>

4\. Kemudian **Open in Browser** lingkungan Anda dan tambahkan nama file Anda ke akhir URL. Anda akan melihat formulir berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-15.png" alt="custom email sending form" width="60%"/>

5\. Untuk mengirim email, Anda dapat menggunakan localhost dan akun email asli (cukup ketik “localhost” atau email yang diperlukan di kolom _From_). Setelah mengisi semua kolom, klik **Send**.

Sebagai hasilnya, penerima akan mendapatkan email tersebut.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/email-via-external-smtp/email-via-external-smtp-16.png" alt="test email from custom form" width="60%"/>

:::note 
Email dapat masuk ke dalam folder spam.
:::

Itu saja! Sekarang Anda dapat melakukan pengiriman email langsung dari aplikasi Anda yang di-host dengan platform.

## Baca Juga{#whats-next}

  * [Layanan Sendmail](<https://docs.dewacloud.com/docs/sendmail/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [Gambaran Umum Garbage Collector](<https://www.virtuozzo.com/company/blog/garbage-collection/>)
  * [Remote Debugging](<https://docs.dewacloud.com/docs/remote-debugging/>)
