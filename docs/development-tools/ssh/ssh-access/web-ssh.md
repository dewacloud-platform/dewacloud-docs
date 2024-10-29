---
sidebar_position: 2
slug: /web-ssh-client
title: Web SSH
---
# SSH Access via Web Browser

Platform ini memungkinkan Anda untuk terhubung ke container mana saja secara langsung melalui browser dengan menggunakan klien **Web SSH**, tanpa perlu menghasilkan pasangan kunci SSH khusus atau menerapkan konfigurasi tambahan lainnya.

Cukup klik tombol **Web SSH** di samping layer yang diperlukan atau node tertentu agar tab dengan terminal emulator terbuka: 

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-access/web-ssh/web-ssh-1.png" alt="Web SSH direct connection" width="100%"/>

Menggunakan opsi di panel alat di atas jendela editor, Anda dapat:

  * beralih antara node di layer [horizontally-scaled](<https://docs.dewacloud.com/docs/horizontal-scaling>), memilih salah satu dalam daftar drop-down **Node ID**
  * membuka satu tab lagi dengan koneksi ke container saat ini dengan mengklik opsi **Duplicate Session** (ini memungkinkan untuk melakukan beberapa operasi simultan pada satu node, misalnya untuk melihat log secara real-time di satu jendela terminal dan mengelola aplikasi sendiri di jendela lain)

Selain itu, klien web SSH dilengkapi dengan pintasan yang terpasang untuk manajemen yang lebih nyaman (daftar mereka juga dapat dilihat dengan melayang di atas ikon keyboard di sudut kanan atas tab):

  * **Copy** (Ctrl + Shift + C)
  * **Paste** (Ctrl + V)
  * **Settings** (Ctrl + Shift + Alt) - memungkinkan untuk mengkonfigurasi emulator, misalnya untuk beralih metode input, mengubah teks papan klip secara manual, dll.

Sekarang, Anda dapat mulai mengelola container Anda melalui SSH (misalnya, mengatur variabel kustom, mengubah pengaturan firewall, dll.).

## Baca Juga{#whats-next}

  * [SSH Overview](<https://docs.dewacloud.com/docs/ssh-gate/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [SSH Gate Access](<https://docs.dewacloud.com/docs/ssh-gate-access/>)
  * [SSH Management](<https://www.virtuozzo.com/company/blog/ssh-to-container/>)
  * [SSH Protocols](<https://docs.dewacloud.com/docs/ssh-protocols/>)