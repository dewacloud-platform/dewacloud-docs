---
sidebar_position: 6
slug: /server-scaling
title: Server Scaling
---
# CLI Tutorial: Server Scaling

Ketika environment sudah dibuat, dalam beberapa kasus mungkin diperlukan untuk mengubah topologinya - misalnya, untuk menskalakan server tertentu atau seluruh layer environment (menggunakan [skala vertikal](https://docs.dewacloud.com/docs/automatic-vertical-scaling) dan/atau [skala horizontal](https://docs.dewacloud.com/docs/multi-nodes) masing-masing) karena perubahan beban masuk. Hal ini dapat dilakukan dengan metode CLI _**changetopology**_ yang sesuai:

```
~/jelastic/environment/control/changetopology --envName {env_name} --env '{"engine" : "{engine_type}"}' --nodes ['{"nodeType" : "{node_type}","count" : {nodes_amount}, "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" : {cloudlets_amount}}, {"nodeType" : "{node_type}", "count" : {nodes_amount}, "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" :  {cloudlets_amount}}']
```

![platform CLI change topology](#)

Seluruh [set parameter yang mungkin](https://docs.dewacloud.com/docs/create-env-api) adalah sama seperti untuk metode [createenvironment](https://docs.dewacloud.com/docs/cli-create-environment), kecuali `-–envName {env_name}` \- di sini digunakan untuk menunjuk ke environment yang sudah ada, yang harus disesuaikan.

Adapun opsi lainnya, dalam contoh ini kami menggunakan yang berikut ini:

  * `{engine_type}` \- engine yang digunakan oleh instansi dari environment yang dipilih (string wajib)
  * `{node_type}` \- identifier jenis stack, sesuai dengan [daftar](https://docs.dewacloud.com/docs/application-manifest#nodeTypeList)
  * `{nodes_amount}` \- jumlah node yang akan diatur (menerapkan [skala horizontal](https://docs.dewacloud.com/docs/multi-nodes))
  * `{cloudlets_amount}` \- jumlah cloudlet tetap (_fixedCloudlets_) dan/atau fleksibel (_flexibleCloudlets_) yang akan dialokasikan untuk jenis node yang ditentukan (menerapkan [skala vertikal](https://docs.dewacloud.com/docs/automatic-vertical-scaling))

:::warning
Untuk kerja yang tepat dari server aplikasi yang diskalakan secara horizontal, jangan lupa untuk menambahkan node load balancing ke topologi environment Anda sebelumnya (jika tidak ada).
:::

Rekonfigurasi topologi environment dapat memerlukan beberapa menit untuk diselesaikan.

## Baca Juga{#whats-next}

Lebih banyak contoh penggunaan CLI dapat ditemukan dalam dokumen berikut:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)