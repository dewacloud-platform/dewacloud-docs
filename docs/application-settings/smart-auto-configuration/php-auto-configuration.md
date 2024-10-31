---
sidebar_position: 3
slug: /php-auto-configuration
title: PHP Auto-Configuration
---
# Auto-Configurations for PHP Application Servers

Optimisasi sumber daya dinamis platform melengkapi implementasi dasar yang disediakan oleh server PHP untuk mencapai efisiensi maksimal. Pada dasarnya, setelah mengubah jumlah sumber daya RAM dan CPU yang dialokasikan ([jumlah cloudlets](https://docs.dewacloud.com/docs/cloudlet/)), platform secara otomatis menyesuaikan direktif PHP yang sesuai untuk menyesuaikan kondisi baru. Namun, jika diperlukan, Anda dapat menonaktifkan konfigurasi otomatis dan menyediakan parameter secara manual dalam file konfigurasi server Anda.

## Auto-Configuration Example{#auto-configuration-example}

Mari kita lihat bagaimana parameter diubah berdasarkan sumber daya yang dialokasikan.

1\. Misalnya, kami memiliki environment dengan server aplikasi _Apache PHP_ di dalamnya (**16 cloudlets**).

Nilai konfigurasi modul _**prefork**_ dalam file _**/etc/httpd/conf/httpd.conf**_ adalah sebagai berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/php-auto-configuration/05-apache-php-auto-configuration-16-cloudlets.png" alt="Apache PHP auto-configuration 16 cloudlets" max-width="100%"/>

2\. Sekarang, jika kami menetapkan batas sumber daya baru untuk server Apache PHP (**32 cloudlets**) dan menyegarkan file _**/etc/httpd/conf/httpd.conf**_:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/php-auto-configuration/06-apache-php-auto-configuration-32-cloudlets.png" alt="Apache PHP auto-configuration 32 cloudlets" max-width="100%"/>

Seperti yang Anda lihat, nilai direktif disesuaikan secara otomatis karena perubahan jumlah sumber daya yang tersedia.

Prinsip yang sama diterapkan ke semua server aplikasi PHP lainnya.

## Disable Automatic Optimization{#disable-automatic-optimization}

Untuk menetapkan nilai kustom Anda alih-alih direktif yang dikonfigurasi secara otomatis, Anda perlu menonaktifkan optimisasi otomatis. Jika tidak, perubahan kustom Anda akan dibatalkan selama restart/update container.

:::tip
Anda dapat menggunakan variabel _PHP_MEMORY_LIMIT_ dan _PHP_MAX_EXECUTION_TIME_ untuk mengatur batas memori PHP dan waktu eksekusi maksimum tanpa menonaktifkan optimisasi otomatis.
:::

Saat ini, Anda perlu melakukan tindakan berikut berdasarkan jenis server aplikasi PHP Anda:

  * [Smart Auto-Configuration (LiteSpeed, LLSMP)](#smart-auto-configuration)
  * [Legacy Implementation (Apache PHP, NGINX PHP)](#legacy-implementation)

:::warning
Nilai direktif yang tidak sesuai dapat menyebabkan ketidakstabilan server Anda, jadi **tidak disarankan** untuk menerapkan perubahan manual kecuali Anda benar-benar memahami apa yang Anda lakukan.
:::

### Smart Auto-Configuration{#smart-auto-configuration}

Jika Anda ingin mengubah pengaturan auto-configured secara manual, Anda perlu mengatur variabel _**JELASTIC_AUTOCONFIG**_ [environment variable](https://docs.dewacloud.com/docs/container-variables/) ke _false_ (_disabled_).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/php-auto-configuration/07-php-autoconfig-variable.png" alt="PHP auto-config variable" max-width="100%"/>

### Legacy Implementation{#legacy-implementation}

Hapus baris dengan tanda optimisasi di awal file konfigurasi yang sesuai:

  * **Apache PHP** \- " _# Jelastic autoconfiguration mark_ " di dalam file _**/etc/httpd/conf/httpd.conf**_

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/php-auto-configuration/08-apache-php-autoconfiguration-mark.png" alt="Apache PHP autoconfiguration mark" max-width="100%"/>

  * **NGINX PHP** \- " _; Jelastic autoconfiguration mark_ " di dalam file _**/etc/php-fpm.conf**_

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/php-auto-configuration/09-nginx-php-autoconfiguration-mark.png" alt="NGINX PHP autoconfiguration mark" max-width="100%"/>

Setelah baris yang sesuai dihapus, nilai parameter tidak akan lagi dikonfigurasi otomatis oleh mekanisme optimisasi platform sehingga Anda dapat menetapkan parameter kustom Anda. Jangan lupa untuk **Save** file untuk menerapkan konfigurasi baru.

## Auto Adjustable Settings{#auto-adjustable-settings}

Jenis sistem penanganan dan pengiriman permintaan dasar bervariasi untuk server aplikasi PHP yang berbeda, jadi direktif yang digunakan juga berbeda. Namun, fungsi dari parameter semacam itu bisa serupa. Untuk mempelajari lebih lanjut tentang direktif ini untuk server aplikasi tertentu, navigasikan ke bagian yang sesuai di bawah ini:

### Apache PHP

Penanganan permintaan dinamis di Apache PHP diimplementasikan dengan bantuan Modul Multi-Processing (MPM) _**prefork**_, yang membantu mengungkap potensi penuh server. Direktif MPM tercantum dalam file konfigurasi utama Apache _**/etc/httpd/conf/httpd.conf**_.

![Apache PHP httpd.conf file](#)

Berikut adalah daftar lengkap parameter yang dikonfigurasi oleh platform untuk modul _**[prefork](https://httpd.apache.org/docs/2.4/mod/prefork.html)**_:

  * _**StartServers**_ \- menetapkan jumlah proses server anak yang dibuat saat startup.
  * _**MinSpareServers**_ (_**MaxSpareServers**_) \- menentukan jumlah minimum (maksimum) proses server yang disimpan cadangan.
  * _**ServerLimit**_ \- menetapkan nilai tertinggi yang diizinkan untuk direktif _MaxRequestWorkers_.
  * _**MaxRequestWorkers**_ \- mengonfigurasi batas permintaan simultan yang akan diproses.
  * _**MaxConnectionsPerChild**_ \- menentukan jumlah permintaan yang dapat dilayani oleh satu proses anak.

![Apache PHP prefork module configs](#)

Berdasarkan sumber daya yang dialokasikan (yaitu jumlah [cloudlets](https://docs.dewacloud.com/docs/cloudlet/) dinamis yang dipesan untuk server Apache PHP) dan kapasitas CPU yang disediakan oleh penyedia hosting Anda, platform secara otomatis menyesuaikan parameter _**ServerLimit**_ dan _**MaxRequestWorkers**_:

```plaintext
MaxRequestWorkers = ServerLimit = min( {containerRam} / 30MiB, {coresCount} * 5 )
```

Dengan pernyataan ini, kedua direktif dinyatakan sama dengan nilai terendah antara:

  * jumlah RAM yang dialokasikan untuk node, dibagi dengan 30
  * jumlah core dari server fisik yang ditempati oleh container, dikalikan 5

Dengan cara ini, parameter secara dinamis berubah berdasarkan jumlah cloudlets yang dialokasikan tetapi tidak akan melebihi batas perangkat keras.

:::warning
Jika Anda ingin menetapkan nilai kustom untuk direktif ini, harap diperhatikan bahwa nilai yang tidak benar dapat menyebabkan ketidakstabilan server Apache PHP Anda:
  * Jika _ServerLimit_ terlalu tinggi, memori bersama yang tidak terpakai akan dialokasikan; sementara menetapkan parameter terlalu rendah tidak akan mengungkapkan potensi kinerja server secara penuh.
  * _MaxRequestWorkers_ harus cukup besar untuk menangani sebanyak mungkin permintaan simultan yang diharapkan dan cukup kecil untuk memastikan bahwa RAM cukup tersedia.
:::

### NGINX PHP

Penanganan permintaan di server aplikasi NGINX PHP dikelola oleh _FastCGI Process Manager_ (FPM), yang dapat dikonfigurasi melalui file _**/etc/[php-fpm.conf](http://php.net/manual/en/install.fpm.configuration.php)**_. File ini secara otomatis ditambahkan ke daftar _favorites_ di [container file manager](https://docs.dewacloud.com/docs/configuration-file-manager/) untuk akses cepat:

![NGINX PHP php-fpm.conf file](#)

FPM beroperasi dalam mode _**ondemand**_ (direktif _**pm**_) secara default. Ini memunculkan proses baru saat dibutuhkan (yaitu sesuai permintaan) dan menghapus proses yang tidak aktif. Parameter tambahan untuk mode ini adalah:

  * _**pm.max_children**_ \- mendefinisikan jumlah maksimum proses anak (sama dengan jumlah core CPU yang tersedia untuk container, tetapi tidak kurang dari 2)

:::tip
Nilai tepatnya bergantung pada kapasitas CPU yang disediakan oleh penyedia hosting Anda dan jumlah cloudlets yang dialokasikan untuk container Anda. Dengan cara ini, peningkatan jumlah cloudlets menghasilkan peningkatan otomatis parameter _pm.max_children_. Direktif ini dapat didefinisikan secara eksplisit tanpa menonaktifkan optimisasi otomatis melalui variabel _PHPFPM_MAX_CHILDREN_ yang sesuai.
:::

  * _**pm.process_idle_timeout**_ \- menetapkan waktu tunda sebelum proses yang tidak aktif dihentikan (_60_ detik)

![NGINX PHP FastCGI process manager configs](#)

Selain itu, untuk mendapatkan kinerja yang lebih baik, listener PHP FPM menggunakan _UNIX domain socket_ alih-alih _TCP socket_ biasa. Solusi ini lebih cocok untuk komunikasi dalam host yang sama, memungkinkan untuk melewati pemeriksaan dan operasi (seperti routing).

### LiteSpeed (LLSMP)

Platform secara otomatis mengoptimalkan jumlah proses pekerja LiteSpeed berdasarkan RAM yang dialokasikan dan jumlah core CPU. Variabel _**JELASTIC_AUTOCONFIG**_ [environment variable](https://docs.dewacloud.com/docs/environment-variables/) menentukan apakah fitur auto-configuration harus diaktifkan (_true_, secara default) atau dinonaktifkan (_false_).

Lihat panduan [LiteSpeed Web Server](https://docs.dewacloud.com/docs/litespeed-web-server/) untuk detail lebih lanjut.

## Baca Juga{#whats-next}

  * [Smart Auto-Configuration](https://docs.dewacloud.com/docs/auto-configuration/)
  * [Database Auto-Configuration](https://docs.dewacloud.com/docs/database-auto-configuration/)
  * [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
  * [Environment Variables](https://docs.dewacloud.com/docs/environment-variables/)
  * [PHP Devs Center](https://docs.dewacloud.com/docs/php-center/)