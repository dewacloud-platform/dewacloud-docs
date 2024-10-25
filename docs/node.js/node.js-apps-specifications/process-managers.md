---
sidebar_position: 2
slug: /nodejs-process-managers
title: Process Managers
---

# NodeJS Process Managers

Node.js process manager adalah tool yang menyediakan kemampuan untuk mengontrol application life cycle, memantau service yang berjalan, dan memfasilitasi system admin task umum untuk menjaga operabilitas project Anda.

Dewacloud menyediakan tiga process manager pre-configured, yang dapat dipilih dengan cara berikut:

- Dengan memilih tag yang sesuai selama [pembuatan](https://docs.dewacloud.com/setting-up-environment/) environment atau [redeploy](https://docs.dewacloud.com/container-redeploy/) container

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/process-manager/nodejs-process-manager-1.png" alt="select process manager wizard" width="40%"/>

- Dengan mengedit [variable](https://docs.dewacloud.com/container-variables/) _**PROCESS_MANAGER**_ dalam container yang sudah dibuat dengan value _forever_, _npm_, atau _pm2_ (restart diperlukan untuk menerapkan opsi baru)

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/process-manager/nodejs-process-manager-2.png" alt="select process manager variable" width="90%"/>

Mari kita lihat masing-masing manager yang tersedia untuk membantu Anda memilih salah satu:

- [Process Manager (npm)](https://docs.dewacloud.com/#process-manager-npm)
- [PM2](https://docs.dewacloud.com/#pm2)
- [Forever](https://docs.dewacloud.com/#forever)

## Process Manager (npm){#process-manager-npm}

Bersama dengan [package manager](https://docs.dewacloud.com/docs/nodejs-package-managers/#node-package-manager-npm), NPM menyediakan kemampuan untuk start aplikasi. “_npm start_” (yang merupakan alias “_npm run start_”) dijalankan jika **NPM** dipilih sebagai value pada variable _**PROCESS_MANAGER**_ pada container NodeJS. Hasilnya, script yang didefinisikan dalam “_start_” dari _**package.json**_ dapat dilaunch.

Lihat [dokumentasi resminya](https://docs.npmjs.com/cli/v8/commands/npm-run-script) untuk informasi tambahan.

## PM2{#pm2}

[PM2](https://pm2.keymetrics.io/) menyediakan beragam fitur manajemen aplikasi, termasuk pemantauan proses NodeJS yang dilaunch. Anda bisa mengenali [list command](https://www.npmjs.com/package/pm2#commands-overview) untuk _pm2_, yang dapat dieksekusi langsung melalui SSH.

Misalnya, setelah pembuatan server Node.js, Anda dapat menampilkan list process yang berjalan dengan command berikut:

```
pm2 list
```

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/process-manager/nodejs-process-manager-3.png" alt="PM2 list running processes" width="100%"/>

Seperti yang bisa dilihat, ini menunjukkan aplikasi _draw-game_ default sedang berjalan.

Selanjutnya, Anda dapat menghapus aplikasi ini dengan command _**pm2 delete**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/process-manager/nodejs-process-manager-4.png" alt="PM2 delete process" width="100%"/>

PM2 juga memberi pengguna kemampuan untuk membuat file konfigurasi di mana semua opsi run ditampilkan dalam sebuah list, yang berguna untuk deployment aplikasi berbasis microservice, karena beberapa aplikasi dapat dideskripsikan dalam satu file. [Referensi file konfigurasi](https://pm2.keymetrics.io/docs/usage/application-declaration/) yang sesuai dapat ditemukan dengan mengikuti link yang disediakan (misalnya, file _**ecosystem.config.js**_ default digunakan untuk launching file aplikasi _server.js_ sebagai aplikasi _“draw game”_).

## Forever{#forever}

Process manager [forever](https://www.npmjs.com/package/forever) adalah tool CLI sederhana, yang dapat membuat proses NodeJS Anda berjalan terus menerus. Ini secara permanen menjaga child process (seperti project Anda pada server web Node.js) dan secara otomatis melakukan restart saat terjadi kegagalan.

Jalankan command berikut untuk mendapatkan informasi utama tentang penggunaan manager _forever_, action, usage, dll.:

```
forever --help
```

<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/process-manager/nodejs-process-manager-5.png" alt="forever process manager help" width="100%"/>

Dengan menggunakan _forever_ Anda juga dapat menentukan opsi aplikasi dalam [file JSON](https://www.npmjs.com/package/forever#json-configuration-files). Misalnya, untuk game Draw default (secara default tersedia setelah penginstalan server Node.js), file _**/home/jelastic/ROOT/forever.json**_ akan seperti ini:

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
- **append** - memilih apakah log harus ditambahkan (_true_) atau di-overwrite (_false_)
- **watch** - memungkinkan mengaktifkan atau menonaktifkan restart otomatis dari child process saat terjadi perubahan kode aplikasi yang sesuai; setel ke “_false_”, jika Anda ingin menghindari restart tak terduga setelah deployment dari VCS (termasuk [auto-deploy](https://docs.dewacloud.com/git-svn-auto-deploy/))
- **script** - menentukan nama file _**.js**_ yang dapat dieksekusi
- **sourceDir** - menyediakan absolute path ke script yang ditentukan

## Baca Juga{#whats-next}

- [Node.js Dev Center](https://docs.dewacloud.com/nodejs-center/)
- [Node.js Version](https://docs.dewacloud.com/nodejs-versions/)
- [Node.js Package Managers](https://docs.dewacloud.com/nodejs-package-managers/)
- [Deployment Guide](https://docs.dewacloud.com/deployment-guide/)
- [Git/SVN Auto-Deploy](https://docs.dewacloud.com/git-svn-auto-deploy/)