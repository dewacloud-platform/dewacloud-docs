---
sidebar_position: 7
slug: /database-connection-via-hibernate
title: Database Connection via Hibernate
---
# Connection to DB using Hibernate

Untuk menghubungkan ke DB menggunakan Hibernate, pengguna harus melakukan langkah-langkah berikut:

  * Buat environment di platform
  * Tambahkan node database ke environment ini
  * Modifikasi beberapa file konfigurasi di web-app
  * Eksekusi query

Mari kita lakukan langkah demi langkah:

1\. Buat environment dengan server database (MySQL dalam contoh ini):

![database hibernate env created](#)

2\. Buat pengguna baru di database:

Cara membuat pengguna baru - [klik di sini](<https://docs.dewacloud.com/docs/connection-to-mysql/>).

    
    
    1 2 3 

|    

    
    
    Database name : jelasticDb   Username : jelastic   Password : jelastic   
  
---|---  
  
Untuk contoh ini, kami telah membuat tabel _books_ dengan kolom _book_name_ dan _book_author_ di dalam database _jelasticDb_.

3\. Modifikasi file konfigurasi berikut dari web-application Anda:

_**hibernate.cfg.xml**_

    
    
     1  2  3  4  5  6  7  8  9 10 11 

|    

    
    
    <hibernate-configuration>   <session-factory>     <property name="hibernate.dialect">org.hibernate.dialect.MySQLDialect</property>     <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>     <property name="hibernate.connection.url">jdbc:mysql://mysql{node_id}.{your_env_name}.{hoster_domain}:3306/jelasticDb</property>     <property name="hibernate.connection.username">jelastic</property>     <property name="hibernate.connection.password">jelastic</property>     <property name="hibernate.current_session_context_class">thread</property>     <mapping resource="com/Testdata.hbm.xml"/>   </session-factory> </hibernate-configuration>   
  
---|---  
  
:::note
Jangan lupa untuk memasukkan nilai yang benar ke dalam string hibernate.connection.url, menggantikan teks di dalam kurung kurawal. jdbc:mysql://mysql{node_id}.{your_env_name}.{hoster_domain}:3306/jelasticDb di mana {node_id} adalah ID dari kontainer dengan server MySQL yang ingin Anda akses. Ini dapat dilihat di dashboard:
:::

_**hibernate.revenge.xml**_

    
    
    1 2 3 4 

|    

    
    
    <hibernate-reverse-engineering>   <schema-selection match-catalog="jelasticDb"/>   <table-filter match-name="books"/> </hibernate-reverse-engineering>   
  
---|---  
  
Untuk langkah berikutnya, kami telah menggunakan mekanisme reverse engineering dan mendapatkan 2 file di proyek web kami:

  * Books.java
  * Books.hbm.xml

Anda juga perlu membuat file _**HibernateUtil.java**_, tetapi tidak perlu mengubahnya.

4\. Buat metode Java sederhana, yang akan menambahkan baris baru ke tabel _books_ dalam database kami:

    
    
    1 2 3 4 5 6 7 

|    
```
    public void addBook(){         Session s = HibernateUtil.getSessionFactory().getCurrentSession();                 s.beginTransaction();                    Books book = new Books("romeo and juliet","william shakespeare ");             s.save(book);             s.getTransaction().commit();     }   
```
---|---  
  
Perhatikan bahwa Anda harus meletakkan konektor untuk database (**.jar** library) ke dalam proyek Anda atau ke folder server web yang sesuai di environment.

## Baca Juga {#whats-next}

  * [Adding Database](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)
  * [Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)