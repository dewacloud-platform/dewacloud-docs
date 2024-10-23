---
sidebar_position: 1
slug: /vps-configuration
title: VPS Configuration
---

# Konfigurasi Elastic VPS

Semua jenis virtual private server yang didukung di Dewacloud (yaitu, berdasarkan _CentOS_, _Ubuntu_, dan _Debian_) memiliki alur instalasi serupa dan opsi manajemen utama yang sama. Jadi, untuk mendapatkan Elastic VPS Anda di-host dan dikonfigurasi di Dewacloud, ikuti instruksi berikut tentang cara:

- [membuat VPS](https://docs.dewacloud.com/#elastic-vps-installation)
- [menaikkan skala server](https://docs.dewacloud.com/#elastic-vps-scaling)
- [mengelola instance](https://docs.dewacloud.com/#elastic-vps-inbuilt-tools)

## Instalasi Elastic VPS{#elastic-vps-installation}

Untuk mengatur VPS Anda di dalam platform, ikuti langkah-langkah berikut.

1. Klik tombol **New Environment** di panel atas untuk mengakses wizard topologi environment.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-1.png" alt="new environment button" width="70%"/>
</p>

2. Di sini, klik bagian **VPS** di sudut kiri bawah dan pilih VPS yang dibutuhkan (_CentOS 7.9_ dalam contoh kami) dari daftar opsi yang dapat diperluas.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-2.png" alt="elastic vps topology wizard" width="100%"/>
</p>

Tentukan batasan cloudlet untuk node ini, [tambahkan scaling limit](https://docs.dewacloud.com/#elastic-vps-scaling) jika diperlukan, pilih [region](https://docs.dewacloud.com/environment-regions/) yang diinginkan, ketik nama environment dan klik pada **Create**.

3. Dalam beberapa saat, environment baru Anda dengan virtual server yang dipilih akan muncul di dashboard. Anda juga akan menerima notifikasi email dengan data administrasi (kredensial login/password dan URL akses).

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-3.png" alt="elastic VPS reset password button" width="100%"/>
</p>

Anda juga bisa melihat private dan public IP address (jika sudah ditambahkan) secara langsung di dashboard. Jika Anda kehilangan akses ke server VPS Anda atau ingin mengubah kredensial admin untuknya, klik tombol **Reset Password** seperti yang ditunjukkan pada gambar di atas.

## Scaling Elastic VPS{#elastic-vps-scaling}

Fleksibilitas hosting VPS di platform dicapai berkat automatic scaling, baik secara vertikal maupun horizontal, yang dengan mudah disesuaikan selama pembuatan dan konfigurasi topologi environment.

**[_Automatic vertical scaling_](https://www.virtuozzo.com/application-platform-docs/automatic-vertical-scaling/)** di jamin oleh kemampuan sistem untuk menyediakan resource yang dibutuhkan akibat load. Anda dapat memilih scaling limit untuk server Anda, yang mencegah downtime selama load spike yang tidak terduga dan mengoptimalkan biaya hosting.

Untuk scaling environment Anda, Anda perlu meningkatkan/menurunkan jumlah resource maksimum yang tersedia (cloudlets) dengan menyesuaikan slider cloudlet di bagian _Vertical Scaling per Node_.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-4.png" alt="elastic VPS vertical scaling" width="100%"/>
</p>

Fungsi [horizontal scaling](https://www.virtuozzo.com/application-platform-docs/horizontal-scaling/) memungkinkan mudahnya menyesuaikan jumlah server dalam environment Anda menggunakan tombol “**-**” dan “**+**” yang sesuai. Di sini, Anda dapat memilih mode scaling yang diinginkan:

- _**Stateless**_ - secara bersamaan membuat semua node baru dari template image dasar
- _**Stateful**_ - secara berurutan menyalin sistem file dari container master ke dalam node baru

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-5.png" alt="elastic VPS horizontal scaling" width="100%"/>
</p>

Pastikan untuk **Apply** perubahan yang telah Anda buat.

## Inbuilt Tools Elastic VPS{#elastic-vps-inbuilt-tools}

Sebagian besar konfigurasi dasar pada instance VPS Anda dapat dilakukan langsung melalui UI dashboard dengan serangkaian inbuilt tools yang disediakan oleh Dewacloud.

### File Manager{#file-manager}

**[Configuration file manager](https://docs.dewacloud.com/configuration-file-manager/)** bawaan dirancang untuk mengelola (membuat/menghapus, upload/download, mengedit) file di dalam container Anda, serta menyiapkan [mount point](https://docs.dewacloud.com/mount-points/) dan mengelola [data yang di-export](https://www.virtuozzo.com/application-platform-docs/storage-exports/).

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-6.png" alt="elastic VPS file manager" width="100%"/>
</p>

Tab yang sesuai dapat dibuka dengan mengklik tombol **Config** di samping node VPS yang diperlukan (atau keseluruhan layer).

### Log Files{#log-files}

Tracking **[Log](https://docs.dewacloud.com/view-log-files/)** adalah pilihan yang berguna untuk manajemen VPS Anda secara efisien. Di sini, data tentang semua aspek lifecycle container Anda dikumpulkan, yang bisa bermanfaat saat troubleshooting dan debugging aplikasi serta layanan Anda.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-config-7.png" alt="elastic VPS log files" width="100%"/>
</p>

Tab logs dapat diakses dengan mengklik tombol **Log** di samping node VPS yang diperlukan (atau keseluruhan layer).

Untuk konfigurasi yang lebih kompleks, Anda harus terhubung ke server VPS melalui [SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/) (termasuk opsi untuk melanjutkan pekerjaan melalui dashboard menggunakan **Web SSH**) atau melakukan koneksi [SSH langsung menggunakan Public IP](https://docs.dewacloud.com/vps-public-ip).

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [Linux VPS Access via SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/win-rdp-access/)