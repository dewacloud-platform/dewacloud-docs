---
sidebar_position: 6
slug: /ssh-access-to-git-repository
title: SSH Access to GIT Repository
---
# SSH Access ke Repository GIT

Dengan platform ini, Anda dapat dengan mudah [melakukan deployment aplikasi](https://docs.dewacloud.com/docs/deployment-guide/) dari repository GIT/SVN publik atau privat untuk setiap bahasa pemrograman yang didukung: _Java_, _PHP_, _Ruby_, _Python_, dan _Node.js_.

Untuk mencapai keamanan lebih, Anda juga dapat mengakses repository GIT privat Anda melalui SSH dan dengan mudah meng-clone dan memperbarui aplikasi Anda dari sana. Selain itu, ini memberikan kemampuan untuk bekerja dengan repository tersebut, yang berada di server privat, bukan layanan hosting web berbasis umum seperti GitHub, GitLab, Bitbucket, dll.

![GIT SSH access](#)

Untuk mengakses repository GIT privat Anda menggunakan protokol SSH yang aman, ikuti langkah-langkah sederhana di bawah ini:

1. [Buat Keychain SSH](https://docs.dewacloud.com/docs/#generate-ssh-keychain)
2. [Tambahkan Kunci SSH Privat ke Akun Platform](https://docs.dewacloud.com/docs/#add-private-ssh-key-to-platform-account)
3. [Tambahkan Kunci SSH Publik ke Akun Git](https://docs.dewacloud.com/docs/#add-public-ssh-key-to-git-account)
   * [GitHub](https://docs.dewacloud.com/docs/#github)
   * [GitLab](https://docs.dewacloud.com/docs/#gitlab)
   * [Bitbucket](https://docs.dewacloud.com/docs/#bitbucket)
4. [Deploy Proyek via SSH](https://docs.dewacloud.com/docs/#deploy-project-via-ssh)

## Buat Keychain SSH{#generate-ssh-keychain}

Untuk memulai, Anda perlu membuat pasangan kunci SSH (yaitu dua kunci terkait: privat dan publik) untuk mengaitkan repository GIT Anda ke akun PaaS. Ikuti instruksi **[Buat Kunci SSH](https://docs.dewacloud.com/docs/ssh-generate-key/)** jika Anda belum pernah membuat keychain sebelumnya.

:::warning Kunci Anda tidak boleh mengandung perlindungan kata sandi (passphrase) agar dapat digunakan untuk menjalin koneksi antara platform dan akun GIT. :::

## Tambahkan Kunci SSH Privat ke Akun Platform{#add-private-ssh-key-to-platform-account}

Setelah Anda mendapatkan pasangan kunci SSH yang dihasilkan, mari tempatkan masing-masing di sistem yang sesuai. Pertama-tama, Anda perlu menambahkan kunci privat Anda ke akun PaaS.

1. Masuk ke akun PaaS Anda dan arahkan ke pengaturannya dengan mengklik tombol **Settings** dengan nama yang sama di bagian kanan atas dashboard.

![account settings](#)

2. Di dalam tab **Pengaturan Pengguna** yang terbuka, beralih ke opsi **SSH Keys > Private Keys** dan klik tombol **Add Private Key**.

![SSH keys settings](#)

3. Salin kunci SSH privat Anda dan tempelkan ke dalam kolom teks **Key**. Lalu ketikkan sebuah **Name** untuk kunci ini (misalnya _git-key_) dan selesaikan penambahan dengan tombol **Add**.

![add private SSH key](#)

:::warning Jika Anda menerima kesalahan saat menambahkan kunci, pastikan kunci tersebut tidak dilindungi dengan passphrase. Jika iya, hilangkan perlindungan tersebut dan coba lagi. :::

4. Hasilnya, kunci privat baru Anda akan muncul di tab yang sesuai dalam sesaat.

![private SSH key added](#)

Anda selalu dapat menghapus kunci Anda jika kunci tersebut tidak diperlukan lagi - cukup klik tombol silang merah yang sesuai. Penghapusan kunci dari manajer tidak akan menghapusnya dari proyek GIT yang ada di platform. Oleh karena itu, Anda akan tetap dapat bekerja dengan cara yang sama seperti sebelumnya.

## Tambahkan Kunci SSH Publik ke Akun Git{#add-public-ssh-key-to-git-account}

Setelah kunci privat Anda diunggah ke akun PaaS, saatnya untuk menyesuaikan akun repository GIT Anda.

Jika repository GIT Anda terletak di server privat yang jauh, cukup unggah kunci SSH publik yang sesuai dan tambahkan ke daftar kunci yang diizinkan.

Jika Anda menggunakan layanan hosting proyek berbasis web, ikuti panduan langkah demi langkah yang sesuai di bawah ini. Sebagai contoh, kami akan memfokuskan perhatian pada tiga layanan paling populer:

* [GitHub](https://docs.dewacloud.com/docs/#github)
* [GitLab](https://docs.dewacloud.com/docs/#gitlab)
* [Bitbucket](https://docs.dewacloud.com/docs/#bitbucket)

### GitHub{#github}

1. Masuk ke akun GitHub Anda menggunakan kredensial Anda. Pergi ke **Settings** akun (di pojok kanan atas), pilih tab **SSH and GPG keys** di panel kiri, dan klik tombol **New SSH key**.

![GitHub SSH keys settings](#)

2. Tempelkan _kunci SSH publik_ Anda ke kolom input **Key**, atur **Title** untuk kunci Anda (misalnya _jelastic-sshkey_), dan klik **Add SSH key**.

![GitHub add public key](#)

3. Konfirmasikan penambahan dengan mengetikkan kata sandi untuk akun GitHub Anda di bingkai yang terbuka dan memilih tombol yang sesuai.

![GitHub confirm key addition](#)

4. Periksa kunci yang baru ditambahkan telah muncul di tab **SSH keys** yang sama.

![GitHub SSH key added](#)

5. Untuk mendapatkan tautan SSH ke proyek Anda, arahkan ke repository yang diinginkan (Anda harus masuk) dan ganti jenis tautan ke **SSH** di bagian _clone URL_ di panel kanan. Lalu klik tombol **Copy to clipboard** (atau lakukan secara manual).

![GitHub copy GIT link](#)

### GitLab{#gitlab}

1. Masuk ke akun GitLab Anda. Akses **Settings** akun (di pojok kanan atas) dan masuk ke tab **SSH Keys** di menu sebelah kiri.

![GitLab SSH keys settings](#)

2. Tempelkan kunci SSH publik Anda ke kolom input **Key**, atur **Title** (misalnya _jelastic-sshkey_), dan tanggal **Expires at** (opsional) untuk kunci Anda.

:::note Tanggal kedaluwarsa bersifat informatif dan tidak mencegah Anda menggunakan kunci tersebut. Misalnya, dapat digunakan oleh administrator untuk menjaga kunci tetap berotasi. :::

![GitLab add public SSH key](#)

Klik tombol **Add key**.

3. Kunci Anda seharusnya muncul dalam daftar **Your SSH keys** di bawahnya.

![GitLab SSH key added](#)

4. Untuk mendapatkan tautan SSH ke proyek Anda, navigasikan ke repository yang diinginkan (Anda harus masuk), perbanyak menu **Clone** dan salin tautan _**Clone with SSH**_.

![GitLab copy GIT link](#)

### Bitbucket{#bitbucket}

1. Masuk ke akun Bitbucket menggunakan kredensial Anda dan pilih opsi **Manage Account** dari menu pengaturan pengguna di pojok kanan atas halaman.

![Bitbucket manage account](#)

2. Setelah halaman pengaturan akun terbuka, beralih ke tab **SSH keys** (di dalam bagian _Security_) menggunakan daftar kategori di sebelah kiri. Kemudian, pilih **Add key** di bagian tengah halaman.

![Bitbucket SSH keys settings](#)

3. Di bingkai yang muncul, tempelkan kunci SSH publik Anda ke kolom input **Key**, atur **Label** untuk kunci Anda (misalnya _jelastic-sshkey_), dan klik tombol **Add key**.

![Bitbucket add SSH key](#)

4. Periksa kunci yang baru ditambahkan telah muncul di tab **SSH keys** yang sama.

![Bitbucket SSH key added](#)

5. Untuk mendapatkan tautan SSH ke proyek Anda, akses layar ikhtisar repository yang diinginkan (Anda harus masuk) dan ganti jenis tautan ke **SSH** dalam daftar drop-down yang sesuai di bagian atas halaman. Salin string yang ditampilkan.

![Bitbucket copy GIT link](#)

## Deploy Proyek via SSH{#deploy-project-via-ssh}

Akhirnya, sekarang Anda bisa melanjutkan dengan deployment proyek Anda melalui koneksi yang aman.

1. Pergi ke _**[Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/#git--svn-projects)**_ di bagian bawah dashboard dan klik **Add repo**. Berikan informasi berikut dalam formulir yang terbuka:

  * **Name** \- nama dari aplikasi Anda (tidak diperbolehkan spasi dan simbol khusus)
  * **URL** \- URL _**git**_ yang sesuai ke repository
  * **Branch** \- cabang yang diperlukan dari proyek (master secara default)
  * centang kotak **Use Authentication**, pilih opsi _SSH Key_ sebagai _**Access Type**_ Anda, dan _**Select Key**_ dari daftar

![add repository with SSH key authentication](#)

Klik **Add** untuk menyimpan informasi proyek Anda.

2. Begitu proyek ditambahkan ke _Deployment Manager_, arahkan kursor di atasnya dan gunakan tombol **Deploy to** yang muncul untuk melaksanakan deployment aplikasi Anda.

Dalam jendela yang terbuka, Anda perlu menentukan target deployment dan beberapa konfigurasi tambahan:

  * **Environment** \- pilih environment target dari daftar

:::note Untuk environment berbasis Java, Anda perlu memilih node build secara tambahan. :::

  * **Path** \- ketik konteks yang Anda ingin aplikasi Anda dideploy ke (atau biarkan yang default)
  * **[Hooks](https://docs.dewacloud.com/docs/deployment-hooks/)** \- tambahkan operasi pre- dan post-deployment (jika diperlukan)
  * **Check and auto-deploy updates** \- memungkinkan [pembaruan berkala otomatis](https://docs.dewacloud.com/docs/git-svn-auto-deploy/) dari proyek Anda dari repository (dilakukan hanya jika ada perubahan kode) dengan interval yang ditetapkan
  * **Auto-resolve conflicts** \- menghindari konflik penggabungan, perintah “_git reset –hard_” akan dipanggil selama pembaruan proyek berikutnya (file yang bertentangan akan diperbarui sesuai versi repository, mengabaikan perubahan yang dilakukan di lokal)
  * **Enable[zero-downtime deployment](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)** \- menyesuaikan alur deployment untuk menghindari downtime aplikasi (untuk server PHP saja)

![deploy GIT project](#)

Ketika semua data telah dimasukkan, klik **Deploy** untuk melanjutkan dan tunggu sampai proyek Anda berhasil dideploy.

3. Anda dapat memastikan file proyek Anda sekarang tersedia. Buka **[Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)** untuk environment Anda, pergi ke direktori **webroot** dan periksa folder dengan nama sesuai konteks yang ditentukan (**ROOT** secara default) di dalamnya.

![example application files](#)

4. Akhirnya, Anda dapat mengklik **Open in Browser** untuk environment Anda dan pastikan aplikasi Anda berjalan.

![open in browser button](#)

![example hello world application](#)

Itu saja! Nikmati interaksi yang sangat terlindungi dengan sistem kontrol versi mana pun - clone dan perbarui proyek Anda, yang dihosting di platform, secara langsung dari repository GIT privat Anda melalui SSH.

## Baca Juga{#whats-next}

* [Deployment Guide](https://docs.dewacloud.com/docs/deployment-guide/)
* [Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/)
* [GIT & SVN Auto-Deploy](https://docs.dewacloud.com/docs/git-svn-auto-deploy/)
* [SSH Access](https://docs.dewacloud.com/docs/ssh-access/)
* [Gitblit for Apps Deploy](https://docs.dewacloud.com/docs/gitblit/)