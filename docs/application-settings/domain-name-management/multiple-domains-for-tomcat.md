---
sidebar_position: 3
slug: /multiple-domains-for-tomcat
title: Multiple Domains for Tomcat
---
# Multiple Domain Names on Tomcat Server

Mengatur beberapa nama domain pada server Tomcat memungkinkan untuk meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi Anda, serta menghemat biaya tanpa perlu mengonfigurasi instance terpisah. Untuk melakukan ini, buat beberapa penyesuaian kecil dalam file konfigurasi Tomcat seperti yang dijelaskan di bawah ini.

1\. Masuk ke dashboard platform dan klik tombol **New Environment**:

![PaaS main buttons](#)

2\. Di dialog **Environment Topology**, pilih server aplikasi Anda (misalnya [Tomcat 9](https://docs.dewacloud.com/docs/tomcat/)), dan ketik nama lingkungan Anda, misalnya _multibinding_.

![topology wizard](#)

Dalam satu menit, lingkungan Anda akan berhasil dibuat.

![new Tomcat environment](#)

3\. Anda dapat membeli dan mengatur nama domain sendiri alih-alih menggunakan yang default dengan menambahkan catatan CNAME atau dengan mengatur A Record. Baca lebih lanjut di dokumen [Custom External Domain Name Binding](https://docs.dewacloud.com/docs/custom-domains/).

4\. Kembali ke dashboard platform, klik tombol **Settings** untuk lingkungan Anda dan ikat domain Anda.

![environment settings button](#)

Dalam contoh kami, kami akan menggunakan _**tomcatfirst.tk**_ untuk nama domain pertama, dan _**tomcatsecond.tk**_ untuk yang kedua.

![bind custom domain](#)

5\. Sekarang Anda perlu melakukan deploy proyek.

  * Unggah file aplikasi ke **Deployment Manager** dan tekan tombol **Deploy to**.

Sebagai contoh, kami menggunakan _Hello World_ yang tersedia secara default di Deployment Manager.

![deploy application](#)

Ketika formulir **Deploy** muncul, pilih lingkungan Anda dan tetapkan konteks (**tomcatfirst** dalam kasus kami). Lalu tekan tombol **Deploy**.

![deploy dialog](#)

  * Unggah arsip aplikasi kedua. Kami akan menggunakan _Hello World_ yang dimodifikasi (kata-kata "You did it!" diwarnai merah) untuk melihat perbedaannya pada langkah akhir.

Kemudian lakukan deploy aplikasi ini ke lingkungan yang sama tetapi dengan konteks yang berbeda, (misalnya **tomcatsecond**).

![deploying second app into environment](#)

Setelah deployment selesai, Anda memiliki dua aplikasi yang dideploy di lingkungan Anda.

![environment with two apps](#)

6\. Sekarang klik tombol **Config** untuk Tomcat dan navigasikan ke file _**server.xml**_ (di direktori **/opt/tomcat/conf**).

![server.xml config file](#)

Tambahkan tag _**Host**_ untuk setiap domain yang ingin Anda ikat:

```xml
<Host name="external.domain.tld" appBase="webapps/context_name" autoDeploy="true">
  <Alias>external.domain.tld</Alias>
  <Context path="" docBase="${catalina.base}/webapps/context_name"/>
</Host>
```

Dalam contoh kami, tambahkan kode berikut ke file _**server.xml**_:

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

```
:::warning
Jika Anda ingin melakukan redeploy aplikasi ke instance Tomcat dengan _server.xml_ yang sudah dikonfigurasi, Anda perlu mengomentari blok <Host> sebelum melakukan redeploy dan membukanya kembali setelahnya.
:::
```

## Baca Juga{#whats-next}

  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
  * [Multiple Domains for GlassFish](https://docs.dewacloud.com/docs/multiple-domains-glassfish/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)