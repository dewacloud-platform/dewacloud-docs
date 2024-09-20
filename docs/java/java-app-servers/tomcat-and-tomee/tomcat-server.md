---
sidebar_position: 1
slug: /tomcat-server
title: Tomcat Server
---

# Tomcat Server Cloud Hosting

Apache Tomcat menempati posisi terdepan di antara server Java untuk menjalankan aplikasi web. Mengingat permintaan tersebut, kami mengumpulkan detail utama tentang pengelolaan server web Tomcat di platform ini - instalasi, konfigurasi, load balancing, deployment aplikasi, dan peningkatan keamanan.

:::note 
Template ini menggunakan daemon inisialisasi modern systemd.
:::

## Create Tomcat Server{#create-tomcat-server}

Platform-as-a-Service menyediakan langkah mudah untuk instalasi Tomcat.

1\. Masuk ke dashboard PaaS pada penyedia layanan hosting pilihan Anda dan klik tombol **New Environment**.

2\. Pilih versi **Tomcat** yang diinginkan untuk server aplikasi Anda, seperti yang ditunjukkan pada gambar di bawah ini. Platform cloud memungkinkan Anda menggunakan versi Apache Tomcat mulai dari 7 hingga Tomcat 10 terbaru, tergantung pada kebutuhan aplikasi Anda. Anda hanya perlu memilih dari versi yang tersedia di daftar drop-down:

