---
sidebar_position: 2
slug: /kubernetes-access-control
title: Access Control
---
# Kubernetes Cluster: Access Control{#kubernetes-cluster-access-control}

Kubernetes mengelola akses ke cluster melalui [RBAC](<https://kubernetes.io/docs/reference/access-authn-authz/rbac/>) (Role-Based Access Control). Secara default, Anda memiliki token yang terkait dengan **[ServiceAccount](<https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/>)** dengan peran _cluster-admin_.

Jika Anda perlu berbagi akses ke Kubernetes cluster dengan pengguna lain, disarankan untuk membuat **ServiceAccounts** terpisah dengan [Roles and RoleBindings](<https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings>) yang diperlukan. Proses ini membantu mengelola tindakan yang diizinkan secara manual (misalnya untuk _membuat namespaces_, _deployments_, _services_, _ingresses_, dll.).

:::warning 
Sistem RBAC Kubernetes tidak selaras dengan akun PaaS. Setiap pengguna dengan akses SSH ke master node dapat menggunakan alat _kubectl_ yang telah dikonfigurasi sebelumnya dengan peran _cluster-admin_. Karena spesifikasi ini, pembagian lingkungan melalui fungsi platform dapat mengekspos informasi sensitif. Fitur platform firewall tidak berfungsi dengan Kubernetes Cluster, karena aturan dikelola secara dinamis oleh Kubernetes itu sendiri. 
:::

## Baca Juga{#whats-next}

  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access>)
  * [K8s Cluster Troubleshooting](<https://docs.dewacloud.com/docs/kubernetes-troubleshooting>)
  * [K8s Cluster Upgrade](<https://docs.dewacloud.com/docs/kubernetes-upgrade>)