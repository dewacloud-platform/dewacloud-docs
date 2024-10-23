---
sidebar_position: 4
slug: /environment-cloning
title: Environment Cloning
---
# CLI Tutorial: Environment Cloning

Fitur [environment cloning](https://docs.dewacloud.com/docs/clone-environment) juga didukung oleh CLI dan dapat dengan mudah dipanggil untuk membantu Anda dalam pembuatan cabang baru/berbagai versi aplikasi Anda. Jadi, untuk menduplikasi environment Anda, cukup jalankan baris berikut:

```
~/jelastic/environment/control/cloneenv --appid {src_env} --domain {new_env}
```

di mana:

  * `{src_env}` \- nama dari environment yang ingin Anda klon
  * `{new_env}` \- nama untuk salinan environment Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/platform-cli/environment-cloning/environment-cloning-1.png" alt="CLI clone environment method" width="100%"/>

Dalam beberapa menit, Anda akan mendapatkan environment baru dalam akun Anda, yang mirip dengan source.

## Baca Juga{#whats-next}

Pelajari beberapa operasi CLI populer lainnya:

  * [environment creation](https://docs.dewacloud.com/docs/cli-create-environment/)
  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)