---
sidebar_position: 7
slug: /nginx-modsecurity
title: NGINX ModSecurity
---
# Cara Mengaktifkan ModSecurity Web Application Firewall di dalam Server NGINX

[Gleb Antonov](<https://www.virtuozzo.com/company/blog/author/gleb-antonov/> "Posts by Gleb Antonov") | 5 Februari 2020 | [Containers](<https://docs.dewacloud.com/docs/category/containers/>), [DevOps PaaS](<https://docs.dewacloud.com/docs/category/devops-paas/>), [Installer](<https://docs.dewacloud.com/docs/category/installer/>)

[**ModSecurity**](<https://www.modsecurity.org/>) adalah modul _web application firewall (WAF)_ lintas platform dan open-source yang membantu mendeteksi serta mencegah berbagai serangan terhadap aplikasi web. Modul ini dapat memblokir serangan injeksi kode umum yang memastikan tingkat keamanan server yang lebih tinggi. Modul ini dilengkapi dengan serangkaian aturan untuk skrip situs lintas, injeksi SQL, agen pengguna yang buruk, pembajakan sesi, trojan, dan eksploitasi lainnya.

Stack NGINX bersertifikat Jelastic (server aplikasi dan load balancer) sudah disediakan dengan modul _ModSecurity_ yang telah di-_pre-built_. Anda hanya perlu mengikuti beberapa langkah untuk mengaktifkan fungsi ini di container Anda:

1\. Muat modul NGINX _ModSecurity_ yang telah dibagikan dengan menghapus komentar pada baris berikut di file **_/etc/nginx/nginx.conf_**:

**_#load_module modules/ngx_http_modsecurity_module.so;_**

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/modsecurity-nginx-waf-configuration.png" alt="modsecurity nginx waf configuration" width="100%"/>

**Simpan** perubahan pada file.

2\. Selanjutnya, aktifkan fungsi _ModSecurity_ dengan menghapus komentar pada baris berikut di konfigurasi **/etc/nginx/nginx.conf** untuk stack server aplikasi NGINX (atau **/etc/nginx/nginx-jelastic.conf** untuk load balancer, seperti dalam kasus kami).

**#modsecurity on;**

**#modsecurity_rules_file /etc/nginx/conf.d/modsecurity/modsec_includes.conf;**

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/enable-modsecurity-nginx-waf.png" alt="enable modsecurity nginx waf" width="100%"/>

**Tip:** Anda dapat menggunakan kolom **Search** untuk menemukan string yang diperlukan dengan cepat.

Jangan lupa untuk **Simpan** file setelah melakukan penyesuaian.

3\. Berdasarkan konfigurasi **_/etc/nginx/conf.d/modsecurity/modsec_includes.conf_**, [_OWASP ModSecurity Core Rule Set (CRS)_](<https://owasp.org/www-project-modsecurity-core-rule-set/>) sudah disertakan secara default (menyediakan perlindungan umum dari kerentanan yang sering ditemukan di aplikasi web).

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/modsecurity-nginx-waf-rules.png" alt="modsecurity nginx waf rules" width="100%"/>

Selain itu, jika diperlukan, Anda dapat mengunggah aturan khusus Anda sebagai file **_*.conf_** ke folder **/etc/nginx/conf.d/modsecurity/owasp-modsecurity-crs/rules**.

4\. Restart node NGINX yang sesuai untuk menerapkan semua penyesuaian yang telah dilakukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/modsecurity-nginx-waf-restart.png" alt="modsecurity nginx waf restart" width="100%"/>

Sekarang, aplikasi Anda dilindungi dengan ModSecurity.

5\. Anda dapat memverifikasi bahwa modul ini telah dimuat dengan menjalankan perintah **_nginx -V_** di node (misalnya melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)) dan mencari modul ModSecurity dalam daftar.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/modsecurity-nginx-waf-web-ssh.png" alt="modsecurity nginx waf web ssh" width="100%"/>

6\. Keberfungsian ModSecurity dapat diuji dengan mensimulasikan serangan pada aplikasi Anda. Misalnya, coba tambahkan string **_/?q="><script>alert(1)</script>_** ke domain environment Anda. Jika modul berfungsi sebagaimana mestinya, halaman **_403 error_** akan ditampilkan, dan tindakan yang sesuai akan [dilog](<https://docs.dewacloud.com/docs/view-log-files/>) di file log kesalahan:

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/nginx%20modsecurity/modsecurity-nginx-waf-log.png" alt="modsecurity nginx waf log" width="100%"/>

Seperti yang Anda lihat, ModSecurity telah aktif dan bekerja untuk menjaga keamanan aplikasi web Anda.

Mulai uji coba gratis dan pastikan perlindungan tingkat tinggi saat menjalankan proyek Anda dengan [Jelastic Multi-Cloud PaaS](<https://jelastic.com/>).

#### **Artikel Terkait**

##### [Two-Factor Authentication for Extra Security in the Cloud](<https://docs.dewacloud.com/docs/two-factor-authentication/>)

##### [Basic Security for Your Application with NGINX Balancer](<https://docs.dewacloud.com/docs/basic-security-application-nginx-balancer/>)

##### [HTTP/3 Premium CDN Setup for Magento Cloud Hosting](<https://docs.dewacloud.com/docs/cdn-http3-premium-magento/>)

[Subscribe](</newsletter-subscription/>) Search

## Categories

  * [IaaS](</company/blog/category/iaas/>)
  * [DevOps PaaS](</company/blog/category/devops-paas/>)
  * [WordPress](</company/blog/category/wordpress/>)
  * [Kubernetes](</company/blog/category/kubernetes/>)
  * [Storage](</company/blog/category/storage/>)
  * [Multi-Cloud](</company/blog/category/multi-cloud/>)
  * [Webinars](</company/blog/category/video/webinars/>)
  * [Case Studies](</company/blog/category/case-studies/>)
  * [Product Updates](</company/blog/category/product-updates/>)
  * [News](</company/blog/category/news/>) 
