---
sidebar_position: 1
slug: /new-relic-installation
title: New Relic Installation
---
# New Relic Monitoring for Your Application inside the PaaS

**[New Relic](https://newrelic.com/)** is an advanced application performance monitoring (APM) tool designed for real-time tracking and troubleshooting of applications. It provides deep insights into web transactions, application exceptions, and performance bottlenecks. The platform enables you to install New Relic easily, track crucial metrics, and optimize your app's performance.

New Relic can be integrated into your cloud environment using a simplified **New Relic APM Add-On**, which supports both Java- and PHP-based environments. 

## Requirements

Before proceeding with the New Relic installation, make sure that:
- You have a **New Relic account** with your **License Key**.
- You have an existing **cloud environment** on the platform with the application you want to monitor.

### New Relic Add-On Installation

1. **Open the Marketplace**:
   - Log into your platform dashboard and click on **Marketplace** at the top of the page.

   ![PaaS main buttons](#)

2. **Select New Relic APM**:
   - In the **Add-ons** section, search for _New Relic APM_ and click **Install**.

   ![New Relic add-on package](#)

3. **Configure New Relic**:
   - In the installation form, fill out the following fields:
     - **Application name**: The name that will appear in your New Relic dashboard (e.g., _my-project_).
     - **License key**: Your unique New Relic License Key (can be found in your [New Relic account settings](https://login.newrelic.com/login)).
     - **Environment name**: Select the environment where New Relic will be installed.
     - **Nodes**: Choose the specific application server nodes for monitoring.

   ![New Relic add-on installation](#)

   :::tip
   If you skip entering the License Key, the installation will proceed, but New Relic won't report data to your account until the key is added manually later via the **Configuration Manager**.
   :::

4. **Confirm and Install**:
   - Once the details are entered, click **Install** to start the process.

5. **Restart Application Server**:
   - After installation, you must restart the application server to begin gathering performance data. Use the **Restart** button next to the application server node.

   ![restart Tomcat server](#)

   :::warning
   Restarting a single application server node will cause temporary downtime. However, if you have horizontally scaled your app server, the impact will be minimized as servers restart sequentially.
   :::

6. **View Monitoring Data**:
   - Log into your New Relic account to access real-time performance metrics, including server health, transaction times, and error rates.

   ![monitoring with New Relic](#)

By following these steps, you'll successfully integrate New Relic into your environment and begin tracking your application’s performance with minimal setup time.

## What's Next?

- [Application Monitoring](https://docs.dewacloud.com/docs/view-app-statistics/)
- [New Relic Update](https://docs.dewacloud.com/docs/update-new-relic/)
- [Java Agent Integration](https://docs.dewacloud.com/docs/javaagent/)
- [PHP Extensions](https://docs.dewacloud.com/docs/php-extensions/)
- [JPS Collection](https://github.com/jelastic-jps)