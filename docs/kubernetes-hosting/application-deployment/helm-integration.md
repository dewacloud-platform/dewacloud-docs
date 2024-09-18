---
sidebar_position: 1
slug: /kubernetes-helm-integration
title: Helm Integration
---
# Kubernetes Cluster: Helm Integration{#kubernetes-cluster-helm-integration}

Kubernetes menyediakan berbagai opsi untuk mendeploy aplikasi. Salah satu metode paling umum adalah menggunakan manajer paket **[Helm](<https://helm.sh/>)**. Jika Anda ingin menjalankan solusi yang populer atau cukup dikenal dalam cluster Kubernetes Anda, kemungkinan besar dapat ditemukan sebagai paket yang sudah dikonfigurasi yang dapat dipasang dalam beberapa menit. Helm membantu Anda menginstal aplikasi Kubernetes dari repositori jarak jauh serta membuat chart Helm lokal.

Helm tersedia di semua node control plane dari **Kubernetes Cluster** secara default dan tidak memerlukan konfigurasi tambahan. Cukup sambungkan ke node (misalnya melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)), dan Anda dapat mulai bekerja dengan Helm. Versi pengelola paket ini secara otomatis diperbarui selama [pembaruan cluster Kubernetes](<https://docs.dewacloud.com/docs/kubernetes-upgrade/>).

Helm bekerja dengan tiga konsep besar:

  * **Chart** adalah paket Helm yang berisi semua definisi sumber daya yang diperlukan untuk menjalankan aplikasi, alat, atau layanan di dalam cluster Kubernetes.
  * **Repository** adalah tempat di mana chart dapat dikumpulkan dan dibagikan.
  * **Release** adalah instance dari sebuah _chart_ yang berjalan dalam cluster Kubernetes. Satu chart dapat dipasang berkali-kali ke dalam cluster yang sama (dengan nama _release_ uniknya), misalnya beberapa instance database.

Helm menginstal _**chart**_ ke dalam Kubernetes, menciptakan _**release**_ baru untuk setiap instalasi. Dan untuk menemukan chart baru, Anda dapat mencari di _**repository**_ Helm.

Dalam panduan ini, kami akan mencakup semua tahap utama bekerja dengan Helm:

  * [mencari chart dan bekerja dengan repository](<#finding-helm-charts>)
  * [memasang aplikasi Helm baru](<#installing-helm-package>)
  * [mengelola aplikasi yang sudah ada](<#managing-helm-applications>)

:::tip
Helm tidak hanya berguna untuk solusinya yang siap pakai, tetapi juga sebagai alat versioning dan standardisasi untuk pengembangan proyek. Awalnya, ketika Anda bekerja pada proyek kecil, pendekatan deployment yang ter-script dapat mencukupi untuk kebutuhan Anda. Namun, kompleksitas dapat meningkat dengan cepat, memerlukan lebih banyak penyesuaian pada file YAML Anda. Misalnya, bahkan untuk deployment di lingkungan staging dan produksi memerlukan penyesuaian seperti URL database. Pada titik tertentu, Anda mungkin merasa bahwa sulit untuk melacak interaksi dan ketergantungan komponen. Biasanya, ini berarti bahwa kompleksitas lingkungan Anda melebihi skrip deployment buatan sendiri. Dalam situasi seperti itu, mungkin ini adalah saat yang tepat untuk mempertimbangkan Helm sebagai solusi potensial yang akan menggantikan skrip buatan Anda.
:::

## Finding Helm Charts{#finding-helm-charts}

Ada banyak solusi yang sudah dikonfigurasi yang dapat dipasang di dalam Kubernetes Cluster dalam beberapa menit. Manajer paket Helm memiliki pusat yang banyak solusi siap pakai. Selain itu, Anda dapat bekerja dengan repository kustom.

Helm dilengkapi dengan perintah _**search**_ yang kuat yang dapat digunakan untuk mencari dua jenis sumber yang berbeda:

  * _**helm search hub**_ mencari di [Artifact Hub](<https://artifacthub.io/>) (repository chart Helm komunitas terdistribusi), yang mencantumkan chart helm dari banyak repository

Misalnya, Anda dapat menemukan semua chart yang tersedia secara publik untuk _WordPress_ dengan menjalankan:

```bash
helm search hub wordpress
```

![helm search hub command](#)

  * _**helm search repo**_ mencari repository yang telah Anda tambahkan ke klien helm lokal Anda (dengan _helm repo add_). Pencarian ini dilakukan melalui data lokal, dan tidak memerlukan koneksi jaringan publik

Helm 3 (digunakan sejak _Kubernetes 1.18.10_) tidak lagi menyertakan repository chart bawaan. Anda dapat menggunakan perintah _**helm repo**_ untuk menambah, mencantumkan, dan menghapus repository. Misalnya, tambahkan repository
[Bitnami](<https://github.com/bitnami/charts>) yang populer:

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami
```

![helm add bitnami repo](#)

Anda bisa melihat repository mana yang dikonfigurasi menggunakan perintah _**helm repo list**_:

```bash
helm repo list
```

![helm repo list command](#)

Karena repository chart sering berubah, Anda bisa memastikan klien Helm Anda terbaru dengan menjalankan:

```bash
helm repo update
```

![helm repo update command](#)

## Installing Helm Package{#installing-helm-package}

Untuk memasang paket baru, gunakan perintah _**helm install**_. Secara sederhana, ini mengambil dua argumen:

  * _**{name}**_ \- sebuah nama release yang Anda pilih (misal. _mywordpress_)
  * _**\{chart\}**_ \- nama chart yang ingin Anda pasang (misal. _[bitnami/wordpress](<https://github.com/bitnami/charts/tree/master/bitnami/wordpress/>)_)

Selain itu, Anda dapat menyediakan opsi chart untuk menyesuaikan aplikasi (lihat lebih detail di [bagian mengelola Helm](<#managing-helm-applications>)). Misalnya, mari kita ubah nama blog dengan parameter _\--set wordpressBlogName='My Blog!'_.

```bash
helm install --set wordpressBlogName='My Blog!' mywordpress bitnami/wordpress
```

![helm install WordPress chart](#)

Memasang chart menciptakan objek rilis baru. Jika Anda ingin helm menghasilkan nama untuk Anda, hilangkan nama rilis dan gunakan parameter _\--generate-name_.

Selama instalasi, klien helm akan mencetak informasi berguna tentang sumber daya yang dibuat, status rilis, dan langkah konfigurasi tambahan. Mari ikuti langkah-langkah untuk memastikan bahwa instance WordPress kami bekerja dengan baik.

:::warning
WordPress adalah solusi yang cukup kompleks yang membutuhkan komponen tambahan seperti Storage dan IP publik. Jika tidak disediakan selama instalasi Kubernetes Cluster, Anda dapat menambahkannya melalui dashboard platform.
:::

Dapatkan URL WordPress dan kredensial admin dengan menjalankan perintah di bawah ini:

```bash
export SERVICE_IP=$(kubectl get svc --namespace default mywordpress --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
printf "WordPress URL: http://$SERVICE_IP/\nWordPress Admin URL: http://$SERVICE_IP/admin\nUsername: user\nPassword: $(kubectl get secret --namespace default mywordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)\n"
```

![WordPress chart access credentials](#)

Sekarang, gunakan data yang diperoleh untuk mengakses situs WordPress dan admin Anda.

![WordPress blog site](#)

![WordPress admin panel](#)

Seperti yang Anda lihat, nama blog kustom kami (_My Blog!_) yang disediakan melalui parameter _**\--set**_ diterapkan secara otomatis.

## Managing Helm Applications{#managing-helm-applications}

Helm menyediakan beberapa perintah untuk bekerja dengan chart yang sudah dipasang. Daftar tindakan termasuk upgrade dan pemulihan rilis, pemeriksaan status dan nilai, dll.

:::tip
Untuk informasi lebih lanjut tentang perintah, lihat bantuan bawaan Helm - _helm help_. Untuk melihat deskripsi dari perintah tertentu dan benderanya, jalankan _helm \{command\} --help_.
:::

1\. Untuk melacak status rilis atau membaca ulang informasi konfigurasi, Anda dapat menggunakan _**helm status**_:

```bash
helm status mywordpress
```

![WordPress release status](#)

2\. Sering kali, Anda ingin menyesuaikan chart untuk menggunakan konfigurasi yang Anda inginkan. Ini dapat dilakukan dengan menyediakan nilai yang diperlukan melalui bendera **\--values** (**-f**) atau **\--set** selama prosedur instalasi dan upgrade. Yang pertama meneruskan nilai kustom dalam file YAML terpisah, sedangkan yang kedua - langsung dari command line (misalnya _\--set a=b,c=d_ atau _\--set outer.inner=value_).

Anda dapat menentukan bendera ini beberapa kali dengan _\--set_ memiliki prioritas lebih tinggi. Dalam kasus kontradiksi, prioritas diberikan ke penggantian terakhir (paling kanan).

:::tip
Anda dapat memeriksa daftar nilai default untuk paket dengan perintah berikut (utilitas _less_ membantu menavigasi melalui respons dengan nyaman):  
```bash
helm show values bitnami/wordpress | less
```
:::

3\. Anda dapat menggunakan perintah _**helm upgrade**_ untuk meningkatkan rilis ke versi chart baru atau mengubah konfigurasi rilis Anda. Selama prosedur, Helm mencoba melakukan upgrade yang paling tidak invasif dengan hanya memperbarui hal-hal yang telah diubah sejak rilis terakhir.

:::tip
Jika diperlukan, Anda dapat menggunakan perintah upgrade dengan bendera _--reset-values_ untuk mengatur ulang nilai kustom apa pun dan menggunakan yang terpasang dalam chart.
:::

Karena spesifik dari chart WordPress kami dari [bagian penginstalan](<#installing-helm-package>), Anda harus menyediakan kata sandi saat ini saat meningkatkan rilis. Mari tambahkan nilai-nilai ini ke variabel yang sesuai untuk kenyamanan:

```bash
export WORDPRESS_PASSWORD=$(kubectl get secret --namespace "default" mywordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
export MARIADB_ROOT_PASSWORD=$(kubectl get secret --namespace "default" mywordpress-mariadb -o jsonpath="{.data.mariadb-root-password}" | base64 --decode)
export MARIADB_PASSWORD=$(kubectl get secret --namespace "default" mywordpress-mariadb -o jsonpath="{.data.mariadb-password}" | base64 --decode)
```

Sekarang, Anda dapat menyediakan kata sandi melalui bendera _**\--set**_:

```bash
helm upgrade --set wordpressPassword=$WORDPRESS_PASSWORD,mariadb.auth.rootPassword=$MARIADB_ROOT_PASSWORD,mariadb.auth.password=$MARIADB_PASSWORD mywordpress bitnami/wordpress
```

![helm upgrade WordPress](#)

:::tip
Saat Anda perlu menyediakan banyak parameter kustom, mungkin lebih nyaman untuk menentukannya dalam file YAML terpisah. Contohnya untuk WordPress, Anda dapat menyiapkan file _values-template.yaml_ berikut:  
```yaml
wordpressPassword: %WP_PASS%
mariadb:
  auth:
    rootPassword: %DB_ROOT_PWD%
    password: %DB_PWD%
```
Lalu Anda bisa mengganti placeholder dengan nilai password aktual (yang telah diekspor ke variabel dalam langkah ini sebelumnya).  
```bash
cat values-template.yaml | sed "s/%WP_PASS%/$WORDPRESS_PASSWORD/g" | sed "s/%DB_ROOT_PWD%/$MARIADB_ROOT_PASSWORD/g" | sed "s/%DB_PWD%/$MARIADB_PASSWORD/g" > values.yaml
```
Kemudian Anda dapat meneruskan file dengan konfigurasi yang diperlukan (values.yaml) dalam perintah _helm upgrade_ atau _helm install_ dengan bendera _--values(-f)_. Langkah-langkah sederhana ini akan menghemat Anda dari keharusan menentukan kata sandi secara manual untuk setiap operasi upgrade WordPress.
```bash
helm upgrade -f values.yaml mywordpress bitnami/wordpress
```
:::

4\. Perintah _**helm get**_ adalah alat yang berguna untuk melihat rilis dalam cluster. Misalnya, untuk melihat nilai yang digunakan untuk menghasilkan rilis:

```bash
helm get values mywordpress
```

![helm get custom values](#)

Seperti yang Anda lihat, nilai kata sandi kami bertahan melalui upgrade.

5\. Selain itu, mudah untuk kembali ke rilis sebelumnya jika ada sesuatu yang tidak berjalan sesuai rencana.

Perintah _**helm rollback**_ yang sesuai memerlukan dua parameter - nama **release** target dan nomor **revision** yang diperlukan. Instalasi awal selalu merupakan revisi pertama. Nomor ini dinaikkan satu untuk setiap instalasi, peningkatan, atau operasi rollback.

:::tip
Anda dapat menggunakan _helm history_ untuk melihat nomor revisi untuk suatu rilis tertentu.  
```bash
helm history mywordpress
```
:::

```bash
helm rollback mywordpress 1
```

![helm rollback command](#)

6\. Untuk menghapus rilis dari cluster, gunakan perintah berikut:

```bash
helm uninstall mywordpress
```

![helm list and uninstall commands](#)

:::tip
Jika Anda ingin menyimpan catatan penghapusan rilis, gunakan bendera _--keep-history_.
:::

Setelah penghapusan, Anda dapat memeriksa rilis yang sedang dideploy dengan perintah _**helm list**_.

## Baca Juga{#whats-next}

  * [Kubernetes Cluster Scaling](<https://docs.dewacloud.com/docs/scaling-kubernetes/>)
  * [K8s YAML Deployments](<https://docs.dewacloud.com/docs/kubernetes-yaml-deployments/>)
  * [K8s Internal Networking](<https://docs.dewacloud.com/docs/kubernetes-internal-networking/>)
  * [K8s Exposing Services](<https://docs.dewacloud.com/docs/kubernetes-exposing-services/>)
  * [K8s Creating Ingresses](<https://docs.dewacloud.com/docs/kubernetes-creating-ingresses/>)