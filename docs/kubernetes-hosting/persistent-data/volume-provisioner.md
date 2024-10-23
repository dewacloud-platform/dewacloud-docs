---
sidebar_position: 1
slug: /kubernetes-volume-provisioner
title: Volume Provisioner
---
# Kubernetes Cluster: Volume Provisioner{#kubernetes-cluster-volume-provisioner}

**Kubernetes Cluster** mengimplementasikan data persisten dengan bantuan _[Persistent Volumes](<https://kubernetes.io/docs/concepts/storage/persistent-volumes/>)_ (PV) dan _[Persistent Volume Claims](<https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims>)_ (PVC). **PV** adalah penyimpanan yang disediakan oleh administrator, yang mirip dengan Volumes tetapi dengan siklus hidup yang independen dari pod individu mana pun. **PVC** adalah permintaan untuk penyimpanan PV dengan ukuran dan mode akses tertentu.

Platform ini memungkinkan konfigurasi otomatis penyedia volume NFS selama [instalasi](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation>). Solusi semacam itu secara otomatis menyediakan volume persisten setiap kali PVC dibuat. Dengan demikian, tidak perlu mengatur PV dengan _AccessMode_ atau _[StorageClass](<https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class>)_ yang diinginkan secara manual.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/persistent%20data/Volume%20Provisioner/01-kubernetes-cluster-add-nfs-storage.png" alt="kubernetes cluster add nfs storage" width="100%"/>

:::tip
Implementasi platform dari penyedia volume NFS untuk paket Kubernetes Cluster menggunakan _Shared Storage Container_ yang didedikasikan. Anda dapat menemukannya di topologi lingkungan. _jelastic-dynamic-volume_ adalah _StorageClass_ default di Kubernetes Cluster. Di sini, semua data disimpan di direktori /data.
:::

## Baca Juga{#whats-next}

  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>)
  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container>)
  * [K8s Persistent Volume Claim](<https://docs.dewacloud.com/docs/kubernetes-persistent-volume-claim>)
  * [K8s Custom Storage](<https://docs.dewacloud.com/docs/kubernetes-custom-storage>)
