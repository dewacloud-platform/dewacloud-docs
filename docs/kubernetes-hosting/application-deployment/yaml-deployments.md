---
sidebar_position: 2
slug: /kubernetes-yaml-deployments
title: YAML Deployments
---
# Kubernetes Cluster: YAML Deployments{#kubernetes-cluster-yaml-deployments}

Kubernetes secara native mendukung deployment dari file JSON dan YAML. Namun, di kalangan komunitas, YAML lebih sering digunakan dan dapat dianggap sebagai standar.

Deployment dari YAML mirip dengan chart [Helm](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>) - file _**.yaml**_ atau _**.yml**_ menyediakan definisi objek atau daftar objek. Dengan demikian, ini dapat langsung diterapkan di _Kubernetes Dashboard_ atau dengan alat baris perintah _kubectl_ tanpa instalasi perangkat lunak tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/application%20deployment/YAML%20Deployments/01-kubernetes-dashboard-deploy-application-with-yaml.png" alt="kubernetes dashboard deploy application with yaml" width="80%"/>

Saat bekerja dengan _kubectl_, gunakan perintah _**[apply](<https://kubernetes.io/docs/reference/kubectl/cheatsheet/#apply>)**_ dengan path yang benar ke file YAML deployment Anda:

```bash
kubectl apply -f /path/to/deployment.yaml
```

Di sisi lain, manfaat dari chart [Helm](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>) adalah fleksibilitas lanjut (dukungan untuk kondisi, penggantian, parameter, dll.).

## Baca Juga{#whats-next}

  * [K8s Helm Integration](<https://docs.dewacloud.com/docs/kubernetes-helm-integration>)
  * [K8s Internal Networking](<https://docs.dewacloud.com/docs/kubernetes-internal-networking>)
  * [K8s Exposing Services](<https://docs.dewacloud.com/docs/kubernetes-exposing-services>)
  * [K8s Creating Ingresses](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses>)
