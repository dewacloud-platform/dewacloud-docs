---
sidebar_position: 1
slug: /auto-scalable-couchbase-cluster-in-docker-containers
title: Auto-Clustering
---
# Cluster Couchbase Otomatis Scalable dalam Kontainer: Penyebaran Satu Klik ke Cloud


![couchbase auto scaling](#)

Membangun dan menjalankan aplikasi kompleks yang mampu menangani data tidak terstruktur dan melayani banyak pengguna yang tersebar secara global adalah apa yang dibutuhkan perusahaan untuk menjadi gesit dan tangguh. Dalam menghadapi kebutuhan manajemen data yang muncul, banyak perusahaan lebih memilih teknologi penyimpanan data NoSQL sebagai solusi yang memberikan tingkat skala, kecepatan, dan variabilitas data yang substansial.

Di antara solusi NoSQL yang tersedia, [Couchbase](<https://www.couchbase.com/>) dirancang untuk memberikan manajemen data latensi rendah untuk aplikasi berskala besar. Dengan administrasi yang sederhana, kinerja cepat, dan mesin canggih untuk mengeksekusi kueri mirip SQL, Couchbase mampu memenuhi sebagian besar persyaratan yang harus dipatuhi oleh database.

Dengan demikian, untuk memungkinkan pelanggan kami memanfaatkan semua keuntungan yang diberikan oleh sistem penyimpanan data ini, hari ini kami akan mempertimbangkan solusi satu klik yang telah dikembangkan tim Jelastic agar Anda dapat dengan mudah menyebarkan cluster Couchbase yang otomatis scalable dalam kontainer Docker di dalam Cloud. Selanjutnya, kami akan melihat spesifikasi paket yang sesuai dan mempertimbangkan panduan terperinci tentang instalasi dan konfigurasi konektivitasnya.

## Spesifikasi Paket Cluster Couchbase Otomatis Scalable

Paket [Couchbase Cluster](<https://github.com/jelastic-jps/couchbase?utm_source=blog-couchbase>) oleh Jelastic dibangun di atas image Docker resmi [_couchbase_](<https://hub.docker.com/_/couchbase/>) sebagai dasar. Selama penyebarannya, Anda dapat menetapkan jumlah node cluster yang diinginkan (hingga 10 instance) untuk dibuat. Semua anggota cluster (baik yang dibuat awalnya maupun node yang ditambahkan kemudian) akan saling terhubung secara otomatis untuk mewakili sistem penyimpanan data yang sangat tersedia. Dengan cara ini, Anda mendapatkan pengelompokan logis dari instance kontainer yang siap digunakan, bukan sekumpulan node mandiri yang memerlukan penerapan konfigurasi tambahan untuk distribusi data yang merata.

![run couchbase cluster one click](#)

Di dalam paket ini, setiap kontainer Couchbase ditetapkan _16 cloudlet dinamis_ sebagai ruang sumber daya untuk [skala vertikal](<https://docs.jelastic.com/automatic-vertical-scaling/?utm_source=blog-couchbase>), dengan kapasitas maksimum 2 GiB RAM dan 6.4 GHz CPU (jika perlu, batas ini dapat disesuaikan kemudian dengan mengikuti panduan yang terlampir di atas). Dan dengan sertifikat [Jelastic SSL](<https://docs.jelastic.com/built-in-ssl/?utm_source=blog-couchbase>) yang secara otomatis disediakan, Anda mendapatkan kemampuan untuk mengakses cluster Couchbase Anda melalui koneksi HTTPS yang aman.

Adapun parameter alokasi memori, diatur sebagai berikut untuk setiap node dalam cluster secara default:

  * Ukuran **Data RAM**, yang diperlukan untuk menangani operasi data _CRUD_ (_create/read/update/delete_), dibatasi hingga _1024 MiB_
  * **Index RAM**, yang memelihara indeks sekunder dan melakukan pemindaian indeks untuk kueri N1QL, dapat mengkonsumsi hingga _256 MiB_
  * **Full Text Search** **(FTS) RAM**, yang digunakan untuk membuat, mengelola, dan mengkueri indeks teks penuh pada dokumen JSON, ditetapkan maksimum _256 MiB_

## Konfigurasi Auto-Scaling dan Rebalancing

Cluster Couchbase akan diperluas/dikecilkan dengan **scaling horizontal otomatis** (yaitu dengan mengubah jumlah kontainer) berdasarkan kondisi konsumsi sumber daya berikut:

  * +1 node (hingga _10_ instance per lapisan) jika penggunaan RAM atau CPU melebihi 70% dari kapasitas yang dialokasikan selama setidaknya 5 menit
  * -1 node (tetapi tidak kurang dari jumlah kontainer yang Anda nyatakan awalnya, yaitu selama instalasi paket) setiap kali penggunaan RAM atau CPU turun di bawah 40% dari batas yang ditetapkan dan tetap dalam rentang ini selama setidaknya 5 menit  

Modifikasi yang sesuai diterapkan secara otomatis untuk menambahkan/menghapus node Couchbase, sementara Anda menerima notifikasi email yang sesuai setelah setiap operasi scaling yang dilakukan. Jika perlu, pengaturan pemicu auto-scaling default ini dapat diubah kemudian dengan mengikuti panduan [Automatic Horizontal Scaling](<https://docs.jelastic.com/automatic-horizontal-scaling/?utm_source=blog-couchbase>).

Setiap kali cluster di-scale _in_ atau _out_, proses **rebalancing** berlangsung. Ini mewakili operasi otomatis redistribusi data di seluruh node yang tersedia dalam cluster. Selama operasi ini, cluster tetap sepenuhnya dapat berfungsi dan terus melayani serta menangani permintaan klien.

![couchbase cluster one click](#)

Dengan cara ini, solusi Couchbase tercluster yang otomatis scalable oleh Jelastic mampu beroperasi tanpa henti, memastikan ketersediaan tinggi layanan Anda dengan keterlibatan minimal dari pihak Anda.

Sekarang, mari kita lanjutkan untuk memeriksa cara dengan mudah mendapatkan cluster Couchbase tersebut berjalan dengan hosting Cloud Jelastic.

## Cluster Couchbase di Cloud: Penyebaran Satu Klik

Dengan solusi kemasan pra-siap untuk instalasi satu klik yang dipertimbangkan, proses penyebaran cluster Couchbase sepenuhnya otomatis dan tidak memerlukan konfigurasi manual - hanya beberapa langkah untuk diselesaikan.

1. Masuk ke [Jelastic Cloud](<https://jelastic.cloud/?utm_source=blog-couchbase>) dengan kredensial Anda dan klik **Marketplace** di panel atas.

![couchbase docker container](#)

Di dalam bagian **Apps**, gunakan kotak pencarian untuk menemukan paket _Auto Scalable Couchbase Cluster_ dan pilih **Instal**.  

2. Di jendela yang terbuka, atur jumlah _Nodes in Cluster_ yang akan dibuat (dengan mempertimbangkan bahwa nilai ini akan ditetapkan sebagai ukuran cluster minimal dan tidak dapat dikurangi karena auto-scaling). Kemudian ketik nama _Environment_, dan, jika diinginkan, nama _Display Name_ alternatif ([alias](<https://docs.jelastic.com/environment-aliases/?utm_source=blog-couchbase>)) untuk itu.

![couchbase cloud hosting](#)

Juga, pilih [_Region_](<https://docs.jelastic.com/environment-regions/?utm_source=blog-couchbase>) perangkat keras yang diinginkan (jika ada beberapa yang tersedia) dan klik **Instal**.  

3. Setelah penyebaran cluster selesai, Anda akan diberikan kredensial untuk administrasinya dalam pop-up yang muncul dan, pada saat yang sama, melalui notifikasi email yang didedikasikan.

![scale couchbase cluster](#)

Klik tautan **Web Console** dan masukkan data ini untuk mengakses panel manajemen Couchbase yang sesuai melalui HTTPS.

![install couchbase cluster one click](#)

Di halaman awal yang terbuka, Anda akan melihat _Cluster Overview_ umum, yang terdiri dari bagian-bagian berikut:

  * _Cluster_ - bertujuan untuk memberikan data tentang penggunaan RAM dan ruang disk cluster saat diisi dengan data
  * _Servers_ - menampilkan informasi umum tentang jumlah server dalam cluster dan statusnya

Untuk panduan terperinci tentang bekerja dengan Couchbase Web Console, lihat [dokumentasi resmi](<https://docs.couchbase.com/server/current/introduction/intro.html>).

Sekarang, ketika cluster sudah berjalan, ia dapat melayani aplikasi Anda sebagai penyimpanan data yang sangat tersedia dan elastis - detail tentang cara mengatur interaksi yang tepat antara keduanya akan dipertimbangkan dalam salah satu artikel mendatang.