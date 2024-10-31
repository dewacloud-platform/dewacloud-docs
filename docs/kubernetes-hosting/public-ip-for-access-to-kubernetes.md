---
sidebar_position: 7
slug: /public-ip-for-access-to-kubernetes
title: Public IP for Access to Kubernetes
---
# IP Publik untuk Akses ke Aplikasi Kubernetes di Dewacloud
<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image10-3-300x253.png" alt="Cert-Manager Installation" width="30%"/>

Dalam posting ini kami ingin menunjukkan bagaimana mengekspos aplikasi melalui sebuah [alamat IP](<https://docs.dewacloud.com/docs/public-ip/>) publik yang terhubung ke salah satu node dari lingkungan cluster Kubernetes di Jelastic PaaS. Ini dapat dilakukan dengan dua cara yang mungkin - menghubungkan IP ke [Dedicated Load Balancer](<https://docs.dewacloud.com/docs/load-balancing/>) atau ke node K8s Worker.

## Dedicated Load Balancer untuk Akses Aplikasi

1\. Pertama-tama, [instal cluster Kubernetes](<https://docs.dewacloud.com/docs/kubernetes-cluster-installation>) dari Jelastic marketplace dan deploy aplikasi. Sebagai contoh, kami akan menggunakan [Jakarta EE Cargo Tracker](<https://www.virtuozzo.com/company/blog/jakarta-ee-deployment-kubernetes/>).

2\. Klik **Change Environment Topology** di sebelah cluster Kubernetes Anda. Di jendela yang terbuka, tambahkan node Dedicated Load Balancer dan lampirkan alamat IP publik ke node tersebut.
<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image1-5-768x522.png" alt="Public IP for Access to Kubernetes" width="100%"/>

Di sini kami menggunakan node load balancer NGINX, tetapi Anda bisa memilih yang lain yang tersedia ([HAProxy](<https://docs.jelastic.com/haproxy/>), [LS Web ADC](<https://docs.jelastic.com/litespeed-web-adc/>), [Varnish](<https://docs.jelastic.com/varnish/>)). Setelah topologi diubah, tampak seperti berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image4-3.png" alt="Kubernetes Let's Encrypt" width="80%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image9-3-768x392.png" alt="Kubernetes Worker IP" width="80%"/>

3\. Setelah itu, buat [A record](<https://docs.dewacloud.com/docs/custom-domains/#how-to-configure-dns-record>) untuk [domain kustom](<https://docs.dewacloud.com/docs/custom-domains/>) menggunakan alamat IP yang ditambahkan pada langkah sebelumnya. Misalnya, **_cargo-tracker.jele.website_**.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image13-2-768x224.png" alt="Kubernetes Ingress" width="100%"/>

4\. Sekarang Anda bisa mengikat domain kustom ke cluster K8s dan mengajukan permintaan untuk menerbitkan sertifikat [Let’s Encrypt SSL](<https://docs.dewacloud.com/docs/let's-encrypt-ssl>) yang terpercaya untuk mengamankan lalu lintas aplikasi.

  * Pergi ke [Add-Ons](<https://docs.jelastic.com/marketplace/>) load balancer dan temukan **Let’s Encrypt Free SSL**.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image6-4-768x667.png" alt="public ip on kubernetes load balancer" width="70%"/>

  * Masukkan nama domain kustom yang sudah kami buat dan terapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image14-1.png" alt="Kubernetes Default Application" width="70%"/>

Sekarang aplikasi Cargo Tracker tersedia menggunakan nama domain kustom **_https://cargo-tracker.jele.website_** dan lalu lintas dienkripsi dengan sertifikat Let’s Encrypt SSL yang valid.

## Alamat IP Publik Node Pekerja Kubernetes untuk Akses Aplikasi

Mari kita lihat cara lain untuk membuat aplikasi tersedia di luar cluster Kubernetes. Intisari dari metode ini adalah untuk membuatnya dapat diakses langsung melalui alamat IP publik yang terhubung ke salah satu node pekerja.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image3-4-768x510.png" alt="Kubernetes Custom Domain" width="70%"/>

Mari kita lanjutkan di cluster yang sama dengan aplikasi Cargo Tracker yang telah di-deploy.

1\. Klik **Change Environment Topology** dan tambahkan alamat IP publik ke node pekerja.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image12-2.png" alt="public ip on kubernetes worker" width="80%"/>

2\. Buat A record untuk pemetaan domain kustom ke alamat IP yang baru ditambahkan. Gunakan nama domain berbeda dari yang digunakan pada bab sebelumnya. Misalnya: **_cargo-tracker-worker.jele.website_**.

3\. Kemudian, pergi ke add-ons dari node Control Plane dan instal [Certificate Manager](<https://cert-manager.io/docs/>). Bersamaan dengan kontroler cert-manager akan diinstal controller ingress NGINX dengan tipe layanan LoadBalancer. Ini akan menahan IP yang terhubung ke node pekerja, dan akan melayani sumber daya kelas ingress “nginx-cert”.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image5-4-768x701.png" alt="Kubernetes Dedicated LoadBalancer" width="70%"/>

4\. Masukkan nama domain kustom dan terapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image2-5.png" alt="Kubernetes Cluster Topology" width="70%"/>

5\. Setelah instalasi, add-on menginstal aplikasi tes **_helloworld-cert_**. Mari kita hapus sumber daya yang digunakan:

```bash
$ kubectl delete deploy hello-cert-manager

$ kubectl delete svc hello-cert-manager

$ kubectl delete ing helloworld-cert
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image8-4.png" alt="Kubernetes Domain Certificate" width="70%"/>

6\. Akhirnya, buat sumber daya ingress **_cargo-tracker-worker_** yang akan menghentikan lalu lintas SSL aplikasi dan menangani routing ke layanan cargo-tracker. Misalnya **_cargo-tracker-worker-ingress.yaml_**:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: cargo-tracker-worker
  namespace: default
  annotations:
    kubernetes.io/ingress.class: nginx-cert
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    kubernetes.io/tls-acme: "true"
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/affinity-mode: "persistent"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
spec:
  tls:
  - hosts:
    - cargo-tracker-worker.jele.website
    secretName: external-domain-tls
  rules:
  - host: cargo-tracker-worker.jele.website
    http:
      paths:
      - path: /
        pathType: ImplementationSpecific
        backend:
          service:
            name: cargo-tracker
            port:
              number: 80
```

```bash
$ kubectl apply -f cargo-tracker-worker-ingress.yaml
```

7\. Setelah membuat ingress, sertifikat Let's Encrypt SSL akan diterbitkan secara otomatis untuk nama domain ini dengan Certificate Manager. Tunggu sebentar dan periksa ketersediaan aplikasi dengan nama domain kustom: https://cargo-tracker-worker.jele.website.

Selamat! Anda telah berhasil mengekspos aplikasi Anda dengan dua cara yang berbeda dan oleh karena itu, Anda seharusnya melihat dua ingresses:

  * **_cargo-tracker_** \- melayani lalu lintas aplikasi yang mengalir melalui alamat IP publik dari load balancer khusus
  * **_cargo-tracker-worker_** \- melayani lalu lintas aplikasi yang mengalir langsung melalui alamat IP publik yang terhubung ke node pekerja K8s

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Public%20IP%20for%20Access%20to%20Kubernetes/image11-3-768x160.png" alt="Kuberenetes Cert-Manager Certificate" width="100%"/>
