---
sidebar_position: 1
slug: /default-environment-variables
title: Environment Variables Default
---
# Variabel Environment

**Variabel environment** digunakan untuk menyimpan nilai dari parameter yang sering digunakan dan diberikan ke program perangkat lunak saat runtime. Penggunaan placeholder semacam ini membuat aplikasi Anda lebih portabel dan fleksibel.

Penggunaan variabel yang paling umum adalah untuk melakukan penyesuaian cepat terhadap nilai-nilai tertentu yang digunakan berkali-kali dalam kode aplikasi Anda. Ikuti panduan yang ditautkan jika Anda perlu membuat [variabel environment khusus](<https://docs.dewacloud.com/docs/custom-environment-variables/>) untuk proyek Anda.

Kasus penggunaan lain dari variabel adalah untuk mengkonfigurasi aplikasi melalui serangkaian nilai yang telah ditentukan (mengaktifkan/menonaktifkan fitur, mengubah perilaku, dll.). Platform ini menyediakan sebagian besar stack perangkat lunak bersertifikat dengan sejumlah variabel default, yang dapat digunakan oleh pengembang untuk membantu hosting aplikasi.

## Variabel Environment Default {#default-environment-variables}

Klik abstrak ini untuk melihat daftar lengkap variabel default yang digunakan dalam container platform.

Nama Variabel | Dapat Diedit* | Stack | Deskripsi  
---|---|---|---  
**\{SOFTWARE\}_VERSION** | - | Semua | Versi perangkat lunak yang ditentukan (stack, engine, template, modul, dll.).  
**ADMIN_USER** | - | GlassFish (Payara), WildFly, Couchbase, LiteSpeed Web Server, LiteSpeed ADC, LLSMP | Login dari pengguna admin untuk konsol administrasi.  
**ADMINPANEL_ENABLED (PHPMYADMIN_ENABLED)** | + | Database, LLSMP, LEMP | Nilai " _true_ " dan " _1_ " mengizinkan penggunaan panel admin, sementara nilai lainnya menonaktifkannya. Diperlukan restart untuk menerapkan perubahan. Nilai dalam tanda kurung sudah usang tetapi masih dapat digunakan pada database MySQL dan MariaDB.  
**APP_FILE** | + | Node.js | File aplikasi utama Node.js yang akan diluncurkan.  
**APP_NAME** | + | .NET Core | Menunjuk ke folder tertentu (jika ada beberapa aplikasi dalam satu repositori) atau menjalankan file _.dll_ tertentu dalam proyek Anda.  
**ASPNETCORE_URLS** | + | .NET Core | Mengkonfigurasi layanan .NET Core untuk bekerja dengan URL yang ditentukan.  
**AUTO_OLD_HEAP** | + | Node.js | Mengaktifkan/mematikan (_true/false_) autokonfigurasi memori platform - menetapkan ukuran maksimum heap lama berdasarkan jumlah memori pada container.  
**CACHE_MEM_LIMIT** | + | PHP | Mendefinisikan bagian dari RAM, yang harus disediakan untuk server cache _Redis_ bawaan, _10%_ dari total RAM container secara default.  
**CLONE_ON_SCALE** | + | Semua | Menentukan apakah node baru saat penskalaan horizontal harus menjadi klon dari master layer (_true_) atau dibuat dari awal (_false_).  
**CP_MEM_LIMIT** | + | LLSMP, LEMP | Mendefinisikan bagian dari RAM, yang harus disediakan untuk server aplikasi, _50%_ dari total RAM container secara default.  
**DAS** | - | GlassFish (Payara) | Menunjukkan apakah ada node DAS (diperlukan untuk mengkonfigurasi cluster) untuk layer saat ini.  
**DB_MEM_LIMIT** | + | LLSMP, LEMP | Mendefinisikan bagian dari RAM, yang harus disediakan untuk server database _MariaDB_ bawaan, _40%_ dari total RAM container secara default.  
**DEFAULT_CLUSTER** | + | LiteSpeed ADC | Memilih jenis penyeimbangan beban untuk proxying permintaan (_HTTP_, _AJP_, _FCGI_, _LSAPI_). Logika ini dapat dinonaktifkan (_0_, _disabled_, _false_).  
**DOCKER_EXPOSED_PORT** | - | Semua | Menampilkan port dari direktif _EXPOSE_ pada dockerfile gambar, yang dibuka melalui firewall container saat pembuatan environment.  
**FULL_GC_AGENT_DEBUG** | + | Java | Mengaktifkan (_true_) atau menonaktifkan (_false_) mode debug untuk melacak proses GC Java di log.  
**FULL_GC_PERIOD** | + | Java | Mengatur interval (dalam detik) antara panggilan GC penuh; _900_ secara default, yaitu 15 menit.  
**G1PERIODIC_GC_INTERVAL** | + (untuk openJDK 12/13 saja) | Java | Frekuensi Koleksi Periodik G1 dalam milidetik (_G1PeriodicGCInterval - 15 menit_ secara default); setel sebagai _0_ untuk menonaktifkan.  
**G1PERIODIC_GC_SYS_LOAD_THRESHOLD** | + (untuk openJDK 12/13 saja) | Java | Memungkinkan pelaksanaan Koleksi Periodik G1, jika rata-rata beban sistem satu menit di bawah nilai yang ditetapkan. Kondisi ini diabaikan jika disetel sebagai nol. Secara default sama dengan _\{CPU_cores_number\} * \{GC_SYS_LOAD_THRESHOLD_RATE\}_.  
**GC_SYS_LOAD_THRESHOLD_RATE** | + (untuk openJDK 12/13 saja) | Java | Pengali khusus untuk menyesuaikan nilai _G1PeriodicGCSystemLoadThreshold_ (_0.3_ secara default).  
**GEM_HOME** | + | Ruby | Lokasi (dapat beberapa) di mana gem dapat ditemukan (harus menyertakan _GEM_PATH_).  
**GEM_PATH** | - | Ruby | Lokasi tempat gem akan diinstal secara default.  
**GMS_LISTENER_PORT** | - | GlassFish (Payara) | Port yang digunakan oleh layanan manajemen grup (GMS).  
**GO_BUILD_OPTIONS** | + | Go | Opsi dan flag yang harus digunakan untuk membangun aplikasi _Go_.  
**GO_RUN** | + | Go | Menetapkan nama file biner yang dapat dieksekusi. Jika tidak ditentukan, skrip pengiriman akan mencoba mencari satu berdasarkan nama proyek.  
**GO_RUN_OPTIONS** | + | Go | Opsi dan flag yang harus digunakan untuk menjalankan aplikasi _Go_.  
**GOPATH** | - | Go | Menentukan folder penyebaran aplikasi _Go_.  
**HAZELCAST_CONFIG** | + | GlassFish (Payara) | Mengatur jalur ke file konfigurasi _hazelcast_.  
**HOME_DIR** | - | GlassFish (Payara), WildFly, Spring Boot, Java Engine, Node.js, Shared Storage | Direktori home container.  
**HOT_DEPLOY** | + | Tomcat, TomEE | Mengaktifkan (_true/enabled/1_) atau menonaktifkan (_false/disabled/0_, secara default) hot deploy (yaitu pengiriman tanpa restart) untuk server aplikasi.  
**IRBRC** | - | Ruby | Jalur ke file konfigurasi _IRB_.  
**JAVA_ARGS** | + | Java | Memungkinkan pengiriman beberapa argumen khusus ke fungsi utama aplikasi Anda.  
**JAVA_HOME** | - | Java, Maven | Menunjuk ke direktori tempat _JRE_ diinstal.  
**JAVA_OPTS_CONFFILE** | - | Java, Maven | Jalur ke file _[variables.conf](<https://docs.dewacloud.com/docs/java-options-arguments/>)_.  
**JBOSS_HOME** | - | WildFly | Direktori home WildFly.  
**JELASTIC_AUTOCONFIG** | + | LiteSpeed Web Server, LLSMP, LiteSpeed ADC, MySQL, MariaDB, Percona | Mengaktifkan (_true/enabled/1_, secara default) atau menonaktifkan (_false/disabled/0_) [smart auto-configuration](<https://docs.dewacloud.com/docs/auto-configuration/>) berdasarkan RAM yang dialokasikan dan jumlah inti CPU.  
**JELASTIC_EXPOSE** | + | Semua | Mengelola status [fungsi pengalihan otomatis](<https://docs.dewacloud.com/docs/container-ports/#ports-auto-redirect>) dengan kemampuan untuk menentukan port yang diperlukan secara manual.  
**JELASTIC_MEMORY_AUTOCONFIG** | + | WildFly | Mengaktifkan (_true_) atau menonaktifkan (_false_) autokonfigurasi memori untuk WildFly.  
**JELASTIC_PRIORITY_PORTS** | + | GlassFish (Payara) | Mengatur port listener HTTP _GlassFish_.  
**LAUNCH_JBOSS_IN_BACKGROUND** | + | WildFly | Mengaktifkan (_true_) atau menonaktifkan (_false_) peluncuran server aplikasi dalam mode latar belakang.  
**LSWS_MAX_CHILDREN** | + | LLSMP, LiteSpeed Web Server | Mengubah batas proses anak maksimum untuk server. Variabel ini disembunyikan secara default karena platform menetapkan nilai ini sama dengan jumlah inti CPU yang tersedia (biasanya memastikan operabilitas terbaik). Anda perlu menambahkan variabel ini secara manual dan me-restart server untuk mengubah nilai.  
**MASTER_HOST** | - | Semua | Nama host pendek untuk node master dalam layer.  
**MASTER_ID** | - | Semua | Pengidentifikasi node unik untuk node master dalam layer.  
**MASTER_IP** | - | Semua | Alamat IP internal untuk node master dalam layer.  
**MAVEN_DEPLOY_ARTIFACT** | + | Maven | Menentukan artefak yang akan dikirim (dapat diubah untuk proyek tertentu).  
**MAVEN_OPTS** | + | Maven | Mengatur parameter yang digunakan untuk menjalankan JVM dengan Maven dan dapat digunakan untuk menyuplai [opsi](<https://docs.dewacloud.com/docs/java-options-arguments/>) tambahan global.  
**MAVEN_RUN_ARGS** | + | Maven | Memungkinkan pengiriman beberapa argumen khusus untuk membangun aplikasi (dapat diubah untuk proyek tertentu).  
**MAX_OOM_REDUCE_CYCLES** | + | MySQL, MariaDB, Percona | Mengatur jumlah siklus maksimum untuk pengurangan _innodb_buffer_pool_size_ setelah restart yang disebabkan oleh OOM (_5_ kali secara default).  
**MY_RUBY_HOME** | - | Ruby | Jalur ke direktori tempat mesin _Ruby_ berada.  
**NODE_ENV** | - | Node.js | Menentukan environment di mana aplikasi berjalan (misalnya, _development_, _staging_, _production_, _testing_, dll.).  
**NODE_OPTIONS** | + | Node.js | Variabel untuk menentukan opsi runtime _v8_ pada Node.js.  
**NVM_DIR** | - | Node.js | Jalur ke lokasi instalasi _NVM_.  
**ON_ENV_INSTALL** | + (sebelum pembuatan env) | Semua | Skrip (atau tautan ke skrip) yang akan dijalankan setelah pembuatan environment.  
**OOM_ADJUSTMENT** | + | MySQL, MariaDB, Percona | Mendefinisikan nilai dalam %, MB, GB (_10%_ secara default) yang harus dikurangi pada parameter _innodb_buffer_pool_size_ setelah setiap restart yang disebabkan oleh OOM.  
**OOM_DETECTION_DELTA** | + | MySQL, MariaDB, Percona | Menetapkan periode (_2_ detik secara default) untuk platform menganalisis log setelah setiap restart layanan untuk memutuskan apakah itu disebabkan oleh OOM killer.  
**OPEN_INBOUND_PORTS (JELASTIC_PORTS)** | + (sebelum pembuatan env) | Semua | Menentukan port khusus yang harus dibuka di firewall selama pembuatan container.  
**PACKAGE_MANAGER** | + | Node.js | Variabel yang berisi nama [manajer paket](<https://docs.dewacloud.com/docs/nodejs-package-managers/>) untuk menginstal paket javascript (_npm_ atau _yarn_).  
**PACKAGE_MANAGER_OPTS** | + | Node.js | Opsi tambahan untuk manajer paket (lihat dokumentasi resmi [npm](<https://docs.npmjs.com/cli/install>) atau [yarn](<https://yarnpkg.com/lang/en/docs/cli/install/>)).  
**PATH** | - | Semua | Variabel shell default, dengan daftar jalur ke direktori dengan program yang dapat dijalankan.  
**PHP_MAX_EXECUTION_TIME** | + | PHP | Mengatur pengaturan _[max_execution_time](<https://www.php.net/manual/en/info.configuration.php#ini.max-execution-time>)_ PHP - waktu maksimum (dalam detik) sebelum mengakhiri skrip. _300_ detik secara default.  
**PHP_MEMORY_LIMIT** | + | PHP | Mengatur pengaturan _[memory_limit](<https://www.php.net/manual/en/ini.core.php#ini.memory-limit>)_ PHP - batas memori maksimum per skrip. Dapat diatur dalam persentase atau MB (_25%_ secara default; _-1_ untuk tidak terbatas).  
**PHPFPM_MAX_CHILDREN** | + | NGINX PHP | Mengatur jumlah proses anak pekerja untuk PHP-FPM. Secara default, ini sama dengan jumlah inti CPU yang tersedia untuk container (tetapi tidak kurang dari 2).  
**PORT_4848_TCP_PORT** | - | GlassFish (Payara) | Port untuk konsol admin.  
**PROCESS_MANAGER** | + | Node.js | Variabel untuk memilih [manajer proses](<https://docs.dewacloud.com/docs/nodejs-process-managers/>) di Node.js (misalnya, _npm_, _pm2_, _forever_).  
**PROCESS_MANAGER_FILE** | - | Node.js | Jalur ke file yang berisi opsi mulai untuk manajer proses.  
**PROXY_READ_TIMEOUT** | + | Penyeimbang beban NGINX, NGINX PHP | Mengatur waktu tunggu pembacaan (dalam detik) dari backend.  
**PSWD_FILE** | - | GlassFish (Payara) | Jalur ke file dengan kata sandi pengguna admin.  
**REDIRECT_EXCLUDE_PORTS** | + | Node.js | Mengecualikan port yang tercantum dari algoritma [pengalihan otomatis](<https://docs.dewacloud.com/docs/container-ports/#ports-auto-redirect>) (misalnya, _22,23,25,21,111,2049,8743,7979_).  
**REDIS_COMMANDER** | + | Redis | Menentukan apakah alat manajemen _Redis Commander_ harus _diaktifkan_ atau _dinonaktifkan_.  
**REDIS_ENABLED** | + | PHP | Mengaktifkan (_true_) atau menonaktifkan (_false_) caching objek dengan Redis. Diperlukan restart layanan untuk menerapkan perubahan.  
**REDIS_SENTINEL** | + | Redis | Menentukan apakah alat _Redis Sentinel_ untuk high-availability dan monitoring harus _diaktifkan_ atau _dinonaktifkan_.  
**ROOT_DIR** | - | Node.js | Menampilkan jalur ke direktori penyebaran aplikasi.  
**RUN_OPTION** | + | .NET Core | Menyediakan opsi _dotnet run_ tambahan untuk proyek Anda.  
**SERVER_WEBROOT** | - | LLSMP, LiteSpeed Web Server | Menampilkan jalur ke direktori penyebaran aplikasi.  
**STACK_NAME** | - | Semua | Nama stack saat ini.  
**STACK_PATH** | - | Direktori home dari stack.  
**STACK_USER** | - | Nama pengguna default stack.  
**STANDALONE_MODE_CONFIG** | + | WildFly | File konfigurasi untuk meluncurkan server [standalone WildFly](<https://docs.dewacloud.com/docs/wildfly/#standalone-mode>).  
**TCP_BALANCING** | + | HAProxy | Mengaktifkan (_true_) atau menonaktifkan (_false_) proxying dan penyeimbangan lalu lintas ke backend TPC.  
**UPDATE_PACKAGES_ON_RESTART** | + | Node.js | Mengaktifkan (_true_) atau menonaktifkan (_false_) instalasi paket otomatis setelah restart layanan _nodejs_. Jika tidak ada direktori _node_modules_ di dalam direktori _webroot_, pembaruan semacam itu akan dipanggil terlepas dari variabel ini.  
**UPSTREAM_KEEPALIVE** | + | Penyeimbang beban NGINX | Mengatur nilai direktif _[keepalive](<http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive>)_ untuk upstream.  
**VERT_SCALING** | + | Java | Menentukan apakah agen [GC default](<https://www.virtuozzo.com/company/blog/garbage-collection/>) di Java harus diaktifkan (_true_) atau dinonaktifkan (_false_).  
**WAF** | + | LLSMP, LiteSpeed Web Server | Mengaktifkan (_true_) atau menonaktifkan (_false_) Web Application Firewall dengan aturan default [Comodo](<https://waf.comodo.com/>) untuk _LiteSpeed Web Server_.  
**WEB_ROOT** | - | Go | Jalur ke aplikasi yang disebarkan.  
**WEBROOT** | - | PHP, Tomcat (TomEE), GlassFish (Payara) | Menampilkan jalur ke direktori penyebaran aplikasi.  
**WORKER_PROCESSES** | + | Penyeimbang beban NGINX | Mengatur jumlah proses pekerja - dapat dideteksi secara otomatis oleh NGINX (_auto_) atau diatur sama dengan jumlah inti CPU (_define_).  
**WP_PROTECT** | + | LLSMP, LiteSpeed Web Server, LiteSpeed ADC | Mengkonfigurasi tindakan untuk fitur [WordPress Brute Force Attack Protection](<https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection>) (_off|on|drop|deny|throttle|captcha_; _off_ secara default).  
**WP_PROTECT_LIMIT** | + | LLSMP, LiteSpeed Web Server, LiteSpeed ADC | Menetapkan batas untuk fitur [WordPress Brute Force Attack Protection](<https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection>) (_0|1|2-1000_; _10_ secara default).  

Atau gunakan kelompok yang dikategorikan di bawah ini untuk mempersempit pencarian.

**Catatan:** Variabel yang ditandai dengan “ _**+**_ ” dalam kolom **Dapat Diedit** dapat disesuaikan untuk mengkustomisasi container Anda. Namun, restart diperlukan untuk menerapkan perubahan.

Tidak **disarankan** untuk menyesuaikan variabel yang ditandai dengan “ _**-**_ ” karena tindakan semacam itu tidak akan menerapkan perubahan aktual pada container; namun, mungkin dapat merusak logika internal.

Ada sejumlah opsi yang dapat digunakan dengan semua [stack yang dikelola platform](<https://docs.dewacloud.com/docs/software-stacks-versions/>).

## Apa Selanjutnya? {#whats-next}

  * [Custom Environment Variables](<https://docs.dewacloud.com/docs/custom-environment-variables/>)
  * [Java Options and Arguments](<https://docs.dewacloud.com/docs/java-options-arguments/>)
  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)