---
sidebar_position: 3
slug: /updating-to-mongodb-7
title: Upgrading to MongoDB 6/7
---
# Upgrading to MongoDB 6/7

Karena perubahan arsitektural yang signifikan antara **MongoDB 3/4** dan **MongoDB 6/7**, alur upgrade reguler melalui [redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>) tidak memungkinkan. Dalam panduan ini, kami akan menunjukkan bagaimana upgrade semacam itu dapat dilakukan dengan memanfaatkan add-on **Backup/Restore**.

:::note
Upgrade dari MongoDB 6 ke 7 dapat dilakukan melalui redeployment seperti biasa (tanpa langkah-langkah yang dijelaskan dalam panduan ini). Namun, downgrade tidak didukung.
:::

1\. Install add-on _**Backup/Restore**_ untuk instance MongoDB lama Anda. Misalnya, temukan di Marketplace atau impor dari [GitHub](<https://github.com/jelastic-jps/database-backup-addon>):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-1.png" alt="backup add-on" max-width="100%"/>

2\. Pergi ke bagian **Add-Ons** untuk database MongoDB lama Anda. Di sini, Anda bisa membuat backup secara manual dengan tombol **Backup Now**. Kami merekomendasikan melakukannya tepat sebelum langkah restorasi untuk memastikan tidak ada atau minimal kehilangan data.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-2.png" alt="backup legacy MongoDB" max-width="100%"/>

3\. Buat lingkungan baru dengan instance MongoDB 6/7 (topologi yang sama direkomendasikan). Setelah dibuat, install add-on _**Backup/Restore**_ untuknya juga dan klik opsi **Restore**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-3.png" alt="restore on MongoDB 7" max-width="100%"/>

4\. Pilih untuk _restore from_ lingkungan dengan instance MongoDB lama dan pilih _backup_ terbaru dalam formulir _**Restore Backup**_ yang terbuka. Klik tombol **Restore** dan konfirmasi melalui pop-up.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-4.png" alt="restore backup" max-width="100%"/>

5\. Setelah proses selesai, sambungkan ke database baru melalui panel admin atau SSH untuk memverifikasi bahwa data khusus Anda sudah ada.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-5.png" alt="mongo express admin panel" max-width="100%"/>

Itulah semuanya! Sekarang, Anda hanya perlu mengonfigurasi ulang aplikasi Anda untuk bekerja dengan database baru (seperti memperbarui string koneksi dan kredensial).

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)