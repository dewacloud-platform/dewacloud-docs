---
sidebar_position: 1
slug: /java-connection-to-postgresql
title: Java Connection
---
# How to Connect PostgreSQL with Java Application

PostgreSQL adalah database SQL open source yang kuat dengan struktur objek-relasional dan berbagai fitur kuat untuk memastikan kinerja dan keandalan yang sangat baik. Dalam tutorial ini, kami akan menunjukkan cara menghubungkan database [PostgreSQL](<https://www.postgresql.org/>) dengan aplikasi Java yang di-host di Jelastic PaaS.

1\. Masuk ke dashboard Jelastic, [buat](<https://docs.dewacloud.com/docs/setting-up-environment/>) **Environment Baru** dengan server aplikasi **_Java_** dan **_database PostgreSQL._**

![create postgresql database](#)

2\. Setelah pembuatan, Anda akan menerima email dengan kredensial akses database Anda (host, login, dan password).

![postgresql access credentials](#)

3\. Klik tombol **Config** di sebelah server aplikasi Anda (_Tomcat_ dalam kasus kami) untuk mengakses [pengelola file konfigurasi](<https://docs.dewacloud.com/docs/configuration-file-manager/>) dan buat file **_mydb.cfg_** baru di folder **/opt/tomcat/temp**.

![postgresql configuration files](#)

4\. Berikan detail koneksi berikut di file **_mydb.cfg_**:

```
host=jdbc:postgresql://{host}/{db_name}
username={user}
password={password}
driver=org.postgresql.Driver
```

![postgresql connection details](#)

Di sini:

  *`{host}` \- tautan ke node DB Anda tanpa bagian protokol
  *`{db_name}` \- nama database (postgres dalam kasus kami)
  *`{user}` dan `{password}` - kredensial pengguna admin

**Catatan:** Biasanya, untuk produksi, disarankan untuk mendefinisikan pengguna terbatas baru melalui **_phpPgAdmin_** untuk aplikasi Anda dengan akses hanya ke database yang didedikasikan.
Namun, untuk contoh ini, kami akan mengambil pengguna default (yaitu _webadmin_ dengan akses administratif penuh ke server) dan database (_postgres_).

5\. Di bawah ini, Anda dapat melihat kode aplikasi yang digunakan dalam tutorial ini.

```java
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
    public String date = new SimpleDateFormat("dd-MM-yyyy-HH-mm").format(new Date());
    private final String createTable = "CREATE TABLE \"" + date + "\" (id INT, data VARCHAR(100));";
    private static final int LoginTimeout = 10;

    public DbManager() {
    }

    public Connection createConnection() throws IOException, ClassNotFoundException, SQLException {
        Properties prop = new Properties();
        System.out.println("\n\n=======================\nJDBC Connector Test " + date);
        System.out.println("User home directory: " + System.getProperty("user.home"));
        String host;
        String username;
        String password;
        String driver;

        try {
            prop.load(new java.io.FileInputStream(System.getProperty("user.home") + "/mydb.cfg"));
            host = prop.getProperty("host").toString();
            username = prop.getProperty("username").toString();
            password = prop.getProperty("password").toString();
            driver = prop.getProperty("driver").toString();
        } catch (IOException e) {
            System.out.println("Unable to find mydb.cfg in " + System.getProperty("user.home") + "\n Please make sure that configuration file created in this folder.");
            host = "Unknown HOST";
            username = "Unknown USER";
            password = "Unknown PASSWORD";
            driver = "Unknown DRIVER";
        }

        System.out.println("host: " + host + "\nusername: " + username + "\npassword: " + password + "\ndriver: " + driver);
        Class.forName(driver);
        System.out.println("--------------------------");
        System.out.println("DRIVER: " + driver);
        System.out.println("Set Login Timeout: " + LoginTimeout);
        DriverManager.setLoginTimeout(LoginTimeout);
        Connection connection = DriverManager.getConnection(host, username, password);
        System.out.println("CONNECTION: " + connection);
        return connection;
    }

    public String runSqlStatement() {
        String result = "";
        try {
            Statement statement = createConnection().createStatement();
            System.out.println("SQL query: " + createTable);
            statement.execute(createTable);
        } catch (IOException | ClassNotFoundException ex) {
            Logger.getLogger(DbManager.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("Exception occurred: " + ex);
            result = ex.getMessage();
        } catch (SQLException ex) {
            ex.printStackTrace();
            result = ex.getMessage();
        }
        return result;
    }
}
```

6\. [Deploy](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi contoh kami ke server Tomcat Anda. Karena spesifikasi versi servlet yang berbeda didukung oleh Tomcat 9 dan Tomcat 10, kami telah menyiapkan aplikasi masing-masing:

Untuk Tomcat 9:
[https://download.jelastic.com/public.php?service=files&t=18753849900d2461b3162bd4355f834d&download](<https://download.jelastic.com/public.php?service=files&t=18753849900d2461b3162bd4355f834d&download>)

Untuk Tomcat 10:
[https://download.jelastic.com/public.php?service=files&t=503e9768ee573fd452cec8a34a2215b2&download](<https://download.jelastic.com/public.php?service=files&t=503e9768ee573fd452cec8a34a2215b2&download>)

![deploy java application](#)

**Catatan:** Aplikasi contoh kami sudah berisi _jdbc-connector_ untuk akses database PostgreSQL. Namun, untuk proyek lain, Anda mungkin perlu mengunggahnya secara manual ke folder **webapps/\{app_context\}/WEB-INF/lib** pada server aplikasi Anda (jangan lupa untuk memulai ulang server setelah untuk menerapkan perubahan).

7\. Setelah sukses deploy, klik **Open in Browser** di sebelah server aplikasi Anda.

![open java application](#)

8\. Di dalam tab browser yang terbuka, klik tombol **Create test table in your database**.

![java jdbc connection](#)

Permintaan Anda akan diproses sebentar dan menampilkan pesan hasil.

![connect postgresql database in java](#)

9\. Mari kita akses database kita melalui **phpPgAdmin** untuk memastikan bahwa tabel baru telah dibuat (kredensial akses diberikan melalui email yang dijelaskan pada langkah kedua panduan ini).

![create postgresql table](#)
