---
sidebar_position: 1
slug: /opensearch-cluster
title: Auto-Clustering
---
# Cluster OpenSearch

**[Cluster OpenSearch](<https://opensearch.org/>)** adalah mesin pencari open-source yang dipimpin oleh komunitas. Ini paling cocok untuk pencarian aplikasi atau kasus analitik log, karena memungkinkan orang untuk dengan mudah mencari, mengagregasi, melihat, dan menganalisis data. OpenSearch menyediakan suite pencarian dan analitik yang aman dan berkualitas tinggi yang dapat dengan mudah dimodifikasi dan diperluas dengan fungsionalitas tambahan.

_OpenSearch berasal dari Elasticsearch 7.10.2 yang dilisensikan di bawah Apache 2.0, memungkinkan produk ini digunakan, dimodifikasi, diperluas, dimonetisasi, dan dijual kembali secara bebas._

Panduan ini memberikan informasi tentang:

  * [Ikhtisar Komponen Cluster OpenSearch](<https://docs.dewacloud.com/docs/#opensearch-cluster-components-overview>)
  * [Instalasi Cluster OpenSearch](<https://docs.dewacloud.com/docs/#opensearch-cluster-installation>)
  * [Kinerja OpenSearch vs Elasticsearch](<https://docs.dewacloud.com/docs/#opensearch-vs-elasticsearch-performance>)

## Ikhtisar Komponen Cluster OpenSearch{#opensearch-cluster-components-overview}

Platform menyediakan Cluster OpenSearch menggunakan tiga tumpukan bersertifikat yang disatukan menjadi satu solusi auto-clustering:

  * **[OpenSearch](<https://docs.dewacloud.com/docs/#opensearch>)** - mesin pencari open-source yang dipimpin oleh komunitas yang menyediakan pencarian teks penuh yang terdistribusi dan dapat multi-penyewa
  * **[OpenSearch Dashboards](<https://docs.dewacloud.com/docs/#opensearch-dashboards>)** (opsional) - visualisasi untuk data yang disimpan di dalam node _OpenSearch_ (berasal dari _Kibana 7.10.2_)
  * **[Logstash](<https://docs.dewacloud.com/docs/#logstash>)** (opsional) - pemrosesan data

:::tip
Selain itu, add-on Beats dapat diinstal untuk pengirim data satu tujuan yang mengirim data dari node klien ke Logstash atau OpenSearch.
:::

Dalam solusi seperti itu, data dikumpulkan di node klien oleh **Beats** Data Shippers, dikirim ke **Logstash** (yang mengubahnya dengan cara yang diperlukan), dan disimpan di **OpenSearch**. **OpenSearch Dashboard** adalah alat visualisasi tambahan.

### OpenSearch{#opensearch}

Tumpukan **OpenSearch** adalah komponen inti dan satu-satunya komponen wajib dari cluster. Ini diinisialisasi dalam _mode cluster_ bahkan ketika satu node dibuat, yang membuat skala horizontal lebih mudah, lebih cepat, dan lebih aman.

Setelah dibuat, node OpenSearch tersedia di port _9200_ untuk komunikasi internal antara node lingkungan dan port _4848_ untuk layanan eksternal melalui load balancer bersama. HTTP basic auth digunakan dalam kedua kasus (kata sandi dapat diatur ulang menggunakan tombol **Reset Password**).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-1.png" alt="OpenSearch reset password" width="100%"/>

Tumpukan OpenSearch mendapatkan semua fungsionalitas yang tersedia untuk template bersertifikat lainnya - manajer file dashboard, Web SSH, penampil log dashboard, dll.

Selain itu, fungsionalitas [redeploy](<https://www.virtuozzo.com/application-platform-docs/container-redeploy/>) platform menyediakan proses pembaruan yang sederhana. Namun, hanya redeployment ke versi yang sama atau lebih baru yang diizinkan - downgrade dibatasi.

### OpenSearch Dashboards{#opensearch-dashboards}

Node OpenSearch tersedia melalui browser, tetapi hanya menampilkan JSON dengan respons API (diperlukan untuk panggilan API). Alat utama untuk memvisualisasikan data adalah **OpenSearch Dashboards** (pengganti _Kibana_). Semua konfigurasi interkoneksi dilakukan secara otomatis - solusi siap digunakan secara out-of-the-box dan tidak memerlukan konfigurasi manual. Akses tersedia dengan kredensial yang sama seperti untuk node OpenSearch.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-2.png" alt="login OpenSearch Dashboards" width="60%"/>

Setelah login, antarmuka OpenSearch Dashboards ditampilkan. Dashboard menyediakan UI untuk interaksi yang nyaman dengan API OpenSearch dan pengeditan data Anda (setelah membuat pola indeks).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-3.png" alt="OpenSearch Dashboard UI" width="100%"/>

:::warning
OpenSearch Dashboards bukanlah tumpukan terpisah dan tidak dapat dibuat terpisah dari OpenSearch. Selain itu, terbatas pada satu node karena skala tidak memberikan manfaat tambahan.
:::

Semua fungsionalitas reguler dari template bersertifikat (manajer file dashboard, Web SSH, firewall, log) juga tersedia untuk node ini.

### Logstash{#logstash}

**Logstash** adalah komponen pemroses data dari cluster OpenSearch yang dikonfigurasi secara otomatis oleh platform. Di bawah ini, Anda dapat melihat contoh auto-konfigurasi default untuk _**/etc/logstash/conf.d/logstash-sample.conf**_:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-4.png" alt="Logstash configs" width="100%"/>

Input untuk _[Beats](<https://www.virtuozzo.com/application-platform-docs/#beats-add-on>)_ ditetapkan pada port _5044_, dan output OpenSearch ditentukan dengan mengatur host, username, dan password untuk interkoneksi. [Plugin](<https://www.elastic.co/guide/en/logstash/current/working-with-plugins.html>) untuk jenis input lainnya dapat diinstal dengan alat _logstash-plugin_, dan konfigurasi dapat ditambahkan ke file yang sama (dengan port lain).

:::warning
Logstash bukanlah tumpukan terpisah dan tidak dapat dibuat terpisah dari OpenSearch. Anda dapat menambahkan sebanyak mungkin node Logstash yang diperlukan - skala dalam mode stateful untuk menyediakan konfigurasi awal. Namun, setiap node dapat dikonfigurasi ulang untuk transformasi data yang berbeda.
:::

### Add-On Beats{#beats-add-on}

**Beats** adalah platform gratis dan open untuk pengirim data satu tujuan. Mereka mengirim data dari node klien ke Logstash atau OpenSearch.

Anda dapat menginstal [add-on Beats](<https://github.com/jelastic-jps/beats-jps-addon>) di node mana pun (kecuali yang berbasis _alpine_) yang dibuat di dalam platform dan menentukan kredensial untuk menghubungkan ke cluster OpenSearch atau [Docker kustom](<https://docs.dewacloud.com/docs/container-types/#custom-docker-containers>) dengan instance _ElasticSearch_. Dua versi add-on tersedia:

  * _**7.12.1**_ - untuk mengirim data langsung ke OpenSearch (lihat [tabel kompatibilitas](<https://opensearch.org/docs/latest/clients/agents-and-ingestion-tools/index/>))

:::warning
Untuk koneksi langsung, Anda perlu menambahkan baris berikut ke konfigurasi OpenSearch dan me-restart node:
1compatibility.override_main_response_version: true
:::

  * _**latest**_ - untuk mengirim data ke OpenSearch melalui [Logstash](<https://docs.dewacloud.com/docs/#logstash>)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-5.png" alt="Beats add-on" width="100%"/>

Selama instalasi, Anda perlu memberikan data berikut:

  * _**Installed Agents**_ - pilih jenis Beats yang diperlukan:
    * **[Filebeat](<https://www.elastic.co/beats/filebeat>)** - meneruskan dan memusatkan log dan file. Pengaturan awal sudah tersedia untuk banyak node bersertifikat: _Apache_ (semua), _NGINX_ (semua), _HAProxy_, _Redis_, _Postgres_, _MySQL_, _MariaDB_, _Percona_, _MongoDB_. _[Tomcat/TomEE](<https://arshpunia.medium.com/using-filebeat-to-ship-tomcat-logs-to-elasticsearch-7e4325373c7a>)_ memerlukan konfigurasi khusus.
    * **Metricbeat** - mengumpulkan metrik dari sistem dan layanan Anda.
    * **Journalbeat** - meneruskan dan memusatkan data log dari _systemd journals_. Dipasang sebagai agen di server Anda, Journalbeat memantau lokasi jurnal yang Anda tentukan, mengumpulkan peristiwa log, dan meneruskannya ke _OpenSearch_ atau _Logstash_.
    * **Packetbeat** - memantau lalu lintas jaringan Anda untuk memastikan tingkat kinerja dan keamanan yang tinggi. Packetbeat adalah analizer paket jaringan yang ringan.
    * **Heartbeat** - memantau layanan untuk ketersediaan mereka dengan probing aktif. Ini memeriksa waktu respons dan apakah URL yang diberikan aktif, kemudian mengirimkan informasi ini ke tumpukan lain untuk analisis lebih lanjut.
  * _**Beats OSS Version**_ - pilih versi yang diinginkan dari agen
  * _**OpenSearch Host**_ - masukkan host OpenSearch (atau Elasticsearch)
  * _**Credentials**_ - berikan informasi akses untuk host OpenSearch yang ditentukan (_User_ dan _Password_)
  * _**OpenSearch Dashboards Host**_ - masukkan host OpenSearch Dashboards (mungkin diperlukan untuk tujuan visualisasi)
  * _**Logstash Host**_ - masukkan host Logstash (jika interkoneksi dilakukan melalui Logstash)

:::warning
Mengirim data secara bersamaan ke output OpenSearch dan Logstash tidak didukung - hanya satu output yang dapat digunakan sekaligus. Jika Anda ingin melewatkan data melalui Logstash - silakan tentukan hanya host dan port Logstash (data host dan kredensial OpenSearch tidak diperlukan).
:::

  * _**Environment name**_ - pilih

 lingkungan target
  * _**Nodes**_ - pilih lapisan target

Pengaturan ini juga dapat diedit untuk add-on yang sudah terpasang menggunakan tombol **Configure**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-6.png" alt="configure Beats add-on" width="100%"/>

## Instalasi Cluster OpenSearch{#opensearch-cluster-installation}

Pembuatan Cluster OpenSearch di platform adalah proses yang sederhana dan sepenuhnya otomatis yang dapat dilakukan langsung dari [wizard topologi](<https://docs.dewacloud.com/docs/setting-up-environment/>).

Pilih tumpukan **OpenSearch** di bagian _database NoSQL_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-7.png" alt="OpenSearch topology wizard" width="100%"/>

Tumpukan secara otomatis dikonfigurasi sebagai cluster karena fitur [auto-clustering](<https://docs.dewacloud.com/docs/auto-clustering/>). Selain itu, Anda memiliki opsi tambahan untuk menambahkan komponen **OpenSearch Dashboards** dan **Logstash**.

## Kinerja OpenSearch vs Elasticsearch{#opensearch-vs-elasticsearch-performance}

Proyek OpenSearch di-fork dari rilis terakhir ElasticSearch di bawah lisensi Apache 2.0 dan hampir sama dalam fungsionalitas. API-nya sepenuhnya sama.

Di bawah ini, kami membagikan hasil pengujian kinerja pada dua lingkungan Magento dengan topologi yang sama:

  * _Magento dengan Elasticsearch_

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-8.png" alt="ElasticSearch statistics" width="100%"/>

  * _Magento dengan OpenSearch_

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/opensearch/opensearch-9.png" alt="OpenSearch statistics" width="100%"/>

Seperti yang Anda lihat, OpenSearch menyediakan fungsionalitas dan kinerja yang sama seperti Elasticsearch dan dapat digunakan sebagai pengganti yang sepenuhnya dapat dipertanggungjawabkan.

## Baca Juga{#whats-next}

  * [Hosting Database](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Auto-Clustering dari Instance](<https://docs.dewacloud.com/docs/auto-clustering/>)
  * [Auto-Clustering MongoDB](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Skala Horizontal](<https://docs.dewacloud.com/docs/horizontal-scaling/>)