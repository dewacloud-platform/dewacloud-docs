---
sidebar_position: 4
slug: /database-connection-strings
title: Database Connection Strings
---
# Database Connection Strings

Semua instance yang dibuat di dalam platform dioperasikan sebagai container independen. Untuk melakukan koneksi ke database dari aplikasi yang dideploy dalam server aplikasi, Anda perlu mengatur connection string untuk itu, menggunakan salah satu dari:

  * [CNAME](<https://docs.dewacloud.com/docs/database-hosting/#database-admin-panel-url>) dari database, misalnya `node{node_id}-{environment_name}.{hoster_domain}`
  * Alamat IP Private
  * Alamat [Public IP](<https://docs.dewacloud.com/docs/public-ip/>) (jika terpasang)

:::warning
Menentukan **localhost** dalam connection string tidak akan berfungsi untuk melakukan koneksi antara aplikasi dan database.
:::

Bergantung pada engine yang mendukung environment Anda, lihat salah satu bagian di bawah ini:

  * [Java](<https://docs.dewacloud.com/docs/#database-connection-for-java-apps>)
  * [PHP](<https://docs.dewacloud.com/docs/#database-connection-for-php-apps>)

## Database Connection for Java Apps {#database-connection-for-java-apps}

Lihat tabel jenis database untuk menemukan kode koneksi DB yang sesuai untuk aplikasi Anda:

DB Type | Connection code  
---|---  
[MySQL](<https://docs.dewacloud.com/docs/connection-to-mysql>)/[MariaDB](<https://docs.dewacloud.com/docs/connection-to-mariadb>) | _String URL = “jdbc:mysql://node\{node_id\}-\{environment_name\}.\{hoster_domain\}/\{dbname\}"; DriverManager.getConnection(URL, user_name, user_password);_  
MySQL [Auto-Cluster](<https://docs.dewacloud.com/docs/auto-clustering>) | Highly available connection via the scaled dedicated ProxySQL load balancers.  
String URL = “jdbc:mysql://proxy.\{environment_name\}.\{hoster_domain\}:3306/\{dbname\}"; DriverManager.getConnection(URL, user_name, user_password);_  
MariaDB [Auto-Cluster](<https://docs.dewacloud.com/docs/auto-clustering>) | Highly available connection via the scaled dedicated ProxySQL load balancers.  
String URL = “jdbc:mariadb://proxy.\{environment_name\}.\{hoster_domain\}:3306/\{dbname\}**?usePipelineAuth=false** "; DriverManager.getConnection(URL, user_name, user_password);_  
[PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql>) | _String URL = “jdbc:postgresql://node\{node_id\}-\{environment_name\}.\{hoster_domain\}/\{dbname\}"; DriverManager.getConnection(URL, user_name, user_password);_  
[MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb>) | _Mongo m = new Mongo(node`node_id`-`environment_name`.`hoster_domain`); DB db = m.getDB(`database_name`); if(db.authenticate(user_name, user_password.toCharArray())) `{ System.out.println(“Connected!"); }`_

Untuk encoding UTF-8, ubah connection string Anda seperti berikut ini:

```
jdbc:{dbtype}://{dbtype}{node_id}-{environment_name}.{hoster_domain}/{dbname}?useUnicode=yes&characterEncoding=UTF-8
```

:::tip
Domain penyedia hosting Anda dapat ditemukan di kolom terakhir tabel yang sesuai di halaman Hosters Info. Jika platform penyedia hosting Anda memiliki beberapa region environment untuk dipilih, nilai `{hoster_domain}` untuk environment Anda dapat berbeda dari yang umum di platform.
:::

## Database Connection for PHP Apps {#database-connection-for-php-apps}

Berdasarkan jenis DB yang digunakan, lihat contoh kode koneksi di bawah ini dan sesuaikan aplikasi Anda dengan tepat:

DB Type | Connection code  
---|---  
[MySQL dan MariaDB](<https://docs.dewacloud.com/docs/connection-to-mysql-php>) | _mysql_connect('HOST', 'USERNAME', 'PASSWORD')_  
[MongoDB](<https://docs.dewacloud.com/docs/connection-to-mongodb-for-php>) | _Mongo(“hostaddress”, array(“username” => “username”, “password” => “password”))_  
[PostgreSQL](<https://docs.dewacloud.com/docs/connection-to-postgresql-for-php>) | _pg_connect(“host=host_address port=5432 dbname=postgres user=webadmin password=password”)_  

:::note
Diperlukan untuk menentukan string host tanpa **http://**. Alamat dan kredensial yang sesuai terletak di email yang Anda terima setelah pembuatan database.
:::

## Baca Juga {#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)
  * [Scheduling DB Backups](<https://docs.dewacloud.com/docs/scheduling-backups/>)
  * [Connection to DB via JNDI](<https://docs.dewacloud.com/docs/connection-to-db-via-jndi/>)
  * [Connection to DB using Hibernate](<https://docs.dewacloud.com/docs/connect-db-hibernate/>)