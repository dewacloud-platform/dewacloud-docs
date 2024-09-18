---
sidebar_position: 1
slug: /kubernetes-cluster
title: Kubernetes Overview
---
# Kubernetes Cluster Overview{#kubernetes-cluster-overview}

**[Kubernetes (K8s)](<https://kubernetes.io/>)** adalah sistem open-source yang dirancang untuk mengotomatisasi deployment, scaling, dan manajemen dari aplikasi mikroservices dan containerized. [Pod](<https://kubernetes.io/docs/concepts/workloads/pods/pod/>), yang merupakan bagian sentral dalam model K8s, adalah satu set container Linux dengan jaringan dan penyimpanan bersama. Plugin [Network](<https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/>) dan [Ingress Controllers](<https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/>) mendukung load balancer internal dan eksternal, sedangkan backend penyimpanan yang bisa ditancapkan otomatis menangani persistensi data. [Kubernetes kubelet](<https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/>) mengorkestrasi pod untuk memastikan cluster selalu dalam kondisi sehat yang diinginkan.

Pemasangan sebuah Cluster Kubernetes, serta konfigurasi jaringan dan penyimpanan, adalah proses yang membosankan dan rentan kesalahan. Platform ini mengotomatisasi pemasangan Kubernetes, konfigurasi, pembaruan, dan menyediakan beberapa layanan Kubernetes tambahan serta komponen cluster:

  * Plugin _**[Weave CNI](<https://kubernetes.io/docs/concepts/cluster-administration/networking/#weave-net-from-weaveworks>)**_ untuk mengaktifkan jaringan internal
  * _**[CoreDNS](<https://coredns.io/>)**_ sebagai DNS internal
  * _**[Traefik](<https://docs.traefik.io/user-guides/crd-acme/>)**_ ingress controller dengan TLS yang sudah dikonfigurasi untuk akses eksternal ke layanan (dengan opsi _NGINX_ dan _HAProxy_ yang tersedia sejak _1.15.5_)
  * _**[NFS storage provisioner](<https://docs.docker.com/ee/ucp/kubernetes/storage/use-nfs-volumes/>)**_ untuk pembuatan otomatis [volume K8s](<https://kubernetes.io/docs/concepts/storage/volumes/>) _(opsional)_
  * _**[Kubernetes Dashboard](<https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/>)**_ untuk mengelola dan mengontrol cluster melalui klien web modern dan intuitif
  * _**[Helm and Tiller](<https://helm.sh/>)**_ untuk satu klik deployment dari ratusan aplikasi populer
  * Utilitas command-line _**[K9s](<https://github.com/derailed/k9s>)**_ , _**[kubectx](<https://github.com/ahmetb/kubectx>)**_ , _**[popeye](<https://github.com/derailed/popeye>)**_ , dan _**[stern](<https://github.com/wercker/stern>)**_ untuk mengelola cluster Anda dengan efisien
  * Alat monitoring _**[Metrics server](<https://github.com/kubernetes-incubator/metrics-server>)**_ , _**[Prometheus](<https://prometheus.io/>)**_ , dan _**[Grafana](<https://grafana.com/>)**_ untuk monitoring kesehatan cluster dan aplikasi Anda _(opsional)_
  * _**[Jaeger](<https://www.jaegertracing.io/>)**_ untuk monitoring dan troubleshooting dari sistem distribusi berbasis microservice (_opsional_ , tersedia sejak _1.15.5_)

Selain fitur spesifik K8s, fitur platform tradisional juga tersedia, seperti [vertical scaling](<https://docs.dewacloud.com/docs/kubernetes-vertical-scaling>) dan [horizontal scaling](<https://docs.dewacloud.com/docs/kubernetes-horizontal-scaling>).

:::tip
Untuk informasi lebih lanjut, lihat artikel Kubernetes Cluster Overview di blog kami.
:::

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [K8s System Requirements](<https://docs.dewacloud.com/docs/kubernetes-cluster-requirements/>)
  * [K8s Cluster Installation](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation/>)
  * [K8s Cluster Versions](<https://docs.dewacloud.com/docs/kubernetes-cluster-versions/>)