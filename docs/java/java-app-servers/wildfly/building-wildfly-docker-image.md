---
sidebar_position: 3
slug: /building-wildfly-docker-image
title: Building WildFly Docker Image
---

# Membangun Kontainer Kustom

Dengan platform, proses mempersiapkan image Docker Anda sendiri dapat
dipermudah dengan membangun berdasarkan image yang sudah ada
(yaitu, di atas template dasar platform **CentOS 7**). Ini memungkinkan
untuk melewatkan semua langkah, yang sudah diselesaikan dalam template "induk" tersebut, dan hanya menambahkan penyesuaian yang diperlukan. Kita akan mempertimbangkan prosedur ini
dalam contoh mempersiapkan image [WildFly](<https://www.wildfly.org/>) kustom
- server aplikasi Java yang fleksibel dan ringan, yang merupakan penerus langsung dari JBoss yang populer.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-1.png" alt="membangun image WildFly" width="100%"/>

Cara yang paling umum untuk membuat image Docker adalah dengan menyusun _**Dockerfile**_
\- manifest khusus, yang memungkinkan otomatisasi tambahan melalui
daftar perintah yang diinginkan ke dalam file teks sederhana, yang akan dibaca dan
dieksekusi oleh Docker daemon. Dengan cara ini, template baru akan dibuat
secara otomatis berdasarkan instruksi yang tercantum (sementara jika tidak, Anda perlu
memanggil setiap operasi yang diperlukan secara manual, satu per satu).

Di bawah ini, kita akan mempertimbangkan semua spesifikasinya untuk image kustom yang berjalan di platform kami, dan, sebagai hasilnya, Anda akan mendapatkan versi WildFly server yang siap digunakan dan ter-docker-kan langsung di platform tersebut.

Jadi, mari kita ikuti langkah-langkah operasi yang diperlukan satu per satu:

  * [menyusun dockerfile](<https://docs.dewacloud.com/docs/#composing-dockerfile>)
  * [menambahkan image ke repository](<https://docs.dewacloud.com/docs/#adding-image-to-repository>)
  * [deployment image di platform](<https://docs.dewacloud.com/docs/#deploying-image-at-platform>)

## Menyusun Dockerfile{#composing-dockerfile}

Untuk memulainya, buat file teks kosong - kita akan menyatakan semua
operasi yang sesuai langsung di dalamnya - dan lanjutkan dengan instruksi berikut.

:::note
Bagian ini eksploratif sifatnya dan hanya mencakup dasar-dasar yang diperlukan untuk persiapan dockerfile Anda. Namun, jika Anda ingin mempelajari spesifik dari prosesnya dan mendapatkan panduan yang lebih rinci, Anda dapat memeriksa referensi dockerfile resmi. Selain itu, Anda dapat mengunduh dockerfile yang sudah dipersiapkan terlebih dahulu (dengan contoh image WildFly kami) dan hanya melihat bagian ini untuk penjelasan tindakan yang telah dilakukan, melewati pembuatan file manual.
:::

1\. Langkah awal adalah menentukan template dasar untuk pembuatan image kita -
kita akan menggunakan _jelasticdocker/jelastic-centos7-base_ dengan sistem operasi
**CentOS 7** yang sudah dikonfigurasi di dalamnya. Untuk menetapkan ini di dalam
dockerfile, instruksi _FROM_ harus digunakan:

```
FROM jelasticdocker/jelastic-centos7-base:latest
```

2\. Selanjutnya, Anda dapat menentukan informasi umum image (seperti metadata atau beberapa
variabel internal), yang akan diperlukan selama konfigurasi lebih lanjut.
Gunakan contoh di bawah ini untuk menetapkan nilai yang diperlukan:

```
LABEL maintainer="Virtuozzo"
ENV WILDFLY_VERSION 13.0.0.Final
ENV ADMIN_USER jelastic
ENV ADMIN_PASSWORD jelastic
```

di mana:

  * _**LABEL**_ \- memungkinkan Anda menetapkan metadata image melalui pasangan kunci-nilai yang sesuai (mis. penulis dari image Docker, versinya, dll.)
  * _**ENV**_ \- menetapkan variabel environment utama, yaitu:
    * _WILDFLY_VERSION_ \- versi WildFly yang akan dibangun; dapat diubah ke rilis lain jika diperlukan (dapatkan daftar versi yang saat ini [tersedia](<https://www.wildfly.org/downloads/>))
    * _ADMIN_USER_ \- nama administrator sewenang-wenang untuk mengakses panel admin WildFly selanjutnya
    * _ADMIN_PASSWORD_ \- kata sandi yang diinginkan untuk pengguna yang ditentukan

3\. Sekarang, Anda dapat mendeklarasikan konfigurasi yang diperlukan menggunakan perintah shell - operator _RUN_ harus digunakan untuk tujuan ini.

Pertama-tama, Anda perlu menginstal Java Development Kit (**OpenJDK** dari
versi ke _8_ dalam kasus kita) dan archiver _tar_ (yang akan digunakan untuk
mendekompresi file yang diunduh):

```
RUN yum -y install java-1.8.0-openjdk-devel tar && yum -y update;
```

Perintah ini diakhiri dengan memanggil pembaruan umum dari paket yang terinstal.

4\. Selanjutnya, kita akan mendeklarasikan beberapa operasi tambahan untuk mengunduh kode sumber WildFly dari situs resmi dan mengekstraknya ke dalam folder **/opt**.

```
RUN cd /opt && curl -O https://download.jboss.org/wildfly/${WILDFLY_VERSION}/wildfly-${WILDFLY_VERSION}.tar.gz \
&& $(which tar) xf wildfly-${WILDFLY_VERSION}.tar.gz \
&& rm wildfly-${WILDFLY_VERSION}.tar.gz
```

5\. Pada langkah ini, Anda perlu membuat symlink untuk mempersingkat jalur ke direktori utama WildFly dan, sebagai hasilnya, membuatnya mudah diakses:

```
RUN ln -s /opt/wildfly-$WILDFLY_VERSION /opt/wildfly
```

6\. Mari kita lanjutkan dengan pembuatan file konfigurasi utama untuk
server WildFly kita dan meletakkan semua opsi yang diperlukan ke dalamnya:

```
RUN echo -en "JAVA_HOME=\"/usr/lib/jvm/java\""'\n'\
"JBOSS_HOME=\"/opt/wildfly\""'\n'\
"JBOSS_USER=wildfly"'\n'\
"JBOSS_MODE=standalone"'\n'\
"JBOSS_CONFIG=standalone.xml"'\n'\
"STARTUP_WAIT=60"'\n'\
"SHUTDOWN_WAIT=60"'\n'\
"JBOSS_CONSOLE_LOG=\"/var/log/wildfly/console.log\""'\n'\
"JBOSS_OPTS=\"-b 0.0.0.0 -bmanagement=0.0.0.0 -Djboss.management.http.port=4949 -Djboss.management.https.port=4848\"" >> /etc/default/wildfly
```

7\. CentOS 7 dimulai menggunakan skrip inisiasi _Systemd_ secara default, tetapi server WildFly memerlukan yang lebih tradisional yaitu _SystemV_ _Init_, jadi Anda perlu menyalin initskrip default ke folder _**/etc/init.d**_ dan mengedit konfigurasi yang sesuai untuk menghindari pengalihan systemd:

```
RUN wget https://raw.githubusercontent.com/wildfly/wildfly-core/master/core-feature-pack/src/main/resources/content/docs/contrib/scripts/init.d/wildfly-init-redhat.sh -O /etc/rc.d/init.d/wildfly;
sed -i "/# Source function library/a\SYSTEMCTL_SKIP_REDIRECT=1" /etc/init.d/wildfly; chmod +x /etc/init.d/wildfly;
```

8\. Selanjutnya, kita akan menetapkan WildFly untuk dijalankan pada saat startup container dengan menambahkan pengguna sistem yang sesuai dan mengubah kepemilikan file untuknya:

```
RUN chkconfig --add wildfly; chkconfig wildfly on; mkdir -p /var/log/wildfly; adduser wildfly;
chown -R wildfly:wildfly /opt/wildfly-$WILDFLY_VERSION /opt/wildfly /var/log/wildfly;
```

9\. Juga, mari kita tambahkan kredensial pengguna yang telah kita tetapkan dalam langkah instruksi pertama untuk mengakses panel admin server:

```
RUN /opt/wildfly/bin/add-user.sh --user $ADMIN_USER --password $ADMIN_PASSWORD --silent --enable
```

10\. Sekarang, kita dapat memperbaiki tautan ke panel admin itu sendiri di halaman _index.html_ default dengan mendefinisikan pengalihan yang sesuai (seolah-olah image kita akan dideploy ke container tanpa IP eksternal terlampir, port _4949_ dan koneksi HTTP harus digunakan di sini):

```
RUN sed -i "s/<a href=\"\/console\">/<a href=\"\/console\" onclick=\"javascript:event.target.port=4949;event.target.protocol=\'http:\';\">/" /opt/wildfly/welcome-content/index.html
```

11\. Tambahkan [pengaturan locale](<https://docs.dewacloud.com/docs/locale-settings/>) bahasa Inggris ke container.

```
RUN localedef -i en_US -f UTF-8 en_US.UTF-8
```

12\. Tindakan yang diperlukan lainnya adalah menetapkan image Docker kita untuk mendengarkan port yang diperlukan saat runtime. Instruksi _EXPOSE_ dimaksudkan untuk ini:

```
EXPOSE 22 80 443 8080 8743 9990 9993 8009 4848 4949
```

13\. Terakhir, Anda perlu mengatur _ENTRYPOINT_ untuk mendefinisikan container agar dapat dijalankan sebagai executable. Dalam kasus kita, shell bash harus ditentukan:

```
ENTRYPOINT ["/bin/bash"]
```

Itu saja! Jangan lupa untuk menyimpan semua pengaturan yang dinyatakan untuk mendapatkan dockerfile yang siap digunakan.

## Menambahkan Image ke Repository{#adding-image-to-repository}

Setelah dockerfile yang tepat dipersiapkan, Anda siap untuk membangun
image WildFly Anda berdasarkan itu dan, selanjutnya, mendorongnya ke repository.

:::note
Sebelum memulai, pastikan Anda memiliki versi Docker CE yang sesuai (sesuai dengan jenis OS yang digunakan) diinstal untuk menjalankan perintah yang dijelaskan di bawah ini pada mesin yang saat ini digunakan.
:::

Jadi, ikuti langkah-langkah berikut untuk menyelesaikannya:

1\. Jalankan perintah _docker build_ dengan parameter yang diperlukan untuk membuat
image baru secara lokal:

```
sudo docker build -t {image_name} {dockerfile_location}
```

di mana

  * _**\{image_name\}**_ \- penamaan repository image; secara opsional, tag versi dapat ditambahkan setelah pemisah " _:_ " (misalnya, _jelastic/wildfly:latest_)
  * _**\{dockerfile_location\}**_ \- baik jalur lokal atau URL ke dockerfile Anda (dapat diset sebagai “.” jika file tersebut berada di direktori saat ini)

2\. Anda harus menerima pesan _build success_ dengan ID dari image baru Anda di sampingnya. Untuk memastikan itu tersedia di workstation Anda, Anda dapat meminta daftar semua template lokal untuk ditampilkan dengan:

```
sudo docker images
```

3\. Terakhir, Anda perlu mendorong (mengunggah) image Anda ke registry dengan
perintah yang sesuai:

```
sudo docker push {image_name}
```

Di sini, _**\{image_name\}**_ harus dinyatakan sama dengan yang Anda tentukan selama pembangunan image pada langkah pertama.

Anda juga akan diminta untuk mengonfirmasi kepemilikan akun Anda (dengan
menyebutkan nama pengguna, kata sandi, dan alamat email yang sesuai) untuk
menyelesaikan operasi ini.

:::tip
 Anda dapat masuk ke registry terlebih dahulu menggunakan perintah docker login yang sesuai (sebagai hasil, kredensial Anda akan disimpan dalam file ~./docker/config.json pada direktori rumah pengguna lokal Anda).
:::

## Deployment Image di Platform{#deploying-image-at-platform}

Segera setelah image Anda berhasil disimpan di repository, itu menjadi
tersedia untuk digunakan di platform dan dapat ditambahkan ke environment melalui
papan Docker yang didedikasikan yang terintegrasi dengan bagian dashboard wizard
[topology](<https://docs.dewacloud.com/docs/custom-containers-deployment/>).

Jadi, pilih tombol **New Environment** di bagian atas dashboard, pindahlah ke
tab _**Docker**_ dalam wizard environment yang dibuka dan klik tombol
_Select Image_.

1\. Di sini, Anda dapat menggunakan tab _Search_ (untuk menambahkan image dari repository Docker Hub) atau beralih ke bagian _Custom_, di mana Anda dapat mengoperasikan
image dari jenis apa pun (yaitu, termasuk yang pribadi) dan menyimpan template Anda
agar mudah diakses.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-2.png" alt="tambahkan image kustom baru" width="100%"/>

Kita akan mempertimbangkan yang terakhir, jadi, begitu di dalam, pilih lapisan environment yang diperlukan di sebelah kiri (_App. Servers_ dalam kasus kita) dan klik tombol **Add New Image**.

2\. Pada frame _**Add New Image**_ yang terbuka, ketikkan pengenal image Anda dalam field **Name**, yaitu:

_**\{registry_hostname\}**_(dapat dilewati untuk Hub
Registry resmi)/_**\{account\}**_ /_**\{image_name\}**_

Juga, dalam hal penggunaan repository pribadi, kredensial **Username** dan
**Password** yang sesuai harus ditentukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-3.png" alt="referensi image kustom" width="100%"/>

Kami menggunakan repository publik Docker Hub, yang terletak dalam
Registry Hub pusat, jadi hanya nama repository singkat yang diperlukan. Klik **Add** saat siap.

3\. Setelah itu, image Anda akan muncul di daftar. Dari sini, itu bisa
ditambahkan ke topology hanya dengan sekali klik. Selain itu, template ini akan
diingat dan tetap tercantum di sini sehingga dapat dengan mudah ditemukan selama
pemilihan container berikutnya (sampai Anda menghapusnya dari daftar _Custom_
secara manual).

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-4.png" alt="buat image WildFly kustom" width="100%"/>

Tetapkan sisa
[konfigurasi](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) yang diperlukan sendiri (detail opsi yang tersedia dapat dibaca di panduan terkait) dan selesaikan pembuatan environment-nya.

4\. Setelah environment Anda dengan image yang sesuai muncul di dashboard,
itu dapat diakses menggunakan tombol **Open in Browser** yang sesuai:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-5.png" alt="WildFly buka di browser" width="100%"/>

:::note
Dalam hal Anda belum menempatkan template Anda ke layer lingkungan
App. Servers atau Balancing, Anda perlu menggunakan tombol yang bernama sama
di sebelah container tertentu untuk membukanya.
:::

Sebagai hasilnya, Anda akan melihat halaman start default WildFly, yang menunjukkan bahwa segala sesuatunya dikonfigurasi dengan benar dan container baru Anda sepenuhnya beroperasi.
<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/wildfly/building-wildfly-docker-image/wildlfy-docker-image-6.png" alt="halaman rumah WildFly kustom" width="100%"/>

Demikian pula dengan yang dijelaskan di atas, Anda dapat membuat image lain yang sudah dikonfigurasi sebelumnya sesuai dengan tujuan Anda dan, akhirnya, menjalankannya dengan mudah di dalam platform!

## Baca Juga{#whats-next}

  * [Jenis Kontainer](<https://docs.dewacloud.com/docs/container-types/>)
  * [Deployment Kontainer Kustom](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Konfigurasi Kontainer](<https://docs.dewacloud.com/docs/container-configuration/>)
  * [Redeploy Kontainer](<https://docs.dewacloud.com/docs/container-redeploy/>)
  * [Akses SSH Kontainer Kustom](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>)