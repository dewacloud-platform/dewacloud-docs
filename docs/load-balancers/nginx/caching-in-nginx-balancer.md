---
sidebar_position: 5
slug: /caching-in-nginx-balancer
title: Caching in NGINX Balancer
---
# NGINX Balancer Configuration

File konfigurasi NGINX berikut tersedia:

Folder | File | Path  
---|---|---  
[conf](<https://docs.dewacloud.com/docs/#conf>) | nginx.conf | /etc/nginx  
[conf.d](<https://docs.dewacloud.com/docs/#confd>) |  | /etc/nginx/conf.d  
[tcpmaps](<https://docs.dewacloud.com/docs/#tcpmaps>) | mappings.xml | /etc/nginx/tcpmaps  

NGINX balancer ditambahkan secara otomatis jika Anda memilih beberapa app servers.

## CONF{#conf}

Untuk melakukan konfigurasi yang diperlukan pada NGINX balancer, file _**nginx.conf**_, yang terletak di folder **conf**, digunakan.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/caching%20in%20nginx%20balancer/01-create-environment.png" alt="NGINX balancer configuration file" width="40%"/>

[Back to the list](<https://docs.dewacloud.com/docs/#back>)

## CONF.D{#confd}

Dengan akses ke konfigurasi NGINX, Anda tidak hanya dapat mengedit file yang ada tetapi juga mengunggah file konfigurasi Anda sendiri dengan pengaturan kustom ke folder **conf.d**.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/caching%20in%20nginx%20balancer/02-environment-wizard.png" alt="NGINX balancer custom conf.d settings" width="100%"/>

[Back to the list](<https://docs.dewacloud.com/docs/#back>)

## TCPMAPS{#tcpmaps}

Folder **tcpmaps** berisi file _**mappings.xml**_ di mana Anda dapat mengatur pengalihan port TCP balancing. Di sana Anda perlu menentukan pasangan port: satu untuk didengarkan dan yang lainnya untuk diarahkan.

Anda dapat menemukan lebih banyak informasi di dokumen [NGINX Load Balancing](<https://docs.dewacloud.com/docs/nginx-load-balancer/>) dan [TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>).

Untuk mengatur [caching di NGINX](<https://docs.dewacloud.com/docs/nginx-caching/>) klik tautan dan ikuti instruksinya.

<img src="https://assets.dewacloud.com/dewacloud-docs/load%20balancers/NGINX/caching%20in%20nginx%20balancer/03-nginx-balancer-config.png" alt="NGINX balancer TCP mappings" width="70%"/>

[Back to the list](<https://docs.dewacloud.com/docs/#back>)

## Baca Juga{#whats-next}

  * [Load Balancing](<https://docs.dewacloud.com/docs/load-balancing/>)
  * [Caching in NGINX](<https://docs.dewacloud.com/docs/nginx-caching/>)
  * [Memcached Configuration](<https://docs.dewacloud.com/docs/memcached-configuration/>)
  * [Custom Error Page Settings via NGINX Balancer](<https://docs.dewacloud.com/docs/custom-error-page/>)
