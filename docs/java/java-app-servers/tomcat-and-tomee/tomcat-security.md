---
sidebar_position: 5
slug: /tomcat-security
title: Tomcat Security
---

# Security Configs for Tomcat Applications

Instruksi ini menunjukkan cara melindungi aplikasi yang berjalan di server **Tomcat** di platform. Kami merekomendasikan dua solusi cara membatasi akses ke aplikasi Anda:

  * [request the user authentication](<https://docs.dewacloud.com/docs/#authentication>)
  * [deny the access for specified IP addresses](<https://docs.dewacloud.com/docs/#deny-client-ip-addresses>)

Anda dapat memilih salah satu dari mereka atau menggunakan kedua metode bersama-sama.

## Authentication{#authentication}

Untuk mengatur autentikasi di depan aplikasi web Anda yang dideploy ke server Tomcat, lakukan konfigurasi berikut:

1\. Buka dashboard platform dan klik tombol **Config** di sebelah server Tomcat dalam environment Anda.

2\. Pergi ke folder **/opt/tomcat/conf** dan klik dua kali file _**tomcat-users.xml**_ untuk membukanya. Gunakan format string berikut untuk menentukan peran dan kredensial pengguna baru:

```xml
<user username="test" password="test" roles="admin">
```

![tomcat users](#)

Simpan perubahan yang dilakukan.

3\. Lalu navigasikan ke file _**web.xml**_ (terletak di folder **/opt/tomcat/conf** yang sama) dan tentukan pengaturan keamanan untuk pengguna yang baru dibuat.

```xml
<security-constraint> 
  <web-resource-collection>   
    <url-pattern>/*</url-pattern> 
  </web-resource-collection> 
  <auth-constraint>   
    <role-name>admin</role-name>   
    <role-name>user</role-name> 
  </auth-constraint> 
</security-constraint> 
<login-config> 
  <auth-method>BASIC</auth-method> 
  <realm-name>Test Realm</realm-name> 
</login-config> 
```

![web xml tomcat](#)

4\. Jangan lupa untuk **Save** perubahan dan **Restart** server aplikasi Tomcat Anda.

Jika Anda telah melakukan semuanya dengan benar, seorang pengguna akan bertemu dengan jendela autentikasi saat mencoba mengakses aplikasi.

![tomcat authentication](#)

## Deny Client IP Addresses{#deny-client-ip-addresses}

Jika Anda ingin menolak akses ke aplikasi web Anda untuk alamat IP klien tertentu, ikuti langkah berikut:

1\. Tekan tombol **Config** untuk server aplikasi Tomcat dalam environment tempat aplikasi Anda dideploy.

2\. Navigasikan ke folder **/opt/tomcat/webapps/ROOT/META-INF** dan buka file bernama _**context.xml**_.

3\. Masukkan string berikut ke dalam file **context.xml**:

```xml
<Context antiJARLocking="true" path="/">     
  <Valve className="org.apache.catalina.valves.RemoteIpValve" />     
  <Valve className="org.apache.catalina.valves.RemoteAddrValve" deny="{IP_address}" /> 
</Context> 
```

![context xml](#)

:::note 
Dalam kasus Anda telah melampirkan Public IP ke environment Anda, Anda dapat mengabaikan string ini: 
```xml
<Valve className="org.apache.catalina.valves.RemoteIpValve"/>
```
:::

4\. Tekan tombol **Save** dan **Restart** server Tomcat.

Setelah konfigurasi diatur, pengguna dengan alamat IP yang ditolak akan mendapatkan kesalahan HTTP Status 403 saat mencoba mengakses aplikasi Anda.

![access denied](#)

## Baca Juga{#whats-next}

  * [Tomcat Server](<https://docs.dewacloud.com/docs/tomcat/>)
  * [Java App & Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [NGINX-Balancer Security](<https://docs.dewacloud.com/docs/nginx-balancer-security/>)