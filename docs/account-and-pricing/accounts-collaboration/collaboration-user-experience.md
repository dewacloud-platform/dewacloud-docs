---
sidebar_position: 4
slug: /collaboration-user-experience
title: Pengalaman Pengguna Kolaborasi
---

# Pengalaman Pengguna Kolaborasi

Setelah [kolaborasi dibentuk](https://docs.dewacloud.com/docs/collaboration-create/), anggotanya dapat mulai bekerja dengan environment yang dibagikan. Dalam panduan ini, kita akan membahas semua keunikan dari proses ini.

1\. Environment yang dibagikan dapat dengan mudah dibedakan dari yang biasa melalui ikon khusus dan tag pemilik.

![shared environment](#)

2\. Anda dapat mengklik label nama pemilik di kolom **Tags** untuk dengan cepat memfilter environment yang dibagikan berdasarkan akun _utama_.

![environments filtered by owner](#)

3\. Pada tab **[Env Groups](https://docs.dewacloud.com/docs/environment-groups/) > Shared with Me**, Anda dapat melihat daftar lengkap environment dan grup yang dibagikan.

![shared environment groups](#)

:::warning
Anda tidak dapat menambahkan environment yang dibagikan ke grup pribadi Anda.
:::

Selain itu, seluruh pohon grup dapat terlihat ketika mengelola grup environment.

![managing environment groups](#)

4\. Proses pengelolaan environment yang dibagikan sama seperti untuk yang biasa. Namun, pemilik akun utama dapat membatasi beberapa opsi.

![restricted action for shared environment](#)

Anda dapat memeriksa [peran dan daftar kebijakan yang diizinkan](https://docs.dewacloud.com/docs/collaboration-roles-policies/) untuk sumber daya yang dibagikan di bagian **Settings > Shared with Me** akun.

![shared roles and policies](#)

:::tip
Anda dapat memeriksa peran untuk environment yang dibagikan tertentu dengan pergi ke bagian Settings > Collaboration. Secara default, anggota kolaborasi hanya dapat melihat diri mereka sendiri dan tidak dapat mengelola hak. Namun, kemungkinan ini dapat dibagikan oleh pemilik environment melalui peran dengan kebijakan Kolaborasi.
:::

5\. Manajer **Tasks** melacak semua tindakan yang dilakukan dengan environment yang dibagikan dan menyediakan ikon khusus untuk operasi yang inisiasi oleh akun lain. Arahkan kursor ke ikon ini untuk melihat email anggota kolaborasi yang sesuai.

![collaboration actions in tasks](#)

6\. Jika diberi kemampuan untuk membuat environment, Anda akan melihat dialog pemilihan _**Environment Owner**_ setelah mengklik tombol **New Environment** di bagian atas dashboard.

![select new environment owner](#)

Di sini, Anda dapat memilih akun dan grup untuk membuat environment Anda.

:::tip
Jika Anda memiliki izin untuk menginstal paket dari Marketplace, bidang Owner akan ditambahkan ke jendela instalasi.
:::

Batasan pemilik yang dipilih secara otomatis diterapkan ke wizard topologi atau jendela instalasi (untuk paket [yang diimpor](https://docs.dewacloud.com/docs/environment-import/) dan Marketplace).

![environment owner in wizard](#)

:::warning
Secara default, anggota kolaborasi tidak dapat melihat informasi harga, dan hanya data sumber daya yang disediakan dalam wizard topologi (seperti yang ditunjukkan pada gambar di atas). Namun, pemilik environment dapat membagikan kemungkinan ini melalui kebijakan Estimasi Biaya / Riwayat Penagihan.
Kolaborator menerima notifikasi email tentang tindakan (peringatan beban, penyesuaian otomatis, reset password, dll.) yang mereka inisiasi tetapi tidak tentang tindakan yang diambil oleh kolaborator lain atau pemilik akun.
:::

Ketika membuat atas nama akun yang berbeda, wizard topologi menampilkan pemilik environment yang sesuai di sudut kiri bawah.

## Baca Juga{#whats-next}

* [Gambaran Umum Kolaborasi](https://docs.dewacloud.com/docs/account-collaboration/)
* [Peran & Kebijakan Kolaborasi](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
* [Buat Kolaborasi](https://docs.dewacloud.com/docs/collaboration-create/)
* [Bagikan Environment](https://docs.dewacloud.com/docs/share-environment/)