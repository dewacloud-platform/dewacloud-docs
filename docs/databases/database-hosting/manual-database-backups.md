---
sidebar_position: 8
slug: /database-backups
title: Manual Database Backups
---

# Manual Database Backups

Platform menyediakan semua [stack database bersertifikasi](<https://docs.dewacloud.com/docs/software-stacks-versions/#databases>) dengan skrip yang mudah dan nyaman untuk melakukan backup data yang tersimpan. Dengan demikian, proses ini sederhana hanya dengan menyediakan parameter yang diperlukan dan dapat diselesaikan dalam beberapa menit. Di sini, tidak diperlukan pengetahuan khusus – cukup ikuti [langkah-langkah pengaturan](<https://docs.dewacloud.com/docs/#backups-scheduling>) untuk mengonfigurasi ekspresi _cron_ yang sesuai.

Selain itu, kami akan menunjukkan cara bekerja dengan backup yang dibuat:

  * [Periksa Backup](#check-backups)
  * [Unduh Backup](#download-backup)
  * [Pulihkan Database](#restore-database)

Untuk tutorial ini, kami akan menggunakan database MySQL sebagai contoh. Namun, langkah-langkah yang diperlukan serupa untuk semua database lainnya.

## Backups Scheduling {#backups-scheduling}

Mari kita gunakan skrip backup default untuk mengotomatisasi proses pembuatan backup dan mengonfigurasinya sesuai kebutuhan spesifik Anda (misalnya, frekuensi, jumlah backup lama yang disimpan, dll.). Di sini, jika Anda belum memiliki environment dengan database, ikuti panduan [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>) untuk membuatnya.

1. Kode sumber skrip dapat dilihat langsung di dashboard. Klik tombol **Config** di sebelah database Anda untuk membuka file manager bawaan dan temukan file _**/var/lib/jelastic/bin/backup_script.sh**_.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-1.png" alt="database backup script" width="100%"/>

   :::warning
   Skrip backup tidak tersedia untuk stack Redis, yang merupakan penyimpanan key-value, biasanya digunakan sebagai cache.
   :::

2. Untuk mengotomatisasi eksekusi skrip, kita akan menggunakan _[cron scheduler](<https://docs.dewacloud.com/docs/cron-job/>)_ yang tersedia di dalam container secara default. Buka file _**/var/spool/cron/mysql**_ dan berikan ekspresi cron dalam format berikut:

   ```plaintext
   {frequency} {path-to-script} {script-parameters}
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-2.png" alt="database cron config file" width="100%"/>

   Di sini, Anda dapat menggunakan contoh yang dikomentari sebagai template untuk menentukan parameter yang diperlukan:

   * **\{frequency\}** - menentukan waktu eksekusi skrip (lihat panduan di atas untuk detailnya), misalnya `*/10 * * * *` untuk membuat backup setiap 10 menit
   * **\{path-to-script\}** - menunjukkan skrip yang diperlukan (skrip backup default tersedia di _/var/lib/jelastic/bin/backup_script.sh_)
   * **\{script-parameters\}** - menyediakan parameter khusus untuk skrip yang ditentukan; berikut adalah parameter yang tersedia dalam kasus kami:
     * **-m \{mode\}** untuk melakukan backup seluruh atau sebagian database (`-m dumpall` atau `-m dump` secara berturut-turut)
     * **-c \{count\}** untuk menentukan jumlah backup lama yang disimpan (misalnya, `-c 3` untuk menyimpan 3 backup lama bersama dengan yang terbaru)
     * **-u \{user\}** dan **-p \{password\}** untuk memberikan kredensial akses untuk database Anda (dapat ditemukan di email setelah pembuatan database)

     :::warning
     Jika `{password}` Anda mengandung karakter khusus, maka harus disertakan dalam tanda kutip ganda. Juga, karena spesifikasi cron, Anda perlu memberikan escape tambahan untuk simbol % dengan menambahkan backslash sebelum simbol tersebut, misalnya -p "passw\\\%rd".
     :::

     * **-d \{databases\}** dan **-t \{tables\}** untuk secara opsional menentukan daftar database (`-d db1[,db2,db3….]`) atau tabel di dalam database (`-d db -t table1[,table2,table3….]`) untuk dibackup

3. **Sebagai contoh**, jika Anda ingin melakukan backup seluruh database setiap 10 menit dengan menggunakan skrip default, maka stringnya harus seperti berikut:

   ```plaintext
   */10 * * * * /var/lib/jelastic/bin/backup_script.sh -m dumpall -c 3 -u root -p passw0rd
   ```

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-3.png" alt="cron expression for DB backup script" width="100%"/>

   **Simpan** pengaturan untuk menerapkannya.

4. Untuk menyimpan data di node lain atau server remote, Anda dapat mengonfigurasi [mount point](<https://docs.dewacloud.com/docs/mount-points/>) yang sesuai untuk database Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-4.png" alt="store backups on remote server" width="100%"/>

   :::warning
   Data yang ada di folder mount point akan digantikan dengan file dari direktori remote.
   :::

   Sebagai alternatif, Anda dapat membuat skrip backup khusus, yang dapat dijalankan dari server remote (detail host database, pengguna, dan password diperlukan untuk membuat koneksi).

## Check Backups {#check-backups}

Tunggu hingga skrip dieksekusi (tergantung pada frekuensi cron yang dikonfigurasi) dan navigasikan ke folder **/var/lib/jelastic/backup**.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-5.png" alt="check database backup files" width="100%"/>

Jika operasi backup berhasil, Anda akan melihat arsip **.bz2** yang sesuai di dalam direktori.

## Download Backup {#download-backup}

Ada beberapa opsi untuk mengunduh file dari container:

1. Cara paling mudah adalah menggunakan [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) langsung di dashboard.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-6.png" alt="download backups with dashboard" width="100%"/>

   Temukan file yang diperlukan, arahkan kursor ke atasnya, dan pilih **Download** dari menu konteks.

2. Opsi lain adalah menggunakan koneksi [SFTP/FISH protocol](<https://docs.dewacloud.com/docs/ssh-protocols/>).

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-7.png" alt="download backups with SFTP FISH protocols" width="100%"/>

   Detail akses yang diperlukan dapat dilihat di dashboard.

3. Anda juga dapat memasang [FTP add-on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>) untuk database Anda agar dapat mengelola file melalui FTP.

   :::warning
   Alamat _Public IP_ diperlukan untuk opsi ini. Jika diperlukan, _Public IP_ akan secara otomatis ditambahkan ke node selama instalasi add-on.
   :::
   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-8.png" alt="database ftp addon" width="100%"/>

   Berdasarkan preferensi Anda, Anda dapat memilih salah satu opsi yang ditawarkan.

## Restore Database {#restore-database}

Jika diperlukan, Anda dapat dengan mudah memulihkan database dari backup. Untuk contoh MySQL kami, langkah-langkah berikut diperlukan:

1. Akses panel **phpMyAdmin** dengan kredensial dari email yang Anda terima setelah pembuatan node DB.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-9.png" alt="email with DB credentials" width="60%"/>

2. Arahkan ke tab **Import**, centang opsi _Browse your computer_, dan gunakan tombol **Choose File** untuk mengunggah backup yang diperlukan.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-10.png" alt="import backups via DB admin panel" width="100%"/>

   Klik **Go** di bagian bawah halaman.

3. Ketika proses impor berhasil diselesaikan, Anda akan melihat notifikasi yang sesuai di panel admin.

   <img src="https://assets.dewacloud.com/dewacloud-docs/databases/databases-hosting/manual-database-backup/manual-db-backup-11.png" alt="database successfully restored from backup" width="100%"/>

Itu saja! Sekarang, Anda bisa yakin bahwa semua data Anda disimpan secara berkala dan, jika diperlukan, dapat dipulihkan atau digunakan kembali.

## Baca Juga {#whats-next}

  * [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Connection Strings](<https://docs.dewacloud.com/docs/database-connection-strings/>)
  * [Setting Up Cronjob](<https://docs.dewacloud.com/docs/cron-job/>)
  * [Shared Storage](<https://docs.dewacloud.com/docs/shared-storage-container/>)
