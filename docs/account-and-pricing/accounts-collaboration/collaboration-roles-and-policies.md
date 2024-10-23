---
sidebar_position: 2
slug: /collaboration-roles-and-policies
title: Peran & Kebijakan Kolaborasi
---

# Peran & Kebijakan Kolaborasi

Karakteristik utama dari [fitur kolaborasi](https://docs.dewacloud.com/docs/account-collaboration/) platform ini adalah fleksibilitasnya yang ekstrem. Hal ini dipastikan melalui mekanisme _**peran dan kebijakan**_, yang memberikan kemampuan untuk berbagi instance dan izin yang tepat sesuai dengan kebutuhan penggunaan tertentu. Panduan ini mencakup semua spesifik dari konfigurasi peran dan kebijakan serta penyediaannya.

Mari kita mulai dengan mendefinisikan apa itu peran dan kebijakan:

* **kebijakan** adalah set API kecil yang memungkinkan _operasi tertentu_
* **peran** adalah kombinasi dari kebijakan yang menciptakan _rentang tindakan_ yang diperlukan

Di dashboard platform, entitas ini dapat ditemukan dan dikelola pada bagian **Settings > Shared by Me** akun.

![account settings button](#)

1\. Tab **Kebijakan** mencantumkan tindakan yang dapat ditambahkan ke peran. Secara default, platform menyediakan daftar lengkap dari kebijakan _Sistem_ yang dapat dikombinasikan untuk berbagai peran, mencakup sebagian besar kasus kolaborasi yang mungkin.

![account collaboration policies](#)

2\. Tab **Peran** memungkinkan Anda untuk membuat set tindakan khusus yang hanya memberikan izin yang diperlukan kepada anggota kolaborasi.

![account collaboration roles](#)

Saat menambahkan, mengedit, atau menyalin peran, Anda perlu menyediakan data berikut:

* **Nama** \- ketik nama yang diinginkan untuk peran tersebut
* **Deskripsi** \- berikan deskripsi khusus (opsional)
* **Kebijakan** \- pilih tindakan yang diizinkan untuk peran; gunakan _pencarian_ untuk dengan cepat menemukan kebijakan yang diperlukan dan _filter_ untuk melihat hanya yang dipilih
* **Terima Notifikasi Peringatan Beban** \- aktifkan agar anggota kolaborasi dengan peran ini dapat menerima notifikasi peringatan beban tentang environment yang dibagikan

![collaboration add role dialog](#)

Peran yang tidak dibutuhkan lagi bisa dihapus dengan tombol yang sama-named di panel alat.

3\. Anda dapat membuat sebanyak mungkin peran yang Anda butuhkan. Berikut adalah beberapa contoh umum yang dapat dikonfigurasi dengan memilih kebijakan yang sesuai:

* _viewer_ \- hanya melihat log dan file
* _user_ \- tindakan sederhana seperti memulai/menghentikan environment dan memulai ulang container
* _developer_ \- akses ke sebagian besar fitur dengan beberapa batasan (misalnya membuat, menghapus, memigrasi, mengkloning environment, mengubah grup environment, mengubah pemilik)
* _admin_ \- akses penuh dengan kemampuan untuk membuat environment baru, menginstal paket JPS, dan mengakses melalui SSH

Jelas, ini hanya contoh untuk memberikan Anda gambaran tentang kemungkinan fitur tersebut. Anda dapat membuat peran Anda sendiri agar sesuai dengan kebutuhan penggunaan Anda yang spesifik.

## Algoritma Penugasan Peran{#roles-assigning-algorithm}

Platform ini menggunakan algoritma _level akses_ khusus saat menentukan peran tepat untuk environment tertentu. Berdasarkan prioritas (dari yang lebih tinggi ke lebih rendah), tiga level akses yang tersedia diatur dengan cara berikut:

* _**langsung**_ \- peran ditugaskan langsung ke environment. Peran "_langsung_" menimpa semua peran dari level di bawahnya.
* _**grup lingkungan berbagi**_ \- daftar campuran peran untuk semua grup berbagi dari environment saat ini. Jika grup tidak memiliki peran tertentu, maka grup induknya yang diperiksa. Rantai nesting dapat diikuti hingga ke kategori _Env Groups_ root (misalnya peran default untuk semua grup).
* _**dasar**_ \- peran default untuk semua environment berbagi (peran yang ditugaskan ke kategori _Environments_). Peran "_dasar_" memiliki prioritas terendah dan diterapkan hanya ketika tidak ada peran lain.

:::warning
Hanya peran dari level akses tertinggi yang digunakan.
:::

Anda dapat memeriksa peran dan daftar kebijakan yang diizinkan untuk sumber daya yang dibagikan di bagian **Settings > Shared with Me** akun.

![collaboration Shared with Me tab](#)

Untuk memeriksa peran Anda untuk [environment yang dibagikan](https://docs.dewacloud.com/docs/share-environment/) tertentu, pergi ke bagian **Settings > Collaboration** di environment tersebut.

![environment collaboration settings](#)

Mari kita melalui beberapa contoh untuk lebih memahami bagaimana peran dialokasikan.

__Contoh 1:__ Environment bukan bagian dari grup mana pun dan tidak dibagikan secara langsung. Peran default untuk semua environment adalah - **Viewer**.

![third example precondition](#)

Mari kita tentukan level aksesnya. Environment tidak dibagikan secara _langsung_ dan bukan bagian dari grup _grup lingkungan berbagi_. Namun, kami memiliki peran _**dasar**_ (**Viewer**) yang ditugaskan ke semua environment.

![third example result](#)

_Hasil:_ Environment memiliki peran **Viewer**.

__Contoh 2:__ Environment dibagikan dengan peran **Viewer** dan merupakan bagian dari grup berbagi dengan peran **Admin**. _Environment adalah bagian dari kategori yang dicirikan di bawah ini._

![first example precondition](#)

Menurut algoritma, environment memiliki peran dari dua level akses: _**langsung**_ (**Viewer**) dan _**grup lingkungan berbagi**_ (**Admin**). Namun, hanya peran dari level akses yang lebih tinggi yang berlaku. Level _**langsung**_ memiliki prioritas tertinggi, jadi peran dari level _**grup lingkungan berbagi**_ diabaikan.

![first example result](#)

_Hasil:_ Hanya peran **Viewer** yang ditugaskan.

__Contoh 3:__ Environment target milik dua grup. Yang pertama memiliki peran **Developer** dan **Accountant** (dan induknya memiliki peran **Admin**), sementara yang kedua tidak memiliki peran. Peran default untuk semua grup adalah - **Viewer**. _Environment adalah bagian dari grup yang dicirikan di bawah ini._

![second example precondition](#)

Pertama, tentukan level akses. Dalam kasus ini, semua peran terkait dengan grup berbagi dan merupakan level _**grup lingkungan berbagi**_ yang sama. Selanjutnya, periksa peran untuk setiap grup. Yang pertama memiliki peran langsung (**Developer** dan **Accountant**), yang dipilih langsung - peran induk diabaikan. Grup kedua tidak memiliki peran, jadi grup induknya diperiksa. Jika semua grup induk juga tidak memiliki peran, peran default grup (**Viewer**) yang dipilih.

![second example result](#)

_Hasil:_ Daftar kebijakan gabungan dari peran **Developer**, **Accountant**, dan **Viewer**.

## Baca Juga{#whats-next}

* [Gambaran Umum Kolaborasi](https://docs.dewacloud.com/docs/account-collaboration/)
* [Buat Kolaborasi](https://docs.dewacloud.com/docs/collaboration-create/)
* [Pengalaman Pengguna Kolaborasi](https://docs.dewacloud.com/docs/collaboration-user-experience/)
* [Bagikan Environment](https://docs.dewacloud.com/docs/share-environment/)