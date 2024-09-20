---
sidebar_position: 1
slug: /round-robin
title: Round Robin
---
# Round Robin Routing for Traffic Distributor

**Round Robin** is the simplest and most widely used routing method for **Traffic Distributor**. It distributes incoming requests to backends in rotation based on predefined server weights, providing high availability and balanced load distribution for your applications.

### Key Features:
- **Equal Distribution**: Requests are distributed evenly across backends based on server weights.
- **Load Balancing**: Each backend is utilized according to its assigned weight, ensuring optimal resource usage.

### How It Works:
Requests are routed in a cyclical fashion to each backend based on the set weight, resulting in balanced traffic distribution. 

Examples:
- **Equal Weights (50% / 50%)**: Each server alternates between processing requests, resulting in balanced traffic distribution.
- **Weighted Distribution (70% / 30%)**: For every 10 requests, 7 are sent to the first server and 3 to the second, allowing for flexible load management.
- **Single Backend (100%)**: All requests are directed to one server. This can be useful for scenarios such as **Blue-Green Deployment** or hardware migration with zero downtime.

![Traffic Distributor round robin routing](#)

### Use Case Considerations:
- This method is ideal when backends have **identical content**, as requests are processed by both servers.
- If content differs between environments, consider other routing methods like **Sticky Sessions** or **Failover**.

## What’s Next?
- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Sticky Sessions](<https://docs.dewacloud.com/docs/sticky-sessions-traffic-routing/>)
- [Failover](<https://docs.dewacloud.com/docs/failover-traffic-routing/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)