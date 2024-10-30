---
sidebar_position: 7
slug: /environment-aliases
title: Environment Aliases
---
# Pemindahan Environment

Pemindahan environment memungkinkan Anda untuk memindahkan environment ke akun PaaS lain dalam platform yang sama (diperlukan konfirmasi dari kedua belah pihak).

### Alasan {#reasons}

Fitur ini dapat bermanfaat dalam banyak kasus. Misalnya, jika Anda perlu:

  * memindahkan semua proyek Anda ke akun baru yang terdaftar dengan alamat email yang berbeda
  * memindahkan proyek kerja Anda ke akun pengembang lain jika seorang karyawan keluar dari perusahaan
  * memindahkan environment yang siap produksi ke akun perusahaan utama dari akun pengujian pribadi
  * memulihkan environment di akun lama yang telah dinonaktifkan tanpa reaktivasi

:::tip
 Selain itu, penyedia layanan hosting dapat menawarkan layanan pembuatan aplikasi yang diperlukan untuk Anda. Setelah konfigurasi dan pengujian, environment yang siap produksi akan dipindahkan ke akun Anda. 
:::

### Kondisi {#conditions}

**Setiap environment** (dihentikan/berjalan) dapat dipindahkan **dari akun mana pun** (termasuk yang dinonaktifkan). Namun, akun target harus memenuhi persyaratan berikut:

  * **jenis** \- bisa dari [jenis apa saja](<https://docs.dewacloud.com/docs/account-types/>) (beta, billing), __kecuali akun trial__
  * **status** \- harus _[aktif](<https://docs.dewacloud.com/docs/account-statuses/>)_ (yaitu tidak ditangguhkan atau dinonaktifkan)
  * **kuota** \- harus memiliki [kuota](<https://docs.dewacloud.com/docs/quotas-system/>) yang cukup (batasan) untuk menambah environment

**Catatan:** __Pada platform sebelum versi 5.9.3,__ environment hanya dapat dipindahkan ke akun billing.

Misalnya, beberapa kuota yang diperiksa selama pemindahan: _cloudlets per container_, _nodes per environment_, _environments on account_, _public IP_ / _VPS_ / fitur _high-availability_ (jika diaktifkan dalam environment yang dipindahkan), dll.

Juga, jika terjadi kesalahan, Anda akan melihat pemberitahuan yang sesuai langsung di dashboard:

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-aliases/01-environment-aliases-instaces-list.png" alt="environment transfer error" max-width="100%"/>

**Catatan:** Fitur pemindahan environment saat ini tidak tersedia antar akun di instalasi PaaS yang berbeda, termasuk interaksi platform utama - sub-platform (reseller).

### Hasil {#result}

Tidak ada perubahan yang diterapkan pada environment setelah dipindahkan. Pemilik baru akan menerimanya dalam keadaan yang sama, dengan aplikasi yang sama terpasang, dan dengan konfigurasi khusus yang sama. Semua biaya berikutnya untuk environment juga akan diterapkan ke pemilik baru.

Selain itu, environment yang dipindahkan akan menjadi [unshared](<https://docs.dewacloud.com/docs/share-environment/>) dari semua pengguna yang memiliki akses ke environment tersebut.

## Langkah-Langkah Pemindahan {#transferring-steps}

Mari kita lihat proses pemindahan environment.

1\. Klik tombol **Settings** di sebelah environment yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-aliases/02-set-alias.png" alt="environment settings button" max-width="100%"/>

2\. Di tab yang terbuka, navigasikan ke bagian _**Change Owner**_ dan masukkan alamat email pengguna target (pemilik baru potensial).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-aliases/03-environment-label.png" alt="send environment change owner request" max-width="100%"/>

Klik tombol **Send Request** untuk melanjutkan.

3\. Jika akun target ada dan memenuhi semua persyaratan, Anda akan melihat pemberitahuan bahwa permintaan telah dikirim.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-aliases/04-environment-aliases-dashboard.png" alt="transfer request sent" max-width="100%"/>

:::tip
 Anda dapat Membatalkan Permintaan dengan tombol bernama sama kapan saja (kecuali sudah dikonfirmasi). 
:::

4\. Pengguna yang ditentukan akan menerima permintaan untuk pemindahan environment dengan tautan konfirmasi melalui email.

:::note
 Saat menunggu konfirmasi, environment ditandai dengan ikon khusus di dashboard pemilik awal. 
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-aliases/05-environment-aliases-ssh.png" alt="environment transfer confirmation email" max-width="100%"/>

5\. Ketika pengguna target mengonfirmasi permintaan pemindahan (mengklik tautan dari email), environment akan dihapus dari dashboard pengguna awal dan muncul untuk pemilik baru. Email pemberitahuan tentang pemindahan berhasil akan dikirim ke pemilik awal.

:::note
 Pada langkah ini, akun target divalidasi (untuk memiliki batasan yang cukup) untuk terakhir kalinya. Jika tidak memenuhi persyaratan, proses pemindahan akan dihentikan. Pesan kesalahan yang sesuai akan ditampilkan di dashboard pengguna target dan dikirim ke pemilik awal melalui email. 
:::

Begitu mudah! Dengan menggunakan fitur ini, Anda dapat dengan mudah memindahkan environment dari satu akun ke akun lain.

## Baca Juga {#whats-next}

  * [Membuat Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Berbagi Environment](<https://docs.dewacloud.com/docs/share-environment/>)
  * [Kloning Environment](<https://docs.dewacloud.com/docs/clone-environment/>)
  * [Ekspor Environment](<https://docs.dewacloud.com/docs/environment-export/>)
  * [Kolaborasi Akun](<https://docs.dewacloud.com/docs/account-collaboration/>)