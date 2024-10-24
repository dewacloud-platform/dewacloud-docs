---
sidebar_position: 5
slug: /endpoints
title: Endpoints
---

# Endpoints: A Direct Connection to the Cloud

Fitur **Endpoints** memungkinkan pemetaan port TCP/UDP melalui Shared Load Balancer, memfasilitasi kolaborasi yang lebih sederhana antara instance dan alat pihak ketiga. Fitur ini mempermudah sambungan langsung ke node tanpa memerlukan [IP Publik](https://docs.dewacloud.com/docs/public-ipv4), yang membantu dalam tugas seperti manajemen basis data jarak jauh, penerapan aplikasi langsung dari IDE, dan mengakses panel admin server.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/1-logo.png" alt="endpoints logo" width="20%"/>

### Keuntungan Utama:
- Kolaborasi instance yang lebih sederhana dengan alat pihak ketiga.
- Penghematan biaya dengan mengurangi kebutuhan alamat IP Eksternal.
  
## Managing Endpoints{#managing-endpoints}

Endpoints dapat diatur dari menu **Settings** di dashboard platform Anda. Untuk mengaksesnya, pilih **Settings** di sebelah lingkungan yang diinginkan dan klik **Endpoints**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/2-env.png" alt="environment settings" width="100%"/>

### Menambahkan Endpoints{#adding-endpoints}

1. **Tambahkan Endpoint Baru**: Klik **Add** dan isi formulir **Add Endpoint**:
   - **Node**: Pilih node.
   - **Name**: Pilih nama (baik kustom atau dari opsi yang sudah ditentukan).
   - **Private Port**: Tentukan port node lokal untuk pemetaan.
   - **Protocol**: Pilih TCP atau UDP.

**Port Publik** dan **URL Akses** akan secara otomatis diberikan oleh platform. Klik **Add** untuk menyelesaikan pembuatan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/4-add.png" alt="add endpoint" width="100%"/>

**Opsi yang Telah Dikonfigurasi Sebelumnya** (Contoh):

| Nama Koneksi   | Port Pribadi |
|----------------|--------------|
| Remote Desktop | 3389         |
| PowerShell     | 5986         |
| HTTP           | 80           |
| HTTPS          | 443          |
| MySQL          | 3306         |

### Mengedit atau Menghapus Endpoints{#editing-or-removing-endpoints}

Untuk mengedit atau menghapus endpoint yang ada:
- **Edit**: Pilih endpoint dan modifikasi pengaturan (kecuali pemilihan node).
- **Remove**: Konfirmasi pilihan Anda untuk menghapus endpoint.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/7-edit-remove.png" alt="edit remove endpoint" width="100%"/>

## Use Cases Endpoints{#endpoints-use-cases}

### Manajemen Basis Data{#database-management}

Endpoints mempermudah akses database jarak jauh tanpa perlu IP Publik. Berikut adalah contoh mengakses database MySQL melalui terminal dan klien DB pihak ketiga.

#### Koneksi melalui Terminal{#connection-via-terminal}

Gunakan terminal di komputer lokal Anda untuk terhubung ke basis data:

```bash
mysql -h \{host\} -P \{port\} -u \{user\} -p
```

- `\{host\}`: URL Akses endpoint tanpa port.
- `\{port\}`: Port publik yang diberikan ke endpoint.
- `\{user\}`: Pengguna basis data (biasanya `root` secara default).
- `\{password\}`: Kata sandi diminta setelah memasukkan perintah.

#### Koneksi melalui Klien Lokal (MySQL Workbench){#connection-via-local-client-mysql-workbench}

Untuk antarmuka grafis, gunakan alat seperti MySQL Workbench:

1. **Buat Koneksi Baru**:
   - **Connection Method**: TCP/IP
   - **Hostname**: URL Akses endpoint (tanpa port).
   - **Port**: Port publik yang diberikan ke endpoint.
   - **Username**: Pengguna basis data.
   - **Password**: Masukkan kata sandi atau simpan di Keychain.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/11-wb-1.png" alt="mysql workbench connection" width="100%"/>

2. **Akses Basis Data**: Klik dua kali koneksi untuk memulai dan mulai bekerja dengan basis data.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/14-wb-4.png" alt="access database" width="100%"/>

### Tahap Pengembangan Multiple pada Server Aplikasi Tunggal{#multiple-development-stages-on-a-single-app-server}

Endpoints memungkinkan Anda menggunakan server aplikasi tunggal untuk beberapa lingkungan, seperti produksi dan pengembangan.

1. **Tambahkan Endpoint** untuk server Apache dan pilih port pribadi (mis. 81).
2. **Terapkan aplikasi Anda dua kali** ke konteks berbeda (mis. `/prod` dan `/dev`).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/18-ap-4.png" alt="deploy to different contexts" width="100%"/>

3. **Modifikasi Konfigurasi Apache**:
   - Buka file `httpd.conf` dan tambahkan pendengar baru untuk port pribadi:
   
   ```bash
   Listen 0.0.0.0:\{port\}
   ```

   - Buat dua bagian **VirtualHost**, satu untuk produksi dan satu untuk pengembangan.
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/endpoints/19-ap-5.png" alt="apache virtualhost configurations" width="100%"/>

4. **Restart Apache** dan akses lingkungan produksi melalui URL normalnya, sementara menggunakan URL Akses endpoint untuk mencapai versi pengembangannya.

Pengaturan ini memungkinkan Anda melakukan tugas pengembangan tanpa mempengaruhi lingkungan produksi.

## Baca Juga{#whats-next}

- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Remote Access to MySQL](https://docs.dewacloud.com/docs/remote-access-mysql/)
- [Application Lifecycle](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)