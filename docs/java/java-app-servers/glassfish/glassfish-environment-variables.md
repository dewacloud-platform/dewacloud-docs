---
sidebar_position: 2
slug: /glassfish-environment-variables
title: GlassFish Environment Variables
---

# Custom Environment Variables

Environment variables merupakan semacam placeholder, di mana Anda dapat menyimpan nilai parameter atau string yang sering digunakan agar tidak perlu menyebutkannya secara manual dalam kode setiap kali dibutuhkan. Ada sejumlah [default environment variables](<https://docs.dewacloud.com/docs/environment-variables>) yang telah dikonfigurasi dan dapat digunakan dalam kode aplikasi Anda atau bahkan disesuaikan sebelum pembuatan node untuk menerapkan beberapa penyesuaian, sehingga membuat pekerjaan Anda dengan platform lebih nyaman.

Dalam panduan ini, kami akan menjelaskan cara paling umum untuk menambahkan variabel kustom Anda untuk setiap node di dalam platform:

  * [melalui bagian _variables_ khusus pada dashboard](<https://docs.dewacloud.com/docs/#dashboard>)
  * [menggunakan file _shell configuration_](<https://docs.dewacloud.com/docs/#shell>)
  * [melalui file _variables.conf_ (hanya untuk Java)](<https://docs.dewacloud.com/docs/#java>)

## Customize Environment Variables via UI{#customize-environment-variables-via-ui}

1\. Arahkan ke grup node di dashboard, perluas daftar **Additionally** dan pilih opsi _**Variables**_.

![environment variables dashboard](#)

2\. Di dalam frame yang terbuka, Anda dapat menyesuaikan daftar environment variables sesuai kebutuhan Anda (menggunakan tombol pada panel alat).

:::warning

Implementasi platform dari Docker containers memungkinkan penggunaan environment variables yang ada untuk mendefinisikan yang lain. Misalnya, nilai MY$HOME akan secara otomatis dikonversi menjadi MY\one (atau yang serupa berdasarkan nilai variabel HOME).

:::

![manage environment variables ui](#)

Jangan lupa untuk **Apply** perubahan yang telah Anda buat.

## Set Up Environment Variables via Shell Configs{#set-up-environment-variables-via-shell-configs}

Anda dapat menyediakan variabel kustom Anda menggunakan file konfigurasi shell:

  * _**~/.bash_profile**_ dieksekusi hanya saat login melalui konsol
  * _**~/.bashrc**_ dieksekusi untuk setiap instance bash baru

Untuk membantu Anda dengan pemeliharaan file ini, platform secara otomatis menyertakan sumber-sumber dari _._**bashrc**_ config dalam _**.bash_profile**_. Dengan cara ini, Anda hanya dapat menyediakan variabel kustom melalui file yang pertama:

1\. Bangun [koneksi SSH](<https://docs.dewacloud.com/docs/ssh-access>) ke container Anda. Misalnya, kita akan menggunakan klien **Web SSH** yang terintegrasi:

![web ssh button](#)

2\. Buat atau sesuaikan file _**.bashrc**_ di dalam direktori home dengan menambahkan variabel kustom Anda dalam format berikut:

```
export  {var_name}= {var_value}
```

di mana

  * _**\{var_name\}**_ \- nama dari variabel yang ingin Anda tentukan
  * _**\{var_value\}**_ \- nilai dari variabel Anda

![export custom variables via shell](#)

3\. Sekarang, setiap instance bash baru akan diberikan variabel kustom Anda. Untuk memaksa penerapan pengaturan baru untuk sesi saat ini, cukup segarkan sumbernya dengan perintah yang ditunjukkan di bawah ini. Selanjutnya, verifikasi ketersediaan variabel baru:

```
source ~/.bashrc
echo $ {var_name}
```

![verify custom variable availability ssh](#)

Seperti yang Anda lihat, perubahan berhasil diterapkan.

## Adjust Java Environment Variables via Configuration Manager{#adjust-java-environment-variables-via-configuration-manager}

Alur kerja sederhana berikut identik untuk semua server aplikasi Java yang dikelola oleh platform.

1\. Klik tombol **Config** untuk server aplikasi Anda untuk mengakses [file manager](<https://docs.dewacloud.com/docs/configuration-file-manager>) container.

![configuration file manager button](#)

2\. Di tab yang terbuka, navigasikan ke file _**variables.conf**_ di salah satu lokasi berikut:

  * **Tomcat** , **TomEE** \- _/opt/tomcat/conf/variables.conf_
  * **Jetty** \- _/opt/jetty/etc/variables.conf_
  * **Spring Boot** \- _/opt/shared/conf/variables.conf_
  * **GlassFish** \- _/opt/glassfish/glassfish/domains/domain1/config/variables.conf_
  * **Payara** \- _/opt/payara/glassfish/domains/domain1/config/variables.conf_
  * **WildFly** \- _/opt/wildfly/conf/variables.conf_

3\. Di sini, Anda dapat menyediakan variabel kustom Anda (masing-masing harus dipisahkan oleh spasi atau dimulai dari baris baru) atau [menyesuaikan Java options](<https://docs.dewacloud.com/docs/java-options-arguments>) untuk aplikasi Anda. Misalnya:  
_**-Dvar1=value1 -Dvar2=value2**_  
_**-Dmy.var3=/my/value**_

![custom environment variables java](#)

:::tip

Sebagai alternatif, beberapa server aplikasi (mis. GlassFish, Payara, WildFly) dilengkapi dengan panel admin, yang juga memungkinkan untuk menambahkan JVM options dan variabel kustom:

:::

Jangan lupa untuk **Save** konfigurasi yang Anda buat.

4\. **Restart nodes** dari server aplikasi Anda untuk menerapkan perubahan.

![restart nodes button](#)

5\. Variabel baru dapat dipanggil melalui kode Java Anda dengan bantuan metode _System.getProperty(“your_variable”)_ untuk menetapkan nilai yang ditentukan pada argumen yang diperlukan. Sebagai contoh:

  * String **var1** = System.getProperty("**var1** ");
  * String **var2** = System.getProperty("**var2** ");
  * String **var3** = System.getProperty("**my.var3** ")

Sekarang, Anda dapat menyesuaikan kode aplikasi Anda menggunakan variabel baru ini.

## Baca Juga{#whats-next}

  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Java Options and Arguments](<https://docs.dewacloud.com/docs/java-options-arguments/>)
  * [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
  * [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)