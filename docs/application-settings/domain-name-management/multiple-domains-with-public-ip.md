---
sidebar_position: 6
slug: /multiple-domains
title: Multiple Domains with Public IP
---
# Setting Up Multiple Domains with Public IP

## The Benefits of Having Multiple Domains{#the-benefits-of-having-multiple-domains}

  * _**Usability**_

Salah satu manfaat utama memiliki beberapa nama domain adalah memberikan Anda _multiple points of entry_: ini bisa berguna jika, misalnya, Anda ingin domain yang berbeda mengarah ke situs yang berbeda temanya untuk kampanye pemasaran atau pengalaman pengguna yang beda.

  * _**Cost Saving**_

Manfaat lainnya adalah kemampuan untuk memiliki _lebih dari satu domain berjalan pada satu environment._ Misalnya, Anda dapat memiliki dua aplikasi berbeda dengan dua domain berbeda yang berjalan pada satu instance Tomcat.

## Setting Up Multiple Domains{#setting-up-multiple-domains}

_Untuk menggunakan nama domain untuk aplikasi Anda, Anda perlu mendaftarkannya atau memiliki akses administratif ke domain tersebut._

1\. Masuk ke akun PaaS.

2\. Saat berada di platform dashboard, klik tombol **Create environment**:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/01-create-environment.png" alt="create environment" width="50%"/>

3\. Dalam dialog **Environment Topology**, pilih server aplikasi Anda (misalnya, [Tomcat](https://docs.dewacloud.com/docs/tomcat/)), aktifkan **Public IPv4** untuk server Anda, dan ketik nama environment Anda, misalnya, _multibinding_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/02-environment-wizard.png" alt="environment wizard" max-width="100%"/>

Dalam satu menit, environment Anda dengan **Tomcat** akan berhasil dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/03-environment-for-multi-domains.png" alt="environment for multi domains" max-width="100%"/>

4\. Ikat **nama domain** Anda ke alamat IP Publik Tomcat, yang bisa Anda temukan di daftar drop-down untuk server. Prosedur pengikatan tergantung pada perusahaan hosting tempat Anda membeli domain.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/04-server-public-ip.png" alt="server public IP" max-width="100%"/>

5\. Unggah file/file war Anda ke **Deployment manager** dan deploy ke konteks yang berbeda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/05-applications-deployed.png" alt="applications deployed" max-width="100%"/>

6\. Klik tombol **Config** untuk Tomcat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/06-tomcat-config.png" alt="Tomcat config" max-width="100%"/>

7\. Arahkan ke file **server.xml** (_server directory_) dan atur konfigurasi untuk hosting beberapa domain (tambahkan _Host tags_ untuk setiap domain yang ingin Anda host).

Sebagai contoh:

```xml
<Host name="firstdomain.com" appBase="webapps/firstdomain">
    <Alias>firstdomain.com</Alias>
    <Context path="" docBase="."/>
</Host>

<Host name="seconddomain.com" appBase="webapps/seconddomain">
    <Alias>seconddomain.com</Alias>
    <Context path="" docBase="."/>
</Host>

<Host name="thirddomain.com" appBase="webapps/thirddomain">
    <Alias>thirddomain.com</Alias>
    <Context path="" docBase="."/>
</Host>
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/07-tomcat-server-xml.png" alt="Tomcat server xml" max-width="100%"/>

8\. **Save** perubahan dan **Restart** Tomcat.

9\. Sekarang Anda dapat memeriksa hasilnya. Aplikasi Anda akan tersedia melalui nama domain yang ditentukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/08-first-domain.png" alt="first domain" width="50%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/09-second-domain.png" alt="second domain" width="50%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/multiple-domains-with-public-ip/10-third-domain.png" alt="third domain" width="50%"/>

:::note
Jika Anda ingin redeploy aplikasi ke instance Tomcat dengan _server.xml_ yang sudah dikonfigurasi, Anda perlu mengomentari blok `<Host>` sebelum me-redeploy dan meng-uncomment setelahnya.
:::

## Baca Juga{#whats-next}

  * [Public IP](https://docs.dewacloud.com/docs/public-ip/)
  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)