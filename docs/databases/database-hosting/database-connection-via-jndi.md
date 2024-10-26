---
sidebar_position: 6
slug: /connection-to-db-via-jndi
title: Database Connection via JNDI
---

# Connection to DB using JNDI

Untuk menghubungkan ke DB menggunakan JNDI, Anda perlu melakukan langkah-langkah berikut:

  * Masuk ke PaaS dashboard
  * Buat environment
  * Tambahkan node database ke environment Anda
  * Modifikasi beberapa file konfigurasi di web-app
  * Buat koneksi dalam java-class

Mari kita lakukan langkah demi langkah:

1. Buat environment dengan database (MySQL dalam contoh ini):

   ![environment with MySQL](#)

2. Buat pengguna baru di database:

   ```plaintext
   Database name : jelasticDb
   User_name : jelastic
   Password : jelastic
   ```

   Cara membuat pengguna baru - [klik di sini](<https://docs.dewacloud.com/docs/connection-to-mysql/>).

3. Modifikasi file konfigurasi di web-application Anda:

   * **_context.xml_**

     ```xml
     <Context antiJARLocking="true" path="/JNDI">
       <Resource name="jdbc/jelasticDb" auth="Container" type="javax.sql.DataSource"
                 maxActive="100" maxIdle="30" maxWait="10000"
                 username="jelastic" password="jelastic" driverClassName="com.mysql.jdbc.Driver"
                 url="jdbc:mysql://mysql-jndi-example.{hoster_domain}/jelasticDb"/>
     </Context>
     ```

   * **_web.xml_**

     ```xml
     <resource-ref>
       <description>MySQL Datasource example</description>
       <res-ref-name>jdbc/jelasticDb</res-ref-name>
       <res-type>javax.sql.DataSource</res-type>
       <res-auth>Container</res-auth>
     </resource-ref>
     ```

4. Buat koneksi dalam java-class:

   ```java
   public class MyConnection {
     private DataSource dataSource;
   
     public MyConnection() {
       try {
         InitialContext context = new InitialContext();
         dataSource = (DataSource) context.lookup("java:comp/env/jdbc/jelasticDb");
       } catch (NamingException ex) {
         Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE, null, ex);
       }
     }
   
     public Connection getConnection() {
       Connection conn = null;
       try {
         conn = dataSource.getConnection();
       } catch (SQLException ex) {
         Logger.getLogger(MyConnection.class.getName()).log(Level.SEVERE, null, ex);
       }
       return conn;
     }
   }
   ```

## Baca Juga {#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Connection to DB using Hibernate](<https://docs.dewacloud.com/docs/connect-db-hibernate/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)