---
sidebar_position: 3
slug: /container-redeploy
title: Container Redeploy
---

# Container Redeploy{#container-redeploy}

Mayoritas solusi berbasis Docker (termasuk [stacks](<https://docs.dewacloud.com/docs/software-stacks-versions/>) yang di-manage oleh platform) terus dikembangkan, menghadirkan versi produk serta perbaikan baru. Oleh karena itu, disarankan untuk memperbarui template Anda secara teratur ke tag terbaru mereka, yaitu rilis terbaru.

Operasi seperti itu disebut _**redeploy**_ dan memiliki spesifik berikut ketika dikelola di platform:

  * data pengguna custom dan file sistem sensitif dipertahankan selama update: 
    * konten dari _**[volumes](<https://docs.dewacloud.com/docs/container-volumes/>)**_ (baik yang default maupun custom)
    * file yang tercantum dalam _**[/etc/jelastic/redeploy.conf](<https://docs.dewacloud.com/docs/#saving-custom-data-during-container-redeploy>)**_ (konfigurasi khusus dari stacks), yang diperlukan untuk memastikan operabilitas container
    * konfigurasi terkait _**AutoFS dan NFS**_ (_/etc/autofs.jelastic_ , _/etc/auto.master_ , _/etc/exports_)
    * _**firewall configurations**_ (_/etc/sysconfig/iptables-custom_ , _/etc/sysconfig/iptables4-jelastic_ , _/etc/sysconfig/iptables6-jelastic_ , _/etc/iptables/rules.v4_)
    * _**SSH access data**_ (_/root/.ssh/authorized_keys_ , _/root/.ssh/authorized_keys2_ , _/root/.ssh/id_rsa_)
  * semua custom [configurations](<https://docs.dewacloud.com/docs/container-configuration/>) yang telah ditentukan sebelumnya (seperti _run commands_ , _links_ , _variables_ , dll.) tidak akan terpengaruh
  * jika beroperasi dengan [multiple](<https://docs.dewacloud.com/docs/horizontal-scaling/>) (instances yang diskalakan secara horizontal), update dapat dilakukan pada containers satu per satu, yaitu secara implisit tanpa downtime

Dengan cara ini, Anda dapat memperbarui container berbasis Docker Anda ke tag (versi) baru tanpa mempengaruhi aplikasi di dalamnya. Dengan platform ini, redeployment container dapat dilakukan hanya dalam beberapa klik melalui [dashboard UI](<https://docs.dewacloud.com/docs/#update-container-via-dashboard>) atau dengan mudah diotomatisasi [via API](<https://docs.dewacloud.com/docs/#update-container-via-platform-apicscli>).

**Catatan:** Saat bekerja dengan database _MySQL_, _MariaDB_, atau _Percona_, [downgrading](<https://dev.mysql.com/doc/refman/8.0/en/downgrading.html>) (yaitu melakukan redeploy ke versi yang lebih rendah) tidak didukung. Jika operasi ini diperlukan, kami merekomendasikan [membuat cadangan](<https://docs.dewacloud.com/docs/database-backups/>) dan memulihkan database setelah redeploy (atau secara keseluruhan di container terpisah).

Untuk mempelajari tentang [menyimpan atau membuat cadangan data custom](<https://docs.dewacloud.com/docs/#saving-custom-data-during-container-redeploy>) selama redeploy, lihat bagian yang sesuai di bawah.

## Update Container via Dashboard{#update-container-via-dashboard}

Cara paling langsung dan ramah pengguna untuk melakukan redeploy tag template adalah dengan menggunakan platform dashboard. Instruksi di bawah ini akan memandu Anda melalui langkah-langkah yang diperlukan:

1\. Bingkai dialog redeployment khusus dapat diakses dengan dua cara berbeda:

  * pilih tombol **Redeploy Container(s)** di sebelah node atau layer yang diperlukan (untuk memperbarui semua container yang terdiri sekaligus)
  <img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-1.png" alt="redeploy containers via UI" max-width="100%"/>

  * klik ikon pensil di sebelah versi tag layer di topology wizard (ketika **Changing Environment Topology** dari environment yang ada)
  <img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-2.png" alt="redeploy containers topology wizard" max-width="100%"/>

2\. Sebagai hasilnya, bingkai _**Redeploy containers**_ akan terbuka, di mana Anda dapat memilih **Tag** baru untuk container Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-3.png" alt="redeploy containers dialog" max-width="100%"/>

Anda juga dapat menyesuaikan beberapa opsi tambahan:

  * **Keep volumes data** \- jika diaktifkan, data dalam [volumes](<https://docs.dewacloud.com/docs/container-volumes/>) akan terlindungi dari penghapusan dan akan tetap tersedia setelah redeploy
  * untuk [horizontally scaled](<https://docs.dewacloud.com/docs/horizontal-scaling/>) containers, Anda dapat memilih antara dua opsi deployment: 
    * **Simultaneous deployment** \- redeploy semua nodes sekaligus, lebih cepat tetapi menyebabkan downtime aplikasi singkat
    * **Sequential deployment with delay** \- redeploy instances satu per satu dengan _delay_ tertentu di antara operasi. Opsi ini memastikan bahwa selalu ada node running untuk memproses permintaan yang masuk (i.e. no downtime)

Setelah semua konfigurasi diatur, klik tombol **Redeploy** dan konfirmasikan dalam pop-up.

3\. Setelah update selesai, Anda akan melihat notifikasi yang sesuai di sudut kanan atas dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-4.png" alt="successful redeploy notification" width="70%"/>

Klik tombol **Show Logs** untuk membuka tab yang sesuai dengan informasi tentang container yang diperbarui - _Node ID_ , _name:tag_ , dan _Duration_.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-5.png" alt="redeploy action log" width="60%"/>

Sekarang, Anda tahu cara melakukan redeploy container melalui platform dashboard.

## Update Container via Platform API/CS/CLI{#update-container-via-platform-apicscli}

Proses update dapat diotomatiskan menggunakan [platform API](<https://www.virtuozzo.com/application-platform-api-docs/>), [Cloud Scripting](<https://docs.cloudscripting.com/creating-manifest/actions/#api>), dan [CLI](<https://docs.dewacloud.com/docs/cli/>) (command-line interface).

:::tip
Contoh mendetail tentang redeploy container via CLI disediakan dalam panduan yang terhubung.
:::

Redeploy container dilakukan dengan metode
_**[environment.Control.RedeployContainers](<https://docs.jelastic.com/api/#!/api/environment.Control-method-RedeployContainers>)**_, yang diatur dengan parameter berikut:

  * _**envName**_ \- nama dari lingkungan di mana container(s) perlu diredeploy

  * _**session**_ \- user session (atau [token](<https://docs.dewacloud.com/docs/personal-access-tokens/>)) identifier, digunakan untuk autentikasi

  * _**nodeGroup**_ \- identifier dari [environment layer](<https://docs.cloudscripting.com/creating-manifest/selecting-containers/#all-containers-by-group>) untuk di-update _(optional)_

  * _**nodeId**_ \- nomor identifikasi dari container tertentu untuk diredeploy _(optional)_

**Catatan:** Anda perlu menyatakan parameter _**nodeGroup**_ atau _**nodeId**_ untuk menentukan target operasi. Metode ini mengabaikan _**nodeGroup**_ jika keduanya disediakan dan gagal jika tidak ada yang ditentukan.

  * _**tag**_ \- versi image untuk diterapkan

  * _**useExistingVolumes**_ \- atur ke _true_ untuk mempertahankan data dalam volumes yang dipasang di dalam container yang diperbarui _(optional)_

  * _**login**_ dan _**password**_ \- kredensial untuk mengakses image dari registry privat _(optional)_

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-6.png" alt="redeploy containers API" max-width="100%"/>

Konstruk berikut dapat digunakan untuk mendefinisikan update container dalam [automation scripts](<https://docs.cloudscripting.com/creating-manifest/actions/#api>) Anda:

1\. Redeploy seluruh layer dari containers.

```yaml
api: environment.control.RedeployContainers 
nodeGroup: {nodeGroup} 
tag: {myImage}:{newTag} 
```

Di sini:

  * _**\{nodeGroup\}**_ \- [environment layer (or node group)](<https://docs.cloudscripting.com/creating-manifest/selecting-containers/#all-containers-by-group>) di mana semua containers harus diupdate
  * _**\{myImage\}**_ \- nama dari image yang akan diterapkan
  * _**\{newTag\}**_ \- versi yang dibutuhkan dari image di atas

2\. Memperbarui container tertentu.

```yaml
api: environment.control.RedeployContainers 
nodeId: {nodeId}
tag: {myImage}:{newTag} 
```

Di sini, nilai _**\{nodeId\}**_ harus diganti dengan nomor ID dari node yang dibutuhkan (placeholder lainnya sama seperti contoh di atas).

## Saving Custom Data during Container Redeploy{#saving-custom-data-during-container-redeploy}

Setiap [platform-managed container](<https://docs.dewacloud.com/docs/software-stacks-versions/>) dilengkapi dengan file khusus _**/etc/jelastic/redeploy.conf**_, yang menyimpan daftar konfigurasi container yang kritis. Pengaturan ini secara otomatis dipertahankan oleh platform selama redeploy container. File ini dapat dengan mudah diakses melalui [embedded file manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>) melalui shortcut _Favorites_.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-7.png" alt="redeploy.conf file manager shortcut" max-width="100%"/>

File _**redeploy.conf**_ dibagi menjadi dua bagian [system](<https://docs.dewacloud.com/docs/#system-files-and-folders>) dan [custom](<https://docs.dewacloud.com/docs/#custom-files-and-folders>) dan dapat digunakan untuk [membuat cadangan file sistem](<https://docs.dewacloud.com/docs/#creating-file-backup-copy-upon-image-redeployment>).

#### System Files and Folders{#system-files-and-folders}

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-8.png" alt="system files and folders" width="50%"/>

**Catatan:** Jangan mengedit daftar “ _**system files and folders**_ ” kecuali Anda tahu persis apa yang Anda lakukan.

Di sini, konfigurasi spesifik container yang diperlukan untuk operasi redeploy yang benar terdaftar. Beberapa file umum disediakan di semua stacks:

  * _**/etc/jelastic/redeploy.conf**_ \- konfigurasi redeployment saat ini sendiri (untuk menyimpan daftar file dan direktori yang diperlukan untuk disimpan selama setiap redeploy container selanjutnya)
  * _**$\{home\}/.bash_profile**_ \- berisi pengaturan shell SSH default (misalnya, pesan pengantar shell, file konfigurasi yang harus diambil, dll.)
  * _**/etc/sysconfig/iptables**_ \- menyimpan aturan firewall default
  * _**/etc/sysconfig/iptables-custom**_ \- berisi [custom firewall rules](<https://docs.dewacloud.com/docs/container-firewall/>)
  * _**/var/lib/jelastic/keys**_ \- menyimpan [SSH private keys yang diunggah](<https://docs.dewacloud.com/docs/ssh-generate-key/>), yang diperlukan untuk mengakses container via SSH dan untuk berinteraksi dengan containers lainnya

Juga, **redeploy.conf** untuk tiap jenis node tertentu mencakup file-file spesifik stack yang berbeda.

Stack | Path  
---|---  
**Tomcat** | /opt/tomcat/conf/jelastic-ha.xml  
/opt/tomcat/conf/jelastic-ssl.xml  
/opt/tomcat/conf/tomcat-env.sh  
/opt/tomcat/conf/variables.conf  
/opt/tomcat/temp/  
/var/spool/cron/tomcat  
**TomEE** | /opt/tomcat/temp/  
/var/spool/cron/tomcat  
**GlassFish** | /home/jelastic/.ssh  
/home/jelastic/.ssh2  
/opt/glassfish/glassfish/domains/domain1/applications  
/opt/glassfish/glassfish/domains/domain1/config/admin-keyfile  
/opt/glassfish/glassfish/domains/domain1/config/domain.xml  
/opt/glassfish/hazelcast.xml  
/opt/glassfish/glassfish/domains/domain1/config/variables.conf  
/opt/glassfish/glassfish/domains/domain1/docroot  
/opt/glassfish/glassfish/nodes  
/root/contexturl  
/var/spool/cron/glassfish  
/var/lib/jelastic/hooks  
**Golang** | /home/jelastic  
/var/lib/jelastic/app.info  
/var/lib/jelastic/keys  
/var/lib/jelastic/vcs  
/var/spool/cron/golang  
**Payara** | /home/jelastic/.ssh  
/home/jelastic/.ssh2  
/opt/payara/glassfish/domains/domain1/applications  
/opt/payara/glassfish/domains/domain1/config/admin-keyfile  
/opt/payara/glassfish/domains/domain1/config/domain.xml  
/opt/payara/hazelcast.xml  
/opt/payara/glassfish/domains/domain1/config/variables.conf  
/opt/payara/glassfish/domains/domain1/docroot  
/opt/payara/glassfish/nodes  
/root/contexturl  
/var/spool/cron/payara  
/var/lib/jelastic/hooks  
**Spring Boot** | /home/jelastic/conf  
/home/jelastic/APP  
/var/lib/jelastic/keys  
/var/spool/cron/jvm  
**Apache PHP** | backup:/etc/php.ini  
/etc/php.d/  
/var/spool/cron/apache  
/var/www/.ssh/  
**Apache Ruby** | /var/lib/jelastic/env  
/var/spool/cron/apache  
**Couchbase** | /opt//etc/  
**MariaDB** | /etc/my.cnf  
/etc/php.ini  
/var/lib/mysql/.ssh/  
/var/spool/cron/mysql  
**Maven** | /opt/maven/.ssh/  
/var/spool/cron  
**Memcached** | /etc/sysconfig/memcached  
**MySQL** | /etc/my.cnf  
/etc/php.ini  
/var/lib/mysql/.ssh/  
/var/spool/cron/mysql  
**NGINX (load balancer)** | /etc/dhcp/dhcpd.conf  
/etc/nginx/conf.d  
/etc/nginx/neighbors  
/etc/nginx/nginx-jelastic.conf  
/etc/nginx/tcpmaps/mappings.xml  
/etc/nginx/upstreams  
/var/lib/nginx/.ssh/  
/var/spool/cron/nginx  
/var/lib/jelastic/SSL  
**NGINX PHP** | backup:/etc/php-fpm.conf  
backup:/etc/php.ini  
/etc/php.d/  
/etc/sysconfig/php-fpm  
/var/lib/nginx/.ssh/  
/var/spool/cron/nginx  
**NGINX Ruby** | /var/lib/jelastic/env  
/var/spool/cron/nginx  
**NodeJS** | /home/jelastic//.ssh/  
home/jelastic//.ssh2/  
var/spool/cron/nodejs  
/home/jelastic/ROOT  
**PerconaDB** | /etc/my.cnf  
/etc/php.ini  
/var/spool/cron/mysql  
**PostgreSQL** | /etc/php.ini  
/var/lib/pgsql/.ssh/  
/var/spool/cron/postgres  
$\{home\}/lib/  
$\{home\}/share/  
**Varnish** | /etc/nginx  
/etc/varnish  
/etc/sysconfig/varnish  
/var/lib/varnish  
/var/spool/cron/varnish  
**WildFly** | /opt/contexturl  
/home/jelastic/.ssh/  
/var/spool/cron/wildfly  
/opt/wildfly/domain  
/opt/wildfly/standalone  
/opt/wildfly/welcome-content/index.html  
/var/lib/jelastic/hooks  

#### Custom Files and Folders{#custom-files-and-folders}

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-9.png" alt="custom files and folders" max-width="100%"/>

**Catatan:** Ketika menyediakan “ _**custom files and folder**_ ”, hanya tambahkan file konfigurasi sistem yang diperlukan untuk memastikan operabilitas container selama redeployment. Gunakan [container volumes](<https://docs.dewacloud.com/docs/container-volumes/>) untuk kasus lain (misalnya untuk mempertahankan data aplikasi Anda).

Anda dapat menambahkan daftar konfigurasi “ _**system files and folders**_ ” default dengan custom files dan folders Anda (jika diperlukan). Buka file _**redeploy.conf**_ dan tambahkan entri dengan jalur penuh ke item yang diperlukan (setiap entri harus dinyatakan dalam baris terpisah).

#### Creating File Backup Copy Upon Image Redeployment{#creating-file-backup-copy-upon-image-redeployment}

Platform menyediakan cara yang nyaman dan sederhana untuk membuat cadangan file konfigurasi selama update container. Artinya, ketika mengganti konfigurasi yang ditentukan dengan versi baru dari tag baru, salinan file dari sebelum redeploy akan dipertahankan.

Untuk membuat cadangan, Anda perlu menentukan jalur ke file yang diperlukan di _**redeploy.conf**_ dan tambahkan prefix “ _backup:_ ” pada catatannya:

```yaml
backup: {path_to_file}
```

**Catatan:** Operasi ini hanya tersedia untuk file (bukan direktori).

Setelah redeploy, konfigurasi dari container lama dapat dengan mudah dikenali oleh ekstensi “ _backup_ ” atau “ _time stamp_ ” yang sesuai. Mereka dapat digunakan untuk rollback instan berdasarkan inkompatibilitas dengan konfigurasi baru atau untuk analisis perubahan.

Misalnya, semua platform-managed PHP application servers secara default membuat cadangan untuk konfigurasi _**/etc/php.ini**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-10.png" alt="file backup via redeploy.conf" max-width="100%"/>

Setelah update container, Anda akan melihat versi baru dan sebelumnya dari _**php.ini**_ atau file lain yang dicadangkan:

  * _**\{file_name\}**_ \- file dari image target redeployment (dari tag baru)
  * _**\{file_name\}.\{time_stamp\}**_ \- versi cadangan dari file yang dibuat tepat sebelum operasi redeploy (file terpisah untuk setiap redeployment ke tag yang berbeda)
  * _**\{file_name\}.backup**_ \- cadangan terbaru dari file (secara otomatis menggantikan cadangan sebelumnya dengan nama yang sama)

<img src="https://assets.dewacloud.com/dewacloud-docs/container/container-redeploy/container-redeploy-11.png" alt="backup file successfully created" max-width="100%"/>

Dengan cara ini, Anda dapat dengan mudah beralih ke pengaturan yang digunakan sebelumnya dengan menggantikan file _**php.ini**_ dengan cadangannya (misalnya melalui penggantian nama atau penyalinan konten).

Sekarang, Anda tahu cara mengelola versi template (Docker tags) dari containers di dalam platform.

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Connect to Custom Container](<https://docs.dewacloud.com/docs/connect-to-custom-container/>)
  * [Custom Container SSH Access](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>)
  * [CLI Container Redeploy](<https://docs.dewacloud.com/docs/cli-container-redeploy/>)