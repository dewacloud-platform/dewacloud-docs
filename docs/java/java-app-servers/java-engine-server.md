---
sidebar_position: 7
slug: /java-engine-server
title: Java Engine Server
---

# Java Engine Server

**Java Engine** adalah software stack berupa image dari template dasar CentOS/AlmaLinux
dengan JDK yang sudah terpasang. Ini menyediakan kebutuhan minimum yang diperlukan
untuk hosting aplikasi Java, sambil memastikan kompatibilitas dengan semua
[fitur platform](<https://docs.dewacloud.com/docs/what-is-paas-and-caas>) (penentuan skala vertikal dan horizontal otomatis, IP publik, grup
isolasi, aturan firewall, akses API dan SSH, dll.).

Java Engine dirancang untuk deployment dan hosting aplikasi Java berdasarkan _fat JAR_/_uber JAR_ (yaitu JAR eksekusi dengan semua kelas,
sumber daya, dan dependensi). Ini menggunakan [Java Memory Agent](<https://github.com/jelastic-jps/java-memory-agent>) untuk secara otomatis
mengoptimalkan aplikasi Anda dengan menyetel konfigurasi sesuai dengan beban dan sumber daya yang tersedia.

:::note
Template ini menggunakan daemon inisiasi modern systemd.
:::

## Membuat Java Engine{#create-java-engine}

Ikuti langkah-langkah sederhana berikut untuk membuat lingkungan baru dengan server Java Engine.

1\. Masuk ke dashboard platform dan klik tombol **New Environment** di
pojok kiri atas.

![new environment button](#)

2\. Dalam wizard topologi yang terbuka, beralih ke tab _**Java**_, pilih
server **Java Engine** dan versi JDK yang diperlukan (dilingkari pada gambar
di bawah ini).

![Java Engine in topology wizard](#)

Sesuaikan parameter lainnya sesuai kebutuhan Anda, misalnya batas sumber daya,
ruang disk, IP eksternal, [region](<https://docs.dewacloud.com/docs/environment-regions/>) (jika tersedia), dll. Klik **Create** untuk melanjutkan.

3\. Lingkungan Anda seharusnya siap dalam satu menit.

![Java Engine environment created](#)

Sekarang, Anda dapat mulai mengelola lingkungan Anda:

  * [Deploy Application](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Bind Custom Domain](<https://docs.dewacloud.com/docs/custom-domains/>)
  * [Monitor the Statistics](<https://docs.dewacloud.com/docs/view-app-statistics/>) & [View Log Files](<https://docs.dewacloud.com/docs/view-log-files/>)
  * [Tune the Server Configurations](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
  * [Access Environment via SSH](<https://docs.dewacloud.com/docs/ssh-access/>)

Rujuk ke [Java Developers Center](<https://docs.dewacloud.com/docs/java-center/>) untuk mendapatkan gambaran lengkap tentang hosting Java di dalam platform.

## Baca Juga{#whats-next}

  * [Java Dev Center](<https://docs.dewacloud.com/docs/java-center/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Tomcat Server](<https://docs.dewacloud.com/docs/tomcat/>)
  * [GlassFish Server](<https://docs.dewacloud.com/docs/glassfish/>)