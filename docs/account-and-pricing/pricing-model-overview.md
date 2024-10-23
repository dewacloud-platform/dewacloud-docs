---
sidebar_position: 12
slug: /pricing-model
title: Ikhtisar Model Harga
---
# Harga Penggunaan Platform (Pay-per-Use)

Platform ini menyediakan model harga yang serbaguna, yang dapat disesuaikan untuk memenuhi persyaratan pelanggan yang paling menuntut berkat sejumlah fitur unggulannya:

  * Sumber daya disediakan dengan unit granular - [cloudlet](https://docs.dewacloud.com/docs/cloudlet/) (128MiB RAM dan 400MHz CPU). Ini memungkinkan untuk mengalokasikan jumlah sumber daya yang dibutuhkan secara tepat.
  * _[Penskalaan vertikal](https://docs.dewacloud.com/docs/automatic-vertical-scaling/) dan [horizontal otomatis](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)_ memastikan bahwa Anda hanya akan disediakan dengan kapasitas yang dibutuhkan tanpa membayar lebih untuk sumber daya yang tidak terpakai.
  * Sistem _[diskon otomatis](https://docs.dewacloud.com/docs/automatic-discounts/)_ membuat penggunaan platform menjadi lebih menguntungkan ketika volume pesanan sumber daya bertambah.

Bertentangan dengan mayoritas vendor lainnya, semua fitur ini memungkinkan penyediaan pendekatan pembebanan _**Pay-per-Use**_ yang benar-benar terfokus pada pengguna:

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/01-pay-per-use-pricing.png" alt="Pay-per-Use vs Pay-per-Limit" width="100%"/>

Video di bawah ini akan membantu Anda memahami poin-poin penting dari fleksibilitas sistem biaya platform dan masalah yang dapat dipecahkannya:

## Cara Kerjanya{#how-it-works}

Dengan penskalaan otomatis Anda tidak perlu menebak atau memprediksi beban yang akan datang. Platform akan secara otomatis menyesuaikan jumlah sumber daya yang dialokasikan ke lingkungan (dalam batas penskalaan yang dinyatakan) sesuai dengan persyaratan saat ini.

_Limit Penskalaan_ mengatur jumlah maksimum cloudlet yang dapat dialokasikan untuk setiap server, sehingga Anda dapat menggunakannya untuk menentukan anggaran maksimum yang mungkin untuk proyek Anda. Selanjutnya, cloudlet akan secara otomatis ditambahkan ke server Anda berdasarkan konsumsi sumber daya aplikasi. Ini disebut _**Dynamic Cloudlets**_ karena mereka secara dinamis ditambahkan (sebagai peningkatan penggunaan sumber daya Anda) dan dihapus (sebagai penurunan penggunaan sumber daya Anda). Jadi, Anda membayar berdasarkan penggunaan per jam yang sebenarnya.

Karena sebagian besar aplikasi memerlukan sejumlah sumber daya hanya untuk dimuat dan siap dijalankan, Anda akan selalu mengkonsumsi sejumlah cloudlet tertentu terlepas dari tingkat beban. Oleh karena itu, Anda dapat mengalokasikannya sebelumnya dengan _**Reserved Cloudlets**_ dan mendapatkan keuntungan dari [diskon otomatis](https://docs.dewacloud.com/docs/automatic-discounts/).

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/2.png" alt="automatic discount per reserved cloudlets" width="100%"/>

Rentang penskalaan ini dikonfigurasi secara individual untuk setiap instans server, sehingga Anda dapat menentukan batas yang berbeda untuk setiap container sesuai kebutuhan dan preferensi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/3.png" alt="save money with smart pricing" width="100%"/>

:::note
Ketika menghitung konsumsi cloudlet Anda, kami hanya mempertimbangkan penggunaan RAM atau CPU yang lebih besar per jam (yaitu tidak keduanya digabungkan). Pelajari lebih lanjut dengan dokumen [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/resource-consumption/). Pelajari cara melacak pengeluaran hosting Anda melalui dashboard platform dengan [video ini](https://www.youtube.com/watch?v=yg_fVjCbyuw&list=PLkntuNwly7TcU_IAoiZhxxQuq9nUsQQ5r&index=7).
:::

## Menyiapkan Harga Berbasis Penggunaan{#setting-up-usage-based-pricing}

Untuk menerapkan model harga berbasis penggunaan semacam itu ke lingkungan Anda, lakukan langkah-langkah berikut:

1\. Atur slider **Scaling Limit** (yang transparan di sebelah kanan) <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/4.png" alt="dynamic cloudlets" width="20"/> ke batas sumber daya maksimum yang Anda inginkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/5.png" alt="environment scaling limit" width="100%"/>

:::warning
Mengatur Scaling Limit terlalu rendah untuk aplikasi yang sangat dibebani dapat menyebabkan ketidakstabilan. 
:::

Karena penggunaan dihitung setiap jam, konsumsi cloudlet (RAM & CPU) Anda dapat naik dan turun sepanjang hari tergantung pada kebutuhan aplikasi - jadi Anda secara otomatis membayar harga lebih rendah saat menggunakan lebih sedikit sumber daya (misalnya selama periode lalu lintas rendah), dan hanya membayar lebih saat sumber daya tambahan benar-benar diperlukan (misalnya selama periode lalu lintas tinggi).

2\. Atur slider **Reserved Cloudlets** (yang di sebelah kiri berwarna putih) <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/6.png" alt="reserved cloudlets" width="20"/> ke nilai yang diinginkan untuk mengkomit jumlah minimum RAM & CPU yang Anda harapkan selalu dibutuhkan dan dapatkan diskon untuk mereka. Ukuran diskon yang tepat dapat bervariasi menurut penyedia hosting dan jumlah keseluruhan _Reserved Cloudlets_ di lingkungan Anda (yaitu jumlah mereka untuk semua node).

<img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/pricing-model-overview/7.png" alt="environment reserved resources" width="100%"/>

### Contoh{#example}

Dalam contoh kami, server memiliki 4 **Reserved cloudlets** dan batas maksimum 24 **Dynamic Cloudlets**. Dengan konfigurasi ini, pembayaran akan dilakukan sebagai berikut:

  * jika Anda menggunakan 4 cloudlet atau kurang, Anda membayar untuk 4 cloudlet berdasarkan harga Reserved cloudlets yang didiskon
  * jika Anda menggunakan misalnya 16 cloudlet, Anda membayar untuk 4 cloudlet berdasarkan harga Reserved (karena mereka sudah dialokasikan) dan untuk 12 cloudlet berdasarkan harga Dynamic

Menggabungkan penggunaan _Reserved_ dan _Dynamic_ cloudlets memungkinkan Anda untuk menghemat biaya sekaligus tetap siap menghadapi lonjakan permintaan aplikasi yang tidak terduga. Pendekatan semacam itu memungkinkan untuk menangani semua permintaan yang masuk selama puncak beban, sekaligus, tidak membayar lebih untuk sumber daya yang tidak digunakan.

## Baca Juga{#more-useful-links}

  * [Berapa biaya PaaS](https://www.youtube.com/watch?v=yg_fVjCbyuw&list=PLkntuNwly7TcU_IAoiZhxxQuq9nUsQQ5r&index=7) - pelajari cara melacak pengeluaran hosting Anda
  * [Harga PaaS vs Amazon](https://www.virtuozzo.com/company/blog/fair-pricing-model-jelastic-vs-amazon/) - dapatkan wawasan tentang manfaat harga dinamis
  * [Sumber Daya yang Dikenakan Biaya](https://docs.dewacloud.com/docs/resource-consumption/) - pelajari apa yang dikenakan biaya di platform
  * [Memantau Sumber Daya yang Digunakan](https://docs.dewacloud.com/docs/monitoring-consumed-resources/) - periksa beban saat ini dan sejarah sumber daya yang digunakan
  * [Hemat Uang Cloud Anda](https://www.virtuozzo.com/company/blog/save-your-cloud-money/) - lihat beberapa tips tentang cara mengurangi konsumsi
  * [Cloud Union](https://www.virtuozzo.com/application-platform-partners/) - bandingkan harga di platform penyedia hosting yang berbeda dan pilih yang paling sesuai