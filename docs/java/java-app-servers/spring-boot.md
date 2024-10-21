---
sidebar_position: 6
slug: /spring-boot
title: Spring Boot
---

  
<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-1.png" alt="spring boot monitoring" width="10%"/>

Sejak awal berdirinya, Jelastic PaaS telah mengedepankan ide untuk membuat
proses deployment aplikasi menjadi semudah dan sesederhana mungkin. Mengikuti
misi kami, hari ini kami dengan gembira memperkenalkan pendatang baru dalam
keluarga teknologi berbasis Java yang sudah teruji - server [Spring
Boot](<https://spring.io/projects/spring-boot>) untuk aplikasi mandiri dan
berkluster atau microservices.

Dengan template stack Spring Boot dari Jelastic, Anda dapat dengan mudah
menjalankan berbagai aplikasi berbasis Java di dalam cloud melalui antarmuka
grafis yang mudah digunakan atau skrip otomatisasi. Jenis proyek Java berikut
dapat di-host pada server ini:

  * _JAR_ \- untuk aplikasi Java mandiri atau instance microservice stateless, yang dibuat menggunakan framework [Spring Boot](<https://spring.io/projects/spring-boot>), [Dropwizard](<https://www.dropwizard.io/en/latest/>) atau [Spark](<http://sparkjava.com/>)
  * _WAR_ \- untuk aplikasi web dengan kontainer servlet yang terintegrasi

Dengan cara ini, Spring Boot memungkinkan Anda untuk tetap portabel, sementara Jelastic
memastikan pengiriman aplikasi ke produksi secara cepat dan pengelolaan yang komprehensif melalui GUI, API, atau [Cloud
Scripting](<https://docs.cloudscripting.com/>).

## Pembuatan Lingkungan Spring Boot{#creation-of-spring-boot-environment}

Jadi, masuklah ke [dashboard Jelastic Cloud](<https://jelastic.cloud/?utm_source=jelastic-blog&utm_medium=article utm_campaign=Hosting-Spring-Boot-Applications>) Anda dan mari kita mulai.

1\. Pertama-tama, Anda perlu membuat **Lingkungan Baru** - gunakan tombol yang sama
untuk meluncurkan wizard topologi. Pindahlah ke tab bahasa **Java** dan pilih template **Spring Boot** dalam lapisan server aplikasi di
panel sebelah kiri seperti yang ditunjukkan di bawah ini. Tetapkan jumlah [sumber daya yang dialokasikan](<https://docs.jelastic.com/automatic-vertical-scaling/>), ketik nama lingkungan Anda, dan klik **Create** untuk melanjutkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-2.png" alt="spring boot application cloud hosting" width="100%"/>

2\. Ketika lingkungan baru Anda muncul di dashboard, Anda bisa mengklik **Buka
di Browser** untuk meluncurkan sampel aplikasi Hello World yang sudah diinstal sebelumnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-3.png" alt="spring boot open in browser" width="100%"/>

Dengan cara ini, Anda dapat memastikan instance Spring Boot Anda berfungsi dan berjalan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-4.png" alt="spring boot default site" width="100%"/>

Sekarang, mari kita pertimbangkan bagaimana mengintegrasikan aplikasi Java kustom Anda ke dalam
lingkungan Spring Boot yang telah dibuat.

## Deployment Aplikasi Java ke Spring Boot{#deploying-java-applications-to-spring-boot}

Untuk meluncurkan proyek Spring Boot Anda di dalam Jelastic, Anda perlu terlebih dahulu
mengemasnya ke dalam arsip eksekusi dengan semua kelas yang sudah dikompilasi dan
sumber daya terkait di dalamnya (termasuk kontainer servlet yang terintegrasi untuk
menangani aplikasi yang berdiri sendiri). Jenis arsip berikut didukung:

  * **_JAR_** \- jenis arsip Java yang paling umum; harus berisi manifest dengan kelas entry point yang dinyatakan atau dibangun sebagai JAR “fat” semua-dalam-satu atau file JAR yang tersemat
  * ** _WAR_** \- untuk deployment aplikasi dengan kontainer servlet terintegrasi; khususnya, harus digunakan untuk proyek berbasis JSP untuk mengatasi masalah [dukungan](<https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-jsp-limitations>) yang dikenal dalam Spring Boot

### Paket ZIP{#zip-bundle}

Secara default, setiap file JAR eksekusi yang dibuat oleh Spring Boot, mengandung file properti dan pengaturan tambahan. Namun, dalam hal deployment produksi, lebih
nyaman untuk mendistribusikan file-file ini di luar arsip yang dikemas.
Misalnya, ini dapat diterapkan untuk file properti konfigurasi eksternal
(_application.property_ , _application.yml_) atau konfigurasi logging
(_log4j2.properties_ , _logback.xml_).

Untuk menyederhanakan deployment aplikasi dalam kasus ini, Jelastic mendukung
deployment paket ZIP, yang dapat berisi file JAR eksekusi dan file atau direktori
tambahan apa pun.

Saat membongkar paket ZIP, Jelastic memproses semua folder yang disertakan untuk
mendeteksi JAR yang dapat dijalankan. Untuk dianggap sebagai titik eksekusi, file JAR
harus berisi deklarasi _Main-Class_ di dalam file manifest **_META-INF/MANIFEST.MF_**. Setelah file JAR ditemukan, Jelastic akan menjalankan JVM dengan parameter _“java –jar /path/to/jar”_ di dalam direktori yang sesuai dengan folder root dari arsip yang dideploy.

#### **Contoh**

Di bawah ini adalah struktur direktori sampel dari paket ZIP yang dapat digunakan untuk deployment ke dalam Jelastic PaaS.

```
application.zip  
 |  
 +-config  
 |    +-application.properties  
 |    +-log4j.properties  
 +-lib  
 |    +-my-springboot-app.jar  
 +-some_directory  
 |    +-additional_file1  
 |    +-additional_file2  
 +-additional_configuration.yml
```

Jika deploy arsip seperti itu, Jelastic akan menjalankan JVM dengan argumen **_“java -jar lib/my-springboot-app.jar”_** dari direktori yang sesuai dengan folder root dari arsip _application.zip_ yang dibongkar.

### Deployment Aplikasi{#application-deployment}

Jelastic menyediakan berbagai kemungkinan untuk deployment aplikasi Anda ke
Cloud, memungkinkan Anda memilih yang paling disukai.

  * ****Deployment Manual****

Pendekatan yang paling jelas dan nyaman adalah melakukan ini secara manual melalui GUI Jelastic yang nyaman.

Sebagai contoh, coba proyek Spring Boot sampel, yang mewakili aplikasi sederhana untuk menyimpan pesan yang Anda buat - Anda dapat membangunnya dari [sumber](<https://github.com/jelastic/spring-boot-sample-jelastic>) atau deploy kami
[JAR](<https://download.jelastic.com/public.php?service=files&t=12147ec25f7d1a77e6d1fb682b8b1b27&download>).

Untuk itu, **Upload** arsip dengan aplikasi Anda melalui **Manager Deployment** dan
mulai deployment-nya dengan mengklik tombol **Deploy to**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-5.png" alt="spring boot deploy application" width="100%"/>

Dalam dialog yang terbuka, pilih lingkungan tujuan (sebelumnya
_dibuat spring-boot-app_ dalam kasus kami) dan konfirmasi **Deploy** dengan tombol yang sama.
Tunggu hingga tugas yang sesuai selesai.

  * ****Deploy Jarak Jauh via CLI****

Sebagai alternatif, Anda dapat memanfaatkan [Jelastic
CLI](<https://docs.jelastic.com/cli/>) untuk menge-deploy aplikasi Anda ke
lingkungan Spring Boot target secara jarak jauh dengan perintah berikut:

```
~/jelastic/environment/control/deployapp --envName spring-boot-app --fileUrl http://link/to/archive --fileName my_springboot.jar --context ROOT
```

### Memeriksa Log{#checking-logs}

Setelah deployment selesai, beri sistem beberapa waktu lagi untuk menjalankan
layanan yang diperlukan (di mana penundaan bergantung langsung pada kompleksitas proyek Anda) - kemajuan operasi ini saat ini dapat dilacak secara real-time melalui **_run.log_** [log](<https://docs.jelastic.com/view-log-files/>) server.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-6.png" alt="spring boot logs" width="100%"/>

Setelah selesai, antarmuka web aplikasi Anda (jika dijalankan pada
port **_8080_** default) dapat diakses dengan cara yang sama seperti
Hello World yang sudah terinstal sebelumnya - dengan mengklik **Open in Browser** untuk
environment Anda.

### Cara Membangun Aplikasi Spring Boot{#ways-to-build-a-spring-boot-application}

Untuk membuat file arsip yang sesuai untuk hosting aplikasi Anda di dalam
Jelastic PaaS, alat build [Gradle](<https://gradle.org/>) atau
[Maven](<https://maven.apache.org/>) bisa digunakan.

  * Basis minimal untuk skrip build **Gradle** (_build.gradle_) terdaftar di bawah ini, di mana parameter dalam kurung kurawal harus diganti dengan nilai kustom Anda:

```
buildscript {  
  ext {  
    springBootVersion = '{X.X.X.RELEASE}'  
  }
  repositories { 
    mavenLocal()  
    mavenCentral()  
  }  
  dependencies {  
    classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")  
  } 
} 

apply plugin: 'java' 
apply plugin: 'eclipse' 
apply plugin: 'org.springframework.boot' 
sourceCompatibility = 1.8 
targetCompatibility = 1.8 

jar {  
  baseName = '{your_app_name}'  
  version =  '{your_app_version}' 
} 

repositories {  
  mavenLocal()  
  mavenCentral() 
} 

dependencies {  
  compile("org.springframework.boot:spring-boot-starter") 
} 

task wrapper(type: Wrapper) {  
  gradleVersion = '{used_gradle_version}' 
}
```

Untuk membangun file JAR eksekusi dengan skrip ini, gunakan perintah berikut:

```
./gradlew clean assemble
```

Arsip yang dihasilkan akan disimpan dalam jalur ..**_build/libs/\{app_name\}-\{app-version\}.jar_**.

  * Basis minimal untuk _pom.xml_ deskripsi proyek **Maven** termasuk parameter berikut (di mana parameter dalam kurung kurawal harus diganti dengan nilai kustom Anda):

```
<?xml version="1.0" encoding="UTF-8"?> 

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> 
  <modelVersion>4.0.0</modelVersion>  
  <parent>    
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-parent</artifactId>  
    <version>{Х.Х.Х.RELEASE}</version>   
  </parent>   
  <groupId>org.springframework</groupId>   
  <artifactId>{your_app_name}</artifactId>
  <version>{your_app_version}</version>  
  <properties>      
    <java.version>1.8</java.version>  
  </properties>  
  <dependencies>    
    <!-- Compile -->  
    <dependency>         
      <groupId>org.springframework.boot</groupId>   
      <artifactId>spring-boot-starter-web</artifactId>  
    </dependency>  
  </dependencies>  
  <build>      
    <plugins>         
      <plugin>            
        <groupId>org.springframework.boot</groupId>  
        <artifactId>spring-boot-maven-plugin</artifactId> 
      </plugin>  
    </plugins>   
  </build> 
</project>
```

Untuk menghasilkan JAR eksekusi dengan Maven, jalankan perintah berikut:

```
mvn clean package
```

Arsip aplikasi Anda akan ditempatkan pada lokasi ...**_target/\{app_name\}-\{app-version\}.jar_**.

#### **Plugin Maven Jelastic**{#jelastic-maven-plugin}

Sebagai opsi build & deployment gabungan yang lebih nyaman, pertimbangkan untuk menggunakan
[Jelastic Maven plugin](<https://docs.jelastic.com/maven-plugin-jelastic/>),
yang bertujuan untuk memfasilitasi pengiriman aplikasi Anda ke Cloud. Integrasikan
itu dalam konfigurasi _pom.xml_ proyek Maven Anda dan dapatkan
kemampuan untuk membangun arsip aplikasi dan langsung mendorongnya ke lingkungan target dengan perintah tunggal.

### Alat CI/CD untuk Aplikasi Java di Cloud{#ci-cd-tools-for-java-applications-in-the-cloud}

#### **Node Build Maven Khusus di Cloud**{#dedicated-maven-build-node-in-the-cloud}

Jika Anda lebih suka bekerja melalui GUI, Anda dapat memanfaatkan [node build Maven](<https://docs.jelastic.com/java-vcs-deployment/>) khusus yang disediakan oleh Jelastic PaaS. Diikutsertakan dalam suatu environment bersamaan dengan server aplikasi Java, dapat digunakan untuk mengambil, mengkompilasi, dan mendeploy aplikasi dari sumber di repository GIT/SVN yang ditentukan.

#### **Add-On Otomatisasi CI/CD**{#ci-cd-automation-add-on}

Sebagai tambahan untuk semua opsi yang disebutkan di atas, Jelastic menawarkan add-on [Git-Push-Deploy](<https://www.virtuozzo.com/company/blog/git-push-deploy-to-containers/>) khusus untuk deployment aplikasi terus-menerus dari repository GitHub & GitLab melalui pipeline CI/CD yang terintegrasi secara otomatis. Hal ini dapat sangat berguna ketika proyek Anda berada di bawah pengembangan yang intensif, yang menyiratkan banyak commit berulang. Dengan solusi ini, aplikasi Anda akan secara otomatis dibangun kembali dan dikirim ke server target setelah ada perubahan dalam kode aplikasinya, sehingga versi terbaru dapat diakses melalui domain yang sesuai dalam hitungan menit.

## Memelihara Server Spring Boot Anda{#maintaining-your-spring-boot-server}

Mayoritas operasi manajemen server dasar dapat dilakukan langsung melalui
UI Jelastic Cloud dengan alat yang terintegrasi dengan sesuai, misalnya:

  * gunakan [**Configuration Manager**](<https://docs.jelastic.com/configuration-file-manager/>) bawaan untuk membuat atau mengunggah file baru, mengedit atau menghapus yang sudah ada, mengatur [titik mount](<https://docs.jelastic.com/mount-points/>), dan mengelola [data yang di-export](<https://docs.jelastic.com/storage-exports/>) dari server lain

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-7.png" alt="spring boot file manager" width="100%"/>

  * mengatur [opsi dan argumen Java](<https://docs.jelastic.com/java-options-arguments/>) kustom untuk server Anda dengan menyesuaikan variabel lingkungan **_JAVA_OPTS_** dan **_JAVA_ARGS_**

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-8.png" alt="spring boot variables" width="100%"/>

  * telusuri [**Logs**](<https://docs.jelastic.com/view-log-files/>) server untuk mendapatkan detail tentang operasi-run untuk administrasi layanan yang efisien dan pemecahan masalah
  * lacak [**Statistics**](<https://docs.jelastic.com/view-app-statistics/>) pada sumber daya yang digunakan untuk mengetahui kapasitas yang sebenarnya dibutuhkan server Anda dan menentukan pendekatan terbaik untuk alokasinya 

Untuk operasi pemeliharaan yang lebih kompleks, Anda dapat terhubung ke container
Spring Boot Anda [via SSH](<https://docs.jelastic.com/ssh-access/>) (baik menggunakan
_web_ atau _local_ SSH client). Tips berikut ini bisa berguna ketika
bekerja dengan server Spring Boot Anda:

  * file aplikasi Anda dapat ditemukan di direktori **_/home/jelastic/APP_**, yang dianggap sebagai “current” atau “working” untuk proses Java
  * parameter konfigurasi Java Virtual Machine (JVM) dapat disesuaikan dalam file **_**_/home/jelastic/conf/variables.conf_** _**(misalnya, untuk mengaktifkan debug jarak jauh atau melewatkan argumen tambahan ke JVM) 
  * untuk memeriksa file log, lihat direktori **_**_/var/log_**_**
  * lokasi **_**_/home/jelastic_**_** dianggap sebagai direktori home
  * JDK terletak dalam direktori **_**_/usr/java/latest_** _**
  * untuk memulai ulang aplikasi Anda, jalankan perintah **_**_jem service restart_**_**

Secara khusus, kemampuan untuk mengoperasikan server melalui console bisa sangat
berguna ketika menangani aplikasi Spring Boot [non-web](<https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle#howto-create-a-non-web-application>).

### Penentuan Skala Otomatis untuk Server Spring Boot{#automatic-scaling-for-spring-boot-server}

Platform Jelastic menyediakan elastisitas skala waktu-nyata yang tersedia
langsung-out-of-the-box untuk semua server. Dengan mengaktifkan baik skala vertikal otomatis maupun horizontal,
Anda dapat membuat aplikasi Spring Boot Anda sepenuhnya beradaptasi
dengan beban kerja yang dapat berubah.

#### **Penentuan Skala Vertikal Otomatis**{#automatic-vertical-scaling}

[Skala vertikal otomatis](<https://docs.jelastic.com/automatic-vertical-scaling/>) diaktifkan secara default dan memastikan layanan Anda tetap
tersedia selama lonjakan beban, dan pada saat yang sama, menghilangkan keperluan untuk
membayar penggandaan kapasitas yang tidak digunakan. Tentukan saja batas maksimum
sumber daya (dengan [cloudlets](<https://docs.jelastic.com/cloudlet/>)) yang bisa
digunakan aplikasi Anda dan Jelastic akan secara otomatis menyesuaikan ukuran memori maksimum (**_-Xmx_**) untuk aplikasi Anda berdasarkan kapasitas-kapasitas ini, misalnya:

  * 8 cloudlets (1GiB RAM) menetapkan ukuran heap maksimum ke 819 MB
  * 16 cloudlets (2GiB RAM) menetapkan ukuran heap maksimum ke 1638 MB

Untuk menyesuaikan **_-Xmx_** atau opsi JVM lainnya, edit file
**_**_/home/jelastic/conf/variables.conf_**_** baik melalui Configuration
Manager atau Jelastic SSH Gate.

#### **Penentuan Skala Horizontal Otomatis**{#automatic-horizontal-scaling}

Fitur [penentuan skala horizontal otomatis](<https://docs.jelastic.com/automatic-horizontal-scaling/>) memungkinkan menyesuaikan jumlah server web dan server
aplikasi menurut konsumsi sumber daya aplikasi Anda. Ini diimplementasikan dengan
triggers monitoring yang dapat disesuaikan yang didasarkan pada penggunaan jenis sumber daya tertentu:

  * __CPU__
  *  _Memory (RAM)_
  * _Network_
  *  _Disk I/O_
  *  _Disk IOPS_

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-9.png" alt="spring boot application scaling" width="100%"/>

**Note:** Ketika sebuah server diperbesar (baik dengan trigger atau
[secara manual](<https://docs.jelastic.com/horizontal-scaling/>)), NGINX [load
balancer](<https://docs.jelastic.com/load-balancing/>) akan secara otomatis
ditambahkan ke environment Anda, dengan konfigurasi awal untuk pembalansan
beban sesi sticky. Alternatifnya, Anda dapat beralih dari stack balancer
yang digunakan ke _Apache_ , _HAProxy_ , _Varnish_ , atau _LiteSpeed ADC_.

Selain itu, semua node yang baru ditambahkan akan dibuat pada server hardware
berbeda untuk memastikan keterseediaan tinggi untuk aplikasi Anda.

### Enkripsi Lalu Lintas dengan SSL{#traffic-encryption-with-ssl}

Jika proyek Anda memerlukan beberapa konfigurasi yang lebih kompleks untuk penanganan
permintaan, seperti HTTPS dan pembalansan beban, jangan ragu untuk memanfaatkan opsi
keamanan berikut:

  * Fungsi [SSL bawaan](<https://docs.jelastic.com/built-in-ssl/>) memungkinkan Anda segera menerapkan enkripsi untuk domain internal aplikasi Anda (yaitu _https://\{envName\}\{platformDomain\}_) dengan sertifikat wildcard Jelastic SSL  

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/spring-boot/spring-boot-10.png" alt="spring boot ssl configuration" width="100%"/>

  * [SSL kustom](<https://docs.jelastic.com/custom-ssl/>) dapat dikonfigurasikan untuk lingkungan berbasis Spring Boot dengan menambahkan salah satu dari balancer beban bersertifikat
  * sebagai alternatif SSL gratis, berlaku untuk domain internal dan kustom, sebuah aplikasi tambahan Jelastic yang dikembangkan secara khusus menggunakan [Let’s Encrypt](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>) dapat digunakan (memerlukan [load balancer](<https://docs.jelastic.com/load-balancing/>) bersertifikat)

Menerapkan solusi apa pun ini akan memungkinkan enkripsi lalu lintas pada tingkat
environment, menghilangkan kebutuhan untuk mengkonfigurasinya di dalam aplikasi Anda.
Sebagai hasilnya, lalu lintas terenkripsi yang diterima akan diakhiri pada lapisan
pembalansan beban dan diteruskan ke server aplikasi dalam tampilan polos.

### Port Kustom & Pertimbangan Penggunaan HTTP/HTTPS{#custom-ports-http-https-usage-considerations}

Secara default, mayoritas aplikasi Java mendengarkan port **_8080_** pada
tingkat HTTP, karena itu dianggap sebagai endpoint Spring Boot standar untuk
lalu lintas HTTP.  
Selain itu, ketika tautan environment Anda diminta di Internet,
[ports](<https://docs.jelastic.com/container-ports/>) secara otomatis dipetakan
sebagai berikut:

  * port HTTP internal **_8080_** mengacu pada port **_80_**
  * port HTTPS yang aman **_8743_** mengacu pada port **_443_** dan **_80_**

Jadi, jika bekerja dengan port HTTP/HTTPS standar, aplikasi Anda dapat
diakses langsung melalui URL environment dengan protokol yang sesuai
ditentukan, tanpa perlu memasukkan nomor port yang tepat.

Dan jika aplikasi Anda memang perlu memproses permintaan pada beberapa
antar muka kustom, Jelastic memungkinkan mengekspos port TCP dan UDP container
private melalui [Endpoints](<https://docs.jelastic.com/endpoints/>). Setelah menambahkan
seperti itu, port yang sesuai akan secara otomatis diaktifkan dalam pengaturan firewall server,
membuatnya dapat diakses untuk seluruh dunia.

## Kesimpulan{#conclusion}

Temukan lebih banyak kemungkinan dari server Spring Boot dengan mencobanya dalam
Jelastic. [Buat akun Anda sendiri](<https://jelastic.cloud/?utm_source=jelastic-blog&utm_medium=article utm_campaign=Hosting-Spring-Boot-Applications>) dan
gunakan untuk menge-deploy aplikasi Java yang dapat diskalakan dengan mudah untuk
menjalankannya di cloud.

Butuh beberapa detail atau bantuan? Jangan ragu untuk meminta bantuan dalam
komentar di bawah atau hubungi ahli teknis kami di
[Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

### Baca Juga{#related-articles}

### [Membangun Microservices dengan Spring Boot Fat (Uber) Jar](<https://docs.dewacloud.com/company/blog/building-microservices-with-spring-boot-fat-uber-jar/>)

### [Spring Boot Thin Jar Builder untuk MenjalankanJava Microservices](<https://docs.dewacloud.com/company/blog/spring-boot-thin-jar-builder-for-running-java-microservices/>)

### [Cara Membuat dan Mendeploy Aplikasi Vert.x Fat atau Thin Microservice ke Cloud](<https://docs.dewacloud.com/company/blog/build-and-deploy-vertx-fat-thin-microservice-application-to-the-cloud/>)