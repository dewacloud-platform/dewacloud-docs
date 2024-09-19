---
sidebar_position: 1
slug: /run-java-console-application
title: Run Java Console Application
---

# Aplikasi Konsol Java dengan CentOS VPS

Dalam tutorial ini kami akan meninjau cara menginstal sampel aplikasi konsol Java ke virtual private server [CentOS](https://www.virtuozzo.com/application-platform-docs/vps-centos/) Anda dan memeriksa operasionalitasnya. Untuk itu, Anda perlu menjalankan operasi berikut:

- [menginstal Java](https://docs.dewacloud.com/#install-java)
- [mengunggah aplikasi](https://docs.dewacloud.com/#upload)
- [mengakses aplikasi via SSH](https://docs.dewacloud.com/#access-via-ssh)
- [memeriksa operasionalitas aplikasi](https://docs.dewacloud.com/#operability)

## Instal Java ke VPS{#install-java-to-vps}

Untuk menginstal Java ke container VPS Anda, lakukan langkah-langkah berikut, sambil terhubung melalui protokol SSH dengan menggunakan [SSH Gate](https://docs.dewacloud.com/vps-ssh-gate/) atau [public IP](https://docs.dewacloud.com/vps-public-ip/).

1. Masukkan perintah berikut untuk memulai unduhan paket _Java_.

```
wget {utility_address}
```

Di mana _**\{utility_address\}**_ adalah tautan ke sumber unduhan Java yang diperlukan.

:::note
Parameter _AuthParam_ yang sesuai harus ditentukan dalam URL, yang menunjukkan bahwa Anda telah menerima perjanjian lisensi Oracle dan dapat mengunduh perangkat lunak dengan bebas.
:::

![install java vps ssh](#)

2. Selanjutnya, jalankan perintah di bawah ini untuk mengekstrak paket _Java**rpm**_ yang sebelumnya diunduh.

```
rpm -ivh {java_rpm_package}
```

Di mana _**\{java_rpm_package\}**_ adalah paket _Java_ yang diunduh dengan parameter _AuthParam_ ditentukan.

![vps execute java rpm](#)

3. Dan sekarang mari kita periksa, apakah semuanya sudah diatur dengan benar dengan mengecek versi Java yang terinstal.

```
java -version
```

![java version vps](#)

Bagus! Java berhasil diinstal, jadi mari kita lanjutkan ke pengunggahan aplikasi.

## Unggah Aplikasi ke VPS{#upload-application-to-vps}

Siapkan aplikasi Java Anda untuk diunggah ke container VPS. Anda dapat menggunakan contoh berikut, yang akan mendengarkan port yang ditentukan untuk koneksi:

```java
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class VdsSocket {

    public static void main(String[] args) {
        try {
            int port = 7777;
            InetAddress thisIp = null;
            ServerSocket ss = new ServerSocket(port);

            System.out.println("**********************************************************************");
            System.out.println("Socket Listener listens port: " + port);
            System.out.println("**********************************************************************");

            while (true) {
                Socket s = ss.accept();
                String address = s.getRemoteSocketAddress().toString();
                System.out.println("new client has been detected:");
                System.out.println("Socket. Remote Address: " + address);

                ObjectOutputStream oos = new ObjectOutputStream(s.getOutputStream());

                oos.writeObject("Request time: " + new Date());
                oos.writeObject("Socket. Remote Address: " + address);
            }
        } catch (IOException ex) {
        }
    }
}
```

Setelah aplikasi Anda siap, Anda perlu mengemasnya ke dalam arsip _**.jar**_ dan mengunggahnya ke container VPS melalui klien transfer file yang dipilih. Dalam contoh kami, kami akan mengunggah file [vdssocket.jar](<vdssocket.jar>) menggunakan alat [WinSCP](https://winscp.net/eng/index.php). Untuk itu, mari lakukan langkah-langkah berikut.

1. Akses klien WinSCP dan hubungkan ke container VPS Anda menggunakan kredensial yang diterima melalui email saat instalasi server:

   - **Host name** - Public IP address yang terpasang
   - **User name** - login (mis. _root_)
   - **Password** - password yang diterima

![winscp connect to vps](#)

Klik tombol **Login** untuk memulai pengaturan koneksi.

2. Setelah terhubung ke node VPS Anda, navigasikan ke direktori _**home**_ dan buat konteks _**standalone_java**_ baru di dalamnya. Kemudian ambil file _**.jar**_ yang diperlukan dengan aplikasi Anda dan letakkan ke dalam folder yang baru dibuat.

![upload java app to vps](#)

Dalam dialog pengaturan transfer yang muncul, klik **Copy** untuk memulai pengunggahan. Setelah selesai, Anda akan melihat file tersebut di direktori pada remote VPS.

## Akses Aplikasi via SSH{#aссess-application-via-ssh}

Akses container VPS Anda melalui [protokol SSH](https://docs.dewacloud.com/ssh-access/) untuk menemukan aplikasi yang baru saja diunggah.

1. Pindah ke direktori yang Anda buat di bagian sebelumnya dan periksa isinya untuk memastikan arsip aplikasi ada.

```
cd /home/standalone_java/
ls
```

![java standalone application directory](#)

2. Untuk menjalankan aplikasi yang diunggah, jalankan perintah berikut dari dalam direktori _**standalone_java**_.

```
java -jar vdssocket.jar
```

![vps run java application](#)

Selesai! Sekarang, seperti yang bisa Anda lihat, port yang ditentukan sedang didengarkan.

## Memeriksa Operasionalitas Aplikasi{#check-application-operability}

Untuk memeriksa alur kerja aplikasi yang benar, kita akan terhubung ke container VPS melalui protokol [Telnet](https://en.wikipedia.org/wiki/Telnet). Untuk itu, [pasang](https://technet.microsoft.com/en-us/library/cc771275%28v=ws.10%29.aspx#bkmk_installcmd) klien Telnet dan jalankan.

1. Tetapkan koneksi ke container VPS Anda dengan menjalankan perintah berikut:

```
o {public_IP_address} {port_number}
```

di mana

- _**public_IP_address**_ adalah IP eksternal yang terpasang
- _**port_number**_ adalah port yang aplikasi Anda dengarkan

![vps telnet test](#)

2. Jika semuanya berfungsi dengan baik, Anda akan ditampilkan sebuah pesan dengan data tentang **Request time** dan **Remote address**.

![telnet request time remote address](#)

3. Sekarang, setelah kembali ke alat SSH Anda, Anda akan melihat pemberitahuan tentang klien baru yang terhubung ke server Anda dan **Remote Address**-nya.

![vps new client connection](#)

Itu saja. Aplikasi konsol Java Anda telah diatur dan berfungsi dengan baik!

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/vps/)
- [VPS Configuration](https://docs.dewacloud.com/vps-configuration/)
- [Setting Mail Server Inside VPS](https://docs.dewacloud.com/adding-mail-server-vps/)
- [Windows VPS Use Cases](https://docs.dewacloud.com/win-vps-roles-and-features/)