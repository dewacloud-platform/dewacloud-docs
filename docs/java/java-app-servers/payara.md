---
sidebar_position: 4
slug: /payara
title: Payara
---

# GlassFish & Payara Auto-Clustering: Menjalankan Aplikasi High-Availabilty Jakarta EE  dalam Cloud 

# {#}

Memastikan pengiriman layanan yang bebas masalah 24/7 adalah salah satu area yang paling sering dibahas dalam cloud hosting selama beberapa tahun terakhir. Solusi yang sangat jelas dan sering digunakan di sini adalah membangun infrastruktur berkluster untuk proyek Anda.

Dengan bertujuan untuk membantu pelanggan kami menangani tugas yang tidak sepele dan menghemat waktu untuk aktivitas terkait proyek lainnya, kami menciptakan solusi khusus untuk ketersediaan tinggi, yang dirancang untuk memfasilitasi hosting aplikasi Jakarta EE – integrasi **Auto-Clustering** untuk server aplikasi **GlassFish** dan **Payara**.

Keuntungan utama dari solusi ini adalah adanya interkoneksi otomatis dari beberapa instans server aplikasi ketika ada perubahan topologi aplikasi, yang menerapkan konfigurasi clustering yang umum digunakan.

Jadi, artikel di bawah ini menjelaskan bagaimana auto-clustering Glassfish dan Payara bekerja, serta spesifikasi topologi infrastruktur dan cara Anda dapat mendapatkan lingkungan pengembangan dan produksi yang sesuai dalam Jelastic PaaS.

## Cara Kerja Auto-Clustering untuk GlassFish dan Payara{#how-the-auto-clustering-for-glassfish-and-payara-works}

