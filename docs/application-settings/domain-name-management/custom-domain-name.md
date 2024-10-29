---
sidebar_position: 1
slug: /custom-domains
title: Custom Domain Name
---
# Custom Domain Name

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/01-custom-domais.png" alt="custom domains" width="30%"/>

Dengan platform ini, Anda memiliki kemungkinan untuk menetapkan alamat domain eksternal untuk situs Anda, menggantikan URL lingkungan default (misalnya, _\{env_name\}.user.cloudjkt01.com_). Domain kustom memungkinkan Anda untuk mempromosikan branding unik dan meningkatkan pengenalan aplikasi web Anda di Internet.

Sebelum memulai, mari kita pahami beberapa konsep dasar untuk pemahaman yang lebih baik:

  * **Domain** adalah nama yang Anda tentukan dalam browser untuk mengakses situs web. Bagian nama yang paling kanan (misalnya _.com_ atau _.org_) dikenal sebagai _top-level domain_ (TLD), dan bagian sebelum itu disebut _second-level domain_ (SLD). Subdomain adalah bagian opsional yang ditempatkan di depan SLD dan dipisahkan dengan titik. Lihat gambar di bawah untuk contohnya.
  * **Root Domain** adalah kombinasi dari _second-_ dan _top-level domain names_ tanpa subdomain. Alamat seperti itu mewakili seluruh situs web, bukan halaman web tertentu. Setiap situs memiliki root domain unik, yang termasuk di semua halamannya dan subdomainnya.
  * **DNS** adalah sistem yang mengonversi nama domain teks menjadi alamat IP numerik, yang diperlukan untuk menemukan dan mengidentifikasi layanan web. Misalnya, ketika Anda mengetik _www.mydomain.com_ di bilah alamat browser, sistem akan mencari alamat IP aktual dari server yang meng-host halaman ini, misalnya _209.50.246.12_. Jika Anda mengetik _https://209.50.246.12/_, Anda akan tiba di situs yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/02-domain-name-components-scheme.png" alt="domain name components scheme" width="60%"/>

:::tip
Platform ini juga mendukung penuh gTLD + IDN Domain Names, sehingga Anda dapat menggunakan nama top-level domain yang terinternasionalisasi dan generik untuk domain eksternal Anda.
:::

