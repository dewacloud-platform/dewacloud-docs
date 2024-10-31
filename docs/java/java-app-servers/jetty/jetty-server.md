---
sidebar_position: 1
slug: /eclipse-jetty
title: Ecliipse Jetty
---

# Eclipse Jetty

**[Eclipse Jetty](<https://www.eclipse.org/jetty/>)** adalah server HTTP (web) berbasis Java open source, yang menyediakan Java Servlet API terbaru, protokol HTTP/2, dukungan WebSocket, dan banyak lagi. Jetty banyak digunakan dalam berbagai proyek dan produk (baik dalam pengembangan maupun produksi) karena fitur-fitur berikut:

  * _sumber terbuka dan dapat digunakan secara komersial_
  * _fleksibel dan dapat diperluas_
  * _asinkron_
  * _jejak memori kecil_
  * _dapat diskalakan untuk perusahaan_

:::note 
Template ini menggunakan daemon inisialisasi modern systemd.
:::

Untuk mendapatkan server aplikasi Eclipse Jetty di platform, Anda perlu:

1\. Akses akun PaaS Anda dan klik tombol **New Environment** di bagian atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/eclipse-jetty/eclipse-jetty-1.png" alt="new environment button" width="60%"/>

2\. Dalam wizard topologi yang terbuka, beralih ke tab _**Java**_ dan pilih **Jetty** sebagai server aplikasi Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/eclipse-jetty/eclipse-jetty-2.png" alt="topology wizard Eclipse Jetty server" width="100%"/>

Sesuaikan pengaturan lainnya sesuai kebutuhan Anda (misalnya, penskalaan [vertikal](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) dan [horizontal](<https://docs.dewacloud.com/docs/horizontal-scaling/>) atau [public IPs](<https://docs.dewacloud.com/docs/public-ip/>)) dan klik **Create**.

3\. Setelah environmnet dibuat, Anda dapat mengklik tombol **Open in Browser** di sebelahnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/eclipse-jetty/eclipse-jetty-3.png" alt="Jetty server open in browser button" width="100%"/>

Sebuah halaman home server Jetty akan terbuka di halaman browser baru:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/eclipse-jetty/eclipse-jetty-4.png" alt="Jetty application server home page" width="100%"/>

Seperti yang dapat Anda lihat, server Eclipse Jetty telah aktif dan berjalan, sehingga Anda dapat melanjutkan ke [deployment aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>).

## Baca Juga{#whats-next}

  * [Environment Variables](<https://docs.dewacloud.com/docs/default-environment-variables/>)
  * [Java Options and Arguments](<https://docs.dewacloud.com/docs/java-options-arguments/>)
  * [Java App Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)