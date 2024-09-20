---
sidebar_position: 1
slug: /secure-sockets-layer
title: Secure Sockets Layer
---
# Secure Sockets Layer (SSL)

**SSL (Secure Sockets Layer)** is the security protocol used to establish an encrypted connection between a web server and a browser. This encryption ensures that any data exchanged remains private and cannot be intercepted by third parties. SSL is essential for protecting sensitive information, such as login credentials, credit card details, and other confidential data during transmission.

SSL encryption uses two keys:
- **Public Key**: Available to anyone and used to encrypt the data.
- **Private Key**: Known only to the recipient and used to decrypt the data.

Once SSL is configured on a server, the connection switches from HTTP to **HTTPS**, operating over port 443 to provide secure access.

To establish an SSL connection, a server requires an **SSL Certificate** that digitally binds a cryptographic key to an entity’s details, such as the domain name. SSL certificates are typically verified by trusted authorities to ensure the reliability and trustworthiness of the connection.

## Available SSL Solutions on the Platform

The platform provides three main options for integrating SSL into your environment:

### 1. [Built-In SSL Certificates](<https://docs.dewacloud.com/docs/built-in-ssl>)
The Built-In SSL certificates are automatically enabled on the platform, saving time and effort by bypassing the need for validation from external certificate authorities.

- **Advantages**: Quick and hassle-free, applied to the default platform domain.
- **Limitations**: Incompatible with servers that have public IPs and only applicable to the platform's default environment domain (e.g., with the hosting provider's domain at the end).

### 2. [Let’s Encrypt SSL Certificates](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>)
This option provides easy access to free, trusted SSL certificates from **Let’s Encrypt**, a well-known certificate authority. With a pre-configured add-on, the platform manages certificate issuance and renewal automatically.

- **Advantages**: Free, automated, trusted certificates.
- **Limitations**: Requires configuration and domain validation.

### 3. [Custom SSL Certificates](<https://docs.dewacloud.com/docs/custom-ssl>)
For users who prefer full control over the SSL process, Custom SSL allows you to manually configure your certificate, generate the certificate request, and select your preferred certificate authority.

- **Advantages**: Flexibility in certificate authority choice and domain control.
- **Limitations**: Requires manual setup and certificate validation.

## Next Steps
To learn more about SSL integration and secure your environment, check out these resources:
- [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
- [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
- [Custom Domain Names](<https://docs.dewacloud.com/docs/custom-domains/>)
- [Container Firewall](<https://docs.dewacloud.com/docs/custom-firewall/>)