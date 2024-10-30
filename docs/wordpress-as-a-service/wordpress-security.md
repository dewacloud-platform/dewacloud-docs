---
sidebar_position: 6
slug: /wordpress-security
title: WordPress Security
---

# Keamanan WordPress

Keamanan situs web adalah salah satu pilar utama dari hosting WordPress yang sukses. Ketika berbicara tentang keamanan, ada dua bentuk utama - perlindungan terhadap peretas yang mencoba mencuri data Anda dan keamanan terhadap kehilangan informasi. Platform ini menangani kedua poin keamanan ini. Kehilangan data dijamin secara otomatis oleh [konfigurasi server hosting cloud](#cloud-hosting-security), sementara perlindungan peretas memanfaatkan banyak [fitur server aplikasi](https://docs.dewacloud.com/docs/#litespeed-security-protection).

### Keamanan Hosting Cloud{#cloud-hosting-security}

Sebagai penyedia hosting cloud yang andal dengan pengalaman bertahun-tahun dan reputasi yang solid, Dewacloud Application Platform untuk WordPress menangani banyak implementasi keamanan. Hosting cloud menyediakan solusi yang sangat baik terhadap pelanggaran data di situs web Anda yang disebut _data segmentation_. Bagaimana cara kerjanya? Misalkan salah satu server diretas. Data segmentation memberikan fleksibilitas hosting cloud untuk memisahkan infiltrasi ini dari bagian lain situs web Anda sebelum apa pun terpengaruh.

Sebagai perpanjangan dari keamanan situs Anda, hosting cloud membantu melindungi terhadap kehilangan informasi dengan fitur _data replication_ yang kuat. Ini memanfaatkan jaringan server yang saling terhubung yang membuat data situs web Anda tersedia untuk dikloning dan disimpan dalam sebanyak mungkin server sesuai kebutuhan.

Sebagai perbandingan, hosting cloud yang dikelola sendiri menyerahkan semua konfigurasi server ini kepada Anda, yang menantang bahkan untuk pengembang dan insinyur yang berpengalaman.

### Perlindungan Keamanan LiteSpeed{#litespeed-security-protection}

Dengan gelar CMS terbaik di pasar datanglah ancaman keamanan karena menjadi target umum untuk serangan peretas. Selain itu, kode sumber terbuka WordPress membuatnya lebih rentan. Hampir 70% situs web yang berjalan di WordPress menjadi korban serangan melalui perangkat lunak berbahaya dalam plugin. Aktivitas peretasan populer lainnya adalah menggunakan program yang menebak detail login admin (juga dikenal sebagai serangan brute force). Selain menghadirkan ancaman keamanan, serangan ini membebani sumber daya server, dan bahkan jika password Anda tidak ditebak, kinerjanya dapat terpengaruh.

Untuk mencegah serangan semacam itu, server LiteSpeed melindungi file _**xmlrpc.php**_ dan _**wp-login.php**_ yang paling rentan. Ini juga memindahkan _Security Captcha_ dari tingkat aplikasi ke tingkat server dan mencegah upaya login yang tidak diinginkan dengan secara otomatis memblok alamat IP. Ini dicapai dengan menetapkan kuota otomatis untuk logins yang dikurangi satu setelah setiap percobaan gagal. Setelah mencapai nol, throttle, deny, atau drop permintaan akan diterapkan untuk melindungi instalasi WordPress Anda.

Banyak opsi keamanan lainnya dapat dikonfigurasi untuk server LiteSpeed. Platform ini mengintegrasikan beberapa fitur paling populer yang digunakan dengan instalasi WordPress, memungkinkan pengguna untuk dengan mudah mengaktifkannya di server menggunakan [variabel lingkungan yang didedikasikan](https://docs.dewacloud.com/docs/environment-variables/):

- _**WAF**_ - mengaktifkan (_true_) atau menonaktifkan (_false_, secara default) Web Application Firewall dengan ruleset default [Comodo](https://waf.comodo.com/)
- _**WP_PROTECT**_ - mengkonfigurasi tindakan untuk fitur [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) (_off|on|drop|deny|throttle|captcha_; _off_ secara default)
- _**WP_PROTECT_LIMIT**_ - menetapkan batas untuk fitur [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) (_0|1|2-1000_; _10_ secara default)

Untuk opsi konfigurasi tambahan, Anda dapat mengakses panel admin LiteSpeed (menggunakan kredensial yang diterima melalui email setelah pembuatan environment).

:::tip
Tergantung pada topologi, Anda disediakan dengan kredensial ke panel admin semua komponen: WordPress, LiteSpeed ADC, LiteSpeed WEB Server, PhpMyAdmin (MariaDB).
:::

Periksa artikel **[WordPress Security Optimization for High-Performing Websites](https://www.virtuozzo.com/company/blog/wordpress-security-optimization/)** kami untuk mendapatkan lebih banyak saran tentang keamanan dan optimasi.

## Baca Juga{#whats-next}

- [WordPress Dashboard](https://docs.dewacloud.com/docs/wp-dashboard-overview/)
- [WordPress Topologies](https://docs.dewacloud.com/docs/wordpress-topologies/)
- [WordPress Backups](https://docs.dewacloud.com/docs/wordpress-backups/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/docs/wordpress-php-optimization/)