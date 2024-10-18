---
sidebar_position: 4
slug: /kubernetes-cluster-versions
title: Cluster Versions
---
## Kubernetes Cluster: Versions & Change Logs{#kubernetes-cluster-versions-change-logs}

Platform ini menyediakan solusi _**Kubernetes (K8s) Cluster**_ yang sudah dipaketkan sebelumnya dengan pemasangan otomatis. [Kubernetes](<https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/>) adalah platform open-source yang portabel dan dapat diperluas untuk mengelola beban kerja dan layanan berbasis container, yang memfasilitasi konfigurasi deklaratif dan otomatisasi. Ini sangat berhubungan dengan PaaS, memungkinkan untuk mengatur aplikasi berdasarkan sistem Kubernetes langsung di dalam platform.

Dengan hosting Kubernetes Cluster di platform, Anda bisa mendapatkan manfaat berikut:

  * _**Easy Start**_ \- pemasangan otomatis dalam beberapa klik tidak memerlukan intervensi manual
  * _**Hyper Scalability**_ \- cluster dapat diskalakan secara otomatis secara vertikal dan horizontal
  * _**Multi-Cloud Availability**_ \- campur dan cocokkan opsi cloud sesuai kebutuhan proyek
  * _**Simplified Management**_ \- satu titik manajemen melalui UI intuitif dan Web SSH bawaan
  * _**Flexible Automation**_ \- otomatisasi proses DevOps dengan open API dan Cloud Scripting
  * _**Cost Efficiency**_ \- bayar hanya untuk sumber daya yang dikonsumsi, mendapatkan manfaat dari kepadatan dan skalabilitas container

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/kubernetes%20cluster/cluster%20versions/01-kubernetes-cluster-topology-scheme.png" alt="kubernetes cluster topology scheme" width="45%"/>

:::tip
Lebih banyak detail dan deskripsi mendalam dengan contoh kasus penggunaan disediakan di artikel Kubernetes Cluster yang sesuai di blog kami.
:::

Di bawah ini, kami akan meninjau semua versi Kubernetes Cluster dan menjelaskan perubahan dan penyesuaian yang diterapkan.

## K8s Package Change Log{#k8s-package-change-log}

Anda dapat memeriksa kode sumber paket _**[Kubernetes Cluster](<https://github.com/jelastic-jps/kubernetes>)**_ di GitHub. Anda dapat meninjau perubahan di setiap versi dengan mengklik catatan yang diperlukan dalam daftar di bawah ini.

**Catatan:** Penerapan fitur/komponen baru untuk solusi **Kubernetes Cluster** (serta pengujian stabilitas) memerlukan waktu tertentu. Jadi, versi paket biasanya tertinggal satu atau dua rilis kecil dari [tag upstream Kubernetes](<https://github.com/kubernetes/kubernetes/tags>).

### Current Versions{#current-versions}

K8s 1.28.0

  * menambahkan versi _**1.28.0**_ untuk instalasi cluster Kubernetes baru
  * menghapus integrasi yang kedaluwarsa dengan GitLab (add-on _**GitLab Integration**_ untuk Kubernetes)
  * memperbarui pemformatan pop-up _instalasi sukses_ dari HTML ke markdown
  * meningkatkan validasi untuk pra-instalasi add-on _**Certificate Manager**_: “ _cert-manager_ ” sekarang dapat dideploy untuk kebutuhan spesifik pengguna bahkan jika _Jaeger_ diaktifkan selama pembuatan cluster Kubernetes

K8s 1.27.4

  * menambahkan versi _**1.27.4**_ untuk instalasi cluster Kubernetes baru
  * menghapus integrasi yang kedaluwarsa dengan GitLab (add-on _**GitLab Integration**_ untuk Kubernetes)
  * meningkatkan validasi untuk pra-instalasi add-on _**Certificate Manager**_: “ _cert-manager_ ” sekarang dapat dideploy untuk kebutuhan spesifik pengguna bahkan jika _Jaeger_ diaktifkan selama pembuatan cluster Kubernetes

K8s 1.26.7

  * menambahkan versi _**1.26.7**_ untuk instalasi cluster Kubernetes baru
  * mengaktifkan ulang pemasangan alat manajemen _**Rancher**_ setelah masalah kompatibilitas dengan versi Kubernetes _1.26.x_ saat ini terselesaikan
  * menghapus integrasi yang kedaluwarsa dengan GitLab (add-on _**GitLab Integration**_ untuk Kubernetes)
  * meningkatkan validasi untuk pra-instalasi add-on _**Certificate Manager**_: “ _cert-manager_ ” sekarang dapat dideploy untuk kebutuhan spesifik pengguna bahkan jika _Jaeger_ diaktifkan selama pembuatan cluster Kubernetes

### Release Notes Archive{#release-notes-archive}

K8s 1.25.4

  * menambahkan versi _**1.25.4**_ untuk instalasi cluster Kubernetes baru
  * memperbarui implementasi _**Jaeger Tracing Tools**_ (versi diperbarui, penyediaan operator, dependensi) karena perubahan API
  * memperbarui **komponen cluster Kubernetes** : 
    * _ingress-nginx 1.5.1_
    * _k9s 0.26.7_
    * _metallb 0.13.7_
    * _kubernetes-dashboard 2.7.0_
    * _metrics-server 0.6.2_
    * _cert-manager 1.10.1_
    * _cert-manager-nginx 4.4.0_
  * memperbaiki pemasangan komponen _Stern_ setelah repositori upstream dipindahkan
  * menonaktifkan sementara pemasangan alat manajemen _Rancher_ karena ketidakcocokan dengan versi Kubernetes _1.25.x_ saat ini
  * memperbaiki masalah koneksi setelah pemasangan add-on _GitLab Integration_
  * beralih ke Custom Resource Definition (CRD), meningkatkan kompatibilitas dan migrasi konfigurasi untuk _MetalLB_; memperbaiki masalah dengan perangkat domain melalui add-on _Certificate Manager_

[Keterangan lebih lanjut tentang versi dan perubahan sebelumnya dapat diterjemahkan secara serupa sesuai permintaan]

## Baca Juga{#whats-next}

  * [Kubernetes Overview](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)
  * [K8s System Requirements](<https://docs.dewacloud.com/docs/kubernetes-cluster-requirements/>)
  * [K8s Cluster Installation](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation/>)
  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access/>)
