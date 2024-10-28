---
sidebar_position: 4
slug: /php-app-server-configuration
title: PHP App Server Configuration
---
<span id="back"></span>

# PHP Application Server Configuration{#back}

Untuk melakukan konfigurasi yang diperlukan, tekan tombol **Config** di samping server aplikasi Anda. Jika Anda memiliki **beberapa server aplikasi**, Anda dapat mengkonfigurasinya bersama atau terpisah. Untuk melakukannya, ikuti langkah-langkah berikut:

1\. Buka menu drop-down di bagian atas tab konfigurasi. Ini mencakup daftar semua server aplikasi di environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/01-multiple-php-nodes.png" alt="multiple PHP nodes" width="50%"/>

2\. Pilih yang Anda butuhkan dan buat konfigurasi.

3\. Untuk menerapkan perubahan:

  * hanya untuk server yang dipilih, klik tombol **Save only for the current instance** dari menu drop-down;
  * untuk semua server, klik **Save for all instances**.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/02-save-for-current-all-instances.png" alt="save for current all instances" width="70%"/>

:::warning
**Catatan**: jika Anda membuat/menamai ulang file atau folder di Configuration manager, ini hanya akan diterapkan dalam daftar node yang dipilih. Anda tidak dapat menyimpan perubahan ini untuk semua server aplikasi yang tersedia di environment. Jika Anda juga ingin membuat/menamai ulang file atau folder di server lain, Anda perlu melakukannya secara manual.
:::

Di bawah ini Anda dapat melihat daftar file konfigurasi yang tersedia untuk diedit di server aplikasi PHP:

### Apache{#apache}

