---
sidebar_position: 1
slug: /configuration-tools
title: Configuration Tools
---

## Container Configuration{#container-configuration}

Platform ini menyediakan kemungkinan untuk mengelola semua aspek utama dari siklus hidup containers secara langsung melalui sebuah [dashboard](<https://docs.dewacloud.com/docs/dashboard-guide/>). Ini mendukung sejumlah berbagai alat, yang dimaksudkan untuk membantu Anda mengonfigurasi environments Anda:

  * [settings wizard](<https://docs.dewacloud.com/docs/#container-layer-settings-wizard>)
  * [embedded file manager](<https://docs.dewacloud.com/docs/#configuration-file-manager>)
  * [log files](<https://docs.dewacloud.com/docs/#log-files>)
  * [SSH access ](<https://docs.dewacloud.com/docs/#ssh-access-to-container>)

## Container Layer Settings Wizard{#container-layer-settings-wizard}

Platform ini mengintegrasikan sebuah dialog khusus **Docker layer settings** ke topology wizard untuk menyesuaikan beberapa pengaturan container yang paling umum diperlukan tanpa harus mengaksesnya melalui SSH. Kuat sekaligus ramah pengguna, ini memberi Anda kemampuan untuk mengonfigurasi containers Anda dengan cara yang paling mudah dan nyaman.

Jadi, untuk memulai, Anda perlu mengakses bingkai yang disebutkan di atas. Ada dua cara yang bisa dilakukan:

  * _via topology wizard_ \- klik tombol **New Environment** dan [tambahkan container yang diperlukan](<https://docs.dewacloud.com/docs/setting-up-environment/>) atau tekan tombol **Change Environment Topology** untuk environment yang sudah dibuat.
  
    ![topology wizard layer configuration](#)
  
    Kemudian pilih container yang perlu disetel dan pilih bagian _**Configuration**_ yang sesuai di bagian bawah (dilingkari di gambar di atas).

:::tip 
Dengan platform ini, setiap container dapat dikonfigurasi sebelumnya bahkan sebelum dibuat - data yang diperlukan secara otomatis diambil dari manifes image saat mengakses configuration wizard.
:::

  * _langsung dari dashboard_ \- arahkan ke layer environment Anda, klik ikon gear dan pilih salah satu opsi akses cepat dari daftar yang diperluas
  
    ![dashboard layer settings](#)

Setelah itu, jendela **Docker layer settings** akan muncul:

![layer settings window](#)

Seperti yang Anda lihat, ini berisi 5 bagian terpisah dengan opsi pengaturan berikut (ikutilah panduan yang sesuai di bawah untuk bagian yang Anda minati):

  * [Variables](<https://docs.dewacloud.com/docs/container-variables/>)
  * [Links](<https://docs.dewacloud.com/docs/container-links/>)
  * [Volumes](<https://docs.dewacloud.com/docs/container-volumes/>)
  * [Ports](<https://docs.dewacloud.com/docs/container-ports/>)
  * [Run Config](<https://docs.dewacloud.com/docs/container-run-configuration/>)

## Configuration File Manager{#configuration-file-manager}

**[configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)** yang terintegrasi dirancang untuk mengelola file di dalam container Anda (termasuk yang tersedia dan/atau diekspor melalui fungsi [Shared Storage Container](<https://docs.dewacloud.com/docs/data-storage-container/>)). Tab yang sesuai dapat dibuka dengan mengklik tombol **Config** di sebelah node yang diperlukan (atau seluruh layer):

![configuration file manager](#)

Ini mencakup 4 bagian utama:

  * _**Root**_ (File Manager) - memberi Anda akses mudah ke sistem file lokal container, di mana Anda dapat mengoperasikan data yang terdiri dan pengaturan instance dalam file konfigurasi yang sesuai
  * _**Mount Points**_ \- daftar folder, yang secara fisik tersimpan pada node jarak jauh tetapi dapat digunakan pada container saat ini melalui [mounting the directories](<https://docs.dewacloud.com/docs/mount-points/>) dengan data yang diperlukan
  * _**Exports**_ \- daftar folder, yang dibagikan dengan node lain, yaitu [diekspor](<https://docs.dewacloud.com/docs/storage-exports/>) agar tersedia pada instances jarak jauh saat disimpan secara lokal
  * _**Favorites**_ \- file dan folder yang umum digunakan untuk mendapatkan akses cepat dan sederhana (Anda dapat secara manual menandai file custom apa pun sebagai favorit)

:::tip 
Dalam kasus layer environment yang sesuai mencakup beberapa containers tipe yang sama, Anda dapat dengan mudah beralih di antara mereka langsung di dalam manager dengan memilih yang diperlukan dalam daftar drop-down yang sesuai di panel atas (dilingkari pada gambar di atas).
:::

Dengan cara ini, file manager memungkinkan Anda mengambil kendali penuh atas sistem file container tanpa memerlukan alat tambahan. Namun, berhati-hatilah dengan apa yang Anda modifikasi, karena jika sesuatu rusak, perubahan yang Anda terapkan tidak dapat secara otomatis dipulihkan.

## Log Files{#log-files}

Bagian lain dari platform dashboard, yang dapat membantu Anda mengelola proyek Anda, adalah **Logs**. Di sini, data tentang semua aspek siklus hidup containers Anda dikumpulkan, yang bisa berguna saat memecahkan masalah atau debugging aplikasi atau layanan Anda.

![node log manager](#)

:::note 
Daftar file log dan direktori yang ditampilkan tergantung pada software stack tertentu dan dapat bervariasi.
:::

File log di dalam container secara otomatis berotasi, jadi ketika salah satu dari mereka mencapai ukuran _50 MB_, itu akan otomatis terkompresi dan dipindahkan ke direktori _**rotated_logs**_ khusus. Untuk melihat arsip tersebut (jika diperlukan), Anda perlu memasuki container yang sesuai [via SSH](<https://docs.dewacloud.com/docs/ssh-access/>) dan mendownloadnya untuk diperiksa secara lokal. Log yang dikompresi disimpan selama 7 hari, setelah itu akan dihapus secara otomatis karena dianggap sebagai data usang.

## SSH Access to Container{#ssh-access-to-container}

Jika Anda lebih suka mengelola containers Anda melalui terminal, Anda dapat dengan mudah menghubungkan ke salah satu dari mereka [via SSH](<https://docs.dewacloud.com/docs/ssh-access/>), tidak peduli apakah memiliki eksternal IP address terpasang atau tidak. Setelah terhubung, Anda mendapatkan kebebasan sejati untuk mengelola instances Anda dengan menjalankan operasi yang diperlukan langsung dari mesin lokal Anda.

Selain itu, platform ini dilengkapi dengan [CLI client](<https://docs.dewacloud.com/docs/cli/>) khusus, yang memungkinkan menangani sebagian besar operasi yang diperlukan untuk pengelolaan siklus hidup aplikasi Anda, dengan menggunakan serangkaian skrip khusus. Struktur perintah ini dapat dicapai melalui hierarki [platform API](<https://docs.dewacloud.com/docs/api/>) sehingga Anda dapat dengan mudah terbiasa dengan klien tersebut.

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)
  * [Custom Container SSH Access](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>)
  * [CLI Client](<https://docs.dewacloud.com/docs/cli/>)