---
sidebar_position: 2
slug: /linux-vps-access-via-ssh-gate
title: Linux VPS Access via SSH Gate
---

# Akses Linux VPS melalui SSH Gate

Untuk mengelola software yang diperlukan di dalam container Elastic VPS Anda, Anda perlu terhubung ke dalamnya melalui protokol SSH. Koneksi dapat dilakukan melalui [SSH Gate](https://www.virtuozzo.com/application-platform-docs/ssh-overview) khusus, yang menyediakan satu titik akses untuk mengkonfigurasi semua lingkungan dan server dalam akun Anda dari jarak jauh.


Proses [akses SSH](https://www.virtuozzo.com/application-platform-docs/ssh-access) ke node Elastic VPS sama seperti untuk container lainnya di Dewacloud, tetapi menyediakan akses root penuh.

- _**[Web SSH](https://docs.dewacloud.com/web-ssh-client)**_

Koneksi hanya dengan satu klik ke container VPS Anda dari dashboard Dewacloud tanpa memerlukan konfigurasi apa pun. 

<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-ssh-1.png" alt="elastic vps web ssh access" width="100%"/>


- _**[SSH Gate](https://docs.dewacloud.com/ssh-gate-access)**_

Koneksi SSH ke VPS dari console di mesin lokal Anda. Akses berdasarkan SSH Key Pair custom Anda.

:::note
Jika Anda belum melakukan koneksi melalui SSH Gate sebelumnya, Anda perlu melakukan langkah-langkah berikut terlebih dahulu: generate SSH Key Pair dan menambahkan public SSH key Anda ke dashboard.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-ssh-2.png" alt="elastic vps access via ssh gate" width="100%"/>

Jika Anda lebih suka mengoperasikan container VPS Anda dengan tool SSH eksternal, Anda bisa menggunakan [akses melalui Public IP address](https://docs.dewacloud.com/vps-public-ip). Terlepas dari metode yang digunakan, fungsionalitas dan kemampuan manajemen yang disediakan adalah sama.

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/win-rdp-access/)