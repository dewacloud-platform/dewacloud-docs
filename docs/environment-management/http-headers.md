---
sidebar_position: 4
slug: /http-headers
title: HTTP Headers
---
# HTTP Headers

**[HTTP headers](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>)** adalah bagian inti dari permintaan dan respons HTTP. Mereka mengirimkan informasi tambahan dengan permintaan atau respons HTTP (misalnya, browser klien, halaman yang diminta, server, dan lainnya).

Header utama yang digunakan dengan environment untuk melakukan deployment aplikasi Anda:

Header | Deskripsi | Nilai  
---|---|---  
**[host](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host>)** | Menentukan host dan nomor port dari sumber daya (server) yang diminta. | _\{envName\}.\{platformDomain\}_  
**[x-forwarded-proto](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto>)** | Mengidentifikasi protokol (HTTP atau HTTPS) yang terhubung ke proxy atau load balancer Anda. | _http/https_  
**[x-forwarded-for](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For>)** | Mengidentifikasi alamat IP asal dari klien yang terhubung ke server web melalui proxy HTTP atau load balancer. | _xx.xx.xx.xx, xx.xx.xx.xx_  
Rantai IP atau rantai IPs (jika permintaan melewati beberapa proxy)  
**x-real-ip** | Alamat IP akhir dalam rantai **x-forwarded-for**, yaitu proxy terbaru dari klien yang terhubung ke server web. | _xx.xx.xx.xx_  
alamat IP paling kanan dalam **x-forwarded-for**  
**x-host** | Nama domain asal dari server (untuk virtual hosting) dan opsional nomor port TCP. | _\{envName\}.\{platformDomain}_ 
**x-uri** | Mengidentifikasi nama atau sumber daya web. | _/_  
:::tip Header keamanan tambahan digunakan untuk beberapa stack tertentu. :::

Daftar header HTTP yang didukung dapat bervariasi berdasarkan topologi dari environment yang terhubung. Karena spesifikasi akses eksternal (melalui [resolver/SLB](<https://docs.dewacloud.com/docs/shared-load-balancer/>) atau [public IP](<https://docs.dewacloud.com/docs/public-ip/>)), ada empat kemungkinan skenario ketika bekerja dengan platform:

Topologi | Skema | Header yang Didukung  
---|---|---  
Single application server | ![SLB to app server](#) | _host  
x-forwarded-proto  
x-real-ip  
x-forwarded-for  
x-host_  
Load balancer dengan application servers | ![SLB to load balancer](#) | _host  
x-real-ip  
x-host  
x-forwarded-for  
x-uri  
x-forwarded-proto_  
Application server dengan public IP | ![public IP to app server](#) | _host_  
Load balancer dengan public IP dan application servers | ![public IP to load balancer](#) | _host  
x-real-ip  
x-host  
x-forwarded-for  
x-uri  
x-forwarded-proto_  
  
## Security Headers {#security-headers}

Anda dapat dengan mudah mengelola security headers dengan mengelola file konfigurasi yang sesuai. Path-nya berbeda untuk setiap server:

  * _Apache_ (_PHP_, _Ruby_, _Python_), _MySQL_, _MariaDB_ : _**/etc/httpd/conf.d/10-shared_headers.conf**_
  * _NGINX_ (_PHP_, _Ruby_) dan _LEMP_ : _**/etc/nginx/conf.d/headers/10-shared_headers.conf**_
  * _LiteSpeed_, _LLSMP_ : _**/var/www/conf/vhconf.xml**_ (hanya dapat disesuaikan melalui panel admin)
  * _Tomcat_, _TomEE_ : _**/opt/tomcat/conf/web.xml**_

**Catatan:**

  * Pemrosesan headers untuk server _Node.js_, _Golang_, _.NET_, _JavaEngine_, dan _Springboot_ harus diimplementasikan secara manual dalam aplikasi pengguna.
  * Untuk stack _Tomcat_ dan _TomEE_, hanya header berikut yang diaktifkan secara default: _**X-Content-Type-Options**_, _**X-Frame-Options**_, _**X-XSS-Protection**_, dan _**Strict-Transport-Security**_ (untuk SSL). Header lain dapat diaktifkan secara manual, jika diperlukan.

![security headers configuration file](#)

Jangan lupa untuk __restart__ server Anda untuk menerapkan perubahan apa pun yang dilakukan pada file konfigurasi.

Header HTTP tambahan berikut digunakan secara default pada stack yang tercantum di atas:

Header | Deskripsi | Nilai  
---|---|---  
**[Cross-Origin-Embedder-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy>)** | Memungkinkan server untuk mendeklarasikan kebijakan penyematan untuk dokumen tertentu. | _unsafe-none;_  
**[Cross-Origin-Opener-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy>)** | Mencegah domain lain membuka/mengontrol jendela. | _same-origin-allow-popups_  
**[Cross-Origin-Resource-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy>)** | Mencegah domain lain membaca respons sumber daya yang diterapkan dengan header ini. | _same-origin_  
**[Content-Security-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy>)** | Mengontrol sumber daya yang diizinkan agen pengguna untuk dimuat untuk halaman tertentu. Nonaktif secara default. | _frame-ancestors ‘self’; frame-src ‘self’;_  
**[Expect-CT](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT>)** (hanya dengan SSL diaktifkan) | Memungkinkan situs untuk menerapkan persyaratan _Certificate Transparency_, yang mencegah penggunaan sertifikat yang diterbitkan secara salah untuk situs tersebut (yaitu, memerlukan bahwa setiap sertifikat untuk situs tersebut muncul dalam log CT publik). | _max-age=3600, enforce_  
**[Permissions-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy>)** | Menyediakan mekanisme untuk mengizinkan dan menolak penggunaan fitur browser dalam bingkai dan iframe yang disematkan. | _payment=(self)  
geolocation=(self)_  
**[Strict-Transport-Security](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security>)** (hanya dengan SSL diaktifkan) | Memaksa komunikasi menggunakan HTTPS daripada HTTP. | _max-age=5; includeSubDomains_  
**[X-Content-Type-Options](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options>)** | Menonaktifkan MIME sniffing dan memaksa browser menggunakan tipe yang diberikan dalam Content-Type. | _nosniff_  
**[X-Frame-Options](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options>)** | Menunjukkan apakah browser harus diizinkan untuk menampilkan halaman dalam _< frame>_, _< iframe>_, _< embed>_, atau _< object>_. | _SAMEORIGIN_  
**[X-Permitted-Cross-Domain-Policies](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security>)** | Menentukan apakah [file kebijakan lintas domain](<https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf>) (_**crossdomain.xml**_) diizinkan. File tersebut dapat mendefinisikan kebijakan untuk mengizinkan klien menangani data lintas domain yang sebaliknya akan dibatasi karena _Same-Origin Policy_. | _none_  
**[Referrer-Policy](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy>)** | Mengontrol berapa banyak informasi referrer (dikirim melalui header **Referer**) yang harus disertakan dalam permintaan. | _strict-origin-when-cross-origin (default)_  
**[X-XSS-Protection](<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#security>)** | Mengaktifkan pemfilteran cross-site scripting. | _1; mode=block_  

## Baca Juga {#whats-next}

  * [Menyiapkan Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
  * [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)