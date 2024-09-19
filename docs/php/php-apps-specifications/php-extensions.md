---
sidebar_position: 1
slug: /php-extensions
title: PHP Extensions
---
# PHP Extensions

Di platform, server aplikasi PHP disediakan dengan sejumlah modul bawaan, yang memungkinkan Anda untuk **mengatur berbagai ekstensi PHP** pada _httpd_ (Apache-PHP) dan _PHP-FPM_ (NGINX-PHP) daemon. Di antara ekstensi ini, berikut adalah beberapa yang umum diperlukan dan _**terpasang**_, yaitu dimuat dan dijalankan dengan PHP secara default:

<table>
  <tr>
    <td>ctype</td>
    <td>date</td>
    <td>dom</td>
  </tr>
  <tr>
    <td>ereg</td>
    <td>filter</td>
    <td>hash</td>
  </tr>
  <tr>
    <td>libxml</td>
    <td>mhash</td>
    <td>pcre</td>
  </tr>
  <tr>
    <td>Reflection</td>
    <td>session</td>
    <td>SLPxml</td>
  </tr>
  <tr>
    <td>sockets</td>
    <td></td>
    <td></td>
  </tr>
</table>
  
Sisanya dari ekstensi yang disediakan bersifat _**dinamis**_, yaitu mereka termasuk dalam build server yang sesuai (disimpan dalam folder _modules_ server khusus) dan dapat diaktifkan sesuai kebutuhan:

<table>
  <tr>
    <td>apc.so</td>
    <td>apcu.so</td>
    <td>bcmath.so</td>
  </tr>
  <tr>
    <td>bz2.so</td>
    <td>calendar.so</td>
    <td>curl.so</td>
  </tr>
  <tr>
    <td>dba.so</td>
    <td>dom.so</td>
    <td>enchant.so</td>
  </tr>
  <tr>
    <td>event.so</td>
    <td>exif.so</td>
    <td>fileinfo.so</td>
  </tr>
  <tr>
    <td>ftp.so</td>
    <td>gd.so</td>
    <td>gearman.so</td>
  </tr>
  <tr>
    <td>geoip.so</td>
    <td>gettext.so</td>
    <td>gmp.so</td>
  </tr>
  <tr>
    <td>http.so</td>
    <td>iconv.so</td>
    <td>igbinary.so</td>
  </tr>
  <tr>
    <td>imagick.so</td>
    <td>imap.so</td>
    <td>inotify.so</td>
  </tr>
  <tr>
    <td>intl.so</td>
    <td>json.so</td>
    <td>ldap.so</td>
  </tr>
  <tr>
    <td>mbstring.so</td>
    <td>mcrypt.so</td>
    <td>memcache.so</td>
  </tr>
  <tr>
    <td>memcached_2_1_0.so</td>
    <td>memcached_2_2_0.so</td>
    <td>mongo.so</td>
  </tr>
  <tr>
    <td>mongodb.so</td>
    <td>mysql.so</td>
    <td>mysqli.so</td>
  </tr>
  <tr>
    <td>mysqlnd_ms.so</td>
    <td>mysqlnd_qc.so</td>
    <td>mysqlnd.so</td>
  </tr>
  <tr>
    <td>ncurses.so</td>
    <td>oauth.so</td>
    <td>odbc.so</td>
  </tr>
  <tr>
    <td>opcache.so</td>
    <td>openssl.so</td>
    <td>pcntl.so</td>
  </tr>
  <tr>
    <td>pdo_dblib.so</td>
    <td>pdo_firebird.so</td>
    <td>pdo_mysql.so</td>
  </tr>
  <tr>
    <td>pdo_oci.so</td>
    <td>pdo_odbc.so</td>
    <td>pdo_pgsql.so</td>
  </tr>
  <tr>
    <td>pdo_sqlite.so</td>
    <td>pdo.so</td>
    <td>pgsql.so</td>
  </tr>
  <tr>
    <td>phar.so</td>
    <td>posix.so</td>
    <td>propro.so</td>
  </tr>
  <tr>
    <td>pspell.so</td>
    <td>raphf.so</td>
    <td>rar.so</td>
  </tr>
  <tr>
    <td>readline.so</td>
    <td>recode.so</td>
    <td>redis.so</td>
  </tr>
  <tr>
    <td>shmop.so</td>
    <td>simplexml.so</td>
    <td>snmp.so</td>
  </tr>
  <tr>
    <td>soap.so</td>
    <td>solr.so</td>
    <td>solr2.so</td>
  </tr>
  <tr>
    <td>sphinx.so</td>
    <td>sqlite3.so</td>
    <td>svn.so</td>
  </tr>
  <tr>
    <td>sysvmsg.so</td>
    <td>sysvsem.so</td>
    <td>sysvshm.so</td>
  </tr>
  <tr>
    <td>tidy.so</td>
    <td>timezonedb.so</td>
    <td>tokenizer.so</td>
  </tr>
  <tr>
    <td>uuid.so</td>
    <td>wddx.so</td>
    <td>xcache.so</td>
  </tr>
  <tr>
    <td>xdebug.so</td>
    <td>xmlreader.so</td>
    <td>xmlrpc.so</td>
  </tr>
  <tr>
    <td>xmlwriter.so</td>
    <td>xsl.so</td>
    <td>yaml.so</td>
  </tr>
  <tr>
    <td>ZendGuardLoader.so</td>
    <td>zip.so</td>
    <td>zlib.so</td>
  </tr>
