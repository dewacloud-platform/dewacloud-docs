---
sidebar_position: 2
slug: /database-configuration-files
title: Database Configuration Files
---
# Database Configuration Files

Dalam panduan ini, kami akan mencantumkan semua file konfigurasi utama di server [database yang dikelola platform](<https://docs.dewacloud.com/docs/software-stacks-versions/#databases>). Setiap baris tabel sesuai dengan folder yang berisi konfigurasi untuk database yang terdaftar di kolom **Database Types**.

Folder | Path | Database Types  
---|---|---  
[conf](#conf) | /var/lib/pgsql/data | PostgreSQL  
[etc](#etc) | /etc | all  
[cron](#cron) | /var/spool/cron | all  
[scripts](#scripts) | /var/lib/jelastic/bin | all  
[backup](#backup) | /var/lib/jelastic/backup | all  
[keys](#keys) | /var/lib/jelastic/keys | all  
[conf.d](#confd) | /etc/httpd/conf.d | MySQL, MariaDB, Percona, PostgreSQL  
  
## ETC {#etc}

Konfigurasi PHP dilakukan dalam file _**php.ini**_ yang terletak di folder **etc**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-1.png" alt="database php.ini" max-width="100%"/>

_MySQL_, _MariaDB_, dan _Percona_ menyertakan file konfigurasi _**my.cnf**_ untuk manajemen database. Perlu diperhatikan bahwa platform secara otomatis mengelola pengaturan berikut dalam file ini:

  * _key_buffer_size_
  * _table_open_cache_
  * _myisam_sort_buffer_size_
  * _innodb_buffer_pool_size_

Jika Anda ingin mengubah pengaturan dari daftar di atas secara manual, Anda perlu menghapus baris “ _#Jelastic autoconfiguration mark._ ” di awal file. Jika tidak, perubahan khusus Anda akan ditimpa.

:::tip
Sebagai alternatif, Anda dapat menimpa pengaturan apa pun di file /etc/my.cnf (termasuk yang dikelola oleh platform autoconfiguration) dengan menyatakannya di file /etc/mysql/conf.d/custom.cnf.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-2.png" alt="MySQL my.cnf" max-width="100%"/>

## CRON {#cron}

Server database menyertakan folder **/var/spool/cron** dengan file konfigurasi, di mana cron jobs dapat dikonfigurasi.

Misalnya, Anda dapat mengatur [backup terjadwal](<https://docs.dewacloud.com/docs/database-backups/>) untuk database Anda. Ekspresi cron yang diperlukan sudah termasuk dalam file konfigurasi cron secara default. Anda hanya perlu menghapus komentar pada baris yang sesuai dan, jika diperlukan, menyesuaikannya sesuai dengan kebutuhan khusus Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-3.png" alt="database cron config" max-width="100%"/>

Anda dapat menemukan informasi lebih lanjut dalam dokumentasi [Setting Up Cronjob](<https://docs.dewacloud.com/docs/cron-job/>).

## SCRIPTS {#scripts}

Folder ini berisi script default _**[backup_script.sh](<https://docs.dewacloud.com/docs/database-backups/>)**_. Anda juga dapat menggunakan folder **/var/lib/jelastic/bin** untuk mengunggah skrip khusus Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-4.png" alt="database scripts folder" max-width="100%"/>

## BACKUP {#backup}

Folder **/var/lib/jelastic/backup** digunakan untuk menyimpan file [backup database](<https://docs.dewacloud.com/docs/database-backups/>). Anda dapat menggunakan file-file ini untuk memulihkan data database Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-5.png" alt="database backup folder" max-width="100%"/>

## KEYS {#keys}

Direktori **/var/lib/jelastic/keys** digunakan sebagai lokasi untuk mengunggah kunci pribadi yang diperlukan untuk aplikasi Anda.

Buat kunci, simpan sebagai file sederhana, dan unggah ke folder **keys**. Anda kemudian dapat menggunakannya untuk berbagai keperluan dengan hanya menyatakan path ke kunci Anda, yaitu `/var/lib/jelastic/keys/{keyName}`.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-6.png" alt="database keys folder" max-width="100%"/>

## CONF.D {#confd}

Folder **/etc/httpd/conf.d** biasanya digunakan untuk menyimpan dan mengelola sub-konfigurasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-7.png" alt="database conf.d folder" max-width="100%"/>

Misalnya, Anda dapat mengakses file konfigurasi panel admin (tergantung pada database, misalnya _**phpMyAdmin-jel.conf**_ untuk MySQL) melalui folder **conf.d**. Gunakan file-file ini untuk menetapkan kriteria yang sesuai untuk mengizinkan/menolak akses berdasarkan alamat IP atau domain.

## CONF {#conf}

File konfigurasi utama server database PostgreSQL terletak di folder **/var/lib/pgsql/data**. Misalnya, folder ini mencakup konfigurasi seperti _**postgresql.conf**_, _**pg_hba.conf**_, _**pg_ident.conf**_, dll.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/database-configuration-files/db-configuration-files-8.png" alt="postgresql.conf configuration file" max-width="100%"/>

PaaS secara otomatis mengelola dua parameter berikut dalam file _**/var/lib/pgsql/data/postgresql.conf**_ untuk database PostgreSQL:

  * **shared_buffers** \- dihitung sebagai bagian dari total RAM - seperempat jika container memiliki delapan atau lebih cloudlet, atau sepertujuh jika kurang (tetapi tidak kurang dari 128 KB)
  * **max_stack_depth** \- dihitung sebagai pengurangan 1024 dari ukuran stack maksimum (respon dari perintah ulimit -s), dikonversi ke MB

Jika Anda ingin mengubah pengaturan ini secara manual, Anda perlu menghapus baris “ _#Jelastic autoconfiguration mark._ ” di awal file. Jika tidak, perubahan khusus Anda akan ditimpa.

## Baca Juga {#whats-next}

  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Connection Strings](<https://docs.dewacloud.com/docs/database-connection-strings/>)
  * [Database Backups](<https://docs.dewacloud.com/docs/database-backups/>)