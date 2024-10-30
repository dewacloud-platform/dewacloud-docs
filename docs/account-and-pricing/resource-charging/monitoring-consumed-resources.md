---
sidebar_position: 3
slug: /monitoring-consumed-resources
title: Pemantauan Sumber Daya yang Dikonsumsi
---

# Pemantauan Sumber Daya yang Dikonsumsi

Memantau sumber daya yang dikonsumsi oleh aplikasi Anda memungkinkan Anda untuk merencanakan anggaran dan mengendalikan pengeluaran dana. Di bawah ini, kami akan menjelaskan bagaimana hal ini diimplementasikan di platform:

* [Perkiraan Biaya Environment](https://docs.dewacloud.com/docs/#estimated-environment-cost)
* [Penggunaan Sumber Daya Saat Ini](https://docs.dewacloud.com/docs/#current-resource-usage)
* [Statistik Konsumsi](https://docs.dewacloud.com/docs/#statistics-of-consumption)
* [Riwayat Penagihan](https://docs.dewacloud.com/docs/#billing-history)

## Perkiraan Biaya Environment{#estimated-environment-cost}

Saat membuat atau mengubah environment, Anda bekerja dengan [wizard khusus](https://docs.dewacloud.com/docs/setting-up-environment/), yang dibagi menjadi tiga bagian utama. Bagian kiri memungkinkan Anda mengatur topologi yang diperlukan. Yang kedua (tengah) adalah untuk memilih jumlah node, mengalokasikan sumber daya (**Reserved Cloudlets** dan **Scaling Limit**), dan mengaktifkan opsi tambahan (**Disk Limit**, **Public IP**, dll.). Pada panel kanan, Anda dapat memeriksa **Perkiraan Biaya** environment Anda dalam format "minimum-maksimum", menunjukkan harga per jam, hari, atau bulan.

:::note Anda dapat mempelajari lebih lanjut tentang bagaimana cara kerja harga platform dalam dokumen terkait. :::

Arahkan kursor ke widget **Price** di wizard untuk mendapatkan informasi terperinci tentang biaya sumber daya dan opsi yang digunakan di environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/01-estimated-environment-cost-calculation.png" alt="information about the cost of the used resources" width="100%"/>

Di sini, Anda dapat melihat tiga kolom:

* **Containers** \- daftar semua node dalam environment
* **Dari** \- jumlah sumber daya yang dialokasikan yang dipesan (yaitu, harga minimal environment)
* **Hingga** \- batasan sumber daya (yaitu, harga maksimal)

Container yang ditampilkan dikelompokkan berdasarkan lapisan untuk mempermudah pemahaman, dan total biaya ditampilkan di bagian bawah frame, memberikan informasi tambahan tentang **Diskon** dan uang yang **Disimpan** yang diterima.

## Penggunaan Sumber Daya Saat Ini{#current-resource-usage}

Di dashboard Anda, Anda dapat melihat daftar semua environment Anda. Kolom sebelah kanan menampilkan **Usage** sumber daya saat ini. Anda dapat melihat jumlah penyimpanan disk dan cloudlets yang sedang digunakan oleh seluruh environment atau, jika Anda memperluas konteks environment menggunakan ikon panah di kiri, Anda dapat melihat penggunaan sumber daya individu oleh masing-masing server dalam environment.

1\. Metrik pertama dalam kolom **Usage** adalah jumlah cloudlets yang saat ini digunakan (nomor cloudlet pertama) dari batas _Scaling Limit_ cloudlet (nomor cloudlet kedua) yang telah Anda konfigurasikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/02-environmnet-cloudlet-usage.png" alt="environment cloudlet usage" width="100%"/>

Ikon cloudlet berubah warna dari hijau ke kuning dan merah ketika Anda mendekati atau mencapai _Scaling Limit_ yang dikonfigurasi.

2\. Metrik kedua dalam kolom **Usage** adalah persentase **ruang disk** yang saat ini digunakan dari batas disk yang ditetapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/03-environment-disk-space-usage.png" alt="environment disk space usage" width="100%"/>

## Statistik Konsumsi{#statistics-of-consumption}

Anda juga dapat melihat jumlah Disk, RAM (Memori), CPU, dan Bandwidth Jaringan yang dikonsumsi sesuai dengan masing-masing container dengan mengklik tombol [Statistics](https://docs.dewacloud.com/docs/statistics-monitoring/) pada node yang diinginkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/04-application-statistics.png" alt="application statistics" width="100%"/>

Berdasarkan statistik yang diterima, Anda dapat mengubah batasan skala [vertikal](https://docs.dewacloud.com/docs/automatic-vertical-scaling/) dan [horizontal](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/) otomatis untuk environment Anda. Misalnya, Anda dapat memilih jumlah cloudlet yang dipesan sesuai dengan beban pada grafik.

## Riwayat Penagihan{#billing-history}

Alat penting untuk analisis anggaran adalah pelacakan riwayat penagihan, yang dapat Anda temukan di bagian yang sesuai dari dashboard platform. Jika diperlukan, laporan dapat diunduh ke perangkat lokal Anda.

1\. Gunakan tombol **Billing History** <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/06-billing-history-search-parameters.png" alt="billing icon" width="100%"/> di sebelah lingkungan spesifik Anda atau arahkan ke opsi **Balance > Billing History** akun di menu atas untuk meninjau biaya sumber daya yang dikonsumsi.

2\. Di panel kiri, Anda dapat menyesuaikan parameter pencarian untuk mempersonalisasi laporan riwayat penagihan Anda:

* tentukan tanggal **Mulai/Akhir** untuk menetapkan rentang laporan
* pilih **Interval** (periode) untuk pengelompokan data dalam laporan
* aktifkan **waktu UTC** untuk beralih dari waktu lokal ke UTC dalam laporan
* nyalakan switcher **Group by node** untuk mengelompokkan instance dalam lapisan yang sama (riwayat penagihan ditampilkan secara terpisah untuk setiap node secara default)

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/06-billing-history-search-parameters.png" alt="billing history search parameters" width="100%"/>

Klik **Refresh** untuk menerapkan perubahan.

3\. Dalam interval waktu, data yang ditampilkan dikelompokkan berdasarkan environment, perluas untuk melihat daftar node dan penggunaan sumber daya mereka. Semua node diurutkan secara alfabetis dan opsi berbayar tambahan (jika ada) ditampilkan di bawah, misalnya [Public IP](https://docs.dewacloud.com/docs/public-ip/) atau [SSL](https://docs.dewacloud.com/docs/custom-ssl/).

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/07-billing-history-data.png" alt="billing history data" width="100%"/>

Anda dapat melihat informasi berikut mengenai setiap node environment:

* _Cloudlet yang Dipesan_
* _Cloudlet Dinamis_
* _Penyimpanan Berbayar_
* _Lalu Lintas Berbayar_
* _Biaya_

:::warning Beberapa penyedia hosting dapat menawarkan beberapa sumber daya gratis (cloudlet, ruang disk, alamat IP, sertifikat SSL), dalam hal ini, hanya sumber daya yang digunakan melebihi jumlah tersebut yang akan dikenakan biaya. :::

Total biaya (biaya keseluruhan) antara tanggal yang dipilih dihitung untuk Anda di bagian paling bawah daftar.

4\. Untuk menganalisis biaya Anda dengan alat lokal, Anda dapat mengunduh riwayat penagihan Anda sebagai file _**.csv**_ dengan tombol **Download CSV** yang sesuai di bagian bawah.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/monitoring-consumed-resources/08-download-csv.png" alt="download CSV" width="100%"/>

Seperti yang Anda lihat, platform menyediakan informasi lengkap tentang biaya layanan dan penggunaan sumber daya, yang membantu Anda merencanakan anggaran dengan mudah.

## Baca Juga{#whats-next}

* [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/chargeable-resources/)
* [Peringatan Beban](https://docs.dewacloud.com/docs/load-alerts/)
* [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/)