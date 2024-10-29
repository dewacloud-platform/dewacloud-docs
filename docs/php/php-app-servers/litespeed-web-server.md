---
sidebar_position: 3
slug: /litespeed-web-server
title: LiteSpeed Web Server
---
# LiteSpeed Web Server

:::note
Stack ini siap untuk HTTP/3 dengan dukungan fitur yang diaktifkan secara default. Namun, diperlukan alamat IP publik untuk melewati Shared Load Balancer dan bekerja langsung dengan server melalui HTTP/3.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/01-litespeed-web-server-logo.png" alt="litespeed web server logo" width="20%"/>

**[LiteSpeed Web Server](<https://www.litespeedtech.com/products/litespeed-web-server>)** adalah server web PHP berkinerja tinggi dan konsumsi memori rendah dengan skalabilitas tinggi. Ini dibangun berdasarkan praktik terbaik hosting PHP, memanfaatkan keuntungan dari implementasi _Apache_ dan _NGINX_, serta mengintegrasikan optimasinya sendiri.

Struktur server aplikasi LiteSpeed yang kaya fitur mencakup spesifikasi berikut:

  * arsitektur berbasis event (seperti NGINX) mengonsumsi lebih sedikit sumber daya dibandingkan model berbasis proses Apache, memastikan kinerja lebih baik dengan penggunaan memori dan CPU minimal
  * kompatibilitas penuh dengan fitur Apache yang umum digunakan termasuk _mod_rewrite_, _.htaccess_, dan _mod_security_
  * optimasi individual untuk platform hosting paling populer (mis. _WordPress_, _Magento_, _Drupal_, _Joomla_, dll.)
  * dukungan untuk plugin caching, fitur anti-DDoS tercanggih, keamanan WAF bawaan, dll.

:::warning
Sebagai perangkat lunak komersial, LiteSpeed Web Server tidak dapat didistribusikan secara bebas, yaitu memerlukan lisensi untuk diterapkan pada platform. Jika bekerja dengan server aplikasi ini, Anda akan dikenakan [biaya tambahan](<https://docs.dewacloud.com/docs/#license-pricing>) untuk penggunaan lisensi yang disebutkan di atas.
:::

Pembuatan instance LiteSpeed Web Server baru di platform cukup mudah.

1\. Masuk ke dashboard dan klik tombol **New Environment** di atas halaman.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/02-create-new-environment-button.png" alt="new environment button" width="70%"/>

2\. Dalam topology wizard yang terbuka, pindah ke tab mesin _**PHP**_ dan pilih **LiteSpeed Web Server** sebagai server aplikasi Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/03-litespeed-application-server-wizard.png" alt="LiteSpeed application server wizard" width="100%"/>

:::note
Anda mungkin ingin mengatur beberapa [dedicated environment variables](https://docs.dewacloud.com/docs/environment-variables/) untuk menyesuaikan LiteSpeed Web Server Anda: 

- **JELASTIC_AUTOCONFIG** - enables (aktifkan, secara default) atau menonaktifkan (nonaktifkan) autokonfigurasi jumlah proses pekerja LiteSpeed berdasarkan RAM dan jumlah inti CPU

- **LSWS_MAX_CHILDREN** - mendefinisikan ulang batas proses anak maksimum untuk server. Variabel ini tersembunyi secara default saat platform mengatur nilai ini sama dengan jumlah inti CPU yang tersedia (biasanya memastikan pengoperasian terbaik). Anda perlu menambahkan variabel ini secara manual dan me-restart server untuk mendefinisikan ulang nilai

- **REDIS_ENABLED** - mengaktifkan (benar) atau menonaktifkan (salah, secara default) caching objek dengan Redis

- **WAF** - mengaktifkan (benar) atau menonaktifkan (salah, secara default) Web Application Firewall dengan aturan default Comodo

- **WP_PROTECT** - mengkonfigurasi tindakan untuk fitur [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) (_off|on|drop|deny|throttle|captcha; off_ secara default)

- **WP_PROTECT_LIMIT** - menetapkan batas untuk fitur [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) (_0|1|2-1000; 10_ secara default)

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/04-litespeed-variables.png" alt="LiteSpeed variables" width="100%"/>
:::

Konfigurasi parameter lain yang diperlukan ([cloudlets](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), ruang disk, [regions](<https://docs.dewacloud.com/docs/environment-regions/>), dll.) dan lanjutkan dengan tombol **Create**.

3\. Setelah dibuat, Anda dapat melihat data default _phpinfo_ di server dengan mengklik **Open in Browser** di samping server LiteSpeed Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/05-litespeed-open-in-browser.png" alt="LiteSpeed open in browser" width="100%"/>

4\. Untuk mulai mengelola server, akses **Admin Panel** dengan tombol yang sesuai di daftar _**Additionally**_ di sebelah lapisan (kredensial akses dikirim melalui email setelah pembuatan node).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/06-litespeed-admin-panel.png" alt="LitesSeed admin panel" width="100%"/>

:::warning
Ada beberapa kekhususan saat bekerja dengan implementasi platform LiteSpeed melalui panel admin:

  * untuk memastikan stabilitas kontainer, [fitur redeploy native platform](<https://docs.dewacloud.com/docs/container-redeploy/>) harus digunakan sebagai pengganti fungsi **Actions > Version Manager**

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/07-litespeed-version-management.png" alt="LiteSpeed version management" width="100%"/>

  * pemberitahuan tentang kedaluwarsa kunci lisensi di **Actions > Server Log Viewer** harus diabaikan karena leasing dikelola secara otomatis oleh platform

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/08-litespeed-license-key-expiration-notice.png" alt="LiteSpeed license key expiration notice" width="70%"/>
:::

Proses [deployment](<https://docs.dewacloud.com/docs/deployment-guide/>) aplikasi adalah sama seperti pada server aplikasi lainnya.

## License Pricing{#license-pricing}

Platform ini dengan mulus mengintegrasikan biaya lisensi LiteSpeed sesuai dengan prinsip **pay-as-you-go** yang adil. Yaitu, lisensi dikenakan biaya hanya untuk kontainer aktif berdasarkan jam untuk 730 jam per bulan. Selain itu, manajemen siklus hidup lisensi sepenuhnya otomatis:

  * lisensi baru diterbitkan untuk setiap kontainer yang baru dibuat (mis. selama penyediaan lingkungan atau peningkatan horizontal)
  * diperbarui saat mengubah batas sumber daya yang tersedia dalam setiap kontainer
  * diberhentikan saat menghentikan lingkungan atau penskalaan masuk

Berdasarkan kebutuhan Anda, Anda dapat memilih paket yang diperlukan menggunakan tambahan _**LiteSpeed License Manager**_ yang secara otomatis diinstal pada semua node berbasis LiteSpeed (_LS Web Server_, _[LS ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>)_, _[LLSMP](<https://docs.dewacloud.com/docs/lemp-llsmp/>)_).

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/09-litespeed-license-manager.png" alt="LiteSpeed license manager" width="100%"/>

:::tip
Secara default, jenis lisensi dipilih berdasarkan RAM (yaitu sejumlah cloudlets) yang tersedia setelah pembuatan node:  
maksimal 2 GB (16 cloudlets) - gratis  
maksimal 8 GB (64 cloudlets) - 0,014$ per jam (**10$** per bulan)  
lebih dari 8 GB (64 cloudlets) - 0,022$ per jam (**16$** per bulan)
:::

Add-on memungkinkan memilih paket LiteSpeed dengan menentukan batas yang diperlukan untuk:

  * _**Workers**_ \- menunjukkan berapa banyak proses yang akan dihasilkan untuk melakukan pekerjaan server umum
  * _**Domains**_ \- menetapkan batas [domain tingkat-atas](<https://docs.dewacloud.com/docs/custom-domains/>) (subdomain tidak terbatas); setiap domain yang melebihi batas yang ditentukan akan mengakibatkan kesalahan 403

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/10-configure-litespeed-license.png" alt="configure LiteSpeed license" width="100%"/>

| License Plan Name    | Domain Limit | Workers | RAM Limit, GB (max cloudlets) | Pricing (USD)       |
|----------------------|-------------|---------|-------------------------------|---------------------|
| _FREE Starter_       | 1           | 1       | 2 (16)                        | gratis              |
| _Site Owner_         | 5           | 1       | 8 (64)                        | 0,014$ per jam (*10$* per bulan) |
| _Site Owner Plus_    | 5           | 1       | Tidak Terbatas               | 0,022$ per jam (*16$* per bulan) |
| _Web Host Lite_      | Tidak Terbatas | 1    | 8 (64)                        | 0,036$ per jam (*26$* per bulan) |
| _Web Host Essential_ | Tidak Terbatas | 1    | Tidak Terbatas               | 0,049$ per jam (*36$* per bulan) |
| _Web Host Professional_ | Tidak Terbatas | 2 | Tidak Terbatas              | 0,060$ per jam (*44$* per bulan) |
| _Web Host Enterprise_| Tidak Terbatas | 4    | Tidak Terbatas               | 0,082$ per jam (*60$* per bulan) |
| _Web Host Elite_     | Tidak Terbatas | 8+   | Tidak Terbatas               | 0,126$ per jam (*92$* per bulan) |

Selain itu, add-on dapat secara otomatis mengonfigurasi ekstensi **LiteMage Cache** untuk server Anda - solusi caching halaman penuh yang populer dan cepat yang menyimpan halaman dinamis sebagai file statis. Cukup aktifkan pengaturan yang sesuai dalam bingkai add-on dan pilih paket yang diperlukan (menentukan jumlah [objek yang di-cache secara publik](<https://www.litespeedtech.com/products/litespeed-web-server/lsws-pricing/lsws-litemage-pricing#objects>)) di bidang **Options** yang muncul:

  * **Starter** \- 1500 objek di-cache (**0** USD/bulan)
  * **Standard** \- 25000 objek di-cache (**40** USD/bulan)
  * **Unlimited** \- objek di-cache tak terbatas (**100** USD/bulan)

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/11-litemage-cache-for-litespeed.png" alt="LiteMage cache for LiteSpeed" width="100%"/>

:::warning
Biaya pasti mungkin sedikit berbeda untuk platform dengan mata uang selain USD; itu tergantung pada tingkat konversi pada saat peristiwa penagihan setiap jam. Semua biaya akun dapat dilihat melalui **[Billing History](<https://docs.dewacloud.com/docs/monitoring-consumed-resources/#billing-history>)** di dashboard.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/php/php-app-servers/litespeed-web-server/12-litespeed-license-in-billing-history.png" alt="LiteSpeed license in billing history" width="100%"/>

## Baca Juga{#whats-next}

  * [Apache PHP](<https://docs.dewacloud.com/docs/apache-php/>)
  * [NGINX PHP](<https://docs.dewacloud.com/docs/nginx-php/>)
  * [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
  * [LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>)