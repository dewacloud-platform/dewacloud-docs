---
sidebar_position: 7
slug: /remote-access-via-webdav
title: Remote Access via WebDAV
---
# Akses File Jarak Jauh melalui WebDAV

Saat mengatur situs web, Anda mungkin menghadapi kebutuhan untuk membangun metode yang rumit untuk melihat dan memperbarui informasi di situs. **Web-based Distributed Authoring and Versioning (WebDAV)** adalah serangkaian ekstensi ke HTTP yang memungkinkan klien untuk melakukan operasi penulisan web jarak jauh. Beberapa dari ekstensi ini menimpa perlindungan dengan penguncian, manajemen namespace, dan properti (metadata) yang sepenuhnya diimplementasikan. Ekstensi lain yang ditawarkan termasuk manajemen versi, koleksi lanjutan, dan kontrol akses dengan HTTP Digest Authentication. XML digunakan untuk mengecilkan parameter metode dan respons.

**WebDAV** didasarkan pada HTTP yang sudah memiliki infrastruktur yang tersebar luas. Artinya, setiap aplikasi yang dibangun di atas WebDAV dapat menggunakan otentikasi yang kuat secara kriptografis, proxying, caching dan enkripsi dengan SSL, jika diinginkan. Keuntungan lain adalah WebDAV menggunakan XML, yang berarti bahwa protokol itu sendiri dapat diperluas tanpa mengfragmentasikannya.

Anda dapat menggunakan **WebDAV** di platform untuk membuat, mengubah, menyalin, dan memindahkan file di server Anda serta membuat dan mengelola direktori file langsung di cloud, dengan mudah mengaksesnya melalui HTTP/HTTPS. Dengan menggunakan WebDAV, Anda dapat memiliki akses gratis, instan, dan aman ke file aplikasi Anda di mana pun Anda memiliki koneksi jaringan.

Jadi, mari kita lihat bagaimana menggunakan solusi hebat ini untuk aplikasi Java Anda di cloud!

## Create Environment{#create-environment}

1\. Masuk ke akun PaaS.

2\. Saat di dashboard platform, klik tombol **Create environment**:

![remote access via webdav create environment](#)

3\. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya, **Tomcat 7 atau 6**). Kemudian ketik nama environment Anda, misalnya, _webdavtest_.

![remote access via webdav webdav1](#)

Hanya butuh satu menit untuk environment Anda dibuat.

![remote access via webdav webdav2](#)

## Upload Java Package{#upload-java-package}

1\. Unggah paket Java WAR Anda ke **Deployment manager**.

![remote access via webdav webdav3](#)

2\. Setelah paket berada di platform, deploy ke environment yang Anda buat sebelumnya.

![remote access via webdav webdav4](#)

Buka aplikasi Anda di browser untuk memastikan semuanya baik-baik saja.

![remote access via webdav webdav5](#)

## Configure Tomcat{#configure-tomcat}

Tomcat mengimplementasikan spesifikasi WebDAV menggunakan WebDAV Servlet, yang disertakan dengan semua distribusi standar Tomcat. Ikuti langkah berikut untuk mengonfigurasi dan menguji koneksi WebDAV.

1\. Klik tombol **config** untuk Tomcat.

![remote access via webdav webdav7](#)

2\. Tomcat hadir dengan servlet WebDAV Level 2. Untuk mengaktifkan koneksi Tomcat WebDAV Anda, tambahkan yang berikut ke **web.xml** (direktori server):

    
```xml
<servlet> 
    <servlet-name>webdav</servlet-name> 
    <servlet-class>org.apache.catalina.servlets.WebdavServlet</servlet-class> 
    <init-param>     
        <param-name>debug</param-name>     
        <param-value>0</param-value> 
    </init-param> 
    <init-param>     
        <param-name>listings</param-name>     
        <param-value>true</param-value> 
    </init-param> 
    <!-- The following for read-write access --> 
    <init-param>     
        <param-name>readonly</param-name>     
        <param-value>false</param-value> 
    </init-param> 
</servlet> 
<servlet-mapping> 
    <servlet-name>webdav</servlet-name> 
    <url-pattern>/webdav/*</url-pattern> 
</servlet-mapping>   
```    

![remote access via webdav webdav8](#)

3\. Pastikan bahwa hanya pengguna yang berwenang yang dapat mengakses WebDAV ke konteks Anda. Navigasikan ke **tomcat-users.xml**, buat pengguna baru dan tetapkan peran baru, misalnya:

```xml    
<tomcat-users> 
    <user name="test" password="tomcat" roles="role1" /> 
</tomcat-users>   
```    

![remote access via webdav webdav9](#)

4\. Tentukan peran yang baru saja Anda buat di bagian **auth-constraint** dari **web.xml**:

```xml  
<auth-constraint> 
    <role-name>role1</role-name> 
</auth-constraint>   
```    

![remote access via webdav webdav10](#)

5\. Simpan perubahan dan restart **Tomcat**.

![remote access via webdav webdav11](#)

## Connect to Server{#connect-to-server}

1\. Buat koneksi baru menggunakan klien desktop apa pun untuk WebDav (kami akan menggunakan BitKinex sebagai contohnya).

![remote access via webdav webdav12](#)

2\. Masukkan URL server Anda
(_http://\{your_env_name\}.[\{hoster_domain\}](<https://docs.dewacloud.com/docs/paas-hosting-providers>)/\{context\}/webdav_), tentukan login dan password untuk pengguna Tomcat Anda (dalam kasus kami kredensialnya adalah _test/tomcat_).

![remote access via webdav webdav13](#)

3\. Seperti yang Anda lihat, kami telah berhasil terhubung ke server kami.

![remote access via webdav webdav14](#)

Sebagai hasilnya, Anda akan melihat file-file Anda dan akan dapat mengeditnya, memperbarui, menambahkan beberapa file baru, dll.

Nikmati dengan WebDAV dan PaaS!

## Baca Juga{#whats-next}

  * [Modul Apache WebDav](<https://docs.dewacloud.com/docs/apache-webdav-module/>)
  * [Modul NGINX WebDav](<https://docs.dewacloud.com/docs/nginx-webdav-module/>)
  * [Konfigurasi VPS](<https://docs.dewacloud.com/docs/vps/>)