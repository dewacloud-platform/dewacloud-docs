---
sidebar_position: 2
slug: /public-ip
title: Public IP
---

# Public IP

Platform menyediakan pengguna dengan [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/) (SLB) sebagai titik masuk tunggal default untuk semua aplikasi yang di-host, yang terletak pada node perangkat keras. Namun, untuk lingkungan produksi, disarankan menerima dan memproses permintaan melalui **Alamat IP Publik** yang membentuk koneksi langsung antara Internet dan container tertentu. Dibandingkan dengan akses melalui SLB, pendekatan ini memastikan interaksi yang lebih aman dan efektif.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/public-ip/01-public-ip-vs-shared-lb.png" alt="public IP vs shared load balancer" width="80%"/>

IP Publik dapat dilampirkan ke tumpukan perangkat lunak mana pun di lingkungan Anda (kecuali, node [Memcached](https://docs.dewacloud.com/docs/memcached/)), mewakili solusi yang lebih stabil dengan risiko lebih rendah terkena dampak aplikasi lain. Selain itu, ini membuka akses ke fitur seperti [FTP add-on](https://docs.dewacloud.com/docs/ftp-ftps-support/), [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl/), [remote debugging](https://www.virtuozzo.com/application-platform-docs/remote-debugging/) dari IDE, [WebSockets](https://www.virtuozzo.com/application-platform-docs/websockets/), dll.

Platform mendukung dua versi [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol):

  * _**Internet Protocol version 4 (IPv4)**_ adalah revisi keempat dalam pengembangan IP dan versi pertama dari protokol yang akan digunakan secara luas
  * _**Internet Protocol version 6 (IPv6)**_ adalah versi IP terbaru, yang merupakan peningkatan evolusioner dari IPv4 dan dirancang untuk memenuhi kebutuhan lebih banyak alamat, menyediakan routing multicast yang lebih baik dan menyederhanakan pemrosesan oleh router

Untuk mengikat alamat IP eksternal ke node yang dibutuhkan, Anda perlu mengaktifkan (atau [mengatur jumlah yang dibutuhkan](https://www.virtuozzo.com/application-platform-docs/multiple-public-ip/)) _Public IPv4_ / _Public IPv6_ dalam bagian tengah jendela **topology wizard**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/public-ip/02-wizard-add-public-ip.png" alt="wizard add public IP" max-width="100%"/>

:::warning
Mengaktifkan Public IPv4 mematikan opsi Akses melalui SLB secara default. Hal ini dapat menyebabkan gangguan sementara (beberapa menit) dalam akses lingkungan karena cache DNS. Jika melampirkan IP eksternal untuk node yang diskalakan secara horizontal, setiap container dalam lapisan akan dilengkapi dengan kumpulan alamat sendiri.
:::

Untuk menemukan dan mengelola IP yang dialokasikan dalam lingkungan yang ada, perluas string _**node**_ yang sesuai dalam daftar topologi lingkungan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/external-access-to-applications/public-ip/03-dashboard-manage-external-ip-addresses.png" alt="dashboard manage external ip addresses" max-width="100%"/>

Di sini, saat melayang di atas IP, Anda dapat mengakses fungsionalitas berikut:

  * **Copy to Clipboard** \- menyalin alamat yang sesuai dalam satu klik
  * **Attach/Detach IP(s)** \- memungkinkan penyesuaian jumlah IP publik (baik IPv4 dan IPv6)
  * **Detach IP** \- menghapus alamat tertentu

:::note
IP publik adalah opsi berbayar, yang dikenakan biaya untuk setiap jam penggunaannya. Harga pasti ditentukan oleh penyedia layanan hosting Anda dan dapat ditemukan di frame Quotas & Pricing > Pricing > Options pada dashboard. Jika Anda mengaktifkan IP publik untuk node apa pun di lingkungan Anda, Anda tidak dapat menggunakan fungsionalitas swap domain untuk itu. Pertimbangkan menggunakan API swap Public IP. Jika bekerja dengan beberapa IP publik, alamat eksternal pertama yang terlampir (dari setiap jenis IPv4 dan IPv6) dianggap sebagai yang utama dan hanya dapat dihapus terakhir. Ini digunakan untuk lalu lintas masuk dan keluar, sementara sisanya hanya dapat menerima lalu lintas tersebut.
:::

## Baca Juga{#whats-next}

  * [Shared Load Balancer](https://docs.dewacloud.com/docs/shared-load-balancer/)
  * [Endpoints](https://docs.dewacloud.com/docs/endpoints/)
  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)
  * [FTP/FTPS Support](https://docs.dewacloud.com/docs/ftp-ftps-support/)
  * [Multiple Domains with Public IP](https://docs.dewacloud.com/docs/multiple-domains/)