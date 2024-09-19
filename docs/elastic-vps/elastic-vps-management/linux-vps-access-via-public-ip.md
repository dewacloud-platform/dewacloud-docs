---
sidebar_position: 3
slug: /linux-vps-access-via-public-ip
title: Linux VPS Access via Public IP
---

# Akses Linux VPS melalui Public IP

Anda dapat mengakses container VPS Anda menggunakan software third party SSH yang Anda pilih melalui alamat IP eksternal yang telah terpasang. Koneksi semacam itu memberikan tingkat akses root penuh seperti saat bekerja melalui [SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/).

:::tip
Anda dapat menemukan Public IP Anda dengan memperluas node yang sesuai di dashboard platform atau dalam email pembuatan Elastic VPS yang sesuai.
:::

Di bawah ini, kami telah menyiapkan contoh koneksi ke container Elastic VPS melalui public IP dari berbagai sistem operasi:

- [MacOS/Linux/BSD](https://docs.dewacloud.com/#macos-linux-bsd)
- [Windows](https://docs.dewacloud.com/#windows)

:::tip
Dalam container VPS berbasis Windows, remote desktop protocol (RDP) digunakan untuk melakukan konfigurasi server yang diperlukan.
:::

## Akses Public IP untuk MacOS/Linux/BSD{#public-ip-access-for-macoslinuxbsd}

Jalankan alat SSH pilihan Anda dan sambungkan ke server VPS Anda dengan langkah-langkah serupa dengan contoh di bawah ini.

Sebagai contoh, kami akan menggunakan perangkat lunak [OpenSSH](https://www.openssh.com/), buka terminal Anda dan jalankan perintah berikut:

```
ssh {userName}@{hostname}
```

di mana

- _**\{userName\}**_ - login yang diterima melalui email saat setup environment (_root_ secara default)
- _**\{hostname\}**_ - Public IP address yang terpasang ![elastic vps ssh connection via public ip](#)

Jika terhubung untuk pertama kali, Anda mungkin diminta untuk mengonfirmasi akses dengan menambahkan alamat VPS Anda ke daftar host yang dikenal (ketik “_yes_” untuk melanjutkan). Selanjutnya, otentikasi di server dengan memberikan kata sandi (yang dikirim melalui email setelah pembuatan node).

Itu saja! Mulai mengelola container VPS Anda dan terapkan konfigurasi yang diperlukan. Anda dapat menyesuaikan prosedur saat ini untuk membangun koneksi dengan alat SSH pihak ketiga yang Anda pilih.

## Akses Public IP untuk Windows{#public-ip-access-for-windows}

Dalam batasan OS Windows, pilih alat yang sesuai untuk membangun koneksi SSH melalui Public IP ke container VPS Anda. Sebagai contoh, kami akan menggunakan klien SSH [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/).

1. Arahkan ke tab **Configuration** dan buat **Session** dengan menentukan alamat Public IP Anda ke dalam field **Host Name** yang sesuai. ![elastic vps putty shh connection](#) Setelah data yang diperlukan ditentukan, klik tombol **Open**.

2. Dalam jendela **Console** yang muncul, Anda perlu memberikan kredensial akses Anda, yaitu **Login** dan **Password** dari email setelah pembuatan node VPS. ![elastic vps putty shh connection authentication](#)

Itu saja! Sekarang, karena koneksi SSH melalui Public IP ke remote VPS telah dibuat, Anda dapat memulai manajemennya dengan izin full root diberikan.

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)
- [VPS Access via SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/)
- [Public IP](https://docs.dewacloud.com/public-ip/)