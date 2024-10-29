---
sidebar_position: 2
slug: /update-new-relic
title: Update New Relic
---

# Cara Memperbarui Add-on Pemantauan New Relic yang Terpasang

Untuk memastikan aplikasi Anda memanfaatkan fitur terbaru dari pemantauan **[New Relic](https://docs.dewacloud.com/docs/new-relic-installation)**, platform ini menyediakan opsi pembaruan bawaan untuk New Relic add-on. Fitur ini memungkinkan Anda memeriksa pembaruan dan menerapkannya dengan cepat tanpa intervensi manual. Berikut adalah cara untuk memperbarui agen New Relic Anda dalam beberapa langkah mudah.

## Pembaruan Agen New Relic

1. **Akses Bagian Add-ons**:
   - Buka bagian **Add-ons** untuk node tempat New Relic terpasang dengan mengklik tombol **Add-ons** di sebelah node di dashboard Anda.

2. **Perbarui Agen New Relic**:
   - Temukan add-on New Relic dan klik ikon roda gigi di pojok atas.
   - Dari daftar drop-down, pilih opsi **Update Agent**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-update/01.png" alt="new relic update" width="100%"/>

3. **Konfirmasi Pembaruan**:
   - Kotak dialog akan muncul meminta konfirmasi. Klik **Yes** untuk melanjutkan pengecekan pembaruan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-update/02.png" alt="check new relic updates" width="50%"/>

4. **Unduh dan Pasang**:
   - Platform akan secara otomatis mengunduh dan memasang file yang diperlukan jika pembaruan tersedia.

   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-update/03.png" alt="new relic update" width="100%"/>

5. **Restart Application Server**:
   - Setelah pembaruan selesai, pemberitahuan akan meminta Anda untuk me-restart server aplikasi agar perubahan diterapkan. Restart node Anda dengan mengklik tombol **Restart** di sebelah server aplikasi Anda.

   ![restart nodes](https://assets.dewacloud.com/dewacloud-docs/application_settings/monitoring-with-new-relic/new-relic-update/04.png)

   :::note
   Jika proyek Anda berjalan pada satu server aplikasi, me-restart node akan menyebabkan downtime sementara. Namun, jika server aplikasi Anda **diperluas secara horizontal**, downtime-nya akan diminimalkan, karena node akan di-restart secara berurutan.
   :::

6. **Periksa Versi yang Diperbarui**:
   - Untuk server **Java**, Anda dapat memeriksa versi saat ini dari agen dalam file yang terletak di direktori tempat file add-on disimpan.
   - Untuk server **PHP**, versinya dapat diverifikasi melalui output `phpinfo()`.

Dengan mengikuti langkah-langkah ini, Anda dapat memastikan bahwa add-on New Relic Anda selalu mutakhir dan siap untuk memberikan fitur pemantauan terbaru untuk aplikasi Anda.

## Baca Juga

- [Integrasi Pemantauan New Relic](https://docs.dewacloud.com/docs/new-relic-installation/)
- [Penskalaan Horizontal Otomatis](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
- [Marketplace](https://docs.dewacloud.com/docs/marketplace/)
- [Koleksi JPS](https://github.com/jelastic-jps)
- [Statistik Aplikasi](https://docs.dewacloud.com/docs/statistics-monitoring/)