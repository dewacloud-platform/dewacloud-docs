---
sidebar_position: 2
slug: /sticky-sessions-traffic-routing
title: Sticky Sessions
---
# Sticky Sessions Routing for Traffic Distributor

**Sticky Sessions** is a routing method that ensures server affinity by "sticking" each user to a specific backend. This method allows users to consistently interact with a single application version throughout their session, maintaining continuity.

### How Sticky Sessions Work:
- On a user's first visit, they are routed to a backend based on the server weights, similar to the **Round Robin** method.
- After the initial connection, the user's browser is assigned to a specific backend using **session cookies**.
- All subsequent requests from the same user will be routed to the same backend, maintaining consistent interaction with the assigned environment.

Unlike IP-based sticky sessions, which may cause imbalance due to users behind proxies, this platform's **cookie-based** approach ensures fair and even distribution of users, as each browser is treated as a unique entity.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/traffic-distributor/routing-methods/sticky-sessions/1%20(1).png" alt="Traffic Distributor sticky sessions routing" max-width="30%"/>

### Use Cases:
- **A/B Testing**: You can set weights (e.g., 50% / 50%) to distribute unique users evenly between two versions of your application, enabling effective testing.
- **Consistent User Experience**: Users will always be routed to the same backend until their session expires or the cookie is removed, ensuring a seamless experience across requests.

### Key Benefits:
- **Persistent routing** for user sessions.
- **Fair distribution** of new users based on server weights.
- Ideal for scenarios requiring server-affinity and continuity of user interaction.

## What’s Next?
- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Round Robin](<https://docs.dewacloud.com/docs/round-robin-traffic-routing/>)
- [Failover](<https://docs.dewacloud.com/docs/failover-traffic-routing/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)