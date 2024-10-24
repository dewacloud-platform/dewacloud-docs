---
sidebar_position: 8
slug: /deployment-hooks
title: Deployment Hooks
---
# Deployment Hooks

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/01-deployment-hooks-logo.png" alt="deployment hooks logo" max-width="100%"/> 
**Hook** (atau [webhook](https://en.wikipedia.org/wiki/Webhook)) adalah prosedur penyisipan kode ke dalam beberapa operasi standar untuk menerapkan beberapa kustomisasi. Dalam batasan platform, fungsi ini memungkinkan Anda untuk mengeksekusi skrip kustom Anda sebelum dan/atau setelah operasi deployment aplikasi. Dalam hal ini, untuk node pembangunan [Maven](https://docs.dewacloud.com/docs/java-vcs-deployment/) dan server aplikasi Golang, _pre-_ dan _post-_ project build hooks dapat ditetapkan tambahan.

Berikut ini kita akan mengulas cara bekerja dengan hooks di platform ini dan akan me-review beberapa kasus penggunaan umum dengan instruksi langkah demi langkah dimana fungsi ini bisa sangat berguna:

* [Manajemen Hooks](https://docs.dewacloud.com/docs/#hooks-management)
* [Kasus Penggunaan Hooks](https://docs.dewacloud.com/docs/#hooks-use-cases)

## Hooks Management{#hooks-management}

Menjadi bagian dari proses deployment, **Hooks** tersedia dalam bagian yang dapat diperluas dari form dashboard yang sesuai. Jadi, untuk mengelola hooks, akses dialog deployment aplikasi menggunakan salah satu opsi berikut:

* _Deployment Manager_ <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/02-deployment-manager.png" alt="deployment manager" max-width="100%"/>

* _Deployment_ tombol untuk server aplikasi <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/03-deployment-buttons.png" alt="deployment buttons" max-width="100%"/>

1\. Dalam bingkai yang terbuka, pilih jenis sumber deployment yang diinginkan dan perluas bagian _**Hooks**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/04-deployment-hooks.png" alt="deployment hooks" max-width="100%"/>

Di sini, klik tombol **Pre** atau **Post** untuk menyediakan kode Anda, yang akan dijalankan tepat sebelum/segera setelah deployment (sesuai dengan opsi yang dipilih).

2\. Masukkan kode hook yang dibutuhkan dalam jendela editor yang terbuka. Di sini, Anda dapat menggunakan bahasa pemrograman yang Anda sukai - pastikan bahwa interpretator kode yang sesuai sudah terinstal di container target (baik diinstal sebelumnya oleh Anda sendiri atau termasuk dalam build stack default).

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/05-hook-example.png" alt="hook example" max-width="100%"/>

:::tip
 Di dalam panel atas, Anda memiliki akses ke alat-alat berikut untuk membantu saat mengedit kode: Wrap lines- memisahkan teks agar dilanjutkan di baris bawah jika mencapai batas bingkai; Search- memungkinkan untuk dengan mudah menemukan informasi yang diperlukan; dilengkapi dengan opsi pencarian tambahan Match case dan Regex; Help- mengarahkan ke dokumen saat ini untuk mendapatkan detail penggunaan hooks yang tepat. 
:::

Klik **Apply** ketika siap. Sekarang Anda dapat melakukan deployment aplikasi Anda.

3\. Setelah deployment berhasil, Anda dapat mengklik tombol **Show Logs** dalam notifikasi dashboard yang muncul untuk melihat respons detail pada operasi yang dilakukan:

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/07-deploy-success.png" alt="deploy success" max-width="100%"/>

:::note
 Jika terjadi kesalahan selama eksekusi hook, Anda akan mendapatkan notifikasi yang sesuai, sementara proses deployment akan dibatalkan: Klik tombol Show Logs untuk mendapatkan detail tentang kesalahan yang terjadi dengan melihat log aksi deployment (yang sesuai dengan file hooks.log, yang bisa diakses melalui bagian Logs untuk server yang sesuai). 
 :::

## Hooks Use Cases{#hooks-use-cases}

Hooks menyediakan berbagai peluang bagi pengembang, memungkinkan untuk mengotomatisasi mayoritas proses rutin untuk mendapatkan aplikasi yang siap bekerja tepat setelah deployment.

Sebagai contoh, di bawah ini kami telah mengumpulkan sejumlah tugas yang paling umum yang dapat diprogram untuk secara otomatis diselesaikan oleh hooks:

* **Pre-deploy hooks** (dilakukan sebelum deployment aplikasi yang sebenarnya) 
  * untuk memeriksa apakah semua persyaratan terpenuhi
  * untuk menginstal perangkat lunak yang diperlukan sebelumnya
  * untuk membersihkan atau mempersiapkan folder yang didedikasikan untuk file aplikasi
  * untuk mencatat data
* **Post deploy** (setelah deployment selesai) 
  * untuk me-restart server aplikasi setelah deployment
  * untuk menginstal dependensi proyek
  * untuk menerapkan kustomisasi lainnya yang diinginkan
  * untuk mencatat data

Di bawah ini, kami telah memberikan contoh sederhana pembuatan file log Anda sendiri dengan bantuan hooks.

1\. Inisiasi deployment proyek Anda menggunakan cara apa pun yang Anda sukai. Kami akan menggunakan arsip _**HelloWorld.zip**_ default dari deployment manager.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/09-deploy-helloworld.png" alt="deploy HelloWorld" max-width="100%"/>

2\. Perluas bagian _**Hooks**_, klik hook **Pre** dan masukkan kode berikut dalam editor yang terbuka:

```bash
echo "$(date) - deployment start" >> ~/mylog
if ! grep -q "$(pwd)/mylog" /etc/jelastic/redeploy.conf; then
    echo "$(pwd)/mylog" >> /etc/jelastic/redeploy.conf
fi   
```

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/10-pre-deploy-hook.png" alt="pre-deploy hook" max-width="100%"/>

Ini akan menambahkan string ke dalam file _**mylog**_ (akan otomatis dibuat di direktori home, jika tidak ada), yang akan mengidentifikasi awal deployment dan menyediakan stempel waktu yang sesuai. Juga, kita memeriksa apakah file _**redeploy.conf**_ memasukkan file log kustom kita dan, jika tidak, tambahkan baris yang sesuai - dengan cara seperti ini, ia akan tetap ada setelah operasi [redeploy container](https://docs.dewacloud.com/docs/container-redeploy/).

3\. Untuk hook _**Post**_ tambahkan kode berikut:

```bash
echo "$(date) - deployment end" >> ~/mylog
```

:::tip
 Jika diperlukan, Anda dapat menggunakan perintah exit, yang memungkinkan untuk menghentikan hook dan eksekusi operasi deployment/build yang sesuai di titik mana pun. Di sini, nilai 0 (yaitu, exit 0) digunakan untuk menunjukkan keberhasilan, sedangkan nilai lainnya mengasumsikan kesalahan (misalnya, exit 1). 
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/11-post-deploy-hook.png" alt="post-deploy hook" max-width="100%"/>

Di sini, kita hanya mencatat akhir dari deployment kita.

4\. Terakhir, lakukan deployment aplikasi Anda dan periksa file **_mylog_** dan **_redeploy.conf_** untuk memverifikasi eksekusi hooks yang berhasil.

<img src="https://assets.dewacloud.com/dewacloud-docs/deployment/deployment-hooks/12-check-hooks-execution.png" alt="check hooks execution" max-width="100%"/>

Seperti yang Anda lihat, skrip kami telah bekerja sebagaimana mestinya, menyediakan waktu mulai/selesai deployment dan memastikan itu terlindungi selama operasi redeploy.

Jika Anda menghadapi masalah saat bekerja dengan hooks, jangan ragu untuk meminta bantuan dari pakar teknis kami di
[Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

* [Deployment Guide](https://docs.dewacloud.com/docs/deployment-guide/)
* [Maven for Deploy via GIT/SVN](https://docs.dewacloud.com/docs/java-vcs-deployment/)
* [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
* [Container Redeploy](https://docs.dewacloud.com/docs/container-redeploy/)