---
sidebar_position: 8
slug: /cli-container-volumes
title: Container Volumes
---
# CLI Tutorial: Container Volumes

Fungsi manajemen [Container (Docker) Volumes](https://docs.dewacloud.com/docs/container-volumes/) di platform memungkinkan pembuatan [local storage](https://docs.dewacloud.com/docs/local-filesystem-storage/) yang persisten, dirancang agar tidak terpengaruh oleh berbagai operasi selama siklus hidup container. Pembuatan penyimpanan semacam itu tepat di dalam container membantu memastikan tingkat integritas yang tinggi dan mencegah kehilangan data penting. 

Menggunakan platform CLI, Anda dapat mengkonfigurasi container volumes dengan dua cara:
* [dalam pengaturan topologi](#set-volumes-via-environment-topology)
* [melalui metode CLI langsung](#direct-volumes-management)

## Configure Volumes via Environment Topology{#set-volumes-via-environment-topology}

Cara pertama untuk membuat volume container yang akan kita pertimbangkan adalah mendefinisikannya langsung selama [pembuatan environment](https://docs.dewacloud.com/docs/cli-create-environment/) (atau saat [mengubah topologinya](https://docs.dewacloud.com/docs/cli-scaling/)). Jadi, untuk mengatur storage container lokal Anda, parameter berikut dapat digunakan saat mengeksekusi metode CLI yang sesuai:
* _**volumes**_ \- menetapkan daftar volume lokal
* _**volumeMounts**_ \- memungkinkan untuk mengkonfigurasi [mount points](https://docs.dewacloud.com/docs/mount-points/)
* _**volumesFrom**_ \- mengimpor volume yang ada dari node di akun Anda

:::tip
Parameter ini juga dapat digunakan dalam manifest JPS Anda.
:::

1\. Semua parameter ini harus dinyatakan dalam bagian _**docker**_ yang sesuai. Misalnya, parameter pertama dapat diatur dengan cara berikut:

```
... "docker":{... "volumes": ["{local_volume}", "{local_volume}", ...]}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-1.png" alt="CLI volumes parameter" max-width="100%"/>

Di sini, `{local_volume}` adalah placeholder untuk path volume lokal Anda yang harus ditempatkan di dalam container. Anda dapat menentukan beberapa volume sekaligus menggunakan pemisah koma.

Misalnya, dalam gambar di atas, kami membuat environment dengan image _jelastic/haproxy_ di dalamnya dan dua volume lokal terlampir, yaitu: _/my_volume_1_ dan _/my_volume_2_.

2\. Parameter kedua _**volumeMounts**_ memiliki sintaksis berikut:

```
... "docker":{... "volumeMounts" : {"{local_path}" : {"sourcePath" : "{remote_path}", "sourceNodeId" : "{node_ID}", "readOnly" : {true/false}}, ...}}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-2.png" alt="CLI volumeMounts parameter" max-width="100%"/>

Data yang disorot harus diubah ke nilai yang sesuai:
* `{local_path}` \- path ke folder di dalam nodes dari layer environment tertentu di mana konten yang dipasang harus ditempatkan
* `{remote_path}` \- lokasi direktori yang diperlukan di container remote (yaitu alamat data sumber)
* `{node_ID}` \- identifier unik dari node tempat data Anda akan dipasang 

:::note
Sebagai alternatif untuk parameter “sourceNodeId”, Anda juga bisa menggunakan “sourceNodeGroup” - mendefinisikan layer environment, yang master node akan digunakan sebagai sumber untuk operasi mount “sourceHost” - eksternal IP atau nama domain kustom dari server penyimpanan data (termasuk eksternal).
:::

* _**\{true/false\}` \- nilai yang sesuai menentukan hak _read only_ atau _read & write_ untuk nodes klien saat mengoperasikan data yang dipasang (_false_ secara default)

Sebagai contoh, menggunakan perintah pada gambar di atas, kami telah memasang data dari node _111109_ dari akun yang digunakan.

3\. Dengan parameter terakhir _**volumesFrom**_, dimungkinkan untuk memindahkan semua volume yang ada dari satu node ke node lainnya (yaitu menyalinnya), misalnya:

```
... "docker":{... "volumesFrom":[{"sourceNodeId" : "{node_ID}", "readOnly" : {true/false}, "volumes" : ["{local_volume}", "{local_volume}", ...]}]}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-3.png" alt="CLI volumesFrom parameter" max-width="100%"/>

Di sini:
* `{node_ID}` \- identifier unik dari node tempat data harus dipasang 

:::note
Sebagai alternatif, dimungkinkan untuk menggunakan “sourceNodeGroup” untuk mendefinisikan layer environment, yang master node akan digunakan sebagai sumber untuk operasi mount.
:::

* `{true/false}` \- nilai yang sesuai menentukan hak _read only_ atau _read & write_ untuk nodes klien saat mengoperasikan data yang dipasang (_false_ secara default)
* `{local_volume}` \- daftar volume yang akan dipasang (jika tidak ditentukan, semua volume akan disalin)

Dengan cara seperti itu, menggunakan perintah pada gambar di atas, kami telah menambahkan layer baru dengan dua image Docker _jelastic/tomcat8_ dan memasang volume ke node _jelastic/haproxy_ yang ada.

## Direct Volumes Management{#direct-volumes-management}

Platform ini menyediakan sejumlah metode CLI, yang dikembangkan khusus untuk manajemen volume dan tidak mempengaruhi topologi environment lainnya:

1\. Yang pertama adalah perintah _**AddContainerVolume**_, yang memungkinkan Anda menambahkan volume baru ke environment yang ada:

```
~/jelastic/environment/control/addcontainervolume --envName {env_name} --nodeId {node_ID} --path {path}
```

di mana:
* `{env_name}` \- nama domain dari environment yang ingin Anda modifikasi
* `{node_ID}` \- identifier unik dari node dalam environment yang dipilih, container volume baru harus ditambahkan
* `{path}` \- path dalam sistem file lokal Anda ke direktori volume Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-4.png" alt="CLI AddContainerVolume command" max-width="100%"/>

2\. Proses penghapusan ini benar-benar mirip dengan proses penambahan yang baru saja dijelaskan dan menggunakan parameter yang sama:

```
~/jelastic/environment/control/removecontainervolume --envName {env_name} --nodeId {node_ID} --path {path}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-5.png" alt="CLI RemoveContainerVolume command" max-width="100%"/>

3\. Jika Anda perlu menambahkan volume tidak ke node tunggal, tetapi ke seluruh layer environment sekaligus, metode _**AddContainerVolumeByGroup**_ akan lebih cocok:

```
~/jelastic/environment/control/addcontainervolumebygroup --envName {env_name} --nodeGroup {node_group} --path {path}
```

Di sini, parameter `{node_group}` memungkinkan untuk mendefinisikan layer dalam environment saat ini (misalnya _cp_, _bl_, _storage_, dll.), nodes yang harus dimodifikasi dengan volume baru.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-6.png" alt="CLI AddContainerVolumeByGroup command" max-width="100%"/>

4\. Tentu saja, Anda juga dapat menghapus volume untuk seluruh layer dalam satu perintah:

```
~/jelastic/environment/control/removecontainervolumebygroup --envName {env_name} --nodeGroup {node_group} --path {path}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-volumes/container-volumes-7.png" alt="CLI RemoveContainerVolumeByGroup command" max-width="100%"/>

Dengan cara seperti itu, menggunakan metode CLI ini, Anda dapat dengan mudah mengendalikan volume container Anda dan mengelolanya dalam hitungan menit. Dan jika Anda memerlukan penambahan beberapa [Mount Points](https://docs.dewacloud.com/docs/cli-mount-points/) bersama dengan volume, gunakan panduan yang terhubung untuk instruksi terperinci.

Jika Anda mengalami masalah saat bekerja dengan platform CLI, jangan ragu untuk meminta bantuan teknis dari para ahli kami di [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

Ikuti panduan terkait untuk tutorial platform CLI lainnya:
* [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
* [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
* [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
* [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
* [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
* [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
* [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
* [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
* [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
* [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps/)