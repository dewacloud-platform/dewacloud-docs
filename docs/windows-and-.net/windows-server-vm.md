---
sidebar_position: 3
slug: /windows-rd-access
title: Windows RD Access
---

# Akses Remote Desktop Windows

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/01-windows-vm-topology-wizard.png" alt="Windows RDP access" width="100%"/>

Semua node berbasis Windows di platform menyediakan dukungan **Remote Desktop Protocol** yang memungkinkan Anda untuk terhubung ke desktop virtual mesin Windows Anda dan melakukan konfigurasi server yang diperlukan melalui itu.

Untuk memastikan kenyamanan maksimal saat menggunakan layanan hosting Windows, platform kami dilengkapi dengan alat RDP terintegrasi - **Guacamole**. Ini adalah gateway remote desktop yang tidak memerlukan klien, yang dijalankan dari dalam web-browser melalui HTML5 dan tidak memerlukan plugin atau software klien tambahan yang terpasang.

Selain skenario koneksi default ini, Anda juga dapat menggunakan klien remote desktop lokal pilihan Anda. Di bawah ini, kami akan menjelaskan kedua cara pembentukan koneksi remote desktop secara lebih rinci:

- [RDP Connection via Web Client](https://docs.dewacloud.com/#rdp-connection-via-web-client)
- [RDP Connection via Local Client](https://docs.dewacloud.com/#rdp-connection-via-local-client)

## RDP Connection via Web Client{#rdp-connection-via-web-client}

Alur kerja yang diperlukan untuk mengakses desktop server serupa untuk semua node Windows VM. Untuk akses instan setelah pembuatan node, Anda dapat menggunakan link Guacamole satu kali yang langsung dari email yang diterima. Jika tidak, operasi yang diperlukan harus dilakukan melalui dashboard.

Mari kita pertimbangkan pada contoh server Windows VM.

1. Perluas daftar **Remote Desktop** yang dikhususkan di sebelah node berbasis Windows (atau layer) dan klik tombol **Open in Browser**.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/02-windows-vm-resource-plans.png" alt="remote desktop menu in dashboard" width="100%"/>

Opsi lain yang tersedia diperlukan untuk koneksi melalui [klien RDP lokal](https://docs.dewacloud.com/#rdp-connection-via-local-client):

- **Reset RDP Password** untuk mereset dan mengirim ulang kredensial Administrator
- **Info**, yang menampilkan informasi singkat tentang menetapkan koneksi RDP secara manual
- **RDP link** untuk menetapkan koneksi RDP melalui klien lokal Anda

2. Koneksi remote desktop akan dibuat dalam tab baru pada browser.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/03-vm-resources-and-cost.png" alt="remote desktop web client access" width="100%"/>

Setelah koneksi dibuat, Anda akan melihat window **Server Manager** terbuka. Sekarang, Anda dapat mulai [mengelola server Anda](https://docs.dewacloud.com/win-vps-roles-features/).

## RDP Connection via Local Client{#rdp-connection-via-local-client}

Jika Anda memilih untuk bekerja dengan klien remote desktop lokal, Anda harus menggunakan kredensial dari notifikasi email yang dikirim kepada Anda selama pembuatan environment yang bersangkutan. Alat yang mungkin ingin Anda gunakan adalah: _Remote Desktop_ (untuk Windows), _KRDC_, _Remina_, atau _RDesktop_ (untuk Linux), _Microsoft Remote Desktop_ (untuk Mac OS X).

Di bawah ini, kami akan menjelaskan contoh bekerja dengan klien RDP paling umum untuk sistem operasi Windows dan berbasis UNIX:

- [Untuk Windows](https://docs.dewacloud.com/#for-windows)
- [Untuk Linux/MacOS/FreeBSD](https://docs.dewacloud.com/#for-linuxmacosfreebsd)

### Untuk Windows{#for-windows}

1. Dapatkan aplikasi **[Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps#activetab=pivot:overviewtab)** dan luncurkan.

2. Klik **Add > PC** di bagian atas window yang terbuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/04-vm-label-and-resources-icon.png" alt="Windows remote desktop application" width="100%"/>

3. Berikan link koneksi RDP ([endpoint](https://docs.dewacloud.com/endpoints/)) ke dalam field **PC name**.

**Catatan:** Jika [public IP](https://www.virtuozzo.com/application-platform-docs/public-ip/) terpasang ke node Windows VM, itu harus digunakan sebagai pengganti endpoint.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/05-vm-current-resource-consumption.png" alt="provide RDP connection link" width="100%"/>

:::tip
Anda dapat memperoleh link yang diperlukan dari email setelah selesai pembuatan atau melalui dashboard: pengaturan environment > endpoints > menu Remote Desktop untuk node.
:::

4. Klik tombol **+** di samping **User account** dan tentukan kredensial akun Anda (lihat email yang sesuai).

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/08-vm-statistics-monitoring.png" alt="provide Windows VM access credentials" width="100%"/>

Klik **Save** dan atur pengaturan tambahan jika diperlukan.

Itu saja, koneksi Anda disimpan dalam bagian “**Saved Desktops**”. Klik untuk memulai sesi remote.

### Untuk Linux/MacOS/FreeBSD{#for-linuxmacosfreebsd}

Kami memilih utilitas _**rdesktop**_ sebagai contoh klien RD, tetapi Anda dapat menggunakan yang lain (misalnya, _**freerdp**_). Jika Anda belum memiliki alat ini diinstal pada komputer lokal Anda, dapatkan dengan menggunakan perintah yang sesuai sesuai dengan pengelola paket OS Anda (misalnya, _yum -y install rdesktop_ atau _sudo apt-get install rdesktop_).

**Catatan:** Untuk menetapkan koneksi remote melalui alat _**rdesktop**_, Anda perlu menonaktifkan _Network Level Authentication_ di konfigurasi **Remote Desktop** dari node Windows VM.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/09-vm-node-remote-desktop-options.png" alt="disable network level authentication" width="100%"/>

Jika Anda ingin mempertahankan pengaturan ini diaktifkan, Anda dapat menggunakan alat lain, seperti _**freerdp**_.

Kemudian buka terminal emulator Anda dan ikuti langkah berikut:

1. Cara termudah untuk terhubung ke remote desktop  adalah dengan menjalankan perintah berikut:

```
rdesktop {access_url}
```

di mana _**\{access_url\}**_ adalah URL koneksi untuk akses RDP (bisa dilihat di dashboard atau di dalam email yang diterima), ditentukan tanpa bagian yang mendefinisikan protokol.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/10-windows-vm-endpoint-for-rdp.png" alt="Unix RDP access" width="100%"/>

**Catatan:** Sebuah environment dengan server yang dibutuhkan harus memiliki status _Running_; jika tidak, Anda akan menerima error _Unable to connect_.

2. Di window yang terbuka, Anda perlu masuk dengan kredensial dari email yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/11-windows-vm-remote-desktop-connection.png" alt="Unix RDP credentials" width="100%"/>

:::note
Cara lain adalah dengan menentukan login dan kata sandi Anda secara langsung di string koneksi:
```
rdesktop -u {username} -p {password} {access_url}
```
Dengan cara ini, Anda akan melewati layar login dan akan mengakses desktop segera.
:::

Setelah otentikasi selesai, Anda akan melihat desktop virtual remote dari node yang diperlukan terbuka.

Sekarang, Anda dapat mulai mengonfigurasi server Anda menggunakan **Server Manager** bawaan.

## Baca Juga{#whats-next}

- [.NET Core (Beta)](https://docs.dewacloud.com/net-core/)
- [Windows VM](https://docs.dewacloud.com/win-vm/)
- [Windows Roles & Features](https://docs.dewacloud.com/win-vps-roles-features/)