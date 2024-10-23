---
sidebar_position: 16
slug: /remote-debugging
title: Remote Debugging
---
# Remote Debugging

Remote debugging memungkinkan Anda menghubungkan IDE Anda dengan aplikasi yang berjalan di platform menggunakan IP Publik. Berikut panduan langkah demi langkah untuk mengatur remote debugging untuk aplikasi Java Anda:

## Bagaimana Remote Debugging Bekerja?

Debugging jarak jauh Java didasarkan pada mekanisme listener binding:
- Aplikasi yang akan di-debug menghubungkan soket dan mendengarkan instruksi debugging.
- Debugger terhubung ke soket dan mengirimkan instruksi.

## Langkah-langkah untuk Mengatur Remote Debugging

### 1. Buat Environment

1. Masuk ke dashboard platform.
2. Klik **Create environment**.
3. Pilih instansi (misal, **Tomcat**), atur batas cloudlet, dan aktifkan **external IP**. Beri nama environment dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/01-create-environment.png" alt="create environment" width="100%"/>

4. Setelah environment dibuat, klik tombol **Additionally** untuk instansi tersebut untuk melihat **Public IP**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/03-public-ip.png" alt="public IP" width="100%"/>

### 2. Deploy Aplikasi

1. Unggah paket Java Anda ke **Deployment Manager**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/04-upload-archive.png" alt="upload archive" width="100%"/>

2. Deploy aplikasi ke environment yang baru dibuat.

Sebagai contoh, mari kita deploy aplikasi Java sederhana:

```java
package com;

public class RemoteDebugger {
    public void start () {
        int a, b, c;
        a = 1;
        System.out.println("a = " + a);
        b = 2;
        System.out.println("b = " + b);
        c = 3;
        System.out.println("c = " + c);
    }
}
```

### 3. Konfigurasi Debugging di IDE Anda

1. Buka aplikasi di IDE Anda (misal, **NetBeans**) dan buat debugger baru (**Debug main project > Attach Debugger**).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/06-netbeans-attach-debugger.png" alt="NetBeans attach debugger" width="100%"/>

2. Pilih jenis konektor, masukkan alamat **Public IP** Anda, dan tentukan port yang ingin Anda dengarkan (misal, port 5000).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/07-netbeans-debugger-connection.png" alt="NetBeans debugger connection" width="100%"/>

### 4. Konfigurasi Debugging pada Tomcat

1. Di dashboard platform, klik **Config** untuk **Tomcat**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/08-tomcat-config.png" alt="Tomcat config" width="100%"/>

2. Navigasikan ke file `variables.conf` dan tambahkan argumen berikut:

```bash
-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5000
```

Konfigurasi ini memberitahu JVM untuk:
- **-Xdebug**: Menjalankan aplikasi dalam mode debug.
- **-Xrunjdwp**: Memberikan parameter debug (port 5000 dalam hal ini).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/09-configure-tomcat-variables.png" alt="configure Tomcat variables" width="100%"/>

:::note Pastikan nomor port sama pada `variables.conf` dan konfigurasi debugger IDE Anda. :::

3. Simpan perubahan dan **Restart** Tomcat.

### 5. Mulai Debugging

1. Tetapkan breakpoint pada kode Anda (misal, sebelum inisialisasi variabel ketiga).

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/10-netbeans-code-break-point.png" alt="NetBeans code break point" width="100%"/>

2. Mulai debugger dari IDE Anda dan verifikasi perilaku aplikasi.

Periksa **Tomcat logs** untuk melihat hasilnya:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/11-tomcat-logs-before-break-point.png" alt="Tomcat logs before break point" width="100%"/>

Setelah mencapai breakpoint, variabel hingga breakpoint akan diinisialisasi.

### 6. Modifikasi Breakpoint

Anda dapat menyesuaikan breakpoint lebih jauh ke dalam kode untuk menginisialisasi semua variabel.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/12-netbeans-break-point-next-line.png" alt="NetBeans break point next line" width="100%"/>
<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/13-tomcat-logs-after-break-point.png" alt="Tomcat logs after break point" width="100%"/>

### Remote Debugging untuk Jetty dan GlassFish

#### Jetty
Instruksi sama untuk Jetty.

#### GlassFish
Untuk **GlassFish**:
1. Masuk ke **GlassFish Admin Console** menggunakan kredensial yang dikirim ke email Anda.
2. Navigasikan ke **gfcluster-config > JVM Settings > General tab > Debug options**.
3. Tambahkan **-Xdebug** dan **-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5000** ke **JVM options**.
4. Simpan perubahan dan restart GlassFish.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/remote-debugging/16-glassfish-jvm-settings.png" alt="GlassFish JVM settings" width="100%"/>

## Baca Juga

- [WebSockets](https://docs.dewacloud.com/docs/websockets/)
- [Email via External SMTP](https://docs.dewacloud.com/docs/email-via-external-smtp/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)