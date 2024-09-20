---
sidebar_position: 10
slug: /vcs-project-deployment
title: VCS Project Deployment
---
# CLI Tutorial: VCS Project Deployment

Deployment melalui VCS adalah cara yang cukup populer dan nyaman untuk integrasi proyek ke dalam Cloud, karena ini menyederhanakan pengoperasian sumber aplikasi dan memungkinkan untuk dengan mudah memperbarui versinya (baik secara manual maupun otomatis dengan interval tertentu). Dan berbagai opsi yang tersedia untuk manajemen deployment VCS melalui CLI memberi Anda kontrol penuh atas aplikasi Anda.

1\. Misalnya, untuk _membuat proyek baru_, perintah berikut harus dijalankan:

```
~/jelastic/environment/vcs/createproject --envName {env_name} --type {type} --context {context} --url {url} [--branch {branch}] --autoupdate {true/false} [--interval {interval}] --autoResolveConflict {true/false} --zdt {true/false}
```

Di sini, daftar parameter dapat dibagi menjadi kelompok berikut:

  * konfigurasi utama
    * `{env_name}` \- nama environment Anda
    * `{type}` \- tipe VCS, baik _git_ atau _svn_; dalam kasus pertama, parameter tambahan `{branch}` diperlukan untuk mengarahkan ke versi proyek yang sesuai
    * `{context}` \- nama konteks untuk proyek baru
    * `{url}` \- tautan ke repositori yang sesuai
  * opsi tambahan (aktivasi mereka ditentukan dengan nilai `{true/false}`)
    * _autoupdate_ \- mengaktifkan [autoupdate](https://docs.dewacloud.com/docs/git-svn-auto-deploy) reguler dari proyek yang Anda deploy; jika diaktifkan, memerlukan parameter `{interval}` tambahan untuk mengatur frekuensi redeployments
    * _autoResolveConflict_ \- mengaktifkan opsi yang disebutkan dengan nama yang sama
    * _zdt_ \- memungkinkan untuk mengaktifkan [ZDT deployment](https://docs.dewacloud.com/docs/php-zero-downtime-deploy) untuk proyek PHP

:::note
Jika Anda perlu terhubung ke repositori pribadi, parameter autentikasi tambahan [–login\{login\}] [–password\{password\}] [–keyId\{keyId\}] harus ditambahkan ke perintah utama. Di sini, Anda perlu menyatakan opsi \{login\} secara wajib (untuk menentukan login akun VCS Anda) dan menyertakan salah satu dari pengaturan berikut tergantung pada jenis akses yang diinginkan (password atau SSH key): \{password\} - kata sandi akun VCS yang bersangkutan \{keyId\} - nama kunci SSH privat yang telah Anda tentukan saat menambahkannya ke dashboard; ini memungkinkan untuk membangun koneksi aman ke repositori dengan kunci SSH publik yang dipasangkan terpasang.
:::

![CLI create VCS project](#)

Setelah melakukan eksekusi, Anda akan ditampilkan informasi singkat tentang proyek yang dibuat dalam respons yang diterima.

:::tip
Perintah yang dijelaskan di atas sesuai dengan fungsi kerangka tambah proyek di dashboard, sehingga jika Anda kembali ke panel GUI dan klik tombol Edit di sebelah proyek yang baru muncul, Anda akan melihat semua opsi yang sesuai diterapkan dalam pengaturannya. Jika proyek tidak ditampilkan, cukup segarkan halaman dengan dashboard Anda.
:::

2\. Langkah selanjutnya adalah menjalankan perintah pembaruan untuk menerapkan pengaturan ini dan, sebenarnya, _melakukan deployment proyek Anda_.

```
~/jelastic/environment/vcs/update --envName {env_name} --context {context}
```

Atur nilai parameter yang sama seperti pada langkah sebelumnya.

![CLI update VCS project](#)

Selanjutnya, perintah ini juga dapat digunakan untuk redeployment manual aplikasi Anda berdasarkan sumber VCS yang diperbarui.

3\. Jika Anda perlu _mengedit pengaturan proyek_ (misalnya untuk mengalihkan cabang versi), metode _editproject_ harus dijalankan:

```
~/jelastic/environment/vcs/editproject --envName {env_name} --type {type} --oldcontext {oldcontext} --newcontext {newcontext} --url {url} [--branch {branch}] --autoupdate {true/false} [--interval {interval}] --autoResolveConflict {true/false} --zdt {true/false}
```

Sebagian besar parameter sudah familiar bagi Anda, kecuali yang berikut yang telah menggantikan properti _\{project\}_ yang sebelumnya digunakan:

  * `{oldcontext}` \- nama proyek (yaitu konteks) yang harus diubah
  * `{newcontext}` \- konteks baru untuk proyek (wajib untuk menentukan; namun, dapat dinyatakan sama dengan `{oldcontext}`)

Nilai opsi lainnya dapat berubah berdasarkan kebutuhan Anda.

![CLI edit VCS project](#)

:::note
Perintah ini hanya memperbarui pengaturan proyek yang bersangkutan, sementara untuk penerapannya, metode pembaruan harus dipanggil (kami sudah mempertimbangkannya di langkah kedua).
:::

Itu saja! Sekarang Anda dapat membuat dan mengelola proyek VCS Anda sendiri di platform langsung melalui terminal Anda.

## Baca Juga{#whats-next}

Untuk contoh penggunaan yang lebih banyak, lihat dokumen berikut:
  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)