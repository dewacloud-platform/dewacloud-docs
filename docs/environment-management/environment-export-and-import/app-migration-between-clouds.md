---
sidebar_position: 1
slug: /how-to-migrate-application
title: App Migration between Clouds
---
# Ekspor/Impor Environment: Cara Migrasi Aplikasi Antar Cloud

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/app-migration-between-clouds/01-environment-export-import.png" alt="environment export / import" max-width="100%"/>

[PaaS & CaaS](<https://docs.dewacloud.com/docs/what-is-platform-as-a-service/>) dirancang untuk memberikan kebebasan nyata bagi pengembang: tanpa API eksklusif, tanpa perlu menyesuaikan kode aplikasi sebelum hosting, serta berbagai macam tumpukan dan fitur yang tersedia. Salah satu opsi utama yang membebaskan pengguna kami dari keterikatan adalah fitur **Ekspor / Impor Environment**.

Untuk melakukannya, Anda perlu:

  * [ekspor](<https://docs.dewacloud.com/docs/environment-export/>) environment Anda dari instalasi PaaS tempatnya saat ini dihosting
  * [impor](<https://docs.dewacloud.com/docs/environment-import/>) ke platform target yang diinginkan

:::note
Saat ini, fitur Ekspor Environment hanya mengekspor informasi topologi. Environment yang diimpor akan dibuat dari awal tanpa data khusus di dalamnya. Untuk memastikan fitur Ekspor/Impor Environment berfungsi dengan baik, platform penyedia hosting awal harus membuka port 7979, yang digunakan untuk mengunduh file sumber environment selama operasi impor. Oleh karena itu, tergantung pada konfigurasi khusus penyedia, environment yang diekspor dari beberapa platform mitra kami mungkin tidak tersedia untuk diimpor di instalasi PaaS lainnya. Anda juga dapat menggunakan opsi Transfer Environment untuk memindahkan proyek Anda antar akun dalam satu platform penyedia hosting, tanpa perlu mengekspor/mengimpornya.
:::

## Baca Juga{#whats-next}

  * [Transfer Environment](<https://docs.dewacloud.com/docs/environment-transferring/>)
  * [Kolaborasi Akun](<https://docs.dewacloud.com/docs/account-collaboration/>)
  * [Bagikan Environment](<https://docs.dewacloud.com/docs/share-environment/>)