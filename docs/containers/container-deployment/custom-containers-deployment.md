---
sidebar_position: 2
slug: /custom-containers-deployment
title: Custom Containers Deployment
---

# Custom Containers Deployment{#custom-containers-deployment}

Platform ini dapat secara otomatis membuat _**custom containers**_ berdasarkan image Docker standar yang menggunakan [OS dan arsitektur yang didukung](<https://docs.dewacloud.com/docs/container-image-requirements/>) dan disimpan di Docker Hub atau registry publik/pribadi lainnya. Container tersebut mendapatkan semua manfaat dari platform (_automatic vertical_ dan _horizontal scaling_, _logs_, _statistics_ dan _alerts monitoring_, embedded _configuration file manager_, dll.) sambil menjaga perangkat lunak asli dari image tetap utuh. Perlu diingat bahwa operabilitas aplikasi itu sendiri tidak dapat dijamin karena dikelola oleh pengelola image pihak ketiga yang bersangkutan dan bukan oleh platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-1.png" alt="PaaS custom container images" width="100%"/>

:::tip 
Platform ini memberikan dukungan pada software stacks yang paling populer dengan memastikan operabilitas template dan pembaruan rutin ke versi terbaru (certified containers).
:::

Dalam panduan ini, Anda akan mengetahui cara memulai dengan _custom Docker containers_ \- bagaimana membuat dan mengelola semua jenis aplikasi dan layanan yang tersedia di [Docker Hub](<https://docs.dewacloud.com/docs/#custom-containers-from-docker-hub>) atau [custom private registry](<https://docs.dewacloud.com/docs/#containers-from-customprivate-registry>).

## Custom Containers from Docker Hub{#custom-containers-from-docker-hub}

1\. Buka [topology wizard](<https://docs.dewacloud.com/docs/setting-up-environment/>) lingkungan dengan mengklik tombol **New Environment** di sudut kiri atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-2.png" alt="topology wizard custom container" width="100%"/>

Beralih ke tab **Custom** di bagian atas wizard. Di dalamnya, Anda akan menemukan beberapa blok dengan berbagai nama layer di sebelah kiri, di mana masing-masing memberikan kemampuan untuk membuat custom container berdasarkan image Docker yang dipilih. Gunakan bagian ini untuk membagi dan menyusun topologi sesuai dengan kebutuhan Anda.

Beralih ke layer yang diinginkan dan lanjutkan dengan tombol **Select Image**.

2\. Dalam bingkai _**Select Container**_ yang terbuka, Anda akan melihat beberapa tab:

  * _Quick Start_, yang menyediakan set template yang paling populer/rekomendasikan untuk layer saat ini (tab ini mungkin tidak ada tergantung pada pengaturan penyedia layanan hosting Anda)
  * _Search_, yang memungkinkan anda menemukan template yang diinginkan di registry pusat Docker Hub
  * _Custom_, di mana Anda bisa menambahkan template Anda sendiri dari [custom/private registries](<https://docs.dewacloud.com/docs/#containers-from-customprivate-registry>)
  * _Favorite_, dimana Anda bisa menyimpan images untuk akses cepat (misalnya yang Anda anggap akan digunakan di masa depan)

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-3.png" alt="wizard search for image" width="100%"/>

Sebagai contoh, mari kita _Search_ registry resmi Docker Hub - navigasikan ke tab dengan nama yang sama, ketik nama lengkap atau sebagian dari nama yang diperlukan ke kolom input (misalnya, _appsvcsample/static-site_) dan tekan **Enter**.

Platform akan memuat hasil yang relevan dalam sekejap, jadi cukup klik pada template yang diperlukan untuk menambahkannya ke layer yang dipilih. Anda dapat memilih **tag** yang diperlukan dengan daftar drop-down di bagian atas bingkai. Kolom ini mendukung pencarian untuk membantu mengelola images dengan beberapa tag.

:::tip
Melakukan hover di atas image tertentu akan memperluas plank dengan beberapa fungsi tambahan. Klik pada stringMore details untuk membuka halaman repository yang sesuai di Docker Hub dalam tab browser terpisah. Anda dapat menandai suatu image sebagai Favorite dengan mengklik ikon bintang di sudut kanan atas. Setelah itu, platform akan menambahkan image ini ke tab yang sesuai untuk akses cepat. Untuk menghapus image yang disimpan dari daftar, klik tombol berbentuk bintang sekali lagi.
<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-4.png" alt="image details and favorite" width="80%"/>
:::

Berbeda Docker images tidak dapat ditambahkan ke layer yang sama. Untuk menambahkan lebih banyak images, gunakan layer yang berbeda. Blok **Extra** memungkinkan untuk memperluas topologi sejauh yang Anda butuhkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-5.png" alt="build environment topology" width="40%"/>

Klik tombol **Next** setelah Anda selesai menyusun topologi.

3\. Setelah Anda kembali ke wizard dengan semua custom containers yang diperlukan ditambahkan, Anda dapat mulai mengkonfigurasi dan mengelolanya seperti [regular node](<https://docs.dewacloud.com/docs/setting-up-environment/#configuring-nodes-resources-and-specifics>):

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-6.png" alt="create custom container environment" width="100%"/>

Klik tombol **Create** di bagian bawah wizard untuk memulai pembuatan lingkungan.

4\. Selesai! Dalam beberapa menit, lingkungan Anda dengan custom containers akan dibuat dan muncul di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-7.png" alt="open container in browser" width="100%"/>

Anda dapat **Open in Browser** setiap container dengan tombol yang sesuai di sebelahnya atau seluruh lingkungan melalui domain yang ditugaskan (ditunjukkan di bawah nama lingkungan). Dalam kasus yang terakhir, template server aplikasi atau balancer layer akan dibuka.

:::note
Tidak semua custom containers mempunyai antarmuka web yang berfungsi secara otomatis. Oleh karena itu, Anda dapat mendapatkan error 502 application down saat mengakses node tersebut melalui browser. Namun, itu tidak berarti image ini salah atau rusak. Jika Anda ingin memastikan layanan yang diperlukan berfungsi, periksa proses yang berjalan di dalam container menggunakan koneksi SSH. Jika suatu aplikasi di-deploy ke container tanpa public IP dan tidak mendengarkan ke port 80 di backend-nya, Anda akan ditunjukkan halaman error khusus 502 - Service is down saat mencoba membukanya. Dalam hal seperti itu, Anda perlu memastikan container Anda memiliki layanan HTTP berjalan dan diatur untuk menangani permintaan yang masuk melalui port yang disebutkan di atas.
:::


Anda dapat membuat konfigurasi tambahan pada container ini secara langsung di dashboard. Misalnya, Anda dapat beroperasi melalui embedded [file manager](<https://docs.dewacloud.com/docs/container-configuration/#configuration-file-manager>) atau **[Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)** client. Dalam kedua kasus tersebut, Anda diberikan izin root penuh untuk menyelesaikan penyesuaian yang Anda inginkan.

## Containers from Custom/Private Registry{#containers-from-customprivate-registry}

Selain template publik yang banyak ditemukan di registry resmi Docker Hub, platform ini memberi Anda kemampuan untuk meng-deploy image pribadi Anda sendiri dari custom registry mana pun. Template ini akan diingat oleh platform (disimpan dalam bagian **Custom** yang didedikasikan), memungkinkan Anda mengelolanya dengan cara sama seperti image publik mana pun. Jika repository Anda dilindungi, Anda harus menentukan kredensial akses yang sesuai (sekali saja selama penambahan). Pada saat yang sama, semua autentikasi selanjutnya yang diperlukan untuk [container scaling](<https://www.virtuozzo.com/application-platform-docs/horizontal-scaling/>) atau [redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>) akan dilakukan secara otomatis.

Penambahan image semacam itu dapat dilakukan melalui bagian _Custom_ di topology wizard.

1\. Mulailah dengan beralih ke tab **Custom** dan mengklik tombol **Add New Image**:

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-8.png" alt="image from custom registry" width="100%"/>

2\. Dalam bingkai yang terbuka, masukkan **Name** dari repository Anda ke kolom yang sesuai. Anda dapat mengabaikan host registry di awal nama image saat bekerja dengan Docker Hub.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-9.png" alt="private registry credentials" width="70%"/>

:::tip
Anda tidak perlu menentukan tag selama penambahan custom image, karena Anda dapat memilih yang diperlukan selama pembuatan/kustomisasi container yang sesuai. Selain itu, daftar tag image yang tersedia secara otomatis diperbarui saat pemilihannya untuk instalasi, jadi Anda tidak perlu menambahkan kembali Docker template Anda ke bagian Custom hanya karena kode aplikasi Anda telah diperbarui.
:::

Jika repository Anda bersifat private, Anda perlu menambahkan kredensial yang tepat melalui kolom **Username** dan **Password** (jika tidak, biarkan kosong). Klik **Add** untuk melanjutkan.

3\. Dalam beberapa detik, template baru Anda akan ditambahkan ke daftar custom images sehingga dapat dengan mudah di-deploy di platform.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-10.png" alt="add image from custom registry" width="100%"/>

Jika beberapa custom template tidak lagi diperlukan, Anda dapat menghapuskannya dari daftar dengan mengklik ikon **bin** di sudut kanan atas plank yang sesuai. Custom images dapat ditambahkan sebagai _Favorites_ dengan cara yang sama seperti yang regular (yaitu menggunakan ikon **star**).

4\. Jika Anda perlu memperbarui kredensial akses ke salah satu custom containers yang ada, arahkan mouse ke layer yang sesuai di dashboard, perluas daftar _Additionally_, dan klik opsi **Repo Credentials**.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-11.png" alt="edit repo credentials" width="100%"/>

5\. Dalam bingkai _**Container Repository Credentials**_ yang terbuka, Anda dapat menentukan **Login** dan **Password** baru untuk image Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-deployment/custom-containers-deployment/custom-containers-deployment-12.png" alt="change container repository credentials" width="70%"/>

Terapkan perubahan dengan tombol yang bernama sama.

Itu saja! Sekarang, Anda terbiasa dengan penambahan custom containers dari repositori non-default ke platform.

:::tip
Jika Anda menghadapi masalah saat beroperasi dengan custom Docker images Anda di platform, jangan ragu untuk mencari bantuan dari pakar teknis kami di Stackoverflow.
:::

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Certified Containers Deployment](<https://docs.dewacloud.com/docs/certified-containers-deployment/>)
  * [Docker Engine Deployment](<https://docs.dewacloud.com/docs/docker-engine-deployment/>)
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>)