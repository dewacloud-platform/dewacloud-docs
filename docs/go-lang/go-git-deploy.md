---
sidebar_position: 2
slug: /go-git-deploy
title: Go Git Deploy
---

# Deploy dan Menjalankan Layanan Go Git di Cloud

[Gogs](<https://gogs.io/>) (Go Git Service) adalah layanan Git self-hosted open-source yang mudah dideploy dan di-host di Jelastic PaaS. Dapatkan instance yang dapat dikonfigurasi sepenuhnya dan terisolasi seperti GitHub Anda sendiri dengan repositori pribadi tak terbatas dan jejak sumber daya yang kecil.  
Ikuti panduan langkah-demi-langkah di bawah ini untuk mendeply Gogs:  

1\. [Buat environment baru](<https://docs.dewacloud.com/docs/setting-up-environment/>) dengan server aplikasi **_Golang_** dan database **_MySQL_**.  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/create-golang-environment.png" alt="Create Golang Environment" width="100%"/>

Tetapkan batas sumber daya yang diperlukan untuk node, sesuaikan nama, dan klik **Create** untuk melanjutkan.  

2\. Setelah environment Anda dibuat, klik tombol **Open in Browser** di sebelah node MySQL untuk mengakses panel admin database.  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/open-my-gogs-in-a-browser.png" alt="Open MySQL in Browser" width="100%"/>

Gunakan kredensial DB Anda (dikirim melalui email yang sesuai) untuk masuk.  

3\. Arahkan ke tab **Databases** dan **Create** database _gogs_ baru, yang akan digunakan dengan layanan Git Anda.  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/create-a-gogs-database.png" alt="Create Gogs Database" width="100%"/>

**Tip:** Untuk penggunaan produksi, disarankan untuk membuat pengguna DB terpisah (tab **User accounts**) daripada menggunakan akun _root_ database.

4\. [Deploy](<https://docs.dewacloud.com/docs/deployment-guide/#vcs>) proyek Gogs menggunakan tautan repositori berikut:

[_https://github.com/gogs/gogs.git_](<https://github.com/gogs/gogs>)  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/deploy-the-gogs-project.png" alt="Deploy Gogs Project" width="50%"/>

5\. Setelah deployment sukses, Anda perlu menyesuaikan pengaturan default.  
Pertama-tama, buat salinan file konfigurasi **_/home/jelastic/webapp/ROOT/conf/app.ini_** dan tempelkan ke folder baru yang dibuat **_/home/jelastic/webapp/ROOT/custom/conf/_**.  
Ini dapat dilakukan dengan mudah melalui [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client/>), cukup jalankan dua perintah berikut:  

```bash
mkdir -p /home/jelastic/webapp/ROOT/custom/conf
cp /home/jelastic/webapp/ROOT/conf/app.ini /home/jelastic/webapp/ROOT/custom/conf/app.ini
```

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/my-gogs-web-ssh.png" alt="Gogs Web SSH" width="100%"/>

6\. Sesuaikan bagian **_server_** dari file konfigurasi custom Anda **_app.ini_**:

  * **_PROTOCOL_** \- atur protokol yang akan digunakan (misalnya, _http_)
  * **_DOMAIN_** \- berikan nama domain environment Anda (_my-gogs.jelastic.com_)
  * **_ROOT_URL_** \- ubah menjadi _%(PROTOCOL)s://%(DOMAIN)s/_

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/adjust-the-server-section-of-app.ini_.png" alt="Adjust Server Section of app.ini" width="100%"/>

Jangan lupa untuk **Save** perubahan tersebut.  

7\. Tambahkan [variabel environment](<https://docs.dewacloud.com/docs/environment-variables/>) **_GO_RUN_OPTIONS_** dengan nilai **_web_**.  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/go-run-option.png" alt="Go Run Options" width="100%"/>

**Restart** node Golang Anda untuk menerapkan perubahan.  

8\. Buka environment Anda di browser dan Anda akan secara otomatis diarahkan ke halaman instalasi Gogs:

  * **_Database Settings_** (_Type_, _Host_, _User_, _Password_, _DB name_) - sediakan data koneksi database (gunakan email yang diterima sebelumnya untuk mendapatkan kredensial yang diperlukan)
  * **_Application General Settings_** \- ubah nilai field _Run User_ menjadi _golang_
  * **_Optional Settings_** \- konfigurasikan _Admin Account Settings_ (dapat didaftarkan kemudian - pengguna pertama akan secara otomatis diberikan izin administrator)

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/gogs-installation-page.png" alt="Gogs Installation Page" width="100%"/>

Klik **Install Gogs** di bagian bawah halaman.  

9\. Anda akan secara otomatis masuk atau dialihkan ke layar login (di mana Anda dapat mendaftarkan pengguna baru).  

<img src="https://assets.dewacloud.com/dewacloud-docs/go-lang/go-git-deploy/gogs-login-screen.png" alt="Gogs Login Screen" width="100%"/>
