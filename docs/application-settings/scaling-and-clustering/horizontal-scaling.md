---
sidebar_position: 2
slug: /horizontal-scaling
title: Horizontal Scaling
---
# Horizontal Scaling inside the Cloud: Multi Nodes

Dengan platform ini, hosting aplikasi Anda menjadi benar-benar fleksibel. Selain [automatic vertical scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/), platform ini juga memungkinkan Anda untuk menambah/mengurangi jumlah server di lingkungan Anda secara manual atau [otomatis](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/).

Proses scaling manual cukup sederhana - buka wizard environment topology dan gunakan tombol “**+**” dan “**-**” yang sesuai atau ketik jumlah yang diinginkan di panel tengah. Anda juga dapat menggunakan slider yang secara otomatis muncul saat melakukan penyesuaian.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/01-topology-wizard-horizontal-scaling.png" alt="topology wizard horizontal scaling" width="100%"/>

:::tip
Anda dapat mengotomatisasi horizontal scaling berdasarkan beban masuk dengan bantuan **tunable triggers**. Anda dapat menggunakan node awal (master) dari layer sebagai **storage server** untuk berbagi data dalam seluruh layer. Dalam kasus pengurangan skala (mis. mengurangi jumlah node), container terakhir yang ditambahkan ke layer adalah yang pertama dihapus (kecuali dipilih secara eksplisit).
:::

