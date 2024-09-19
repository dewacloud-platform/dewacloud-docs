---
sidebar_position: 6
slug: /external-nfs-server-configuration
title: External NFS Server Configuration
---

# External NFS Server Configuration

![external storage server icon](#)

Platform ini memungkinkan [berbagi data](<https://docs.dewacloud.com/docs/data-storage-container/>) antara server (tempat file terletak secara fisik) dan klien (mendapatkan akses ke data jarak jauh seolah-olah disimpan secara lokal). Konfigurasi yang diperlukan untuk mengatur share bervariasi berdasarkan kondisi berikut:

  * _kedua instance berada di dalam akun PaaS yang sama_ \- baik [ekspor data](<https://docs.dewacloud.com/docs/storage-exports/>) dari penyimpanan __atau__ [mount data](<https://docs.dewacloud.com/docs/mount-points/>) pada klien (platform secara otomatis menangani operasi kedua)

  * _satu instance berada di luar platform_ \- ekspor data dari penyimpanan eksternal (dijelaskan dalam panduan ini) __dan__ [mount data eksternal](<https://docs.dewacloud.com/docs/mount-points/>) pada klien

Di bawah ini, kami akan mempertimbangkan konfigurasi yang diperlukan untuk mengekspor data dari platform [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>) ke instance eksternal. Alur yang dijelaskan cocok untuk server penyimpanan berbasis NFS apa pun.

1\. Pertama-tama, untuk berbagi data melalui Internet, diperlukan menambahkan alamat [public IP](<https://docs.dewacloud.com/docs/public-ip/>) ke server Anda:

![shared storage with public IP](#)

2\. Selanjutnya, Anda perlu mendeklarasikan daftar direktori yang ingin Anda bagi dalam file _**etc/exports**_ yang sesuai. Di platform, ini dapat dengan mudah diakses dengan tombol **Configuration** di bagian _**[Exports](<https://docs.dewacloud.com/docs/storage-exports/>)**_ dari _Configuration File Manager_ bawaan.

Di sini, format berikut harus digunakan:

```
{directory} {server}([option],[option],..)
```

![exports configuration file](#)

dimana:

  * _**\{directory\}**_ \- jalur ke folder (relatif terhadap folder Root) yang harus diekspor

  * _**\{NFS_client\}**_ \- [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>) nama atau alamat IP publik dari node klien (yaitu tempat file yang diekspor harus dipasang)

:::note 
Jika instance Anda tidak memiliki alamat eksternal yang terlampir, Anda dapat menggunakan IP host yang sesuai. Ini bisa diperoleh dengan menghubungkan ke container via SSH dan menjalankan perintah berikut: `curl ifconfig.co` Perhatikan bahwa alur seperti itu sangat tidak aman dan tidak boleh digunakan untuk tujuan produksi, karena akan membuat data bersama Anda tersedia untuk container mana pun di host yang sama.
:::

  * _**[option]**_ \- beberapa [parameter tambahan](<https://linux.die.net/man/5/exports>) untuk menggambarkan izin akses, di mana yang utama adalah:

    * _async_ \- memungkinkan NFS klien menerima respons dari penyimpanan segera setelah permintaan penambahan konten diproses. Saat ini, data sudah ada di cache tetapi belum benar-benar ditulis ke penyimpanan. Dibandingkan dengan opsi _sync_ yang berlawanan, ini memberikan peningkatan kinerja tetapi meninggalkan sedikit risiko kehilangan data (jika dihentikan/crash saat masih menahan data yang belum tertulis dalam cache)
    * _ro_ (atau _rw_) - mendefinisikan izin baca-saja (baca & tulis) untuk membuat node klien dapat melihat (melihat dan mengedit) data bersama
    * _no_root_squash_ \- memberi pengguna root pada server klien tingkat akses yang sama seperti pengguna root pada penyimpanan container
    * _no_subtree_check_ \- menetapkan aksesibilitas untuk seluruh direktori (kinerja lebih baik tetapi membatasi penyediaan aturan individu untuk file di dalamnya)

:::tip 
Untuk keamanan tambahan, Anda dapat mengkonfigurasi file etc/hosts.allow dan etc/hosts.deny yang sesuai untuk mengelola daftar host yang dapat bekerja dengan server NFS.
:::

3\. __Ketika bekerja dengan [Shared Storage Auto-Cluster](<https://docs.dewacloud.com/docs/shared-storage-container/#shared-storage-auto-cluster>) berdasarkan GlusterFS__, pertimbangkan bahwa hanya folder **/data** yang direplikasi di antara instance, jadi direktori yang diekspor harus terletak di dalam.

Juga, opsi tambahan _**fsid**_ harus wajib ditambahkan ke string konfigurasi ekspor. Misalnya, nilai parameter ini dapat dihasilkan secara acak dengan perintah berikut:

```
cat /proc/sys/kernel/random/uuid
```

![generate random fsid](#)

Akibatnya, string ekspor akan mirip dengan yang berikut ini:

![export configs for GlusterFS storage](#)

Jangan lupa untuk **Simpan** perubahan yang telah Anda buat.

4\. Untuk menerapkan pengaturan ekspor baru, perintah _**exportfs**_ yang sesuai harus digunakan (mis. melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)):

```
exportfs -ra
```

![apply new export settings](#)

5\. Selanjutnya, Anda perlu membuka port server NFS (_111_ , _2049_ , dan _20048_) untuk alamat IP klien NFS (yang digunakan dalam langkah kedua). Arahkan ke bagian **Settings >[Firewall](<https://docs.dewacloud.com/docs/custom-firewall/>)** environment penyimpanan untuk menambahkan aturan yang diperlukan melalui UI yang intuitif:

![configure firewall rules via UI](#)

:::tip 
Ini dapat dilakukan melalui konsol juga:
```
iptables -I INPUT -p tcp -m multiport --dports 111,2049,20048 -s {NFS_client} -j ACCEPT  
iptables -I INPUT -p udp -m multiport --dports 111,2049,20048 -s {NFS_client} -j ACCEPT
:::

6\. Ketika memberikan hak RW, pastikan bahwa pengguna yang sama memiliki izin akses yang setara ke folder yang dibagi baik pada klien NFS maupun server. Misalnya, [stack](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang berbeda dapat menggunakan pengguna yang berbeda secara default (mis. _root_ dan _jelastic_).

Jadi, jika diperlukan, jalankan perintah berikut di server penyimpanan Anda untuk menyesuaikan hak:

```
chown {uid}:{gid} {path}
```

Di sini:

  * _**\{uid\}**_ \- nama pengguna atau ID, yang dapat ditemukan di file _**/etc/passwd**_ dari container platform Anda
  * _**\{gid\}**_ \- nama grup atau pengenal, yang ditampilkan dalam file _**/etc/group**_ dari node Anda
  * _**\{path\}**_ \- jalur ke direktori yang ingin Anda ubah izinnya

![change folder access rights](#)

Itu saja! Server penyimpanan data Anda siap, sehingga Anda dapat kembali ke instance klien dan mulai [mount](<https://docs.dewacloud.com/docs/mount-points/>).

## Baca Juga{#whats-next}

  * [Data Storage Overview](<https://docs.dewacloud.com/docs/data-storage-container/>)
  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [Exporting Data for Sharing](<https://docs.dewacloud.com/docs/storage-exports/>)