---
sidebar_position: 1
slug: /connection-to-mysql-java
title: Java Connection
---
# Java Connection to MariaDB/MySQL/Percona

**MariaDB** , **MySQL** , dan **Percona** adalah database open source yang sangat populer, digunakan oleh pengembang di seluruh dunia. Dalam instruksi ini, kami akan menunjukkan cara menghubungkan aplikasi Java Anda ke database ini, baik server standalone maupun [solusi cluster](\<https://docs.dewacloud.com/company/blog/mysql-mariadb-database-auto-clustering-cloud-hosting/\>).

1. Masuk ke akun PaaS Anda dan [buat environment](\<https://docs.dewacloud.com/docs/setting-up-environment/\>) dengan server database **MariaDB** (atau **MySQL**) (tersedia dalam bagian _**SQL**_ wizard):

   * untuk server database standalone ![new Java environment with standalone database](#)

   * untuk solusi Auto-Clustering ![new Java environment with database auto-cluster](#)

Kami juga menambahkan node **Tomcat** untuk memberikan contoh koneksi database dari server aplikasi.

2. Periksa kotak masuk email Anda - seharusnya ada pesan dengan detail administrasi untuk server MariaDB (atau MySQL) yang telah dibuat.

Dalam kasus cluster database, _**Entry Point for Connecting**_ merujuk pada _ProxySQL load balancer_.

3. Kembali ke dashboard dan klik tombol **Open in Browser** untuk node MariaDB/MySQL Anda.

![MariaDB open in browser](#)

Jika Anda memiliki solusi cluster, tekan **Open in Browser** di sebelah node master database (ditandai sebagai **M**).

![MariaDB auto-cluster open in browser](#)

Masuk ke panel admin yang terbuka menggunakan kredensial dari email yang disebutkan sebelumnya.

4. Gunakan database yang sudah ada (misalnya _**test**_) atau **Buat** yang baru.

![MariaDB phpMyAdmin admin panel](#)

5. Kembali ke dashboard dan klik tombol **Config** di sebelah server aplikasi (_Tomcat_ , dalam kasus kami) untuk mengakses [file konfigurasi manager](\<https://docs.dewacloud.com/docs/configuration-file-manager/\>).

![application server config button](#)

6. Arahkan ke folder **/opt/tomcat/temp**, buat file baru _**mydb.cfg**_.

Untuk koneksi database standalone, tambahkan data berikut di file _**mydb.cfg**_:

```
host=jdbc:mysql://\{host\}/\{db\_name\} 
username=\{user\} 
password=\{password\} 
driver=com.mysql.jdbc.Driver
```

Semua informasi yang diperlukan dapat ditemukan dalam email node MariaDB/MySQL:

   * _**\{host\}**_ - tautan ke node DB Anda tanpa bagian protokol
   * _**\{db\_name\}**_ - nama database (_test_ dalam kasus kami)
   * _**\{user\}**_ dan _**\{password\}**_ - kredensial admin database (untuk penggunaan produksi, disarankan untuk membuat akun khusus dengan izin yang sesuai)

![MySQL connection details](#)

Untuk koneksi ke cluster, ProxySQL load balancer digunakan sebagai titik masuk, dan setiap jenis database memiliki konektornya sendiri. Jadi tambahkan data berikut ke file _**mydb.cfg**_:

Untuk MariaDB:

```
host=jdbc:mariadb://\{hostname\}/\{db\_name\}?usePipelineAuth=false 
username=\{user\} 
password=\{password\} 
driver=org.mariadb.jdbc.Driver
```

   * _**\{hostname\}**_ - tautan ke load balancer cluster DB Anda (yaitu layer ProxySQL)
   * _**\{db\_name\}**_ - nama database. Kami memilih _test_ pada langkah pertama
   * _**usePipelineAuth**_ - jika diaktifkan, kueri yang berbeda dieksekusi menggunakan pipeline (semua kueri dikirim, baru kemudian semua hasil dibaca), memungkinkan pembuatan koneksi lebih cepat. Nilai ini harus diatur ke _**false**_ , karena implementasi seperti itu tidak berfungsi dengan ProxySQL di depan cluster
   * _**\{user\}**_ dan _**\{password\}**_ - kredensial database yang diterima di email

![MariaDB auto-cluster connection details](#)

Untuk MySQL:

```
host=jdbc:mysql://\{host\}/\{db\_name\} 
username=\{user\} 
password=\{password\} 
driver=com.mysql.jdbc.Driver
```

   * _**\{hostname\}**_ - tautan ke load balancer cluster DB Anda (yaitu layer ProxySQL)
   * _**\{db\_name\}**_ - nama database (_test_ dalam kasus kami)
   * _**\{user\}**_ dan _**\{password\}**_ - kredensial admin database (untuk penggunaan produksi, disarankan untuk membuat akun khusus dengan izin yang sesuai)

Dengan cara ini, semua pengaturan koneksi disimpan dalam satu file, yang nantinya akan dibaca oleh aplikasi.

7. Untuk deployment dan koneksi lebih lanjut, kami akan menggunakan aplikasi contoh berikut:

```
package connection; 
import java.io.IOException; 
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
import java.sql.Statement; 
import java.text.SimpleDateFormat; 
import java.util.Date; 
import java.util.Properties; 
import java.util.logging.Level; 
import java.util.logging.Logger;

public class DbManager { 
   // implementation... 
}
```

8. [Deploy](\<https://docs.dewacloud.com/docs/deployment-guide/\>) aplikasi contoh kami ke server Tomcat Anda menggunakan tautan berikut:

_[https://download.jelastic.com/public.php?service=files&t=b2c6e4e01d487dfd5af953ba31dac848&download](\<https://download.jelastic.com/public.php?service=files&t=b2c6e4e01d487dfd5af953ba31dac848&download\>)_

![Java deploy from URL](#)

![Java application deployment dialog](#)

:::note
Aplikasi contoh kami sudah berisi konektor JDBC untuk akses database **MariaDB/MySQL**. Namun, untuk menghubungkan proyek Anda sendiri, Anda perlu mengunggahnya secara manual ke folder **webapps/\{app\_context\}/WEB-INF/lib** di server aplikasi Anda. Jangan lupa untuk me-restart server aplikasi Anda untuk menerapkan perubahan **mydb.cfg**, dengan menekan tombol **Restart Node**.
:::

9. Setelah deployment selesai, klik **Open in Browser** di jendela popup atau di sebelah server aplikasi Anda.

![successful deployment dashboard notification](#)

10. Di tab browser yang terbuka, klik tombol **Create test table in your database**.

![example application of the server connection to database](#)

11. Sekarang, untuk memastikan semuanya berjalan lancar, kembali ke panel _**phpMyAdmin**_ dan navigasikan ke database _**test**_.

![new table added to database](#)

Anda akan melihat bahwa tabel yang baru dibuat muncul dengan nama _\{date-time of creation\}_ , yang berarti database berhasil diakses dan dimodifikasi dari aplikasi Java Anda. Semudah itu!

## Useful to Know{#useful-to-know}

Platform ini juga memungkinkan Anda untuk memperluas fungsi server MariaDB/MySQL Anda dengan mengikuti instruksi yang sesuai dalam dokumentasi kami:

   * atur jenis replikasi database yang disukai dengan fitur [Auto-Clustering](\<https://docs.dewacloud.com/company/blog/mysql-mariadb-database-auto-clustering-cloud-hosting/\>) yang disematkan untuk meningkatkan kinerja DB dan perlindungan dari kehilangan data
   * sesuaikan [Jadwal Backup](\<https://docs.dewacloud.com/docs/database-backups/\>) untuk memastikan keamanan informasi di dalam DB Anda jika terjadi kegagalan server yang tak terduga
   * lihat instruksi [Akses Jarak Jauh](\<https://docs.dewacloud.com/docs/remote-access-mysql/\>) dan pelajari cara mengakses database Anda dari jarak jauh melalui klien desktop MySQL yang disukai
   * gunakan panduan [Impor/Ekspor Dump Files](\<https://docs.dewacloud.com/docs/dump-import-export-to-mysql/\>) untuk mengetahui cara membuat cadangan dan memulihkan data secara manual dari dump yang telah dibuat sebelumnya
   * lihat [String Koneksi Database](\<https://docs.dewacloud.com/docs/database-connection/\>) untuk mendapatkan informasi lebih lanjut tentang cara mengonfigurasi koneksi ke berbagai jenis database

## Video Tutorial on MySQL Connection to Java Application{#video-tutorial-on-mysql-connection-to-java-application}

Anda dapat menggunakan versi video tutorial untuk melihat cara membuat environment baru, mengonfigurasi server database MySQL, menghubungkannya dari aplikasi Anda, dan akhirnya, melakukan deployment aplikasi ke platform.

## Baca Juga{#whats-next}

   * [Akses Jarak Jauh ke MySQL/MariaDB](\<https://docs.dewacloud.com/docs/remote-access-mysql/\>)
   * [Replikasi Master-Slave MySQL](\<https://docs.dewacloud.com/docs/database-master-slave-replication/\>)
   * [Replikasi

 Master-Slave MariaDB](\<https://docs.dewacloud.com/docs/mariadb-master-slave-replication/\>)
   * [Backup Database](\<https://docs.dewacloud.com/docs/database-backups/\>)
   * [Konfigurasi Database](\<https://docs.dewacloud.com/docs/database-configuration-files/\>)