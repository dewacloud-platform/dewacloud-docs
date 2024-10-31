---
sidebar_position: 1
slug: /auto-configuration
title: Auto-Configuration Overview
---
# Smart Auto-Configuration of Containers

Untuk memastikan pemanfaatan sumber daya yang efisien, platform dapat secara otomatis mengonfigurasi beberapa stack yang dikelola sesuai dengan batas scaling ([jumlah cloudlets](https://docs.dewacloud.com/docs/cloudlet/)). Saat ini, template berikut dapat memanfaatkan fitur **Smart Auto-Configuration** ini:

  * _**[Databases](https://docs.dewacloud.com/docs/database-auto-configuration/):** MySQL, MariaDB, Percona_
  * _**LiteSpeed:** [Web Server](https://docs.dewacloud.com/docs/litespeed-web-server/), [ADC](https://docs.dewacloud.com/docs/litespeed-web-adc/), [LLSMP](https://docs.dewacloud.com/docs/lemp-llsmp/)_

:::tip
Stack **Apache dan NGINX PHP** mendukung implementasi legacy dari fitur auto-configuration PHP.
:::

Stack yang tercantum di atas memiliki beberapa keunikan dalam mendukung implementasi ini.

1\. Template menggunakan program inisialisasi modern _**systemd**_, yang berisi berbagai fitur dan alat yang diperlukan untuk implementasi auto-configuration.

2\. Sebuah variabel _**JELASTIC_AUTOCONFIG**_ [environment variable](https://docs.dewacloud.com/docs/container-variables/) khusus mendefinisikan apakah fitur auto-configuration harus diaktifkan (_true_, secara default) atau dinonaktifkan (_false_).

Jika Anda ingin menonaktifkan _Smart Auto-Configuration_, tambahkan (atau edit jika sudah ada) variabel ini dengan nilai _false_ melalui dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/auto-configuration-overview/01-paas-autoconfig-variable.png" alt="PaaS autoconfig variable" max-width="100%"/>

Jangan lupa untuk **Restart Node(s)** untuk menerapkan perubahan.

3\. Pemulihan pintar setelah error **Out Of Memory (OOM)** menyebabkan penyesuaian konfigurasi otomatis untuk mengurangi konsumsi memori default container.

:::warning
Pemulihan pintar dari OOM hanya berfungsi pada container dengan **JELASTIC_AUTOCONFIG** diaktifkan dan saat ini hanya untuk stack database berikut:
MySQL 8.0.26; 5.7.35  
MariaDB 10.3.30; 10.4.20; 10.5.11; 10.6.3  
Percona 5.7.33; 8.0.23
:::

Jika tindakan [OOM killer](https://docs.dewacloud.com/docs/oom-killer-issues/) membuat container tidak berfungsi (karena beberapa proses kritis dihentikan), kami secara otomatis me-restart node ini dan, karena pemulihan pintar, mengurangi nilai parameter _**innodb_buffer_pool_size**_. Jika situasi ini terjadi lagi, siklus pengurangan yang disebutkan akan diulangi.

Anda dapat menyesuaikan [environment variables](https://docs.dewacloud.com/docs/environment-variables/) untuk menyesuaikan perilaku sistem terkait masalah OOM kills:

  * _**OOM_DETECTION_DELTA**_ \- mengatur periode (dua detik secara default) bagi platform untuk menganalisis log **/var/log/messages** setelah setiap restart layanan untuk memutuskan apakah itu disebabkan oleh OOM killer
  * _**OOM_ADJUSTMENT**_ \- mendefinisikan nilai dalam %, MB, GB (_10%_ secara default) bahwa parameter _innodb_buffer_pool_size_ saat ini harus dikurangi setelah setiap restart yang disebabkan oleh OOM
  * _**MAX_OOM_REDUCE_CYCLES**_ \- mengonfigurasi jumlah siklus maksimum untuk pengurangan _innodb_buffer_pool_size_ (_5_ kali secara default)

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/auto-configuration-overview/02-oom-recovery-variables.png" alt="OOM recovery variables" width="70%"/>

Tingkatkan batas cloudlets untuk container untuk mereset penyesuaian yang disebabkan oleh pemulihan OOM.

## Baca Juga{#whats-next}

  * [Database Auto-Configuration](https://docs.dewacloud.com/docs/database-auto-configuration/)
  * [PHP Auto-Configuration](https://docs.dewacloud.com/docs/php-auto-configuration/)
  * [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
  * [Environment Variables](https://docs.dewacloud.com/docs/environment-variables/)