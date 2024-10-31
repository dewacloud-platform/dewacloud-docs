---
sidebar_position: 6
slug: /two-factor-authentication
title: Autentikasi Dua Faktor
---
# Autentikasi Dua Faktor

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/01--two-factor-authentication-logo.png" alt="two-factor authentication logo" max-width="100%"/>

Platform memungkinkan Anda mengonfigurasi **autentikasi dua faktor** (2FA) untuk menambahkan lapisan keamanan tambahan ke akun Anda. Dengan fitur ini diaktifkan, selain nama pengguna dan kata sandi, Anda diharuskan memasukkan kode yang dihasilkan secara acak dalam aplikasi autentikator di ponsel Anda untuk mengakses akun PaaS.

Berikut, kami akan menjelaskan langkah demi langkah manajemen fitur autentikasi dua faktor:

  * [aktifkan 2FA](https://docs.dewacloud.com/docs/#enable)
  * [kelola kode pemulihan](https://docs.dewacloud.com/docs/#manage)
  * [nonaktifkan 2FA](https://docs.dewacloud.com/docs/#disable)
  * [bekerja dengan API](https://docs.dewacloud.com/docs/#api)

## Aktifkan Autentikasi Dua Faktor{#enable-two-factor-authentication}

Untuk mengamankan akun Anda dengan 2FA, ikuti langkah-langkah berikut:

1\. Buka bagian **Settings** dengan mengklik tombol yang sama di sudut kanan atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/02-account-settings-button.png" alt="account settings button" max-width="100%"/>

2\. Dalam bingkai yang terbuka, beralihlah ke tab _**Account**_ dan klik **Set Up Two-Factor Authentication**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/03--set-up-two-factor-authentication-button.png" alt="set up two-factor authentication button" max-width="100%"/>

Anda perlu mengonfirmasi kata sandi Anda melalui pop-up yang muncul untuk melanjutkan.

3\. Selanjutnya, Anda perlu menghubungkan akun PaaS Anda dengan aplikasi [Google Authenticator](https://support.google.com/accounts/answer/1066447) di ponsel Anda (jika diperlukan, ikuti panduan yang ditautkan untuk membantu Anda dalam instalasi). Buka aplikasi di perangkat Anda dan tambahkan akun dengan memindai kode QR yang ditampilkan atau mengetik secara manual data yang disediakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/04-register-authentication-application.png" alt="register authentication application" max-width="100%"/>

Sebagai hasilnya, Anda akan melihat kode enam digit (secara otomatis diperbarui setiap 30 detik), ketikkan ke dalam bingkai dashboard dan klik **Next** untuk memverifikasi.

4\. Pada langkah kedua, Anda akan melihat kode pemulihan, yang dapat digunakan sebagai alternatif satu kali untuk kode autentikasi yang dihasilkan.

:::warning
Pastikan kode pemulihan Anda disimpan. Jika tidak, dalam kasus ketidaktersediaan ponsel Anda, Anda tidak akan dapat terhubung ke akun Anda. Selain itu, mereka adalah satu-satunya opsi untuk memulihkan akses saat perangkat hilang.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/05-save-recovery-codes.png" alt="save recovery codes" max-width="100%"/>

Anda perlu mencentang kotak _I’ve saved the data_ (secara otomatis dicentang setelah menggunakan tombol **Download** atau **Copy**) untuk dapat menutup jendela ini dengan mengklik **Done**.

5\. Sekarang, untuk masuk ke akun, Anda perlu memberikan kredensial login/katasandi (seperti biasa) dan memasukkan kode dari aplikasi autentikasi di perangkat Anda (atau kode pemulihan).

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/06--two-factor-authentication-log-in.png" alt="two-factor authentication log in" max-width="100%"/>

Itu saja! Akun Anda sekarang dilindungi dengan autentikasi dua faktor.

## Kelola Kode Pemulihan{#manage-recovery-codes}

Pada akun dengan 2FA yang sudah diaktifkan, Anda dapat melihat/mengatur ulang kode pemulihan:

1\. Buka bagian **Settings > Account** dan klik tombol **View Recovery Codes**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/07-view-recovery-codes-button.png" alt="view recovery codes button" max-width="100%"/>

Konfirmasikan kata sandi untuk akun Anda untuk melanjutkan.

2\. Di sini, Anda dapat melihat kode pemulihan Anda saat ini dan, jika perlu, **Download**/**Copy** dengan tombol yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/08-view-and-regenerate-recovery-codes.png" alt="view and regenerate recovery codes" max-width="100%"/>

Jika Anda kehabisan kode pemulihan (karena masing-masing hanya dapat digunakan sekali) atau jika Anda menganggapnya telah kompromi, klik tautan di bagian bawah bingkai (dilingkari dalam gambar di atas) untuk menghasilkan yang baru.

3\. Dalam pop-up yang muncul, konfirmasi operasi dan, dalam sekejap, Anda akan mendapatkan kode baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/09-updated-recovery-codes.png" alt="updated recovery codes" max-width="100%"/>

Jangan lupa untuk menyimpan kode pemulihan yang ditampilkan dengan tombol **Download**/**Copy**, karena yang lama tidak akan berfungsi lagi.

## Nonaktifkan Autentikasi Dua Faktor{#disable-two-factor-authentication}

Jika Anda perlu menonaktifkan 2FA untuk akun Anda, ikuti langkah-langkah berikut:

1\. Navigasikan ke bagian _**Settings > Account**_ dan klik tombol **Disable Two-Factor Authentication**.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/10--disable-two-factor-authentication-button.png" alt="disable two-factor authentication button" max-width="100%"/>

:::tip
Jika Anda ingin menonaktifkan/menghubungkan ulang autentikasi dua faktor karena kehilangan perangkat, gunakan salah satu kode pemulihan untuk masuk ke dashboard.
:::

2\. Konfirmasikan keputusan Anda melalui pop-up yang sesuai dan berikan kata sandi pada yang berikutnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/two-factor-authentication/pasted-image-0.png" alt="password confirmation dialog" max-width="100%"/>

Itu saja! Akun Anda sekarang dapat diakses dengan hanya menggunakan kredensial login/katasandi.

## Menggunakan API dengan Autentikasi Dua Faktor{#using-api-with-two-factor-authentication}

Untuk mendapatkan sesi yang valid untuk [permintaan API](https://www.virtuozzo.com/application-platform-api-docs/) pada akun dengan 2FA diaktifkan, Anda perlu memanggil metode tambahan _**Verify2FACode**_ setelah metode _**SignIn**_. Dengan cara ini, Anda dapat memberikan kode autentikasi enam digit dari aplikasi yang sesuai di perangkat Anda.

Untuk menghindari kerumitan seperti itu, disarankan untuk menghasilkan dan menggunakan [personal access tokens](https://docs.dewacloud.com/docs/personal-access-tokens) dalam permintaan API dan skrip otomasi khusus Anda.

## Baca Juga{#whats-next}

  * [Pendaftaran Akun](https://docs.dewacloud.com/docs/account/)
  * [Jenis Akun](https://docs.dewacloud.com/docs/account-types/)
  * [Status Akun](https://docs.dewacloud.com/docs/account-statuses/)
  * [Pengaturan Ulang Kata Sandi Akun](https://docs.dewacloud.com/docs/account-password-reset/)
  * [Personal Access Tokens](https://docs.dewacloud.com/docs/personal-access-tokens/)
  * [Kolaborasi Akun](https://docs.dewacloud.com/docs/account-collaboration/)