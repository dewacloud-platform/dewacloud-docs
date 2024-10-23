---
sidebar_position: 1
slug: /app-migration-between-clouds
title: App Migration between Clouds
---
# Ekspor/Impor Environment: Cara Migrasi Aplikasi Antar Cloud

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/app-migration-between-clouds/01-environment-export-import.png" alt="environment export / import" width="100%"/>

[PaaS & CaaS](<https://www.virtuozzo.com/company/blog/what-is-paas-platform-as-a-service-types-explained/>) dirancang untuk memberikan kebebasan nyata bagi pengembang: tanpa API eksklusif, tanpa perlu menyesuaikan kode aplikasi sebelum hosting, serta berbagai macam tumpukan dan fitur yang tersedia. Salah satu opsi utama yang membebaskan pengguna kami dari keterikatan adalah fitur **Ekspor / Impor Environment**.

Fitur ini memungkinkan migrasi aplikasi yang dihosting dengan mudah di antara [instalasi PaaS yang tersedia](<https://www.virtuozzo.com/application-platform-partners/>)
(yaitu platform penyedia hosting). Dengan cara ini, Anda dapat beralih ke platform yang paling sesuai dengan preferensi saat ini (misalnya, karena perbedaan versi platform atau perbedaan sistem harga) kapan saja.

Untuk melakukannya, Anda perlu:

  * [ekspor](<https://docs.dewacloud.com/docs/environment-export/>) environment Anda dari instalasi PaaS tempatnya saat ini dihosting
  * [impor](<https://docs.dewacloud.com/docs/environment-import/>) ke platform target yang diinginkan

:::note
Saat ini, fitur Ekspor Environment hanya mengekspor informasi topologi. Environment yang diimpor akan dibuat dari awal tanpa data khusus di dalamnya. Untuk memastikan fitur Ekspor/Impor Environment berfungsi dengan baik, platform penyedia hosting awal harus membuka port 7979, yang digunakan untuk mengunduh file sumber environment selama operasi impor. Oleh karena itu, tergantung pada konfigurasi khusus penyedia, environment yang diekspor dari beberapa platform mitra kami mungkin tidak tersedia untuk diimpor di instalasi PaaS lainnya. Anda juga dapat menggunakan opsi Transfer Environment untuk memindahkan proyek Anda antar akun dalam satu platform penyedia hosting, tanpa perlu mengekspor/mengimpornya.
:::

## Baca Juga{#whats-next}

  * [Transfer Environment](<https://docs.dewacloud.com/docs/environment-transferred/>)
  * [Kolaborasi Akun](<https://docs.dewacloud.com/docs/account-collaboration/>)
  * [Bagikan Environment](<https://docs.dewacloud.com/docs/share-environment/>)