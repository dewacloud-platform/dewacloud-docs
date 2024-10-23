---
sidebar_position: 3
slug: /custom-environment-variables
title: Custom Environment Variables
---
# Variabel Lingkungan Kustom

Variabel lingkungan merupakan semacam placeholder, di mana Anda dapat menyimpan nilai parameter yang sering digunakan atau string sehingga Anda tidak perlu menentukannya secara manual dalam kode setiap kali dibutuhkan. Terdapat sejumlah [variabel lingkungan default](<https://docs.dewacloud.com/docs/environment-variables/>) yang telah dikonfigurasi sebelumnya dan dapat digunakan dalam kode aplikasi Anda, atau bahkan disesuaikan sebelum pembuatan node untuk menerapkan beberapa penyesuaian, sehingga mempermudah Anda dalam bekerja dengan platform.

Dalam panduan ini, kami akan menjelaskan cara-cara paling umum untuk menambahkan variabel kustom Anda untuk node apa pun dalam platform:

- [melalui bagian _variables_ khusus di dashboard](<https://docs.dewacloud.com/docs/#dashboard>)
- [menggunakan _file konfigurasi shell_](<https://docs.dewacloud.com/docs/#shell>)
- [melalui file _variables.conf_ (khusus untuk Java)](<https://docs.dewacloud.com/docs/#java>)

## Menyesuaikan Variabel Lingkungan melalui UI{#customize-environment-variables-via-ui}

1. Arahkan kursor ke grup node di dashboard, buka daftar **Additionally**, dan pilih opsi _**Variables**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/01-environment-variables-dashboard.png" alt="environment variables dashboard" width="100%"/>

2. Dalam jendela yang terbuka, Anda dapat menyesuaikan daftar variabel lingkungan sesuai kebutuhan (menggunakan tombol di panel alat).

**Catatan:** Implementasi platform untuk kontainer Docker memungkinkan penggunaan variabel lingkungan yang ada untuk mendefinisikan variabel lainnya. Misalnya, nilai _**MY$HOME**_ akan otomatis diubah menjadi ****MY\**** (atau yang serupa berdasarkan nilai variabel _HOME_).

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/02-manage-environment-variables-via-ui.png" alt="manage environment variables ui" width="100%"/>

Jangan lupa untuk menekan tombol **Apply** setelah Anda melakukan perubahan.

## Mengatur Variabel Lingkungan melalui Konfigurasi Shell{#set-up-environment-variables-via-shell-configs}

Anda dapat menyediakan variabel kustom menggunakan file konfigurasi shell:

- _**~/.bash_profile**_ hanya dieksekusi saat login melalui konsol
- _**~/.bashrc**_ dieksekusi untuk setiap instance bash baru

Untuk membantu Anda dalam pemeliharaan file-file ini, platform secara otomatis menyertakan sumber konfigurasi _**bashrc**_ dalam _**.bash_profile**_. Dengan cara ini, Anda bisa menyediakan variabel kustom melalui file sebelumnya saja:

1. Buat koneksi [SSH](<https://docs.dewacloud.com/docs/ssh-access/>) ke kontainer Anda. Sebagai contoh, kami akan menggunakan klien **Web SSH** yang disematkan:

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/03-web-ssh-button.png" alt="web ssh button" width="100%"/>

2. Buat atau sesuaikan file _**.bashrc**_ di direktori home dengan menambahkan variabel kustom Anda dalam format berikut:

```bash
export {var_name} = {var_value}
```

di mana:

- `{var_name}` adalah nama variabel yang ingin Anda tentukan
- `{var_value}` adalah nilai dari variabel tersebut

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/04-export-custom-variables-ssh.png" alt="export custom variables via shell" width="100%"/>

3. Sekarang, setiap instance bash baru akan disertai dengan variabel kustom Anda. Untuk menerapkan pengaturan baru pada sesi saat ini, segarkan sumbernya dengan perintah berikut. Setelah itu, verifikasi ketersediaan variabel baru:

```bash
source ~/.bashrc
echo $ {var_name}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/05-verify-custom-variables-availability-ssh.png" alt="verify custom variable availability ssh" width="100%"/>

Seperti yang Anda lihat, perubahan berhasil diterapkan.

## Menyesuaikan Variabel Lingkungan Java melalui Konfigurasi Manager{#adjust-java-environment-variables-via-configuration-manager}

Proses sederhana berikut berlaku sama untuk semua server aplikasi Java yang dikelola oleh platform.

1. Klik tombol **Config** untuk server aplikasi Anda untuk mengakses [manajer file kontainer](<https://docs.dewacloud.com/docs/configuration-file-manager>).  

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/06-configuration-file-manager-button.png" alt="configuration file manager button" width="100%"/>

2. Di tab yang terbuka, navigasikan ke file _**variables.conf**_ dalam salah satu lokasi berikut:

- **Tomcat**, **TomEE** \- _/opt/tomcat/conf/variables.conf_
- **Jetty** \- _/opt/jetty/etc/variables.conf_
- **Spring Boot** \- _/opt/shared/conf/variables.conf_
- **GlassFish** \- _/opt/glassfish/glassfish/domains/domain1/config/variables.conf_
- **Payara** \- _/opt/payara/glassfish/domains/domain1/config/variables.conf_
- **WildFly** \- _/opt/wildfly/conf/variables.conf_

3. Di sini, Anda dapat menyediakan variabel kustom Anda (setiap variabel harus dipisahkan oleh spasi atau dimulai dari baris baru) atau [menyesuaikan opsi Java](<https://docs.dewacloud.com/docs/java-options-arguments>) untuk aplikasi Anda. Contoh:  
_**-Dvar1=value1 -Dvar2=value2**_  
_**-Dmy.var3=/my/value**_

<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/07-custom-environment-variables-java.png" alt="custom environment variables java" width="100%"/>

:::tip
Sebagai alternatif, beberapa server aplikasi (misalnya GlassFish, Payara, WildFly) dilengkapi dengan panel admin yang juga memungkinkan untuk menambahkan opsi JVM dan variabel kustom.
:::

Jangan lupa untuk **Save** konfigurasi yang telah Anda buat.

4. **Restart node** server aplikasi Anda untuk menerapkan perubahan.
<img src="https://assets.dewacloud.com/dewacloud-docs/environment-management/environment-variables/custom-environment-variables/09-restart-nodes-button.png" alt="restart nodes button" width="100%"/>

5. Variabel baru dapat dipanggil melalui kode Java Anda dengan menggunakan metode _System.getProperty(“your_variable”)_ untuk menetapkan nilai yang ditentukan ke argumen yang dibutuhkan. Contohnya:

- String **var1** = System.getProperty("**var1**");
- String **var2** = System.getProperty("**var2**");
- String **var3** = System.getProperty("**my.var3**");

Sekarang, Anda dapat menyesuaikan kode aplikasi Anda menggunakan variabel baru ini.

## Baca Juga{#whats-next}

- [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
- [Java Options and Arguments](<https://docs.dewacloud.com/docs/java-options-arguments/>)
- [SSH Access](<https://docs.dewacloud.com/docs/ssh-access/>)
- [Configuration File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)