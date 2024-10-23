---
sidebar_position: 2
slug: /statistics
title: Statistics
---
# Statistics Monitoring

Pemantauan statistik adalah alat penting untuk mengelola sumber daya environment Anda dengan efisien. Platform ini menyediakan statistik bawaan untuk membantu Anda memantau konsumsi sumber daya yang dapat ditagih dan mengoptimalkan topologi environment Anda untuk mengurangi biaya.

## View Statistics{#view-statistics}

Anda dapat melihat statistik penggunaan untuk berbagai node di dalam environment Anda, seperti:
- _Application servers_
- _Balancers_
- _Web servers_
- _Databases_

### How to View Statistics:
1. **Log into the Platform Dashboard** dan navigasikan ke environment Anda.
2. **Click the "Statistics" Button** di samping node yang ingin Anda pantau.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/statistics/env.png" alt="view app statistics env" width="100%"/>

### Types of Tracked Resources:
Di panel statistik, Anda akan menemukan metrik untuk:
- **RAM**: Konsumsi memori (dalam MiB)
- **CPU**: Beban prosesor (dalam MHz)
- **Network**: Lalu lintas internal dan eksternal (dalam MB)
- **Disk**: Data yang disimpan (dalam MB) dan operasi I/O (dalam IOPS)

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/statistics/statistics.png" alt="view app statistics statistics" width="100%"/>

### Usage Limits:
- **RAM** dan **CPU** bergantung pada jumlah [cloudlets](https://docs.dewacloud.com/docs/cloudlet/).
- **Disk** dapat disesuaikan dalam rentang yang diizinkan.
- Batasan **Network** dan **IOPS** telah ditetapkan oleh penyedia hosting Anda.

Anda dapat menyesuaikan tampilan menggunakan pengaturan _Interval_ dan _Duration_, serta mengaktifkan atau menonaktifkan jenis sumber daya tertentu di bagian atas panel.

#### Statistics Collection:
Platform mengumpulkan statistik setiap menit, menyimpan data selama satu jam untuk mengimplementasikan model "Pay-per-Use" yang akurat. Data kemudian digabungkan menjadi blok satu jam:
- Untuk **CPU**, **Network**, **Disk IOPS**, dan **Disk IO**, platform menjumlahkan nilai-nilai tersebut.
- Untuk **RAM** dan **Disk**, platform menggunakan nilai maksimum selama jam tersebut.

### Monitoring Resource Usage:
Gunakan data tersebut untuk menganalisis konsumsi sumber daya aplikasi Anda, memprediksi biaya di masa depan, dan mengelola environment Anda dengan lebih efektif. Anda juga dapat mengonfigurasi [load alerts](https://docs.dewacloud.com/docs/load-alerts/) untuk memberi tahu Anda ketika penggunaan melebihi atau di bawah ambang batas tertentu.

Untuk informasi lebih detail tentang konsumsi dan penagihan sumber daya, lihat [resources charging](https://docs.dewacloud.com/docs/resource-consumption/).

## I/O Usage Monitoring{#io-usage-monitoring}

**Input/Output Operations per Second (IOPS)** adalah metrik umum yang digunakan untuk mengukur efisiensi sistem berdasarkan operasi baca/tulis tanpa mengurangi kinerja.

1. **View IOPS Data**:
   Data IOPS ditampilkan di bagian statistik **Disk**, bersama dengan metrik sumber daya lainnya. Arahkan mouse ke titik data untuk melihat informasi detail tentang ruang disk, IOPS, dan batas.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/statistics/disk-1.png" alt="view app statistics disk 1" width="100%"/>

2. **Avoid Performance Degradation**:
   Garis putus-putus merah pada grafik menunjukkan batas IOPS, yang ditetapkan oleh penyedia hosting Anda. Jika container Anda mencapai batas ini, kinerja dapat terpengaruh secara negatif.

3. **Adjusting IOPS Limit**:
   Batas IOPS bergantung pada interval waktu yang dipilih. Sebagai contoh, dengan interval 1 jam, batas IOPS meningkat secara proporsional.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/statistics/disk-3.png" alt="view app statistics disk 3" width="100%"/>

## Baca Juga

- [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
- [Charged Resources](https://docs.dewacloud.com/docs/resource-consumption/)
- [Load Alerts](https://docs.dewacloud.com/docs/load-alerts/)