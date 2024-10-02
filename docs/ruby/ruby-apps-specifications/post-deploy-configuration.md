---
sidebar_position: 2
slug: /post-deploy-configuration
title: Post Deploy Configuration
---
# Ruby Post Deploy Configuration

Platform ini dapat melakukan konfigurasi aplikasi setelah deployment melalui **rake**. Ini biasanya diperlukan untuk menyelesaikan konfigurasi aplikasi yang kompleks, menjalankan aplikasi tambahan atau langkah-langkah khusus untuk konfigurasi aplikasi seperti db:migrate.

Untuk melakukan ini, kami memperkenalkan file baru yang disebut _**rake_deploy**_. File ini terletak di root aplikasi dan berisi daftar perintah yang harus diteruskan ke **rake**. Setiap perintah harus berada di baris terpisah. Perintah dijalankan secara berurutan.

Platform mengeksekusi perintah dari _**rake_deploy**_ setiap kali layanan apache/nginx di-restart dan menghapusnya setelah eksekusi berhasil. Akibatnya, jika Anda perlu melewati perintah yang berbeda ke rake pada setiap deploy, Anda perlu membuat file _**rake_deploy**_ setiap kali dan meletakkan perintah yang benar di sana.

Platform menempatkan output dari setiap _**rake_deploy**_ ke dalam file log yang sesuai yang tersedia melalui tampilan **[Log](<https://docs.dewacloud.com/docs/view-log-files/>)** di dashboard platform.

_**Sintaksis dari file rake_deploy:**_

```
1 2 3 4 
|
$COMMAND_NAME_1   $COMMAND_NAME_2   ...   $COMMAND_NAME_N   
```

Dan platform akan mengeksekusi skrip berikut:

```
1 2 3 4 
|
rake $COMMAND_NAME_1   rake $COMMAND_NAME_2   ...   rake $COMMAND_NAME_N   
```

Misalnya, **rake_deploy** terlihat seperti berikut dalam tutorial _[Redmine](<https://docs.dewacloud.com/docs/redmine/>)_:

```
1 2 3 
|
generate_secret_token   db:migrate   redmine:load_default_data   
```

:::warning
Untuk membekukan gems, Anda perlu menambahkan perintah gems:unpack ke rake_deploy.
:::

## Baca Juga{#whats-next}

- [Ruby Dev Center](<https://docs.dewacloud.com/docs/ruby-center/>)
- [Dependency Management](<https://docs.dewacloud.com/docs/ruby-dependency-management/>)
- [Ruby Application Server Configuration](<https://docs.dewacloud.com/docs/ruby-application-server-config/>)