| Folder | File | Path |
|---|---|---|
| [etc](https://docs.dewacloud.com/docs/#etc) | php.ini | /etc |
| [conf.d](https://docs.dewacloud.com/docs/#confd) | modules.conf, aliases.conf, geoip.conf, mod_security.conf, php.conf, ssl.conf, welcome.conf | /etc/httpd/conf.d/ |
| [conf](https://docs.dewacloud.com/docs/#conf) | httpd.conf | /etc/httpd/conf/ |
| [webroot](https://docs.dewacloud.com/docs/#webroot) |  | /var/www/webroot |
| [cron](https://docs.dewacloud.com/docs/#cron) | apache | /var/spool/cron |
| [keys](https://docs.dewacloud.com/docs/#keys) |  | /var/lib/jelastic/keys |
| [modules](https://docs.dewacloud.com/docs/#modules) |  | /usr/lib64/php/modules |

### NGINX-PHP{#nginx-php}

| Folder | File | Path |
|---|---|---|
| [etc](https://docs.dewacloud.com/docs/#etc) | php-fpm.conf, php.ini | /etc |
| [conf.d](https://docs.dewacloud.com/docs/#confd) | virtual.conf, ssl.conf | /etc/nginx/conf.d |
| [conf](https://docs.dewacloud.com/docs/#conf) | nginx.conf | /etc/nginx |
| [webroot](https://docs.dewacloud.com/docs/#webroot) |  | /var/www/webroot |
| [cron](https://docs.dewacloud.com/docs/#cron) | nginx | /var/spool/cron |
| [keys](https://docs.dewacloud.com/docs/#keys) |  | /var/lib/jelastic/keys |
| [modules](https://docs.dewacloud.com/docs/#modules) |  | /usr/lib64/php/modules |

Klik pada tautan untuk mendapatkan lebih banyak informasi tentang pengaturan mana yang dapat diubah di folder yang sesuai.

## ETC{#etc}

Konfigurasi server PHP utama dilakukan di file _**php.ini**_ yang terletak di folder **etc**.

Sebagai contoh, di sini Anda dapat mengatur:

  * [PHP Extensions](https://docs.dewacloud.com/docs/php-extensions/)
  * [PHP Accelerators](https://docs.dewacloud.com/docs/php-accelerators/)
  * [Menyimpan sesi PHP di Memcached](https://docs.dewacloud.com/docs/php-sessions-memcached/)
  * [Konfigurasi Keamanan PHP.INI](https://docs.dewacloud.com/docs/php-security-settings/)

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/03-php-ini-configuration-file.png" alt="php.ini configuration file" width="70%"/>



## CONF{#conf}

  * **Apache**

Untuk server aplikasi Apache file konfigurasi utama adalah _**httpd.conf**_ yang terletak di folder **conf**. Misalnya, dengan menggunakannya, Anda dapat melakukan tindakan berikut:

  * mengatur [Multiple Domains](https://docs.dewacloud.com/docs/multiple-domains-php/)
  * mengaktifkan [modul Apache kustom](https://docs.dewacloud.com/docs/add-apache-modules/)
  * menggunakan [modul WebDav](https://docs.dewacloud.com/docs/apache-webdav-module/)
  * melakukan [konfigurasi keamanan](https://docs.dewacloud.com/docs/apache-security-configurations/) yang diperlukan
  * mengkonfigurasi [virtual host berbasis nama](https://docs.dewacloud.com/docs/name-based-apache-virtual-host/)
  * mengaktifkan [modul statistik](https://docs.dewacloud.com/docs/apache-statistics-module/) untuk melihat statistik server Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/04-httpd-configuration-file.png" alt="httpd.conf configuration file" width="50%"/>

:::warning
**Catatan:** Untuk melakukan konfigurasi kustom apa pun di file _**httpd.conf**_, Anda perlu menghapus string _#Jelastic autoconfiguration mark_ di awal file:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/05-autoconfiguration-mark.png" alt="autoconfiguration mark" width="100%"/>
:::

Jumlah pekerja untuk memproses permintaan PHP meningkat secara otomatis di server Apache tergantung pada jumlah cloudlet yang Anda nyatakan untuknya.

Untuk memeriksanya, temukan dan ingat nilai _MaxClients_ di file _**httpd.conf**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/06-maxclients-value-before.png" alt="MaxClients value before" width="100%"/>

Setelah itu, ubah topologi environment Anda dengan meningkatkan atau menurunkan batas cloudlet untuk server Anda.

Kembali ke file _**httpd.conf**_ - jumlah _MaxClients_ telah meningkat/menurun.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/07-maxclients-value-after.png" alt="MaxClients value after" width="100%"/>

:::warning
**Catatan:** Fungsi ini akan dinonaktifkan jika Anda menghapus string _# Jelastic autoconfiguration mark_ di awal file _**httpd.conf**_
:::

  * **NGINX**

Untuk melakukan konfigurasi yang diperlukan untuk server NGINX-PHP, file _**nginx.conf**_, terletak di folder **conf**, digunakan. Gunakan untuk mengatur konfigurasi berikut:

  * mengatur [Multiple Domains](https://docs.dewacloud.com/docs/multiple-domains-php/)
  * menggunakan [modul WebDav](https://docs.dewacloud.com/docs/nginx-webdav-module/)
  * melakukan [konfigurasi keamanan](https://docs.dewacloud.com/docs/nginx-security-configurations/) yang diperlukan

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/08-nginx-configuration-file.png" alt="nginx.conf configuration file" width="50%"/>



## CONF.D{#confd}

Folder **conf.d** digunakan untuk menyimpan dan mengelola sub konfigurasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/09-confd-folder-for-configs.png" alt="confd folder for configs" width="50%"/>



## WEBROOT{#webroot}

Folder **webroot** digunakan untuk menyimpan aplikasi yang dibongkar dideploy ke environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/10-webroot-folder-for-applications.png" alt="webroot folder for applications" width="50%"/>



## CRON{#cron}

Server aplikasi menyertakan folder **cron** dengan file konfigurasi tempat cronjobs dapat dikonfigurasikan.

Informasi terperinci tentang konfigurasi Cronjob dapat ditemukan di dokumen [Setting Up a Cronjob](https://docs.dewacloud.com/docs/cron-job/).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/11-cron-folder-for-cronjobs.png" alt="cron folder for cronjobs" width="50%"/>



## KEYS{#keys}

Direktori **keys** digunakan sebagai lokasi untuk mengunggah kunci pribadi apa pun yang diperlukan untuk aplikasi Anda.

Hasilkan kunci, simpan sebagai file sederhana dan unggah ke folder **key**. Sekarang, Anda dapat menggunakannya untuk kasus yang berbeda dengan cukup menyatakan path ke kunci Anda:

`/var/lib/jelastic/keys/{key_file_name}`

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/12-keys-folder-for-ssh-keys.png" alt="keys folder for SSH keys" width="50%"/>



## MODULES{#modules}

Folder modules berisi modul php yang tersedia di platform secara default. Anda juga dapat mengunggah modul php kustom Anda ke folder ini, untuk mengaktifkannya.

Untuk informasi lebih lanjut, navigasikan ke dokumen [PHP Modules](https://docs.dewacloud.com/docs/php-extensions/).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-server-configuration/13-modules-folder-for-php-modules.png" alt="modules folder for PHP modules" width="50%"/>



## Baca Juga{#whats-next}

  * [Apache PHP](https://docs.dewacloud.com/docs/apache-php/)
  * [NGINX PHP](https://docs.dewacloud.com/docs/nginx-php/)
  * [Multiple Domains for PHP](https://docs.dewacloud.com/docs/multiple-domains-php/)