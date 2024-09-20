---
sidebar_position: 3
slug: /access-to-admin-panel
title: Access to Admin Panel
---
# Managing Access to PHPMyAdmin

Platform memungkinkan Anda untuk mengelola akses ke panel _**phpMyAdmin**_ dengan fleksibel untuk server database _MySQL_, _MariaDB_, dan _PerconaDB_.

`Secara default, semua koneksi ke phpMyAdmin diizinkan dan, jika Anda ingin mengubah perilaku tersebut, sesuaikan file _**/etc/httpd/conf.d/phpMyAdmin-jel.conf**_. Cukup temukan bagian _<Directory /usr/share/phpMyAdmin/>_, di mana konfigurasi yang memungkinkan dijelaskan melalui komentar:`
  
     1  2  3  4  5  6  7  8  9 10 11 12 

|   
 `<Directory /usr/share/phpMyAdmin/>      ##REMOVE THE "Require all granted" STRING BELOW TO RESTRICT THE ACCESS FROM ANY IP EXCEPT SPECIFIED IN THE SECTION BELOW       Require all granted       ###UNCOMMENT THE FOLLOWING LINES TO ALLOW ACCESS FROM THE SPECIFIED IP      ###REPLACE THE xxx.xxx.xxx.xxx WITH THE IP ADDRESS FROM WHICH THE ACCESS IS ALLOWED      #SetEnvIf X-Forwarded-For ^xxx\.xxx\.xxx\.xxx env_allow_1      #Require env env_allow_1      #Require ip xxx.xxx.xxx.xxx      #Require all denied </Directory>`  

---|---  


Mari kita telusuri langkah demi langkah:

1\. Untuk mengubah perilaku default, yang memungkinkan semua koneksi, Anda perlu mengomentari/menghapus baris yang sesuai, seperti yang ditunjukkan dalam gambar di bawah (misalnya, menggunakan [file configuration manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) atau melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)):

![phpMyAdmin configuration file](#)

2\. Selanjutnya, daftar IP yang diizinkan harus ditentukan dalam format berikut (Anda dapat menghapus komentar dari template yang disediakan dan menentukan alamat IP yang benar):

  * _jika node database Anda memiliki [public IP](<https://docs.dewacloud.com/docs/public-ip/>)_
`      
    1 

|     
    
    Require ip {ipAddress}  

---|---

![configure access for db with public ip](#)

  * _jika node database Anda hanya memiliki IP internal_
  
    1 2 

|   
    
    SetEnvIf X-Forwarded-For {ipAddress} {varName} Require env {varName}   
  
---|---  
`

:::warning
Dalam hal ini, Anda harus menentukan {ipAddress} dalam format ^xxx.xxx.xxx.xxx agar dapat diproses dengan benar oleh Apache. Juga, Anda dapat menggunakan nama variabel {varName} yang diinginkan, misalnya env_allow_1.
:::
![configure access for db with internal ip only](#)

Jika diperlukan, Anda dapat menentukan beberapa alamat seperti yang ditunjukkan dalam gambar di atas.

3\. Hapus komentar dari baris terakhir dalam bagian tersebut, untuk menolak akses dari IP mana pun selain yang ditentukan:

![deny access to admin from not listed addresses](#)

4\. **Simpan** perubahan dan **Restart Nodes** dari server database Anda.

![restart database nodes](#)

Selesai! Setiap koneksi ke panel _phpMyAdmin_ dari alamat IP yang tidak ada dalam daftar yang diizinkan akan mengarah ke halaman seperti berikut:

![403 forbidden page example](#)

Sekarang, Anda bisa yakin bahwa panel admin database Anda terlindungi dari koneksi yang tidak diizinkan.

## Baca Juga {#whats-next}

  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)