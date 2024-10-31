---
sidebar_position: 2
slug: /ruby-versions
title: Ruby Versions
---
# Ruby Versions

Platform ini mendukung semua rilis utama terbaru dari engine Ruby dan menyediakan pembaruan rutin dari stack yang tepat, menjaganya tetap terbaru. Saat ini, versi Ruby berikut tersedia:

- _3.0.6_
- _3.1.6_
- _3.2.5_
- _3.3.5_

Daftar terkini dari rilis yang tersedia di platform disediakan melalui dokumen [Software Stack Versions](<https://docs.dewacloud.com/docs/software-stacks-versions/#engines>) yang diperbarui secara reguler (mingguan).

Anda dapat memilih yang diperlukan selama [pembuatan environment](<https://docs.dewacloud.com/docs/#create-ruby-environment>) dan dengan cepat [beralih antara](<https://docs.dewacloud.com/docs/#change-ruby-version>) versi tersebut setelahnya.

## Create Ruby Environment{#create-ruby-environment}

1. Klik tombol **New Environment** di bagian atas dashboard.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/01-create-new-environment-button.png" alt="create new environment button" width="90%"/>

2. Dalam wizard topologi yang terbuka, beralih ke tab _**Ruby**_ dan pilih server aplikasi yang diinginkan (_Apache_ atau _NGINX_). Selanjutnya, pilih versi engine dengan daftar drop-down yang tepat di bagian tengah frame.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/02-topology-wizard-choose-ruby-version.png" alt="topology wizard choose Ruby version" max-width="100%"/>

Atur konfigurasi lain yang diinginkan (misalnya batas cloudlets, [public IP](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.) dan klik **Create**.

## Change Ruby Version{#change-ruby-version}

Untuk environment yang sudah ada, Anda dapat mengubah versi Ruby dengan [redeploying container(s)](<https://docs.dewacloud.com/docs/container-redeploy/>):

1. Ada dua opsi untuk mengakses dialog pembaruan container:

   - melalui wizard topologi (gunakan tombol **Change Environment Topology** di samping environment yang sesuai) dengan mengklik versi stack/tag di bagian dialog tengah.

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/03-topology-wizard-change-ruby-version.png" alt="topology wizard change Ruby version" width="50%"/>

   - dengan tombol **Redeploy container(s)** yang tepat di sebelah node/layer yang diperlukan.

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/04-redeploy-containers-button.png" alt="redeploy containers button" max-width="100%"/>

2. Di jendela yang terbuka, sesuaikan pengaturan berikut:

   - _**Tag**_ \- memungkinkan memilih versi Ruby yang dibutuhkan.
   - _**Keep volumes data**_ \- menyimpan data dalam [volumes](<https://docs.dewacloud.com/docs/container-volumes/>).
   - _**Simultaneous**_ atau _**Sequential deployment with delay**_ (hanya untuk [scaled servers](<https://docs.dewacloud.com/docs/horizontal-scaling/>)) - menentukan apakah semua container dalam satu layer harus di-redeploy sekaligus atau satu per satu, untuk menghindari downtime.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/05-ruby-container-redeploy-dialog.png" alt="Ruby container redeploy dialog" width="60%"/>

3. Klik **Redeploy** dan konfirmasi melalui pop-up yang muncul.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/ruby%20version/06-redeploy-confirmation-pop-up.png" alt="redeploy confirmation pop-up" width="60%"/>

Dalam satu menit, versi Ruby dari node Anda akan diperbarui.

## Baca Juga{#whats-next}

- [Dashboard Guide](<https://docs.dewacloud.com/docs/dashboard-guide/>)
- [Setting Up Environment](<https://docs.dewacloud.com/docs/setting-up-environment/>)
- [Ruby App Server Configuration](<https://docs.dewacloud.com/docs/ruby-application-server-config/>)
- [Container Update](<https://docs.dewacloud.com/docs/container-redeploy/>)