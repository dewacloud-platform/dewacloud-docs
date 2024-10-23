---
sidebar_position: 6
slug: /http3
title: HTTP/3 Support
---
# HTTP/3 (QUIC) Support

**HTTP/3** (formerly known as “ _HTTP over QUIC_ ") is the to-become third
major version of the Hypertext Transfer Protocol family. Featurewise, it is
very similar to HTTP/2 but offers some significant advantages due to changes
to the underlying method of utilization. Namely, the HTTP/3 is built on
_**QUIC**_ transport protocol, which works over UDP instead of TCP.

Currently, HTTP/3 is already provided by some solutions (e.g. _LiteSpeed_ and
_NGINX_) and is [adopted by the platform](<https://docs.dewacloud.com/docs/#http3-support-implementation>) through the latest releases of the following stacks:

  * _**load balancers:** [LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>), [Varnish](<https://docs.dewacloud.com/docs/varnish/>), [NGINX](<https://docs.dewacloud.com/docs/nginx-load-balancer/>)_
  * _**application servers:** [LiteSpeed WS](<https://docs.dewacloud.com/docs/litespeed-web-server/>), [LLSMP & LEMP](<https://docs.dewacloud.com/docs/lemp-llsmp/>), [NGINX PHP](<https://docs.dewacloud.com/docs/nginx-php/>), [NGINX Ruby](<https://docs.dewacloud.com/docs/nginx-ruby/>)_

Below, you can check the:

  * [technical preconditions of the HTTP/3 implementation](<https://docs.dewacloud.com/docs/#technical-implementation-specificspreconditions>)
  * [benefits of the HTTP/3 (QUIC)](<https://docs.dewacloud.com/docs/#http3-quic-key-features>)
  * [integration in the platform](<https://docs.dewacloud.com/docs/#http3-support-implementation>)

## Technical Implementation
Specifics/Preconditions[![](#)](<https://www.virtuozzo.com/application-platform-docs/http3 #technical-implementation-specificspreconditions>)

The main reason behind HTTP/3 implementation is that HTTP/2 reached its limit
in the speed improvements due to the bottleneck of the TCP protocol. Despite being reliable, all the round-trips required by handshakes, delivery feedbacks, ordering guarantees, and checksums of the TCP can be considered weak and redundant. Herewith, as a part of the TCP/IP stack, TCP is
implemented in operating system kernels, and devices firmware, making
significant changes to TCP is next to impossible.

:::tip Below, we’ve provided some examples of the limitations provided by
TCP:a single TCP connection can transfer data over multiple streams; however,
packet loss holds the whole connection (and all its streams) until TCP
retransmits the packetTCP does not provide built-in TLS, so secure connections
require an additional round-trip, creating a delay :::

UDP suffers no such limitations and is just as widespread as TCP, which allows
achieving improvements without significant changes to the existing operating
systems and devices firmware. Thus, HTTP/3 has adopted the QUIC transport
protocol (initially developed by Google), which is based on UDP, provides
[significant benefits](<https://www.virtuozzo.com/application-platform-docs/#http3-quic-key-features>). Also, being already in use by prominent
internet companies such as Google and Facebook, the efficiency and reliability
of the QUIC solution cannot be denied.

## HTTP/3 (QUIC) Key Features[![](#)](<https://www.virtuozzo.com/application-platform-docs/http3/#http3-quic-key-features>)

By using QUIC instead of TCP as its base, HTTP/3 can take advantage of the
numerous benefits it provides. Herewith, QUIC implementation on top of UDP
allows offering features similar to TCP but without some of the choke points.
So, let’s sum up the main distinguishing features of the HTTP/3 when compared
to its predecessor HTTP/2:

  * _enhanced multiplexing_ \- packet loss affects only the appropriate single stream (not all of them within the same connection)
  * _faster connection setup_ \- protocol handles security features by itself, decreasing the number of round-trips for establishing a connection (especially noticeable on high-latency networks, e.g. for mobile users)
  * _connection migration_ \- the use of connection ID instead of destination IP allows ensuring packet delivery even in case of a network switch (e.g. download over HTTP/3 will proceed when wifi connection is changed to the mobile network)

![HTTP2 vs HTTP3](#)

Generally, HTTP/3 aims to provide faster and more reliable connections, which
will be especially noticeable by those with higher latency networks. So, from
a performance standpoint, mobile users will reap the most benefits, but these
are the improvements that everyone can appreciate.

## HTTP/3 Support
Implementation[![](#)](<https://www.virtuozzo.com/application-platform-docs/http3/#http3-support-implementation>)

The support for the HTTP/3 (QUIC) protocol is still in its earliest
implementation stages. However, it is already provided by some solutions (e.g.
[LiteSpeed](<https://www.litespeedtech.com/latest-techs/http-3-is-coming>))
and is in development by others.

Below, you can view the most accurate list of the software stacks at the
platform that provide HTTP/3 support by default:

  * _**load balancers**_
    * _[LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>):_ all versions
    * _[Varnish](<https://docs.dewacloud.com/docs/varnish/>):_ _5.2.x_ , _6.x.x_ versions and above
    * _[NGINX](<https://docs.dewacloud.com/docs/nginx-load-balancer/>):_ since the _1.16.1_ release
  * _**application servers**_
    * _[LiteSpeed WS](<https://docs.dewacloud.com/docs/litespeed-web-server/>):_ all versions
    * _[LLSMP](<https://docs.dewacloud.com/docs/lemp-llsmp/>):_ all versions
    * _[LEMP](<https://docs.dewacloud.com/docs/lemp-llsmp/>):_ since the _1.16.1_ release
    * _[NGINX PHP](<https://docs.dewacloud.com/docs/nginx-php/>):_ since the _1.16.1_ release for PHP _7.2.26_ , _7.3.13_ , _7.4.1_ versions and above
    * _[NGINX Ruby](<https://docs.dewacloud.com/docs/nginx-ruby/>)_ : since the _1.16.1_ release for Ruby _2.4.9_ , _2.5.7_ , _2.6.5_ , _2.7.0_ versions and above

Just [create an environment](<https://www.virtuozzo.com/application-platform-docs/setting-up-environment/>) topology that includes any of the application servers or load balancers mentioned above.

![HTTP3 ready servers](#)

Herewith, you’ll need to additionally attach a [public IP
address](<https://docs.dewacloud.com/docs/public-ip/>) to
bypass the Shared Load Balancer and allow working directly with the server
over HTTP/3.

:::warning As of the client-side, the HTTP/3 (QUIC) support is currently
enabled by default inChromium, can be configured inChrome(chrome://flags), and
isnot yet implementedby theFirefoxbrowser. :::

## What’s next?[![](#)](<https://www.virtuozzo.com/application-platform-docs/http3/#whats-next>)

  * [FTP/FTPS Support](<https://docs.dewacloud.com/docs/ftp-ftps-support/>)
  * [Websockets Support](<https://docs.dewacloud.com/docs/websockets/>)
  * [LiteSpeed Web Server](<https://docs.dewacloud.com/docs/litespeed-web-server/>)
  * [LiteSpeed Web ADC](<https://docs.dewacloud.com/docs/litespeed-web-adc/>)
  * [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)