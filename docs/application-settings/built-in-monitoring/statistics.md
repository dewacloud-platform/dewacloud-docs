---
sidebar_position: 2
slug: /statistics
title: Statistics
---
# Statistics Monitoring

Statistics monitoring is an essential tool for efficiently managing your environment's resources. The platform provides built-in statistics to help you monitor billable resource consumption and optimize your environment's topology to reduce costs.

## View Statistics

You can view usage statistics for various nodes in your environment, such as:
- _Application servers_
- _Balancers_
- _Web servers_
- _Databases_

### How to View Statistics:
1. **Log into the Platform Dashboard** and navigate to your environment.
2. **Click the "Statistics" Button** next to the node you want to track.

![view app statistics env](#)

### Types of Tracked Resources:
In the statistics panel, you'll find metrics for:
- **RAM**: Memory consumption (in MiB)
- **CPU**: Processor load (in MHz)
- **Network**: Internal and external traffic (in MB)
- **Disk**: Data stored (in MB) and I/O operations (in IOPS)

![view app statistics statistics](#)

### Usage Limits:
- **RAM** and **CPU** depend on the number of [cloudlets](https://docs.dewacloud.com/docs/cloudlet/).
- **Disk** can be adjusted within your allowed range.
- **Network** and **IOPS** limits are predefined by your hosting provider.

You can adjust the display using the _Interval_ and _Duration_ settings, as well as enable or disable specific resource types at the top of the panel.

#### Statistics Collection:
The platform collects statistics every minute, storing data for an hour to implement the accurate "Pay-per-Use" model. Data is then aggregated into one-hour blocks:
- For **CPU**, **Network**, **Disk IOPS**, and **Disk IO**, the platform sums the values.
- For **RAM** and **Disk**, the platform uses the maximum value during the hour.

### Monitoring Resource Usage:
Use the data to analyze your application's resource consumption, predict future costs, and manage your environment more effectively. You can also configure [load alerts](https://www.virtuozzo.com/application-platform-docs/load-alerts/) to notify you when usage exceeds or falls below a certain threshold.

For more detailed information on resource consumption and billing, refer to [resources charging](https://docs.dewacloud.com/docs/resource-consumption/).

## I/O Usage Monitoring

**Input/Output Operations per Second (IOPS)** is a common metric used to measure system efficiency based on read/write operations without degrading performance.

1. **View IOPS Data**:
   The IOPS data is displayed in the **Disk** statistics section, alongside other resource metrics. Hover over a data point to see detailed information about disk space, IOPS, and limits.

![view app statistics disk 1](#)

2. **Avoid Performance Degradation**:
   A red dotted line on the graph indicates the IOPS limit, set by your hosting provider. If your container reaches this limit, performance may be negatively affected.

3. **Adjusting IOPS Limit**:
   The IOPS limit depends on the selected interval. For example, with a 1-hour interval, the IOPS limit is increased proportionally.

![view app statistics disk 3](#)

## What’s Next?

- [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
- [Charged Resources](https://docs.dewacloud.com/docs/resource-consumption/)
- [Load Alerts](https://docs.dewacloud.com/docs/load-alerts/)