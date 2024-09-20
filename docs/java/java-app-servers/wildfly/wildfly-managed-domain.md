---
sidebar_position: 2
slug: /wildfly-managed-domain
title: WildFly Managed Domain
---

# Clustering WildFly Otomatis dalam Mode Managed Domain dan Penskalaan di dalam Container

Saat ini sangat mudah untuk memulai server standalone WildFly di dalam container. Tapi bagaimana jika Anda perlu mengaktifkan clustering dalam mode Managed Domain, yang merupakan salah satu fitur utama dari [Jakarta EE](<https://jakarta.ee/>) pada umumnya. Itu bukan tugas yang mudah. Beberapa orang mengklaim bahwa ini hampir mustahil di dunia cloud-native, karena clustering Jakarta EE dirancang sebelum era container. Pertanyaan lama di [portal pengembang](<https://developer.jboss.org/thread/249340>) resmi masih belum terjawab dengan instruksi yang memadai, yang hanya menunjukkan adanya masalah.

Akibatnya, pengembang menggunakan node standalone sebagai satu-satunya opsi siap produksi yang tersedia di container dengan mengintegrasikan fitur clustering dan manajemen dari solusi pihak ketiga. Atau mereka hanya terus menjalankan aplikasi di VM yang menghadapi kompleksitas yang membuat migrasi hampir tidak mungkin.

Tetapi apa yang harus dilakukan pengembang jika mereka mencari solusi untuk memigrasikan cluster Jakarta EE yang sudah ada dan berfungsi baik dalam mode managed domain dari VM ke container?

Hingga saat ini, ada sangat sedikit contoh (misalnya untuk [GlassFish](<https://docs.dewacloud.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/?utm_source=blog-wildfly-managed-domain>) dan [WebLogic](<https://docs.dewacloud.com/company/blog/migration-from-vms-to-containers/?utm_source=blog-wildfly-managed-domain>)) tentang cara menjalankan dan menskalakan server aplikasi Java dalam mode managed domain di dalam container dengan benar. Dalam kebanyakan kasus, kurangnya pengetahuan atau bahkan tidak adanya solusi yang bekerja untuk mode domain dalam container menyebabkan hilangnya fitur clustering terintegrasi Jakarta EE yang menjadi usang.

Namun, mode managed domain masih hebat! Sebagian besar aplikasi besar dan penting misi seperti perbankan dan penagihan tetap berjalan pada Jakarta EE di VM. Clustering [Jakarta EE](<https://jakartablogs.ee/>) terintegrasi memberikan fungsionalitas yang diminati orang, termasuk ketersediaan tinggi dan deployment otomatis di antara server aplikasi Java yang terdistribusi terlepas dari infrastruktur yang mendasarinya, dan, tentu saja, Panel Admin untuk mengelola kluster Anda menggunakan UI yang bagus. 

![wildfly admin panel ui](#)

Untuk lebih memahami manfaat dari teknologi clustering yang terintegrasi secara native, silakan merujuk ke artikel bagus “[Under the Hood of J2EE Clustering](<https://www.theserverside.com/news/1364410/Under-the-Hood-of-J2EE-Clustering>)”. Menggabungkan fungsionalitas kaya ini dengan container yang siap digunakan memberikan manfaat besar dengan menghemat waktu dan upaya tim, dan memungkinkan iterasi cepat karena sebagian besar pengembang tidak berurusan dengan container atau VM jika pengaturan lingkungan sepenuhnya otomatis.

## Kapan, Apa, dan Mengapa Mode Managed Domain?{#when-what-and-why-managed-domain-mode}

Setiap server WildFly standalone memiliki konsol adminnya sendiri dan dikelola secara independen. Pada saat yang sama, beberapa instans WildFly yang menjalankan dalam mode domain berbagi antarmuka manajemen yang sama yang disebut pengendali domain. Jadi, Anda dapat memberikan perintah dan meng-deploy aplikasi ke semua server WildFly yang sedang berjalan dari satu tempat. Dokumentasi resmi menyarankan untuk mempertimbangkan mode domain untuk:

- Lingkungan produksi multi-server dengan kemampuan untuk menggunakan kemampuan manajemen terpusat yang disediakan oleh managed domain.
- Untuk skenario pengembangan lanjutan, misalnya yang melibatkan interaksi antara beberapa instans WildFly.

Kita dapat dengan mudah menjalankan satu layanan besar atau beberapa layanan kecil yang saling terkait per kluster yang berjalan dalam mode managed domain. Deployment ke kluster semacam itu otomatis sehingga aplikasi yang berjalan di VM dapat [dipindahkan ke container tanpa mengubah arsitekturnya](<https://searchcloudcomputing.techtarget.com/definition/cloud-migration>). Ini menyediakan cara yang sangat nyaman untuk mereplikasi aplikasi di-premise di cloud sambil menghindari perancangan ulang yang mahal dan memakan waktu. Hasilnya, aplikasi legacy dapat memanfaatkan efisiensi biaya dari fitur cloud-native seperti elastic compute dan auto-scaling.

## Kompleksitas Topologi Managed Domain{#complexity-of-managed-domain-topology}

Mari kita lihat topologi kluster WildFly dalam mode managed domain, yang ditampilkan dalam dokumentasi resmi. Ilustrasi di bawah ini memberikan gambaran tentang kompleksitas arsitektur managed domain. Skema ini dianggap sebagai topologi klasik Jakarta EE di VM, atau yang disebut sebagai "naga legacy" yang harus dijinakkan dan didekomposisi dengan benar ke dalam container.

![complex managed domain topology](#)

Kami menyesuaikan ilustrasi ini untuk tampilan topologi yang sedikit lebih baik, serta untuk menunjukkan proses Java “tersembunyi” tambahan di dalam setiap VM atau host bare metal. Ini akan membantu kita selama dekomposisi selanjutnya.

![java processes inside VM](#)

- **Worker Server** adalah proses JVM tempat aplikasi Jakarta EE perusahaan di-deploy dan menangani permintaan.
- **Host Controller** adalah proses JVM yang bertanggung jawab untuk mengonfigurasikan Worker Server dan sinkronisasi antara Server dan Domain Controller.
- **Process Controller** adalah proses JVM yang bertanggung jawab untuk siklus hidup (memulai/berhenti/memulai ulang) Worker Server. Ini tidak ada dalam skema asli tetapi penting untuk diperhitungkan saat dekomposisi.
- **Domain Controller** adalah jenis Host Controller yang ditugaskan untuk bertindak sebagai server admin utama (atau pengatur) di kluster yang menjalankan dalam mode managed domain dan menyediakan satu panel untuk mengelola Worker Server yang terdistribusi.

## Menjalankan Proses Ganda dalam Container Aplikasi{#running-multiple-processes-in-an-application-container}

Seperti yang kita lihat dari ilustrasi di atas, VM1 berisi 2 proses Java di dalamnya: Process Controller dan Domain Controller. Dan setiap VM lain berisi setidaknya 3 proses Java (atau lebih, tergantung pada berapa banyak instans server yang ingin Anda jalankan di dalam setiap host): Process Controller, Host Controllers, dan Worker Server(s).

Itu tidak mudah untuk menjalankannya di dalam container. Topologi semacam itu bertentangan dengan pola anti-pola dalam dunia container aplikasi. [Dokumentasi Docker resmi](<https://docs.docker.com/config/containers/multi-service_container/>) memperingatkan kita tentang menjalankan beberapa proses Java di dalam container yang sama:

_"Tidak masalah memiliki beberapa proses, tetapi untuk mendapatkan manfaat maksimal dari Docker, hindari satu container yang bertanggung jawab untuk banyak aspek dari aplikasi keseluruhan Anda."_

Jadi, pengguna merasa bingung ketika mereka mendapatkan pesan untuk melakukan tindakan "terlihat-tidak dapat diandalkan" ini. Pengalaman buruk sebelumnya menyebabkan hilangnya kepercayaan dan itu memang cukup masuk akal.

## Menjalankan Proses Ganda dalam Container Sistem{#running-multiple-processes-in-a-system-container}

Namun, situasinya tidak begitu buruk. Jika dikonfigurasi dengan benar, mode domain bekerja dengan sempurna di dalam [container sistem](<https://www.excella.com/insights/application-vs-system-containers>). Mereka dapat menangani sebanyak mungkin proses yang diperlukan di dalam satu container. Jenis container semacam ini secara drastis menyederhanakan migrasi dari VM yang berat ke virtualisasi yang jauh lebih ringan. Dan ada dua opsi terkenal di pasar, yaitu [LXD](<https://linuxcontainers.org/lxd/>) dan [OpenVZ](<https://openvz.org>). Selain itu, container sistem dan container aplikasi saling melengkapi, penggabungan keduanya menyediakan [karakteristik VM untuk aplikasi yang ter-dockerisasi](<https://linux.softpedia.com/blog/infographic-lxd-machine-containers-from-ubuntu-linux-492602.shtml>).

Jelastic PaaS telah mendukung container sistem sejak awal tahun 2011 dan dapat mengonfirmasi bahwa banyak pelanggan senang menjalankan beberapa proses di dalam container yang sama dalam produksi ketika diperlukan.

Selain itu, container sistem memberikan isolasi sumber daya dan keamanan yang lebih baik dibandingkan dengan container aplikasi, sehingga penyedia cloud dapat dengan aman meng-hosting aplikasi dari proyek yang berbeda pada infrastruktur yang sama dengan mengurangi biaya kepemilikan dan kompleksitas manajemen. Sebagai efek samping, container sistem memulai sedikit lebih lambat dibandingkan dengan container aplikasi, tetapi mereka masih jauh lebih ramping dan lebih cepat daripada VM.

## Dekonstruksi dan Membangun Topologi yang Dimodifikasi{#decomposition-and-building-modified-topology}

Kami siap memulai perjalanan dekonstruksi kami. Aturan pertama adalah dalam semangat microservices - selalu lebih baik menempatkan hanya satu Worker Server untuk satu container. Selain itu, kami membuat hanya satu kelompok server per domain untuk semua container di dalam kluster. Penyesuaian sederhana semacam itu akan memberikan fleksibilitas yang luar biasa dan diinginkan untuk menskalakan setiap Worker Server secara vertikal, meningkatkan [efisiensi penggunaan sumber daya](<https://docs.dewacloud.com/company/blog/stop-overpaying-for-java-cloud-hosting-resources/?utm_source=blog-wildfly-managed-domain>), dan menskalakan kelompok container tersebut secara horizontal dengan menambahkan instans baru sesuai kebutuhan.

![resource usage efficiency](#)

Perlu diingat bahwa setiap container untuk menangani permintaan yang masuk menjalankan 3 proses Java: Worker Server (WS), Host Controller (HC) dan Process Controller (PC). Dan container admin yang mengelola kluster menjalankan 2 proses Java: Domain Controller (DC) dan Process Controller (PC).

## WildFly Managed Domain di Jelastic{#wildfly-managed-domain-in-jelastic}

Untuk memudahkan migrasi aplikasi Jakarta EE legacy dari VM ke container, kami menciptakan mode [Auto-Clustering](<https://docs.dewacloud.com/auto-clustering/>) tersemat khusus untuk WildFly yang dapat diaktifkan untuk instans baru.

Keuntungan utama dari solusi ini adalah interkoneksi otomatis dari beberapa server aplikasi ketika ada perubahan topologi lingkungan, yang mengimplementasikan konfigurasi clustering yang umum digunakan dalam mode managed domain.

Di bawah ini, Anda akan melihat bagaimana WildFly standalone diubah menjadi kluster melalui fitur Auto-Clustering dan [scaling horizontal](<https://docs.dewacloud.com/automatic-horizontal-scaling/?utm_source=blog-wildfly-managed-domain>) sederhana tanpa konfigurasi manual yang diperlukan. Selain itu, kami akan menjelaskan spesifikasi topologi infrastruktur dan cara mendapatkan lingkungan pengembangan dan produksi yang tepat dan berjalan di dalam Jelastic PaaS.

## Membuat WildFly Standalone{#create-standalone-wildfly}

Dengan Jelastic, topologi yang diperlukan dapat dibangun menggunakan wizard yang nyaman:

1\. Buat lingkungan baru  
![create new wildfly environment](#)

  - Pilih versi WildFly yang sesuai
  - Atur batas penskalaan vertikal
  - Ubah nama lingkungan jika diperlukan (misalnya, **wildfly**)

![standalone wildfly via wizard](#)

Anda akan menerima konfirmasi email tentang pembuatan lingkungan dengan kredensial untuk Panel Admin.  
![add wildfly node](#)

2\. Sekarang, Anda siap untuk melakukan deployment aplikasi ke server standalone yang baru disiapkan.

Di Deployment manager, klik tombol **Deploy to…**.  
![deploy the application](#)

Tentukan **Context** sesuai kebutuhan atau biarkan default ROOT.  
![deploy java application](#)

Pastikan bahwa aplikasi Anda berjalan, dengan menekan **Open in browser** di dekat lingkungan yang dibuat.  
![create wildfly environment](#)

Jika Anda masuk ke container Anda melalui [Web SSH client](<https://docs.dewacloud.com/web-ssh-client/?utm_source=blog-wildfly-managed-domain>) bawaannya, Anda akan melihat hanya satu proses **Standalone** yang berjalan.  
![web ssh client](#)

## Mendapatkan WildFly Terkelompok dengan Mode Managed Domain{#get-clustered-wildfly-with-managed-domain-mode}

Clustering WildFly dengan mode domain dikonfigurasikan secara otomatis melalui fitur Auto-Clustering. Setelah diaktifkan, server dapat diskalakan secara manual atau otomatis.

- **Secara Manual**

Tambahkan server baru melalui wizard saat membuat lingkungan atau dengan [mengubah topologinya](<https://docs.dewacloud.com/dashboard-guide/?utm_source=blog-wildfly-managed-domain>).  
![change wildfly environment topology](#)

Cukup merujuk ke lapisan server aplikasi dalam panel lingkungan sebelah kiri, aktifkan mode Auto-Clustering dan tambahkan **(+)** node dalam frame [Horizontal Scaling](<https://docs.dewacloud.com/horizontal-scaling/?utm_source=blog-wildfly-managed-domain>).  
![wildfly horizontal scaling](#)

- **Secara Otomatis**

Jumlah server dapat diubah secara otomatis dengan mengatur [triggers penskalaan](<https://docs.dewacloud.com/automatic-horizontal-scaling/?utm_source=blog-wildfly-managed-domain>) berdasarkan konsumsi sumber daya dalam **Settings > Auto Horizontal Scaling**.  
![wildfly horizontal scaling](#)

**Catatan**:

- Selama transformasi awal dari mode standalone ke mode domain, aplikasi Anda akan turun sekitar 1 menit
- Semua perubahan penskalaan selanjutnya terjadi tanpa downtime
- Jika Anda mengaktifkan Auto-Clustering dan memulai dari 2 instans sekaligus, mode domain akan dibuat sejak awal, sehingga tidak akan ada downtime selama penskalaan

Setelah penskalaan selesai (manual atau otomatis), semua instans WildFly akan bergabung dengan kluster, bekerja dalam mode operasi WildFly Managed Domain. Domain Controller dan Load Balancer ditambahkan secara otomatis sebagai komponen yang dibutuhkan dalam kluster.

Setelah penskalaan ini, aplikasi yang sebelumnya di-deploy juga secara otomatis di-deploy ulang ke seluruh instans WildFly di kluster. Selain itu, konfigurasi kolam koneksi database dan penyesuaian konfigurasi lainnya, yang sebelumnya dibuat melalui konsol admin WildFly, direplikasi di seluruh lapisan server aplikasi.

Anda dapat memeriksa bagaimana topologi WildFly berubah dari mode standalone menjadi kluster managed domain:  
![wildfly environment running](#)

Node Pekerja menjalankan 3 proses alih-alih satu seperti dalam mode standalone:

- Server:worker
- Process Controller
- Host Controller  
  ![web ssh wildfly node](#)

Dan node Domain Controller memiliki dua proses yang berjalan:

- Process Controller
- Host Controller  
  ![Domain Controller node](#)

Selain itu, perubahan topologi disinkronkan dan ditampilkan dalam Panel Admin WildFly.  
![wildfly admin panel](#)

Dengan cara ini, Anda mendapatkan kluster WildFly siap pakai yang dapat diskalakan keluar dan masuk, membuat hosting aplikasi Anda sangat fleksibel dan hemat biaya.

## Ketersediaan Aplikasi di antara Pekerja{#application-availability-among-workers}

Aplikasi yang di-deploy ke server standalone di-deploy ulang ke semua instans server selama transformasi ke kluster. Untuk memeriksa ini, Anda dapat mengeklik **Open in browser** di setiap Pekerja.  
![application availability among workers](#)

Selain itu, Anda dapat memastikan bahwa kluster menyediakan ketersediaan tinggi. Untuk ini, tekan tombol **Restart node** untuk satu atau bahkan dua node dan coba akses aplikasi Anda melalui **Open in browser** untuk seluruh kluster.  
![restart wildfly nodes](#)

Aplikasi akan kembali berjalan tanpa interupsi.

## Mengkloning Kluster dalam Mode Domain{#cloning-cluster-in-domain-mode}

Saat merilis versi aplikasi baru atau hanya menerapkan beberapa penyesuaian penting, adalah praktik yang baik untuk memeriksa bagaimana perubahan baru yang diterapkan dapat mempengaruhi kerja layanan. Jelastic PaaS memungkinkan Anda menyelesaikan pengujian semacam itu 'secara langsung' (yaitu tanpa downtime layanan dan secara implisit untuk pelanggan Anda) dengan opsi **Clone Environment**.  
![clone wildfly environment](#)

Lingkungan yang dikloning adalah salinan kluster siap pakai dengan semua modifikasi yang diperlukan sudah diterapkan. Node Domain Controller yang baru disiapkan beroperasi dengan Pekerja yang dikloning yang sesuai, yang sudah terdaftar dalam panel adminnya. Dan aplikasi dari lingkungan asli di-deploy ke yang dikloning. Oleh karena itu, satu-satunya hal yang tersisa adalah memeriksa ulang kode aplikasi dan konfigurasi server khusus Anda untuk IP/domain yang dikodekan dan memperbaikinya sesuai (jika ada masalah).  
![running wildfly environment](#)

Dengan cara ini, Anda dapat menerapkan perubahan yang dimaksudkan pada salinan lingkungan Anda tanpa mempengaruhi produksi yang sebenarnya. Untuk meningkatkan ketersediaan tinggi sistem, Jelastic menggunakan **beberapa Load-Balancer yang disinkronkan**, ditempatkan di node yang berbeda, untuk menangani permintaan secara bersamaan. Semuanya bekerja dengan penyimpanan data tunggal, yang membuatnya sepenuhnya dapat dipertukarkan jika terjadi masalah pada salah satu instans.

## Ringkasan{#summary}

Instruksi ini membuktikan bahwa tidak perlu membangun kembali seluruh arsitektur aplikasi untuk mendapatkan hasil yang diinginkan dari mode managed domain maupun teknologi container. Migrasi proyek legacy dari VM ke mikro kluster dengan container sistem tidak terlalu menyakitkan. Ini membawa “rasa kaya” dari fleksibilitas dan efisiensi untuk meningkatkan keunggulan kompetitif. Cobalah! Buat kluster Anda sendiri dengan [Jelastic PaaS](<https://jelastic.cloud/?utm_source=blog-wildfly-managed-domain>) di salah satu penyedia layanan terdesentralisasi di seluruh dunia.