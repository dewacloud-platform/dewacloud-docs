---
sidebar_position: 1
slug: /paas-cluster-overview
title: PaaS Cluster Overview
---
# PaaS Cluster Overview

### Basic Concepts{#basic-concepts}

**Cluster**

Cluster adalah sekelompok server dan sumber daya lain yang bertindak seperti satu sistem dengan menyediakan kemampuan untuk mengembangkan, debug, deploy, menguji, menjalankan, dan memelihara aplikasi yang di-host. PaaS Cluster mencakup Hardware Nodes dan Cluster Orchestrator.

**Cluster Orchestrator**

Cluster Orchestrator (Infrastructure node) adalah sekumpulan komponen internal untuk mengelola sumber daya, memproses permintaan, dan mendukung pemeliharaan sistem PaaS.

**Hardware Node**

Hardware nodes adalah server fisik yang menyimpan mesin virtual terisolasi yang disediakan untuk environment pengguna.

**Environment**

Environment adalah kumpulan container virtual terisolasi yang menyediakan semua fasilitas yang diperlukan untuk aplikasi tertentu.

**Node (Container)**

Node atau container adalah mesin isolasi virtual yang disediakan untuk environment dan disimpan pada hardware node tertentu.

**Virtuozzo**

Virtuozzo adalah sistem yang digunakan untuk meng-host VPS (Virtual Private Server). Virtuozzo Containers dapat mendukung beberapa container pada satu server fisik dengan menggunakan virtualisasi tingkat sistem operasi.

## General Cluster Overview{#general-cluster-overview}

PaaS adalah cluster terisolasi dengan sekelompok server dan sumber daya lain yang bertindak seperti satu sistem untuk menyediakan kemampuan mengembangkan, debug, deploy, menguji, menjalankan, dan memelihara aplikasi yang di-host.

PaaS Cluster mencakup _Hardware Nodes_ di mana [virtual isolated containers](<http://en.wikipedia.org/wiki/Software_container>) yang disediakan untuk environment terletak, dan _Cluster Orchestrator (Infrastructure Node)_ untuk pemrosesan komponen internal.

![PaaS cluster](#)

Ikuti tautan untuk mendapatkan informasi lebih rinci tentang setiap komponen cluster:

  * [Cluster Orchestrator (Infrastructure node)](<https://docs.dewacloud.com/docs/cluster-orchestrator>)
  * [Hardware Node](<https://docs.dewacloud.com/docs/infrastructure-level>)
