---
sidebar_position: 1
slug: /glassfish-server
title: GlassFish Server
---

# GlassFish

**[GlassFish](<https://glassfish.java.net/>)** adalah proyek server aplikasi open source yang dimulai oleh Sun Microsystems untuk platform Java EE dan sekarang disponsori oleh Oracle Corporation. Versi yang didukung disebut Oracle GlassFish Server. GlassFish adalah perangkat lunak bebas, yang dilisensikan ganda di bawah dua lisensi perangkat lunak bebas: Common Development and Distribution License (CDDL) dan GNU General Public License (GPL) dengan pengecualian classpath.

GlassFish menyediakan keandalan dan kinerja tingkat enterprise dengan clustering penuh dan memiliki rentang fungsionalitas yang luas. Yang menarik adalah memungkinkan Anda untuk mengelola repository pusat melalui panel admin, yang mendukung semua fitur yang tersedia di GlassFish. Namun, seperti yang Anda tahu, lebih banyak fungsi = lebih banyak sumber daya.

## GlassFish Installation{#glassfish-installation}

Untuk mendapatkan server GlassFish di platform, cukup:

1\. Masuk ke dashboard PaaS Anda dan klik **New Environment.**

2\. Beralih ke tab **Java** dan pilih **GlassFish** dalam bagian server aplikasi seperti yang ditunjukkan pada gambar di bawah ini:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-server/glassfish-server-1.png" alt="use java" width="100%"/>

3\. Setelah environment dibuat, Anda dapat mengklik tombol **Open in browser** di sebelah server GlassFish yang dibentuk (perluas environment di panel _Environments_ di bagian atas layar):

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-server/glassfish-server-2.png" alt="glassfish 02serv run" width="100%"/>

4\. Sekarang Anda dapat mengunggah paket aplikasi Java WAR dan [mendeploy](<https://docs.dewacloud.com/docs/upload-deploy-application>) nya ke environment.

5\. Panel administrasi Glassfish dapat diakses langsung dari dashboard platform:

<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-server/glassfish-server-3.png" alt="glassfish 03dash" width="100%"/>
 Halaman Admin akan tersedia di tab baru.

:::note 
Platform ini menggunakan gfcluster sebagai kluster, jadi jika Anda ingin memodifikasi sesuatu, silakan terapkan perubahan ke gfcluster. 
<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-server/glassfish-server-4.png" alt="gfcluster" width="100%"/>
Jika Anda memiliki Public IP yang terpasang pada node server aplikasi, port panel admin GlassFish default (4848) dapat diubah dalam file /opt/glassfish3/glassfish/domains/domain1/config/domain.xml (sebagai shortcut server di Favorites) dengan menambahkan string berikut:

```xml
<http-listener id="admin-listener" port="4848" address="0.0.0.0" default-virtual-server="__asadmin" server-name=""/>
```
<img src="https://assets.dewacloud.com/dewacloud-docs/java/java-app-servers/glassfish/glassfish-server/glassfish-server-5.png" alt="glassfish public ip" width="100%"/>

Glassfish Derby Internaldatabase dimatikan secara default untuk mengurangi konsumsi sumber daya.
:::

## Resource Consumption{#resource-consumption}

Jika kita membandingkan berbagai server aplikasi, GlassFish mulai terlihat sedikit seperti pengguna sumber daya yang rakus, tetapi kerakusannya terimbangi oleh fungsionalitas, keandalan, dan banyak keunggulan lainnya yang diberikan.

Konfigurasi kontainer servlet | Sumber daya yang dikonsumsi oleh environment  
---|---
Idle| Dengan panel admin yang diluncurkan  
1 GF| 530-540 Mb (5 cloudlet)| 800-820 Mb (7 cloudlets)  
2 GF (HA off)| 820-830 Mb (9 cloudlets)| 980-1000 Mb (10 cloudlets)  
3 GF| 1050-1060 Mb (11 cloudlets)| 1210-1220 Mb (13 cloudlets)  
4 GF (HA off)| 1430-1450 Mb (14 cloudlets)| 1560-1580 Mb (15 cloudlets)  
2 GF (HA on)| 830-850 Mb (9 cloudlets)| 1030-1050 Mb (10 cloudlets)  
4 GF (HA on)| 1360-1380 Mb (14 cloudlets)| 1590-1610 Mb (16 cloudlets)  
  
## Baca Juga{#whats-next}

  * [Environment Variables in GlassFish Admin Console](<https://docs.dewacloud.com/docs/environment-variables-in-glassfish/>)
  * [Java Application Server Configuration](<https://docs.dewacloud.com/docs/java-application-server-config/>)
  * [GlassFish Cluster](<https://docs.dewacloud.com/docs/glassfish-server-clustering/>)
  * [GlassFish Auto-Clustering](<https://docs.dewacloud.com/company/blog/glassfish-payara-auto-clustering-cloud-hosting/>)