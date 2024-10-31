---
sidebar_position: 2
slug: /apache-security-configurations
title: Apache Security Configurations
---
# Apache Security Configurations

Dalam tutorial ini, kami akan menunjukkan cara menyiapkan konfigurasi keamanan tambahan untuk aplikasi PHP Anda yang dihosting dengan server aplikasi Apache.

Ada dua cara untuk menyiapkan konfigurasi keamanan utama Anda:

  * melakukan perubahan dalam file konfigurasi utama Apache (_**httpd.conf**_)
  * membuat file khusus _**.htaccess**_ yang berisi satu atau lebih direktif konfigurasi dan ditempatkan di dalam direktori aplikasi Anda

Direktif ini dapat menggantikan sebagian dari konfigurasi global server untuk direktori tersebut dan semua subdirektori di dalamnya. Apa yang dapat Anda masukkan dalam file ini ditentukan oleh direktif AllowOverride.

**AllowOverride** hanya valid di bagian < directory > yang ditentukan tanpa regular expressions. Ketika direktif ini diatur ke None - file _.htaccess_ sepenuhnya diabaikan. Ketika direktif ini diatur ke All, maka setiap direktif yang memiliki konteks _.htaccess_ diizinkan dalam file _.htaccess_.

Mari kita periksa setiap jenis konfigurasi keamanan yang dapat Anda terapkan untuk melindungi aplikasi Anda:

  * [Authentication](<https://docs.dewacloud.com/docs/#setting-up-the-authentication-request>)
  * [Setting up the access criteria](<https://docs.dewacloud.com/docs/#security-through-setting-up-criteria>)
  * [Configuring mod_security module](<https://docs.dewacloud.com/docs/#configuring-mod_security-module>)
  * [Server version hiding](<https://docs.dewacloud.com/docs/#hide-apache-server-version>)

## Setting Up the Authentication Request{#setting-up-the-authentication-request}

Untuk mengatur autentikasi untuk **aplikasi** Apache Anda atau hanya untuk memisahkan sebuah **directory** dalam aplikasi Anda, ikuti langkah-langkah berikut.

1\. Hasilkan hash dari kata sandi Anda. Untuk itu Anda dapat menggunakan alat **htpasswd** apa pun atau layanan online (misalnya, `https://www.web2generators.com/apache-tools/htpasswd-generator/`).

2\. Buat file teks sederhana dengan hash yang dihasilkan sebelumnya.

3\. Klik tombol **Config** untuk server Anda.

4\. Unggah file yang dibuat ke folder **/var/www/webroot/ROOT**.

5\. Dalam folder **/etc/httpd/conf** buka file _**httpd.conf**_ (atau file _**.htaccess**_, jika Anda menggunakannya) dan lakukan konfigurasi berikut:

  * **autentikasi untuk seluruh aplikasi** \- tambahkan string berikut ke bagian **Directory** seperti yang ditunjukkan pada gambar di bawah ini:

    ```
    AuthName "Restricted area"
    AuthType Basic
    AuthBasicProvider file
    AuthUserFile /var/www/webroot/ROOT/.htpasswd
    Require valid-user
    ```

    <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/01-apache-authentication.png" alt="Apache authentication" max-width="100%"/>

  * **autentikasi untuk direktori terpisah** \- tambahkan string **Location** berikut yang menunjukkan jalur ke direktori yang diperlukan:

    ```
    <Location /directory_path>
    AuthName "Restricted area"
    AuthType Basic
    AuthBasicProvider file
    AuthUserFile /var/www/webroot/ROOT/.htpasswd
    Require valid-user
    </Location>
    ```

    <img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/02-apache-directory-authentication.png" alt="Apache directory authentication" max-width="100%"/>

6\. Simpan perubahan dan **Restart** server Apache.

:::note 
Jika Anda menggunakan file httpd.conf untuk mengatur konfigurasi keamanan Anda, Anda perlu merestart Apache setelah melakukan setiap perubahan pada konfigurasi. Dalam hal penggunaan file .htaccess, perubahan yang dilakukan dalam file ini akan langsung berlaku, karena file ini dibaca pada setiap permintaan.
:::

Akibatnya, saat mengakses aplikasi atau direktori yang dilindungi, pengguna akan diminta untuk melakukan autentikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/03-authentication-required.png" alt="authentication required" width="50%"/>

## Security Through Setting Up Criteria{#security-through-setting-up-criteria}

Anda dapat menyediakan keamanan untuk aplikasi Anda dengan menetapkan kontrol akses ke bagian-bagian tertentu dari server Anda berdasarkan kriteria spesifik (misalnya: nama host klien atau alamat IP).

Konfigurasi yang diperlukan dapat diterapkan dengan bantuan direktif _**[Require](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require)**_. Dan untuk mengatur kebijakan akses yang lebih kompleks, itu dapat digunakan bersama dengan:

  * _**[RequireAll](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requireall)**_ \- satu set direktif otorisasi, di mana tidak ada yang boleh gagal dan setidaknya satu harus berhasil
  * _**[RequireAny](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requireany)**_ \- satu set direktif otorisasi, di mana setidaknya satu harus berhasil
  * _**[RequireNone](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#requirenone)**_ \- satu set direktif otorisasi, di mana tidak ada yang boleh berhasil

Arahkan ke folder **/etc/httpd/conf** dan buka file _**httpd.conf**_ (atau _**.htaccess**_ secara langsung di direktori target).

1\. Untuk menetapkan kriteria akses berdasarkan IP, cukup tambahkan direktif yang diperlukan ke bagian [_Directory](https://httpd.apache.org/docs/2.4/mod/core.html#directory)_.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/04-apache-security-by-criteria.png" alt="Apache security by criteria" max-width="100%"/>

2\. Sebagai contoh yang lebih kompleks, Anda dapat mengkonfigurasi kebijakan akses dari beberapa kondisi (misalnya melalui direktif _RequireAll_) dan untuk folder server tertentu (cukup ubah bagian yang digarisbawahi dalam gambar di bawah).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/05-apache-security-with-require-directive.png" alt="Apache security using require directive" max-width="100%"/>

3\. Jangan lupa untuk **Save** perubahan dan **Restart** server Apache Anda untuk menerapkan perubahan.

:::note 
Menolak akses melalui IP hanya masuk akal jika Anda menggunakan fitur Public IP.
:::

## Configuring mod_security Module{#configuring-mod_security-module}

**[mod_security](http://www.modsecurity.org/)** adalah modul Apache yang sangat berguna yang menyediakan kemampuan seperti penyaringan sederhana, validasi URL dan encoding Unicode, audit, pencegahan serangan null byte, batas memori unggah, penyamaran identitas server, dukungan chroot built-in dan banyak lagi.

Modul ini tersedia di platform secara default dan dapat dikonfigurasi melalui file _**/etc/httpd/conf.d/mod_security.conf**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/06-modsecurity.png" alt="modsecurity" max-width="100%"/>

Di sini Anda dapat mengedit konfigurasi default atau menambahkan konfigurasi kustom Anda sendiri.

Misalnya, Anda dapat menambahkan beberapa **ModSecurity Rules** tambahan dengan mengunggahnya ke folder **/etc/httpd/modsecurity.d** (misalnya, ~**modsecurity_crs_11_brute_force.conf**~).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/apache-php/apache-security-configurations/07-modsecurity-rules.png" alt="modsecurity rules" max-width="100%"/>

Aturan yang diunggah ke folder **modsecurity.d** atau **activated_rules** akan otomatis diaktifkan tanpa pengaturan tambahan. Ini dikonfigurasi dengan parameter default berikut di file _**/etc/httpd/conf.d/mod_security.conf**_:

```
Include modsecurity.d/*.conf
Include modsecurity.d/activated_rules/*.conf
```

## Hide Apache Server Version{#hide-apache-server-version}

Biasanya dengan konfigurasi default, versi server Apache ditampilkan secara publik. Akibatnya, informasi tentang versi Apache dan sistem operasi/versi Anda, atau bahkan detail tentang modul Apache yang terinstal dapat digunakan untuk melakukan serangan.

Untuk menghindari hal ini, platform secara otomatis menambahkan konfigurasi berikut ke file _**httpd.conf**_ Anda:

  * _**ServerSignature Off**_ \- menampilkan halaman 404 alih-alih daftar direktori dan halaman lain yang dihasilkan oleh Apache
  * _**ServerTokens Prod**_ \- menentukan header respons HTTP Apache Server; dengan nilai _Prod_ header respons HTTP akan mengikuti - _Server: Apache_

## Baca Juga{#whats-next}

  * [Apache PHP](<https://docs.dewacloud.com/docs/apache-php/>)
  * [PHP Application Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [Apache Modules](<https://docs.dewacloud.com/docs/apache-nginx-modules/>)
  * [NGINX-Balancer Security](<https://docs.dewacloud.com/docs/nginx-balancer-security/>)