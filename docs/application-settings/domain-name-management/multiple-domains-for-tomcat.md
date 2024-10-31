---
sidebar_position: 3
slug: /multiple-domains-tomcat-server
title: Multiple Domains for Tomcat
---
# Multiple Domain Names on Tomcat Server

Mengatur beberapa nama domain pada server Tomcat memungkinkan untuk meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi Anda, serta menghemat biaya tanpa perlu mengonfigurasi instance terpisah. Untuk melakukan ini, buat beberapa penyesuaian kecil dalam file konfigurasi Tomcat seperti yang dijelaskan di bawah ini.

1\. Masuk ke dashboard platform dan klik tombol **New Environment**:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/01-paas-main-buttons.png" alt="PaaS main buttons" max-width="100%"/>

2\. Di dialog **Environment Topology**, pilih server aplikasi Anda (misalnya [Tomcat 9](https://docs.dewacloud.com/docs/tomcat/)), dan ketik nama lingkungan Anda, misalnya _multibinding_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/02-topology-wizard.png" alt="topology wizard" max-width="100%"/>

Dalam satu menit, lingkungan Anda akan berhasil dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/03-new-tomcat-environment.png" alt="new Tomcat environment" max-width="100%"/>

3\. Anda dapat membeli dan mengatur nama domain sendiri alih-alih menggunakan yang default dengan menambahkan catatan CNAME atau dengan mengatur A Record. Baca lebih lanjut di dokumen [Custom External Domain Name Binding](https://docs.dewacloud.com/docs/custom-domains/).

4\. Kembali ke dashboard platform, klik tombol **Settings** untuk lingkungan Anda dan ikat domain Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/04-environment-settings-button.png" alt="environment settings button" max-width="100%"/>

Dalam contoh kami, kami akan menggunakan _**tomcatfirst.tk**_ untuk nama domain pertama, dan _**tomcatsecond.tk**_ untuk yang kedua.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/05-bind-custom-domain.png" alt="bind custom domain" max-width="100%"/>

5\. Sekarang Anda perlu melakukan deploy proyek.

  * Unggah file aplikasi ke **Deployment Manager** dan tekan tombol **Deploy to**.

Sebagai contoh, kami menggunakan _Hello World_ yang tersedia secara default di Deployment Manager.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/06-application-deployment.png" alt="deploy application" width="70%"/>

Ketika formulir **Deploy** muncul, pilih lingkungan Anda dan tetapkan konteks (**tomcatfirst** dalam kasus kami). Lalu tekan tombol **Deploy**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/07-deploy-dialog.png" alt="deploy dialog" width="50%"/>

  * Unggah arsip aplikasi kedua. Kami akan menggunakan _Hello World_ yang dimodifikasi (kata-kata "You did it!" diwarnai merah) untuk melihat perbedaannya pada langkah akhir.

Kemudian lakukan deploy aplikasi ini ke lingkungan yang sama tetapi dengan konteks yang berbeda, (misalnya **tomcatsecond**).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/08-deploy-second-app.png" alt="deploying second app into environment" max-width="100%"/>

Setelah deployment selesai, Anda memiliki dua aplikasi yang dideploy di lingkungan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/09-environment-with-two-apps-deployed.png" alt="environment with two apps" max-width="100%"/>

6\. Sekarang klik tombol **Config** untuk Tomcat dan navigasikan ke file _**server.xml**_ (di direktori **/opt/tomcat/conf**).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/10-server-xml-config-file.png" alt="server.xml config file" width="70%"/>

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

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/11-adjust-tomcat-settings.png" alt="configuring tomcat server" max-width="100%"/>

7\. **Save** perubahan dan **restart** Tomcat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/12-restart-nodes-button.png" alt="restart nodes button" max-width="100%"/>

8\. Sekarang Anda dapat memeriksa hasilnya. Kedua aplikasi Anda akan tersedia melalui nama domain yang ditentukan yang berjalan pada satu server Tomcat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/13-first-application-custom-domain.png" alt="first application with custom domain" width="70%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-for-tomcat/14-second-application-custom-domain.png" alt="second application with custom domain" width="70%"/>

:::warning
Jika Anda ingin melakukan redeploy aplikasi ke instance Tomcat dengan _server.xml_ yang sudah dikonfigurasi, Anda perlu mengomentari blok `<Host>` sebelum melakukan redeploy dan membukanya kembali setelahnya.
:::

## Baca Juga{#whats-next}

  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
  * [Multiple Domains for GlassFish](https://docs.dewacloud.com/docs/multiple-domains-glassfish/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)