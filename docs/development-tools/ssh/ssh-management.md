---
sidebar_position: 5
slug: /ssh-management
title: SSH Management
---
# Akses SSH pada Container: Kelola Server Anda dari Manapun
The Jelastic Platform allows establishing [SSH access](<https://docs.dewacloud.com/ssh-access/?utm_source=blog-ssh-to-container>) to any container on your account. In this guide, we’ll provide some of the most common commands that can come in handy when managing your server via SSH terminal.

There are two ways to connect your server inside Jelastic PaaS over SSH:

  * **Web SSH -** click on the same-named option next to the required environment layer or particular container to quickly access and start managing it online directly through your browser, via the automatically opened terminal tab at the bottom of Jelastic dashboard  
<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-1.png" alt="Application Servers Web SSH" width="80%"/>

  * **SSH Gate** \- alternatively, you can connect to your server via any preferred local SSH client basing on preliminary [generated](<https://docs.dewacloud.com/ssh-generate-key/?utm_source=blog-ssh-to-container>) SSH keys pair (where the public key should be [added](<https://docs.dewacloud.com/ssh-add-key/?utm_source=blog-ssh-to-container>) to your Account Settings, and the corresponding private key - being handled at your local machine) 
   <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-2.png" alt="SSH Keys" width="100%"/>
   Once all the requirements are fulfilled, you can [establish an SSH connection](<https://docs.dewacloud.com/ssh-gate-access/?utm_source=blog-ssh-to-container>) by means of the corresponding command line (circled above) from the same-named tab of your account settings.
  
  For the sake of simplicity and quick access, in this article we’ll leverage the inbuilt Web SSH tool; however, the described below commands can be used when working via remote local client absolutely similar.

**Tips:**

  * Within the majority of servers within Jelastic PaaS (including [custom Docker containers](<https://docs.dewacloud.com/custom-containers-deployment/?utm_source=blog-ssh-to-container>)), you are automatically granted full root permissions while connected via SSH. For the rest, mostly legacy nodes, which were created upon Jelastic-managed certified stack templates, the sufficient level of controllability is ensured with a set of additional intentionally allowed commands.
  * The full [list of terminal commands](<http://www.linfo.org/command_index.html>) with all the appropriate options description you can find at the dedicated websites, similar to the linked above. In this guide we’ll consider a number of the most common commands to give you insights on the basics of operating with containers via the SSH protocol.

## Navigation through Remote Container File System

Bagian ini lebih ditujukan untuk pemula daripada pengembang rata-rata, jadi sebagian besar dari Anda mungkin dapat melewati ini dan melanjutkan ke operasi yang lebih kompleks - tetapi kami percaya ini tetap layak untuk disebutkan sebelum melangkah lebih jauh.

Setelah Anda memasuki container yang diperlukan melalui konsol, Anda akan masuk ke direktori rumah server secara default, yang biasanya didedikasikan untuk menyimpan data dan konfigurasi kustom Anda. Untuk navigasi antara folder, digunakan perintah **_cd_**, dengan argumen yang tersedia berikut:

  * `{directory_path}` \- _baik nama folder yang ada di dalam (di mana beberapa level bersarang yang dipisahkan garis miring dapat ditentukan) atau jalur lengkap ke direktori yang diperlukan relatif terhadap root container

  * `..` \- untuk menavigasi satu level ke atas dalam pohon file

  * `~` \- untuk langsung beralih ke direktori kerja Anda (server home) dari lokasi mana pun

  * `/` \- untuk langsung beralih ke direktori root container

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-3.png" alt="Tomcat Option" width="60%"/>

Sebagai hasilnya, string ungu di sebelah nama host container akan berubah, menunjukkan lokasi Anda saat ini.

**Tip:** Jika Anda baru mengenal runtime stack yang dijalankan oleh instansi Anda, kemungkinan besar Anda ingin menjelajahi struktur internalnya terlebih dahulu (yaitu pohon file & direktori, file konfigurasi yang tersedia, dll.). Cara paling nyaman untuk mencapai ini adalah dengan menggunakan GUI [File Manager](<https://docs.dewacloud.com/configuration-file-manager/?utm_source=blog-ssh-to-container>) bawaan Jelastic, yang tersedia dengan mengklik tombol **Config** di sebelah server yang diperlukan pada panel pengembang Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-4.png" alt="Application Servers" width="80%"/>

Pohon file yang sesuai akan ditampilkan di tab khusus di bawah.

1\. Untuk membuat file atau folder baru, jalankan perintah berikut:

  * `touch [path-to/]{file}` -_ untuk membuat file baru

  * `mkdir [path-to/]{dir}` \- _untuk membuat folder baru

_dimana_

`{file}` dan `{dir}` \- nama file atau folder yang disukai (jika dibuat di direktori saat ini)

`[path-to/]` \- parameter opsional jika item baru ini harus ditempatkan di lokasi lain.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-5.png" alt="Tomcat Project" width="70%"/>

2\. Untuk memastikan bahwa file dan folder yang telah kami tentukan di atas benar-benar dibuat, ambil daftar file dan direktori yang terdiri di lokasi saat ini dengan perintah berikut:

```
ls
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-6.png" alt="Out of memory error" width="100%"/>

3\. Di antara beberapa perintah paling umum yang dimaksudkan untuk manajemen file, adalah:

  * [**_cat_**](<http://www.linfo.org/cat.html>) \- digunakan untuk beroperasi dengan file teks; tergantung pada argumen yang dinyatakan, memungkinkan untuk melihat, menggabungkan, dan menduplikasi isi file
  * **_[cp](<http://www.linfo.org/cp.html>) \- _**untuk menyalin file dan direktori
  * [**_locate_**](<http://www.linfo.org/locate.html>) \- untuk menemukan file atau direktori yang diperlukan dalam server berdasarkan namanya (atau sebagian darinya)
  * [**_mv_**](<http://www.linfo.org/mv.html>) \- untuk memindahkan dan/atau mengganti nama file dan direktori
  * **_[pwd](<http://www.linfo.org/pwd.html>) \- _**untuk menampilkan jalur lengkap ke direktori saat ini (relatif terhadap root container)**__**
  * **_[rm](<http://www.linfo.org/rm.html>) \- _**untuk menghapus file atau direktori yang ditentukan

Sekarang, mari kita pertimbangkan kemungkinan shell default untuk memantau dan mengelola metrik node Anda, konsumsi sumber dayanya, proses yang berjalan di dalamnya, dan lain-lain.

## Commands to View Server System Information

1\. Untuk mendapatkan ringkasan singkat tentang keadaan container saat ini dan pastikan bahwa, misalnya, tidak ada pihak jahat yang mempengaruhi kinerja dan/atau operasionalnya, gunakan perintah `w`:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-7.png" alt="Web SSH Jelastic" width="70%"/>

Output yang diterima akan memberikan Anda beberapa informasi umum sistem dalam header (yaitu - cap waktu sistem saat ini, waktu operasi instansi, jumlah pengguna yang masuk dan jumlah rata-rata proses aktif selama 1/5/15 menit terakhir) dan detail tentang pengguna yang terhubung di bawah (nama mereka, tipe terminal, IP koneksi sumber, waktu login, statistik tentang aktivitas terakhir, dan nama dari proses yang aktif saat ini, yang dijalankan atas nama).

**Tip:** Karena spesifikasi implementasi shell asli, output perintah **_w_** tidak mencakup informasi tentang pengguna, yang terhubung melalui terminal emulator.

2\. Semua statistik penggunaan RAM server disimpan dalam file **_/proc/meminfo_**. Untuk meninjau isinya, gunakan perintah **_cat_** yang disebutkan di atas:

**_cat_** **_/proc/meminfo_**

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-8.png" alt="Tomcat Memory Info" width="60%"/>

Di sini, Anda dapat memeriksa data seperti total memori yang dialokasikan (**_MemTotal_**), memori yang tidak digunakan (**_MemFree_**), memori yang digunakan sebagai cache (**_Cached_**), dan lainnya.

3\. Untuk menampilkan data perangkat lunak dan perangkat keras dasar container, jalankan baris berikut:

```bash
uname -a
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-9.png" alt="linux node ssh" width="100%"/>

Di sini Anda dapat melihat informasi tentang kernel server (nama, versi, tanggal rilis), nama host node, jenis CPU, OS, dll.

## How to Manage Container Processes Remotely via Terminal

1\. Saat terhubung melalui SSH, Anda dapat memantau semua proses yang berjalan di dalam container dengan perintah **_top_**:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-10.png" alt="web ssh tasks" width="80%"/>

Di sini, informasi diperbarui secara real-time, menampilkan info tentang semua proses pengguna (termasuk yang sistem).

Tekan `Ctrl + C` untuk menghentikan eksekusi perintah dan kembali ke mode input konsol.

2\. Untuk menampilkan hanya proses aktif pengguna Anda, ketikkan **_ps_** dan jalankan perintah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-11.png" alt="web ssh tomcat" width="80%"/>

3\. Perintah lain yang berguna adalah **_kill_**, yang memungkinkan menghentikan proses yang sedang berjalan, ditandai dengan `{pid}`-nya sebagai argumen (identifier proses yang diperlukan dapat ditemukan dalam output perintah sebelumnya):

```bash
kill {pid}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-12.png" alt="Tomcat My Project" width="80%"/>

Seperti yang dapat Anda lihat, proses _run_, ditampilkan di layar dalam langkah kedua dari bagian ini, dihentikan karena tidak tercantum di antara proses aktif sekarang.

## Operating Application Archives via SSH Console

Anda dapat mengambil file yang diperlukan dari Internet (misalnya, arsip aplikasi Anda) langsung melalui konsol, untuk menyimpannya dan/atau kemudian menerapkannya di server Anda.

1\. Perintah `wget` memungkinkan untuk mengunduh file dengan `{link}` yang ditentukan:

```bash
wget {link}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-13.png" alt="Tomcat Apache" width="100%"/>

2\. Kemudian, Anda dapat **_unzip_** arsip yang diunduh dengan perintah yang sama:

```bash
unzip {archive}
```

dimana `{archive}` adalah jalur ke paket terkompresi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-14.png" alt="Tomcat Archive" width="80%"/>

Sebagai hasilnya, semua file yang diekstraksi akan ditempatkan ke folder dengan nama yang sama (setelah arsip) di dalam direktori saat ini.

## Setting Custom Server Variables via SSH

1\. Daftar variabel lingkungan default untuk setiap container dapat dilihat dalam file **_.bash_profile_**, yang terletak di direktori rumah container. Jadi untuk memeriksa mereka, pastikan Anda telah sampai ke direktori container yang tepat dan jalankan perintah berikut:

```bash
cat .bash_profile
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-15.png" alt="Command History" width="80%"/>

2\. File **_.bash_profile_** tidak dapat diedit, jadi jika Anda perlu menambahkan variabel Anda sendiri, tuliskan ke file **_.bashrc_** dalam folder yang sama (cukup buat, jika tidak ada). Untuk melakukan ini, gunakan editor teks yang diinginkan (misalnya, **_vi_**):

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-16.png" alt="Web SSH" width="60%"/>

3\. Di sini, variabel baru harus ditentukan dalam format berikut:

```bash
export {VAR_NAME}={VAR_VALUE}
```

di mana:

  * `{VAR_NAME}` \- nama variabel yang ingin Anda buat
  * `{VAR_VALUE}` \- nilai untuk variabel yang sesuai

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-17.png" alt="Export Value" width="60%"/>

**Note:** File **_.bashrc_** dibaca selama inisiasi bash sehingga perubahan akan diterapkan secara otomatis saat memulai semua sesi pengguna berikutnya. Tapi jika Anda perlu menerapkan perubahan yang dilakukan segera, jalankan perintah **_bash_** untuk memulai ulang shell.

4\. Untuk memeriksa apakah variabel khusus Anda berhasil diterapkan, jalankan perintah berikut:

```bash
**_echo_** _$_**_{VAR_NAME}_**
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/ssh/ssh-management/ssh-management-18.png" alt="Tomcat Value" width="70%"/>

Dalam tanggapan konsol, Anda harus melihat string `{VAR_VALUE}` yang mirip dengan nilai yang baru saja Anda tetapkan ke `${VAR_NAME}` variabel di file **_.bashrc_**.

## Specifics of Certified Jelastic Containers Remote Management

Pada Jelastic PaaS, ada 2 jenis templat [software stack](<https://docs.dewacloud.com/software-stacks-versions/?utm_source=blog-ssh-to-container>), yang digunakan sebagai dasar ketika membuat setiap container:

  * **_dockerized_** \- model template terpadu berdasarkan [dukungan standar Docker asli](<https://docs.dewacloud.com/container-types/?utm_source=blog-ssh-to-container>) dengan prinsip manajemen dan fungsionalitas container yang umum untuk semua jenis server (yaitu terlepas dari apakah itu menghitung node, atau server basis data, atau instansi caching, dll).
Saat terhubung ke server semacam itu melalui SSH, Anda secara otomatis mendapatkan kontrol penuh atas instansi dengan hak istimewa root yang diberikan dan dapat melakukan operasi yang diperlukan di dalam container.

  * **_certified_** software templates are based on native stack implementation, adapted by our team according to platform specifics. 

Saat memasuki server semacam itu melalui SSH, Anda masuk sebagai pengguna server default. Untuk memberikan cukup kemungkinan untuk pengelolaan container yang efektif, kami telah membuat beberapa opsi tambahan tersedia untuk dijalankan di bawah akun pengguna reguler:

  * `sudo sbin/service {service_name} {start|stop|restart|condrestart|status|reload|upgrade|help}` \- a set of commands to operate the main server process, defined with the  _\{service_name\}_ placeholder (where, depending on a server used, the possible values are:  _jetty, mysql, tomcat, memcached, mongod, postgresql, couchdb, glassfish-domain1, nginx, php-fpm_ and  _httpd_)
  * `sudo usr/bin/jem firewall {fwstart|fwstop}` \- untuk menjalankan/menghentikan firewall container masing-masing
  * `sudo usr/bin/jem nscd` \- to control the [name-service caching](<https://linux.die.net/man/8/nscd>) daemon, which stores records for the most common name server requests (like _passwd, hosts, group_ , etc)
  * `sudo sbin/service rpcbind.service` \- to operate with the [RPC bind](<https://linux.die.net/man/8/rpcbind>) service, used to map user-readable names to program numbers that handle incoming RPC calls

Sebagian besar dari perintah di atas, meskipun dijalankan dalam mode _sudo_, tidak memerlukan memasukkan kata sandi admin root server. Ini memungkinkan Anda memanfaatkan semua fungsi container yang diperlukan, penting untuk kerja aplikasi Anda yang tepat, bahkan dengan izin akun reguler.

## Conclusion

Sekarang, karena Anda tahu semua dasar-dasar yang diperlukan untuk mengelola container Anda melalui konsol, Anda dapat memanfaatkan lebih banyak fleksibilitas PaaS saat menjalankan aplikasi Anda. [Get started with Jelastic Multi-Cloud](<https://jelastic.cloud/?utm_source=blog-ssh-to-container>) at one of the certified service providers worldwide.
