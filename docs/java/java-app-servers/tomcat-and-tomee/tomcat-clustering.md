---
sidebar_position: 4
slug: /tomcat-clustering
title: Tomcat Clustering
---

# Tomcat Cluster in the Cloud

Platform ini menyediakan pengiriman multicast dan pengalihan permintaan ke setiap server dengan load balancer yang mendukung replikasi sesi antar pasangan node server. Hal ini menjamin pertukaran sesi antar node melalui jaringan lokal dan menghilangkan kebutuhan untuk perangkat lunak tambahan atau Memcached. Dengan pendekatan ini, Anda dapat menggunakan hosting aplikasi berkluster besar.

Instruksi ini menunjukkan teknologi clustering yang digunakan di platform dengan contoh server aplikasi Tomcat.

![Tomcat cluster](#)

Skema yang diberikan menampilkan **Tomcat cluster** dengan dua server dan satu load balancer. Semua permintaan ditangani dan didistribusikan oleh balancer di antara node yang berbeda berdasarkan ketersediaan dan beban server.

Jika salah satu server mengalami kegagalan, pengguna dari node tersebut akan secara otomatis dialihkan ke instance lain di cluseter Tomcat ini. Berkat replikasi, instance lain sudah memiliki semua sesi dari node yang gagal, jadi pengguna akhir tidak akan menyadari adanya perubahan.

**Untuk menggunakan Tomcat clustering di platform, Anda harus melakukan langkah berikut:**

1\. Masuk ke dashboard platform Anda.

2\. Klik **New** **Environment**.

![new environment button](#)

3\. Pilih **Tomcat** sebagai server aplikasi yang ingin Anda gunakan, tentukan batas cloudlet dan nyalakan **High-availability** seperti yang ditunjukkan pada gambar di bawah ini. Tentukan nama lingkungan dan klik **Create**.

![Tomcat cluster in topology wizard](#)

:::note 
Horizontal scaling dan mode High Availability adalah dua fungsionalitas berbeda di platform. Dengan yang pertama, Anda memiliki beberapa server dan beban didistribusikan secara merata di antara jumlah instance yang dipilih dengan load balancer. Mode High Availability mengatur replikasi antara pasangan atau beberapa pasangan server menggunakan keanggotaan multicast.
:::

Ketika Anda mengaktifkan **High Availability**, sebuah file konfigurasi Tomcat khusus (_**jelastic-ha.xml**_) akan dihasilkan untuk setiap node oleh sistem kami. Berikut adalah contohnya:

```
<Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"       channelSendOptions="4">
  <Manager className="org.apache.catalina.ha.session.DeltaManager"       expireSessionsOnShutdown="false"       notifyListenersOnReplication="true"/>
  <Channel className="org.apache.catalina.tribes.group.GroupChannel">
   <Membership className="org.apache.catalina.tribes.membership.McastService"        address="228.0.0.4"        port="${MagicPort}"        frequency="500"        dropTime="3000"/>
   <Receiver className="org.apache.catalina.tribes.transport.nio.NioReceiver"        address="${ReceiverIp}"        port="4000"        autoBind="100"        selectorTimeout="5000"        maxThreads="6"/>
   <Sender className="org.apache.catalina.tribes.transport.ReplicationTransmitter">
  <Transport className="org.apache.catalina.tribes.transport.nio.PooledParallelSender"/>
  </Sender>
   <Interceptor className="org.apache.catalina.tribes.group.interceptors.TcpFailureDetector"/>
  <Interceptor className="org.apache.catalina.tribes.group.interceptors.MessageDispatch15Interceptor"/>
 </Channel>
   <Valve className="org.apache.catalina.ha.tcp.ReplicationValve"      filter=""/>
  <Valve className="org.apache.catalina.ha.session.JvmRouteBinderValve"/>
   <ClusterListener className="org.apache.catalina.ha.session.JvmRouteSessionIDBinderListener"/>
  <ClusterListener className="org.apache.catalina.ha.session.ClusterSessionListener"/>
 </Cluster>
```

Mari lihat file ini secara lebih rinci:

1\. Ini adalah elemen utama, di mana semua elemen cluster lainnya dikonfigurasi.

```
<Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"        channelSendOptions="4">
```

Flag _**channelSendOptions**_ ini dilampirkan pada setiap pesan yang dikirim oleh kelas _**SimpleTcpCluster**_ atau objek apa pun yang memanggil metode _**SimpleTcpCluster.send**_.

2\. _**DeltaManager**_ menggunakan metode _**SimpleTcpCluster.send**_ untuk mengirim informasi melalui saluran.

```
<Manager className="org.apache.catalina.ha.session.DeltaManager"      expireSessionsOnShutdown="false"      notifyListenersOnReplication="true"/>
```

3\. Kerangka komunikasi grup dalam Tomcat disebut **Tribes**. Ini digunakan sebagai elemen saluran di sini. Ini mengenkapsulasi segala sesuatu yang terkait keanggotaan, logika, dan komunikasi.

```
<Channel className="org.apache.catalina.tribes.group.GroupChannel">
```

4\. Keanggotaan dilakukan menggunakan **multicast**. Pemisahan cluster Tomcat terdiri dari alamat multicast dan nomor port. Komunikasi antara node direalisasikan melalui TCP.

```
<Membership className="org.apache.catalina.tribes.membership.McastService"     address="228.0.0.4"     port="${MagicPort}"     frequency="500"     dropTime="3000"/>
```

_**\{MagicPort\}**_ adalah nomor port unik untuk cluster, yang dihasilkan secara otomatis dari argument Java.

5\. Logika Tribes untuk mengirim dan menerima data mencakup dua komponen: sender dan receiver. **Receiver** bertanggung jawab untuk penerimaan data. Ada thread pool dalam elemen ini yang memiliki pengaturan _**maxThreads**_ dan _**minThreads**_. Atribut address adalah alamat host yang akan disiarkan oleh komponen keanggotaan ke node lainnya.

```
<Receiver className="org.apache.catalina.tribes.transport.nio.NioReceiver"     address="${ReceiverIp}"     port="4000"     autoBind="100"     selectorTimeout="5000"     maxThreads="6"/>
```

6\. Komponen **Sender** bertanggung jawab untuk mengirim pesan ke node lainnya. Sender termasuk _**ReplicationTransmitter**_, sebuah komponen shell khusus, dan subkomponen _**Transport**_. Pesan dapat dikirim secara bersamaan dengan sender NIO dan paralel dengan pool pengirim.

```
<Sender className="org.apache.catalina.tribes.transport.ReplicationTransmitter">
<Transport className="org.apache.catalina.tribes.transport.nio.PooledParallelSender"/>
</Sender>
```

7\. Elemen Interceptor dari Tuas Tribes adalah:

  * _**TcpFailureDetector**_ \- memverifikasi anggota yang crash melalui TCP
  * _**MessageDispatch15Interceptor**_ \- mengirimkan pesan ke thread pool untuk mengirim pesan secara asinkron

```
<Interceptor className="org.apache.catalina.tribes.group.interceptors.TcpFailureDetector"/>
<Interceptor className="org.apache.catalina.tribes.group.interceptors.MessageDispatch15Interceptor"/>
```

8\. Cluster menggunakan valve untuk melacak permintaan ke aplikasi web:

  * _**ReplicationValve**_ menentukan kapan permintaan telah selesai dan memulai replikasi
  * _**JvmRouteBinderValve**_ bertanggung jawab untuk mencadangkan data Anda

```
<Valve className="org.apache.catalina.ha.tcp.ReplicationValve"       filter="">
<Valve className="org.apache.catalina.ha.session.JvmRouteBinderValve"/>
```

9\. _**SimpleTcpCluster**_ adalah pengirim dan penerima dari objek Channel, sehingga komponen-komponen terdaftar sebagai pendengar untuk cluster ini.

```
<ClusterListener className="org.apache.catalina.ha.session.JvmRouteSessionIDBinderListener"/>
<ClusterListener className="org.apache.catalina.ha.session.ClusterSessionListener"/>
```

Konfigurasi High Availability adalah otomatis sehingga Anda dapat dengan mudah menyiapkannya untuk setiap server aplikasi Java yang didukung oleh platform.

## Baca Juga{#whats-next}

  * [Cluster in Cloud](<https://docs.dewacloud.com/docs/cluster-in-cloud/>)
  * [Tomcat](<https://docs.dewacloud.com/docs/tomcat/>)
  * [TomEE](<https://docs.dewacloud.com/docs/tomee/>)