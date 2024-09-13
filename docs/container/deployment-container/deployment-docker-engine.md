# Deployment Docker Engine

Platform ini mendukung **Docker Engine Community Edition** dengan kompatibilitas penuh dengan ekosistem Docker asli. Integrasi ini memungkinkan untuk bekerja dengan alat-alat inti teknologi kontainer Docker, yaitu:

  * **Docker Engine** \- memproses manifest Dockerfile atau menjalankan image kontainer yang sudah dibuat sebelumnya
  * **Docker Registry** \- menyimpan dan menyediakan akses ke berbagai image publik dan private yang ditujukan untuk diterapkan di dalam Docker Engine
  * **Docker Compose** \- membantu merangkai aplikasi yang terdiri dari beberapa komponen dengan semua konfigurasi yang diperlukan dinyatakan dalam satu file compose
  * **Docker Swarm** \- mewakili beberapa node Docker independen yang saling terhubung menjadi sebuah cluster

1\. **Docker Engine CE** disediakan sebagai solusi pra-paket yang tersedia melalui [platform Marketplace](https://www.virtuozzo.com/application-platform-docs/marketplace/). Gunakan kotak _search_ di bagian atas atau temukan paket di bawah kategori _Dev & Admin Tools_:

![Docker Engine in Marketplace](103.185.44.115:4949/dewacloud-docs/8-dewacloud-vertical-logo-flat-version-tagline-dark-bg.webp)

**Tip:** Anda juga dapat menginstal **Docker Engine CE** melalui wizard topologi - cari stack atau temukan secara manual di bagian _More > Extra Services_.

![Docker Engine in wizard](#)

2\. Selain pemilihan _**Docker Version**_, Anda dapat memilih dari beberapa opsi penerapan saat menginstal dari Marketplace:

  * _**Create a clean standalone engine**_ \- mengatur node kosong hanya dengan Docker daemon di dalamnya. Jika diperlukan, Anda dapat tambahan menginstal **Portainer UI** \- alat manajemen berbasis web
  * _**Connect to an existing swarm cluster**_ \- secara otomatis memasukkan Docker Engine baru ini ke dalam cluster [Docker Swarm](https://www.virtuozzo.com/company/blog/docker-swarm-auto-clustering-and-scaling-with-paas/) yang ada (diperlukan _Join Token_ dan _Host IP_ cluster yang sesuai)
  * _**Deploy containers from compose.yml**_ \- secara otomatis menerapkan aplikasi dari repository kustom yang ditautkan

![Docker Engine CE package](#)

Konfirmasi instalasi dengan menyediakan informasi umum (_Environment_, _Display Name_, _Region_) dan klik tombol **Install**.

Pelajari lebih lanjut tentang **Docker Engine CE** [installation](https://www.virtuozzo.com/company/blog/docker-engine-automatic-install-swarm-connect/) dan [management](https://www.virtuozzo.com/company/blog/docker-engine-auto-install-connect-ssh-portainer/) melalui artikel-artikel yang relevan di blog kami.

## Apa yang selanjutnya?[![](#)](https://www.virtuozzo.com/application-platform-docs/docker-engine-deployment/#whats-next)

  * [Container Types](https://www.virtuozzo.com/application-platform-docs/container-types/)
  * [Setting Up Environment](https://www.virtuozzo.com/application-platform-docs/setting-up-environment/)
  * [Certified Containers Deployment](https://www.virtuozzo.com/application-platform-docs/certified-containers-deployment/)
  * [Custom Containers Deployment](https://www.virtuozzo.com/application-platform-docs/custom-containers-deployment/)
  * [Container Redeploy](https://www.virtuozzo.com/application-platform-docs/container-redeploy/)
  * [Docker Swarm](https://www.virtuozzo.com/company/blog/docker-swarm-auto-clustering-and-scaling-with-paas/)