---
sidebar_position: 1
slug: /paas-cluster-overview
title: PaaS Cluster Overview
---
# PaaS Cluster Overview

### Konsep-konsep Dasar {#basic-concepts}

**Cluster**

Cluster adalah sekumpulan server dan sumber daya lain yang berfungsi seperti sebuah sistem tunggal dengan memberikan kemampuan untuk mengembangkan, debugging, deployment, pengujian, menjalankan, dan memelihara aplikasi yang di-host. PaaS Cluster mencakup Hardware Nodes dan Cluster Orchestrator.

**Cluster Orchestrator**

Cluster Orchestrator (Infrastructure node) adalah sekumpulan komponen internal untuk mengelola sumber daya, memproses permintaan, dan mendukung pemeliharaan sistem PaaS.

**Hardware Node**

Hardware nodes adalah server fisik yang menyimpan mesin virtual terisolasi yang disediakan untuk environments pengguna.

**Environment**

Environment adalah kumpulan container virtual terisolasi yang menyediakan semua fasilitas yang diperlukan untuk suatu aplikasi tertentu.

**Node (Container)**

Node atau container adalah mesin virtual terisolasi yang disediakan untuk environment dan disimpan di hardware node tertentu.

**Virtuozzo**

Virtuozzo adalah sistem yang digunakan untuk meng-host VPS (Virtual Private Server). Virtuozzo Containers dapat mendukung beberapa containers pada satu server fisik dengan menggunakan virtualisasi tingkat sistem operasi.

## General Cluster Overview{#general-cluster-overview}

PaaS adalah cluster terisolasi dengan sekelompok server dan sumber daya lain yang berfungsi seperti sistem tunggal untuk memberikan kemampuan mengembangkan, debugging, deployment, pengujian, menjalankan, dan memelihara aplikasi yang di-host.

PaaS Cluster mencakup _Hardware Nodes_ di mana [container virtual terisolasi](http://en.wikipedia.org/wiki/Software_container) yang disediakan untuk environment berada dan _Cluster Orchestrator (Infrastructure Node_) untuk pemrosesan komponen internal.

![PaaS cluster](#)

Ikuti link berikut untuk mendapatkan informasi lebih mendetail tentang setiap komponen cluster:

* [Cluster Orchestrator (Infrastructure node)](https://docs.dewacloud.com/docs/cluster-orchestrator)
* [Hardware Node](https://docs.dewacloud.com/docs/infrastructure-level)