---
sidebar_position: 8
slug: /private-registry-inside-paas
title: Private Registry inside PaaS
---

# Private Registry inside PaaS{#private-registry-inside-paas}

[Docker solution](<https://www.docker.com/why-docker>) dirancang untuk distribusi aplikasi yang nyaman menggunakan template yang cepat dan ringan, yang memungkinkan proyek Anda dijalankan hampir di mana saja. Oleh karena itu, ini adalah teknologi yang sempurna bagi para pengembang dan sysadmin yang mencari cara untuk mempercepat alur kerja pengiriman aplikasi dan menghindari masalah penyesuaian yang berkelanjutan.

Untuk menangani Docker image Anda sendiri, registry yang sesuai harus ada. Sebagian besar solusi yang di-docker disimpan di registri publik agar siapa saja dapat menggunakannya. Namun, terkadang menjadi perlu untuk menyembunyikan konten repositori Anda dari dunia luar, misalnya jika mengandung kode milik atau informasi rahasia. Untuk tujuan ini, Anda bisa membuat registry privat yang terisolasi.

Jadi, mari mencari tahu bagaimana mendapatkannya di platform dengan beberapa langkah berikut dalam hitungan menit:

  * [deploying private registry](<https://docs.dewacloud.com/docs/#deploy-private-registry>)
  * [adding image to registry](<https://docs.dewacloud.com/docs/#add-image-to-registry>)

Selanjutnya, Anda akan dapat dengan mudah mendeposisi image yang ditambahkan dari [private registry](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) Anda ke platform.

## Deploy Private Registry{#deploy-private-registry}

Template dasar untuk registry privat dapat ditemukan di antara images open-source lainnya di Docker Hub. Dengan demikian, Anda dapat dengan nyaman menghostingnya di dalam [Dewacloud](https://www.dewacloud.com/) yang diinginkan dengan membuat custom container yang sesuai:

1\. Masuk ke akun PaaS Anda dan klik tombol **New Environment** di panel atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-1.png" alt="new environment with Docker image" width="100%"/>

Di wizard topologi yang terbuka, beralih ke tab _**Docker**_ dan klik **Select Image**.

2\. Di sini, gunakan **Search** untuk mencari image _registry_ dan tambahkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-2.png" alt="registry Docker image" width="100%"/>

:::tip 
Anda dapat memilih tag yang diperlukan untuk Docker image Anda di bagian atas frame ini atau selama langkah berikutnya.
:::

Klik **Next** untuk melanjutkan.

3\. Sediakan semua [configurations](<https://docs.dewacloud.com/docs/setting-up-environment/>) lainnya untuk environment (batas disk, nama, [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.) sesuai kebutuhan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-3.png" alt="configure environment" width="100%"/>

**Catatan:** Instruksi di bawah ini ditulis untuk versi [registry terbaru](<https://github.com/docker/distribution>) (yaitu mulai dari tag _**2.x**_ dan lebih tinggi). Untuk [registri yang tidak didukung lagi](<https://github.com/docker/docker-registry>), konfigurasi & alur interaksi mungkin berbeda dalam detail.

Klik **Create** dan tunggu sebentar agar environment terkonfigurasi.

4\. Sekarang, Anda perlu mengonfigurasi entry point untuk akses eksternal. Kami akan membuatnya, memanfaatkan fitur [endpoints](<https://docs.dewacloud.com/docs/endpoints/>) platform, untuk mengekspos port _5000_ dari container.

:::note
Sebagai alternatif, Anda dapat melampirkan dan bekerja melalui public IP (opsi berbayar) tanpa konfigurasi tambahan.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-4.png" alt="add endpoint" width="100%"/>

Klik tombol **Settings** di sebelah environment Anda, navigasikan ke bagian _**Endpoints**_, dan Tambahkan endpoint baru. Dalam frame yang terbuka, tentukan parameter yang diinginkan, menetapkan nomor **Private Port** _5000_ dalam bidang dengan nama yang sama.

Hasilnya, Anda harus menerima catatan serupa dengan yang ditunjukkan dalam gambar di atas. Sekarang, Anda dapat mulai mengisi registry Anda dengan Docker images.

## Add Image to Registry{#add-image-to-registry}

Untuk menunjukkan bagaimana template Docker dapat ditambahkan ke registry Anda, kami akan mengambil image yang sudah ada dari Hub registry pusat dan memindahkannya ke repositori privat kami (namun, Anda dapat menggunakan template lokal Anda sendiri).

Namun, sebelum itu, Anda perlu menerapkan beberapa penyesuaian pada konfigurasi mesin lokal Anda agar dapat mengoperasikannya dengan benar.

1\. Untuk memulai, [install](<https://docs.docker.com/install/>) Docker CE (jika Anda belum melakukannya sebelumnya) sesuai dengan panduan yang ditautkan dari situs web resmi.

:::note 
Pastikan versi daemon yang terinstal adalah 1.6.0 atau lebih tinggi (karena penggunaan registri tidak kompatibel dengan versi sebelumnya). Versi Docker daemon sebenarnya dapat diperiksa dengan menjalankan perintah berikut di terminal Anda: `docker -v`
<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-5.png" alt="check Docker Engine version" width="100%"/>
:::

2\. Selanjutnya, pilih image yang diinginkan di Docker Hub, dapatkan menggunakan perintah _pull_ dan _tag_ template yang diterima sehingga mengarah ke private registry Anda (atau, dalam penggunaan template lokal, lewati bagian perintah pertama).

```bash
docker pull  {image} && docker tag  {image}  {entry_point}/{repository} 
```

di mana:

  * _**\{image\}**_ \- nama dari template Docker yang ingin Anda tarik dan tag (misalnya, _jelastic/haproxy_)

  * _**\{entry_point\}**_ \- private registry entry point, yaitu endpoint (yang dibuat di akhir bagian sebelumnya) atau alamat IP eksternal. Kami akan menggunakan yang pertama:
  <img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-6.png" alt="endpoint URL" width="100%"/>

  * _**\{repository\}**_ \- nama dari repositori di private registry remote Anda (misalnya, _haproxy_) tempat image akan disimpan

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-7.png" alt="docker pull command" width="100%"/>

3\. Sekarang, Anda harus memperhatikan satu detail lagi - saat menggunakan private registry remote, diperlukan untuk mengamankan interaksi dengan itu dengan menggunakan TLS. Untuk itu, Anda perlu menempatkan [SSL certificate files](<https://docs.docker.com/registry/deploying/#running-a-domain-registry>) yang sesuai (yaitu server key dan domain certificate), yang dikeluarkan oleh CA yang dikenal, ke registry Anda.

:::tip 
Sertifikat self-signed juga dapat diterapkan - dalam hal ini, Anda harus secara manual menginstruksikan Docker daemon untuk memercayainya.
:::

Namun, untuk tujuan pengujian, Anda dapat menerapkan konfigurasi yang relatif lebih sederhana, yang memungkinkan melewati persyaratan ini - jalankan registry Anda dalam [insecure mode](<https://docs.docker.com/registry/insecure/#deploying-a-plain-http-registry>), sehingga semua komunikasi akan dilakukan melalui HTTP biasa (meskipun demikian, sangat tidak direkomendasikan dalam penggunaan produksi).

Untuk itu, tambahkan baris berikut ke file konfigurasi _**/etc/default/docker**_ dari daemon Anda (atau yang serupa sesuai dengan distribusi OS Anda), misalnya menggunakan editor _**vim**_ dengan izin _sudo_:

```bash
DOCKER_OPTS="--insecure-registry  {entry_point}" 
```

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-8.png" alt="configure insecure registry" width="100%"/>

Jangan lupa untuk menyimpan perubahan.

**Catatan:** Dalam kasus menggunakan _self-signed certificates_ atau opsi _insecure_, konfigurasi tambahan yang sama akan diperlukan untuk diterapkan pada setiap Docker daemon, yang perlu mengakses registry Anda.

4\. Sekarang, Anda dapat me-restart Docker daemon lokal Anda dan mem-push image yang telah disiapkan ke repositori remote Anda:

```bash
sudo service docker restart docker push  {entry_point}/{repository}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/container/private-registry-in-paas/private-registry-9.png" alt="docker restart push commands" width="100%"/>

Itu saja! Dalam waktu singkat, image Anda akan diunggah ke registry (waktu yang tepat tergantung pada ukuran image dan kecepatan koneksi internet) dan akan tersedia untuk digunakan di seluruh Internet.

Sebagai hasilnya, Anda dapat dengan mudah [mendeploy-nya dalam platform](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) dengan cara yang sama seperti yang telah kita lakukan di awal instruksi.

## Baca Juga{#whats-next}

  * [Container Types](<https://docs.dewacloud.com/docs/container-types/>)
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>)
  * [Custom Container SSH Access](<https://docs.dewacloud.com/docs/custom-container-ssh-access/>)
  * [Building Custom Container](<https://docs.dewacloud.com/docs/building-custom-container/>)