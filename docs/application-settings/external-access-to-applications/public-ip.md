---
sidebar_position: 2
slug: /public-ip
title: Public IP
---
# Public IP

The platform provides users with [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) (SLB) as a default single entry point for all of the hosted
applications, located on the hardware nodes. However, for the production
environments, it is recommended receiving and processing the requests via
**Public IP** address(es) that form a direct connection between the Internet
and a specific container. Compared to the access over SLB, such approach
ensures more secure and effective interaction.

![public IP vs shared load balancer](#)

Public IP can be attached to any software stack in your environment (except,
[Memcached](<https://docs.dewacloud.com/docs/memcached/>)
node), representing a more stable solution with less risk to be affected by
other applications. Also, it opens access to such features as [FTP add-
on](<https://docs.dewacloud.com/docs/ftp-ftps-support/>),
[Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>), [remotedebugging](<https://www.virtuozzo.com/application-platform-docs/remote-debugging/>) from IDE, [WebSockets](<https://www.virtuozzo.com/application-platform-docs/websockets/>), etc.

The platform supports two versions of the [Internet
Protocol](<https://en.wikipedia.org/wiki/Internet_Protocol>):

  * _**Internet Protocol version 4 (IPv4)**_ is the fourth revision in the development of the IP and the first version of the protocol to be widely deployed
  * _**Internet Protocol version 6 (IPv6)**_ is the most recent IP version, which is an evolutionary upgrade of IPv4 and is designed to fulfill the need of more addresses, provide better multicast routing and simplify processing by routers

In order to bind an external IP address to the required node, you need to
enable (or [set the required number](<https://www.virtuozzo.com/application-platform-docs/multiple-public-ip/>) of) _Public IPv4_ / _Public IPv6_ within
the central part of the **topology wizard** window.

![wizard add public IP](#)

:::warning Enabling Public IPv4 turns off theAccess via SLBoption by default.
It may cause a temporary (a few minutes) disruption in environment access due
to the DNS cache.In case of attaching external IPs for thehorizontally
scalednodes, each container within the layer will be supplied with its own set
of addresses. :::

To find and manage the allocated IPs in the existing environment, expand the
appropriate _**node**_ string in the environment topology list.

![dashboard manage external ip addresses](#)

Here, upon hovering over IPs, you can get access to the following
functionality:

  * **Copy to Clipboard** \- copies the appropriate address in one click
  * **Attach/Detach IP(s)** \- allows adjusting a number of public IPs (both IPv4 and IPv6)
  * **Detach IP** \- removes a particular address

:::note The public IP is a paid option, which is charged for every hour of its
usage. The exact price is defined by your particular hosting service provider
and can be found at theQuotas & Pricing> Pricing > Optionsframe of the
dashboard.If you have public IP enabled for any node in your environment, you
can’t use theswap domainsfunctionality for it. Consider utilizing theswap
Public IPsAPI instead.If working withmultiple public IPs, the very first
external address attached (of each IPv4 and IPv6 types) is considered
aprimaryone and can only be deleted last. It is used for both incoming and
outgoing traffic, while the rest of IPs can only receive it. :::

## What’s next?[![](#)](<https://www.virtuozzo.com/application-platform-docs/public-ip/#whats-next>)

  * [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
  * [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)
  * [Custom Domains](<https://docs.dewacloud.com/docs/custom-domains/>)
  * [Secure Sockets Layer](<https://docs.dewacloud.com/docs/secure-sockets-layer/>)
  * [FTP/FTPS Support](<https://docs.dewacloud.com/docs/ftp-ftps-support/>)
  * [Multiple Domains with Public IP](<https://docs.dewacloud.com/docs/multiple-domains/>)