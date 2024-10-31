---
sidebar_position: 3
slug: /nginx-ruby
title: NGINX Ruby
---
# NGINX Ruby

Stack _NGINX Ruby_ sudah siap untuk [HTTP/3](<https://docs.dewacloud.com/docs/http3/>) dengan dukungan fitur yang diaktifkan secara default sejak rilis _1.16.1_ untuk versi Ruby _2.4.9_, _2.5.7_, _2.6.5_, _2.7.0_ dan di atasnya. Namun, [alamat public IP](<https://docs.dewacloud.com/docs/public-ip/>) diperlukan untuk melewati Shared Load Balancer dan berkomunikasi langsung dengan server melalui HTTP/3.

Stack perangkat lunak **NGINX Ruby** adalah kombinasi dari server web _NGINX_ open-source yang sangat populer dengan bahasa pemrograman _Ruby_ yang telah terinstal. Kombinasi ini menggunakan server aplikasi _Passenger_ secara default, tetapi stack ini dapat dengan mudah dikonfigurasi ulang untuk mengubah [server aplikasi ruby](<https://docs.dewacloud.com/docs/ruby-application-server-config/>) (menjadi _Puma_ atau _Unicorn_).

NGINX Ruby cocok untuk aplikasi Ruby apa pun karena skalabilitas, keamanan, keandalan, dan efisiensi biayanya. Membuat stack ini di platform dapat dilakukan hanya dengan beberapa klik dalam hitungan menit.

:::note
Template ini menggunakan sistem daemon inisialisasi modern systemd. 
:::

1. Klik tombol **New Environment** di sudut kiri atas dashboard.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/NGINX%20Ruby/01-new-environment-button.png" alt="new environment button" width="90%"/>

2. Beralih ke tab Ruby pada wizard topologi yang terbuka secara otomatis dan pilih **NGINX Ruby** sebagai server aplikasi Anda. Jika perlu, tambahkan stack lain yang diperlukan untuk environment Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/NGINX%20Ruby/add-nginx-ruby-application-server.png" alt="add NGINX Ruby application server" max-width="100%"/>

Selanjutnya, Anda dapat mengkonfigurasi [versi Ruby engine](<https://docs.dewacloud.com/docs/ruby-versions/>) dan parameter lain dari stack yang ditambahkan menggunakan bagian tengah dari wizard (misalnya, setel [batas scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), [jumlah node](<https://docs.dewacloud.com/docs/horizontal-scaling/>), lampirkan [public IP](<https://docs.dewacloud.com/docs/public-ip/>), dll.). Ketika siap, berikan nama environment yang diinginkan dan klik **Create**.

3. Dalam satu menit, environment Anda akan muncul di dashboard.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/NGINX%20Ruby/environment-with-nginx-ruby.png" alt="environment with NGINX Ruby" max-width="100%"/>

Sekarang, Anda dapat melanjutkan untuk deployment aplikasi Anda ke server NGINX Ruby.

## Baca Juga{#whats-next}

- [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [Ruby App Server Configuration](<https://docs.dewacloud.com/docs/ruby-application-server-config/>)
- [Ruby Dependency Management](<https://docs.dewacloud.com/docs/ruby-dependency-management/>)
- [Ruby Post Deploy Configuration](<https://docs.dewacloud.com/docs/ruby-post-deploy-configuration/>)
