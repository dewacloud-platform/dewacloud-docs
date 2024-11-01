---
sidebar_position: 1
slug: /net-core
title: .NET Core
---

# Server Aplikasi .NET Core

**[.NET Core](https://docs.microsoft.com/en-us/dotnet/core/about)** adalah versi open-source dari .NET yang dapat dijalankan di berbagai platform untuk membangun website, layanan, dan aplikasi console. Sering kali digunakan untuk aplikasi cloud atau merestrukturisasi aplikasi perusahaan besar menjadi mikroservices.

.NET Core terdiri dari komponen berikut:

- **[.NET Core runtime](https://github.com/dotnet/runtime/tree/master/src/coreclr)** - menyediakan layanan esensial (sistem tipe, pemuatan assembly, pengumpul sampah, dll.). [Framework libraries](https://github.com/dotnet/runtime/tree/master/src/libraries) menyediakan tipe data primitif, tipe komposisi aplikasi, dan utilitas dasar
- **[ASP.NET Core runtime](https://github.com/dotnet/aspnetcore)** - menyediakan kerangka kerja untuk membangun aplikasi modern berbasis cloud dan terhubung internet (_web apps_, _IoT apps_, dan _mobile backends_)
- **[.NET Core SDK](https://github.com/dotnet/sdk)** dan compiler bahasa ([Roslyn](https://github.com/dotnet/roslyn) dan [F#](https://github.com/microsoft/visualfsharp)) - memungkinkan pengembangan proyek .NET Core
- **[dotnet command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet)** - menjalankan aplikasi .NET Core dan perintah CLI. Memilih dan menyelenggarakan runtime, menyediakan kebijakan pemuatan assembly, dan memulai aplikasi serta alat

:::note
Ketersediaan stack ini tergantung pada pengaturan penyedia hosting tertentu. Template ini memanfaatkan daemon inisialisasi systemd modern.
:::

## Membuat Server .NET Core{#creating-net-core-server}

1. Masuk ke dashboard PaaS dan klik tombol **New Environment** di pojok kiri atas.

2. Dalam [topology wizard](https://docs.dewacloud.com/docs/setting-up-environment/) yang terbuka, buka tab **.NET** dan pilih server aplikasi _**.NET Core**_. Konfigurasikan parameter lainnya (_[cloudlet](https://docs.dewacloud.com/docs/cloudlet/)_, _disk limit_, _[public IP](https://docs.dewacloud.com/docs/public-ip/)_, dll.) sesuai kebutuhan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/01-dotnet-core-topology-wizard.png" alt=".NET Core topology wizard" max-width="100%"/>

Klik **Create** untuk melanjutkan.

3. Environment Anda dengan server _.NET Core_ akan dibuat dalam beberapa menit.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/02-dotnet-core-application-server-created.png" alt=".NET Core application server created" max-width="100%"/>

Server aplikasi beroperasi di dalam container (node) terpisah - instance virtual yang terisolasi - disediakan untuk stack perangkat lunak. Container memiliki private IP nya sendiri dan record DNS unik.

## Mendeploy Aplikasi ke Server .NET Core{#deploying-application-to-net-core-server}

Platform ini menyediakan beberapa opsi untuk secara otomatis [mendeploy proyek](https://docs.dewacloud.com/docs/deployment-guide/). Dalam contoh ini, kita akan menambahkan proyek .NET sederhana yang disimpan di GitHub.

1. Buka tab _**Git/SVN**_ dari **[Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/#git--svn-projects)** untuk menambahkan repository baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/03-deployment-manager-add-repository.png" alt="deployment manager add repository" width="50%"/>

:::tip
Jika Anda tertarik untuk membuat aplikasi .NET Anda sendiri, ikuti dokumentasi resmi.
:::

2. Berikan _URL_ dan _Branch_ yang diperlukan untuk proyek Anda.

:::note
.NET Core mendukung beberapa variabel spesifik yang dapat membantu dengan deployment aplikasi:
APP_NAME - menunjukkan folder tertentu (jika ada beberapa aplikasi dalam satu repository) atau menjalankan file .dll tertentu dalam proyek Anda
ASPNETCORE_URLS - mengkonfigurasi layanan untuk bekerja dengan URL yang ditentukan
RUN_OPTION - menyediakan opsi dotnet run tambahan untuk proyek Anda
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/05-add-dotnet-core-application.png" alt="add .NET Core application" width="50%"/>

Klik **Add** untuk menyimpan proyek di dalam Deployment Manager Anda.

3. Buka dialog deployment menggunakan salah satu dari dua tombol pada gambar di bawah:

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/06-deploy-from-git.png" alt="deploy from Git" max-width="100%"/>

4. Dalam bingkai yang terbuka, Anda perlu memilih aplikasi yang akan dideploy, branch, dan environment target.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/07-deploy-dotnet-core-application.png" alt="deploy .NET Core application" width="50%"/>

:::note
Mirip dengan bahasa pemrograman Python, Node.js, dan Go, .NET Core memiliki satu konteks (yaitu hanya satu aplikasi yang dapat dideploy pada satu waktu).
:::

Konfigurasikan parameter lain sesuai kebutuhan Anda dengan mengikuti panduan deployment.

5. Dalam satu menit, aplikasi akan dideploy dan dapat diakses menggunakan tombol **Open in Browser** di sebelah server aplikasi .NET Core.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/08-open-dotnet-core-in-browser.png" alt="open .NET Core in browser" max-width="100%"/>

Aplikasi web Anda harus terbuka di tab baru browser. Dalam kasus kami, ini hanyalah sebuah situs .NET sederhana.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/.net-core/09-dotnet-core-web-application.png" alt=".NET Core web application" max-width="100%"/>

Gunakan panduan ini sebagai referensi untuk mendeploy aplikasi Anda sendiri ke server .NET Core.

## Baca Juga{#whats-next}

- [Windows VM](https://docs.dewacloud.com/docs/win-vm/)
- [Windows RD Access](https://docs.dewacloud.com/docs/win-rdp-access/)
- [Windows Roles & Features](https://docs.dewacloud.com/docs/win-vps-roles-features/)