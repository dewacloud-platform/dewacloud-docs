---
sidebar_position: 7
slug: /gtld-+-idn-domain-names-support
title: gTLD + IDN Domain Names Support
---
# gTLD + IDN Domain Names Support

![slide-domain.png](#)

Efforts have been made to make domain names available in many languages beyond those based on the Latin script. Now, with **IDN (Internationalized Domain Name)** technology, almost any Unicode character (beyond the traditional ASCII ones) can be added to a domain name. This is achieved by converting these characters into a standard format using [Punycode](https://en.wikipedia.org/wiki/Punycode).

The platform supports such developments, allowing users worldwide to use their native languages (e.g., Cyrillic, Chinese hieroglyphs) for environment names and [aliases](https://docs.dewacloud.com/docs/environment-aliases). These names will be displayed correctly across the dashboard and in the [SSH console](https://docs.dewacloud.com/docs/ssh-access). You can also bind external IDNs to your environment using the same [workflow](https://docs.dewacloud.com/docs/custom-domains) as with regular custom domains.

Another category of domain names is **gTLD (Generic Top-Level Domains)**, a subtype of TLDs managed by the Internet Assigned Numbers Authority (IANA). Initially intended for specific types of organizations, gTLDs are not tied to any country and can theoretically be used by anyone globally. gTLD integration on the platform allows users to bind such domain names (e.g., _.org_, _.academy_, _.best_) to their environments.

Let’s explore how to manage these specific domain names on the platform.

## Default Environment IDN Domain

1. You can use an IDN when naming your environment via the topology wizard.  
   Configure your environment settings and enter the desired name in any language in the **Environment name** field (must be longer than 5 characters). Then click **Create**.  
   ![tld idn domain env wiz](#)

   Here are a few more examples:  
   ![tld idn domain example](#)

   :::warning
   Your environment name cannot start with "xn--", as this combination is reserved for representing IDNs in ASCII.
   :::

2. The environment creation process will proceed as usual, and your new environment will be added to the dashboard.  
   ![tld idn domain env created](#)

3. If you **Open in browser** your IDN environment, the URL will look something like the image below:  
   ![tld idn domain punycode](#)

   This URL uses Punycode to represent Unicode characters. To avoid this, you can bind a [custom domain name](https://docs.dewacloud.com/docs/custom-domains) to your environment, including IDNs.

4. You can also [set an alias](https://docs.dewacloud.com/docs/environment-aliases) for your environment or its nodes using your native language to make managing your environment easier.  
   ![tld idn domain alias](#)

## Custom IDN/gTLD Domain Name

Both internationalized and generic top-level domains can be easily bound to your environment in the same manner as regular custom domains. Follow the steps outlined in the [documentation](https://docs.dewacloud.com/docs/custom-domains) to bind one or multiple domains to your app.  
![tld idn domain domain binding](#)

You can also use the [Swapping Domains](https://docs.dewacloud.com/docs/swap-domains) feature to work with these domain types.  
![tld idn domain swap domains](#)

## What's Next?

  * [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)
  * [Swap Domains](https://docs.dewacloud.com/docs/swap-domains/)
  * [Environment Aliases](https://docs.dewacloud.com/docs/environment-aliases/)