---
sidebar_position: 5
slug: /wordpress-backups
title: WordPress Backups
---

# WordPress Backups

Dewacloud Application Platform untuk WordPress menyediakan solusi backup otomatis sepenuhnya (berdasarkan perangkat lunak **[Restic](https://restic.readthedocs.io/en/stable/010_introduction.html)**) untuk semua topologi yang didukung. Platform ini memungkinkan Anda mengatur proses berdasarkan kebutuhan Anda melalui antarmuka pengguna yang jelas dan intuitif.

:::tip
Lihat bagian yang terhubung jika Anda tertarik dengan alur proses backup dan spesifikasinya.
:::

Urutan operasinya adalah sebagai berikut:

- instal penyimpanan backup yang diinginkan (melalui pengaturan akun)
- atur pengaturan backup untuk instance WordPress yang diperlukan (melalui pengaturan proyek khusus)
- kelola proses backup dan restore melalui UI khusus

Marilah kita melalui langkah-langkah yang diperlukan secara rinci:

1. Masuk ke akun Dewacloud Application Platform untuk WordPress Anda dan buka Pengaturan Sistem di sudut kanan atas.

![account system settings](#)

2. Beralih ke bagian **Backup Storage** dan klik tombol **Add Backup** untuk membuat penyimpanan baru. Dalam dialog yang terbuka, berikan data berikut:

- pilih opsi penyimpanan backup yang diinginkan (centang kotak di sebelah nama)
- jika perlu, aktifkan opsi _annual_ dan _auto pay_
- atur jumlah node penyimpanan
- berikan _display name_ dan _domain_
- pilih _region_ yang diperlukan (jika tersedia)

![add backup storage](#)

Klik **Add** ketika siap. Produk penyimpanan baru Anda akan dibuat dalam beberapa menit.

3. Selanjutnya, pilih proyek yang ingin Anda back up dan klik **Settings** (ikon roda gigi) di sudut kanan atas.

![project settings](#)

4. Buka bagian **Backup Storage** dan konfigurasikan jadwal backup menggunakan tab _pre-defined_, _custom_, atau _crontab_. Kemudian, pilih penyimpanan backup yang ditambahkan sebelumnya dan atur jumlah backup terbaru untuk disimpan.

![configure backups](#)

Klik **Install** untuk menerapkan.

5. Itu saja. Dalam satu menit, Anda akan melihat backup yang sudah dikonfigurasi dengan sukses. Gunakan tombol di bagian bawah untuk:

- **Configure** – sesuaikan jadwal, node penyimpanan, dan jumlah backup untuk disimpan
- **Backup Now** – buat backup segera
- **Restore** – restore dari backup (pilih proyek dan backup yang diperlukan dalam pop-up)
- **Delete** – hapus solusi backup untuk proyek

![manage backups](#)

## Spesifikasi Proses Backup{#backup-process-specifics}

Di bawah ini, Anda dapat menemukan informasi tentang alur dan spesifikasi proses backup dan restorasi:

- node penyimpanan backup di-mount ke instance WordPress hanya selama proses backup dan restore (dan di-unmount setelahnya)
- selama operasi backup, _**Restic**_ membuat snapshot yang mencakup data dari folder **/var/www/webroot/ROOT** dan dump basis data penuh (dibuat dengan utilitas _mysqldump_)
- backup pada node penyimpanan memiliki cap waktu untuk memudahkan dalam manajemen selama restorasi; juga, snapshot secara otomatis dirotasi berdasarkan jumlah backup yang dikonfigurasi oleh pengguna - hanya sejumlah backup terbaru yang ditentukan yang disimpan
- selama operasi backup, direktori berikut terhubung:
  - pada node _backup storage_ - semua backup disimpan di bawah folder **/data** (setiap environment memiliki subdirektori sendiri - **/data/$\{env.name\}**)
  - pada layer _compute node (application server)_ - direktori **/opt/backup/** digunakan untuk backup
- selama operasi restorasi, direktori berikut terhubung:
  - pada node _backup storage_ - direktori **/data/$\{env.name\}** dengan backup environment yang sesuai
  - pada layer _compute node (application server)_ - direktori **/tmp/restore** digunakan untuk menyimpan data yang dipulihkan pada awalnya
- setelah data dari snapshot dipulihkan ke application server, environment yang sesuai dihentikan sementara untuk melakukan pemulihan basis data dan penggantian folder **webroot**

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/virtuozzo-application-platform-for-wordpress/)
- [WordPress Dashboard](https://docs.dewacloud.com/wp-dashboard-overview/)
- [WordPress Topologies](https://docs.dewacloud.com/wordpress-topologies/)
- [WordPress Security](https://docs.dewacloud.com/wordpress-security/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/wordpress-php-optimization/)