Untuk menambahkan domain kustom, ikuti langkah-langkah berikut:

  * [beli domain kustom](https://docs.dewacloud.com/docs/how-to-buy-a-domain-name)
  * [konfigurasi catatan DNS](https://docs.dewacloud.com/docs/how-to-configure-dns-record)
  * [hubungkan nama domain](https://docs.dewacloud.com/docs/how-to-bind-domain-to-environment) (jika diperlukan)

## Cara Membeli Nama Domain{#how-to-buy-a-domain-name}

Langkah-langkah yang tepat dapat bervariasi berdasarkan pendaftar domain Anda. Sebagai contoh, kami menggunakan [GoDaddy](https://www.godaddy.com/).

1\. Masuk ke akun Anda atau daftar akun baru. Buka opsi **Sign In** di bagian atas dan klik tombol yang sama.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/03-log-into-domain-registrar.png" alt="log into domain registrar" width="100%"/>

2\. Beralih ke halaman manajemen akun Anda dengan mengklik tombol **Visit My Account**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/04-manage-dns-account.png" alt="manage DNS account" width="100%"/>

3\. Jika Anda belum memiliki domain, klik tautan _**Get one now**_ dan ikuti langkah-langkah yang disediakan untuk memilih dan membeli domain.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/05-get-custom-domain-name.png" alt="get custom domain name" width="100%"/>

## Cara Mengonfigurasi Catatan DNS{#how-to-configure-dns-record}

Setelah Anda memiliki [domain sendiri](https://docs.dewacloud.com/docs/how-to-buy-a-domain-name), proses menambahkan catatan DNS baru cukup sederhana (contoh menggunakan [GoDaddy](https://www.godaddy.com/)):

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/05-1-godaddy-add-dns-a-record.gif" alt="GoDaddy add DNS A Record" width="100%"/>

Ada [berbagai jenis catatan DNS](https://docs.dewacloud.com/docs/which-dns-record-to-use), yang dapat digunakan untuk mengarahkan ke lingkungan Anda:

  * _**[CNAME](https://en.wikipedia.org/wiki/CNAME_record)**_ \- memetakan domain kustom Anda ke domain lingkungan (memerlukan tambahan [pengikatan domain](https://docs.dewacloud.com/docs/how-to-bind-domain-to-environment) melalui dashboard platform)
  * _**[ANAME](https://en.wikipedia.org/wiki/CNAME_record#ANAME_record)**_ (jika didukung oleh server DNS Anda) - memetakan seluruh [root domain](https://docs.dewacloud.com/docs/root-domain) (misalnya _example.com_) ke domain lingkungan Anda atau root domain lainnya
  * _**A Record**_ \- memetakan domain kustom Anda ke IP publik (memerlukan alamat IP eksternal yang terpasang di lingkungan)

:::note
Catatan DNS CNAME/ANAME dapat digunakan dengan **Shared Load Balancer** (yaitu tanpa IP publik). Namun, untuk lingkungan produksi, disarankan untuk menambahkan IP publik dan mengonfigurasi **A Record**. Dalam kasus pengaturan **Private Cloud**, ketika pemilik platform mengendalikan semua lingkungan, keterbatasan **Shared Load Balancer** dapat dinonaktifkan, sehingga penggunaan CNAME menjadi opsi yang siap untuk produksi.
:::

Berikut langkah-langkah untuk mengonfigurasi catatan untuk nama domain Anda.

1\. Temukan domain yang diperlukan di pendaftar domain Anda, dan klik **Manage DNS**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/06-manage-domain-name.png" alt="manage domain name" width="100%"/>

2\. Di bagian bawah bagian _**Records**_, klik tombol **Add**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/07-add-dns-record-to-domain-name.png" alt="add DNS record to domain name" width="100%"/>

3\. Di dalam bingkai **Add Zone Record** yang ditampilkan, pilih [opsi yang diperlukan](https://docs.dewacloud.com/docs/which-dns-record-to-use) dari daftar drop-down **Type** (misalnya _A Record_).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/08-select-dns-record-type.png" alt="select DNS record type" width="100%"/>

4\. Selesaikan penambahan catatan yang dipilih.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/09-configure-dns-a-record.png" alt="configure DNS a record" width="100%"/>

Dalam kasus kami, untuk **A Record**:

  * **Host** \- masukkan nama host yang terhubung dengan A Record - dalam kasus kami, cukup ketik _@_ untuk mengarahkan catatan langsung ke nama domain Anda
  * **Points to** \- tentukan alamat IP eksternal dari titik masuk lingkungan Anda
:::tip
Untuk mendapatkan IP ini, buka node server aplikasi (load balancer) Anda untuk melihat alamat IP publik Anda.
:::
  * **TTL** \- pilih berapa lama server DNS harus menyimpan informasi A Record dalam cache (yaitu penundaan sebelum pengaturan baru diterapkan jika terjadi perubahan di masa mendatang)

Klik **Save**.

:::note
Setiap perubahan DNS yang Anda buat dapat memerlukan waktu hingga 48 jam untuk dipantau di seluruh Internet.
:::

### Catatan DNS Mana yang Harus Digunakan?{#which-dns-record-to-use}

Periksa aturan umum dan contoh berikut:

  * gunakan **A Record** jika lingkungan Anda menggunakan [IP publik](https://docs.dewacloud.com/docs/public-ip/)

```
name1.mydomain.com > 111.111.111.111  
name2.mydomain.com > 111.111.111.112
```

  * gunakan **CNAME** jika Anda ingin alias domain kustom ke nama lingkungan (memerlukan [pengikatan domain](https://docs.dewacloud.com/docs/how-to-bind-domain-to-environment))

```
name1.mydomain.com > env1.hosterdomain.com  
name2.mydomain.com > env2.hosterdomain.com
```

  * gunakan **ANAME** jika Anda perlu mengarahkan satu zona DNS ([root domain](https://docs.dewacloud.com/docs/root-domain)) ke yang lain dengan semua subdomainnya diselesaikan melalui subdomain yang sama

```
mydomain.com > hosterdomain.com  
{subdomain}.mydomain.com > {subdomain}.hosterdomain.com
```

```
mynewcompany.com > myoldcompany.com  
{subdomain}.mynewcompany.com > {subdomain}.myoldcompany.com
```

```
mydomain.com > env1.hosterdomain.com (memerlukan [pengikatan domain](https://docs.dewacloud.com/docs/how-to-bind-domain-to-environment))  
{subdomain}.mydomain.com > {subdomain}.env1.hosterdomain.com
```

## Cara Menghubungkan Domain ke Lingkungan{#how-to-bind-domain-to-environment}

Saat bekerja **tanpa IP publik** (yaitu catatan DNS diarahkan ke nama lingkungan melalui [CNAME atau ANAME](https://docs.dewacloud.com/docs/which-dns-record-to-use)), Anda perlu **mengikat** nama domain yang sesuai. Ini diperlukan agar **Shared Load Balancers** dapat mengarahkan lalu lintas dengan benar ke lingkungan target.

:::note
Pengikatan domain kustom melalui dashboard platform tidak diperlukan jika IP publik diaktifkan untuk lingkungan, karena lalu lintas masuk melewati **SLBs**.
:::

1\. Di dalam dashboard platform, klik tombol **Settings** (ikon kunci inggris) untuk lingkungan yang perlu Anda hubungkan dengan nama domain.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/11-environment-settings.png" alt="environment settings" width="100%"/>

2\. Di dalam tab menu _**Custom Domains**_ yang dipilih secara otomatis, gunakan bagian _Domain Binding_ untuk menentukan nama domain Anda (misalnya _www.myexternaldomain.com_ atau _myexternaldomain.com_) dan klik tombol **Bind**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/custom-domain-name/12-bind-custom-domain-to-environment.png" alt="bind custom domain to environment" width="100%"/>

:::note
Diperlukan waktu beberapa menit hingga pengaturan URL baru ini berlaku.
:::

Selesai! Lingkungan Anda sekarang dapat diakses menggunakan nama domain uniknya.

## Baca Juga{#whats-next}

  * [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
  * [Public IP](https://docs.dewacloud.com/docs/public-ip/)
  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
  * [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)