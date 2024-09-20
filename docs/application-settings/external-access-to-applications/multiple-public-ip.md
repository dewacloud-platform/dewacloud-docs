---
sidebar_position: 3
slug: /multiple-public-ip
title: Multiple Public IP
---
# Multiple Public IP Addresses for a Single Container

![multiple public IP](#)

The platform supports assigning multiple [public IP](<https://docs.dewacloud.com/docs/public-ip/>) addresses (both IPv4 and IPv6) to a single container. These IPs can either be of one version (IPv4 or IPv6) or both simultaneously.

For example, when hosting multiple websites on a single node, the multi-IP option allows handling them as separate production-ready services by applying dedicated [custom domain names](<https://docs.dewacloud.com/docs/custom-domains/>) and [SSL certificates](<https://www.virtuozzo.com/application-platform-docs/secure-sockets-layer/>) for each site. This feature can also be beneficial for managing network appliances (e.g., load balancers) with multiple IP addresses for each network.

:::note
Both Public IPv4 and IPv6 are paid options, charged separately on an hourly basis. The exact cost and allowed number of IPs per node/environment can be found in the **Quotas & Pricing > Account Limits** section of the dashboard.
:::

You can assign multiple IP addresses via the platform dashboard by adjusting the **Public IPv4** and **Public IPv6** spinners when creating or modifying an environment's topology.

![wizard add multiple IP](#)

Here, you can select or enter the required number of addresses for both types. If the limit is reached, contact your [hosting provider](<https://www.virtuozzo.com/application-platform-partners/>) to increase the available IP address count.

## Managing Multiple Public IP Addresses

On the main dashboard, the IP addresses assigned to each node in an environment are displayed in the following order:

- **Private IP**: Internal IP address automatically assigned to the container (listed under the Node ID).
- **Public IPv4**: External IPv4 address or an expandable list of assigned addresses.
- **Public IPv6**: External IPv6 address or an expandable list of assigned addresses.

![dashboard managing multiple IP](#)

Each IP address has a **Copy to clipboard** option and a **Detach** option. You can also manage the total number of assigned IPs through the **Attach/Detach IP(s)** button next to the list title.

![change number of public IPs](#)

The **Node Settings** box displays the number of currently attached addresses. The **Apply** button remains dimmed until changes are made.

:::note
The **primary IP** (first attached Public IP of each type) is used for both incoming and outgoing traffic. It cannot be deleted unless no other addresses of the same type remain on the node. Other IPs can only handle incoming traffic.
:::

You can also see all IP addresses assigned to a container within the environment's topology details when connected via [SSH Gate](<https://docs.dewacloud.com/docs/ssh-access/>).

![multiple public IP in SSH](#)

The container's external addresses are shown under the **WAN IP** column, while the **LAN IP** column lists the internal address.

:::note
If the type of the newly attached IP is not explicitly indicated (e.g., within a **Cloud Scripting** solution or an application/add-on package from the platform **Marketplace**), IPv4 is used by default.
:::

## API Reference on Multiple Public IPs

### 1. Attaching or Detaching Public IP via API

You can use the **SetExtIpCount** method to attach or detach a Public IP address via the platform API.

```bash
https://[hoster-api-host]/1.0/environment/control/rest/setextipcount?envname=[string]&session=[string]&type=[string]&count=[int]&nodegroup=[string]&nodeid=[int]
```

#### Parameters:
- **envname**: The name of the environment.
- **session**: Current user session ID.
- **type**: IP version (`ipv4` or `ipv6`).
- **count**: Number of IPs to add or remove.
- **nodegroup**: The destination node group (e.g., `bl`, `cp`, `sqldb`, `nosqldb`, `storage`, `vps`, or `build`).
- **nodeid**: ID of the destination node.

To increase or reduce the number of IPs (IPv4 or IPv6), adjust the **count** parameter.

:::note
The **AttachExtIp** and **DetachExtIp** methods (previously used to add/remove Public IPs) are deprecated but remain available for backward compatibility.
:::

### 2. Swapping Public IP Addresses via API

The **SwapExtIps** method allows you to swap Public IP addresses between two nodes within the same or different environments.

```bash
https://[hoster-api-host]/1.0/environment/control/rest/swapextips?envname=[string]&session=[string]&sourcenodeid=[int]&destnodeid=[int]&sourceip=[string]&destip=[string]
```

#### Parameters:
- **envname**: Name of the environment.
- **session**: Current user session ID.
- **sourcenodeid**: ID of the node to move the IP from.
- **destnodeid**: ID of the destination node (can belong to another environment).
- **sourceip**: Source Public IP to swap.
- **destip**: Destination Public IP to swap.

To swap all Public IPs between nodes, omit the **sourceip** and **destip** parameters.

:::note
The **SwapExtIps** method currently works only with IPv4 addresses.
:::

## What’s Next?
- [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
- [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
- [HTTP Load Balancing](<https://docs.dewacloud.com/docs/load-balancing/>)
- [TCP Load Balancing](<https://docs.dewacloud.com/docs/tcp-load-balancing/>)