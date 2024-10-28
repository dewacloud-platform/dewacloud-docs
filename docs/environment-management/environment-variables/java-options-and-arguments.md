---
sidebar_position: 2
slug: /java-options-and-arguments
title: Java Options and Arguments
---
# Opsi dan Argumen Java

Untuk memastikan efisiensi biaya, semua server Java yang dikelola platform dikonfigurasi secara otomatis agar memanfaatkan memori dengan cara yang paling menguntungkan. Hal ini dicapai dengan menyesuaikan parameter utama memori Java berdasarkan sumber daya yang dialokasikan ke container.

:::tip 
Server Java kustom (misalnya di dalam container Docker atau VPS) dapat dioptimalkan dengan cara yang sama menggunakan add-on Java Memory Agent. 
:::

Opsi default dapat diubah secara manual untuk memastikan kinerja tinggi atau untuk mendukung implementasi kustom apa pun.

1\. Untuk menyediakan semua [opsi Java](<https://docs.oracle.com/javase/7/docs/technotes/tools/windows/java.html#CBBIJCHG>) yang diinginkan sekaligus, file _**variables.conf**_ dapat digunakan.

Tergantung pada server aplikasi tertentu yang Anda gunakan, lokasi tepatnya mungkin berbeda:

  * **Tomcat**, **TomEE** \- _/opt/tomcat/conf/variables.conf_
  * **Jetty** \- _/opt/jetty/etc/variables.conf_
  * **Spring Boot** \- _/opt/shared/conf/variables.conf_
  * **GlassFish** \- _/opt/glassfish/glassfish/domains/domain1/config/variables.conf_
  * **Payara** \- _/opt/payara/glassfish/domains/domain1/config/variables.conf_
  * **WildFly** \- _/opt/wildfly/conf/variables.conf_

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/java-option-and-arguments/01-variables-conf-file.png" alt="file variables.conf untuk opsi Java" max-width="100%"/>

Jika diperlukan, Anda dapat [mengubah ulang opsi memori utama](<https://docs.dewacloud.com/docs/#redefining-main-java-parameters>) melalui variabel container.

2\. Jangan lupa untuk **Restart node** agar perubahan diterapkan.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/java-option-and-arguments/02-restart-nodes-button.png" alt="tombol restart nodes" max-width="100%"/>

Selesai! Sekarang aplikasi Anda berjalan dengan opsi Java kustom Anda.

## Mengubah Ulang Parameter Java Utama {#redefining-main-java-parameters}

Sebagian besar parameter memori esensial (_-Xms_, _-Xmn_, _-Xmx_, _-Xminf_, _-Xmaxf_, _-XX:MaxPermSize_, *-XX:+Use._GC_) dapat diubah ulang menggunakan [variabel](<https://docs.dewacloud.com/docs/container-variables/>) yang didedikasikan untuk environment.

Sebagai contoh, Anda dapat **Menambahkan** opsi _**-Xmx**_ (yaitu ukuran maksimum untuk memori heap Java):

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/java-option-and-arguments/03-memory-optimization-variables.png" alt="menambahkan variabel optimisasi memori Java" max-width="100%"/>

:::
tip Platform mendukung dua variabel tambahan yang memungkinkan pengaturan parameter RAM utama sebagai persentase dari total memori yang tersedia:
- XMS_DEF_PERCENT - ukuran awal (%) dari pool alokasi memori
- XMX_DEF_PERCENT - ukuran maksimum (%) dari pool alokasi memori
Nilai-nilai ini divalidasi secara otomatis - jika XMS lebih besar dari XMX, nilainya akan disetel sama dengan XMX. 
:::

## Variabel Khusus Spring Boot dan Java Engine {#spring-boot-and-java-engine-specific-variables}

Saat bekerja dengan template **Spring Boot** dan **Java Engine**, Anda dapat menyediakan dua [variabel](<https://docs.dewacloud.com/docs/container-variables/>):

  * _**JAVA_OPTS**_ \- untuk menyesuaikan opsi Java untuk aplikasi Anda (mirip dengan file _**variables.conf**_)
  * _**JAVA_ARGS**_ \- untuk memberikan beberapa argumen kustom ke fungsi utama aplikasi Anda

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/java-option-and-arguments/04-spring-boot-java-options-arguments.png" alt="variabel Spring Boot untuk opsi argumen Java" max-width="100%"/>

Jangan lupa untuk merestart server aplikasi Anda agar perubahan diterapkan.

## Baca Juga {#whats-next}

  * [Daftar Variabel](<https://docs.dewacloud.com/docs/environment-variables/>)
  * [Variabel Environment](<https://docs.dewacloud.com/docs/container-variables/>)
  * [Variabel Environment Kustom](<https://docs.dewacloud.com/docs/custom-environment-variables/>)