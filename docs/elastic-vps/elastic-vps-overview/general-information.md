---
sidebar_position: 1
slug: /vps
title: General Information
---

# Elastic VPS

**Virtual Private Server (VPS)** hosting sangat populer di kalangan developer karena menawarkan keamanan yang kuat, resource hosting yang andal, dan fleksibilitas yang luas. Namun, VPS memerlukan konfigurasi manual untuk aplikasi yang di-hosting, yang bisa menjadi tugas sulit bagi developer. Ketika dihadapkan dengan kebutuhan untuk melakukan scaling (misalnya karena kesuksesan aplikasi Anda), hal ini membuatnya semakin sulit untuk menjaga agar layanan tetap dapat beroperasi dan memiliki resource yang cukup untuk menangani beban tanpa membayar lebih untuk kapasitas tambahan.

Platform ini memecahkan masalah elastisitas tersebut melalui implementasi yang disebut _**Elastic VPS**_ stacks. Elastic VPS menawarkan solusi tersebut dengan 4 pilihan OS yang berbeda - _[CentOS](https://docs.dewacloud.com/vps-centos/)_ , _[Ubuntu](https://docs.dewacloud.com/vps-ubuntu/)_ , _[Debian](https://docs.dewacloud.com/vps-debian/)_ , dan _[Windows](https://docs.dewacloud.com/win-vm/)_ - memungkinkan Anda memilih yang paling sesuai dengan kebutuhan spesifik Anda.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/elastic-vps/vps-general-info.png" alt="elastic VPS" width="100%"/>
</p>

Fitur unik dari Elastic VPS stacks adalah:

- **insulasi** - setiap VPS yang diberikan merupakan instance yang sepenuhnya independen, yang hanya dapat diakses melalui [public IP](https://docs.dewacloud.com/public-ip/) khusus, sehingga tidak ada akun lain di hardware yang dapat mempengaruhinya
- **kontrol penuh** - memungkinkan untuk mengelola server virtual Anda dalam cara yang diinginkan karena root permissions yang disediakan
- **skalabilitas** - server dapat diatur untuk scaling otomatis secara vertikal dan horizontal dengan menetapkan batasan resource dan trigger tertentu
- **efisiensi biaya** - VPS adalah solusi yang relatif murah (dibandingkan dengan biaya pembelian dan pemeliharaan server fisik dedicated) dan berkat model [pengaturan harga _pay-per-use_](https://docs.dewacloud.com/pricing-model/) Dewacloud
- **management tools** - akses ke [inbuilt tools](https://docs.dewacloud.com/vps-configuration/#elastic-vps-inbuilt-tools) Dewacloud untuk konfigurasi yang lebih sederhana melalui dashboard GUI
- **managed stack** - Solusi software Elastic VPS dikelola oleh tim PaaS, memastikan update rutin dan kompatibilitas penuh dengan platform

Dengan cara ini, Anda mendapatkan instance yang cukup canggih untuk menangani aplikasi besar dengan beban tinggi dan secara bersamaan memastikan administrasi yang sederhana.

Untuk mengungkap semua kemampuan performa yang disediakan oleh Elastic VPS, lihat panduan dan kasus penggunaan yang sesuai:

- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)
- [Linux VPS Access via SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/)
- [Linux VPS Access via Public IP](https://docs.dewacloud.com/vps-public-ip/)
- [Windows VPS Access via RDP](https://docs.dewacloud.com/win-rdp-access/)
- [Run Java Console Application](https://docs.dewacloud.com/standalone-application/)
- [Setting Mail Server Inside VPS](https://docs.dewacloud.com/adding-mail-server-vps/)
- [Managing Windows Server Roles & Features](https://docs.dewacloud.com/win-vps-roles-features/)

## Baca Juga{#whats-next}

- [CentOS VPS](https://docs.dewacloud.com/vps-centos/)
- [Ubuntu VPS](https://docs.dewacloud.com/vps-ubuntu/)
- [Debian VPS](https://docs.dewacloud.com/debian-vps/)
- [Windows VM](https://docs.dewacloud.com/win-vm/)
- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)