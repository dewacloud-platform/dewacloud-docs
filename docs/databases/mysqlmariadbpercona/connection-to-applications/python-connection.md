---
sidebar_position: 3
slug: /python-connection
title: Python Connection
---
# Python Application Connection to MySQL/MariaDB/Percona

**MySQL**, **MariaDB**, dan **Percona** sangat populer di kalangan pengembang di seluruh dunia, ketika database SQL open source diperlukan. Dalam instruksi ini, kami akan menunjukkan cara menghubungkan aplikasi **Python** Anda, yang di-host di dalam platform, ke server DB ini.

1. Masuk ke dashboard platform dan [buat environment baru](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan server _Python_ dan _MySQL_ (atau _Python_ dan _MariaDB_).

![create Python MySQL environment](#)

:::tip
Menempatkan instance dalam satu environment hanyalah contoh, Anda dapat membuat koneksi antara environment yang berbeda dengan cara yang sama.
:::

2. Setelah environment dibuat, akses server aplikasi Anda melalui SSH Gate, misalnya dengan menekan tombol **[Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)**.

![Python Web SSH button](#)

Emulator terminal dengan koneksi SSH yang otomatis terhubung ke node Anda akan terbuka di tab yang sesuai.

3. Sekarang, instal [MySQL connector untuk Python](<https://github.com/sanpingz/mysql-connector>) (ini juga berfungsi dengan MariaDB) dengan perintah berikut:

```
pip install mysql-connector==2.1.6
```

![install Python MySQL connector](#)

:::warning
Untuk menggunakan versi yang lebih baru dari MySQL connector, Anda perlu menginstal **Protobuf C++** versi 2.6.0 atau di atasnya.
:::

4. Selanjutnya, mari kita buat skrip Python sederhana untuk membuat koneksi database. Anda dapat menggunakan editor teks apa pun yang diinginkan untuk tugas ini, serta nama file apa pun dengan ekstensi _**.py**_ (misalnya, _**vim script.py**_).

```
import mysql.connector
from mysql.connector import errorcode

try:
    cnx = mysql.connector.connect(user='\{user\}', password='\{password\}', 
                                  host='\{host\}', database='\{database\}')
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    print("You are connected!")
    cnx.close()
```

Di sini, Anda perlu menyesuaikan string koneksi (semua informasi yang diperlukan diberikan dalam email untuk node MySQL / MariaDB Anda):

  * _**\{user\}**_ \- nama pengguna untuk login ke database
  * _**\{password\}**_ \- kata sandi untuk pengguna yang sesuai
  * _**\{host\}**_ \- tautan ke container MySQL / MariaDB Anda
  * _**\{database\}**_ \- database yang akan diakses (misalnya, default _mysql_)

![Python MySQL connection code](#)

Skrip ini akan menghubungkan ke server database yang ditentukan dengan kredensial yang diberikan dan akan mencetak kesalahan koneksi (jika ada) atau hanya menampilkan frasa “_You are connected!_”.

5. Jadi, mari kita jalankan kode kita dengan perintah berikut:

```
python script.py
```

![Python MySQL connection test](#)

Jika string “_You are connected!_” muncul di dalam terminal, koneksi berhasil. Sekarang, Anda bisa yakin bahwa server database Anda dapat diakses dan Anda dapat [memperluas kode](<https://dev.mysql.com/doc/connector-python/en/>) untuk mengeksekusi tindakan yang diperlukan.

## Baca Juga{#whats-next}

  * [Java Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql/>)
  * [PHP Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Node.js Connection to MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql-nodejs/>)
  * [MySQL Master Slave Replication](<https://docs.dewacloud.com/docs/database-master-slave-replication/>)
  * [MySQL Multi Master Replication](<https://docs.dewacloud.com/docs/multi-master-mysql-replication/>)