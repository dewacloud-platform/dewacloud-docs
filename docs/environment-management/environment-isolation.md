---
sidebar_position: 11
slug: /environment-isolation
title: Environment Isolation
---
# Environment Network Isolation

Ketersediaan fitur ini bergantung pada pengaturan penyedia hosting tertentu.

Fitur **Network Isolation** mengelola aturan akses default antara environments di dalam satu instalasi PaaS (yaitu konektivitas melalui jaringan internal).

![request handling with firewall and isolation](#)

Dengan cara ini, setiap koneksi internal antara node di platform perlu melewati pemeriksaan yang tepat sebelum diizinkan. Artinya, dipastikan bahwa environments yang meminta dan diminta termasuk dalam kelompok terisolasi yang sama.

:::tip 
Selain itu, konektivitas node dapat dibatasi oleh aturan firewall container, yang merupakan solusi yang lebih fleksibel dan sesuai untuk manajemen akses internal dan eksternal.
:::

## Private Network Isolation{#private-network-isolation}

Jika fitur **Network Isolation** diaktifkan pada platform, semua akun diisolasi satu sama lain secara default. Dalam hal ini, koneksi antara environments pada akun pengguna yang berbeda hanya dapat dibuat jika dikonfigurasi secara eksplisit pada kedua ujungnya.

Selain itu, fitur ini memungkinkan pengembang untuk mengisolasi [groups of environments](<https://docs.dewacloud.com/docs/environment-groups/>) dalam akun tertentu. Cukup aktifkan switcher _**Network Isolation**_ di frame **Add/Edit Group**.

![enable isolation for environment group](#)

Platform secara otomatis menyatukan alamat internal dari container ke dalam satu set IP khusus untuk setiap kelompok terisolasi. Ini memungkinkan pengendalian akses antara node (yaitu jika IP berada dalam satu set - interkoneksi diizinkan, dan jika tidak - ditolak). Platform secara otomatis mendeteksi semua perubahan terkait di bawah akun Anda (misalnya, penghapusan environment, [nodes scaling](<https://docs.dewacloud.com/docs/horizontal-scaling/>), dll.) untuk menjaga _IP sets_ tetap terbaru.

Saat mengelola _Network Isolation_, Anda harus mempertimbangkan kekhasan berikut:

  * isolasi dapat diaktifkan hanya untuk kelompok tingkat atas (yaitu tidak untuk [subgroups](<https://docs.dewacloud.com/docs/environment-groups-management/#add-subgroups>))
  * environment groups dengan isolasi yang diaktifkan diberikan ikon perisai khusus ( ![isolated group icon](#) ) untuk pengenalan yang lebih baik
  * [shared environments](<https://docs.dewacloud.com/docs/share-environment/>) tidak dapat dimasukkan ke dalam kelompok terisolasi oleh kolaborator
  * fitur ini tidak cocok untuk membatasi akses ke container Anda dari luar platform (misalnya melalui [public IP](<https://docs.dewacloud.com/docs/public-ip/>))

## Using Network Isolation{#using-network-isolation}

Singkatnya, _Network Isolation_ adalah fitur yang berguna dan berorientasi pengguna yang bertujuan untuk mencegah akses yang tidak diinginkan ke environments Anda. Umumnya, praktik yang baik adalah mengisolasi [applications](<https://docs.dewacloud.com/docs/paas-components-definition/#application>) Anda dari satu sama lain. Sebagai contoh:

  * Jika Anda perlu berbagi akses ke aplikasi atau database Anda dengan karyawan atau perusahaan pihak ketiga, Anda akan yakin bahwa container di dalam kelompok terisolasi tidak akan dapat diakses melalui jaringan internal platform

  * Jika Anda [cloning](<https://docs.dewacloud.com/docs/clone-environment/>) proyek yang awalnya terisolasi, itu akan dilindungi dari pengaruh kloning (misalnya jika proyek yang Anda salin mewarisi akses database yang “hardcoded”, itu akan dinonaktifkan oleh fitur isolasi jaringan sehingga data produksi aktual tidak dapat diubah)

Dengan cara ini, fitur _Network Isolation_ dapat memisahkan proyek pada satu akun dan mencegah interkoneksi yang tidak diinginkan antara mereka.

## Baca Juga{#whats-next}

  * [Environment Groups](<https://docs.dewacloud.com/docs/environment-groups/>)
  * [Container Firewall](<https://docs.dewacloud.com/docs/custom-firewall/>)
  * [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)