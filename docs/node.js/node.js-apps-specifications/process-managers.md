---
sidebar_position: 2
slug: /process-managers
title: Process Managers
---

# NodeJS Process Managers

![NodeJS process managers](#)

Node.js process manager adalah alat yang menyediakan kemampuan untuk mengontrol siklus hidup aplikasi, memantau layanan yang berjalan, dan memfasilitasi tugas admin sistem umum untuk menjaga operabilitas proyek Anda.

Platform ini menyediakan tiga process manager yang telah dikonfigurasi sebelumnya, yang dapat dipilih dengan cara berikut:

- dengan memilih tag yang sesuai selama [pembuatan](https://docs.dewacloud.com/setting-up-environment/) environment atau [redeploy](https://docs.dewacloud.com/container-redeploy/) container ![select process manager wizard](#)

- dengan mengedit lingkungan Docker _**PROCESS_MANAGER**_ [variable](https://docs.dewacloud.com/container-variables/) dalam container yang sudah dibuat dengan nilai _forever_, _npm_, atau _pm2_ (restart diperlukan untuk menerapkan opsi baru) ![select process manager variable](#)

Berikut ini, kami akan mempertimbangkan masing-masing manager yang tersedia untuk membantu Anda memilih salah satu:

- [Process Manager (npm)](https://docs.dewacloud.com/#process-manager-npm)
- [PM2](https://docs.dewacloud.com/#pm2)
- [Forever](https://docs.dewacloud.com/#forever)

## Process Manager (npm){#process-manager-npm}

Bersama dengan [manajemen paket](https://docs.dewacloud.com/docs/nodejs-package-managers/#node-package-manager-npm), NPM menyediakan kemampuan untuk memulai aplikasi. “_npm start_” (yang merupakan alias “_npm run start_”) dilakukan jika **NPM** dipilih sebagai nilai untuk variabel _**PROCESS_MANAGER**_ pada container NodeJS. Akibatnya, skrip yang didefinisikan dalam “_start_” dari _**package.json**_ diluncurkan.

Lihat [dokumentasi resminya](https://docs.npmjs.com/cli/v8/commands/npm-run-script) untuk informasi tambahan.

## PM2{#pm2}

[PM2](https://pm2.keymetrics.io/) menyediakan beragam fitur manajemen aplikasi, termasuk pemantauan proses NodeJS yang diluncurkan. Anda bisa mengenali [daftar perintah](https://www.npmjs.com/package/pm2#commands-overview) untuk _pm2_, yang dapat dieksekusi langsung melalui SSH.

Misalnya, setelah pembuatan server Node.js, Anda dapat mencantumkan proses yang berjalan dengan perintah berikut:

```
pm2 list
```

![PM2 list running processes](#)

Seperti yang Anda lihat, ini menunjukkan aplikasi _draw-game_ default sedang berjalan.

Selanjutnya, Anda dapat menghapus aplikasi ini dengan perintah _**pm2 delete**_ dan [mendeploy](https://docs.dewacloud.com/deployment-guide/) proyek Anda sendiri (misalnya, aplikasi Hello World default):

![PM2 delete process](#)

Juga, PM2 memberi pengguna kemampuan untuk membuat file konfigurasi di mana semua opsi run tercantum, yang berguna untuk deployment aplikasi berbasis microservice, karena beberapa aplikasi dapat dideskripsikan dalam satu file. [Referensi file konfigurasi](https://pm2.keymetrics.io/docs/usage/application-declaration/) yang sesuai dapat ditemukan dengan mengikuti tautan yang disediakan (misalnya, file _**ecosystem.config.js**_ default digunakan untuk meluncurkan file aplikasi _server.js_ sebagai aplikasi _“draw game”_).

## Forever{#forever}

Process manager [forever](https://www.npmjs.com/package/forever) adalah alat CLI sederhana, yang memungkinkan membuat proses NodeJS Anda berjalan terus menerus. Ini secara permanen menjaga child process (seperti proyek Anda pada server web Node.js) dan secara otomatis memulai ulang saat terjadi kegagalan.

Jalankan perintah berikut untuk mendapatkan informasi utama tentang penggunaan manager _forever_, tindakan, penggunaan, dll.:

```
forever --help
```

![forever process manager help](#)

Juga, dengan menggunakan _forever_ Anda dapat menentukan opsi aplikasi dalam [file JSON](https://www.npmjs.com/package/forever#json-configuration-files). Misalnya, untuk game Draw default (tersedia setelah penginstalan server Node.js), file _**/home/jelastic/ROOT/forever.json**_ ini terlihat seperti:

```json
{
  "uid": "app1",
  "append": true,
  "watch": true,
  "script": "server.js",
  "sourceDir": "/home/jelastic/ROOT"
}
```

di mana:

- **uid** - menetapkan nama yang unik untuk aplikasi Anda
- **append** - memilih apakah log harus ditambahkan (_true_) atau ditimpa (_false_)
- **watch** - memungkinkan mengaktifkan atau menonaktifkan restart otomatis dari child process saat terjadi perubahan kode aplikasi yang sesuai; setel ke “_false_”, jika Anda ingin menghindari restart tak terduga setelah deployment dari VCS (termasuk [auto-deploy](https://docs.dewacloud.com/git-svn-auto-deploy/))
- **script** - menentukan nama file _**.js**_ yang dapat dieksekusi
- **sourceDir** - menyediakan path absolut ke skrip yang ditentukan

## Baca Juga{#whats-next}

- [Node.js Dev Center](https://docs.dewacloud.com/nodejs-center/)
- [Node.js Version](https://docs.dewacloud.com/nodejs-versions/)
- [Node.js Package Managers](https://docs.dewacloud.com/nodejs-package-managers/)
- [Deployment Guide](https://docs.dewacloud.com/deployment-guide/)
- [Git/SVN Auto-Deploy](https://docs.dewacloud.com/git-svn-auto-deploy/)