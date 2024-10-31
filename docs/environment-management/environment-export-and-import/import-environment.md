---
sidebar_position: 3
slug: /environment-import
title: Import Environment
---
# Environment Import

Fitur **Environment Import** pada platform memungkinkan eksekusi file _**.json**_, _**.jps**_, _**.yml**_, _**.yaml**_, atau _**.cs**_ di platform untuk secara otomatis menginstal dan mengkonfigurasi proyek sesuai dengan pengaturan yang ditetapkan. Awalnya dirancang untuk mendeply salinan environment yang sebelumnya [diekspor](<https://docs.dewacloud.com/docs/environment-export/>) (mis. untuk memindahkan aplikasi dari instalasi PaaS lain), fitur ini juga dapat digunakan untuk menginstal solusi Anda sendiri, yang dinyatakan melalui JSON, atau mengintegrasikan paket siap-pakai dari [JPS Collection](<https://github.com/jelastic-jps>).

Mari kita tinjau cara bekerja dengan fungsionalitas impor platform secara mendetail pada contoh environment yang telah diekspor.

1\. Klik tombol **Import** di bagian atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/01-paas-main-buttons.png" alt="PaaS main buttons" max-width="100%"/>

2\. Dalam frame **Import** yang terbuka, Anda akan melihat tiga tab dengan opsi berbeda untuk menyediakan file yang diperlukan:

  * _**Local File**_ \- untuk memilih manifest yang disimpan secara lokal (melalui tombol **Browse**) 

  <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/02-import-via-local-file.png" alt="import via local file" max-width="100%"/>

  * _**URL**_ \- untuk mengetik atau menempelkan tautan langsung ke file yang diperlukan 

  <img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/03-import-via-url.png" alt="import via URL" max-width="100%"/>

  * _**JPS**_ \- editor built-in untuk memasukkan dan mengedit kode atau menyusun solusi Anda sendiri dari awal (lihat bagian [JPS deployment and troubleshooting](<https://docs.dewacloud.com/docs/#jps-deployment--troubleshooting>) di bawah untuk informasi lebih lanjut)

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/04-import-via-jps.png" alt="import via JPS" max-width="100%"/>

:::tip 
TautanTheExamples di samping tab ini mengarahkan ke JPS Collection di 
GitHub, yang menyimpan beberapa sampel open-source dari paket siap-implementasi. Anda dapat mengimpor salah satu dari mereka dengan mengambil manifest.jps melalui tab di atas atau memeriksa file dan skrip untuk membuat solusi Anda sendiri.
:::

Untuk melanjutkan, klik tombol **Import** di sudut kanan bawah tab jenis impor yang dibutuhkan.

3\. Setelah itu, Anda akan melihat jendela konfirmasi instalasi dengan deskripsi paket yang sesuai. Untuk environment yang diekspor, ini menunjukkan detail tentang platform sumber dan tanggal ekspor.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/05-confirm-environment-import.png" alt="confirm environment import" max-width="100%"/>

Di dalam kolom di dalamnya, Anda perlu menentukan parameter berikut ini:

  * _**Environment**_ \- nama domain untuk environment baru Anda
  * _**Display Name**_ \- environment [alias](<https://docs.dewacloud.com/docs/environment-aliases/>) untuk ditampilkan di dashboard alih-alih domainnya (opsional)
  * _**Region**_ \- [environment region](<https://docs.dewacloud.com/docs/environment-regions/>) untuk menampung solusi (jika beberapa tersedia)

Klik **Import** jika sudah siap.

4\. Tunggu hingga environment dibuat, dideploy, dan dikonfigurasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/06-deploying-imported-environment.png" alt="deploying imported environment" max-width="100%"/>

:::tip 
Anda dapat meminimalkan jendela ini dan melanjutkan bekerja dengan dashboard tanpa mengganggu proses pengimporan, yang akan dilanjutkan di latar belakang.
:::

5\. Dalam beberapa menit, Anda akan melihat jendela keberhasilan instalasi.

Di sini, Anda dapat mengklik **Open in Browser** untuk segera memeriksa hasilnya atau **Close** jendela ini untuk mengkonfigurasi ulang environment dan aplikasi Anda sesuai dengan pengaturan platform baru (mis. karena nama host yang berubah, alamat IP, dll.).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/07-environment-successfully-imported.png" alt="environment successfully imported" max-width="100%"/>

Juga, periksa email Anda untuk informasi (seperti nama host, kredensial administrator baru untuk node, dll.) tentang environment yang Anda impor.

Itu saja! Dengan cara ini, Anda dapat secara otomatis menginstal solusi apa pun yang diperlukan ke platform yang dipilih hanya dalam beberapa klik, tanpa perlu mengatur semua konfigurasi secara manual.

## JPS Deployment & Troubleshooting{#jps-deployment-troubleshooting}

Opsi **Import > JPS** paling sering digunakan oleh pengembang yang membuat [paket JPS](<https://docs.dewacloud.com/docs/packaging-standard/>) (mis. untuk otomatisasi tugas umum atau implementasi alur CI/CD yang kompleks). Selain itu, ini adalah alat yang sangat baik untuk penyetelan cepat dan pengujian paket.

1\. Setelah dimasukkan ke dalam editor ini, kode Anda akan secara otomatis diparse untuk kesalahan. Jika terdeteksi, mereka akan ditandai dengan ikon silang merah sebelum baris yang sesuai (arahkan ke atas untuk informasi tambahan tentang masalah tersebut). Selain itu, kode Anda disimpan dengan aman di penyimpanan lokal browser Anda, sehingga Anda dapat menutup seluruh frame _Import_ secara bebas (mis. untuk melakukan beberapa operasi lain di dashboard) dan kembali ke pemrograman nanti.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/08-jps-editor-for-import.png" alt="JPS editor for import" max-width="100%"/>

2\. Di bagian atas frame, Anda dapat menemukan beberapa alat untuk pengalaman kerja yang lebih nyaman:

  * _**Format JSON**_ \- secara otomatis menetapkan indentasi dan umpan baris yang tepat (tidak tersedia untuk YAML)
  * _**Wrap lines**_ \- membungkus garis ketika mereka mencapai batas frame
  * _**Search**_ \- menemukan informasi yang diperlukan, dengan opsi tambahan untuk mempersempit hasil pencarian lebih jauh:
    * _Match case_ \- memungkinkan pencarian case sensitive
    * _Regex_ \- menggunakan [regular expressions](<https://en.wikipedia.org/wiki/Regular_expression>) untuk spesifikasi kondisi pencarian
  * _**View Logs**_ \- membuka konsol untuk melacak eksekusi kode Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/09-jps-editor-tools-bar.png" alt="JPS editor tools bar" max-width="100%"/>

3\. Log _Import_ memberikan informasi penting untuk pemecahan masalah. Jika Anda menghadapi masalah selama pembuatan paket JPS, lihat tab **Import > JPS > View Logs** ini dan cari kesalahan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-export-and-import/import-environment/10-import-logs.png" alt="import logs" max-width="100%"/>

:::tip 
Pada platform sebelum rilis 5.9.7, Anda dapat mengakses konsol JPS ini di tab browser terpisah dengan menambahkan akhiran /console ke URL dashboard Anda (harus masuk untuk otorisasi).
:::

Jika Anda menghadapi masalah saat mengimpor paket JPS, jangan ragu untuk meminta bantuan ahli teknis kami di [Stackoverflow](<https://stackoverflow.com/questions/tagged/jelastic>).

## Baca Juga{#whats-next}

  * [Export Environment](<https://docs.dewacloud.com/docs/environment-export/>)
  * [Environment Transferring](<https://docs.dewacloud.com/docs/environment-transferring/>)
  * [Account Collaboration](<https://docs.dewacloud.com/docs/account-collaboration/>)
  * [Share Environment](<https://docs.dewacloud.com/docs/share-environment/>)