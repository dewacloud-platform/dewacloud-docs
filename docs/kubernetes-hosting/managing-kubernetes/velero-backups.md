---
sidebar_position: 5
slug: /kubernetes-velero-backups
title: Velero Backups
---
# Kubernetes Cluster: Velero Backups{#kubernetes-cluster-velero-backups}

**[Velero](<https://velero.io/>)** adalah alat open-source untuk backup dan pemulihan untuk pemulihan bencana cluster Kubernetes. Ini juga mendukung migrasi sumber daya cluster dan backup volume persisten. Backup manual atau terjadwal ke penyimpanan eksternal memastikan keamanan dan perlindungan data Anda.

Anda dapat memanfaatkan Velero untuk melakukan tugas-tugas berikut:

  * Backup cluster Kubernetes Anda atau sumber daya/volume persisten terpilih dan memulihkan jika terjadi kehilangan data cluster.
  * Mereplikasi seluruh cluster Kubernetes (misalnya membuat instance pengembangan/pengujian berdasarkan cluster produksi) atau memigrasikan sumber daya terpilih ke cluster lain.

Anda dapat dengan mudah mengintegrasikan Velero backup dengan cluster Kubernetes di platform. Cukup ikuti langkah-langkah sederhana di bawah ini:

1\. Mulai dengan mengatur penyimpanan yang kompatibel dengan S3, yang akan digunakan Velero untuk menyimpan backup Anda. Misalnya, Anda dapat menggunakan _AWS S3_, _VHI S3_, atau _MinIO cluster_.

Dalam panduan kami, kami akan melanjutkan dengan opsi terakhir sehingga Anda dapat memiliki seluruh pengaturan di bawah platform yang sama. Anda dapat menginstal _**[MinIO Cluster](<https://www.virtuozzo.com/company/blog/s3-minio-cloud-storage-cluster-in-containers/>)**_ di platform dalam beberapa klik menggunakan Marketplace (ikuti langkah-langkah dalam panduan yang terhubung).

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/01-minio-cluster-installation.png" alt="MinIO cluster installation" width="80%"/>

Setelah instalasi, Anda akan melihat kredensial instalasi MinIO Anda (juga dikirim melalui email). Anda akan memerlukan data ini nanti:

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/02-minio-cluster-installed.png" alt="MinIO cluster installed" width="50%"/>

Menunggu server pertama untuk memformat disk.

2\. Sambungkan ke panel admin cluster MinIO Anda dan buat bucket baru (misalnya, _velero_) di cluster penyimpanan.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/03-minio-create-bucket.png" alt="MinIO create bucket" width="70%"/>

3\. Temukan _**vmware-tanzu/velero**_ [rilis](<https://github.com/vmware-tanzu/velero/releases>) terbaru (_v1.8.1_ dalam kasus kami), klik tautan di bagian _Download_ dan salin URL ke arsip _**linux amd64**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/04-velero-versions.png" alt="Velero versions" width="70%"/>

:::tip
Dalam contoh kami, kami akan mengunggah _velero binary_ langsung ke server Cluster Kubernetes. Namun, Anda dapat menyimpannya di mana saja (misalnya, secara lokal) dengan akses API ke cluster.
:::

4\. Sambungkan ke control plane Cluster Kubernetes Anda melalui SSH (misalnya, [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>)).  
Unduh arsip menggunakan tautan dari langkah sebelumnya dan ekstrak _**velero**_ biner ke direktori **/usr/local/sbin**.

```bash
wget https://github.com/vmware-tanzu/velero/releases/download/v1.8.1/velero-v1.8.1-linux-amd64.tar.gz
tar -zxvf velero-v1.8.1-linux-amd64.tar.gz -C /usr/local/sbin --strip-components=1 velero-v1.8.1-linux-amd64/velero
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/05-download-velero.png" alt="download Velero" width="100%"/>

:::warning
Jika mengunggah melalui pengelola file, Anda perlu menyesuaikan izin file:1chmod 755 /usr/local/sbin/velero
:::

5\. Buat file _**/root/credentials-velero**_ dan masukkan kredensial penyimpanan S3 (lihat langkah pertama):

```plaintext
[default]
aws_access_key_id = {accessKey}
aws_secret_access_key = {secretKey}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/06-velero-credentials.png" alt="Velero credentials" width="100%"/>

6\. Sesuaikan perintah di bawah ini dengan memberikan nilai yang benar dan jalankan untuk mendeply Velero. Placeholder berikut perlu disesuaikan:

  * _**\{bucket\}**_ \- nama bucket (_velero_ dalam kasus kami, lihat langkah kedua)
  * _**\{s3Url\}**_ \- tautan **http://** ke penyimpanan S3 Anda (_http://minio.vip.jelastic.cloud/_ dalam kasus kami, lihat langkah pertama)
  * _**\{image\}**_ \- image container velero (_velero/velero:v1.8.1_ dalam kasus kami, lihat langkah ketiga)

```bash
velero install --provider aws --plugins velero/velero-plugin-for-aws:v1.4.1 --bucket {bucket} --secret-file ./credentials-velero --use-volume-snapshots=true --backup-location-config region=default,s3ForcePathStyle="true",s3Url={s3Url} --image {image} --snapshot-location-config region="default" --use-restic
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/07-velero-install.png" alt="Velero install" width="100%"/>

Kami menggunakan emulasi AWS untuk bekerja dengan S3 dan add-on _**[restic](<https://restic.net/>)**_ karena kami memiliki penyimpanan NFS untuk mana kami tidak memiliki fungsionalitas snapshot asli.

7\. Mari kita deploy aplikasi uji dengan penyimpanan dan mount untuk menguji bagaimana Velero dapat melakukan backup. Kami akan menggunakan aplikasi contoh berikut:

```bash
wget https://docs.dewacloud.com/docs/kubernetes-velero-backups/test-instance.yaml
kubectl apply -f test-instance.yaml
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/08-kubernetes-install-application.png" alt="Kubernetes install application" width="100%"/>

Anda dapat memeriksa aplikasi dengan perintah berikut:

```bash
kubectl get pods,pvc,pv -n test-nginx
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/09-kubernetes-check-application.png" alt="Kubernetes check application" width="100%"/>

Jalankan perintah yang tercantum di bawah ini untuk menghasilkan beberapa data acak yang akan meniru penggunaan aplikasi.

```bash
kubectl -n test-nginx exec -it nginx-test -- /bin/bash
dd if=/dev/urandom of=/usr/share/nginx/html/test-file3.txt count=512000 bs=1024
ls -laSh /usr/share/nginx/html/
exit
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/10-kubernetes-generate-data.png" alt="Kubernetes generate data" width="100%"/>

8\. Anda perlu memberi anotasi pada pod aplikasi Anda untuk memastikan data penyimpanan NFS disertakan dalam backup. Anda bisa mendapatkan nama penyimpanan yang diperlukan dari aplikasi yang telah dideploy (_mystorage_ dalam kasus kami).

:::warning
Tanpa anotasi, definisi PV dan PVC disalin tetapi tidak pada datanya.
:::

```bash
kubectl -n test-nginx annotate pod/nginx-test backup.velero.io/backup-volumes=mystorage
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/11-kubernetes-anotate-application.png" alt="Kubernetes annotate application" width="100%"/>

9\. Sekarang, mari buat backup aplikasi uji Anda:

```bash
velero backup create test-nginx-b4 --include-namespaces test-nginx --wait
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/12-velero-create-backup.png" alt="Velero create backup" width="100%"/>

10\. Periksa penyimpanan _MinIO_ Anda. Data dari _Velero_ dan _restic_ harus ada.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/13-minio-backup-data.png" alt="MinIO backup data" width="80%"/>

Juga, periksa bahwa backup yang dibuat ada dan baik-baik saja.

```bash
velero get backups
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/14-velero-backup-list.png" alt="Velero backup list" width="100%"/>

11\. Mari hapus aplikasi contoh untuk menguji proses pemulihan dengan benar.

```bash
kubectl delete ns test-nginx
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/15-kubernetes-delete-namespace.png" alt="Kubernetes delete namespace" width="100%"/>

Bersihkan juga data Shared Storage (di direktori **/data**).

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/16-delete-data-in-storage.png" alt="delete data in storage" width="100%"/>

12\. Setelah siap, pulihkan aplikasi Anda dari backup dengan perintah berikut:

```bash
velero restore create --from-backup test-nginx-b4
```

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/managing%20kubernetes/Velero%20Backups/17-velero-restore-from-backup.png" alt="velero restore from backup" width="100%"/>

Itu saja! Anda dapat memverifikasi bahwa semuanya, termasuk data yang disimpan, telah dipulihkan.

## Backup Scheduling{#backup-scheduling}

Velero mendukung otomatisasi proses backup melalui penjadwalan. Anda dapat membuat template jadwal yang diperlukan melalui notasi _cron_ (menggunakan zona waktu UTC). Sintaks umum adalah sebagai berikut:

```bash
velero schedule create {scheduleName} --schedule="{schedule}"
```

1\. Gunakan tabel di bawah ini sebagai referensi untuk menyetel jadwal yang diperlukan menggunakan ekspresi cron standar:

**Character Position** | **Character Period** | **Acceptable Values**  
---|---|---  
1 | Minute | 0-59,*  
2 | Hour | 0-23,*  
3 | Day of Month | 1-31,*  
4 | Month | 1-12,*  
5 | Day of Week | 0-7,*  
  
Misalnya, untuk membuat backup setiap enam jam:

```bash
velero schedule create myschedule --schedule="0 */6 * * *"
```

2\. Jadwal juga dapat dinyatakan menggunakan sintaks _**@every \{duration\}**_. Durasi dapat ditentukan menggunakan kombinasi _seconds (s)_, _minutes (m)_, dan _hours (h)_.

Misalnya, untuk membuat backup setiap enam jam:

```bash
velero schedule create myschedule --schedule="@every 6h"
```

3\. Anda dapat menambahkan opsi penjadwalan tambahan (untuk mencadangkan namespace tertentu, menetapkan umur backup, dll.) melalui parameter khusus. Gunakan flag _**help**_ untuk melihat daftar lengkap parameter:

```bash
velero schedule create --help
```

Selamat! Sekarang Anda tahu cara mencadangkan proyek Kubernetes Anda secara otomatis dengan Velero.

## Baca Juga{#whats-next}

  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access/>)
  * [K8s Access Control](<https://docs.dewacloud.com/docs/kubernetes-access-control/>)
  * [K8s Cluster Troubleshooting](<https://docs.dewacloud.com/docs/kubernetes-troubleshooting/>)
  * [K8s Cluster Upgrade](<https://docs.dewacloud.com/docs/kubernetes-upgrade/>)
  * [Kubernetes Cluster Scaling](<https://www.virtuozzo.com/company/blog/scaling-kubernetes/>)