![new Tomcat environment](#)

Setelah lingkungan dibuat, Anda siap menggunakan server aplikasi Tomcat yang diinstal di sana. Untuk memeriksa apakah Tomcat berjalan, klik tombol **Open in Browser** di sebelah server aplikasi.

![Tomcat environment created](#)

Jika Anda dapat melihat halaman sambutan Tomcat di browser Anda, server diinstal dengan benar.

![open Tomcat in browser](#)

Server aplikasi beroperasi di container terpisah (node), sebagai instance virtual yang terisolasi. Setiap container Tomcat memiliki IP pribadi dan catatan DNS yang unik.

![Tomcat node ID](#)

## Change Tomcat Version{#change-tomcat-version}

Jika Anda perlu mengubah (memperbarui) versi server, Anda dapat melakukannya kapan saja [tanpa kehilangan data atau konfigurasi](<https://docs.dewacloud.com/docs/container-redeploy/>).

Cukup klik tombol **Redeploy Containers** di sebelah node server Apache Tomcat.

![Tomcat redeploy button](#)

Pilih versi engine Tomcat dan JDK baru dalam dialog yang muncul dan konfirmasi perubahannya.

![container redeploy dialog](#)

## Tomcat Clustering and Scaling{#tomcat-clustering-and-scaling}

Platform ini membuat hosting Tomcat benar-benar fleksibel berkat penskalaan otomatis (baik vertikal maupun horizontal) dan clustering.

Untuk penyesuaian manual server Tomcat yang ada, klik **Change Environment Topology**:

![change environment topology button](#)

### Automatic Vertical Scaling{#automatic-vertical-scaling}

Penskalaan vertikal otomatis dimungkinkan karena kemampuan platform untuk secara dinamis mengubah sumber daya yang dialokasikan (RAM dan CPU) untuk sebuah server. Penyesuaian dilakukan secara otomatis, sesuai dengan permintaan server Tomcat saat ini. Fitur ini menjamin Anda [tidak pernah membayar lebih untuk sumber daya yang tidak digunakan](<https://www.virtuozzo.com/company/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>) dan menghemat waktu Anda dengan menghilangkan kebutuhan untuk penanganan manual penyesuaian terkait beban.

Untuk mengatur penyediaan sumber daya otomatis untuk server Tomcat Anda, buka wizard topologi environment dan tentukan batas penskalaan atas dalam [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) (masing-masing 128 MiB dan 400 MHz):

![vertical scaling cloudlets](#)

Aplikasi Anda akan bekerja dalam batas ini dengan mengurangi alokasi sumber daya saat beban turun dan meningkat saat beban naik. Dengan demikian, Anda hanya membayar untuk sumber daya yang benar-benar digunakan. Untuk informasi lebih lanjut, silakan lihat dokumentasi tentang [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>).

### Manual Horizontal Scaling{#manual-horizontal-scaling}

Anda dapat menyesuaikan jumlah node Tomcat melalui bagian _Horizontal Scaling_ di wizard topologi. Gunakan tombol **+/-** atau berikan jumlah yang diperlukan melalui bagian tengah. Klik ikon **gear** di sebelah slider untuk mengakses opsi manajemen lanjutan.

![manual horizontal scaling](#)

Juga, berdasarkan kebutuhan Anda, Anda dapat memilih salah satu dari dua mode penskalaan untuk lapisan ini:

  * _**Stateless**_ \- secara bersamaan membuat semua node baru dari template gambar dasar
  * _**Stateful**_ \- secara berurutan menyalin sistem file dari master container ke dalam node baru

![horizontal scaling mode](#)

Jumlah maksimum server tipe yang sama dalam satu lapisan environment tergantung pada pengaturan penyedia hosting tertentu (biasanya, batas ini mencapai 16 node dan dapat disesuaikan dengan mengirim permintaan ke dukungan). Anda dapat memeriksa nilai pastinya dalam frame informasi **Quotas & Pricing > [Account Limits](<https://docs.dewacloud.com/docs/quotas-system/>)**.

Ketika memperbesar satu node, NGINX (Anda dapat menggantinya secara manual dengan yang lain) load balancing ditambahkan secara otomatis. [Load Balancer](<https://docs.dewacloud.com/docs/load-balancing/>) mewakili frontend yang menerima semua permintaan masuk dan mendistribusikannya secara merata di antara backends (server aplikasi).

Silakan temukan lebih banyak detail tentang [horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) dalam dokumentasi.

### Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Penskalaan horizontal otomatis dapat diimplementasikan melalui pemicu yang dapat diatur, yang memantau perubahan dalam beban aplikasi dan meningkatkan atau mengurangi jumlah node.

Untuk mengkonfigurasi pemicu untuk penskalaan horizontal otomatis, gunakan tombol **Settings** untuk environment yang diinginkan dan beralih ke bagian _**Auto Horizontal Scaling**_ untuk melanjutkan.

![automatic horizontal scaling](#)

Klik tombol **Add** untuk mengkonfigurasi pemicu untuk lapisan dan jenis sumber daya tertentu (CPU, RAM, Jaringan, Disk) dalam environment Anda. Tentukan kondisi penskalaan yang diperlukan dan **Apply** perubahan.

![Tomcat automatic horizontal scaling](#)

Pelajari lebih lanjut tentang [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) dalam dokumen terkait.

### Automatic Tomcat Clustering{#automatic-tomcat-clustering}

Platform ini dapat secara otomatis mengkonfigurasi Tomcat Cluster yang andal dengan topologi berikut dalam satu klik:

![Tomcat auto-clustering scheme](#)

Cukup aktifkan opsi **[Auto-Clustering](<https://docs.dewacloud.com/docs/auto-clustering/>)** melalui dashboard, seperti yang ditunjukkan dalam gambar di bawah ini:

:::warning 
Fitur Auto-Clustering untuk Tomcat dan TomEE tersedia sejak versi stack berikut: Tomcat-10.0.5; 9.0.45; 8.5.64; 7.0.108 TomEE-9.0.0-M3; 8.0.5 Versi yang lebih lama masih dapat beroperasi dengan fungsi clustering dan replikasi sesi sebelumnya.
:::

![enable Tomcat auto-clustering](#)

## Deploy Application to Tomcat Environment{#deploy-application-to-tomcat-environment}

Ada beberapa opsi untuk [mendeploy aplikasi](<https://docs.dewacloud.com/docs/deployment-guide/>) di platform, tetapi cara paling sederhana adalah mengunggah archive ke [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>).

:::tip 
Server Tomcat dan TomEE disediakan dengan variabel khusus HOT_DEPLOY (tidak diatur secara default) yang menentukan apakah server harus di-restart (false, disabled, 0) atau tidak (true, enabled, 1) selama proses deployment aplikasi. Hot deploy (tanpa restart) relatif lebih cepat dan memungkinkan untuk menghindari downtime selama proses deployment. Namun, ini tidak didukung oleh beberapa aplikasi dan oleh karena itu dinonaktifkan secara default.
:::

1\. Buka **Deployment Manager** di bagian bawah dashboard dan klik tombol **Upload** di tab _Archive_.

![deployment manager](#)

2\. **Jelajah** file lokal Anda dan **Upload** proyek Anda (atau sediakan melalui _URL_). Archive Java umum memiliki ekstensi _WAR_ , _EAR_ , atau _ZIP_.

![upload application archive](#)

3\. Arahkan ke paket yang diperlukan dalam daftar dan klik tombol **Deploy to** yang muncul:

![deploy application from archive](#)

4\. Pilih environment yang sesuai, tentukan nama konteks (atau biarkan nilai ROOT default) dan mulai deploy aplikasi.

![application deployment dialog](#)

:::note 
Pada langkah ini, Anda juga dapat menambahkan hooks deployment untuk menjalankan skrip kustom Anda sebelum atau sesudah deployment aplikasi.
:::

5\. Ketika proses selesai, Anda dapat melihat proyek Anda dalam deployment environment tersebut.

![application deployed](#)

Ada lebih banyak opsi untuk mendeploy aplikasi Anda ke Tomcat, misalnya, melalui Git/SVN menggunakan [Maven build node](<https://docs.dewacloud.com/docs/java-vcs-deployment/>). Untuk informasi lebih lanjut, lihat [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>).

## Tomcat Configurations{#tomcat-configurations}

Bab ini akan membahas beberapa pengaturan dan fitur yang membantu mengoptimalkan kerja Anda dengan server web Tomcat.

### Environment Variables{#environment-variables}

Untuk membuat aplikasi Anda lebih portabel dan fleksibel, Anda dapat menggunakan **environment variables** sebagai pengganti menetapkan nilai yang diperlukan dalam kode aplikasi setiap kali. Platform ini menyediakan Anda dengan banyak [default environment variables](<https://docs.dewacloud.com/docs/environment-variables/>) Tomcat untuk data stack yang paling umum. Anda juga dapat menambahkan [custom environment variables](<https://docs.dewacloud.com/docs/custom-environment-variables/>) untuk node Tomcat Anda guna membuat manajemennya lebih nyaman.

### Configuration Files{#configuration-files}

File konfigurasi Tomcat tersedia untuk diedit langsung dari dashboard. Untuk mengaksesnya, klik tombol **Config** di sebelah server.

![configuration file manager](#)

Direktori yang paling sering digunakan ditambahkan ke daftar _Favorites_ untuk akses cepat. Anda dapat mempelajari lebih lanjut tentang [konfigurasi server Tomcat](<https://docs.dewacloud.com/docs/java-application-server-config/>) dalam dokumen terkait.

### Tomcat Security Settings{#tomcat-security-settings}

Untuk membatasi akses ke proyek Anda yang dideploy ke server Tomcat, kami merekomendasikan dua solusi yang mungkin: mengatur **user authentication** dan **menolak akses** ke aplikasi web Anda dari alamat IP tertentu. Instruksi terperinci dijelaskan dalam artikel tentang cara [Secure Tomcat Hosting](<https://www.virtuozzo.com/company/blog/restrict-access-tomcat-web-application-hosting/>).

Cara lain untuk memastikan keamanan aplikasi Anda adalah dengan fitur **Container Firewall**. Ini memungkinkan Anda untuk mengontrol ketersediaan node Anda baik dari dalam maupun luar platform. Konfigurasi container firewall Tomcat menggunakan informasi dari artikel [Container Firewall Management](<https://docs.dewacloud.com/docs/custom-firewall/>).

![Tomcat firewall](#)

### Multiple Domains on Single Tomcat Server{#multiple-domains-on-single-tomcat-server}

Anda dapat mengatur beberapa nama domain pada server Tomcat untuk meningkatkan kegunaan, efisiensi, dan skalabilitas aplikasi Anda, serta menghemat biaya tanpa harus mengonfigurasi instance terpisah. Untuk ini, sesuaikan file konfigurasi Tomcat seperti yang dijelaskan dalam instruksi [multiple domains](<https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/>).

![Tomcat multiple domains](#)

Seperti yang Anda lihat, platform ini membuat hosting Tomcat menjadi mudah dan fleksibel. Platform cloud ini menyediakan berbagai pengaturan yang sudah ditentukan sebelumnya agar Anda tidak perlu khawatir tentang tugas rutin. Pada saat yang sama, platform ini membuat server sepenuhnya dapat disesuaikan untuk konfigurasi kompleks tertentu. Mulailah dengan hosting cloud Tomcat yang mudah dari [PaaS](<https://docs.dewacloud.com/docs/application-platform/>) dan nikmati keuntungannya dalam paket siap pakai.

## Baca Juga{#whats-next}

  * [TomEE](<https://docs.dewacloud.com/docs/tomee/>)
  * [Java Application Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Tomcat Multiple Domains](<https://docs.dewacloud.com/docs/multiple-domains-tomcat-server/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Tomcat Security](<https://docs.dewacloud.com/docs/tomcat-security/>)