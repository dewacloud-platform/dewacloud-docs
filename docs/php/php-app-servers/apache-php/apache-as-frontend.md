---
sidebar_position: 8
slug: /apache-as-frontend
title: Apache as Frontend
---
# Apache as Frontend of Tomcat

**Tomcat** adalah server yang andal dan cepat yang mampu beroperasi dengan sejumlah besar data. Itu sebabnya ia dapat bersaing dalam kinerja dengan server web asli. Menempatkan server **Apache** HTTP yang aman, cepat, dan fleksibel di depan Tomcat memberikan fungsionalitas tambahan, misalnya ketersediaan tinggi melalui performa load balancing di antara beberapa server Tomcat, pemrosesan cepat dan pengiriman konten statis, masalah keamanan tambahan yang tersedia dengan Apache, fungsi ekstra melalui modul Apache, dan lain sebagainya.

Dengan cara ini, menempatkan Tomcat di belakang Apache secara luas digunakan untuk meningkatkan kinerja environment dengan beban tinggi.

Dalam tutorial ini, kami akan memeriksa cara menghubungkan server Apache dan Tomcat menggunakan modul _**mod_proxy**_ atau _**mod_rewrite**_. Dengan konfigurasi seperti itu, Apache akan meneruskan permintaan ke server aplikasi Tomcat Anda dan mengirimkan kembali respons ke klien.

