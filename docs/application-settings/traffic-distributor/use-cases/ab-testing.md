---
sidebar_position: 3
slug: /ab-testing
title: A/B Testing
---
# A/B Testing with Traffic Distributor

A/B testing is a powerful method for improving the conversion rate of a website or application by comparing two versions and determining which one leads to better user engagement or higher conversions. With [Traffic Distributor](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor/>), performing A/B testing becomes easy and efficient. Follow the steps below to set up and execute A/B testing for your application.

## Steps for Setting Up A/B Testing

### 1. Prepare Two Application Versions

To conduct A/B testing, you'll need two different versions of your application that you wish to compare. You also need a way to track user actions (e.g., clicks, sign-ups, purchases, etc.) that contribute to the conversion rate.

:::tip
You can use simple code to count conversions, such as incrementing a variable on specific actions, or use dedicated third-party testing tools that offer more advanced features like graphical analysis and automatic calculation of conversion rates.
:::

### 2. Install or Configure Traffic Distributor

If you haven’t already, [install Traffic Distributor](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor-installation/>) from the platform Marketplace, or reconfigure an existing Traffic Distributor setup to fit your A/B testing needs.

1. **Routing Method**: Select _Sticky Sessions_.
2. **Traffic Ratio**: Set the ratio to _50:50_ to evenly distribute traffic between the two application versions.

![Traffic Distributor configurations for A/B testing](#)

:::warning
**Do not use the Round Robin routing method** for A/B testing. Since A/B testing compares different content on each backend, Round Robin routing could lead to inconsistent availability of elements between requests.
:::

### 3. Route Traffic and Monitor

Once Traffic Distributor is configured, all incoming user requests will be evenly routed between the two versions of your application. Share the entry point link (either the environment domain or your [custom domain](<https://docs.dewacloud.com/docs/custom-domains/>)) with users to begin the testing phase.

Monitor the conversion rates using the tools you set up, ensuring you track user interactions over a period of time.

### 4. Analyze Results

After the testing period, analyze the data collected to determine which version of your application yielded a higher conversion rate. The version with the better conversion rate can be considered for production, while the other version can either be discarded or further optimized for future tests.

:::tip
Once you've identified the better-performing version, consider [injecting Traffic Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>) into your production environment to ensure high availability and failover protection.
:::

## What’s Next?

- [Traffic Distributor Overview](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor-installation/>)
- [Traffic Distributor Injection](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor-injection/>)
- [Blue-Green Deploy](<https://www.virtuozzo.com/application-platform-docs/blue-green-deploy/>)
- [Failover Protection](<https://www.virtuozzo.com/application-platform-docs/failover-protection/>)