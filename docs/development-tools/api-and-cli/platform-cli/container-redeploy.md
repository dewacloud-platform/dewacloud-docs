---
sidebar_position: 7
slug: /cli-container-redeploy
title: Container Redeploy
---
# CLI Tutorial: Container Redeploy

Dalam panduan ini, kami akan menunjukkan cara [redeploy](https://docs.dewacloud.com/docs/container-redeploy) sebuah container dari satu tag image ke yang lain. Di sini, jika diperlukan, opsi untuk redeploy seluruh layer juga didukung.

1\. Pertama, temukan nama environment dan ID node/layer dari container yang harus di-redeploy. Anda dapat melihat info yang diperlukan melalui dashboard atau menggunakan metode _**GetEnvs**_ dan _**GetEnvInfo**_ untuk mendapatkan data langsung dari terminal (untuk semua atau environment tertentu masing-masing).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-redeploy/container-redeploy-1.png" alt="cli get environment names and info" width="90%"/>

Di sini, Anda dapat mendapatkan semua info tentang environment - _layer names_, _node IDs_, _Docker images_, _tags_, dll.

2\. Setelah Anda mendapatkan ID dan layer (_nodeGroup name_) container, Anda dapat melihat daftar tag yang tersedia untuk image tersebut. Kami akan menggunakan metode _**GetContainerNodeTags**_ dengan nama environment dan ID node sebagai parameter:

```
~/jelastic/environment/control/getcontainernodetags --envName {envName} --nodeId {nodeId}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-redeploy/container-redeploy-2.png" alt="cli view available tags for node" width="90%"/>

Dalam kasus kami, daftar tag untuk image _jelastic/redis_ ditampilkan.

3\. Sekarang, Anda memiliki semua data yang diperlukan untuk redeploy container melalui CLI. Panggil metode _**RedeployContainers**_ yang sesuai:

```
~/jelastic/environment/control/redeploycontainers --envName {envName} [--nodeGroup {nodeGroup}] [--nodeId {nodeId}] --tag {tag} [--useExistingVolumes {useExistingVolumes}] [--login {login}] [--password {password}]
```

Parameter berikut digunakan:

  * `{envName}` \- nama environment, di mana container seharusnya di-redeploy
  * `{nodeGroup}` \- identifier [environment layer](https://docs.cloudscripting.com/creating-manifest/selecting-containers/#all-containers-by-group) untuk diperbarui _(opsional)_
  * `{nodeId}` \- nomor identifikasi dari container tertentu untuk di-redeploy _(opsional)_

:::warning
Anda perlu menyatakan parameter \{nodeGroup\} atau \{nodeId\} untuk menentukan target operasi. Metode ini mengabaikan \{nodeGroup\} jika keduanya disediakan dan akan gagal jika tidak ada yang ditentukan.
:::

  * `{tag}` \- versi image yang akan di-deploy
  * `{useExistingVolumes}` \- atur ke _true_ untuk menjaga data di volume yang di-mount dalam container yang diperbarui (_opsional_)
  * `{login}` dan `{password}` \- kredensial untuk mengakses image dari registry privat (_opsional_)

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/container-redeploy/container-redeploy-3.png" alt="cli redeploy containers" width="90%"/>

Proses ini dapat memakan waktu beberapa menit dan harus merespons dengan _“result”: 0_ (artinya operasi berhasil). Respons mencakup versi sebelum dan sesudah redeploy, serta durasi pembaruan masing-masing container.

## Baca Juga{#whats-next}

Lihat beberapa use case CLI lainnya:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-container-volumes)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)