---
sidebar_position: 2
slug: /php-versions
title: PHP Versions
---
# PHP Versions

Dalam batasan PHP hosting di platform, versi mesin PHP berikut didukung:

  * _PHP 8.0.30_
  * _PHP 8.1.29_
  * _PHP 8.2.23_
  * _PHP 8.3.11_

Daftar terkini rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara teratur (mingguan).

Anda dapat memilih versi yang Anda butuhkan saat pembuatan environment dan dengan mudah [beralih di antaranya](<https://docs.dewacloud.com/docs/#switch>) setelahnya melalui topology wizard. Alur kerjanya adalah sebagai berikut:

1\. Klik tombol **New Environment** di panel atas dashboard untuk membuka frame _Environment Wizard_.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-versions/01-new-environment.png" alt="new environment" width="70%"/>

2\. Arahkan ke tab bahasa _**PHP**_ dan pilih server aplikasi yang diinginkan. Pilih versi mesin yang diinginkan melalui daftar drop-down kedua di panel tengah.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-versions/02-php-environment-wizard.png" alt="PHP environment wizard" width="100%"/>

Tentukan batas sumber daya, pilih [region](<https://docs.dewacloud.com/docs/environment-regions/>) yang diinginkan, ketik nama environment Anda (atau biarkan default) dan klik tombol **Create**.

:::tip 
Untuk informasi lebih lanjut tentang spesifikasi hosting PHP di platform dan kemungkinan yang disediakannya, lihat dokumen PHP Developer’s Center.
:::

3\. Untuk mengubah versi PHP untuk environment yang sudah ada, klik ikon **Redeploy containers** di samping layer yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-versions/03-php-redeploy-button.png" alt="PHP redeploy button" width="100%"/>

4\. Pilih versi mesin yang diperlukan dalam daftar _Tag_ dari frame yang dibuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-versions/04-php-redeploy-dialog.png" alt="PHP redeploy dialog" width="60%"/>

Klik **Redeploy** untuk mengonfirmasi perubahan.

:::warning
Dalam kasus beralih versi mesin ke PHP 7 untuk kontainer PHP legacy, Anda mungkin perlu [mendefinisikan ulang](<https://docs.dewacloud.com/docs/php-extensions/#activate-extension>) modul PHP yang termasuk secara manual, karena sebagian dari mereka telah diubah menjadi dinamis (yaitu untuk diaktifkan hanya jika diperlukan) dalam batasan rilis [PaaS 4.3](<https://www.virtuozzo.com/application-platform-docs/release-notes-43/#php-modules-list-refactoringnbsp43--44>).
:::

## Baca Juga{#whats-next}

  * [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [PHP App Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)
  * [PHP Tutorials](<https://docs.dewacloud.com/docs/php-tutorials/>)