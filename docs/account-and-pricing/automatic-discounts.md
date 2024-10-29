---
sidebar_position: 2
slug: /automatic-discounts
title: Diskon Otomatis
---
# Diskon Otomatis

Platform dapat memberikan diskon otomatis untuk penggunaan resource Anda tergantung pada jumlah yang Anda konsumsi (sehingga penggunaan volume yang lebih tinggi akan lebih murah secara otomatis).

Secara default, akun yang dibuat di platform dianggap sebagai **akun percobaan**. Akun-akun yang dibuat sebelum rilis komersial juga menjadi percobaan.

Platform memberlakukan berbagai batasan pada pengguna percobaan. Setelah Anda mengubah akun Anda menjadi **akun penagihan**, batasannya akan dikurangi dan akun tersebut menjadi berbayar.


Platform mengukur RAM dan CPU dalam cloudlets. Satu cloudlet setara dengan 128 MiB RAM dan 400MHz CPU.

Konsumsi cloudlet dihitung berdasarkan setiap environment individual (menggabungkan semua server dalam satu environment, bukan per server di dalam environment). Ini memudahkan Anda untuk mencapai tier diskon yang lebih tinggi dan membuat beberapa penghematan besar!

Platform menawarkan dua jenis cloudlet: Reserved dan Dynamic.

**Cloudlet Tersetup** 'dikonsumsi' hanya dengan mengkonfigurasinya di dalam environment Anda (karena Anda membayar untuk cloudlet tersetup terlepas dari penggunaan resource aktual Anda). Jadi Anda dapat melihat diskon berlaku saat Anda mengkonfigurasi environment menggunakan wizard topologi. Total dari semua cloudlet tersetup yang dikonfigurasi di environment Anda menentukan tier diskon yang diterapkan.

Konsumsi **cloudlet dinamis** dihitung berdasarkan penggunaan Anda setiap jam berindividu. Total dari semua cloudlet dinamis yang dikonsumsi oleh environment Anda selama satu jam menentukan tier diskon Anda untuk jam tersebut.

Jika Anda menggunakan kedua jenis cloudlet dalam environment Anda, Anda mungkin memiliki tier diskon yang berbeda untuk masing-masing tipe.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/01-automatic-discount-scheme.png" alt="automatic discount scheme" width="100%"/>

Anda dapat melihat tepatnya tier diskon dan harga yang sesuai di dalam dashboard platform Anda.

Navigasi ke item menu **Balance > Quotas & Pricing**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/02-pricing-ram.png" alt="pricing RAM" width="100%"/>


Akun penuh memberikan Anda lebih banyak kemungkinan. Pertama-tama, batasan dikurangi. Kedua, Anda akan mendapatkan kesempatan untuk didukung sepenuhnya oleh hoster Anda.

Disk space ditagih setiap jam per GB dari disk space yang digunakan dalam environment Anda.

Penyedia hosting pilihan Anda mungkin menyertakan disk space gratis, atau dapat memberikan tier diskon tergantung pada jumlah konsumsi disk.

Anda dapat melihat tier diskon yang pasti, harga yang sesuai, dan jumlah gratis yang termasuk di dalam dashboard platform Anda. Navigasi ke item menu **Balance > Quotas & Pricing**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/03-pricing-disk.png" alt="pricing disk" width="100%"/>

## Traffic{#traffic}

Penggunaan traffic ditagih setiap jam per GB dari **external** traffic yang digunakan oleh environment Anda.

Penyedia hosting pilihan Anda mungkin menyertakan beberapa penggunaan traffic gratis, atau dapat memberikan tier diskon tergantung pada jumlah konsumsi traffic.

Karena jumlah traffic dapat sangat bervariasi, tier diskon untuk traffic diatur berdasarkan total jumlah traffic (external) yang digunakan pada bulan _sebelumnya_.

**Internal traffic** (traffic antara server di dalam environment Anda, atau antar beberapa environment pada penyedia hosting yang sama) **sepenuhnya gratis**!

Anda dapat melihat tepatnya tier diskon, harga yang sesuai, dan jumlah gratis yang termasuk di dalam dashboard platform Anda. Navigasi ke item menu **Balance > Quotas & Pricing**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/04-pricing-traffic.png" alt="pricing traffic" width="100%"/>

## Options{#options}

_**Built-In SSL**_ membangun sebuah koneksi aman antara klien Anda dan environment. Biaya diambil setiap jam.

Anda dapat melihat harga (jika ada - dapat tersedia secara gratis) yang ditetapkan oleh penyedia hosting pilihan Anda di dalam dashboard platform Anda. Navigasi ke item menu **Balance > Quotas & Pricing**.

Sebuah _**external IP**_ address menyediakan akses langsung dari luar cluster. Biaya diambil setiap jam.

Anda dapat melihat harga yang ditetapkan oleh penyedia hosting pilihan Anda di dalam dashboard platform Anda. Navigasi ke item menu **Balance > Quotas & Pricing**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/05-pricing-options.png" alt="pricing options" width="100%"/>

## Software{#software}

Kebanyakan software stacks standar gratis sehingga Anda hanya membayar untuk resource yang dikonsumsi. Namun, beberapa software tambahan dapat memerlukan biaya lisensi tambahan. Biaya diambil setiap jam.

Biaya penggunaan software stacks tergantung pada tarif penyedia layanan hosting Anda. Navigasi ke item menu **Balance > Quotas & Pricing**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/automatic-discounts/06-pricing-software.png" alt="pricing software" width="100%"/>


## Baca Juga{#whats-next}

* [Status Akun](https://docs.dewacloud.com/docs/account-statuses/)
* [Upgrade Akun](https://docs.dewacloud.com/docs/upgrade-refill-account/)
* [Gambaran Umum Model Harga](https://docs.dewacloud.com/docs/pricing-model/)
* [Sistem Penagihan](https://docs.dewacloud.com/docs/billing-system/)
* [Harga Hosters](https://docs.dewacloud.com/docs/pricing-pages/)