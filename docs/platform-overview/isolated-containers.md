---
sidebar_position: 6
slug: /isolated-containers
title: Isolated Containers
---
# Isolated Containers

Semua instance dalam environment (seperti database, application servers, dll.) adalah isolated containers yang berlokasi di host yang berbeda.

Tiga alasan utama mengapa platform menyediakan server berbasis peran individu adalah:

* [live migration](https://docs.dewacloud.com/docs/#isolated-containers-live-migration)
* [high availability](https://docs.dewacloud.com/docs/#high-availability-for-applications)
* [security](https://docs.dewacloud.com/docs/#security-of-isolated-containers)

## Isolated Containers Live Migration{#isolated-containers-live-migration}

Dalam beberapa kasus, ketika aplikasi Anda mulai meminta lebih banyak _**sumber daya**_, server fisik yang menjalankan node Anda mungkin tidak dapat menyediakan sumber daya yang dibutuhkan. Dalam kasus ini, platform dapat melakukan _**live migration**_ dari node ke host lain dalam waktu 30 detik.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/isolated-containers/containers-live-migration-to-another-server.png" alt="containers live migration to another server" width="100%"/>

Selama migrasi tersebut, aplikasi terus berjalan dengan [vertical scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/). Ketika sebuah aplikasi skalanya membesar dalam sebuah server, aplikasi lainnya dapat dimigrasikan ke server lain untuk memberikan ruang. Live migration memungkinkan platform untuk menyediakan semua sumber daya yang dibutuhkan untuk aplikasi tanpa me-restart containers dan menyebabkan downtime aplikasi. Selain itu, ini dapat digunakan selama maintenance atau downtime yang direncanakan lainnya untuk melakukan evakuasi otomatis dari containers dari server fisik.

Juga, Anda dapat menambahkan _**lebih banyak instance**_ ke environment Anda menggunakan [horizontal scaling](https://docs.dewacloud.com/docs/horizontal-scaling/), tanpa harus khawatir apakah ada _**cukup ruang**_ di host. Platform memilih host dengan jumlah ruang bebas yang sesuai dan merelokasi server Anda, untuk menawarkan kinerja berkualitas tinggi ke masing-masing node Anda.

## High Availability for Applications{#high-availability-for-applications}

Platform menyediakan **availability tertinggi** dengan mendistribusikan containers dari satu environment secara merata pada server fisik yang berbeda (hardware nodes). Ini dilakukan dengan bantuan kelompok anti-affinity yang dikonfigurasi untuk menentukan bahwa container tertentu tidak boleh berjalan pada server fisik yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/isolated-containers/containers-high-availability.png" alt="containers high-availability" width="100%"/>

Sebagai hasilnya, platform menghilangkan risiko downtime aplikasi jika salah satu server fisik memiliki masalah dengan kinerja.

## Security of Isolated Containers{#security-of-isolated-containers}

Platform menggunakan metode _**virtualization**_ untuk menjalankan beberapa containers secara bersamaan pada satu host. Container-container ini _**sepenuhnya terisolasi**_ tanpa risiko mengganggu satu sama lain. Jika keamanan salah satu container pada hardware node terkompromi, sisa container tidak terpengaruh.

:::warning 
Karena setiap instance dalam platform mewakili isolated container, ini tidak dapat dijangkau dari node lain dengan referensi seperti localhost:port_number atau 127.0.0.1:port_number - sebagai gantinya, hostname atau private/public IP address dari container yang sesuai harus digunakan (misalnya, ini mungkin diperlukan untuk menghubungkan aplikasi Anda dengan instance database).
:::

## Baca Juga{#whats-next}

* [Apa Itu PaaS & CaaS](https://docs.dewacloud.com/docs/what-is-paas-and-caas/)
* [Automatic Vertical Scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/)
* [Setting Up Environment](https://docs.dewacloud.com/docs/setting-up-environment/)
* [PaaS Cluster Overview](https://docs.dewacloud.com/docs/cluster-overview/)
* [Cluster Access Levels](https://docs.dewacloud.com/docs/cluster-access-levels/)