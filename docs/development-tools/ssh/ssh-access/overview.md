---
sidebar_position: 1
slug: /ssh-access
title: Overview
---
# SSH Access

Platform ini mendukung akses melalui SSH dalam salah satu cara berikut:

  * _**[Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)**_ \- Akses ke node terpisah dalam environment Anda, yang didasarkan pada _sesi pengguna_; koneksi dimulai dengan mengklik tombol **Web SSH** di samping environment yang diinginkan di dashboard (yang memungkinkan untuk terhubung dari mana saja melalui Internet, hanya dengan menggunakan browser).

  * _**[SSH Gate](<https://docs.dewacloud.com/docs/ssh-gate-access/>)**_ \- Jenis koneksi ini didasarkan pada penggunaan _pasangan kunci SSH_ dan memungkinkan akses ke [seluruh akun PaaS](<https://docs.dewacloud.com/docs/ssh-gate-access/#ssh-access-to-platform-account>) atau hanya [container tertentu](<https://docs.dewacloud.com/docs/ssh-gate-access/#direct-access-to-container>); ini memberikan tingkat keamanan yang substansial, menghubungkan hanya instansi dengan **kunci SSH privat** yang sesuai dengan **kunci publik** yang tepat, disimpan dalam pengaturan akun platform Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/overview/overview-1.png" alt="PaaS SSH access options" width="100%"/>

Setelah mengakses node melalui SSH menggunakan salah satu metode yang dijelaskan di atas, Anda dapat mulai mengelola container Anda.

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [Web SSH Access](<https://docs.dewacloud.com/docs/web-ssh-client/>) 
  * [SSH Gate Access](<https://docs.dewacloud.com/docs/ssh-gate-access/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)
  * [SSH Protocols](<https://docs.dewacloud.com/docs/ssh-protocols/>)
  * [Capistrano](<https://docs.dewacloud.com/docs/ssh-capistrano/>)