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

File konfigurasi utama Memcached terletak di folder **conf**.

![memcached configuration conf](#)

## KEYS{#keys}

Direktori **keys** digunakan sebagai lokasi untuk mengunggah kunci pribadi yang diperlukan untuk aplikasi Anda.  
Buat kunci, simpan sebagai file sederhana, dan unggah ke folder **key**.  
Sekarang Anda dapat menggunakannya untuk berbagai keperluan hanya dengan menyebutkan path ke kunci Anda:

_/var/lib/jelastic/keys/\{key_file_name\}_ ![memcached configuration memcached key](#)

## Baca Juga{#whats-next}

- [Memcached System](https://docs.dewacloud.com/memcached/)
- [Session Replication via Memcached](https://docs.dewacloud.com/replication-memcached/)
- [PHP Sessions Clustering](https://docs.dewacloud.com/php-sessions-memcached/)
- [Maven Configuration](https://docs.dewacloud.com/maven-configuration/)