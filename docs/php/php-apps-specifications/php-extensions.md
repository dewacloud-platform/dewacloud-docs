---
sidebar_position: 1
slug: /php-extensions
title: PHP Extensions
---
# PHP Extensions

Di platform, server aplikasi PHP disediakan dengan sejumlah modul bawaan, yang memungkinkan Anda untuk **mengatur berbagai ekstensi PHP** pada _httpd_ (Apache-PHP) dan _PHP-FPM_ (NGINX-PHP) daemon. Di antara ekstensi ini, berikut adalah beberapa yang umum diperlukan dan _**terpasang**_, yaitu dimuat dan dijalankan dengan PHP secara default:

_ctype  
date  
dom  
ereg  
filter_|  _hash  
libxml  
mhash  
pcre  
Reflection_|  _session  
SLPxml  
sockets  
_  
---|---|---  
  
Sisanya dari ekstensi yang disediakan bersifat _**dinamis**_, yaitu mereka termasuk dalam build server yang sesuai (disimpan dalam folder _modules_ server khusus) dan dapat diaktifkan sesuai kebutuhan:

_apc.so  
apcu.so  
bcmath.so  
bz2.so  
calendar.so  
curl.so  
dba.so  
dom.so  
enchant.so  
event.so  
exif.so  
fileinfo.so  
ftp.so  
gd.so  
gearman.so  
geoip.so  
gettext.so  
gmp.so  
http.so  
iconv.so  
igbinary.so  
imagick.so  
imap.so_ | _inotify.so  
intl.so  
json.so  
ldap.so  
mbstring.so  
mcrypt.so  
memcache.so  
memcached_2_1_0.so  
memcached_2_2_0.so  
mongo.so  
mongodb.so  
mysql.so  
mysqli.so  
mysqlnd_ms.so  
mysqlnd_qc.so  
mysqlnd.so  
ncurses.so  
oauth.so  
odbc.so  
opcache.so  
openssl.so  
pcntl.so  
pdo_dblib.so  
_| _pdo_firebird.so  
pdo_mysql.so  
pdo_oci.so  
pdo_odbc.so  
pdo_pgsql.so  
pdo_sqlite.so  
pdo.so  
pgsql.so  
phar.so  
posix.so  
propro.so  
pspell.so  
raphf.so  
rar.so  
readline.so  
recode.so  
redis.so  
shmop.so  
simplexml.so  
snmp.so  
soap.so  
solr.so  
solr2.so  
_| _sphinx.so  
sqlite3.so  
svn.so  
sysvmsg.so  
sysvsem.so  
sysvshm.so  
tidy.so  
timezonedb.so  
tokenizer.so  
uuid.so  
wddx.so  
xcache.so  
xdebug.so  
xmlreader.so  
xmlrpc.so  
xmlwriter.so  
xsl.so  
yaml.so  
ZendGuardLoader.so  
zip.so  
zlib.so_  
---|---|---|---  
  
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

3\. Sekarang, temukan bagian yang diperlukan (mereka terdaftar dalam urutan alfabet) dan hapus komentar pada direktif _**extension={module_name}.so**_ di dalam (yaitu hapus titik koma di awal baris yang sesuai) untuk mengaktifkannya:

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