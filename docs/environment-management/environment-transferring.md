---
sidebar_position: 6
slug: /environment-transferring
title: Environment Transferring
---
# Environment Transferring

Environment transferring memungkinkan Anda memindahkan environment ke akun PaaS lain dalam platform yang sama (diperlukan konfirmasi dari kedua pihak).

## Reasons{#reasons}

Fitur ini bisa berguna dalam banyak kasus. Misalnya, jika Anda perlu:

  * memindahkan semua proyek Anda ke akun baru yang terdaftar dengan alamat email yang berbeda
  * memindahkan proyek kerja ke akun developer lain jika seorang karyawan meninggalkan perusahaan
  * memindahkan environment siap produksi ke akun perusahaan utama dari akun pribadi yang digunakan untuk pengujian
  * memulihkan environment di akun lama yang dinonaktifkan tanpa mengaktifkannya kembali

:::tip
Penyedia layanan hosting juga dapat menawarkan layanan pembuatan aplikasi yang diperlukan untuk Anda. Setelah pengaturan dan pengujian, environment siap produksi akan dipindahkan ke akun Anda.
:::

## Conditions{#conditions}

**Environment apapun** (dihentikan/berjalan) dapat dipindahkan **dari akun manapun** (termasuk yang dinonaktifkan). Namun, akun tujuan harus memenuhi persyaratan berikut:

  * **type** - bisa dari [type](<https://docs.dewacloud.com/docs/account-types/>) manapun (beta, billing), __kecuali akun trial__
  * **status** - harus _[active](<https://docs.dewacloud.com/docs/account-statuses/>)_ (yaitu tidak ditangguhkan atau dinonaktifkan)
  * **quotas** - harus memiliki [quotas](<https://docs.dewacloud.com/docs/quotas-system/>) (batasan) yang cukup untuk menambahkan environment

:::warning
Pada platform sebelum versi 5.9.3, environment hanya dapat dipindahkan ke akun billing saja.
:::

Misalnya, beberapa quotas yang diperiksa selama transfer: _cloudlets per container_, _nodes per environment_, _environments on account_, _public IP_/ _VPS_/ _high-availability_ features (jika diaktifkan dalam environment yang dipindahkan), dll.

Juga, jika ada kesalahan, Anda akan melihat notifikasi terkait langsung di dashboard:

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-transferring/01-environment-transfer-error.png" alt="environment transfer error" width="100%"/>

:::warning
Fitur environment transferring saat ini tidak tersedia antara akun di instalasi PaaS yang berbeda, termasuk interaksi platform utama - sub-platform (reseller).
:::

## Result{#result}

Tidak ada perubahan yang diterapkan pada environment setelah dipindahkan. Pemilik baru menerimanya dalam keadaan yang sama, dengan aplikasi yang sama terpasang, dan dengan konfigurasi khusus yang sama. Semua biaya berikutnya untuk environment tersebut akan dibebankan kepada pemilik baru.

Selain itu, environment yang dipindahkan menjadi [unshared](<https://docs.dewacloud.com/docs/share-environment/>) dari semua pengguna yang memiliki akses ke sana.

## Transferring Steps{#transferring-steps}

Mari kita lihat proses pemindahan environment.

1\. Klik tombol **Settings** di sebelah environment yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-transferring/02-environment-settings-button.png" alt="environment settings button" width="100%"/>

2\. Pada tab yang terbuka, navigasikan ke bagian _**Change Owner**_ dan masukkan alamat email pengguna target (calon pemilik baru).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-transferring/03-send-environment-change-owner-request.png" alt="send environment change owner request" width="100%"/>

Klik tombol **Send Request** untuk melanjutkan.

3\. Jika akun target ada dan memenuhi semua persyaratan, Anda akan melihat notifikasi bahwa permintaan telah dikirim.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-transferring/04-transfer-request-sent.png" alt="transfer request sent" width="100%"/>

:::tip
Anda bisa membatalkan permintaan dengan tombol berlabel sama kapan pun (kecuali sudah dikonfirmasi).
:::

4\. Pengguna yang ditentukan akan menerima permintaan pemindahan environment dengan URL konfirmasi melalui email.

:::note
Saat menunggu konfirmasi, environment ditandai dengan ikon khusus di dashboard pemilik awal.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-transferring/07-environment-transfer-confirmation-email.png" alt="environment transfer confirmation email" width="100%"/>

5\. Ketika pengguna target mengkonfirmasi permintaan transfer (mengklik tautan dari email), environment dihapus dari dashboard pengguna awal dan muncul untuk pemilik baru. Notifikasi email tentang transfer yang berhasil akan dikirimkan ke pemilik awal.

:::note
Selama langkah ini, akun target divalidasi (untuk memiliki batas yang cukup) untuk terakhir kalinya. Jika tidak memenuhi persyaratan, proses transfer akan dihentikan. Pesan kesalahan yang sesuai akan ditampilkan di dashboard pengguna target dan dikirim ke pemilik awal melalui email.
:::

Sesederhana itu! Dengan fitur ini, Anda bisa dengan mudah memindahkan environment dari satu akun ke akun lain.

## Baca Juga{#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Share Environment](<https://docs.dewacloud.com/docs/share-environment/>)
  * [Clone Environment](<https://docs.dewacloud.com/docs/clone-environment/>)
  * [Export Environment](<https://docs.dewacloud.com/docs/environment-export/>)
  * [Accounts Collaboration](<https://docs.dewacloud.com/docs/account-collaboration/>)