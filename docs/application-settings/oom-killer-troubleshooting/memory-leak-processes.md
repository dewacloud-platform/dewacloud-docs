---
sidebar_position: 3
slug: /oom-killer-leak-risk-processes
title: Memory Leak Processes
---
# OOM Killer Resolutions: Processes with High Risk of Memory Leak

Perhatikan secara khusus proses dalam grup ini sebagai penyebab paling mungkin dari masalah out-of-memory Anda (diurutkan berdasarkan peran server):

  * [Load Balancers](https://docs.dewacloud.com/docs/#load-balancers)
  * [Application Servers](https://docs.dewacloud.com/docs/#application-servers)
  * [Database Servers](https://docs.dewacloud.com/docs/#database-servers)
  * [Common Processes for Different-Type Stacks](https://docs.dewacloud.com/docs/#common-processes)

## Load Balancers{#load-balancers}

#### Common recommendations{#common-recommendations}

Tambahkan lebih banyak RAM ke node yang sesuai - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_varnishd_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
## Application Servers{#application-servers}

Klik pada poin-poin di daftar di bawah ini untuk melihat beberapa rekomendasi umum tentang cara menangani masalah kekurangan memori berdasarkan bahasa pemrograman yang digunakan, serta resolusi yang sesuai untuk proses terkait yang paling menuntut:

  * Java

#### Common recommendations{#common-recommendations}

Tinjau konfigurasi manajemen memori utama untuk mesin Java Anda dan, jika diperlukan, sesuaikan dengan kebutuhan aplikasi Anda, misalnya:

_java -Xmx2048m -Xms256m_

di mana

    * _**Xmx**_ menandakan memori heap maksimum yang dapat dialokasikan untuk Java Virtual Machine (JVM)
    * _**Xms**_ menandakan alokasi memori awal

Lihat dokumentasi resmi untuk info lebih lanjut tentang [Java memory management](<http://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/memman.html>) sistem.

:::tip
Platform juga mengimplementasikan manajemen memori otomatis tambahan untuk kontainer Java menggunakan Garbage Collector. Anda dapat menyesuaikan pengaturannya sesuai dengan spesifikasi aplikasi Anda untuk menghindari masalah OOM dan mendapatkan pemanfaatan memori yang lebih efisien. Juga, pertimbangkan bahwa JVM memerlukan lebih banyak memori daripada hanya heap - baca referensi Java Memory Structure untuk mendapatkan wawasan yang lebih dalam.
:::

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_java_ | Periksa parameter _**xmx**_ , _**xms**_ , _**xmn**_ pada mesin Java Anda dan konfigurasikan sesuai dengan kebutuhan aplikasi Anda  
  
  * PHP

#### Common recommendations{#common-recommendations}

1\. Jika masalah terjadi pada layanan _**httpd**_ (_**httpd.itk**_), sesuaikan parameter manajemen memori server sebagai berikut:

    * periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_
    * hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_
    * kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_
:::warning
Jika Anda melihat peningkatan penggunaan memori yang terus-menerus per instance (kebocoran), Anda perlu mengurangi nilai _MaxRequestsPerChild_ (sekitar 1000-5000).
:::

2\. Untuk proses _**nginx**_, sambungkan ke kontainer Anda melalui SSH dan periksa ukuran instance _php-fpm_ (misalnya dengan alat _ps_ atau _top_):

    * jika semua instance mengonsumsi ~50-100Mb RAM, nonaktifkan [auto configuration](https://docs.dewacloud.com/docs/php-auto-configuration/) dan kurangi parameter _**max_children**_
    * jika ukuran instance sangat bervariasi atau melebihi 200-300Mb, proses kemungkinan bocor - periksa dan optimalkan kode Anda atau, sebagai alternatif, nonaktifkan [auto configuration](https://docs.dewacloud.com/docs/php-auto-configuration/) dan kurangi parameter _**max_requests_per_child**_

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_lsyncd_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_httpd.itk_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_nginx_ | Nonaktifkan _Jelastic auto configuration_ dan sesuaikan [parameter yang sesuai](https://docs.dewacloud.com/docs/php-auto-configuration/) sesuai dengan spesifikasi aplikasi Anda  
_php_ | Nonaktifkan _Jelastic auto configuration_ dan sesuaikan [parameter yang sesuai](https://docs.dewacloud.com/docs/php-auto-configuration/) sesuai dengan spesifikasi aplikasi Anda  
_php-fpm_ | Nonaktifkan _Jelastic auto configuration_ dan sesuaikan [parameter yang sesuai](https://docs.dewacloud.com/docs/php-auto-configuration/) sesuai dengan spesifikasi aplikasi Anda  
_php-fpm7.0_ | Nonaktifkan _Jelastic auto configuration_ dan sesuaikan [parameter yang sesuai](https://docs.dewacloud.com/docs/php-auto-configuration/) sesuai dengan spesifikasi aplikasi Anda  
_php7.0_ | Nonaktifkan _Jelastic auto configuration_ dan sesuaikan [parameter yang sesuai](https://docs.dewacloud.com/docs/php-auto-configuration/) sesuai dengan spesifikasi aplikasi Anda  
  
  * Ruby

#### Common recommendations{#common-recommendations}

Masalah kebocoran memori cukup umum untuk Ruby, jadi, sebagai langkah pertama, pertimbangkan untuk memeriksa dan mengoptimalkan kode Anda. Sebagai alternatif, coba tambahkan batas RAM untuk sebuah instance.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_httpd.itk_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_bundle_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_gem_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_ruby_ | Pertimbangkan untuk memeriksa dan mengoptimalkan kode Anda atau tambahkan lebih banyak RAM ke node  
  
  * Python

#### Common recommendations{#common-recommendations}

1\. Jika masalah terjadi pada layanan _**httpd**_ (_**httpd.itk**_), sesuaikan parameter manajemen memori server sebagai berikut:

    * periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_
    * hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_
    * kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_
:::warning
Jika Anda melihat peningkatan penggunaan memori yang terus-menerus per instance (kebocoran), kurangi nilai _MaxRequestsPerChild_ (sekitar 1000-5000).
:::

2\. Jika tidak, tambahkan lebih banyak RAM ke node - proses Python utama mungkin hanya memerlukan lebih banyak memori untuk operabilitas normal.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_lsyncd_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_httpd.itk_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_pip_ | Bisa disebabkan oleh masalah jaringan (sehingga proses pengunduhan terjebak); jika tidak, tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_python_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_python2.7_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
  * NodeJS

#### Common recommendations{#common-recommendations}

Restart container untuk memulihkan proses yang dihentikan. Jika masalah berulang, tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_lsyncd_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_grunt_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_node_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_npm_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_phantomjs_ | Tambahkan lebih banyak RAM ke node - aplikasi yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
## Database Servers{#database-servers}

Klik pada stack DB yang diperlukan dalam daftar di bawah ini untuk menampilkan rekomendasi umum yang sesuai untuk menangani masalah OOM, serta resolusi untuk proses yang dihentikan tertentu:

  * MySQL

#### Common recommendations{#common-recommendations}

1\. Jika menggunakan engine _**InnoDB**_ (tertanam sejak MySQL versi 5.5), periksa ukuran buffer dengan perintah berikut:

_SHOW ENGINE INNODB STATUS\G;_

Jika nilai buffer tinggi (lebih dari 80% dari total RAM kontainer), kurangi ukuran pool yang diperbolehkan dengan parameter _innodb_buffer_pool_size_ di file _**/etc/my.cnf**_; jika tidak, tambahkan lebih banyak RAM ke server.

2\. Selain itu, periksa log MySQL untuk peringatan dan rekomendasi.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_mysqld_ | 1\. Jika menggunakan engine _**InnoDB**_ (secara default untuk MySQL 5.5 dan lebih tinggi), periksa ukuran buffer dengan perintah _SHOW ENGINE INNODB STATUS\G;_. Jika nilai buffer tinggi (lebih dari 80% dari total RAM kontainer), kurangi ukuran pool yang diperbolehkan dengan parameter _innodb_buffer_pool_size_ di file **/etc/_my.cnf_**  
2\. Periksa log MySQL untuk peringatan dan rekomendasi  
  
  * MongoDB

#### Common recommendations{#common-recommendations}

Jika masalah terjadi pada layanan _**httpd**_, sesuaikan parameter manajemen memori server sebagai berikut:

    * periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_
    * hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_
    * kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_
:::warning
Jika Anda melihat peningkatan penggunaan memori yang terus-menerus per instance (kebocoran), kurangi nilai _MaxRequestsPerChild_ (sekitar 1000-5000).
:::

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_mongod_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
  * PostgreSQL

#### Common recommendations{#common-recommendations}

Tambahkan lebih banyak RAM ke node yang sesuai - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_httpd_ | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_postgres_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
  * Redis

#### Common recommendations{#common-recommendations}

Tambahkan lebih banyak RAM ke node yang sesuai - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal.

#### Related processes{#related-processes}

Process | Resolution  
---|---  
_redis-server_ | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
  
## Common Processes for Different-Type Stacks{#common-processes-for-different-type-stacks}

#### Common recommendations{#common-recommendations-1}

Proses dalam bagian ini dapat dijalankan dan, kemudian, dihentikan dalam berbagai jenis node. Oleh karena itu, resolusi OOM untuk mereka bervariasi dan tergantung pada proses itu sendiri - lihat tabel di bawah ini untuk menemukan rekomendasi yang sesuai.

#### Related processes{#related-processes-1}

Process | Stack | Resolution  
---|---|---  
_httpd_ | PHP  
Ruby  
Python  
MySQL  
MongoDB  
PostgreSQL | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_lsyncd_ | PHP  
NodeJS  
Python | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_httpd.itk_ | PHP  
Ruby  
Python | 1\. Periksa jumlah rata-rata RAM yang digunakan oleh setiap instance _httpd_  
2\. Hapus _Jelastic autoconfiguration mark_ di dalam file _**/etc/httpd/httpd.conf**_  
3\. Kurangi nilai _**ServerLimit**_ dan _**MaxClients**_ sesuai dengan formula: _(Total_RAM - 5%) / Average_RAM_  
_procmail_ | Any | Restart container untuk memulihkan proses  
_vsftpd_ | Any | Restart container untuk memulihkan proses  
_yum_ | Any | Restart container untuk memulihkan proses  
_cc1_ | 3rd party | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_clamd_ | 3rd party | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_ffmpeg_ | 3rd party | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_firefox_ | 3rd party | Tambahkan lebih banyak RAM ke node - layanan yang ditangani mungkin memerlukan lebih banyak memori untuk operabilitas normal  
_newrelic-daemon_ | 3rd party | Restart layanan stack utama (nginx, tomcat, nodejs, dll.)  

## Baca Juga

  * [OOM Killer Troubleshooting](https://docs.dewacloud.com/docs/oom-killer-troubleshooting/)
  * [Common Cases](https://docs.dewacloud.com/docs/oom-killer-common-cases/)
  * [Non-Leaking Processes](https://docs.dewacloud.com/docs/oom-killer-non-leaking-processes/)
  * [Java Garbage Collection](<https://www.virtuozzo.com/company/blog/garbage-collection/>)
  * [PHP Auto Configuration](https://docs.dewacloud.com/docs/php-auto-configuration/)