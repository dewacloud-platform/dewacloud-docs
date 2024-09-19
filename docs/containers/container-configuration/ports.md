---
sidebar_position: 5
slug: /ports
title: Ports
---

## Ports{#ports}

Tab **Ports** memberikan informasi umum tentang pengelolaan port container di platform.

![ports layer settings](#)

Port berikut ini dibuka secara default:

  * _**80**_, _**8080**_, _**8686**_ \- mem-proxy lalu lintas **HTTP** ke **HTTP** (port _80_)
  * _**4848**_, _**8443**_, _**4901-4910**_ \- mem-proxy lalu lintas **SSL** (HTTPS) ke **SSL**
  * _**443**_ \- mem-proxy lalu lintas **SSL** ke **HTTP** (port _80_)
  * _**4949**_, _**7979**_ \- mem-proxy lalu lintas **SSL** ke **HTTP**

:::tip
Gunakan tabel di bawah ini sebagai referensi:

Port pada SLB Backend Port Frontend SSL Backend SSL

80, 8080, 8086 80 no no

4848 4848 yes yes

8443 8443 yes yes

4901-4910 4901-4910 yes yes

443 80 yes no

4949 4949 yes no

7979 7979 yes no
:::

Port tambahan dapat dibuka menggunakan:

  * _**[endpoints](<https://docs.dewacloud.com/docs/endpoints/>)**_ \- memetakan port internal container ke port eksternal acak melalui platform [Shared LB](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
  * _**[Public IP](<https://docs.dewacloud.com/docs/public-ip/>)**_ \- memberikan akses langsung ke semua port dari container Anda

![containers access ports scheme](#)

Bergantung pada cara yang dipilih, cukup ikat layanan Anda (pendengar aplikasi) ke alamat internal atau eksternal yang diterima.

## Ports Auto-Redirect{#ports-auto-redirect}

Platform secara otomatis mengarahkan permintaan masuk ke aplikasi yang dihosting di dalam container.

Selama pembuatan node, platform mendeteksi port yang didengarkan pada tingkat TCP. Yang biasa digunakan untuk layanan standar (misalnya SSH, email, database, dll.) difilter secara otomatis. Yang pertama di antara port yang tersisa menjadi titik masuk container sehingga semua permintaan masuk diteruskan ke sana.

Proses ini dilakukan pada setiap peluncuran container, sehingga aplikasi terkait menjadi tersedia melalui [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) yang terintegrasi segera setelah dideploy, tanpa intervensi manual yang diperlukan.

Namun, jika Anda perlu menonaktifkan atau menyesuaikan fungsionalitas ini (misalnya, jika mengekspos panel admin aplikasi), Anda dapat mengubah pengaturan auto-redirect secara manual selama pembuatan container. Untuk itu, pindah ke bagian [Variables](<https://docs.dewacloud.com/docs/container-variables/>), tambahkan parameter _**JELASTIC_EXPOSE**_ yang didedikasikan dan atur nilainya berdasarkan kebutuhan Anda:

  * _0_ atau _DISABLED_ atau _FALSE_ \- untuk menonaktifkan auto-redirect
  * angka dalam rentang _1-65535_ \- untuk menentukan port container, yang akan menerima lalu lintas yang masuk (misalnya di mana itu akan diarahkan)
  * jika nilai lain dinyatakan, fungsionalitas auto-redirect akan bekerja seperti biasa

Sebagai alternatif, daftar port yang dipisahkan koma dapat diberikan melalui variabel _**JELASTIC_PRIORITY_PORTS**_. Platform akan memeriksa mereka satu per satu, mengonfigurasi pengalihan titik masuk ke layanan aktif pertama yang ditemukan. Opsi ini dapat mempercepat waktu startup container dibandingkan dengan analisis semua port selama alur auto-redirect default.

:::note
Jika port yang tepat ditentukan melalui variabel JELASTIC_EXPOSE, JELASTIC_PRIORITY_PORTS diabaikan. Jika tidak ada layanan yang ditemukan pada JELASTIC_PRIORITY_PORTS, alur auto-redirect default dipanggil. Saat bekerja dengan server aplikasi NodeJS, variabel REDIRECT_EXCLUDE_PORTS tambahan dapat digunakan untuk secara manual mengecualikan port dari algoritma auto-redirect (yaitu port 80 tidak akan diarahkan ke mereka).
:::

Untuk mendapatkan fleksibilitas yang lebih besar atas aksesibilitas node, Anda dapat menyesuaikan pengaturan [container firewall](<https://docs.dewacloud.com/docs/custom-firewall/>).

## Baca Juga{#whats-next}

  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)
  * [Variables](<https://docs.dewacloud.com/docs/container-variables/>)
  * [Links](<https://docs.dewacloud.com/docs/container-links/>) 
  * [Volumes](<https://docs.dewacloud.com/docs/container-volumes/>)
  * [Run Config](<https://docs.dewacloud.com/docs/container-run-configuration/>)