---
sidebar_position: 2
slug: /memcached-configuration
title: Memcached Configuration
---

# Konfigurasi Memcached

File konfigurasi Memcached berikut tersedia:

| Folder | File | Path |
|---|---|---|
| [conf](https://docs.dewacloud.com/#conf) | memcached | /etc/sysconfig |
| [keys](https://docs.dewacloud.com/#keys) | | /var/lib/jelastic/keys |

Informasi lebih lanjut tentang penggunaan Memcached dapat Anda temukan dalam dokumen [Memcached](https://docs.dewacloud.com/memcached/).

## CONF{#conf}

File konfigurasi utama Memcached terletak di path **etc/sysconfig/**, namun secara default file config **memcached** juga sudah dipin di tab Favorites.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-config-1.png" alt="memcached configuration conf" width="100%"/>
</p>


## KEYS{#keys}

Direktori **keys** digunakan sebagai lokasi untuk menambahkan private key yang diperlukan untuk aplikasi Anda.  
Buat key, simpan sebagai file key biasa, dan upload ke folder **key**.  
Sekarang Anda dapat menggunakannya untuk berbagai keperluan hanya dengan mereferensikan path ke key Anda:

_/var/lib/jelastic/keys/\{key_file_name\}_ 
<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-config-2.png" alt="memcached configuration memcached key" width="100%"/>
</p>

## Baca Juga{#whats-next}

- [Memcached System](https://docs.dewacloud.com/memcached/)
- [Session Replication via Memcached](https://docs.dewacloud.com/replication-memcached/)
- [PHP Sessions Clustering](https://docs.dewacloud.com/php-sessions-memcached/)
- [Maven Configuration](https://docs.dewacloud.com/maven-configuration/)