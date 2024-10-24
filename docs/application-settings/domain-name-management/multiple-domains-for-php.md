---
sidebar_position: 5
slug: /multiple-domains-php
title: Multiple Domains for PHP
---
# Running Multiple Domain Names on PHP Server

Menggunakan beberapa domain memungkinkan Anda meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi PHP Anda, serta menghemat biaya tanpa perlu mengatur instance terpisah.

Mari kita lihat cara menjalankan beberapa domain pada server aplikasi PHP untuk membuat aplikasi PHP Anda lebih scalable dan efektif.

1\. Masuk ke akun PaaS.

2\. Klik **Create environment** di sudut kiri atas dashboard.

3\. Di wizard yang terbuka, navigasikan ke tab PHP, pilih server aplikasi, dan tentukan jumlah sumber daya yang diperlukan untuk aplikasi Anda. Setelah itu, masukkan nama untuk lingkungan dan klik tombol **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/01-environment-wizard%20(1).png" alt="environment wizard" width="100%"/>

Dalam beberapa detik, lingkungan Anda akan muncul di dashboard platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/02-php-environment-for-multi-domains.png" alt="PHP environment for multi domains" width="100%"/>

4\. Anda harus memiliki nama domain di DNS yang mengarah ke alamat IP Anda. Jadi, beli nama domain untuk lingkungan Anda. Ini dapat dilakukan dengan dua cara: dengan menambahkan catatan CNAME atau dengan mengatur A Records. Anda bisa membaca lebih lanjut [di sini](https://docs.dewacloud.com/docs/custom-domains/).

5\. Setelah itu, klik tombol **Settings** untuk lingkungan Anda dan ikat domain Anda. Sebagai contoh, kami menggunakan URL berikut: _mydomain.com_ dan _myseconddomain.com_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/03-bind-domain.png" alt="bind domain" width="100%"/>

:::note
Dalam kasus ini, kami memasukkan entri di file hosts kami untuk pengujian lokal, dan ini hanya akan berfungsi dari mesin yang memiliki entri host tersebut.
:::

6\. Sekarang Anda dapat mengunggah paket **zip** dengan aplikasi Anda ke Deployment Manager dan melakukan deploy ke lingkungan yang telah Anda buat sebelumnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/04-upload-first-application.png" alt="upload first application" width="60%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/05-upload-second-application.png" alt="upload second application" width="60%"/>

7\. Setelah aplikasi Anda berhasil dideploy, Anda perlu menentukan konfigurasi virtual host Anda.

  * **untuk Apache**

Klik tombol **Config** di sebelah server Apache dan buka file _httpd.conf_ (di direktori **conf**). Atur parameter _VirtualHost_ untuk dua nama domain secara terpisah dengan menentukan path ke konteks yang dideploy dan nama domainnya:

```apache
Listen 80
<VirtualHost *:80>
    DocumentRoot /var/www/webroot/firstapp
    ServerName mydomain.com
    ...
</VirtualHost>

<VirtualHost *:80>
    DocumentRoot /var/www/webroot/secondapp
    ServerName myseconddomain.com
    ...
</VirtualHost>
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/06-apache-httpd-conf.png" alt="Apache httpd conf" width="100%"/>

  * **untuk NGINX**

Klik tombol **Config** di sebelah server NGINX dan buka file _nginx.conf_ di direktori **conf**.

Tentukan pengaturan Anda di blok _**server**_

  * server_name (domain Anda)
  * ROOT (konteks yang Anda tetapkan saat melakukan deploy)

Catatan bahwa Anda perlu memiliki blok _**server**_ terpisah dengan pengaturannya sendiri untuk setiap domain yang Anda ikat.

```nginx
server {
    listen       80;
    server_name  mydomain.com;

    include /etc/nginx/aliases.conf;
    location / {
        root   /var/www/webroot/firstapp;
        index  index.html index.htm index.php;

        location ~ \.php$ {
            location ~ /\. { deny all; access_log off; log_not_found off; }
            include /etc/nginx/fastcgi_params;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_param SCRIPT_FILENAME /var/www/webroot/firstapp$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_script_name;
            fastcgi_param DOCUMENT_ROOT /var/www/webroot/firstapp;
        }
    }
    index  index.php index.html index.htm;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html { root   html; }

    location ~ /\. { deny all; access_log off; log_not_found off; }
}

server {
    listen       80;
    server_name  myseconddomain.com;

    include /etc/nginx/aliases.conf;
    location / {
        root   /var/www/webroot/secondapp;
        index  index.html index.htm index.php;

        location ~ \.php$ {
            location ~ /\. { deny all; access_log off; log_not_found off; }
            include /etc/nginx/fastcgi_params;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_param SCRIPT_FILENAME /var/www/webroot/secondapp$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_script_name;
            fastcgi_param DOCUMENT_ROOT /var/www/webroot/secondapp;
        }
    }
    index  index.php index.html index.htm;
    error_page   500 502 503 504  /50x.html;
    location = /50x.html { root   html; }

    location ~ /\. { deny all; access_log off; log_not_found off; }
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/07-nginx-conf.png" alt="NGINX nginx conf" width="100%"/>

8\. Jangan lupa untuk **Save** perubahan dan **Restart** server aplikasi agar pengaturan baru diterapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/08-restart-apache.png" alt="restart Apache" width="100%"/>

9\. Sekarang Anda dapat memeriksa hasilnya untuk memastikan semuanya berfungsi dengan baik.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-php/09-php-application-in-browser.gif" alt="PHP application in browser" width="100%"/>

Semoga panduan ini bermanfaat bagi Anda. Nama domain sangat penting bagi identitas online Anda, jadi jangan lupa untuk melindunginya. Dengan PaaS, ini hanya membutuhkan beberapa menit. Selamat mencoba!

## Baca Juga{#whats-next}

  * [PHP Sessions Clustering](https://docs.dewacloud.com/docs/memcached-php-sessions/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)
  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)