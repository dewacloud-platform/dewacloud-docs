---
sidebar_position: 4
slug: /kubernetes-exposing-services
title: Exposing Services
---
# Kubernetes Cluster: Exposing Services{#kubernetes-cluster-exposing-services}

Sementara komponen aplikasi Anda dapat berkomunikasi satu sama lain melalui [service names](<https://docs.dewacloud.com/docs/kubernetes-internal-networking/>) menggunakan jaringan internal, koneksi eksternal memerlukan konfigurasi tambahan.

Kubernetes mendukung tiga jenis layanan untuk membangun koneksi internal dan eksternal ke aplikasi:

  * [ClusterIP](<https://docs.dewacloud.com/docs/#clusterip>)
  * [NodePort](<https://docs.dewacloud.com/docs/#nodeport>)
  * [LoadBalancer](<https://docs.dewacloud.com/docs/#loadbalancer>)

## ClusterIP{#clusterip}

Layanan _**ClusterIP**_ adalah layanan K8s default. Ini membuat aplikasi dapat diakses oleh aplikasi lain di dalam cluster K8s. Tidak ada akses eksternal yang disediakan.

Contoh layanan _ClusterIP_ sederhana:

```yaml
kind: Service
apiVersion: v1
metadata:
  name: nginx1
  namespace: test
spec:
  type: ClusterIP
  selector:
    app: nginx
  ports:
    - port: 80
```

## NodePort{#nodeport}

Cara paling dasar untuk membangun koneksi eksternal ke layanan adalah mengeksposnya langsung melalui _**[NodePort](<https://kubernetes.io/docs/concepts/services-networking/service/#nodeport>)**_. Seperti namanya, jenis layanan ini membuka port tertentu pada node, lalu lintas yang dikirim ke port ini diteruskan ke layanan Anda. Secara default, _nodePort_ untuk layanan Anda dipilih secara acak dari rentang _30000-32767_.

:::warning 
Metode ini memiliki beberapa kelemahan yang harus dipertimbangkan saat mengonfigurasi Kubernetes Cluster (satu layanan per port, rentang port yang terbatas, dll.). Akibatnya, tipe layanan NodePort dapat digunakan untuk demo atau aplikasi sementara lainnya. Namun, solusi produksi biasanya memerlukan konfigurasi yang lebih kompleks dengan opsi layanan ingresses dan LoadBalancer. Ikuti panduan kami untuk membuat konfigurasi terverifikasi untuk aplikasi Anda dan memasukannya ke produksi: Ingresses Menggunakan Public IP di Layanan Kubernetes.
:::

Berikut adalah contoh konfigurasi layanan tipe _NodePort_:

```yaml
kind: Service
apiVersion: v1
metadata:
  name: nginx1
  namespace: test
  labels:
    run: nginx
spec:
  type: NodePort
  selector:
    run: nginx
  ports:
    - port: 80
      targetPort: 80
```

Jika diperlukan, _nodePort_ tertentu dapat dipilih untuk layanan Anda. Misalnya, kode berikut dapat digunakan untuk mengonfigurasi pengalihan dari _port 30984_:

```yaml
ports:
  - port: 80
    targetPort: 80
    nodePort: 30984
```

:::warning 
nilai nodePort yang disediakan secara manual harus dari rentang yang diizinkan (30000-32767) dan unik (untuk mencegah bentrok dengan layanan lain).
:::

Dalam hal [public IP](<https://docs.dewacloud.com/docs/public-ip/>) terhubung ke node pekerja Kubernetes, tidak diperlukan tindakan tambahan.

Sebaliknya, port yang diperoleh harus diekspos dari sisi platform. Navigasikan ke lingkungan Kubernetes **Settings > Endpoints** dan klik **Add**. Di kerangka yang terbuka, sediakan data berikut:

  * _**Node**_ \- pilih node pekerja dari daftar
  * _**Name**_ \- atur nama endpoint yang diinginkan
  * _**Private Port**_ \- sediakan _nodePort_ dari langkah sebelumnya
  * _**Protocol**_ \- pilih opsi _TCP_

![endpoint to expose kubernetes service](#)

Klik **Add** untuk konfirmasi. Mungkin diperlukan beberapa menit agar platform mengekspos port dan mengalihkan permintaan ke layanan _NodePort_.

## LoadBalancer{#loadbalancer}

Jenis layanan _**[LoadBalancer](<https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer>)**_ adalah cara yang umum digunakan untuk menyediakan layanan di Internet. Ini memerlukan public IP yang terhubung ke node pekerja.

Perlu diingat bahwa dengan tipe _LoadBalancer_ semua lalu lintas langsung diteruskan ke layanan tanpa penyaringan, perutean, dll. Parameter **port** adalah port yang masuk di Internet yang dipetakan layanan ke targetPort pada sisi aplikasi.

Misalnya:

```yaml
kind: Service
apiVersion: v1
metadata:
  name: nginx1
  namespace: test
spec:
  type: LoadBalancer
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 8080
```

## Baca Juga{#whats-next}

  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration/>)
  * [K8s YAML Deployments](<https://docs.dewacloud.com/docs/kubernetes-yaml-deployments/>)
  * [K8s Internal Networking](<https://docs.dewacloud.com/docs/kubernetes-internal-networking/>)
  * [K8s Creating Ingresses](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses/>)