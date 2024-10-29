---
sidebar_position: 1
slug: /container-types
title: Container Types
---

# Container Types and Use Cases{#container-types-use-cases}

PaaS menggabungkan dua jenis container dalam satu platform. Teknologi containerisasi ini diarahkan untuk memecahkan masalah yang berbeda, tetapi orkestrasi platform mewarisi manfaat dari kedua implementasi.

  * _**[System Containers](<https://docs.dewacloud.com/docs/what-are-system-containers/>)**_ \- salah satu jenis container tertua, mirip dengan virtual machines. Ini adalah solusi berstatus dengan pusat sistem operasi yang dapat menjalankan beberapa proses. System containers biasanya digunakan untuk aplikasi tradisional atau monolitik, karena memungkinkan untuk hosting arsitektur, alat, dan konfigurasi yang diimplementasikan untuk VMs. Ada beberapa implementasi dari system containers: LXC/LXD, OpenVZ/Virtuozzo, BSD jails, Linux vServer, dan beberapa lainnya. Platform menggunakan solusi Virtuozzo.
  * _**[Application Containers](<https://docs.dewacloud.com/docs/what-are-application-containers/>)**_ \- jenis container yang relatif baru, yang biasanya menjalankan satu proses di dalamnya. Ini adalah solusi stateless dengan pusat microservice yang mudah diskalakan secara horizontal. Application containers paling cocok untuk infrastruktur yang tidak dapat diubah atau sementara. Beberapa implementasi application container tersedia di pasar: Docker, containerd, CRI-O, dan beberapa lainnya. Platform menggunakan Docker sebagai teknologi yang paling banyak diadopsi untuk application containers.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-1.png" alt="application container system container" width="60%"/>

Berbicara tentang containers saat ini, orang sering memikirkan teknologi Docker, karena sangat dipromosikan dan diadopsi selama beberapa tahun terakhir. Sebagian besar vendor cloud menawarkan Docker application containers di dalam Virtual Machines. Setiap VM menyertakan Guest OS dengan memori, CPU, dan jejak disk sendiri yang meningkatkan jumlah sumber daya yang diperlukan untuk menjalankan aplikasi dan dengan demikian membuat hostingnya lebih mahal. Dalam kasus platform, teknologi Docker berjalan di dalam system containers dalam kernel yang sama. Dengan demikian, mereka berbagi sumber daya OS dari sistem operasi host dan mengurangi konsumsi. Dan meskipun lebih ringan daripada VMs, container berjenjang ini masih sangat terisolasi dan aman.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-2.png" alt="system container vs virtual machine" width="80%"/>

Dalam platform, berbagai jenis container dapat digunakan untuk berbagai kasus penggunaan:

  * [Certified Managed Containers](<https://docs.dewacloud.com/docs/#certified-managed-containers>)
  * [Virtual Private Servers (Elastic VPS)](<https://docs.dewacloud.com/docs/#virtual-private-servers-elastic-vps>)
  * [Custom Docker Containers](<https://docs.dewacloud.com/docs/#custom-docker-containers>)
  * [Docker Engine CE (Docker Native)](<https://docs.dewacloud.com/docs/#docker-engine-ce-docker-native>)
  * [Kubernetes Cluster](<https://docs.dewacloud.com/docs/#kubernetes-cluster>)

Di bawah ini kita akan meninjau setiap kasus secara rinci, serta memberikan beberapa petunjuk tentang opsi mana yang dapat lebih sesuai untuk proyek Anda.

## Certified Managed Containers{#certified-managed-containers}

Pilihan paling umum dan direkomendasikan untuk pelanggan platform adalah _**certified containers**_. Platform ini menawarkan berbagai pre-configured dan managed [software stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>), yang memungkinkan pembuatan topologi yang fleksibel dengan **server aplikasi** yang diperlukan (_Java_, _PHP_, _Node.js_, _Ruby_, _Python_, atau _Go_), **load balancer**, **databases**, dan sebagainya.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-3.png" alt="certified managed containers" width="80%"/>

Semua certified containers ini diuji dan dioptimalkan secara menyeluruh khususnya untuk skenario paling umum dalam platform ini. Tim PaaS secara teratur memperbarui software stacks ini ke versi stabil terbaru yang tersedia atau menerapkan patch keamanan untuk images container yang sudah dirilis.

Biasanya, container ini juga mendapatkan manfaat dari integrasi tambahan, seperti konfigurasi otomatis berdasarkan batas skala resource ([cloudlet](<https://docs.dewacloud.com/docs/cloudlet/>)), instalasi sertifikat SSL otomatis, otomatisasi deployment aplikasi, [auto-clustering](<https://docs.dewacloud.com/docs/auto-clustering/>) bawaan, pengiriman update keamanan yang dikelola, dan lainnya.

## Virtual Private Servers (Elastic VPS){#virtual-private-servers-elastic-vps}

Contoh paling sederhana dari implementasi system container adalah _**virtual private server**_. Platform ini menawarkan **[Elastic VPS](<https://docs.dewacloud.com/docs/vps/>)** dengan sistem operasi yang sudah terinstal sebelumnya: _CentOS_, _Ubuntu_, dan _Debian_. Ini adalah container yang berbasis OS murni tanpa kustomisasi atau perangkat lunak tambahan yang terinstal. Ini bisa dianggap sebagai opsi yang paling cocok untuk meng-containerisasi aplikasi legacy karena memerlukan perubahan minimal atau tidak ada saat migrasi dari VMs.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-4.png" alt="elastic VPS" width="80%"/>

Karena praktis "kosong" setelah instalasi, semua konfigurasi yang diperlukan harus dilakukan oleh pengguna akhir. Untuk membantu Anda dengan tugas ini, akses _root_ diberikan ke Elastic VPS containers. Ini hampir seperti virtual machine tetapi lebih ringan dan dengan keuntungan dari skala vertikal dan horizontal otomatis.

## Custom Docker Containers{#custom-docker-containers}

_Custom Docker Containers_ adalah _Docker image_ (berdasarkan [sistem operasi dan arsitektur yang didukung](<https://docs.dewacloud.com/docs/container-image-requirements/>)) yang dideploy di dalam platform system container, yang membuatnya kompatibel dengan sebagian besar (meskipun tidak semua) fitur pembeda platform, seperti built-in vertical and horizontal scaling. Dengan kata lain, filesystem dari custom Docker image Anda dibongkar di dalam runtime system container.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-5.png" alt="custom containers scheme" width="60%"/>

Dibandingkan dengan certified managed containers, opsi ini memberikan akses ke lebih banyak pilihan software stacks. Anda dapat memilih dari berbagai macam 3rd party Docker images yang tersedia di Docker Hub atau registri container publik atau privat kompatibel lainnya. Namun, operabilitas perangkat lunak dan kompatibilitas dalam platform tidak dapat dijamin karena dikelola oleh pemelihara image pihak ketiga yang bersangkutan.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-6.png" alt="custom Docker containers" width="100%"/>

## Docker Engine CE (Docker Native){#docker-engine-ce-docker-native}

Platform ini menyediakan dukungan untuk _**Docker Engine Community Edition**_ yang berjalan di dalam system containers tetapi sekaligus memiliki kompatibilitas penuh dengan ekosistem Docker native.


Integrasi tersebut memungkinkan bekerja dengan alat inti teknologi container Docker, yaitu:

  * _**Docker Engine**_ \- memproses manifes Dockerfile atau menjalankan container images yang sudah dibangun sebelumnya
  * _**Docker Registry**_ \- menyimpan dan menyediakan akses ke sejumlah images publik dan privat, yang dimaksudkan untuk deployment dalam Docker Engine
  * _**Docker Compose**_ \- membantu merakit aplikasi, yang terdiri dari beberapa komponen di mana semua konfigurasi yang diperlukan dideklarasikan dalam satu file compose
  * _**Docker Swarm**_ \- mewakili beberapa Docker nodes independen, saling terhubung dalam satu cluster

Platform ini menyajikan versi pre-packaged dari solusi _Docker Engine CE_ dan _Docker Swarm Cluster_ dengan [auto-clustering](<https://www.virtuozzo.com/company/blog/docker-swarm-auto-clustering-and-scaling-with-paas/>) terintegrasi. 

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-7.png" alt="Docker Engine CE" width="70%"/><img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-8.png" alt="Docker Swarm cluster" width="70%"/>

## Kubernetes Cluster{#kubernetes-cluster}

Application containers dapat dijalankan dan dikelola dengan bantuan alat orkestrasi Kubernetes. Ini adalah platform open-source yang dirancang untuk deployment dan pengelolaan aplikasi containerized yang fault-tolerant. Ini dapat menangani tugas-tugas rumit dari orkestrasi container, seperti deployment, service discovery, rolling upgrades, self-healing, dan pengelolaan keamanan.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-9.png" alt="Kubernetes cluster PaaS scheme" width="60%"/>

Implementasi [PaaS Kubernetes](<https://www.virtuozzo.com/company/blog/kubernetes-cluster-scaling-pay-per-use-hosting/>) mengotomatisasi instalasi cluster, konfigurasi, pembaruan, dan menyediakan beberapa layanan pre-integrated (misalnya, Weave CNI, CoreDNS, Traefik, dll).

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-types/container-types-10.png" alt="Kubernetes cluster" width="80%"/>

Dengan kata lain, kami menjalankan Kubernetes dengan bantuan orkestrasi platform yang menyediakan interoperabilitas maksimum untuk proyek-proyek yang dirancang untuk Kubernetes sejak awal. Manfaat utama dari implementasi Kubernetes adalah model [pay-per-use](<https://jelastic.com/pay-per-use/>) yang canggih yang menyelesaikan masalah right-sizing dan membuat hosting beberapa containers lebih hemat biaya.

Informasi tambahan tentang Kubernetes Cluster dapat dilihat melalui bagian dokumentasi yang sesuai:

  * [Kubernetes Overview](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)
  * [Kubernetes Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access/>)
  * [Scaling Kubernetes on Application and Infrastructure Levels](<https://www.virtuozzo.com/company/blog/scaling-kubernetes/>)
  * [Kubernetes Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration/>)
  * [Kubernetes Volume Provisioner](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner/>)

Sekarang, Anda tahu tentang berbagai jenis container yang tersedia di platform, serta spesifikasinya yang dapat membantu memilih opsi yang paling sesuai untuk kebutuhan proyek Anda.

## Baca Juga{#whats-next}

  * [System Containers](<https://docs.dewacloud.com/docs/what-are-system-containers/>)
  * [Application Containers](<https://docs.dewacloud.com/docs/what-are-application-containers/>)
  * [Certified Containers Deployment](<https://docs.dewacloud.com/docs/certified-containers-deployment/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)