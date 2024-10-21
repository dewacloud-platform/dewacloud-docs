---
sidebar_position: 2
slug: /java-versions
title: Java Versions
---

# Java Versions

Saat menyiapkan environment di platform, Anda dapat memilih distribusi dan versi JDK yang ingin dijalankan:

  * **[AdoptOpenJDK](<https://adoptopenjdk.net/>)** : 8.0.312; 11.0.13; 13.0.2; 14.0.2; 15.0.2; 16.0.2
  * **[Alibaba Dragonwell](<https://dragonwell-jdk.io/>)** : 8.11.12
  * **[Amazon Corretto](<https://aws.amazon.com/corretto/>)** : 8.422.05.1; 11.0.24.8.1; 15.0.2.7.1; 16.0.2.7.1; 17.0.12.7.1; 18.0.2.9.1; 19.0.2.7.1; 20.0.2.10.1; 21.0.4.7.1
  * **[Eclipse OpenJ9](<https://www.eclipse.org/openj9/>)** : 0.11.0 (8u192-b12; 11.0.1); 0.15.1 (8u222-b10; 11.0.4); 0.17.0 (8u232-b09; 11.0.5; 13.0.1); 0.18.1(8u242-b08; 11.0.6; 13.0.2) 0.20.0 (8u252-b09; 11.0.7); 0.21.0 (8u262-b10; 8u265-b01; 11.0.8; 14.0.2); 0.22.0 (15.0.0); 0.23.0 (8u272-b10; 11.0.9); 0.24.0 (8u282-b08; 11.0.10); 0.25.0-16; 0.26.0 (8u292-b10; 11.0.11); 0.27.0 (8u302-b08; 11.0.12); 0.29.0 (8u312-b07; 11.0.13); 0.30.0 (8u322-b06; 11.0.14); 0.32.0 (8u332-b09; 11.0.15); 0.33.1 (8u345-b01; 11.0.16); 0.35.0 (8u352-b08; 11.0.17); 0.36.1 (8u362-b09; 11.0.8); 0.38.0 (8u372-b07; 11.0.19); 0.41.0 (8u392-b08; 11.0.21); 0.43.0 (8u402-b06; 11.0.22)
  * **[Eclipse Temurin](<https://projects.eclipse.org/projects/adoptium.temurin>)** : 8.0.422; 11.0.24; 17.0.12; 18.0.2.1; 19.0.2; 20.0.2; 21.0.2
  * **[GraalVM CE](<https://www.graalvm.org/>)** (saat ini, untuk _Java Engine_ dan _Maven_ saja): 19.3.1; 20.2.0; 21.3.0; 22.3.3
  * **[Liberica JDK](<https://bell-sw.com/>)** : 8.0.322; 11.0.14; 13.0.2; 14.0.2; 15.0.0; 16.0.0; 17.0.2
  * **[Oracle JDK Dev](<https://www.oracle.com/technetwork/java/javase/downloads/index.html>)** : 7.0_79; 8.0_202; 11.0.2
  * **[Oracle OpenJDK](<http://jdk.java.net/>)** : 7.0.261; 8.0.412; 11.0.24; 13.0.2; 14.0.2; 15.0.2; 16.0.2; 17.0.2; 18.0.2.1; 19.0.2; 20.0.2; 21.0.2; 22.0.2; 23.ea-b31
  * **[Zulu Community](<https://www.azul.com/downloads/zulu/>)** : 7.0.352; 8.0.422; 11.0.24; 13.0.9; 14.0.2; 15.0.10; 16.0.2; 17.0.12; 18.0.2.1; 19.0.2;  20.0.2; 21.0.4; 22.0.2

Daftar terbaru rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang didedikasikan dan diperbarui secara berkala (mingguan).

Juga, untuk environment yang sudah ada, versi engine yang digunakan dapat dengan mudah diubah ke yang berbeda:

1\. Masuk ke dashboard PaaS dan klik tombol **New Environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-versions/java-versions-1.png" alt="new Java environment" width="100%"/>

Di dalam wizard yang terbuka, beralih ke tab _**Java**_, pilih server aplikasi dan versi engine yang diinginkan (seperti yang ditunjukkan pada gambar di atas).

2\. Untuk mengubah versi Java dalam environment yang sudah ada, [redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>) container yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-versions/java-versions-2.png" alt="redeploy Java version" width="80%"/>

Cukup pilih _Tag_ yang diperlukan (versi stack dan distribusi JDK) dan klik **Redeploy**.

Konfirmasikan tindakan di dalam pop-up yang muncul dan tunggu beberapa menit agar perubahan diterapkan.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Java Dev Center](<https://docs.dewacloud.com/docs/java-center/>)
  * [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/>)
