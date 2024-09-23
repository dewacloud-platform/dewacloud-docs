---
sidebar_position: 7
slug: /php-security-settings
title: PHP.INI Security Settings
---
# PHP.INI Security Settings

Ada beberapa fungsi PHP yang disarankan untuk dikonfigurasi dengan benar guna melindungi server Anda dari bahaya. Tentu saja, perlindungan keseluruhan sistem Anda bisa sangat kompleks dan memerlukan sejumlah alat khusus, tetapi dalam tutorial ini kita akan memeriksa cara memulai dengan beberapa dasar, yang tidak memerlukan pengeluaran tambahan. Jadi, mari kita lihat bagaimana melakukan beberapa konfigurasi awal untuk meningkatkan keamanan aplikasi PHP Anda, yang dihosting dengan platform ini.

File konfigurasi PHP utama, bernama **php.ini**, berisi sejumlah pengaturan default, yang dapat Anda sesuaikan, atau bahkan tambahkan sendiri tergantung pada kebutuhan aplikasi Anda. File ini terletak di direktori _**etc**_ dari server aplikasi Apache atau NGINX-PHP Anda. File ini sepenuhnya dapat diedit oleh Anda sebagai pelanggan platform, jadi mari kita pertimbangkan pengaturan mana yang dapat Anda terapkan untuk memastikan keamanan server Anda.

**Catatan** bahwa nilai-nilai yang dijelaskan di bawah ini hanyalah rekomendasi. Sebelum menerapkannya, pastikan persyaratan aplikasi Anda sesuai dengan konfigurasi ini agar tidak mengurangi kinerjanya.

Tekan tombol **Config** untuk server Apache atau NGINX Anda. Di tab yang muncul, navigasikan ke direktori **etc** dan buka file **php.ini**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-security-settings/php.ini-config.png" alt="php ini config" width="50%"/>

Ikuti instruksi berikut untuk menerapkan konfigurasi yang diperlukan:

1\. Tambahkan string berikut untuk menonaktifkan **_fungsi tidak aman_**:

_disable_functions = phpinfo, system, mail, exec_  
Keamanan tambahan dapat diperoleh dengan menonaktifkan fungsi-fungsi berikut:  
_disable_functions = exec,passthru,shell_exec,system,proc_open,popen,curl_exec,curl_multi_exec,parse_ini_file,show_source_  

![insecure php functions](#)
<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-security-settings/insecure-php-functions.png" alt="insecure php functions" width="100%"/>

2\. Batasi jumlah **_sumber daya yang diizinkan_**, jika dapat diterima untuk aplikasi Anda:

  * Waktu eksekusi skrip maksimum (dalam detik) _**max_execution_time = 30**_
  * Waktu maksimum untuk parsing data permintaan oleh setiap skrip _**max_input_time = 60**_
  * Ukuran maksimum file yang diunggah _**upload_max_filesize = 2M**_
  * Jumlah memori skrip maksimum (8MB) _**memory_limit = 8M**_ (nilai defaultnya adalah 128M, tetapi dapat diterima untuk menetapkan yang lebih rendah jika tidak mengurangi kinerja aplikasi Anda)
  * Ukuran data POST maksimum, yang dapat diterima untuk PHP _**post_max_size = 8M**_

3\. Daftar berikut dari **_fungsi_** dapat **_dibatasi_** jika tidak diperlukan untuk aplikasi Anda:

  * Melarang unggahan file HTTP _**file_uploads = Off**_
  * Melarang menampilkan pesan kesalahan PHP untuk pengguna akhir _**display_errors = Off**_
  * Batasi akses eksternal ke lingkungan PHP Anda _**safe_mode_allowed_env_vars = PHP_**_
  * Batasi pengiriman kembali informasi PHP _**expose_php = Off**_
  * Nonaktifkan pendaftaran global untuk data input _**register_globals = Off**_
  * Batasi pembukaan file remote _**allow_url_fopen = Off**_

4\. Untuk mendapatkan lebih banyak informasi tentang status keamanan, **_aktifkan_** fungsi-fungsi berikut **_**:

  * Pastikan kesesuaian pengalihan PHP _**cgi.force_redirect = 0**_
  * Aktifkan semua kesalahan yang mungkin _**logging**_ _**log_errors = On**_

5\. Aktifkan mode aman yang tersedia **_**:

  * Aktifkan mode aman _**safe_mode = On**_
  * Aktifkan mode aman SQL _**sql.safe_mode = On**_

**Catatan:** Saat menentukan pengaturan yang disebutkan di atas, Anda harus mempertimbangkan persyaratan aplikasi Anda, dalam beberapa kasus mungkin tidak tersedia.

## Baca Juga{#whats-next}

  * [PHP Application Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)