---
sidebar_position: 1
slug: /java-center
title: Java Dev Center
---

# Java Developer’s Center


Platform ini saat ini mendukung multibahasa, awalnya diciptakan sebagai Java Cloud murni dan masih mempertahankan fokus utama pada bahasa pemrograman ini. Kematangan teknologi platform ini diakui oleh komunitas Java dengan [Duke’s Choice Award](<https://www.virtuozzo.com/company/blog/duke-choice-award-2018-winner/>) sudah dua kali (pada 2012 dan 2018). Panduan ini mengenalkan Anda pada fitur-fitur khas hosting Java dalam platform dan memungkinkan Anda memulai dengan daftar fungsi yang luas.

Gunakan daftar isi di bawah ini untuk menemukan informasi yang diperlukan dalam panduan lebih cepat:

  * [Java Versions](<https://docs.dewacloud.com/docs/#java-versions>)
  * [Java Application Servers](<https://docs.dewacloud.com/docs/#java-application-servers>)
  * [Java Environment Creation](<https://docs.dewacloud.com/docs/#java-environment-creation>)
  * [Java Application Deployment](<https://docs.dewacloud.com/docs/#java-application-deployment>)
  * [Domains Management](<https://docs.dewacloud.com/docs/#domains-management>)
  * [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/#automatic-vertical-scaling>)
  * [Horizontal Scaling: Manual and Automatic](<https://docs.dewacloud.com/docs/#horizontal-scaling-manual-and-automatic>)
  * [Java Clusterization](<https://docs.dewacloud.com/docs/#java-clusterization>)
  * [Database Connection to Java Application](<https://docs.dewacloud.com/docs/#database-connection-to-java-application>)

## Java Versions{#java-versions}

Saat ini (pada saat penulisan ini), versi dan distribusi Java berikut tersedia:

  * **[AdoptOpenJDK](<https://adoptopenjdk.net/>)** : 8.0.312; 11.0.13; 13.0.2; 14.0.2; 15.0.2; 16.0.2
  * **[Alibaba Dragonwell](<https://dragonwell-jdk.io/>)** : 8.11.12
  * **[Amazon Corretto](<https://aws.amazon.com/corretto/>)** : 8.422.05.1; 11.0.24.8.1; 15.0.2.7.1; 16.0.2.7.1; 17.0.12.7.1; 18.0.2.9.1; 19.0.2.7.1; 20.0.2.10.1; 21.0.4.7.1
  * **[Eclipse OpenJ9](<https://www.eclipse.org/openj9/>)** : 0.11.0 (8u192-b12; 11.0.1); 0.15.1 (8u222-b10; 11.0.4); 0.17.0 (8u232-b09; 11.0.5; 13.0.1); 0.18.1(8u242-b08; 11.0.6; 13.0.2) 0.20.0 (8u252-b09; 11.0.7); 0.21.0 (8u262-b10; 8u265-b01; 11.0.8; 14.0.2); 0.22.0 (15.0.0); 0.23.0 (8u272-b10; 11.0.9); 0.24.0 (8u282-b08; 11.0.10); 0.25.0-16; 0.26.0 (8u292-b10; 11.0.11); 0.27.0 (8u302-b08; 11.0.12); 0.29.0 (8u312-b07; 11.0.13); 0.30.0 (8u322-b06; 11.0.14); 0.32.0 (8u332-b09; 11.0.15); 0.33.1 (8u345-b01; 11.0.16); 0.35.0 (8u352-b08; 11.0.17); 0.36.1 (8u362-b09; 11.0.18); 0.38.0 (8u372-b07; 11.0.19); 0.41.0 (8u392-b08; 11.0.21); 0.43.0 (8u402-b06; 11.0.22)
  * **[Eclipse Temurin](<https://projects.eclipse.org/projects/adoptium.temurin>)** : 8.0.422; 11.0.24; 17.0.12; 18.0.2.1; 19.0.2; 20.0.2; 21.0.2
  * **[GraalVM CE](<https://www.graalvm.org/>)** (saat ini, untuk _Java Engine_ dan _Maven_ saja): 19.3.1; 20.2.0; 21.3.0; 22.3.3
  * **[Liberica JDK](<https://bell-sw.com/>)** : 8.0.322; 11.0.14; 13.0.2; 14.0.2; 15.0.0; 16.0.0; 17.0.2
  * **[Oracle JDK Dev](<https://www.oracle.com/technetwork/java/javase/downloads/index.html>)** : 7.0_79; 8.0_202; 11.0.2
  * **[Oracle OpenJDK](<http://jdk.java.net/>)** : 7.0.261; 8.0.412; 11.0.24; 13.0.2; 14.0.2; 15.0.2; 16.0.2; 17.0.2; 18.0.2.1; 19.0.2; 20.0.2; 21.0.2; 22.0.2; 23.ea-b31
  * **[Zulu Community](<https://www.azul.com/downloads/zulu/>)** : 7.0.352; 8.0.422; 11.0.24; 13.0.9; 14.0.2; 15.0.10; 16.0.2; 17.0.12; 18.0.2.1; 19.0.2; 20.0.2; 21.0.4; 22.0.2

Versi _6th_ , _9th_ , _10th_ , dan _12th_ Java tidak dapat dibuat dalam lingkungan baru lagi karena akhir masa pakai dari rilis terkait. Namun, instance yang sudah ada tetap berfungsi penuh (termasuk re-deploy, cloning, dan horizontal scaling).

Daftar terbaru dari rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang didedikasikan dan diperbarui secara berkala (mingguan).

Anda dapat memilih versi preferensi saat membuat environment, atau mengubahnya nanti. Prosedur ini dijelaskan dalam dokumen [Java Versions](<https://docs.dewacloud.com/docs/java-versions/>).

## Java Application Servers{#java-application-servers}

Di dalam beragam software stack, platform ini mendukung [Java Engine](<https://docs.dewacloud.com/docs/java-engine-server/>) murni dan server aplikasi Java berikut:

  * [GlassFish](<https://docs.dewacloud.com/docs/glassfish/>)
  * [Jetty](<https://docs.dewacloud.com/docs/eclipse-jetty/>)
  * [Payara](<https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/>)
  * [Spring Boot](<https://www.virtuozzo.com/company/blog/hosting-spring-boot-java-applications/>)
  * [Tomcat](<https://docs.dewacloud.com/docs/tomcat/>)
  * [TomEE](<https://docs.dewacloud.com/docs/apache-tomee/>)
  * [WildFly](<https://docs.dewacloud.com/docs/wildfly/>)

Baca dokumentasi di bawah untuk informasi tambahan tentang spesifikasi server Java dalam platform:

  * [Java App Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Java Garbage Collection](<https://www.virtuozzo.com/company/blog/garbage-collection/>)
  * [Java Agent](<https://docs.dewacloud.com/docs/javaagent/>)
  * [Java Tutorials](<https://docs.dewacloud.com/docs/java-tutorials/>)

## Java Environment Creation{#java-environment-creation}

Untuk meng-host aplikasi Java, Anda perlu membuat environment yang sesuai. Cukup buka [_topology wizard_](<https://docs.dewacloud.com/docs/setting-up-environment/>) di dashboard PaaS Anda, navigasikan ke tab bahasa **Java**, pilih server aplikasi Java yang diinginkan, database, dan stack lainnya. Jika diperlukan, sesuaikan pengaturan (seperti cloudlets, ruang disk, wilayah, dll.) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-1.png" alt="Java environment creation" max-width="100%"/>

Semua server yang ditambahkan mewakili [container terisolasi sepenuhnya](<https://docs.dewacloud.com/docs/isolated-containers/>), yang terletak pada host yang berbeda untuk lebih banyak ketersediaan, sementara isolasi menghilangkan risiko interferensi satu sama lain. Anda dapat melampirkan alamat [public IP](<https://docs.dewacloud.com/docs/public-ip/>) ke salah satu server ini untuk diakses langsung. Jika tidak (mis. jika menggunakan pengaturan default), permintaan masuk yang dikirimkan kepada aplikasi Anda akan diproksikan oleh [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>).

## Java Application Deployment{#java-application-deployment}

Setelah pembuatan environment, Anda dapat mendepoy aplikasi Java Anda. Platform ini sepenuhnya mengotomatisasi proses deployment, memungkinkan Anda untuk membuat proyek berjalan dengan mudah.

Metode deployment berikut didukung:

  * melalui _**archive**_ aplikasi \- _.war_ , _.zip_ , _.jar_ , dan _.ear_ archives
  * dari _repository_ _GIT/SVN_ jarak jauh, menggunakan node build _Maven_

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-2.png" alt="Java application deployment" width="70%"/>

Anda dapat membaca dokumen yang sesuai untuk mempelajari lebih lanjut tentang deployment aplikasi Java:

  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Maven Build Node](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)
  * [Auto-Deploy Overview](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)

Terdapat juga instruksi terpisah untuk mengelola proyek Anda melalui [Gitblit](<https://docs.dewacloud.com/docs/gitblit/>) dan [WebDAV](<https://docs.dewacloud.com/docs/remote-access-via-webdav/>).

## Domains Management{#domains-management}

Anda dapat mengikat nama [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) ke URL aplikasi Anda dan menggunakannya sebagai pengganti domain environment default:

  * **CNAME redirect** jika menggunakan _Shared Load Balancer_ ; direkomendasikan untuk environment _**dev**_ dan _**test**_
  * **DNS A Record** jika menggunakan _public IP_ ; dapat menangani beban lalu lintas tinggi dan cocok untuk environment _**production**_

Juga, dengan bantuan fitur [swapping domains](<https://docs.dewacloud.com/docs/swap-domains/>) atau metode _**SwapExtIps**_ [API](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps>)/[CLI](<https://docs.dewacloud.com/docs/cli-ip-swap/>), Anda dapat meng-upgrade dan memodifikasi aplikasi Anda tanpa downtime (yaitu pengguna Anda tidak akan melihat adanya gangguan).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-3.png" alt="Java domains management" max-width="100%"/>

:::tip 
Platform ini memungkinkan penggunaan multiple domain dalam satu environment untuk meningkatkan kegunaannya, efisiensi, dan skalabilitas, sementara secara bersamaan menghemat biaya Anda dengan menghindari kebutuhan untuk mengatur instance terpisah untuk aplikasi yang berbeda. Lihat contoh yang sesuai di bawah:M ulitiple Domains dengan Public IPMultiple Domains untuk TomcatMultiple Domains untuk GlassFish
:::

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Platform ini secara dinamis menyediakan sejumlah cloudlet (sebagai sumber daya RAM dan CPU), yang dibutuhkan oleh aplikasi Anda untuk menangani beban saat ini. Cukup tentukan batas maksimum, dan semuanya akan dilakukan oleh platform secara otomatis - tidak diperlukan intervensi manual. Fitur ini disebut _**[automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>)**_ dan memastikan bahwa Anda tidak pernah membayar lebih untuk kapasitas yang tidak digunakan tanpa mengalami kekurangan sumber daya.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-4.png" alt="automatic vertical scaling" max-width="100%"/>

Untuk mengatur atau mengubah batas penskalaan vertikal, cukup gunakan slider yang sesuai dalam topology wizard:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-5.png" alt="configure Java vertical scaling" width="70%"/>

## Horizontal Scaling: Manual and Automatic{#horizontal-scaling-manual-and-automatic}

Jika aplikasi Anda menjadi sangat populer dan satu node tidak cukup, jangan ragu untuk meng-skala secara [horizontal](<https://docs.dewacloud.com/docs/horizontal-scaling/>). Untuk memastikan keandalan dan ketersediaan tinggi, semua node yang baru ditambahkan dibuat pada node perangkat keras yang berbeda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-6.png" alt="Java horizontal scaling" width="70%"/>

Klik tombol **+/-** dalam bagian _Horizontal Scaling_ pada topology wizard untuk mengatur jumlah node yang diperlukan (load balancer akan ditambahkan secara otomatis).

Anda juga dapat menyesuaikan [mode penskalaan](<https://docs.dewacloud.com/docs/horizontal-scaling/#scaling-modes>) yang diinginkan:

  * _**Stateless**_ \- secara simultan membuat semua node baru dari template gambar dasar
  * _**Stateful**_ \- secara berurutan menyalin sistem file dari container master ke dalam node baru

Penskalaan horizontal dapat dilakukan tidak hanya secara manual namun juga secara otomatis berdasarkan beban saat ini pada node, yang dipantau melalui pemicu yang dapat disesuaikan.

Dalam bagian **Settings > Monitoring > [Auto Horizontal Scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>)**, Anda dapat menyesuaikan kondisi penskalaan sesuai kebutuhan Anda, yaitu batas bawah/atas (persentase) untuk tipe sumber daya yang ditentukan selama periode tertentu. Jika beban tetap di luar batas yang ditetapkan, proses penghapusan/penambahan node akan dipanggil secara otomatis.

Ada lima tipe sumber daya yang berbeda, yang dipantau oleh pemicu:

  * CPU
  * Memori (RAM)
  * Jaringan
  * Disk I/O
  * Disk IOPS

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-7.png" alt="Java auto horizontal scaling" max-width="100%"/>

Pemicu mulai memantau konsumsi sumber daya segera setelah penambahan, dan ketika tingkat penggunaan melebihi batas yang dinyatakan, pemicu diaktifkan. Kemudian, jika beban berlanjut untuk periode yang ditentukan, itu akan dieksekusi, menyesuaikan jumlah node.

## Java Clusterization{#java-clusterization}

Fitur clustering server aplikasi tersemat menyediakan replikasi sesi antar pasangan node dan menghilangkan kebutuhan untuk perangkat lunak tambahan atau penggunaan Memcached untuk meningkatkan ketersediaan aplikasi.

Platform ini menyediakan replikasi sesi otomatis antara server _Tomcat_ dan _TomEE_ dengan bantuan multicast untuk mendapatkan ketersediaan tinggi aplikasi web dalam cluster Java. Fitur **[High-Availability](<https://docs.dewacloud.com/docs/auto-clustering/>)** ini dapat diaktifkan di wizard selama pembuatan environment atau penyesuaian topologi.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-8.png" alt="Java clusterization" max-width="100%"/>

Solusi **[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)** modern yang lebih baru disediakan untuk stack _GlassFish_ , _Payara_ , dan _WildFly_:

  * [Out-of-Box GlassFish & Payara Clustering](<https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/>)
  * [WildFly Automatic Micro Clustering and Scaling](<https://www.virtuozzo.com/company/blog/wildfly-managed-domain-in-containers-auto-micro-clustering-and-scaling/>)

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-dev-center/java-dev-center-9.png" alt="Java auto-clustering" max-width="100%"/>

## Database Connection to Java Application{#database-connection-to-java-application}

Sekelompok server database yang dapat diskalakan dan dikelola sepenuhnya dapat dengan mudah diinstal dalam lingkungan Java. Untuk membangun koneksi, sesuaikan aplikasi Anda mengikuti instruksi berdasarkan database yang Anda butuhkan:

  * [MySQL dan MariaDB Connection](<https://docs.dewacloud.com/docs/connection-to-mysql-java/>)
  * [PostgreSQL Connection](<https://www.virtuozzo.com/company/blog/java-connection-to-postgresql/>)
  * [MongoDB Connection](<https://docs.dewacloud.com/docs/connection-to-mongodb-java/>)

Platform ini menyediakan hosting Java berkualitas tinggi dengan peningkatan ketersediaan, redundansi, dan kekuatan skalabilitas untuk aplikasi Anda.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [Java Tutorials](<https://docs.dewacloud.com/docs/java-tutorials/>)