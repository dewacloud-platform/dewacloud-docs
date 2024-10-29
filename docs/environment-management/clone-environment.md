---
sidebar_position: 3
slug: /clone-environment
title: Clone Environment
---
# Menggandakan Environment

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/01-cloning-environment-logo.png" alt="cloning environment logo" max-width="100%"/>

Cepat atau lambat, setiap pengembang akan menghadapi kebutuhan untuk membuat cabang aplikasi yang sedang mereka kerjakan, misalnya untuk mencoba fungsionalitas baru sebelum benar-benar menerapkannya ke produksi. Untuk kasus seperti ini, platform menyediakan opsi khusus - **penggandaan environment**, yang memungkinkan Anda membuat salinan lengkap dari proyek yang sudah ada hanya dalam beberapa klik.

Selain itu, jika berbicara tentang proyek yang lebih kompleks dan rumit (yang melibatkan seluruh tim pengembangan), beberapa salinan aplikasi Anda (yang didedikasikan untuk tugas tertentu) sangat disarankan. Implementasi [lifecycle aplikasi](<https://docs.dewacloud.com/docs/application-lifecycle/>) yang paling umum melibatkan tahap-tahap berikut:

  * _**pengembangan**_ \- untuk pengembang membuat dan memodifikasi fitur
  * _**pengujian**_ \- untuk memastikan kualitas dengan menemukan dan menganalisis masalah yang mungkin terjadi
  * _**produksi**_ \- versi aplikasi terbaru yang disediakan untuk digunakan oleh pelanggan akhir

Di bawah ini, kami akan memberikan informasi tentang [cara membuat salinan environment](<https://docs.dewacloud.com/docs/#how-to-clone-environment>) dan beberapa [kasus penggunaan umum](<https://docs.dewacloud.com/docs/#common-use-cases>).

:::note
Poin-poin spesifik berikut perlu diperhatikan saat menggandakan environment di platform: berdasarkan mode scaling layer, container yang digandakan akan dibuat dari image dasar yang sesuai (stateless) atau disalin dari container master (stateful). Anda mungkin mengalami pembekuan jangka pendek pada container sumber karena migrasi status memori ke node yang digandakan (spesifik implementasi mirip dengan live migration). Saat menggandakan environment berbasis Windows, container akan dihentikan sementara, jadi bersiaplah untuk downtime singkat.
:::

## Cara Menggandakan Environment {#how-to-clone-environment}

Untuk membuat salinan environment, ikuti langkah-langkah di bawah ini:

1\. Klik tombol **Clone Environment** yang sesuai di sebelah environment Anda, seperti yang ditunjukkan pada gambar di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/02-clone-environment-button.png" alt="clone environment button" max-width="100%"/>

2\. Dalam pop-up yang muncul, tentukan nama untuk salinan environment atau biarkan yang default, lalu klik **Clone**.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/03-clone-environment-dialog.png" alt="clone environment dialog" max-width="100%"/>

3\. Dalam beberapa menit, environment akan digandakan dan siap digunakan.

:::tip
Untuk beberapa kasus khusus, penyesuaian tambahan mungkin diperlukan agar salinan environment dapat beroperasi: alamat IP dan hostname node akan berbeda dari yang awal dan, jika di-“hardcode” dalam file konfigurasi, harus disesuaikan secara manual. Jika Anda menghadapi masalah saat menggandakan environment besar (misalnya dengan lebih dari 1TB data yang disimpan dalam container), harap hubungi penyedia hosting Anda untuk bantuan. Environment dalam kolaborasi hanya dapat digandakan oleh pemiliknya; salinan yang dibuat tidak akan tersedia untuk kolaborator secara default.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/04-production-and-development-clones.png" alt="production and development clones" max-width="100%"/>

Sekarang, Anda dapat mengonfigurasinya kembali, meng-deploy versi aplikasi baru, dan menerapkan modifikasi topology atau aplikasi apa pun - ini tidak akan memengaruhi environment asli.

## Kasus Penggunaan Umum {#common-use-cases}

Anda dapat menggunakan environment Anda dengan cara-cara berikut:

  * mengganti nama (mengubah domain internal) environment Anda
  * [menukar domain](<https://docs.dewacloud.com/docs/swap-domains/>) untuk mengarahkan pelanggan Anda ke proyek yang ditingkatkan
  * menerapkan [blue-green deployment](<https://docs.dewacloud.com/docs/blue-green-deploy/>) untuk memungkinkan pembaruan "tidak terlihat" yang tidak akan menyebabkan downtime untuk aplikasi Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/05-blue-green-deploy-scheme.png" alt="blue-green deploy scheme" max-width="100%"/>

  * melakukan _[A/B testing](<https://docs.dewacloud.com/docs/ab-testing/>)_ (misalnya membandingkan versi yang berbeda) untuk menentukan mana yang memberikan daya tarik pengguna yang lebih baik

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/06-a-b-testing-scheme.png" alt="A/B testing scheme" max-width="100%"/>

  * mencapai _[perlindungan failover](<https://docs.dewacloud.com/docs/failover-protection>)_ yang lebih canggih untuk aplikasi Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/clone-environment/07-failover-protection-scheme.png" alt="failover protection scheme" max-width="100%"/>

  * mengonfigurasi penyimpanan data dari beberapa environment dalam satu [Dedicated Storage Container](<https://docs.dewacloud.com/docs/dedicated-storage/>) untuk memanfaatkan ruang disk lebih efisien
  * menggandakan environment untuk membuat "snapshot" dari seluruh pengaturan
  * Anda dapat mengonfigurasi replikasi atau sinkronisasi data dari produksi ke salinan, memastikan bahwa data di environment pengujian/staging Anda tetap aktual

Kasus penggunaan ini dapat membantu Anda mendapatkan hasil maksimal dari environment asli dan salinannya.

## Baca Juga {#whats-next}

  * [Menyiapkan Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Berbagi Environment](<https://docs.dewacloud.com/docs/share-environment/>)
  * [Panduan Deployment](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Manajemen Lifecycle Aplikasi](<https://docs.dewacloud.com/docs/application-lifecycle/>)