---
sidebar_position: 2
slug: /variables
title: Variables
---

# Variables{#variables}

Pada tab **Variables**, Anda dapat melihat dan mengelola daftar [environment variables](<https://docs.dewacloud.com/docs/environment-variables/>) untuk layer saat ini.

Dalam hal [container linking](<https://docs.dewacloud.com/docs/container-links/>), variabel dari node lain dalam environment juga akan ditampilkan di tab yang sama dengan prefix khusus. Selain itu, mereka dapat diedit secara langsung, secara otomatis menerapkan perubahan ke semua source dan target containers.

1\. Untuk menyatakan sebuah [custom variable](<https://docs.dewacloud.com/docs/custom-environment-variables/>), klik tombol **Add** dan isi kolom yang muncul dengan variabel _Name_ dan _Value_ yang diperlukan.

**Catatan:** Nama variabel hanya boleh mengandung huruf Latin, angka, dan karakter underscore “_”.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/configuration/variables/variables-1.png" alt="add variable layer settings" width="100%"/>

Jangan lupa untuk **Save** variabel Anda.

2\. Selain menambahkan, Anda juga bisa **Edit** dan **Remove** catatan yang sudah ada (kecuali beberapa yang default) dengan bantuan tombol bernama sama.

:::tip 
Berikut beberapa tips untuk mempercepat proses konfigurasi: klik ganda pada variabel akan segera mengalihkan Anda ke pengeditan; jika Anda perlu menghapus beberapa catatan, Anda dapat memilihnya menggunakan tombol Shift atau Ctrl.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/container/configuration/variables/variables-2.png" alt="edit remove variable layer settings" width="100%"/>

3\. Klik **Apply** untuk menyimpan semua perubahan yang dibuat pada frame _Docker layer settings_ dan, jika diperlukan, satu kali lagi di jendela wizard untuk menerapkan perubahan tersebut.

## Baca Juga{#whats-next}

  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Links](<https://docs.dewacloud.com/docs/container-links/>)
  * [Volumes](<https://docs.dewacloud.com/docs/container-volumes/>)
  * [Ports](<https://docs.dewacloud.com/docs/container-ports/>)
  * [Run Config](<https://docs.dewacloud.com/docs/container-run-configuration/>)