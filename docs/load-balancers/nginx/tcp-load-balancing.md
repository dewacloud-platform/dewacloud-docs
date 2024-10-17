---
sidebar_position: 2
slug: /tcp-load-balancing
title: TCP Load Balancing
---
# TCP Load Balancing

Load balancing memastikan ketersediaan sistem yang tinggi melalui distribusi beban kerja di beberapa komponen. Menggunakan beberapa komponen dengan load balancing, daripada satu komponen, dapat meningkatkan keandalan melalui redundansi. Platform menggunakan NGINX untuk dua jenis load balancing: **TCP** dan **HTTP**.

Klien platform dapat menggunakan **TCP** untuk menyeimbangkan permintaan ke database, mail server, dan aplikasi distributable lainnya dengan dukungan jaringan. Selain itu, TCP dapat digunakan sebagai pengganti HTTP jika diperlukan load balancing yang lebih cepat. Dalam hal ini, Anda hanya perlu mencatat bahwa kecepatan ini dicapai dengan menghilangkan proses penanganan permintaan.

Komponen **TCP load balancing** menerima permintaan koneksi dari aplikasi klien melalui socket jaringan. Komponen ini memutuskan node mana di environment yang menerima permintaan tersebut. Untuk distribusi permintaan ini, platform menggunakan _Round Robin Algorithm_.

Ketika koneksi terjalin, permintaan dari aplikasi klien terus berjalan melalui koneksi yang sama ke node yang dipilih. Aplikasi tidak dapat menentukan instance mana yang dipilih.

Koneksi yang ada hanya dapat hilang jika terjadi masalah, seperti kegagalan jaringan sementara atau hal serupa. Pada saat permintaan diterima lagi, koneksi baru akan dibuat. Koneksi ini dapat masuk ke instance mana pun di environment.

Untuk mendapatkan **TCP balancing** di environment Anda, ikuti instruksi berikut:

1\. Buat environment dengan dua atau lebih server aplikasi (misalnya, **Tomcat**). Dalam hal ini, **NGINX** akan ditambahkan secara otomatis. Perhatikan bahwa Anda perlu mengaktifkan **Public IP** untuk node **NGINX** Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/tcp%20load%20balancing/01-environment-wizard.png" alt="environment wizard" width="100%"/>

2\. Klik **Config** untuk NGINX di environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/tcp%20load%20balancing/02-nginx-config.png" alt="NGINX config" width="100%"/>

3\. Di tab yang terbuka, navigasikan ke **tcpmaps > mappings.xml** dan tentukan port _**frontend**_ dan _**backend**_. **Simpan** perubahan.

_**Frontend**_ adalah port di mana pengguna akan terhubung.  
_**Backend**_ adalah port di mana permintaan akan diteruskan oleh balancer.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/tcp%20load%20balancing/03-nginx-tcp-mapping.png" alt="NGINX TCP mapping" width="100%"/>

4\. **Restart** node NGINX.

Itu saja. Sekarang environment Anda menggunakan TCP balancing untuk server aplikasi Anda.

## Baca Juga{#whats-next}

  * [Testing Load Balancing](<https://docs.dewacloud.com/docs/testing-load-balancing/>)
  * [NGINX Balancer Configuration](<https://docs.dewacloud.com/docs/nginx-balancer-config/>)
  * [Session Replication](<https://docs.dewacloud.com/docs/session-replication/>)
