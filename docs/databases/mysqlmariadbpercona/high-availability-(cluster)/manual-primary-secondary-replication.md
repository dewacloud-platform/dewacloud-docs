---
sidebar_position: 2
slug: /database-primary-secondary-replication
title: Manual Primary-Secondary Replication
---
# MySQL/MariaDB/Percona Database Primary-Secondary Replication

**Primary-secondary replication** digunakan untuk menyelesaikan berbagai masalah kinerja, mendukung pencadangan berbagai database, dan sebagai bagian dari solusi yang lebih besar untuk mengurangi kegagalan sistem. Ini memungkinkan data dari satu server database (_primary_ , sebelumnya dikenal sebagai “master”) direplikasi ke satu atau lebih server database (_secondaries_ , sebelumnya dikenal sebagai “slaves”). Primary mencatat pembaruan, yang kemudian diteruskan ke secondaries. Secondary mengirimkan pesan yang menyatakan bahwa pembaruan telah diterima dengan sukses, yang memungkinkan pengiriman pembaruan selanjutnya. Replikasi primary-secondary dapat bersifat sinkron atau asinkron. Perbedaannya hanya pada waktu propagasi perubahan. Jika perubahan dibuat pada primary dan secondary secara bersamaan, itu sinkron. Jika perubahan diantrekan dan ditulis nanti, itu asinkron.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-1.png" alt="database primary-secondary replication" width="60%"/>

Penggunaan yang disarankan untuk replikasi di database MySQL/MariaDB/Percona meliputi:

  * Solusi scale-out
  * Keamanan data
  * Analitik
  * Distribusi data jarak jauh

Bagaimana Anda dapat menggunakan replikasi ini dan mengambil manfaat darinya:

  * **Backups:** untuk menggunakan replikasi sebagai solusi pencadangan, replikasi data dari master ke slave, lalu cadangkan data di slave. Slave dapat dijeda dan dimatikan tanpa mempengaruhi operasi master yang sedang berjalan, sehingga Anda dapat menghasilkan snapshot data “langsung” yang efektif yang sebaliknya memerlukan penghentian master.
  * **Scale-out:** Anda dapat menggunakan replikasi sebagai solusi scale-out; yaitu, di mana Anda ingin membagi beban query database di beberapa server database, dalam beberapa batasan yang masuk akal. Karena replikasi bekerja dari distribusi satu master ke satu atau lebih slaves, menggunakan replikasi untuk scale-out bekerja paling baik di lingkungan dengan jumlah bacaan yang tinggi dan jumlah tulis/pembaruan yang rendah.
  * **Menyebarkan beban:** mungkin ada situasi ketika Anda memiliki satu master dan ingin mereplikasi database yang berbeda ke slave yang berbeda. Misalnya, Anda mungkin ingin mendistribusikan data penjualan hanya ke departemen yang diperlukan untuk membantu menyebarkan beban selama analisis data.
  * **Meningkatkan kinerja:** seiring bertambahnya jumlah slave yang terhubung ke master, beban, meskipun minimal, juga meningkat, karena setiap slave menggunakan koneksi klien ke master. Karena setiap slave harus menerima salinan penuh dari log biner master, beban jaringan pada master juga dapat meningkat dan menciptakan bottleneck. Jika Anda menggunakan banyak slaves yang terhubung ke satu master, dan master tersebut juga sibuk memproses permintaan (misalnya, sebagai bagian dari solusi scale-out), maka Anda mungkin ingin meningkatkan kinerja proses replikasi. Salah satu cara untuk meningkatkan kinerja proses replikasi adalah dengan membuat struktur replikasi yang lebih dalam yang memungkinkan master hanya mereplikasi ke satu slave, dan slaves yang tersisa terhubung ke slave utama ini untuk kebutuhan replikasi mereka.
  * **Mengurangi kegagalan:** Anda dapat mengatur master dan slave (atau beberapa slaves) dan menulis skrip yang memantau master untuk memeriksa apakah itu aktif. Kemudian instruksikan aplikasi dan slaves Anda untuk mengubah master jika terjadi kegagalan.
  * **Keamanan:** Anda dapat menggunakan SSL untuk mengenkripsi transfer log biner yang diperlukan selama replikasi, tetapi baik master maupun slave harus mendukung koneksi jaringan SSL. Jika salah satu host tidak mendukung koneksi SSL, replikasi melalui koneksi SSL tidak mungkin dilakukan. Pengaturan replikasi menggunakan koneksi SSL mirip dengan pengaturan server dan klien menggunakan SSL. Anda harus mendapatkan (atau membuat) sertifikat keamanan yang sesuai yang dapat Anda gunakan di master dan sertifikat serupa (dari otoritas sertifikat yang sama) di setiap slave.

