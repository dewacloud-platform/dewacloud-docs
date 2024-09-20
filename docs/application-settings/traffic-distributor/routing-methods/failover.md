---
sidebar_position: 3
slug: /failover
title: Failover
---
# Failover Routing for Traffic Distributor

**Failover** is a routing method designed to provide high availability by maintaining a fully functional backup environment in reserve. The method ensures that all incoming requests are initially directed to the primary server, while the secondary (backup) server remains on standby. If the primary server becomes unavailable, the backup server automatically takes over to handle the requests.

![Traffic Distributor failover routing](#)

### How Failover Routing Works:
- **Primary and Backup Setup**: You can configure one server as the primary and another as the backup. All requests go to the primary server as long as it is operational.
- **Automatic Failover**: If the primary server encounters a failure, the system automatically redirects requests to the backup server.
- **No Downtime**: Users will not notice any interruption since the backup server will handle all requests seamlessly.
- **Geographical Redundancy**: By placing your primary and backup servers in different [environment regions](<https://docs.dewacloud.com/docs/environment-regions/>), you can ensure higher resilience and protect against region-specific hardware failures.

### Key Characteristics:
- **Traffic Ratio**: This method doesn't allow for traffic distribution ratios (always 100% to 0%). The primary server handles all traffic until failure, at which point traffic is routed to the backup.
- **High Availability**: Guarantees minimal downtime by quickly switching to a backup environment in the event of a failure.
- **User Transparency**: Users are automatically redirected to the working server without experiencing downtime or disruptions.

## What’s Next?
- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Round Robin](<https://docs.dewacloud.com/docs/round-robin-traffic-routing/>)
- [Sticky Sessions](<https://docs.dewacloud.com/docs/sticky-sessions-traffic-routing/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)