---
sidebar_position: 2
slug: /vps-ssh-gate
title: Linux VPS Access via SSH Gate
---

# Akses Linux VPS melalui SSH Gate

Untuk mengelola software yang diperlukan di dalam container Elastic VPS Anda, Anda perlu terhubung ke dalamnya melalui SSH Gate. Koneksi dapat dilakukan melalui [SSH Gate](https://docs.dewacloud.com/docs/ssh-gate) khusus, yang menyediakan satu titik akses untuk mengkonfigurasi semua environment dan server dalam akun Anda secara remote.


Proses [akses SSH](https://docs.dewacloud.com/docs/ssh-access) ke node Elastic VPS sama seperti untuk container lainnya di Dewacloud, tetapi menyediakan full root access.

- _**[Web SSH](https://docs.dewacloud.com/docs/web-ssh-client)**_

Koneksi hanya dengan satu klik ke container VPS Anda dari dashboard Dewacloud tanpa memerlukan konfigurasi apa pun. 

<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-ssh-1.png" alt="elastic vps web ssh access" max-width="100%"/>


- _**[SSH Gate](https://docs.dewacloud.com/docs/ssh-gate-access)**_

Koneksi SSH ke VPS dari console di local machine Anda. Akses berdasarkan SSH Key Pair custom Anda.

:::note
Jika Anda belum melakukan koneksi melalui SSH Gate sebelumnya, Anda perlu melakukan langkah-langkah berikut terlebih dahulu: generate SSH Key Pair dan menambahkan public SSH key Anda ke dashboard.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-ssh-2.png" alt="elastic vps access via ssh gate" max-width="100%"/>

Jika Anda lebih suka mengoperasikan container VPS Anda dengan tool SSH eksternal, Anda bisa menggunakan [akses melalui Public IP address](https://docs.dewacloud.com/docs/vps-public-ip). Terlepas dari metode yang digunakan, fungsionalitas dan kemampuan manajemen yang disediakan adalah sama.

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/docs/vps/)
- [VPS Configuration](https://docs.dewacloud.com/docs/vps-configuration/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/docs/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/docs/win-rdp-access/)