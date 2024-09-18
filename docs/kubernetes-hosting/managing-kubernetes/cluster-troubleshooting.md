---
sidebar_position: 3
slug: /cluster-troubleshooting
title: Cluster Troubleshooting
---
# Kubernetes Cluster: Troubleshooting{#kubernetes-cluster-troubleshooting}

Paket **Kubernetes Cluster** adalah produk yang sangat kompleks, yang mencakup berbagai langkah yang diperlukan untuk menyiapkan solusi. Di sini, setiap tindakan dapat gagal karena berbagai alasan, yang harus dianalisis untuk mencegah terjadinya masalah di masa depan. Di bawah ini, kami akan meninjau langkah-langkah pemecahan masalah utama selama berbagai tahap dan untuk beberapa file log:

  * [K8s Installation](<#install>)
  * [Events Tracking](<#events>)
  * [Pod Logs](<#pod-logs>)

### K8s Installation{#k8s-installation}

Pemasangan cluster Kubernetes adalah proses yang kompleks tetapi sepenuhnya otomatis, yang sudah termasuk mekanisme penanganan kesalahan. Platform ini secara otomatis memproses masalah yang paling umum dan menunjukkan penyebab akar mereka langsung di dashboard. Untuk masalah yang lebih kompleks, Anda bisa **Kirim Laporan** ke tim dukungan melalui widget yang sesuai.  

![kubernetes cluster installation error](#)

Laporan semacam itu mencakup log instalasi, pesan kesalahan, dan semua informasi debug lain yang diperlukan.

Selain itu, paket ini secara otomatis memverifikasi semua komponen cluster setelah instalasi. Detail yang relevan dapat dilihat melalui file _**/var/log/k8s-health-check.log**_ pada master node. Sebuah skrip utilitas khusus memeriksa kesehatan komponen berikut: _Weave CNI Plugin_, _Ingres Controller_, _Metrics Server_, _Kubernetes Dashboard_, _Node Problem Detector_, _Monitoring Tools_, _Remote API_, _NFS Storage_, _Sample App_.

Jika pemeriksa kesehatan gagal memverifikasi status _Running_ dari sebuah komponen, notifikasi yang sesuai akan ditampilkan dalam frame keberhasilan instalasi. Di sini, peringatan semacam itu tidak selalu disebabkan oleh malfungsi cluster (mis. deployment masih mungkin dalam proses). Anda dapat menjalankan perintah _**kubectl get pods –all-namespaces**_ untuk memeriksa status pods. Jika semuanya _Running_, cluster Anda baik-baik saja. Jika tidak, hubungi dukungan platform dan lampirkan log terkait K8s dari direktori **/var/log**.

### Events Tracking{#events-tracking}

Anda dapat menggunakan _kubectl_ atau _Kubernetes Dashboard_ untuk melacak dan menganalisis peristiwa untuk namespace tertentu atau semuanya sekaligus (izin yang cukup diperlukan):

  * **Events** di _Kubernetes Dashboard_  

![kubernetes dashboard events](#)

  * contoh output dari perintah _**kubectl get events -n $namespace**_  

![kubectl get events](#)

### Pod Logs{#pod-logs}

Setelah menjadwalkan pod(s) untuk berjalan di node bebas, Anda dapat mengikuti log yang sesuai melalui:

  * _Kubernetes Dashboard_ \- navigasikan ke halaman _**pod**_ dan klik tombol **Logs** di sudut kanan atas
  * _kubectl_ \- gunakan perintah untuk [pods management](<https://kubernetes.io/docs/reference/kubectl/cheatsheet/#interacting-with-running-pods>)

Sebagai contoh, log ini dapat membantu menemukan penyebab utama dari peristiwa “_Back-off restart failed container_” untuk pods Anda.

## Baca Juga{#whats-next}

  * [K8s Cluster Access](<https://docs.dewacloud.com/docs/kubernetes-cluster-access>)
  * [K8s Access Control](<https://docs.dewacloud.com/docs/kubernetes-access-control>)
  * [K8s Cluster Upgrade](<https://docs.dewacloud.com/docs/kubernetes-upgrade>)
