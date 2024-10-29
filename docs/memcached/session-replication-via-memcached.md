---
sidebar_position: 5
slug: /replication-memcached
title: Session Replication via Memcached
---

# Replikasi Sesi via Memcached

Dewacloud menyediakan [Replikasi Session](https://docs.dewacloud.com/docs/auto-clustering/) antara instance web-server dengan bantuan multicast. Namun Anda juga bisa menggunakan **Replikasi Session via Memcached**.

Untuk menggunakan memcached untuk replikasi sesi ikuti petunjuk berikut.

## Membuat Environment{#create-environment}

1. Masuk ke Dashboard Dewacloud.

2. Klik **Create environment**.

3. Dalam menu **Environment topology**, pilih dua atau lebih server yang ingin Anda gunakan (misalnya, dua instance **Tomcat**) dan node **Memcached**. Ketik nama environment (misalnya, _memcachedreplication_) dan klik **Create**.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-1.png" alt="environment wizard" width="100%"/>
</p>

4. Tunggu beberapa saat sampai environment terbuat.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-2.png" alt="environment for Memcached replication" width="100%"/>
</p>

## Konfigurasi

1. Download file .jar dari [Memcached session manager](http://code.google.com/p/memcached-session-manager/). Sebagai contoh, kami menggunakan [memcached-session-manager-1.6.3](http://code.google.com/p/memcached-session-manager/).

Download juga [memcached-session-manager-tc7-1.6.3.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=memcached-session-manager-tc7-1.6.3.jar), [spymemcached-2.8.4.jar](http://code.google.com/p/spymemcached/downloads/detail?name=spymemcached-2.8.4.jar), [msm-kryo-serializer-1.6.3.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=msm-kryo-serializer-1.6.3.jar&can=2&q=), [kryo-1.03.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=kryo-1.03.jar&can=2&q=), [reflectasm-0.9.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=reflectasm-0.9.jar&can=2&q=), [kryo-serializers.jar](https://mvnrepository.com/artifact/de.javakaffee/kryo-serializers), [joda-time.jar](https://repo1.maven.org/maven2/joda-time/joda-time/1.5.2/joda-time-1.5.2.jar) dan [minlog-1.2.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=minlog-1.2.jar&can=2&q=).

2. Klik **Config** untuk Tomcat.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-3.png" alt="Tomcat config" width="100%"/>
</p>

3. Di tab yang terbuka pilih folder **lib** dan unggah file **.jar** yang baru saja di-download.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-4.png" alt="upload libraries" width="100%"/>
</p>

4. Masuk ke directory **conf** dan buka file **context.xml**.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-5.png" alt="context xml" width="100%"/>
</p>

5. Perbarui **context.xml** agar berisi konfigurasi Manager untuk memcached-session-manager, seperti ini:

```xml
<Context path="" docBase="ROOT">
  <Manager className="de.javakaffee.web.msm.MemcachedBackupSessionManager"
    memcachedNodes="n1:host:11211"
    requestUriIgnorePattern=".*\.(png|gif|jpg|css|js)$"
    sessionBackupAsync="false"
    sessionBackupTimeout="100"
    copyCollectionsForSerialization="false"
    transcoderFactoryClass="de.javakaffee.web.msm.serializer.kryo.KryoTranscoderFactory"
    customConverter="de.javakaffee.web.msm.serializer.kryo.JodaDateTimeRegistration"
    />
</Context>
```

Anda dapat menggunakan [strategi serialisasi](http://code.google.com/p/memcached-session-manager/wiki/SerializationStrategies) lainnya sesuai kebutuhan, dalam kasus ini kami menggunakan [Kryo](http://code.google.com/p/kryo/), sebuah library serialisasi biner yang sangat cepat.

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-6.png" alt="configure context xml" width="100%"/>
</p>

6. Pada string _**memcachedNodes**_ tambahkan **host** memcached Anda dan **port** default (_11211_). Dalam kasus kami adalah:

_n1:memcached.memcachedreplication.user.cloudjkt02.com:11211_

Untuk mendapatkan host memcached Anda, cukup tambahkan prefix ' _memcached-_ ' ke hostname environment Anda (yang ditampilkan di bawah nama environment Anda).

<p>
<img src="https://assets.dewacloud.com/dewacloud-docs/memcached/memcached-replication-7.png" alt="environment domain" width="50%"/>
</p>

7. **Simpan** perubahan dan **Restart** node server Anda (dalam kasus kami Tomcat).

Itu saja. Sekarang Anda memiliki cluster high availability dengan semua keuntungan dari **Memcached**.

## Baca Juga{#whats-next}

- [Memcached Configuration](https://docs.dewacloud.com/docs/memcached-configuration/)
- [Memcached Memory Allocation](https://docs.dewacloud.com/docs/memcached-memory-allocation/)
- [PHP Sessions in Memcached](https://docs.dewacloud.com/docs/memcached-php-sessions/)