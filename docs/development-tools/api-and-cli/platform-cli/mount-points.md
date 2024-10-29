---
sidebar_position: 9
slug: /cli-mount-points
title: Mount Points
---
# CLI Tutorial: Mount Points

[Mount Points](https://docs.dewacloud.com/docs/mount-points) digunakan untuk mengelola koneksi antara server penyimpanan data dan klien, memungkinkan Anda dapat bekerja dengan file remote yang dibagikan semudah dengan file lokal. Dengan platform CLI, Anda dapat mengkonfigurasi mount ini melalui terminal dan memasukkannya ke dalam skrip khusus untuk otomatisasi.

Di bawah ini, kami akan mengamati semua perintah yang tersedia untuk manajemen mount points.

1. Pertama-tama, Anda dapat mendapatkan daftar mount points yang ada dengan perintah CLI _**GetMountPoints**_ yang sesuai:

```
~/jelastic/environment/file/getmountpoints --envName {env_name} --nodeId {node_ID}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-1.png" alt="platform CLI get mount points" width="100%"/>

di mana

  * `{env_name}` \- nama domain dari environment, di mana Anda ingin memeriksa mount points
  * `{node_ID}` \- identifier unik dari node yang akan diperiksa 

:::note
Juga, dimungkinkan untuk menggunakan "nodeGroup" alih-alih "nodeId" untuk memilih layer environment dan menampilkan semua mount points di atasnya (misalnya cp, bl, storage, dll.). 
:::

2. Dengan cara yang sama, Anda dapat memeriksa daftar ekspor menggunakan metode _**GetExportedList**_ yang sesuai dengan parameter yang sama seperti untuk perintah sebelumnya:

```
~/jelastic/environment/file/getexportedlist --envName {env_name} --nodeId {node_ID}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-2.png" alt="platform CLI get exported list" width="100%"/>

3. Untuk menambahkan mount point ke node tunggal, metode CLI _**AddMountPointById**_ berikut digunakan:

```
~/jelastic/environment/file/addmountpointbyid --envName {env_name} --nodeId {node_ID} --path {local_path} --protocol {protocol} --sourcePath {source_path} --sourceNodeId {source_node_ID} --readOnly {true/false}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-3.png" alt="platform CLI add mount point by ID" width="100%"/>

di mana

  * `{env_name}` \- nama domain dari environment, di mana Anda ingin menambahkan mount point
  * `{node_ID}` \- identifier unik dari node dalam environment terpilih yang datanya akan dipasang
  * `{local_path}` \- jalur ke folder pada node klien data akan ditampilkan
  * `{protocol}` \- protokol yang akan digunakan (diperlukan **nfs**)
  * `{source_path}` \- jalur ke file di server penyimpanan data Anda
  * `{source_node_ID}` \- identifier dari node sumber 

  :::note
  Sebagai alternatif, parameter sourceHost dapat digunakan untuk menunjuk ke server penyimpanan data via IP atau nama domain.
  :::

  * `{true/false}` \- hak akses _read only_ atau _read & write_ untuk data yang dipasang pada node klien masing-masing (_false_ secara default) 

  :::tip
  Jika Anda tidak yakin apakah mount points diperbolehkan antara nodes (karena kemungkinan masalah cross mounts), Anda dapat melakukan pemeriksaan pendahuluan:
  ```
  ~/jelastic/environment/file/checkcrossmount --envName {env_name} --nodeId {env_name} --sourceNodeId {source_node_ID}
  ```
  <img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-4.png" alt="check cross mount" width="100%"/>
  Seperti yang dapat Anda lihat dalam gambar di atas, akan ada cross mount (yaitu nilai true), jika kami mencoba untuk memasang dari penyimpanan kami (111109) ke node 128994, karena data sudah dibagikan di arah yang berlawanan (dari 128994 ke 111109). Tetapi jika nilai yang Anda terima adalah false, mount point antara nodes dapat ditambahkan.
  :::
 
4. Proses penghapusan mount points (_**RemoveMountPointById**_) tidak menggunakan parameter baru dibandingkan dengan metode penambahan:

```
~/jelastic/environment/file/removemountpointbyid --envName {env_name} --nodeId {node_ID} --path {local_path}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-5.png" alt="platform CLI remove mount point by ID" width="100%"/>

5. Juga, dimungkinkan untuk menambahkan mount points ke seluruh layer environment, tanpa perlu memanggil perintah terpisah untuk setiap node:

```
~/jelastic/environment/file/addmountpointbygroup --envName {env_name} --nodeGroup {env_layer} --path {local_path} --protocol {protocol} --sourcePath {source_path} --sourceNodeId {source_node_ID} --readOnly {true/false}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-6.png" alt="platform CLI add mount point by group" width="100%"/>

di mana

  * `{env_name}` \- nama domain dari environment, di mana Anda ingin menambahkan mount point
  * `{env_layer}` \- nama dari layer environment, data akan dipasang
  * `{local_path}` \- jalur ke folder pada node klien, di mana data akan ditampilkan
  * `{protocol}` \- protokol yang akan digunakan (diperlukan **nfs**)
  * `{source_path}` \- jalur ke file di server penyimpanan data
  * `{source_node_ID}` \- identifier dari node sumber 
  :::note
  Sebagai alternatif, parameter sourceHost dapat digunakan untuk menunjuk ke server penyimpanan data via IP atau nama domain.
  :::
  * `{true/false}` \- hak akses _read only_ atau _read & write_ untuk data yang dipasang pada node klien masing-masing (_false_ secara default)

6. Dengan cara yang sama, Anda dapat melepas data dari semua nodes layer dengan metode _**RemoveMountPointByGroup**_ yang sesuai:

```
~/jelastic/environment/file/removemountpointbygroup --envName {env_name} --nodeGroup {env_layer} --path {local_path}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/mount-points/mount-points-7.png" alt="platform CLI remove mount point by group" width="100%"/>

Itu saja! Sekarang, Anda tahu cara mengelola mount points Anda melalui platform CLI.

## Baca Juga{#whats-next}

Pelajari cara melakukan operasi lain melalui platform CLI:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-container-volumes/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)