---
sidebar_position: 12
slug: /cli-install-jps
title: Installing JPS
---
# CLI Tutorial: Install JPS

Dalam tutorial ini, kami akan menunjukkan cara menginstal [paket JPS](https://docs.dewacloud.com/docs/application-manifest/) melalui CLI. Solusi tersebut dapat mencakup langkah-langkah untuk membuat environment baru dengan kustomisasi yang telah ditentukan sebelumnya (misalnya deployment dan konfigurasi aplikasi) atau melakukan beberapa tindakan pada instance yang ada.

Mari kita mulai dengan mempelajari metode _**Install**_ yang sesuai yang menjalankan paket JPS dan semua parameternya:

```
~/jelastic/marketplace/jps/install --jps \{jps\} [--envName \{envName\}] [--settings \{settings\}] [--nodeGroup \{nodeGroup\}] [--displayName \{displayName\}] [--region \{region\}] [--envGroups \{envGroups\}] [--ownerUid \{ownerUid\}] [--logsPath \{logsPath\}] [--loggerName \{loggerName\}] [--skipNodeEmails \{skipNodeEmails\}]
```

Di sini, parameter dalam tanda kurung siku _**[ ]**_ adalah opsional:

- _**jps**_ \- tautan ke [file manifest](https://docs.dewacloud.com/docs/application-manifest/) Anda atau isinya
- pengaturan khusus untuk __jpsType: install__ manifests (environment baru):
  - _**[displayName]**_ \- [alias](https://docs.dewacloud.com/docs/environment-aliases/) untuk environment yang dibuat
  - _**[region]**_ \- nama unik dari [region](https://docs.dewacloud.com/docs/choosing-region/) (misalnya dapatkan dengan metode _GetRegions_), di mana environment harus dibuat
  - _**[envGroups]**_ \- daftar [env groups](https://docs.dewacloud.com/docs/environment-groups-overview/) yang dibuat environment harus disertakan (ditentukan sebagai array JSON, misalnya _[“mygroup”, “group/subgroup”]_)
- pengaturan khusus untuk __jpsType: update__ manifests (add-ons untuk environment yang ada):
  - _**[nodeGroup]**_ \- layer environment di mana add-on harus diterapkan (_bl_ , _cp_ , _cache_ , _sqldb_ , _nosqldb_ , _storage_ , _vps_ , _build_ atau yang khusus Anda untuk [kontainer Docker](https://docs.dewacloud.com/docs/container-types/))
- _**envName**_ \- nama dari environment yang baru dibuat/ditargetkan untuk instalasi aplikasi/add-on masing-masing
- _**[settings]**_ \- daftar pengaturan yang diperlukan oleh paket (ditentukan sebagai objek JSON dengan pasangan key/value)
- _**[ownerUid]**_ \- ID pengguna dari [akun bersama](https://docs.dewacloud.com/docs/account-collaboration/), tempat paket JPS harus diinstal
- _**[loggerName]**_ \- nama yang ditampilkan di sebelah cap waktu dari setiap operasi dalam file log instalasi JPS (pelajari lebih lanjut tentang [loggerName](https://docs.cloudscripting.com/troubleshooting/#loggername))
- _**[logsPath]**_ \- path ke file untuk mencatat aliran instalasi JPS (_**cs.log**_ secara default)
- _**[skipNodeEmails]**_ \- mengaktifkan (_true_, secara default) atau menonaktifkan (_false_) notifikasi email tentang pembuatan node baru oleh paket ini (pelajari lebih lanjut tentang [skipNodeEmails](https://docs.cloudscripting.com/creating-manifest/basic-configs/#skip-node-emails))

Sekarang, kita dapat melanjutkan ke contoh kasus nyata:

- [TimeZone Change Add-on Installation via URL](#timezone-change-add-on-installation-via-url)
- [JPS Installation Using Configuration File with Parameters](#jps-installation-using-configuration-file-with-parameters)

## TimeZone Change Add-on Installation via URL{#timezone-change-add-on-installation-via-url}

Add-on **[TimeZone Change](https://docs.dewacloud.com/docs/timezone-management/#timezone-add-on)** memungkinkan Anda mengubah zona waktu pada kontainer apa pun ke yang diinginkan. Sumber dan file manifest dari add-on dapat ditemukan di repositori [JPS Collection](https://github.com/jelastic-jps) di GitHub.

1. Instal platform CLI dan masuk ke akun Anda, jika belum. Langkah-langkah yang diperlukan dijelaskan dalam [panduan ringkas](https://docs.dewacloud.com/docs/cli/).

2. Panggil metode _**Install**_ dengan parameter yang diperlukan:

```
~/jelastic/marketplace/jps/install --jps \{jps\} --envName \{envName\} --settings \{settings\} --nodeGroup \{nodeGroup\}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cli-install-jps/01-cli-install-timezone-addon.png" alt="CLI install timezone addon" max-width="100%"/>

Di sini:

- _**\{jps\}**_ \- [tautan](https://raw.githubusercontent.com/jelastic-jps/time-zone-change/master/manifest.jps) ke file manifest add-on TimeZone Change 

- _**\{envName\}**_ \- nama environment Anda yang ada, misalnya _my-app_
- _**\{settings\}**_ \- sesuai dengan manifest, add-on ini mengharuskan Anda memberikan satu parameter tambahan - zona waktu yang diinginkan, misalnya `{“dashoard_url”:“**America/New_York** "}`
- _**\{nodeGroup\}**_ \- target [layer](https://docs.dewacloud.com/docs/concept-and-terminology/#layer) dari environment, misalnya _cp_

Jika tidak ada masalah, skrip akan merespons dengan _“result”: 0_ (yaitu operasi berhasil).

3. Untuk add-on ini, Anda dapat memeriksa hasil terperinci dalam file _**/var/log/jpsaddon.log**_. Mari _**Read**_.

```
~/jelastic/environment/file/read --envName \{envName\} --path "/var/log/jpsaddon.log" --nodeGroup \{nodeGroup\}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cli-install-jps/02-cli-read-file-on-application-server.png" alt="CLI read file on application server" max-width="100%"/>

Seperti yang Anda lihat, zona waktu telah berhasil diset seperti yang ditentukan pada langkah sebelumnya, _America/New_York_ dalam kasus kami. Waktu lokal pada kontainer terkait disesuaikan sesuai dengan zona waktu baru ini.

## JPS Installation Using Configuration File with Parameters{#jps-installation-using-configuration-file-with-parameters}

Jika diperlukan, Anda dapat menyediakan semua parameter dalam satu file dan merujuknya saat menjalankan metode CLI.

1. Mari buat file JSON (menggunakan editor yang Anda sukai) dengan parameter yang diperlukan. Dalam kasus kami, kami akan menjalankan JPS sederhana, yang mencatat nilai dari parameter yang diberikan:

```
{
  "jps": {
    "type": "update",
    "name": "JPS Example",
    "onInstall": {
      "log": "${settings.param1}"
    }
  },
  "envName": "my-app",
  "settings": {
    "param1": "value1"
  },
  "nodeGroup": "cp"
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cli-install-jps/03-create-config-with-example-jps.png" alt="create config with example JPS" max-width="100%"/>

:::tip

Dimungkinkan untuk menyediakan URL ke file manifest Anda, daripada menentukannya secara eksplisit di parameter jps (serupa dengan contoh TimeZone).

:::

2. Selanjutnya, panggil metode _**Install**_ menggunakan file konfigurasi yang dibuat.

```
~/jelastic/marketplace/jps/install --myparams \{myparams.json\}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cli-install-jps/04-cli-install-jps-with-configuration-file.png" alt="CLI install JPS with configuration file" max-width="100%"/>

:::tip

Jika diperlukan, Anda dapat secara eksplisit menyediakan parameter untuk mendefinisikan ulang nilai di dalam file. Misalnya, dimungkinkan untuk mengubah nama environment tanpa menyesuaikan file konfigurasi itu sendiri:

```
~/jelastic/marketplace/jps/install --myparams \{myparams.json\} --envName \{envName\}
```

:::

3. Anda dapat memastikan bahwa nilai dari parameter yang disediakan telah berhasil dicatat melalui konsol platform (`https://app.[{platformDomain}](https://docs.dewacloud.com/docs/hosting-providers/)/console`).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/cli-install-jps/05-jps-installation-console-log.png" alt="JPS installation console log" max-width="100%"/>

Penggunaan file konfigurasi dengan daftar parameter yang telah ditentukan adalah cara yang bagus untuk menyederhanakan dan mengotomatisasi panggilan yang sering.

## Baca Juga{#whats-next}

Lihat tutorial CLI lainnya:

- [Environment Creation](https://docs.dewacloud.com/docs/cli-create-environment/)
- [Environment Start/Stop](https://docs.dewacloud.com/docs/cli-environment-control/)
- [Environment Cloning](https://docs.dewacloud.com/docs/cli-clone-environment/)
- [Environment Migration](https://docs.dewacloud.com/docs/cli-environment-migration/)
- [Server Scaling](https://docs.dewacloud.com/docs/cli-scaling/)
- [Container Redeploy](https://docs.dewacloud.com/docs/cli-container-redeploy/)
- [Container Volumes](https://docs.dewacloud.com/docs/cli-container-volumes/)
- [Mount Points](https://docs.dewacloud.com/docs/cli-mount-points/)
- [VCS Project Deployment](https://docs.dewacloud.com/docs/cli-vcs-deploy/)
- [Swap Public IPs](https://docs.dewacloud.com/docs/cli-ip-swap/)