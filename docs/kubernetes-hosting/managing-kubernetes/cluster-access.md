---
sidebar_position: 1
slug: /kubernetes-cluster-access
title: Cluster Access
---
## Kubernetes Cluster Access{#kubernetes-cluster-access}

Setelah [instalasi cluster](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation/>) berhasil, ada beberapa cara untuk mengaksesnya untuk memulai manajemen:

  * [Kubernetes Dashboard](<https://docs.dewacloud.com/docs/#kubernetes-dashboard>)
  * [kubectl client](<https://docs.dewacloud.com/docs/#kubectl-client>)

### Kubernetes Dashboard{#kubernetes-dashboard}

1\. Pop-up setelah instalasi menyediakan semua data yang diperlukan untuk terhubung ke Kubernetes Dashboard - tautan dan access token.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Cluster%20Access/01-kubernetes-installation-success-frame.png" alt="Kubernetes installation success frame" width="60%"/>

Informasi yang sama juga disediakan melalui email notifikasi yang sesuai.

2\. Ikuti tautan tersebut, pilih opsi **Token**, dan tempelkan nilai yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Cluster%20Access/02-kubernetes-dashboard-token-access.png" alt="Kubernetes dashboard token access" max-width="100%"/>

:::tip
Anda juga dapat login dengan berkas kubeconfig; namun, Anda perlu menginstal kubectl dan mengatur konteks yang tepat (lihat bagian di bawah).
:::

3\. Jika Anda kehilangan email dengan Kubernetes cluster access token, itu dapat dilihat dengan menjalankan perintah berikut pada master node (misalnya melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)):

```bash
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep fulladmin | awk '{print $1}') | grep 'token:' | sed -e's/token:\| //g'
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Cluster%20Access/03-view-kubernetes-access-token.png" alt="view Kubernetes access token" max-width="100%"/>

Sekarang, Anda dapat mengakses Kubernetes Dashboard sekali lagi.

### Kubectl Client{#kubectl-client}

**[Kubectl](<https://kubernetes.io/docs/tasks/tools/install-kubectl/>)** adalah alat baris perintah untuk mengontrol cluster Kubernetes. Platform ini secara otomatis menginstalnya di semua master node selama pembuatan environment. Anda dapat mulai bekerja dengan cluster Anda menggunakan _kubectl_ segera, cukup sambungkan ke node yang diperlukan [melalui SSH](<https://docs.dewacloud.com/docs/ssh-access/>).

1\. Ikuti [langkah instalasi](<https://kubernetes.io/docs/tasks/tools/install-kubectl/>) untuk menggunakan _kubectl_ lokal. Selanjutnya, jalankan perintah untuk membuat koneksi jarak jauh:

```bash
kubectl config set-cluster jelastic --server={api-endpoint} && \
kubectl config set-context jelastic --cluster=jelastic && \
kubectl config set-credentials user --token={token} && \
kubectl config set-context jelastic --user=user && \
kubectl config use-context jelastic
```

Gantilah _**\{api-endpoint\}**_ dan _**\{token\}**_ dengan URL Remote API dan access token masing-masing.

:::tip
Jika Anda belum mengaktifkan Remote API selama instalasi, itu dapat dilakukan melalui add-on bawaan yang tersedia untuk master node di dashboard platform.
:::

2\. Anda dapat memeriksa apakah _kubectl_ memiliki akses ke cluster dengan perintah berikut:

```bash
kubectl get pods
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Cluster%20Access/05-kubectl-access-to-kubernetes-cluster.png" alt="kubectl access to Kubernetes cluster" max-width="100%"/>

Anda harus melihat informasi tentang pods di namespace default.

## Baca Juga{#whats-next}

  * [Kubernetes Overview](<https://docs.dewacloud.com/docs/kubernetes-cluster/>)
  * [K8s Access Control](<https://docs.dewacloud.com/docs/kubernetes-access-control/>)
  * [K8s Cluster Troubleshooting](<https://docs.dewacloud.com/docs/kubernetes-troubleshooting/>)
  * [K8s Cluster Upgrade](<https://docs.dewacloud.com/docs/kubernetes-upgrade/>)