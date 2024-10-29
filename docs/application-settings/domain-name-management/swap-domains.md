---
sidebar_position: 2
slug: /swap-domains
title: Swap Domains
---
# Swap Domains

Saat bekerja dengan proyek apa pun, Anda pada akhirnya akan menghadapi kebutuhan untuk memperbarui atau memodifikasinya. Tentu saja, sebelum menerapkan perubahan di lingkungan produksi, Anda harus mengujinya secara menyeluruh. Dengan platform ini, Anda dapat melakukannya di lingkungan terpisah, dan setelah versi baru siap, Anda cukup **swap domains** antara proyek pengembangan/pengujian dan produksi untuk mengganti versi secara instan.

Dengan memanfaatkan fungsionalitas ini, Anda dapat melewati langkah-langkah peluncuran pembaruan di lingkungan produksi (menghindari konfigurasi tambahan dan kemungkinan downtime) dan secara bersamaan mempertahankan versi sebelumnya dari aplikasi Anda untuk rollback cepat jika diperlukan.

:::warning
Fitur **Swap Domains** hanya berfungsi dengan domain yang sudah diikat. Jika Anda perlu menukar URL untuk lingkungan dengan IP publik sebagai titik masuk (terpasang pada server aplikasi atau load balancer), gunakan metode **swap external IPs** atau sesuaikan catatan yang sesuai di pendaftar domain Anda.
:::

Mari kita lihat bagaimana ini bekerja.

## Membuat Lingkungan Pengujian{#create-test-environment}

1\. Temukan lingkungan produksi Anda dengan aplikasi yang ingin Anda perbarui. Dalam contoh kami, lingkungan ini disebut _production_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/01-open-production-environment.png" alt="open production environment" width="100%"/>

:::warning
Lingkungan ini harus memiliki domain kustom yang terikat (misalnya _production.com_) yang nantinya akan Anda tukar dengan lingkungan lain.
:::

2\. Klik tombol **Open in Browser** atau akses melalui domain kustom untuk melihat aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/03-new-production-environment.png" alt="new production environment" width="100%"/>

3\. [Clone lingkungan ini](https://docs.dewacloud.com/docs/clone-environment/) untuk secara otomatis membuat salinan identik yang mencakup semua paket yang di-deploy, database, dll. Beri nama _testing_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/04-open-testing-environment.png" alt="open testing environment" width="100%"/>

4\. Klik tombol **Open in Browser** untuk lingkungan kloningan Anda untuk memastikan semuanya berjalan dengan baik.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/05-new-testing-environment.png" alt="new testing environment" width="100%"/>

Sekarang, Anda dapat menambahkan fitur baru, menyesuaikan pengaturan, menerapkan pembaruan, dll. Semua tanpa memengaruhi lingkungan asli.

## Memperbarui Aplikasi{#update-application}

1\. Lakukan perubahan yang diperlukan (baik langsung melalui dashboard atau dengan melakukan deploy versi proyek baru) ke lingkungan kloningan. Panduan dokumentasi berikut dapat membantu Anda dengan penyesuaian proyek Anda:

  * [Panduan Deployment](https://docs.dewacloud.com/docs/deployment-guide/)
  * [Akses SSH](https://docs.dewacloud.com/docs/ssh-access/)
  * [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/06-edit-testing-environment.png" alt="edit testing environment" width="100%"/>

2\. Klik tombol **Open in Browser** untuk proyek yang diperbarui untuk menguji perubahan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/07-edited-testing-environment.png" alt="edited testing environment" width="100%"/>

:::note
Fungsionalitas **Swap Domain** akan berfungsi bahkan jika hanya satu lingkungan yang memiliki domain yang terikat. Namun, untuk pengujian yang lebih menyeluruh, Anda dapat **mengikat domain kustom** ke lingkungan kloningan Anda juga.
:::

## Swap Domains{#swap-domains}

Setelah menguji pembaruan, langkah berikutnya adalah menukar domain lingkungan _production_ dan _testing_.

:::tip
Jika hanya satu dari lingkungan yang memiliki domain kustom terikat, fungsionalitas **Swap Domains** akan mentransfernya ke lingkungan kedua.
:::

1\. Buka **Settings** untuk salah satu lingkungan Anda (misalnya lingkungan _production_). Bagian **Custom Domains** yang diperlukan akan terbuka secara otomatis.

2\. Di subbagian **Swap Domains**, pilih lingkungan dengan mana Anda ingin menukar domain (lingkungan _testing_ dalam kasus kami) dan klik tombol **Swap**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/10-swap-production-and-testing-domains.png" alt="swap production and testing domains" width="100%"/>

:::tip
Anda dapat memeriksa domain kustom yang terikat ke lingkungan saat ini di subbagian **Domain Binding** dan untuk lingkungan target di subbagian **Swap Domains**.
:::

3\. Sekarang, Anda dapat menavigasi ke domain kustom lingkungan produksi Anda (_production.com_ dalam kasus kami) dan melihat bahwa aplikasi Anda telah diperbarui.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/swap-domains/11-edited-production-environment.png" alt="edited production environment" width="100%"/>

If you experience any issues when swapping domains, you can seek assistance from our technical experts on [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Multiple Domains for Tomcat](https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)
  * [Application Lifecycle](https://docs.dewacloud.com/docs/application-lifecycle/)