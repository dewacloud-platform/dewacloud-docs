---
sidebar_position: 7
slug: /wordpress-php-optimization
title: WordPress PHP Optimization
---

# Optimasi PHP WordPress

Server aplikasi berbasis PHP memiliki berbagai fungsi yang memungkinkan Anda untuk menyetel proyek dan mencapai kinerja serta keamanan maksimum. Kami merekomendasikan mengonfigurasi beberapa fungsi PHP standar untuk melindungi server Anda dari bahaya. Tentu saja, ini hanya alat dasar yang dapat melengkapi perlindungan keseluruhan sistem Anda. Jadi, mari kita lihat cara melakukan beberapa konfigurasi awal untuk meningkatkan keamanan lingkungan PHP Anda.

File konfigurasi utama PHP, yang bernama _**php.ini**_, berisi sejumlah pengaturan default yang dapat Anda sesuaikan atau bahkan tambahkan tergantung pada kebutuhan Anda. File ini terletak di direktori **etc** dari server aplikasi PHP Anda. File ini dapat diakses dan diedit melalui [embedded file manager](https://docs.dewacloud.com/wp-dashboard-project-management/#environment-management) langsung di dashboard. Anda dapat menemukannya di antara file konfigurasi utama di tab _Favorites_.

![WordPress php.ini configuration](#)

**Catatan:** Semua direktif dan nilai dalam panduan ini hanyalah rekomendasi. Sebelum membuat perubahan apa pun, lihat [dokumentasi PHP](https://www.php.net/manual/en/ini.list.php) resmi untuk informasi tambahan dan pastikan bahwa nilai baru tersebut akan bermanfaat bagi proyek Anda secara khusus.

Ikuti instruksi di bawah ini untuk menganalisis konfigurasi Anda dan menerapkan perubahan yang diperlukan.

1. Beberapa konfigurasi PHP yang biasa digunakan secara otomatis ditetapkan ulang oleh platform dalam file _**php.d/90-jelastic.ini**_ khusus. Parameter dalam file ini akan menggantikan parameter yang sama dari konfigurasi **php.ini**. Nilai berikut diatur ulang secara default:

```
upload_max_filesize = 100M 
post_max_size = 100M 
max_execution_time = 300 
expose_php = Off 
error_log = /var/log/litespeed/php_errors.log 
memory_limit = 512M
```

![php.ini configs override](#)

2. Tambahkan string berikut untuk menonaktifkan _**insecure functions**_:

```
disable_functions = phpinfo, system, mail, exec
```

Keamanan tambahan dapat diperoleh dengan menonaktifkan fungsi berikut:

```
disable_functions = exec,passthru,shell_exec,system,proc_open,popen,curl_exec,curl_multi_exec,parse_ini_file,show_source
```

![WordPress php.ini disable functions](#)

3. Jumlah _**allowed resources**_ (jika dapat diterima untuk aplikasi Anda):

- **max_execution_time = 30** - waktu eksekusi maksimum script (dalam detik)
- **max_input_time = 60** - waktu maksimum untuk parsing data permintaan oleh setiap script
- **upload_max_filesize = 2M** - ukuran maksimum file yang diunggah
- **memory_limit = 8M** - jumlah memori maksimum script (nilai default adalah _128M_, tetapi dapat diatur lebih rendah jika tidak mengurangi kinerja aplikasi Anda)
- **post_max_size = 8M** - ukuran data POST maksimum yang dapat diterima untuk PHP

4. Anda dapat _**restrict functions**_ yang tidak diperlukan untuk aplikasi Anda:

- **file_uploads = Off** - melarang upload file HTTP
- **display_errors = Off** - melarang penampilan pesan error PHP kepada pengguna akhir
- **safe_mode_allowed_env_vars = PHP_** - membatasi akses eksternal ke lingkungan PHP Anda
- **expose_php = Off** - membatasi pengiriman kembali informasi PHP
- **register_globals = Off** - mematikan pendaftaran globals untuk data input
- **allow_url_fopen = Off** - membatasi pembukaan file jarak jauh

5. Jika diperlukan, _**enable functions**_ yang memberikan informasi tambahan tentang status keamanan:

- **cgi.force_redirect = 0** - memastikan kepatutan pengalihan PHP
- **log_errors = On** - mengaktifkan log semua kemungkinan kesalahan

6. Aktifkan _**safe modes**_ yang tersedia:

- **safe_mode = On** - mengaktifkan mode aman
- **sql.safe_mode = On** - mengaktifkan mode aman SQL

Sekali lagi, saat menentukan pengaturan yang disebutkan di atas, Anda harus mempertimbangkan persyaratan dari aplikasi Anda. Untuk menerapkan perubahan yang telah Anda buat, **Save** file dan **Restart** server aplikasi PHP Anda.

## Ekstensi PHP{#php-extensions}

File _**php.ini**_ berisi daftar ekstensi PHP. Beberapa modul ini diaktifkan untuk server secara default, sementara yang lain dapat diaktifkan secara manual ketika diperlukan. Lihat daftar [ekstensi PHP](https://docs.dewacloud.com/php-extensions/) yang tersedia secara default di dokumen yang ditautkan.

Jika Anda ingin ekstensi dimuat secara otomatis, gunakan sintaks berikut:

```
extension={moduleName}
```

Misalnya, “_extension=mysqli_”.

:::tip
Anda dapat menyediakan ekstensi custom dengan mengunggahnya ke default modules directory (/usr/local/lsws/lsphp/lib64/php/modules) dan mengaktifkannya seperti biasa atau dengan menentukan path absolut ke file perpustakaan:
```
extension=/path/to/extension/mysqli.so
```
:::

Juga, Anda dapat mengkonfigurasi ekstensi dengan menyesuaikan direktif yang telah ditentukan dalam bagian yang sesuai dari file _**php.ini**_ (atau dengan menambahkan yang baru). Untuk menerapkan perubahan, Anda perlu **Save** file dan **Restart** node server aplikasi PHP Anda.

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/virtuozzo-application-platform-for-wordpress/)
- [WordPress Dashboard](https://docs.dewacloud.com/wp-dashboard-overview/)
- [WordPress Topologies](https://docs.dewacloud.com/wordpress-topologies/)
- [WordPress Backups](https://docs.dewacloud.com/wordpress-backups/)
- [WordPress Security](https://docs.dewacloud.com/wordpress-security/)