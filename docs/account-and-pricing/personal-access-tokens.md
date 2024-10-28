---
sidebar_position: 8
slug: /personal-access-tokens
title: Personal Access Tokens
---
# Personal Access Tokens

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/01-personal-access-tokens-logo.png" alt="personal access tokens logo" width="100%"/>

**Personal Access Tokens** adalah pendekatan alternatif untuk mengautentikasi permintaan API di platform, yang bila dibandingkan dengan metode berbasis sesi default, menawarkan fleksibilitas dan keandalan yang lebih besar.

Di antara keuntungan token, yang berikut dapat disorot:

  * beberapa token dapat dihasilkan sekaligus untuk mendukung tugas yang berbeda
  * autentikasi yang disederhanakan dengan token (tidak perlu melakukan permintaan tambahan untuk mendapatkan sesi) memastikan basis kode yang lebih kecil dan respons yang lebih cepat saat menggunakan skrip otomasi
  * kredensial Anda (login dan kata sandi) tidak terekspos dalam skrip
  * token dapat mengautentikasi hanya bagian tertentu dari fungsionalitas akun, sehingga Anda dapat membagikannya dengan rekan kerja dan asisten pihak ketiga tanpa menciptakan pelanggaran keamanan
  * token dapat dilengkapi dengan tanggal kedaluwarsa atau dicabut secara manual kapan saja

Platform menyediakan antarmuka visual yang sepenuhnya fungsional untuk pengelolaan token langsung di dashboard (mulai dari versi 5.5), yang menjadikannya cara yang lebih disukai untuk mengautentikasi integrasi API apa pun (terutama pada akun dengan [autentikasi dua faktor](https://docs.dewacloud.com/docs/two-factor-authentication) diaktifkan):

  * [Manage Access Tokens](https://docs.dewacloud.com/docs/#manage)
  * [Use Access Tokens](https://docs.dewacloud.com/docs/#use)

## Mengelola Access Tokens{#managing-access-tokens}

Berikut, kita akan memeriksa proses pengelolaan personal access tokens menggunakan antarmuka dashboard:

1\. Buka bagian **Settings** dengan mengklik tombol dengan nama yang sama di sudut kanan atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/02-user-account-settings.png" alt="user account settings" width="100%"/>

2\. Dalam bingkai yang terbuka, pilih tab **Access Tokens** untuk melihat daftar semua token di akun. Panel alat di atas daftar menyediakan akses ke tombol berikut:

  * **Generate** \- membuat token baru dengan memberikan deskripsi, tanggal kedaluwarsa, dan memilih metode API yang diperlukan (baik dari set yang sudah ditentukan atau secara manual)
  * **Edit** \- menyesuaikan token yang ada atau meregenerasinya (mis., menetapkan nama baru, sementara mempertahankan semua parameter lainnya)
  * **Copy** \- membuat token baru menggunakan parameter dari yang ada sebagai dasar
  * **Remove** \- menghapus token yang dipilih
  * **Refresh** \- menampilkan perubahan terbaru pada daftar

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/03-access-tokens-settings.png" alt="access tokens settings" width="100%"/>

3\. Saat membuat yang baru atau menyesuaikan token yang ada, bingkai berikut ditampilkan, memungkinkan untuk menyesuaikan:

  * _**Description**_ \- deskripsi kustom yang disediakan untuk token
  * _**Expires At**_ \- tanggal dalam format _dd-mm-yyyy_ hingga saat token ini berlaku (dapat diregenerasi setelah kedaluwarsa)
  * _**API**_ \- nama set permintaan API: yang sudah ditentukan (_Extended Access_ , _IDE Plugins_ , _Marketplace_ , _Maven Plugin_) atau _Custom_ (dengan metode yang dipilih secara manual)
  * gunakan bidang _Search_, filter _Only Checked_ dan tautan ke API _Docs_ (ditampilkan saat melayang di atas metode tertentu) untuk mengatur izin yang diperlukan untuk token

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/04-generate-access-token.png" alt="generate access token" width="100%"/>

4\. Semua perubahan token pada akun memerlukan konfirmasi wajib dengan kata sandi sebelum diterapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/05-password-confirmation.png" alt="password confirmation" width="100%"/>

5\. Selanjutnya, Anda akan melihat nilai access token. Pastikan Anda menyimpannya (gunakan tombol **Download**/**Copy**), karena itu tidak akan ditampilkan di mana pun lagi.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/06-save-access-token.png" alt="save access token" width="100%"/>

:::tip
Jika Anda lupa atau kehilangan nilai token Anda, Anda dapat membuat yang baru dengan mengakses bingkai Edit Access Token dan mengklik tautan yang sesuai di bagian bawah. Dalam hal ini, nilai lama menjadi tidak valid, jadi semua otomasi yang ada dengan token ini harus diperbarui.
:::

6\. Anda dapat **Remove** token yang tidak lagi diperlukan (gunakan **Shift** dan **Ctrl** untuk memilih beberapa) dengan tombol dengan nama yang sama di panel alat.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/08-remove-access-token.png" alt="remove access token" width="100%"/>

Konfirmasikan dalam pop-up dan berikan kata sandi untuk melanjutkan. Sekarang, Anda tahu cara mengelola personal access token di akun dan dapat menggunakannya dalam permintaan API Anda.

## Menggunakan Access Tokens{#using-access-tokens}

Penggunaan access tokens terutama menyederhanakan autentikasi permintaan API, karena memungkinkan melewati langkah generasi sesi dan memastikan keandalan yang lebih besar dibandingkan validitas jangka pendek sesi.

1\. Cukup jalankan metode API yang diperlukan, dengan menentukan _**token**_ Anda dalam parameter _**session**_.

Sebagai contoh, Anda dapat [menghentikan lingkungan](https://docs.dewacloud.com/api/#!/api/environment.Control-method-StopEnv) dengan memasukkan URL berikut ke browser:

`https://app.${platformDomain}/1.0/environment/control/rest/stopenv?envName=${envName}&session=${token}`

Di sini:

  * `${platformDomain}` \- URL platform (nama domain)
  * `${envName}` \- nama lingkungan target (mis. _my-project_)
  * `${token}` \- nilai token (pastikan memiliki izin untuk operasi yang dipanggil)

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/09-stop-environment-api-request-with-token.png" alt="stop environment api request with token" width="100%"/>

Untuk operasi yang berhasil, Anda harus mendapatkan “_result_:0” sebagai respons (nilai non-zero menunjukkan kesalahan).

2\. Sekarang, jika Anda kembali ke dashboard, Anda akan melihat lingkungan yang sesuai telah dihentikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/personal-access-tokens/10-stopped-environment.png" alt="stopped environment" width="100%"/>

Itu saja! Manajemen API dengan token se-sederhana itu!

