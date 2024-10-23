---
sidebar_position: 13
slug: /automatic-discounts
title: Diskon Otomatis
---
# Diskon Otomatis

Platform dapat memberikan diskon otomatis untuk penggunaan sumber daya Anda tergantung pada jumlah yang Anda konsumsi (jadi penggunaan volume yang lebih tinggi secara otomatis lebih murah). Ketersediaan dan tingkat diskon bergantung pada penyedia hosting pilihan Anda dan sumber daya tertentu:

  * [RAM/CPU (cloudlets)](https://docs.dewacloud.com/docs/#ramcpu)
  * [ruang disk](https://docs.dewacloud.com/docs/#disk-space)
  * [lalu lintas](https://docs.dewacloud.com/docs/#traffic)
  * [opsi (Public IP, SSL)](https://docs.dewacloud.com/docs/#options)
  * [perangkat lunak](https://docs.dewacloud.com/docs/#software)

## RAM/CPU{#ramcpu}

Platform mengukur RAM dan CPU dalam cloudlet. Satu cloudlet setara dengan 128 MiB RAM dan 400MHz CPU.

Konsumsi cloudlet dipertimbangkan di setiap lingkungan individu (menggabungkan semua server dalam satu lingkungan, bukan per server dalam lingkungan tersebut). Ini memudahkan untuk mencapai tingkat diskon yang lebih tinggi dan membuat penghematan yang sangat besar!

Platform menawarkan dua jenis cloudlet: Reserved dan Dynamic.

**Cloudlet tersimpan** ‘dikonsumsi’ hanya dengan mengonfigurasinya dalam lingkungan Anda (karena Anda membayar cloudlet tersimpan terlepas dari penggunaan sumber daya aktual Anda). Jadi Anda dapat melihat diskon diterapkan saat Anda mengonfigurasi lingkungan menggunakan wizard topologi. Total semua cloudlet tersimpan yang dikonfigurasi dalam lingkungan Anda menentukan tingkat diskon yang diterapkan.

Konsumsi **cloudlet dinamis** dihitung berdasarkan penggunaan Anda setiap jam individu. Total semua cloudlet dinamis yang dikonsumsi oleh lingkungan Anda selama satu jam menentukan tingkat diskon Anda untuk jam tersebut.

Jika Anda menggunakan kedua jenis cloudlet di lingkungan Anda, Anda mungkin memiliki tingkat diskon berbeda untuk setiap jenis.

![automatic discount scheme](#)

Anda dapat melihat tingkat diskon yang tepat dan harga yang sesuai di dalam dashboard platform Anda.

Navigasikan ke item menu **Balance > Quotas & Pricing**.

![pricing RAM](#)

## Ruang Disk{#disk-space}

Ruang disk dikenakan biaya per jam per GB ruang disk yang digunakan di lingkungan Anda.

Penyedia hosting pilihan Anda mungkin menyertakan beberapa ruang disk secara gratis, atau mungkin memberikan tingkat diskon tergantung pada jumlah konsumsi disk.

Anda dapat melihat tingkat diskon yang tepat, harga yang sesuai, dan jumlah gratis yang disertakan di dalam dashboard platform Anda. Navigasikan ke item menu **Balance > Quotas & Pricing**.

![pricing disk](#)

## Lalu Lintas{#traffic}

Penggunaan lalu lintas dikenakan biaya per jam per GB lalu lintas **eksternal** yang digunakan oleh lingkungan Anda.

Penyedia hosting pilihan Anda mungkin menyertakan beberapa penggunaan lalu lintas gratis, atau mungkin memberikan tingkat diskon tergantung pada jumlah konsumsi lalu lintas.

Karena jumlah lalu lintas dapat sangat berfluktuasi, tingkat diskon untuk lalu lintas ditetapkan berdasarkan jumlah total lalu lintas (eksternal) yang digunakan di bulan _sebelumnya_.

**Lalu lintas internal** (lalu lintas antara server dalam lingkungan Anda, atau antara beberapa lingkungan di penyedia hosting yang sama) **benar-benar gratis**!

Anda dapat melihat tingkat diskon yang tepat, harga yang sesuai, dan jumlah gratis yang disertakan di dalam dashboard platform Anda. Navigasikan ke item menu **Balance > Quotas & Pricing**.

![pricing traffic](#)

## Opsi{#options}

_**Built-In SSL**_ membangun koneksi aman antara klien Anda dan lingkungan. Biaya diambil per jam.

Anda dapat melihat harga (jika ada - bisa tersedia secara gratis) yang ditetapkan oleh penyedia hosting pilihan Anda di dalam dashboard platform Anda. Navigasikan ke item menu **Balance > Quotas & Pricing**.

Alamat IP _**eksternal**_ menyediakan akses langsung dari luar kluster. Biaya diambil per jam.

Anda dapat melihat harga yang ditetapkan oleh penyedia hosting pilihan Anda di dalam dashboard platform Anda. Navigasikan ke item menu **Balance > Quotas & Pricing**.

![pricing options](#)

## Perangkat Lunak{#software}

Sebagian besar set perangkat lunak standar gratis sehingga Anda hanya membayar untuk sumber daya yang dikonsumsi. Namun, beberapa perangkat lunak tambahan mungkin memerlukan biaya lisensi tambahan. Biaya diambil per jam.

Biaya penggunaan set perangkat lunak tergantung pada tarif penyedia layanan hosting Anda. Navigasikan ke item menu **Balance > Quotas & Pricing**.

![pricing software](#)

## Baca Juga{#whats-next}

  * [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/resource-consumption/)
  * [Model Harga](https://docs.dewacloud.com/docs/pricing-model/)
  * [Ikhtisar Sistem Penagihan](https://docs.dewacloud.com/docs/billing-system/)
  * [Harga Hosters](https://docs.dewacloud.com/docs/pricing-pages/)
  * [PaaS vs Harga Amazon](https://www.virtuozzo.com/company/blog/fair-pricing-model-jelastic-vs-amazon/)