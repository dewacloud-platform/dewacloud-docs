---
sidebar_position: 4
slug: /custom-ssl-via-slb
title: Custom SSL via SLB
---
# Custom SSL via Shared Load Balancer (SLB)

The platform supports multiple methods for configuring SSL certificates, depending on the environment setup and domain configurations:

- **Public IP Environments**: Utilize _[Let’s Encrypt SSL](<https://docs.dewacloud.com/docs/lets-encrypt-ssl>)_ and _[Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl>)_ to secure custom domains.
- **Environments without Public IP**: Use _[Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl>)_ for the base domain.
- **Custom SSL via SLB**: Allows custom SSL certificates for environments without public IP through Shared Load Balancer (SLB).

This guide explains how to configure **Custom SSL via SLB**, primarily aimed at environments deployed on **Azure** or **Google Cloud** where public IPs are not available. SLB ensures the distribution of traffic between nodes and provides SSL via **Server Name Indication (SNI)**, an extension to the TLS protocol.

## Steps to Configure Custom SSL via SLB

### Overview

**Custom SSL via SLB** allows you to configure custom SSL certificates for environments without a public IP address. The certificate is uploaded to the platform, and SSL is enabled on the Shared Load Balancers, which distribute the traffic.

### SNI Support

**Server Name Indication (SNI)** allows the server to present the correct SSL certificate based on the requested domain name, ensuring proper SSL handling when multiple domains are hosted on a single SLB.

### API Configuration

All configurations for Custom SSL via SLB are performed through API calls. Here are the key API methods available:

- **[GetSSLCerts](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-GetSSLCerts>)**: Lists all SSL certificates for the current user.
- **[AddSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-AddSSLCert>)**: Uploads the private key, domain certificate, and optional intermediate certificates.
- **[EditSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-EditSSLCert>)**: Updates an existing certificate.
- **[RemoveSSLCerts](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts>)**: Removes a specified SSL certificate.
- **[BindSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindSSLCert>)**: Binds a custom SSL certificate to the environment or SLB for custom domains.
- **[UnbindSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-UnbindSSLCert>)**: Unbinds an SSL certificate from an environment or specific domains on SLB.
- **[BindExtDomains](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindExtDomains>)**: Binds custom domains to the environment and applies the SSL certificate.
- **[GetExtDomains](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-GetExtDomains>)**: Lists custom domains attached to the environment.

### Quotas

The maximum number of custom SSL certificates via SLB is limited per account based on the `slb.customssl.maxcount` quota (typically 50 for billing users and 5 for trial users). This is to prevent overuse of the feature.

### Example Workflow

1. **Upload Certificates**:
   Use the **[AddSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-AddSSLCert>)** method to upload your private key, domain certificate, and intermediate certificate (if applicable) to the platform.

2. **Bind SSL Certificate**:
   To bind the SSL certificate to your environment and domains, use the **[BindSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-BindSSLCert>)** method. Ensure the SLB is specified as the entry point.

3. **Unbind SSL Certificate**:
   If needed, the **[UnbindSSLCert](<https://docs.jelastic.com/api/#!/api/environment.Binder-method-UnbindSSLCert>)** method allows you to unbind the SSL certificate from specific custom domains.

## Next Steps

Explore other SSL solutions and related features:

- [Secure Sockets Layer (SSL)](<https://docs.dewacloud.com/docs/secure-sockets-layer>)
- [Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl>)
- [Custom SSL](<https://docs.dewacloud.com/docs/custom-ssl>)
- [Let’s Encrypt SSL](<https://docs.dewacloud.com/docs/lets-encrypt-ssl>)
- [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer>)