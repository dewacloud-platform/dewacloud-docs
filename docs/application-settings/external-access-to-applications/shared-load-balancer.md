---
sidebar_position: 1
slug: /shared-load-balancer
title: Shared Load Balancer
---
# Shared Load Balancer

The platform utilizes several **Shared Load Balancer** (SLB) components to process all incoming requests (except direct connections via [public IP](https://docs.dewacloud.com/docs/public-ip/)) sent to hosted environments. SLB acts as an **NGINX proxy server**, connecting the client (e.g., browser) with your applications deployed on the platform.

![shared load balancer overview](#)

Shared Load Balancers route external requests over the internal network to connect to the required applications. SLB limits each source address to 50 simultaneous connections to prevent _DDoS attacks_.

To ensure high availability, the platform uses **multiple synchronized Shared Load Balancers** hosted on different servers, handling requests simultaneously. These balancers work with shared data storage, ensuring full interchangeability if one instance fails.

![shared load balancer high availability](#)

This approach creates multiple entry points for environments, efficiently distributing incoming traffic.

:::note
We recommend using SLB for **development** and **test** environments. For **production** environments that handle high traffic, it's more appropriate to use a [public IP](https://docs.dewacloud.com/docs/public-ip/) for enhanced security and customization options, like **Custom SSL** and **Custom Domain**.
:::

## Backend Health Check with Shared Load Balancer

The platform's SLB uses the [NGINX upstream check module](https://github.com/yaoweibin/nginx_upstream_check_module) to constantly monitor server health using these settings:

```bash
check interval=15000 rise=2 fall=3 timeout=2000 default_down=false;
```

- SLB assumes all containers are "up" upon startup.
- The system checks node availability every 15 seconds.
- If no response is received within 2 seconds, the check fails.
- Three consecutive failures mark the node as "down."
- Two consecutive successes mark the node as "up."

:::tip
If an environment has multiple backends (application servers), dedicated load balancer nodes are automatically added to manage traffic and perform health checks.
:::

## Deny Access via Shared Load Balancer

You can easily disable external access to environment nodes through SLB with a predefined option in the platform. This prohibits access via default domain names with a single click, without the need for public IPs or firewall adjustments. You can enable or disable **Access via SLB** in the topology wizard.

![access via SLB](#)

:::note
If a public IP is added to a layer, **Access via SLB** is automatically disabled for that layer to enhance security. However, you can re-enable SLB access to use both options simultaneously.
:::

### Enabled SLB Access (Default):
- Nodes are accessible via the SLB through environment domain names on default ports (_80_, _8080_, _8686_, _8443_, _4848_, _4949_, _7979_).
- The **Open in Browser** button opens the relevant service (e.g., a database admin panel).
- Nodes' links are included in emails.

### Disabled SLB Access:
- Nodes are inaccessible via SLB, and layers are isolated from the SLB.
- Clicking **Open in Browser** returns a _403 Forbidden_ error.
- Nodes' links are excluded from emails.
- **SSH** and **endpoints** access remains unaffected.

Layers with SLB access disabled are labeled accordingly in the dashboard:

![no SLB access label](#)

Attempting to access such nodes will result in a **403 Forbidden** error:

![403 forbidden access](#)

### Common Use Cases:
- Closing public SLB access to nodes intended for internal use only (e.g., databases).
- Forbidding SLB access to nodes with public IPs and custom domains.
- Configuring topologies that allow load balancer connections but block direct URL access to containers.

For **development** and **testing** environments, SLB access is often sufficient. However, for **production** environments, it's recommended to disable SLB access and use [public IP](https://docs.dewacloud.com/docs/public-ip/) and [custom domains](https://docs.dewacloud.com/docs/custom-domains/) for better security.

## What's Next?

- [Load Balancing](https://docs.dewacloud.com/docs/load-balancing/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)
- [Endpoints](https://docs.dewacloud.com/docs/endpoints/)
- [Isolated Containers](https://docs.dewacloud.com/docs/isolated-containers/)