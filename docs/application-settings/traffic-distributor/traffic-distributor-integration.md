---
sidebar_position: 4
slug: /traffic-distributor-integration
title: Traffic Distributor Integration
---
# Integrating Traffic Distributor with a Running Application

Integrating **Traffic Distributor (TD)** into an already running application is a powerful way to distribute traffic across multiple environments, providing enhanced availability, failover protection, and more. The following guide explains how to achieve this integration without downtime, ensuring a smooth transition for your users.

:::note Traffic Distributor enables several useful features, such as invisible application updates with **blue-green deployment**, A/B testing, and advanced failover protection. :::

## Steps for Integration

### 1. Add Application Copy to Traffic Routing

1. First, ensure you have a running application in one environment. For this example, we’ll call it `primary-env`.
   
   ![primary environment](#)

2. Create a second environment to serve as a backup or an alternative version of the application. You can do this by cloning the `primary-env` environment, which will ensure the second environment (`second-env`) contains the same data and settings.
   
   ![environment clone](#)

   :::tip Ensure to adjust any "hardcoded" data, such as IP addresses or direct links, in the cloned environment if necessary. :::

3. Next, [install Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>) and specify both environments (`primary-env` and `second-env`) as backends.
   
   ![Traffic Distributor installation](#)

   :::tip If multiple environment regions are available, consider hosting the second environment in a different region for better failover protection in case of hardware failures. :::

4. After installation, Traffic Distributor will be ready to manage traffic between your environments. However, you need to route the incoming traffic to the Traffic Distributor, rather than directly to `primary-env`.

### 2. Configure App Entrypoint via Traffic Distributor

If your application uses a [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>), you will need to move this entry point to the Traffic Distributor environment.

#### Swap Domains (for CNAME or ANAME)

1. Open the **Settings** of your current environment (`primary-env`), where the custom domain is already bound.
   
   ![primary environment settings](#)

2. In the **Custom Domains** section, choose **Swap Domains** and select the Traffic Distributor environment from the drop-down menu.

   ![swap domains with Traffic Distributor](#)

3. Click **Swap** and confirm the changes. Your custom domain will now point to the Traffic Distributor environment, which will handle traffic between the two backends.

#### Swap Public IPs (for A Records)

If your custom domain is associated with an **A Record**, you will need to swap the public IP address between the environments.

1. Ensure that the Traffic Distributor environment has a [Public IP](<https://docs.dewacloud.com/docs/public-ip/>) attached. Copy the new IP address from the dashboard.
   
   ![Traffic Distributor public IP](#)

2. Access your DNS manager and update the **A Record** to point to the new IP address of the Traffic Distributor environment.

3. Wait for the DNS record cache to expire for the changes to take effect. The **TTL** (Time To Live) setting in your DNS manager will show how long the current IP address remains in the cache.

4. After confirming the entry point is updated, you can detach the public IP from the `primary-env` environment if it's no longer needed, saving on costs.

Now, all incoming traffic for your custom domain will be routed through the Traffic Distributor, which will distribute requests between your environments according to the traffic ratio you have set.

## What’s Next?

- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)