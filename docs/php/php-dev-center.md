---
sidebar_position: 1
slug: /php-center
title: PHP Dev Center
---
# PHP Developer's Center

PHP dianggap sebagai salah satu bahasa pemrograman server-side yang paling mudah digunakan. Penggunaannya untuk situs web (10 juta teratas menurut peringkat Alexa) terus bertumbuh dan saat ini mencapai [78.9%](<https://w3techs.com/technologies/history_overview/programming_language>). Popularitas mesin PHP juga dibuktikan oleh pelanggan platform karena hampir setiap server kedua dijalankan di atas PHP menurut statistik internal kami.

Mari kita ambil perjalanan ke cloud hosting PHP dalam platform, keistimewaan, poin kemenangan, dan kemungkinan kaya yang disediakan untuk menjalankan aplikasi secara efisien.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/01-php-cloud-hosting.png" alt="PHP cloud hosting" width="70%"/>

Gunakan tabel konten di bawah ini untuk menemukan informasi yang dibutuhkan dalam panduan lebih cepat:

  * [PHP Versions](#php-versions)
  * [PHP Application Servers](#php-application-servers)
  * [PHP Application Deployment](#php-application-deployment)
  * [Domains Management](#domains-management)
  * [Automatic Vertical Scaling](#automatic-vertical-scaling)
  * [Manual Horizontal Scaling](#manual-horizontal-scaling)
  * [Automatic Horizontal Scaling](#automatic-horizontal-scaling)
  * [PHP Clustering](#php-clustering)
  * [Database Connection to PHP Application](#database-connection-to-php-application)
  * [Modules and Accelerators](#modules-and-accelerators)
  * [PHP Security](#php-security)

## PHP Versions{#php-versions}

Seiring berkembangnya teknologi, platform mendukung versi mesin PHP terbaru (pada saat penulisan ini):

  * 8.0.30
  * 8.1.29
  * 8.2.23
  * 8.3.11

Daftar terbaru rilis yang tersedia pada platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara teratur (mingguan).

Anda dapat memilih versi mesin yang Anda butuhkan saat pembuatan environment dan dengan mudah beralih di antaranya setelahnya melalui [platform UI](<https://docs.dewacloud.com/docs/php-versions/>) yang intuitif.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/02-php-environment-creation.png" alt="PHP environment creation" max-width="100%"/>

## PHP Application Servers{#php-application-servers}

Dua server aplikasi PHP disediakan secara default dan didukung oleh platform (mis. pembaruan versi atau patch keamanan ditambahkan oleh tim PaaS ke template):

  * [Apache](<https://docs.dewacloud.com/docs/apache-php/>)
  * [NGINX](<https://docs.dewacloud.com/docs/nginx-php/>)

Untuk melihat secara rinci bagaimana server ini dapat dikonfigurasi dan menemukan daftar file konfigurasi yang dapat diedit untuk masing-masing, lihat dokumen [PHP App Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/03-php-file-manager.png" alt="PHP file manager" max-width="100%"/>

## PHP Application Deployment{#php-application-deployment}

[Zero downtime deployment](<https://docs.dewacloud.com/docs/php-zero-downtime-deploy/>) menyediakan kemampuan untuk menjalankan aplikasi asli cloud atau lama. Untuk menyampaikan proyek PHP Anda ke environment yang dibuat dalam platform, Anda dapat memilih salah satu [opsi deployment](<https://docs.dewacloud.com/docs/deployment-guide/>) yang tersedia: melalui Archive/URL, GIT/SVN, proyek Bitbucket, dll.

Selain itu, Anda dapat mengkonfigurasi [automatic periodic re-deployment](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>) dari repository (ini dilakukan hanya jika terdapat perubahan kode baru).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/04-php-application-deployment.png" alt="PHP application deployment" width="50%"/>

Semua node PHP yang bersertifikat platform disediakan dengan pengelola dependensi **[Composer](<https://docs.dewacloud.com/docs/php-composer/>)** yang sudah diinstal sebelumnya untuk dengan cepat menginstal semua paket yang dibutuhkan untuk proyek yang dideploy dan menjaganya tetap up-to-date.

## Domains Management{#domains-management}

Untuk keperluan produksi, Anda dapat mengikat nama domain eksternal ke aplikasi Anda sebagai pengganti domain environment default. Ikuti instruksi [custom domains](<https://docs.dewacloud.com/docs/custom-domains/>) yang sesuai untuk mempelajari bagaimana ini dapat dilakukan.

Dengan bantuan fitur [swapping domains](<https://docs.dewacloud.com/docs/swap-domains/>), pengguna akhir aplikasi Anda tidak akan mengalami downtime apa pun ketika Anda, misalnya, mendeply versi aplikasi baru. Anda dapat menempatkan versi aplikasi baru Anda dalam environment uji dan kemudian menukar URL dengan environment produksi hanya dalam beberapa klik.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/05-php-domains-management.png" alt="PHP domains management" max-width="100%"/>

Menggunakan [multiple domains](<https://docs.dewacloud.com/docs/multiple-domains-php/>) pada server PHP tunggal meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi, secara bersamaan menghemat biaya untuk kebutuhan mendirikan instance terpisah.

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Automatic vertical scaling dimungkinkan oleh kemampuan platform untuk secara dinamis mengubah jumlah sumber daya yang dialokasikan (RAM dan CPU) untuk server sesuai dengan permintaan saat ini, tanpa intervensi manual yang diperlukan. Fitur ini menjamin Anda [tidak pernah membayar lebih untuk sumber daya yang tidak digunakan](<https://www.virtuozzo.com/company/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>) dan menghemat waktu Anda karena menghilangkan kebutuhan untuk menangani penyesuaian terkait beban atau perubahan arsitektur.

Untuk mengatur konsumsi sumber daya otomatis oleh server PHP Anda, buka wizard topologi environment dan tentukan batas atas scaling dari [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) (setiap cloudlet setara dengan 128 MiB dan 400 MHz) dengan slider yang terletak di atas:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/06-php-vertical-scaling.png" alt="PHP vertical scaling" width="70%"/>

Aplikasi Anda akan bekerja dalam batas-batas ini mengurangi konsumsi sumber daya ketika beban turun atau meningkatkannya ketika beban naik. Dengan demikian, Anda hanya membayar untuk sumber daya yang benar-benar dikonsumsi. Untuk informasi lebih lanjut, silakan merujuk ke dokumentasi tentang [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>).

## Manual Horizontal Scaling{#manual-horizontal-scaling}

Untuk menambahkan server PHP tambahan secara manual, cukup klik **Change Environment Topology**. Kemudian tekan tombol “+” dalam wizard dan tambahkan jumlah instance yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/07-php-horizontal-scaling.png" alt="PHP horizontal scaling" width="70%"/>

Jumlah maksimum server tipe yang sama dalam satu lapisan environment bergantung pada pengaturan penyedia hosting tertentu (biasanya, batas ini adalah 16 node dan dapat disesuaikan dengan mengirimkan permintaan ke dukungan).

Juga, seperti yang Anda lihat, ketika Anda menambahkan server tambahan, [load balancing](<https://docs.dewacloud.com/docs/load-balancing/>) diaktifkan secara otomatis.

Silakan, temukan lebih banyak detail tentang [manual horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) dalam dokumentasi.

## Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Automatic horizontal scaling dapat diimplementasikan melalui pemicu yang dapat disesuaikan, yang memantau perubahan beban aplikasi dan meningkatkan atau mengurangi jumlah node karena mereka.

Untuk mengkonfigurasi pemicu untuk automatic horizontal scaling, buka bagian **Settings > Monitoring > Auto Horizontal Scaling** dan tekan tombol **Add**.

Dengan cara ini, Anda dapat mengkonfigurasi pemicu untuk stack dan sumber daya (CPU, RAM, Network, Disk) tertentu dalam environment Anda secara terpisah. Cukup tentukan kondisi scaling dan terapkan perubahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/08-php-auto-horizontal-scaling.png" alt="PHP auto horizontal scaling" max-width="100%"/>

Silakan, temukan lebih banyak detail tentang [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) dalam dokumen yang sesuai.

## PHP Clustering{#php-clustering}

Mengimplementasikan [PHP sessions clustering](<https://docs.dewacloud.com/docs/memcached-php-sessions/>) untuk aplikasi Anda dapat sangat meningkatkan ketersediaan dan kemampuan failover menggunakan sticky sessions, dijalankan di beberapa node server aplikasi. Mekanisme ini dijamin oleh node Memcached yang harus ditambahkan ke environment Anda dan digunakan sebagai penyimpanan untuk cadangan sesi yang diproses.

Sementara melakukan scaling server PHP dengan aplikasi yang dideploy, Anda mendapatkan salinan persis dengan semua konfigurasi dan file yang sama di dalamnya berkat [data synchronization](<https://docs.dewacloud.com/docs/data-synchronization/>) built-in.

Selain itu, platform ini memiliki [WordPress Cluster](<https://github.com/jelastic-jps/wordpress-cluster>) dan [Magento Cluster](<https://github.com/jelastic-jps/magento-cluster>) yang tersedia untuk instalasi satu klik untuk memastikan operabilitas layanan Anda. Selain itu, Anda dapat mengemas aplikasi PHP apa pun dengan cara ini untuk mengotomatisasi instalasi yang dikelompokkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/09-php-clustering-scheme.png" alt="PHP clustering scheme" width="80%"/>

## Database Connection to PHP Application{#database-connection-to-php-application}

Platform ini menyediakan satu set server database yang dapat diskalakan dan sepenuhnya dapat dikelola yang dapat Anda instal dan operasikan dengan mudah dalam PHP environment. Untuk melakukan koneksi, sesuaikan aplikasi Anda mengikuti instruksi berdasarkan database yang Anda perlukan:

  * [MySQL/MariaDB Connection](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [PostgreSQL Connection](<https://docs.dewacloud.com/docs/connection-to-postgresql-php/>)
  * [MongoDB Connection](<https://docs.dewacloud.com/docs/connection-to-mongodb-php/>)

## Modules and Accelerators{#modules-and-accelerators}

Saat bekerja dengan platform, Anda dapat memperluas fungsionalitas environment melalui penetapan berbagai ekstensi PHP pada server aplikasi yang sesuai. Anda dapat memilih salah satu ekstensi default dan mengaktifkannya, atau mengunggah ekstensi khusus Anda sendiri - kedua operasi ini dijelaskan dalam instruksi [PHP Modules](<https://docs.dewacloud.com/docs/php-extensions/>).

Sebagai jenis ekstensi PHP yang terpisah, [PHP accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>) dapat ditentukan. Mereka digunakan untuk memperbesar efisiensi aplikasi Anda melalui caching bagian PHP code yang sudah dikompilasi, yang dapat dieksekusi dengan cepat atas permintaan pengguna.

Server Apache PHP dan NGINX mencakup [set inbuilt modules](<https://docs.dewacloud.com/docs/apache-nginx-modules/>) tertentu. Selain itu, ada beberapa tutorial terpisah tentang mengkonfigurasi berbagai modul:

  * [Adding Custom Apache Modules](<https://docs.dewacloud.com/docs/add-apache-modules/>)
  * [Apache WebDav Module](<https://docs.dewacloud.com/docs/apache-webdav-module/>)
  * [Apache Statistics Module](<https://docs.dewacloud.com/docs/apache-statistics-module/>)
  * [NGINX WebDav Module](<https://docs.dewacloud.com/docs/nginx-webdav-module/>)
  * [New Relic Monitoring](<https://docs.dewacloud.com/docs/new-relic-installation/>)

## PHP Security{#php-security}

[SSL / TLS](<https://docs.dewacloud.com/docs/secure-sockets-layer/>) (Secure Sockets Layer / Transport Layer Security) adalah teknologi keamanan standar industri untuk membangun koneksi terenkripsi antara server web dan browser. Teknologi ini didukung oleh platform dan memastikan bahwa semua data yang melewati tetap bersifat pribadi dan rahasia, yaitu, tidak dapat disadap oleh pihak ketiga.

Selain metode perlindungan umum, keamanan aplikasi Anda dapat ditingkatkan melalui [customizing the main PHP configuration file](<https://docs.dewacloud.com/docs/php-security-settings/>), yang dinamai _**php.ini**_. Anda dapat mengedit sejumlah pengaturan default yang dikandungnya atau menambahkan yang baru sesuai dengan kebutuhan aplikasi Anda.

Panduan konfigurasi tambahan tersedia untuk server aplikasi tertentu:

  * [Apache Security Configurations](<https://docs.dewacloud.com/docs/apache-security-configurations/>)
  * [NGINX Security Configurations](<https://docs.dewacloud.com/docs/nginx-security-configurations/>)

Cara lain untuk memastikan perlindungan aplikasi adalah dengan menggunakan [container firewall feature](<https://docs.dewacloud.com/docs/container-firewall/>). Ini memungkinkan Anda mengontrol ketersediaan nodes baik dari dalam maupun luar platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-dev-center/10-php-container-firewall.png" alt="PHP container firewall" max-width="100%"/>

Jelajahi kemungkinan tanpa batas dari PHP dengan platform ini.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [PHP Tutorials](<https://docs.dewacloud.com/docs/php-tutorials/>)