---
sidebar_position: 5
slug: /what-are-application-containers
title: Application Containers
---
# Apa Itu Application Containers

**Application container** adalah tipe container yang relatif baru. Ini adalah solusi yang berfokus pada aplikasi, layanan, atau bahkan microservice yang biasanya menjalankan hanya satu proses di dalamnya. Sebagai hasilnya, application containers mendorong pembuatan infrastruktur yang tidak dapat diubah dan sementara. Jika aplikasi atau layanan perlu diperbarui, sebuah container baru sepenuhnya dibangun (dengan penyesuaian yang diperlukan) dari image yang sesuai. Kemudian, ini disediakan untuk menggantikan instance container yang sedang berjalan.

__Di masa awal,__ kompleksitas seperti ini, serta [kurangnya isolasi yang tepat](https://www.virtuozzo.com/company/blog/java-and-memory-limits-in-containers-lxc-docker-and-openvz/) dan ketidakcocokan application containers dengan beberapa teknologi (seperti Java dan database runtimes), sangat mempengaruhi kecepatan adopsi application containers. Pengembang harus melakukan penyesuaian signifikan untuk memastikan bahwa teknologi mereka dan fungsi tambahan dapat dijalankan di dalam application containers dengan benar.

Juga, sebagai solusi _stateless_, application containers tidak dapat menyimpan informasi status secara asli di dalamnya, sehingga operasi semacam itu didelegasikan ke sistem penyimpanan persisten eksternal. Namun, menurut para pengembang containers murni stateless, membawa status ke deployment adalah cara desain arsitektur yang usang. Mereka menegaskan bahwa pendekatan terbaik dan terbersih untuk containers adalah melakukan operasi yang tidak memerlukan penyimpanan status.

__Saat ini,__ banyak alat tambahan diimplementasikan untuk pemanfaatan layanan yang menggunakan application containers secara mudah. Sebagai hasilnya, pengembang dapat memanfaatkan unit application containers yang sangat khusus tanpa kelemahan dari manajemen yang kompleks.

Beberapa implementasi application container secara aktif dikembangkan: _Docker_, _CRI-O_, _containerd_, dan beberapa lainnya. Saat ini, platform menggunakan Docker sebagai teknologi application containers yang paling banyak diadopsi. Platform menyediakan [otomatisasi deployment](https://docs.dewacloud.com/docs/dockers-overview), [provisioning server cepat](https://docs.dewacloud.com/docs/dockers-management), dan [alat penyimpanan/pemrosesan data stateful](https://docs.dewacloud.com/docs/container-volumes) (sesi, log, konfigurasi, dll.) untuk pemanfaatan application containers yang mudah.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/application-containers/services-in-application-and-system-containers.png" alt="services in application and system containers" width="100%"/>

Namun, beberapa aplikasi dan teknologi mungkin masih mengalami masalah saat bermigrasi ke application containers (karena kurangnya isolasi yang tepat, statelessness, dan persyaratan single-process). Ini terutama relevan untuk alat orkestrasi application containers yang kompleks seperti Kubernetes. Dalam kasus kesulitan dengan migrasi, [system containers](https://docs.dewacloud.com/docs/what-are-system-containers) dapat dianggap sebagai alternatif yang lebih cocok untuk containerization.

## Baca Juga{#whats-next}

* [Docker Standard Support](https://docs.dewacloud.com/docs/dockers-overview)
* [System Containers](https://docs.dewacloud.com/docs/what-are-system-containers)
* [Supported OS Distributions](https://docs.dewacloud.com/docs/docker-supported-distributions)
* [Container Redeploy](https://docs.dewacloud.com/docs/container-redeploy)