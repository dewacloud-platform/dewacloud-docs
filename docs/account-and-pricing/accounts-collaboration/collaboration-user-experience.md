---
sidebar_position: 4
slug: /collaboration-user-experience
title: Pengalaman Pengguna Kolaborasi
---

# Pengalaman Pengguna Kolaborasi

Setelah [kolaborasi dibentuk](https://docs.dewacloud.com/docs/collaboration-create/), anggotanya dapat mulai bekerja dengan environment yang dibagikan. Dalam panduan ini, kita akan membahas semua keunikan dari proses ini.

1\. Environment yang dibagikan dapat dengan mudah dibedakan dari yang biasa melalui ikon khusus dan tag pemilik.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/01-shared-environment.png" alt="shared environment" max-width="100%"/>

2\. Anda dapat mengklik label nama pemilik di kolom **Tags** untuk dengan cepat memfilter environment yang dibagikan berdasarkan akun _utama_.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/02-environments-filtered-by-owner.png" alt="environments filtered by owner" max-width="100%"/>

3\. Pada tab **[Env Groups](https://docs.dewacloud.com/docs/environment-groups/) > Shared with Me**, Anda dapat melihat daftar lengkap environment dan grup yang dibagikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/03-shared-environment-groups.png" alt="shared environment groups" max-width="100%"/>

:::warning
Anda tidak dapat menambahkan environment yang dibagikan ke grup pribadi Anda.
:::

Selain itu, seluruh pohon grup dapat terlihat ketika mengelola grup environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/04-managing-environment-groups.png" alt="managing environment groups" max-width="100%"/>

4\. Proses pengelolaan environment yang dibagikan sama seperti untuk yang biasa. Namun, pemilik akun utama dapat membatasi beberapa opsi.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/05-restricted-action-for-shared-environment.png" alt="restricted action for shared environment" max-width="100%"/>

Anda dapat memeriksa [peran dan daftar kebijakan yang diizinkan](https://docs.dewacloud.com/docs/collaboration-roles-policies/) untuk sumber daya yang dibagikan di bagian **Settings > Shared with Me** akun.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/06-shared-roles-and-policies.png" alt="shared roles and policies" max-width="100%"/>

:::tip
Anda dapat memeriksa peran untuk environment yang dibagikan tertentu dengan pergi ke bagian Settings > Collaboration. Secara default, anggota kolaborasi hanya dapat melihat diri mereka sendiri dan tidak dapat mengelola hak. Namun, kemungkinan ini dapat dibagikan oleh pemilik environment melalui peran dengan kebijakan Kolaborasi.
:::

5\. Manajer **Tasks** melacak semua tindakan yang dilakukan dengan environment yang dibagikan dan menyediakan ikon khusus untuk operasi yang inisiasi oleh akun lain. Arahkan kursor ke ikon ini untuk melihat email anggota kolaborasi yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/08-collaboration-actions-in-tasks.png" alt="collaboration actions in tasks" max-width="100%"/>

6\. Jika diberi kemampuan untuk membuat environment, Anda akan melihat dialog pemilihan _**Environment Owner**_ setelah mengklik tombol **New Environment** di bagian atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/09-select-new-environment-owner.png" alt="select new environment owner" max-width="100%"/>

Di sini, Anda dapat memilih akun dan grup untuk membuat environment Anda.

:::tip
Jika Anda memiliki izin untuk menginstal paket dari Marketplace, bidang Owner akan ditambahkan ke jendela instalasi.
:::

Batasan pemilik yang dipilih secara otomatis diterapkan ke wizard topologi atau jendela instalasi (untuk paket [yang diimpor](https://docs.dewacloud.com/docs/environment-import/) dan Marketplace).

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/accounts-collaboration/collaboration-user-experience/11-environment-owner-in-wizard.png" alt="environment owner in wizard" max-width="100%"/>

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