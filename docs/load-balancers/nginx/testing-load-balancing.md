---
sidebar_position: 4
slug: /testing-load-balancing
title: Testing Load Balancing
---
# How to Test Load Balancing

Ketika proyek Anda menjadi sangat diminati dan dikunjungi, Anda akan menghadapi masalah - kebutuhan untuk meningkatkan produktivitas perangkat keras Anda, karena harus mampu menangani dan melayani semua permintaan pengguna yang masuk dengan cepat. Menambah lebih banyak sumber daya akan memperbaiki situasi untuk sementara, menyelamatkan server Anda dari kegagalan, tetapi tidak akan menyelesaikan masalah utamanya. Ini mengakibatkan kebutuhan untuk menyiapkan solusi clustering dengan load balancing otomatis yang terintegrasi.

Penyesuaian cluster aplikasi sangat mudah dengan platform - cukup tambahkan beberapa instance server aplikasi ke environment Anda [melalui topology wizard](<https://docs.dewacloud.com/docs/horizontal-scaling/>). Selain itu, Anda secara otomatis akan mendapatkan server NGINX-balancer yang diaktifkan di depan proyek Anda. Server ini akan bertanggung jawab untuk distribusi beban yang merata di antara jumlah node server aplikasi yang ditentukan, dilakukan dengan [load balancing](<https://docs.dewacloud.com/docs/load-balancing/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/01-nginx-load-balancer.png" alt="NGINX load balancer" width="50%"/>

Dengan cara ini, kinerja aplikasi Anda meningkat secara signifikan, meningkatkan jumlah permintaan yang dapat dilayani pada satu waktu. Sebagai bonus tambahan, Anda mengurangi risiko ketidaktersediaan aplikasi, karena jika satu server gagal, semua server lainnya akan tetap berfungsi.

Untuk membuktikan bahwa skema ini efektif, kami akan menunjukkan cara melakukan pengujian load balancing dengan bantuan alat [ApacheBench (ab)](<https://httpd.apache.org/docs/2.4/programs/ab.html>). Alat ini menyediakan sejumlah kemungkinan untuk menguji kemampuan server dalam menangani beban yang meningkat dan berubah-ubah. Meskipun ab dirancang untuk pengujian instalasi Apache, alat ini dapat digunakan untuk melakukan benchmark pada server HTTP mana pun.

Jadi, mari kita mulai dan mengujinya secara langsung.

## Create an Environment and Deploy the Application{#create-an-environment-and-deploy-the-application}

1\. Masuk ke platform dan klik tombol **Create environment** di pojok kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/02-create-environment.png" alt="create environment" width="40%"/>

2\. Jendela dialog **Environment topology** akan langsung muncul. Di sini Anda dapat memilih bahasa pemrograman, server aplikasi/web, dan database yang diinginkan.

Karena kita akan menguji server **Apache PHP**, pilih server tersebut dan tentukan batasan penggunaan sumber daya menggunakan slider cloudlets. Kemudian tambahkan alamat **Public IP** untuk server ini dan ketikkan nama environment baru (misalnya, _balancer_). Klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/03-environment-wizard.png" alt="environment wizard" width="100%"/>

3\. Dalam beberapa menit, environment Anda akan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/04-balancer-environment-created.png" alt="balancer environment created" width="100%"/>

4\. Setelah environment berhasil dibuat, Anda dapat menerapkan aplikasi Anda ke dalamnya. Di sini kita akan menggunakan paket default **HelloWorld.zip**, jadi Anda hanya perlu **Deploy** ke environment yang diinginkan dengan tombol yang sesuai dan konfirmasi deployment di jendela yang terbuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/05-deploy-hello-world-application.png" alt="deploy hello world application" width="100%"/>

## Control Point Testing{#control-point-testing}

Untuk menganalisis hasilnya, Anda membutuhkan sesuatu untuk dibandingkan, jadi mari kita lakukan pengujian kontrol dengan menggunakan environment yang hanya memiliki satu node server aplikasi.

Seperti yang disebutkan di atas, kita akan menggunakan alat _ApacheBench (ab)_ untuk tujuan ini. Alat ini dapat menghasilkan beban satu-thread dengan mengirimkan sejumlah permintaan bersamaan ke server.

Ikuti langkah-langkah berikut.

1\. ApacheBench adalah bagian dari distribusi standar sumber Apache, jadi jika Anda belum memilikinya, jalankan perintah berikut melalui terminal Anda (atau lewati langkah ini jika sudah).

```
apt-get install apache2-utils
```

Tunggu sampai instalasi selesai dengan sukses.

:::note
Informasi detail tentang semua perintah ab yang digunakan selanjutnya dapat ditemukan di tautan ini.
:::

2\. Masukkan baris berikut di terminal:

``` 
ab -n 500 -c 10 -g res1.tsv {URL_to_your_env}
```

Gantikan bagian `{URL_to_your_env}` dengan tautan ke environment Anda (misalnya, _https://balancer.jelastic.com/_ dalam kasus kami). Untuk mendapatkannya, klik tombol **Open in Browser** di sebelah environment Anda dan salin URL yang sesuai dari bilah alamat browser.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/06-open-in-browser.png" alt="open in browser" width="100%"/>

Perintah yang ditentukan akan mengirimkan total 500 permintaan ke environment yang ditentukan, yang dibagi menjadi 10 permintaan bersamaan dalam satu waktu. Semua hasil akan disimpan di file _res1.tsv_ di dalam folder **home** Anda (atau masukkan path lengkap ke direktori yang diinginkan jika Anda ingin mengubah lokasi file).

Anda juga dapat menentukan parameter khusus untuk perintah yang disebutkan di atas jika Anda mau.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/07-control-point-testing.png" alt="control point testing" width="80%"/>

Pengujian ini mungkin memakan waktu tergantung pada parameter yang telah Anda tetapkan, jadi bersabarlah.

3\. File hasil yang dibuat akan terlihat seperti gambar di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/08-control-point-result.png" alt="control point result" width="100%"/>

## Change the Environment Configuration{#change-the-environment-configuration}

1\. Kembali ke dashboard platform dan klik **Change environment topology** untuk environment _balancer_ Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/09-change-environment-topology.png" alt="change environment topology" width="100%"/>

2\. Di dalam jendela **Environment topology** yang terbuka, tambahkan lebih banyak server aplikasi (misalnya, satu instance Apache lagi) - gunakan tombol **+** di bagian _Horizontal scaling_ wizard untuk itu. Kemudian aktifkan fitur **Public IP** dan tetapkan batas sumber daya untuk node **NGINX-balancer** yang ditambahkan secara otomatis, karena menjadi titik masuk aplikasi Anda. Klik **Apply** untuk melanjutkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/10-environment-topology-with-balancer.png" alt="environment topology with balancer" width="100%"/>

3\. Setelah semua perubahan yang diperlukan berhasil diterapkan, Anda harus menonaktifkan sticky sessions untuk server balancer. Jika tidak, semua permintaan dari satu alamat IP akan dialihkan ke instance server aplikasi yang sama.

Oleh karena itu, klik tombol **Config** di sebelah node Nginx.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/11-nginx-config.png" alt="NGINX config" width="100%"/>

4\. Arahkan ke file **conf > nginx-jelastic.conf**. File ini tidak dapat diedit, jadi salin semua isinya dan tempelkan ke file **nginx.conf** (terletak di folder yang sama) sebagai pengganti baris _include /etc/nginx/nginx-jelastic.conf;_ (dilingkari pada gambar berikut).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/12-adjust-nginx-conf.png" alt="adjust nginx.conf" width="100%"/>

5\. Kemudian, temukan dua sebutan parameter _sticky path_ dalam kode (di bagian _DEFAULT UPSTREAM_ dan _UPSTREAMS LIST_) dan beri komentar seperti yang ditunjukkan di bawah ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/13-disable-sticky-session.png" alt="disable sticky session" width="100%"/>

:::note
Jangan lewatkan penutup kurung kurawal setelah string sticky path tersebut, mereka harus tidak dikomentari.
:::

6\. **Simpan** perubahan yang diterapkan dan **Restart** server NGINX.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/14-nginx-node-restart.png" alt="NGINX node restart" width="100%"/>

## Testing Balancer and Compare Results{#testing-balancer-and-compare-results}

Sekarang mari kita lanjutkan langsung ke pengujian [load balancing](<https://docs.dewacloud.com/docs/load-balancing/>).

1\. Kembali ke terminal Anda dan jalankan pengujian **ab** lagi dengan parameter yang sama (kecuali file dengan hasil - tentukan nama lain untuknya, misalnya _res2.tsv_).

``` 
ab -n 500 -c 10 -g res2.tsv {URL_to_your_env}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/15-load-balancing-testing.png" alt="load balancing testing" width="70%"/>

2\. Untuk memperjelas hasil yang diperoleh, kita akan menggunakan utilitas grafik **gnuplot** yang didistribusikan secara gratis. Instal utilitas ini (jika Anda belum melakukannya) dan masukkan shell-nya dengan perintah _gnuplot_.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/16-gnuplot-graphs-utility.png" alt="gnuplot graphs utility" width="70%"/>

3\. Setelah itu, Anda perlu mengatur parameter untuk grafik yang akan kita buat:

```
set size 1, 1
set title "Benchmark testing"
set key left top
set grid y
set xlabel 'requests'
set ylabel "response time (ms)"
set datafile separator '\t'
```

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/17-set-gnuplot-parameters.png" alt="set gnuplot parameters" width="100%"/>

4\. Sekarang Anda siap untuk membuat grafik:

```
plot "/home/res1.tsv" every ::2 using 5 title 'single server' with lines, "/home/res2.tsv" every ::2 using 5 title 'two servers with LB' with lines
```

Perintah _plot_ ini akan membangun 2 grafik (dipisahkan dengan koma dalam perintah tersebut). Mari kita tinjau parameter yang digunakan lebih detail:

  * `"/home/resN.tsv"` mewakili path ke file dengan hasil pengujian Anda
  * `every ::2` menentukan bahwa gnuplot akan mulai membangun dari baris kedua (yaitu, baris pertama dengan judul akan dilewati)
  * `using 5` berarti kolom _time_ kelima (total response time) akan digunakan untuk membuat grafik
  * `title 'N'` memberikan nama tertentu untuk grafik untuk memudahkan pemisahan hasil pengujian
  * `with lines` digunakan agar grafik kita menjadi garis solid

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/18-compose-graphs.png" alt="compose graphs" width="100%"/>

Anda akan mendapatkan gambar yang dibuat dan dibuka secara otomatis, mirip dengan yang berikut:

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/testing%20load%20balancing/19-load-balancing-result-graph.png" alt="load balancing result graph" width="80%"/>

Berkat opsi yang ditentukan, grafik merah menunjukkan kinerja server **Apache** tunggal tanpa balancer (hasil pengujian titik kontrol) dan yang hijau - dua server dengan **NGINX** load balancer (hasil pengujian fase kedua).

:::note
Hasil pengujian yang diterima (response time untuk setiap permintaan yang dikirimkan) ditampilkan dalam urutan menaik, yaitu tidak secara kronologis.
:::

Seperti yang Anda lihat, saat melayani beban rendah, kinerja kedua konfigurasi hampir sama, tetapi saat jumlah permintaan meningkat, waktu respons untuk environment dengan satu instance server aplikasi tumbuh secara signifikan, yang menghasilkan lebih sedikit permintaan yang dilayani secara bersamaan. Jadi, jika Anda mengharapkan beban tinggi untuk server aplikasi Anda, menambah jumlah instansinya dengan balancer server adalah cara terbaik untuk menjaga pelanggan Anda tetap puas.

Nikmati semua keuntungan Cloud!

## Baca Juga{#whats-next}

  * [TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)
  * [Caching in NGINX Balancer](<https://docs.dewacloud.com/docs/nginx-caching/>)
  * [NGINX Balancer Configuration](<https://docs.dewacloud.com/docs/nginx-balancer-config/>)
