---
sidebar_position: 3
slug: /kubernetes-custom-storage
title: Custom Storage
---
# Kubernetes Cluster: Custom Storage{#kubernetes-cluster-custom-storage}

Saat ini, satu-satunya opsi otomatis untuk penyimpanan backend adalah [volume provisioner](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner>) berbasis penyimpanan NFS. Opsi ini dapat dipilih melalui paket installation wizard. Kami merekomendasikan untuk tetap menggunakan opsi ini saat bekerja dengan Kubernetes Cluster.  

![kubernetes cluster add nfs storage](#)

:::tip
Pilihan tambahan untuk penyimpanan berbasis Gluster akan diimplementasikan dalam versi paket mendatang.
:::

Jika penyimpanan NFS default tidak sesuai dengan kebutuhan Anda, Anda dapat menggunakan backend penyimpanan lain yang Anda inginkan untuk Kubernetes Cluster Anda. Anda dapat menghubungi dukungan platform untuk mendiskusikan opsi yang tersedia dan membantu Anda dengan implementasinya.

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container>)
  * [K8s Volume Provisioner](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner>)
  * [K8s Persistent Volume Claim](<https://docs.dewacloud.com/docs/kubernetes-persistent-volume-claim>)
  * [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling>)