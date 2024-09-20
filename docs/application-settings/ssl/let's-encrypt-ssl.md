---
sidebar_position: 5
slug: /let's-encrypt-ssl
title: Let's Encrypt SSL
---
# Free Let’s Encrypt SSL Certificates: Out-of-Box Integration with the Most Popular Software Stacks

Ensuring security for hosted applications is critical, and one of the primary methods for securing data exchange is by encrypting traffic through the HTTPS protocol. **Let’s Encrypt** offers a free and automated solution for obtaining trusted SSL certificates, simplifying the process and enabling users to secure applications quickly.

## Key Advantages of Let’s Encrypt SSL
- **Free and Open**: Let’s Encrypt provides SSL certificates without charge, reducing costs associated with SSL implementation.
- **Automatic Renewal**: Certificates are valid for 90 days and renew automatically, ensuring continuous encryption.
- **Wide Integration**: Jelastic developers have integrated Let’s Encrypt with several popular load balancers and application server stacks for easy out-of-box installation.

Supported stacks include:
- **Load Balancers**: NGINX, Apache LB, HAProxy, Varnish
- **Java Servers**: Tomcat, TomEE, GlassFish, Payara, Jetty
- **PHP Servers**: Apache PHP, NGINX PHP
- **Ruby Servers**: Apache Ruby, NGINX Ruby

If Let’s Encrypt SSL is required for other stacks, simply add a load balancer in front of your application servers to support SSL termination.

## How It Works
When installing the Let’s Encrypt add-on, the platform:
1. Downloads and configures the Let’s Encrypt client (certificate management agent, or CMA).
2. Requests SSL certificates from Let’s Encrypt Certificate Authority (CA).
3. Applies the issued certificates to the software stack and adds a cron job to handle renewals automatically.

**Domain Control Validation**:
Let’s Encrypt CA checks the environment’s entry point at port 80 to validate domain ownership. Once validated, SSL certificates are issued, propagated across the environment, and applied to all necessary nodes.

![Let’s Encrypt Add-on Flow](#)

## Let’s Encrypt SSL Add-On Installation

To install the SSL add-on, follow these steps:
1. **Login** to the Jelastic dashboard and go to **Marketplace**.
2. In the **Add-ons** section, locate the _Let’s Encrypt Free SSL_ package and click **Install**.

### During Installation:
- **External Domain(s)**: You can leave this field blank to create a dummy SSL certificate for the internal environment URL or specify linked external domain(s) to generate trusted SSL certificates.
- **Environment Name**: Choose the environment to install the SSL certificate.
- **Nodes**: Select the appropriate entry point layer (usually auto-detected).

Once configured, click **Install** to initiate the process. The add-on may automatically attach a **Public IP** to the environment, as this is required for Let’s Encrypt to work.

![SSL Certificate from Let’s Encrypt](#)

After installation, you can access the environment via HTTPS, ensuring a secure and trusted connection.

## Managing Let’s Encrypt Certificates

### Automatic Updates:
By default, certificates are automatically renewed 30 days before expiration. This process is handled via a daily cron job. You will receive an email notification before renewal.

### Manual Updates:
You can manually update certificates by going to the **Add-ons** tab in the dashboard and selecting **Update Now**.

### Reconfiguration:
To modify the certificates, click the **Configure** button in the Let’s Encrypt panel and adjust domain settings. Reconfiguration may trigger the generation of new certificates.

## API-Based Installation and Management

Let’s Encrypt certificates can also be managed via Jelastic’s API. For example, to install the add-on, use the **install** method:

```bash
curl -X POST 'https://<hoster-api-host>/1.0/marketplace/jps/rest/install' -d session=<session> -d jps=letsencrypt-ssl-addon -d envName=<env_name> -d nodeGroup=<node_group> --data-urlencode settings='{"customDomains":"example.com"}'
```

Additional API methods are available for certificate renewal, reconfiguration, and removal.

## Conclusion

With **Let’s Encrypt**, you can quickly and easily secure your environment for free, with automatic renewals and minimal configuration. This integration with Jelastic PaaS allows you to ensure your applications are secure without the complexity or cost of traditional SSL solutions.

For more information, visit [Jelastic PaaS Service Providers](https://jelastic.cloud/).