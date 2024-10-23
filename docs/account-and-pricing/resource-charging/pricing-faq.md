---
sidebar_position: 1
slug: /pricing-faq
title: FAQ Harga
---

# FAQ Harga

* [Apa yang Dikenakan Biaya?](https://docs.dewacloud.com/docs/#what-is-charged)
* [Di Mana Sumber Daya yang Dikonsumsi Dapat Dilihat?](https://docs.dewacloud.com/docs/#consumed-resources)
* [Berapa Biaya Sumber Daya?](https://docs.dewacloud.com/docs/#resource-cost)
* [Bagaimana Cara Mengurangi Konsumsi?](https://docs.dewacloud.com/docs/#decrease-consumption)

## Apa yang Dikenakan Biaya?{#what-is-charged}

Konsumsi sumber daya untuk setiap environment dikenakan biaya kepada pemilik akun setiap jam. Ada 3 jenis biaya:

* **Utama** \- biaya untuk sumber daya utama platform (yaitu RAM & CPU), yang disediakan dalam cloudlets
* **Tergantung Penyedia** \- yang dapat dikenakan biaya atau tidak, sesuai dengan pengaturan penyedia hosting yang dipilih
* **Ekstra opsional** \- biaya untuk penggunaan beberapa fitur tambahan platform

Informasi terperinci tentang masing-masing jenis biaya ini dapat ditemukan dalam dokumen [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/chargeable-resources/).

## Di Mana Sumber Daya yang Dikonsumsi Dapat Dilihat?{#where-the-consumed-resources-can-be-seen}

Informasi terperinci tentang jumlah sumber daya yang dikonsumsi dapat dilihat di berbagai tempat di dashboard Anda, misalnya:

* widget harga di bagian kanan **environment wizard** menunjukkan perkiraan pengeluaran bulanan, berdasarkan jumlah cloudlet yang dipesan
* konsumsi sumber daya saat ini dari setiap environment ditampilkan dalam kolom **Usage** daftar environment Anda. Termasuk jumlah ruang disk yang ditempati (dalam MB) dan jumlah cloudlet yang digunakan/sebelumnya
* total penggunaan **Statistik** pada semua jenis sumber daya (yaitu RAM, CPU, Penyimpanan, dan Bandwidth Jaringan) dapat dilihat melalui bagian yang sesuai untuk node yang diinginkan/set node dengan tipe yang sama
* akhirnya, bagian **Billing History** menyediakan informasi tentang semua sumber daya yang dibayar, yang dikonsumsi selama periode yang telah ditentukan, dan biaya mereka.

Detail tentang masing-masing opsi ini dapat dilihat dalam dokumen [Pemantauan Sumber Daya yang Dikonsumsi](https://docs.dewacloud.com/docs/monitoring-consumed-resources/).

## Berapa Biaya Sumber Daya?{#how-much-do-resources-cost}

Dengan platform, Anda hanya membayar untuk sumber daya yang dikonsumsi. Harga sumber daya ditetapkan oleh penyedia hosting yang Anda pilih. Anda dapat menemukan biaya pasti untuk setiap unit sumber daya dengan pergi ke [Halaman Harga](https://docs.dewacloud.com/docs/pricing-pages/) dari hoster Anda.

Harga juga dapat dilihat di dalam dashboard platform Anda.

Arahkan ke item menu **Balance > Quotas & Pricing**. Di sini Anda akan melihat serangkaian tab yang menampilkan informasi harga untuk setiap jenis sumber daya yang tersedia di platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/pricing-FAQ/01-quotas-and-pricing.png" alt="quotas and pricing" width="100%"/>

Pilih yang Anda minati untuk melihat harga dan skala diskon yang ditawarkan oleh penyedia hosting Anda. Anda dapat menemukan lebih banyak informasi tentang sistem harga dan diskon dalam dokumen [Sistem Harga](https://docs.dewacloud.com/docs/pricing-model/) dan [Diskon Otomatis](https://docs.dewacloud.com/docs/automatic-discounts/).

Perlu dicatat bahwa berbagai tumpukan perangkat lunak disediakan secara gratis di platform. Anda hanya membayar untuk sumber daya yang dikonsumsi tetapi bukan untuk perangkat lunak itu sendiri.

## Bagaimana Cara Mengurangi Konsumsi?{#how-to-decrease-the-consumption}

Untuk mengurangi pengeluaran Anda, Anda dapat _menghentikan environment Anda_ ketika tidak dibutuhkan. Misalnya, jika Anda menggunakan environment Anda sebagai uji atau dev dan Anda tidak menggunakannya pada malam hari dan akhir pekan - Anda tidak perlu membayar untuk sumber daya yang tidak Anda gunakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/resource-charging/pricing-FAQ/02-stop-environment.png" alt="stop environment" width="100%"/>

Dengan cara ini, **RAM (Memory)**, **CPU**, dan **lalu lintas** tidak akan dikenakan biaya.

Anda hanya akan membayar untuk **ruang disk** yang Anda gunakan dan untuk **public IP** dan **SSL** jika Anda membeli.

Ikuti tautan untuk berkenalan dengan tips berguna tentang konsumsi sumber daya platform dengan cara yang cerdas:

* [Hemat Uang Cloud Anda!](https://www.virtuozzo.com/company/blog/save-your-cloud-money/)
* [Cara Mengelola Siklus Hidup Aplikasi di PaaS](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)

## Baca Juga{#whats-next}

* [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/chargeable-resources/)
* [Pemantauan Sumber Daya yang Dikonsumsi](https://docs.dewacloud.com/docs/monitoring-consumed-resources/)
* [Harga Hosters](https://docs.dewacloud.com/docs/pricing-pages/)