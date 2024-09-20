---
sidebar_position: 3
slug: /remote-access-to-ejb-on-glassfish
title: Remote Access to EJB on GlassFish
---

# Remote Access to EJB on GlassFish

**Enterprise Java Beans** (EJB) adalah bagian dari arsitektur sisi server di Java EE. Spesifikasinya mengandung dua jenis tampilan klien: remote dan local. Dalam satu kasus, aplikasi Java Anda mungkin memerlukan sesi dan beans entitas dengan antarmuka home dan komponen lokal, dan dalam kasus lain - dengan antarmuka remote.

Mari kita cari tahu apa perbedaan antara antarmuka ini dan mana yang perlu Anda pilih untuk bekerja dengannya.

Jika Anda yakin bahwa klien lain dan EJB akan mengakses bean Anda melalui JVM tunggal, Anda dapat menggunakan _**local client view**_. Ini juga cocok untuk kasus di mana beans Anda terkait satu sama lain. Akses semacam itu dilakukan dengan panggilan metode langsung, bukan melalui remote method invocation (RMI).

Untuk kasus klien Anda ditempatkan pada JVM lain, yaitu Anda ingin menggunakan bean Anda dalam lingkungan terdistribusi, maka ada kebutuhan untuk bekerja dengan _**remote client view**_. Semua panggilan metode dari antarmuka remote akan ditangani olehnya. Lebih disukai menggunakan RCV saat bekerja dengan parameter, yang diteruskan berdasarkan nilai antara aplikasi klien dan bean.

Mari kita periksa cara untuk mendistribusikan Java Bean ke hosting PaaS dan menggunakan klien remote EJB untuk bekerja dengannya.

### A. Create the environment{#a-create-the-environment}

1\. Masuklah ke akun PaaS Anda.

2\. Klik tombol **Create environment** untuk membuka wizard topologi environment. Pilih **GlassFish** sebagai application server Anda dan atur batasan cloudlet sesuai dengan kebutuhan konsumsi sumber daya aplikasi Java enterprise Anda. Aktifkan **Public IP** untuk GlassFish, ketik nama untuk environment Anda dan klik **Create**. 

![remote access to ejb glassfish create environment with glassfish](#)

Tunggu sekitar satu menit untuk environment Anda dibuat.

3\. Untuk melihat **Public IP** server GF Anda tekan tombol tambahan di sebelahnya. 

![glassfish public ip](#)

### B. Create the application{#b-create-the-application}

1\. Pada awalnya, buat direktori baru untuk menempatkan berkas aplikasi EJB dan klien Anda.

2\. Lalu buat **Session Bean** Anda. Ini akan digunakan untuk mengakses aplikasi yang didistribusikan melalui aplikasi klien remote melalui pelaksanaan tugas-tugas bisnis di dalam server.

```java
package com; 
import javax.ejb.Stateless;

@Stateless 
public class EJBTest implements EJBTestRemote { 
    @Override 
    public String getName(String name) { 
        return "name is: " + name; 
    } 
}
```

3\. Langkah berikutnya adalah membuat antarmuka **Enterprise Java Beans**. Ini diperlukan bagi klien remote untuk mengakses beans.

```java
package com;
import javax.ejb.Remote;

public interface EJBTestRemote {
    public String getName (String name);
}
```

4\. Bangun modul baru dan kemas dalam berkas dengan ekstensi **.ear**.

5\. Kode berikut ini adalah contoh aplikasi klien remote yang digunakan untuk mengakses bean. Ini melakukan koneksi remote ke EJB Anda melalui Public IP dari GlassFish application server dan memanggil metode **getName()**, yang pada gilirannya mengembalikan data ke klien.

```java
package ejbclient;
import com.EJBTestRemote;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class Main { 
    private static InitialContext ic; 
    //private String host="",port=""; 

    public void loadProperties(String h, String p) {
        try {
            Properties props = new Properties();

            System.out.println("h: " + h + " p: " + p);

            props.setProperty("java.naming.factory.initial",
                    "com.sun.enterprise.naming.SerialInitContextFactory");
            props.setProperty("java.naming.factory.url.pkgs",
                    "com.sun.enterprise.naming");
            props.setProperty("java.naming.factory.state",
                    "com.sun.corba.ee.impl.presentation.rmi.JNDIStateFactoryImpl");
            props.setProperty("org.omg.CORBA.ORBInitialHost", h);
            props.setProperty("org.omg.CORBA.ORBInitialPort", p);

            ic = new InitialContext(props);
        } catch (NamingException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String a[]) { 
        try { 
            new Main().loadProperties("{GlassFish_Public_IP}", "23700"); 
            EJBTestRemote etr = (EJBTestRemote) ic.lookup("com.EJBTestRemote"); 
            System.out.println(etr.getName("Jelastic"));
        } catch (NamingException ex) {
        }
    }
}
```

**Catatan:** Semua nomor port dimulai dengan 2 digit tambahan karena platform hanya bekerja dengan **gfcluster**.

Sebagai contoh berkas **.ear** Anda dapat menggunakan [paket ini](<https://download.jelastic.com/public.php?service=files&t=5af859deae8519d5b58dbdb2d09fef80&download>).

### C. Deploy the application{#c-deploy-the-application}

1\. Arahkan ke platform dashboard, buka **Deployment manager** dan unggah **.ear** yang telah dibuat di dalamnya. Semoga tutorial ini membantu Anda untuk memahami dasar-dasar penggunaan antarmuka remote. Nikmati!

![upload archive](#)

2\. Sebarkan paket yang diunggah ke environment GlassFish, yang dibuat dalam langkah A dari instruksi ini.

![deploy archive](#)

3\. Akhirnya, jalankan aplikasi Anda (tekan tombol **Open in browser** di sebelah environment-nya) dan periksa hasilnya. 

![upload archive](#)

Semoga tutorial ini membantu Anda memahami penggunaan dasar antarmuka remote. Nikmati!

## Baca Juga {#whats-next}

  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
  * [Deploy Java Application via Archive/URL](<https://docs.dewacloud.com/docs/upload-deploy-application/>)