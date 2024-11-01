---
sidebar_position: 4
slug: /environment-groups-management
title: Group Management
---
# Environment Groups Management: How to Assign, Edit & Remove

Panduan di bawah ini berisi informasi tentang opsi manajemen dasar yang disediakan platform untuk beroperasi dengan [environment groups](<https://docs.dewacloud.com/docs/environment-groups>). Yaitu, kita akan mendapatkan wawasan lebih dalam tentang cara:

  * [Assign Group to Environment](#assign-group-to-environment)
  * [Add Subgroup](#add-subgroups)
  * [Edit Group](#edit-group)
  * [Remove Group](#remove-group)

## Assign Group to Environment{#assign-group-to-environment}

Saat bekerja pada proyek, Anda mungkin perlu membuat lebih banyak environments terkait dan, tentunya, memasukkannya ke dalam grup yang sama dengan komponen aplikasi lainnya.

**Note:** Anda tidak dapat menambahkan shared environments ke dalam grup pribadi Anda.

Untuk menentukan label untuk environment Anda, arahkan mouse ke kolom **Tags** dan klik tombol yang muncul:

  * **Add to Env Group** \- jika belum ada tag yang ditetapkan ke sebuah environment 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/01%20(1).png" alt="add to env group" max-width="100%"/>

  * **Edit Env Groups** \- jika beberapa tag sudah dilampirkan 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/02.png" alt="edit env group" max-width="100%"/>

Dalam kotak dialog yang terbuka, Anda dapat menentukan grup untuk environment ini (dengan memilihnya melalui daftar yang diambil secara otomatis dari yang sudah ada), [buat](<https://docs.dewacloud.com/docs/environment-groups-creation>) dan tetapkan tag baru (cukup ketikkan nama yang diinginkan dan tekan **Enter**) atau lepaskan yang tidak diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/03.png" alt="define group for environment" max-width="100%"/>

Setelah mengklik **Apply**, semua tag yang ditentukan akan langsung ditampilkan dalam kolom **Tags** untuk environment yang sesuai.

:::tip 
Anda dapat menetapkan sebanyak mungkin tag ke satu environment sesuai kebutuhan; gunakan pemisah garis miring untuk menetapkan dan/atau membuat grup bertingkat langsung melalui field input.
:::

Juga, jika proses pembuatan environment dipanggil dari dalam grup environment tertentu (yaitu ketika tag yang sesuai ditampilkan dalam panel _Env Groups_ di bagian atas), semua entitas yang baru dibuat akan otomatis dimasukkan ke dalam grup ini.

## Add Subgroups{#add-subgroups}

Memanfaatkan subgrup memungkinkan untuk membagi grup environment tingkat atas menjadi bagian yang lebih kecil (misalnya untuk memisahkan komponen komputasi dan data dari satu proyek atau membedakan tahap pengembangan).

Di dalam kolom dashboard **Tags**, subgrup ditampilkan dalam tampilan jalur, di mana setiap item anak dipisahkan dengan garis miring “/” dari yang sebelumnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/04.png" alt="add subgroups" max-width="100%"/>

Sarang semacam itu dapat mencakup jumlah level yang tak terbatas dan dapat diatur dengan cara berikut:

  * langsung selama [pembuatan grup](<https://docs.dewacloud.com/docs/environment-groups-creation>) baru, baik melalui ketikkan jalur penuh grup di field _Name_ (menggunakan garis miring sebagai pemisah) atau memilih _Parent Group_ dalam daftar yang sesuai (sehingga grup baru ini akan dimasukkan ke induk yang dipilih) 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/05.png" alt="add parent group" max-width="100%"/>

  * saat berada di dalam grup, dengan memperluas daftar tindakan untuk itu dan mengklik **Add Child** 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/06.png" alt="add child group" max-width="100%"/>

  * melalui frame manajemen _**Environment Groups**_ umum (dibuka dengan **Env Groups > Manage**), dengan memilih string dengan grup yang diperlukan dan mengklik opsi **Add > Add Child**

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/07.png" alt="add env subgroup" max-width="100%"/>

Dalam dua kasus terakhir, frame _**Add Group**_ akan dibuka, dengan grup yang sesuai secara otomatis diatur sebagai induk.

## Edit Group{#edit-group}

Dimungkinkan untuk menyesuaikan setiap kelompok lingkungan di akun Anda agar sesuai dengan permintaan baru kapan saja. Opsi yang sesuai dapat diakses dalam salah satu cara berikut:

  * beralih ke grup yang dibutuhkan, perluas daftar tindakan untuk itu dan klik **Edit** 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/08.png" alt="edit group" max-width="100%"/>

  * pergi ke frame manajemen umum grup (dibuka dengan **Env Groups > Manage**), pilih string dengan grup yang sesuai dan pilih **Edit** di panel alat di atas 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/09.png" alt="edit environment groups" max-width="100%"/>

Melalui kedua opsi, kotak dialog **Edit Group** akan dibuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/10.png" alt="edit group dialog box" max-width="100%"/>

Di sini, Anda dapat menyesuaikan semua data yang telah Anda tentukan selama pembuatan grup ini, yaitu:

  * **Name** \- ketik nama baru untuk grup Anda (asosiasi warna juga bisa diubah)
  * **Parent Group** \- tetapkan atau ubah penyematan untuk grup saat ini
  * **Environments** \- tambahkan atau hapus environments dari grup

Klik **Apply** untuk menyimpan pengaturan.

:::note 
Saat melakukan pengeditan melalui kotak dialog manajemen Environment Groups, Anda perlu me-_Refresh_ daftar grup untuk pengaturan baru agar segera ditampilkan dalam frame ini.
:::

## Remove Group{#remove-group}

Ketika grup yang sebelumnya dibuat tidak lagi dibutuhkan, Anda dapat dengan mudah menghapusnya dari dashboard.

:::note 
Penghapusan grup tidak berdampak pada environments yang termasuk (tentunya, kecuali pelepasan tag yang bersangkutan). Dengan cara yang sama, setelah menghapus semua environments dari grup, tag yang bersangkutan akan tetap tersedia di dashboard untuk dipilih.
:::

Untuk menghapus sebuah grup, lakukan salah satu operasi berikut:

  * navigasikan ke dalam grup yang tidak lagi dibutuhkan, perluas daftar tindakan untuk itu di dalam panel atas dan klik **Remove** 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/11.png" alt="remove group" max-width="100%"/>

  * atau, buka **Env Groups > Manage**, pilih grup yang tidak diperlukan dalam daftar yang ditampilkan dan klik tombol **Remove** 

    <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/12.png" alt="remove environment group" max-width="100%"/>

Untuk melanjutkan penghapusan grup, konfirmasikan tindakan ini dengan memilih **Yes** dalam frame yang muncul. 

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-groups/group-management/13.png" alt="delete group" max-width="100%"/>

Dengan cara seperti ini, Anda dapat menerapkan semua konfigurasi grup environment yang penting dan meningkatkan pembagian mereka di dashboard Anda.

## Baca Juga{#whats-next}

  * [Environment Groups Overview](<https://docs.dewacloud.com/docs/environment-groups/>)
  * [Environment Groups Navigation](<https://docs.dewacloud.com/docs/environment-groups-navigation/>)
  * [Environment Collaboration](<https://docs.dewacloud.com/docs/share-environment/>)
  * [Environment Regions](<https://docs.dewacloud.com/docs/environment-regions/>)