---
sidebar_position: 1
slug: /automatic-vertical-scaling
title: Automatic Vertical Scaling
---
# Automatic Vertical Scaling

Platform ini adalah satu-satunya Cloud PaaS yang dapat secara otomatis **menskalakan aplikasi apapun** , baik secara vertikal maupun
[horizontally](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/), menjadikan hosting aplikasi Anda benar-benar fleksibel.

**Automatic vertical scaling** dimungkinkan oleh kemampuan platform untuk secara dinamis mengubah jumlah sumber daya yang dialokasikan ke server (RAM dan CPU) sesuai dengan kebutuhan saat ini, tanpa memerlukan intervensi manual. Fitur ini menjamin bahwa Anda tidak pernah membayar lebih untuk sumber daya yang tidak digunakan dan menghemat waktu Anda karena menghilangkan kebutuhan untuk menangani penyesuaian beban atau perubahan arsitektur.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-vertical-scaling/01-pay-per-use-pricing.png" alt="Pay-per-Use pricing" width="80%"/>

Anda cukup menentukan batas maksimum yang Anda siap konsumsi, dan platform secara otomatis menentukan jumlah sumber daya optimal yang dibutuhkan untuk aplikasi Anda, melacak beban yang masuk secara real-time.

## How It Works{#how-it-works}

Jadi, ide kunci dari otomatisasi scaling cukup sederhana - segera setelah beban aplikasi meningkat, platform hanya menyediakan sumber daya tambahan; dan ketika beban turun lagi, sumber daya dikurangi oleh platform secara otomatis.

Sumber daya dialokasikan secara instan tanpa penundaan atau dampak negatif pada aplikasi Anda, yang dapat dilihat dalam video berikut:

:::tip
Fitur vertical scaling dapat diterapkan untuk jenis instance apapun di environment (yaitu, application server, database, load balancer, Docker container, Elastic VPS, cache instance, dan build node).
:::

Seperti yang dapat Anda lihat dalam video di atas, platform mengukur sumber daya dalam unit khusus yang disebut **cloudlet**, yang memberi Anda granularitas yang unggul saat menskalakan. Sebuah
[cloudlet](https://docs.dewacloud.com/docs/cloudlet/) setara dengan 128 MiB RAM dan 400Mhz CPU core.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-vertical-scaling/02-cloudlet-resources.png" alt="cloudlet resources" width="60%"/>

Terdapat dua jenis cloudlet yang tersedia: **reserved** dan **dynamic**.

  * **Reserved** digunakan untuk mendefinisikan jumlah sumber daya yang Anda harapkan akan dikonsumsi oleh aplikasi Anda dan Anda membayarnya terlepas dari penggunaan aktual. Namun, mereka dikenakan biaya lebih rendah dibandingkan dengan cloudlet dinamis.
  * **Dynamic** cloudlet mendefinisikan jumlah sumber daya yang dapat diakses oleh aplikasi Anda berdasarkan kebutuhan. Anda hanya membayarnya dalam hal konsumsi nyata.

Vertical scaling otomatis dilakukan dalam batas jumlah cloudlet dinamis yang ditentukan. Anda dapat memilih batas skalabilitas Anda dengan pengaturan yang sesuai dan dengan demikian secara efektif menempatkan batasan pada anggaran yang siap Anda keluarkan, mencegah tagihan tak terduga atau tinggi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-vertical-scaling/03-automatic-vertical-scaling.png" alt="automatic vertical scaling" width="80%"/>

Anda dapat menggabungkan penggunaan kedua jenis cloudlet dengan berbagai cara, sesuai dengan [model harga](https://docs.dewacloud.com/docs/pricing-model/) yang paling sesuai untuk Anda.

## Adjusting Resource Limits{#adjusting-resource-limits}

Lingkungan yang baru dibuat menerima sejumlah cloudlet tertentu. Konsumsi sumber daya bergantung pada tipe dan jumlah stack perangkat lunak Anda. Setelah ditambahkan ke lingkungan, setiap stack menerima jumlah cloudlet yang dialokasikan secara default sesuai dengan jumlah sumber daya optimal yang dibutuhkan untuk kinerjanya yang tepat.

Klik untuk melihat nilai cloudlet default untuk beberapa stack populer.

Node Name | Reserved | Scaling Limit  
---|---|---  
Tomcat, Jetty | 1 | 6  
TomEE | 1 | 8  
GlassFish | 6 | 16  
Apache, NGINX | 1 | 4  
NGINX-Balancer | 1 | 4  
Nginx-Ruby | 1 | 6  
Apache-Ruby | 1 | 8  
Apache-Python | 1 | 8  
NodeJS | 4 | 8  
Node Name | Reserved | Scaling Limit  
---|---|---  
MySQL, MariaDB | 1 | 6  
PostgreSQL | 1 | 6  
MongoDB | 1 | 8  
CouchDB | 1 | 4  
Node Name | Reserved | Scaling Limit  
---|---|---  
Memcached | 1 | 4  
VPS | 1 | 16  
Maven | 1 | 16  
  
Jika Anda ingin mengubah nilai-nilai ini dan menskalakan lingkungan Anda, jumlah maksimum sumber daya yang tersedia (cloudlet) dapat ditingkatkan/dikurangi secara manual melalui wizard **Environment topology**. Untuk itu, gunakan slider cloudlet di bagian _Vertical Scaling_ dari panel tengahnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-vertical-scaling/04-environment-wizard.png" alt="environment wizard" width="100%"/>

:::note
Jika Anda mengubah batas skalabilitas (yaitu jumlah cloudlet dinamis) untuk application server, database, atau cache nodes yang ada, lapisan yang sesuai akan dimulai ulang. Pesan peringatan yang sesuai akan ditampilkan langsung di wizard topologi:
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-vertical-scaling/05-adjust-cloudlets-restart-warning.png" alt="adjust cloudlets restart warning" width="80%"/>

Anda dapat menggunakan [statistik](https://docs.dewacloud.com/docs/statistics-monitoring/) yang dikumpulkan secara otomatis untuk memeriksa tingkat konsumsi selama sebulan terakhir dan mengatur jumlah sumber daya sesuai dengan itu. Dan jika aplikasi Anda menjadi sangat populer dan kapasitas server tunggal tidak cukup, Anda dapat menskalakannya secara horizontal dengan menambah jumlah node secara [manual](https://docs.dewacloud.com/docs/horizontal-scaling/) atau mengonfigurasi serangkaian [triggers untuk otomatisasi horizontal scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/) pada application server Anda.

## Baca Juga{#whats-next}

  * [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
  * [Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)
  * [Isolated Containers](https://docs.dewacloud.com/docs/isolated-containers/)