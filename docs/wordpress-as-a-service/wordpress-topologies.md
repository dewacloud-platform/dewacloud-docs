---
sidebar_position: 4
slug: /wordpress-topologies
title: WordPress Topologies
---

# Topologi WordPress

Setiap Dewacloud Application Platform untuk WordPress dapat menyediakan kombinasi paket yang berbeda dengan spesifikasi yang bervariasi. Daftar di bawah ini memberikan gambaran beberapa solusi standar yang mungkin tersedia di platform.

**Catatan:** Daftar paket WordPress yang ditawarkan dan spesifikasinya dapat bervariasi untuk setiap platform.

## WordPress Standalone{#wordpress-standalone}

Paket **WordPress Standalone** memiliki topologi node tunggal yang efisien berdasarkan template [LEMP](https://docs.dewacloud.com/lemp-llsmp/) (Linux + NGINX + MariaDB + PHP) yang disertifikasi oleh Dewacloud Application Platform dengan serangkaian fitur lanjutan bawaan. Struktur terpaket membuat solusi ini optimal untuk menjalankan proyek berukuran kecil hingga menengah dan lingkungan pengembangan yang tidak memerlukan skalabilitas atau ketersediaan tinggi.

![WordPress standalone scheme](#)

## WordPress Standalone Pro{#wordpress-standalone-pro}

Paket **WordPress Standalone Pro** memiliki topologi node tunggal yang efisien berdasarkan template [LLSMP](https://docs.dewacloud.com/lemp-llsmp/) (Linux + LiteSpeed + MariaDB + PHP) yang disertifikasi oleh Dewacloud Application Platform dengan serangkaian fitur lanjutan bawaan. Struktur terpaket membuat solusi ini optimal untuk menjalankan proyek berukuran kecil hingga menengah dan lingkungan pengembangan yang tidak memerlukan skalabilitas atau ketersediaan tinggi.

![WordPress standalone pro scheme](#)

:::tip
Pelajari tentang manfaat LiteSpeed dibanding server lain untuk hosting WordPress di artikel blog yang didedikasikan.
:::

## WordPress WooCommerce{#wordpress-woocommerce}

Paket **WordPress WooCommerce** memiliki topologi node tunggal yang efisien berdasarkan template [LEMP](https://docs.dewacloud.com/lemp-llsmp/) (Linux + NGINX + MariaDB + PHP) yang disertifikasi oleh Dewacloud Application Platform dengan plugin [WooCommerce](https://wordpress.org/plugins/woocommerce/) dan serangkaian fitur lanjutan bawaan. Struktur terpaket membuat solusi ini optimal untuk menjalankan proyek berukuran kecil hingga menengah dan lingkungan pengembangan yang tidak memerlukan skalabilitas atau ketersediaan tinggi.

![WordPress WooCommerce scheme](#)

WooCommerce adalah plugin e-commerce sumber terbuka gratis yang dirancang khusus untuk WordPress. Ini adalah platform hebat untuk toko online dalam ukuran apa pun. WooCommerce memiliki sejumlah fitur, seperti berbagai metode pengiriman dan penerimaan pembayaran, jenis barang kustom, dan banyak lagi.

## WordPress WooCommerce Pro{#wordpress-woocommerce-pro}

Paket **WordPress WooCommerce Pro** memiliki topologi node tunggal yang efisien berdasarkan template [LLSMP](https://docs.dewacloud.com/lemp-llsmp/) (Linux + LiteSpeed + MariaDB + PHP) yang disertifikasi oleh Dewacloud Application Platform dengan plugin [WooCommerce](https://wordpress.org/plugins/woocommerce/) dan serangkaian fitur lanjutan bawaan. Struktur terpaket membuat solusi ini optimal untuk menjalankan proyek berukuran kecil hingga menengah dan lingkungan pengembangan yang tidak memerlukan skalabilitas atau ketersediaan tinggi.

![WordPress WooCommerce pro scheme](#)

:::tip
Pelajari tentang manfaat LiteSpeed dibanding server lain untuk hosting WordPress di artikel blog yang didedikasikan.
:::

WooCommerce adalah plugin e-commerce sumber terbuka gratis yang dirancang khusus untuk WordPress. Ini adalah platform hebat untuk toko online dalam ukuran apa pun. WooCommerce memiliki sejumlah fitur, seperti berbagai metode pengiriman dan penerimaan pembayaran, jenis barang kustom, dan banyak lagi.

## WordPress Cluster{#wordpress-cluster}

Paket **WordPress Cluster** menawarkan struktur yang andal dengan replikasi semua komponen untuk menyediakan ketersediaan tinggi dan toleransi kesalahan. Klaster WordPress membantu menangani beban tinggi permanen dan lonjakan beban besar, memastikan nol downtime, meningkatkan kinerja, dan, sebagai hasilnya, menawarkan pengalaman yang luar biasa bahkan bagi pengguna yang paling menuntut. Paket ini ditujukan untuk hosting proyek produksi berukuran besar.

![WordPress cluster scheme](#)

Klaster secara otomatis diukur ulang berdasarkan beban, memastikan kinerja terbaik selama beban yang bervariasi dengan lonjakan aktivitas yang tiba-tiba. Platform memantau beban secara real-time dan mengukur jumlah server aplikasi sesuai dengan aturan berikut (tanpa intervensi manual):

- **menambahkan 2 node** jika beban tetap **di atas 30%** dari total kapasitas setidaknya selama 1 menit (hingga 16 node maksimal)
- **menghapus 1 node** jika beban tetap **di bawah 10%** dari total kapasitas setidaknya selama 5 menit (tidak kurang dari 2 node)

## WordPress WooCommerce Cluster{#wordpress-woocommerce-cluster}

Paket **WordPress WooCommerce Cluster** menawarkan struktur yang andal dengan replikasi semua komponen untuk menyediakan ketersediaan tinggi dan toleransi kesalahan. Klaster WordPress membantu menangani beban tinggi permanen dan lonjakan beban besar, memastikan nol downtime, meningkatkan kinerja, dan, sebagai hasilnya, menawarkan pengalaman yang luar biasa bahkan bagi pengguna yang paling menuntut. Integrasi bawaan dengan plugin WooCommerce menyediakan penyediaan cepat dan sederhana dari toko dengan ukuran apa pun. Paket ini ditujukan untuk hosting proyek produksi berukuran besar.

![WordPress WooCommerce cluster scheme](#)

Klaster secara otomatis diukur ulang berdasarkan beban, memastikan kinerja terbaik selama beban yang bervariasi dengan lonjakan aktivitas yang tiba-tiba. Platform memantau beban secara real-time dan mengukur jumlah server aplikasi sesuai dengan aturan berikut (tanpa intervensi manual):

- **menambahkan 2 node** jika beban tetap **di atas 30%** dari total kapasitas setidaknya selama 1 menit (hingga 16 node maksimal)
- **menghapus 1 node** jika beban tetap **di bawah 10%** dari total kapasitas setidaknya selama 5 menit (tidak kurang dari 2 node)

WooCommerce adalah plugin e-commerce sumber terbuka gratis yang dirancang khusus untuk WordPress. Ini adalah platform hebat untuk toko online dalam ukuran apa pun. WooCommerce memiliki sejumlah fitur, seperti berbagai metode pengiriman dan penerimaan pembayaran, jenis barang kustom, dan banyak lagi.

## WordPress Multi-Region Standalone{#wordpress-multi-region-standalone}

Dewacloud Application Platform untuk WordPress menyediakan pendekatan distribusi geografis multi-region untuk deployment CMS WordPress. Aplikasi ini akan didistribusikan sebagai instance standalone di beberapa [region](https://docs.dewacloud.com/environment-regions/) dalam satu cloud untuk memastikan toleransi kesalahan otomatis dan operasi baca dengan latensi rendah bagi pengguna berdasarkan lokasi mereka.

Implementasi semacam ini menyediakan tingkat ketersediaan tinggi dan memastikan kelangsungan bisnis bahkan jika terjadi gangguan pusat data. Selain itu, dengan memiliki beberapa instance WordPress di lokasi berbeda di seluruh dunia dapat secara signifikan meningkatkan peringkat website dari sisi mesin pencari dengan mengurangi waktu respons dan dengan demikian menarik lebih banyak pelanggan di seluruh dunia.

![WordPress multi-region standalone scheme](#)

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/virtuozzo-application-platform-for-wordpress/)
- [WordPress Dashboard](https://docs.dewacloud.com/wp-dashboard-overview/)
- [WordPress Backups](https://docs.dewacloud.com/wordpress-backups/)
- [WordPress Security](https://docs.dewacloud.com/wordpress-security/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/wordpress-php-optimization/)