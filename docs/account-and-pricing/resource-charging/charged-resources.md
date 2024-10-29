---
sidebar_position: 2
slug: /chargeable-resources
title: Sumber Daya yang Dikenakan Biaya
---

# Sumber Daya yang Dikenakan Biaya

Konsumsi sumber daya untuk setiap environment dikenakan biaya kepada pemilik akun setiap jam.

* [Sumber Daya yang Dikenakan Biaya Utama](https://docs.dewacloud.com/docs/#primary-chargeable-resources)
* [Biaya Tergantung Penyedia](https://docs.dewacloud.com/docs/#provider-dependent-charges)
* [Ekstra Opsional](https://docs.dewacloud.com/docs/#optional-extras)

Anda dapat melacak penggunaan sumber daya (_CPU_, _RAM_, _Network_, _Disk_) secara real-time melalui [pemantauan statistik](https://docs.dewacloud.com/docs/statistics-monitoring/) bawaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/charged-resources/01-statistics-monitoring.png" alt="01-statistics-monitoring.png" width="100%"/>

:::note Sumber daya yang dikonsumsi oleh environment yang disediakan berdasarkan langganan dianggap gratis secara default. :::

## Sumber Daya yang Dikenakan Biaya Utama{#primary-chargeable-resources}

### RAM & CPU{#ram--cpu}

RAM & CPU diukur dalam unit sumber daya platform yang disebut [Cloudlet](https://docs.dewacloud.com/docs/cloudlet/).  
Satu **Cloudlet** setara dengan 128 MiB RAM dan 400MHz CPU.

Sumber daya dikenakan biaya setiap jam:

* Penggunaan **RAM**: penggunaan puncak RAM selama satu jam
* Penggunaan **CPU**: penggunaan rata-rata CPU selama satu jam

Ketika menghitung penggunaan cloudlet Anda, kami hanya mempertimbangkan penggunaan terbesar antara RAM atau CPU setiap jamnya (tidak keduanya digabungkan). Misalnya, jika selama satu jam, rata-rata penggunaan CPU Anda adalah 2400MHz (6 cloudlets), dan penggunaan puncak RAM Anda adalah 1024MiB (8 cloudlets), Anda membayar untuk 8 cloudlets - bukan total gabungannya (14 cloudlets).

Ada dua jenis cloudlet:

* _Cloudlets yang dipesan_ dipesan terlebih dahulu (menggunakan wizard topologi).
* _Cloudlets dinamis_ diskalakan secara dinamis untuk aplikasi Anda.

:::warning Anda tidak dikenakan biaya untuk RAM yang digunakan untuk cache disk dan buffer. :::

Lebih banyak detail tentang biaya cloudlet dan perbedaan antara cloudlet Dipesan / Dinamis dapat ditemukan di dokumen [Sistem Harga](https://docs.dewacloud.com/docs/pricing-model/) dan [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/#ramcpu).

## Biaya Tergantung Penyedia{#provider-dependent-charges}

Sumber daya berikut dikenakan biaya di beberapa penyedia hosting, tetapi penyedia lain memasukkan jumlah gratis.

### Ruang Disk{#disk-space}

Penggunaan **Ruang Disk** diukur dalam GB. Seperti semua sumber daya platform, Anda hanya membayar untuk konsumsi aktual Anda (Anda tidak perlu membeli ruang tambahan "untuk jaga-jaga" jika membutuhkannya). Lebih banyak detail tentang biaya ruang disk dapat ditemukan di dokumen [Sistem Harga](https://docs.dewacloud.com/docs/pricing-model/) dan [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/#disk-space).

:::tip Jika menghadapi kebutuhan untuk menyimpan data dalam node penyimpanan terpisah, pertimbangkan untuk menggunakan container data Master atau Compound untuk mengurangi konsumsi ruang disk dan mengurangi biaya environment secara keseluruhan. :::

### Lalu Lintas{#traffic}

Penggunaan **Lalu Lintas** diukur dalam GB. Hanya __lalu lintas eksternal__ yang dikenakan biaya - jumlah dari lalu lintas masuk dan keluar antara environment Anda dan Internet. __Lalu lintas internal__ sepenuhnya gratis - lalu lintas dalam environment Anda atau antara environment dalam penyedia hosting yang sama. Lebih banyak detail tentang biaya lalu lintas dapat ditemukan di dokumen [Sistem Harga](https://docs.dewacloud.com/docs/pricing-model/) dan [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/#traffic).

## Ekstra Opsional{#optional-extras}

Dengan platform, Anda dapat menambahkan layanan opsional berikut ke environment Anda:

**Public IPv4** adalah alamat IP eksternal yang dapat diakses langsung dari luar kluster. Ini memungkinkan Anda untuk membentuk koneksi langsung antara Internet dan server tertentu dalam environment Anda. Jika tidak (tanpa membeli alamat Public IPv4), lalu lintas dialihkan dari Internet ke environment Anda melalui resolver platform (SLB).

**Built-in SSL** adalah protokol yang membangun koneksi aman antara klien Anda dan environment Anda (beberapa penyedia hosting menawarkan layanan ini secara gratis).

Lebih banyak detail tentang biaya untuk layanan opsional dapat ditemukan di dokumen [Sistem Harga](https://docs.dewacloud.com/docs/pricing-model/) dan [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/#options).

## Baca Juga{#whats-next}

* [Konsumsi Sumber Daya](https://docs.dewacloud.com/docs/resource-consumption/)
* [Pemantauan Sumber Daya yang Dikonsumsi](https://docs.dewacloud.com/docs/monitoring-consumed-resources/)
* [Model Harga](https://docs.dewacloud.com/docs/pricing-model/)