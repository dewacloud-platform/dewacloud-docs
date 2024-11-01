---
sidebar_position: 6
slug: /nginx-balancer-security
title: App Security with NGINX Balancer
---
# Keamanan Dasar untuk Aplikasi dengan NGINX Balancer

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/cloud.png" alt="app security with NGINX balancer" width="30%"/>

Seiring dengan bertambahnya jumlah informasi yang dibagikan melalui internet dari tahun ke tahun, serta adopsi Web sebagai sarana untuk menjalankan bisnis, perlindungan terhadap situs web dan aplikasi web menjadi salah satu masalah keamanan internet utama. Tanggapan yang jelas terhadap hal ini adalah penerapan banyak alat pencegahan. Namun sebelum tergesa-gesa mengintegrasikan beberapa solusi perlindungan yang kompleks dan/atau mahal, pertimbangkan beberapa metode keamanan umum, karena terkadang keamanan yang paling dasar bisa menjadi yang paling efektif.

Jadi, dalam panduan ini kami akan menunjukkan kepada Anda cara mengatur beberapa mekanisme perlindungan sederhana, yang tersedia untuk aplikasi apa pun yang menggunakan **NGINX balancer** sebagai frontend, dan penerapannya tidak memerlukan biaya tambahan.

Pada dasarnya, server NGINX load balancer dimaksudkan untuk melakukan distribusi permintaan yang cerdas antara beberapa node server aplikasi dan dengan demikian memastikan ketersediaan dan keandalan sistem yang tinggi. Dengan ini, NGINX dapat digunakan untuk memproses kedua jenis lalu lintas HTTP dan TCP (detail dapat ditemukan dalam dokumen [HTTP Load Balancing](<https://docs.dewacloud.com/docs/load-balancing/>) dan [TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)).

Node load balancing secara otomatis ditambahkan ke dalam environment jika Anda memilih lebih dari satu node server aplikasi, dan selain itu, dapat ditambahkan secara manual bahkan untuk satu server. Untuk melakukannya, cukup pilih blok _Balancing_ wizard di atas server aplikasi yang dipilih di jendela **Environment Topology**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/env-wiz.png" alt="NGINX balancer security env wiz" max-width="100%"/>

Sekarang ketika environment sudah siap, Anda dapat melanjutkan ke konfigurasi metode perlindungan yang diinginkan menggunakan petunjuk di bawah ini:

  * [Authentication](#authentication) membuat akses aplikasi dilindungi dengan kata sandi
  * Mekanisme [IP Address Deny](#ip-address-deny) digunakan untuk melarang akses aplikasi dari IP tertentu

Kami juga akan memperhatikan cara untuk [menggabungkan](#methods-combination) metode yang disebutkan untuk digunakan secara bersamaan. Jadi, mari kita cari tahu cara menerapkannya ke environment Anda. Ayo mulai!

## Authentication{#authentication}

Authentication adalah metode yang sederhana namun kuat untuk membatasi akses aplikasi dan memastikan bahwa entitas yang tidak berwenang tidak akan dapat menyebabkan kerusakan apapun pada aplikasi. Dalam contoh ini, kami akan menunjukkan kepada Anda cara mengatur perlindungan username/password.

1\. Tentunya informasi kata sandi tidak dapat disimpan dalam bentuk terbuka, jadi perlu dilindungi sendiri. Untuk itu Anda perlu menghasilkan hash, berdasarkan username dan password yang diinginkan dengan menggunakan alat _htpasswd_ atau salah satu layanan online serupa (misalnya, [http://www.htpasswdgenerator.net/](<http://www.htpasswdgenerator.net/>)).

2\. Simpan urutan karakter yang Anda terima dan kembali ke dashboard platform dengan environment Anda terdaftar. Di sana klik tombol **Config** untuk node **NGINX balancer**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/config.png" alt="NGINX balancer security config" max-width="100%"/>

3\. Anda akan melihat tab **Configuration Manager** terbuka, di mana Anda perlu membuat **New file** (menggunakan tombol dengan nama yang sama di panel alat) di dalam folder **conf.d**. Tetapkan nama yang diinginkan untuknya tetapi wajib dengan ekstensi _**.htpasswd**_ (misalnya, _password.htpasswd_).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/new-file.png" alt="NGINX balancer security new file" max-width="100%"/>

4\. Setelah selesai, tempelkan hash yang Anda terima pada langkah instruksi pertama ke konten file. Ingat bahwa Anda dapat menambahkan sebanyak mungkin akun yang Anda butuhkan (jangan lupa untuk menempatkan setiap yang berikutnya dari baris baru).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/passwords.png" alt="NGINX balancer security passwords" max-width="100%"/>

**Simpan** perubahan ketika semua pengaturan sudah selesai.

5\. Kemudian pilih file _**nginx-jelastic.conf**_ di dalam folder **conf** dan temukan blok _location_ di bagian kode _server_ pertama. Tempelkan baris berikut di sana untuk mengaktifkan authentication dan menerapkan aturan akses yang sesuai:

    
    auth_basic           "closed site";   
    auth_basic_user_file /etc/nginx/conf.d/\{htpasswd_file\};

di mana _**\{htpasswd_file\}**_ - nama file yang Anda masukkan hash dengan kata sandi ke (dalam kasus kami file ini adalah _**password.htpasswd**_).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/conf.png" alt="NGINX balancer security conf" max-width="100%"/>

:::note
Kami biasanya merekomendasikan untuk memodifikasi konfigurasi di file nginx.conf dan menjaga konten nginx-jelastic.conf sebagai pengaturan default/cadangan. Namun dalam kasus ini, karena perubahan yang diperlukan cukup sederhana dan kami sangat yakin bahwa kami tahu apa yang kami lakukan, akan lebih mudah untuk bekerja langsung dengan file nginx-jelastic.
:::

6\. **Simpan** perubahan yang Anda buat sekali lagi dan **Restart** node NGINX balancer.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/restart.png" alt="NGINX balancer security restart" max-width="100%"/>

7\. Sekarang ketika mencoba untuk **Open** aplikasi Anda **di Browser**, Anda (dan klien lainnya) akan perlu melewati jendela authentication sebelum mengakses aplikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/auth.png" alt="NGINX balancer security auth" width="50%"/>

Setelah kredensial yang sesuai (mis. yang Anda telah menghasilkan hash darinya) ditentukan, aplikasi Anda akan terbuka.

## IP Address Deny{#ip-address-deny}

Jika Anda tiba-tiba melihat ada bahaya yang disebabkan pada aplikasi Anda oleh pengguna tertentu, Anda dapat menghentikannya dengan cara memblokir permintaan apa pun yang dikirimkan dari alamat IP pengguna itu dan dengan demikian menolak akses aplikasi Anda. Ini dapat dengan mudah dilakukan dengan mengikuti langkah-langkah berikut.

1\. Buka dashboard platform dengan environment Anda dan klik tombol **Config** untuk node **NGINX balancer**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/config%20(1).png" alt="NGINX balancer security config" max-width="100%"/>

2\. Klik pada file _**nginx-jelastic.conf**_ di folder **conf** dalam tab **Configuration Manager** yang terbuka. Kemudian cari blok lokasi di dalam bagian kode server pertama dan tempelkan baris berikut di sana:

    
    deny \{IP_ADDRESS\};

di mana _**\{IP_ADDRESS\}**_ - jelas alamat yang ingin Anda blokir kemampuan untuk membuka aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/conf-2.png" alt="NGINX balancer security conf 2" max-width="100%"/>

:::note
Anda juga dapat mengatur nilai parameter ini menjadi all, yang berarti bahwa tidak ada yang akan dapat mengakses aplikasi Anda. Dalam kasus ini, mungkin berguna untuk menentukan satu perintah allow lagi di sini, yang digunakan untuk mendefinisikan alamat IP (atau rentang alamat) yang ingin Anda berikan aksesnya. Jika konstruksi sederhana yang diusulkan di atas tidak berhasil untuk Anda (karena ini mungkin disebabkan oleh konfigurasi tertentu di sebuah Platform), Anda dapat mencoba yang berikut sebagai gantinya:
```
if($http_x_forwarded_for~*\{IP_ADDRESS\}\){return403;}
```
:::

3\. **Simpan** perubahannya dan **Restart** node NGINX Anda menggunakan tombol yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/restart%20(1).png" alt="NGINX balancer security restart" max-width="100%"/>

4\. Sebagai hasilnya, pengguna dengan alamat IP yang ditolak akan menghadapi kesalahan _403 Forbidden_ saat mencoba mengakses aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/forbidden.png" alt="NGINX balancer security forbidden" width="60%"/>

## Kombinasi Metode{#methods-combination}

Untuk menggabungkan pembatasan oleh alamat IP dan pelaksanaan metode authentication, Anda perlu menggunakan direktif
_[satisfy](<http://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy>)_. Secara default (yaitu, jika tidak dinyatakan secara jelas dalam konfigurasi) itu diatur ke **all**, yang berarti seorang pengguna harus memenuhi kedua jenis kondisi untuk diberikan akses. Jika Anda menentukan direktif ini di dalam file konfigurasi Anda dan menetapkan nilainya ke **any**, pengguna akan dapat membuka aplikasi jika setidaknya satu kondisi terpenuhi. Berikut adalah contoh konfigurasi semacam itu:

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/app%20security%20with%20nginx%20balancer/conf-3.png" alt="NGINX balancer security conf 3" max-width="100%"/>

Dengan demikian, pengguna yang tidak terotentikasi akan diberikan akses jika alamat IP-nya tercantum di antara yang diizinkan. Atau, pengguna dengan alamat IP yang ditolak masih akan dapat mengakses situs web jika mereka memasukkan username dan password yang valid.

Jadi, sekarang Anda tahu beberapa cara dasar untuk melindungi aplikasi Anda dengan memberikan izin akses hanya kepada pengguna tepercaya, serta menolaknya kepada yang tidak tepercaya dan mungkin berbahaya. Ingatlah bahwa menghabiskan sedikit waktu untuk meningkatkan keamanan aplikasi Anda sekarang dapat menghemat banyak waktu dan uang di kemudian hari dan terlepas, tidak akan merugikan.

## Baca Juga{#whats-next}

  * [Tomcat Security](<https://docs.dewacloud.com/docs/tomcat-security/>)
  * [Java Options and Arguments](<https://docs.dewacloud.com/docs/java-options-arguments/>)
  * [Apache Security](<https://docs.dewacloud.com/docs/apache-security-configurations/>)
  * [NGINX-PHP Security](<https://docs.dewacloud.com/docs/nginx-security-configurations/>)
