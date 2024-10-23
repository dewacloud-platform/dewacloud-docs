---
sidebar_position: 4
slug: /account-password-reset
title: Reset Kata Sandi Akun
---

# Reset Kata Sandi Akun

Platform memastikan bahwa kata sandi akun diperbarui secara berkala melalui mekanisme deprecasi otomatis. Secara default, kata sandi kadaluarsa setelah 180 hari (dengan beberapa pemberitahuan sebelumnya) dan perlu diperbarui untuk memulihkan akses ke akun.

Jika Anda masih memiliki akses ke akun Anda, ikuti alur [ubah kata sandi](https://docs.dewacloud.com/docs/#change-password). Jika Anda lupa kata sandi saat ini atau sudah kadaluarsa, platform menyediakan alur yang andal dan aman untuk [mereset kata sandi](https://docs.dewacloud.com/docs/#reset-password) Anda.

## Persyaratan Kata Sandi{#password-requirements}

Keamanan akun pengguna adalah prioritas utama untuk platform, sehingga persyaratan kata sandi berikut diterapkan secara default:

* panjang minimum 10 karakter
* setidaknya satu simbol untuk setiap kategori berikut: angka, huruf kecil dan huruf besar, karakter khusus
* tidak boleh mengulang salah satu dari kata sandi sebelumnya

![password requirements](#)

:::warning
Persyaratan yang tepat untuk setiap platform ditetapkan oleh penyedia hosting layanan yang sesuai dan dapat berbeda dari persyaratan default.
:::

Selain itu, kami merekomendasikan untuk mengonfigurasi **[Two-Factor Authentication](https://docs.dewacloud.com/docs/two-factor-authentication/)** untuk lapisan perlindungan tambahan guna secara drastis meningkatkan keamanan akun.

## Ubah Kata Sandi{#change-password}

Untuk memperbarui kata sandi akun PaaS Anda, masuk ke dashboard platform yang sesuai, dan ikuti langkah-langkah di bawah ini.

1\. Klik pada menu dengan login Anda di pojok kanan atas dan pilih opsi **Change Password**.

![change password button](#)

2\. Di frame yang terbuka, isi kolom dengan kata sandi saat ini dan kata sandi baru Anda dan klik tombol Change Password.

![change password dialog](#)

Dalam sekejap, Anda akan diberitahu tentang keberhasilan operasi dan menerima email yang sesuai juga.

## Reset Kata Sandi{#reset-password}

Jika Anda kehilangan akses ke akun Anda, Anda dapat mengikuti prosedur reset kata sandi untuk memulihkannya.

1\. Pergi ke halaman login instalasi PaaS yang sesuai dan pilih opsi **Reset Password** dari daftar di pojok kiri bawah formulir.

![account password reset](#)

2\. Di frame yang terbuka, Anda perlu menyediakan alamat email akun Anda.

![email address for password reset](#)

Klik **Reset** agar platform mengirimkan Anda tautan untuk pemulihan kata sandi.

3\. Periksa kotak masuk Anda untuk email _**Confirm Account Password Reset**_.

![password reset email](#)

Klik tombol **Reset Password** untuk melanjutkan operasi.

:::warning
Untuk alasan keamanan, tautan tetap berlaku hanya untuk periode yang singkat. Jika digunakan setelah tidak berlaku, pesan berikut akan ditampilkan.
:::

4\. Dalam formulir yang terbuka, Anda dapat mengatur kata sandi baru.

![account password reset form](#)

Itu saja! Anda akan dialihkan kembali ke dashboard, tempat Anda bisa masuk menggunakan kredensial baru.

![password changed](#)

:::tip
Anda juga akan menerima email tentang keberhasilan operasi reset kata sandi.
:::

## Baca Juga{#whats-next}

* [Registrasi Akun](https://docs.dewacloud.com/docs/account/)
* [Tipe-Tipe Akun](https://docs.dewacloud.com/docs/types-of-accounts/)
* [Status-Status Akun](https://docs.dewacloud.com/docs/account-statuses/)
* [Two-Factor Authentication](https://docs.dewacloud.com/docs/two-factor-authentication/)
* [Personal Access Tokens](https://docs.dewacloud.com/docs/personal-access-tokens/)
* [Kolaborasi Akun](https://docs.dewacloud.com/docs/account-collaboration/)