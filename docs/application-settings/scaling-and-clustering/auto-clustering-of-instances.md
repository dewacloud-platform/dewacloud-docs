---
sidebar_position: 6
slug: /auto-clustering-of-instances
title: Auto-Clustering of Instances
---
# Auto-Clustering of Instances via Topology Wizard

Platform ini menyediakan fitur otomatisasi cluster on-demand untuk beberapa template yang dikelola. Otomatisasi semacam ini secara signifikan menyederhanakan dan mempercepat pembuatan cluster siap produksi yang andal untuk proyek Anda.

Berikut ini poin-poin yang akan kita bahas:

  * [supported stacks](https://docs.dewacloud.com/docs/#templates-with-supported-auto-clustering) (dengan spesifik cluster)
  * [auto-clustering management](https://docs.dewacloud.com/docs/#auto-clustering-management)
  * [cloud scripting usage](https://docs.dewacloud.com/docs/#setting-up-auto-clusterization-with-cloud-scripting)

## Templates with Supported Auto-Clustering{#templates-with-supported-auto-clustering}

Saat ini, template berikut mendukung fitur clustering yang baru ditambahkan (dengan lebih banyak stack yang akan ditambahkan di masa mendatang):

  * **application servers** \- _[Tomcat/TomEE](https://docs.dewacloud.com/docs/#tomcattomee)_ , _[GlassFish](https://docs.dewacloud.com/docs/#glassfish)_ , _[Payara](https://docs.dewacloud.com/docs/#payara)_ , _[Jenkins](https://docs.dewacloud.com/docs/#jenkins)_ , _[WildFly](https://docs.dewacloud.com/docs/#wildfly)_
  * **SQL databases** \- _[MySQL](https://docs.dewacloud.com/docs/#mysql)_ , _[MariaDB](https://docs.dewacloud.com/docs/#mariadb)_ , _[Percona](https://docs.dewacloud.com/docs/#percona)_ , _[PostgreSQL](https://docs.dewacloud.com/docs/#postgresql)_
  * **NoSQL database** \- _[Couchbase](https://docs.dewacloud.com/docs/#couchbase)_ , _[MongoDB](https://docs.dewacloud.com/docs/#mongodb)_ , _[Redis](https://docs.dewacloud.com/docs/#redis)_ , _[OpenSearch](https://docs.dewacloud.com/docs/#opensearch)_
  * **storage server** \- _[Shared Storage Container](https://docs.dewacloud.com/docs/#shared-storage-container)_

:::tip
Penyedia hosting layanan tertentu Anda dapat mengonfigurasi dan menerapkan auto-clustering untuk beberapa stack tambahan yang tidak terdefinisi dalam daftar.
:::

### Tomcat/TomEE{#tomcattomee}

Cluster Tomcat/TomEE yang sangat tersedia yang dapat menyeimbangkan beban di seluruh node komputasi untuk meningkatkan kinerja dan ketahanan. Implementasi ini menyediakan replikasi sesi, replikasi atribut konteks, dan deployment file WAR di seluruh cluster.

:::warning
Fitur **Auto-Clustering** untuk Tomcat dan TomEE tersedia sejak versi stack berikut:
Tomcat - 10.0.5; 9.0.45; 8.5.64; 7.0.108
TomEE - 9.0.0-M3; 8.0.5
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/00-tomcat-tomee-cluster-scheme.svg" alt="Tomcat/TomEE cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/tomcat/)

### GlassFish{#glassfish}

Interkoneksi server GlassFish dengan replikasi sesi yang sudah dikonfigurasi dan penyeimbangan beban.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/01-glassfish-cluster-scheme.svg" alt="GlassFish cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/glassfish/)

### Payara{#payara}

Interkoneksi server Payara dengan replikasi sesi yang sudah dikonfigurasi dan penyeimbangan beban.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/02-payara-cluster-scheme.svg" alt="Payara cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/payara/)

### Jenkins{#jenkins}

Node master Jenkins dalam mode master-slave dengan pekerja **Java Engine** yang dapat diskalakan secara otomatis dan plugin yang sudah diinstal untuk mendukung otomatisasi build dan deployment dalam pengaturan **CI** dan **CD**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/03-jenkins-cluster-scheme.svg" alt="Jenkins cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/jenkins/)

### WildFly{#wildfly}

Node WildFly dalam mode _Domain Mode_ dengan clustering diaktifkan untuk mendapatkan ketersediaan tinggi dan menjamin kinerja terus-menerus dari aplikasi **Java EE** yang di-deploy.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/04-wildfly-cluster-scheme.svg" alt="WildFly cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/wildfly/)

### MySQL{#mysql}

_Auto-Clustering hanya disediakan untuk MySQL versi 5.7.x dan 8.x._

Clusterisasi otomatis database dengan replikasi yang sudah dikonfigurasi dan auto-discovery node.

Berdasarkan kebutuhan Anda, Anda dapat memilih **Scheme** dari jenis berikut:

  * **Primary-Primary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan dua database utama yang saling terhubung. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/05-mysql-cluster-primary-primary-scheme-1.svg" alt="MySQL cluster primary-primary scheme" width="100%"/>

  * **Primary-Secondary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan satu database utama dan satu sekunder. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/06-mysql-cluster-primary-secondary-scheme-1.svg" alt="MySQL cluster primary-secondary scheme" width="100%"/>

[Learn More »](https://github.com/jelastic-jps/mysql-cluster)

### MariaDB{#mariadb}

_Auto-Clustering hanya disediakan untuk versi 10.x MariaDB._

Clusterisasi otomatis database dengan replikasi yang sudah dikonfigurasi dan auto-discovery node.

Berdasarkan kebutuhan Anda, Anda dapat memilih **Scheme** dari jenis berikut:

  * **Primary-Primary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan dua database utama yang saling terhubung. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/07-mariadb-cluster-primary-primary-scheme.svg" alt="MariaDB cluster primary-primary scheme" width="100%"/>

  * **Primary-Secondary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan satu database utama dan satu sekunder. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/08-mariadb-cluster-primary-secondary-scheme.svg" alt="MariaDB cluster primary-secondary scheme" width="100%"/>

  * **Galera** Cluster

Semua server dapat menerima pembaruan bahkan jika dikeluarkan secara bersamaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/09-mariadb-cluster-galera-scheme.svg" alt="MariaDB cluster Galera scheme" width="100%"/>

[Learn More »](https://github.com/jelastic-jps/mysql-cluster)

### Percona{#percona}

Clusterisasi otomatis database dengan replikasi yang sudah dikonfigurasi dan auto-discovery node.

Berdasarkan kebutuhan Anda, Anda dapat memilih **Scheme** dari jenis berikut:

  * **Primary-Primary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan dua database utama yang saling terhubung. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/09.1-percona-cluster-primary-primary-scheme.svg" alt="Percona cluster Primary-Primary scheme" width="100%"/>

  * **Primary-Secondary** with Extra Secondaries

Replikasi yang sudah dikonfigurasi dengan satu database utama dan satu sekunder. Selama scaling horizontal, cluster diperluas dengan node sekunder tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/09.2-percona-cluster-primary-secondary-scheme.svg" alt="Percona cluster Primary-Secondary scheme" width="100%"/>

  * **XtraDB** Cluster

Solusi clustering database yang memastikan ketersediaan tinggi, mencegah downtime dan kehilangan data, serta menyediakan skalabilitas linear untuk lingkungan yang berkembang.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/09.3-percona-cluster-xtradb-scheme.svg" alt="Percona cluster XtraDB scheme" width="100%"/>

[Learn More »](https://github.com/jelastic-jps/mysql-cluster)

### PostgreSQL{#postgresql}

Cluster database PostgreSQL yang sudah dikonfigurasi dengan replikasi primary-secondary asynchronous dan penambahan otomatis node baru ke dalam cluster (sebagai sekunder).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/10-postgresql-cluster-primary-secondary-scheme.svg" alt="PostgreSQL cluster primary-secondary scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/postgresql/)

### Couchbase{#couchbase}

Server Couchbase yang saling terhubung secara otomatis dengan auto-scaling dan rebalancing yang sudah dikonfigurasi untuk menyediakan sistem penyimpanan data yang sangat tersedia.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/11-couchbase-cluster-scheme.svg" alt="Couchbase cluster scheme" width="100%"/>

[Learn More »](https://github.com/jelastic-jps/couchbase)

### MongoDB{#mongodb}

Konfigurasi otomatis set replika MongoDB yang sangat tersedia dan andal dengan auto-discovery node baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/12-mongodb-cluster-scheme.svg" alt="MongoDB cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/mongodb-auto-clustering/)

### Redis{#redis}

Otomatisasi untuk implementasi Redis Cluster yang terdistribusi - penyimpanan struktur data dalam memori open-source. Biasanya digunakan untuk caching, penyimpanan data, sebagai broker pesan, dan tugas lainnya. Topologi yang disediakan terdiri dari setidaknya tiga server Primary, masing-masing dengan node Secondary untuk memastikan distribusi beban baca dan pemulihan otomatis jika Primary turun.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/12.1-redis-cluster-single-region-topology.svg" alt="Redis cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/redis-cluster/)

### OpenSearch{#opensearch}

Clusterisasi otomatis mesin pencari open-source yang didorong oleh komunitas, yang menyediakan pencarian teks lengkap yang terdistribusi dan mendukung banyak tenant. Solusi ini menyediakan pengaturan bawaan untuk menambahkan _OpenSearch Dashboards_ untuk visualisasi data dan _Logstash_ untuk memproses log.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/12.2-opensearch-cluster-scheme.png" alt="OpenSearch cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/opensearch-cluster/)

### Shared Storage Container{#shared-storage-container}



Cluster penyimpanan yang dikonfigurasi secara otomatis, dapat diandalkan (volume yang direplikasi) berdasarkan solusi [Gluster](https://www.gluster.org/), yang memastikan keamanan data. Jika terjadi kegagalan satu atau beberapa node, klien _AutoFS_ secara otomatis beralih ke instance yang berfungsi, menyediakan penyimpanan dengan ketersediaan tinggi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/13-shared-storage-cluster-scheme.svg" alt="Shared Storage cluster scheme" width="100%"/>

[Learn More »](https://docs.dewacloud.com/docs/shared-storage-container/)

## Auto-Clustering Management{#auto-clustering-management}

1\. Fitur _**Auto-Clustering**_ dapat diaktifkan untuk grup node melalui switcher dengan nama yang sama di bagian tengah topology wizard (jika tersedia untuk [stack yang dipilih](https://docs.dewacloud.com/docs/stacks/)).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/14-wizard-auto-clustering-switcher.png" alt="wizard auto-clustering switcher" width="100%"/>

:::tip
Berdasarkan implementasi spesifik, opsi **Auto-Clustering** bisa:
  * diaktifkan secara wajib (misalnya untuk database **Couchbase**)
  * disediakan dengan beberapa pengaturan tambahan (misalnya skema cluster dan load balancer **ProxySQL** untuk database **MySQL**)
  * dibatasi oleh jumlah minimum/maksimum node dan/atau mode scaling (misalnya untuk tipe **MariaDB Galera**)
:::

2\. Untuk mendapatkan informasi tambahan tentang cluster yang akan dibuat, Anda dapat mengarahkan kursor ke tanda tanya di samping switcher. Dalam frame pop-up yang sesuai, Anda akan menemukan deskripsi singkat, yang biasanya dilengkapi dengan skema topologi dan tautan ke tinjauan yang lebih rinci.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/18-auto-clustering-hint-description.png" alt="auto-clustering hint description" width="100%"/>

:::tip
Info tambahan tentang berbagai tipe cluster database dapat dilihat dengan mengarahkan kursor ke bagian **Scheme** yang sesuai.
:::

3\. Pengaturan lainnya dapat [dikonfigurasi](https://docs.dewacloud.com/docs/setting-up-environment/) seperti halnya environment biasa.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/20-glassfish-cluster-at-dashboard.png" alt="glassfish cluster at dashboard" width="100%"/>

:::warning
Setelah dikonfigurasi, auto-clustering tidak dapat dinonaktifkan dari topology wizard.
:::

4\. Jika diperlukan, Anda dapat melacak log konfigurasi cluster melalui konsol platform:

```
https://app.**[{platformDomain}](https://docs.dewacloud.com/docs/paas-hosting-providers/)**/console
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/auto-clustering-of-instances/21-cloud-scripting-console.png" alt="cloud scripting console" width="100%"/>

Sebagai contoh, Anda dapat menggunakan informasi ini untuk debugging saat mengembangkan solusi paket dengan Cloud Scripting, yang memanfaatkan fitur auto-clustering.

## Setting Up Auto-Clusterization with Cloud Scripting{#setting-up-auto-clusterization-with-cloud-scripting}

Untuk mendefinisikan pengaturan auto-clustering dalam [JPS solutions](https://docs.dewacloud.com/docs/jps/), properti baru _**cluster**_ dapat digunakan. Contohnya:

1\. Aktifkan atau nonaktifkan auto-clustering untuk layer tertentu.

```json
"nodeGroup": "couchbase", 
"cluster": true | false
```

2\. Parameter tambahan untuk auto-clustering dapat disediakan sebagai berikut (misalnya, diperlukan untuk memilih skema cluster database):

```json
"nodeGroup": "mysql", 
"cluster": {
  "scheme": "master"
}
```

3\. Jika diperlukan, JPS [manifest](https://docs.cloudscripting.com/creating-manifest/basic-configs/) default dengan langkah-langkah clusterisasi dapat digantikan dengan yang kustom:

```json
"nodeGroup": "mysql", 
"cluster": {
  "jps": "http://.../custom-manifest.jps",  
  "settings": {
    "scheme": "master"
  }
}
```

4\. Berdasarkan persyaratan cluster tertentu, beberapa pembatasan topologi mungkin diperlukan (misalnya jumlah minimum/maksimum node, mode scaling, dll.). Ini diterapkan melalui properti _**validation**_.

Parameter ini dapat ditentukan untuk paket JPS apa pun, misalnya periksa contoh YAML di bawah ini:

```yaml
type: install
name: Validation
nodes:  
  image: alpine  
  nodeGroup: cp  
  count: 2  
  validation:    
    minCount: 2    
    maxCount: 3    
    scalingMode: stateful
```

Itu saja! Sekarang, Anda dapat dengan mudah menggunakan solusi auto-clustering yang didukung oleh platform, serta mendapatkan manfaat dari implementasi spesifiknya.

## Baca Juga{#whats-next}

  * [Automatic Vertical Scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/)
  * [Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)
  * [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
  * [JPS Overview](https://docs.dewacloud.com/docs/jps/)
  * [Cluster in the Cloud](https://docs.dewacloud.com/docs/cluster-in-cloud/)