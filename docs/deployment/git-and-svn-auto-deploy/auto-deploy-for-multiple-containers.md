---
sidebar_position: 2
slug: /auto-deploy-for-multiple-containers
title: Auto-Deploy for Multiple Containers
---
# GIT & SVN Auto-Deploy for Multiple Containers

Ketika menangani proyek dengan tingkat kunjungan yang tinggi, umumnya disarankan untuk memanfaatkan fitur [Multi-Nodes](https://docs.dewacloud.com/docs/multi-nodes) di platform untuk memastikan kinerja yang cukup bagi aplikasi Anda. Selain itu, Anda perlu mempertimbangkan bahwa dengan opsi [auto-deploy](https://docs.dewacloud.com/docs/git-svn-auto-deploy) diaktifkan untuk proyek semacam itu, semua container dalam layer server aplikasi Anda akan diperbarui _secara bersamaan_.

Namun demikian, jika Anda ingin mencapai ketersediaan yang lebih tinggi (misalnya untuk melakukan pengulangan deployment secara implisit dan _berurutan_ pada setiap node), berikut beberapa opsi yang dapat memastikan hal ini:

- Memulai operasi ini secara manual dengan menekan tombol **Update from GIT/SVN** (atau **Build and Deploy** untuk proyek Maven) di samping konteks aplikasi tersebut:

 <img src="https://assets.dewacloud.com/dewacloud-docs/deployment/git_&_svn_auto-deploy/auto-deploy-for-multiple-containers/5upload.png" alt="multiple containers auto update 5upload" width="100%"/>

- Menggunakan metode [CLI yang sesuai](https://docs.dewacloud.com/docs/cli#vcs-deploy) untuk manajemen proyek VCS:

  ```
  ~/jelastic/environment/vcs/update --envName \{env_name\} --project \{app_context\}
  ```

- Menjalankan redeployment melalui permintaan _update_ [API langsung](https://docs.dewacloud.com/docs/api-overview/) - lihat detail dalam bagian **Environment > Vcs** dari dokumentasi terkait

Dalam semua kasus ini, container server aplikasi Anda akan dideploy ulang satu per satu, sehingga tidak akan menyebabkan downtime. Selain itu, untuk lebih nyaman, Anda juga dapat mendefinisikan operasi pembaruan untuk dijalankan secara otomatis (misalnya sekali per periode yang diperlukan atau berdasarkan perubahan kode sumber) melalui pengembangan dan integrasi skrip Anda sendiri dengan metode CLI atau API yang telah dijelaskan di atas.

Jika Anda mengalami masalah saat mengonfigurasi pembaruan otomatis untuk proyek VCS Anda atau masih ada beberapa pertanyaan, jangan ragu untuk meminta bantuan kepada ahli teknis kami di [Stackoverflow](http://stackoverflow.com/questions/tagged/jelastic).

## Baca Juga{#whats-next}

- [Deployment Manager](https://docs.dewacloud.com/docs/deployment-manager/)
- [Java VCS Deployment](https://docs.dewacloud.com/docs/java-vcs-deployment/)
- [ZDT Deployment for PHP](https://docs.dewacloud.com/docs/php-zero-downtime-deploy/)
- [Deploy .NET Project](https://docs.dewacloud.com/docs/deploy-dotnet-archive-url/)
- [Deployment Hooks](https://docs.dewacloud.com/docs/deployment-hooks/)