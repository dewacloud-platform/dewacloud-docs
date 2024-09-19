---
sidebar_position: 2
slug: /kubernetes-persistent-volume-claim
title: Persistent Volume Claim
---
# Kubernetes Cluster: Persistent Volume Claim{#kubernetes-cluster-persistent-volume-claim}

Kapanpun pod aplikasi Anda membutuhkan akses ke _Persistent Volume_ (PV), a _[PersistentVolumeClaim](<https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims>)_ (PVC) khusus dengan jumlah penyimpanan tertentu dan mode akses tertentu diminta. Platform tidak membatasi PVC dalam cara apapun (termasuk [pembuatan](<https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim>)). Namun, ada beberapa hal yang harus Anda pertimbangkan saat bekerja dengan klaim volume persisten:

  * jika Anda menentukan _StorageClass_ selain dari _**[jelastic-dynamic-volume](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner>)**_ default, PV harus dibuat terlebih dahulu
  * ketika beberapa pod harus menggunakan PV yang sama, pastikan bahwa itu mendukung mode akses _ROX_ atau _RWX_ [AccessMode](<https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes>)

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container>)
  * [K8s Volume Provisioner](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner>)
  * [K8s Custom Storage](<https://docs.dewacloud.com/docs/kubernetes-custom-storage>)