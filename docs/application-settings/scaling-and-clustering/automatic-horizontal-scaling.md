---
sidebar_position: 3
slug: /automatic-horizontal-scaling
title: Automatic Horizontal Scaling
---
# Automatic Horizontal Scaling

Selain [automatic vertical scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling), platform ini juga dapat secara otomatis menskalakan node secara horizontal, mengubah jumlah container di dalam sebuah [layer](https://docs.dewacloud.com/docs/paas-components-definition/#layer) ([nodeGroup](https://docs.cloudscripting.com/creating-manifest/selecting-containers/#all-containers-by-group)) berdasarkan beban yang masuk. Di sini, semua instance dalam layer yang sama didistribusikan secara merata di seluruh set perangkat keras (host) yang tersedia menggunakan aturan anti-affinity. Yakni, ketika container baru dibuat, itu ditempatkan di host dengan jumlah instance dari layer yang sama paling sedikit dan nilai beban terendah, yang memastikan [reliabilitas dan ketersediaan tinggi](https://docs.dewacloud.com/docs/isolated-containers) dari proyek yang dihosting.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/01-containers-anti-affinity.png" alt="containers anti affinity" width="100%"/>

Automatic horizontal scaling diimplementasikan dengan bantuan tunable triggers, yang merupakan kondisi kustom untuk penambahan node (scale out) dan penghapusan node (scale in) berdasarkan beban. Setiap menit, platform menganalisis konsumsi sumber daya rata-rata (untuk jumlah menit yang ditentukan dalam trigger) untuk memutuskan apakah penyesuaian jumlah node diperlukan.

Di sini, statistik dikumpulkan untuk seluruh layer, sehingga jika ada tiga node dengan beban masing-masing 20%, 50%, dan 20%, nilai rata-rata yang dihitung adalah 30%. Selain itu, kondisi scale in dan out independen, yaitu periode yang dianalisis untuk satu tidak di-reset ketika yang lain dieksekusi.

Di bawah ini, kita akan membahas cara:

  * [set triggers for automatic scaling](https://docs.dewacloud.com/docs/#configure-triggers)
  * [view triggers execution history](https://docs.dewacloud.com/docs/#execution-history)

## Triggers for Automatic Scaling{#triggers-for-automatic-scaling}

Untuk mengonfigurasi trigger untuk automatic horizontal scaling, ikuti langkah-langkah di bawah ini.

:::warning
Saat satu server aplikasi bersertifikat (bukan container Docker kustom) di-scale out pada environment tanpa load balancers, NGINX balancer ditambahkan secara otomatis. Jika Anda memerlukan balancer lain untuk aplikasi Anda, itu harus ditambahkan secara manual sebelum peristiwa scaling pertama.
:::

1\. Klik tombol **Settings** untuk environment yang diperlukan. <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/02-environment-settings-button.png" alt="environment settings button" width="100%"/>

2\. Di tab yang terbuka, navigasikan ke bagian **Monitoring > Auto Horizontal Scaling**, di mana Anda dapat melihat daftar scaling triggers yang dikonfigurasi untuk environment saat ini (jika ada). <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/03-auto-horizontal-scaling-settings.png" alt="auto horizontal scaling settings" width="100%"/>

Gunakan tombol di panel alat untuk mengelola auto horizontal scaling untuk environment:

  * **Add** \- membuat trigger baru
  * **Edit** \- menyesuaikan trigger yang ada
  * **Remove** \- menghapus trigger yang tidak diperlukan
  * **Refresh** \- memperbarui daftar scaling triggers yang ditampilkan

Klik **Add** untuk melanjutkan.

3\. Pilih layer environment yang diperlukan dari daftar drop-down dan pilih tipe sumber daya yang akan dimonitor melalui salah satu tab yang sesuai (_CPU_, _Memory_, _Network_, _Disk I/O_, _Disk IOPS_). <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/04-auto-horizontal-scaling-triggers.png" alt="auto horizontal scaling triggers" width="100%"/>

:::tip
Node awal (master) dapat digunakan sebagai **storage server** untuk berbagi data dalam seluruh layer, termasuk node yang ditambahkan melalui automatic horizontal scaling. Batas _CPU_ dan _Memory_ dihitung berdasarkan jumlah _cloudlets_ yang dialokasikan (unit sumber daya khusus platform, yang mewakili 400 MHz CPU dan 128 MiB RAM secara bersamaan).
:::

4\. Grafik di sebelah kanan menunjukkan statistik konsumsi sumber daya yang dipilih. Anda dapat memilih periode yang diperlukan untuk data yang ditampilkan (hingga satu minggu) menggunakan daftar drop-down yang sesuai. Jika diperlukan, Anda dapat mengaktifkan/nonaktifkan fungsi _Auto Refresh_ statistik. <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/05-scaling-trigger-graphs.png" alt="scaling trigger graphs" width="100%"/>

Anda juga dapat mengarahkan kursor ke grafik untuk melihat jumlah sumber daya yang digunakan pada saat tertentu. Gunakan informasi ini untuk mengatur kondisi yang tepat untuk trigger Anda.

5\. Setiap trigger memiliki kondisi **Add** dan **Remove Nodes**, yang dapat diaktifkan dengan kotak centang yang sesuai di depan judul. <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/06-scaling-trigger-conditions.png" alt="scaling trigger conditions" width="100%"/>

Keduanya dikonfigurasi dengan cara yang sama:

  * **When loading is more (less) than** \- batas atas (bawah) dalam _persentase_ untuk beban rata-rata (yaitu mengeksekusi trigger jika melebihi)

:::tip
Nilai yang diperlukan dapat dinyatakan melalui slider yang sesuai pada grafik. Nilai _100%_ secara otomatis menonaktifkan trigger **Add Nodes**, dan _0%_ menonaktifkan trigger **Remove Nodes**. Perbedaan minimum yang diizinkan antara kondisi **Add** dan **Remove Nodes** adalah _20%_. Unit _Mbps_ dapat dipilih untuk trigger _Network_ sebagai pengganti persentase. Kami merekomendasikan menetapkan beban rata-rata untuk trigger **Add Nodes** di atas ambang _50%_ untuk menghindari scaling yang tidak diperlukan (yaitu sumber daya/biaya yang terbuang).
:::

  * **For at least** \- jumlah _menit_ yang dihitung konsumsi rata-ratanya (hingga satu jam dengan interval 5 menit, misalnya _1_, _5_, _10_, _15_, dll.)
  * **Scale out (in) to** \- jumlah maksimum (minimum) _node_ untuk layer, yang dapat dikonfigurasi karena automatic horizontal scaling
  * **Scale by** \- jumlah _node_ yang akan ditambahkan/dihapus sekaligus saat trigger dieksekusi

Saat mengonfigurasi trigger, kami merekomendasikan untuk mempertimbangkan [scaling mode](https://docs.dewacloud.com/docs/horizontal-scaling#scaling-mode) dari layer. Misalnya, Anda harus menetapkan persentase beban yang lebih rendah dalam trigger **Add Nodes** untuk mode _stateful_, karena cloning konten membutuhkan waktu (terutama untuk container dengan banyak data) dan Anda dapat mencapai batas sumber daya sebelum node baru dibuat.

6\. Anda akan menerima notifikasi email secara otomatis tentang aktivitas trigger automatic horizontal scaling yang dikonfigurasi; namun, jika diperlukan, Anda dapat menonaktifkannya dengan **Send Email Notifications** switcher yang sesuai. <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/07-scaling-notifications-switcher.png" alt="scaling notifications switcher" width="100%"/>

7\. Di bagian bawah formulir, Anda memiliki tombol berikut:

  * **Undo Changes** \- kembali ke keadaan sebelumnya (hanya untuk pengeditan)
  * **Close** \- keluar dari dialog tanpa perubahan
  * **Apply (Add)** \- mengonfirmasi perubahan untuk trigger

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/08-scaling-trigger-buttons.png" alt="scaling trigger buttons" width="100%"/>

Pilih opsi yang diperlukan untuk menyelesaikan pembuatan (penyesuaian) trigger.

## Triggers Execution History{#triggers-execution-history}

Anda dapat melihat riwayat eksekusi scaling triggers untuk environment tertentu.

Dalam contoh di bawah ini, kami akan menerapkan beban tinggi selama 5 menit (lihat [statistik](https://docs.dewacloud.com/docs/view-app-statistics) penggunaan RAM pada gambar di bawah) di application server dengan trigger berikut dikonfigurasi:

  * _**add node**_ ketika beban RAM rata-rata lebih dari 65% selama minimal 5 menit
  * _**remove node**_ ketika beban RAM rata-rata kurang dari 20% selama minimal 10 menit

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/09-node-load-statistics.png" alt="node load statistics" width="100%"/>

Sekarang, mari kita lihat perilaku automatic horizontal scaling:

1\. Navigasikan ke bagian **Settings > Monitoring > Events History** dan pilih opsi _**Horizontal Scaling**_ dalam daftar drop-down _Type_. <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/10-scaling-triggers-event-history.png" alt="scaling triggers event history" width="100%"/>

Selain itu, Anda dapat menyesuaikan periode untuk menampilkan aktivitas trigger melalui kolom **From** dan **To** yang sesuai.

2\. Detail berikut disediakan dalam daftar:

  * **Date** dan waktu eksekusi trigger
  * **Action** yang dilakukan (_Add_ atau _Remove Nodes_)
  * **Nodes** tipe yang diterapkan scaling
  * **Info** tentang kondisi eksekusi trigger

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/automatic-horizontal-scaling/11-list-scaling-events.png" alt="list scaling events" width="100%"/>

Selain itu, dengan mengarahkan kursor ke rekaman tertentu, Anda dapat memeriksa **Loading Value** (penggunaan sumber daya pada saat eksekusi) dan **Node Count** (jumlah node yang dihasilkan).

Trigger _**Add**_ dan _**Remove Nodes**_ independen, sehingga kondisi penghapusan (beban rata-rata kurang dari 20% selama minimal 10 menit) tidak di-reset dan terus diperiksa bahkan setelah penambahan node baru. Pendekatan semacam itu memberikan deteksi lebih cepat terhadap beban rata-rata yang cukup selama interval yang ditentukan. Disarankan untuk menetapkan perbedaan signifikan antara batas scale out dan scale in untuk menghindari perubahan topologi yang sering.

Itu saja! Dengan cara ini, Anda dapat mengonfigurasi serangkaian tunable triggers untuk memastikan performa aplikasi Anda dan melacak aktivitas automatic horizontal scaling langsung melalui dashboard.

Jika Anda memiliki pertanyaan, jangan ragu untuk meminta bantuan dari ahli teknis kami di [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

  * [Automatic Vertical Scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling)
  * [Horizontal Scaling](https://docs.dewacloud.com/docs/horizontal-scaling)
  * [Statistics Monitoring](https://docs.dewacloud.com/docs/view-app-statistics)
  * [Load Alerts](https://docs.dewacloud.com/docs/load-alerts)