Ikuti instruksi berikut untuk mengetahui tiga kasus paling populer dalam menggunakan pengaturan semacam itu.

  * [Rewriting links](<https://docs.dewacloud.com/docs/#rewriting-links>)
  * [Serving static content](<https://docs.dewacloud.com/docs/#static-content-processing>)
  * [Load balancing](<https://docs.dewacloud.com/docs/#load-balancing>)

## Rewriting Links{#rewriting-links}

Mari kita anggap bahwa Anda memiliki setidaknya dua aplikasi Java yang di-hosted pada server aplikasi terpisah dan port berbeda. Sebagai contoh sederhana, kami akan menggunakan dua aplikasi yang menunjukkan alamat IP server.

  * **https://env-tomcat.jelastic.com/app1/**

![first Tomcat application](#)

  * **https://second-tomcat.jelastic.com/app2/**

![second Tomcat application](#)

Dengan modul **mod_rewrite** Apache, Anda dapat membuat kedua aplikasi Anda tersedia pada satu port menggunakan jalur berbeda. Misalnya:

  * _http://env-apache.jelastic.com/application1/_
  * _http://env-apache.jelastic.com/application2/_

Konfigurasi ini akan memberikan kemampuan kepada Anda untuk mengelola, me-restart, dan men-debug setiap aplikasi Anda secara terpisah, tetapi pada saat yang bersamaan, pengguna akhir akan melihatnya sebagai sebuah aplikasi tunggal. Mari kita temukan cara mengatur ini dengan hosting PaaS:

1\. Pada awalnya, Anda harus memiliki setidaknya tiga environment yang dibuat: satu environment Apache frontend dan dua atau lebih environment Tomcat backend dengan aplikasi Java Anda yang di-hosted.

![Tomcat behind Apache topology](#)

2\. Buka pengelola konfigurasi Apache (klik **Config** di sebelahnya).

Di tab yang muncul, buka file **/etc/httpd/conf/_httpd.conf_** dan tentukan konfigurasi berikut untuk bagian file _< VirtualHost >_.

```
<VirtualHost *:80>
  ServerAdmin webmaster@domain.com
  DocumentRoot /var/www/webroot/ROOT
  ServerName website.jelastic.com
  ServerAlias
  RewriteEngine On
  RewriteRule ^/application1/(.*) http://env-tomcat.jelastic.com/app1/ [P]
  ProxyPassReverse /application1/ http://env-tomcat.jelastic.com/app1/
  RewriteRule ^/application2/(.*) http://second-tomcat.jelastic.com/app2/ [P]
  ProxyPassReverse /application2/ http://second-tomcat.jelastic.com/app2/
  RewriteLog "/var/log/httpd/rewrite.log"
  ErrorLog logs/dummy-host.jelastic.com-error_log
  CustomLog logs/dummy-host.jelastic.com-access_log common
</VirtualHost>
```

![Apache httpd.conf](#)

  * _**RewriteEngine On**_ digunakan untuk mengaktifkan kemampuan penulisan ulang
  * _**RewriteRule**_ dan _**ProxyPassReverse**_ menyatakan kondisi dan hasil penulisan ulang untuk kedua aplikasi
  * _**RewriteLog**_ ditambahkan secara opsional untuk menyimpan log penulisan ulang di lokasi yang ditentukan

Jangan lupa untuk **Save** perubahan yang Anda buat dan **Restart** server Apache Anda:

3\. Untuk memeriksa hasilnya, tekan tombol **Open in Browser** di samping environment frontend Apache Anda dan tambahkan jalur yang Anda tentukan dalam baris _RewriteRule_ ke akhir URL. Ini digunakan sebagai kondisi untuk membuka aplikasi yang diperlukan.

Dalam kasus kami, tambahkan:

  * /application1/ ![RewriteRule first application](#)
  * /application2/ ![RewriteRule second application](#)

Seperti yang Anda lihat di atas, masing-masing aplikasi dibuka dengan satu port dan dalam jalur yang berbeda.

Konfigurasi ini juga berguna untuk menyediakan tautan deskriptif untuk aplikasi Anda karena lebih nyaman bagi pengguna Anda untuk mendapatkan informasi tentang konten halaman dari URL itu sendiri.

## Static Content Processing{#static-content-processing}

Mendistribusikan aktivitas antara Tomcat dan Apache akan meningkatkan kecepatan aplikasi Anda. Ini tersedia dengan modul **mod_proxy** Apache:

![static content processing scheme](#)

Seperti yang Anda lihat dalam skema di atas, Tomcat akan melayani aplikasi itu sendiri sementara Apache akan bekerja dengan pengiriman konten statis. Ikuti langkah-langkah berikut untuk membuat aplikasi Anda melayani lebih banyak pengguna secara bersamaan:

1\. Mari kita bayangkan bahwa Anda memiliki dua environment yang terdaftar: yang pertama dengan server Tomcat dan aplikasi Anda yang di-hosted dan yang kedua dengan server Apache yang digunakan untuk melayani konten statis.

![static content topology](#)

2\. Tekan tombol **Config** di sebelah server aplikasi Apache Anda dan navigasikan ke folder **var/www/webroot/ROOT**. Buat folder khusus untuk konten statis Anda (diberi nama, misalnya, _static_) dan unggah file yang diperlukan di sana.

![create static content folder](#)

3\. Kemudian buka file **/etc/httpd/conf/_httpd.conf_**.

Lakukan konfigurasi yang diperlukan dalam blok _< VirtualHost >_ seperti yang dijelaskan di bawah ini:

```
<VirtualHost *:80>
  ServerAdmin webmaster@domain.com
  DocumentRoot /var/www/webroot/ROOT
  ServerName website.jelastic.com
  ServerAlias *
  ProxyPass /static !
  ProxyPass / http://env-tomcat.jelastic.com/app1/
  ProxyPassReverse / http://env-tomcat.jelastic.com/app1/
  ErrorLog logs/dummy-host.jelastic.com-error_log
  CustomLog logs/dummy-host.jelastic.com-access_log common
</VirtualHost>
```

![static content settings](#)

Baris _**ProxyPass /static !**_ berarti kita tidak memproksi permintaan yang dimulai dengan kata kunci /stat.

Semua permintaan lainnya akan diproksi ke server Tomcat dengan aplikasi Anda yang di-hosted dalam jalur yang ditentukan di baris _**ProxyPass**_ dan _**ProxyPassReverse**_.

4\. **Restart** server Apache Anda.

5\. Tekan **Open in Browser** di sebelah environment Apache untuk memeriksa hasilnya. Jika semuanya dilakukan dengan benar, Anda akan melihat bahwa aplikasi Anda diproksi dari Tomcat.

![proxied Tomcat application](#)

6\. Folder konten statis Anda juga tersedia - cukup tentukan jalurnya di URL.

![static content folder](#)

![static content image](#)

Dengan demikian, baik aplikasi Tomcat dan file statis di Apache dapat diakses dalam satu port.

## Load Balancing{#load-balancing}

Anda dapat menambahkan beberapa instance Tomcat untuk membuat environment Anda menangani lebih banyak beban dan mendapatkan beberapa kemampuan failover. Dalam hal ini, server Apache frontend akan berfungsi sebagai pembagi beban antara semua server Tomcat.

![Apache load balancing scheme](#)

Dengan langkah-langkah berikut, Anda dapat mengonfigurasi server Apache Anda untuk penyeimbangan beban dalam aplikasi Java Anda dengan **mod_rewrite module**.

1\. Kami akan menggunakan tiga environment terpisah: dua environment **Tomcat** backend dengan aplikasi Java Anda yang dideploy (perhatikan bahwa menggunakan konteks serupa untuk kedua aplikasi yang dideploy di kedua environment adalah persyaratan wajib) dan satu environment **Apache** frontend.

![load balancing topology](#)

2\. Tekan tombol **Config** di sebelah node Apache Anda dan navigasikan ke folder **/etc/httpd/conf.d** di pengelola konfigurasi yang terbuka. Buat file _server_list_ baru di sana.

3\. Tambahkan host aplikasi Anda yang dideploy ke file yang baru dibuat ini seperti yang ditunjukkan di bawah ini:

_servers {env1_name}.{hoster_domain}|{env2_name}.{hoster_domain}_

![hosts list for load balancing](#)

4\. Kemudian buka file **/etc/httpd/conf/_httpd.conf_** dan tentukan konfigurasi berikut:

```
<VirtualHost *:80>
  ServerAdmin webmaster@domain.com
  DocumentRoot /var/www/webroot/ROOT
  ServerName website.jelastic.com
  ServerAlias *
  RewriteEngine On
  RewriteMap lb rnd:/etc/httpd/conf.d/servers_list
  RewriteRule ^/(.*) http://${lb:servers}/app1/$1 [P,L]
  RewriteLog "/var/log/httpd/rewrite.log"
  ErrorLog logs/dummy-host.jelastic.com-error_log
  CustomLog logs/dummy-host.jelastic.com-access_log common
</VirtualHost>
```

![load balancing settings](#)

  * _**RewriteEngine On**_ digunakan untuk mengaktifkan kemampuan penulisan ulang
  * _**RewriteMap**_ menetapkan jalur ke host yang dinyatakan dalam file _server_list_ yang dibuat sebelumnya.
  * _**RewriteRule**_ menetapkan ketentuan load balancing
  * _**RewriteLog**_ ditambahkan secara opsional untuk menyimpan log penulisan ulang di lokasi yang ditentukan

5\. Tekan tombol **Restart** untuk node Apache Anda.

6\. Klik ikon **Open in Browser** di sebelah aplikasi Apache untuk melihat hasilnya. Salah satu aplikasi Tomcat akan terbuka. Segarkan halaman (mungkin Anda perlu melakukannya beberapa kali) untuk melihat aplikasi kedua terbuka - ini adalah hasil distribusi beban.

![load balancing to first server](#)

![load balancing to second server](#)

Nikmati manfaat dari koneksi Tomcat dan Apache dengan membuat aplikasi Anda lebih berperforma tinggi, fleksibel, dan stabil.

## Baca Juga{#whats-next}

  * [Tomcat Application Server](<https://docs.dewacloud.com/docs/tomcat/>)
  * [Apache Modules](<https://docs.dewacloud.com/docs/apache-nginx-modules/>)