</table>
  
Di bawah ini, Anda dapat menemukan cara:

  * [mengaktifkan ekstensi](<https://docs.dewacloud.com/docs/#activate-extension>)
  * [mengkonfigurasi ekstensi](<https://docs.dewacloud.com/docs/#configure-extension>)
  * [menambahkan ekstensi kustom Anda](<https://docs.dewacloud.com/docs/#add-custom-extension>)

## Activate Extension{#activate-extension}

Agar ekstensi dinamis tersedia untuk modul PHP yang digunakan (yaitu mesin), ekstensi tersebut harus diaktifkan dalam file konfigurasi yang sesuai.

**Catatan:** Ekstensi bawaan __tidak boleh__ dimuat secara manual, karena mereka selalu berjalan di semua server PHP di platform secara default.

Di bawah ini, Anda dapat mengetahui bagaimana hal ini dapat dilakukan:

1\. Klik tombol **Config** untuk server aplikasi Anda.

![php extensions config](#)

2\. Di dalam tab konfigurasi yang terbuka, pindahkan ke file **etc > _php.ini_** dan gulir ke bawah ke bagian _**Extensions provided by PaaS**_. Di sini, setiap ekstensi dinamis memiliki subbagian sendiri, di mana ekstensi dapat diaktifkan dan dikonfigurasi.

![php extensions phpini](#)

3\. Sekarang, temukan bagian yang diperlukan (mereka terdaftar dalam urutan alfabet) dan hapus komentar pada direktif _**extension=\{module_name\}.so**_ di dalam (yaitu hapus titik koma di awal baris yang sesuai) untuk mengaktifkannya:

![php extensions soapso](#)

Juga, di sini Anda dapat menyesuaikan ekstensi dengan menggunakan parameter konfigurasi yang tertera (atau menentukan parameter yang Anda butuhkan sendiri).

4\. Setelah semua perubahan yang diperlukan dibuat, jangan lupa untuk **Save** dan **Restart** node untuk menerapkan konfigurasi baru.

![php extensions restart](#)

## Configure Extension{#configure-extension}

Semua pengaturan modul PHP yang diperlukan harus ditangani melalui file _**php.ini**_. Di sini, sebagian besar ekstensi dinamis yang disediakan disebutkan dengan rangkaian parameter konfigurasi yang mungkin.

Sebagai contoh, mari kita pertimbangkan seperti untuk ekstensi dinamis _OPcache_ - [PHP accelerator](<https://docs.dewacloud.com/docs/php-accelerators/>), berdasarkan caching dan optimasi opcode:

  * _**opcache.enable=1**_ \- mengaktifkan/menonaktifkan ekstensi OPcache
  * _**opcache.memory_consumption=64**_ \- menetapkan jumlah memori yang akan digunakan
  * _**opcache.interned_strings_buffer=8**_ \- menetapkan jumlah memori yang akan digunakan untuk menyimpan string internal (misalnya, nama kelas)
  * _**opcache.max_accelerated_files=4000**_ \- jumlah maksimum file yang akan dikemas
  * _**opcache.revalidate_freq=60**_ \- frekuensi memeriksa tanda waktu file untuk perubahan alokasi memori bersama
  * _**opcache.fast_shutdown=1**_ \- mengaktifkan/menonaktifkan urutan penutupan cepat untuk kode yang dipercepat
  * _**opcache.enable_cli=1**_ \- mengaktifkan/menonaktifkan OPcache untuk versi CLI dari PHP

## Add Custom Extension{#add-custom-extension}

Selain semua modul yang tersedia di platform dengan bawaan, Anda juga memiliki kemungkinan untuk mengintegrasikan ekstensi PHP Anda sendiri ke server jika diperlukan. Untuk itu, ikuti instruksi di bawah ini:

1\. Kompilasi ekstensi itu sendiri.

2\. Navigasikan ke dashboard platform dan klik tombol **Config** untuk server aplikasi PHP Anda.

![php extensions config](#)

3\. Sekarang, menggunakan pengelola yang terbuka, unggah ekstensi kustom Anda ke folder **modules**.

![php extensions upload](#)

4\. Pindahkan ke file **etc > _php.ini_**, temukan bagian _**Dynamic Extensions**_ dan tambahkan direktif perintah berikut:

```
extension={module_name}.so
```

![php extensions custom module](#)

:::tip 
Anda dapat menentukan semua pengaturan yang diperlukan untuk ekstensi Anda di bagian yang sama, jika diperlukan.
:::

5\. **Simpan** perubahan dan **Restart** node.

![php extensions restart](#)

Itu saja! Sekarang ekstensi kustom Anda diaktifkan.

## Baca Juga{#whats-next}

  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)
  * [PHP Auto Configurations](<https://docs.dewacloud.com/docs/php-auto-configuration/>)
  * [PHP App Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [Apache & NGINX Modules](<https://docs.dewacloud.com/docs/apache-nginx-modules/>)