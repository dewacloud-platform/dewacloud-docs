---
sidebar_position: 1
slug: /vps-configuration
title: VPS Configuration
---

# Konfigurasi Elastic VPS

Semua jenis virtual private server yang didukung di platform (yaitu, berdasarkan _CentOS_, _Ubuntu_, dan _Debian_) memiliki alur instalasi serupa dan opsi manajemen utama yang sama. Jadi, untuk mendapatkan Elastic VPS Anda di-host dan dikonfigurasi di dalam platform, ikuti instruksi berikut tentang cara:

- [membuat VPS](https://docs.dewacloud.com/#elastic-vps-installation)
- [menaikkan skala server](https://docs.dewacloud.com/#elastic-vps-scaling)
- [mengelola instans](https://docs.dewacloud.com/#elastic-vps-inbuilt-tools)

## Instalasi Elastic VPS{#elastic-vps-installation}

Untuk mengatur VPS Anda di dalam platform, ikuti langkah-langkah berikut.

1. Klik tombol **New Environment** di panel atas untuk mengakses wizard topologi environment.

![new environment button](#)

2. Di sini, klik bagian **VPS** di sudut kiri bawah dan pilih VPS yang dibutuhkan (_CentOS 7.2_ dalam contoh kami) dari daftar opsi yang dapat diperluas.

![elastic vps topology wizard](#)

:::note
Ketika mengaktifkan VPS dari jenis apa pun, Anda secara otomatis akan mendapatkan alamat-alamat Public IP yang terpasang ke node yang sesuai (satu per instance). Namun demikian, jika diperlukan secara ketat, Anda dapat menghubungi penyedia hosting Anda dan meminta opsi menjalankan VPS dengan internal IP saja (misalnya, ketika diperlukan infrastruktur aplikasi khusus, yang sebagian tidak dapat diakses dari luar).
:::

Tentukan batasan cloudlet untuk node ini, [skala](https://docs.dewacloud.com/#elastic-vps-scaling) jika diperlukan, pilih [region](https://docs.dewacloud.com/environment-regions/) yang diinginkan (jika beberapa tersedia), ketik nama environment dan klik pada **Create**.

3. Dalam beberapa menit, environment baru Anda dengan virtual server yang dipilih akan muncul di dashboard. Anda juga akan menerima notifikasi email dengan data administrasi (yaitu kredensial login/password, Public IP yang terlampir, dan URL akses).

![elastic VPS reset password button](#)

Anda juga bisa melihat alamat Public IP secara langsung di dashboard. Jika Anda kehilangan akses ke server VPS Anda atau ingin mengubah kredensial admin untuknya, klik tombol **Reset Password** seperti yang ditunjukkan pada gambar di atas.

## Skala Elastic VPS{#elastic-vps-scaling}

Fleksibilitas hosting VPS di platform dicapai berkat skalabilitas otomatis, baik secara vertikal maupun horizontal, yang dengan mudah disesuaikan selama pembuatan dan konfigurasi topologi environment.

**[Skalabilitas vertikal otomatis](https://www.virtuozzo.com/application-platform-docs/automatic-vertical-scaling/)** di jamin oleh kemampuan sistem untuk menyediakan sumber daya yang dibutuhkan akibat beban. Anda dapat memilih batasan skalabilitas untuk server Anda, yang mencegah pemadaman selama lonjakan beban yang tidak terduga dan mengoptimalkan biaya hosting.

Untuk menskalakan environment Anda, Anda perlu meningkatkan/menurunkan jumlah maksimum sumber daya yang tersedia (cloudlets) dengan menyesuaikan penggeser cloudlet di bagian _Vertical Scaling per Node_.

![elastic VPS vertical scaling](#)

Fungsi [skalabilitas horizontal](https://www.virtuozzo.com/application-platform-docs/horizontal-scaling/) memungkinkan mudahnya menyesuaikan jumlah server dalam environment Anda menggunakan tombol “**-**” dan “**+**” yang sesuai. Di sini, Anda dapat memilih mode skalabilitas yang diinginkan:

- _**Stateless**_ - secara bersamaan membuat semua node baru dari template gambar dasar
- _**Stateful**_ - secara berurutan menyalin sistem file dari kontainer master ke dalam node baru

![elastic VPS horizontal scaling](#)

Pastikan untuk **Apply** perubahan yang telah Anda buat.

## Alat Bawaan Elastic VPS{#elastic-vps-inbuilt-tools}

Sebagian besar konfigurasi dasar pada instance VPS Anda dapat dilakukan langsung melalui UI dashboard dengan serangkaian alat bawaan yang disediakan oleh platform.

:::note
Konfigurasi pada Windows VPS dapat diaplikasikan melalui koneksi RDP saja.
:::

### File Manager{#file-manager}

**[Pengelola file konfigurasi](https://docs.dewacloud.com/configuration-file-manager/)** bawaan dirancang untuk mengelola (membuat/menghapus, mengunggah/mengunduh, mengedit) file di dalam container Anda, serta menyiapkan [titik mount](https://docs.dewacloud.com/mount-points/) dan mengelola [data yang diekspor](https://www.virtuozzo.com/application-platform-docs/storage-exports/).

![elastic VPS file manager](#)

Tab yang sesuai dapat dibuka dengan mengklik tombol **Config** di samping node VPS yang diperlukan (atau seluruh layer).

### Log Files{#log-files}

Pelacakan **[Log](https://docs.dewacloud.com/view-log-files/)** adalah pilihan yang berguna untuk manajemen VPS Anda secara efisien. Di sini, data tentang semua aspek lifecycle container Anda dikumpulkan, yang bisa bermanfaat saat memecahkan masalah dan debugging aplikasi serta layanan Anda.

![elastic VPS log files](#)

Bagian yang sesuai dapat diakses dengan mengklik tombol **Log** di samping node VPS yang diperlukan (atau seluruh layer).

Untuk konfigurasi yang lebih kompleks, Anda harus terhubung ke server VPS melalui [SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/) (termasuk opsi untuk melanjutkan pekerjaan melalui dashboard menggunakan **Web SSH**) atau membangun koneksi [SSH langsung menggunakan Public IP](https://docs.dewacloud.com/vps-public-ip).

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [Linux VPS Access via SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/win-rdp-access/)