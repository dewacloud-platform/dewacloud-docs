---
sidebar_position: 5
slug: /java-garbage-collector
title: Java Garbage Collector
---

# Tipe dan Pengaturan Pengumpulan Sampah Java di Jelastic PaaS

![java gc](#)

Performa dan harga adalah dua pertimbangan besar dalam hosting aplikasi yang selalu diperhatikan. Dan, sering kali, kita bertanya pada diri sendiri bagaimana cara mengurangi pengeluaran tanpa mempengaruhi performa aplikasi Anda pada saat yang sama. Dalam artikel ini, kami ingin membahas manajemen memori otomatis untuk aplikasi Java yang dihosting dengan Jelastic menggunakan garbage collection.

Mari kita klarifikasi apa itu garbage collection, apa yang dilakukan untuk aplikasi Java, dan bagaimana ia bekerja dalam Jelastic PaaS.

## Java Garbage Collection Overview{#java-garbage-collection-overview}

**Garbage Collection** adalah bentuk manajemen memori otomatis. Tujuannya adalah menemukan objek data dalam memori yang tidak lagi dibutuhkan dan membuat ruang mereka tersedia untuk digunakan kembali.

Objek yang dibuat menggunakan sebagian memori yang tetap dialokasikan hingga ada referensi untuk penggunaan objek tersebut. Ketika tidak ada referensi untuk suatu objek, itu dianggap tidak diperlukan lagi dan memori yang ditempati oleh objek dapat diklaim kembali. Dengan demikian, Anda tidak membayar untuk sumber daya yang tidak digunakan dan dapat mengurangi biaya Anda.

Kami telah [mengujicoba berbagai jenis Garbage Collectors (GC)](<https://www.virtuozzo.com/company/blog/tuning-garbage-collector-java-memory-usage-optimization/>) dan mendefinisikan yang paling cocok untuk aplikasi Java yang dihosting di cloud kami, dengan mempertimbangkan skala vertikal otomatis yang disediakan oleh Jelastic. Sebagai hasil dari penyelidikan kami, kami menyesuaikan pengaturan default Garbage Collectors di Jelastic untuk meningkatkan manfaat bagi pengguna kami.

![java-garbage-collector-types](#)

Jelastic mendukung GC berikut:

  * _**G1 GC (-XX:+UseG1GC)**_ adalah GC default di Jelastic PaaS. Garbage-First (G1) adalah Garbage Collector dengan gaya server untuk mesin multiprosesor dengan jumlah memori yang besar. Heap dibagi menjadi bagian-bagian dengan ukuran tetap dan G1 melacak data hidup di bagian-bagian tersebut. Ketika Garbage Collection diperlukan, ia memungut dari bagian-bagian dengan data hidup lebih sedikit terlebih dahulu.

  * **_Shenandoah GC (-XX:+UseShenandoahGC)_** adalah garbage collector yang berjalan bersamaan untuk JVM. "Concurrent" berarti bahwa GC mencoba melakukan sebagian besar aktivitas secara paralel tanpa mengganggu performa aplikasi. Paralelisme semacam itu membuat jeda "stop-the-world" (STW) sangat singkat yang merupakan tugas paling diperlukan untuk setiap GC. Keuntungan inheren lainnya adalah bekerja secara efisien dengan heap kecil dan besar tanpa dampak panjang pada jeda STW. The _Shenandoah GC_ menggunakan opsi tambahan [**_-XX:ShenandoahGCHeuristics=compact_**](<https://wiki.openjdk.java.net/display/shenandoah/Main#Main-Heuristics>).

  * _**ZGC**_ **_(-XX:+UseZGC)_** adalah garbage collector yang dapat diskalakan dengan latensi rendah. Dirancang untuk digunakan dengan aplikasi yang memerlukan heap besar dan latensi rendah. Ini menggunakan beberapa generasi dan melakukan sebagian besar (tetapi tidak semua) garbage collection di paralel dengan kerja aplikasi yang tidak terganggu. Ini sangat membatasi dampak garbage collection terhadap waktu respons aplikasi Anda. The _ZGC_ menggunakan opsi tambahan **_-XX:ZCollectionInterval=$ZCOLLECTION_INTERVAL_** untuk menetapkan interval maksimum (dalam detik) antara dua siklus GC (dapat diubah melalui variabel **_ZCOLLECTION_INTERVAL_** [variable](<https://docs.jelastic.com/container-variables/>)).

  * _**Epsilon GC** _**_(-XX:+UseEpsilonGC)_** adalah GC pasif yang menangani alokasi memori dan tidak membersihkannya ketika objek tidak lagi digunakan. Ketika aplikasi Anda menghabiskan heap Java, JVM turun. Jadi, EpsilonGC memperpanjang hidup aplikasi hingga memori habis dan membuang memori, yang dapat berguna untuk debugging penggunaan memori aplikasi, serta mengukur dan mengelola performa aplikasi.

  * _**Parallel**_
    * **_ParNew GC_** _(_**_-XX:+UseParNewGC)_** adalah Garbage Collector multithreaded "stop-the-world". Kebanyakan ditujukan untuk mengumpulkan objek generasi muda. Karena biasanya generasi muda berukuran kecil, ParNew melakukan pengumpulan dengan sangat cepat dan tidak terlalu mempengaruhi aplikasi Anda. Selain itu, ParNew memiliki kompaksi RAM yang tidak terpakai yang memungkinkan dukungan skala vertikal otomatis - salah satu fitur Jelastic yang menonjol.
    * _**Parallel GC** **(-XX:+UseParallelGC)**_ digunakan ketika metode pengumpulan paralel diperlukan hanya untuk generasi muda. Tidak dapat diterapkan bersama dengan _ConcMarkSweep GC_ secara bersamaan seperti _ParNew GC_.

    * _**Parallel Old GC** (**-XX:+****UseParallelOldGC)**_ memanfaatkan algoritma "mark dan compact" paralel yang menangkap semua thread aplikasi dan kemudian menangani pelabelan dan kompaksi selanjutnya dengan beberapa thread garbage collector.
  * **_ConcMarkSweep GC (_****_-XX:+UseConcMarkSweepGC)_** collector dirancang untuk aplikasi yang lebih memilih jeda garbage collection yang lebih pendek dan yang dapat mengalokasikan sumber daya prosesor dengan garbage collector saat aplikasi berjalan. Lebih masuk akal menggunakan pengumpul semacam itu ketika persyaratan aplikasi untuk waktu jeda garbage collection rendah.
  * __**_Serial GC (-XX:+UseSerialGC)_** melakukan garbage collection dalam satu thread dan memiliki konsumsi memori terendah di antara semua jenis GC tetapi, pada saat yang sama, membuat jeda panjang yang dapat menyebabkan degradasi performa aplikasi.

**Catatan:** Mesin Java **_Openj9_** _tidak_ mendukung GCs yang tercantum di atas. Pilihan berikut tersedia untuk instansi Openj9 sebagai gantinya:

  * [-XX:+IdleTuningCompactOnIdle](<https://www.eclipse.org/openj9/docs/xxidletuningcompactonidle/>)

  * [-XX:+IdleTuningGcOnIdle](<https://www.eclipse.org/openj9/docs/xxidletuninggconidle/>)

  * [-XX:IdleTuningMinIdleWaitTime=180](<https://www.eclipse.org/openj9/docs/xxidletuningminidlewaittime/>)

  * [-Xjit:waitTimeToEnterDeepIdleMode=50000](<https://www.eclipse.org/openj9/docs/xjit/>)

## Default JVM Options in Jelastic PaaS{#default-jvm-options-in-jelastic-paas}

Secara default Jelastic PaaS menggunakan G1 GC untuk JVM versi 8+. Untuk versi yang lebih rendah, ia menggunakan ParNew GC. Juga, untuk versi JVM di bawah 12 Jelastic melampirkan [jelastic-gc-agent.jar](<https://github.com/jelastic-jps/java-memory-agent>) yang memungkinkan skala vertikal untuk rilis yang lebih lama.

Untuk versi JVM 12+, platform menyediakan [integrated vertical scaling](<https://www.virtuozzo.com/company/blog/elastic-jvm-vertical-scaling/>) untuk memastikan pemicu G1 dengan variabel [variables](<https://docs.jelastic.com/container-variables/>) berikut yang sudah diatur:

  * **G1PERIODIC_GC_INTERVAL=3000**  
Interval antara garbage collection dalam milidetik (15 menit secara default)

  * **GC_SYS_LOAD_THRESHOLD_RATE=0.3**  
Custom multiplier untuk menyesuaikan G1PeriodicGCSystemLoadThreshold value

  * **G1PERIODIC_GC_SYS_LOAD_THRESHOLD=\{CPU_cores_number\}*GC_SYS_LOAD_THRESHOLD_RATE**_  
Mengaktifkan garbage collection, jika load rata-rata satu menit sistem di bawah nilai yang ditetapkan. Kondisi ini diabaikan jika diatur sebagai nol.

![java garbage collection variables for scaling](#)

Anda dapat memeriksa pengaturan saat ini dari proses Java Anda dengan menjalankan **_ps -ax | grep java_**._ Anda akan melihat sesuatu seperti ini: _

**_/usr/java/libericajdk-12.0.1/bin/java.orig -server -XX:G1PeriodicGCSystemLoadThreshold=0.6 -XX:G1PeriodicGCInterval=900k -XX:+UseStringDeduplication -XX:+UseG1GC -Xmaxf0.3 -Xminf0.1 -Xmx1638M -Xmn30M -Xms32M -jar jelastic-helloworld-1.1.war_**

Jelastic juga secara otomatis mengkonfigurasi parameter berikut:

  * **_Xmx_** \- 80% dari total RAM yang tersedia dalam container
  * **_Xms_** \- 32MB
  * **_Xmn_** \- 30MB

Jika versi JVM lebih tinggi dari 12, platform juga mengkonfigurasi opsi Java berikut:

  * **_G1PeriodicGCSystemLoadThreshold=CPU_COUNT*0.3_**  
30% dari rata-rata beban berdasar jumlah core CPU yang tersedia dalam container

  * **_G1PeriodicGCInterval=900k_**  
15 menit harus berlalu sejak jeda garbage collection sebelumnya

Untuk lebih detail, Anda dapat meninjau skrip berikut yang mengelola [konfigurasi otomatis opsi Java](<https://github.com/jelastic-jps/java-memory-agent/blob/master/scripts/memoryConfig.sh>).

## Customization of GC Settings in Jelastic PaaS{#customization-of-gc-settings-in-jelastic-paas}

Jika Anda percaya bahwa penyesuaian pengaturan default dapat meningkatkan performa atau konsumsi memori, Anda dapat menyesuaikannya sesuai kebutuhan aplikasi Anda. Kami merekomendasikan hanya menyesuaikan konfigurasi ini jika Anda sepenuhnya memahami dampak perubahan tersebut terhadap perilaku aplikasi Anda.

Anda dapat mengatur parameter GC kustom berdasarkan kebutuhan aplikasi Anda melalui [Environment Variables](<https://docs.jelastic.com/environment-variables/>) (harap jangan mencampurnya dengan opsi Java).

![java garbage collection variables](#)

  * **_JAVA_OPTIONS and JAVA_TOOL_OPTIONS** \- silakan [baca lebih lanjut tentang opsi-opsi ini](<https://stackoverflow.com/questions/28327620/difference-between-java-options-java-tool-options-and-java-opts>).  
Java options dapat digunakan untuk mengubah jenis GC default, misalnya:
__JAVA_OPTIONS="-XX:+UseShenandoahGC"_ 

  * **GC_DEF** \- tipe Garbage Collector, misalnya GC_DEF=G1GC
  * **XMX_DEF_PERCENT** \- persentase RAM yang akan disediakan sebagai XMX, misalnya XMX_DEF_PERCENT=80
  * **XMX_DEF** (atau hanya XMX) - ukuran maksimum untuk memori heap Java, misalnya jika total RAM adalah 2048Mb maka XMX_DEF=1638
  * **XMS_DEF** (atau hanya XMS) - ukuran awal heap java, misalnya XMS=32M
  * **XMN_DEF** \- ukuran heap untuk generasi muda, misalnya XMN=30M
  * **G1PERIODIC_GC_INTERVAL** _(untuk openJDK 12/13 saja)_ - frekuensi G1 Periodic Collection dalam milidetik (G1PeriodicGCInterval - 15 menit secara default); set sebagai 0 untuk menonaktifkan, G1PERIODIC_GC_INTERVAL=900
  * **G1PERIODIC_GC_SYS_LOAD_THRESHOLD**(untuk openJDK 12/13 saja) \- memungkinkan pelaksanaan G1 Periodic Collection, jika rata-rata beban satu menit sistem di bawah nilai yang ditetapkan; Kondisi ini diabaikan jika diatur sebagai nol. Secara default, itu sama dengan \{CPU_cores_number\}*\{GC_SYS_LOAD_THRESHOLD_RATE\}
  * **GC_SYS_LOAD_THRESHOLD_RATE**(untuk openJDK 12/13 saja) \- multiplier kustom untuk secara fleksibel menyesuaikan nilai G1PeriodicGCSystemLoadThreshold (0.3 secara default), misalnya G1PERIODIC_GC_SYS_LOAD_THRESHOLD_RATE=0.3
  * **FULL_GC_AGENT_DEBUG** \- mengaktifkan (true) atau menonaktifkan (false) mode debug untuk melacak proses GC Java di log, misalnya FULL_GC_AGENT_DEBUG=true
  * **FULL_GC_PERIOD** \- Menetapkan interval (dalam detik) antara panggilan GC penuh; 900 secara default, yaitu 15 menit, misalnya FULL_GC_PERIOD=900
  * **MAXPERMSIZE** \- secara otomatis didefinisikan hanya untuk kontainer Java yang menjalankan JVM versi lebih rendah dari kedelapan dan dengan jumlah RAM yang dialokasikan > _800 MiB_. Dalam semua kasus lain (yaitu, jika batas skala container kurang dari 7 [cloudlets](<https://docs.jelastic.com/cloudlet/>) atau menggunakan Java 8) parameter ini diabaikan. Nilai sesungguhnya dari pengaturan _MaxPermSize_ dihitung berdasarkan jumlah memori _Xmx_ dibagi sepuluh, tetapi tidak dapat ditetapkan lebih besar dari maksimum _256 MiB_. Misalnya, MAXPERMSIZE=163
  * **XMINF_DEF** \- parameter ini mengontrol ruang bebas minimum dalam heap dan mengarahkan JVM untuk memperluas heap jika setelah melakukan garbage collection tidak memiliki setidaknya nilai_ XMINF_DEF dari ruang bebas. Misalnya, XMINF_DEF=0.1
  * **XMAXF_DEF** \- parameter ini mengontrol bagaimana heap diperluas dan mengarahkan JVM untuk mengompakkan heap jika jumlah ruang bebas melebihi _nilai XMAXF_DEF_. Misalnya, XMAXF_DEF=0.3

Sebagai alternatif, semua parameter ini dapat diteruskan ke proses Java melalui **variables.conf** dalam container.

Semua jalur ke konfigurasi, file yang dapat dieksekusi, atau file log dapat berbeda berdasarkan server Java yang Anda gunakan dan dapat diakses melalui [Configuration File Manager](<https://docs.jelastic.com/configuration-file-manager/>) atau [SSH](<https://docs.jelastic.com/ssh-access/>).

**Nama Server Aplikasi Java** |  **Path ke variables.conf**  
---|---  
Tomcat/TomEE |  /opt/tomcat/conf/variables.conf  
GlassFish |  /opt/glassfish/glassfish/domains/domain1/config/variables.conf  
Spring Boot  |  /home/jelastic/conf/variables.conf  
WildFly |  /opt/wildfly/conf/variables.conf  
Payara |  /opt/payara/glassfish/domains/domain1/config/variables.conf  
SmartFoxServer |  /opt/repo/versions/2X/SmartFoxServer_2X/SFS2X/config/variables.conf or /opt/shared/smartfox/2X/SmartFoxServer_2X/SFS2X/config/variables.conf  
Java Engine |  /home/jelastic/conf/variables.conf  
Jetty |  /opt/jetty/etc/variables.conf  or  /opt/shared/conf/etc/variables.conf  
  
1\. Buka file **Conf** untuk mengkonfigurasi server Java Anda.

![java garbage collection configurations](#)

2\. Untuk Tomcat, navigasikan ke file **opt** >**tomcat** >**conf** >**variables.conf**.

![java garbage collection configurations](#)

3\. Dalam file **variables.conf** yang terbuka Anda dapat menimpa pengaturan default garbage collector atau bahkan menambahkan GC lain untuk menggantikan yang default _(G1)_**._** Jadi jika Anda ingin menggunakan _ShenandoahGC_ sebagai gantinya, cukup tambahkan ke _variables.conf_ seperti yang tertera dalam contoh berikut:

**_-XX:+UseShenandoahGC_**

![java garbage collection change GC](#)

4\. Setelah ini, hanya garbage collector yang ditentukan yang akan digunakan saat memulai server Java Anda tanpa memperhitungkan jumlah sumber daya yang dialokasikan.

5\. Selain itu, Anda dapat mengontrol bagaimana JVM menangani memori heapnya dengan opsi JAVA lain yang tertera di file ini.

![java garbage collection heap memory](#)

Akibat dari opsi yang dikonfigurasi dengan benar, GC dapat diamati dalam tindakan melalui tab [Statistics](<https://docs.jelastic.com/view-app-statistics/>).

![java garbage collection statistics](#)

Itulah itu! Nikmati efisiensi sumber daya saat menjalankan aplikasi Java Anda di cloud. Coba sendiri dengan [Jelastic Multi-Cloud PaaS](<https://jelastic.cloud/>).

### Baca Juga

#### [Java Cloud Hosting: Elasticity and Flexibility in a Turnkey PaaS](<https://www.virtuozzo.com/company/blog/java-hosting-paas/>)

#### [Elastic JVM with Automatic Vertical Memory Scaling](<https://www.virtuozzo.com/company/blog/elastic-jvm-vertical-scaling/>)

#### [Jelastic Extended Support of Java Runtimes: AdoptOpenJDK, Liberica, Zulu, Corretto, OpenJ9 and GraalVM](<https://www.virtuozzo.com/company/blog/adoptopenjdk-liberica-zulu-corretto-openj9-graalvm/>)