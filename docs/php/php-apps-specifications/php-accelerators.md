---
sidebar_position: 2
slug: /php-accelerators
title: PHP Accelerators
---
# PHP Accelerators

**PHP accelerator** adalah ekstensi PHP yang dirancang untuk meningkatkan kinerja aplikasi perangkat lunak yang ditulis dalam bahasa pemrograman PHP.

Cara kerja PHP accelerator ini adalah dengan menyimpan bytecode yang telah dikompilasi dari PHP Anda yang dapat dibaca manusia. Biasanya, kode PHP Anda dikompilasi dan kemudian dieksekusi pada waktu berjalan, tetapi alat ini menyimpan kode yang telah dikompilasi, menghemat biaya kompilasi dan dengan demikian umumnya menghemat sedikit CPU dengan biaya peningkatan penggunaan memori.

Jadi, apa yang dapat dilakukan oleh akselerasi PHP adalah membuat PHP Anda dieksekusi lebih cepat, dan dieksekusi dalam waktu sekitar setengahnya. Bagi pengguna, ini adalah kombinasi dari waktu pembuatan halaman, latensi jaringan, dan waktu rendering halaman.

Di PaaS, akselerator yang paling populer digunakan:

  * **APC**
  * **Xcache**
  * **eAccelerator** (bekerja dengan PHP 5.3 dan 5.4 saja)
  * **ZendGuardLoader** (bekerja dengan PHP 5.3 saja)

Untuk mengaktifkan akselerator ikuti instruksi berikut:

1\. Klik tombol **Config** untuk server di environment Anda.

2\. Di folder **etc** buka file _**php.ini**_.

3\. Hapus komentar pada salah satu _Accelerators_:

```
extension=apc.so
extension=eaccelerator.so
extension=xcache.so
extension=ZendGuardLoader.so
```


<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-apps-specifications/php-accelerators/01-php-accelerators.png" alt="PHP accelerators" width="80%"/>

4\. Di sini Anda juga dapat melakukan semua pengaturan yang diperlukan untuk modul Anda.

5\. **Simpan** perubahan dan **Restart** node.

Itu saja. Sekarang, PHP accelerator yang dipilih telah diaktifkan.

## Baca Juga{#whats-next}

  * [PHP Dev Center](<https://docs.dewacloud.com/docs/php-center/>)
  * [PHP Modules](<https://docs.dewacloud.com/docs/php-extensions/>)
  * [PHP Auto Configurations](<https://docs.dewacloud.com/docs/php-auto-configuration/>)
  * [PHP Application Server Configuration](<https://docs.dewacloud.com/docs/php-application-server-config/>)