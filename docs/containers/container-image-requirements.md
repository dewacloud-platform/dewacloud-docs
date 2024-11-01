---
sidebar_position: 5
slug: /container-image-requirements
title: Container Image Requirements
---

# Container Image Requirements{#container-image-requirements}

Saat ini, platform containers memiliki persyaratan berikut untuk base image:

  * [Supported OS Distributions](#supported-os-distributions)
  * [Supported Architectures](#supported-architectures)

## Supported OS Distributions{#supported-os-distributions}

Distribusi Linux berikut didukung sebagai basis containers yang dapat di-deploy di platform dan ditangani dengan benar oleh sistem (informasi ini dapat berubah):

Distribution | Version | VZ Template  
---|---|---  
AlmaLinux | almalinux 9 | almalinux-9-x86_64*  
Alpine | alpine 3 | alpine-3.x-x86_64  
CentOS | centos 7 | centos-7-x86_64  
CentOS | centos 8 | almalinux-8-x86_64*  
Debian | debian 10 | debian-10.0-x86_64  
Debian | debian 11 | debian-11.0-x86_64  
Debian | debian 12 | debian-12.0-x86_64*  
RHEL | RHEL 7 | centos-7-x86_64  
Ubuntu | ubuntu 18.04 | ubuntu-18.04-x86_64  
Ubuntu | ubuntu 20.04 | ubuntu-20.04-x86_64  
Ubuntu | ubuntu 22.04 | ubuntu-22.04-x86_64  
Ubuntu | ubuntu 23.04* | ubuntu-22.04-x86_64  

**Catatan:**

  * Platform [hardware servers](<https://www.virtuozzo.com/application-platform-ops-docs/hardware-requirements/>) harus mendukung **instruksi set CPU x86-64 v2** (atau versi yang lebih tinggi).
  * Containers berdasarkan template OS _**[Ubuntu 23](<https://docs.dewacloud.com/release-notes/release-notes-84/#ubuntu-23-support>)**_ didukung sejak versi platform _8.4.1_.
  * Template _**[debian-12.0-x86_64](<https://docs.dewacloud.com/release-notes/release-notes-84/#debian-12-support>)**_ didukung sejak versi platform 8.4.1 (versi kernel _3.10.0-1160.90.1.vz7.200.7_, Virtuozzo Hybrid Server 7.5 Update 5 Hotfix 1).
  * Template _**[almalinux-8-x86_64](<https://docs.dewacloud.com/release-notes/release-notes-824/#almalinux-8-os-support>)**_ didukung sejak versi platform 8.2.4 (versi kernel _3.10.0-1160.80.1.vz7.191.4_).
  * Template _**[almalinux-9-x86_64](<https://docs.dewacloud.com/release-notes/release-notes-83/#almalinux-9-base-os-image>)**_ didukung sejak versi platform 8.3.1 (versi kernel _3.10.0-1160.80.1.vz7.191.4_).

## Supported Architectures{#supported-architectures}

Saat ini, hanya arsitektur image _**amd64**_ yang didukung untuk [custom container deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) (dan [redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>)).

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)
  * [Building Custom Container](<https://docs.dewacloud.com/docs/building-custom-container/>)