---
sidebar_position: 5
slug: /migrating-standalone-storage-to-cluster
title: Migrating to GlusterFS Cluster
---

# Migrasi Standalone Storage ke GlusterFS Cluster

Saat ini, konversi otomatis dari storage standalone yang ada menjadi cluster GlusterFS tidak didukung. Anda perlu membuat ulang penyimpanan dari awal. Kami merekomendasikan untuk membuat node _Storage_ sementara di lapisan tambahan, menyalin data, dan memasang ulang share yang ada. Kemudian, buat ulang node Storage awal sebagai cluster GlusterFS, kembalikan data, dan pasang kembali share. Instruksi di bawah ini akan memandu Anda melalui proses langkah-demi-langkah.

1\. Temukan environment yang diperlukan di panel kontrol platform Anda dan klik tombol **Change Environment Topology**.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/01-change-environment-topology-button.png" alt="change environment topology button" width="100%"/>

2\. Di dalam wizard yang terbuka, tambahkan node **Shared Storage** baru di lapisan _Extra_. Klik **Apply** untuk melanjutkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/02-add-temporary-storage-node.png" alt="add temporary storage node" width="100%"/>

3\. Hubungkan ke node _Storage_ awal (sumber) melalui [SSH](<https://docs.dewacloud.com/docs/ssh-access/>), misalnya menggunakan klien **Web SSH** bawaan. Jalankan perintah berikut untuk [menghasilkan](<https://docs.dewacloud.com/docs/ssh-generate-key/>) pasangan kunci yang akan digunakan untuk menghubungkan dua penyimpanan:

```
ssh-keygen -f ~/.ssh/storage
```

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/03-generate-ssh-keypair.png" alt="generate SSH keypair" width="100%"/>

Anda dapat melihat kunci publik yang dihasilkan dengan perintah di bawah ini:

```
cat ~/.ssh/storage.pub
```

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/04-copy-public-key.png" alt="copy public key" width="100%"/>

Gunakan pintasan **Ctrl+Shift+С** atau **Сmd+C** di panel Web SSH untuk menyalin kunci tersebut.

4\. Beralih ke node _Shared Storage_ baru Anda dan sambungkan ke node tersebut melalui [SSH](<https://docs.dewacloud.com/docs/ssh-access/>) juga. Masukkan kunci publik dari langkah sebelumnya ke dalam file _**~/.ssh/authorized_keys**_ menggunakan editor pilihan, misalnya:

```
vim ~/.ssh/authorized_keys
```

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/05-add-key-to-authorizedkeys-file.png" alt="add key to authorizedkeys file" width="100%"/>

5\. Kembali ke storage sumber dan salin data yang diperlukan ke node baru melalui utilitas _**rsync**_:

```
cd /data; rsync -az . {NEW_STORAGE_IP}:/data/ -e "ssh -i $HOME/.ssh/storage"
```

Di sini, placeholder _**\{NEW_STORAGE_IP\}**_ harus diganti dengan alamat IP internal penyimpanan baru Anda yang dapat dilihat di dashboard.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/06-copy-data-between-storages-via-rsync.png" alt="copy data between storages via rsync" width="100%"/>

Konfirmasi koneksi dengan mengetik “_yes_” ketika diminta. Operasi ini mungkin memerlukan waktu tergantung pada jumlah data yang disalin.

6\. [Pasang ulang](<https://docs.dewacloud.com/docs/mount-points/>) data aplikasi dari penyimpanan awal ke penyimpanan sementara.

  * klik tombol **Config** di sebelah server aplikasi kami dan **Unmount** pada Shared Storage yang saat ini ada <img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/07-unmount-initial-storage.png" alt="unmount initial storage" width="100%"/>

  * selanjutnya, buat **Mount** baru ke server penyimpanan sementara Anda <img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/08-mount-temporary-storage.png" alt="mount temporary storage" width="100%"/>

7\. Standalone Shared Storage dapat digantikan dengan cluster storage GlusterFS dalam dua langkah:

  * buka wizard **Change Environment Topology**, hapus node penyimpanan yang sesuai secara keseluruhan, dan **Apply** perubahan <img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/09-remove-initial-storage-node.png" alt="remove initial storage node" width="100%"/>

  * akses wizard topologi sekali lagi dan tambahkan node Shared Storage dengan opsi **Auto-Clustering** diaktifkan <img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/10-add-glusterfs-cluster.png" alt="add GlusterFS cluster" width="100%"/>

8\. Kembalikan data dari server penyimpanan sementara di lapisan _Extra_ ke cluster Shared Storage baru dengan dukungan GlusterFS.

__Ulangi langkah 3 sampai 7,__ menggunakan penyimpanan sementara sebagai sumber dan node master dari cluster GlusterFS sebagai target.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/11-mount-glusterfs-cluster.png" alt="mount GlusterFS cluster" width="100%"/>

9\. Hapus penyimpanan sementara dari lapisan _Extra_.

<img src="https://assets.dewacloud.com/dewacloud-docs/data-storage/Migrating%20to%20GlusterFS%20Cluster/12-remove-temporary-storage-node.png" alt="remove temporary storage node" width="100%"/>

Itu saja! Sekarang, Anda memiliki cluster GlusterFS sebagai pengganti node storage standalone.

## Baca Juga{#whats-next}

  * [Shared Storage Container](<https://docs.dewacloud.com/docs/shared-storage-container/>)
  * [Mount Points](<https://docs.dewacloud.com/docs/mount-points/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [Auto-Clustering of Instances](<https://docs.dewacloud.com/docs/auto-clustering/>)
