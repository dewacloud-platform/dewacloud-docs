---
sidebar_position: 4
slug: /ftpftps-support
title: FTP/FTPS Support
---
# Dukungan FTP/FTPS

**File Transfer Protocol (FTP)** adalah protokol jaringan standar yang digunakan untuk mentransfer file dari satu host ke host lain melalui jaringan berbasis TCP.

**FTP** dibangun di atas arsitektur klien-server dan menggunakan koneksi kontrol dan data terpisah antara klien dan server.

Untuk transmisi yang aman yang menyembunyikan (mengenkripsi) nama pengguna dan kata sandi, serta mengenkripsi konten, digunakan FTP yang diamankan dengan SSL (**FTPS**).

Platform ini mendukung baik **FTP** maupun **FTPS**.

Berbeda dengan HTTP, protokol FTP bersifat stateful: Anda membuat koneksi kontrol selama berlangsungnya sesi FTP yang biasanya mencakup beberapa transfer data.

**Penggunaan FTP:**

  * mengunggah/mengunduh sumber daya
  * mengunduh dan membaca [log](<https://docs.dewacloud.com/docs/view-log-files/>) untuk analisis
  * mengedit konfigurasi
  * menyinkronkan file
  * meng-deploy aplikasi (tidak direkomendasikan)

Fitur Platform FTP tersedia untuk server aplikasi maupun database.

:::note 
Saat ini, add-on FTP tidak kompatibel dengan container Docker. 
:::

Untuk mendapatkan manfaat dari FTP dengan platform, Anda perlu memenuhi tiga persyaratan:

  * memiliki **klien FTP** terinstal (misalnya, FileZilla)
  * menambahkan **compute node** ke dalam environment
  * melampirkan **Public IP** untuk node dalam environment Anda

Mari kita lihat langkah demi langkah proses menambahkan FTP ke environment Anda:

  * [Create Environment](<https://docs.dewacloud.com/docs/#create-env>)
  * [Install FTP](<https://docs.dewacloud.com/docs/#install>)
  * [Using FTP](<https://docs.dewacloud.com/docs/#usage>)
  * [Transfer Files](<https://docs.dewacloud.com/docs/#file-transfer>)
  * [Download Log Files](<https://docs.dewacloud.com/docs/#download-logs>)
  * [Synchronize Files](<https://docs.dewacloud.com/docs/#synch-files>)
  * [Edit Configuration Files](<https://docs.dewacloud.com/docs/#edit-configs>)
  * [Deploy Application via FTP](<https://docs.dewacloud.com/docs/#deploy>)
  * [Switching FTPS](<https://docs.dewacloud.com/docs/#ftps>)
  * [Reset FTP Password](<https://docs.dewacloud.com/docs/#reset-password>)
  * [State Custom FTP Password](<https://docs.dewacloud.com/docs/#custom-password>)
  * [Uninstall FTP](<https://docs.dewacloud.com/docs/#uninstall>)

## Create Environment{#create-environment}

1\. Masuk ke dashboard platform.

2\. Klik **Create environment** untuk mengatur environment baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-1.png" alt="create environment" width="40%"/>

3\. Dalam wizard yang terbuka, pilih **application server** (misalnya, _Tomcat_) atau **database** (misalnya, _MySQL_) dan aktifkan **Public IP**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-2.png" alt="environment wizard" width="100%"/>

Tunggu beberapa detik hingga environment Anda dibuat.

## Install FTP{#install-ftp}

1\. Klik tombol **Add-ons** untuk server aplikasi (atau database) Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-3.png" alt="Tomcat add-ons" width="100%"/>

2\. Dalam tab yang terbuka, Anda akan melihat daftar semua aplikasi yang tersedia untuk ditambahkan ke environment Anda. Temukan FTP dan klik **Install**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-4.png" alt="FTP add-on" width="60%"/>

3\. Konfirmasi instalasi dengan mengklik tombol **Install** di jendela yang terbuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-5.png" alt="install FTP add-on" width="80%"/>

4\. Setelah menambahkan FTP ke environment, Anda akan menerima email dengan kredensial untuk mengakses (tautan FTP, Login, Kata Sandi, IP, dll.).

## Using FTP{#using-ftp}

#### Melalui FTP Client{#through-ftp-client}

1\. Instal dan buka **klien FTP** apa pun (misalnya, _FileZilla_).

2\. Masukkan _Host_, _Username_, dan _Password_ Anda menggunakan kredensial FTP yang Anda terima di email setelah instalasi. Lakukan koneksi.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-6.png" alt="FileZilla FTP connect" width="100%"/>

3\. Sekarang Anda dapat melihat daftar folder **config** di klien FTP Anda.

4\. Anda dapat membuat perubahan yang Anda butuhkan (_mengunduh, menyalin, menghapus file, dll._) langsung dari **klien FTP** Anda.

5\. Jika Anda menyegarkan data di tab **config** untuk server Anda (atau database) di dashboard platform, Anda akan melihat semua perubahan yang dilakukan melalui klien FTP.

#### Melalui Browser{#through-browser}

1\. Klik tombol **Add-ons** untuk server aplikasi (atau database) Anda.

2\. Temukan FTP dalam daftar aplikasi. Di sana Anda akan melihat daftar IP yang tersedia.

3\. Klik pada tautan IP. Di tab browser yang terbuka, isi kredensial FTP Anda (_Username_ dan _Password_ yang Anda terima di email setelah instalasi).

4\. Setelah itu, daftar folder **config** akan terbuka. Di sini Anda dapat melihat file dalam semua folder.

## Transfer Files{#transfer-files}

1\. Instal dan buka **klien FTP** apa saja (kami menggunakan _FileZilla_ sebagai contoh).

2\. Masukkan _Host, Username_, dan _Password_ Anda menggunakan kredensial FTP yang Anda terima melalui email setelah instalasi FTP. Lakukan koneksi dengan mengklik **Quickconnect**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-7.png" alt="FileZilla FTP connected" width="100%"/>

3\. Anda dapat mengunggah atau mengunduh file dengan mengklik dua kali pada file tersebut. Untuk mentransfer direktori dan/atau beberapa file, pilih mereka, klik kanan pada pilihan, dan kemudian klik **Upload/Download** di menu popup.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-8.png" alt="FTP upload file" width="100%"/>

4\. Anda dapat dengan mudah menyeret file dari satu direktori dan menjatuhkannya pada direktori lain untuk ditransfer.

5\. Tambahkan file Anda ke antrian jika Anda ingin mentransfernya nanti.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-9.png" alt="FTP add file to queue" width="100%"/>

6\. Satu fitur berguna lainnya adalah perbandingan direktori. Untuk segera melihat perbedaan antara file di mesin lokal dan server, pilih **View > Directory Comparison**, pilih apakah membandingkan ukuran file atau waktu modifikasi, dan klik **Enable**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-10.png" alt="FTP directory comparison" width="100%"/>

## Download Log Files{#download-log-files}

1\. Instal dan buka **klien FTP** apa pun (kami menggunakan _FileZilla_ sebagai contoh).

2\. Masukkan _Host, Username_, dan _Password_ Anda menggunakan kredensial FTP yang Anda terima melalui email setelah instalasi FTP. Lakukan koneksi dengan mengklik **Quickconnect**.

3\. Sekarang Anda dapat dengan mudah mengekspor log Anda: navigasikan ke folder **logs**, pilih file log yang Anda butuhkan, unduh seperti yang ditunjukkan pada tangkapan layar di bawah ini, dan buka di editor yang nyaman untuk ditinjau.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-11.png" alt="FTP download logs" width="100%"/>

## Synchronize Files{#synchronize-files}

1\. Instal dan mulai _GoodSync_. Klik tombol **Browse** di sisi kiri.

2\. Dalam jendela yang terbuka, pilih tab **FTP**, isi kolom yang diperlukan (_Host, Username, Password_) dan klik tombol **Go**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-12.png" alt="GoodSync FTP connect" width="100%"/>

3\. Kemudian pilih folder yang diperlukan di server Anda dan klik **OK**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-13.png" alt="GoodSync choose FTP folder" width="100%"/>

4\. Setelah itu, klik tombol **Browse** di sisi kanan, dan pilih folder lokal yang ingin Anda cadangkan atau sinkronkan data Anda ke.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-14.png" alt="GoodSync choose local folder" width="100%"/>

5\. Kemudian dalam jendela utama klik tombol **Analyze**. Anda akan ditampilkan semua perbedaan dalam folder yang dipilih.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-15.png" alt="GoodSynch analyze differences" width="100%"/>

6\. Klik tombol **Sync** untuk melakukan sinkronisasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-16.png" alt="goodsynch FTP synchronization" width="100%"/>

## Edit Configuration Files{#edit-configuration-files}

1\. Buka editor konfigurasi Anda (kami menggunakan _Sublime Text 2_ sebagai contoh).

2\. Hubungkan ke server Anda (atau database) melalui FTP (jika Anda menggunakan Sublime, klik **File- >FTP/SFTP->Browse server**) dan Anda dapat mulai mengedit file.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-17.png" alt="Sublime file configuration" width="100%"/>

## Deploy Application via FTP{#deploy-application-via-ftp}

:::note 
Kami tidak merekomendasikan untuk me-deploy aplikasi Anda dengan cara ini karena aplikasi yang Anda _deploy_ tidak akan ditampilkan di dashboard platform, jadi jika Anda ingin menerapkan kembali atau menghapus aplikasi Anda, Anda harus melakukannya secara manual. Juga, prosedur deployment seperti ini tidak cocok untuk server aplikasi GlassFish. 
:::

Mari kita pertimbangkan contoh singkat tentang cara me-deploy **Railo** ke environment Anda melalui _FileZilla_.

1\. Instal dan buka **klien FTP** apa pun (kami menggunakan _FileZilla_ sebagai contoh).

2\. Hubungkan ke environment Anda melalui FTP: Masukkan **Host, Username**, dan **Password** Anda, lalu klik pada tombol **Quickconnect**.

3\. Salin file aplikasi Anda ke folder **ROOT** (atau buat konteks lain untuk aplikasi Anda dan salin file Anda di dalamnya).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-18.png" alt="deploy application via FTP" width="100%"/>

4\. Sekarang Anda dapat kembali ke dashboard platform dan memastikan semuanya baik-baik saja. Untuk itu, klik tombol **Open in Browser** untuk environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-19.png" alt="open in browser" width="100%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-20.png" alt="Railo application" width="80%"/>

## Switching FTPS{#switching-ftps}

1\. Arahkan ke **FTP client > File > Site manager** (sebagai contoh, kami menggunakan _FileZilla_).

2\. Buat **New Site** dan isi data yang diperlukan:

  * **Host** (gunakan kredensial FTP Anda)
  * **Protocol** (FTP - File Transfer Protocol)
  * **Encryption** (Memerlukan FTP eksplisit melalui TLS)
  * **Logon Type** (Interaktif)
  * **User** (gunakan kredensial FTP Anda)

3\. Klik **Connect**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-21.png" alt="FileZilla FTPS connection" width="60%"/>

4\. Masukkan password.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-22.png" alt="password for FTPS connection" width="60%"/>

5\. Sekarang Anda terhubung melalui FTPS.

## Reset FTP Password{#reset-ftp-password}

1\. Klik tombol **Add-ons** untuk server aplikasi (atau database) Anda.

2\. Temukan FTP dalam daftar aplikasi dan klik tombol **Reset Password**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-23.png" alt="FTP add-on reset password" width="60%"/>

3\. Anda akan dikirim email dengan password FTP baru.

## State Custom FTP Password{#state-custom-ftp-password}

Anda dapat mengubah password dari FTP-addon, yang diinstal pada environment Anda. Menggunakan password kustom, bukan yang secara otomatis dihasilkan dan dikirimkan via email saat instalasi atau pengaturan ulang password FTP-addon, sangat meningkatkan keamanan aplikasi Anda.

Password FTP Anda dapat diubah melalui SSH dengan mengikuti langkah-langkah berikut:

1\. [Generate](<https://docs.dewacloud.com/docs/ssh-generate-key/>) kunci SSH dan [tambahkan](<https://docs.dewacloud.com/docs/ssh-add-key/>) ke dashboard Anda.

2\. [Akses](<https://docs.dewacloud.com/docs/ssh-access/>) container yang diperlukan dengan FTP-addon yang diinstal melalui SSH.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-24.png" alt="SSH access to container" width="100%"/>

3\. Jalankan perintah berikut di dalam container:

```    
sudo /usr/bin/passwd jelastic-ftp   
```

4\. Masukkan dan konfirmasi password baru Anda.

:::note 
Setelah memasukkan password baru Anda, Anda dapat melihat beberapa pesan peringatan, misalnya.BAD PASSWORD: it is based on a dictionary wordatauBAD PASSWORD: is too simple.Ini hanya rekomendasi untuk meningkatkan keandalan password Anda, abaikan jika menurut Anda password kustom Anda sudah cukup aman. Password akan diubah bagaimanapun. 
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-25.png" alt="change FTP password" width="100%"/>

Sekarang Anda dapat menggunakan password baru untuk mengakses environment Anda melalui protokol FTP.

## Uninstall FTP{#uninstall-ftp}

1\. Klik tombol **Add-ons** untuk server aplikasi (atau database) Anda.

2\. Temukan FTP dalam daftar aplikasi dan klik **Uninstall**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ftp-ftps-support/ftp-support-26.png" alt="uninstall FTP add-on" width="60%"/>

:::warning 
Jika Anda menginstal FTP di environment dengan satu server aplikasi (misalnya, Tomcat), penskalaan horizontal dari environment ini akan menggandakan server ini bersama dengan FTP. Dengan cara ini FTP akan diinstal di kedua instance dengan kredensial yang sama. Namun, ini tidak berlaku untuk server GlassFish. Jika FTP telah diinstal di environment dengan satu GlassFish, itu tidak akan digandakan ke server GlassFish yang baru ditambahkan. Jadi untuk memiliki FTP yang diinstal pada kedua instance, pertama-tama Anda perlu menonaktifkan FTP dan kemudian menginstalnya kembali satu kali lagi. Dengan cara ini akan diaktifkan di kedua server. 
:::

## Baca Juga{#whats-next}

  * [Secure Sockets Layer](<https://docs.dewacloud.com/docs/secure-sockets-layer/>)
  * [Remote Access via WebDAV](<https://docs.dewacloud.com/docs/remote-access-via-webdav/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)