---
sidebar_position: 6
slug: /galera-recovery
title: Galera Cluster Recovery
---
# Galera Cluster Limitations and Recovery

Instruksi ini mencantumkan batasan dan masalah paling umum saat hosting **[MariaDB Galera Cluster](<https://www.virtuozzo.com/company/blog/mariadb-galera-cluster-replication/>)** di platform. Ikuti panduan ini untuk menemukan kemungkinan masalah dan solusi pemulihan untuk masalah yang sudah terjadi:

  * [Galera Cluster Limitations](#galera-cluster-limitations)
  * [Stop/Start/Restart Specifics](#stopstartrestart-specifics)
  * [Node with Maximum Transactions](#node-with-maximum-transactions)
  * [Starting Cluster after Crash](#starting-cluster-after-crash)
  * [Single Node Failure](#single-node-failure)
  * [Monitoring Galera Cluster](#monitoring-galera-cluster)

## Galera Cluster Limitations{#galera-cluster-limitations}

_Anda dapat menemukan daftar lengkap batasan Galera Cluster di situs [resmi](<https://mariadb.com/kb/en/mariadb-galera-cluster-known-limitations/>)._

Di bawah ini, kami akan menyoroti yang paling relevan dengan platform.

1\. **Semua tabel harus mengandung Primary Key.**

_Semua tabel harus memiliki primary key (primary keys multi-kolom didukung). Operasi DELETE tidak didukung pada tabel tanpa primary key. Selain itu, baris dalam tabel tanpa primary key mungkin muncul dalam urutan yang berbeda pada node yang berbeda._

Untuk mencari tabel tanpa Primary Key, Anda perlu menjalankan kueri berikut:

```sql
select tab.table_schema as database_name, tab.table_name from information_schema.tables tab
left join information_schema.table_constraints tco on tab.table_schema = tco.table_schema
and tab.table_name = tco.table_name and tco.constraint_type = 'PRIMARY KEY'
where tco.constraint_type is null and tab.table_schema not in ('mysql', 'information_schema', 'sys', 'performance_schema')
and tab.table_type = 'BASE TABLE' order by tab.table_schema, tab.table_name;
```

2\. **Tabel [MyISAM](<https://mariadb.com/kb/en/myisam/>)**.

_Saat ini, replikasi hanya berfungsi dengan mesin penyimpan InnoDB. Penulisan ke tabel jenis lain, termasuk tabel sistem (mysql.*) tidak direplikasi (batasan ini tidak termasuk pernyataan DDL seperti CREATE USER, yang secara implisit memodifikasi tabel mysql.* — yang direplikasi). Namun, ada dukungan eksperimental untuk MyISAM - lihat variabel sistem wsrep_replicate_myisam)._

Parameter eksperimental [wsrep_replicate_myisam](<https://mariadb.com/kb/en/galera-cluster-system-variables/#wsrep_replicate_myisam>) untuk mendukung tabel MyISAM telah ditambahkan ke file konfigurasi.

## Stop/Start/Restart Specifics{#stopstartrestart-specifics}

Kondisi utama untuk menghentikan cluster adalah shutdown __berurutan__ dari semua nodenya. Kontainer terakhir mengatur dirinya dalam _bootstrap_, yang berarti bahwa cluster akan dimulai dari node ini.

Platform mengotomatisasi alur semacam itu sehingga Anda tidak perlu melakukan tindakan tambahan. Anda dapat mengoperasikan Galera Cluster seperti lingkungan biasa lainnya dan mulai/menghentikan/memulai ulang melalui dashboard. Acara khusus akan melakukan semua tindakan yang diperlukan (seperti penarikan berurutan node dari cluster) di latar belakang.

Ketika Anda hanya memulai ulang satu node dari cluster, tindakan tersebut adalah standar.

## Node with Maximum Transactions{#node-with-maximum-transactions}

_Sebelum melakukan tindakan apa pun, kami sangat menyarankan membuat cadangan untuk direktori **/var/lib/mysql** pada setiap node cluster._

Saat melakukan operasi pemulihan cluster, Anda perlu mengetahui node dengan nomor urutan tertinggi dari transaksi terakhir (karena cluster harus dimulai dari node ini). Anda bisa mendapatkan nomor urutan transaksi terakhir dari nilai _**seqno**_ dalam file _**/var/lib/mysql/grastate.dat**_ di setiap node:

```bash
mysql @ node270011-env-0668554 ~ $ cat /var/lib/mysql/grastate.dat | grep seqno
seqno: 1133
mysql @ node270016-env-0668554 ~ $ cat /var/lib/mysql/grastate.dat | grep seqno
seqno: 1134
mysql @ node270017-env-0668554 ~ $ cat /var/lib/mysql/grastate.dat | grep seqno
seqno: 1134
```

Biasanya, Anda hanya perlu memilih node dengan nilai parameter tertinggi. Jika semua atau beberapa node memiliki nilai tertinggi yang sama, pilih salah satu dari mereka (sebaiknya kontainer master dari lapisan).

Namun, jika setidaknya satu dari node memiliki nilai _**-1**_, Anda tidak bisa yakin bahwa node-nya konsisten (parameter direset menjadi -1 ketika layanan direstart pada cluster yang tidak bekerja). Dalam kasus seperti itu, Anda perlu memulihkan data dengan memulai _**mysqld**_ dengan parameter **–wsrep-recover**:

```bash
$ mysqld --wsrep-recover
```

Cari output data _**Recovered position**_ - periksa nilai di akhir baris setelah tanda titik dua (_85340_ dalam contoh di bawah):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mysql-mariadb-percona/high-availability-cluster/galera-cluster-recovery-1/galera-cluster-recovery-1.png" alt="Galera cluster recovered position" max-width="100%"/>

```
.... 2020-12-24 10:51:15 0 [Note] WSREP: Recovered position: e94ca741-44f5-11eb-9bc4-b2e17ef1657d:85340 ....
```

Bandingkan _**Recovered position**_ pada semua node. Yang dengan nilai tertinggi harus digunakan untuk bootstrap. Sekali lagi, pilih node mana pun jika beberapa memiliki nilai tertinggi. Selanjutnya, atur variabel **safe_to_bootstrap** ke _1_ dalam file _**grastate.dat**_ dan lakukan bootstrap dari node ini.

## Starting Cluster after Crash{#starting-cluster-after-crash}

1\. Proses _**mysql**_ pada node dapat hang setelah crash cluster. Meskipun mungkin ditampilkan sebagai "running", tetapi Anda tidak dapat melakukan operasi normal seperti membuat koneksi atau menghentikan proses dengan cara standar (melalui init script).

Jadi, sebelum memulai cluster, pastikan bahwa proses _**mysql**_ tidak berjalan di node. Proses yang hang harus dihentikan secara manual.

2\. Setelah membunuh proses _**mysql**_, restart semua kontainer MySQL Anda.

3\. Periksa nilai parameter **safe_to_bootstrap** dalam file _**/var/lib/mysql/grastate.dat**_ - harus **0**.

```bash
CT-44999 /# grep safe_to_bootstrap /var/lib/mysql/grastate.dat
safe_to_bootstrap: 0
```

4\. Pada [node with maximum transactions](#node-with-maximum-transactions), atur **safe_to_bootstrap** menjadi **1** dan mulai proses _mysql_.

```bash
CT-44999 /# sed -i 's/safe_to_bootstrap: 0/safe_to_bootstrap: 1/g' /var/lib/mysql/grastate.dat
CT-44999 /# grep safe_to_bootstrap /var/lib/mysql/grastate.dat
safe_to_bootstrap: 1
CT-44999 /# service mysql start
```

5\. Selanjutnya, mulai _mysql_ secara berurutan pada node yang tersisa:

```bash
# service mysql start
```

:::warning
Bisa jadi sulit untuk menentukan sebuah node dengan nomor transaksi tertinggi setelah crash cluster. Dalam kasus ini, Anda mungkin bisa mengatur safe_to_bootstrap ke 1 pada node master terlebih dahulu.
:::

Jika mysql berhasil dimulai pada node _kedua_, Anda bisa melanjutkan ke yang berikutnya.

Namun, jika terjadi kesalahan, periksa _**mysqld.log**_ pada node _kedua_ ini. Cari pesan yang mirip dengan yang berikut ini:

```bash
2020-11-19 16:55:20 0 [ERROR] WSREP: gcs/src/gcs_group.cpp:group_post_state_exchange():422: Reversing history: 3151891 -> 3150782, this member has applied 1109 more events than the primary component.Data loss is possible. Aborting.
```

Jika catatan seperti itu ada, node _kedua_ Anda memiliki lebih banyak transaksi daripada yang awalnya dipilih (yaitu node pertama di mana Anda mengatur **safe_to_bootstrap** ke **1**). Kembali ke [awal dari bagian ini](#starting-cluster-after-crash) dan mulai ulang, menggunakan node _kedua_ di langkah keempat.

## Single Node Failure{#single-node-failure}

Penyebab paling umum dari crash node adalah ketidakmungkinan untuk memproses permintaan karena beberapa [batasan](#galera-cluster-limitations) yang diabaikan. Anda dapat memeriksa log _**/var/log/mysql/mysqld.log**_ untuk error semacam itu.

Untuk memulihkan sebuah node, Anda perlu:

  * memastikan tidak ada proses _**mysql**_ yang berjalan pada node
  * mengatur parameter **safe_to_bootstrap** ke _0_ dalam file _**/var/lib/mysql/grastate.dat**_
  * restart node tersebut via skrip _init_

```bash
/etc/init.d/mysql restart
```

:::warning
Jika ada masalah dengan batasan Galera cluster, error dapat muncul kembali setelah beberapa waktu.
:::

## Monitoring Galera Cluster{#monitoring-galera-cluster}

Anda dapat memeriksa status dan berbagai parameter cluster dengan menentukannya dalam perintah **SHOW GLOBAL STATUS LIKE** pada node mana pun dari cluster. Tergantung pada nilai yang diberikan, Anda dapat melihat aspek yang berbeda dari cluster. Misalnya:

```bash
mysql -uuser -ppass -e "SHOW GLOBAL STATUS LIKE 'wsrep_cluster_size';"
+ -------------------- + ------- +
| Variable_name        | Value   |
+ -------------------- + ------- +
| wsrep_cluster_size   |    3    |
+ -------------------- + ------- +

mysql -uuser -ppass -e "SHOW GLOBAL STATUS LIKE 'wsrep_cluster_status';"
+ ---------------------- + --------- +
| Variable_name          |  Value    |
+ ---------------------- + --------- +
| wsrep_cluster_status   | Primary   |
+ ---------------------- + --------- +

mysql -uuser -ppass -e "SHOW GLOBAL STATUS LIKE 'wsrep_local_state_comment';"
+ --------------------------- + -------- +
| Variable_name               | Value    |
+ --------------------------- + -------- +
| wsrep_local_state_comment   | Synced   |
+ --------------------------- + -------- +
```

:::tip
Lihat lebih banyak contoh di dokumentasi official Galera cluster.
:::

Jika cluster Anda menyertakan node _**ProxySQL**_, status dapat diperiksa dengan mengeksekusi permintaan berikut pada salah satu node _ProxySQL_:

```bash
CT-44998 /# mysql -uadmin -padmin -P6032 -h127.0.0.1 -e "select * from runtime_mysql_servers;"
Warning: Using a password on the command line interface can be insecure.
+--------------+----------+------+-----------+--------+--------+-------------+-----------------+---------------------+---------+----------------+---------+
| hostgroup_id | hostname | port | gtid_port | status | weight | compression | max_connections | max_replication_lag | use_ssl | max_latency_ms | comment |
+--------------+----------+------+-----------+--------+--------+-------------+-----------------+---------------------+---------+----------------+---------+
| 2            | node3303 | 3306 | 0         | ONLINE | 1      | 0           | 1000            | 0                   | 0       | 0              |         |
| 3            | node3304 | 3306 | 0         | ONLINE | 1      | 0           | 1000            | 0                   | 0       | 0              |         |
| 3            | node3303 | 3306 | 0         | ONLINE | 1      | 0           | 1000            | 0                   | 0       | 0              |         |
| 2            | node3304 | 3306 | 0         | ONLINE | 1      | 0           | 1000            | 0                   | 0       | 0              |         |
+--------------+----------+------+-----------+--------+--------+-------------+------------
```

Semua node harus berstatus ONLINE.

## Baca Juga{#whats-next}

  * [Auto-Clustering of Instances](<https://docs.dewacloud.com/docs/auto-clustering/>)
  * [Create DB Server](<https://docs.dewacloud.com/docs/database-hosting/>)
  * [Database Auto-Configuration](<https://docs.dewacloud.com/docs/database-auto-configuration/>)