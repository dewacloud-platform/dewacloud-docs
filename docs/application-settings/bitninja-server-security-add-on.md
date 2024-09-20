---
sidebar_position: 11
slug: /bitninja-server-security-add-on
title: BitNinja Server Security Add-On
---
# BitNinja Server Security Add-On

**[BitNinja](https://bitninja.io/)** is an easy-to-use, security-as-a-service defense tool designed to protect servers from hackers, botnets, attackers, and malicious activities with minimal effort. BitNinja collects and shares attack data across a network of protected servers, creating a robust **Defense Network**. This add-on enables you to protect your server with BitNinja through the platform in just a few clicks.

## BitNinja Installation

The **[BitNinja](https://github.com/jelastic-jps/bitninja)** add-on is available for all certified nodes (except _[VPS](https://docs.dewacloud.com/docs/vps/)_).

1. **Open the Marketplace**: 
   - Access the platform's dashboard, search for **BitNinja Service** in the **Add-Ons** section, and click **Install**.

   ![marketplace BitNinja add-on](#)

   :::tip
   You can also install BitNinja directly from the **Add-Ons** panel for a specific environment layer.
   :::

2. **Choose the Target Environment**:
   - Select the desired environment and layer. BitNinja provides a range of security modules based on the selected layer, such as:
     - **Load Balancer**: IP Reputation, Web Application Firewall, DOS Detection, Port Honeypot
     - **Application Server**: IP Reputation, Proxy Filter, FTP Captcha, SMTP Captcha, Malware Detection, Web Application Firewall, Defense Robot
     - **Database**: IP Reputation
     - **Shared Storage**: IP Reputation, Proxy Filter, FTP Captcha, SMTP Captcha, Malware Detection
     - **Build Node**: IP Reputation, Malware Detection

   :::note
   All features are available for activation, but the modules listed above are enabled by default based on common use cases.
   :::

   ![BitNinja service installation](#)

   :::warning
   BitNinja requires a license to use. License details are outlined in the **License Pricing** section below.
   :::

3. **Activate BitNinja**:
   - After installation, you’ll receive an email titled "BitNinja Account Activation". Follow the link to set up a password and confirm your account.

   ![BitNinja account activation email](#)

   :::warning
   Only one BitNinja account can be created per email address.
   :::

### License Pricing

BitNinja follows a **pay-as-you-go** billing model, billed hourly (730 hours per month) for active containers. Licenses are automatically managed:
- Licenses are issued for every container when BitNinja is installed.
- New containers created through horizontal scaling are automatically issued licenses.
- Licenses are decommissioned for stopped or removed containers.

Each license is billed at **$10 per month** (or approximately **$0.014 per hour**).

:::warning
Costs may vary for platforms with a currency other than USD due to conversion rates.
::: 

For example, if you have an environment with a load balancer, multiple application servers, and a database cluster, you will be charged for each licensed node. BitNinja automatically adjusts the license count as nodes are added or removed.

## BitNinja Add-On Options

You can manage BitNinja through the **Add-Ons** section:
- **BitNinja Admin Panel**: Access to monitor security events.
- **Restart Agent**: Restart the BitNinja agent.
- **Uninstall**: Remove BitNinja from your environment.

   ![BitNinja add-on options](#)

   You can log into the BitNinja console to monitor attacks and security events in real time.

   ![BitNinja admin panel events](#)

## Vendor Support

If you encounter any issues, you can contact BitNinja support via the quick **chat** option or submit a ticket through the **Get Help** menu.

   ![BitNinja support](#)

## What’s Next?

- [Monitoring with New Relic](https://docs.dewacloud.com/docs/new-relic-installation/)
- [Managing Locale Settings](https://docs.dewacloud.com/docs/locale-settings/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Managing Timezone Settings](https://docs.dewacloud.com/docs/timezone-management/)