Sekarang, mari kita periksa contoh sederhana tentang cara mengonfigurasi replikasi master-slave di platform.

## Manual Installation{#manual-installation}

Jika Anda lebih suka mengonfigurasi replikasi Master-Slave secara manual untuk mendapatkan lebih banyak slave replicators atau menentukan beberapa konfigurasi khusus, silakan ikuti instruksi di bawah ini.

### Create Environments{#create-environments}

:::tip
Instruksi di bawah ini sepenuhnya cocok untuk server database MySQL dan MariaDB.
:::

Pertama-tama, kita membuat dua environment untuk database master dan slave kita.

1\. Masuk ke dashboard platform dan klik tombol **New Environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-2.png" alt="create new environment button" width="80%"/>

2\. Di wizard **Environment Topology**, pilih **MariaDB** (atau MySQL) sebagai database yang ingin Anda gunakan. Tetapkan batas cloudlet dan ketik nama environment pertama Anda, misalnya _masterbase_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-3.png" alt="environment topology wizard" width="100%"/>

Tunggu sebentar untuk environment Anda dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-4.png" alt="master database created" width="100%"/>

3\. Dengan cara yang sama, buat satu environment lagi dengan MariaDB atau cukup [klon](<https://docs.dewacloud.com/docs/clone-environment/>) itu. Mari beri nama _slavebase_. Ini akan ditempatkan di hardnode lain, yang bahkan lebih aman dan andal untuk menyimpan data Anda.

Sekarang Anda memiliki dua environment identik dengan dua database.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-5.png" alt="slave database created" width="100%"/>

### Configure Primary Database{#configure-primary-database}

Sekarang mari kita konfigurasi basis master.

1\. Klik tombol **Config** untuk database master Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-6.png" alt="master DB config button" width="100%"/>

2\. Arahkan ke file _**my.cnf**_ dan tambahkan properti berikut seperti yang ditunjukkan di bawah ini:

```
server-id = 1
log-bin = mysql-bin
binlog-format = mixed
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-7.png" alt="master DB my.cnf config" width="100%"/>

Kami menggunakan format binlog “mixed” (_binlog-format = mixed_) untuk memungkinkan replikasi operasi dengan foreign key.

:::note
Jangan gunakan format binlog “statement”. Jika tidak, Anda akan mendapatkan kesalahan di kemudian hari!
:::

3\. **Simpan** perubahan dan **Restart** MariaDB untuk menerapkan parameter konfigurasi baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-8.png" alt="master DB restart node" width="100%"/>

4\. Klik tombol **Open in Browser** untuk **MariaDB**. Platform telah mengirimkan email kepada Anda dengan kredensial ke database. Masuk menggunakan kredensial ini.

5\. Arahkan ke tab **User accounts** dan klik **Add user account**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-9.png" alt="master DB add user" width="100%"/>

6\. Tentukan nama dan kata sandi untuk pengguna replikasi slave Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-10.png" alt="database user credentials" width="100%"/>

Sekarang, gulir ke bawah dan centang hak administratif _replication client_ dan _replication slave_.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-11.png" alt="database user privileges" width="100%"/>

Klik **Go** di bagian bawah halaman.

7\. Beralih ke tab **Status** untuk memastikan bahwa replikasi dikonfigurasi dengan benar.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-12.png" alt="master DB status" width="100%"/>

Perhatikan nilai log _File_ dan _Position_, karena ini akan diperlukan nanti untuk mengatur database slave.

### Configure Secondary Database{#configure-secondary-database}

Mari kembali ke dashboard platform dan konfigurasikan database slave kita.

1\. Klik tombol **Config** untuk environment _slavebase_ Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-13.png" alt="slave DB config button" width="100%"/>

2\. Arahkan ke file _**my.cnf**_ dan tambahkan string berikut:

```
server-id = 2
slave-skip-errors = all
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-14.png" alt="slave DB my.cnf config" width="100%"/>

Kami mengizinkan slave base kami untuk melewati semua kesalahan dari master (_slave-skip-errors = all_) agar tidak menghentikan operasi slave normal jika terjadi kesalahan pada master base.

:::note
Pengabaian ini tidak disarankan untuk digunakan selama tahap pengembangan karena membantu menemukan dan memecahkan bug. Namun, di lingkungan produksi (saat kode Anda sudah diuji), ini membantu menghindari desinkronisasi akibat beberapa masalah kecil di node master.
:::

3\. Selanjutnya, buka file _**/etc/phpMyAdmin/config.inc.php**_ dan tambahkan opsi berikut:

```
$cfg['AllowArbitraryServer'] = true;
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-15.png" alt="slave DB arbitrary server option" width="100%"/>

4\. **Simpan** perubahan dan **Restart** server database slave Anda untuk menerapkan parameter konfigurasi baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-16.png" alt="slave DB restart node" width="100%"/>

5\. Mari kita konfigurasikan server database slave kita melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>) bawaan. Hubungkan ke database Anda menggunakan kredensial dari email yang diterima setelah pembuatan node.

```
mysql -u root -p
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-17.png" alt="MySQL access via Web SSH" width="100%"/>

6\. Berikan detail master replikasi.

```
CHANGE MASTER

 TO MASTER_HOST='node275500-masterbase.jelastic.com', MASTER_USER='slave', MASTER_PASSWORD='passw0rd', MASTER_LOG_FILE='mysql-bin.000001', MASTER_LOG_POS=853;
```

Jangan lupa untuk mengganti nilai opsi dalam contoh di atas dengan data yang benar:

  * **MASTER_HOST** \- URL atau IP dari master replikasi
  * **MASTER_USER** \- pengguna replikasi
  * **MASTER_PASSWORD** \- kata sandi pengguna replikasi
  * **MASTER_LOG_FILE** \- file log master (lihat langkah terakhir dari bagian konfigurasi master)
  * **MASTER_LOG_POS** \- posisi log master (lihat langkah terakhir dari bagian konfigurasi master)

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-18.png" alt="SSH set replication master" width="100%"/>

7\. Sekarang, Anda dapat memulai slave replikasi dengan perintah yang sesuai:

```
start slave;
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-19.png" alt="SSH start replication slave" width="100%"/>

:::tip
Jika Anda ingin memastikan bahwa semuanya dikonfigurasi dengan benar, masuklah ke admin database slave dan buka tab Status.
<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-20.png" alt="database status tab" width="100%"/>
:::

### Check Results{#check-results}

Sekarang kita harus memastikan bahwa replikasi master-slave berfungsi untuk database kita.

1\. Mari buat database baru (misalnya _jelastic_) di master base kita.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-21.png" alt="master DB create database" width="100%"/>

2\. Arahkan ke slave base, dan Anda akan melihat bahwa database baru berhasil direplikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication/manual-primary-secondary-replication-22.png" alt="slave DB replicated database" width="100%"/>

### Connection to Primary-Secondary{#connection-to-primary-secondary}

Berikut adalah dua contoh menghubungkan ke database master dan slave dari aplikasi **Java** dan **PHP** Anda.

1\. Sebagai contoh, Anda dapat melihat kode aplikasi Java kami, yang terhubung ke database master dan slave.

**Database_config.cfg:**

```
master_host=jdbc:mysql://mariadb-master-host/mysql
master_username=root
master_password=abcABC123
slave_host=jdbc:mysql://mariadb-slave-host/mysql
slave_username=root
slave_password=abcABC123
driver=com.mysql.jdbc.Driver
```

**Dbmanager.java:**

```java
package com.jelastic.test;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DbManager {

    private final static String createDatabase = "CREATE SCHEMA IF NOT EXISTS jelastic";
    private final static String showDatabases = "SHOW DATABASES";

    public Connection createMasterConnection() throws IOException, ClassNotFoundException, SQLException {
        Connection masterConnection;
        Properties prop = new Properties();
        prop.load(new FileInputStream(System.getProperty("user.home") + "/database_config.cfg"));
        String master_host = prop.getProperty("master_host").toString();
        String master_username = prop.getProperty("master_username").toString();
        String master_password = prop.getProperty("master_password").toString();
        String driver = prop.getProperty("driver").toString();

        Class.forName(driver);
        masterConnection = DriverManager.getConnection(master_host, master_username, master_password);
        return masterConnection;
    }

    public Connection createSlaveConnection() throws IOException, ClassNotFoundException, SQLException {
        Connection slaveConnection;
        Properties prop = new Properties();
        prop.load(new FileInputStream(System.getProperty("user.home") + "/database_config.cfg"));
        String slave_host = prop.getProperty("slave_host").toString();
        String slave_username = prop.getProperty("slave_username").toString();
        String slave_password = prop.getProperty("slave_password").toString();
        String driver = prop.getProperty("driver").toString();

        Class.forName(driver);
        slaveConnection = DriverManager.getConnection(slave_host, slave_username, slave_password);
        return slaveConnection;
    }

    public boolean runSqlStatementOnMaster() {
        boolean execute = false;
        Statement statement = null;
        try {
            statement = createMasterConnection().createStatement();
            execute = statement.execute(createDatabase);
        } catch (IOException ex) {
            Logger.getLogger(DbManager.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DbManager.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return execute;
    }

    public List<String> runSqlStatementOnSlave() {
        List<String> stringList = new ArrayList<String>();
        Statement statement = null;
        ResultSet resultSet = null;
        try {
            statement = createSlaveConnection().createStatement();
            resultSet = statement.executeQuery(showDatabases);
            while (resultSet.next()) {
                stringList.add(resultSet.getString(1));
            }
        } catch (IOException ex) {
            Logger.getLogger(DbManager.class.getName()).log(Level.SEVERE, null, ex);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(DbManager.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            if (resultSet != null) {
                try {
                    resultSet.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return stringList;
    }
}
```

2\. Koneksi ke database master dan slave untuk aplikasi **PHP** Anda:

```php
<?php

/* Master settings */
$master_server = "xx.xxx.x.xx";
$master_username = "root";
$master_password = "abcABC123";

/* Slave settings */
$slave_server = "xx.xxx.x.xx";
$slave_username = "root";
$slave_password = "abcABC123";

$link_to_master = mysqli_connect($master_server, $master_username, $master_password, 'mysql');

if (!$link_to_master) {
    printf("Unable to connect master database server. Error: %s\n", mysqli_connect_error());
    exit;
}

$link_to_slave = mysqli_connect($slave_server, $slave_username, $slave_password, 'mysql');

if (!$link_to_slave) {
    printf("Unable to connect slave database server. Error: %s\n", mysqli_connect_error());
    exit;
}

print(" Creating database with name Jelastic on Master node ");
$result = mysqli_query($link_to_master, 'CREATE DATABASE JelasticX');
sleep (3);

print(" Checking if created database was replicated to slave ");
if ($result = mysqli_query($link_to_slave, 'SHOW DATABASES LIKE "JelasticX"')) {
    $result_text = mysqli_fetch_array($result);
    print (" Replicated database is ".$result_text[0]);
}

mysqli_close($link_to_master);
mysqli_close($link_to_slave);

?>
```

Sekarang, Anda memiliki replikasi database sendiri di cloud. Nikmati!

## Baca Juga{#whats-next}

  * [Java Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql/>)
  * [PHP Connection to MySQL/MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php/>)
  * [Remote Access to MySQL/MariaDB](<https://docs.dewacloud.com/docs/remote-access-mysql/>)