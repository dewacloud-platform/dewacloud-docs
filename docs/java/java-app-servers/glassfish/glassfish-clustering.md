---
sidebar_position: 3
slug: /glassfish-clustering
title: GlassFish Clustering
---

# GlassFish Clustering in the Cloud

**[GlassFish](<https://docs.dewacloud.com/docs/glassfish>)** adalah server aplikasi tingkat perusahaan open-source dengan keandalan dan kinerja tinggi, yang dapat menjalankan proyek Java EE apa pun. Ini memberikan aplikasi Anda kemampuan clustering penuh dan memiliki berbagai fungsi tambahan.

Dengan platform ini, Anda dapat menggunakan GlassFish tidak hanya sebagai server terpisah untuk hosting aplikasi Java Anda tetapi juga sebagai instance cluster dengan ketersediaan tinggi yang dapat mereplikasi secara penuh. Mari kita lihat cara mengatur GlassFish cluster di platform ini dengan dua cara berbeda:

  * [instalasi otomatis via JPS](<https://docs.dewacloud.com/docs/#auto-deploy>)
  * [deployment manual](<https://docs.dewacloud.com/docs/#manual-deploy>)

## GlassFish Cluster Automatic Deployment via JPS Package{#glassfish-cluster-automatic-deployment-via-jps-package}

Dapatkan cluster GlassFish Anda siap dan berjalan hanya dalam beberapa menit menggunakan opsi instalasi sekali klik.

Proses [instalasi aplikasi via widget](<https://docs.dewacloud.com/docs/marketplace>) sederhana - cukup klik tombol **Get It Hosted Now**, ketik email Anda dan dapatkan cluster yang di-hosting sambil melewati langkah-langkah instalasi manual.

Solusi cluster GlassFish, diinstal dengan opsi ini, dibangun di atas [Docker containers](<https://docs.dewacloud.com/docs/container-types>). Implementasi semacam itu memberikan reliabilitas tambahan dengan mengoperasikan setiap node, arsitektur cluster yang telah ditentukan (yaitu _Load Balancer_, _Worker Nodes_, _Domain Administration Server_), sebagai instance yang terisolasi. Dalam hal ini, [HAProxy](<https://hub.docker.com/r/jelastic/haproxy-managed-lb/>) Docker image digunakan sebagai _Load Balancer_ dan template [GlassFish](<https://github.com/jelastic-jps/glassfish>) berfungsi sebagai basis untuk _Worker nodes_ dan _DAS_.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-cluster/glassfish-cluster-1.png" alt="JPS GlassFish Cluster on Docker" max-width="100%"/>

Untuk mendapatkan wawasan yang lebih baik tentang pemasangan dan pengelolaan paket ini, rujuk ke halaman [GlassFish Cluster dengan Automatic Load Balancing](<https://www.virtuozzo.com/company/blog/how-to-configure-glassfish-cluster-with-automatic-load-balancing/>).

:::tip

Jika layanan Anda belum begitu banyak dikunjungi, Anda bisa mencoba paket JPS dengan solusi GlassFish tidak berkluster. Lihatlah Koleksi JPS, di mana terdapat banyak solusi yang siap digunakan dan dapat dengan mudah diinstal ke Platform dengan satu klik.

:::

## GlassFish Cluster Manual Deployment{#glassfish-cluster-manual-deployment}

Jika Anda ingin menguasai sepenuhnya konfigurasi dan deployment GlassFish cluster Anda, petunjuk di bawah ini dapat berguna. Ini mencakup deskripsi spesifik utama konfigurasi cluster GF dan cara implementasinya di dalam platform.

Sesuai dengan arsitektur clustering GlassFish native, ini menggunakan konsep **administrative domain**. Administrative domain semacam itu terdiri dari **clusters** dan **instances**, yang dikelola menggunakan **Domain Administration Server** (DAS).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-cluster/glassfish-cluster-2.png" alt="glassfish clustering" max-width="100%"/>

Untuk manajemen repository pusat, Anda dapat menggunakan **Admin Console**, GUI interaktif yang mendukung semua fitur GlassFish yang tersedia. **Group Management Service** (GMS) menyediakan informasi tentang cluster, dan DAS, seperti yang disebutkan di atas, bertanggung jawab untuk mengelola Java instances dalam administrative domain.

### Sessions Replication in GlassFish: How Does It Work?{#sessions-replication-in-glassfish-how-does-it-work}

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-cluster/glassfish-cluster-3.png" alt="glassfish replication" width="60%"/>

Instances dalam setiap cluster dipasangkan. Jika instance utama dalam cluster gagal, semua pengguna pada instance ini secara otomatis diarahkan ke instance kedua dalam cluster. Di mana pengguna akhir tidak akan melihat perubahan apa pun: instance yang direplikasi memiliki semua sesi dari instance yang gagal. Jika kebetulan kedua instance dalam sebuah cluster gagal, pengguna hanya akan beralih ke cluster lain. Untuk switching semacam itu, platform menggunakan **NGINX-balancer**. Ini menangani dan membagikan semua permintaan antar cluster dan instance berdasarkan beban dan ketersediaan.

Selain itu, Anda disediakan sistem penskalaan lengkap: dengan penskalaan [horizontal](<https://docs.dewacloud.com/docs/horizontal-scaling>) dan penskalaan [vertical](<https://docs.dewacloud.com/docs/automatic-vertical-scaling>), ukuran dan jumlah cluster dapat berubah secara manual atau otomatis sesuai dengan peningkatan atau penurunan beban.

Untuk mendapatkan lingkungan cluster dengan GlassFish yang siap di platform ini, cukup pilih GlassFish sebagai server aplikasi Anda dan tingkatkan jumlah node seperti yang ditunjukkan pada gambar.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-cluster/glassfish-cluster-4.png" alt="glassfish hosting" max-width="100%"/>

Jangan lupa untuk mengaktifkan fitur **High Availability**: ini akan memasangkan semua node untuk menciptakan cluster(s).

Itulah semua konfigurasi yang Anda butuhkan! Cukup klik tombol **Create** dan dalam satu menit Anda akan mendapatkan environment yang sangat andal dengan instance replication di setiap cluster dan cluster replication di dalam environment.

## Baca Juga{#whats-next}

  * [GlassFish](<https://docs.dewacloud.com/docs/glassfish/>)
  * [GlassFish Auto-Clustering](<https://www.virtuozzo.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/>)
  * [JDBC Connection Pool](<https://docs.dewacloud.com/docs/jdbc-connection-pool/>)