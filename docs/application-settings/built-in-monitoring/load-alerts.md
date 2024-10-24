---
sidebar_position: 3
slug: /load-alerts
title: Load Alerts
---
# Load Alerts

Ketika Anda membuat environment, Anda menetapkan batas cloudlet untuk setiap node. Batas ini memastikan bahwa sumber daya Anda diatur dan membantu mengelola biaya. Namun, jika batasannya terlalu rendah dan lalu lintas aplikasi Anda tumbuh, ini dapat menyebabkan masalah kinerja akibat kekurangan sumber daya.

Untuk mencegah situasi seperti itu, Anda dapat mengonfigurasi **Load Alerts** untuk memberi tahu Anda secara otomatis ketika konsumsi sumber daya melebihi atau di bawah ambang batas yang ditetapkan. Peringatan ini memberikan notifikasi email tentang perubahan beban aplikasi Anda, membantu Anda mengelola environment Anda secara proaktif.

### Preconfigured Load Triggers

Mulai dari PaaS 4.6, container baru secara otomatis dikirimkan dengan trigger load yang sudah dikonfigurasi sebelumnya, memastikan Anda menerima notifikasi tentang penggunaan sumber daya secara default. Ini dapat disesuaikan atau dinonaktifkan jika diperlukan.

## Creating a Load Alert{#creating-a-load-alert}

Untuk mengonfigurasi alert kustom, ikuti langkah-langkah ini:

1. **Open Environment Settings**:
   - Masuk ke platform dashboard dan klik tombol **Settings** untuk environment yang diinginkan.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/1.png" alt="load alerts 1" width="100%"/>

2. **Navigate to Load Alerts**:
   - Di tab pengaturan, pergi ke **Monitoring > Load Alerts**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/2.png" alt="load alerts 2" width="100%"/>

3. **Managing Alerts**:
   - Anda akan melihat daftar trigger yang sudah dikonfigurasi (jika tersedia). Trigger ini memantau sumber daya seperti _RAM_, _CPU_, _Disk_, _Inodes_, dan _Network Traffic_ dan memberi tahu Anda ketika konsumsi mendekati batas.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/3.png" alt="load alerts 3" width="100%"/>

   Anda dapat menggunakan toolbar untuk:
   - **Add** alert baru
   - **Edit**, **Remove**, atau **Enable/Disable** alert yang ada
   - **Refresh** daftar alerts

4. **Add New Alert**:
   - Klik **Add** untuk membuat alert baru. Di jendela **Add Alert**, konfigurasikan pengaturan berikut:
     - **Name**: Tetapkan nama untuk alert Anda.
     - **Nodes**: Pilih jenis node environment untuk dipantau.
     - **Whenever**: Pilih sumber daya untuk dipantau (misalnya, _Cloudlets_, _Memory_, _CPU_, _Network_, _Disk I/O_).
     - **Is**: Tentukan kondisi untuk memicu alert (misalnya, di atas atau di bawah persentase atau Mbps tertentu untuk pemantauan jaringan).
     - **For at least**: Tentukan periode waktu di mana trigger harus tetap diaktifkan sebelum mengaktifkannya.
     - **Notification frequency**: Atur jeda waktu antara notifikasi berulang.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/4.png" alt="load alerts 4" width="70%"/>

   Setelah dikonfigurasi, klik **Add** untuk menyimpan alert.

5. **Alert List**:
   - Alert yang baru dibuat akan muncul dalam daftar dengan nama yang telah Anda tetapkan. Anda dapat mengelola alert menggunakan opsi yang tersedia di toolbar.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/5.png" alt="load alerts 5" width="100%"/>

6. **Email Notifications**:
   - Ketika penggunaan sumber daya melebihi ambang batas yang ditetapkan, Anda akan menerima notifikasi email dengan detail tentang beban, rekomendasi, dan tautan untuk menyesuaikan batasan scaling.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/6-load-alert-email-notification.png" alt="load alert email notification" width="60%"/>


## Viewing Trigger Execution History{#viewing-trigger-execution-history}

Untuk memeriksa riwayat eksekusi alert:

1. **Open Event History**:
   - Navigasikan ke **Monitoring > Events History**. Tipe notifikasi _Load Alerts_ akan dipilih secara default.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/7.png" alt="load alerts 7" width="100%"/>

2. **Specify Time Period**:
   - Gunakan daftar _Period_ untuk memilih interval waktu yang Anda inginkan untuk melihat alerts (_day_, _week_, _month_, atau _custom_).

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/8.png" alt="load alerts 8" width="100%"/>

3. **View Alerts**:
   - Anda akan melihat daftar semua alerts yang diaktifkan dalam periode waktu yang dipilih, menunjukkan tanggal, nama alert, tipe node, kondisi, dan apakah alert berhasil.

4. **Alert Details**:
   - Klik alert untuk melihat detail tambahan, seperti penggunaan sumber daya pada saat diaktifkan dan tindakan yang diambil (misalnya, mengirim notifikasi).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/load-alerts/9.png" alt="load alerts 9" width="40%"/>

Ini memungkinkan Anda untuk memastikan bahwa aplikasi Anda dipantau dengan benar dan untuk mengambil tindakan sebelum batas sumber daya apa pun mempengaruhi kinerja.

## Baca Juga

- [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
- [Statistics](https://docs.dewacloud.com/docs/view-app-statistics/)
- [Security of App with NGINX Balancer](https://docs.dewacloud.com/docs/nginx-balancer-security/)