Selanjutnya, Anda dapat memilih [mode scaling](https://docs.dewacloud.com/docs/#scaling-modes) yang diperlukan dari daftar drop-down yang sesuai. Untuk detail lebih lanjut, lihat bagian [horizontal scaling specifics](https://docs.dewacloud.com/docs/#horizontal-scaling-specifics) di bawah ini.

## Scaling Modes{#scaling-modes}

Mulai dari versi platform 5.5, mode scaling yang diinginkan dapat dipilih untuk lingkungan baru selama pembuatan, serta disesuaikan untuk yang sudah ada melalui topology wizard:

  * _**Stateless**_ \- membuat semua node baru secara bersamaan dari template image dasar
  * _**Stateful**_ \- secara berurutan menyalin sistem file dari container master ke node baru

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/02-scaling-modes.png" alt="scaling modes" width="50%"/>

Opsi pertama relatif lebih cepat, sementara yang kedua secara otomatis menyalin semua konfigurasi khusus. Dalam pembuatan layer awal, semua node dibuat secara bersamaan untuk mempercepat proses (bahkan untuk mode _**stateful**_, karena tidak ada kustomisasi yang diterapkan).

Saat menggunakan mode _**stateless**_, perhatikan bahwa fitur berikut tidak ada di node baru dalam layer:

  * **deployments** \- konteks proyek yang ada tidak akan dipindahkan
  * **custom SSL** \- sertifikat SSL dan konfigurasi tidak akan disalin
  * **mount points** \- [mounts](https://docs.dewacloud.com/docs/mount-points/) kustom hanya akan dipindahkan jika [volume](https://docs.dewacloud.com/docs/container-volumes/) yang sesuai dikonfigurasi
  * **add-ons** \- add-ons yang diinstal di layer tidak akan tersedia

:::tip
Transfer file kustom untuk mode _stateless_ dapat dilakukan secara manual atau dikonfigurasi melalui otomatisasi **Cloud Scripting** (mis. menggunakan event **onBefore** dan **onAfterScaleOut**).
:::

Berdasarkan keunikan ini, platform merekomendasikan (dan menerapkan secara default) mode _**stateful**_ untuk stack _load balancer_, _application server_, dan _VPS_. Jika diperlukan, Anda dapat mengubah mode scaling untuk node kapan saja melalui topology wizard.

## Horizontal Scaling Specifics{#horizontal-scaling-specifics}

Jumlah maksimum server tipe yang sama dalam satu layer environment tergantung pada pengaturan penyedia hosting tertentu (biasanya batas ini untuk 16 node). Anda dapat memeriksa nilai pastinya dalam **Quotas & Pricing > [Account Limits](https://docs.dewacloud.com/docs/quotas-system/)**.

Semua server yang baru ditambahkan dibuat di node hardware yang berbeda, memberikan keandalan dan ketersediaan tinggi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/03-horizontal-scaling-high-availability.png" alt="horizontal scaling high-availability" width="70%"/>

Setiap grup node environment (layer) diberikan nama yang didedikasikan, yang, jika diperlukan, dapat disesuaikan secara manual. Jika ada beberapa instance di dalamnya, nama layer akan dilengkapi dengan label _**xN**_ (di mana _**N**_ adalah jumlah node yang sebenarnya).

Memiliki beberapa node tipe yang sama dalam satu layer memungkinkan pengelolaan sinkron mereka. Dengan demikian, semua container dapat secara bersamaan [dikonfigurasi](https://docs.dewacloud.com/docs/container-configuration/), diperiksa untuk log dan statistik, [di-restart atau di-redeploy](https://docs.dewacloud.com/docs/container-redeploy/) melalui ikon yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/04-scaled-nodes-management.png" alt="scaled nodes management" width="100%"/>

Untuk mengoperasikan container tertentu secara terpisah, perluas string layer untuk melihat daftar lengkap nodenya. Masing-masing container ini adalah instance terisolasi yang memiliki _**Node ID**_ unik dan dapat diakses/dikonfigurasi secara terpisah dari yang lain. Node master layer dapat dengan mudah ditemukan karena ikon khusus.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/05-nodes-in-scaled-layer.png" alt="nodes in scaled layer" width="100%"/>

Untuk memfasilitasi interaksi dengan banyak server dari tipe yang sama, platform juga memungkinkan menandai node tertentu dengan label yang sesuai, misalnya untuk mendefinisikan instance master dan slave dalam cluster DB.

Cukup klik dua kali pada nilai _**Node ID: xxx**_ default (atau arahkan kursor ke atasnya untuk menampilkan ikon pensil khusus) dan tentukan nama alternatif yang diinginkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/06-aliases-for-scaled-nodes.png" alt="aliases for scaled nodes" width="100%"/>

Informasi lebih lanjut tentang fitur labeling ini dapat ditemukan di dokumen [Environment Aliases](https://docs.dewacloud.com/docs/environment-aliases/).

Saat menskalakan berbagai jenis stack, pertimbangkan spesifikasi berikut:

  * saat menskalakan instance application server, node load balancer akan secara otomatis ditambahkan ke topology environment
  * jika mengaktifkan opsi [high-availability](https://docs.dewacloud.com/docs/session-replication/) untuk application server, load balancer NGINX yang diperlukan tidak dapat diskalakan secara horizontal (jika beberapa node NGINX tersedia sebelumnya, mereka akan secara otomatis dikurangi menjadi satu instance)
  * saat menskalakan node VPS, masing-masing diberikan alamat [public IP](https://docs.dewacloud.com/docs/public-ip/) terpisah yang dilampirkan
  * [Maven](https://docs.dewacloud.com/docs/java-vcs-deployment/) adalah satu-satunya node yang tidak dapat diskalakan secara horizontal (karena tidak ada gunanya dalam operasi semacam itu)

Sekarang Anda tahu betapa mudahnya menskalakan instance secara horizontal di platform dan memahami spesifikasinya. Juga, jangan ragu untuk mengonfigurasi [automatic nodes scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/) untuk dengan mulus mengatasi lonjakan beban tinggi tanpa membayar lebih untuk sumber daya yang tidak terpakai.

## Managing Nodes within Layer{#managing-nodes-within-layer}

Platform menyediakan pengelolaan node yang sederhana, di mana Anda hanya perlu menentukan jumlah container yang diperlukan dalam satu layer. Proses penghapusan dilakukan dalam urutan yang berlawanan dengan penambahan - yaitu container yang paling baru ditambahkan dihapus pertama. Jika Anda perlu menghapus node tertentu, Anda dapat memilih yang diinginkan melalui:

  * bagian _**Horizontal Scaling**_ di topology wizard - dapat diakses menggunakan tombol **Change Environment Topology** di sebelah environment yang diperlukan
  
   <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/07-nodes-management-wizard.png" alt="nodes management wizard" width="50%"/>

  * formulir _**Scaling Nodes**_ khusus di dashboard - dapat diakses menggunakan opsi **Additionally > Scaling Nodes** di sebelah layer atau **Additionally > Delete** di sebelah node tertentu 
  
    <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/08-delete-node-dashboard.png" alt="delete node dashboard" width="100%"/>

Dalam jendela **Scaling Nodes**, Anda dapat melakukan tindakan berikut:

1. Tambahkan node baru ke layer, menggunakan tombol **+** atau **Add New Node**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/09-scaling-nodes-add.png" alt="scaling nodes add" width="40%"/>

:::tip
Jika opsi _high availability_ diaktifkan untuk layer (tersedia hanya untuk Tomcat dan TomEE application server), node ditambahkan dan dihapus dalam pasangan. Ikon node baru mewakili mode scaling dari layer - container kosong untuk _stateless_ dan penuh untuk _stateful_.
:::

2. Hapus instance dengan tombol **-** dan **Delete** (saat mengarahkan kursor ke node tertentu).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/10-scaling-nodes-delete.png" alt="scaling nodes delete" width="40%"/>

:::tip
Node pertama dalam daftar disebut sebagai “master” dari layer (disorot dengan ikon khusus) dan hanya dapat dihapus bersama dengan seluruh layer. Anda dapat _Undo Deletion_ dari node yang ada selama konfigurasi. Namun, setelah menerapkan perubahan, instance akan dihapus secara permanen.
:::

3. Di bagian bawah frame, terdapat redirect ke bagian _[Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/12-auto-scaling-redirect.png" alt="auto scaling redirect" width="50%"/>

Jika ada penyesuaian yang dilakukan dalam formulir, Anda harus mengonfirmasi redirect melalui pop-up (karena perubahan yang tidak disimpan akan dibuang).

4. Saat menerapkan perubahan, platform secara otomatis memberi tahu Anda tentang semua tindakan yang mungkin berbahaya yang akan dilakukan pada environment Anda (jika ada). Daftarnya mencakup:

  * pemberitahuan restart node
  * pengingat penghapusan layer dan node terpisah
  * dampak pada mount NFS yang ada

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scaling-and-clustering/horizontal-scaling/13-confirm-changes.png" alt="confirm changes" width="50%"/>

Sebelum melanjutkan, pastikan bahwa poin yang terdaftar tidak akan mempengaruhi aplikasi Anda, dan data penting (dari node yang dihapus) telah dicadangkan dengan aman.

## Baca Juga{#whats-next}

  * [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
  * [Automatic Vertical Scaling](https://docs.dewacloud.com/docs/automatic-vertical-scaling/)
  * [Container Configuration Tools](https://docs.dewacloud.com/docs/container-configuration/)
  * [Environment Aliases](https://docs.dewacloud.com/docs/environment-aliases/)
  * [Public IP](https://docs.dewacloud.com/docs/public-ip/)