---
sidebar_position: 1
slug: /cron-job
title: Setting Up Cronjob
---

# Mengatur Cronjob

**Cron** adalah penjadwal tugas berbasis waktu dalam sistem operasi mirip Unix. Ini memungkinkan pengguna untuk menjadwalkan tugas, seperti skrip atau perintah, untuk dijalankan secara berkala pada waktu atau tanggal tertentu. Dengan Cron, Anda dapat mengotomatisasi tugas seperti pemeliharaan sistem, pencadangan, pembersihan log, atau menjalankan skrip.

Berikut cara Anda dapat mengatur dan mengelola pekerjaan Cron di platform.

## Buat Environment

1. **Masuk ke dalam Platform Dashboard**.
2. Klik **Create environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/01-create-environment-button.png" alt="create environment bueton" width="30%"/>

3. Dalam jendela **Environment topology**, pilih server aplikasi dan database yang ingin Anda gunakan (misalnya, _Tomcat_ dan _MySQL_). Ketik nama environment dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/02-environment-wizard.png" alt="environment wizard" max-width="100%"/>

Environment Anda dengan node Tomcat dan MySQL akan dibuat dalam satu menit.

## Unggah Skrip

### Server Aplikasi

1. Klik tombol **Config** untuk server aplikasi Anda (misalnya, Tomcat).

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/03-tomcat-config-button.png" alt="Tomcat config button" max-width="100%"/>

2. Unggah skrip yang ingin Anda jalankan ke folder yang sesuai:
   - **home** (untuk server berbasis Java seperti Tomcat, TomEE, GlassFish, dll.)
   - Folder tempat aplikasi Anda disimpan (untuk server PHP).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/04-upload-to-home-folder.png" alt="upload to home folder" width="50%"/>

### Database

1. Klik tombol **Config** untuk database Anda (misalnya, MySQL, MariaDB).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/05-mysql-config-button.png" alt="MySQL config button" width="60%"/>

2. Unggah skrip ke folder **scripts**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/06-upload-to-scripts-folder.png" alt="upload to scripts folder" width="50%"/>

:::warning  
Pastikan skrip yang ingin Anda jalankan dapat dieksekusi. Jika tidak, gunakan interpreter bawaan seperti Bash, Python, Perl, dll., bergantung pada jenis skrip.
:::

## Penjadwal Acara Cron

1. Di tab konfigurasi, navigasikan ke folder **cron** dan buka file `{nodeName}`.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/07-cron-scheduler-file.png" alt="cron scheduler file" max-width="100%"/>

2. Tulis perintah dalam format **crontab** untuk menjadwalkan tugas Anda. Format untuk setiap cron job terdiri dari enam bidang yang dipisahkan oleh spasi:

```bash
{minute} {hour} {day} {month} {day-of-week} {command-line-to-execute}
```

| Bidang           | Rentang nilai                                           |
|------------------|---------------------------------------------------------|
| **minute**       | 0-59                                                    |
| **hour**         | 0-23                                                    |
| **day**          | 1-31                                                    |
| **month**        | 1-12                                                    |
| **day-of-week**  | 0-7 (0 dan 7 = Minggu, 1 = Senin, 2 = Selasa, dll.)      |
| **command**      | Jalur ke skrip atau perintah yang ingin Anda jalankan   |

### Standar untuk Format Crontab:

- Bidang-bidang harus dalam urutan yang tepat tanpa nilai yang hilang.
- Anda dapat menggunakan tanda bintang (`*`) untuk mewakili setiap nilai yang mungkin untuk bidang. Misalnya, `*` di bidang "hour" berarti "jalankan setiap jam."
- Gunakan `/` untuk menentukan interval. Misalnya, `*/3` di bidang hour berarti "jalankan setiap tiga jam."
- Tentukan beberapa nilai yang dipisahkan oleh koma. Misalnya, `1,6,19` di bidang hour berarti "jalankan pada jam 1:00, 6:00, dan 19:00."

### Contoh:
Jika skrip Anda ada di folder **home** Tomcat dan Anda ingin menjalankannya setiap menit, perintahnya bisa terlihat seperti ini:

```bash
*/1 * * * * /opt/tomcat/temp/test.sh
```

![script scheduled via cron](https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/setting-up-cronjob/08-script-scheduled-via-cron.png)

:::tip  
Jika skrip Anda tidak memiliki izin dapat dieksekusi dan Anda menggunakan interpreter bawaan seperti Bash, Python, Perl, dll., sebutkan interpreter secara eksplisit:

```bash
*/1 * * * * /bin/bash /opt/tomcat/temp/test.sh
```

Interpreter umum:
- `/bin/bash` untuk Bash
- `/usr/bin/python` untuk Python
- `/usr/bin/perl` untuk Perl
:::

3. **Pastikan ada baris kosong setelah entri cronjob terakhir** untuk menghindari masalah.

4. **Simpan** perubahan untuk menerapkan pengaturan.

Itu dia! Anda telah berhasil mengatur pekerjaan Cron.

## Baca Juga

- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Quartz Scheduling](https://docs.dewacloud.com/docs/quartz/)
- [Memcached System](https://docs.dewacloud.com/docs/memcached/)