---
sidebar_position: 2
slug: /vps-adding-mail-server
title: Setting Mail Server Inside VPS
---

# Mengatur Mail Server di Dalam CentOS VPS

Dengan platform ini, Anda dapat mengintegrasikan mail server ke virtual private machine Anda. Di bawah ini, kami akan memandu Anda melalui langkah-langkah yang diperlukan untuk mendapatkannya di [CentOS VPS](https://docs.dewacloud.com/docs/vps-centos/). Untuk itu, Anda perlu mengakses container yang diperlukan melalui protokol SSH menggunakan alur koneksi yang disukai (misalnya, [klien berbasis web untuk CentOS](https://docs.dewacloud.com/docs/vps-centos/#ssh-client) dalam kasus kami) dan melaksanakan langkah-langkah berikut:

- [Menginstal dan Menguji Mail Server](#set-up-and-test-mail-server)
- [Mengkonfigurasi Jaringan yang Diotorisasi](#configure-postfix-authorized-networks)

## Menginstal dan Menguji Mail Server{#set-up-and-test-mail-server}

Dalam panduan saat ini, kita akan memanfaatkan mail server [Postfix](http://www.postfix.org/), jadi ikuti langkah-langkah berikut untuk menginstalnya dalam container VPS Anda dan memverifikasi apakah ia bekerja sebagaimana mestinya.

1. Jalankan penginstal Postfix dengan perintah _yum_ berikut:

![install postfix on vps](#)

2. Selama proses instalasi, Anda perlu mengonfirmasi (yaitu, tekan dan kirimkan respons ' _**y**_') poin-poin berikut:

- ukuran total unduhan ![postfix total download size](#)
- mengimpor kunci GPG ![postfix importing GPG key](#)

3. Ketika instalasi selesai, Anda dapat menguji operabilitas mail server dengan perintah berikut:

```
echo thisistestmail | mail -s test {your_email}
```

Di sini, _**\{your_email\}**_ adalah alamat email yang akan dikirimi email uji.

4. Sekarang, periksa kotak masuk email yang ditentukan untuk memastikan email telah dikirim.

![postfix test email](#)

Hebat! Email server telah diinstal dan kita dapat melanjutkan untuk menerapkan konfigurasi yang sesuai.

## Mengkonfigurasi Jaringan yang Diotorisasi Postfix{#configure-postfix-authorized-networks}

Untuk alur kerja yang tepat dari mail server Postfix yang baru diinstal, Anda mungkin perlu menerapkan beberapa pengaturan di file konfigurasi utamanya. Misalnya, Anda dapat menentukan secara manual daftar klien "terpercaya", yang akan dapat meneruskan email melalui Postfix:

1. Edit file _**main.cf**_, yang terletak di direktori **etc/postfix** dengan konten berikut:

- ketika Postfix seharusnya meneruskan email hanya dari mesin lokal, hapus komentar (hilangkan # di awal string) baris berikut:

```
mynetworks_style = host
```

- sebagai alternatif, Anda dapat menyesuaikan daftar klien "terpercaya" secara manual dengan menggunakan parameter berikut (dalam hal ini pengaturan sebelumnya akan diabaikan):

```
mynetworks = {server1 IP address}, {server2 IP address}
```

2. Setelah mengedit file konfigurasi, Anda perlu memuat ulang Postfix untuk menerapkan perubahan yang Anda buat.

```
/etc/init.d/postfix restart
```

3. Sekarang Anda dapat mengirim pesan dari klien yang telah ditentukan sebelumnya (mesin lokal atau server yang disebutkan).

Namun, Anda juga perlu menyesuaikan aplikasi Anda agar berfungsi dengan baik dengan mail server yang baru diinstal. Untuk itu, tambahkan kode tipe berikut ke file konfigurasi aplikasi Anda yang terpasang ke container VPS.

```java
package com.mkyong.common;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMailTLS {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "false");
        props.put("mail.smtp.starttls.enable", "false");
        props.put("mail.smtp.host", "host");
        props.put("mail.smtp.port", "25");

        try {
            Session session = Session.getInstance(props);
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress("from-email@jelastic.com"));
            message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse("to-email@jelastic.com"));
            message.setSubject("Testing Subject");
            message.setText("Text of the message");
            Transport.send(message);

            System.out.println("Done");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
```

Itu saja. Mail server telah berhasil disesuaikan untuk bekerja dengan aplikasi yang terpasang ke container VPS.

:::note
Beberapa pengaturan mungkin berbeda tergantung pada instalan PaaS yang saat ini digunakan (misalnya, platform penyedia hosting). Lihat dokumentasi resmi Postfix untuk mengungkap lebih banyak detail mengenai konfigurasi mail server yang diperlukan.
:::

## Baca Juga{#whats-next}

- [Elastic VPS Overview](https://docs.dewacloud.com/docs/vps/)
- [VPS Configurations](https://docs.dewacloud.com/docs/vps-configuration/)
- [Java Console Application](https://docs.dewacloud.com/docs/vps-standalone-application/)
- [Windows VPS Use Cases](https://docs.dewacloud.com/docs/win-vps-roles-features/)