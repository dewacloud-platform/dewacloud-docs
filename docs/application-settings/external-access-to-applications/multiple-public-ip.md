---
sidebar_position: 3
slug: /multiple-public-ip
title: Multiple Public IP
---

# Multiple Public IP Addresses for a Single Container

Platform mendukung penugasan beberapa [IP publik](https://docs.dewacloud.com/docs/public-ip/) (baik IPv4 dan IPv6) ke satu container. IP ini dapat berupa satu versi (IPv4 atau IPv6) atau keduanya secara bersamaan.

Sebagai contoh, ketika hosting beberapa situs web pada satu node, opsi multi-IP memungkinkan penanganan mereka sebagai layanan siap-produksi terpisah dengan menerapkan [nama domain kustom](https://docs.dewacloud.com/docs/custom-domains/) dan [sertifikat SSL](https://www.virtuozzo.com/application-platform-docs/secure-sockets-layer/) khusus untuk setiap situs. Fitur ini juga dapat bermanfaat untuk mengelola perangkat jaringan (mis., load balancers) dengan beberapa alamat IP untuk setiap jaringan.

:::note
Baik Public IPv4 dan IPv6 adalah opsi berbayar, dikenai biaya secara terpisah berdasarkan jam penggunaan. Biaya pasti dan jumlah IP yang diizinkan per node/lingkungan dapat ditemukan di bagian **Quotas & Pricing > Account Limits** pada dashboard.
:::

Anda dapat menetapkan beberapa alamat IP melalui dashboard platform dengan menyesuaikan spinner **Public IPv4** dan **Public IPv6** saat membuat atau memodifikasi topologi lingkungan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/multiple-public-ip/02-wizard-add-multiple-ip.png" alt="wizard add multiple IP" width="100%"/>

Di sini, Anda dapat memilih atau memasukkan jumlah alamat yang dibutuhkan untuk kedua jenis. Jika batas tercapai, hubungi [penyedia hosting](https://www.virtuozzo.com/application-platform-partners/) Anda untuk meningkatkan jumlah alamat IP yang tersedia.

## Mengelola Alamat IP Publik Multiple{#managing-multiple-public-ip-addresses}

Pada dashboard utama, alamat IP yang diberikan ke setiap node dalam lingkungan ditampilkan dalam urutan berikut:

- **Private IP**: Alamat IP internal yang secara otomatis ditetapkan ke container (tercantum di bawah ID Node).
- **Public IPv4**: Alamat IPv4 eksternal atau daftar alamat yang diperluas.
- **Public IPv6**: Alamat IPv6 eksternal atau daftar alamat yang diperluas.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/multiple-public-ip/03-dashboard-managing-multiple-ip.png" alt="dashboard managing multiple IP" width="100%"/>

Setiap alamat IP memiliki opsi **Copy to clipboard** dan **Detach**. Anda juga dapat mengelola jumlah total IP yang diberikan melalui tombol **Attach/Detach IP(s)** di sebelah judul daftar.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/multiple-public-ip/04-change-number-of-public-ip.png" alt="change number of public IPs" width="50%"/>

Kotak **Node Settings** menampilkan jumlah alamat yang saat ini ditetapkan. Tombol **Apply** tetap redup sampai perubahan dilakukan.

:::note
**IP utama** (IP Publik pertama dari setiap jenis) digunakan untuk lalu lintas masuk dan keluar. Itu tidak dapat dihapus kecuali tidak ada lagi alamat lain dari jenis yang sama di node tersebut. IP lainnya hanya dapat menangani lalu lintas masuk.
:::

Anda juga dapat melihat semua alamat IP yang diberikan ke container dalam detail topologi lingkungan saat terhubung melalui [SSH Gate](https://docs.dewacloud.com/docs/ssh-access/).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/multiple-public-ip/05-multiple-public-ip-in-ssh.png" alt="multiple public IP in SSH" width="100%"/>

Alamat eksternal container ditampilkan di bawah kolom **WAN IP**, sedangkan kolom **LAN IP** mencantumkan alamat internal.

:::note
Jika jenis IP yang baru ditambahkan tidak secara eksplisit disebutkan (mis., dalam solusi **Cloud Scripting** atau paket aplikasi/add-on dari **Marketplace** platform), IPv4 digunakan secara default.
:::

## API Reference on Multiple Public IPs{#api-reference-on-multiple-public-ips}

### 1. Menyambung atau Memutuskan IP Publik melalui API{#attaching-or-detaching-public-ip-via-api}

Anda dapat menggunakan metode **SetExtIpCount** untuk menyambung atau memutuskan alamat IP Publik melalui API platform.

```bash
https://[hoster-api-host]/1.0/environment/control/rest/setextipcount?envname=[string]&session=[string]&type=[string]&count=[int]&nodegroup=[string]&nodeid=[int]
```

#### Parameters:
- **envname**: Nama lingkungan.
- **session**: ID sesi pengguna saat ini.
- **type**: Versi IP (`ipv4` atau `ipv6`).
- **count**: Jumlah IP yang akan ditambah atau dikurangi.
- **nodegroup**: Kelompok node tujuan (mis., `bl`, `cp`, `sqldb`, `nosqldb`, `storage`, `vps`, atau `build`).
- **nodeid**: ID dari node tujuan.

Untuk meningkatkan atau mengurangi jumlah IP (IPv4 atau IPv6), sesuaikan parameter **count**.

:::note
Metode **AttachExtIp** dan **DetachExtIp** (sebelumnya digunakan untuk menambah/menghapus IP Publik) dinyatakan usang tetapi tetap tersedia untuk kompatibilitas mundur.
:::

### 2. Menukar Alamat IP Publik melalui API{#swapping-public-ip-addresses-via-api}

Metode **SwapExtIps** memungkinkan Anda untuk menukar alamat IP Publik antara dua node dalam lingkungan yang sama atau berbeda.

```bash
https://[hoster-api-host]/1.0/environment/control/rest/swapextips?envname=[string]&session=[string]&sourcenodeid=[int]&destnodeid=[int]&sourceip=[string]&destip=[string]
```

#### Parameters:
- **envname**: Nama lingkungan.
- **session**: ID sesi pengguna saat ini.
- **sourcenodeid**: ID node tempat IP akan dipindahkan.
- **destnodeid**: ID dari node tujuan (bisa milik lingkungan lain).
- **sourceip**: IP Publik sumber yang akan ditukar.
- **destip**: IP Publik tujuan yang akan ditukar.

Untuk menukar semua IP Publik antar node, abaikan parameter **sourceip** dan **destip**.

:::note
Metode **SwapExtIps** saat ini hanya bekerja dengan alamat IPv4.
:::

## Baca Juga

- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
- [HTTP Load Balancing](https://docs.dewacloud.com/docs/load-balancing/)
- [TCP Load Balancing](https://docs.dewacloud.com/docs/tcp-load-balancing/)