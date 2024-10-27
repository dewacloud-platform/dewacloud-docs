---
sidebar_position: 3
slug: /admin-access
title: Access to Admin Panel
---

# Mengelola Akses ke PHPMyAdmin

Platform memungkinkan Anda untuk mengelola akses ke panel _**phpMyAdmin**_ dengan fleksibel untuk server database _MySQL_, _MariaDB_, dan _PerconaDB_.

Secara default, semua koneksi ke phpMyAdmin diizinkan dan, jika Anda ingin mengubah perilaku tersebut, sesuaikan file `/etc/httpd/conf.d/phpMyAdmin-jel.conf`. Cukup temukan bagian `<Directory /usr/share/phpMyAdmin/>`, di mana konfigurasi yang memungkinkan dijelaskan melalui komentar:

```plaintext
<Directory /usr/share/phpMyAdmin/>
    ##REMOVE THE "Require all granted" STRING BELOW TO RESTRICT THE ACCESS FROM ANY IP EXCEPT SPECIFIED IN THE SECTION BELOW
    Require all granted
    ###UNCOMMENT THE FOLLOWING LINES TO ALLOW ACCESS FROM THE SPECIFIED IP
    ###REPLACE THE xxx.xxx.xxx.xxx WITH THE IP ADDRESS FROM WHICH THE ACCESS IS ALLOWED
    #SetEnvIf X-Forwarded-For ^xxx\.xxx\.xxx\.xxx env_allow_1
    #Require env env_allow_1
    #Require ip xxx.xxx.xxx.xxx
    #Require all denied
</Directory>
```

Mari kita telusuri langkah demi langkah:

1. Untuk mengubah perilaku default, yang memungkinkan semua koneksi, Anda perlu mengomentari/menghapus baris yang sesuai, seperti yang ditunjukkan dalam gambar di bawah (misalnya, menggunakan [file configuration manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) atau melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)):

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/access-to-admin-panel/access-to-admin-panel-1.png" alt="phpMyAdmin configuration file" width="100%"/>

2. Selanjutnya, daftar IP yang diizinkan harus ditentukan dalam format berikut (Anda dapat menghapus komentar dari template yang disediakan dan menentukan alamat IP yang benar):

   - jika node database Anda memiliki [public IP](<https://docs.dewacloud.com/docs/public-ip/>)

     ```plaintext
     Require ip {ipAddress}
     ```

     <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/access-to-admin-panel/access-to-admin-panel-2.png" alt="configure access for db with public ip" width="100%"/>

   - jika node database Anda hanya memiliki IP internal

     ```plaintext
     SetEnvIf X-Forwarded-For {ipAddress} {varName}
     Require env {varName}
     ```

     <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/access-to-admin-panel/access-to-admin-panel-3.png" alt="configure access for db with internal ip only" width="100%"/>

     :::warning
     Dalam hal ini, Anda harus menentukan `{ipAddress}` dalam format ^xxx.xxx.xxx.xxx agar dapat diproses dengan benar oleh Apache. Juga, Anda dapat menggunakan nama variabel `{varName}` yang diinginkan, misalnya env_allow_1.
     :::

   Jika diperlukan, Anda dapat menentukan beberapa alamat seperti yang ditunjukkan dalam gambar di atas.

3. Hapus komentar dari baris terakhir dalam bagian tersebut, untuk menolak akses dari IP mana pun selain yang ditentukan:

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/access-to-admin-panel/access-to-admin-panel-4.png" alt="deny access to admin from not listed addresses" width="100%"/>

4. **Simpan** perubahan dan **Restart Nodes** dari server database Anda.

   ![restart database nodes](#)

Selesai! Setiap koneksi ke panel _phpMyAdmin_ dari alamat IP yang tidak ada dalam daftar yang diizinkan akan mengarah ke halaman seperti berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/access-to-admin-panel/access-to-admin-panel-5.png" alt="403 forbidden page example" width="100%"/>

Sekarang, Anda bisa yakin bahwa panel admin database Anda terlindungi dari koneksi yang tidak diizinkan.

## Baca Juga {#whats-next}

- [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
- [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
- [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)
- [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
