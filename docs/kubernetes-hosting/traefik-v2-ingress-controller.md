---
sidebar_position: 6
slug: /kubernetes-traefik-v2-ingress-controller
title: Traefik v2 Ingress Controller
---
# Introduction to Traefik v2 Ingress Controller in Jelastic Kubernetes Service
![Traefik v2 in Jelastic Kubernetes](#)

Kubernetes cluster Jelastic dapat dipasang dengan NGINX, Traefik, atau HAProxy ingress controllers. Dalam posting ini, kita akan melihat lebih dekat pada Traefik dan evolusinya dalam Jelastic Kubernetes Service (Jelastic KS).

Saat ini semua versi Jelastic Kubernetes yang diterbitkan mendukung Traefik v1, namun mulai dari versi K8s 1.21.2, Traefik v2 akan digunakan.

Sejumlah komponen internal Traefik didesain ulang secara konseptual dari v1 ke v2. Di bawah ini kami akan mencakup beberapa di antaranya yang kami anggap lebih penting.

## No Frontends and Backends

Konsep dasar seperti frontend dan backend telah digantikan dengan kombinasi router, layanan, dan middleware.  
Dengan Traefik v1, dianggap bahwa router menggantikan frontend dan layanan mengambil alih peran backend, sementara setiap router merujuk ke layanan.

Untuk meningkatkan fleksibilitas dalam mengatur permintaan sebelum dikirim ke layanan, middleware ditambahkan ke router di Traefik v2. Middleware ini dapat disusun bersama untuk menyesuaikan skenario apapun. Juga, setiap router dapat terhubung ke instance middleware yang diinginkan.

## Middleware

Ada [sejumlah middleware yang tersedia](<https://doc.traefik.io/traefik/middlewares/overview/#available-middlewares>). Selain melayani traditional ingresses untuk permintaan HTTP, entitas middleware terpisah memungkinkan untuk mengubah parameter permintaan, header HTTP, beberapa bertanggung jawab untuk logika pengalihan, yang lain menambahkan kemampuan otentikasi, dll.

Sebelum permintaan dikirim ke layanan, ia dapat dimodifikasi dengan middleware yang terhubung ke router.

![Traefik v2 Middleware](#)

Berikut beberapa contoh untuk middleware yang digunakan dalam routing permintaan:

  * **stripPrefix** \- memungkinkan untuk menghapus awalan dari jalur. Middleware ini seharusnya digunakan jika backend Anda melayani jalur "/", tetapi harus diekspos secara eksternal pada awalan tertentu, misalnya "/foo". Middleware ini adalah pengganti anotasi **frontend.rule.type** di Traefik v1.

```yaml
http:
  middlewares:
    test-stripprefix:
      stripPrefix:
        prefixes:
          - "/foo"
```

![Traefik v2 StripPrefix](#)

  * Middleware **basicAuth** untuk menerapkan otorisasi dasar. Misalnya:

```yaml
http:
  middlewares:
    test-auth:
      basicAuth:
        users:
          - "user1:$apr1$Kveg6cv0$yJn5mwyfBy7luzZ9Fi1AH0"
          - "user2:$apr1$w70ASLDx$1UJmrFL/lVoltjmAz4UDH/"
```

Middleware ini adalah alternatif untuk menentukan kredensial melalui [Kubernetes Secrets](<https://kubernetes.io/docs/concepts/configuration/secret/>) dan membatasi akses ke layanan:

![Traefik v2 BasicAuth](#)

Dan ini adalah pengganti untuk anotasi Traefik v1

```yaml
traefik.ingress.kubernetes.io/auth-type: "basic"
```

## Several Middlewares at a Time

Penggunaan Middleware (serta komponen routing lainnya) bersifat opsional. Logika routing dapat menggunakan beberapa middleware atau tidak sama sekali. Misalnya, dalam Ingress di bawah ini satu middleware menangani tujuan otentikasi, dan yang lain menghapus awalan jalur sumber.

```yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: monitoring-prometheus-alertmanager
  namespace: kubernetes-monitoring
  annotations:
    kubernetes.io/ingress.class: traefik
    traefik.ingress.kubernetes.io/router.middlewares:
      kubernetes-monitoring-alert-auth@kubernetescrd,
      kubernetes-monitoring-alert-prefix@kubernetescrd
spec:
  rules:
  - http:
      paths:
      - path: /prometheus-alert
        pathType: Prefix
        backend:
          service:
            name: monitoring-prometheus-alertmanager
            port:
              number: 80  
---
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: alert-auth
  namespace: kubernetes-monitoring
spec:
  basicAuth:
    secret: monitoring-prometheus  
---
apiVersion: traefik.containo.us/v1alpha1
kind: Middleware
metadata:
  name: alert-prefix
  namespace: kubernetes-monitoring
spec:
  stripPrefix:
    prefixes:
      - /prometheus-alert
```

## Providers

Traefik v2 memperkenalkan konsep sebuah [provider](<https://doc.traefik.io/traefik/providers/overview/>), yang merupakan komponen infrastruktur yang menyediakan informasi mengenai routing ke Traefik. Begitu Traefik mendeteksi perubahan apapun, ia secara otomatis memperbarui rute. Provider Traefik Ingress Kubernetes menawarkan fungsionalitas controller [Kubernetes ingress](<https://kubernetes.io/docs/concepts/services-networking/ingress/>) tradisional.

Selain dari Ingress standar, Jelastic KS sekarang mendukung sebuah [IngressRoute](<https://doc.traefik.io/traefik/user-guides/crd-acme/#ingressroute-definition>) yang merupakan implementasi Custom Resource Definition (CRD) dari sebuah [Traefik HTTP router](<https://doc.traefik.io/traefik/routing/routers/#configuring-http-routers>). Implementasi ini meningkatkan aksesibilitas ke cluster K8s tanpa menulis anotasi. Anda bisa familiar dengan [contoh](<https://github.com/jelastic-jps/kubernetes/blob/v1.21.2/addons/jaeger/hotrod-app-traefik.yaml>) cara menggunakan IngressRoute di repositori K8s kami.

## Services

Di antara fitur lainnya, Traefik v2 mendukung Layanan khusus yang bertanggung jawab untuk mengkonfigurasi cara mencapai layanan Kubernetes yang sebenarnya yang pada akhirnya akan menangani permintaan masuk.

![Traefik v2 Services](#)

```yaml
http:
  services:
    my-service:
      loadBalancer:
        servers:
          - url: "http://<private-ip-server-1>:<private-port-server-1>/"
          - url: "http://<private-ip-server-2>:<private-port-server-2>/"
```

Selain itu, Traefik menawarkan serangkaian layanan internal. Anda bisa melihat contoh dalam file konfigurasi dari repositori Jelastic KS: ada akses ke layanan dashboard Traefik v2 bawaan via IngressRoute yang disediakan.

![Traefik v2 Dashboard](#)

Ini hanya beberapa perubahan utama dalam Traefik v2 baru yang diterapkan dalam [Jelastic Kubernetes v1.21.2+](<https://github.com/jelastic-jps/kubernetes/tree/v1.21.2>). Anda bisa memeriksa daftar lengkapnya dalam [dokumentasi resmi terkait transisi dari Traefik v1 ke v2](<https://doc.traefik.io/traefik/migration/v1-to-v2/>).

Mulailah dengan [Kubernetes Service](<https://jelastic.com/kubernetes-hosting/>) yang dapat di-deploy secara otomatis, diskalakan, dan diperbarui menggunakan Jelastic PaaS dan jangan lupa untuk memperhatikan [rilis baru](<https://docs.jelastic.com/kubernetes-cluster-versions/#current-versions>).