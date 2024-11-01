---
sidebar_position: 14
slug: /timezone-management
title: Managing Timezone Settings
---
# Managing Timezone Data

Secara default, semua container di platform menggunakan zona waktu UTC. Namun, Anda dapat mengubahnya ke zona waktu yang diinginkan menggunakan _**[TimeZone Change](#timezone-add-on)**_ add-on. Sebagai alternatif, Anda dapat secara manual memperbarui zona waktu untuk server aplikasi Java dan PHP.

## Menggunakan TimeZone Add-On{#timezone-add-on}

Anda dapat dengan mudah menginstal add-on _TimeZone Change_ untuk menyesuaikan zona waktu environment Anda:

### 1. Periksa Zona Waktu Saat Ini

Untuk memverifikasi zona waktu saat ini, gunakan perintah berikut di terminal:

```bash
date
```

Secara default, hasilnya akan menunjukkan zona waktu UTC.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-timezone-settings/01-date-before-timezone-change.png" alt="date before timezone change" max-width="100%"/>

### 2. Instal Add-On

Arahkan ke repositori add-on _TimeZone Change_ di GitHub dan impor file _**manifest.jps**_ melalui dashboard platform:

```url
https://github.com/jelastic-jps/time-zone-change/blob/master/manifest.jps
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-timezone-settings/02-import-timezone-change-add-on.png" alt="import timezone change add-on" max-width="100%"/>

### 3. Atur TimeZone

Pilih _Environment_ tujuan dan tentukan _TimeZone Name_ yang diinginkan (misalnya, _America/New_York_) dari [Daftar zona waktu](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-timezone-settings/04-install-timezone-change-add-on.png" alt="install timezone change add-on" max-width="100%"/>

### 4. Verifikasi Perubahan TimeZone

Setelah instalasi, jalankan kembali perintah `date` untuk memastikan zona waktu telah diperbarui.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-timezone-settings/05-date-after-timezone-change.png" alt="date after timezone change" max-width="100%"/>

## Mengelola Aturan Zona Waktu untuk Java

### Memperbarui Data Zona Waktu

Untuk memastikan aturan zona waktu di environment Java Anda mutakhir, gunakan alat bawaan _TZUpdater_:

1. Hubungkan ke environment Java Anda melalui SSH.
2. Periksa versi TZdata saat ini:

```bash
java -jar /usr/java/utils/tzupdater.jar -V
```

3. Jika data sudah usang, perbarui dengan:

```bash
java -jar /usr/java/utils/tzupdater.jar -u
```

### Mengubah Zona Waktu untuk Java

Untuk mengubah zona waktu untuk server aplikasi Java, ikuti langkah-langkah berikut:

1. Edit file _variables.conf_ (lokasi bervariasi sesuai server):
   - Untuk **Tomcat**: `/opt/tomcat/conf/variables.conf`
   - Untuk **Jetty**: `/opt/jetty/etc/variables.conf`
   - Untuk **GlassFish**: Admin panel > _Configurations > JVM Settings_

2. Tambahkan atau modifikasi variabel _-Duser.timezone_ dengan zona waktu yang diperlukan:

```bash
-Duser.timezone=America/New_York
```

3. **Simpan** perubahan dan **Restart** server aplikasi.

## Mengelola Aturan Zona Waktu untuk PHP

### Memeriksa Data Zona Waktu

Untuk memperbarui zona waktu bagi server PHP (Apache, NGINX):

1. Buka file _php.ini_ dari pengelola konfigurasi.
2. Hapus komentari baris untuk basis data zona waktu eksternal (Olson):

```ini
extension=tzdb
```

3. Simpan dan mulai ulang server.

### Mengubah Zona Waktu untuk PHP

Untuk mengubah zona waktu untuk PHP:

1. Edit file _php.ini_ dan modifikasi parameter `date.timezone`:

```ini
date.timezone = Australia/Sydney
```

2. Simpan dan mulai ulang server. Zona waktu sekarang akan mencerminkan pengaturan baru.

## Baca Juga

- [Managing Locale Settings](https://docs.dewacloud.com/docs/locale-settings/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Java Application Server Configuration](https://docs.dewacloud.com/docs/java-application-server-config/)
- [PHP Application Server Configuration](https://docs.dewacloud.com/docs/php-application-server-config/)