---
sidebar_position: 4
slug: /software-stack-versions
title: Software Stack Versions
---
# Software Stack Versions

Di halaman ini, Anda dapat menemukan daftar stack dan engine perangkat lunak terbaru yang disediakan oleh platform:

  * [Load Balancers](<#lb>)
  * [Application Servers](<#app-servers>)
  * [Databases](<#databases>)
  * [Additional Stacks](<#additional>)
  * [Engines](<#engines>)

Setiap software stack tetap didukung oleh platform hingga tanggal end-of-life (EOL) yang diberitahukan oleh pengelola upstream masing-masing. Setelah EOL, stack tidak lagi tersedia untuk pembuatan environment baru, tetapi yang sudah ada tetap dapat beroperasi sepenuhnya (termasuk redeploy, cloning, horizontal scaling).

:::note 
Software stacks secara default didasarkan pada base image CentOS 7, yang akan mencapai EOL pada 30 Juni 2024. Platform mulai beralih ke software stacks yang didasarkan pada gambar AlmaLinux 9 baru untuk memastikan dukungan semua fungsionalitas terkini, standar keamanan modern, dan kompatibilitas dengan semua solusi perangkat lunak terbaru. Cartridge platform telah resmi mencapai EOL dan tidak akan menerima pembaruan lagi, termasuk patch keamanan dan dukungan fungsionalitas platform baru (misalnya firewall UI). 
:::

Kami sangat menyarankan untuk membuat ulang atau [redeploy](<https://docs.dewacloud.com/docs/container-redeploy/>) container EOL dengan rilis perangkat lunak terbaru untuk memastikan ketersediaan semua fungsionalitas terbaru dan perbaikan keamanan. Demikian pula, disarankan untuk memperbarui semua lingkungan Anda secara berkala (setidaknya sekali per tahun).

## LOAD BALANCERS{#lb}  
---  
| Name & Link to Tags | Latest Supported Version  
---|---  
_**[Apache Balancer](<https://hub.docker.com/r/jelastic/apachebalancer/tags/>)**_ | 2.4.58  
**AlmaLinux:** 2.4.62  
_**[HAProxy](<https://hub.docker.com/r/jelastic/haproxy/tags>)**_ | 2.0.34; 2.2.31; 2.3.10; 2.4.24; 2.5.14; 2.6.16; 2.7.11; 2.8.5 2.9.0  
**AlmaLinux:** 2.2.32; 2.4.26; 2.6.18; 2.8.10; 2.9.10; 3.0.4  
**EOL: 1.8.14; 1.9.7; 2.0.10; 2.1.7**  
_**[LiteSpeed Web ADC](<https://hub.docker.com/r/jelastic/litespeedadc/tags>)**_ ([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready) | 2.4; 2.5.1; 2.6.1; 2.7; 3.0.3; 3.1.7  
**AlmaLinux:** 3.2.2  
_**[NGINX Balancer](<https://hub.docker.com/r/jelastic/nginxbalancer/tags>)**_ ([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready) | 1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0  
**AlmaLinux:** 1.26.2  
**EOL: 1.10.3; 1.12.2; 1.14.2**  
_**[Varnish](<https://hub.docker.com/r/jelastic/varnish/tags>)**_ ([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready) | 6.0.11; 7.0.3; 7.1.2; 7.2.1; 7.3.0; 7.4.1  
**AlmaLinux:** 6.0.13; 7.2.1; 7.3.1; 7.4.3; 7.5.0  
**EOL: 4.1.8; 5.2.1; 6.1.1; 6.2.1; 6.3.2; 6.4.0; 6.5.1; 6.6.1**  

## APPLICATION SERVERS {#app-servers} 
---  
| Name & Link to Tags | Latest Supported Version  
---|---  
_**[.NET Core](<https://hub.docker.com/r/jelastic/dotnet/tags>)**_ | 3.1.426; 5.0.408; 6.0.417; 7.0.404  
**AlmaLinux:** 6.0.425; 7.0.409; 8.0.401  
_**[Apache PHP](<https://hub.docker.com/r/jelastic/apachephp/tags>)**_ | 2.4.57  
**AlmaLinux:** 2.4.62  
**EOL: 2.4.45**  
_**[Apache Python](<https://hub.docker.com/r/jelastic/apachepython/tags>)**_ | 2.4.58  
**AlmaLinux:** 2.4.62  
_**[Apache Ruby](<https://hub.docker.com/r/jelastic/apacheruby/tags>)**_ | 2.4.58  
**AlmaLinux:** 2.4.62  
_**[GlassFish](<https://hub.docker.com/r/jelastic/glassfish/tags>)**_ | 5.0.0; 5.1.0; 6.1; 6.2.5; 7.0.11  
**EOL: 3.1.2.2; 4.1.2**  
_**[Golang](<https://hub.docker.com/r/jelastic/golang/tags>)**_ | 1.17.12; 1.18.10; 1.19.12; 1.20.12; 1.21.5  
**AlmaLinux:** 1.20.14; 1.21.13; 1.22.7; 1.23.1  
**EOL: 1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15**  
_**[Jetty](<https://hub.docker.com/r/jelastic/jetty/tags>)**_ | 9.4.53; 10.0.18; 11.0.18; 12.0.4  
**AlmaLinux:** 11.0.24; 12.0.13  
_**[LEMP](<https://hub.docker.com/r/jelastic/lemp/tags>)**_ _([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready)_ | _LEMP_ (NGINX / MariaDB / Redis / PHP)  
_1.18.0_ (1.18.0 / 10.6.12 / 6.2.5 / 8.0.10);  
_1.20.2_ (1.20.2 / 10.6.12 / 6.2.7 / 8.1.7);  
_1.22.1_ (1.22.1 / 10.6.12 / 6.2.11 / 8.2.5)  
**AlmaLinux:**  
_1.24.0_ (1.24.0 / 10.6.16 / 6.2.14 / 8.3.2);  
_1.26.2_ (1.26.2 / 10.6.18 / 6.2.14 / 8.3.10)  
_**[LiteSpeed Web Server](<https://hub.docker.com/r/jelastic/litespeed/tags>)**_ _([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready)_ | 5.3.8; 5.4.12; 6.0.12; 6.1.2  
**AlmaLinux:** 5.4.12; 6.1.2; 6.2.2; 6.3  
_**[LLSMP](<https://hub.docker.com/r/jelastic/llsmp/tags>)**_ _([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready)_ | _LLSMP_ (LiteSpeed / MariaDB / Redis / PHP)  
_5.4.12_ (5.4.12 / 10.6.13 / 6.2.12 / 8.2.5);  
_6.0.12_ (6.0.12 / 10.6.11 / 6.2.8 / 8.2.0);  
_6.1.2_ (6.1.2 / 10.6.14 / 6.2.12 / 8.2.5)  
**AlmaLinux:**  
_6.2.2_ (6.2.2 / 10.6.17 / 6.2.14 / 8.3.3)  
_6.3_ (6.3 / 10.6.18 / 6.2.14 / 8.3.6)  
_**[NGINX PHP](<https://hub.docker.com/r/jelastic/nginxphp/tags>)**_ _([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready)_ | 1.18.0; 1.20.2; 1.22.1; 1.24.0  
**AlmaLinux:** 1.24.0; 1.26.2  
**EOL: 1.12.2; 1.14.2; 1.16.1**  
_**[NGINX Ruby](<https://hub.docker.com/r/jelastic/nginxruby/tags>)**_ _([HTTP/3](<https://docs.dewacloud.com/docs/http3/>) ready)_ | 1.16.1; 1.20.2; 1.22.1; 1.24.0  
**AlmaLinux:** 1.24.0; 1.26.2  
**EOL: 1.14.2**  
_**[NodeJS](<https://hub.docker.com/r/jelastic/nodejs/tags>)**_ | 14.21.3; 16.20.0; 20.5.0  
**AlmaLinux:** 18.20.4; 20.17.0; 21.7.3; 22.5.1; 22.8.0  
**EOL: 6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0;
15.14.0; 17.9.1**  
_**[Payara](<https://hub.docker.com/r/jelastic/payara/tags>)**_ | 5.2022.2; 6.2023.12  
**EOL: 4.1.2.181; 5.2020.5; 5.2021.10**  
_**[Spring Boot](<https://hub.docker.com/r/jelastic/springboot/tags>)**_ | 2  
**AlmaLinux:** 2  
_**[Tomcat](<https://hub.docker.com/r/jelastic/tomcat/tags>)**_ | 8.5.97; 9.0.84; 10.0.23; 10.1.17; 11.0.0-M15  
**AlmaLinux:** 8.5.100; 9.0.93; 10.1.28; 11.0.0-M24  
**EOL: 7.0.109**  
_**[TomEE](<https://hub.docker.com/r/jelastic/tomee/tags>)**_ | 7.0.5; 7.1.0; 8.0.16; 9.0.0; 9.1.1  
**AlmaLinux:** 9.1.3  
_**[WildFly](<https://hub.docker.com/r/jelastic/wildfly/tags>)**_ | 25.0.1; 26.1.3; 27.0.1; 28.0.1; 29.0.1; 30.0.1  
**AlmaLinux:** 31.0.1; 32.0.1; 33.0.0  
**EOL: 10.1.0; 11.0.0; 12.0.0; 13.0.0; 14.0.1; 15.0.1; 16.0.0; 17.0.1; 18.0.1;
19.1.0; 20.0.1; 21.0.2; 22.0.1; 23.0.1; 24.0.1**  

## DATABASES {#databases}  
---  
| Name & Link to Tags | Latest Supported Version  
---|---  
_**[Couchbase CE](<https://hub.docker.com/r/jelastic/couchbase/tags>)**_ | 5.0.1; 5.1.1; 6.0.0; 6.5.1; 6.6.0; 7.0.2; 7.1.1  
_**[MariaDB](<https://hub.docker.com/r/jelastic/mariadb/tags>)**_ | 10.3.39; 10.4.32; 10.5.23; 10.6.16; 10.7.8; 10.8.8; 10.9.6; 10.10.6; 10.11.6; 11.0.4; 11.1.3  
**AlmaLinux:** 10.5.25; 10.6.18; 10.11.8; 11.0.6; 11.1.5; 11.2.4; 11.3.2;
11.4.2  
**EOL: 5.5.68; 10.1.24; 10.2.15**  
_**[MongoDB 3/4](<https://hub.docker.com/r/jelastic/mongo/tags>)**_ _(deprecated)_ | 3.6.8; 4.0.2  
**EOL: 2.6.12**  
_**MongoDB**_ _([by request](<https://docs.dewacloud.com/docs/mongodb-license/>))_ | **AlmaLinux:** 6.0.16; 7.0.12  
_**[MySQL CE](<https://hub.docker.com/r/jelastic/mysql/tags>)**_ | 5.7.44; 8.0.35  
**AlmaLinux:** 8.0.36  
**EOL: 5.6.50**  
_**[OpenSearch](<https://hub.docker.com/r/jelastic/opensearch/tags>)**_ | 1.3.1; 2.11.1  
**AlmaLinux:** 2.16.0  
_**[Percona](<https://hub.docker.com/r/jelastic/percona/tags>)**_ | 5.7.43, 8.0.33  
**AlmaLinux:** 8.0.36  
**EOL: 5.5.41; 5.6.50**  
_**[PostgreSQL](<https://hub.docker.com/r/jelastic/postgres/tags>)**_ | 11.19; 12.14; 13.10; 14.7; 15.2  
**AlmaLinux:** 12.20; 13.16; 14.13; 15.8; 16.4  
**EOL: 9.6.24; 10.22**  
_**[Redis](<https://hub.docker.com/r/jelastic/redis/tags>)**_ | 6.0.10; 6.2.14; 7.0.11; 7.2.3  
**AlmaLinux:** 7.2.4  
**EOL: 4.0.11; 5.0.8**  

## ADDITIONAL STACKS {#additional}  
---  
| Name & Link to Tags | Latest Supported Version  
---|---  
_**[AlmaLinux (VPS)](<https://hub.docker.com/r/jelastic/almalinuxvps/tags>)**_ | **AlmaLinux:** 9.3  
_**[CentOS (VPS)](<https://hub.docker.com/r/jelastic/centosvps/tags>)**_ | 7.6; 7.7; 7.8; 7.9  
_**[Debian (VPS)](<https://hub.docker.com/r/jelastic/debianvps/tags>)**_ | 10.13; 11.11; 12.7  
**EOL: 9.13**  
_**[Docker Engine CE](<https://hub.docker.com/r/jelastic/dockerce/tags>)**_ | 19.03.14; 20.10.23; 23.0.6; 24.0.7; 25.0.2  
**AlmaLinux:** 26.1.2; 27.1.2  
**EOL: 17.12; 18.09.7**  
_**[Jenkins](<https://hub.docker.com/r/jelastic/jenkins/tags>)**_ | 2.332.3; 2.346.3; 2.361.4; 2.375.2; 2.387.1; 2.401.3; 2.426.3  
**AlmaLinux:** 2.440.2  
**EOL: 2.263.4; 2.289.3; 2.303.3; 2.319.3**  
_**[Kubernetes](<https://hub.docker.com/r/jelastic/kubernetes/tags>)**_ | 1.16.6; 1.17.12; 1.18.10  
_**[Logstash](<https://hub.docker.com/r/jelastic/logstash/tags>)**_ | 7.17.0; 8.11.3  
**AlmaLinux:** 8.15.1  
_**[Maven](<https://hub.docker.com/r/jelastic/maven/tags>)**_ | 3.5.4; 3.6.3; 3.8.6; 3.9.5  
**AlmaLinux:** 3.9.9  
_**[Memcached](<https://hub.docker.com/r/jelastic/memcached/tags>)**_ | 1.4.24; 1.5.22; 1.6.15  
**AlmaLinux:** 1.6.31  
_**[OpenSearch Dashboards](<https://hub.docker.com/r/jelastic/opensearchdashboards/tags>)**_ | 1.3.2; 2.11.1  
**AlmaLinux:** 2.16.0  
_**[Pgpool-II](<https://hub.docker.com/r/jelastic/pgpool2/tags>)**_ | 4.3.3; 4.4.4  
**AlmaLinux:** 4.5.2  
_**[ProxySQL](<https://hub.docker.com/r/jelastic/proxysql/tags>)**_ | 2.0.17; 2.3.2  
**AlmaLinux:** 2.5.5  
**EOL: 1.4.13**  
_**[Shared Storage](<https://hub.docker.com/r/jelastic/storage/tags>)**_ | 2.0-9.6  
**AlmaLinux:** 2.0-10.5  
_**[Ubuntu (VPS)](<https://hub.docker.com/r/jelastic/ubuntuvps/tags>)**_ | 16.04; 18.04; 20.04; 22.04  
_**Windows**_ (VPS) | 2012  

## ENGINES {#engines}
---  
| Name | Latest Supported Version  
---|---  
_**AdoptOpenJDK**_ | 8.0.312; 11.0.13; 13.0.2; 14.0.2; 15.0.2; 16.0.2  
**EOL: 9.0.4; 10.0.2; 12.0.2**  
_**Alibaba Dragonwell**_ | 8.11.12  
_**Amazon Corretto**_ | 8.392.08.1; 11.0.21.9.1; 15.0.2.7.1; 16.0.2.7.1; 17.0.9.8.1; 18.0.2.9.1; 19.0.2.7.1; 20.0.2.10.1; 21.0.1.12.1  
**AlmaLinux:** 8.422.05.1; 11.0.24.8.1; 17.0.12.7.1; 21.0.4.7.1  
_**Eclipse OpenJ9**_ | _0.11.0_ (8u192-b12; 11.0.1); _0.15.1_ (8u222-b10; 11.0.4); _0.17.0_ (8u232-b09; 11.0.5; 13.0.1); _0.18.1_(8u242-b08; 11.0.6; 13.0.2) _0.20.0_ (8u252-b09; 11.0.7); _0.21.0_ (8u262-b10; 8u265-b01; 11.0.8; 14.0.2); _0.22.0_ (15.0.0); _0.23.0_ (8u272-b10; 11.0.9); _0.24.0_ (8u282-b08; 11.0.10); _0.25.0_ -16; _0.26.0_ (8u292-b10; 11.0.11); _0.27.0_ (8u302-b08; 11.0.12); _0.29.0_ (8u312-b07; 11.0.13); _0.30.0_ (8u322-b06; 11.0.14); _0.32.0_ (8u332-b09; 11.0.15); _0.33.1_ (8u345-b01; 11.0.16); _0.35.0_ (8u352-b08; 11.0.17); _0.36.1_ (8u362-b09; 11.0.18); _0.38.0_ (8u372-b07; 11.0.19); _0.41.0_ (8u392-b08; 11.0.21)  
**AlmaLinux:** _0.43.0_ (8u402-b06; 11.0.22)  
**EOL:_0.9.0_ (9.0.4.12; 10.0.2); _0.15.1_ -12.0.2**  
_**Eclipse Temurin**_ | 8.0.392; 11.0.21; 17.0.9; 18.0.2.1; 19.0.2; 20.0.2; 21.0.0  
**AlmaLinux:** 8.0.422; 11.0.24; 17.0.12; 21.0.2  
_**GraalVM CE**_ | 19.3.1; 20.2.0; 21.3.0; 22.3.3  
_**Liberica JDK**_ | 8.0.322; 11.0.14; 13.0.2; 14.0.2; 15.0.0; 16.0.0; 17.0.2  
**EOL: 12.0.2**  
_**Oracle JDK Dev**_ | 7.0_79; 8.0_202; 11.0.2  
**EOL: 9.0.4; 10.0.2**  
_**Oracle OpenJDK**_ | 7.0.261; 8.0.392; 11.0.21; 13.0.2; 14.0.2; 15.0.2; 16.0.2; 17.0.2; 18.0.2.1; 19.0.2; 20.0.2; 21; 22.ea-b29  
**AlmaLinux:** 8.0.412; 11.0.24; 21.0.2; 22.0.2; 23.ea-b31  
**EOL: 10.0.2; 12.0.2**  
_**Zulu Community**_ | 7.0.352; 8.0.392; 11.0.21; 13.0.9; 14.0.2; 15.0.10; 16.0.2; 17.0.9; 18.0.2.1; 19.0.2; 20.0.2; 21.0.1  
**AlmaLinux:** 8.0.422; 11.0.24; 17.0.12; 21.0.4; 22.0.2  
**EOL: 12.0.2**  
_**PHP**_ | 8.0.30; 8.1.24; 8.2.11  
**AlmaLinux:** 8.0.30; 8.1.29; 8.2.23; 8.3.11  
**EOL: 7.1.33; 7.2.34; 7.3.33; 7.4.33**  
_**Ruby**_ | 3.0.6; 3.1.4; 3.2.2  
**AlmaLinux:** 3.1.6; 3.2.5; 3.3.5  
**EOL: 2.2.10; 2.3.8; 2.4.10; 2.5.9; 2.6.10; 2.7.8**  
_**Python**_ | 3.8.18; 3.9.18; 3.10.13; 3.11.7; 3.12.0  
**AlmaLinux:** 3.8.19; 3.9.19; 3.10.14; 3.11.9; 3.12.5  
**EOL: 2.7.18; 3.4.10; 3.5.10; 3.6.15; 3.7.16**  
_**Node.js**_ | 14.21.3; 16.20.0; 20.5.0  
**AlmaLinux:** 18.20.4; 20.17.0; 21.7.3; 22.5.1; 22.8.0  
**EOL: 6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0;
15.14.0; 17.9.1**  
_**.NET**_ | 3.1.426; 5.0.408; 6.0.417; 7.0.404  
**AlmaLinux:** 6.0.424; 7.0.409; 8.0.303  
_**Go**_ | 1.17.12; 1.18.10; 1.19.12; 1.20.12; 1.21.5  
**AlmaLinux:** 1.20.14; 1.21.13; 1.22.7; 1.23.1  
**EOL: 1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15**  

## Baca Juga{#whats-next}

  * [Java Versions](<https://docs.dewacloud.com/docs/java-versions/>)
  * [PHP Versions](<https://docs.dewacloud.com/docs/php-versions/>)
  * [Ruby Versions](<https://docs.dewacloud.com/docs/ruby-versions/>)
  * [Python Versions](<https://docs.dewacloud.com/docs/python-versions/>)
  * [Node.js Versions](<https://docs.dewacloud.com/docs/nodejs-versions/>)