---
sidebar_position: 3
slug: /wordpress-project-management
title: WordPress Project Management
---

# Manajemen Proyek WordPress

Semua proyek WordPress di platform disediakan dengan halaman khusus di mana Anda dapat melihat semua detail, melacak data pemantauan, mendeploy solusi, dan melakukan operasi manajemen lainnya.

Berikut ini, kami telah mengelompokkan semua fungsionalitas yang tersedia untuk proyek di dashboard WordPress ke dalam kelompok berikut:

- [Settings and Basic Actions](https://docs.dewacloud.com/#settings-and-basic-actions)
- [General Data](https://docs.dewacloud.com/#general-data)
- [WordPress Plugins](https://docs.dewacloud.com/#wordpress-plugins)
- [Application Deployment](https://docs.dewacloud.com/#application-deployment)
- [Environment Management](https://docs.dewacloud.com/#environment-management)

## Settings and Basic Actions{#settings-and-basic-actions}

1. Di bagian atas jendela proyek, Anda dapat melihat daftar tindakan lingkungan dasar – **Stop** (**Start**), **Restart**, dan **Settings**.

![project basic actions](#)

Klik tombol yang diperlukan untuk melakukan operasi yang sesuai.

:::tip
Saat merestart solusi yang terklaster, Anda akan melihat daftar drop-down dengan semua node dan kelompok node. Untuk kelompok dengan beberapa node, Anda dapat memilih untuk merestart secara bersamaan (semua node sekaligus) atau secara berurutan (satu per satu). Opsi yang terakhir memastikan bahwa setidaknya satu node tetap aktif dan dapat memproses permintaan end-user (tanpa downtime). Penundaan diperlukan untuk memastikan bahwa node sepenuhnya online sebelum merestart node berikutnya.
:::

2. Tombol dengan ikon roda gigi akan mengarahkan Anda ke halaman **Settings** proyek, yang memiliki beberapa bagian, termasuk opsi untuk [menghapus proyek](https://docs.dewacloud.com/wp-dashboard-project-installation/#deleting-project) di bagian bawah.

![project settings](#)

2.1. Bagian **Custom Domains** menyediakan instruksi dan fungsionalitas untuk menghubungkan [custom domains](https://docs.dewacloud.com/docs/custom-domains/) ke lingkungan Anda.

![settings custom domains](#)

2.2. Bagian **SSL Installation** memungkinkan menerbitkan sertifikat baru atau melihat yang sudah ada. Anda dapat menggunakan _[Let’s Encrypt SSL](https://docs.dewacloud.com/company/blog/free-ssl-certificates-with-lets-encrypt/)_ otomatis atau mengelola _custom SSL_ untuk proyek secara manual (Anda harus menambahkan domain kustom terlebih dahulu).

![settings SSL installation](#)

2.3. Bagian **Backup Storage** memungkinkan backup otomatis untuk proyek Anda berdasarkan jadwal yang ditentukan (_pre-defined_, _custom_, atau _crontab_). Selain itu, Anda dapat memilih storage backup (tambahkan melalui [pengaturan akun](https://docs.dewacloud.com/wp-dashboard-overview/#account-settings)) dan menetapkan sejumlah backup terbaru untuk disimpan. Pelajari lebih lanjut tentang [proses backup dan restore](https://docs.dewacloud.com/wordpress-backups/).

![settings backup storage](#)

2.4. Bagian **Endpoints** menunjukkan daftar endpoint yang ada, memungkinkan Anda untuk mengelolanya, dan membuat yang baru.

![settings endpoints](#)

[Endpoints](https://docs.dewacloud.com/endpoints/) membuat koneksi langsung (melalui protokol raw TCP atau UDP) ke salah satu node proyek tanpa alamat _Public IP_ wajib. Ini dapat digunakan untuk mengatur akses jarak jauh. Misalnya, salah satu kasus penggunaan paling umum adalah mendapatkan akses jarak jauh ke instance database Anda menggunakan klien database lokal.

2.5. Bagian **Subscription Plan** menunjukkan detail langganan dari proyek saat ini dan, tergantung pada konfigurasi penyedia hosting, dapat memberikan opsi **Change Plan**. Ini memberikan kemampuan untuk memindahkan proyek saat ini ke rencana berbeda dalam langganan yang sama.

![settings subscription plan](#)

3. Di sebelah tombol yang disebutkan di atas, Anda dapat menemukan daftar drop-down untuk beralih antara [_Production_ dan _Staging_ environments](https://docs.dewacloud.com/wp-dashboard-project-installation/#staging-project) untuk proyek Anda.

![staging project](#)

## General Data{#general-data}

Bagian _**Overview**_ proyek menyediakan data yang paling sering dibutuhkan untuk proyek Anda.

![WordPress project overview](#)

1. Ikon di awal menunjukkan apakah proyek adalah solusi terklaster atau standalone. Titik berwarna di sebelahnya menunjukkan status proyek (_hijau_ – aktif, _kuning_ – sedang berjalan, _merah_ – berhenti). Nama yang mengikuti menentukan apakah [environment adalah production atau staging](https://docs.dewacloud.com/wp-dashboard-project-installation/#staging-project). Terakhir, Anda dapat melihat domain internal dari proyek.

![WordPress project domains](#)

Anda dapat mengklik tombol **Edit Domain Name** untuk [menghubungkan custom external domain](https://docs.dewacloud.com/#settings-and-basic-actions).

![project edit domain](#)

2. Jauh di sebelah kanan, terdapat menu yang dapat diperluas untuk deployment aplikasi. Di sini Anda dapat melihat dan menghapus aplikasi default atau menginstal yang baru jika tidak ada.

![project deployment menu](#)

Pelajari lebih lanjut di bagian [Application Deployment](https://docs.dewacloud.com/#application-deployment).

3. Di bawahnya, platform menampilkan **WordPress version** yang terdeteksi secara otomatis dan menyediakan tautan ke panel admin WordPress.

![project WordPress version](#)

4. **PHP version** juga ditampilkan.

![WordPress project PHP version](#)

Arahkan kursor untuk melihat opsi **Redeploy** yang memungkinkan pembaruan PHP version. Klik dan pilih tag baru dengan versi yang diinginkan. Operasi ini akan memperbarui container proyek Anda ke tag (versi) baru tanpa mempengaruhi aplikasi di dalamnya.

![WordPress project redeployment](#)

Kami merekomendasikan untuk melakukan redeployment secara teratur ke versi terbaru untuk memastikan container proyek Anda menjalankan sistem operasi dan stack perangkat lunak terbaru dengan semua perbaikan kerentanan terbaru. Namun, perlu diketahui bahwa operasi ini akan menyebabkan downtime singkat untuk proyek. Anda dapat membaca lebih lanjut tentang fitur **[Redeployment](https://docs.dewacloud.com/container-redeploy/)** di dokumen yang terhubung.

5. Klik **Datacenter Info** untuk memeriksa informasi yang relevan.

![WordPress project datacenter info](#)

6. Klik **SSH/SFTP Info** untuk melihat bagaimana Anda dapat mengakses proyek Anda melalui protokol [SSH](https://docs.dewacloud.com/ssh-gate-access/#ssh-access-to-platform-account) dan [SFTP](https://docs.dewacloud.com/ssh-protocols/). Daftar drop-down memungkinkan melihat informasi untuk berbagai node dari klaster.

![WordPress project SSH SFTP info](#)

7. Anda dapat mengklik **Database Info** untuk melihat _Username_ admin, opsi untuk _Reset Password_, dan pengalihan ke panel admin (email dengan kredensial telah dikirimkan kepada Anda setelah pembuatan proyek). Daftar drop-down memungkinkan melihat informasi untuk berbagai node dari klaster.

![WordPress project database info](#)

8. Jika Anda memiliki aplikasi kustom yang di-deploy, label yang sesuai akan ditampilkan.

![project Git deployment](#)

## WordPress Plugins{#wordpress-plugins}

Bagian _**Plugins**_ mencantumkan semua plugin WordPress yang diinstal untuk proyek Anda. Daftar ini diperbarui secara otomatis setelah beralih ke tab ini, jadi Anda selalu memiliki data yang terbaru.

![project plugins](#)

Di sini, Anda dapat mengarahkan kursor untuk melihat nama dan deskripsi plugin. Gunakan toggle di bagian atas untuk **Enable/Disable**. Anda dapat **Update** plugin Anda jika opsi yang sesuai tersedia. Plugin yang tidak dibutuhkan dapat dihapus dengan tombol **Delete**.

![manage plugin](#)

Untuk menambahkan plugin baru, Anda perlu terhubung ke proyek Anda melalui _**WordPress admin panel**_ (email dengan kredensial telah dikirimkan kepada Anda setelah pembuatan proyek).

![admin add plugin](#)

Pergi ke tab **Plugins** dalam panel admin dan pilih plugin yang diperlukan dari marketplace (atau unggah kustom Anda). Pelajari lebih lanjut di dokumentasi resmi WordPress - periksa panduan **[Managing Plugins](https://wordpress.org/support/article/managing-plugins/#finding-and-installing-plugins-1)**.

## Application Deployment{#application-deployment}

Menu deployment aplikasi terletak di bagian kanan dari bagian overview. Biasanya, **Default project** dideploy selama pembuatan proyek WordPress baru. Ini adalah situs web sampel dari blog "Hello World" untuk membantu pengguna baru memulai. Akhirnya, Anda mungkin ingin beralih ke sesuatu yang lebih sesuai dengan kebutuhan spesifik Anda.

1. Hanya satu aplikasi yang dapat dideploy pada satu waktu. Jadi, solusi apa pun yang ada harus dihapus sebelum mendeploy aplikasi baru. Luaskan menu deployment dan klik opsi **Delete**.

![delete default application](#)

**Catatan:** Tindakan ini bisa memutus integrasi bawaan dengan WordPress. Lanjutkan hanya jika Anda tahu persis apa yang Anda lakukan.

Konfirmasi tindakan melalui pop-up.

2. Jika sebuah proyek tidak memiliki aplikasi yang dideploy, menu deployment akan memiliki opsi **Deploy**.

![project deploy application](#)

3. Di dalam jendela yang terbuka, Anda dapat memilih repository Git yang diinginkan dari daftar yang ditambahkan melalui [pengaturan akun](https://docs.dewacloud.com/wp-dashboard-overview/#account-settings). Opsional, centang kotak " _Check and auto-deploy updates (min_)” dan berikan periode yang diinginkan untuk mengaktifkan pembaruan otomatis dari aplikasi yang dideploy (hanya jika ada perubahan).

![deploy application](#)

4. Untuk mendeploy aplikasi dari repository baru, pilih opsi **Add New Repo** dari daftar dan berikan detail yang diperlukan:

- **Name** – nama kustom untuk aplikasi
- **URL** – URL yang sesuai ke repository
- **Branch** – cabang yang diperlukan dari repo
- **Use Authentication** – centang untuk memberikan kredensial (_Login_ dengan _Token_ atau _SSH key_)

![add Git repository](#)

5. Setelah memberikan semua data yang diperlukan, klik **Deploy** dan tunggu satu menit agar platform secara otomatis mendeploy aplikasi ke proyek Anda.

![deploy sample project](#)

6. Untuk proyek yang dideploy, platform menunjukkan URL Git dan menyediakan opsi untuk:

- **Pull** – memulai manual pembaruan aplikasi dari repository
- **Edit** – beralih ke repo yang berbeda atau menyesuaikan fitur auto-deploy (aktifkan, nonaktifkan, ubah interval)

![project application details](#)

## Environment Management{#environment-management}

Platform menyediakan opsi pemantauan dan manajemen file untuk proyek WordPress Anda. Pilih proyek yang diperlukan dan temukan bagian yang sesuai di bagian bawah halaman.

![project monitoring and file manager](#)

Anda dapat menggunakan tombol di sebelah kanan (dilingkari dalam gambar di atas) untuk masing-masing:

- Memperbesar bagian ke layar penuh.
- Membagi layar dengan informasi dasar proyek (ukuran bagian dapat disesuaikan secara manual).
- Meminimalkan bagian menjadi satu baris di bagian bawah halaman.

1. Tab _**Statistics**_ dari bagian ini menyediakan informasi rinci tentang konsumsi proyek dan diperbarui secara real-time. Arahkan kursor ke grafik untuk data mendetail saat itu.

![WordPress project statistics monitoring](#)

Dimungkinkan untuk menyesuaikan data yang ditampilkan menggunakan panel alat:

- **Scope** – jenis node untuk menampilkan statistik (hanya tersedia untuk solusi terklaster dengan beberapa node)
  - _bl_ – load balancers (LiteSpeed ADC)
  - _cp_ – application servers (LiteSpeed)
  - _nosql_ – NoSQL databases (Redis)
  - _sql_ – SQL databases (MariaDB)
  - _storage_ – storage nodes (Shared Storage)
- **Nodes** – semua atau node tertentu dalam ruang lingkup yang dipilih
- **Duration** – pilih periode yang diperlukan (_hour_, _day_, atau _month_)
- **Interval** – pilih interval yang diinginkan (tergantung pada opsi _Duration_)
- **CPU, Memory, Network, Storage** – centang data yang harus ditampilkan
- **Auto Refresh** – klik untuk mengaktifkan/menonaktifkan pelacakan data secara real-time

2. Pada tab _**File Management**_, Anda dapat melihat file aplikasi Anda dan melakukan manajemen dasar. Anda dapat memilih node yang diperlukan untuk solusi terklaster melalui **Nodes** list yang sesuai di bagian atas.

![WordPress project file manager](#)

Tab **Favorites** digunakan untuk akses cepat ke file konfigurasi utama dari node yang dipilih. Tab **All** memungkinkan mengelola semua file proyek. Pilih file atau folder untuk melihat informasi dan tindakan tambahan di sebelah kanan:

- **Folder** – Anda dapat membuat file dan folder baru di dalamnya, menyegarkan konten, atau menghapus direktori.

![project manage folder](#)

- **File** – Anda dapat membukanya, menyegarkan, atau menghapusnya. File yang dibuka dapat diedit langsung di manajer file. Perubahan dapat disimpan ke semua node dalam ruang lingkup (hanya untuk klaster).

![managing project files](#)

Untuk [lebih banyak opsi manajemen](https://docs.dewacloud.com/#general-data), hubungkan melalui SSH atau lakukan penyesuaian melalui database dan panel admin WordPress.

## Baca Juga{#whats-next}

- [WordPress PaaS](https://docs.dewacloud.com/virtuozzo-application-platform-for-wordpress/)
- [WordPress Dashboard Overview](https://docs.dewacloud.com/wp-dashboard-overview/)
- [WordPress Project Installation](https://docs.dewacloud.com/wp-dashboard-project-installation/)
- [WordPress Topologies](https://docs.dewacloud.com/wordpress-topologies/)
- [WordPress Backups](https://docs.dewacloud.com/wordpress-backups/)
- [WordPress Security](https://docs.dewacloud.com/wordpress-security/)
- [WordPress PHP Optimization](https://docs.dewacloud.com/wordpress-php-optimization/)