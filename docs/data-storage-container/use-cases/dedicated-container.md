---
sidebar_position: 4
slug: /dedicated-container
title: Dedicated Container
---

# Dedicated Storage Container

Untuk aplikasi yang lebih kompleks dan padat, sebaiknya memusatkan data bersama Anda dalam satu container untuk mendapatkan pengelolaan ekspor yang lebih sederhana dan fleksibel (termasuk kontrol izin akses - misalnya, baca-saja untuk satu jenis node dan baca-tulis untuk yang lainnya).

Di dalam platform, [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>) direkomendasikan untuk digunakan dalam berbagi file di beberapa lapisan atau bahkan lingkungan dalam satu akun. Ini dioptimalkan secara khusus untuk penyimpanan data (yaitu berfokus pada kinerja dan menyediakan jumlah ruang disk yang diperbesar).

![dedicated container storage](#)

Selain itu, dengan menggunakan Shared Storage Container terpisah, Anda mendapatkan manfaat berikut:

  * Karena penyimpanan di sini mewakili container yang independen, beban tinggi yang sesekali dapat ditangani dengan baik tanpa mempengaruhi kinerja aplikasi secara umum (sebagaimana bisa terjadi selama puncak beban jika satu node memenuhi beberapa "peran").
  * Jika diperlukan, Anda dapat dengan mudah menghapus semuanya kecuali data yang diperlukan (yaitu, hanya meninggalkan penyimpanan yang termasuk dalam environment) dan memulai proyek Anda dari awal. Sebagian besar pengaturan environment umum (mis. domain internal dan izin berbagi) akan tetap tidak berubah, yang sangat menyederhanakan reintegrasi proyek.
  * Penyimpanan data terpisah memudahkan pengelolaan beberapa [project clones](<https://docs.dewacloud.com/docs/clone-environment/>) (yaitu, environment) yang didedikasikan untuk tahapan siklus hidup aplikasi yang berbeda (mis. yang terpisah untuk pengembangan, pengujian, dan produksi).
  * Pasang folder dengan [scheduled backups](<https://docs.dewacloud.com/docs/database-backups/>) basis data Anda ke container penyimpanan Anda untuk membuat cadangan otomatis disimpan di server jarak jauh dan, dengan cara ini, meningkatkan keamanan data secara keseluruhan selama upgrade perangkat lunak.

Selain sebenarnya menyimpan data, struktur semacam ini juga dapat dimanfaatkan secara efisien jika Anda perlu berbagi beberapa file konfigurasi umum, yang akan digunakan oleh node pada lapisan dan/atau lingkungan yang berbeda.

Shared Storage Container Anda juga dapat digunakan sebagai penyimpanan eksternal, yaitu Anda dapat mengekspor data dari platform untuk tersedia melalui Internet.

![export data from platform](#)

Dengan cara ini, Anda dapat berbagi beberapa konten untuk layanan pihak ketiga yang diperlukan atau pengembang lain (memberinya izin akses pribadi) atau, secara umum, mendapatkan akses cepat ke data Anda dari titik mana pun dengan server NFS yang di-host di platform.

Dengan menggunakan opsi ini, Anda bahkan dapat membangun solusi berbagi antarcloud Anda sendiri dan/atau beroperasi dengan data yang sama dari instalasi PaaS yang berbeda - temukan konfigurasi server NFS yang diperlukan untuk implementasi semacam itu dalam panduan yang ditautkan.

## Pelajari cara:[![](#)](<https://docs.dewacloud.com/docs/dedicated-storage/#learn-how-to>)

  * Mengoperasikan [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * Menambahkan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) untuk mengakses data dalam folder jarak jauh
  * [Ekspor data](<https://docs.dewacloud.com/docs/storage-exports/>) dari satu node ke node lainnya
  * Konfigurasi container sebagai [penyimpanan NFS eksternal](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)
  * Sambungkan [penyimpanan NFS eksternal](<https://docs.dewacloud.com/docs/external-nfs-storage/>)