---
sidebar_position: 2
slug: /maven-configuration
title: Maven Configuration
---

# Maven Build Node Configuration

**Maven** adalah alat untuk kompilasi dan manajemen proyek Java. Di PaaS, Maven tersedia secara langsung untuk menutupi semua tahap utama dari siklus hidup aplikasi Java Anda - mulai dari proses pembangunan & penerapan hingga dorongan ke produksi.

Semua pengaturan server Maven yang dapat disesuaikan dapat diatur dan/atau diubah dengan:

  * [configuration files](#maven-configuration-files)
  * [environment variables](#maven-specific-variables)

## Maven Configuration Files{#maven-configuration-files}

File konfigurasi utama dari node build Maven dapat ditemukan dalam direktori server berikut:

Folder | Path  
---|---  
[PROJECTS](#projects) | _/var/lib/jelastic/PROJECTS_  
[conf](#conf) | _/opt/maven/conf_  
[hooks](#hooks) | _/var/lib/jelastic/hooks_  
[latest](#latest) | _/usr/java/latest_  
[keys](#keys) | _/var/lib/jelastic/keys_  
[vcs](#vcs) | _/var/lib/jelastic/vcs_  
  
### PROJECTS{#projects}

Folder **PROJECTS** digunakan untuk menyimpan file dari proyek yang telah dibongkar yang ditambahkan ke, dibangun dan diterapkan melalui node Maven.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-1.png" alt="Maven configs PROJECTS folder" max-width="100%"/>

### conf{#conf}

Direktori **conf** berisi file berikut:

  * _**[settings.xml](<https://maven.apache.org/ref/3.5.3/maven-settings/settings.html>)**_ \- berisi konfigurasi utama Maven
  * _**[toolchains.xml](<https://maven.apache.org/guides/mini/guide-using-toolchains.html>)**_ \- memungkinkan untuk menetapkan JDK mana (atau alat lain) yang harus digunakan oleh plugin embedded selama pembangunan proyek
  * _**[variables.conf](<https://docs.dewacloud.com/docs/java-application-server-config#s>)**_ \- digunakan untuk menetapkan variabel kustom Anda, untuk mengkonfigurasi pengaturan memori, dll

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-2.png" alt="Maven configs conf folder" max-width="100%"/>

### hooks{#hooks}

Folder **hooks** menyimpan skrip kustom (disebut [hooks](<https://docs.dewacloud.com/docs/deployment-hooks/>)), yang harus dieksekusi sebelum atau setelah operasi pembentukan/deploy aplikasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-3.png" alt="Maven configs hooks folder" max-width="100%"/>

### keys{#keys}

Direktori **keys** digunakan sebagai lokasi untuk mengunggah private keys yang dibutuhkan untuk aplikasi Anda.

Cukup buat key Anda, simpan sebagai file sederhana dan unggah ke folder **keys**. Sekarang, Anda dapat menggunakannya untuk kasus yang berbeda (misalnya untuk autentikasi antar node) dengan hanya menyatakan path yang sesuai _**/var/lib/jelastic/keys/\{key\}**_.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-4.png" alt="Maven configs keys folder" max-width="100%"/>

### latest{#latest}

Folder **latest** berisi semua perpustakaan JDK, alat, binari, dll. Di sini, Anda dapat mengedit file yang sudah tersedia atau mengunggah tambahan jika diperlukan.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-5.png" alt="Maven configs latest folder" max-width="100%"/>

### vcs{#vcs}

Dalam direktori **vcs**, Anda dapat menemukan daftar file _**\{project_name\}.properties**_ yang berisi semua informasi tentang proyek Anda. Namun, file konfigurasi ini tidak dapat diedit, tetapi dapat dilihat untuk memeriksa parameter untuk proyek tertentu.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-6.png" alt="Maven configs vcs folder" max-width="100%"/>

## Maven-Specific Variables{#maven-specific-variables}

Selain konfigurasi file-file, node build Maven dapat dikelola dengan menyediakan (atau mengatur) beberapa environment variables, yang terintegrasi secara khusus untuk templat stack ini:

1\. Klik tombol **Additionally** di samping node Maven Anda dan navigasikan ke bagian **Variables**.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-7.png" alt="environment variables button" max-width="100%"/>

2\. Dalam jendela yang terbuka, Anda akan melihat daftar variabel default untuk stack, yang dapat disesuaikan sesuai dengan kebutuhan Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/java/maven-build-nodes/maven-configuration/maven-configuration-1.png" alt="Maven build node environment variables" max-width="100%"/>

Di bawah ini, variabel khusus Maven terdaftar:

  * _**MAVEN_OPTS**_ \- memungkinkan untuk mendefinisikan nilai untuk opsi server Java yang paling penting, misalnya _-Xmx_, _-Xms_, _-Xmn_, dll
  * _**MAVEN_RUN_ARGS**_ \- menetapkan [Maven command-line parameters](<http://maven.apache.org/ref/3.1.0/maven-embedder/cli.html>) tambahan, yang harus diatur untuk semua proyek Maven (misalnya, untuk menentukan jumlah thread proses)
  * _**MAVEN_RUN_ARGS_\{project\}**_ \- menetapkan parameter tambahan untuk proyek tertentu; catat bahwa nama _**\{project\}**_ harus dinyatakan dengan garis bawah "___" alih-alih spasi dan tanda hubung
  * _**MAVEN_DEPLOY_ARTIFACT**_ \- mendefinisikan artifact yang akan didistribusikan (semua proyek)
  * _**MAVEN_DEPLOY_ARTIFACT_\{project\}**_ \- menyediakan artifact untuk proyek tertentu (prioritas lebih tinggi daripada _MAVEN_DEPLOY_ARTIFACT_)

Dengan cara ini, dengan platform, Anda dapat mengambil kontrol penuh atas node build Maven dan mengkonfigurasinya sesuai kebutuhan spesifik dari proyek Java Anda.

## Baca Juga {#whats-next}

  * [Java Deployment with Maven](<https://docs.dewacloud.com/docs/java-vcs-deployment/>)
  * [File Manager](<https://docs.dewacloud.com/docs/configuration-file-manager/>)
  * [Environment Variables](<https://docs.dewacloud.com/docs/environment-variables/>)
