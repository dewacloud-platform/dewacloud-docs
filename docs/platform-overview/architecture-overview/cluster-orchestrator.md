---
sidebar_position: 2
slug: /cluster-orchestrator
title: Cluster Orchestrator
---
# Cluster Orchestrator

**Cluster Orchestrator** (Infrastructure Node) adalah sekumpulan komponen internal untuk mengelola sumber daya, memproses permintaan, dan mendukung pemeliharaan sistem PaaS.

Untuk high availability, platform berjalan pada **dua infrastructure nodes**. Dengan bantuan sinkronisasi, setiap server berjalan sebagai salinan infrastruktur platform yang identik dan independen.

Komponen infra node berjalan di dalam Virtuozzo Containers virtual terpisah untuk Linux pada CentOS dan bertanggung jawab atas:

* Provisioning
* Templates configuration dan clustering binding
* Environment’s lifecycle management
* Applications deployment
* Scalability management
* Menangani permintaan melalui Shared Resolver
* Logs dan statistik
* Billing
* Alat analisis bisnis
* Monitoring dan pemeriksaan kesehatan

Platform mencakup sejumlah subsistem, yang melakukan operasi yang disebutkan di atas.

## Baca Juga{#whats-next}

* [Apa Itu Platform-as-a-Service](https://docs.dewacloud.com/docs/what-is-paas-and-caas/)
* [PaaS Cluster Overview](https://docs.dewacloud.com/docs/cluster-overview/)
* [Infrastructure Level](https://docs.dewacloud.com/docs/infrastructure-level/)