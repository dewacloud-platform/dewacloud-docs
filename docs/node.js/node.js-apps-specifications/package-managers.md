---
sidebar_position: 1
slug: /package-managers
title: Package Managers
---

# NodeJS Package Managers

![NodeJS package managers](#)

Setiap server aplikasi Node.js yang dibuat di dalam platform disediakan dengan dukungan out-of-box dari dua package manager utama untuk bahasa ini - _**Yarn**_ dan _**npm**_. Keduanya mengoperasikan registry npm yang sama dengan koleksi luas paket perangkat lunak yang dikhususkan, menyediakan standarisasi dan otomatisasi dari proses instalasi, pembaruan, konfigurasi, dan penghapusan.

Secara default, package manager _**npm**_ akan digunakan untuk operasi [archive](https://docs.dewacloud.com/deployment-guide/#archive-deployment-configurations) atau [Git](https://docs.dewacloud.com/deployment-guide/#git--svn-deployment-configurations) melalui dashboard platform, tetapi bisa dengan mudah dialihkan ke _**yarn**_ jika diperlukan. Untuk itu, akses kerangka _Docker container settings_ yang sesuai dan atur _**PACKAGE_MANAGER**_ Docker container [variable](https://docs.dewacloud.com/container-variables/) ke nilai _npm_ atau _yarn_.

![NodeJS package manager variable](#)

Berikut ini, kami telah mengumpulkan beberapa dasar dari pengoperasian manager ini, dimaksudkan untuk membantu Anda menentukan mana yang paling sesuai:

- [Node Package Manager (npm)](https://docs.dewacloud.com/#node-package-manager-npm)
- [Yarn Package Manager](https://docs.dewacloud.com/#yarn-package-manager)

## Node Package Manager (npm){#node-package-manager-npm}

**Node Package Manager** ([npm](https://www.npmjs.com/)) dapat digunakan untuk mengelola modul tambahan dan paket yang diperlukan untuk proyek Anda, serta untuk instalasi aplikasi siap pakai.

Ada dua cara untuk menginstal paket Node.js yang diperlukan dengan _npm_:

1. Tentukan yang diperlukan dalam bagian [dependencies](https://docs.npmjs.com/files/package.json#dependencies) dari file NodeJS _**package.json**_, terletak di direktori root proyek Anda. Paket semacam itu akan secara otomatis diunduh dan diinstal oleh _npm_ selama startup server aplikasi. Di sini, modul baru yang ditentukan dalam file _package.json_ akan ditambahkan setelah restart node NodeJS.

2. Hubungkan ke container melalui [SSH Gate](https://docs.dewacloud.com/ssh-gate/) dan operasikan paket Anda secara manual dengan perintah berikut:

   - _**npm search \{package_name\}**_ - untuk mencari modul berdasarkan nama (atau sebagian)
   - _**npm install \{package_name\}**_ - untuk menginstal modul yang diperlukan
   - _**npm uninstall \{package_name\}**_ - untuk menghapus modul yang telah diinstal sebelumnya
   - _**npm update \{package_name\}**_ - untuk memperbarui modul yang ditentukan ke versi terbaru
   - _**npm ls installed**_ - untuk mencantumkan paket yang sudah diinstal

## Yarn Package Manager{#yarn-package-manager}

[Yarn](https://yarnpkg.com/en/) adalah package manager yang dirilis baru-baru ini, yang sudah sangat populer karena kecepatannya, kehandalan dan kenyamanannya. Yarn mengoperasikan file NodeJS _**package.json**_ yang sama seperti di _npm_, jadi tidak perlu ada perubahan untuk aplikasi yang ada.

Anda dapat menggunakan daftar perintah berikut untuk bekerja dengan Yarn, saat terhubung melalui [SSH](https://docs.dewacloud.com/ssh-gate/):

- _**yarn** atau **yarn install**_ - untuk mendapatkan semua paket dependensi untuk proyek
- _**yarn remove \{package\}**_ - untuk menghapus paket yang ditentukan
- _**yarn add \{package\}@\{version\}**_ - untuk menambahkan paket baru ke daftar dependensi dan menginstalnya; opsional, Anda dapat menentukan versi tertentu sebagai argumen (yang terbaru akan digunakan secara default)
- _**yarn upgrade \{package\}@\{version\}**_ - untuk memperbarui paket ke versi terbaru; opsional, Anda dapat menentukan versi tertentu sebagai argumen
- _**yarn list**_ - untuk mencantumkan semua paket yang diinstal

## Baca Juga{#whats-next}

- [Node.js Dev Center](https://docs.dewacloud.com/nodejs-center/)
- [Node.js Version](https://docs.dewacloud.com/nodejs-versions/)
- [Node.js Process Managers](https://docs.dewacloud.com/nodejs-process-manager/)
- [Deployment Guide](https://docs.dewacloud.com/deployment-guide/)
- [Git/SVN Auto-Deploy](https://docs.dewacloud.com/git-svn-auto-deploy/)
