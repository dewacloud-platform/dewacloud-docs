---
sidebar_position: 2
slug: /sendmail
title: Running Sendmail Service
---
# Menjalankan Sendmail Di Dalam Container

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-1.png" alt="Sendmail logo" width="20%"/>

**[Sendmail](<http://www.sendmail.com/>)** adalah agen transfer email sumber terbuka yang sangat populer untuk sistem UNIX, yang umumnya disertakan dalam paket dengan sebagian besar distribusi Linux. Ini mendukung banyak protokol transfer email (seperti SMTP, ESMTP, dan lainnya), yang dirancang untuk merutekan email melalui Internet dan jaringan internal.

Platform ini menyediakan Sendmail yang sudah termasuk dalam semua build server aplikasi secara default. Namun, kemampuan untuk menjalankan layanan ini di dalam container tergantung pada pengaturan penyedia hosting tertentu - di beberapa platform, layanan ini mungkin hanya tersedia jika ada [public IP](<https://docs.dewacloud.com/docs/public-ip/>) yang terhubung. Jadi, mari kita lihat bagaimana cara:

  * [memeriksa ketersediaan Sendmail](#check-sendmail-availability)
  * [mengaktifkan Sendmail jika tidak berjalan](#enable-sendmail)
  * [mengirim pesan uji](#send-message-via-sendmail)

## Check Sendmail Availability{#check-sendmail-availability}

Untuk mengetahui apakah penyedia layanan hosting Anda mengizinkan menjalankan Sendmail di container dengan alamat internal saja, Anda dapat:

  * mengirimkan permintaan yang sesuai melalui bagian _**Help > Contact Support**_ di dashboard Anda 
  
  <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-2.png" alt="contact support" width="40%"/>
  
  * atau periksa ini secara manual dalam beberapa langkah sederhana untuk salah satu container server aplikasi Anda, mengikuti instruksi di bawah ini:

1\. Hubungkan ke akun Anda melalui [SSH Gateway](<https://docs.dewacloud.com/docs/ssh-gate/>) platform.

:::tip 
Jika Anda belum melakukan operasi serupa sebelumnya, Anda perlu:generatean keypair SSH dan tambahkan kunci SSH publik Anda ke dashboard, buat koneksi melalui protokol SSH 
:::

2\. Setelah berada di shell server aplikasi, jalankan perintah _**pstree**_ untuk menampilkan daftar proses yang saat ini ditangani dalam sistem. Periksa apakah daftar tersebut termasuk Sendmail - kehadirannya berarti layanan yang sesuai sudah berjalan, sehingga Anda dapat langsung mulai menggunakannya.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-3.png" alt="Sendmail process" width="60%"/>

Jika tidak, jika baris yang sesuai tidak ada, lanjutkan ke bagian berikutnya untuk mengetahui cara mengaktifkan Sendmail.

## Enable Sendmail{#enable-sendmail}

Cara termudah untuk membuka Sendmail adalah dengan mengaktifkan [public IP](<https://docs.dewacloud.com/docs/public-ip/>) untuk server aplikasi Anda melalui wizard topologi (baik saat [pembuatan environment](<https://docs.dewacloud.com/docs/setting-up-environment/>), atau, untuk environment yang sudah berjalan, dapat diakses dengan bantuan tombol **Change environment topology**).

Kemudian cukup aktifkan switcher yang sesuai di lapisan _App Server_ dan konfirmasikan perubahan dengan tombol **Apply** di sudut kanan bawah frame wizard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-4.png" alt="enable public IP" max-width="100%"/>

Setelah konfirmasi dan lampiran alamat IP eksternal, layanan Sendmail akan secara otomatis dimulai, sehingga Anda dapat langsung [menggunakannya](#send-message-via-sendmail).

:::tip 
Sebagai pilihan, Anda dapat mengajukan permohonan kepada tim Dukungan host Anda dan bernegosiasi untuk mendapatkan izin menjalankan Sendmail pada server tanpa alamat eksternal terpasang. 
:::

## Send Message via Sendmail{#send-message-via-sendmail}

Anda dapat mengetahui cara kerja Sendmail dengan mengirimkan email uji sederhana. Ini dapat dilakukan langsung dari command line - untuk itu:

1\. Hubungkan ke server aplikasi Anda (dengan layanan Sendmail yang sudah berjalan) [melalui SSH](<https://docs.dewacloud.com/docs/ssh-gate/>).

2\. Jalankan baris kode berikut untuk mengirimkan surat:

```bash  
echo "{text}" | sendmail -f {from_address} -v {to_address}   
```    

di mana:

  * `{text}` - teks surat Anda, misalnya, _Unlimited PaaS_
  * `{from_address}` - alamat email pengirim dalam format _mail@example.com_
  * `{to_address}` - alamat email penerima (dalam format _mail@example.com_ yang sama)

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-5.png" alt="send email with Sendmail" max-width="100%"/>

3\. Untuk memastikan semuanya berfungsi seperti yang diharapkan, akses akun email yang Anda kirimi pesan dan periksa kotak masuk untuk pesan baru (pengiriman dapat memerlukan waktu hingga beberapa menit).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/mailings/running-sendmail-service/running-sendmail-service-6.png" alt="check inbox" width="60%"/>

Hebat! Sekarang Anda dapat yakin bahwa Sendmail siap digunakan. Dan jika Anda tertarik dengan konfigurasi yang lebih rinci dan solusi lebih kompleks yang dapat diimplementasikan dengan alat ini, silakan merujuk ke [dokumentasi resmi](<https://www.sendmail.com/pdfs/open_source/installation_and_op_guide.pdf>).

Jika Anda menghadapi masalah saat menjalankan atau mengkonfigurasi Sendmail, jangan ragu untuk meminta bantuan ahli teknis kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Email menggunakan SMTP eksternal](<https://docs.dewacloud.com/docs/email-via-external-smtp/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)