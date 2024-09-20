---
sidebar_position: 3
slug: /custom-ssl
title: Custom SSL
---
# Custom SSL Certificates

**SSL certificates** offer a high level of security for domain names, ensuring secure data transmission between the web server and the browser. The platform allows the use of **Custom SSL Certificates**, providing several types to meet various requirements:

- [Self-Signed SSL](<https://docs.dewacloud.com/docs/self-signed-ssl/>)
- Wildcard
- Multi-Domain
- Extended Validation (Single-Domain and Multi-Domain)
- Low Assurance/Domain-Validated Certificates

This guide will demonstrate how to generate and implement a **Single-Domain Custom SSL Certificate** on your environment.

## Generate a Custom SSL Certificate

To add a Custom SSL certificate to your environment, you need the following:

1. A pre-purchased **domain name** (e.g., `mysite.com`).
2. A **server key**.
3. An **Intermediate Certificate** or **Certificate Chain (CA)**.
4. A **Domain Certificate**.

Follow these steps to generate the required certificates:

### 1. Purchase a Domain Name

Buy a domain name from any registrar (e.g., `mysite.com`).

### 2. Generate the Server Key and Certificate Request

Use **OpenSSL** or any other tool to generate your **server key** and **Certificate Signing Request (CSR)**.

#### Windows:

1. [Download OpenSSL](<https://code.google.com/archive/p/openssl-for-windows/downloads>), extract it, and open the `openssl.exe` file located in the **bin** folder.
2. To generate a server key, run the following command:
   ```bash
   genrsa -out server.key 4096
   ```
   This will generate a 4096-bit private server key (`server.key`).

3. Next, generate the CSR using:
   ```bash
   req -config C:\path\to\openssl.cnf -new -key server.key -out server.csr
   ```
   You will be prompted to provide information about your domain and organization.

#### Linux/MacOS/FreeBSD:

1. Install OpenSSL if not already installed using the appropriate package manager. For Ubuntu/Debian:
   ```bash
   sudo apt-get install openssl
   ```

2. Generate the server key:
   ```bash
   openssl genrsa -out server.key 4096
   ```

3. Generate the CSR:
   ```bash
   openssl req -new -key server.key -out server.csr
   ```

Provide the necessary information about your domain and organization when prompted.

### 3. Send the CSR to a Certificate Authority (CA)

Submit the **CSR** to a **Certificate Authority (CA)** for signing. Once verified, the CA will provide you with the **Intermediate Certificate** and **Domain Certificate**.

### 4. Configure Your Environment for SSL

Ensure that your environment meets the requirements for custom SSL:

1. **Public IP Address**: Ensure your environment’s application server or load balancer has a public IP attached.
2. **Custom Domain**: Ensure your custom domain name is set up in your DNS manager with an **A Record** pointing to your public IP.

## Upload the Certificate to Your Environment

1. Log into your platform and navigate to the **Environment Settings** of your desired environment.
2. In the **Custom SSL** section, upload the **Server Key**, **Intermediate Certificate (CA)**, and **Domain Certificate**.
3. Click **Save** to apply the SSL certificate.

The platform will automatically restart the environment’s servers to apply the changes.

## Verify SSL Configuration

To verify that your SSL certificate is properly installed:

1. Open your web browser and enter your custom domain with the **HTTPS** protocol (e.g., `https://mysite.com`).
2. Ensure the site loads securely without any errors.

## What’s Next?

Explore more SSL solutions and features available on the platform:

- [Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl/>)
- [Let’s Encrypt SSL](<https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/>)
- [Custom Domains](<https://docs.dewacloud.com/docs/custom-domains/>)
- [Self-Signed Custom SSL](<https://docs.dewacloud.com/docs/self-signed-ssl/>)