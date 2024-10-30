---
sidebar_position: 1
slug: /kubernetes-vertical-scaling
title: Vertical Scaling
---
# Kubernetes Cluster: Vertical Scaling{#kubernetes-cluster-vertical-scaling}

Vertical scaling untuk **Kubernetes Cluster** diwakili melalui dua implementasi:

  * _platform-managed [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling>)_ \- memungkinkan pengalokasian sumber daya secara dinamis untuk node Kubernetes, yang digunakan (dan dikenakan biaya) hanya saat dibutuhkan
  * _Kubernetes-managed [Vertical Pod Autoscaler](<https://cloud.google.com/kubernetes-engine/docs/concepts/verticalpodautoscaler>) (beta)_ \- menyesuaikan permintaan dan batas memori/CPU pod secara langsung

Kombinasi dari PaaS vertical scaling dan VPA dapat membantu meminimalkan penggunaan sumber daya dan dengan demikian mengurangi biaya pemeliharaan cluster. Selain itu, ini membuat deployment sangat tersedia dan tahan terhadap gangguan.

:::tip
Contoh real case yang diperluas (WordPress) tentang Kubernetes Cluster Scaling disediakan dalam artikel yang terhubung.
:::

## Baca Juga{#whats-next}

  * [Kubernetes Cluster Scaling](<https://www.virtuozzo.com/company/blog/scaling-kubernetes/>)
  * [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling>)
  * [K8s Horizontal Scaling](<https://docs.dewacloud.com/docs/kubernetes-horizontal-scaling>)
  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access>)