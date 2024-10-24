---
sidebar_position: 7
slug: /gtld-+-idn-domain-names-support
title: gTLD + IDN Domain Names Support
---
# Dukungan Nama Domain gTLD + IDN

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/slide-domain.png" alt="slide-domain" width="20%"/>

Upaya telah dilakukan untuk membuat nama domain tersedia dalam banyak bahasa di luar yang berbasis skrip Latin. Sekarang, dengan teknologi **IDN (Internationalized Domain Name)**, hampir semua karakter Unicode (di luar karakter ASCII tradisional) dapat ditambahkan ke nama domain. Ini dicapai dengan mengonversi karakter-karakter ini menjadi format standar menggunakan [Punycode](https://en.wikipedia.org/wiki/Punycode).

Platform ini mendukung perkembangan semacam itu, memungkinkan pengguna di seluruh dunia untuk menggunakan bahasa asli mereka (misalnya, Sirilik, hieroglif Cina) untuk nama environment dan [aliases](https://docs.dewacloud.com/docs/environment-aliases). Nama-nama ini akan ditampilkan dengan benar di seluruh dashboard dan dalam [SSH console](https://docs.dewacloud.com/docs/ssh-access). Anda juga dapat mengikat IDN eksternal ke environment Anda menggunakan [workflow](https://docs.dewacloud.com/docs/custom-domains) yang sama dengan domain khusus biasa.

Kategori lain dari nama domain adalah **gTLD (Generic Top-Level Domains)**, subtipe dari TLD yang dikelola oleh Internet Assigned Numbers Authority (IANA). Awalnya dimaksudkan untuk jenis organisasi tertentu, gTLD tidak terikat ke negara mana pun dan pada prinsipnya dapat digunakan oleh siapa saja di seluruh dunia. Integrasi gTLD pada platform memungkinkan pengguna untuk mengikat nama domain semacam itu (misalnya, _.org_, _.academy_, _.best_) ke lingkungan mereka.

Mari kita jelajahi cara mengelola nama domain spesifik ini pada platform.

## Default Environment IDN Domain{#default-environment-idn-domain}

1. Anda dapat menggunakan IDN saat menamai environment Anda melalui topology wizard.  
   Konfigurasikan pengaturan environment Anda dan masukkan nama yang diinginkan dalam bahasa apa pun di bidang **Environment name** (harus lebih dari 5 karakter). Lalu klik **Create**.  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/env-wiz.png" alt="tld idn domain env wiz" width="100%"/>

   Berikut beberapa contoh lainnya:  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/example.png" alt="tld idn domain example" width="100%"/>

   :::warning
   Nama environment Anda tidak boleh dimulai dengan "xn--", karena kombinasi ini dicadangkan untuk merepresentasikan IDN dalam ASCII.
   :::

2. Proses pembuatan environment akan berjalan seperti biasanya, dan environment baru Anda akan ditambahkan ke dashboard.  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/env-created.png" alt="tld idn domain env created" width="100%"/>

3. Jika Anda **Open in browser** environment IDN Anda, URL akan terlihat seperti gambar di bawah ini:  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/punycode.png" alt="tld idn domain punycode" width="100%"/>

   URL ini menggunakan Punycode untuk merepresentasikan karakter Unicode. Untuk menghindarinya, Anda dapat mengikat [custom domain name](https://docs.dewacloud.com/docs/custom-domains) ke environment Anda, termasuk IDN.

4. Anda juga dapat [mengatur alias](https://docs.dewacloud.com/docs/environment-aliases) untuk environment Anda atau nodenya menggunakan bahasa asli Anda untuk mempermudah pengelolaan environment Anda.  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/alias.png" alt="tld idn domain alias" width="100%"/>

## Custom IDN/gTLD Domain Name{#custom-idn-gtld-domain-name}

Baik domain internasional maupun generic top-level dapat dengan mudah diikat ke environment Anda dengan cara yang sama seperti domain khusus biasa. Ikuti langkah-langkah yang dijelaskan dalam [dokumentasi](https://docs.dewacloud.com/docs/custom-domains) untuk mengikat satu atau beberapa domain ke aplikasi Anda.  
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/domain-binding.png" alt="tld idn domain domain binding" width="100%"/>

Anda juga dapat menggunakan fitur [Swapping Domains](https://docs.dewacloud.com/docs/swap-domains) untuk bekerja dengan jenis domain ini.  
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/domain-name-management/gTLD-+-idn-domain-names-support/swap-domains.png" alt="tld idn domain swap domains" width="100%"/>

## Baca Juga

  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
  * [Environment Aliases](https://docs.dewacloud.com/docs/environment-aliases/)