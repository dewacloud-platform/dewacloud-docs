---
sidebar_position: 6
slug: /java-multiple-domains-for-tomcat
title: Multiple Domains for Tomcat
---

# Multiple Domain Names on Tomcat Server

Atur beberapa nama domain pada server Tomcat untuk meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi Anda, serta menghemat biaya tanpa harus mengonfigurasi instance terpisah. Untuk ini, lakukan beberapa penyesuaian kecil dalam file konfigurasi Tomcat seperti yang dijelaskan di bawah ini.

1\. Masuk ke dashboard platform dan klik tombol **New Environment**:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-1.png" alt="PaaS main buttons" width="60%"/>

2\. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya [Tomcat 9](<https://docs.dewacloud.com/docs/tomcat/>)), dan ketik nama environment Anda, misalnya, _multibinding_.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-2.png" alt="topology wizard" width="100%"/>

Dalam satu menit, environment Anda akan berhasil dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-3.png" alt="new Tomcat environment" width="80%"/>

3\. Anda dapat membeli dan mengatur nama domain Anda sendiri sebagai pengganti domain default dengan menambahkan catatan CNAME atau dengan mengatur A Records. Baca lebih lanjut dalam dokumen [Custom External Domain Name Binding](<https://docs.dewacloud.com/docs/custom-domains/>).

4\. Kembali ke dashboard platform, klik tombol **Settings** untuk environment Anda dan kaitkan domain Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-4.png" alt="environment settings button" width="80%"/>

Dalam contoh kami, kami akan menggunakan _**tomcatfirst.tk**_ untuk nama domain pertama, dan _**tomcatsecond.tk**_ untuk yang kedua.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-5.png" alt="bind custom domain" width="80%"/>

5\. Sekarang Anda perlu mendepoy proyek.

  * Unggah file aplikasi ke **Deployment Manager** dan tekan tombol **Deploy to**.

Sebagai contoh, kami menggunakan _Hello World_ yang tersedia di Deployment Manager secara default.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-6.png" alt="deploy application" width="80%"/>

Ketika formulir **Deploy** muncul pilih environment Anda dan tetapkan konteksnya (**tomcatfirst**, dalam kasus kami). Kemudian tekan tombol **Deploy**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-7.png" alt="deploy dialog" width="80%"/>

  * Unggah archive aplikasi kedua. Kami akan menggunakan _Hello World_ yang dimodifikasi (kata “You did it!” diwarnai ulang menjadi merah) hanya untuk melihat perbedaan pada langkah-langkah akhir.

Kemudian depoy aplikasi ini ke environment yang sama tetapi dengan konteks yang berbeda, (misalnya **tomcatsecond**).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-8.png" alt="deploying second app into environment" width="100%"/>

Setelah apikasi dideploy, Anda memiliki dua aplikasi yang dideploy dalam environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-9.png" alt="environment with two apps" width="100%"/>

6\. Sekarang klik tombol **Config** untuk Tomcat dan navigasikan ke file _**server.xml**_ (direktori **/opt/tomcat/conf**).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-10.png" alt="server.xml config file" width="100%"/>

Tambahkan tag _**Host**_ untuk setiap domain yang ingin Anda kaitkan:

```xml
<Host name="external.domain.tld" appBase="webapps/context_name" autoDeploy="true">
  <Alias>external.domain.tld</Alias>
  <Context path="" docBase="${catalina.base}/webapps/context_name"/>
</Host>
```

Dalam contoh kami, kami menambahkan kode berikut ke file _**server.xml**_:

```xml
<Host name="tomcatfirst.tk" appBase="webapps/tomcatfirst" autoDeploy="true">
  <Alias>tomcatfirst.tk</Alias>
  <Context path="" docBase="${catalina.base}/webapps/tomcatfirst"/>
</Host>
<Host name="tomcatsecond.tk" appBase="webapps/tomcatsecond" autoDeploy="true">
  <Alias>tomcatsecond.tk</Alias>
  <Context path="" docBase="${catalina.base}/webapps/tomcatsecond"/>
</Host>
```

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-11.png" alt="configuring tomcat server" width="100%"/>

7\. **Save** perubahan dan **restart** Tomcat.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-12.png" alt="restart nodes button" width="100%"/>

8\. Sekarang Anda dapat memeriksa hasilnya. Kedua aplikasi Anda akan tersedia melalui nama domain yang ditentukan yang berjalan pada satu server Tomcat.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-13.png" alt="first application with custom domain" width="80%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/tomcat-and-tomee/multiple-domains-on-tomcat-server/multiple-domains-tomcat-14.png" alt="second application with custom domain" width="80%"/>

:::warning 
Jika Anda ingin mendepoy ulang aplikasi ke instance Tomcat dengan _server.xml_ yang sudah dikonfigurasikan, Anda perlu mengomentari blok \<Host\> sebelum mendepoy ulang dan menghapus komentar setelahnya.
:::

## Baca Juga{#whats-next}

  * [Swap Domains](<https://docs.dewacloud.com/docs/swap-domains/>)
  * [Multiple Domains for GlassFish](<https://docs.dewacloud.com/docs/multiple-domains-glassfish/>)
  * [Multiple Domains with Public IP](<https://docs.dewacloud.com/docs/multiple-domains/>)