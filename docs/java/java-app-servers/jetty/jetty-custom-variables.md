---
sidebar_position: 2
slug: /jetty-custom-variables
title: Jetty Custom Variables
---

# Custom Environment Variables for Java Application Servers

Environment variables merupakan semacam placeholder, di mana Anda dapat menyimpan nilai parameter atau string yang sering digunakan agar tidak perlu menyebutkan secara manual dalam kode setiap kali dibutuhkan. Ada sejumlah [default environment variables](<https://docs.dewacloud.com/docs/environment-variables/>) yang telah dikonfigurasi di server aplikasi platform dan dapat dengan mudah diintegrasikan ke dalam aplikasi Anda yang di-host dalam server tersebut, untuk memudahkan kerja Anda dengan platform.

Panduan berikut akan memperkenalkan Anda pada detail tentang cara menambahkan environment variables kustom Anda ke server aplikasi Java tertentu:

  * [Tomcat, TomEE atau Jetty](<https://docs.dewacloud.com/docs/#tomcat-tomee-and-jetty-variables>)
  * [GlassFish](<https://docs.dewacloud.com/docs/#glassfish-variables>)

:::note
Operasi yang sama dapat dilakukan dengan cara membangun koneksi SSH ke salah satu server Anda dan mendeklarasikan variabel dalam file konfigurasi yang sesuai via console.
:::

## Tomcat, TomEE dan Jetty Variables{#tomcat-tomee-and-jetty-variables}

Alur kerja berikut cukup sederhana dan identik untuk sebagian besar server aplikasi Java yang didukung, jadi mari kita periksa terlebih dahulu.

1\. Klik tombol **Config** untuk server aplikasi Anda (**Tomcat**, **TomEE**, atau **Jetty**).

![Tomcat config button](#)

2\. Di tab yang terbuka, navigasi ke direktori **/opt/tomcat/conf** dan pilih file _**variables.conf**_ di dalamnya. Di sana Anda akan melihat instruksi singkat tentang pengaturan environment variables kustom Anda.

Ikuti instruksinya, dengan cara menambahkan variabel kustom yang diinginkan di sini. Setiap variabel harus dipisahkan oleh spasi dari variabel berikutnya atau dimulai dari baris baru.

Misalnya:

```
-Dvar1=value1 -Dvar2=value2 -Dmy.var3=/my/value
```

![custom variables in variables.conf](#)

:::note
Anda juga dapat mengatur opsi JVM di file ini. Sebagai contoh, Anda dapat melihat opsi agen Garbage Collection yang dinyatakan tepat di atas area lingkaran pada gambar.
:::

Jangan lupa untuk **Save** konfigurasi yang telah Anda buat.

3\. Kemudian lakukan perubahan yang sesuai dalam kode aplikasi Anda dengan bantuan metode _System.getProperty(“your_variable”)_ untuk menetapkan nilai yang ditentukan pada argumen yang diperlukan.

Misalnya:

```java
String var1 = System.getProperty("var1");
String var2 = System.getProperty("var2");
String var3 = System.getProperty("var3");
```

4\. Setelah selesai, **Restart** server aplikasi Anda menggunakan tombol yang sesuai di sebelahnya.

![Tomcat restart button](#)

Sebagai hasilnya, semua konfigurasi baru yang telah dinyatakan akan diterapkan.

## GlassFish Variables{#glassfish-variables}

Untuk GlassFish, konfigurasi variabel dilakukan melalui **Administration Console**, jadi prosesnya akan sebagai berikut:

1\. Klik tombol terakhir (dengan ikon gear) untuk **GlassFish** di environment Anda dan pilih **Admin panel > Login** dalam daftar yang muncul (atau ikuti tautan ke Admin console yang Anda terima melalui email setelah pembuatan environment).

![GlassFish admin panel](#)

2\. Isi kolom **Username** dan **Password** dengan kredensial dari email yang sama yang diterima sebelumnya.

![login to admin panel](#)

3\. Setelah masuk, pilih opsi **gfcluster-config > JVM Settings** dalam bagian _Configuration_ di menu sebelah kiri.

4\. Kemudian pilih tab **JVM Options** dan klik tombol **Add JVM Option** di atas daftar _**Options**_. Bidang kosong baru akan muncul di bagian atas daftar, di mana Anda dapat memasukkan environment variable kustom Anda (misalnya _-Dvar1=value1_).

![add JVM option](#)

Jika Anda ingin memanggil file JAR sebagai argumen opsi, cukup unggah ke folder **home** server GlassFish Anda dan tentukan jalur ke file tersebut untuk opsi yang diinginkan, misalnya:

```
-javaagent:/opt/glassfish3/temp/newrelic.jar
```

![JAR file as option’s argument](#)

Setelah semua parameter yang diinginkan diatur, klik tombol **Save**.

5\. Jika semuanya oke, Anda akan mendapatkan pesan berikut:

![variables successfully saved](#)

6\. Akhirnya, kembali ke dashboard platform Anda dan restart **GlassFish** menggunakan tombol yang sesuai.

![GlassFish restart button](#)

Itu saja. Dengan cara ini, Anda dapat mengelola environment variables GlassFish melalui Admin Console.

## Baca Juga{#whats-next}

  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Custom Variables](<https://docs.dewacloud.com/docs/custom-environment-variables/>)
  * [Tomcat](<https://docs.dewacloud.com/docs/tomcat/>)
  * [TomEE](<https://docs.dewacloud.com/docs/apache-tomee/>)
  * [Jetty](<https://docs.dewacloud.com/docs/eclipse-jetty/>)
  * [GlassFish](<https://docs.dewacloud.com/docs/glassfish/>)