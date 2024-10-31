---
sidebar_position: 8
slug: /hasura
title: Hasura GraphQL Installation
---
# How to Install Hasura GraphQL Engine

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-1.png" alt="hasura logo" width="10%"/>

**[Hasura](<https://hasura.io/>)** adalah mesin sumber terbuka yang berbasis pada bahasa kueri GraphQL untuk API. Ini memungkinkan Anda untuk membuat koneksi, mengelola, dan mengonfigurasi pemicu peristiwa untuk database PostgreSQL dalam beberapa menit. Hasura membantu Anda membangun aplikasi GraphQL yang didukung oleh PostgreSQL atau secara bertahap memindahkan proyek yang ada.

Dalam tutorial ini, kami akan mengulas dua contoh instalasi mesin Hasura GraphQL di platform:

  * [Automatic Deployment with Local PostgreSQL Database](<https://docs.dewacloud.com/docs/#automatic-deployment-with-local-postgresql-database>)
  * [Manual Deployment with External PostgreSQL Database](<https://docs.dewacloud.com/docs/#manual-deployment-with-external-postgresql-database>)

## Automatic Deployment with Local PostgreSQL Database{#automatic-deployment-with-local-postgresql-database}

1\. Masuk ke dashboard dan klik **[Marketplace](<https://www.virtuozzo.com/application-platform-docs/marketplace/>)** di pojok kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-2.png" alt="Marketplace button" width="70%"/>

2\. Cari paket _**Docker Engine CE**_ dan mulai instalasinya.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-3.png" alt="install docker engine ce from marketplace" max-width="100%"/>

3\. Untuk secara otomatis membuat Hasura dan database PostgreSQL dalam kontainer yang sama, pilih opsi _Deploy containers from compose.yml_, dan berikan konfigurasi default dari repository [Hasura on Docker](<https://github.com/hasura/graphql-engine/tree/master/install-manifests/docker-compose>):

`https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose/docker-compose.yaml`

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-4.png" alt="deploy Hasura from compose.yml" max-width="100%"/>

:::warning
Instalasi memerlukan public IP, yang merupakan opsi berbayar yang tersedia hanya untuk pengguna billing.
:::

Konfigurasikan kolom _Environment_, _[Display Name](<https://docs.dewacloud.com/docs/environment-aliases/>)_, dan _[Region](<https://www.virtuozzo.com/application-platform-docs/environment-regions/>)_ (jika tersedia) sesuai kebutuhan Anda, lalu klik **Install**.

4\. Setelah instalasi berhasil, Anda dapat mengakses konsol Hasura untuk memastikan semuanya berjalan dengan baik.

```
http://{envDomain}:8080/console
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-5.png" alt="Hasura admin panel" max-width="100%"/>

Itu saja! Sekarang, Anda dapat memberikan **Data** untuk database Anda melalui tab bernama sama di bagian atas dan mencoba kueri GraphQL setelahnya.

## Manual Deployment with External PostgreSQL Database{#manual-deployment-with-external-postgresql-database}

Jika Anda sudah memiliki database, Anda dapat menghubungkannya dengan mesin Hasura GraphQL.

1\. Buat _**Docker Engine CE**_ standalone yang bersih melalui [Marketplace platform](<https://www.virtuozzo.com/application-platform-docs/marketplace/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-6.png" alt="create clean docker engine ce" max-width="100%"/>

2\. Setelah dibuat, sambungkan ke kontainer melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>) dan buat file dengan konten berikut (misalnya, _**nano docker-run.sh**_):

```
docker run -d --restart=always -p 80:8080 \
-e HASURA_GRAPHQL_DATABASE_URL=postgres://{username}:{password}@{host}/{dbname} \
-e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
-e HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey \
hasura/graphql-engine:v1.0.0
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-7.png" alt="prepare Hasura installation command" max-width="100%"/>

Untuk informasi lebih lanjut tentang perintah [docker run](<https://docs.docker.com/engine/reference/run/>), lihat dokumentasi resmi. Dalam kasus kami, parameter-parameter sebagai berikut:

  * _**-d**_ \- menjalankan layanan Anda di latar belakang
  * _**–restart=always**_ \- selalu memulai daemon (misalnya setelah kontainer di-restart)
  * _**-p 80:8080**_ \- mengonfigurasi pengalihan port dari port _80_ kontainer Docker Engine ke port _8080_ dari gambar Hasura yang berjalan di dalam
  * _**-e**_ \- mengatur variabel lingkungan (lihat [daftar lengkap](<https://docs.hasura.io/1.0/graphql/manual/deployment/graphql-engine-flags/reference.html>) untuk detail tambahan) 
    * _HASURA_GRAPHQL_DATABASE_URL_ \- tautan koneksi ke database PostgreSQL Anda dengan karakter khusus yang di-URL encode (jika terletak di platform, detail yang diperlukan dapat dilihat di email pembuatan PostgreSQL)
    * _HASURA_GRAPHQL_ENABLE_CONSOLE_ \- mengaktifkan konsol Hasura
    * _HASURA_GRAPHQL_ADMIN_SECRET_ \- mengonfigurasi kunci rahasia admin untuk mengakses konsol, _myadminsecretkey_ dalam kasus kami
  * _**hasura/graphql-engine:v1.0.0**_ \- gambar Docker yang akan diinstal

3\. Buat file ini dapat dieksekusi dan jalankan untuk membuat kontainer Docker Hasura.

```
chmod +x docker-run.sh
./docker-run.sh
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-8.png" alt="install Hasura with custom configurations" max-width="100%"/>

Anda juga dapat menjalankan perintah _**docker ps**_ untuk memastikan bahwa layanan Hasura berjalan.

4\. Dalam kasus kami, konsol aplikasi berada di port _80_, sehingga Anda dapat mengklik **Open in Browser** di sebelah environment Anda untuk pengalihan otomatis. Jika tidak, port yang diperlukan harus ditambahkan ke URL environment.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-9.png" alt="Hasura access protection with admin secret" width="80%"/>

Sesuai pengaturan kami, kunci rahasia admin harus disediakan untuk mengakses konsol (_myadminsecretkey_ dalam kasus kami).

5\. Sekarang, Anda dapat mulai bekerja dengan database Anda melalui API GraphQL. Misalnya, dari tab _**GraphiQL**_.

:::warning
Jika ada tabel yang sudah ada yang harus dilacak oleh Hasura, pergi ke tab Data dan izinkan akses ke tabel yang diperlukan.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/postgresql/hasura-graphql-installation/hasura-10.png" alt="working in Hasura admin panel" width="80%"/>

Sebagai alternatif, Anda dapat menggunakan _GraphQL Endpoint_ (ditentukan di bagian atas halaman) untuk membuat permintaan POST ke database melalui alat atau skrip yang Anda pilih.

## Baca Juga{#whats-next}

  * [Marketplace](<https://docs.dewacloud.com/docs/marketplace>)
  * [Docker Engine CE](<https://www.virtuozzo.com/company/blog/docker-engine-automatic-install-swarm-connect/>)
  * [Building Docker Image](<https://docs.dewacloud.com/docs/building-custom-container>)