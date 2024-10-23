---
sidebar_position: 7
slug: /deploying-apps-via-gitblit
title: Deploying Apps via Gitblit
---
# Menyimpan dan Mendeploy Aplikasi melalui Gitblit

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/00logo-1.png" alt="Gitblit logo" width="100%"/> [Gitblit](<http://gitblit.com/>) adalah salah satu alat paling populer untuk mengelola, melihat, dan melayani repositori Anda di dalam Git - sebuah sistem kontrol versi (VCS) yang tersebar luas untuk pengembangan perangkat lunak. Utamanya, Gitblit dirancang untuk kelompok kerja kecil, yang bekerja dengan repositori terpusat, dan mendukung berbagai fitur luar biasa, seperti kontrol akses, tampilan konten repositori melalui web, manajemen multiple repositori, kemampuan untuk diintegrasikan dengan solusi manajemen Git lainnya, dan sebagainya.

Jadi, mari kita cari tahu bagaimana cara meng-host Gitblit di platform dan, selanjutnya, menyederhanakan manajemen aplikasi Anda dengan bantuannya. Anda dapat secara otomatis mendapatkan instance **Gitblit** yang telah dikonfigurasi sebelumnya dan siap digunakan dalam beberapa menit menggunakan widget instalasi satu klik kami:

