---
sidebar_position: 4
slug: /java-application-server-config
title: Java App Server Configuration
---

# Java Application Server Configuration

Untuk melakukan konfigurasi yang diperlukan, tekan tombol **Config** di sebelah application server Anda. Jika Anda memiliki **beberapa application server**, Anda dapat mengkonfigurasi mereka secara bersamaan atau terpisah. Untuk melakukannya, ikuti langkah-langkah berikut:

1\. Buka menu drop-down di bagian atas tab konfigurasi. Termasuk daftar semua app server di environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-1.png" alt="java application server config list of app servers" width="80%"/>

2\. Pilih yang Anda butuhkan dan lakukan konfigurasi.

3\. Untuk menerapkan perubahan:

  * hanya untuk server yang dipilih - klik tombol **Save only for current instance** dari menu drop-down
  * untuk semua server - klik **Save**

<img id="back" src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-2.png" alt="java application server config save for current" width="80%"/>

:::warning
Jika Anda membuat/mengganti nama file atau folder di Configuration manager, ini hanya akan diterapkan pada daftar node yang dipilih. Anda tidak bisa menyimpan perubahan ini untuk semua app server yang tersedia di environment. Jika Anda juga ingin membuat/mengganti nama file atau folder di server lainnya, Anda harus melakukannya secara manual.
:::

  * [Tomcat](#tomcat)
  * [TomEE](#tomee)
  * [GlassFish](#glassfish)
  * [Jetty](#jetty)

Untuk mendapatkan informasi lebih lanjut tentang pengaturan mana yang dapat diubah dalam folder config yang disediakan, gunakan deskripsi yang sesuai:

  * [server](#server)
  * [home](#home)
  * [webapps/work](#webapps--work)
  * [JAVA_HOME](#java_home)
  * [lib](#lib)
  * [cron](#cron)
  * [keys](#keys)
  * [contexts](#contexts)
  * [server_lib](#server_lib)
  * [apps](#apps)

## SERVER{#server}

Konfigurasi utama Java servlet container dilakukan dalam file-file yang terletak di folder _**server**_.

Dengan menggunakan file config berikut, Anda dapat melakukan tindakan yang tertera di bawah ini (ini hanya beberapa contoh):

  * _**_context.xml_**_ \- konfigurasikan [session replication via Memcached](<https://docs.dewacloud.com/docs/replication-memcached/>)
  * _**_web.xml_**_ \- konfigurasikan [remote access via WebDav](<https://docs.dewacloud.com/docs/remote-access-via-webdav/>)
  * _**_server.xml_**_ \- aktifkan [Multiple Domains](<https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/>)
  * _**_variables.conf_**_
    * konfigurasikan pengaturan memori untuk java containers Anda dengan menentukan [GC](<https://www.virtuozzo.com/company/blog/garbage-collection/>), [-Xmx](<https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html#wp999528>), [-Xms](<http://www.oracle.com/technetwork/java/javase/gc-tuning-6-140523.html>) parameters (gunakan parameter standar menyatakan setiap pada baris baru):
    
        -Xmx< size >m -Xms< size >m 
    
    * tetapkan [system properties](<https://docs.dewacloud.com/docs/java-options-arguments/>) kustom untuk [Tomcat, TomEE, Jetty](<https://docs.dewacloud.com/docs/custom-environment-variables/>) atau [GlassFish](<https://docs.dewacloud.com/docs/custom-environment-variables/>):
    
        -Dvar1=value1 -Dvar2=value2 -Dmy.var3=/my/value
    
    * konfigurasikan [JavaAgent interceptor](<https://docs.dewacloud.com/docs/javaagent/>)
    * aktifkan [remote debugging](<https://docs.dewacloud.com/docs/remote-debugging/>):
    
        -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=\{port_number\}
    

:::warning
File ini hanya tersedia untuk aplikasi server Tomcat dan TomEE. Untuk mengonfigurasi server GlassFish, gunakan Panel Admin.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-3.png" alt="java application server config 9" width="80%"/>

[Kembali ke daftar](#back)

## HOME{#home}

Jika Anda perlu menggunakan file/folder khusus untuk mengonfigurasi aplikasi Anda, Anda dapat mengunduh/membuatnya di direktori **home** yang digunakan sebagai penyimpanan di Java server Anda.

Sebagai hasil, Anda dapat membuat konfigurasi dengan menentukan path ke file yang diunduh/dibuat dalam file _**variables.conf**_ (folder _server_).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-4.png" alt="java application server config home" width="80%"/>

:::note
Meskipun direktori server, yang merujuk ke folder ini, dapat dinamaitempuntuk beberapa server, tidak pernah dibersihkan secara otomatis oleh sistem platform.
:::

[Kembali ke daftar](#back)

## WEBAPPS / WORK{#webapps--work}

Folder **webapps** (untuk Tomcat/TomEE) dan **work** (untuk Jetty) digunakan untuk menyimpan aplikasi yang tidak dibungkus yang dideploy ke environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-5.png" alt="java application server config 1" width="80%"/>

[Kembali ke daftar](#back)

## JAVA_HOME{#java_home}

Folder **JAVA_HOME** berisi file konfigurasi java dan librari. Di sini, Anda dapat mengedit pengaturan java dan mengunggah librari java tambahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-6.png" alt="java application server config java home" width="80%"/>

[Kembali ke daftar](#back)

## LIB{#lib}

Folder **lib** digunakan untuk menyimpan librari **jar** default dan mengunggah librari **jar** kustom.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-7.png" alt="java application server config lib" width="80%"/>

[Kembali ke daftar](#back)

## CRON{#cron}

App server menyertakan folder **cron** dengan file konfigurasi, di mana cronjobs dapat dikonfigurasi.

Informasi detail tentang konfigurasi Cronjob dapat ditemukan dalam dokumen [Setting Up a Cronjob](<https://docs.dewacloud.com/docs/cron-job/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-8.png" alt="java application server config 4" width="80%"/>

[Kembali ke daftar](#back)

## KEYS{#keys}

Direktori **keys** digunakan sebagai lokasi untuk mengunggah private key apa pun yang diperlukan untuk aplikasi Anda. Buat key, simpan sebagai file sederhana, dan unggah ke folder **keys**.

Ini dapat digunakan untuk berbagai kasus dengan hanya menyatakan path ke kunci Anda:

    /var/lib/jelastic/keys/\{key_file_name\}

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-9.png" alt="java application server config java key" width="80%"/>

[Kembali ke daftar](#back)

## CONTEXTS{#contexts}

Folder **contexts** berisi file konfigurasi XML untuk setiap konteks yang dideploy. Semua file ini dapat diedit.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-10.png" alt="java application server config context" width="80%"/>

[Kembali ke daftar](#back)

## SERVER_LIB{#server_lib}

Folder **server_lib** adalah direktori konfigurasi GlassFish dengan semua librari server yang tersedia.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-11.png" alt="java application server config serverlib" width="80%"/>

[Kembali ke daftar](#back)

## APPS{#apps}

Folder **apps** TomEE digunakan untuk menyimpan aplikasi EE yang tidak dibungkus yang dideploy ke environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-server-configuration/java-app-server-configuration-12.png" alt="java application server config apps" width="80%"/>

[Kembali ke daftar](#back)

## Tomcat{#tomcat}

Folder | File | Path  
---|---|---  
conf | catalina.policy  
catalina.properties  
context.xml  
jaspic-providers.xml  
jaspic-providers.xsd  
jelastic-ha.xml  
jelastic-ssl.xml  
logging.properties  
server.xml  
tomcat-env.sh  
tomcat-users.xml  
tomcat-users.xsd  
variables.conf  
web.xml | /opt/tomcat/conf  
temp |  | /opt/tomcat/temp  
webapps |  | /opt/tomcat/webapps  
latest |  | /usr/java/latest  
lib |  | /opt/tomcat/lib  
cron | tomcat | /var/spool/cron  
keys |  | /var/lib/jelastic/keys  
  
[Kembali ke daftar](#back)

## TomEE{#tomee}

Folder | File | Path  
---|---|---  
[server](#server) | catalina.policy  
server.xml  
catalina.properties  
tomcat-users.xml  
context.xml  
web.xml  
variables.conf  
logging.properties  
tomee.xml  
system.properties | /opt/tomcat/conf/  
[home](#home) |  | /opt/tomcat/temp  
[webapps](#webapps--work) |  | /opt/tomcat/webapps  
[apps](#apps) |  | /opt/tomcat/apps  
[JAVA_HOME](#java_home) |  | /usr/java/default  
[lib](#lib) |  | /opt/tomcat/lib  
[cron](#cron) | tomcat | /var/spool/cron  
[keys](#keys) |  | /var/lib/jelastic/keys  
  
[Kembali ke daftar](#back)

## GlassFish{#glassfish}

Folder | File | Path  
---|---|---  
[server](#server) | default-web.xml  
domain.xml  
domain.xml.bak  
domain.xml.orig  
local-password  
logging.properties  
logging.properties.orig  
login.conf  
server.policy  
sun-acc.xml  
wss-server-config-1.0.xml  
wss-server-config-2.0.xml | /opt/glassfish3/glassfish/domains/  
domain1/config  
**gfcluster-config** (in _server_ folder) | logging.properties | /opt/glassfish3/glassfish/domains/  
domain1/config/gfcluster-config  
[home](#home) |  | /opt/glassfish3/temp  
[JAVA_HOME](#java_home) |  | /usr/java/latest  
[server_lib](#server_lib) |  | /opt/glassfish3/glassfish/lib/  
[cron](#cron) | glassfish | /var/spool/cron  
[keys](#keys) |  | /var/lib/jelastic/keys  
  
[Kembali ke daftar](#back)

## Jetty{#jetty}

Folder | File | Path  
---|---|---  
[server](#server) | jdbcRealm.properties  
jetty-ajp.xml  
jetty-bio.xml  
jetty-jaas.xml  
jetty-jmx.xml  
jetty-logging.xml  
jetty-plus.xml  
jetty-rewrite.xml  
jetty-setuid.xml  
jetty-sslengine.xml  
jetty-ssl.xml  
jetty-stats.xml  
jetty.xml  
login.conf  
login.properties  
realm.properties  
spnego.properties  
variables.conf  
webdefault.xml | /opt/jetty/etc  
[home](#home) |  | /opt/jetty/home  
[contexts](#contexts) |  | /opt/jetty/contexts/  
[work](#webapps--work) |  | /opt/jetty/work  
[JAVA_HOME](#java_home) |  | /usr/java/latest  
[lib](#lib) |  | /opt/jetty/lib  
[cron](#cron) | jetty | /var/spool/cron  
[keys](#keys) |  | /var/lib/jelastic/keys  
  
[Kembali ke daftar](#back)

## Baca Juga {#whats-next}

  * [Tomcat Server](<https://docs.dewacloud.com/docs/tomcat/>)
  * [TomEE](<https://docs.dewacloud.com/docs/apache-tomee/>)
  * [Jetty](<https://docs.dewacloud.com/docs/jetty/>)
  * [GlassFish](<https://docs.dewacloud.com/docs/glassfish/>)
  * [Database Configuration](<https://docs.dewacloud.com/docs/database-configuration-files/>)
