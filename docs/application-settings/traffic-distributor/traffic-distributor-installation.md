---
sidebar_position: 3
slug: /traffic-distributor-installation
title: Traffic Distributor Installation
---
# Traffic Distributor Installation

Installing the **Traffic Distributor** through the platform's **Marketplace** is a straightforward process. The following guide walks you through the steps needed to set up Traffic Distributor to manage and distribute traffic across multiple environments.

:::note This guide focuses on installing Traffic Distributor for new environments. For applying it to existing projects, refer to the **Inject Traffic Distributor into Running Project** guide. :::

## Installation Steps

### Step 1: Access the Marketplace
1. Log in to the platform dashboard.
2. Click the **Marketplace** button at the top of the dashboard.

![PaaS main buttons](#)

### Step 2: Find the Traffic Distributor Package
1. Within the **Apps** tab of the Marketplace, navigate to the **Dev & Admin Tools** section, or use the **Search** field to find **Traffic Distributor**.
2. Click **Install** to proceed.

![Traffic Distributor in Marketplace](#)

### Step 3: Review Traffic Distributor Overview
1. The first time you install Traffic Distributor, you'll be shown an overview of its features.
2. Click **OK** to proceed.

:::tip You can select the **Don’t show this message again** option to skip this window in the future. :::

### Step 4: Configure Traffic Distributor Settings
1. In the installation frame, configure the following settings:
   - **Entrypoint**: Choose between **Shared Load Balancer** or **Public IP**.
   - **Balancers**: Select the number of NGINX instances to use.
   - **Routing Method**: Choose one of the three available routing methods: **Round Robin**, **Sticky Sessions**, or **Failover**.
   - **Traffic Ratio**: Set the percentage distribution of traffic between environments.
   - **HTTPS**: Enable this if backends use HTTPS.
   - **Backends**: Select two environments for traffic distribution (from your account list or specify custom IP addresses/domains).
   - **Environment**: Set the domain name for the environment.
   - **Display Name**: Optionally, set an alias for the environment.
   - **Region**: Select a region for the environment.
   
2. Click **Install** to complete the setup.

![Configure Traffic Distributor installation](#)

### Step 5: Installation Completion
1. After a few minutes, the installation will complete.
2. A success window will appear with additional tips on using Traffic Distributor, such as **Blue-Green Deploy**, **A/B Testing**, and **Failover Protection**.

![Traffic Distributor installed](#)

:::note The default vertical scaling configuration (up to 16 cloudlets) should be sufficient to handle a significant amount of traffic. :::

## Traffic Distributor Reconfiguration

You can adjust your Traffic Distributor setup at any time after installation.

### Step 1: Access Reconfiguration Options
1. Hover over the NGINX instance in your Traffic Distributor environment and click the **Add-Ons** button.

![Traffic Distributor add-on](#)

### Step 2: Configure Add-On Settings
1. Click **Configure** to access the reconfiguration options. You can change the same settings as during installation:
   - **Entrypoint**
   - **Balancers**
   - **Routing Method**
   - **Traffic Ratio**
   - **HTTPS**
   - **Backends**
   
2. Confirm changes by clicking **Apply**.

### Step 3: Monitor Changes
1. Upon successful reconfiguration, you’ll see a notification at the top right of the dashboard.
2. You can also view logs of Traffic Distributor actions and changes.

![Show Traffic Distributor logs](#)

## What’s Next?
- [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
- [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)
- [Blue-Green Deploy](<https://docs.dewacloud.com/docs/blue-green-deploy/>)
- [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
- [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)