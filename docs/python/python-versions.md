---
sidebar_position: 2
slug: /python-versions
title: Python Versions
---
# Python Versions

Platform ini menyediakan semua versi terbaru dari bahasa pemrograman Python dan memastikan implementasi cepat untuk setiap rilis berikutnya. Daftar versi engine yang didukung:

  * _3.8.19_
  * _3.9.19_
  * _3.10.13_
  * _3.11.8_
  * _3.12.5_

:::tip
Daftar terbaru dari rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara teratur (mingguan).
:::

Versi ini dapat dipilih selama [pembuatan environment baru](#create-python-environment) dan disesuaikan untuk [instance Python yang sudah ada](#change-python-version).

## Create Python Environment{#create-python-environment}

1\. Akses topology wizard dengan mengklik tombol **New Environment** di bagian atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/01-create-new-environment-button.png" alt="create new environment button" width="70%"/>

2\. Navigasikan ke tab bahasa pemrograman _**Python**_, di mana **Apache Python** application server dipilih secara otomatis, dan pilih versi engine yang diinginkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/02-topology-wizard-select-python-version.png" alt="topology wizard select Python version" max-width="100%"/>

Sesuaikan pengaturan lainnya (misalnya [batas cloudlets](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), [public IPs](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.), berikan nama environment dan klik **Create**.

## Change Python Version{#change-python-version}

Versi dari instance Python yang sudah ada dapat diubah dengan fitur [container redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>).

1\. Dialog yang sesuai dapat diakses dengan cara berikut:

  * dari bagian tengah topology wizard (dapat diakses dengan tombol **Change Environment Topology** di sebelah environment yang sesuai)  
  <img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/03-topology-wizard-redeploy-python-nodes.png" alt="topology wizard redeploy Python nodes" width="40%"/>
  * menggunakan tombol **Redeploy container(s)** di sebelah node atau layer yang diperlukan  
    <img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/04-redeploy-containers-button.png" alt="redeploy containers button" max-width="100%"/>

2\. Dalam frame yang terbuka, Anda dapat menyesuaikan pengaturan berikut:

  * **Tag** \- pilih versi engine Python yang dibutuhkan
  * **Keep volumes data** \- lindungi data di volumes dari penghapusan selama redeploy
  * **Simultaneous** atau **Sequential deployment with delay** (untuk [scaled servers](<https://docs.dewacloud.com/docs/horizontal-scaling/>) saja) - pilih apakah semua container dalam layer harus dideploy ulang sekaligus atau satu per satu

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/05-container-redeployment-frame.png" alt="Python container redeployment frame" width="50%"/>

Klik **Redeploy** untuk melanjutkan.

3\. Konfirmasi tindakan melalui jendela pop-up yang muncul.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/python-versions/06-confirm-python-container-redeployment.png" alt="confirm Python container redeployment" width="45%"/>

Selesai! Dalam beberapa menit, versi engine Python dari container Anda akan diperbarui.

## Baca Juga{#whats-next}

  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)