---
sidebar_position: 1
slug: /api-overview
title: API Overview
---
# Platform API

[Platform API](<https://docs.dewacloud.com/docs/api-overview/>) memungkinkan pengembang untuk mengotomatisasi serangkaian tindakan yang diperlukan untuk siklus hidup aplikasi dan memperluas fungsionalitas platform kami dengan menggabungkan layanan lain. Menggunakan API kami, Anda dapat secara programatik membuat environment, melakukan deployment aplikasi, dan melakukan tugas lain yang sebelumnya hanya dapat dilakukan melalui dashboard platform, tetapi tidak terbatas pada itu.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/api-overview/api-overview-1.png" alt="platform API" width="70%"/>

Platform API mengikuti prinsip REST. **REST API** menentukan serangkaian fungsi yang dapat diminta oleh pengembang, yang kemudian menerima respons. Interaksi dilakukan melalui protokol HTTPS. Keuntungan dari metode ini adalah perluasan luas dari protokol HTTPS. Itu sebabnya REST API dapat digunakan dengan hampir semua bahasa pemrograman.

## Platform API Request{#platform-api-request}

Semua permintaan metode API adalah permintaan HTTPS GET atau POST ke URL dengan serangkaian parameter:

_**https://\{hoster-api-host\} /1.0/**_

Jenis URL yang harus digunakan, dinyatakan dalam deskripsi setiap metode (field REST).

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/api-overview/api-overview-2.png" alt="api overview rest link" max-width="100%"/>

Data dari permintaan dapat dikirim sebagai query string (setelah tanda “?”) saat menggunakan metode GET, atau di badan permintaan POST. Ingat, bahwa dalam kasus permintaan GET, parameter harus [percent encoded](<http://en.wikipedia.org/wiki/Url_encoding>) (URL encoding).

:::note
Metode GET tidak didukung dalam permintaan API berikut karena alasan keamanan:

Signin - `https://\{hoster-api-host\}/1.0/users/authentication/rest/signin?login=[string]&password=[string]`

Signup - `https://reg.\{hoster-domain\}/signup?email=[string]`

Change password - `https://\{hoster-api-host\}/1.0/users/account/rest/changepassword?oldPassword=[string]&newPassword=[string]session=[string]`

:::

Sebagai pengingat, ada batasan pada panjang permintaan URL - 2048 karakter. Itu sebabnya kami merekomendasikan menggunakan:

  * Permintaan GET untuk menerima informasi yang mudah cocok dalam batasan panjang
  * Permintaan POST untuk mengubah data (membuat environment, mengubah file konfigurasi, dll.)

Dengan cara ini, Anda tidak akan dibatasi dengan panjang permintaan. Juga, penggunaan semacam ini lebih relevan untuk spesifikasi protokol HTTPS. Semua metode Platform API memerlukan autentikasi dan detail target tindakan, yang disediakan melalui parameter _**session**_ dan _**envName**_ masing-masing.

:::note
Jika tidak ada argumen envName dalam deskripsi metode, itu diterapkan ke seluruh akun/platform. Dengan ini, parameter appid yang tidak digunakan lagi, yang sebelumnya digunakan untuk mendefinisikan target tindakan, harus diabaikan.
:::

Nilai teks dari parameter harus disediakan dalam kode UTF-8. Urutan parameter dalam permintaan tidak penting.

## Platform API Response{#platform-api-response}

Respons permintaan dikodekan dalam UTF-8. Respons untuk semua fungsi API diberikan dalam format [JSON](<http://en.wikipedia.org/wiki/JSON>). Contoh hasilnya dijelaskan dalam dokumentasi metode.

<img src="https://assets.dewacloud.com/dewacloud-docs/development-tools/api-and-cli/api-overview/api-overview-3.png" alt="signin API method" max-width="100%"/>

## Platform API in Action{#platform-api-in-action}

Untuk memulai otomatisasi proses yang diperlukan dengan Platform API, Anda harus menghadapi persyaratan berikut:

  * Anda perlu mengunduh [Platform Client Library](<http://mvnrepository.com/artifact/com.jelastic/jelastic-public-j2se>) yang sesuai (sesuai dengan versi platform yang digunakan) dan menambahkannya ke classpath

Jika Anda menggunakan Maven, tambahkan dependensi berikut ke _**pom.xml**_ :

```xml
<dependency>
    <groupId>com.jelastic</groupId>
    <artifactId>jelastic-public-j2se</artifactId>
    <version>3.1</version>
</dependency>
```

Untuk memanggil fungsi API apa pun, Anda perlu diautentikasi. Parameter “_session_” bertanggung jawab atas autentikasi, yaitu mengidentifikasi pengguna dengan permintaan tersebut. Sesi dicapai dengan memanggil metode **Users > Authentication > Signin**.

```
https://{hoster-api-host}/1.0/users/authentication/rest/signin?login=[string]&password=[string]
```

Dimana **login** dan **password** adalah kredensial akun PaaS Anda.

Pemanggilan fungsi API selanjutnya harus dilakukan dengan nilai sesi yang diterima. Untuk menyelesaikan sesi kerja dengan API, panggil metode **Users > Authentication > Signout**.

```
https://{hoster-api-host}/1.0/users/authentication/rest/signout?session=[string]
```

Dengan bantuan Platform Java Client Library, Anda dapat mengotomatisasi berbagai tindakan yang terkait dengan manajemen siklus hidup aplikasi Anda, misalnya: membuat environment, mengubah statusnya, menghapus, merestart node, melakukan deployment aplikasi, dll.

Mari kita periksa bagaimana cara membuat environment dengan topologi dan pengaturan kustom Anda menggunakan Platform Client Library.

### Create Environment{#create-environment}

Versi lengkap dari contoh pembuatan environment dapat Anda temukan dalam [Platform API documentation](<https://docs.dewacloud.com/docs/api-overview/>) (tab _**Java Samples**_). Dan berikut adalah beberapa penjelasan langkah demi langkah dari poin utama:

1\. Deklarasikan kelas publik baru **CreateEnvironment** yang akan menyertakan semua blok dan parameter berikut. Blok parameter pertama harus berisi string berikut:

```java
private final static String HOSTER_URL = "<hoster-url>";
private final static String USER_EMAIL = "<email>";
private final static String USER_PASSWORD = "<password>";
private final static String ENV_NAME = "test-api-environment-" + new Random().nextInt(100);
```

dimana:

  * \- URL dari hosting provider Anda (kolom _Hoster’s URL / API_ )
  * \- email akun PaaS Anda (login)
  * \- password akun PaaS Anda

2\. Kemudian autentikasi dikonfigurasi, yang akan menggunakan login dan password yang telah Anda tentukan di atas.

```java
public static void main(String[] args) {
    System.out.println("Authenticate user...");
    AuthenticationResponse authenticationResponse = authenticationService.signin(USER_EMAIL, USER_PASSWORD);
    System.out.println("Signin response: " + authenticationResponse);
    if (!authenticationResponse.isOK()) {
        System.exit(authenticationResponse.getResult());
    }
    final String session = authenticationResponse.getSession();
}
```

Setelah autentikasi, sesi unik baru dibuat. Ini akan digunakan untuk melakukan operasi yang diperlukan dalam akun pengguna. Semua pemanggilan fungsi API selanjutnya harus dilakukan dalam sesi ini, yang tetap valid hingga pemanggilan metode Signout.

3\. Langkah selanjutnya adalah mendapatkan daftar engine yang tersedia untuk `<engine_type>` yang ditentukan (dapat berupa _java, php, ruby, js_, dll.).

```java
System.out.println("Getting list of engines...");
ArrayResponse arrayResponse = environmentService.getEngineList(session, "<engine_type>");
System.out.println("GetEngineList response: " + arrayResponse);
if (!arrayResponse.isOK()) {
    System.exit(arrayResponse.getResult());
}
```

4\. Setelah itu dapatkan daftar template node yang tersedia sesuai dengan `<templates_type>` yang ditentukan, yang dapat berupa:

  * ALL - semua template yang tersedia di platform, yaitu native dan cartridges
  * NATIVE - template node default
  * CARTRIDGE - template kustom, yang ditambahkan ke platform sebagai cartridges oleh hosting provider

```java
System.out.println("Getting list of templates...");
arrayResponse = environmentService.getTemplates(session, "<templates_type>", false);
System.out.println("GetTemplates response: " + arrayResponse);
if (!arrayResponse.isOK()) {
    System.exit(arrayResponse.getResult());
}
```

5\. Blok berikutnya didedikasikan untuk konfigurasi dan pengaturan kustom dari environment baru Anda dan server yang akan dikandungnya. Detail lebih lanjut tentang parameter JSON, yang digunakan dalam manifest platform untuk mendefinisikan topologi environment, dapat dilihat [di sini](<https://docs.dewacloud.com/docs/application-manifest/>).

```java
JSONObject env = new JSONObject()
        .put("ishaenabled", false)
        .put("engine", "php5.5")
        .put("shortdomain", ENV_NAME);
JSONObject apacheNode = new JSONObject()
    .put("nodeType", "apache2")
    .put("extip", false)
    .put("count", 1)
    .put("fixedCloudlets", 1)
    .put("flexibleCloudlets", 4);
JSONObject mysqlNode = new JSONObject()
    .put("nodeType", "mysql5")
    .put("extip", false)
    .put("fixedCloudlets", 1)
    .put("flexibleCloudlets", 4);
JSONObject memcachedNode = new JSONObject()
    .put("nodeType", "memcached");
JSONArray nodes = new JSONArray()
    .put(apacheNode)
    .put(mysqlNode)
    .put(memcachedNode);
```

6\. Akhirnya, inisiasi pembuatan environment baru dengan semua pengaturan yang ditentukan:

```java
System.out.println("Creating environment...");
ScriptEvalResponse scriptEvalResponse = environmentService.createEnvironment(session, "createenv", env.toString(), nodes.toString());
System.out.println("CreateEnvironment response: " + scriptEvalResponse);
```

Itu saja. Mengikuti langkah-langkah tersebut Anda dapat mengotomatisasi pembuatan berbagai environment. Temukan versi lengkap dari contoh ini di **[platform API docs](<https://docs.dewacloud.com/docs/api-overview/>) > Java Samples > CreateEnvironment**. Juga di antara **Java Samples** tersebut Anda dapat menemukan contoh lain dari penggunaan Platform Client Library untuk mengotomatisasi tindakan berbeda yang berkaitan dengan manajemen siklus hidup aplikasi Anda. Selamat mencoba!

## Baca Juga{#whats-next}

  * [Platform API Methods](<https://docs.dewacloud.com/docs/api-overview/>)