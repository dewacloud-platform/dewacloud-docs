---
sidebar_position: 4
slug: /marketplace
title: Marketplace
---
# Marketplace

Platform Marketplace adalah perpustakaan dari aplikasi yang paling populer dan paling banyak diminta, yang dikonfigurasi dan dioptimalkan dengan cara yang paling menguntungkan melalui [Packaging Standard](<https://docs.dewacloud.com/docs/jps/>) platform. Solusi ini dapat diinstal otomatis langsung dari dashboard, melewati banyak langkah deployment dan optimasi manual.

Anda dapat mengakses **Marketplace** melalui tombol yang sesuai di sudut kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-1.png" alt="packaged solutions marketplace" width="100%"/>

Dalam bagian yang terbuka, Anda dapat menemukan daftar solusi yang dikategorikan untuk menginstal **Applications** baru dari awal dan konfigurasi **Add-Ons** untuk memperbarui environment yang sudah ada. Saat ini, platform mengelola dan memelihara paket JPS berikut, menyediakan instalasi satu klik di semua platform:

Applications  
---  
  
  * Alfresco
  * Ametys
  * Auto-Scalable Couchbase CE Cluster
  * Auto-Scalable GlassFish Cluster
  * Auto-Scalable Magento Cluster v2
  * Auto-Scalable Spring Boot Cluster
  * Backup Storage
  * Cyclos 4 PRO
  * DevOps Lab - GitLab Server
  * DjangoCMS
  * Docker Engine CE
  * Docker Swarm Cluster
  * DokuWiki
  * DropWizard Fat Jar Builder
  * Drupal
  * Eclipse Mosquitto
  * Eclipse Vert.x Fat Jar Builder
  * Eclipse Vert.x Thin Jar Builder
  * Ghost
  * Gitblit
  * IOTA Node
  * Jenkins DevOps Pack
  * Jitsi Video Conferencing

|

  * Joomla
  * Kubernetes Cluster
  * Laravel
  * Liferay
  * LimeSurvey
  * Magento Standalone
  * Magnolia CMS
  * Maian Cart
  * MariaDB Multi-Region Cluster 
  * MariaDB Multi-Region Galera Cluster 
  * Mattermost Chat Service
  * Minio Cluster
  * MODX
  * MongoDB Replica Set
  * Moodle
  * Multi-Region Redis Cluster 
  * Multi-Region WordPress Cluster v1 (Alpha)
  * Multi-Region WordPress Standalone
  * MySQL/MariaDB/Percona Cluster
  * Nexus Repository Manager
  * Node-RED Dev
  * Odoo Community Edition
  * Open Liberty in Kubernetes

|

  * OpenCart
  * OpenCMS
  * OpenVPN Access Server
  * osTicket
  * ownCloud
  * Plesk Hosting Platform
  * PostgreSQL Multi-Region Cluster
  * PostgreSQL Primary-Secondary Cluster
  * PrestaShop
  * qdPM
  * Redis cluster
  * Redmine
  * Spring Boot Fat Jar Builder
  * Spring Boot Thin Jar Builder
  * Tomcat/TomEE cluster with High Availability
  * Traffic Distributor
  * WebMail Lite
  * WildFly Continuous Deployment
  * WildFly Managed Domain Cluster
  * WordPress Cluster Kit v2
  * WordPress Standalone Kit
  * XWiki

  
Add-Ons  
---  
  
  * Database Backup/Restore Add-On
  * Database Cluster Recovery
  * Database Corruption Diagnostic
  * Env Start/Stop Scheduler
  * File Synchronization
  * Git-Push-Deploy Add-On

|

  * HTTP/3 Premium CDN _*****_
  * ionCube Add-On
  * Let's Encrypt Free SSL
  * Load Alerts to Slack (BETA)
  * MySQL-based SSL/TLS Encrypted Connection (MySQL/MariaDB/Percona)
  * New Relic APM

|

  * NGINX Amplify
  * Postgres SSL/TLS Encrypted Connection
  * Redis Encrypted Connection
  * TimeZone Change
  * WordPress Backup/Restore for the filesystem and the databases

  
:::note 
Set paket JPS yang disediakan dapat bervariasi di setiap platform tertentu karena tergantung pada pengaturan penyedia hosting. Sebagai contoh, add-on HTTP/3 Premium CDN didukung hanya pada instalasi platform berikut. 
:::

Tim PaaS sering mengimplementasikan solusi baru untuk memperluas daftar ini. Mayoritas pembaruan tersebut disorot dalam [platform blog](<https://www.virtuozzo.com/company/blog/>), jadi jika Anda tertarik, Anda dapat berlangganan untuk diberitahukan tentang semua utilitas baru.

:::tip 
Untuk contoh solusi lebih lanjut, lihat Koleksi JPS di GitHub, di mana Anda dapat menemukan banyak paket untuk digunakan dengan platform:Enterprise WordPress Cluster untuk Auto Scaling, High Performance dan High AvailabilityScalable MySQL Cluster dengan ProxySQL Load Balancer dan OrchestratorFree Let’s Encrypt SSL Certificates Integration for the Most Popular Software StacksHighly Available dan Auto-Scalable Magento ClusterCyclos - a Payment Platform for Large Businesses and OrganisationsCron-Based Scheduler untuk Hibernasi Lingkungan OtomatisMinio Cluster - S3 Compatible Object StorageAuto-Scalable Docker Engine dan Docker Swarm ClusterSimple Automated CI/CD Pipeline untuk Proyek GitHub dan GitLabJava Memory Agent untuk Pengoptimalan Penggunaan RAM ContainerImpor file manifest yang sesuai melalui dashboard untuk segera mendapatkan solusi Anda. Selain itu, Anda dapat menjelajahi kode sumber dari setiap paket, menduplikat repositori untuk diri Anda sendiri dan menyesuaikannya hingga kebutuhan Anda sebelum instalasi. 
:::

## Installing Solution from Marketplace{#installing-solution-from-marketplace}

Di bawah ini, kami akan memberikan contoh instalasi solusi yang dikemas.

1\. Untuk menemukan aplikasi tertentu, gunakan kotak **Search** khusus di sudut kiri atas bagian _**Marketplace**_. Ketik frasa, dan itu akan dicari dalam nama dan deskripsi solusi (baik untuk aplikasi maupun add-on).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-2.png" alt="search within marketplace" width="40%"/>

2\. Kami akan menggunakan **WordPress Standalone Kit** sebagai contoh. Pilih dari hasil pencarian yang diusulkan untuk segera membuka bingkai instalasi. Atau, Anda dapat menemukan solusi yang diperlukan secara manual dalam daftar yang dikategorikan (bagian _Content Management_ dalam kasus kami), arahkan kursor ke atas untuk membuka detail tambahan, dan klik **Install**.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-3.png" alt="install solution from marketplace" width="100%"/>

3\. Berdasarkan paket tertentu, Anda mungkin perlu memberikan beberapa data tambahan untuk menyesuaikan solusi hingga sesuai kebutuhan Anda. Sebagai contoh, itu bisa menjadi jumlah node yang diinginkan atau ketersediaan opsi spesifik.

Untuk ikhtisar yang mendetail tentang keunikan [WordPress Standalone Hosting](<https://www.virtuozzo.com/company/blog/wordpress-hosting-standalone-container/>), lihat artikel yang ditautkan di blog kami. Secara umum, pengaturan dasar (yaitu diwajibkan oleh aplikasi mana pun) adalah nama environment, [alias](<https://docs.dewacloud.com/docs/environment-aliases/>), dan, jika tersedia, [region](<https://docs.dewacloud.com/docs/environment-regions/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-4.png" alt="solution installation frame" width="70%"/>

Klik **Install** untuk melanjutkan.

4\. Proses instalasi mungkin memerlukan waktu beberapa menit, tergantung pada solusi yang dipilih.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-5.png" alt="solution automatic installation" width="50%"/>

:::tip 
Anda dapat melacak proses instalasi paket JPS dengan detail melalui console Cloud Scripting. Saat masuk ke akun dashboard Anda, tambahkan sufiks /console ke URL: https://app.{platformDomain}/console 
<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-6.png" alt="platform console" width="100%"/>
:::

5\. Setelah semua konfigurasi yang diperlukan, Anda akan melihat bingkai keberhasilan. Dalam kasus kami, itu juga menyediakan data administrasi yang sesuai (yang juga dikirim melalui email notifikasi yang sesuai).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-7.png" alt="marketplace installation success" width="60%"/>

Klik tombol **Open in Browser**.

6\. Aplikasi siap pakai Anda akan dibuka di tab browser baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cloud-scripting-and-jps/marketplace/marketplace-8.png" alt="WordPress automatically installed" width="100%"/>

Itu saja! Sekarang, Anda dapat menikmati menggunakan aplikasi Anda.

## Baca Juga{#whats-next}

  * [JPS Overview](<https://docs.dewacloud.com/docs/jps/>)
  * [Application Manifest](<https://docs.dewacloud.com/docs/application-manifest/>)
  * [Cloud Scripting](<https://docs.cloudscripting.com/>)