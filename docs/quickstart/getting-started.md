---
sidebar_position: 1
slug: /getting-started
---
# Getting Started

Dengan antarmuka pengguna yang intuitif di platform, Anda dapat dengan cepat meng-deploy aplikasi Anda ke platform cloud tanpa perlu melakukan konfigurasi yang kompleks.

Panduan ini menunjukkan beberapa langkah dasar yang diperlukan untuk memulai dengan platform:

  * [daftar](<#sign-up-how-to-create-an-account>)
  * [deploy aplikasi](<#deploy-application>)

## Daftar: Cara Membuat Akun{#sign-up-how-to-create-an-account}

Untuk mulai bekerja dengan platform, Anda memerlukan akun yang sesuai. Jadi, jika Anda belum memilikinya, daftar baru melalui:

  * [situs web Cloud Union](<#cloud-union>)
  * [dashboard platform tertentu](<#platform-dashboard>)

Setelah daftar, Anda akan menerima email konfirmasi, jadi ikuti saja instruksi yang diberikan (verifikasi tambahan melalui captcha atau SMS mungkin diperlukan).

:::tip

Tautan aktivasi akun dalam email berlaku selama 24 jam (dapat bervariasi berdasarkan pengaturan penyedia hosting tertentu). Jika kadaluarsa, silakan daftar ulang.

:::

### Cloud Union{#cloud-union}

Kunjungi halaman [Cloud Union](<application-platform-partners/>) untuk membandingkan dan memilih penyedia layanan hosting yang paling sesuai.

1\. Di sini, Anda dapat menemukan banyak filter di menu sebelah kiri dan kriteria pengurutan di bagian atas untuk membandingkan penyedia layanan hosting. Gunakan tombol **More Info** untuk mendapatkan lebih banyak detail tentang penyedia tertentu.

Setelah menemukan varian yang cocok, klik tombol **Sign Up** untuk mendaftar akun baru.

![PaaS Cloud Union](#)

2\. Isi formulir yang muncul dengan memberikan _Nama_, _Email_ Anda, dan opsional _Kebutuhan_ proyek Anda.

![mendaftar via Cloud Union](#)

Setujui _ketentuan penggunaan_ dan _kebijakan privasi_ platform dan klik tombol **Sign Up** untuk melanjutkan.

Itu saja, periksa inbox Anda untuk email konfirmasi.

### Platform Dashboard{#platform-dashboard}

Akses platform tertentu melalui [domain hoster](<paas-hosting-providers/>).

1\. Buka menu di pojok kiri bawah dan pilih opsi **Signup**.

![tombol signup dashboard PaaS](#)

2\. Masukkan _Email_ Anda dalam formulir yang muncul.

![pendaftaran melalui dashboard](#)

Klik tombol **Sign Up!** untuk menyetujui _ketentuan penggunaan_ dan _kebijakan privasi_ dari penyedia.

Itu saja, platform akan secara otomatis mengirimkan email konfirmasi kepada Anda.

## Deploy Aplikasi{#deploy-application}

Saat Anda mengakses dashboard platform untuk pertama kalinya, tutorial singkat (dapat dipanggil manual melalui opsi **Help > Tutorial**) akan secara otomatis dimulai. Ini memberikan gambaran cepat tentang platform dan panduan langkah demi langkah untuk pembuatan environment pertama Anda dan deployment aplikasi. Ikuti tips ini atau lewati tutorial dan gunakan langkah-langkah yang dijelaskan di bawah ini:

  * [deployment otomatis dari Marketplace aplikasi](<#application-marketplace>)
  * [deployment manual melalui dashboard](<#manual-deployment>)

### Marketplace Aplikasi{#application-marketplace}

Anda dapat mengakses [Marketplace platform](<application-platform-docs/marketplace/>) langsung dari dashboard untuk menginstal berbagai solusi populer hanya dengan satu kali klik.

1\. Klik tombol **Marketplace** di bagian atas dashboard.

![tombol utama PaaS](#)

2\. Temukan solusi yang diperlukan dalam daftar terkategori di sebelah kiri atau gunakan kolom pencarian di bagian atas.

![marketplace aplikasi](#)

Arahkan mouse di atas plank aplikasi dan klik tombol **Install**.

3\. Konfigurasikan preferensi instalasi (misalnya nama environment, [alias](<environment-aliases/>), [region](<environment-regions/>), dll.) dan klik **Install** sekali lagi.

![instalasi WordPress satu klik](#)

Semua langkah selanjutnya akan dilakukan secara otomatis oleh platform, yaitu pembuatan environment dengan topologi yang diperlukan, deployment aplikasi yang sesuai, instalasi dependensi yang diperlukan, pengaturan koneksi (misalnya dengan database) dan konfigurasi.

Dengan demikian, dalam waktu beberapa menit, Anda akan mendapatkan aplikasi yang siap digunakan.

### Deployment Manual{#manual-deployment}

Jika Anda ingin mendeply aplikasi kustom dan mengontrol proses deployment secara manual pada setiap tahap tertentu, ikuti langkah-langkah berikut:

1\. Klik tombol **New Environment** di pojok kiri atas dashboard.

![tombol utama PaaS](#)

2\. **Topology Wizard** akan terbuka, di mana Anda dapat [mengatur environment Anda](<setting-up-environment/>). Di antara fitur platform pusat yang dapat dikonfigurasi melalui formulir ini, ada:

  * dukungan berbagai bahasa pemrograman (_Java_, _PHP_, _Ruby_, _Python_, _Node.js_, _.NET_, _Go_) dan integrasi kontainer Docker kustom
  * daftar lebar [software stacks](<software-stacks-versions/>)
  * [skala vertikal otomatis](<automatic-vertical-scaling/>) untuk memastikan harga yang adil dan [skala horizontal](<automatic-horizontal-scaling/>) untuk menyediakan fleksibilitas dan keandalan
  * lampiran [IP publik](<public-ip/>) untuk akses langsung dari Internet

![topology wizard](#)

Untuk sekarang, mari **Buat** hanya satu server aplikasi Tomcat.

3\. Dalam satu menit, environment Anda akan muncul di dashboard.

![dashboard environment dibuat](#)

4\. Platform mendukung berbagai cara dari [deployment aplikasi](<deployment-guide/>) otomatis sehingga Anda dapat memilih opsi yang paling sesuai. Untuk contoh ini, kami akan menunjukkan deployment aplikasi _Hello World_ default dari arsip di deployment manager (terletak di bagian bawah dashboard).

![deployment aplikasi dari deployment manager](#)

:::tip

Anda dapat dengan mudah menambahkan aplikasi Anda ke Deployment Manager dengan mengunggah arsip (baik dari mesin lokal atau melalui URL) atau menambahkan repositori Git/SVN yang sesuai.

:::

Arahkan mouse di atas proyek dan klik tombol **Deploy to**.

5\. Dalam bingkai _**Deploy**_ yang terbuka, cukup pilih _Environment_ Anda dan lanjutkan dengan tombol **Deploy**.

![dialog deploy aplikasi](#)

6\. Tunggu munculnya pop-up deploy sukses dan klik **Open in Browser** untuk memastikan semuanya berfungsi dengan baik.

![tombol buka di browser](#)

Jika aplikasi Anda memerlukan pengaturan tambahan atau tidak memiliki antarmuka web, jangan ragu untuk menggunakan berbagai [alat konfigurasi](<container-configuration/>) bawaan.

Itu saja! Nikmati menggunakan platform!

## Baca Juga{#whats-next}

  * [Apa itu PaaS & CaaS](<what-is-paas-and-caas/>)
  * [Daftar & Info Hosters](<paas-hosting-providers/>)
  * [Panduan Dashboard](<dashboard-guide/>)
  * [Mengatur Environment](<setting-up-environment/>)
  * [Panduan Deployment](<deployment-guide/>)