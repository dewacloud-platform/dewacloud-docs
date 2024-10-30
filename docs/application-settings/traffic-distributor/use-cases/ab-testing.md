---
sidebar_position: 3
slug: /ab-testing
title: A/B Testing
---

# A/B Testing dengan Traffic Distributor

A/B testing adalah metode yang kuat untuk meningkatkan tingkat konversi situs web atau aplikasi dengan membandingkan dua versi dan menentukan mana yang menghasilkan keterlibatan pengguna yang lebih baik atau konversi yang lebih tinggi. Dengan [Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor/>), melakukan A/B testing menjadi mudah dan efisien. Ikuti langkah-langkah di bawah ini untuk mengatur dan menjalankan A/B testing untuk aplikasi Anda.

## Langkah-Langkah Menyiapkan A/B Testing

### 1. Persiapkan Dua Versi Aplikasi

Untuk melakukan A/B testing, Anda memerlukan dua versi berbeda dari aplikasi Anda yang ingin Anda bandingkan. Anda juga memerlukan cara untuk melacak tindakan pengguna (misalnya, klik, pendaftaran, pembelian, dll.) yang berkontribusi pada tingkat konversi.

:::tip
Anda dapat menggunakan kode sederhana untuk menghitung konversi, seperti meningkatkan variabel pada tindakan tertentu, atau menggunakan alat pengujian pihak ketiga yang menawarkan fitur lebih lanjut seperti analisis grafis dan perhitungan otomatis tingkat konversi.
:::

### 2. Instal atau Konfigurasikan Traffic Distributor

Jika belum, [instal Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>) dari Marketplace platform, atau rekonfigurasikan pengaturan Traffic Distributor yang ada agar sesuai dengan kebutuhan A/B testing Anda.

1. **Metode Routing**: Pilih _Sticky Sessions_.
2. **Rasio Lalu Lintas**: Atur rasio menjadi _50:50_ untuk mendistribusikan lalu lintas secara merata antara dua versi aplikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/use-cases/ab-testing/01.png" alt="Traffic Distributor configurations for A/B testing" max-width="100%"/>

:::warning
**Jangan gunakan metode routing Round Robin** untuk A/B testing. Karena A/B testing membandingkan konten yang berbeda pada setiap backend, routing Round Robin dapat menyebabkan ketersediaan elemen yang tidak konsisten antara permintaan.
:::

### 3. Salurkan Lalu Lintas dan Monitor

Setelah Traffic Distributor dikonfigurasi, semua permintaan pengguna yang masuk akan diarahkan secara merata antara dua versi aplikasi Anda. Bagikan tautan titik masuk (baik domain environment atau [domain kustom](<https://docs.dewacloud.com/docs/custom-domains/>)) dengan pengguna untuk memulai fase pengujian.

Pantau tingkat konversi menggunakan alat yang Anda siapkan, pastikan Anda melacak interaksi pengguna selama periode waktu tertentu.

### 4. Analisis Hasil

Setelah periode pengujian, analisis data yang dikumpulkan untuk menentukan versi aplikasi mana yang menghasilkan tingkat konversi lebih tinggi. Versi dengan tingkat konversi yang lebih baik dapat dipertimbangkan untuk produksi, sementara versi lainnya dapat dihapus atau dioptimalkan lebih lanjut untuk pengujian di masa depan.

:::tip
Setelah Anda mengidentifikasi versi yang secara kinerja lebih baik, pertimbangkan untuk [menyuntikkan Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-integration/>) ke dalam lingkungan produksi untuk memastikan ketersediaan tinggi dan perlindungan failover.
:::

## Baca Juga

- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-integration/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)