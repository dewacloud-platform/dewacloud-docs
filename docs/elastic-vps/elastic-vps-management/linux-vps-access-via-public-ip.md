---
sidebar_position: 3
slug: /vps-public-ip
title: Linux VPS Access via Public IP
---

# Akses Linux VPS melalui Public IP

Anda dapat mengakses container VPS Anda menggunakan software third party SSH yang Anda pilih melalui alamat IP eksternal yang telah terpasang. Koneksi semacam itu memberikan tingkat akses root penuh seperti saat bekerja melalui [SSH Gate](https://docs.dewacloud.com/docs/vps-ssh-gate/).

:::tip
Anda dapat menemukan Public IP Anda dengan memperluas node yang sesuai di dashboard platform atau dalam email pembuatan Elastic VPS yang sesuai.
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-public-ip-1.png" alt="public ip address" width="70%"/>
:::

Jalankan alat SSH pilihan Anda dan sambungkan ke server VPS Anda dengan langkah-langkah serupa dengan contoh di bawah ini.

Sebagai contoh, kami akan menggunakan terminal Windows untuk koneksi SSH (secara default Windows 10 dan 11 sudah meng-include SSH server dan client berbasis OpenSSH). Dari terminal jalankan command berikut:

```
ssh {userName}@{hostname}
```

di mana

- _**\{userName\}**_ - login yang diterima melalui email saat setup environment (_root_ secara default)
- _**\{hostname\}**_ - Public IP address yang terpasang
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-public-ip-2.png" alt="elastic vps ssh connection via public ip" width="100%"/>

Jika terhubung untuk pertama kali, Anda mungkin diminta untuk mengonfirmasi akses dengan menambahkan alamat VPS Anda ke daftar host yang dikenal (ketik “_yes_” untuk melanjutkan). Selanjutnya, otentikasi di server dengan memberikan kata sandi (yang dikirim melalui email setelah pembuatan node).

Itu saja! Mulai mengelola container VPS Anda dan terapkan konfigurasi yang diperlukan. Anda dapat menyesuaikan prosedur saat ini untuk membangun koneksi dengan alat SSH pihak ketiga yang Anda pilih.


Itu saja! Sekarang, karena koneksi SSH melalui Public IP ke VPS jarak jauh telah dibangun, Anda dapat memulai manajemennya dengan izin root penuh diberikan.

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/docs/vps/)
- [VPS Configuration](https://docs.dewacloud.com/docs/vps-configuration/)
- [VPS Access via SSH Gate](https://docs.dewacloud.com/docs/vps-ssh-gate/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)