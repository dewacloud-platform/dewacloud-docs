---
sidebar_position: 8
slug: /kubernetes-multi-region-cluster-federation
title: Multi-Region Cluster Federation
---
# Cluster Federation Kubernetes Multi-Region di Dewacloud
![Kubernetes Cluster Federation](#)

Jika Anda memiliki beberapa cluster Kubernetes (K8s) di berbagai region dan perlu menjalankan aplikasi yang sama di semua cluster tersebut, disarankan untuk menggunakan yang disebut Federation Cluster Kubernetes atau [KubeFed](<https://github.com/kubernetes-sigs/kubefed/blob/master/README.md>).

Federation Kubernetes adalah implementasi multi-cloud atau multi-region untuk deployment terpusat dan pengelolaan aplikasi serta layanan di beberapa cluster Kubernetes.

Federation memungkinkan untuk membuat satu set cluster yang saling terhubung, di mana Anda dapat mendeploy aplikasi sesuai dengan aturan tertentu. Kasus penggunaan paling umum untuk Federation adalah skala aplikasi di berbagai cluster yang terletak di berbagai region. Anda dapat menggabungkan komponen aplikasi Anda ke sumber daya federasi dan mendistribusikan jumlah replika yang ditentukan di semua cluster anggota.

Dalam artikel ini kami akan menunjukkan cara menyiapkan Jelastic Kubernetes Services (JK8s) sebagai Federation yang terletak di berbagai region.

## Prasyarat Federation

Misalkan dalam satu Jelastic PaaS kita memiliki lima cluster di berbagai region dan kami ingin mendeploy aplikasi ke salah satu cluster ini. Salah satunya adalah Host Cluster yang bertindak sebagai Federasi [Control Plane](<https://kubernetes.io/docs/reference/glossary/?all=true#term-control-plane>), yang mempropagasikan dan mendorong konfigurasi ke Anggota Clusters.

![Multi-Region Kubernetes Cluster Federation scheme](#)

Oleh karena itu, kita perlu memutuskan muatan mana yang ingin kita distribusikan, dan cluster anggota mana yang harus menanganinya.

Jadi, mari kita langsung ke praktik dan buat Federation di Jelastic PaaS.

Masuk ke akun Anda dan buat dua [cluster Kubernetes](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation>) di berbagai [region](<https://docs.dewacloud.com/docs/environment-regions/>). Sebenarnya Anda dapat membuat sebanyak yang Anda butuhkan, tetapi di sini kami hanya membuat **Host Cluster** dan **Member Cluster 1**. Semua tindakan berikut dapat diterapkan ke jumlah Member Clusters yang diinginkan. Jadi, deploy:

  * Federation Host Cluster: **_fedhost.vip.jelastic.cloud_**
  * Federation Member Cluster: **_member1.demo.jelastic.com_**

![Kubernetes Cluster Federation environments](#)

## Akses Jarak Jauh ke Cluster

Langkah selanjutnya adalah membangun [akses jarak jauh ke cluster](<https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/>).

Masuk ke node master **Host Cluster** melalui [SSH](<https://docs.dewacloud.com/docs/ssh-gate-access/>) dan mulai dengan konfigurasi. Beberapa keluaran perintah akan ditampilkan untuk memastikan Anda melakukannya dengan benar:

1\. Pertama, instal chart KubeFed dengan [helm](<https://kubernetes.io/blog/2016/10/helm-charts-making-it-simple-to-package-and-deploy-apps-on-kubernetes/>) di namespace **kube-federation-system**:  
Tambah repository:

```bash
fedhost~$ helm repo add kubefed-charts https://raw.githubusercontent.com/kubernetes-sigs/kubefed/master/charts
```

Instal [versi terbaru](<https://github.com/kubernetes-sigs/kubefed/branches/active>) yang tersedia dari **kubefed**. Di sini dan seterusnya, kami menggunakan 0.7.0 sebagai versi saat ini:

```bash
fedhost~$ helm install kubefed kubefed-charts/kubefed --version 0.7.0 --namespace kube-federation-system --create-namespace
```

![Kubernetes Cluster remote access](#)

2\. Unduh versi terbaru [kubefedctl](<https://github.com/kubernetes-sigs/kubefed/releases>) alat baris perintah juga dan salin ke direktori _/usr/local/bin_:

```bash
fedhost~$ wget https://github.com/kubernetes-sigs/kubefed/releases/download/v0.7.0/kubefedctl-0.7.0-linux-amd64.tgz

fedhost~$ tar xvf kubefedctl-0.7.0-linux-amd64.tgz

fedhost~$ mv kubefedctl /usr/local/bin
```

3\. Untuk membiarkan KubeFed memfederasi deployment, ia harus bisa berinteraksi dengan semua **Member Clusters** yang dipilih. Untuk melakukan ini, Anda dapat menggunakan file konfigurasi [RBAC](<https://docs.dewacloud.com/docs/kubernetes-access-control/>) berikut untuk membuat peran yang diperlukan untuk memastikan koneksi dari **Host Cluster**. Masuk ke node master **Member Cluster** melalui SSH dan buat file konfigurasi sebagai contoh **member1.yaml** dan tempelkan konten di bawah ini ke dalamnya.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    name: member1
  name: member1
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  labels:
    name: member1
  name: member1
rules:
  - apiGroups: ['*']
    resources: ['*']
    verbs: ['*']
  - nonResourceURLs: ['*']
    verbs: ['*']
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  labels:
    name: member1
  name: member1
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: member1
subjects:
  - kind: ServiceAccount
    name: member1
    namespace: default
```

Terapkan file konfigurasi:

```bash
member1~$ kubectl apply -f member1.yaml
```

![](#)

4\. Untuk mendapatkan akses ke semua anggota Anda harus membuat konteks untuk masing-masingnya. Setiap konteks berisi nama cluster K8s, titik akhir cluster, nama pengguna dengan kredensial, dan namespace.

Di mana kredensial adalah:

  * token RBAC
  * sertifikat

Dapatkan nama token dari akun layanan yang baru dibuat **_member1_**

```bash
member1~$ kubectl get secret | grep member1
```

Dapatkan isinya dan salin ke papan klip:

```bash
member1~$ kubectl describe secret member1-token-zkctp
```

![access Kubernetes federation members](#)

5\. Buat pengguna **kubefed-member1** dan sediakan token untuk itu dari papan klip:

```bash
fedhost~$ kubectl config set-credentials kubefed-member1 --token='eyJhbGciOiJSUzI1Ni…….JYNCzwS4F57w'
```

6\. Ambil titik akhir Member Cluster yang Host Cluster akan terhubung:

```bash
member1~$ cat /root/.kube/config | grep server
```

Tentukan nama cluster **_kubefed-remote-member1_** dan tambahkan titik akhir Member Cluster:

```bash
fedhost~$ kubectl config set-cluster kubefed-remote-member1 --server='https://k8sm.member1.demo.jelastic.com:6443'
```

**Catatan**: Dalam hal Member Cluster terletak di platform Jelastic yang berbeda, titik akhirnya juga berbeda. Gunakan **API Endpoint** dari jendela instalasi yang berhasil. Misalnya:

```bash
fedhost~$ kubectl config set-cluster kubefed-remote-member1 --server='https://member1.demo.jelastic.com/api/'
```

![](#)

7\. Ambil sertifikat dan salin isinya ke papan klip.

```bash
member1~$ cat /root/.kube/config | grep certificate-authority-data
```

Gantikan `<certificate>` dengan nilai dari papan klip dan tambahkan ke konteks:

```bash
fedhost~$ kubectl config set clusters.kubefed-remote-member1.certificate-authority-data '<certificate>'
```

**Catatan**: Ketika Member Cluster terletak di platform Jelastic yang berbeda, sertifikat akan tidak valid karena [Shared Load Balancer](<https://docs.jelastic.com/shared-load-balancer/>) dengan sertifikatnya sendiri berada di depan cluster. Sertifikat ini harus diabaikan selama fase negosiasi antara Host Cluster dan Member dengan menjalankan perintah seperti:

```bash
fedhost~$ kubectl config set clusters.kubefed-remote-member1.insecure-skip-tls-verify true
```

8\. Akhirnya, deskripsikan konteks itu sendiri untuk **Member Cluster** menggunakan nama kluster yang tepat, nama konteks, dan nama pengguna:

```bash
fedhost~$ kubectl config set-context member1 --cluster=kubefed-remote-member1 --user=kubefed-member1 --namespace=default
```

Ulangi langkah 3-8 untuk setiap **Member Cluster** dalam Federation.

**Catatan**: Secara umum, nama konteks default adalah **kubernetes-admin@kubernetes** dalam cluster K8s baru. Kami menyarankan Anda untuk menggantikan semua kemunculan dengan misalnya “**fedhost**” atau lainnya yang Anda sukai karena KubeFed dapat bingung dengan karakter khusus dalam nama konteks seperti ‘@’ dan di masa depan Anda akan mendapatkan kesalahan saat menghubungkan cluster:

```bash
fedhost~$ kubectl config rename-context kubernetes-admin@kubernetes fedhost
```

## Pengujian Akses Jarak Jauh Cluster

Sekarang **Member Clusters** dijelaskan dalam file konfigurasi **Host Cluster** **/root/.kube/config**. Jika semuanya dilakukan dengan benar, Anda dapat berinteraksi dengan cluster yang dikonfigurasi, cukup memilih konteksnya. Mari kita lihat daftar node di kedua cluster **_kubefed-remote-member1_** dan **_fedhost_**:

```bash
fedhost~$ kubectl --context member1 get nodes

fedhost~$ kubectl --context fedhost get nodes
```

![Kubernetes Cluster Federation remote access testing](#)

## Bergabung dengan Federation

Sekarang bahwa komunikasi tersedia antara dua cluster yang terletak di berbagai region, kita dapat menggunakan alat _kubefedctl_ untuk membiarkan keduanya bergabung ke Federation.

Tambahkan **Host Cluster** ke Federation:

```bash
fedhost~$ kubefedctl join fedhost --v=2 --host-cluster-context fedhost --kubefed-namespace=kube-federation-system
```

Tambahkan Member Cluster ke Federation:

```bash
fedhost~$ kubefedctl join member1 --v=2 --host-cluster-context fedhost --kubefed-namespace=kube-federation-system
```

Jika semuanya berjalan lancar tanpa kesalahan, Anda akan memiliki keluaran serupa:

![join Kubernetes Cluster Federation](#)

Untuk memastikan bahwa join berfungsi, Anda bisa memeriksa status Federation dengan perintah:

```bash
fedhost~$ kubectl -n kube-federation-system get kubefedclusters
```

![Kubernetes Cluster Federation status](#)