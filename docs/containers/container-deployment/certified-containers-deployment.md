---
sidebar_position: 1
slug: /certified-containers-deployment
title: Certified Containers Deployment
---

# Certified Containers Deployment{#certified-containers-deployment}

Platform menyediakan [software stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang paling populer sebagai solusi yang sudah pre-configured dan managed untuk deployment yang cepat dan pengelolaan yang nyaman. Semua certified containers ini diuji secara menyeluruh dan dioptimalkan khusus untuk digunakan dalam platform. Kustomisasinya termasuk update rutin ke versi perangkat lunak terbaru dan integrasi tambahan (seperti optimalisasi otomatis berdasarkan sumber daya yang di-assign, instalasi otomatis sertifikat SSL dan deployment aplikasi, built-in [auto-clustering](<https://docs.dewacloud.com/docs/auto-clustering/>), dll.).

1\. Deployment dari certified containers dilakukan melalui [topology wizard](<https://docs.dewacloud.com/docs/setting-up-environment/>), yang dapat dibuka dengan mengklik tombol **New Environment**.

![PaaS main buttons](#)

2\. Dalam jendela yang terbuka, beralih ke tab dengan bahasa pemrograman yang diinginkan (_Java_, _PHP_, _Ruby_, _.NET_, _Node.js_, atau _Python_).

![certified containers programming languages](#)

3\. Certified containers ditambahkan melalui bagian topologi di bagian kiri wizard. Di sini, stacks dikelompokkan berdasarkan tujuan mereka:

  * **[Load Balancers](<https://docs.dewacloud.com/docs/load-balancing/>)** \- stacks yang berfungsi sebagai titik masuk untuk environment guna mendistribusikan permintaan yang masuk dan menciptakan beban yang merata pada node lainnya
  * **[Application Servers](<https://docs.dewacloud.com/docs/tomcat/>)** (compute nodes) - web servers yang menjalankan aplikasi Anda
  * **[Databases](<https://docs.dewacloud.com/docs/database-hosting/>)** (_SQL_ & _NoSQL_) - solusi database untuk menyimpan dan mengelola data
  * **[Cache Node](<https://docs.dewacloud.com/docs/memcached/>)** \- sistem caching objek Memcached untuk mempercepat web applications dengan mengurangi beban database
  * **[Shared Storage](<https://docs.dewacloud.com/docs/shared-storage-container/>)** \- node penyimpanan khusus dengan dukungan NFSv4, ruang disk yang diperbesar, dan kinerja yang dioptimalkan
  * **[Elastic VPS](<https://docs.dewacloud.com/docs/vps/>)** \- virtual private servers di atas _CentOS_, _Ubuntu_, _Debian_, dan _Windows OS_
  * **[Build Node](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)** \- alat otomatisasi build untuk proyek Java
  * **Extra** (custom layers) - beberapa layanan tambahan atau salah satu dari stacks yang disebutkan di atas

![certified containers in topology wizard](#)

Gunakan bagian ini sebagai konstruktor yang membantu Anda memvisualisasikan dan menyesuaikan topologi Anda dengan mudah.

:::tip
Urutan blok yang ditampilkan di atas adalah urutan default. Namun, Anda dapat mengkombinasikannya dalam cara yang paling disukai untuk membuat topologi custom Anda.
:::

4\. Platform menawarkan beberapa opsi certified containers untuk setiap peran dalam topologi environment Anda. Cukup klik bagian yang diperlukan untuk memperluas daftar solusi yang paling populer. Misalnya, certified load balancers diwakili melalui opsi berikut:

![certified stack versions](#)

Jika Anda tidak dapat menemukan stack yang diperlukan, Anda dapat memeriksa kategori lain (misalnya application servers, databases) menggunakan opsi **More** atau cukup ketik nama untuk **Search** di antara semua template certified platform.

:::tip
Jika perangkat lunak yang diperlukan tidak tersedia sebagai template certified, Anda dapat mencoba menginstalnya sebagai custom container. Klik opsi **Docker Image** dan cari image yang sesuai di Docker Hub.
:::

5\. Anda dapat [mengkonfigurasi](<https://docs.dewacloud.com/docs/setting-up-environment/#configuring-nodes-resources-and-specifics>) node yang ditambahkan (_vertical_ dan _horizontal scaling_, _disk limit_, _public IPs_, dll.) melalui bagian tengah dari wizard. Certified containers dapat memiliki opsi tambahan, misalnya [Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>).

![environment with certified containers](#)

Itu saja! Klik **Create** dan tunggu beberapa menit hingga environment dengan certified containers dapat dideploy.

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Docker Engine Deployment](<https://docs.dewacloud.com/docs/docker-engine-deployment/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)