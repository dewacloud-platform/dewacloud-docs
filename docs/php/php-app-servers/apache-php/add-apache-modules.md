---
sidebar_position: 4
slug: /add-apache-modules
title: Add Apache Modules
---
# Adding Custom Apache Modules

Untuk memenuhi semua persyaratan aplikasi Anda, Anda mungkin perlu menambahkan beberapa **modul Apache kustom**. Beberapa di antaranya tidak terdaftar di antara [modul Apache](<https://docs.dewacloud.com/docs/apache-nginx-modules/>) yang terpasang di platform secara default. Anda dapat mengaktifkan modul Apache Anda sendiri dalam environment dengan mengikuti instruksi di bawah ini:

## Create the environment{#create-the-environment}

1\. Masuk ke akun PaaS.

2\. Klik pada **Create environment** di pojok kiri atas dashboard.

3\. Dalam wizard yang terbuka, navigasi ke tab **PHP**, pilih server aplikasi **Apache** dan tentukan jumlah sumber daya yang dibutuhkan aplikasi Anda. Setelah itu, masukkan nama untuk environment Anda (misalnya, _apachemodules_) dan klik tombol **Create**.

![create php environment](#)

4\. Dalam beberapa detik, environment Anda akan muncul di dashboard platform.

![environment created](#)

## Build your Apache module{#build-your-apache-module}

1\. [Unduh](<http://archive.apache.org/dist/httpd/>) Apache **httpd** dari **apxs** dengan versi yang sama dengan server Apache Anda. Dalam kasus kami, kami memiliki Apache 2.2.15, jadi kami akan mengunduh dan menginstal [httpd 2.2.15](<http://archive.apache.org/dist/httpd/httpd-2.2.15.tar.gz>).

2\. [Unduh](<http://archive.apache.org/dist/httpd/httpd-2.2.15.tar.gz>) sumber dari modul **yang diperlukan** dalam daftar modul Apache. Sebagai contoh, kami akan menggunakan modul _mod_pony_ Apache yang lucu.

3\. Kompilasi modul Apache Anda.

Berikut adalah cara kami mengompilasi modul **mod_pony** kami:

```
apxs -i -a -c mod_pony.c /usr/lib64/apr-1/build/libtool --silent --mode=compile gcc -prefer-pic -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -Wformat-security -fno-strict-aliasing -DLINUX=2 -D_REENTRANT -D_GNU_SOURCE -pthread -I/usr/include/httpd -I/usr/include/apr-1 -I/usr/include/apr-1 -c -o mod_pony.lo mod_pony.c && touch mod_pony.slo /usr/lib64/apr-1/build/libtool --silent --mode=link gcc -o mod_pony.la -rpath /usr/lib64/httpd/modules -module -avoid-version mod_pony.lo /usr/lib64/httpd/build/instdso.sh SH_LIBTOOL='/usr/lib64/apr-1/build/libtool' mod_pony.la /usr/lib64/httpd/modules /usr/lib64/apr-1/build/libtool --mode=install cp mod_pony.la /usr/lib64/httpd/modules/ libtool: install: cp .libs/mod_pony.so /usr/lib64/httpd/modules/mod_pony.so libtool: install: cp .libs/mod_pony.lai /usr/lib64/httpd/modules/mod_pony.la libtool: install: cp .libs/mod_pony.a /usr/lib64/httpd/modules/mod_pony.a libtool: install: chmod 644 /usr/lib64/httpd/modules/mod_pony.a libtool: install: ranlib /usr/lib64/httpd/modules/mod_pony.a libtool: finish: PATH="/usr/local/sbin:/bin:/sbin:/usr/bin:/usr/sbin:/sbin" ldconfig -n /usr/lib64/httpd/modules
```

4\. Sebagai hasilnya, Anda akan mendapatkan file **.so** dari modul Apache Anda. Kami memiliki file [mod_pony.so](<mod_pony.so>) (_/usr/lib64/httpd/modules/mod_pony.so_).

## Upload and configure your module{#upload-and-configure-your-module}

1\. Navigasi ke environment Anda dan klik **Config** untuk server Apache Anda.

![environment node config](#)

2\. Unggah file _**mod_pony.so**_ ke folder **/usr/lib64/php/modules**.

![upload module](#)

3\. Pergi ke folder **/etc/httpd/conf** dan edit file _**httpd.conf**_ dengan menambahkan string LoadModule dalam format berikut:

`LoadModule {module-name}_module /usr/lib64/php/modules/{file-name}.so`

Contoh: `LoadModule pony_module /usr/lib64/php/modules/mod_pony.so`

**Simpan** perubahan.

![httpd load module](#)

4\. Ubah pengaturan yang diperlukan untuk modul Apache Anda.

Sebagai contoh, untuk konfigurasi lebih lanjut dari modul **mod_pony** kita perlu:

  * untuk melakukan navigasi ke folder **webroot > ROOT** dan membuat file **.htaccess**;
  * untuk menambahkan string berikut ke dalam file **.htaccess**:  
```html
<Files pony>  
SetHandler pony  
</Files>
```

**Simpan** perubahan.

![apache module settings](#)

5\. Setelah semua perubahan konfigurasi **Restart node** dari server Apache Anda untuk mengaktifkan modul Apache.

## Check the result{#check-the-result}

1\. Untuk memeriksa apakah modul Apache **mod_pony** berfungsi, klik **Open in browser** untuk environment Anda.

![run application](#)

2\. Tambahkan **/pony** ke dalam tautan dan segarkan. Sebagai hasilnya Anda memiliki pony Anda sendiri.

![apache pony module](#)

![apache pony module 2](#)

Itu saja yang diperlukan! Hanya beberapa langkah sederhana dan Anda dapat menikmati menggunakan modul kustom Anda sendiri untuk server Apache.

## Baca Juga{#whats-next}

  * [Apache WebDav Module](<https://docs.dewacloud.com/docs/apache-webdav-module/>)
  * [Apache Statistics Module](<https://docs.dewacloud.com/docs/apache-statistics-module/>)
