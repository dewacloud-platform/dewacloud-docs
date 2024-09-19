---
sidebar_position: 2
slug: /kubernetes-horizontal-scaling
title: Horizontal Scaling
---
# Kubernetes Cluster: Horizontal Scaling{#kubernetes-cluster-horizontal-scaling}

Horizontal scaling untuk **Kubernetes Cluster** diwakili melalui dua implementasi:

  * _platform-managed [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling>)_ \- memungkinkan penambahan/penghapusan node Kubernetes. Berdasarkan kebutuhan Anda, Anda dapat mengkonfigurasi [scaling triggers](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling#configure-triggers>) untuk mengotomatisasi proses ini berdasarkan penggunaan sumber daya.
  * _Kubernetes-managed [Horizontal Pod Autoscaler](<https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/>)_ \- menyesuaikan skala deployment berdasarkan pengamatan penggunaan CPU

Dengan kedua metode horizontal scaling ini, Kubernetes Cluster selalu memiliki node yang tersedia (saat dibutuhkan) dan pod aplikasi yang sehat.

:::tip
Contoh real case yang diperluas (WordPress) tentang Kubernetes Cluster Scaling disediakan dalam artikel yang terhubung.
:::

## Baca Juga{#whats-next}

  * [Kubernetes Cluster Scaling](<https://docs.dewacloud.com/docs/scaling-kubernetes/>)
  * [Horizontal Scaling](<https://docs.dewacloud.com/docs/horizontal-scaling>)
  * [Automatic Horizontal Scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling>)
  * [K8s Vertical Scaling](<https://docs.dewacloud.com/docs/kubernetes-vertical-scaling>)
  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>)