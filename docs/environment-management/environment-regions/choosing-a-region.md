---
sidebar_position: 1
slug: /choosing-a-region
title: Choosing a Region
---
# Environment Regions

Memberikan fleksibilitas yang signifikan, PaaS memberi penyedia layanan hosting kemungkinan untuk mengelompokkan berbagai jenis perangkat keras dalam satu platform, yang memungkinkan mereka untuk membangun solusi cloud yang serbaguna dan kompleks. Dikenal sebagai **environment regions**, setiap kumpulan perangkat keras semacam itu dapat memiliki kapasitas, harga, dan lokasi yang berbeda, tetapi tetap diatur melalui infrastruktur tunggal.

Meskipun konsepnya cukup sederhana, pendekatan semacam itu dapat membawa berbagai keuntungan, memungkinkan Anda memilih perangkat keras paling sesuai untuk hosting aplikasi Anda, berdasarkan:

  * _geographical location_ \- untuk mendapatkan waktu respons yang lebih baik dan distribusi layanan yang lebih luas
  * _quality & capacity_ \- untuk menyesuaikan kondisi hosting dengan kebutuhan saat ini, mis. perangkat keras yang lebih murah - untuk pengembangan dan pengujian, yang lebih unggul - untuk produksi
  * _cost_ \- untuk memilih kebijakan harga yang paling terjangkau berdasarkan anggaran yang tersedia

Selain itu, bersama dengan memilih set perangkat keras yang diinginkan selama pembuatan environment baru, proyek yang sudah berjalan dapat dipindahkan ke lokasi lain. Jika diperlukan, ini dapat dilakukan dalam beberapa klik - lihat detail selengkapnya di dokumen [Migration between Environment Regions](<https://docs.dewacloud.com/docs/environment-regions-migration>).

Dengan cara seperti ini, Anda mendapatkan fleksibilitas yang mengesankan untuk mengatur siklus hidup aplikasi Anda dan kebijakan penyebarannya.

Jadi, bacalah panduan lengkap tentang mengelola environment regions untuk aplikasi Anda di bawah ini dan dapatkan efisiensi maksimal dari fitur signifikan ini - cari tahu cara untuk:

  * [select an environment region](<https://docs.dewacloud.com/docs/#select-environment-region>)
  * [view details about regions](<https://docs.dewacloud.com/docs/#view-details-about-regions>)

## Select Environment Region{#select-environment-region}

Jika penyedia layanan hosting Anda menawarkan beberapa environment regions, Anda dapat melihat daftar drop-down yang sesuai pada semua frame yang dimaksudkan untuk memulai pembuatan environment baru:

  * _**topology wizard**_ 

    ![topology wizard select region](#)

  * _**[platform Marketplace](<https://docs.dewacloud.com/docs/marketplace>)**_ 

    ![platform Marketplace select region](#)

  * _**environment[import](<https://docs.dewacloud.com/docs/environment-export-import#import>)**_ 

    ![environment import select region](#)

Satu-satunya pengecualian adalah operasi [cloning](<https://docs.dewacloud.com/docs/clone-environment>) \- dalam hal ini, environment baru dibuat secara otomatis pada region perangkat keras yang sama. Namun, ini dapat dengan mudah dipindahkan ke lokasi yang diinginkan secara manual, dengan bantuan opsi [migration](<https://docs.dewacloud.com/docs/environment-regions-migration>).

:::note 
Jumlah/nama/deskripsi/parameter dari region yang disediakan didefinisikan oleh masing-masing penyedia hosting secara individual; oleh karena itu, ini dapat bervariasi pada instalasi PaaS yang berbeda. Setelah memilih perangkat keras tertentu, domain environment (ditampilkan di sebelah kolom dengan namanya) mungkin juga berubah, tergantung pada pengaturan region tersebut.
:::

Pilih salah satu dari region yang disediakan (disarankan untuk [mengetahui detailnya](<https://docs.dewacloud.com/docs/#view-details>) terlebih dahulu) untuk menempatkan environment Anda di sana secara otomatis. Setelah pembuatan, Anda akan melihat environment baru Anda muncul di dashboard dengan ikon kecil khusus yang ditugaskan untuk region tersebut:

![view environment regions in dashboard](#)

Saat mengarahkan mouse di atasnya, nama region yang sesuai ditampilkan. Dengan cara ini, environment Anda dapat dengan cepat dibedakan berdasarkan region/lokasi.

## View Details about Regions{#view-details-about-regions}

Kami menyarankan untuk mengenal spesifik dari setiap region yang tersedia di muka untuk membuat pilihan sesuai dengan kebutuhan Anda. Informasi ini dapat dilihat dalam cara berikut:

  * setiap region dilengkapi dengan deskripsi singkat tepat di dalam daftar 

    ![environment regions short description](#)

  * mengklik pada titik **More details** dari daftar di atas akan mengarahkan Anda ke tab **Regions** di dalam jendela informasi **Quotas & Pricing** 

    ![available regions detailed overview](#)

Di sini, informasi detail tentang region yang disediakan dapat ditemukan, mis. deskripsi umum dengan daftar parameter yang disediakan dan fitur yang termasuk. Namun, tergantung pada pengaturan penyedia hosting Anda, tautan ini dapat mengarah ke situs terpisah atau halaman dokumen.

  * Bagian Pricing dari frame yang sama, detail tentang [charged resources](<https://docs.dewacloud.com/docs/chargeable-resources>) (_RAM/CPU_ , _Disk Space_ , _Traffic_ dan tab _Options_) dan biaya lisensi (tab _Software_) untuk setiap region dapat dilihat - gunakan daftar drop-down di bagian atas untuk beralih di antara mereka 

    ![environment regions pricing](#)

Jika informasi lebih lanjut tentang region tertentu diperlukan, silakan hubungi penyedia hosting Anda untuk mendapatkan bantuan yang sesuai. Juga, jika Anda menemukan lokasi lain yang lebih cocok untuk aplikasi Anda, Anda dapat dengan mudah [migrasi](<https://docs.dewacloud.com/docs/environment-regions-migration>) dan mendapatkan manfaat dari kondisi baru.

## Baca Juga{#whats-next}

  * [Migration between Regions](<https://docs.dewacloud.com/docs/environment-regions-migration/>)
  * [Charged Resources](<https://docs.dewacloud.com/docs/chargeable-resources/>)
  * [Application Lifecycle Management](<https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/>)