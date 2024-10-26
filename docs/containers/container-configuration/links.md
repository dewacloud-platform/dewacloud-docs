---
sidebar_position: 3
slug: /container-links
title: Links
---

# Links{#links}

Bagian **Links** dimaksudkan untuk membangun koneksi antara containers yang ditempatkan di berbagai layer dari satu environment.

Setelah koneksi tersebut ditetapkan, sebuah container akan dapat bekerja dengan [environment variables](<https://docs.dewacloud.com/docs/container-variables/>) dari image yang terhubung (dengan ini, properti yang diimpor dapat dikenali oleh prefix yang ditentukan). Di bawah ini, kami akan memberikan contoh langkah demi langkah dari containers linking.

1\. Klik tombol **Add** dan isi kolom yang muncul:

  * **Node** \- pilih layer yang diperlukan dari environment saat ini menggunakan daftar drop-down
  * **Alias** \- ketik alias koneksi (_LB_ dalam kasus kami). Selanjutnya, ini akan digunakan sebagai prefix untuk variabel yang diimpor ke container(s) saat ini dari layer yang dipilih di kolom sebelumnya

<img src="https://assets.dewacloud.com/dewacloud-docs/container/configuration/links/links-1.png" alt="add linking layer settings" width="100%"/>

:::tip 
Saat menghubungkan containers, platform juga menambahkan catatan DNS yang sesuai (dengan nama identik dengan alias yang digunakan) ke DB platform. Dengan cara ini, Anda dapat merujuk ke container tertentu dari dalam dua layer environment ini tidak hanya melalui alamat IP atau NodeID-nya, tetapi juga menentukan alias yang ditugaskan dengan counter, yaitu \{alias_name\}_N. Misalnya, setelah menghubungkan dengan DB alias, Anda dapat melakukan ping containers tertentu pada layer yang sesuai sebagai “db_1”, “db_2”, dll. saat bekerja dengan network internal platform melalui SSH Gateway. Di sini, jika menggunakan alias layer umum (yaitu tanpa counter, “db” dalam kasus kami), sistem akan menggunakan algoritma Round-Robin untuk memilih container mana pun dalam grup node yang ditentukan.
:::

2\. Setelah itu klik **Save** untuk mengkonfirmasi pengaturan linking. Anda dapat menghubungkan sebanyak mungkin grup node yang berbeda ke satu layer sesuai kebutuhan Anda.

:::note 
semua koneksi yang dinyatakan akan berlaku hanya setelah memilih tombol Apply untuk frame ini dan, jika diperlukan, untuk seluruh topology wizard. Ketahuilah bahwa node yang terhubung akan dimulai ulang untuk pengaturan baru diterapkan (mengakibatkan downtime singkat dari containers yang terlibat).
:::

3\. Anda selalu dapat **Edit** atau **Remove** link yang tidak diperlukan dengan tombol yang sesuai di panel atas frame _Docker layer settings_.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/configuration/links/links-2.png" alt="edit remove layer settings" width="100%"/>

Ketika pembaruan diterapkan, Anda dapat memeriksa hasilnya dengan beralih ke bagian _[Variables](<https://docs.dewacloud.com/docs/container-variables/>)_ (di mana parameter yang baru diimpor akan terdaftar).

## Baca Juga{#whats-next}

  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Variables](<https://docs.dewacloud.com/docs/container-variables/>)
  * [Volumes](<https://docs.dewacloud.com/docs/container-volumes/>)
  * [Ports](<https://docs.dewacloud.com/docs/container-ports/>)
  * [Run Config](<https://docs.dewacloud.com/docs/container-run-configuration/>)