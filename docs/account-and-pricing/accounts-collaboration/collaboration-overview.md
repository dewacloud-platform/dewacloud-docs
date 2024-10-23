---
sidebar_position: 1
slug: /collaboration-overview
title: Overview Kolaborasi
---

# Kolaborasi Akun

Setiap proyek besar adalah hasil dari upaya bersama beberapa orang. Namun, anggota tim yang berbeda bekerja dalam satu akun tidaklah efisien dan dapat menyebabkan berbagai masalah (termasuk masalah keamanan). Platform ini menyediakan fitur _**kolaborasi akun**_ yang andal, yang sangat memfasilitasi pengembangan dan pengelolaan bersama, memastikan kolaborasi yang sukses dan efisien.

Ide utamanya cukup sederhana - satu pengguna (_akun utama_) menjadi tuan rumah semua environment yang diperlukan dan dapat berbagi komponen yang diperlukan dengan izin yang diperlukan kepada orang lain (_anggota kolaborasi_). Manfaat paling menonjol dari proses ini adalah pemanfaatan sumber daya yang efisien dan fleksibilitas manajemen yang ekstrem. Tidak perlu membuat duplikat environment untuk anggota yang berbeda - kolaborasi platform memungkinkan berbagi instances yang diperlukan kepada sebanyak mungkin pengguna yang diperlukan. Kontrol penuh atas izin manajemen yang dibagikan membuat fitur ini cocok untuk sebagian besar kasus penggunaan yang ada.

![account collaboration scheme](#)

**Akun utama** memiliki akses penuh ke semua environment yang di-hosting, terlepas dari apakah mereka dibagikan atau tidak (termasuk yang dibuat oleh anggota kolaborasi). Akun ini bertanggung jawab untuk mengelola kolaborasi dan anggotanya - mengundang pengguna, menyesuaikan komponen yang dibagikan, menentukan [peran dan izin](https://docs.dewacloud.com/docs/collaboration-roles-policies/), dll. Namun, perhatikan bahwa semua biaya untuk environment yang dibagikan (termasuk tindakan yang dilakukan oleh kolaborator) dikenakan pada akun ini.

**Anggota kolaborasi** adalah akun yang menerima undangan kolaborasi dari _akun utama_. Anggota tidak dikenakan biaya untuk environment yang dibagikan dan dapat bekerja dengan environment tersebut seperti halnya dengan environment biasa. Namun, daftar tindakan yang diizinkan didefinisikan dan dikelola oleh akun utama (atau kolaborator lain dengan izin yang sesuai).

Jika diberikan izin yang cukup, seorang anggota dapat membuat environment baru pada akun kolaborasi utama. Dalam hal ini, batasan ([kuota](https://docs.dewacloud.com/docs/quotas-system/)) dari akun utama akan dipertimbangkan, memungkinkan untuk melewati batasan apa pun pada akun anggota. Sekali lagi, semua biaya untuk penggunaan environment akan dikenakan pada akun utama.

:::warning
Setelah meninggalkan kolaborasi, anggota tidak akan lagi memiliki akses ke environment yang dibagikan pada akun utama, termasuk yang dibuat oleh mereka sendiri.
:::

## Baca Juga{#whats-next}

* [Peran & Kebijakan Kolaborasi](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
* [Buat Kolaborasi](https://docs.dewacloud.com/docs/collaboration-create/)
* [Pengalaman Pengguna Kolaborasi](https://docs.dewacloud.com/docs/collaboration-user-experience/)
* [Bagikan Environment](https://docs.dewacloud.com/docs/share-environment/)