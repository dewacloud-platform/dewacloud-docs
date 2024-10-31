---
sidebar_position: 3
slug: /litespeed-web-adc
title: LiteSpeed Web ADC
---
# LiteSpeed Web ADC

:::note
Stack ini siap untuk HTTP/3 dengan dukungan fitur yang diaktifkan secara default. Namun, diperlukan alamat IP publik untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/01-litespeed-web-adc-logo.png" alt="LiteSpeed Web ADC logo" width="20%"/>

**[LiteSpeed Web ADC](<https://www.litespeedtech.com/products/litespeed-web-adc>)** (Application Delivery Controller) adalah solusi load balancing HTTP berkinerja tinggi. Ini tidak hanya mendistribusikan lalu lintas tetapi juga meningkatkan kecepatan dan keandalan layanan di backend. Manfaat semacam ini dicapai melalui implementasi dan dukungan dari teknologi paling inovatif dan efisien yang diperlukan untuk load balancing, misalnya protokol transportasi HTTP/3 (QUIC) generasi berikutnya.

LiteSpeed Web ADC cocok untuk proyek dengan skala apa pun, dapat menangani lalu lintas harian dan lonjakan musiman. Balancer ini pasti akan memaksimalkan aplikasi Anda berkat [banyak fiturnya](<https://www.litespeedtech.com/products/litespeed-web-adc/features>).

:::warning
Sebagai perangkat lunak komersial, LiteSpeed Web Server tidak dapat didistribusikan secara bebas, yaitu memerlukan lisensi untuk diterapkan pada platform. Jika bekerja dengan server aplikasi ini, Anda akan dikenakan biaya tambahan untuk penggunaan lisensi yang disebutkan di atas.
:::

Dapatkan server load balancer LiteSpeed Web ADC Anda sendiri di platform dengan mengikuti langkah-langkah di bawah ini.

1\. Masuk dan klik tombol **New Environment** di bagian atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/02-create-new-environment.png" alt="create new environment" width="80%"/>

2\. Konfigurasikan topologi yang diinginkan melalui wizard yang terbuka dan pilih **LiteSpeed Web ADC** sebagai load balancer Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/03-litespeed-adc-in-topology-wizard.png" alt="LiteSpeed ADC in topology wizard" max-width="100%"/>

:::tip
Anda dapat menerapkan beberapa penyesuaian pada LiteSpeed ADC Anda dengan mengatur beberapa variabel environment khusus:  
JELASTIC_AUTOCONFIG - mengaktifkan (aktif, secara default) atau menonaktifkan (nonaktif) autokonfigurasi jumlah proses pekerja LiteSpeed berdasarkan RAM yang dialokasikan dan jumlah inti CPU  
DEFAULT_CLUSTER - memilih jenis load balancing untuk proxy permintaan (HTTP, AJP, FCGI, LSAPI). Jika bekerja dengan backend khusus, logika ini dapat dinonaktifkan (0, dinonaktifkan, salah)  
WP_PROTECT - mengkonfigurasi tindakan untuk fitur Proteksi Serangan Brute Force WordPress (off|on|drop|deny|throttle|captcha; off secara default)  
WP_PROTECT_LIMIT - menetapkan batas untuk fitur Proteksi Serangan Brute Force WordPress (0|1|2-1000; 10 secara default)
:::

Klik **Create** untuk melanjutkan.

3\. Jika Anda mengklik tombol **Open in Browser** untuk LiteSpeed balancer, salah satu server aplikasi backend akan secara otomatis diakses.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/05-litespeed-adc-open-in-browser.png" alt="LiteSpeed ADC open in browser" max-width="100%"/>

4\. Untuk mengelola load balancer Anda, Anda dapat mengakses **Admin Panel**. Klik tombol yang sesuai dalam daftar _**Additionally**_ di sebelah lapisan (kredensial akses dikirim melalui email setelah pembuatan node).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/06-litespeed-adc-admin-panel.png" alt="LiteSpeed ADC admin panel" max-width="100%"/>

:::warning
Ada beberapa spesifik saat bekerja dengan implementasi platform LiteSpeed melalui panel admin:  
untuk memastikan stabilitas kontainer, fitur redeploy platform-native harus digunakan sebagai pengganti fungsi Actions > Version Manager  
pemberitahuan tentang kedaluwarsa kunci lisensi di Actions > Server Log Viewer harus diabaikan karena leasing secara otomatis dikelola oleh platform
:::

Jika Anda perlu menyesuaikan salah satu file konfigurasi, Anda dapat bekerja melalui [dashboard file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) atau menjalin [koneksi SSH](<https://docs.dewacloud.com/docs/ssh-access/>).

## License Pricing{#license-pricing}

Platform ini secara mulus mengintegrasikan biaya lisensi LiteSpeed sesuai dengan prinsip **pay-as-you-go** yang adil. Yaitu, lisensi dikenakan biaya hanya untuk kontainer aktif berdasarkan jam untuk 730 jam per bulan. Selain itu, manajemen siklus hidup lisensi sepenuhnya otomatis:

  * lisensi baru diterbitkan untuk setiap kontainer yang baru dibuat (misalnya selama penyediaan lingkungan atau peningkatan horizontal)
  * diperbarui saat mengubah batas sumber daya yang tersedia dalam setiap kontainer
  * diberhentikan saat menghentikan lingkungan atau penskalaan masuk

Berdasarkan kebutuhan Anda, Anda dapat memilih paket yang diperlukan menggunakan add-on khusus _**LiteSpeed License Manager**_ yang secara otomatis diinstal pada semua node berbasis LiteSpeed ([LS Web Server](<https://docs.dewacloud.com/docs/litespeed-web-server/>), LS ADC, [LLSMP](<https://docs.dewacloud.com/docs/lemp-llsmp/>)).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/09-litespeed-adc-license-manager.png" alt="LiteSpeed ADC license manager" max-width="100%"/>

Add-on memungkinkan beralih antara paket dengan menyesuaikan jumlah _**Workers**_ (proses untuk melakukan pekerjaan server umum). Selain itu, solusi caching _**LiteMage**_ (dengan objek yang di-cache secara publik tanpa batas) dapat otomatis dikonfigurasi untuk LiteSpeed ADC dengan harga tambahan sebesar **149$** per bulan.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/10-configure-litespeed-adc-license.png" alt="Configure LiteSpeed ADC license" width="80%"/>

License Type | Workers | Pricing (USD)  
per 1 GB per Hour | Pricing (USD)  
Min (Max) per Month  
---|---|---|---  
_Web ADC Small (default)_ | 1 | 0.01$ | 7.30$ (**65$**)  
_Web ADC Medium_ | 2 | 0.02$ | 14.60$ (**130$**)  
_Web ADC Large_ | 4 | 0.04$ | 29.20$ (**260$**)  
_Web ADC Ultimate_ | 8 | 0.08$ | 58.40$ (**520$**)  

Harga lisensi dihitung secara dinamis berdasarkan lalu lintas jaringan yang diproses oleh node pada tingkat yang ditentukan melalui kolom **per 1 GB per Hour**. Perhatikan bahwa lingkungan aktif dikenai biaya setidaknya 1GB, bahkan jika tidak ada lalu lintas sama sekali selama satu jam (biaya minimum untuk penggunaan lisensi). Selain itu, biaya lisensi per bulan tidak dapat melebihi nilai maksimum yang ditentukan dalam tabel. Misalnya, untuk rencana _Web ADC Small_ default, lalu lintas di atas 6500GB gratis hingga akhir bulan (biaya pertama menentukan tanggal mulai).

:::warning
Biaya yang tepat mungkin sedikit berbeda untuk platform dengan mata uang selain USD; itu tergantung pada tingkat konversi pada saat peristiwa penagihan setiap jam. Semua biaya akun dapat dilihat melalui Billing History di dashboard.
:::

## LiteSpeed ADC Testing{#litespeed-adc-testing}

Saat melakukan pengujian dari load balancer LiteSpeed Web ADC, Anda harus mempertimbangkan kemungkinan berikut:

1\. Secara default, load balancer beroperasi dalam mode **Stateful**, yang melacak sesi yang terkait dengan setiap server back-end (juga disebut "Session Affinity"). Ini berarti permintaan dari satu sumber akan selalu menuju ke server back-end yang sama (kecuali itu tidak berfungsi).

2\. Jika LiteSpeed ADC tidak memiliki [IP publik](<https://docs.dewacloud.com/docs/public-ip/>) sendiri, semua permintaan masuk melalui [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)) platform. Dalam kasus seperti itu, ADC menganggap bahwa beban berasal dari satu alamat IP (dari Shared Load Balancer).

Akibatnya, untuk pengujian yang tepat dari kluster _produksi_ dengan LiteSpeed ADC sebagai load balancer, Anda perlu melampirkan IP publik dan mengirim permintaan dari beberapa sumber. Alternatifnya, Anda dapat sementara beralih ke mode **Stateless**, yang tidak mempersoalkan sesi (dianjurkan hanya selama tahap pengembangan/pengujian). Simak lebih lanjut tentang [pengujian LiteSpeed ADC](<https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:lslb:basic_config#testing>) di dokumentasi resmi.

## Disabling Health Checks{#disabling-health-checks}

LiteSpeed ADC secara otomatis memantau status backend dan mengecualikan yang bermasalah untuk memastikan ketersediaan proyek bagi pengguna akhir. Namun, dalam beberapa kasus, perilaku semacam itu mungkin tidak diperlukan - misalnya, situs berbasis WordPress dalam _maintenance mode_ mengembalikan kode status HTTP 503, yang mengecualikan server aplikasi dari rute load balancer. Akibatnya, kode status 500 balancer generik ditampilkan kepada pengguna alih-alih layar pemeliharaan WordPress kustom.

Di bagian ini, kami akan menunjukkan cara menonaktifkan pemeriksaan kesehatan otomatis di LiteSpeed ADC sementara.

1\. Masuk ke konsol LiteSpeed ADC dan masuk ke bagian **Configuration > Clusters > clusterHTTP > Worker Group**:

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/12-litespeed-adc-work-group-configurations.png" alt="LiteSpeed ADC work group configurations" max-width="100%"/>

2\. Temukan pengaturan _**Ping URL**_ dan kosongkan nilainya.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/13-litespeed-adc-ping-url.png" alt="LiteSpeed ADC ping URL" max-width="100%"/>

Ulangi operasi ini untuk semua Kelompok Pekerja.

3\. Lakukan **Graceful Restart** untuk menerapkan pengaturan baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/litespeed%20web%20adc/11-litespeed-adc-license-in-billing-history.png" alt="LiteSpeed ADC graceful restart" max-width="100%"/>

:::warning
Setelah operasi awal (yang memerlukan penonaktifan pemeriksaan kesehatan) selesai, pastikan untuk mengembalikan parameter Ping URL untuk memastikan bahwa masalah sebenarnya dengan backend tidak terlewatkan.
:::

## Baca Juga{#whats-next}

  * [Load Balancing](<https://docs.dewacloud.com/docs/load-balancing/>)
  * [LiteSpeed Web Server](<https://docs.dewacloud.com/docs/litespeed-web-server/>)
  * [NGINX Load Balancer](<https://docs.dewacloud.com/docs/nginx-load-balancer/>)
  * [HAProxy](<https://docs.dewacloud.com/docs/haproxy/>)
  * [Varnish](<https://docs.dewacloud.com/docs/varnish/>)
