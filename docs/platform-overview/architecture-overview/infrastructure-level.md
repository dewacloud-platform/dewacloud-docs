---
sidebar_position: 3
slug: /infrastructure-level
title: Infrastructure Level
---
# Infrastructure Level

Platform dapat diinstal di atas server **bare metal** atau solusi **IaaS** pihak ketiga seperti OpenStack, vSphere, AWS, Azure, Rackspace, dan lainnya. Jumlah hardware node dalam cluster tergantung pada beban cluster yang diharapkan dan biasanya ditentukan selama proses onboarding.

**Hardware Nodes** adalah server fisik atau mesin virtual besar (dapat divisualisasikan melalui KVM, ESXi, Hyper-V, dll.). Platform memotong server besar atau mesin virtual menjadi container virtual terisolasi kecil yang akan digunakan untuk environments pengguna. Pemotongan ini adalah dasar untuk kepadatan terdepan dalam industri dan pemanfaatan sumber daya sistem platform.

Setiap **environment** adalah kumpulan dari container virtual terisolasi yang menyediakan semua fasilitas yang diperlukan untuk suatu aplikasi tertentu. Selama pembuatan environment, container yang diminta diambil dari pool template container yang telah dibuat sebelumnya. Hal ini membantu mempercepat provisioning dan berarti hanya membutuhkan waktu satu menit untuk menjalankan environments kompleks. Setiap stack berlokasi di dalam container terisolasi, yang menghilangkan risiko potensi pengaruh satu stack terhadap yang lain.

![infrastructure level hardware node](#)

## Baca Juga{#whats-next}

* [Apa Itu PaaS & CaaS](https://docs.dewacloud.com/docs/what-is-paas-and-caas/)
* [PaaS Cluster Overview](https://docs.dewacloud.com/docs/cluster-overview/)
* [Cluster Orchestrator](https://docs.dewacloud.com/docs/cluster-orchestrator/)
* [Isolated Containers](https://docs.dewacloud.com/docs/isolated-containers/)