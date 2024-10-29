---
sidebar_position: 9
slug: /kubernetes-cluster-automated-upgrade
title: Cluster Automated Upgrade
---
# Upgrade Otomatis Kubernetes Cluster di Dewacloud
<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/kubernetes-automated-upgrade-192x300.png" alt="Public IP for Access to Kubernetes" width="20%"/>

Fleksibilitas, pengembangan dan pengiriman yang dipercepat, peningkatan skalabilitas, dan ketersediaan tinggi adalah alasan utama perusahaan mengadopsi teknologi Kubernetes (K8s). Namun, mengelola dan memastikan sistem tetap mutakhir bisa sangat kompleks bagi organisasi sehingga mereka perlu menyewa departemen terpisah hanya untuk menangani semuanya dengan benar.

Dengan otomatisasi Kubernetes Jelastic, Anda dapat meningkatkan produktivitas DevOps dan fokus pada tujuan bisnis Anda daripada menghadapi kompleksitas infrastruktur. Dalam artikel ini, kami akan membahas cara merampingkan siklus hidup cluster Kubernetes melalui pengiriman pembaruan secara otomatis.

## Kubernetes Cluster Versioning

Sebelum mengambil keputusan mengenai pembaruan, Anda dapat memeriksa versi cluster Anda saat ini menggunakan salah satu opsi berikut:

  * melalui dashboard di sebelah master dan worker nodes

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/version-detection.png" alt="kubernetes cluster version check" width="85%"/>

  * melalui klien WebSSH dengan menerbitkan perintah untuk mendapatkan [versi Kubernetes](<https://kubernetes.io/releases/version-skew-policy/>)

```bash
kubectl version --short
```
<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/version-console.png" alt="kubernetes cluster version" width="80%"/>


Kemudian bandingkan versi cluster saat ini dengan paket pembaruan otomatis yang tersedia yang dipresentasikan di halaman [versi Jelastic Kubernetes](<https://docs.dewacloud.com/docs/kubernetes-cluster-versions/#k8s-package-change-log>).

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/image10.png" alt="kubernetes web ssh" width="65%"/>

Meskipun versi Kubernetes baru dirilis secara teratur, tidak semuanya cocok untuk pembaruan otomatis segera. Ketika versi K8s telah melewati pengujian QA Jelastic dan telah mengumpulkan cukup penggunaan cluster untuk membuktikan stabilitas dari waktu ke waktu, kami dapat menambahkannya sebagai opsi.

Menggunakan add-on Jelastic khusus (dijelaskan dalam blok berikut), pembaruan dapat dilakukan secara otomatis ke rilis berikutnya yang sudah akan mencakup semua patch menengah. Jika versi cluster saat ini jauh lebih lama daripada yang terbaru, Anda perlu menggunakan add-on pembaruan beberapa kali untuk mencapai titik akhir secara bertahap. Pendekatan berurutan ini membantu menghilangkan risiko apapun dalam hal kompatibilitas dan memastikan proses pembaruan yang lancar.

**Catatan:** Cluster Kubernetes akan menjadi tidak berfungsi jika Anda mencoba memutakhirkan secara manual ke versi yang tidak diadopsi oleh Jelastic.

## Kubernetes Cluster Auto-Upgrade Add-On

Untuk mendapatkan versi yang lebih baru secara otomatis, Anda perlu menggunakan add-on "**Cluster Upgrade**".

1. Tekan **Add-Ons** di node Master dan klik **Start Cluster Upgrade**.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/version-detection.png" alt="kubernetes versioning" width="65%"/>

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/image8-1.png" alt="kubernetes upgrade process" width="65%"/>

2. Konfirmasi proses pembaruan untuk melanjutkan.


**Catatan:** Setelah Anda memutakhirkan Kubernetes ke versi yang lebih baru, Anda tidak dapat menurunkannya. Oleh karena itu, Anda harus memastikan bahwa aplikasi yang dideploy di cluster kompatibel dengan versi yang Anda rencanakan untuk diaktifkan. Untuk ini, buat cluster pengembangan dan uji kompatibilitas versi baru dengan aplikasi Anda sebelum melakukan pembaruan di produksi.

3. Sistem secara otomatis memeriksa versi Kubernetes baru yang tersedia di platform dan memulai pembaruan cluster

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/image11.png" alt="kubernetes upgrade add-on" width="50%"/>

atau memberi tahu Anda bahwa cluster Anda adalah versi terbaru yang tersedia.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/latest-version.png" alt="kubernetes latest version" width="50%"/>

4. Ketika cluster ditingkatkan ke versi terbaru, pop-up konfirmasi sukses muncul:

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/successfull-upgrade18-10.png" alt="kubernetes upgraded" width="50%"/>

Pembaruan tanpa waktu henti mungkin hanya untuk pemasangan Produksi karena mencakup 3 master, 2 API load balancers, dan 2 pekerja secara default. Ini siap untuk melakukan pembaruan tanpa henti kecuali untuk downtime controller ingress singkat yang mungkin (jika sedang ditingkatkan ke versi baru).

Pada saat yang sama, Anda harus tetap ingat bahwa zero downtime tidak hanya bergantung pada otomatisasi Jelastic tetapi juga pada cara aplikasi di-deploy. Misalnya, ada dua node pekerja Kubernetes yang berjalan di cluster: pekerja 1 dan pekerja 2. Seorang pengembang meluncurkan aplikasi yang berjalan sebagai satu replika di pekerja 1. Selama pembaruan bergulir, semua pod akan dijadwalkan ulang dari pekerja 1 ke pekerja 2. Oleh karena itu, ini berarti aplikasi akan mengalami downtime selama pembaruan. Tetapi, jika pengguna telah meluncurkan dua replika dari aplikasi - satu di setiap node pekerja, tidak akan ada waktu henti selama pembaruan bergulir.

Jadi seluruh prosedur sepenuhnya otomatis dan tampak seperti di bawah ini.

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/image2.gif" alt="kubernetes upgrade process" width="100%"/>

## Proses Pembaruan Cluster Kubernetes

Mari kita periksa secara lebih rinci bagaimana proses pembaruan dilakukan di dalam dan komponen mana yang terpengaruh. Semua perubahan ini dilakukan secara otomatis oleh platform jadi Anda hanya melacak proses dan tidak memerlukan intervensi.

Cluster Kubernetes terdiri dari master dan node pekerja. Beban kerja yang dijalankan oleh kedua set node ini berbeda. Dan komponen yang terdiri dari mereka juga berbeda.

Control Plane| Worker  
---|---  
Kubelet  
API Server  
Controller Manager  
Scheduler  
Kube Proxy  
CoreDNS  
Etcd| Kubelet  
Kube Proxy  
  
Node master sebenarnya adalah control plane yang harus ditingkatkan terlebih dahulu, dan kemudian giliran pekerja. Urutan tindakan upgrade dan tindakan pendukung yang diambil dalam manifest paket diuraikan di bawah ini:

**1. addon-upgrade-init**

  * Validasi tag instance
  * Menampilkan pemberitahuan jika pembaruan tidak memungkinkan
  * Pembentukan daftar versi yang tersedia
  * Pembentukan daftar urutan pembaruan

**2. addon-upgrade-start**

  * Memanggil skrip pembaruan kubernetes
  * Menampilkan pemberitahuan tentang dimulainya pembaruan cluster
  * Menjalankan manifest pembaruan cluster (upgrade.jps)

**3. check-cluster-status**

  * Pemeriksaan status cluster sebelum memperbarui
  * Validasi respons API, status komponen utama dan kesiapan node dalam cluster. Jika ada ketidakkonsistenan, prosedur pembaruan dihentikan dan pengguna diminta untuk memeriksa status cluster

**4. upgrade-configuration**

  * Rekonfigurasi cluster
  * Komponen distribusi Jelastic K8s terdeteksi dan diperbarui
  * Komponen cluster yang usang dihapus dan yang baru dipasang
  * Blok ini spesifik untuk setiap versi (isinya mungkin berubah dari versi ke versi)

**5. upgrade-masters-cluster (master)**

  * Validasi konfigurasi k8sm saat ini (control plane) dalam cluster
  * Instalasi Kubeadm untuk versi K8s baru, mengubah status master k8sm menjadi pemeliharaan dan membersihkan pod
  * Menerapkan konfigurasi versi baru ke instance saat ini
  * Meningkatkan instance ke versi baru dan menarik dari pemeliharaan

**6. upgrade-masters-cluster (slave)**

  * Pelaksanaan sekuensial di semua instance k8sm lainnya
  * Validasi konfigurasi k8sm saat ini (control plane)
  * Instalasi Kubeadm untuk versi K8s baru
  * Mengubah status master k8sm menjadi pemeliharaan dan membersihkan pod
  * Menerapkan konfigurasi versi baru ke instance saat ini, meningkatkan instance ke versi baru
  * Penarikan dari pemeliharaan

**7. upgrade-jps-manifests**

  * Pembaruan manifest utama ke versi yang dinyatakan dalam assembly kubernetes
  * Pembaruan add-on manifest ke versi yang dinyatakan dalam assembly kubernetes

**8. env.control.ApplyNodeGroupData [k8sm, cp]**

  * Menghapus batasan pada redeploying instance k8sm dan cp

**9. upgrade-masters-redeploy (master)**

  * Mengatur parameter redeploy untuk master K8sm
  * Redeploy ke tag versi baru
  * Memulai skrip inisialisasi instance untuk mengonfigurasi untuk versi baru Kubernetes
  * Validasi status layanan, restart layanan

**10. upgrade-masters-redeploy (slave)**

  * Pelaksanaan sekuensial di semua instance k8sm lainnya
  * Mengatur parameter redeploy
  * Redeploy ke tag versi baru
  * Memulai skrip inisialisasi instance untuk mengkonfigurasinya untuk versi baru kubernetes.
  * Validasi status layanan, restart layanan

**11. upgrade-masters-post (master)**

  * Master K8sm. Konfigurasi pasca instance setelah upgrade
  * Persiapan serangkaian integrasi untuk digunakan dalam instance pekerja

**12. upgrade-masters-post (slave)**

  * Dijalankan secara berurutan di instance k8sm lainnya. Konfigurasi pasca instance setelah upgrade

**13. upgrade-workers**

  * Peningkatan pekerja sekuensial. Mengubah status instance menjadi pemeliharaan
  * Memperbarui kubeadm ke versi baru, menerapkan parameter redeploy, redeploy
  * Meluncurkan skrip inisialisasi instance setelah redeploy
  * Konfigurasi pasca instance pekerja, menerapkan data integrasi
  * Mengeluarkan instance dari pemeliharaan

<img src="https://assets.dewacloud.com/dewacloud-docs/kubernetes%20hosting/Cluster%20Automated%20Upgrade/image4-2-768x804.png" alt="kubernetes upgrade" width="65%"/>

Selama redeploy kontainer, direktori dan file berikut tidak tersentuh:

```plaintext
/data  
/etc/cni  
/etc/kubernetes/etc/machine-id  
/etc/sysconfig/iptables  
/etc/sysconfig/kubelet  
/root  
/var/lib/cni  
/var/lib/docker  

/var/lib/etcd  
/var/lib/weave  
/var/lib/kubelet  
/var/log/containers  
/var/log/kubernetes  
/var/log/kubeadm-init.log  
/var/log/kubeadm-join.log  
/var/log/kubeadm-join-error.log  
/var/log/pods
```

**Catatan:** Mulai dari versi paket [1.18.14](<https://github.com/jelastic-jps/kubernetes>) pengguna dapat menambahkan file dan direktori kustom ke daftar yang tidak disentuh yang disebutkan dengan mengubah file **_/etc/jelastic/redeploy.conf_** pada node master.

Selain komponen internal Kubernetes, platform memperbarui fungsionalitas yang disediakan oleh Jelastic:

  * tindakan yang memicu acara terkait (misalnya configure-master, connect-workers, scaling, dll.)
  * file konfigurasi (misalnya kubernetes-dashboard.yaml, jelastic-values.yaml, dll.)
  * integrated add-ons

Jadi hasilnya, cluster Kubernetes ditingkatkan dengan lancar dan dengan intervensi manual minimal.
