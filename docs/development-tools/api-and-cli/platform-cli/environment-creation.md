---
sidebar_position: 2
slug: /environment-creation
title: Environment Creation
---
# CLI Tutorial: Environment Creation

Pembuatan environments melalui command line dapat sangat berguna untuk berbagai solusi yang berbeda (misalnya, menangani [skenario DevOps yang kompleks](https://docs.dewacloud.com/docs/devops-jenkins)). Jadi, mari kita pertimbangkan cara ini dapat dilakukan.

1\. Pertama, kita akan mempertimbangkan beberapa variasi bagaimana operasi ini dapat diimplementasikan.

  * Cara paling sederhana untuk membuat environment baru dengan CLI adalah dengan mendeklarasikan parameter yang diperlukan secara manual melalui command yang sesuai. Cukup jalankan metode _**createenvironment**_ berikut dengan parameter kustom yang Anda tentukan:

```
~/jelastic/environment/control/createenvironment --env '{"shortdomain" : "{env_name}", "engine" : "{engine_type}"}' --nodes '[{"nodeType" : "{node_type}", "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" : {cloudlets_amount}}]'
```

Pada contoh di atas, tempat penampungan yang disorot harus diganti dengan data berikut:

  * `{env_name}` \- nama untuk environment baru
  * `{engine_type}` \- engine yang digunakan dalam environment ini
  * `{node_type}` \- identifier jenis stack, sesuai dengan [daftar](https://docs.dewacloud.com/docs/application-manifest#nodeTypeList)
  * `{cloudlets_amount}` \- jumlah cloudlets tetap dan fleksibel yang dialokasikan untuk node tertentu

:::tip
Informasi lebih rinci tentang parameter yang tersedia dapat ditemukan dalam deskripsi metode API yang sesuai dan di CreateEnvironment API overview.
:::

![CLI create environment method](#)

Perhatikan bahwa pada gambar di atas, CLI merespons dengan properti _result_ yang sama dengan _0_ \- ini berarti bahwa operasi yang dilakukan telah berhasil dan tanpa kesalahan (ini berlaku untuk semua perintah yang Anda jalankan).

  * Opsi kedua, yang didukung oleh platform CLI, adalah menggunakan file JSON dengan semua parameter environments Anda dinyatakan di dalamnya. Dibuat sekali, file semacam itu dapat digunakan beberapa kali, yang jauh lebih cepat dan nyaman daripada mendefinisikan semuanya secara manual setiap saat.

Sebagai contoh, mari kita buat JSON sederhana dengan topologi environment berikut:

```
{
  "env": {
    "shortdomain": "{env_name}",
    "engine": "{engine_type}"
  },
  "nodes": [
    {
      "nodeType": "{node_type}",
      "fixedCloudlets": "{cloudlets_amount}",
      "flexibleCloudlets": "{cloudlets_amount}"
    }
  ]
}
```

Jangan lupa mengubah parameter yang disorot dengan cara yang sama seperti dijelaskan dalam langkah sebelumnya.

Sekarang, semua yang Anda butuhkan untuk membuat environment adalah menggunakan metode _**createenvironment**_ dengan hanya parameter _–myparams_ tunggal, yang mencakup path ke file _.json_ Anda sebagai nilai (atau hanya namanya jika terletak dalam folder home pengguna):

```
~/jelastic/environment/control/createenvironment --myparams {path_to_file}
```

Selain itu, Anda dapat mendefinisikan ulang atau menambahkan beberapa pengaturan (yaitu _shortdomain_, _region_, dan _displayName_) ke bagian env file konfigurasi Anda, dengan menyatakannya dalam tanda kurung persegi dalam parameter metode ini. Sebagai contoh, dengan string _shortdomain_ opsional (seperti dalam gambar di bawah), Anda dapat menggantikan pengaturan dengan nama yang sama dari JSON, sehingga environment akan dibuat dengan topologi yang sama tetapi dengan nama yang berbeda.

![CLI create environment using json](#)

2\. Pembuatan [Docker-based environment](https://docs.dewacloud.com/docs/dockers-management) hampir mirip dengan metode yang dijelaskan di atas, tetapi mencakup beberapa parameter spesifik. Jadi, untuk mendapatkan Docker container menggunakan platform CLI, Anda perlu menjalankan baris berikut:

```
~/jelastic/environment/control/createenvironment --env '{"shortdomain" : "{env_name}"}' --nodes '[{"nodeType" : "docker", "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" : {cloudlets_amount}, "docker" : {"image" : "{image_name}"}}]'
```

Menurut perintah di atas, parameter _nodeType_ perlu dinyatakan sebagai **docker** dan tempat penampungan `{image_name}` yang baru ditambahkan harus diganti dengan alamat template Docker yang ingin Anda lakukan deploy (dalam format _server.com/images/image_name:tag_).

Dengan ini:

  * jika template terletak dalam Registry Hub, nama host registry dapat diabaikan
  * opsional, Anda dapat menambahkan tag versi setelah pemisah " _:_ " di akhir alamat image
  * untuk mendapatkan autentikasi di _**registry**_ pribadi, parameter registry tambahan harus dinyatakan, dengan _url_ ke sana dan kredensial yang sesuai (yaitu _password_ dan _user_) dinyatakan sebagai nilai.

:::note
Daftar lengkap parameter Docker khusus dapat ditemukan dalam dokumen yang sesuai.
:::

![CLI create Docker-based environment](#)

Dalam waktu singkat, Docker-based environment Anda akan dibuat, siap untuk bekerja.

## Baca Juga{#whats-next}

Sekarang, Anda dapat melanjutkan dengan operasi lain, seperti:

  * [environment start/stop](https://docs.dewacloud.com/docs/cli-environment-control/)
  * [environment cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
  * [environment migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
  * [server scaling](https://docs.dewacloud.com/docs/cli-scaling/)
  * [container redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
  * [Docker volumes](https://docs.dewacloud.com/docs/cli-docker-volumes/)
  * [mount points](https://docs.dewacloud.com/docs/cli-mount-points/)
  * [VCS projects deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
  * [swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)
  * [installing JPS](https://docs.dewacloud.com/docs/cli-install-jps)