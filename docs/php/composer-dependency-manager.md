---
sidebar_position: 8
slug: /php-composer
title: Composer Dependency Manager
---
# PHP Composer for Smart Dependency Management of Your Cloud Applications

<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/01-php-composer-logo.png" alt="PHP Composer logo" width="20%"/>

**[Composer](<https://getcomposer.org/>)** adalah salah satu alat manajemen dependencies paling populer di PHP yang terinspirasi oleh npm dari node dan bundler dari ruby. Ini akan mengelola semua pustaka dan paket yang diperlukan untuk aplikasi Anda secara cerdas. Berjalan pada basis per-proyek, **Composer** menentukan versi mana dari paket yang bergantung pada proyek Anda dan menginstalnya di direktori kerja. Selain itu, alat ini menyediakan fitur [autoload](<https://getcomposer.org/doc/04-schema.md#autoload>) untuk menjaga agar paket Anda tetap up-to-date.

**Composer** terintegrasi ke semua server aplikasi PHP (_Apache_, _NGINX_, _LiteSpeed_, _LEMP_, dan _LSSMP_) secara default. Ini diinstal ke folder **/usr/local/bin**, yang ditambahkan ke variabel PATH, membuat Composer dapat dioperasikan dari mana saja di node melalui pintasan _composer_ (misalnya _composer about_). Selain itu, jika proyek memiliki file _**composer.json**_, Composer dapat mengelola dependencies secara langsung selama instalasi menggunakan _Post-Deploy_ [hook script](<https://docs.dewacloud.com/docs/deployment-hooks/>). Yang perlu Anda lakukan adalah pindah ke direktori proyek Anda dan jalankan perintah _composer install_:

```
cd $WEBROOT/{project_name}
composer install
```

## Composer Update{#composer-update}

Anda secara otomatis diberikan versi terbaru dari Composer selama pembuatan node. Namun, jika versi Composer yang lebih baru dirilis, Anda dapat dengan mudah mendapatkannya tanpa harus membuat ulang seluruh container. Ikuti langkah-langkah berikut untuk menginstal versi composer terbaru ke dalam container PHP Anda:

1\. Terhubung ke node yang sesuai melalui SSH. Misalnya, menggunakan [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>) bawaan.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/02-apache-web-ssh-access.png" alt="Apache Web SSH access" width="100%"/>

2\. Unduh penginstal Composer dengan perintah berikut:

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/03-ssh-download-composer-installer.png" alt="SSH download Composer installer" width="100%"/>

3\. Instal Composer ke direktori saat ini.

```
php composer-setup.php --install-dir=./ --filename=composer
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/04-ssh-install-php-composer.png" alt="SSH install PHP Composer" width="100%"/>

:::tip 
Jika diperlukan, Anda dapat berpindah ke direktori yang diperlukan sebelum operasi atau menyesuaikan jalur melalui parameter install-dir. Namun, Anda tidak dapat menginstal ke direktori **/usr/local/bin/** dengan instance Composer awal.
:::

4\. Mari jalankan _versi lokal_ dari Composer ini (yaitu menggunakan jalur relatif atau absolut) untuk memastikan semuanya bekerja seperti yang diharapkan. Misalnya:

```
./composer about
```

<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/05-ssh-php-composer-about.png" alt="SSH PHP Composer about" width="100%"/>

:::tip 
Jika dependency manager berfungsi dengan baik, kami menyarankan untuk menghapus penginstal (karena tidak diperlukan lagi).  
```
php -r "unlink('composer-setup.php');"
```
<img src="https://assets.dewacloud.com/dewacloud-docs/php/composer-dependency-manager/06-ssh-remove-composer-installer.png" alt="SSH Remove Composer Installer" width="100%"/>

:::

Itu saja! Versi terbaru Composer berhasil diinstal dan siap digunakan.

## Baca Juga{#whats-next}

  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [Deployment Hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)
  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
  * [PHP Extensions](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Accelerators](<https://docs.dewacloud.com/docs/php-accelerators/>)