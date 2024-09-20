---
sidebar_position: 3
slug: /compound-container
title: Compound Container
---

# Penyimpanan Data di Compound Container

Platform ini memberikan kemungkinan untuk menganggap setiap node dalam akun sebagai server penyimpanan data, yaitu menetapkannya peran penyimpanan tambahan di samping peran utamanya. Menggunakan jenis container gabungan semacam ini paling cocok untuk menangani proyek sederhana.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/use-case/compound-container/01-storage-in-existing-node.png" alt="storage in existing node" width="20%"/>

Dengan cara ini, Anda dapat memanfaatkan fungsionalitas penyimpanan bersama tanpa adanya komplikasi berlebihan dari topologi lingkungan Anda akibat penyertaan node terpisah. Dan pemanfaatan server yang komplementer, yang kehadirannya diperlukan karena perannya namun tidak terlalu banyak dimuat, umumnya membantu menghemat uang dibandingkan dengan penggunaan Container Penyimpanan Bersama yang berdedikasi.

Juga ingat, bahwa file lokal dapat diambil oleh aplikasi jauh lebih cepat dibandingkan ketika mereka diakses melalui jaringan. Jadi, misalnya, jika Anda memiliki dua node dengan salah satunya mendistribusikan beberapa konten statis dan lainnya - hanya mengeluarkan atas permintaan, solusi terbaik adalah dengan mengatur penyimpanan di container pertama untuk memastikan distribusi yang lebih cepat dan mencegah jaringan dari menjadi bottleneck.

## Pelajari cara:[![](#)](<https://docs.dewacloud.com/docs/compound-container-storage/#learn-how-to>)

  * Menambahkan [mount points](<https://docs.dewacloud.com/docs/mount-points/>) untuk mengakses data dalam folder jarak jauh
  * [Ekspor data](<https://docs.dewacloud.com/docs/storage-exports/>) dari satu node ke node lainnya
  * Menyimpan data dalam [master layer container](<https://docs.dewacloud.com/docs/master-container-storage/>)
  * Menggunakan [dedicated container](<https://docs.dewacloud.com/docs/dedicated-storage/>) untuk penyimpanan data
