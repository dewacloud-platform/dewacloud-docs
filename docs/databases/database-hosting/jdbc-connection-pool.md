---
sidebar_position: 5
slug: /jdbc-connection-pool
title: JDBC Connection Pool
---
# JDBC Connection Pool

**Connection pooling** dalam JDBC (Java Database Connectivity) adalah fitur optimasi yang menyimpan koneksi database dalam cache. Implementasi ini memungkinkan penggunaan kembali koneksi, daripada membuat dan menutup koneksi untuk setiap permintaan, yaitu:

  * _tanpa JDBC connection pool_ \- membuka koneksi ke layanan database sesuai kebutuhan dan menutupnya ketika halaman selesai memproses permintaan tertentu
  * _dengan JDBC connection pool_ \- mempertahankan koneksi yang terbuka dalam sebuah pool, sehingga jika sebuah halaman membutuhkan akses ke database, koneksi yang sudah ada akan digunakan (koneksi baru dibuat hanya jika tidak ada koneksi pool yang tersedia)

Mengonfigurasi JDBC pool connection untuk server aplikasi Anda dapat mengurangi penundaan dan konsumsi sumber daya dibandingkan dengan melayani setiap permintaan secara individual. Dengan cara ini, meningkatkan performa database (terutama untuk permintaan yang dilakukan ke aplikasi dinamis berbasis database).

Di sini, baik GlassFish dan Payara Java application servers menyediakan dukungan bawaan untuk mekanisme connection pooling guna meningkatkan akses database. Ikuti langkah sederhana berikut untuk mengonfigurasi JDBC connection pool:

  * [Create Environment](<https://docs.dewacloud.com/docs/#create-environment>)
  * [Prepare Database](<https://docs.dewacloud.com/docs/#prepare-database>)
  * [Configure Application Server](<https://docs.dewacloud.com/docs/#configure-application-server>)
  * [Connect from Java Code](<https://docs.dewacloud.com/docs/#connect-from-java-code>)

## Create Environment {#create-environment}

1\. Login ke akun PaaS Anda.

2\. Klik tombol **New Environment**.

![create new environment button](#)

3\. Di wizard topologi, beralih ke tab _**Java**_, pilih **GlassFish** atau **Payara** sebagai application server Anda dan tambahkan database yang diperlukan (sebagai contoh, kami menggunakan _GlassFish_ dan _MySQL_). Selanjutnya, atur batas sumber daya untuk container Anda dan ketik nama environment yang diinginkan.

![create GlassFish environment topology wizard](#)

Klik **Create**, tunggu beberapa menit untuk mendapatkan environment baru Anda, dan lanjutkan ke pembuatan JDBC connection pool.

## Prepare Database {#prepare-database}

1\. Klik tombol **Open in Browser** untuk node MySQL Anda.

![access MySQL database admin panel](#)

Gunakan email yang diterima dengan kredensial database untuk login ke panel _**phpMyAdmin**_ yang terbuka.

2\. Setelah masuk, beralih ke tab _**User accounts**_ dan klik tautan **Add user account**. Di dalam formulir yang terbuka, tentukan semua data yang diperlukan dan centang opsi _Create database with same name and grant all privileges_.

![create pooling user and database](#)

Klik **Go** di bagian bawah halaman untuk memulai penambahan database dan pengguna untuk connection pooling.

## Configure Application Server {#configure-application-server}

1\. JDBC MySQL connector disediakan secara default dengan stack (terletak di direktori **/opt/glassfish/glassfish/domains/domain1/lib** pada server GlassFish Anda atau **/opt/payara/glassfish/domains/domain1/lib** pada Payara), jadi Anda tidak perlu mengunggahnya secara manual.

![JDBC MySQL connector for GlassFish](#)

2\. Login ke **Admin panel** GlassFish (atau Payara), menggunakan kredensial dari email yang sesuai.

![access GlassFish admin panel](#)

3\. Navigasikan ke bagian **Resources > JDBC > JDBC Connection Pools** dan klik tombol **New** pada panel alat. Di dalam formulir yang muncul, isi kolom berikut:

  * _Pool Name_ \- ketik nama yang diinginkan
  * _Resource Type_ \- pilih item _javax.sql.DataSource_ dari daftar drop-down
  * _Database Driver Vendor_ \- pilih opsi _MySQL_

![create new JDBC connection pool](#)

Klik tombol **Next** untuk melanjutkan.

4\. Temukan dan modifikasi _**Additional Properties**_ berikut:

  * **User** \- berikan login database Anda (_pooling_ dalam kasus kami)
  * **ServerName** \- tentukan host database Anda tanpa protokol (misalnya, _node166355-gf-pooling.jelastic.com_)
  * **Port** \- tetapkan nomor port ke _3306_
  * **DatabaseName** \- berikan nama database Anda (_pooling_ dalam kasus kami)
  * **Password** \- simpan password untuk pengguna yang ditentukan
  * **URL** dan **Url** \- tetapkan JDBC connection string dalam format _jdbc:mysql://**{db_host}**:3306/_; placeholder _**{db_host}**_ dapat digantikan dengan hostname node (_node166355-gf-pooling.jelastic.com_) atau alamat IP (_192.168.2.57_)

![add additional pool properties](#)

Setelah properti ini ditentukan, klik **Finish**.

5\. Untuk memverifikasi aksesibilitas, pilih connection pool yang baru saja Anda buat dan klik tombol **Ping**. Jika semuanya berfungsi dengan baik, Anda akan melihat pesan pop-up _Ping Succeeded_.

![ping JDBC connection pool](#)

6\. Pergi ke bagian **Resources > JDBC > JDBC Resources** dan klik tombol **New** untuk membuat JDBC resources untuk pooling. Di jendela yang terbuka, berikan _JNDI Name_ yang diinginkan dan pilih _Pool Name_ Anda dari daftar drop-down.

![create new JDBC resource](#)

Konfirmasi pembuatan resources dengan tombol **OK** di bagian atas.

## Connect from Java Code {#connect-from-java-code}

Masukkan string berikut ke dalam kelas Java pada kode aplikasi Anda:

    
    
    1 2 3 

|    

    
    
    InitialContext ctx = new InitialContext(); DataSource ds = (DataSource)ctx.lookup("{resources}"); Connection conn = ds.getConnection();   
  
---|---  
  
Di sini, gantikan placeholder _**{resources}**_ dengan JNDI name Anda dari bagian sebelumnya (yaitu _jdbc/mypool_ dalam kasus kami).

Sekarang, Anda dapat mendeply aplikasi Java Anda ke platform dan menikmati keuntungan dari connection pooling GlassFish dan Payara Micro!

## Baca Juga {#whats-next}

  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Java App Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)