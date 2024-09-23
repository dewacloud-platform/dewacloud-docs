---
sidebar_position: 6
slug: /apache-statistics-module
title: Apache Statistics Module
---
# Apache Statistics Module

**Modul statistik** (atau **status**) memberikan antarmuka untuk melihat statistik server Anda.

### Enabling statistics module{#enabling-statistics-module}

Di platform, **modul statistik** dinonaktifkan secara default. Anda dapat mengaktifkan modul ini dengan mengikuti instruksi berikut:

  * Klik tombol **Config** untuk server Apache Anda.
  * _**status_module**_ yang diperlukan di-load secara default, jadi navigasikan ke folder **/etc/httpd/conf** dan buka file _**httpd.conf**_. Tambahkan kode berikut:

```nginx
ExtendedStatus On
<Location /statistics/>
  SetHandler server-status
  ####### Security configuration ####################
  ####### Basic auth config should follow here ######
  ###################################################
</Location>
```

![apache statistics module 1](https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-statistics-module/1.png)

**Note:** Anda dapat menggunakan konteks lain untuk lokasi statistik Anda (dalam kasus kami menggunakan _/statistics/_).

  * Simpan perubahan dan restart **Apache**.
  * Klik **Open in browser**. Tambahkan nama lokasi ke tautan.  
```
http://{env_name}.{hoster_domain}/{location_name}/
```

Di jendela yang terbuka statistik server akan ditampilkan.

### Setting up security configuration{#setting-up-security-configuration}

  * Buat hash dari password Anda. Untuk itu Anda dapat menggunakan alat **htpasswd** atau layanan online (misalnya, `http://www.htpasswdgenerator.net/`).
  * Buat file teks sederhana dengan hash yang telah dibuat sebelumnya.
  * Klik tombol **Config** untuk server Apache Anda.
  * Upload file yang dibuat ke folder **/var/www/webroot/ROOT**.
  * Di dalam folder **/etc/httpd/conf** buka file _**httpd.conf**_.

Gantikan:

```
####### Security configuration ####################
####### Basic auth config should follow here ######
###################################################
```

Dengan menambahkan kode berikut:

```
AuthName "Statistics area"
AuthType Basic
AuthBasicProvider file
AuthUserFile /var/www/webroot/ROOT/.htpasswd
Require valid-user
```

![apache statistics module 2](https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-statistics-module/2.png)

  * Simpan perubahan dan restart **Apache**.
  * Klik **Open in browser**. Tambahkan konteks lokasi ke tautan.  
```
http://{env_name}.{hoster_domain}/{location_name}/
```

Di jendela yang terbuka Anda akan diminta untuk masuk dengan kredensial Anda. Gunakan kredensial yang Anda nyatakan saat membuat hash untuk melihat statistik server.

## Baca Juga

  * [Add Apache Modules](<https://docs.dewacloud.com/docs/add-apache-modules/>)
  * [Apache WebDav Module](<https://docs.dewacloud.com/docs/apache-webdav-module/>)