---
sidebar_position: 1
slug: /package-managers
title: Package Managers
---

# NodeJS Package Managers

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/package-manager/npm-logo.png" alt="NodeJS package managers" width="20%"/>
</p>

Setiap server aplikasi Node.js yang dibuat di dalam platform disediakan dengan out-of-box support dari dua package manager utama untuk Node.js - _**Yarn**_ dan _**npm**_. Keduanya mengoperasikan registry npm yang sama dengan koleksi package software yang luas, menyediakan standarisasi dan otomatisasi dari proses instalasi, pembaruan, konfigurasi, dan penghapusan.

Secara default, package manager _**npm**_ akan digunakan untuk deployment [archive](https://docs.dewacloud.com/deployment-guide/#archive-deployment-configurations) atau [Git](https://docs.dewacloud.com/deployment-guide/#git--svn-deployment-configurations) melalui dashboard Dewacloud, tetapi bisa dengan mudah diubah ke _**yarn**_ jika diperlukan. Untuk itu, buka menu _ [variable](https://docs.dewacloud.com/container-variables/) dan atur _**PACKAGE_MANAGER** ke value _npm_ atau _yarn_.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/nodejs/package-manager/npm.png" alt="NodeJS package manager variable" width="100%"/>
</p>

Di bawah ini kami akan menjelaskan dasar-dasar dari kedua package manager tersebut, yang bertujuan untuk membantu Anda menentukan mana yang paling sesuai:

- [Node Package Manager (npm)](https://docs.dewacloud.com/#node-package-manager-npm)
- [Yarn Package Manager](https://docs.dewacloud.com/#yarn-package-manager)

## Node Package Manager (npm){#node-package-manager-npm}

**Node Package Manager** ([npm](https://www.npmjs.com/)) dapat digunakan untuk mengelola module tambahan dan package yang diperlukan untuk project Anda, serta untuk instalasi aplikasi siap pakai.

Ada dua cara untuk menginstal package Node.js yang diperlukan dengan _npm_:

1. Tentukan package yang diperlukan dalam bagian [dependencies](https://docs.npmjs.com/files/package.json#dependencies) dari file NodeJS _**package.json**_ yang terletak di direktori root project Anda. Package akan secara otomatis diunduh dan diinstal oleh _npm_ selama startup server aplikasi. Di sini, module baru yang ditentukan dalam file _package.json_ akan ditambahkan setelah restart node NodeJS.

2. Lakukan koneksi ke container melalui [SSH Gate](https://docs.dewacloud.com/ssh-gate/) dan operasikan package Anda secara manual dengan command berikut:

   - _**npm search \{package_name\}**_ - untuk mencari module berdasarkan nama (atau sebagian)
   - _**npm install \{package_name\}**_ - untuk menginstal module yang diperlukan
   - _**npm uninstall \{package_name\}**_ - untuk menghapus module yang telah diinstal sebelumnya
   - _**npm update \{package_name\}**_ - untuk memperbarui module yang ditentukan ke versi terbaru
   - _**npm ls installed**_ - untuk menampilkan list package yang sudah diinstal

## Yarn Package Manager{#yarn-package-manager}

[Yarn](https://yarnpkg.com/en/) adalah package manager yang dirilis baru-baru ini, yang sudah sangat populer karena kecepatannya, kehandalan dan kenyamanannya. Yarn mengoperasikan file NodeJS _**package.json**_ yang sama seperti di _npm_, jadi tidak perlu ada perubahan untuk aplikasi yang ada.

Anda dapat menggunakan daftar command berikut untuk bekerja dengan Yarn, saat terhubung melalui [SSH](https://docs.dewacloud.com/ssh-gate/):

- _**yarn** atau **yarn install**_ - untuk mendapatkan semua dependency package untuk project
- _**yarn remove \{package\}**_ - untuk menghapus package yang ditentukan
- _**yarn add \{package\}@\{version\}**_ - untuk menambahkan package baru ke daftar dependency dan menginstalnya; secara opsional, Anda dapat menentukan versi tertentu sebagai argumen (yang terbaru akan digunakan secara default)
- _**yarn upgrade \{package\}@\{version\}**_ - untuk memperbarui package ke versi terbaru; secara opsional, Anda dapat menentukan versi tertentu sebagai argumen
- _**yarn list**_ - untuk menampilkan list package yang sudah diinstal

## Baca Juga{#whats-next}

- [Node.js Dev Center](https://docs.dewacloud.com/nodejs-center/)
- [Node.js Version](https://docs.dewacloud.com/nodejs-versions/)
- [Node.js Process Managers](https://docs.dewacloud.com/nodejs-process-manager/)
- [Deployment Guide](https://docs.dewacloud.com/deployment-guide/)
- [Git/SVN Auto-Deploy](https://docs.dewacloud.com/git-svn-auto-deploy/)
