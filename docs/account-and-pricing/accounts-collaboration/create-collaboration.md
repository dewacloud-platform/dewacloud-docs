---
sidebar_position: 3
slug: /create-collaboration
title: Membuat Kolaborasi
---

# Membuat Kolaborasi

Untuk membuat [kolaborasi](https://docs.dewacloud.com/docs/account-collaboration/) Anda sendiri, Anda hanya perlu akun PaaS penagihan (**akun utama**) yang akan mengundang pelanggan atau pengguna tambahan (**anggota kolaborasi**). Anda dapat melakukan sebagian besar operasi terkait kolaborasi melalui bagian khusus di panel pengaturan akun.

Klik tombol **Settings** di sudut kanan atas dashboard.

![account settings button](#)

Di dalam bagian **User Settings** yang terbuka, Anda memiliki dua sub-bagian kolaborasi berikut:

* _**Shared by Me**_ \- opsi kolaborasi untuk akun utama, memiliki tiga tab:
  * **Members** \- mengelola daftar anggota kolaborasi (mengundang pengguna baru, menangguhkan atau menghapus yang sudah ada, menyesuaikan environment yang dibagikan, grup, peran, dll.)
  * **Roles** \- mengkonfigurasi peran khusus (daftar tindakan yang diizinkan) dari kebijakan yang tersedia
  * **Policies** \- mencantumkan tindakan yang dapat ditambahkan ke peran
* _**Shared with Me**_ \- opsi untuk anggota kolaborasi

![collaboration menu](#)

Sekarang, ikuti instruksi di bawah ini untuk mengatur kolaborasi:

* [kirim undangan kolaborasi](https://docs.dewacloud.com/docs/#send-collaboration-invite) (sebagai akun utama)
* [terima undangan kolaborasi](https://docs.dewacloud.com/docs/#accept-collaboration-invite) (sebagai anggota kolaborasi)

## Kirim Undangan Kolaborasi{#send-collaboration-invite}

Pergi ke bagian **Shared by Me** pada akun _utama_ (yang merupakan tempat host environment sebenarnya).

1\. Jika belum, buat setidaknya satu _**Peran**_ pada tab yang sesuai.

Berikan informasi berikut ini dalam dialog _**Add Role**_:

* **Nama** \- ketik nama yang diinginkan untuk sebuah peran
* **Deskripsi** \- berikan deskripsi khusus (opsional)
* **Kebijakan** \- pilih tindakan yang diizinkan untuk peran; gunakan _pencarian_ untuk dengan cepat menemukan tindakan yang diperlukan dan _filter_ untuk melihat hanya yang dipilih
* **Terima Notifikasi Peringatan Beban** \- aktifkan agar anggota kolaborasi dengan peran ini dapat menerima notifikasi peringatan beban tentang item yang dibagikan

![add collaboration role](#)

Anda dapat mempelajari lebih lanjut tentang **[Peran & Kebijakan](https://docs.dewacloud.com/docs/collaboration-roles-policies/)** pada panduan khusus.

2\. Pada tab _**Members**_, klik tombol **Invite**.

Isi kolom dalam dialog _**Invite Member**_ yang terbuka:

* **Email** \- ketik alamat email pengguna yang ingin Anda undang
* **Nama Tampilan** \- berikan nama khusus untuk pengguna yang diundang (opsional)
* **Item Dibagikan** \- pilih item dan kategori terpisah (environment dan grup) yang ingin Anda bagikan kepada anggota

![invite collaboration member](#)

:::note
Anda dapat menetapkan beberapa peran untuk sebuah komponen - gunakan Ctrl untuk memilih beberapa opsi dan Alt untuk mengganti semua peran yang dipilih  
Anda dapat memberikan peran yang berbeda untuk setiap (sub-)komponen  
arahkan kursor kepada sebuah peran dalam daftar untuk melihat petunjuk dengan semua kebijakan yang termasuk  
jika diperlukan, Anda dapat Membuat Peran Baru tanpa menutup formulir undangan  
Anda dapat mengelola struktur grup environment langsung di formulir undangan - arahkan kursor pada grup dan klik ikon roda gigi untuk memilih opsi yang diperlukan (Tambahkan, Edit, Hapus)  
untuk memberikan kemampuan membuat environment di root akun (yaitu tanpa grup apa pun), bagikan seluruh kategori Environments dengan peran yang memberikan izin yang sesuai  
jika Anda perlu membagikan satu environment, itu dapat dilakukan dari konfigurasi environment yang sesuai
:::

3\. Anggota yang diundang akan muncul dalam daftar dalam status _**menunggu penerimaan**_.

![collaboration pending acceptance](#)

Sekarang, Anda menunggu anggota untuk [menerima undangan](https://docs.dewacloud.com/docs/#accept-collaboration-invite). Setiap perubahan pada undangan akan ditampilkan di tab **Members**. Juga, Anda akan mendapatkan notifikasi email yang sesuai tentang keputusan pengguna.

4\. Jika diperlukan, Anda dapat memilih anggota kolaborasi untuk melakukan penyesuaian yang diperlukan:

* **Edit** \- untuk mengubah komponen yang dibagikan dan izin kapan saja  
  :::warning
  Jika anggota kolaborasi sedang masuk saat penyesuaian, mereka mungkin perlu menyegarkan dashboard untuk melihat kemungkinan berbagi yang baru.
  :::
* **Copy** \- untuk membagikan izin yang sama kepada pengguna lain
* **Suspend / Activate** \- untuk menghentikan / melanjutkan berbagi secara sementara
* **Remove** \- untuk menghentikan berbagi dan menghapus informasi tentang komponen dan izin yang dibagikan

![manage collaboration member](#)

:::tip
Untuk kenyamanan, kolaborasi yang dihentikan (termasuk kasus anggota yang pergi sendiri) tidak dihapus sepenuhnya. Rekaman yang tersisa memungkinkan Anda untuk mengaktifkan kembali kolaborasi jika perlu.
:::

## Terima Undangan Kolaborasi{#accept-collaboration-invite}

Tunggu akun utama untuk [mengirim undangan kolaborasi](https://docs.dewacloud.com/docs/#send-collaboration-invite) bagi Anda.

1\. Periksa kotak masuk email Anda untuk undangan. Itu harus terlihat seperti berikut:

![collaboration invite email](#)

Jika tertarik, klik tombol **View Invitation**.

:::warning
Jika tidak terdaftar di platform, akun untuk alamat email saat ini akan dibuat secara otomatis.
:::

2\. Setelah mengonfirmasi melalui email, Anda akan diarahkan ke dashboard platform. Di sini, Anda akan melihat jendela dialog yang menyediakan opsi untuk menerima atau menolak undangan.

![join collaboration dialog](#)

Anda dapat menutup dialog atau membatalkan operasi untuk memprosesnya nanti di bagian **Settings > Shared with Me** akun.

![accept collaboration invite](#)

3\. Setelah diterima, dashboard anggota akan mendapatkan dan menampilkan item yang baru dibagikan.

![added to collaboration notification](#)

Selesai! Semua item yang dibagikan sekarang tersedia bagi anggota kolaborasi (dengan izin yang ditentukan).

![shared environment](#)

Lihat panduan **[Pengalaman Pengguna Kolaborasi](https://docs.dewacloud.com/docs/collaboration-user-experience/)** untuk memeriksa detail dari bekerja dalam kolaborasi.

## Baca Juga{#whats-next}

* [Gambaran Umum Kolaborasi](https://docs.dewacloud.com/docs/account-collaboration/)
* [Peran & Kebijakan Kolaborasi](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
* [Pengalaman Pengguna Kolaborasi](https://docs.dewacloud.com/docs/collaboration-user-experience/)
* [Bagikan Environment](https://docs.dewacloud.com/docs/share-environment/)