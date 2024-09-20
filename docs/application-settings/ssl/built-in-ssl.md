---
sidebar_position: 2
slug: /built-in-ssl
title: Built-In SSL
---
# Built-In SSL Certificates

The **built-in wildcard SSL** provided by the platform is a convenient solution for users looking for a fast and secure way to protect their websites. This SSL certificate (referred to as _**{hosterName} SSL**_ in the dashboard) offers the following key benefits:

- **Convenient Management**: SSL is pre-configured and can be enabled with just one click in the topology wizard.
- **Fast Validation**: Domain-level verification is completed in minutes, and a security seal is issued promptly.
- **Enterprise-Level Data Encryption**: The encryption strength assures customers that their data is secure.

## Steps to Enable Built-In SSL

To obtain and configure a **built-in SSL certificate**, follow these simple steps:

### 1. Log into the Platform Dashboard

Open the platform dashboard and click the **New Environment** button located at the top-left corner, or select the **Change Environment Topology** icon next to your existing environment.

![PaaS main buttons](#)

### 2. Set Up Your Environment

In the **Topology Wizard**, configure your environment according to your requirements. Once done, navigate to the **SSL** section located at the top-left corner of the frame. Enable the **Built-In SSL** by toggling the appropriate switcher.

![platform built-in SSL](#)

> **Note**: Built-in SSL is **not compatible with Public IP addresses** attached to your servers. This SSL will only apply to the platform-specified domain (e.g., `my-project.jelastic.com`).

### 3. Create or Apply Changes

After configuring your SSL, click the **Create** button to set up your new environment, or **Apply** to update the SSL for an existing environment.

Once the environment is deployed, you can access it via the **Open in Browser** button, and your connection will be secured with **HTTPS**.

## What’s Next?
Explore additional SSL options for your platform:

- [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl/>)
- [Let’s Encrypt SSL](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>)
- [Self-Signed Custom SSL](<https://docs.dewacloud.com/docs/self-signed-ssl/>)
- [Security Configs for Applications with NGINX Balancer](<https://docs.dewacloud.com/docs/nginx-balancer-security/>)