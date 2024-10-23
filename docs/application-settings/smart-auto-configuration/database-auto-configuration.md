---
sidebar_position: 2
slug: /database-auto-configuration
title: Database Auto-Configuration
---
# Database Auto-Configuration

Platform **[Smart Auto-Configuration](https://docs.dewacloud.com/docs/database-auto-configuration/)** secara otomatis menyesuaikan database _**MySQL**_, _**MariaDB**_, dan _**Percona**_ sesuai dengan batas sumber daya yang dialokasikan ke container. Penyesuaian ini memengaruhi file konfigurasi _**/etc/my.cnf**_ dan pengaturan berikut secara khusus:

  * _key_buffer_size_
  * _table_open_cache_
  * _myisam_sort_buffer_size_
  * _innodb_buffer_pool_size_

Mulai dari versi **5.7** dan **8.0** untuk **MySQL/Percona** dan **MariaDB 10.x**, dua parameter tambahan dikonfigurasi oleh platform:

  * _innodb_buffer_pool_instances_ \- dihapus di MariaDB sejak _10.6.x_ (selalu 1 instance pool)
  * _innodb_buffer_pool_chunk_size_

Jika Anda ingin mengubah secara manual pengaturan dari daftar di atas, Anda perlu mengatur variabel _**JELASTIC_AUTOCONFIG**_ [environment variable](https://docs.dewacloud.com/docs/container-variables/) ke " _false_ ", " _disable_ ", atau " _0_ ". Jika tidak, perubahan kustom Anda akan ditimpa.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/database-auto-configuration/01-paas-autoconfig-variable.png" alt="PaaS autoconfig variable" width="100%"/>

:::tip
Sebagai alternatif, Anda dapat mengganti pengaturan apa pun di file _/etc/my.cnf_ (termasuk yang dikelola oleh **Smart Auto-Configuration** platform) dengan menyatakan pengaturan tersebut di file _/etc/mysql/conf.d/custom.cnf_.
:::

### Legacy Implementation{#legacy-implementation}

Jika Anda ingin secara manual mengubah pengaturan auto-configured pada container lama, Anda perlu menghapus baris " _#Jelastic autoconfiguration mark._ " di awal file _**/etc/my.cnf**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/smart-auto-configuration/database-auto-configuration/02-paas-autoconfiguration-mark.png" alt="PaaS autoconfiguration mark" width="100%"/>

## Baca Juga{#whats-next}

  * [Smart Auto-Configuration](https://docs.dewacloud.com/docs/database-auto-configuration/)
  * [PHP Auto-Configuration](https://docs.dewacloud.com/docs/php-auto-configuration/)
  * [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
  * [Environment Variables](https://docs.dewacloud.com/docs/environment-variables/)