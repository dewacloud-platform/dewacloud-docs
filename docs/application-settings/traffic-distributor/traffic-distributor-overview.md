---
sidebar_position: 1
slug: /traffic-distributor-overview
title: Traffic Distributor Overview
---
# Traffic Distributor Overview

The **Traffic Distributor** is a load balancing solution designed to efficiently distribute traffic between multiple environments, improving your project's scalability and reliability. It offers advanced traffic routing methods and features such as high availability, Blue-Green deployment, A/B testing, and failover protection, simplifying the management of large-scale applications.

## Key Features:
- **High Availability & Failover**: Ensures continuous availability by distributing traffic between multiple hosts, minimizing downtime even if one instance fails.
- **Blue-Green Deployment**: Allows seamless updates by directing traffic to one environment while updating another, ensuring zero downtime.
- **A/B Testing**: Enables traffic routing between different versions of your application, allowing real-time performance comparison.
- **Customizable Routing Methods**: Choose between Round Robin, Sticky Sessions, and Failover routing to meet your application's needs.
- **Health Checks**: Automatically monitors backends, ensuring requests are only sent to healthy instances.
- **Extensibility**: Allows for advanced configuration via NGINX for specific requirements, such as caching or SNI.

## Routing Methods

The Traffic Distributor supports three routing methods to suit various use cases:

### 1. Round Robin
- **Description**: Distributes traffic evenly among all environments by rotating requests.
- **Use Case**: Ideal when identical content is served by all instances.
- **Setup**: Requires identical application instances for balanced traffic distribution.

### 2. Sticky Sessions
- **Description**: Assigns users to a specific backend based on session information, ensuring all requests during the session are handled by the same server.
- **Use Case**: Useful when session persistence is needed (e.g., shopping carts).
- **Setup**: Configures "stickiness" by session to route users consistently to the same server.

### 3. Failover
- **Description**: Routes all traffic to a primary server but automatically switches to a backup server if the primary fails.
- **Use Case**: Critical for maintaining uptime in high-availability applications.
- **Setup**: Requires a backup environment to ensure seamless failover if the primary server goes down.

## Traffic Distributor Implementation

The Traffic Distributor is implemented as a separate environment containing NGINX load balancer nodes. To set it up, select the hosts, routing type, and traffic ratio, and configure it through a simple form. The installation creates a flexible load-balancing system that integrates with either a [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>) or [public IP](<https://www.virtuozzo.com/application-platform-docs/public-ip/>) addresses.

Traffic Distributor can handle multiple protocols, including HTTP, HTTPS, and WebSockets. The load balancing occurs during the HTTP handshake, and the WebSocket connection is persistent thereafter.

### Use Cases:
- **Even Load Distribution**: Balance requests across servers to optimize resource usage.
- **Blue-Green Deployment**: Direct traffic to one environment while updating another, enabling zero-downtime updates.
- **A/B Testing**: Simultaneously test two versions of an application to measure performance differences.
- **Failover Protection**: Ensure uninterrupted service by switching traffic to a backup server in case of failure.

## What’s Next?
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)
- [Blue-Green Deployment](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)