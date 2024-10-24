---
sidebar_position: 2
slug: /migration-between-regions
title: Migration between Regions
---
# Environment Migration between Regions

Dalam batasan pendekatan **[environment regions](<https://docs.dewacloud.com/docs/environment-regions/>)** yang beragam, lokasi proyek yang dipilih awalnya dapat dengan mudah diubah menggunakan opsi migrasi (tentunya, jika Anda memiliki akses ke beberapa environment regions). Ini adalah alat yang sangat kuat, yang dapat membantu Anda mendapatkan manfaat dalam hal biaya dan produktivitas - misalnya, Anda dapat memilih perangkat keras yang lebih murah untuk tahap pengembangan/pengujian dan kemudian memindahkan aplikasi siap-produksi ke perangkat keras dengan parameter terbaik, tepat sebelum peluncuran.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/01-environment-migration-between-regions.gif" alt="environment migration between regions" max-width="100%"/>

:::note 
Ketersediaan opsi migrasi, serta ketersediaannya untuk setiap region environment tertentu, bergantung pada pengaturan penyedia hosting Anda.
:::

Jadi, untuk memigrasikan environment yang ada ke region lain, lakukan salah satu dari berikut ini:

  * klik tombol **Change environment topology** dan pilih opsi _**Migrate**_ dalam daftar region di atas

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/02-environment-migrate-wizard.png" alt="environment migrate wizard" max-width="100%"/>

  * pilih tombol **Settings** di sebelah environment yang diinginkan dan beralih ke opsi menu _**Migration**_

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/03-environment-settings.png" alt="environment settings" max-width="100%"/>

Dalam kedua kasus, Anda akan melihat bingkai yang sama terbuka dengan **Current region** dari environment yang dipilih dinyatakan dan opsi untuk memilih **Target region**, yaitu perangkat keras yang harus di-migrasikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/04-environment-migration-settings.png" alt="environment migration settings" max-width="100%"/>

:::note 
Kebijakan harga di berbagai environment regions dapat bervariasi berdasarkan parameternya dan diterapkan secara otomatis setelah relokasi selesai, sehingga disarankan untuk mengenali biaya yang sesuai di muka - informasi sebenarnya dapat ditemukan menggunakan tautan yang sesuai, yang disediakan dalam tip di bawah selector Target region.
:::

Turunkan tab hingga bagian _**Live migration**_ ditempatkan, baik dengan switcher khusus yang ditampilkan atau menyediakan beberapa info tambahan, tergantung pada target region yang dipilih. Di sini Anda dapat menentukan jenis migrasi mana (di antara dua yang disediakan) yang harus digunakan:

  * **[live migration](<https://docs.dewacloud.com/docs/#live-migration>)** \- tersedia hanya antara environment regions, ditandai dengan label _**LM**_ khusus dalam daftar (biasanya, hanya untuk region dalam datacenter yang sama)
  * **[offline migration](<https://docs.dewacloud.com/docs/#offline-migration>)** \- dapat digunakan untuk semua environment regions

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/05-select-target-region.png" alt="select target region" max-width="100%"/>

Tentukan semua kondisi yang diperlukan dan klik **Verify & Migrate** di bagian bawah untuk memulai relokasi. Konfirmasikan keputusan Anda dalam frame pop-up yang muncul.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/06-confirm-environment-migration.png" alt="confirm environment migration" max-width="100%"/>

Setelah migrasi selesai, pesan informasi yang sesuai akan muncul di dashboard dan label region di sebelah environment akan berubah. Selain itu, Anda akan menerima email pemberitahuan dengan detail migrasi (seperti durasinya untuk setiap container dan perubahan apa pun yang terjadi dengan parameter mereka akibat proses ini).

Dan di bawah ini kita akan mempertimbangkan kedua mode migrasi secara lebih rinci.

## Live Migration{#live-migration}

Dalam daftar **Target region** Anda bisa melihat label _**LM**_ khusus yang ditampilkan di sebelah region tertentu - ini digunakan untuk menandai ketersediaan opsi **Live migration**.

Setelah memilih region tersebut sebagai target, switcher _Live migration_ akan muncul di bawahnya (dalam keadaan diaktifkan secara default).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/07-live-migration-switcher.png" alt="live migration switcher" max-width="100%"/>

Jika memilih jenis migrasi ini, relokasi environment akan dilakukan secara implisit, yaitu tanpa me-restart container dan konfigurasi tambahan yang diperlukan, sehingga pengguna aplikasi Anda tidak akan menghadapi gangguan.

:::note 
Meskipun manfaat dari live (online) migration sudah jelas, ingatlah bahwa ini tidak cocok untuk semua kasus. Kami sangat menyarankan Anda untuk menghindari penggunaan live migration containers untuk: environments/containers dengan beban tinggi - downtime tak terduga dengan kesalahan “502 - environment stopped” (biasanya singkat, di bawah 10 detik)active database containers,Big Data - kemungkinan kerusakan atau hilangnya data yang sedang diproses karena sifat dari online migration dan pembekuan koneksi jaringan/operasi berhubungan I/O disk selama proses migrasi 
:::

Jika mode [offline](<https://docs.dewacloud.com/docs/#offline-migration>) diperlukan - cukup matikan switcher yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/08-disable-live-migration.png" alt="disable live migration" max-width="100%"/>

Dalam hal ini, environment dengan semua container di dalamnya akan menjadi tidak tersedia untuk seluruh proses relokasi dan melanjutkan pekerjaan normalnya, setelah operasi ini selesai, tanpa penyesuaian manual tambahan yang dibutuhkan.

## Offline Migration{#offline-migration}

Ketika opsi _live migration_ tidak tersedia (karena memindahkan environment ke datacenter lain) atau jika dinonaktifkan secara manual, mode offline digunakan. Berbeda dengan yang online, selama relokasi semacam itu, environment akan dimatikan hingga akhir proses ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-regions/migration-between-regions/09-live-migration-not-available.png" alt="live migration not available" max-width="100%"/>

Selain itu, jika jenis migrasi ini adalah satu-satunya yang tersedia, beberapa pengaturan environment, seperti alamat IP dari node dan, opsional, nama domain yang ditetapkan, akan diubah. Oleh karena itu, setelah migrasi selesai, beberapa konfigurasi manual mungkin diperlukan untuk mengembalikan operabilitas normal dari aplikasi yang dipindahkan - semua informasi yang diperlukan akan dikirimkan kepada Anda melalui email.

Jelas, berdasarkan pro dan kontra yang disebutkan di atas, _live migration_ adalah opsi yang jauh lebih disukai (jika sesuai untuk kasus penggunaan Anda).

## Baca Juga{#whats-next}

  * [Multiple Environment Regions](<https://docs.dewacloud.com/docs/environment-regions/>)
  * [Environment Export and Import](<https://docs.dewacloud.com/docs/environment-export-import/>)
  * [Environment Transferring](<https://docs.dewacloud.com/docs/environment-transferred/>)
  * [CLI Environment Migration](<https://docs.dewacloud.com/docs/cli-environment-migration/>)