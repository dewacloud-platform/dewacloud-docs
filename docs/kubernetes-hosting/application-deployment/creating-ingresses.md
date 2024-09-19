---
sidebar_position: 5
slug: /kubernetes-creating-ingresses
title: Creating Ingresses
---
# Kubernetes Cluster: Creating Ingresses{#kubernetes-cluster-creating-ingresses}

**[Ingress](<https://kubernetes.io/docs/concepts/services-networking/ingress/>)** adalah load balancer pada Kubernetes Cluster yang mengelola akses eksternal ke layanan, menyediakan terminasi SSL dan virtual hosting berbasis nama. Ini diatur melalui serangkaian aturan (_spec_) yang dicocokkan dengan semua permintaan masuk.

:::tip
Dibandingkan dengan layanan yang diekspos melalui NodePort, ingress adalah opsi yang lebih kuat tetapi juga lebih rumit. Ini paling berguna saat Anda perlu mengekspos beberapa layanan di bawah alamat IP yang sama. Selain itu, ingress dikelola oleh controller, yang menyediakan banyak fitur secara otomatis (SSL, autentikasi, routing, dll.).
:::

Ingress dalam **Kubernetes Cluster** secara default dikelola oleh controller ingress [Traefik](<https://docs.traefik.io/v1.7/user-guide/kubernetes/>), dengan opsi [HAProxy](<https://github.com/jcmoraisjr/haproxy-ingress>) dan [NGINX](<https://github.com/kubernetes/ingress-nginx>) yang tersedia di versi paket 1.15.5 mendatang. Controller ini memonitor objek, menganalisis spesifikasi/annotasi, dan menerjemahkannya menjadi aturan pengalihan.

:::note
Tidak mungkin untuk mengubah controller ingress yang dipilih melalui add-on manajemen Kubernetes atau beberapa alat otomatisasi lainnya setelah instalasi. Operasi ini masih bisa dilakukan secara manual, jangan ragu untuk menghubungi dukungan jika Anda membutuhkan bantuan.
:::

Spec ingress adalah kombinasi dari aturan jalur, layanan backend, dan port. Misalnya, ingress Anda mungkin terlihat seperti berikut:

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  labels:
    app: myapp
  name: myapp
  annotations:
    kubernetes.io/ingress.class: traefik
    ingress.kubernetes.io/secure-backends: "true"
    traefik.frontend.rule.type: PathPrefixStrip
spec:
  rules:
  - http:
      paths:
      - path: /myapp
        backend:
          serviceName: myapp
          servicePort: 8080
```

Contoh ini mengekspos layanan _myapp_, yang terikat ke port _8080_ pada jalur domain default lingkungan Kubernetes Anda dengan ekor _/myapp_ (mis. `https://${envName}.${platformDomain.com}/myapp`). Untuk informasi tambahan tentang konfigurasi aturan ingress (termasuk routing berbasis jalur dan subdomain), lihat [dokumentasi resmi](<https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-rules>).

## Baca Juga{#whats-next}

  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>)
  * [K8s YAML Deployments](<https://docs.dewacloud.com/docs/kubernetes-yaml-deployments>)
  * [K8s Internal Networking](<https://docs.dewacloud.com/docs/kubernetes-internal-networking>)
  * [K8s Exposing Services](<https://docs.dewacloud.com/docs/kubernetes-exposing-services>)
  * [K8s Volume Provisioner](<https://docs.dewacloud.com/docs/kubernetes-volume-provisioner>)