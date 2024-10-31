---
sidebar_position: 2
slug: /javaagent
title: Java Agent
---

# Java Agent Integration

**Java agent** adalah interceptor di depan metode utama aplikasi. Secara umum, ini adalah paket .jar yang dimuat secara statis dalam metode _PreMain-Class_, yang mengimplementasikan mekanisme untuk mendefinisikan ulang konten kelas yang sedang berjalan. Platform memungkinkan Anda untuk meluncurkan applet semacam itu secara otomatis saat startup (tepat setelah JVM diinisialisasi).

:::tip
Semua Java stacks yang bersertifikat platform menjalankan jelastic-gc-agent.jar Java agent sebagai bagian dari optimisasi standar. Ini melakukan panggilan GC penuh secara periodik untuk mengurangi penggunaan memori dan melepaskan RAM yang tidak terpakai kembali ke OS. Karena kontribusi platform terhadap pengembangan Java, fungsionalitas serupa telah diimplementasikan secara native sejak versi 12 dari JDK. Lihat Memory Agent add-on untuk mempelajari lebih lanjut tentang optimisasi otomatis platform dari Java stacks yang dikelola atau menggunakannya untuk mengoptimalkan container Java khusus.
<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-apps-specifications/java-agent/java-agent-1.png" alt="memory agent" width="100%"/>
:::

Ikuti langkah-langkah berikut untuk menambahkan custom Java agent ke dalam container:

1\. Masuk ke platform dashboard dengan kredensial Anda dan klik tombol **Config** untuk application server di lingkungan Java Anda:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-apps-specifications/java-agent/java-agent-2.png" alt="environment config button" width="100%"/>

2\. Dalam [configuration file manager](<https://docs.dewacloud.com/docs/configuration-file-manager>) yang terbuka, Anda dapat **Upload** file _**.jar**_ Java agent Anda ke lokasi yang diinginkan. Gunakan daftar **Actions** di panel atas (untuk folder saat ini) atau menu konteks saat mengarahkan kursor ke direktori tertentu. 

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-apps-specifications/java-agent/java-agent-3.png" alt="upload file to container" width="100%"/>

Berikan tautan ke file yang diperlukan atau temukan di mesin lokal untuk **Upload**.

3\. Selanjutnya, beralih ke file _**[variables.conf](<https://docs.dewacloud.com/docs/custom-environment-variables#java>)**_ (lokasi yang tepat bervariasi berdasarkan stack perangkat lunak tertentu) untuk menyediakan variabel kustom dan [JVM options](<https://docs.dewacloud.com/docs/java-options-arguments>). Di sini, Anda dapat menentukan parameter _javaagent_ dengan path ke file _**jar**_ yang diperlukan. Contohnya: _javaagent:/opt/tomcat/temp/my-java-agent.jar_ 

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-apps-specifications/java-agent/java-agent-4.png" alt="variables conf file" width="100%"/>

Jangan lupa untuk **Save** perubahan dengan tombol yang sesuai di atas editor.

4\. Untuk menerapkan pengaturan yang baru ditambahkan, Anda perlu **Restart Nodes** dari lapisan application server Anda menggunakan opsi dengan nama yang sama. 

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-apps-specifications/java-agent/java-agent-5.png" alt="restart nodes button" width="100%"/>

Itulah semuanya! Sekarang, custom Java agent Anda sudah berjalan.

## Baca Juga {#whats-next}

  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Custom Environment Variables](<https://docs.dewacloud.com/docs/custom-environment-variables/>)
  * [Java App Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [Upload JAR Files](<https://docs.dewacloud.com/docs/upload-jar-files/>)
  * [Garbage Collector Agent](<https://www.virtuozzo.com/company/blog/garbage-collection/>)