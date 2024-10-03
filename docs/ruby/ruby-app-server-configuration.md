---
sidebar_position: 4
slug: /ruby-app-server-configuration
title: Ruby App Server Configuration
---
# Ruby Application Server Configuration

Platform ini menyediakan server aplikasi Ruby berdasarkan dua stack perangkat lunak:

- **Apache Ruby**
- **NGINX Ruby**

Keduanya dikonfigurasikan untuk menggunakan server aplikasi **Passenger** secara default, yang terintegrasi melalui modul kustom yang sesuai. Selain itu, jika diperlukan, stack _NGINX Ruby_ dapat dengan mudah dikonfigurasi untuk bekerja dengan server inbuilt yang berbeda:

- _**[Passenger](<https://www.phusionpassenger.com/>)**_ \- salah satu server aplikasi paling kaya fitur untuk Ruby, yang sangat berharga untuk aplikasi web modern dan API layanan mikro.
- _**[Puma](<http://puma.io/>)**_ \- server web Ruby yang berorientasi pada kecepatan dan paralelisme karena parsing protokol HTTP 1.1 yang cepat dan akurat.
- _**[Unicorn](<https://bogomips.org/unicorn/>)**_ \- server HTTP yang memanfaatkan fitur kernel Unix/Unix-like untuk melayani klien cepat pada koneksi berlatensi rendah dan bandwidth tinggi.

Mari kita lihat bagaimana mengubahnya di server NGINX Ruby.

## NGINX Application Server Modules{#nginx-application-server-modules}

Modul **Passenger** digunakan untuk semua environment Ruby yang baru dibuat secara default. Ikuti langkah-langkah berikut untuk menggantinya dengan yang lain:

1. Klik tombol **Config** di sebelah server aplikasi _NGINX Ruby_ Anda.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Ruby%20App%20Server%20Configuration/01-nginx-ruby-server-config-button.png" alt="nginx ruby server config button" width="100%"/>

2. Dalam panel [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager>) yang terbuka, navigasikan ke file **/etc/nginx/_nginx.conf_**. Temukan string _**include app_servers**_:

   - _include app_servers/nginx-unicorn.conf_
   - _include app_servers/nginx-puma.conf_
   - _include app_servers/nginx-passenger.conf_

     <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Ruby%20App%20Server%20Configuration/02-nginxconf-include-application-server-modules.png" alt="nginxconf include application server modules" width="100%"/>

3. Uncomment string dengan modul yang diperlukan dan comment yang sebelumnya aktif.

   :::warning
   Hanya satu string untuk modul server aplikasi yang harus aktif, jika tidak, Anda akan mendapatkan kesalahan kompatibilitas.
   :::

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Ruby%20App%20Server%20Configuration/03-adjust-nginx-ruby-application-server-settings.png" alt="adjust nginx ruby application server settings" width="80%"/> Misalnya, kita akan beralih ke _**Puma**_.

4. **Save** perubahan dan **Restart Nodes** dari server aplikasi NGINX untuk menerapkannya.

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Ruby%20App%20Server%20Configuration/04-nginx-ruby-server-restart-nodes.png" alt="nginx ruby server restart nodes" width="100%"/>

5. Akses node Anda melalui SSH (misalnya menggunakan [Web SSH](<https://docs.dewacloud.com/docs/web-ssh-client>)) dan jalankan modul yang dipilih dengan perintah yang sesuai dieksekusi dari direktori proyek:

   ```
   cd /var/www/webroot/ROOT/
   pumactl -F config/puma.rb --pidfile puma.pid -S puma.state start &
   ```

   :::note
   Untuk server aplikasi Unicorn jalankan perintah `unicorn_rails -c config/unicorn.rb -D &` sebagai gantinya.
   :::

   <img src="https://assets.dewacloud.com/dewacloud-docs/ruby/Ruby%20App%20Server%20Configuration/05--nginx-ruby-start-puma-application-server-via-ssh.png" alt="nginx ruby start puma application server via ssh" width="100%"/>

:::warning
Jika Anda ingin beralih ke modul yang berbeda, dapat dilakukan dengan cara yang sama, tetapi Anda perlu menghentikan server aplikasi yang saat ini berjalan: untuk Puma: `pumactl -F config/puma.rb --pidfile puma.pid -S puma.state stop` untuk Unicorn: `ps aux | grep 'unicorn' | awk '{print $2}' | xargs kill -QUIT`
:::

Itu saja! Sekarang Anda dapat bekerja dengan modul Ruby NGINX yang dipilih.

## Baca Juga{#whats-next}

- [Deployment Guide](<https://docs.dewacloud.com/docs/deployment-guide/>)
- [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
- [Ruby Dependency Management](<https://docs.dewacloud.com/docs/ruby-dependency-management/>)
- [Ruby Post Deploy Configuration](<https://docs.dewacloud.com/docs/ruby-post-deploy-configuration/>)