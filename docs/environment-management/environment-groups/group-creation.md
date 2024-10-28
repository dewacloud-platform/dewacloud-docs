---
sidebar_position: 2
slug: /group-creation
title: Group Creation
---
# How to Create Environment Group

Membuat [environment group](<https://docs.dewacloud.com/docs/environment-groups/>) baru melibatkan pembuatan tag khusus, yang selanjutnya bisa dilampirkan ke environment yang diperlukan untuk menandainya secara logis di dalam dashboard. Anda dapat menggunakan paradigma penamaan apa pun yang akan nyaman untuk Anda - misalnya, jika memiliki versi _development_, _testing_, dan _production_ dari suatu proyek, Anda dapat menerapkan tag semacam itu ke environments yang sesuai untuk memisahkannya dengan mudah.

Jadi, untuk dengan cepat membuat environment group hanya dalam beberapa menit, ikuti langkah-langkah berikut:

1\. Buka dashboard platform Anda dan klik tombol **"+" (Create New)** di panel _**Env Groups**_ di bagian atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-creation/01%20(1).png" alt="create new group button" max-width="100%"/>

:::tip 
Sebagai alternatif, Anda dapat mengakses opsi yang sama melalui menu _Env Groups_ yang dapat diperluas: pilih titik _Create New_, pilih _Manage_, dan klik tombol _Add_ dalam bingkai yang terbuka.
:::

2\. Kotak dialog _**Add Group**_ yang sesuai akan dibuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-creation/02.png" alt="add group dialog" max-width="100%"/>

Tentukan data berikut untuk membuat grup baru:

  * **Name** \- ketik nama untuk grup Anda (huruf, angka, dan karakter khusus apa pun dapat digunakan termasuk spasi)
  * **Parent Group** \- secara opsional, tentukan penyematan untuk grup yang saat ini dibuat untuk dimasukkan ke dalam yang lain sebagai [subgroup](<https://docs.dewacloud.com/docs/environment-groups-management/#add-subgroups>)
  * **Environments** \- pilih environments yang harus menjadi bagian dari grup (shared environments tidak dapat ditambahkan ke grup pribadi Anda); juga, dimungkinkan untuk membuat grup kosong dan [mengisinya dengan environments](<https://docs.dewacloud.com/docs/environment-groups-management/#assign-group-to-environment>) nanti

:::tip 
Untuk meningkatkan pengenalan visual grup dalam dashboard, Anda dapat menetapkan warna yang berbeda untuk masing-masing dengan mengklik tombol melingkar dekat nama grup.
:::

Setelah Anda selesai, klik **Add**.

3\. Grup yang baru dibuat akan secara otomatis dipilih dan ditampilkan sebagai elemen baru di panel navigasi **Env Groups** atas. Daftar environments yang ditampilkan juga akan difilter sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-creation/03.png" alt="new environment group created" max-width="100%"/>

Selain itu, pelajari cara Anda bisa [mengelola grup environment Anda](<https://docs.dewacloud.com/docs/environment-groups-management/>) dan dengan cepat [berpindah di antara mereka](<https://docs.dewacloud.com/docs/environment-groups-navigation/>) di dalam dashboard.

## Baca Juga{#whats-next}

  * [Environment Groups Overview](<https://docs.dewacloud.com/docs/environment-groups/>)
  * [Environment Groups Navigation](<https://docs.dewacloud.com/docs/environment-groups-navigation/>)
  * [Environment Groups Management](<https://docs.dewacloud.com/docs/environment-groups-management/>)
  * [Environment Isolation](<https://docs.dewacloud.com/docs/environment-isolation/>)