---
sidebar_position: 12
slug: /locale-settings
title: Managing Locale Settings
---
# Managing Locale Settings

**Locale** adalah serangkaian preferensi bahasa dan budaya yang menentukan aturan bagaimana antarmuka dan aplikasi Anda harus berperilaku, termasuk bahasa untuk pesan, set karakter, dan lainnya. Di bawah ini adalah panduan tentang cara melihat dan mengubah pengaturan locale pada container Anda.

### 1. Melihat Pengaturan Locale Saat Ini

Secara default, templat yang dikelola platform menggunakan **Bahasa Inggris** sebagai bahasa utama. Anda dapat melihat pengaturan locale saat ini dalam container menggunakan perintah berikut (ini dapat dieksekusi melalui [Web SSH](https://docs.dewacloud.com/docs/web-ssh-client/)):

```bash
locale -a
```

Perintah ini akan menampilkan semua locale yang saat ini didukung dalam container Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-locale-settings/01-container-default-locale-settings.png" alt="container default locale settings" width="100%"/>

### 2. Tambahkan Dukungan Bahasa Baru

Untuk menambahkan dukungan untuk bahasa baru, gunakan alat **[localedef](http://man7.org/linux/man-pages/man1/localedef.1.html)**:

```bash
sudo localedef -i {language}_{country} -f {codeset} {language}_{country}.{codeset}
```

Di mana:
- `{language}_{country}`: Mewakili kode bahasa dan negara. Sebagai contoh, `en_US` untuk Bahasa Inggris U.S.
  
:::tip
Untuk melihat daftar locale yang tersedia untuk dibuat, jalankan perintah berikut:
```bash
ls /usr/share/i18n/locales
```
:::
  
- `{codeset}`: Menentukan encoding karakter, biasanya `UTF-8`.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-locale-settings/02-localedef-to-add-new-locale.png" alt="localedef to add new locale" width="100%"/>

### 3. Verifikasi Locale Baru

Setelah menambahkan locale baru, verifikasi dengan menjalankan:

```bash
locale -a
```

Ini akan menampilkan daftar yang diperbarui dengan bahasa yang baru ditambahkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/managing-locale-settings/03-list-locale-settings.png" alt="list locale settings" width="100%"/>

Sekarang, locale baru telah berhasil ditambahkan dan tersedia untuk digunakan oleh aplikasi Anda.

## Baca Juga

- [Web SSH Access](https://docs.dewacloud.com/docs/web-ssh-client/)
- [OOM Killer Overview](https://docs.dewacloud.com/docs/oom-killer-troubleshooting/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)