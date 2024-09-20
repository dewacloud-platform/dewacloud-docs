---
sidebar_position: 6
slug: /java-multiple-domains-for-tomcat
title: Multiple Domains for Tomcat
---

# Multiple Domain Names on Tomcat Server

Atur beberapa nama domain pada server Tomcat untuk meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi Anda, serta menghemat biaya tanpa harus mengonfigurasi instance terpisah. Untuk ini, lakukan beberapa penyesuaian kecil dalam file konfigurasi Tomcat seperti yang dijelaskan di bawah ini.

1\. Masuk ke dashboard platform dan klik tombol **New Environment**:

![PaaS main buttons](#)

2\. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya [Tomcat 9](<https://docs.dewacloud.com/docs/tomcat/>)), dan ketik nama environment Anda, misalnya, _multibinding_.

![topology wizard](#)

Dalam satu menit, environment Anda akan berhasil dibuat.

![new Tomcat environment](#)

3\. Anda dapat membeli dan mengatur nama domain Anda sendiri sebagai pengganti domain default dengan menambahkan catatan CNAME atau dengan mengatur A Records. Baca lebih lanjut dalam dokumen [Custom External Domain Name Binding](<https://docs.dewacloud.com/docs/custom-domains/>).

4\. Kembali ke dashboard platform, klik tombol **Settings** untuk environment Anda dan kaitkan domain Anda.

![environment settings button](#)

Dalam contoh kami, kami akan menggunakan _**tomcatfirst.tk**_ untuk nama domain pertama, dan _**tomcatsecond.tk**_ untuk yang kedua.

![bind custom domain](#)

5\. Sekarang Anda perlu mendepoy proyek.

  * Unggah file aplikasi ke **Deployment Manager** dan tekan tombol **Deploy to**.

Sebagai contoh, kami menggunakan _Hello World_ yang tersedia di Deployment Manager secara default.

![deploy application](#)

Ketika formulir **Deploy** muncul pilih environment Anda dan tetapkan konteksnya (**tomcatfirst**, dalam kasus kami). Kemudian tekan tombol **Deploy**.

![deploy dialog](#)

  * Unggah archive aplikasi kedua. Kami akan menggunakan _Hello World_ yang dimodifikasi (kata “You did it!” diwarnai ulang menjadi merah) hanya untuk melihat perbedaan pada langkah-langkah akhir.

Kemudian depoy aplikasi ini ke environment yang sama tetapi dengan konteks yang berbeda, (misalnya **tomcatsecond**).

![deploying second app into environment](#)

Setelah apikasi dideploy, Anda memiliki dua aplikasi yang dideploy dalam environment Anda.

![environment with two apps](#)

6\. Sekarang klik tombol **Config** untuk Tomcat dan navigasikan ke file _**server.xml**_ (direktori **/opt/tomcat/conf**).

![server.xml config file](#)

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

![configuring tomcat server](#)

7\. **Save** perubahan dan **restart** Tomcat.

![restart nodes button](#)

8\. Sekarang Anda dapat memeriksa hasilnya. Kedua aplikasi Anda akan tersedia melalui nama domain yang ditentukan yang berjalan pada satu server Tomcat.

![first application with custom domain](#)

![second application with custom domain](#)

:::warning 
Jika Anda ingin mendepoy ulang aplikasi ke instance Tomcat dengan _server.xml_ yang sudah dikonfigurasikan, Anda perlu mengomentari blok \<Host\> sebelum mendepoy ulang dan menghapus komentar setelahnya.
:::

## Baca Juga{#whats-next}

  * [Swap Domains](<https://docs.dewacloud.com/docs/swap-domains/>)
  * [Multiple Domains for GlassFish](<https://docs.dewacloud.com/docs/multiple-domains-glassfish/>)
  * [Multiple Domains with Public IP](<https://docs.dewacloud.com/docs/multiple-domains/>)