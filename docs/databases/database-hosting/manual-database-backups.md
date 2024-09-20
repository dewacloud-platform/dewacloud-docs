---
sidebar_position: 8
slug: /manual-database-backups
title: Manual Database Backups
---
# Manual Database Backups

Platform menyediakan semua [stack database bersertifikasi](<https://docs.dewacloud.com/docs/software-stacks-versions/#databases>) dengan skrip yang mudah dan nyaman untuk melakukan backup data yang tersimpan. Dengan demikian, proses ini sederhana hanya dengan menyediakan parameter yang diperlukan dan dapat diselesaikan dalam beberapa menit. Di sini, tidak diperlukan pengetahuan khusus – cukup ikuti [langkah-langkah pengaturan](<https://docs.dewacloud.com/docs/#backups-scheduling>) untuk mengonfigurasi ekspresi _cron_ yang sesuai.

Selain itu, kami akan menunjukkan cara bekerja dengan backup yang dibuat:

  * [Periksa Backup](<https://docs.dewacloud.com/docs/#check-backups>)
  * [Unduh Backup](<https://docs.dewacloud.com/docs/#download-backup>)
  * [Pulihkan Database](<https://docs.dewacloud.com/docs/#restore-database>)

Untuk tutorial ini, kami akan menggunakan database MySQL sebagai contoh. Namun, langkah-langkah yang diperlukan serupa untuk semua database lainnya.

## Backups Scheduling {#backups-scheduling}

Mari kita gunakan skrip backup default untuk mengotomatisasi proses pembuatan backup dan mengonfigurasinya sesuai kebutuhan spesifik Anda (misalnya, frekuensi, jumlah backup lama yang disimpan, dll.). Di sini, jika Anda belum memiliki environment dengan database, ikuti panduan [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>) untuk membuatnya.

1\. Kode sumber skrip dapat dilihat langsung di dashboard. Klik tombol **Config** di sebelah database Anda untuk membuka file manager bawaan dan temukan file _**/var/lib/jelastic/bin/backup_script.sh**_.

![database backup script](#)

:::warning
Skrip backup tidak tersedia untuk stack Redis, yang merupakan penyimpanan key-value, biasanya digunakan sebagai cache.
:::

2\. Untuk mengotomatisasi eksekusi skrip, kita akan menggunakan _[cron scheduler](<https://docs.dewacloud.com/docs/cron-job/>)_ yang tersedia di dalam container secara default. Buka file _**/var/spool/cron/mysql**_ dan berikan ekspresi cron dalam format berikut:

    
    
    1 

|    

    
    
    {frequency} {path-to-script} {script-parameters}   
  
---|---  
  
![database cron config file](#)

Di sini, Anda dapat menggunakan contoh yang dikomentari sebagai template untuk menentukan parameter yang diperlukan:

  * _**{frequency}**_ \- menentukan waktu eksekusi skrip (lihat panduan di atas untuk detailnya), misalnya _*/10 * * * *_ untuk membuat backup setiap 10 menit
  * _**{path-to-script}**_ \- menunjukkan skrip yang diperlukan (skrip backup default tersedia di _/var/lib/jelastic/bin/backup_script.sh_)
  * _**{script-parameters}**_ \- menyediakan parameter khusus untuk skrip yang ditentukan; berikut adalah parameter yang tersedia dalam kasus kami:
    * _**-m {mode}**_ untuk melakukan backup seluruh atau sebagian database ("_-m dumpall_" atau "_-m dump_" secara berturut-turut)
    
    * _**-c {count}**_ untuk menentukan jumlah backup lama yang disimpan (misalnya, "_-c 3_" untuk menyimpan 3 backup lama bersama dengan yang terbaru)

    * _**-u {user}**_ dan _**-p {password}**_ untuk memberikan kredensial akses untuk database Anda (dapat ditemukan di email setelah pembuatan database)

:::warning
Jika {password} Anda mengandung karakter khusus, maka harus disertakan dalam tanda kutip ganda. Juga, karena spesifikasi cron, Anda perlu memberikan escape tambahan untuk simbol % dengan menambahkan backslash sebelum simbol tersebut, misalnya -p "passw\\\%rd".
:::

    * _**-d {databases}**_ dan _**-t {tables}**_ untuk secara opsional menentukan daftar database ("_-d db1[,db2,db3….]_") atau tabel di dalam database ("_-d db -t table1[,table2,table3….]_") untuk dibackup

3\. **Sebagai contoh**, jika Anda ingin melakukan backup seluruh database setiap 10 menit dengan menggunakan skrip default, maka stringnya harus seperti berikut:

    
    
    1 

|    

    
    
    */10 * * * * /var/lib/jelastic/bin/backup_script.sh -m dumpall -c 3 -u root -p passw0rd   
  
---|---  
  
![cron expression for DB backup script](#)

**Simpan** pengaturan untuk menerapkannya.

4\. Untuk menyimpan data di node lain atau server remote, Anda dapat mengonfigurasi [mount point](<https://docs.dewacloud.com/docs/mount-points/>) yang sesuai untuk database Anda.

![store backups on remote server](#)

:::warning
Data yang ada di folder mount point akan digantikan dengan file dari direktori remote.
:::

Sebagai alternatif, Anda dapat membuat skrip backup khusus, yang dapat dijalankan dari server remote (detail host database, pengguna, dan password diperlukan untuk membuat koneksi).

## Check Backups {#check-backups}

Tunggu hingga skrip dieksekusi (tergantung pada frekuensi cron yang dikonfigurasi) dan navigasikan ke folder **/var/lib/jelastic/backup**.

![check database backup files](#)

Jika operasi backup berhasil, Anda akan melihat arsip _**bz2**_ yang sesuai di dalam direktori.

## Download Backup {#download-backup}

Ada beberapa opsi untuk mengunduh file dari container:

1\. Cara yang paling mudah adalah menggunakan [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) langsung di dashboard.

![download backups with dashboard](#)

Temukan file yang diperlukan, arahkan kursor ke atasnya, dan pilih **Download** dari menu konteks.

2\. Opsi lain adalah menggunakan koneksi [SFTP/FISH protocol](<https://docs.dewacloud.com/docs/ssh-protocols/>).

![download backups with SFTP FISH protocols](#)

Detail akses yang diperlukan dapat dilihat di dashboard.

3\. Anda juga dapat memasang [FTP add-on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>) untuk database Anda agar dapat mengelola file melalui FTP.

:::warning
Alamat _Public IP_ diperlukan untuk opsi ini. Jika diperlukan, _Public IP_ akan secara otomatis ditambahkan ke node selama instalasi add-on.
:::

Berdasarkan preferensi Anda, Anda dapat memilih salah satu opsi yang ditawarkan.

## Restore Database {#restore-database}

Jika diperlukan, Anda dapat dengan mudah memulihkan database dari backup. Untuk contoh MySQL kami, langkah-langkah berikut diperlukan:

1\. Akses panel **phpMyAdmin** dengan kredensial dari email yang Anda terima setelah pembuatan node DB.

![email with DB credentials](#)

2\. Arahkan ke tab **Import**, centang opsi _Browse your computer_, dan gunakan tombol **Choose File** untuk mengunggah backup yang diperlukan.

![import backups via DB admin panel](#)

Klik **Go** di bagian bawah halaman.

3\. Ketika proses impor berhasil diselesaikan, Anda akan melihat notifikasi yang sesuai di panel admin.

![database successfully restored from backup](#)

Itu saja! Sekarang, Anda bisa yakin bahwa semua data Anda disimpan secara berkala dan, jika diperlukan, dapat dipulihkan atau digunakan kembali.

## Baca Juga {#whats-next}

  * [Database Hosting](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Connection Strings](<https://docs.dewacloud.com/docs/database-connection/>)
  * [Setting Up Cronjob](<https://docs.dewacloud.com/docs/cron-job/>)
  * [Shared Storage](<https://docs.dewacloud.com/docs/shared-storage-container/>)