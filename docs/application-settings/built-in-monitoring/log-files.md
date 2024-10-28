---
sidebar_position: 1
slug: /log-files
title: Log Files
---
# View Log Files

Log files sangat penting untuk memahami apa yang terjadi di dalam environment Anda, baik untuk pengembangan, pengujian, atau pemecahan masalah. Ikuti langkah-langkah ini untuk mengakses dan melihat log node Anda:

## Steps to View Logs{#steps-to-view-logs}

### 1. Log into the Platform Dashboard
Gunakan kredensial Anda untuk masuk ke platform dashboard.

### 2. Access Logs
Klik ikon **Log** untuk node yang lognya ingin Anda lihat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/log-files/1-log.png" alt="log button" width="100%"/>

### 3. View Logs
Tab log akan muncul di bagian bawah dashboard Anda. Jika environment Anda berisi beberapa [nodes of the same type](https://docs.dewacloud.com/docs/horizontal-scaling/), gunakan daftar drop-down untuk memilih node yang lognya ingin Anda lihat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/log-files/2-select-node.png" alt="select node to view logs" width="100%"/>

### 4. Manage Logs
Anda dapat:
- **Clear** log
- **Refresh** log
- Gunakan tombol **Prev** dan **Next** untuk navigasi melalui log yang lebih besar

#### Auto-Refresh Feature
Secara default, fitur **Auto refresh** diaktifkan, me-refresh log setiap 3 detik. Ini berguna untuk pemantauan real-time, seperti saat instalasi atau pembaruan. Jika Anda perlu fokus pada detail log tertentu, Anda dapat menonaktifkan auto-refresh. Untuk menonaktifkan, hapus centang **Auto refresh** di daftar drop-down **Refresh**. Anda dapat mengaktifkannya kembali dengan cara yang sama.

### 5. Delete Logs
Untuk menghapus log, arahkan mouse ke atasnya dan klik tombol silang, atau pilih dan klik **Delete** di panel alat atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/built-in-monitoring/log-files/4-delete.png" alt="delete log files" width="100%"/>

### 6. Download Logs via FTP
Log dapat diunduh menggunakan FTP. Untuk lebih jelas tentang instalasi dan penggunaan FTP/FTPS, lihat dokumen [FTP/FTPS Support](https://docs.dewacloud.com/docs/ftp-ftps-support/).

## Available Log Files by Node Type{#available-log-files-by-node-type}

| Node Type         | Available Log Files                |
|-------------------|------------------------------------|
| Tomcat 6, 7, TomEE| manager, localhost_access_log, catalina, host-manager, localhost |
| Jetty             | \{date\}, request                    |
| GlassFish         | \{date\}, request                    |
| MySQL, MariaDB    | mysqld                             |
| PostgreSQL        | postgresql-`day of week`           |
| CouchDB           | couch                              |
| MongoDB           | mongod                             |
| Apache            | access-log, dummy-host, error_log  |
| NGINX PHP         | error, access, php-fpm             |
| NGINX load balancer| tcp_access, error, error_log, access, localhost |
| Memcached         | memcached                          |
| Node.js           | node                               |

#### VCS Log Files
Jika Anda menggunakan repositori GIT/SVN jarak jauh untuk penempatan aplikasi Anda, file log `vcs_update` baru akan ditambahkan ke node **Maven** Anda (untuk Java) atau server aplikasi **Apache/NGINX** (untuk PHP), berisi detail tentang proses build dan deployment proyek.

## Baca Juga

- [View Statistics](https://docs.dewacloud.com/docs/view-app-statistics/)
- [Load Alerts](https://docs.dewacloud.com/docs/load-alerts/)
- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)