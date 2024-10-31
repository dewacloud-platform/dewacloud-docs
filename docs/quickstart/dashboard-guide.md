---
sidebar_position: 2
slug: /dashboard-guide
title: Dashboard Guide
---

# Panduan Dashboard

Panduan berikut akan memberikan informasi yang diperlukan mengenai penggunaan dashboard platform dan membantu Anda mengenal berbagai kemungkinan yang ditawarkan.

Untuk memulai, Anda bisa melihat video penjelasan singkat di bawah ini untuk mendapatkan informasi tentang fungsi utama yang tersedia melalui UI platform yang intuitif:

<!-- ![Fleksibilitas Pengelolaan Aplikasi di Dewacloud](https://youtu.be/z4DuDtYkUJU?si=8vQdOz3aiqrHL9fJ) -->
<div className="video-responsive">
<iframe max-width="100%" height="500" src="https://www.youtube.com/embed/z4DuDtYkUJU?si=x75IZ-eCvpS1zgB0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Untuk kenalan lebih baik, kami merekomendasikan membuat akun gratis (jika Anda belum mempunyainya) pada [Dewacloud](https://www.dewacloud.com/) dan mengikuti langkah-langkah panduan.

:::tip
Tutorial pendek dan interaktif tersedia langsung di dalam dashboard melalui opsi Help > Tutorial di sudut kanan atas.
:::

Mari mulai eksplorasi mendetail dari dashboard platform:

- [Creating and Managing Environments](#creating-and-managing-environments)
- [Function Icons for Environments](#function-icons-for-environments)
- [Environment Settings](#environment-settings)
- [Function Icons for Each Instance](#function-icons-for-each-instance)
- [Import](#import)
- [Marketplace](#marketplace)
- [Environment Groups](#environment-groups)
- [Dashboard Search](#dashboard-search)
- [Deployment Manager](#deployment-manager)
- [Tasks Panel](#tasks-panel)
- [User Settings](#user-settings)
- [Upgrade Trial Account & Balance](#upgrade-trial-account--balance)
- [Help and Account Options](#help-and-account-options)

## Creating and Managing Environments{#creating-and-managing-environments}

1. Klik **New Environment** di pojok kiri atas dari dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/01-paas-main-buttons.png" alt="PaaS main buttons" width="75%"/>

2. **Topology Wizard** akan terbuka, di mana Anda bisa sepenuhnya menyesuaikan pengaturan environment Anda.

Kemungkinan penuh dari jendela ini dijelaskan di artikel [Setting Up Environment](https://docs.dewacloud.com/docs/setting-up-environment/).

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/02-env-topology-wizard.png" alt="environment topology wizard" max-width="100%"/>

Setelah menyelesaikan konfigurasi, ketik _Environment Name_ Anda, dan klik tombol **Create**.

3. Semua environment Anda akan tampil di panel tengah dari dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/03-environment-in-the-dashboard.png" alt="environment topology wizard" max-width="100%"/>

Anda dapat menemukan informasi berikut pada kolom:

- **Name** - mencakup nama (atau [alias](https://docs.dewacloud.com/docs/environment-aliases/) jika ditentukan) dari environment dan domennya. Dengan menggunakan ikon _arrow_ sebelum nama environment, Anda bisa memperluas daftar node yang ada di dalamnya.
- **Status** - menunjukkan status terkini dari environment Anda (_Running_, _Sleeping_, _Stopped_, _Creating_, _Launching_, _Stopping_, _Cloning_, _Redeploying_, _Exporting_, _Installing_, _Migrating_, _Deleting_).
- **Tags** - menampilkan _[Environment Groups](#environment-groups)_ dan [region](https://docs.dewacloud.com/docs/environment-regions/) dari environment ini, versi (_tags_) dari container, dan nama dari _project_ yang dideploy.
- **Usage** - menunjukkan beban saat ini (misal: penggunaan cloudlets dan ruang disk). Anda juga dapat menemukan tombol _**Billing History**_ ![billing history icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/04-billing-history-icon.png) di sini, yang mengarah ke tab terpisah dengan [statistik pengeluaran Anda](https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history) pada environment saat ini.

## Function Icons for Environments{#function-icons-for-environments}

Arahkan kursor ke environment yang berjalan untuk melihat beberapa ikon untuk pengelolaannya: _Set Alias_, _Region_, _Open in Browser_, _Settings_, _Change Environment Topology_, _Clone Environment_, _Start/Stop_, _Delete Environment_, _Add/Edit Env Groups_.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/05-environment-icons.png" alt="environment icons" max-width="100%"/>

1. Gunakan ikon **Set Alias** ![set alias icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/06-set-alias-icon.png) untuk memberikan [nama alternatif environment](https://www.virtuozzo.com/application-platform-docs/environment-aliases/) (domain tetap tidak berubah).

2. Klik ikon **Open in Browser** ![open in browser icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/07-open-in-browser-icon.png) untuk membuka environment dalam tab baru di browser.

:::note
Opsi ini mungkin tidak tersedia jika environment Anda tidak termasuk server aplikasi dan layer load balancer.
:::

3. Klik pada **Settings** ![environment settings icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/08-environment-settings-icon.png) untuk membuka tab terpisah dengan berbagai [configuration panels](#environment-settings), cek deskripsi rinci di bagian yang ditautkan.

4. Untuk **Change Environment Topology**, pilih opsi yang diperlukan ![change environment topology icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/09-change-environment-topology-icon.png). Lakukan perubahan yang diperlukan dalam dialog _Topology Wizard_ yang muncul dan klik **Apply** untuk menyerahkannya.

5. Untuk **Clone Environment**, klik pada tombol ![clone environment icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/10-clone-environment-icon.png) yang sesuai. Dalam bingkai yang terbuka, tentukan nama untuk environment baru dan klik **Clone**.

Informasi lebih lanjut:

- [Clone Environment](https://docs.dewacloud.com/docs/clone-environment/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/application-lifecycle/)

6. Untuk mengubah status environment, gunakan tombol **Start** ![start environment icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/11-start-environment-icon.png) dan **Stop** ![stop environment icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/12-stop-environment-icon.png).

:::note
Saat environment dihentikan, hanya tombol Settings, Clone Environment, Start, dan Delete Environment yang tersedia untuknya. Juga, tab Setting untuk environment tersebut hanya akan berisi empat opsi aktif: Collaboration, Change Owner, Migration, dan Info.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/13-stopped-environment-settings.png" alt="stopped environment settings" width="40%"/>

:::

7. Untuk **Delete Environment**, klik ikon ![delete environment icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/14-delete-environment-icon.png) berikut dan konfirmasikan tindakan dengan memasukkan kata sandi Anda.

8. Arahkan kursor ke kolom _**Tags**_ untuk mengelola [grup dari environment ini](https://www.virtuozzo.com/application-platform-docs/#environment-groups) dengan tombol **Add/Edit Env Group** (![add env group icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/15-add-env-group-icon.png) atau ![edit env groups icon](https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/16-edit-env-groups-icon.png) masing-masing).

Untuk platform dengan beberapa [regions](https://docs.dewacloud.com/docs/environment-regions/), setiap environment memiliki ikon region khusus di kolom **Tags**. Ini memungkinkan Anda memisahkan instance yang dihosting di server perangkat keras yang berbeda secara visual, dan dengan mengkliknya, hanya menampilkan environment di region yang sesuai.

## Environment Settings{#environment-settings}

Terdapat dua belas opsi di tab environment _**Settings**_: _Custom Domains_, _Custom SSL_, _SSH Access_, _Endpoints_, _Firewall_, _Load Alerts_, _Auto Horizontal Scaling_, _Collaboration_, _Change Owner_, _Migration_, _Export_, dan _Info_.

1. Pilih **Custom Domains** untuk mengakses subopsi berikut: _Domain Binding_ dan _Swap Domains_.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/17-custom-domains-settings.png" alt="custom domains settings" max-width="100%"/>

Informasi lebih lanjut:

- [Custom Domain Name](https://docs.dewacloud.com/docs/custom-domains/)
- [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/application-lifecycle/)

2. Pilih opsi **Custom SSL** dan unggah file yang diperlukan untuk menerapkan sertifikat SSL kustom Anda.

**Catatan:** Fitur ini hanya dapat dikonfigurasi untuk server aplikasi dan load balancer yang telah tersertifikasi dengan [public IP](https://docs.dewacloud.com/docs/public-ip/) yang terpasang.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/18-custom-ssl-settings.png" alt="custom ssl settings" max-width="100%"/>

Informasi lebih lanjut:

- [Self-Signed Custom SSL](https://docs.dewacloud.com/docs/self-signed-ssl/)
- [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl/)

3. Dalam bagian **SSH Access**, Anda dapat melihat tab **Public Keys**, **SSH Connection**, dan **SFTP / Direct SSH Access**. Yang pertama memungkinkan pengelolaan [public SSH keys](https://www.virtuozzo.com/application-platform-docs/ssh-add-key/). Yang kedua menunjukkan cara mengakses environment Anda (baik melalui _SSH Gate_ atau _Web SSH_). Yang ketiga menyediakan rincian tentang koneksi melalui protokol SFTP/FISH.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/19-ssh-access-settings.png" alt="ssh access settings" max-width="100%"/>

Informasi lebih lanjut:

- [SSH Gate](https://docs.dewacloud.com/docs/ssh-gate/)
- [Add SSH Key](https://docs.dewacloud.com/docs/ssh-add-key/)
- [SSH Access via Web Browser](https://docs.dewacloud.com/docs/web-ssh-client/)
- [SSH Access via Local Client](https://docs.dewacloud.com/docs/ssh-gate-access/)
- [SSH Protocols](https://docs.dewacloud.com/docs/ssh-protocols/)

4. Di dalam bagian **Endpoints**, Anda dapat mengelola pemetaan port TCP/UDP dari container Anda untuk memastikan kolaborasi mereka dengan sumber daya eksternal melalui koneksi langsung.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/20-endpoints-settings.png" alt="endpoints settings" max-width="100%"/>

Informasi lebih lanjut: [Endpoints](https://www.virtuozzo.com/application-platform-docs/endpoints/)

5. Bagian **Firewall** memungkinkan pengaturan **Inbound** dan **Outbound Rules** untuk mengelola akses ke container Anda. Aturan ini memungkinkan Anda untuk secara eksplisit mendefinisikan koneksi mana yang harus diterima dan mana yang diblokir.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/21-firewall-settings.png" alt="firewall settings" max-width="100%"/>

Informasi lebih lanjut: [Container Firewall](https://www.virtuozzo.com/application-platform-docs/container-firewall/)

6. Gunakan **Load Alerts** untuk mengatur pemicu baru (atau sesuaikan yang default) untuk menerima pemberitahuan email yang sesuai jika penggunaan sumber daya yang ditentukan melebihi batas yang ditetapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/22-load-alerts-settings.png" alt="load alerts settings" max-width="100%"/>

Tab **History** mencantumkan semua peringatan yang dipicu dalam environment dengan rinciannya.

Informasi lebih lanjut: [Load Alerts](https://www.virtuozzo.com/application-platform-docs/load-alerts/)

7. Dengan opsi **Auto Horizontal Scaling**, Anda dapat mengkonfigurasi pemicu untuk mengendalikan jumlah container dalam sebuah layer (kecuali node build _Maven_). Kondisi scaling dapat ditentukan berdasarkan konsumsi _CPU_, _Memory_, _Network_, _Disk I/O_, dan _Disk IOPS_.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/23-auto-horizontal-scaling-settings.png" alt="auto horizontal scaling settings" max-width="100%"/>

Beralih ke tab History untuk melihat daftar semua operasi scaling yang dilakukan oleh platform karena pemicu yang dikonfigurasikan.

Informasi lebih lanjut: [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)

8. Dalam bagian **Collaboration**, Anda dapat melihat dan mengelola daftar akun yang memiliki akses ke environment saat ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/24-collaboration-settings.png" alt="collaboration settings" width="70%"/>

Jika Anda perlu memberikan akses kepada pengguna lain, klik **Add** dan isi bidang _Email_. Untuk memberikan izin _Change Topology / SSH Access_, centang opsi yang sesuai. Klik **Save** untuk menerapkan perubahan.

Informasi lebih lanjut: [Account Collaboration](https://www.virtuozzo.com/application-platform-docs/account-collaboration/)

9. Klik **Change Owner** untuk mentransfer environment ke akun pengguna lain di dalam batasan platform tunggal.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/25-change-owner-settings.png" alt="change owner settings" max-width="100%"/>

Informasi lebih lanjut: [Environment Transferring](https://docs.dewacloud.com/docs/environment-transferring/)

10. Pilih **Migration** untuk memindahkan environment Anda ke perangkat keras lain ([region](https://docs.dewacloud.com/docs/environment-regions/)).

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/26-migration-settings.png" alt="migration settings" max-width="100%"/>

**Catatan:** Ketersediaan opsi ini, serta akses ke setiap region environment tertentu, tergantung pada pengaturan penyedia hosting Anda.

Informasi lebih lanjut: [Environment Migration between Regions](https://docs.dewacloud.com/docs/environment-regions-migration/)

11. Pilih **Export** untuk mengemas semua pengaturan dan data environment Anda ke dalam satu file yang dapat diunduh. Selanjutnya, file ini dapat dipulihkan di platform penyedia hosting lain, menciptakan salinan environment yang identik.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/27-export-settings.png" alt="export settings" max-width="100%"/>

**Catatan:** Saat ini, container berbasis _Windows_, _Storage_, _Elastic VPS_, _Maven_, dan _Docker_ diekspor tanpa data di dalamnya. Dalam kasus seperti itu, Anda perlu mentransfer file dan konfigurasi yang diperlukan secara manual.

Informasi lebih lanjut:

- [Environment Export](https://docs.dewacloud.com/docs/environment-export/)
- [Environment Import](https://docs.dewacloud.com/docs/environment-import/)

12. Beralih ke bagian **Info** untuk melihat informasi tambahan tentang _Domain_ environment, _Owner_ dan _Creator_ (dapat berbeda karena fitur [account collaboration](https://www.virtuozzo.com/application-platform-docs/account-collaboration/)),
_[Region](https://docs.dewacloud.com/docs/environment-regions/)_, dan _Creation Date_.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/28-info-settings.png" alt="info settings" max-width="100%"/>

Itulah semua pengaturan environment.

## Function Icons for Each Instance{#function-icons-for-each-instance}

Klik pada environment di dashboard untuk melihat daftar [layers](https://docs.dewacloud.com/docs/concept-and-terminology/#layer) (load balancers, application servers, databases, dll.). Anda dapat lebih lanjut memperluas kelompok node ini untuk melihat dan mengelola container terpisah, konteks yang terdeploy, dan IP alamat yang terlampir.

Arahkan kursor ke layer atau container tertentu untuk melihat ikon pop-up dengan fungsi berbeda.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/29-node-icons.png" alt="node icons" max-width="100%"/>

Gunakan opsi ini untuk melakukan tindakan berikut:

- Klik tombol **Set Alias** untuk mengkonfigurasi [nama alternatif](https://docs.dewacloud.com/docs/environment-aliases/) untuk layer/node Anda (misalnya, untuk mendefinisikan primary dan secondary server dalam cluster DB).
- Gunakan **Open in Browser** untuk mengakses node dari layer dalam tab baru di browser (dapat tersembunyi untuk beberapa stacks, misal: _Shared Storage_ atau node build _Maven_).
- Pilih opsi **Restart Node(s)** untuk me-restart layanan yang sesuai di dalam container tertentu atau semua container dari layer.
- Pilih opsi **Config** untuk membuka [configuration file manager](https://docs.dewacloud.com/docs/configuration-file-manager/) yang dapat menyesuaikan node dengan [mounting data](https://docs.dewacloud.com/docs/mount-points/), membuat/mengunggah file baru, dan memodifikasi/menghapus yang sudah ada.
- Pilih opsi **Log** untuk melihat log file untuk node dari layer. Daftar [log file](https://docs.dewacloud.com/docs/log-files/) berbeda berdasarkan instance yang dipilih.
- Klik tombol **Statistics** untuk [melacak data](https://docs.dewacloud.com/docs/statistics-monitoring/) pada konsumsi CPU, RAM, Network, ruang Disk, dan IOPS untuk node terpisah atau satu set node secara real-time.
- Pilih opsi **Web SSH** untuk terhubung ke [container melalui SSH](https://docs.dewacloud.com/docs/web-ssh-client/) protokol langsung di browser.
- Gunakan opsi **Redeploy Container(s)** untuk [memperbarui node](https://docs.dewacloud.com/docs/container-redeploy/) ke tag (versi) yang diinginkan.
- Beberapa node dapat memiliki opsi tambahan, seperti **Add-Ons** (untuk menginstal modul pluggable) atau **Remote Desktop** (untuk [mengelola seluruh node berbasis Windows](https://docs.dewacloud.com/docs/win-rdp-access/)).
- Daftar **Additionally** memungkinkan Anda mengonfigurasi [pengaturan container](https://docs.dewacloud.com/docs/container-configuration/) (_Variables_, _Links_, _Volumes_, _CMD / Entry Point_), melihat rincian _SFTP / Direct SSH Access_, dan mengakses fungsionalitas _Scaling Nodes_. Juga, tergantung pada node, itu bisa berisi opsi lain (misalnya, _Reset Password_ atau _Admin Panel Login_).

## Import{#import}

Di sebelah opsi **New Environment**, Anda dapat menemukan tombol **Import**. Ini memproses file _**.json**_, _**.jps**_, _**.cs**_, _**.yml**_, atau _**.yaml**_ yang diunggah untuk membuat baru atau memodifikasi environment yang sudah ada sesuai dengan pengaturan yang diberikan.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/30-paas-main-buttons.png" alt="PaaS main buttons" width="70%"/>



:::tip
Secara khusus, fitur ini dapat digunakan untuk membuat salinan environment dari instalasi PaaS lain (dengan mengekspornya pada satu platform dan mengimpornya di yang lain).
:::

Dalam bingkai **Import** yang terbuka, Anda akan melihat tiga tab berikut (dan tautan _[Examples](https://github.com/jelastic-jps)_ ke Koleksi JPS dengan berbagai solusi siap pakai):

- _**Local File**_ - pilih file yang disimpan secara lokal (melalui tombol **Browse**), yang harus diunggah dan dieksekusi pada platform
- _**URL**_ - berikan tautan langsung ke file manifest yang diperlukan
- _**JPS**_ - editor bawaan JSON/YAML dapat digunakan untuk memasukkan dan mengedit kode Anda sebelum deployment (atau bahkan menulis paket Anda dari awal)

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/31-import-dialog-window.png" alt="import dialog window" max-width="100%"/>

Untuk ikhtisar terperinci, periksa dokumen [Environment Import](https://docs.dewacloud.com/docs/environment-import/).

## Marketplace{#marketplace}

Setelah mengklik opsi **Marketplace** terakhir di bagian atas dashboard, Anda akan mengakses jendela terpisah dengan daftar solusi yang sudah dikemas untuk instalasi otomatis.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/30-paas-main-buttons.png" alt="PaaS main buttons" width="70%"/>

Paket ini dibagi menjadi dua kelompok: _**Applications**_ untuk membuat environment baru dan _**Add-Ons**_ untuk menyesuaikan yang sudah ada. Anda dapat mencari solusi yang diperlukan menggunakan bidang yang sesuai di sudut kiri atas atau daftar terurut di menu sisi kiri.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/33-marketplace-dialog-window.png" alt="marketplace dialog window" max-width="100%"/>

Setelah Anda menemukan paket yang diinginkan, klik **Install** untuk itu, dan ikuti langkah-langkah dalam bingkai instalasi yang muncul.

Periksa artikel [Marketplace](https://www.virtuozzo.com/application-platform-docs/marketplace/) yang sesuai untuk ikhtisar rinci.

## Environment Groups{#environment-groups}

Platform ini menyediakan kemungkinan untuk membuat **[Environment Groups](https://docs.dewacloud.com/docs/environment-groups/)**, yang membantu mengkategorikan environment Anda. Misalnya, administrasi beberapa proyek menjadi lebih sederhana ketika masing-masing diorganisasi ke dalam grup environment khusus. Jika perlu, Anda dapat menerapkan pembagian lebih lanjut dengan membuat subgroup, misalnya _development/testing/production_, _servers/databases/storages_, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/34-environment-groups.png" alt="environment groups" width="50%"/>


:::tip
Biasanya, environment pada akun yang sama dapat diakses satu sama lain melalui jaringan internal platform. Namun, jika diperlukan, Anda dapat mengaktifkan isolasi jaringan untuk grup guna memastikan bahwa environment di dalam tidak dapat diakses dari luar (jaringan internal saja).
:::

Informasi lebih lanjut:

- [Group Creation](https://docs.dewacloud.com/docs/environment-groups-creation/)
- [Navigation Across Groups](https://docs.dewacloud.com/docs/environment-groups-navigation/)
- [Group Management](https://docs.dewacloud.com/docs/environment-groups-management/)

## Dashboard Search{#dashboard-search}

Platform ini menyediakan fungsi pencarian bawaan di dalam dashboard. Fungsi utama sangat sederhana - akses formulir _Search_ di sudut kanan atas (atau gunakan pintasan **Ctrl+F** / **Cmd+F**), ketikkan istilah pencarian, dan tekan **Enter**. Misalnya, Anda dapat menemukan container berdasarkan IP/ID-nya; mencari proyek/environment tertentu yang diterapkan; menemukan dan menerapkan aplikasi dari [platform Marketplace](https://www.virtuozzo.com/application-platform-docs/marketplace/).

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/35-dashboard-search.png" alt="dashboard search" width="60%"/>

Mesin pencarian yang diimplementasikan dapat dipersonalisasikan untuk memenuhi kebutuhan spesifik Anda dan memberikan hasil paling akurat untuk permintaan Anda. Di antara opsi utama:

- _karakter khusus_ untuk ekspresi pencarian (misal: awalan “_**-**_” untuk mengecualikan istilah atau _"*****"_ wildcard)
- _sumber pencarian_ (baik seluruh akun atau [grup environment](https://docs.dewacloud.com/docs/environment-groups/) saat ini)
- _filter kategori_ untuk mencari di antara entitas yang dipilih (misal: mengecualikan paket Marketplace atau mencari hanya untuk IP)

Detail tambahan dapat ditemukan di petunjuk _help_ untuk formulir pencarian (dilingkari dalam gambar di atas).

## Deployment Manager{#deployment-manager}

**Deployment Manager** terletak di bagian bawah dashboard. Ini menyimpan aplikasi untuk mengotomatisasi deployment mereka ke environment Anda. Ada dua subbagian di dalam tab:

- _**[Archive](https://docs.dewacloud.com/docs/deployment-manager/#application-archives)**_ - menyimpan paket aplikasi itu sendiri, **Upload** dari mesin lokal Anda (_Local File_) atau melalui tautan eksternal (_URL_)
- _**[Git / SVN](https://docs.dewacloud.com/docs/deployment-manager/#git--svn-projects)**_ - menyimpan kredensial akses ke proyek Anda di repositori Git / SVN jarak jauh; klik tombol **Add Repo** dan tentukan detail yang diperlukan

Setelah paket Anda ditambahkan ke Deployment Manager, paket itu dapat [deploy secara otomatis](https://docs.dewacloud.com/docs/deployment-guide/) ke environment yang diperlukan dengan mengikuti panduan yang ditautkan.

:::note
Jenis deployment VCS untuk server aplikasi Java dilakukan dengan bantuan node build Maven, proses deployment .NET untuk server aplikasi IIS berbasis Windows berbeda dari aliran standar.
:::

## Tasks Panel{#tasks-panel}

Panel **Tasks** ditempatkan di bagian bawah dashboard dan berisi data hidup dan historis tentang tugas yang dilakukan atau telah dilakukan oleh platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/36-dashboard-tasks-panel.png" alt="dashboard tasks panel" max-width="100%"/>

Data berikut disediakan untuk setiap catatan:

- **Status** - menunjukkan status dari operasi: titik _spinner_ (sedang berlangsung), _green_ (sukses) atau _red_ (error)
:::tip
Jika seorang kolaborator bekerja di akun, ikon untuk tindakan yang sesuai akan disesuaikan secara otomatis untuk mempermudah analisis tugas. Arahkan kursor ke ikon khusus seperti itu untuk melihat alamat email akun yang bersangkutan.
<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/37-collaborator-actions-in-tasks-panel.png" alt="search active log in tasks panel" max-width="100%"/>
:::

- **Time** - menunjukkan waktu mulai dari operasi yang bersangkutan dengan catatan terbaru ditampilkan di bagian atas tab (selain itu, semua tugas dikelompokkan berdasarkan hari)
- **Environment** - menampilkan nama environment di mana tindakan dilakukan (atau dash “**-**” jika tidak ada target environment)
- **Task** - memberikan deskripsi operasi atau error
:::tip
Anda dapat memperluas tugas untuk melihat parameter tindakan dan respons server (setelah selesai). Konten dari bagian ini dapat dengan mudah disalin dengan tombol yang sesuai yang muncul saat mengarahkan kursor. Error terbaru dapat dilaporkan langsung ke Tim Dukungan menggunakan ikon khusus di sebelah operasi yang gagal.
<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/38-send-error-report-via-tasks-panel.png" alt="search active log in tasks panel" max-width="100%"/>
:::

- **Duration** - menunjukkan waktu eksekusi untuk tugas (ditampilkan setelah selesai)

Jika Anda perlu melihat daftar lengkap dari tindakan yang dilakukan pada akun (misalnya, tidak hanya yang terbaru), beralih ke tab _**Active Log**_ (ikon kaca pembesar). Di sini, Anda disediakan dengan opsi pencarian dan filter lanjutan untuk dengan cepat menemukan tugas yang diperlukan:

- **search** dilakukan dengan parameter dan respons server (misalnya, data setelah memperluas operasi) bukan deskripsi tindakan
- Anda dapat mengatur **date range** sebagai _1/6/24 hour(s)_ terakhir, _current/previous week_, _current month_, atau menyediakan periode _custom_ Anda
- centang **Errors only** untuk menyembunyikan semua operasi yang berhasil dieksekusi

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/39-search-active-log-in-tasks-panel.png" alt="search active log in tasks panel" max-width="100%"/>

Menggunakan panel **Tasks**, Anda dapat selalu melacak aktivitas di akun Anda, serta memecahkan masalah.

## User Settings{#user-settings}

Klik tombol **Settings** di sudut kanan atas dashboard untuk mengakses konfigurasi _**User Settings**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/40-user-settings-button.png" alt="user settings button" width="60%"/>


Di sini, Anda dapat menemukan bagian berikut: _Account_, _Access Tokens_, _SSH Keys / SSH Access_, dan _Collaboration_.

1. Bagian _**Account**_ memungkinkan pengaturan [two-factor authentication](https://docs.dewacloud.com/docs/two-factor-authentication/) untuk akun Anda, serta mengubah kata sandi.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/41-account-user-settings.png" alt="account user settings" max-width="100%"/>

2. Di dalam tab _**Access Tokens**_, Anda dapat mengonfigurasi [personal access tokens](https://docs.dewacloud.com/docs/personal-access-tokens/) untuk akun Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/42-access-tokens-user-settings.png" alt="access tokens user settings" max-width="100%"/>

3. Poin _**SSH Keys**_ dan _**SSH Access**_ membuka bagian dengan empat sub-tab:

- **Public Keys** - menyimpan [public keys](https://docs.dewacloud.com/docs/ssh-add-key/) yang ditambahkan ke platform (diperlukan untuk akses jarak jauh melalui klien SSH lokal)
- **Private Keys** - mencantumkan [private keys](https://docs.dewacloud.com/docs/git-ssh/#add-private-ssh-key-to-platform-account) yang ditambahkan ke platform (diperlukan untuk akses ke repositori Git pribadi Anda melalui SSH)
- **SSH Connection** - menunjukkan langkah yang diperlukan untuk terhubung ke akun Anda melalui _[SSH Gate](https://docs.dewacloud.com/docs/ssh-gate-access/)_ dan memungkinkan akses ke node tertentu langsung di browser menggunakan _[Web SSH](https://docs.dewacloud.com/docs/web-ssh-client/)_
- **SFTP / Direct SSH Access** - menampilkan data koneksi untuk [protokol SFTP/FISH](https://docs.dewacloud.com/docs/ssh-protocols/)

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/43-ssh-keys-user-settings.png" alt="ssh keys user settings" max-width="100%"/>

4. Bagian _**Collaboration**_ terdiri dari dua opsi - **Shared by Me** dan **Shared with Me**. Yang pertama memungkinkan untuk berbagi environment Anda dengan pengguna lain di platform, sementara yang kedua mencantumkan kolaborasi di mana Anda adalah bagian dari.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/44-collaboration-user-settings.png" alt="collaboration user settings" max-width="100%"/>

Untuk ikhtisar terperinci tentang fitur [Account Collaboration](https://docs.dewacloud.com/docs/account-collaboration/), rujuk ke panduan yang ditautkan.

## Upgrade Trial Account & Balance{#upgrade-trial-account--balance}

Tergantung pada [jenis akun](https://www.virtuozzo.com/application-platform-docs/account-types/) (trial atau billing), baik bagian **Upgrade Account** atau **Balance** ditampilkan di bagian atas panel dashboard.

1. Jenis default untuk akun adalah _trial_, yang menyediakan periode hosting gratis (dibatasi oleh waktu atau uang bonus). Namun, biasanya dibatasi oleh jumlah sumber daya yang disediakan, environment/node yang diizinkan, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/45-upgrade-trial-account.png" alt="upgrade trial account" max-width="100%"/>

Perluas menu tarik-turun **Upgrade Account** untuk melihat opsi berikut:

- Gunakan tombol **Upgrade Account** untuk mendapatkan [akun yang sepenuhnya fungsional tanpa batasan](https://docs.dewacloud.com/docs/account-types/#billing).
- Opsi **Learn about Trial Limitations** membuka tab _[Account Limits](https://docs.dewacloud.com/docs/quotas-system/)_ yang sesuai di dalam bingkai _Quotas & Pricing_.
- Klik pada **Learn about Pricing** untuk dialihkan ke halaman dokumentasi dengan informasi tentang [model penetapan harga](https://docs.dewacloud.com/docs/pricing-model/).
- Pilih opsi **See statistics on recent resource usage** untuk membuka [sejarah penagihan](https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history) akun.

2. Akun _Billing_ tidak memiliki batasan apa pun tetapi dibebankan sesuai dengan harga penyedia hosting.

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/46-account-balance.png" alt="account balance" width="50%"/>

Klik tombol **Balance** untuk memperluas daftar opsi berikut:

- Klik pada **Refill Balance** untuk [mengirimkan pembayaran](https://docs.dewacloud.com/docs/upgrade-refill-account/).
- Klik pada item **Quotas & Pricing** untuk melihat bingkai [informasi](https://docs.dewacloud.com/docs/resource-consumption/#how-much-do-resources-cost) dengan satu set tab tentang platform _Regions_ (jika beberapa tersedia), _Pricing_, dan _Account Limits_.
- **Billing History** menunjukkan [pengeluaran akun](https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history) untuk periode yang ditentukan.
- Klik opsi **View Invoices** untuk pergi ke panel sistem penagihan eksternal dengan faktur akun, pesanan, pembayaran, dll.

## Help and Account Options{#help-and-account-options}

Dua bagian terakhir dari dashboard adalah **Help** dan **Account** (alamat email).

1. Menu tarik-turun _**Help**_ memberikan akses ke beberapa tautan berguna:

- **Contact Support** mengarahkan ke halaman dukungan pelanggan platform (berdasarkan pengaturan penyedia hosting, itu bisa tersedia hanya untuk pengguna penagihan)
- **Go to Community** adalah tautan ke komunitas online PaaS di [Stackoverflow](https://stackoverflow.com/search?tab=newest&q=jelastic)
- **Documentation** mengarahkan ke [Platform Devs Documentation](https://docs.dewacloud.com/docs/)
- **API** membuka [Platform API Documentation](https://www.virtuozzo.com/application-platform-api-docs/)
- **CLI** mengarahkan ke [Platform Command-Line Interface Overview](https://docs.dewacloud.com/docs/cli/)
- **Video** menunjuk ke [Platform YouTube Channel](https://www.youtube.com/user/JelasticCloud)
- **Tutorial** memulai panduan pendek dan interaktif, yang menjelaskan dasar-dasar bekerja dengan platform
- **How do I..?** menunjukkan daftar dokumen yang relevan dengan permintaan Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/47-account-help-menu.png" alt="account help menu" width="30%"/>

2. Dalam daftar drop-down _**Account**_ (alamat email), opsi berikut tersedia:

- **Settings** mengarahkan Anda ke bagian _[User Settings](#user-settings)_
- **Change Password** membuka kotak dialog dengan nama yang sama, di mana Anda perlu mengisi kolom yang diperlukan (_Current Password_, _New Password_, dan _Confirm Password_)
- **Language** memungkinkan mengubah lokalisasi antarmuka dashboard (jika tersedia)
- **Sign out** untuk keluar dari akun saat ini

<img src="https://assets.dewacloud.com/dewacloud-docs/quickstart/dashboard-guide/48-general-account-actions.png" alt="general account actions" width="30%"/>

Sekarang, Anda tahu semua kemungkinan dasar dashboard dan semoga tidak akan kesulitan untuk bekerja dengannya. Jika Anda masih memiliki pertanyaan tambahan, silakan hubungi Tim Dukungan dari penyedia hosting Anda atau hubungi para ahli teknis kami di [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

- [Getting Started](https://docs.dewacloud.com/docs/getting-started/)
- [Basics & Terminology](https://docs.dewacloud.com/docs/concept-and-terminology/)
- [Setting Up Environment](https://docs.dewacloud.com/docs/setting-up-environment/)
- [Software Stack Versions](https://docs.dewacloud.com/docs/software-stacks-versions/)
- [What is PaaS & CaaS](https://www.virtuozzo.com/company/blog/what-is-paas-platform-as-a-service-types-explained/)