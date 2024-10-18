---
sidebar_position: 3
slug: /kubernetes-cluster-installation
title: Cluster Installation
---
# Kubernetes Cluster: Package Installation{#kubernetes-cluster-package-installation}

Solusi **Kubernetes Cluster** tersedia untuk pemasangan otomatis melalui [platform Marketplace](<https://docs.dewacloud.com/docs/marketplace/>) di bawah kategori _Clusters_ (atau gunakan _Search_ untuk menemukannya). Perlu dicatat bahwa solusi cluster ini hanya tersedia untuk pelanggan _billing_.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/kubernetes%20cluster/cluster%20installation/01-marketplace-kubernetes-cluster.png" alt="marketplace Kubernetes cluster" width="80%"/>

Dalam frame pemasangan yang terbuka, sesuaikan opsi yang tersedia untuk mendapatkan cluster yang sesuai dengan kebutuhan Anda:

  * **Version** \- pilih [versi Kubernetes](<https://docs.dewacloud.com/docs/kubernetes-cluster-versions/#current-versions>) untuk cluster Anda
  * **K8s Dashboard** \- pilih antara opsi _v2_ dan _Skooner_ (perhatikan bahwa beberapa metrik dalam dashboard _skooner_ tidak bekerja dengan _HAProxy_ ingress controller)
  * **Topology**
    * _Development_ \- satu control-plane (1) dan satu pekerja yang dapat diskalakan (1+)
    * _Production_ \- multi control-plane (3) dengan API balancers (2+) dan pekerja yang dapat diskalakan (2+) 

**Catatan:** Topologi _development_ tidak disarankan untuk proyek produksi karena tidak dapat menangani beban tinggi secara andal karena adanya satu instance control-plane.

  * **Ingress Controller** \- pilih [ingress controller](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses/>) yang diinginkan untuk cluster Anda (_NGINX_, _Traefik_, atau _HAProxy_). Kami merekomendasikan menggunakan _NGINX_ karena memberikan fleksibilitas terbesar
  * **Deployment**
    * _Clean cluster_ dengan contoh pre-deployed HelloWorld
    * _Custom_ helm atau stack yang dideploy melalui perintah shell - pilih opsi ini untuk secara manual menyediakan perintah untuk pendistribusian aplikasi khusus dari repository _[helm](<https://docs.dewacloud.com/docs/kubernetes-helm-integration/>)_
  * **NFS Storage** \- aktifkan untuk melampirkan NFS Storage khusus dengan provisi volume dinamis (nonaktifkan jika Anda ingin mendaftarkan kelas penyimpanan Anda sendiri, memerlukan pengetahuan mendalam tentang K8s)
  * **Modules** (dapat diaktifkan nanti melalui add-ons) 
    * _Prometheus & Grafana_ \- periksa untuk memasang alat pemantauan ini (direkomendasikan). Pendistribusian ini memerlukan tambahan 5GB ruang disk untuk volume persisten dan mengonsumsi sekitar 500 MB RAM
    * _Jaeger Tracing Tools_ \- centang untuk memasang sistem penelusuran _Jaeger_ untuk pemantauan dan pemecahan masalah
    * _Remote API Access_ \- periksa jika Anda berencana menggunakan alat baris perintah _kubectl_ atau klien jarak jauh lainnya
  * **Environment** \- berikan nama untuk environment Anda
  * **Display Name** \- tentukan [alias](<https://docs.dewacloud.com/docs/environment-aliases/>)
  * **Region** \- pilih [region](<https://docs.dewacloud.com/docs/environment-regions/>) (jika tersedia)

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/kubernetes%20cluster/cluster%20installation/02-kubernetes-cluster-installation-frame.png" alt="Kubernetes cluster installation frame" width="70%"/>

Klik **Install** dan tunggu beberapa menit hingga platform secara otomatis mengonfigurasi cluster Kubernetes Anda.

## Baca Juga{#whats-next}

  * [Platform Marketplace](<https://docs.dewacloud.com/docs/marketplace/>)
  * [Kubernetes Overview](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)
  * [K8s System Requirements](<https://docs.dewacloud.com/docs/kubernetes-cluster-requirements/>)
  * [K8s Cluster Versions](<https://docs.dewacloud.com/docs/kubernetes-cluster-versions/>)
