---
sidebar_position: 5
slug: /session-replication-via-memcached
title: Session Replication via Memcached
---

# Replikasi Sesi via Memcached

Platform ini menyediakan [Replikasi Sesi](https://docs.dewacloud.com/session-replication/) antara instance web-server dengan bantuan multicast. Namun Anda juga bisa menggunakan **Replikasi Sesi via Memcached**.

Untuk menggunakan memcached untuk replikasi sesi ikuti petunjuk berikut.

## Membuat Environment{#create-environment}

1. Masuk ke akun PaaS.

2. Klik **Create environment**.

3. Dalam jendela **Environment topology**, pilih dua atau lebih server yang ingin Anda gunakan (misalnya, dua instance **Tomcat**) dan node **Memcached**. Ketik nama environment (misalnya, _memcachedreplication_) dan klik **Create**.

![environment wizard](#)

4. Dalam satu menit, environment Anda akan dibuat.

![environment for Memcached replication](#)

## Konfigurasi
server aplikasi\{#configure-application-server\}

1. Unduh file .jar dari [Memcached session manager](http://code.google.com/p/memcached-session-manager/). Sebagai contoh, kami menggunakan [memcached-session-manager-1.6.2](http://code.google.com/p/memcached-session-manager/).

Juga unduh [memcached-session-manager-tc7-1.6.2.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=memcached-session-manager-tc7-1.6.2.jar), [spymemcached-2.8.4.jar](http://code.google.com/p/spymemcached/downloads/detail?name=spymemcached-2.8.4.jar), [msm-kryo-serializer-1.6.1.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=msm-kryo-serializer-1.6.1.jar&can=2&q=), [kryo-1.03.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=kryo-1.03.jar&can=2&q=), [reflectasm-0.9.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=reflectasm-0.9.jar&can=2&q=), [kryo-serializers.jar](https://mvnrepository.com/artifact/de.javakaffee/kryo-serializers), [joda-time.jar](https://repo1.maven.org/maven2/joda-time/joda-time/1.5.2/joda-time-1.5.2.jar) dan [minlog-1.2.jar](http://code.google.com/p/memcached-session-manager/downloads/detail?name=minlog-1.2.jar&can=2&q=).

2. Klik **Config** untuk Tomcat.

![Tomcat config](#)

3. Di jendela yang terbuka pilih folder **lib** dan unggah file **.jar** yang baru saja Anda unduh.

![upload libraries](#)

4. Pilih folder **server** dan buka file **context.xml**.

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

Anda dapat menggunakan [strategi serialisasi](http://code.google.com/p/memcached-session-manager/wiki/SerializationStrategies) lainnya sesuai kebutuhan, dalam kasus ini kami menggunakan [Kryo](http://code.google.com/p/kryo/), sebuah perpustakaan serialisasi biner yang sangat cepat.

![configure context xml](#)

6. Pada string _**memcachedNodes**_ tambahkan **host** memcached Anda dan **port** default (_11211_). Dalam kasus kami adalah:

_n1:memcached-memcachedreplication.jelastic.com:11211_

Untuk mendapatkan host memcached Anda, cukup tambahkan awalan ' _memcached-_ ' ke hostname environment Anda (yang ditampilkan dalam string tepat di bawah nama environment Anda).

![environment domain](#)

7. **Simpan** perubahan dan **Restart** node server Anda (dalam kasus kami Tomcat).

Itu saja. Sekarang Anda memiliki cluster yang memiliki ketersediaan tinggi dengan semua keuntungan dari **Memcached**.

## Baca Juga{#whats-next}

- [Memcached Configuration](https://docs.dewacloud.com/memcached-configuration/)
- [Memcached Memory Allocation](https://docs.dewacloud.com/memcached-memory-allocation/)
- [PHP Sessions in Memcached](https://docs.dewacloud.com/memcached-php-sessions/)