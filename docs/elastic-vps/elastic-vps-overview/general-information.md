---
sidebar_position: 1
slug: /general-information
title: General Information
---

# Elastic VPS

**Virtual Private Server (VPS)** hosting sangat populer di kalangan pengembang karena menawarkan keamanan yang kuat, sumber daya hosting yang andal, dan fleksibilitas yang luas. Namun, VPS memerlukan konfigurasi manual untuk aplikasi yang di-hosting, yang bisa menjadi tugas sulit bagi pengembang rata-rata. Ketika dihadapkan dengan kebutuhan untuk melakukan scaling (misalnya karena kesuksesan aplikasi Anda), hal ini membuatnya semakin sulit untuk menjaga agar layanan tetap dapat beroperasi dan cukup dipasok dengan sumber daya untuk menangani beban tanpa membayar lebih untuk kapasitas tambahan.

Platform ini memecahkan masalah elastisitas tersebut melalui implementasi yang disebut _**Elastic VPS**_ stacks. Mereka ditawarkan di atas empat jenis OS yang berbeda - _[CentOS](https://docs.dewacloud.com/vps-centos/)_ , _[Ubuntu](https://www.virtuozzo.com/application-platform-docs/vps-ubuntu/)_ , _[Debian](https://www.virtuozzo.com/application-platform-docs/debian-vps/)_ , dan _[Windows](https://docs.dewacloud.com/win-vm/)_ - memungkinkan Anda memilih yang paling sesuai dengan kebutuhan spesifik Anda.

![elastic VPS](#)

Fitur khas dari Elastic VPS stacks adalah:

- **insulasi** - setiap VPS yang diberikan merupakan instans yang sepenuhnya independen, yang hanya dapat diakses melalui [public IP](https://docs.dewacloud.com/public-ip/) khusus, sehingga tidak ada akun lain di perangkat keras yang dapat mempengaruhinya
- **kontrol penuh** - dimungkinkan untuk mengelola server virtual Anda dalam cara yang diinginkan karena root permissions yang disediakan
- **skalabilitas** - server dapat diatur untuk skalasi otomatis secara vertikal dan horizontal dengan menetapkan batasan sumber daya dan pemicu tertentu
- **efisiensi biaya** - VPS adalah solusi yang relatif murah (dibandingkan dengan biaya pembelian dan pemeliharaan server fisik khusus nyata) dan berkat model [pengaturan harga berbasis penggunaan](https://docs.dewacloud.com/pricing-model/) platform
- **alat manajemen** - akses ke [alat bawaan](https://docs.dewacloud.com/vps-configuration/#elastic-vps-inbuilt-tools) platform untuk konfigurasi yang lebih sederhana melalui dashboard GUI
- **stack dikelola** - Solusi perangkat lunak Elastic VPS dikelola oleh tim PaaS, memastikan pembaruan reguler dan kompatibilitas penuh dengan platform

Dengan cara ini, Anda mendapatkan instansi yang cukup canggih untuk menangani aplikasi besar dengan beban tinggi dan secara bersamaan memastikan administrasi yang sederhana.

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