---
sidebar_position: 2
slug: /linux-vps-access-via-ssh-gate
title: Linux VPS Access via SSH Gate
---

# Akses Linux VPS melalui SSH Gate

Untuk mengelola perangkat lunak yang diperlukan di dalam container Elastic VPS Anda, Anda perlu terhubung ke dalamnya melalui protokol SSH. Koneksi dapat dilakukan melalui [SSH Gate](https://www.virtuozzo.com/application-platform-docs/ssh-overview) khusus, yang menyediakan satu titik akses untuk mengkonfigurasi semua lingkungan dan server dalam akun Anda dari jarak jauh.

:::note
Untuk manajemen Windows VPS, gunakan dukungan remote desktop protocol (RDP).
:::

Proses [akses SSH](https://www.virtuozzo.com/application-platform-docs/ssh-access) ke node Elastic VPS sama seperti untuk container lainnya di platform, tetapi menyediakan akses root penuh.

- _**[Web SSH](https://docs.dewacloud.com/web-ssh-client)**_

Koneksi satu klik ke container VPS Anda dari dashboard platform tanpa memerlukan konfigurasi apa pun. ![elastic vps web ssh access](#)

- _**[SSH Gate](https://docs.dewacloud.com/ssh-gate-access)**_

Koneksi SSH ke VPS dari konsol di mesin lokal Anda. Akses berdasarkan pasangan kunci SSH khusus Anda.

:::note
Jika Anda belum melakukan koneksi melalui SSH Gate sebelumnya, Anda perlu melakukan langkah-langkah berikut terlebih dahulu: menghasilkan pasangan kunci SSH dan menambahkan kunci SSH publik Anda ke dashboard.
:::

![elastic vps access via ssh gate](#)

Jika Anda lebih suka mengoperasikan container VPS Anda dengan bantuan alat SSH eksternal, pertimbangkan untuk membangun [akses melalui alamat Public IP](https://docs.dewacloud.com/vps-public-ip). Terlepas dari pendekatan yang dipilih, fungsionalitas dan kemampuan manajemen yang disediakan adalah sama.

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/win-rdp-access/)