Secara umum, setiap “solusi berkluster” dapat didefinisikan sebagai kumpulan instans yang terhubung yang menjalankan stack yang sama dan mengoperasikan data yang sama. Dengan kata lain, ini berarti server yang bersangkutan harus di-[skala horizontal](<https://docs.jelastic.com/horizontal-scaling/>) dan berbagi sesi pengguna.

Mulai dari versi Jelastic 5.5.3, fitur **Auto-Clustering** baru diperkenalkan yang memungkinkan untuk mengaktifkan klasterisasi instans GlassFish dan Payara langsung dalam wizard topologi:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-1.png" alt="auto clustering in cloud" width="100%"/>

Pilih server aplikasi _GlassFish_ atau _Payara_ pada tab **Java** di wizard. Kemudian, di bagian tengah, temukan dan aktifkan pengalih **_Auto-Clustering_** yang sesuai. Konfigurasikan pengaturan lain sesuai kebutuhan Anda termasuk [skala horizontal](<https://docs.jelastic.com/horizontal-scaling/>) untuk mendapatkan solusi yang andal sejak awal.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-2.png" alt="auto clustering in cloud" width="40%"/>

**Tip:** Fitur **_Auto-Clustering_** juga tersedia untuk beberapa template perangkat lunak lainnya (misalnya, [_MySQL_](<https://docs.dewacloud.com/company/blog/mysql-mariadb-database-auto-clustering-cloud-hosting/>), [_MariaDB_](<https://docs.dewacloud.com/company/blog/mysql-mariadb-database-auto-clustering-cloud-hosting/>), [PostgreSQL](<https://docs.dewacloud.com/company/blog/postgresql-auto-clustering-master-slave-replication/>), [Tomcat/TomEE](<https://docs.dewacloud.com/company/blog/tomcat-tomee-clustering-automation/>), [WildFly](<https://docs.dewacloud.com/company/blog/wildfly-managed-domain-automatic-clustering-scaling/>), [Shared Storage](<https://docs.jelastic.com/shared-storage-container/>), [MongoDB](<https://docs.dewacloud.com/company/blog/mongodb-auto-clustering/>), dan [_Couchbase_](<https://docs.jelastic.com/auto-clustering/#couchbase>)).

Berdasarkan tujuan lingkungan Anda, Anda dapat mempertimbangkan untuk tidak menggunakan _Auto-Clustering_ (misalnya, selama pengembangan). Dengan cara ini, server tunggal reguler akan dibuat tanpa mengkonfigurasi kluster.

Untuk produksi, klasterisasi adalah pilihan yang hampir wajib untuk memastikan ketersediaan tinggi aplikasi Anda dan pengalaman yang mulus/tidak terganggu bagi pelanggan. Penggunaan _Auto-Clustering_ oleh Jelastic adalah cara termudah untuk mengimplementasikan topologi yang handal untuk layanan Anda tanpa perlu mengonfigurasi apa pun secara manual. Berikut adalah beberapa penyesuaian yang berlaku:

- _untuk 2+ instans GlassFish (Payara)_, topologi lingkungan dilengkapi dengan load balancer (LB), yang dimaksudkan untuk menangani permintaan yang masuk dan mendistribusikannya ke seluruh pekerja
- Node tambahan Domain Administration Server ([**DAS**](<https://docs.oracle.com/cd/E19159-01/819-3680/abfbb/index.html>)) ditambahkan secara otomatis - instans yang didedikasikan untuk melakukan kontrol terpusat atas node kluster dan untuk mengkonfigurasi interaksi antar mereka melalui SSH. Integrasinya mencakup sejumlah spesifikasi:
  - server administrasi ditautkan ke semua pekerja dalam lapisan server aplikasi dengan hostname alias _DAS_, yang dapat digunakan oleh pekerja untuk interaksi lebih lanjut
  - untuk memungkinkan konektivitas dan kontrol node yang tepat, sistem secara otomatis menghasilkan pasangan kunci SSH untuk node DAS dan meletakkannya dalam sebuah [volume](<https://docs.jelastic.com/container-volumes/>), yang dipasang di semua instans kluster lainnya

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-3.png" alt="auto clustering topology" width="100%"/>

## Implementasi Replikasi Sesi{#session-replication-implementation}

Untuk memastikan ketersediaan tinggi dari clustering GlassFish/Payara Anda, Jelastic PaaS secara otomatis mengkonfigurasi replikasi sesi di seluruh node pekerja. Dengan cara ini, semua data sesi pengguna, yang disimpan selama pemrosesan, didistribusikan di semua instans server aplikasi dari node yang benar-benar menangani permintaan.

Bersama dengan mekanisme sticky sessions yang secara otomatis dikonfigurasi pada lapisan [load balancer](<https://docs.jelastic.com/shared-load-balancer/>), replikasi sesi memastikan hosting dengan keandalan yang ditingkatkan dan meningkatkan kemampuan failover aplikasi Anda dalam kluster GlassFish atau Payara semacam itu. Berikut ini adalah cara pendekatan yang digunakan untuk setiap stack akan sedikit berbeda - mari kita tinjau masing-masing pendekatan secara lebih detail.

### Replikasi Sesi GlassFish dengan GMS{#glassfish-session-replication-with-gms}

Di dalam kluster GlassFish, replikasi sesi didukung oleh Layanan Manajemen Kelompok ([**GMS**](<https://docs.oracle.com/cd/E19879-01/821-0182/gjfnl/index.html>)) – sebuah komponen bawaan server aplikasi yang memastikan perlindungan failover, replikasi dalam memori, dan layanan transaksi serta timer untuk instans kluster.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-4.png" alt="glassfish session replication" width="100%"/>

GMS menggunakan [**TCP** tanpa multicast](<https://docs.oracle.com/cd/E26576_01/doc.312/e24934/clusters.htm#GSHAG485>) untuk mendeteksi instans kluster. Ketika node baru bergabung dengan kluster GlassFish, sistem mendeteksi ulang semua pekerja yang sedang berjalan dan node DAS - mekanisme [penemuan otomatis](<https://docs.oracle.com/cd/E26576_01/doc.312/e24934/clusters.htm#CHDIGFCG>) tersebut diterapkan melalui properti **GMS_DISCOVERY_URI_LIST** yang diatur ke nilai **_generate_**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-5.png" alt="glassfish cluster properties" width="100%"/>

### Replikasi Sesi Payara dengan Hazelcast{#payara-session-replication-with-hazelcast}

Replikasi sesi dalam kluster Payara didasarkan pada Hazelcast, yang memiliki manfaat tambahan yaitu sesuai dengan JCache dan menyediakan persistensi sesi Web dan EJB terpasang. Grid data dalam memori ini secara otomatis diaktifkan di semua instans Payara untuk menemukan anggota kluster lingkungan Anda melalui **TCP** tanpa multicast.

Untuk memungkinkan replikasi sesi, Anda harus terlebih dahulu mengaktifkan ketersediaan kontainer web. Hal ini memungkinkan properti kontainer web yang dikelola seperti sesi untuk digunakan di beberapa instans dengan konfigurasi yang sama.

Dalam Payara Server 4, Anda harus mengaktifkan Hazelcast dan secara manual mengkonfigurasi keterjangkauan. Ini semua disetel secara default di Payara 5 saat ini. Jika sudah mengubah konfigurasi apa pun, pastikan layanan keterjangkauan diaktifkan dan jenis penyimpanannya adalah "hazelcast" pada halaman aksesibilitas kontainer web.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-6.png" alt="payara cluster hazelcast" width="100%"/>

Untuk mengelola pengaturan Hazelcast, akseslah Konsol Administrasi dan kunjungi halaman konfigurasi [Domain Data Grid](<https://docs.payara.fish/enterprise/docs/documentation/payara-server/hazelcast/configuration.html>). Fitur Domain Data Grid Payara didasarkan pada pustaka Hazelcast. Ini menyediakan fungsi yang dibutuhkan untuk deployment group (fungsi clustering), fungsi caching, objek cluster CDI tunggal dan pemantauan penyimpanan data di Payara.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-7.png" alt="payara hazelcast configuration" width="100%"/>

## Menerapkan Aplikasi Contoh untuk Uji HA{#deploy-example-application-for-ha-testing}

Sekarang, mari kita periksa ketersediaan tinggi dari kluster yang tersusun otomatis semacam itu dengan contoh server GlassFish yang diskalakan. Untuk memastikan toleransi kesalahannya, kita akan menerapkan aplikasi uji khusus, yang memungkinkan kita menambahkan beberapa data sesi khusus dan melihat informasi rinci tentang server yang menangani sesi ini. Dengan cara ini, penghentian instans kluster tertentu memungkinkan kita memastikan bahwa sesi pengguna yang sudah berjalan akan terus diproses meskipun server yang bersangkutan mengalami kegagalan. Jadi, mari kita lihat ini secara praktis.

1\. Klik **Open in browser** di samping lingkungan Anda untuk mengakses halaman awal server aplikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-8.png" alt="glassfish cluster application" width="100%"/>

Di halaman yang terbuka, pilih referensi **go to the Administration Console** dan masuk dengan kredensial yang diberikan kepada Anda melalui email saat pembuatan lingkungan.

2\. Beralih ke bagian **Applications** dan unggah aplikasi [clusterjsp.ear](<https://raw.githubusercontent.com/jelastic-jps/glassfish/master/glassfish-cluster/test-app/clusterjsp.ear>) ke lokasi **Packaged File to Be Uploaded to the Server**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-9.png" alt="glassfish cluster deploy" width="100%"/>

3\. Periksa untuk memastikan **Availability** diaktifkan dan atur **_cluster1_** sebagai target aplikasi, lalu klik **OK** untuk melanjutkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-10.png" alt="glassfish payara targets" width="100%"/>

4\. Sekarang, buka lingkungan di browser dan tambahkan **_/clusterjsp_** ke URL.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-11.png" alt="glassfish payara ha" width="100%"/>

Beri Nama dan Nilai khusus untuk atribut sesi Anda sendiri dan klik **Add Session Data**.

5\. Kembali ke panel admin dan navigasi ke tab **Clusters > cluster1 > Instances**. Di sini, pilih dan **Stop** instans yang sesi Anda sedang berjalan (namanya di lingkaran pada gambar di atas).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-12.png" alt="glassfish cluster test" width="100%"/>

6\. Kembali ke aplikasi kami dan **Reload Page** dengan tombol yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-13.png" alt="glassfish cluster success" width="100%"/>

Seperti yang Anda lihat, meskipun sesi diurus oleh instans lain, atribut khusus kami masih ditampilkan.

**Tip:** Semua pengaturan replikasi tersedia di bagian admin server **Configurations > cluster1-config > Availability Service**. Di sini, Anda dapat melihat mode replikasi berikut yang diaktifkan secara default:

- _Web Container Availability_
- _EJB Container Availability_

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-14.png" alt="glassfish replication settings" width="100%"/>

## Kloning Kluster untuk Pengujian A/B{#cloning-cluster-for-ab-testing}

Saat merilis versi aplikasi baru atau sekadar menerapkan beberapa penyesuaian penting, merupakan praktik yang baik untuk memeriksa bagaimana perubahan yang baru diterapkan dapat memengaruhi kerja layanan dan ketertarikan pengguna Anda. Jelastic PaaS memungkinkan Anda melakukan pengujian seperti itu ‘secara cepat’ (yaitu tanpa waktu henti layanan dan secara tidak langsung untuk pelanggan Anda) dengan opsi **Clone Environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-15.png" alt="glassfish cluster cloning" width="100%"/>

Hasilnya, salinan kluster siap pakai akan dibuat, dengan semua modifikasi yang diperlukan sudah diterapkan. Lebih tepatnya, ini berarti bahwa node DAS yang dikloning beroperasi dengan pekerja yang dikloning yang sudah terdaftar dalam panel adminnya, dan semua aplikasi dari lingkungan asli di-deploy juga ke lingkungan yang dikloning tersebut. Oleh karena itu, satu-satunya yang tersisa bagi Anda adalah memeriksa ulang kode aplikasi & konfigurasi server khusus untuk IP/domain yang dikodekan secara keras dan memperbaikinya sesuai, jika ada.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-16.png" alt="glassfish clusters" width="100%"/>

Dengan cara ini, Anda dapat menerapkan perubahan yang dimaksudkan ke salinan lingkungan Anda tanpa mempengaruhi lingkungan produksi yang sebenarnya.

Selanjutnya, Anda juga dapat mengevaluasi produktivitas dan efektivitas versi aplikasi yang dimodifikasi dibandingkan dengan yang saat ini asli, yaitu melakukan apa yang disebut _A/B Testing_. Di Jelastic PaaS, ini dapat diimplementasikan dengan add-on [Traffic Distributor](<https://docs.jelastic.com/traffic-distributor/>) tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/payara/payara-17.png" alt="glassfish traffic distributor" width="40%"/>

Diletakkan di depan sepasang lingkungan dengan mode _Sticky Sessions_ yang dipilih, ini menyediakan routing cerdas dari permintaan yang masuk sesuai dengan bobot backend yang dinyatakan. Untuk detail lebih lanjut tentang konfigurasi TD yang tepat dalam kasus ini, lihat panduan [A/B Testing](<https://docs.jelastic.com/ab-testing/>).

### ...dan Beberapa Tips Berguna untuk Clustering GlassFish & Payara{#and-a-few-useful-tips-for-glassfish-payara-clustering}

Ketika kluster GlassFish atau Payara Anda sudah diatur dan Anda telah memastikan semuanya berfungsi seperti yang diharapkan, Anda juga dapat mempertimbangkan petunjuk di bawah ini untuk mendapatkan efisiensi maksimal dari menjalankannya di dalam Jelastic Cloud dengan fungsionalitas platform yang luas:

- Untuk konsumsi sumber daya yang dioptimalkan, atur [pemicu penskalaan otomatis](<https://docs.jelastic.com/automatic-horizontal-scaling/>) dalam pengaturan lingkungan Anda sehingga node akan secara otomatis ditambahkan/dihapus dalam sebuah kluster tergantung pada beban yang masuk.
- Untuk koneksi dengan [stack perangkat lunak database](<https://docs.jelastic.com/software-stacks-versions/#databases>) apa pun, kluster memerlukan perpustakaan yang sesuai yang sedang diintegrasikan ke server Administrasi - yang paling populer tersedia secara default di semua node GF/Payara yang baru dibuat. Dan jika beroperasi dengan instans lama, pastikan direktori DAS _/opt/glassfish/glassfish/domains/domain1/lib_ berisi file yang sesuai (jika tidak - cukup unggah ke lokasi yang disebutkan secara manual).

Kami berharap penjelasan detail implementasi kluster GlassFish & Payara yang dijelaskan cukup meyakinkan bagi Anda untuk memutuskan bahwa solusi ini adalah apa yang Anda butuhkan. Cobalah dengan membuat kluster Anda sendiri di salah satu [Platform Cloud Jelastic](<https://jelastic.cloud/>) selama periode percobaan gratis.