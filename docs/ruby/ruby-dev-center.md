---
sidebar_position: 1
slug: /ruby-center
title: Ruby Dev Center
---
# Ruby PaaS Hosting

![Ruby cloud hosting](#)

**Ruby** adalah bahasa pemrograman open source yang populer dengan sintaksis yang kuat dan praktis, namun alami dan mudah dibaca/tulis. Ruby menggabungkan praktik terbaik dari berbagai solusi untuk menyediakan bahasa berorientasi objek yang unik, yang bertujuan untuk kesederhanaan dan menyediakan fitur seperti fitur berorientasi objek dasar & khusus; operator overloading; penanganan pengecualian; iterators dan closures; garbage collection, dan banyak lagi.

Platform ini menyediakan integrasi langsung dari server web Ruby, menyediakan semua alat manajemen dan otomatisasi (mis. kerangka pengembangan web _Ruby on Rails_) untuk hosting yang nyaman dan pengembangan aplikasi Ruby yang sangat nyaman.

Dalam artikel ini, kita akan membahas fitur-fitur khas dari hosting [Ruby](<https://www.ruby-lang.org/en/>) dan memperkenalkan kemungkinan terkait Ruby di dalam platform. Gunakan daftar isi di bawah ini untuk menemukan informasi yang diperlukan dalam panduan ini dengan lebih cepat:

- [Ruby Environment Hosting](<https://docs.dewacloud.com/docs/#ruby-environment-hosting>)
  - [Ruby Application Servers](<https://docs.dewacloud.com/docs/#ruby-application-servers>)
  - [Ruby Versioning](<https://docs.dewacloud.com/docs/#ruby-versioning>)
- [Ruby Application Deployment](<https://docs.dewacloud.com/docs/#ruby-application-deployment>)
- [Ruby Dependency Management](<https://docs.dewacloud.com/docs/#ruby-dependency-management>)
- [Ruby Post Deploy Configuration](<https://docs.dewacloud.com/docs/#ruby-post-deploy-configuration>)
- [Domains Management](<https://docs.dewacloud.com/docs/#domains-management>)
- [Automatic Vertical Scaling](<https://docs.dewacloud.com/docs/#automatic-vertical-scaling>)
- [Manual Horizontal Scaling](<https://docs.dewacloud.com/docs/#manual-horizontal-scaling>)
- [Automatic Horizontal Scaling](<https://docs.dewacloud.com/docs/#automatic-horizontal-scaling>)

## Ruby Environment Hosting{#ruby-environment-hosting}

Platform ini menyediakan wizard topologi yang kuat dan intuitif untuk [menyiapkan](<https://docs.dewacloud.com/docs/setting-up-environment/>) hosting dari environment baru.

Beralih ke tab bahasa _Ruby_, pilih server aplikasi dan versi engine yang dibutuhkan, tambahkan stack perangkat lunak lain yang diperlukan. Jika diperlukan, sesuaikan parameter lain seperti cloudlets (RAM dan CPU), ruang disk, public IPv4/IPv6, jumlah node, dll.

:::note
Both Apache Ruby and NGINX Ruby templates utilize a modern systemd initialization daemon.
:::

![Ruby topology wizard](#)

:::note
All instances are completely isolated and fully independent containers. Additionally, scaled out nodes are automatically distributed across the physical servers (or VMs), ensuring high availability.
:::

### Ruby Application Servers{#ruby-application-servers}

Platform ini menyediakan [server aplikasi Ruby](<https://docs.dewacloud.com/docs/ruby-application-server-config/>) yang berbasis pada stack perangkat lunak _Apache_ dan _NGINX_. Keduanya dikonfigurasi untuk menggunakan kerangka _Ruby on Rails_ untuk mengimplementasikan aplikasi web dan server aplikasi **Passenger** secara default.

Jika diperlukan, stack _NGINX Ruby_ dapat dengan mudah dikonfigurasi untuk bekerja dengan server inbuilt yang berbeda:

- _**[Passenger](<https://www.phusionpassenger.com/>)**_ \- salah satu server aplikasi paling kaya fitur untuk Ruby, yang sangat berharga untuk aplikasi web modern dan API layanan mikro.
- _**[Puma](<https://puma.io/>)**_ \- server web Ruby yang berorientasi pada kecepatan dan paralelisme karena parsing protokol HTTP 1.1 yang cepat dan akurat.
- _**[Unicorn](<https://bogomips.org/unicorn/>)**_ \- server HTTP yang memanfaatkan fitur kernel Unix/Unix-like untuk melayani klien cepat pada koneksi berlatensi rendah dan bandwidth tinggi.

### Ruby Versioning{#ruby-versioning}

Versi Ruby berikut didukung pada saat penulisan ini:

- 3.0.6
- 3.1.6
- 3.2.5
- 3.3.5

Daftar rilis terkini yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara berkala (mingguan).

Anda dapat memilih [versi Ruby](<https://docs.dewacloud.com/docs/ruby-versions/>) yang dibutuhkan melalui wizard topologi selama pembuatan environment baru, serta menyesuaikannya untuk instance yang ada melalui [container redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>).

## Ruby Application Deployment{#ruby-application-deployment}

Platform ini mengotomatisasi proses deployment untuk server aplikasi _Apache Ruby_ dan _NGINX Ruby_ yang dikelola menggunakan:

- aplikasi _**archive**_ yang diunggah dari mesin lokal atau melalui URL eksternal.
- repository _**VCS**_ (mis. GitHub) jarak jauh.

![ruby application deployment](#)

Saat mendepoykan aplikasi Ruby, hanya satu konteks (_ROOT_) yang dapat digunakan. Namun, Anda dapat memilih dari tiga _Deployment Types_ (mis. [RAILS_ENV](<https://guides.rubyonrails.org/configuring.html#rails-environment-settings>)) untuk itu:

- _**development**_ \- memuat ulang semua kelas aplikasi dan mematikan caching (memungkinkan siklus pengembangan lebih cepat).
- _**production**_ \- menyalakan semua caching.
- _**test**_ \- menghapus basis data antara pengujian.

Jika diperlukan, Anda dapat beralih antara jenis deployment Ruby melalui daftar drop-down yang sesuai di sebelah aplikasi Anda (lihat gambar di bawah).

![Ruby deployment types](#)

Baca dokumen terkait untuk mengetahui lebih lanjut tentang deployment aplikasi Ruby:

- [Deployment Manager](<https://docs.dewacloud.com/docs/deployment-manager/>)
- [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [Auto-Deploy Overview](<https://docs.dewacloud.com/docs/git-svn-auto-deploy/>)
- [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)

## Ruby Dependency Management{#ruby-dependency-management}

Semua instance Ruby dalam platform disediakan dengan pengelola ketergantungan _**[Bundler](<https://bundler.io/>)**_ untuk pelacakan otomatis dan instalasi gems dan versi yang tepat yang dibutuhkan proyek Anda. Jika proyek memiliki file _Gemfile_ di folder root, itu akan secara otomatis menyelesaikan ketergantungan dengan Bundler setelah deployment ke server tanpa memerlukan intervensi manual.

Juga, jika diperlukan, Anda dapat menyertakan kerangka Ruby apa pun ke dalam Gemfile Anda (_Sinatra_, _Rack_, _therubyracer_, _Ramaze_, dll.) atau memanfaatkan _**[Ruby on Rails](<https://rubyonrails.org/>)**_ \- salah satu kerangka kerja paling populer untuk mengembangkan dan mengimplementasikan aplikasi web, yang tersedia secara default.

Lihat dokumentasi [Ruby Dependency Management](<https://docs.dewacloud.com/docs/ruby-dependency-management/>) untuk informasi tambahan.

## Ruby Post Deploy Configuration{#ruby-post-deploy-configuration}

Untuk mengotomatiskan tindakan berulang yang perlu dilakukan proyek Ruby setelah aplikasi dideploy (mis. _db:migrate_), file _**rake_deploy**_ (berlokasi di folder root proyek) dapat dibuat.

File ini harus berisi daftar perintah (setiap satu dari baris baru) yang akan dieksekusi secara berurutan melalui alat _**[rake](<https://ruby.github.io/rake/>)**_ setelah setiap restart node Apache/NGINX. Setelah eksekusi berhasil, file _**rake_deploy**_ secara otomatis dihapus. Lihat dokumentasi [Ruby Post Deploy Configuration](<https://docs.dewacloud.com/docs/ruby-post-deploy-configuration/>) untuk informasi tambahan.

## Domains Management{#domains-management}

Anda dapat menyediakan [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) untuk aplikasi Ruby Anda untuk digunakan sebagai pengganti yang default. Berdasarkan topologi environment, Anda harus menggunakan:

- **CNAME redirect** jika menggunakan _Shared Load Balancer_; direkomendasikan untuk environment _**dev**_ dan _**test**_.
- **DNS A Record** jika menggunakan _public IP_; dapat menangani beban lalu lintas tinggi dan cocok untuk environment _**production**_.

Untuk mengalihkan lalu lintas dari satu environment ke environment lainnya (mis. untuk mengarahkan pelanggan ke versi aplikasi baru tanpa downtime), harus digunakan fitur [swap domains](<https://docs.dewacloud.com/docs/swap-domains/>). Ini juga tersedia sebagai metode _**SwapExtIps**_ [API](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps>)/[CLI](<https://docs.dewacloud.com/docs/cli-ip-swap/>).

![Ruby domain management](#)

## Automatic Vertical Scaling{#automatic-vertical-scaling}

Salah satu fitur utama dari platform ini adalah penyediaan dinamis jumlah sumber daya (RAM dan CPU) yang tepat yang dibutuhkan oleh node Anda sesuai dengan beban saat ini tanpa intervensi manual. Cukup setel batas [cloudlets](<https://docs.dewacloud.com/docs/cloudlet/>) yang diperlukan (_128 MiB_ RAM dan _400 MHz_ CPU masing-masing) untuk server aplikasi Ruby Anda dan semua akan ditangani oleh platform secara otomatis.

![Ruby automatic vertical scaling](#)

Sebagai hasilnya, Anda secara otomatis mendapatkan keuntungan dari pendekatan pengisian _**[Pay-per-Use](<https://docs.dewacloud.com/docs/pricing-model/>)**_ yang benar-benar berorientasi pada pengguna dan tidak perlu menebak atau memprediksi beban yang masuk. Ini memastikan bahwa Anda [tidak pernah membayar lebih untuk sumber daya yang tidak digunakan](<https://www.virtuozzo.com/company/blog/deceptive-cloud-efficiency-do-you-really-pay-as-you-use/>) dan menghemat waktu Anda karena platform menghilangkan kebutuhan untuk menangani penyesuaian terkait beban atau melakukan perubahan arsitektur secara manual.

![Ruby pay-per-use pricing](#)

Rujuk ke dokumentasi [automatic vertical scaling](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>) untuk informasi lebih lanjut.

## Manual Horizontal Scaling{#manual-horizontal-scaling}

[Horizontal scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>) dengan platform ini semudah memilih jumlah node yang diperlukan melalui bagian yang sesuai dalam wizard topologi. Selain itu, Anda dapat memilih antara dua mode scaling:

- _**Stateless**_ \- secara bersamaan membuat semua node baru dari templat gambar dasar.
- _**Stateful**_ \- secara berurutan menyalin sistem file dari container master ke node baru.

![Ruby horizontal scaling](#)

:::note
Untuk distribusi permintaan yang tepat, sebuah instance load balancer secara otomatis ditambahkan ketika server Ruby di scaling.
:::

Jumlah maksimum server tipe yang sama dalam satu lapisan environment tergantung pada pengaturan penyedia hosting tertentu (biasanya batas ini ditetapkan untuk 16 node dan dapat diperbesar dengan mengirimkan permintaan yang sesuai ke dukungan).

## Automatic Horizontal Scaling{#automatic-horizontal-scaling}

Anda dapat mengkonfigurasi [automatic horizontal scaling](<https://docs.dewacloud.com/docs/automatic-horizontal-scaling/>) untuk environment Ruby Anda melalui pemicu yang dapat disesuaikan, yang memantau perubahan dalam beban node dan meningkatkan/mengurangi jumlahnya sesuai.

Prosesnya sederhana, akses **Settings > Monitoring > Auto Horizontal Scaling** di environment, pilih lapisan yang diperlukan dan sumber daya yang akan dipantau (_CPU_, _RAM_, _Network_, _Disk I/O_, _Disk IOPS_). Atur kondisi dan spesifikasi scaling yang tepat melalui formulir antarmuka pengguna yang intuitif.

![Ruby automatic horizontal scaling](#)

Selain itu, hosting di PaaS memungkinkan penggunaan alat dan fitur bawaan lainnya, misalnya:

- [Built-in](<https://docs.dewacloud.com/docs/built-in-ssl/>) atau [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>)
- [Public IPv4 and IPv6](<https://docs.dewacloud.com/docs/public-ip/>)
- Beragam [software stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>) pelengkap, termasuk basis data SQL dan NoSQL
- [Container firewalls](<https://docs.dewacloud.com/docs/custom-firewall/>), [endpoints](<https://docs.dewacloud.com/docs/endpoints/>) dan [environment network isolation](<https://docs.dewacloud.com/docs/environment-isolation/>)
- [User-friendly UI](<https://docs.dewacloud.com/docs/dashboard-guide/>) dan [SSH access](<https://docs.dewacloud.com/docs/ssh-access/>)
- [Open API](<https://docs.dewacloud.com/docs/api-overview/>) dan [Cloud Scripting](<https://docs.cloudscripting.com/>) untuk otomatisasi
- [Pay-per-use pricing model](<https://docs.dewacloud.com/docs/pricing-model/>)
- [Collaboration for teamwork](<https://docs.dewacloud.com/docs/account-collaboration/>)
- [Multi-cloud distribution](<https://docs.dewacloud.com/docs/environment-regions/>)

Jelajahi manfaat hosting Ruby dalam platform!

## Baca Juga{#whats-next}

- [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
- [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
- [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)