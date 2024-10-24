---
sidebar_position: 4
slug: /container-firewall
title: Container Firewall
---

# Container Firewall Rules Management

Fitur **Container Firewall** dari platform menyediakan cara untuk mengontrol ketersediaan node Anda baik di dalam maupun di luar PaaS. Ini mengevaluasi berbagai parameter (seperti sumber permintaan masuk, protokol, dan port node target) untuk secara fleksibel mengelola akses ke container Anda dengan mengonfigurasi aturan koneksi yang diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/container-firewall/01-firewall-and-isolation-illustration.png" alt="firewall and isolation illustration" width="80%"/>

:::tip
Untuk membatasi akses antar lingkungan dalam satu akun, pertimbangkan menggunakan fitur **Network Isolation**.
:::

## Container Firewall Management via Platform UI{#container-firewall-management-via-platform-ui}

Setiap node (kecuali container [Docker](https://docs.dewacloud.com/docs/container-types/) dan [Windows](https://www.virtuozzo.com/application-platform-docs/iis8/)) kustom) dilengkapi dengan aturan firewall, yang dapat dikelola melalui antarmuka pengguna grafis (GUI). Akses bagian ini dengan memilih **Settings** di sebelah lingkungan yang diperlukan dan klik **Firewall**.

:::note
Ketersediaan UI **Container Firewall** bergantung pada penyedia hosting Anda. Hubungi dukungan platform Anda untuk meminta aktivasi jika Anda tidak melihat fitur ini.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/container-firewall/02-firewall-environment-settings.png" alt="firewall environment settings" width="100%"/>

### Tabs Available:{#tabs-available}

- **Overview**: Menampilkan informasi umum tentang firewall dan memungkinkan Anda untuk mengubah status firewall (diaktifkan secara default untuk semua container).
- **Inbound Rules**: Mengelola permintaan masuk (permintaan yang tidak terdaftar ditolak secara default).
- **Outbound Rules**: Mengontrol koneksi keluar (permintaan yang tidak terdaftar diizinkan secara default).

### Default Firewall Rules{#default-firewall-rules}

Setelah membuat container baru, platform secara otomatis mengisi bagian **Inbound** dan **Outbound Rules** dengan catatan yang diperlukan untuk memastikan pengoperasian container.

:::tip
Aturan default diambil berdasarkan port **EXPOSE** dalam dockerfile gambar.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/container-firewall/03-container-firewall-inbound-rules.png" alt="container firewall inbound rules" width="100%"/>

Aturan disusun sebagai berikut:

1. **Aturan yang tidak dapat diedit**: Catatan berwarna abu-abu dengan prioritas tertinggi memungkinkan infrastruktur platform mengelola operasi, akses SSH, dan load balancing tanpa IP publik.
2. **Aturan default dan tambahannya oleh pengguna**: Termasuk aturan untuk koneksi **SSH**, **HTTP**, **HTTPS**, dan **FTP**.
3. **Aturan terakhir**: Aturan terakhir, tidak dapat diedit dan berwarna abu-abu, memblokir setiap koneksi masuk yang tidak diizinkan oleh aturan sebelumnya.

### Menambahkan Aturan Default{#adding-default-rules}

Untuk menentukan port kustom yang dibuka melalui container firewall selama pembuatan node, Anda dapat menggunakan variabel lingkungan **OPEN_INBOUND_PORTS**.

1. Buat lingkungan baru, pilih stack perangkat lunak, dan navigasikan ke **Variables**.
2. Tambahkan variabel dalam format ini:
   
    ```bash
    "OPEN_INBOUND_PORTS": "port1, port2, ..., portN"
    ```

3. Periksa aturan firewall setelah pembuatan untuk memastikan port yang ditambahkan.

### Rules Management{#rules-management}

Anda dapat mengelola aturan firewall yang ada dan menambah yang baru menggunakan tombol **Add**, **Edit**, **Remove**, **Disable**, **Enable**, dan **Refresh**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/container-firewall/04-firewall-rules-management-buttons.png" alt="firewall rules management buttons" width="80%"/>

Parameter untuk aturan firewall baru meliputi:

- **Nodes**: Pilih layer lingkungan.
- **Name**: Berikan nama untuk aturan.
- **Protocol**: Pilih **TCP**, **UDP**, atau keduanya.
- **Port Range**: Tentukan port atau rentang port untuk dibuka/tutup.
- **Source**: Pilih sumber permintaan, dapat berupa IP kustom, rentang yang telah ditentukan, atau node lingkungan.
- **Priority**: Tetapkan prioritas (nilai lebih rendah diterapkan terlebih dahulu).
- **Action**: Atur untuk mengizinkan atau menolak permintaan.

Anda dapat mengedit aturan yang ada kecuali untuk bidang **Nodes**. Aturan dapat dinonaktifkan atau diaktifkan sementara menggunakan tombol yang sesuai.

## Use Cases Firewall{#firewall-use-cases}

### Batasi Akses melalui Antarmuka Pengguna{#restrict-access-via-user-interface}

Berikut adalah cara memblokir akses ke container dari alamat IP tertentu:

1. Akses pengaturan **Firewall** untuk lingkungan yang diinginkan dan navigasikan ke tab **Inbound Rules**.
2. Klik **Add** dan konfigurasikan aturan sebagai berikut:

    - **Nodes**: Pilih container.
    - **Name**: Berikan nama aturan.
    - **Protocol**: Atur ke **TCP**.
    - **Port Range**: Biarkan kosong untuk diterapkan ke semua port.
    - **Source**: Pilih **Custom IP Address(es)** dan masukkan alamat IP.
    - **Priority**: Setel nilai yang sesuai (misalnya, 900).
    - **Action**: Pilih **Deny**.

3. Klik **Add** untuk menyimpan dan menerapkan aturan. IP yang diblokir akan menerima halaman 403 Forbidden ketika mencoba terhubung.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/container-firewall/08-prohibited-connection.png" alt="prohibited connection" width="60%"/>

### Batasi Akses melalui SSH{#restrict-access-via-ssh}

Aturan firewall juga dapat dikelola melalui [SSH Gate](https://docs.dewacloud.com/docs/ssh-access/).

1. Gunakan **Web SSH** dari dashboard platform untuk mengakses node.
2. Verifikasi bahwa firewall container diaktifkan dengan memeriksa `/etc/jelastic/metainf.conf`:

    ```bash
    cat /etc/jelastic/metainf.conf
    ```

3. Edit file `/etc/sysconfig/iptables-custom` dan deklarasikan aturan firewall Anda dalam format `iptables-save`:

    ```bash
    -I INPUT -s 111.111.111.111 -p tcp -m state --state NEW -m tcp --dport 1111 -j DROP
    ```

4. Terapkan aturan firewall kustom:

    ```bash
    sudo /usr/bin/jem firewall fwstart
    ```

5. Verifikasi aturan firewall dengan:

    ```bash
    sudo jem firewall list {table} {options}
    ```

### Setting Rules via Platform API{#setting-rules-via-platform-api}

Metode API berikut tersedia untuk mengelola aturan firewall:

- **AddRule**: Buat aturan baru.
- **EditRule**: Edit aturan yang ada.
- **GetRules**: Ambil aturan firewall untuk lingkungan.
- **RemoveRule**: Hapus aturan.
- **SetFirewallEnabled**: Aktifkan firewall.

Metode ini dapat digunakan untuk skrip kustom dan otomatisasi.

## Baca Juga{#whats-next}

- [Network Isolation](https://docs.dewacloud.com/docs/environment-isolation/)
- [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Endpoints](https://docs.dewacloud.com/docs/endpoints/)