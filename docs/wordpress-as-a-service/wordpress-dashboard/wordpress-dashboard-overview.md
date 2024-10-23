---
sidebar_position: 1
slug: /wordpress-dashboard-overview
title: WordPress Dashboard Overview
---

# Ikhtisar Dashboard WordPress

Dewacloud Application Platform untuk WordPress menyediakan dashboard khusus yang dirancang dan dioptimalkan khusus untuk hosting WordPress. Ini memiliki integrasi mendalam dengan produk, menawarkan informasi diagnostik yang cukup dan opsi manajemen untuk melakukan semua operasi yang paling sering diperlukan tanpa membuat layar berantakan atau membebani pelanggan.

Di bawah ini, kami akan memberikan ikhtisar tentang:

- [WordPress Dashboard](https://docs.dewacloud.com/#wordpress-dashboard)
- [Pengaturan Akun](https://docs.dewacloud.com/#account-settings)

## WordPress Dashboard{#wordpress-dashboard}

1. Halaman beranda awal mencantumkan semua proyek dalam akun dengan status yang mudah dibedakan (_hijau_ – aktif, _kuning_ – aksi sedang dilakukan, _merah_ - berhenti).

![WordPress user dashboard](#)

2. Menggunakan panel alat, Anda dapat:

- beralih antara **table** dan **tile views** (yang terakhir memberikan pratinjau cepat statistik proyek dalam waktu nyata)
- mengurutkan daftar **alphabetically** atau **by creation date** (dalam urutan naik atau turun)
- memfilter hasil menggunakan field **Search**

![dashboard tool panel](#)

Selain itu, di sudut kanan atas halaman beranda, Anda dapat melihat tombol **Create New Project**. Pelajari lebih lanjut tentang panduan [WordPress Project Creation](https://docs.dewacloud.com/wp-dashboard-project-installation/).

3. Setiap proyek memiliki opsi berikut yang tersedia dari halaman beranda:

- Klik **name** untuk membuka ikhtisar proyek yang lebih rinci dalam tab dashboard khusus
- Klik **URL** untuk membuka situs WordPress Anda dalam tab baru di browser
- Klik **Datacenter Info** untuk melihat detail tentang _Vendor_, _Country_, _Region_, dll.
- Luaskan menu untuk mendapatkan akses cepat ke tindakan **Stop** (**Start**), **Settings**, dan **Delete**

![project actions](#)

4. Dengan mengklik proyek tertentu, Anda akan membuka tab khusus dengan informasi rinci dan opsi manajemen untuk proyek tersebut.

![project management](#)

Pelajari lebih lanjut di panduan [WordPress Project Management](https://docs.dewacloud.com/wp-dashboard-project-management/).

## Pengaturan Akun{#account-settings}

Di sudut kanan atas dashboard, Anda dapat menemukan menu untuk mengelola akun Dewacloud Application Platform untuk WordPress Anda.

1. Menampilkan alamat email akun dan Total Balance di bagian atas. Anda dapat mengklik tombol plus di samping saldo Anda untuk mengisinya kembali.

![account settings](#)

2. Opsi **Your Account** akan membawa Anda ke bagian yang sama dengan data yang terkait dengan seluruh akun:

- _User Information_
- _Payment Settings_
- _Invoices_
- _Subscriptions_
- _SSH Access Keys_

2.1. Pada tab **User Information**, Anda dapat mempersonalisasi akun dengan memberikan detail dalam formulir yang khusus. Di sini Anda dapat menentukan informasi berikut:

- **Email** pemilik akun (tidak dapat diedit)
- Nama **Company** untuk akun
- **Maintenance Time** (zona waktu dan jam yang lebih disukai) untuk melakukan aktivitas dukungan

![user information](#)

Tabel **Account Limits** melacak semua ketersediaan dan batas fungsionalitas inti platform untuk akun Anda. Selain itu, untuk pengguna percobaan, ini menyediakan perbandingan dengan akun berbayar dan tombol **Upgrade Account**.

2.2. Pada tab **Payment Settings**, Anda dapat pergi ke sistem penagihan eksternal untuk **Manage** informasi penagihan dan metode pembayaran Anda.

![payment settings](#)

2.3. Tab **Invoices** melacak semua faktur yang dihasilkan di akun Anda dan memungkinkan Anda membayar yang _open_ dan _expired_ langsung dari dashboard.

![account invoices](#)

2.4. Bagian **Subscriptions** menampilkan semua langganan pada akun.

![account subscriptions](#)

Gunakan menu drop-down di bagian bawah setiap langganan untuk mengelolanya:

- **Edit Subscription** \- membuka dialog _Edit Subscription_ untuk mengubah _Quantity_ situs web. Harga per instalasi dihitung sesuai dengan periode penagihan yang tersisa.
  - _Saat upgrade_ (meningkatkan jumlah instalasi), platform akan secara otomatis menghasilkan faktur "update quantity" tambahan.
  - _Dalam kasus penurunan_ (tidak kurang dari jumlah situs web yang terpasang), platform akan menghasilkan faktur pengembalian uang, dan saldo akun akan diisi ulang.
- **Disable/Enable Auto Pay** \- mengubah status opsi _Auto Pay_ untuk langganan yang dipilih
- **Cancel Subscription** \- mengakhiri langganan

![edit subscription](#)

2.5. Tab **SSH Access Keys** memungkinkan manajemen kunci publik dan privat SSH pada akun. Ini juga menyediakan informasi tentang koneksi ke akun dan proyek Anda melalui SSH.

![account SSH keys](#)

Untuk menambahkan SSH key baru, klik tombol yang sesuai:

- **Add Public Key** \- untuk mendapatkan akses SSH ke akun dan proyek Anda
- **Add Private Key** \- untuk memberikan platform akses ke repositori jarak jauh dengan kunci publik yang sesuai

![add SSH key](#)

Platform mendukung tipe kunci berikut:

- _ECDSA_
- _EdDSA_
- _RSA_

Dalam dokumen yang terhubung, Anda dapat mempelajari lebih lanjut tentang [generating SSH keys](https://docs.dewacloud.com/ssh-generate-key/) dan [connecting via SSH Gate](https://docs.dewacloud.com/ssh-gate-access/).

3. Opsi **System Settings** akan membawa Anda ke bagian dengan data terkait manajemen proyek:

- _SSL Certificates_
- _Git Configuration_
- _Backup Storage_

3.1. Tab **SSL Certificates** mengelola sertifikat SSL pada akun. Ini secara otomatis mencantumkan semua [sertifikat Let’s Encrypt](https://docs.dewacloud.com/free-ssl-certificates-with-lets-encrypt/) yang diterbitkan untuk proyek Anda dan memungkinkan penambahan manual [custom SSL certificates](https://docs.dewacloud.com/custom-ssl/) dengan tombol **Add SSL**.

![settings SSL certificates](#)

Sub-tab **Bind SSL** memungkinkan binding dan unbinding custom SSL dari projek yang diperlukan (Anda perlu menambahkan domain khusus terlebih dahulu).

![bind SSL certificate](#)

3.2. Tab **Git Configuration** mencantumkan semua repositori yang ditambahkan ke akun.

![settings Git repositories](#)

Klik tombol **Add Repo** dan berikan informasi yang diperlukan di jendela yang terbuka untuk menambahkan repositori baru:

- **Name** – nama kustom untuk aplikasi
- **URL** – URL yang sesuai ke repositori
- **Branch** – cabang yang diperlukan dari repo
- **Use Authentication** – centang untuk memberikan kredensial (_Login_ dengan _Token_ atau _SSH key_)

![add Git repository](#)

Jika diperlukan, repositori yang ada dapat diedit (menyesuaikan nilai yang disediakan selama penambahan) dan dihapus menggunakan tombol yang sesuai dalam daftar repo.

3.3. Tab **Backup Storage** memperlihatkan daftar semua instance penyimpanan yang dibuat untuk menyimpan backup proyek WordPress Anda.

![settings backup storage](#)

Untuk menambahkan penyimpanan baru, klik tombol **Add Backup** dan berikan data berikut:

- centang opsi penyimpanan backup yang diinginkan untuk memilihnya
- jika diperlukan, aktifkan opsi _annual_ dan _auto pay_
- tetapkan jumlah node penyimpanan
- berikan _display name_ dan _domain_
- pilih _region_ yang diperlukan (jika tersedia)

![add backup storage](#)

Klik **Add** saat siap. Produk penyimpanan baru Anda akan dibuat dalam beberapa menit. Pelajari lebih lanjut tentang [proses backup dan restore](https://docs.dewacloud.com/wordpress-backups/).

4. Daftar Language memungkinkan mengubah lokalisasi dashboard ke bahasa yang diinginkan. Ketersediaan dan opsi yang tepat bergantung pada konfigurasi penyedia hosting layanan.

![language and dark mode](#)

Gunakan toggle **Dark Mode** untuk beralih antara tema terang dan gelap dashboard.

5. Selanjutnya, Anda dapat melihat daftar tautan berguna untuk platform Anda:

- Help Center
- Terms Of Use
- Privacy Policy

6. Opsi terakhir **Log Out** akan mengakhiri sesi Anda saat ini dengan Dewacloud Application Platform for WordPress.

Anda perlu login kembali untuk melanjutkan pekerjaan Anda dengan dashboard.

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/virtuozzo-application-platform-for-wordpress/)
- [WordPress Project Installation](https://docs.dewacloud.com/wp-dashboard-project-installation/)
- [WordPress Project Management](https://docs.dewacloud.com/wp-dashboard-project-management/)
- [WordPress Topologies](https://docs.dewacloud.com/wordpress-topologies/)
- [WordPress Backups](https://docs.dewacloud.com/wordpress-backups/)
- [WordPress Security Settings](https://docs.dewacloud.com/wordpress-security/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/wordpress-php-optimization/)