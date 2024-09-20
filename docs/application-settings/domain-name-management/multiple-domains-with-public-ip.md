---
sidebar_position: 6
slug: /multiple-domains-with-public-ip
title: Multiple Domains with Public IP
---
# Setting Up Multiple Domains with Public IP

## The Benefits of Having Multiple Domains{#the-benefits-of-having-multiple-domains}

  * _**Usability**_

One of the main benefits of having multiple domain names is that it gives you _multiple points of entry_: this can be useful if, for example, you want different domains leading to differently themed sites for different marketing campaigns or user experiences.

  * _**Cost Saving**_

Another benefit is the ability to have _more than one domain running on a single environment_. For example, you can have two different applications with two different domains running on a single Tomcat instance.

## Setting Up Multiple Domains{#setting-up-multiple-domains}

_In order to use a domain name for your application, you need to register it or have administrative access to it._

1\. Log into the PaaS account.

2\. While in the platform dashboard, click the **Create environment** button:

![create environment](#)

3\. In the **Environment Topology** dialog, pick your application server (for example, [Tomcat](https://docs.dewacloud.com/docs/tomcat/)), switch on **Public IPv4** for your server and type your environment name, for example, _multibinding_.

![environment wizard](#)

In a minute, your environment with **Tomcat** will be successfully created.

![environment for multi domains](#)

4\. Bind your **domain names** to the Tomcat’s Public IP address, which you can find in the drop-down list for the server. The binding procedure depends on the hosting company where you bought the domains.

![server public IP](#)

5\. Upload your war files/file to the **Deployment manager** and deploy them to different contexts.

![applications deployed](#)

6\. Click on **Config** button for Tomcat.

![Tomcat config](#)

7\. Navigate to the **server.xml** file (_server_ directory) and set the configuration for hosting multiple domains (add _Host tags_ for each domain you want to host).

For example:

```xml
<Host name="firstdomain.com" appBase="webapps/firstdomain">
    <Alias>firstdomain.com</Alias>
    <Context path="" docBase="."/>
</Host>

<Host name="seconddomain.com" appBase="webapps/seconddomain">
    <Alias>seconddomain.com</Alias>
    <Context path="" docBase="."/>
</Host>

<Host name="thirddomain.com" appBase="webapps/thirddomain">
    <Alias>thirddomain.com</Alias>
    <Context path="" docBase="."/>
</Host>
```

![Tomcat server xml](#)

8\. **Save** the changes and **Restart** Tomcat.

9\. Now you can check the results. Your applications will be available through the specified domain names.

![first domain](#)

![second domain](#)

![third domain](#)

:::note
If you want to redeploy an application to the Tomcat instance with already configured _server.xml_, you need to comment the `<Host>` block before redeploying and uncomment it afterward.
:::

## Baca Juga{#whats-next}

  * [Public IP](https://docs.dewacloud.com/docs/public-ip/)
  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)