Cukup klik **Get it hosted now** dan masukkan alamat email Anda untuk meluncurkan Gitblit dan mendapatkan kemampuan untuk melanjutkan langsung ke bagian panduan [pembuatan repositori](<https://docs.dewacloud.com/docs/#create-repository>), melewati langkah-langkah instalasi manual.

Daftar lengkap aplikasi, yang tersedia untuk instalasi satu klik, dapat ditemukan di halaman [Marketplace kami](<https://www.virtuozzo.com/application-platform/marketplace/>) atau di bagian [yang sesuai](<https://docs.dewacloud.com/docs/marketplace/>) di dashboard.

Atau, jika Anda lebih suka mengendalikan seluruh proses, Anda dapat mendepinya secara manual dengan mengikuti instruksi langkah demi langkah di bawah ini.

## Buat Environment{#create-an-environment}

1\. Masuk ke dashboard platform dengan kredensial Anda dan klik tombol **New Environment** untuk membuka frame **Environment Wizard**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/01create1.png" alt="gitblit create" width="100%"/>

2\. Pilih tab bahasa _**Java**_ dan pilih **Tomcat 7** sebagai application server.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/02env_create-1.png" alt="gitblit env create" width="100%"/>

Atur konfigurasi lainnya sesuai kebutuhan Anda, beri nama environment Anda (_misalnya gitblit_) dan klik **Create** untuk memulai proses.

Setelah beberapa saat, environment yang ditentukan akan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/03created-var2.png" alt="gitblit created var" width="100%"/>

## Deploy Gitblit{#deploy-gitblit}

1\. Sekarang, navigasikan ke situs resmi [Gitblit](<http://gitblit.com>) dan unduh versi terbaru dalam bentuk archive _**.war**_ terbungkus (tautan yang sesuai dilingkari pada gambar di bawah).

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/04site.png" alt="gitblit site" width="100%"/>

2\. Kembali ke dashboard platform dan gunakan **Deployment Manager** untuk mengunggah archive yang baru saja Anda unduh - yaitu pilih tab **Local file**, klik **Browse** dan pilih file Gitblit _.war_ di dalam mesin lokal Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/05upload.png" alt="gitblit upload" width="100%"/>

Klik tombol **Upload** untuk melanjutkan.

3\. Setelah paket muncul di manager, deploy ke environment Anda menggunakan opsi **Deploy to** yang sesuai.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/06deploy.png" alt="gitblit deploy" width="100%"/>

Dalam jendela yang terbuka, Anda dapat menentukan konteks kustom yang diinginkan dalam field input, atau cukup biarkan kosong untuk mendeply aplikasi Anda ke konteks _**ROOT**_ default.

4\. Setelah proses selesai, Anda dapat mengklik tombol **Open in browser** untuk memastikan aplikasi benar-benar berfungsi dengan baik.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/07OiB-var2.png" alt="gitblit OiB var" width="100%"/>

## Buat Repositori Gitblit{#create-a-gitblit-repository}

1\. Untuk mulai bekerja dengan Gitblit, Anda perlu **login** di halaman utamanya dengan kredensial default _admin/admin_

   :::tip
   Kami merekomendasikan untuk mengganti password ke yang kustom sesegera mungkin untuk keamanan
   :::
   
   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/08login-var2.png" alt="gitblit login var" width="100%"/>

2\. Setelah masuk, beralihlah ke tab **repositories** di panel atas. Di sini, Anda akan melihat daftar repositori Anda (jika ada) dan akan memiliki kemampuan untuk mengelolanya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/09create_repo-1.png" alt="gitblit create repo" width="100%"/>

Mari buat **repositori baru** dengan mengklik tombol yang sama di sebelah kanan.

3\. Tetapkan nama untuk repo baru Anda (misalnya, _GitBlitRepo_) dan sesuaikan semua konfigurasi lainnya sesuai preferensi Anda (atau biarkan nilai default).

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/10new_repo.png" alt="gitblit new repo" width="100%"/>

Klik **create** di bagian bawah halaman ketika siap.

4\. Repositori kosong yang ditentukan akan ditampilkan dalam sekejap.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/11empty_repo.png" alt="gitblit empty repo" width="100%"/>

5\. Sekarang Anda harus mendorong (menambahkan) proyek Anda ke repo ini. Langkah-langkah sederhana di bawah ini akan membantu Anda melakukannya:

   * pertama, inisialisasi repositori lokal Anda (yaitu buat folder untuk menyimpan file proyek Anda secara lokal):
     ```
     git init
     ```

   * tentukan file mana yang harus terdiri dari proyek Anda (sebagai contoh, kita akan menambahkan file _**README**_ ke dalamnya)
     ```
     git add README.md 
     ```

   * simpan perubahan ini di repo lokal dengan pesan commit (misalnya beri tanda sebagai _first commit_)
     ```
     git commit -m "first commit" 
     ```

   * tentukan repositori **GitBlit** yang telah dibuat sebelumnya sebagai repositori remote untuk repo Git lokal Anda
     ```
     git remote add \{name\} \{repo_url\}   
     ```

   Di mana:
   
   * _**\{name\}**_ - julukan untuk repositori remote Anda
   * _**\{repo_url\}**_ - tautan ke repositori Gitblit Anda, yang dapat ditemukan dalam daftar drop-down di bagian atas halaman dari langkah sebelumnya. Tautan _http://_ yang sesuai dapat disalin dengan tombol di sebelah kanan, seperti ditunjukkan di bawah ini:
     <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/12copy_url-1.png" alt="gitblit copy url" width="100%"/>

   * akhirnya, dorong proyek lokal Anda ke repositori **Gitblit**:
     ```
     git push -u \{name\} \{branch\}
     ```

   Di mana:
   
   * _**\{name\}**_ - nama repositori Gitblit remote yang akan ditempati proyek Anda (nyatakan sama seperti di atas)
   * _**\{branch\}**_ - branch proyek yang harus diperbarui dengan data baru ini 
     <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/12pushed_file.png" alt="gitblit pushed file" width="100%"/>

Setelah ini selesai, segarkan halaman Gitblit untuk melihat repositori Anda dengan data lengkap di dalamnya (di sini, Anda juga dapat beralih ke bagian **commits** untuk melihat informasi tentang perubahan terakhir yang diterapkan, seperti penulis, waktu dan tanggal commit, daftar file yang diubah, dll.).

## Deploy Proyek melalui Gitblit{#deploy-project-via-gitblit}

Sekarang, mari temukan bagaimana cara mendeply proyek Anda dari repositori Gitblit ke platform.

1\. Pertama, buat environment terpisah untuk hosting aplikasi Anda. Mari kita pertimbangkan kasus dengan proyek **Java**, di mana, selain node aplikasi server, Anda perlu menggunakan alat build (misalnya, _Maven_).

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/13env_maven-3.png" alt="gitblit env maven" width="100%"/>

   :::note
   Perhatikan bahwa node Maven ekstra diperlukan hanya untuk proyek Java, sementara untuk mesin lainnya build dilakukan secara otomatis, saat menambahkan proyek ke application server. Referensi dokumen yang sesuai di bawah ini jika Anda membutuhkan detail tentang cara menyelesaikan ini: Maven untuk Deploy via Git/SVN Deploy PHP Projects via Git/SVN Deploy Ruby Project via Git/SVN Deploy Python Projects via Git/SVN Deploy Node.js Project via Git/SVN 
   :::

2\. Klik tombol **Add project** di sebelah _Maven_ node setelah environment Anda berhasil dibuat

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/14add_project_maven-2.png" alt="gitblit add project maven" width="100%"/>

3\. Dalam frame _**Add project**_ yang muncul, pilih tab **Git** dan isi field yang diperlukan:

   * masukkan _**Name**_ dari proyek (hanya untuk Maven)
   * tentukan _**URL**_ dan _**Branch**_ dari repositori yang telah Anda buat sebelumnya
   * pada blok _**Use authentication**_, isi field berikut:
     * _**Login**_ yang digunakan untuk masuk ke repo Anda
     * _**Password**_ untuk login yang ditentukan di atas
   * pilih _**Environment**_ Name Anda dari menu drop-down
   * ketik _**Context**_ yang Anda ingin mendeply proyek Anda <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/15add_project-2.png" alt="gitblit add project" width="100%"/>

   Konfirmasikan penambahan proyek dengan tombol **Add**.

4\. Selanjutnya, klik opsi **Build and deploy** di sebelah proyek yang baru saja ditambahkan.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/16BaD-var4.png" alt="gitblit build and deploy" width="100%"/>

5\. Setelah aplikasi Anda berhasil dideploy, Anda dapat membukanya (dengan menekan tombol **Open in browser** untuk environment) dan memastikan semuanya berjalan dengan baik.

   <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deploying%20apps%20via%20gitblit/17deployed-var4.png" alt="gitblit deployed" width="100%"/>

   :::tip
   Selanjutnya, semua perubahan yang baru dilakukan pada repositori remote dapat dengan mudah diterapkan pada aplikasi yang dihosting Anda dengan hanya satu kali klik - cukup pilih tombol yang sama `Build and deploy` (atau `Update from GIT` jika Anda bekerja dengan mesin lain) di sebelah proyek Anda dan tunggu hingga redeployment selesai.
   :::

Itulah semuanya! Sekarang, repositori Gitblit Anda sendiri dan proyek di dalamnya keduanya di-hosting di platform ini. Nikmatilah!

## Baca Juga{#whats-next}

  * [Maven untuk Deploy melalui Git/SVN](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)
  * [Deploy Proyek PHP melalui Git/SVN](<https://docs.dewacloud.com/docs/php-git-svn/>)
  * [Deploy Proyek Ruby melalui Git/SVN](<https://docs.dewacloud.com/docs/ruby-git-svn/>)
  * [Deploy Proyek Python melalui Git/SVN](<https://docs.dewacloud.com/docs/python-git-svn/>)
  * [Deploy Proyek Node.js melalui Git/SVN](<https://docs.dewacloud.com/docs/nodejs-git-svn/>)
  * [Konfigurasi Aplikasi](<https://docs.dewacloud.com/docs/application-configuration/>)