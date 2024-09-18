---
sidebar_position: 7
slug: /what-is-auto-clustering
title: What is Auto-Clustering
---
# Apa Itu Auto-Clustering

Di dunia modern, pentingnya ketersediaan data tidak bisa diremehkan. Dengan demikian, Anda ingin menjaga akses langsung ke informasi yang dibutuhkan dalam sekejap. Oleh karena itu, untuk solusi produksi dengan ukuran yang berarti, sangat disarankan untuk mengkonfigurasi **cluster**. Software clustering adalah teknik menggunakan setidaknya dua instance untuk satu layanan. Redundansi semacam ini tidak hanya menyediakan keandalan (sistem dapat menahan kegagalan setidaknya satu instance) tetapi juga membantu menangani beban yang tinggi.

Berdasarkan pengalaman, konfigurasi cluster dapat menjadi proses yang menantang yang membutuhkan investasi waktu yang cukup besar. Untuk membantu Anda, platform mengotomatisasi beberapa solusi clusterisasi yang paling populer dan dapat melaksanakannya secara on-demand langsung dari [topology wizard](https://docs.dewacloud.com/docs/setting-up-environment/). Otomatisasi semacam itu sangat menyederhanakan dan mempercepat pembuatan cluster siap produksi yang andal untuk proyek Anda.

## Menggunakan Auto-Clustering{#enabling-auto-clustering}

Saat ini, template berikut mendukung fitur Auto-Clustering melalui topology wizard:

* **application servers** \- _[Tomcat/TomEE](https://docs.dewacloud.com/docs/auto-clustering/#tomcattomee)_, _[GlassFish](https://docs.dewacloud.com/docs/auto-clustering/#glassfish)_, _[Payara](https://docs.dewacloud.com/docs/auto-clustering/#payara)_, _[Jenkins](https://docs.dewacloud.com/docs/auto-clustering/#jenkins)_, _[WildFly](https://docs.dewacloud.com/docs/auto-clustering/#wildfly)_
* **SQL databases** \- _[MySQL](https://docs.dewacloud.com/docs/auto-clustering/#mysql)_, _[MariaDB](https://docs.dewacloud.com/docs/auto-clustering/#mariadb)_, _[Percona](https://docs.dewacloud.com/docs/auto-clustering/#percona)_, _[PostgreSQL](https://docs.dewacloud.com/docs/auto-clustering/#postgresql)_
* **NoSQL database** \- _[Couchbase](https://docs.dewacloud.com/docs/auto-clustering/#couchbase)_, _[MongoDB](https://docs.dewacloud.com/docs/auto-clustering/#mongodb)_, _[Redis](https://docs.dewacloud.com/docs/auto-clustering/#redis)_, _[OpenSearch](https://docs.dewacloud.com/docs/auto-clustering/#opensearch)_
* **storage server** \- _[Shared Storage Container](https://docs.dewacloud.com/docs/auto-clustering/#shared-storage-container)_

:::tip
Selain opsi Auto-Clustering dalam topology wizard, sejumlah solusi clusterisasi yang telah dikemas dapat ditemukan di bawah kategori Clusters dari platform Marketplace.
:::

1. Pilih salah satu stack yang terdaftar dalam topology wizard. **Auto-Clustering** switcher yang sesuai akan tersedia di bagian tengah frame.

![stack auto-clustering in topology wizard](#)

2. Anda dapat mengarahkan kursor ke ikon **hint** untuk informasi tambahan tentang implementasi auto-clustering stack tertentu ini. Dalam deskripsi, Anda dapat menemukan tautan **Learn More** ke dokumentasi dengan gambaran yang lebih luas.

![auto-cluster description](#)

3. Juga, setelah mengaktifkan Auto-Clustering, beberapa konfigurasi tambahan dapat muncul untuk kustomisasi lebih lanjut dari cluster. Sebagai contoh, **MariaDB auto-cluster** memungkinkan untuk memilih _Scheme_ replikasi dan menambahkan _ProxySQL_ load balancer khusus untuk cluster database ini:

![auto-cluster additional configs](#)

## Materi Tambahan Auto-Clustering{#additional-materials-on-auto-clustering}

Platform menyediakan dokumentasi ekstensif, beberapa blog post, dan halaman GitHub yang didedikasikan tentang topik Auto-Clustering:

* [Auto-Clustering of Instances via Topology Wizard](https://docs.dewacloud.com/docs/auto-clustering/) \- mencantumkan stack yang mendukung fitur, menjelaskan manajemen dasar melalui wizard dan Cloud Scripting
* [MariaDB/MySQL Auto-Сlustering with Load Balancing and Replication](https://www.virtuozzo.com/company/blog/mysql-mariadb-database-auto-clustering-cloud-hosting/) \- clustering otomatis dan replikasi untuk MariaDB dan MySQL databases untuk high availability dan kinerja yang tinggi
* [PostgreSQL Auto-Clustering with Asynchronous Master-Slave Replication](https://www.virtuozzo.com/company/blog/postgresql-auto-clustering-master-slave-replication/) \- mendapatkan beberapa salinan data penting dalam replikasi master-slave otomatis untuk PostgreSQL database
* [MongoDB Replica Set Auto-Сlustering for High Availability and Performance](https://docs.dewacloud.com/docs/mongodb-auto-clustering/) \- clustering otomatis dan replikasi untuk MongoDB databases untuk redundancy, automated failover, dan high-availability
* [Out-of-Box GlassFish & Payara Clustering: Running Java EE Highly-Available Applications in the Cloud](https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/) \- menunjukkan cara mengatur cluster yang sangat tersedia dengan GlassFish dan Payara Micro untuk menjalankan Java EE applications
* [Jenkins Cluster Hosting for Continuous Integration and Delivery (CI/CD)](https://www.virtuozzo.com/company/blog/jenkins-cluster-hosting-continuous-integration-delivery/) \- otomatisasi continuous integration dan delivery dari Java applications Anda menggunakan pre-configured master-slave Jenkins cluster
* [WildFly Managed Domain in Containers: Automatic Micro Clustering and Scaling](https://www.virtuozzo.com/company/blog/wildfly-managed-domain-in-containers-auto-micro-clustering-and-scaling/) \- menjelaskan cara memperluas WildFly dari standalone server ke cluster dalam managed domain mode untuk menjalankan cloud-native microservices
* [Shared Storage Container Auto-Clustering](https://docs.dewacloud.com/docs/shared-storage-container/) \- mengkonfigurasi cluster penyimpanan yang andal dengan dukungan _AutoFS_ , _NFSv4_ , dan _GlusterFS_
* [Solutions Collection on GitHub](https://github.com/jelastic-jps) \- menyimpan solusi otomasi platform, termasuk Auto-Clustering (misalnya, [db-clustering](https://github.com/jelastic-jps/db-clustering), [wildfly](https://github.com/jelastic-jps/wildfly), [glassfish](https://github.com/jelastic-jps/glassfish), dan repositori lainnya)

## Baca Juga{#whats-next}

* [Cluster in the Cloud](https://docs.dewacloud.com/docs/cluster-in-cloud/)
* [Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)
* [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
* [Topology Wizard](https://docs.dewacloud.com/docs/setting-up-environment/)
* [Marketplace](https://docs.dewacloud.com/docs/marketplace/)
* [Software Stack Versions](https://docs.dewacloud.com/docs/software-stacks-versions/)