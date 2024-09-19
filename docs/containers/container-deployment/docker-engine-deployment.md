---
sidebar_position: 3
slug: /docker-engine-deployment
title: Docker Engine Deployment
---

# Docker Engine Deployment{#docker-engine-deployment}

Platform ini menyediakan dukungan untuk **Docker Engine Community Edition** dengan kompatibilitas penuh ke ekosistem Docker native. Integrasi tersebut memungkinkan bekerja dengan alat inti teknologi container Docker, yaitu:

  * **Docker Engine** \- memproses manifes Dockerfile atau menjalankan container images yang sudah dibangun sebelumnya
  * **Docker Registry** \- menyimpan dan menyediakan akses ke banyak images publik dan privat yang ditujukan untuk deployment dalam Docker Engine
  * **Docker Compose** \- membantu merakit aplikasi yang terdiri dari beberapa komponen dengan semua konfigurasi yang diperlukan dinyatakan dalam satu file compose
  * **Docker Swarm** \- mewakili beberapa Docker nodes independen yang saling terhubung dalam satu cluster

1\. **Docker Engine CE** disajikan sebagai solusi pre-packaged yang tersedia melalui [platform Marketplace](<https://docs.dewacloud.com/docs/marketplace/>). Gunakan kolom _search_ di bagian atas atau cari paket di kategori _Dev & Admin Tools_:

![Docker Engine in Marketplace](#)

:::tip
Anda juga dapat menginstal Docker Engine CE melalui topology wizard - cari stack atau temukan secara manual di bagian More > Extra Services.
:::

2\. Selain pemilihan _**Docker Version**_, Anda dapat memilih dari beberapa opsi deployment saat menginstal dari Marketplace:

  * _**Create a clean standalone engine**_ \- menyiapkan node kosong dengan hanya Docker daemon di dalamnya. Jika diperlukan, Anda dapat memasang **Portainer UI** \- alat manajemen berbasis web tambahan
  * _**Connect to an existing swarm cluster**_ \- secara otomatis memasukkan Docker Engine baru ini ke dalam [Docker Swarm](<https://docs.dewacloud.com/company/blog/docker-swarm-auto-clustering-and-scaling-with-paas/>) cluster yang sudah ada (memerlukan _Join Token_ dan _Host IP_ cluster yang sesuai)
  * _**Deploy containers from compose.yml**_ \- secara otomatis menerapkan aplikasi dari repository custom yang terhubung

![Docker Engine CE package](#)

Konfirmasi instalasi dengan memberikan informasi umum (_Environment_, _Display Name_, _Region_) dan klik tombol **Install**.

:::note
Pelajari lebih lanjut tentang instalasi dan manajemen melalui artikel yang relevan di blog kami.
:::

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Certified Containers Deployment](<https://docs.dewacloud.com/docs/certified-containers-deployment/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)
  * [Docker Swarm](<https://www.virtuozzo.com/company/blog/docker-swarm-auto-clustering-and-scaling-with-paas/>)