---
sidebar_position: 2
slug: /tomee-server
title: TomEE Server
---

# Apache TomEE

**[Apache TomEE](<https://tomee.apache.org/index.html>)** adalah server Java siap-enterprise, dibuat berdasarkan Apache Tomcat dengan implementasi fitur _MicroProfile_ dan _Jakarta EE_. Perbandingan [extended](<https://tomee.apache.org/comparison.html>) dari fungsionalitas yang didukung disediakan di halaman dokumentasi resmi.

Platform ini menyediakan empat distribusi berbeda dari TomEE:

  * **WebProfile** \- menyajikan implementasi [Jakarta EE](<https://tomee.apache.org/jakartaee-9.0/javadoc/>), termasuk Servlets, JSP, JSF, JTA, JPA, CDI, Bean Validation, dan EJB Lite
  * **MicroProfile** \- memperluas opsi WebProfile dengan dukungan penuh untuk [MicroProfile](<https://tomee.apache.org/microprofile-2.0/javadoc/>)
  * **Plus** \- mencakup semua teknologi dalam _MicroProfile_ dengan tambahan JAX-WS, JEE Connectors, dan JMS
  * **PluME** \- mendukung semua dalam profil _Plus_, termasuk Eclipse Mojarra dan EclipseLink (distribusi ini diperlukan untuk organisasi yang melakukan migrasi dari Eclipse Glassfish ke proyek Apache TomEE)

:::note 
Template ini menggunakan daemon inisialisasi modern systemd.
:::

Server aplikasi TomEE berjalan tanpa persyaratan runtime tambahan atau waktu startup untuk aplikasi yang lebih besar dan kompatibel dengan sebagian besar alat yang menyadari Tomcat dan diuji pada Tomcat. Di bawah ini, kami akan menjelaskan cara mendapatkan Apache TomEE dan menjalankannya di platform.

1\. Masuk ke dashboard PaaS dan klik tombol **New Environment**.

![new environment button](#)

2\. Dalam dialog wizard topologi, pilih **TomEE** sebagai server aplikasi Anda (di tab _**Java**_). Jika diperlukan, konfigurasikan penskalaan node ([vertical](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) dan [horizontal](<https://docs.dewacloud.com/docs/horizontal-scaling/>)), [public IPs](<https://docs.dewacloud.com/docs/public-ip/>), nama environment, dll. Klik **Create** jika sudah siap.

![TomEE environment topology wizard](#)

:::tip 
Platform ini menyediakan opsi satu klik Auto-Clustering yang secara otomatis mengkonfigurasi kluster TomEE yang sangat tersedia. Hasilnya, Anda akan mendapatkan kluster Java siap jalan dengan sejumlah server TomEE yang saling terhubung dengan replikasi sesi dan load balancing yang sudah dikonfigurasikan sebelumnya.
:::

3\. Environment baru Anda dengan server aplikasi Apache TomEE Java akan dibuat dalam satu menit.

![open TomEE in browser](#)

Klik tombol **Open in Browser** untuk mengakses halaman default server.

![Apache TomEE home page](#)

Sekarang, Anda dapat melanjutkan ke [deployment aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>).

:::tip 
Server Tomcat dan TomEE disediakan dengan variabel khusus HOT_DEPLOY (tidak diatur secara default) yang menentukan apakah server harus di-restart (false, disabled, 0) atau tidak (true, enabled, 1) selama proses deployment aplikasi. Hot deploy (tanpa restart) relatif lebih cepat dan memungkinkan untuk menghindari downtime selama proses deployment. Namun, ini tidak didukung oleh beberapa aplikasi dan oleh karena itu dinonaktifkan secara default. 
:::

## Baca Juga{#whats-next}

  * [Tomcat Server](<https://docs.dewacloud.com/docs/tomcat/>)
  * [Java Application Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Tomcat Multiple Domains](<https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Tomcat Security](<https://docs.dewacloud.com/docs/tomcat-security/>)