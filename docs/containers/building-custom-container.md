---
sidebar_position: 9
slug: /building-custom-container
title: Building Custom Container
---

## Building Custom Container{#building-custom-container}

Dengan platform ini, proses menyiapkan Docker image Anda sendiri dapat sangat disederhanakan dengan membangunnya di atas image yang sudah ada (yaitu - di atas template dasar platform **CentOS 7**). Ini memungkinkan untuk melewati semua langkah yang sudah diselesaikan dalam template "induk" tersebut, dan hanya menambahkan penyesuaian yang diperlukan. Kami akan mempertimbangkan prosedur ini pada contoh menyiapkan image [WildFly](<https://www.wildfly.org/>) custom - server aplikasi Java yang fleksibel dan ringan, yang merupakan penerus langsung dari JBoss yang populer.

![building WildFly image](#)

Cara paling umum untuk membangun Docker images adalah dengan menyusun _**Dockerfile**_ \- manifest khusus, yang memungkinkan mencapai otomatisasi tambahan melalui pencatatan perintah yang diinginkan ke dalam file teks sederhana, yang akan dibaca dan dijalankan oleh Docker daemon. Dengan cara ini, template baru akan dibuat secara otomatis berdasarkan instruksi yang terdapat di dalamnya (sedangkan jika tidak, Anda harus memanggil setiap operasi yang diperlukan secara manual, satu per satu).

Di bawah ini, kami akan mempertimbangkan semua spesifik dari image custom yang berjalan di platform kami, dan, sebagai hasilnya, Anda akan mendapatkan versi dockerized siap-pakai dari server WildFly langsung di dalam platform.

Jadi, mari kita lewati operasi yang diperlukan langkah demi langkah:

  * [composing dockerfile](<https://docs.dewacloud.com/docs/#composing-dockerfile>)
  * [adding image to repository](<https://docs.dewacloud.com/docs/#adding-image-to-repository>)
  * [deploying image at the platform](<https://docs.dewacloud.com/docs/#deploying-image-at-platform>)

## Composing Dockerfile{#composing-dockerfile}

Untuk memulai, buatlah file teks kosong - kami akan mendeklarasikan semua operasi yang sesuai secara langsung di dalamnya - dan lanjutkan dengan instruksi berikut.

:::note
Bagian ini bersifat eksploratif dan hanya mencakup dasar yang diperlukan untuk persiapan dockerfile Anda. Namun, jika Anda ingin mendalami spesifik dari proses ini dan mendapatkan panduan yang lebih rinci, Anda dapat memeriksa referensi dockerfile resmi. Juga, Anda dapat mengunduh dockerfile yang sudah disiapkan sebelumnya (dengan contoh image WildFly kami) di muka dan hanya melihat-lihat bagian ini untuk penjelasan tindakan yang dilakukan, mengabaikan pembuatan file manual.
:::

1\. Langkah awal adalah menentukan template dasar untuk pembuatan image kami - kami akan menggunakan _jelasticdocker/jelastic-centos7-base_ dengan sistem operasi **CentOS 7** yang sudah dikonfigurasi di dalamnya. Untuk mengaturnya dalam dockerfile, instruksi _FROM_ harus digunakan:

```dockerfile
FROM jelasticdocker/jelastic-centos7-base:latest
```

2\. Selanjutnya, Anda dapat menentukan informasi umum image (seperti metadata atau beberapa variabel internal), yang akan diperlukan selama konfigurasi lebih lanjut. Gunakan contoh di bawah ini untuk menetapkan nilai yang diperlukan:

```dockerfile
LABEL maintainer="Virtuozzo"
ENV WILDFLY_VERSION 13.0.0.Final
ENV ADMIN_USER jelastic
ENV ADMIN_PASSWORD jelastic
```

di mana:

  * _**LABEL**_ \- memungkinkan Anda untuk mengatur metadata image melalui pasangan key-value yang sesuai (misalnya, penulis dari Docker image, versinya, dll.)
  * _**ENV**_ \- menetapkan variabel lingkungan utama, yaitu: 
    * _WILDFLY_VERSION_ \- versi WildFly untuk dibangun; dapat diubah ke release lain jika diperlukan (dapatkan daftar [versi yang tersedia](<https://www.wildfly.org/downloads/>) saat ini)
    * _ADMIN_USER_ \- nama administrator sewenang-wenang untuk mengakses panel admin WildFly
    * _ADMIN_PASSWORD_ \- password yang diinginkan untuk pengguna yang ditentukan

3\. Sekarang, Anda dapat mendeklarasikan konfigurasi yang diperlukan menggunakan perintah shell - operator _RUN_ harus digunakan untuk tujuan ini.

Pertama-tama, Anda perlu menginstal Java Development Kit (**OpenJDK** dari versi _8th_ dalam kasus kami) dan _tar_ archiver (yang akan digunakan untuk mengekstraksi file yang diunduh):

```dockerfile
RUN yum -y install java-1.8.0-openjdk-devel tar && yum -y update;
```

Perintah ini berakhir dengan memanggil pembaruan umum dari paket yang terinstal.

4\. Selanjutnya, mari kita mendeklarasikan beberapa operasi tambahan untuk mengunduh kode sumber WildFly dari situs web resmi dan mengekstraknya ke folder **/opt**.

```dockerfile
RUN cd /opt && curl -O https://download.jboss.org/wildfly/${WILDFLY_VERSION}/wildfly-${WILDFLY_VERSION}.tar.gz \
&& $(which tar) xf wildfly-${WILDFLY_VERSION}.tar.gz \
&& rm wildfly-${WILDFLY_VERSION}.tar.gz
```

5\. Pada langkah ini, Anda perlu membuat symlink untuk memperpendek jalur ke direktori utama WildFly dan, sebagai hasilnya, membuatnya mudah diakses:

```dockerfile
RUN ln -s /opt/wildfly-$WILDFLY_VERSION /opt/wildfly
```

6\. Mari kita lanjutkan dengan membuat file konfigurasi utama untuk server WildFly kami dan memasukkan semua opsi yang diperlukan ke dalamnya:

```dockerfile
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

7\. CentOS 7 dimulai menggunakan script _Systemd_ secara default, tetapi server WildFly memerlukan script _SystemV Init_ yang lebih tradisional, oleh karena itu Anda perlu menyalin initscript default ke folder _**/etc/init.d**_ dan mengedit konfigurasi yang sesuai untuk menghindari redirect systemd:

```dockerfile
RUN wget https://raw.githubusercontent.com/wildfly/wildfly-core/master/core-feature-pack/src/main/resources/content/docs/contrib/scripts/init.d/wildfly-init-redhat.sh -O /etc/rc.d/init.d/wildfly; \
sed -i "/# Source function library/a\SYSTEMCTL_SKIP_REDIRECT=1" /etc/init.d/wildfly; chmod +x /etc/init.d/wildfly;
```

8\. Selanjutnya, kami akan menyatakan WildFly untuk dijalankan saat startup container dengan menambahkan pengguna sistem yang sesuai dan mengubah kepemilikan file untuknya:

```dockerfile
RUN chkconfig --add wildfly; chkconfig wildfly on; mkdir -p /var/log/wildfly; adduser wildfly; \
chown -R wildfly:wildfly /opt/wildfly-$WILDFLY_VERSION /opt/wildfly /var/log/wildfly;
```

9\. Juga, mari kita tambahkan kredensial pengguna yang telah kami tentukan dalam langkah instruksi pertama untuk mengakses panel admin server:

```dockerfile
RUN /opt/wildfly/bin/add-user.sh --user $ADMIN_USER --password $ADMIN_PASSWORD --silent --enable
```

10\. Sekarang, kita dapat memperbaiki tautan ke panel admin itu sendiri di halaman _index.html_ default dengan mendefinisikan redirect yang sesuai (karena image kita akan di-deploy ke container tanpa [external IP](<https://docs.dewacloud.com/docs/public-ip/>) yang dilampirkan, port _4949_ dan koneksi HTTP harus digunakan di sini):

```dockerfile
RUN sed -i "s/<a href=\"\/console\">/<a href=\"\/console\" onclick=\"javascript:event.target.port=4949;event.target.protocol=\'http:\';\">/" /opt/wildfly/welcome-content/index.html
```

11\. Tambahkan [locale settings](<https://docs.dewacloud.com/docs/locale-settings/>) bahasa Inggris ke container.

```dockerfile
RUN localedef -i en_US -f UTF-8 en_US.UTF-8
```

12\. Tindakan lain yang diperlukan adalah mengatur Docker image kita untuk mendengarkan port yang diperlukan saat runtime. Instruksi _EXPOSE_ dimaksudkan untuk ini:

```dockerfile
EXPOSE 22 80 443 8080 8743 9990 9993 8009 4848 4949
```

13\. Terakhir, Anda perlu mengatur _ENTRYPOINT_ untuk mendefinisikan container agar dijalankan sebagai eksekusi. Dalam kasus kami, bash shell harus disebutkan:

```dockerfile
ENTRYPOINT ["/bin/bash"]
```

Itu saja! Jangan lupa untuk menyimpan semua pengaturan yang telah dideklarasikan untuk mendapatkan dockerfile siap-pakai.

## Adding Image to Repository{#adding-image-to-repository}

Setelah dockerfile yang tepat disiapkan, Anda siap untuk membangun image WildFly Anda di atasnya dan, selanjutnya, memindahkannya ke repositori.

:::note
Sebelum memulai, pastikan Anda memiliki versi Docker CE yang sesuai (sesuai dengan jenis OS yang digunakan) terpasang untuk menjalankan perintah yang dijelaskan di bawah ini pada mesin yang saat ini digunakan.
:::

Jadi, ikuti langkah-langkah berikut untuk menyelesaikannya:

1\. Jalankan perintah _docker build_ dengan parameter yang diperlukan untuk membuat image baru secara lokal:

```bash
sudo docker build -t {image_name} {dockerfile_location}
```

di mana

  * _**\{image_name\}**_ \- nama repositori image; secara opsional, versi tag dapat ditambahkan setelah pemisah " _:_ " (misalnya, _jelastic/wildfly:latest_)
  * _**\{dockerfile_location\}**_ \- baik jalur lokal atau URL ke dockerfile Anda (dapat ditetapkan sebagai “.” jika file terletak di direktori saat ini)

2\. Anda harus menerima pesan _build success_ dengan ID dari image baru Anda. Untuk memastikan bahwa itu tersedia di workstation Anda, Anda dapat meminta daftar semua template lokal untuk ditampilkan dengan:

```bash
sudo docker images
```

3\. Akhirnya, Anda perlu mem-push (mengunggah) image Anda ke registry dengan perintah yang sesuai:

```bash
sudo docker push {image_name}
```

Di sini, _**\{image_name\}**_ harus dinyatakan sama dengan yang Anda spesifikasi selama membangun image di langkah pertama.

Anda akan diminta secara tambahan untuk mengonfirmasi kepemilikan akun Anda (dengan menyebutkan nama pengguna, kata sandi, dan alamat email yang sesuai) untuk menyelesaikan operasi ini.

:::tip
Anda dapat login ke registry sebelumnya menggunakan perintah docker login yang sesuai (sebagai hasilnya, kredensial Anda akan disimpan di file ~/.docker/config.json pada direktori rumah pengguna lokal Anda).
:::

## Deploying Image at Platform{#deploying-image-at-platform}

Begitu image Anda berhasil disimpan di repositori, itu akan tersedia untuk digunakan di platform dan dapat ditambahkan ke environment melalui board Docker khusus yang terintegrasi ke bagian [topology wizard](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) dashboard.

Jadi, pilih tombol **New Environment** di bagian atas dashboard, pindah ke tab _**Docker**_ dalam wizard environment yang terbuka, dan klik pada tombol _Select Image_.

1\. Di sini, Anda dapat menggunakan tab _Search_ (untuk menambahkan image dari repositori Docker Hub) atau beralih ke bagian _Custom_, di mana Anda dapat mengoperasikan images dari jenis apa pun (termasuk yang privat) dan menyimpan template Anda agar mudah diakses.

![add new custom image](#)

Kami akan mempertimbangkan yang terakhir, jadi, setelah di dalam, pilih layer environment yang diperlukan di sebelah kiri (_App. Servers_ dalam kasus kami) dan klik tombol **Add New Image**.

2\. Pada frame _**Add New Image**_ yang terbuka, ketik identifier image Anda di kolom **Name**, yaitu:

_**\{registry_hostname\}**_ (bisa diabaikan untuk Hub Registry resmi) /_**\{account\}**_ /_**\{image_name\}**_

Juga, jika menggunakan repositori privat, kredensial **Username** dan **Password** yang sesuai harus ditentukan.

![custom image repository](#)

Kami menggunakan repositori Docker Hub publik, yang terletak di dalam Registry Hub pusat, jadi hanya nama singkat dari repositori yang diperlukan. Klik **Add** saat siap.

3\. Setelah itu, image Anda akan muncul dalam daftar. Dari sini, image ini dapat ditambahkan ke topologi hanya dengan sekali klik. Selain itu, template ini akan diingat dan akan tetap terdaftar di sini sehingga dapat dengan mudah ditemukan selama pemilihan container selanjutnya (hingga Anda menghapusnya dari daftar _Custom_ secara manual).

![create custom WildFly image](#)

Tetapkan sisa [configurations](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) yang diperlukan sendiri (detail tentang opsi yang tersedia dapat dibaca dalam panduan yang ditautkan) dan selesaikan pembentukan environment.

4\. Begitu environment Anda dengan image yang sesuai muncul di dashboard, itu dapat diakses menggunakan tombol **Open in Browser** yang sesuai:

![WildFly open in browser](#)

:::note
Dalam kasus Anda belum menempatkan template Anda ke layer environment _App. Servers_ atau _Balancing_, Anda harus menggunakan tombol dengan nama yang sama di sebelah container tertentu untuk membukanya.
:::

Akibatnya, Anda akan melihat halaman mulai WildFly default, yang berarti semuanya telah dikonfigurasi dengan benar dan container baru Anda sepenuhnya operasional.

![custom WildFly home page](#)

Sama seperti yang dijelaskan di atas, Anda dapat membuat image yang sudah dikonfigurasi sebelumnya lainnya sesuai dengan tujuan Anda dan, selanjutnya, dengan mudah menjalankannya dalam platform!

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) 
  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>) 
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>) 
  * [Custom Container SSH Access](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>) 