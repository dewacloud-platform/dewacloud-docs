---
sidebar_position: 11
slug: /cli-ip-swap
title: Swap Public IPs
---
# CLI Tutorial: Public IPs (External Addresses) Swap

Operasi [pertukaran IP publik](https://docs.dewacloud.com/docs/public-ip/) dapat berguna untuk routing permintaan yang masuk ke environment atau aplikasi yang diperlukan. Ini mungkin terutama berguna saat, misalnya, mengganti environment pengujian dan produksi.

Metode CLI _**SwapExtIps**_ yang sesuai memberi Anda kemampuan untuk menukar alamat IP eksternal antara dua container. Jika hanya satu node yang memiliki IP publik, itu akan dipindahkan (ditetapkan ulang) ke instansi kedua. Metode ini dapat bekerja dengan node dari environment yang sama atau berbeda tetapi hanya dalam lingkup satu akun.

Seperti biasa, operasi ini hanya memerlukan satu baris kode untuk dieksekusi:

```
~/jelastic/environment/binder/swapextips --envName {env_name} --sourceNodeId {source_node_id} --targetNodeId {target_node_id} [--sourceIp {source_ip}] [--targetIp {target_ip}]
```

Di sini, parameter berikut harus ditentukan:

  * `{env_name}` \- nama dari environment, di mana IP eksternal yang ditransfer saat ini terpasang
  * `{source_node_id}` \- identifier dari node dari environment yang dinyatakan, yang IP-nya harus dipertukarkan/dipindahkan
  * `{target_node_id}` \- ID dari node target (dapat menjadi bagian dari environment mana pun dalam akun)
  * `{source_ip}` dan `{target_ip}` \- parameter opsional untuk dua alamat spesifik yang akan dipertukarkan (jika tidak ditentukan, semua IP eksternal dari node sumber dipindahkan ke target dan sebaliknya)

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/swap-public-ips/swap-public-ips-1.png" alt="CLI swap external IP" width="100%"/>

:::warning
Sebelum menggunakan metode SwapExtIps CLI, pastikan bahwa node sumber dan tujuan (environment) sedang berjalan dan berada di wilayah yang sama. Sebelum rilis PaaS 5.8, metode ini tidak mendukung IPv6 dan hanya bekerja dengan IPv4. Sebelum rilis PaaS 6.0, pertukaran IP gagal jika environment memiliki domain kustom. Proses ini dapat menyebabkan ketidaktersediaan singkat alamat IP Publik terkait (hingga 10 detik). Jika Anda perlu menukar dua alamat spesifik antara node dengan beberapa IP pada masing-masing, silakan hubungi Tim Dukungan untuk mendapatkan bantuan. Dukungan untuk kasus semacam itu saat ini sedang dalam pengembangan dan akan diimplementasikan dalam rilis mendatang. Jenis node berikut akan dimulai ulang secara otomatis untuk mulai mendengarkan alamat baru setelah operasi: GlassFish, Apache PHP, Apache Ruby, NGINX PHP, NGINX Ruby. Berdasarkan layanan terkompresi, restart manual mungkin diperlukan untuk VPS Elastis dan container Docker kustom untuk menyesuaikan dengan perubahan alamat IP. Kami merekomendasikan memeriksa ulang status Akses melalui SLB untuk kedua node setelah menukar IP.
:::

Dalam beberapa menit, IP Anda akan ditukar antara node yang ditentukan, dan detailnya akan disediakan dalam respons operasi.

Sekarang, karena Anda sudah memahami cara kerja dengan CLI kami, Anda dapat melanjutkan ke otomatisasi manajemen environment. Misalnya, dengan membuat skrip yang sesuai untuk rantai operasi yang sering digunakan. Informasi lengkap tentang semua perintah dan metode yang tersedia dapat ditemukan dalam dokumentasi [platform API](https://docs.dewacloud.com/docs/api-overview/).

## Baca Juga{#whats-next}

Contoh lain dari penggunaan CLI tercantum di bawah ini:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [Docker container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)