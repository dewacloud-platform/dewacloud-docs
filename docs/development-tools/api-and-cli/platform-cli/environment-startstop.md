---
sidebar_position: 3
slug: /cli-environment-control
title: Environment Start/Stop
---
# CLI Tutorial: Environment Start/Stop

Di antara operasi paling umum untuk manajemen environment yang disediakan oleh CLI, yang paling penting adalah _start_ dan _stop_. Penggunaan metode ini yang bijak dapat membantu Anda mengurangi biaya secara signifikan, terutama untuk environment pengembangan dan pengujian (misalnya, Anda dapat menghentikannya di malam hari, saat Anda tidur, dan memulainya lagi di pagi hari untuk melanjutkan pengembangan).

1\. Untuk menghentikan suatu environment yang sementara tidak diperlukan, jalankan perintah berikut (di mana tempat penampungan `{env_name}` harus diganti dengan nama environment yang sesuai):

```
~/jelastic/environment/control/stopenv --envName {env_name}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-start-stop/environment-start-stop-1.png" alt="CLI stop environment method" width="100%"/>

Seperti yang dapat Anda lihat, CLI merespon dengan properti “result” sama dengan _0_, yang berarti operasi telah berhasil dilakukan dan tanpa kesalahan.

2\. Kemudian, Anda dapat memulai environment Anda dengan metode _startenv_ serupa dan membuatnya bisa beroperasi kembali:

```
~/jelastic/environment/control/startenv --envName {env_name}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-start-stop/environment-start-stop-1.png" alt="CLI start environment method" width="100%"/>

Ya, manajemen environment sesederhana itu!

## Baca Juga{#whats-next}

Lihat beberapa metode CLI lainnya

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)