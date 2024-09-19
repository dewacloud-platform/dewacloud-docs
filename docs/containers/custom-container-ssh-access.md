---
sidebar_position: 7
slug: /custom-container-ssh-access
title: Custom Container SSH Access
---

# Custom Container SSH Access{#custom-container-ssh-access}

Karena custom containers tidak memiliki GUI bawaan untuk manajemennya, cara paling umum untuk mengambil kontrol penuh atas instance semacam itu adalah dengan menghubungkannya di bawah protokol SSH dan melakukan operasi apa pun yang diinginkan di dalamnya menggunakan perintah terminal yang sesuai.

:::note
Dengan PaaS, sebagian besar konfigurasi yang diperlukan dapat dilakukan langsung melalui dashboard tanpa perlu menggunakan SSH, berkat alat berikut: Container Configurations - memungkinkan untuk menyesuaikan pengaturan utama container (seperti variabel, volumes, linking, opsi run, port yang dibuka, dll.) Configuration Manager - menyediakan akses root penuh ke sistem file container, memungkinkan untuk mengoperasikan semua file yang terdiri Selain itu, Anda dapat memanfaatkan platform-dedicated CLI client, yang menyediakan manajemen jarak jauh lanjutan untuk semua jenis environments dan nodes dan memungkinkan untuk mengotomatiskan siklus hidup aplikasi Anda melalui skrip.
:::

Koneksi SSH ke container dapat dilakukan dengan dua cara:

  * melalui SSH Gateway seperti untuk environment lainnya. Alurnya akan sebagai berikut:

    * [generate](<https://docs.dewacloud.com/docs/ssh-generate-key/>) SSH keypair
    * [tambahkan public SSH key Anda](<https://docs.dewacloud.com/docs/ssh-add-key/>) ke dashboard
    * [akses akun Anda](<https://docs.dewacloud.com/docs/ssh-access/>) melalui protokol SSH
  * atau, jika Anda tidak ingin menggunakan SSH keys, Anda perlu melampirkan [public IP](<https://docs.dewacloud.com/docs/public-ip/>) address ke node yang diperlukan dan melakukan langkah-langkah berikut:

    * buka emulator **terminal** Anda
    * masukkan string _**ssh [username]@[hostname]**_, di mana **username** adalah login Anda, dan hostname adalah Public IP address (Anda menerima kredensial ini melalui email setiap kali container baru dibuat atau ditambahkan ke environment)
    * tentukan **password** yang diminta (dapat ditemukan di email juga)

Setelah Anda memasuki container, Anda dapat melakukan konfigurasi apa pun yang diperlukan, berkat izin root penuh yang diberikan.

:::note
Jika Anda menghadapi masalah selama membangun koneksi, periksa aturan firewall untuk container Anda dan pastikan opensshserver berjalan.
:::

## Reset Password{#reset-password}

Jika Anda lupa kredensial container Anda atau kehilangan/menghapus email yang sesuai, Anda dapat memulihkannya kapan saja - cukup pilih opsi **Reset password** dalam daftar _**Additional**_ yang dapat diperluas (ikon gear) untuk node yang diperlukan (atau set dari mereka):

![reset custom container password](#)

Sebagai hasilnya, Anda akan menerima password baru melalui email dan dapat menggunakannya untuk mengoperasikan container Anda.

## Baca Juga{#whats-next}

  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-gate/>) 
  * [Custom Containers Deployment](<https://docs.dewacloud.com/docs/custom-containers-deployment/>) 
  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>) 
  * [Container Redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>) 
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>) 