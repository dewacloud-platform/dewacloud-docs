---
sidebar_position: 2
slug: /storage-exports
title: Exporting Data for Sharing
---

# Exporting Data for Sharing

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/01-data-export-icon.png" alt="data export icon" width="30%"/>

Platform ini menyediakan dukungan yang diperluas untuk [berbagi data](<https://docs.dewacloud.com/docs/data-storage-container/>) antara instance di dalam akun yang sama. Panel UI khusus tersedia di dashboard untuk menyederhanakan ekspor yang diperlukan dari server (dijelaskan dalam panduan ini) dan operasi [mount pada klien](<https://docs.dewacloud.com/docs/mount-points/>). Anda hanya perlu melakukan salah satu dari opsi ini, dan platform akan otomatis menerapkan konfigurasi terkait pada instance kedua yang sesuai.

Jadi, mari kita tinjau bagaimana Anda dapat [berbagi direktori](<https://docs.dewacloud.com/docs/#directory-export>) pada container Anda dan bagaimana mengelola semua [ekspor container](<https://docs.dewacloud.com/docs/#managing-exports>).

## Directory Export{#directory-export}

Anda dapat berbagi direktori apa pun di dalam container Anda dengan node lain di akun Anda.

:::note
Jika Anda perlu mengekspor data secara eksternal (yaitu ke server di luar akun PaaS Anda), ikuti panduan yang ditautkan untuk mengkonfigurasi ekspor secara manual.
:::

1\. Buka [configuration manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) untuk penyimpanan Anda (yaitu tempat file terletak secara fisik), beralih ke bagian _**Exports**_, dan klik tombol **Export** di panel atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/02-create-new-export.png" alt="create new export" max-width="100%"/>

2\. Tab _**Export Directory**_ yang sesuai akan dibuka.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/03-configure-new-export.png" alt="configure new export" max-width="100%"/>

Di sini, Anda perlu menentukan informasi berikut:

  * **From NFS** \- pilih node yang diperlukan di dalam lapisan environment saat ini melalui daftar drop-down
  * **Path** \- ketik jalur absolut ke folder yang diekspor (atau memilihnya dari favorit Anda)
  * **To Container(s)** \- pilih lapisan target dari daftar environment yang diambil secara otomatis di akun Anda
  * **Path** \- berikan jalur ke lokasi melalui mana data yang dibagikan harus tersedia di node target
  * **Mount to all nodes** \- gunakan switcher ini untuk menetapkan mount yang sama untuk seluruh lapisan (nonaktifkan untuk mount ke satu node)
  * **Read Only** \- hidupkan switcher untuk membatasi pengeditan data yang diekspor di node klien (secara default, izin _read & write_ disediakan)

Klik **Add** untuk melanjutkan.

:::tip
Formulir yang sama dapat diakses langsung dari file manager node, menggunakan opsi Export yang sesuai dalam menu konteks folder:
:::

3\. Dalam sekejap, folder yang diekspor ini akan muncul dalam daftar.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/05-list-of-exports.png" alt="list of exports" max-width="100%"/>

Itu saja! Selama operasi, platform secara otomatis mengkonfigurasi [mount point](<https://docs.dewacloud.com/docs/mount-points/>) yang sesuai pada node target sehingga Anda dapat segera mulai bekerja dengan data yang dibagikan tanpa langkah tambahan yang diperlukan.

## Managing Exports{#managing-exports}

Selain [mengekspor direktori](<https://docs.dewacloud.com/docs/#directory-export>), bagian **Exports** memungkinkan mengelola catatan yang sudah ada.

1\. Semua direktori yang dibagikan dari container ini ke node mana pun di platform yang sama ditampilkan di sini (data yang diekspor [secara eksternal](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>) tidak akan ditampilkan).

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/06-navigate-to-the-exported-directory.png" alt="navigate to the exported directory" max-width="100%"/>

Anda dapat dengan cepat melompat ke salah satu folder yang diekspor dengan mengarahkan kursor ke catatan yang diperlukan dan memilih opsi **Navigate to directory** dari daftar _**Additionally**_.

2\. Untuk mendapatkan lokasi dan detail node target yang tepat untuk direktori yang diekspor, kembangkan catatan yang sesuai.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/07-view-export-target-nodes.png" alt="view export target nodes" max-width="100%"/>

Informasi berikut dapat ditemukan di sini:

  * **Name** \- menunjukkan nama stack dan ID node, tempat folder yang diekspor dipasang (arahkan kursor untuk detail tambahan pada environment yang sesuai atau untuk membatalkan pemasangan catatan ini melalui daftar _**Additionally**_)
  * **Client Path** \- menyediakan jalur ke folder, tempat data yang dibagikan dapat diakses di node jarak jauh
  * **Permission** \- menampilkan izin akses untuk klien yang sesuai (_rw_ \- baca-tulis; _ro_ \- hanya baca)

3\. Di panel alat di atas daftar, Anda dapat menemukan beberapa tombol yang dimaksudkan untuk membantu Anda mengelola ekspor Anda di container saat ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/08-manage-exports.png" alt="manage exports" max-width="100%"/>

  * dengan opsi **Export**, Anda dapat [berbagi direktori apa pun](<https://docs.dewacloud.com/docs/#directory-export>) di dalam container dengan node lain di akun Anda
  * tombol **Unmount** menghentikan pembagian data dengan node klien yang dipilih

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/09-unmount-export.png" alt="unmount export" width="50%"/>

Setelah konfirmasi, catatan yang sesuai akan dihapus dari daftar, dan data yang sesuai akan menjadi tidak tersedia di instance yang dipilih.

  * tombol **Configuration** mengarahkan ke file _**etc/exports**_, di mana Anda dapat memeriksa dan, jika diperlukan, mengedit secara manual daftar ekspor (folder yang dibagikan, alamat klien, parameter tambahan)

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/data%20sharing/exporting%20data%20for%20sharing/10-exports-configuration-file.png" alt="exports configuration file" max-width="100%"/>

**Catatan:** Jika bekerja dalam batas akun PaaS Anda, semua konfigurasi ekspor yang diperlukan otomatis. Penyesuaian manual file ini hanya diperlukan untuk [ekspor eksternal](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>).

  * Anda dapat **Refresh** daftar dengan tombol berjudul sama untuk mendapatkan status pembagian terbaru
  * tombol **Documentation** di sisi kanan panel mengarahkan ke halaman dokumentasi saat ini

Untuk konfigurasi tambahan apa pun, Anda dapat menggunakan bawaan [file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) atau terhubung ke node melalui [SSH](<https://docs.dewacloud.com/docs/ssh-access/>).

Jika Anda menghadapi masalah saat mengekspor data untuk berbagi, jangan ragu untuk meminta bantuan pakar teknis kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Data Storage Overview](<https://docs.dewacloud.com/docs/data-storage-container/>)
  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [External NFS Server Configuration](<https://docs.dewacloud.com/docs/configure-external-nfs-server/>)
