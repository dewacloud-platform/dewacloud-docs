---
sidebar_position: 1
slug: /getting-started
title: Getting Started
---
# Getting Started

Dengan UI platform yang intuitif, Anda dapat dengan cepat melakukan deployment aplikasi ke platform cloud tanpa perlu melakukan konfigurasi yang kompleks.

Panduan ini menunjukkan beberapa langkah dasar yang diperlukan untuk memulai dengan platform ini:

  * [sign up](<#sign-up-how-to-create-an-account>)
  * [deploy application](<#deploy-application>)

## Sign Up: How to Create an Account{#sign-up-how-to-create-an-account}

Untuk mulai bekerja dengan platform, Anda memerlukan akun yang sesuai. Jadi, jika Anda belum memilikinya, daftar yang baru pada [halaman ini](https://www.dewacloud.com/).

Setelah sign up, Anda akan menerima email konfirmasi, jadi cukup ikuti instruksi yang diberikan (verifikasi tambahan melalui captcha atau SMS mungkin diperlukan).

:::tip
Link aktivasi akun dalam email berlaku selama 24 jam. Jika kadaluarsa, silakan daftar kembali.
:::

### Platform Dashboard{#platform-dashboard}

Akses platform tertentu melalui [tautan ini](<https://app.infra.dewacloud.com/>).

1\. Kembangkan menu di sudut kiri bawah dan pilih opsi **Signup**.

![PaaS dashboard signup button](#)

2\. Berikan _Email_ Anda dalam formulir yang muncul.

![registration via dashboard](#)

Klik tombol **Sign Up!** untuk menyetujui _terms of use_ dan _privacy policy_ penyedia.

Itu saja, platform akan mengirimkan email konfirmasi kepada Anda secara otomatis.

## Deploy Application{#deploy-application}

Ketika Anda mengakses platform dashboard untuk pertama kalinya, tutorial singkat (dapat diaktifkan secara manual melalui opsi **Help > Tutorial**) akan dimulai secara otomatis. Ini memberikan gambaran umum tentang platform dan panduan langkah demi langkah untuk pembuatan environment pertama Anda dan deployment aplikasi. Ikuti tips ini atau lewati tutorial dan gunakan langkah-langkah yang dijelaskan di bawah ini:

  * [automatic deployment from application Marketplace](<#application-marketplace>)
  * [manual deployment via dashboard](<#manual-deployment>)

### Application Marketplace{#application-marketplace}

Anda dapat mengakses [platform Marketplace](<https://www.virtuozzo.com/application-platform-docs/marketplace/>) langsung dari dashboard untuk menginstal berbagai solusi populer hanya dengan satu klik.

1\. Klik tombol **Marketplace** di bagian atas dashboard.

![PaaS main buttons](#)

2\. Temukan solusi yang diperlukan dalam daftar yang dikategorikan di sebelah kiri atau menggunakan kolom pencarian di bagian atas.

![application marketplace](#)

Arahkan ke plank aplikasi dan klik tombol **Install**.

3\. Konfigurasikan preferensi instalasi (mis. nama lingkungan, [alias](<https://docs.dewacloud.com/docs/environment-aliases/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.) dan klik **Install** sekali lagi.

![one-click WordPress installation](#)

Semua langkah selanjutnya akan dilakukan secara otomatis oleh platform, yaitu pembuatan environment dengan topologi yang diperlukan, deployment aplikasi yang sesuai, instalasi dependensi yang diperlukan, koneksi (mis. dengan database) dan pengaturan konfigurasi.

Jadi, dalam beberapa menit saja, Anda akan mendapatkan aplikasi yang siap digunakan.

### Manual Deployment{#manual-deployment}

Jika Anda ingin mendistribusikan aplikasi kustom dan mengendalikan proses deployment secara manual pada setiap tahap tertentu, ikuti langkah-langkah berikut:

1\. Klik tombol **New Environment** di sudut kiri atas dashboard.

![PaaS main buttons](#)

2\. **Topology Wizard** akan terbuka, di mana Anda dapat [mengatur environment](<https://docs.dewacloud.com/docs/setting-up-environment/>). Di antara fitur utama platform yang dapat konfigurasikan melalui formulir ini, ada:

  * dukungan untuk berbagai bahasa pemrograman (_Java_ , _PHP_ , _Ruby_ , _Python_ , _Node.js_ , _.NET_ , _Go_) dan integrasi container Docker kustom
  * daftar luas dari [software stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang dikelola
  * [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) untuk memastikan harga yang adil dan [horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) untuk menyediakan fleksibilitas dan keandalan
  * lampiran [public IP](<https://docs.dewacloud.com/docs/public-ip/>) untuk akses langsung dari Internet

![topology wizard](#)

Untuk sekarang, mari kita buat aplikasi server Tomcat tunggal.

3\. Dalam satu menit, environment Anda akan muncul di dashboard.

![dashboard environment created](#)

4\. Platform ini mendukung berbagai cara [deployment aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>) otomatis sehingga Anda dapat memilih opsi yang paling sesuai. Untuk contoh ini, kami akan menunjukkan deployment aplikasi _Hello World_ default dari arsip di deployment manager (terletak di bagian bawah dashboard).

![application deploy from deployment manager](#)

:::tip
Anda dapat dengan mudah menambahkan aplikasi Anda keDeployment Managermelalui pengunggahan arsip (baik dari mesin lokal atau melalui URL) atau menambahkan repository Git/SVN yang sesuai.
:::

Arahkan ke proyek dan klik tombol **Deploy to**.

5\. Dalam frame _**Deploy**_ yang terbuka, pilih _Environment_ Anda dan lanjutkan dengan tombol **Deploy**.

![application deploy dialog](#)

6\. Tunggu pop-up deployment berhasil dan klik **Open in Browser** untuk memastikan semuanya berfungsi dengan baik.

![open in browser button](#)

Dengan demikian, jika aplikasi Anda memerlukan sejumlah pengaturan tambahan atau tidak memiliki antarmuka web, jangan ragu untuk menggunakan berbagai [alat konfigurasi](<https://docs.dewacloud.com/docs/container-configuration/>) yang ada.

Itu saja! Nikmati menggunakan platform ini!

## Baca Juga

  * [What is PaaS & CaaS](<https://docs.dewacloud.com/docs/what-is-paas-and-caas/>)
  * [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
