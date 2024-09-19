---
sidebar_position: 3
slug: /kubernetes-internal-networking
title: Internal Networking
---
# Kubernetes Cluster: Internal Networking{#kubernetes-cluster-internal-networking}

Konfigurasi jaringan internal dalam **Kubernetes Cluster** adalah proses yang sepenuhnya otomatis, yang didasarkan pada [K8s Services](<https://kubernetes.io/docs/concepts/services-networking/service/>). Plugin CNI menciptakan dan mengkonfigurasi jaringan overlay, yang memungkinkan semua pod diberikan alamat IP.

Selain itu, Kubernetes mendukung akses langsung ke layanan dengan menggunakan nama mereka, sehingga tidak diperlukan mekanisme penemuan layanan. Misalnya, server aplikasi Anda dapat terhubung ke database menggunakan nama DNS-nya, yang akan diubah menjadi IP internal yang diperlukan. Untuk ini, Anda hanya perlu membuat objek [service](<https://kubernetes.io/docs/concepts/services-networking/service/>) dengan pemilih yang benar.

**Kubernetes Cluster** disediakan dengan _Hello World_ deployment, service, dan [ingress](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses>) secara default (kecuali opsi deployment kustom dipilih selama [instalasi](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation>)). Anda dapat memeriksa aplikasi default ini untuk memahami konsep layanan Kubernetes dengan lebih baik.

### Platform DNS Name Resolution inside PODs{#platform-dns-name-resolution-inside-pods}

Cluster Kubernetes menggunakan _CoreDNS_ untuk menyelesaikan nama DNS internal Kubernetes. Ini secara otomatis didefinisikan dalam file _**/etc/resolv.conf**_ dari setiap pod. Selain itu, CoreDNS memanfaatkan nameservers platform, yang memungkinkan membangun akses langsung antara K8s Cluster dan kontainer lainnya di dalam platform.

__Sebagai contoh,__ jika Anda memiliki lingkungan dengan database di platform dan ingin menghubungkannya dari pod Kubernetes Anda, Anda perlu menggunakan hostname `${nodeId}-${envName}.${platformDomain}` dan port default untuk database Anda (_3306_ untuk MySQL, _5432_ untuk Postgres, dll.).

Namun, Anda perlu membuat [endpoint](<https://docs.dewacloud.com/docs/endpoints>) untuk terhubung ke database semacam ini dari luar platform.

## Baca Juga{#whats-next}

  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>)
  * [K8s YAML Deployments](<https://docs.dewacloud.com/docs/kubernetes-yaml-deployments>)
  * [K8s Exposing Services](<https://docs.dewacloud.com/docs/kubernetes-exposing-services>)
  * [K8s Creating Ingresses](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses>)