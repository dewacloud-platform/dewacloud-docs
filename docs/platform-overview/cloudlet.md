---
sidebar_position: 8
slug: /cloudlet
title: Cloudlet
---
# Apa Itu Cloudlet?

Di platform, sumber daya yang dikonsumsi oleh container diukur dalam cloudlet - sebuah unit pengukuran khusus, yang mencakup **_128 MiB_** **RAM** dan _**400 MHz**_ **CPU** secara bersamaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.71.png" alt="resources per cloudlet" width="100%"/>

Dengan tingkat granularitas yang tinggi, ini memungkinkan untuk menentukan secara akurat kapasitas yang dibutuhkan untuk setiap server dalam environment, yang memastikan [penetapan harga berbasis penggunaan](https://docs.dewacloud.com/docs/pricing-model) yang benar-benar adil sehingga Anda tidak membayar lebih untuk sumber daya yang tidak terpakai.

:::note
Yang perlu diperhatikan, berbeda dengan konsumsi RAM (dengan unit MiB = 1024 KiB), penggunaan ruang disk dan lalu lintas jaringan diukur dalam megabytes (1000 KB).
:::

Berikut ini, kita akan mempertimbangkan [jenis-jenis cloudlet](#types) yang digunakan di platform, bagaimana [konsumsi cloudlet dihitung](#calculation), dan di mana melacak penggunaan sumber daya Anda.

## Tipe-tipe Cloudlet {#types}

Ada dua jenis cloudlet di platform, tersedia untuk diatur untuk setiap server dalam environment melalui bagian _[Vertical Scaling per Node](https://docs.dewacloud.com/docs/automatic-vertical-scaling)_ di topology wizard: _**Reserved**_ dan _**Dynamic**_.

Jika sebuah layer berisi [beberapa node](https://docs.dewacloud.com/docs/horizontal-scaling), batas ini dikonfigurasikan untuk semuanya sekaligus, yaitu dinyatakan sama untuk setiap instance.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.72.png" alt="cloudlets toddlers in topology wizard" width="100%"/>

Di sini, setiap toddler sesuai dengan jenis cloudlet tertentu:

* **Reserved Cloudlets** <img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.73.png" alt="reserved cloudlet"/> \- ini dipesan di muka dan akan dikenakan biaya terlepas dari penggunaan sumber daya Anda yang sebenarnya. Sebagai gantinya, Anda akan mendapatkan [diskon otomatis](https://docs.dewacloud.com/docs/automatic-discounts#1) yang signifikan berdasarkan jumlahnya.
* **Dynamic Cloudlets** <img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.74.png" alt="dynamic cloudlet"/> \- ditambahkan & dihapus secara otomatis sesuai dengan jumlah sumber daya yang dibutuhkan oleh aplikasi Anda dalam momen waktu tertentu - yaitu, mereka ditugaskan ketika beban naik dan dihapus lagi segera setelah menurun. Akibatnya, Anda membayar berdasarkan [penggunaan sumber daya Anda yang sebenarnya](https://docs.dewacloud.com/docs/pricing-model#setup-usage). 

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.75.png" alt="setting a scaling limit" width="100%"/> Jenis cloudlet ini membantu mengatasi lonjakan permintaan yang tidak terduga tanpa perencanaan sebelumnya, coding khusus, atau membayar lebih untuk sumber daya yang tidak Anda butuhkan sebagian besar waktu. Dengan cara ini, dengan slider Dynamic Cloudlets, Anda mengatur _Scaling Limit_ container, menentukan jumlah maksimum cloudlets yang dapat dialokasikan untuknya.

Untuk mendapatkan keuntungan maksimal, disarankan untuk menggunakan _Dynamic Cloudlets_ bersamaan dengan _Reserved Cloudlets_ untuk mendapatkan semua keuntungan dari [automatic vertical scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling) aplikasi Anda dan, secara bersamaan, mendapatkan manfaat dari [diskon otomatis](https://docs.dewacloud.com/docs/automatic-discounts#1).

## Perhitungan Penggunaan Cloudlet {#calculation}

Jumlah cloudlets yang digunakan dihitung setiap jam dengan cara berikut:

* **untuk RAM** - nilai _peak_ (yaitu konsumsi RAM tertinggi selama satu jam)
* **untuk CPU** - penggunaan _rata-rata_

Nilai terbesar dari ini (tetapi _tidak_ keduanya digabungkan) dianggap sebagai konsumsi environment yang sebenarnya, yang akan dibebankan pada akun Anda sesuai dengan tarif penyedia (periksa dalam frame informasi **[Quotas & Pricing](https://docs.dewacloud.com/docs/resource-consumption#3)**).

_Contohnya_ , jika selama satu jam penggunaan rata-rata CPU Anda adalah _2400 MHz_ (6 cloudlets), dan penggunaan RAM tertinggi Anda adalah _1024 MiB_ (8 cloudlets), Anda hanya akan dikenakan biaya untuk 8 cloudlets - tidak untuk total gabungan 14 unit.

## Tracking Pengunaan {#consumption-tracking}

Penggunaan sumber daya saat ini dari environment Anda secara umum dan untuk setiap layer/node yang terdiri dapat dilihat dalam kolom **Usage** yang sesuai di dashboard:

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/cloudlet/4.76.png" alt="current cloudlets usage" width="100%"/>

Dan untuk meninjau tingkat konsumsi server Anda dalam periode waktu tertentu, Anda dapat menggunakan bagian [Statistics](https://docs.dewacloud.com/docs/statistics-monitoring) yang sesuai atau memeriksa biaya akun yang diterapkan dalam [Billing History](https://docs.dewacloud.com/docs/monitoring-consumed-resources#billing).

## Bacaan Lebih Lanjut{#useful-links}

Untuk mengetahui lebih lanjut tentang model harga platform dan bagaimana mendapatkan manfaat dari semua keuntungan yang diberikannya, baca dokumen yang sesuai:

* [Usage-Based Pricing](https://docs.dewacloud.com/docs/pricing-model)
* [Pricing FAQ](https://docs.dewacloud.com/docs/resource-consumption)
* [Charged Resources](https://docs.dewacloud.com/docs/chargeable-resources)
* [Automatic Vertical Scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling)
* [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts)