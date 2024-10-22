---
sidebar_position: 1
slug: /collaboration-overview
title: Collaboration Overview
---
# Kolaborasi Akun

Setiap proyek besar adalah hasil dari upaya bersama banyak orang. Namun, anggota tim yang berbeda bekerja dalam satu akun bukanlah alur kerja yang efisien dan dapat menyebabkan berbagai masalah (termasuk masalah keamanan). Platform ini menyediakan fitur _**kolaborasi akun**_ yang andal dan sangat memudahkan pengembangan dan manajemen bersama, memastikan kolaborasi yang sukses dan efisien.

Ide dasarnya cukup sederhana - satu pengguna (_akun utama_) mengelola semua environment yang diperlukan dan dapat membagikan komponen yang diperlukan dengan izin yang diperlukan kepada orang lain (_anggota kolaborasi_). Manfaat paling menonjol dari proses ini adalah pemanfaatan sumber daya yang efisien dan fleksibilitas manajemen yang luar biasa. Tidak perlu membuat duplikat environment untuk anggota yang berbeda - kolaborasi platform memungkinkan berbagi instance yang diperlukan kepada sebanyak mungkin pengguna yang dibutuhkan. Kontrol penuh atas izin manajemen berbagi menjadikan fitur ini cocok untuk kebanyakan kasus penggunaan yang ada.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-overview/01-account-collaboration-scheme.png" alt="skema kolaborasi akun" width="50%"/>

**Akun utama** memiliki akses penuh ke semua environment yang dikelola terlepas apakah environment tersebut dibagikan atau tidak (termasuk yang dibuat oleh anggota kolaborasi). Akun ini bertanggung jawab untuk mengelola kolaborasi dan anggotanya - mengundang pengguna, menyesuaikan komponen yang dibagikan, menentukan [peran dan izin](https://docs.dewacloud.com/docs/collaboration-roles-policies/), dll. Namun, perlu diketahui bahwa semua biaya untuk environment yang dibagikan (termasuk tindakan yang dilakukan oleh kolaborator) akan dikenakan pada akun ini.

**Anggota kolaborasi** adalah akun yang telah menerima undangan kolaborasi dari _akun utama_. Anggota tidak dikenakan biaya untuk environment yang dibagikan dan dapat bekerja dengan mereka seperti dengan environment biasa. Namun, daftar tindakan yang diizinkan ditentukan dan dikelola oleh akun utama (atau kolaborator lain dengan izin yang sesuai).

Jika diberikan izin yang memadai, seorang anggota dapat membuat environment baru pada akun kolaborasi utama. Dalam kasus seperti itu, batasan ([kuota](https://docs.dewacloud.com/docs/quotas-system/)) dari akun utama akan dipertimbangkan, memungkinkan untuk melewati batasan apapun dari akun anggota. Sekali lagi, semua biaya untuk penggunaan environment akan dikenakan pada akun utama.

:::warning
Setelah keluar dari kolaborasi, anggota tidak akan lagi memiliki akses ke environment yang dibagikan di akun utama, termasuk yang dibuat oleh mereka.
:::

## Baca Juga{#whats-next}

  * [Peran & Kebijakan Kolaborasi](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
  * [Buat Kolaborasi](https://docs.dewacloud.com/docs/collaboration-create/)
  * [Pengalaman Pengguna Kolaborasi](https://docs.dewacloud.com/docs/collaboration-user-experience/)
  * [Bagikan Environment](https://docs.dewacloud.com/docs/share-environment/)