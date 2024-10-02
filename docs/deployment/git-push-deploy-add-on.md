---
sidebar_position: 5
slug: /git-push-deploy-add-on
title: Git-Push-Deploy Add-On
---
# Git-Push-Deploy Add-On

Ada sejumlah opsi untuk mendeploy kode sumber Anda dari repo Git ke container, termasuk redeploy seluruh container, redeploy instan melalui volumes atau pendekatan “git clone”. Namun, ketika datang ke otomatisasi proses ini dan bergerak menuju deployment berkelanjutan, banyak pengembang dapat menghadapi kompleksitas, karena mereka perlu tahu cara menggabungkan semua komponen aplikasi dengan titik interkoneksi yang diperlukan.

Secara khusus, di dunia container Anda harus mengelola build dari image stack Anda berurusan dengan kompleksitas tambahan dari pipeline CI/CD. Dan seluruh redeploy container mungkin bukan pendekatan terbaik jika Anda sering melakukan commit tanpa perubahan konfigurasi dalam sistem operasi, stack server aplikasi atau dependensinya.

![GitHub CI/CD](#)

Untuk memudahkan otomatisasi deployment, platform PaaS menyiapkan paket khusus **Git-Push-Deploy** untuk pengiriman kode ke dalam image container yang telah dibangun sebelumnya. Paket ini mengimplementasikan sejumlah konfigurasi untuk menyiapkan deployment otomatis dari perubahan yang di-commit dalam repositori sumber aplikasi Git Anda ke cloud, membuatnya tersedia untuk pengujian lebih lanjut dengan penundaan minimal.

## Git-Push-Deploy Specifics{#git-push-deploy-specifics}

Paket Git-Push-Deploy dapat diintegrasikan dengan repositori GitHub dan GitLab. Ini dikembangkan untuk pengiriman pembaruan otomatis dalam sumber aplikasi **Java**, **PHP**, **Ruby**, **Node.js**, dan **Python** Anda dan dapat diterapkan ke semua [certified stack templates](https://docs.dewacloud.com/docs/software-stacks-versions/) server aplikasi.

Alur kerja bergantung pada bahasa pemrograman yang digunakan dalam proyek Anda:

- _untuk proyek berbasis Java_, paket ini memulai pembuatan environment terpisah dengan [Maven build node](https://docs.dewacloud.com/docs/java-vcs-deployment/) yang akan bertanggung jawab untuk interaksi dengan remote Git repository, memicu build aplikasi Anda dan deploymentnya ke server aplikasi
- _untuk aplikasi PHP/Ruby/Node.js/Python_, paket ini mengatur pipeline untuk deployment proyek langsung ke konteks ROOT pada web server (di sini, perlu diperhatikan bahwa server aplikasi Ruby disediakan dengan mode deployment sebagai ganti konteks dalam dashboard, meskipun lokasi proyek sebenarnya sama)

## Repository Pre-Configurations{#repository-pre-configurations}

Untuk instalasi add-on yang tepat, Anda perlu menyediakan _Personal API Token_ untuk akun Git Anda. Ini memungkinkan paket untuk mengatur webhook untuk repositori yang bersangkutan, yang akan memulai redeployment aplikasi setiap kali ada perubahan yang diberikan ke kodenya.

Jadi mari kita buat satu, ikuti instruksi di bawah sesuai dengan VCS Git yang digunakan, yaitu [GitHub](https://docs.dewacloud.com/docs/#generating-access-token-on-github) atau [GitLab](https://docs.dewacloud.com/docs/#generating-access-token-on-gitlab).

### Generating Access Token on GitHub{#generating-access-token-on-github}

Untuk mendapatkan [personal access token untuk GitHub](https://github.blog/2013-05-16-personal-api-tokens/) akun Anda, navigasikan ke **Settings > Developer Settings > Personal access tokens** dan klik tombol **Generate new token**.

![GitHub Generate New Token](#)

Pada halaman yang terbuka, tentukan **Note** (deskripsi token) dan **Select scopes** (setidaknya untuk _repo_ dan _admin:repo_hook_). Klik **Generate token** di bagian bawah halaman.

![GitHub Token Scopes](#)

Setelah dialihkan, salin dan simpan akses token yang ditampilkan di tempat lain (karena tidak dapat dilihat lagi setelah Anda meninggalkan halaman ini).

![GitHub Copy Token](#)

Setelah ini selesai, lanjutkan ke bagian **[Install Git-Push-Deploy Package](https://docs.dewacloud.com/docs/#install-git-push-deploy-package)** langsung di bawah artikel ini.

### Generating Access Token on GitLab{#generating-access-token-on-gitlab}

Untuk membuat [personal access token on GitLab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html), masukkan **Settings** akun Anda dan beralih ke tab _**Access Tokens**_.

Di sini, tentukan optional token **Name**, tanggal **Expiry** (bisa dibiarkan kosong) dan centang ruang lingkup izin **api**.

![GitLab Generating Access Token](#)

Klik tombol **Create Personal Access Token**.

Pada halaman yang terbuka, salin dan simpan sementara nilai akses token Anda di tempat lain (karena Anda tidak akan bisa melihatnya lagi setelah meninggalkan halaman ini).

![GitLab Copy Access Token](#)

Sekarang, Anda siap untuk instalasi paket.

## Extra Pre-Configurations for Java Projects{#extra-pre-configurations-for-java-projects}

Jika menjalankan proyek berbasis Java, Anda perlu memastikan interaksi yang tepat dengan Maven build node dengan menambahkan file Project Object Model ([POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)) khusus ke strukturnya.

Jadi, buat file _**pom.xml**_ di root repositori proyek Anda, dengan konten berikut sebagai dasar wajib:

```
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0</version>
    <packaging>war</packaging>
    <build>
        <finalName>${project.artifactId}</finalName>
    </build>
</project>
```

Di mana nilai opsional adalah:

- **groupId** \- grup dari proyek (contoh: nama perusahaan)
- **artifactId** \- nama dari proyek
- **version** \- versi aplikasi Anda

Semua parameter lainnya harus dibiarkan tidak berubah.

## Install Git-Push-Deploy Package{#install-git-push-deploy-package}

**[Git-Push-Deploy package](https://github.com/jelastic-jps/git-push-deploy)** adalah sebuah add-on, jadi bisa diinstal hanya di atas [environment](https://docs.dewacloud.com/docs/setting-up-environment/). Kami telah menyiapkan dua environment terpisah dengan server aplikasi **Tomcat** dan **Apache PHP** untuk menunjukkan alur kerja untuk berbagai bahasa pemrograman.

Jika Anda akan menggunakan environment yang sudah dibuat sebelumnya, perhatikan bahwa paket akan menimpa aplikasi yang dideploy ke konteks _**ROOT**_. Jadi untuk menjaga aplikasi yang sudah dideploy, pindahkan ke konteks kustom. Kami merekomendasikan untuk membuat environment baru dan kemudian melanjutkan ke instalasi:

1. Klik tombol **Marketplace** di panel atas dashboard dan cari add-on _**Git-Push-Deploy**_:

   ![Install Add-On](#)

   Klik **Install** untuk melanjutkan.

2. Dalam frame yang terbuka, tentukan detail berikut tentang repositori Anda dan environment target:

   - _**Git Repo URL**_ \- tautan HTTPS ke repositori aplikasi Anda (baik _.git_ atau tampilan umum). Anda dapat me-fork aplikasi sampel _[Hello World](https://github.com/jelastic/HelloWorld-CI-CD)_ kami untuk menguji alur
   - _**Branch**_ \- cabang proyek yang akan digunakan
   - _**User**_ \- masukkan login akun Git Anda
   - _**Token**_ \- tentukan akses token yang telah Anda buat sebelumnya untuk pembuatan webhook
   - _**Environment name**_ \- pilih environment tempat aplikasi Anda akan dideploy
   - _**Nodes**_ \- nama server aplikasi (diambil secara otomatis setelah memilih environment)

   ![Configure Add-On](#)

   Klik **Install** untuk melanjutkan.

3. Tunggu satu menit untuk platform mengambil sumber aplikasi Anda dari GitHub dan mengkonfigurasi webhook untuk continuous deployment.

   ![Deployed Add-On](#)

   **Close** frame notifikasi ketika instalasi selesai.

4. Bergantung pada tipe proyek, hasilnya akan sebagai berikut:

   - untuk infrastruktur **berbasis Java**, Anda akan melihat environment baru muncul di dashboard Anda dengan [_**Maven**_ build node](https://docs.dewacloud.com/docs/java-vcs-deployment/) di dalamnya; itu akan membangun dan mendepoy aplikasi Anda ke konteks _ROOT_ pada server web setiap kali kode sumber diperbarui

     :::warning
     Bahwa mungkin memakan waktu bagi Maven untuk mengkompilasi proyek (meskipun instalasi paket itu sendiri sudah selesai), jadi Anda perlu menunggu beberapa menit sebelum meluncurkannya. Kemajuan operasi ini dapat dilacak secara real time melalui file vcs_update.log di Maven.
     :::

   - untuk infrastruktur **berbasis PHP** (dan _bahasa lain yang didukung_), aplikasi Anda akan dideploy langsung ke server _ROOT_ yang dipilih

     :::warning
     Untuk server aplikasi Ruby, bagian similar Projects memberikan informasi tentang mode deployment yang digunakan (secara default development) daripada konteks, sedangkan lokasi aplikasi sebenarnya mengacu ke root server juga.
     :::

Untuk memulai aplikasi Anda, klik **Open in Browser** di sebelah server web Anda.

![Hello World Application](#)

Itulah! Sekarang versi baru aplikasi Anda secara otomatis dikirimkan ke server aplikasi setiap kali ada commit ke repositori.

## Redeployment Policies for Different Stacks{#redeployment-policies-for-different-stacks}

Tabel di bawah ini mencantumkan perilaku server aplikasi yang berbeda setelah menerima kode yang diperbarui.

| Stack Name   | Policy                                               |
|--------------|------------------------------------------------------|
| Tomcat       | Restart                                              |
| TomEE        | Restart                                              |
| GlassFish    | Hot Redeploy via Server API                          |
| Jetty        | Restart                                              |
| JBoss        | Restart                                              |
| WildFly      | Restart                                              |
| SpringBoot   | Restart                                              |
| Apache PHP   | [Advanced ZDT](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/) |
| NGINX PHP    | [Advanced ZDT](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/) |
| Apache Ruby  | Graceful Reload                                      |
| NGINX Ruby   | Graceful Reload                                      |
| NodeJS       | Restart                                              |
| Python       | Restart                                              |

Untuk menghilangkan kemungkinan downtime aplikasi untuk server dengan kebijakan pembaruan _Restart_, [segarkan skala keluar](https://docs.dewacloud.com/docs/horizontal-scaling/) untuk dijalankan di beberapa container. Dalam kasus ini, pembaruan yang diperlukan akan diterapkan ke instance secara berurutan, dengan penundaan 30 detik secara default.

## Test Automated Deploy from Git{#test-automated-deploy-from-git}

Dan sekarang mari kita periksa bagaimana proses ini benar-benar bekerja. Lakukan beberapa penyesuaian kecil pada kode di repo dan pastikan semuanya otomatis:

1. Klik **Edit this file** untuk beberapa item dalam repositori proyek Anda dan **Commit changes** ke dalamnya - misalnya, kami akan memodifikasi teks di halaman awal HelloWorld kami.

   ![Commit Changes](#)

2. Akibatnya, webhook yang sesuai akan dipicu untuk mendepoy perubahan yang dibuat ke lingkungan hosting Anda - rujuk ke bagian repository **Settings > Webhooks** untuk detailnya.

   ![GitHub Webhook](#)

   Setelah mengklik string ini, Anda akan melihat daftar **Recent Deliveries**, yang dimulai oleh webhook, dan hasil eksekusinya.

3. Sebagai titik pemeriksaan terakhir, kembali ke halaman aplikasi Anda dan segarkan (sambil mengingat bahwa mungkin perlu waktu tambahan bagi Maven untuk membangun dan mendepoy proyek berbasis Java Anda).

   ![Updated Application](#)

Itulah! Seperti yang Anda lihat, modifikasi berhasil diterapkan, sehingga solusinya berfungsi seperti yang diharapkan.

Cukup perbarui kode Anda, lakukan commit seperti biasanya, dan semua perubahan akan didorong ke lingkungan PaaS Anda secara otomatis. Tidak perlu beralih antara proses atau melakukan pembaruan manual menghilangkan kesalahan manusia dan mempercepat waktu pemasaran untuk aplikasi Anda.

Butuh beberapa detail atau bantuan? Jangan ragu untuk meminta bantuan dalam komentar di bawah ini atau hubungi para ahli teknis kami di [Stack Overflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

- [Deployment Guide](https://docs.dewacloud.com/docs/deployment-guide/)
- [Java VCS Deployment](https://docs.dewacloud.com/docs/java-vcs-deployment/)
- [PHP Zero Downtime Deploy](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)
- [Deployment Hooks](https://docs.dewacloud.com/docs/deployment-hooks/)