---
sidebar_position: 5
slug: /environment-migration
title: Environment Migration
---
# CLI Tutorial: Environment Migration

Terkadang, mungkin diperlukan untuk memindahkan aplikasi Anda ke [environment region](https://docs.dewacloud.com/docs/environment-regions/) lain dengan kondisi dan\atau lokasi yang lebih baik atau, misalnya, mendistribusikan beberapa salinan [cloned](https://docs.dewacloud.com/docs/cli-clone-environment) environment di antara set perangkat keras yang berbeda untuk mencapai ketersediaan yang lebih tinggi. Untuk melakukan ini dari jarak jauh, Anda perlu menjalankan metode _**migrate**_ CLI yang sesuai melalui terminal Anda. Jadi, mari kita bahas ini lebih detail.

1\. Pertama-tama, Anda harus mendapatkan daftar region yang tersedia di Platform. Untuk itu, perintah _**getregions**_ harus digunakan, dengan filter pencarian yang sesuai diterapkan untuk memperpendek output dan menyederhanakan persepsi:

```
~/jelastic/environment/control/getregions | sed -rne '/(uniqueName|isEnabled|displayName)/{/Name/,/isEnabled/p}'
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-migration/environment-migration-1.png" alt="CLI get regions info" width="100%"/>

Anda akan melihat daftar environment region yang tersedia untuk akun Anda (yaitu di mana _“isEnabled”_ bernyatakan _true_), dengan nama mereka di dashboard (_displayName_) dan identifier unik (_uniqueName_). Di sini, parameter terakhir adalah yang perlu Anda ingat.

:::note
Tingkat daftar pertama menampilkan info global tentang pusat data, sementara parameter region yang sebenarnya Anda perlukan untuk mengambil operasi lebih lanjut ditampilkan pada tingkat berikutnya (garis seperti itu digeser ke kanan). Untuk membuatnya lebih jelas, nilai-nilai uniqueName yang sesuai dilingkari dalam gambar di atas.
:::

2\. Juga merupakan praktik yang baik untuk memeriksa kemungkinan migrasi sebelum menjalankan operasi itu sendiri. Gunakan metode CLI _**CheckMigrationPossibility**_ sederhana yang sesuai untuk ini:

```
~/jelastic/environment/control/checkmigrationpossibility --envName {env_name} --hardwareNodeGroup {region_id}
```

Di sini:

  * `{env_name}` \- nama dari environment yang ingin Anda pindahkan
  * `{region_id}` \- identifier unik dari target environment region dari langkah sebelumnya

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-migration/environment-migration-2.png" alt="CLI check migration possibility" width="100%"/>

3\. Sekarang Anda memiliki semua data yang diperlukan untuk memanggil prosedur migrasi:

```
~/jelastic/environment/control/migrate --envName {env_name} --hardwareNodeGroup {region_id} --isOnline {true/false}
```

Satu-satunya parameter baru di sini adalah _isOnline_, yang dapat diatur sebagai _**{true/false}**_ untuk menggunakan mode migrasi [live](https://docs.dewacloud.com/docs/environment-regions-migration/#live-migration) atau [offline](https://docs.dewacloud.com/docs/environment-regions-migration/#offline-migration) sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-migration/environment-migration-3.png" alt="CLI migrate environment" width="100%"/>

Sebentar lagi (waktu migrasi yang tepat dapat bervariasi tergantung pada konten environment Anda) operasi akan selesai dan aplikasi Anda akan berhasil dipindahkan.

## Baca Juga{#whats-next}

Periksa panduan di bawah ini untuk contoh tambahan metode CLI:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps/)