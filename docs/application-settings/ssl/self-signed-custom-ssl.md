---
sidebar_position: 7
slug: /self-signed-custom-ssl
title: Self-Signed Custom SSL
---
# Self-Signed Custom SSL Certificates

A **Self-Signed SSL Certificate** is a method of securing an application using an SSL-encrypted connection. While custom SSL certificates are typically signed by a trusted Certificate Authority (CA) like **Let’s Encrypt**, self-signed certificates are created by the user and are not trusted by browsers by default.

Self-signed certificates are useful in development or testing environments but are **not recommended for production** as visitors will receive warnings, advising them to leave the site due to the untrusted connection.

![Self-Signed SSL Warning](#)

## How to Generate a Self-Signed SSL Certificate

### Requirements:
- A **domain name** (e.g., _mysite.com_). This can be purchased from any domain registrar.
- **OpenSSL** or a similar tool for generating the certificate.

Follow the instructions below depending on your operating system.

### For Windows

1. **Download and Install OpenSSL**
   - [Download OpenSSL for Windows](https://code.google.com/archive/p/openssl-for-windows/downloads).
   - Extract the downloaded archive and run _**openssl.exe**_ from the **bin** folder.

2. **Generate an SSH Private Key**
   - Open OpenSSL and generate a private key for your root certificate (this is what signs all issued certificates):

   ```bash
   genrsa -out rootCA.key 2048
   ```

3. **Create a Root CA Certificate**
   - Generate a root certificate using the private key:

   ```bash
   req -config C:\path\to\openssl.cnf -x509 -new -key rootCA.key -days 365 -out rootCA.crt
   ```

4. **Create a Private Key for Your Domain**
   - Generate a private key for your domain:

   ```bash
   genrsa -out host.key 2048
   ```

5. **Create a Certificate Signing Request (CSR)**
   - Generate a CSR for your domain:

   ```bash
   req -config C:\path\to\openssl.cnf -new -key host.key -out host.csr
   ```

   - **Important:** Ensure that the _Common Name_ matches your domain name.

6. **Generate the Self-Signed Certificate**
   - Create the self-signed certificate using the root CA:

   ```bash
   x509 -req -in host.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out host.crt -days 365
   ```

### For Linux/MacOS/FreeBSD

1. **Install OpenSSL (if not already installed)**
   - Use the following command to install OpenSSL:

   ```bash
   sudo apt-get install openssl
   ```

2. **Generate a Root CA Private Key**
   - Run the following command to generate the root CA key:

   ```bash
   openssl genrsa -out rootCA.key 2048
   ```

3. **Create a Root CA Certificate**
   - Generate the root certificate:

   ```bash
   openssl req -x509 -new -key rootCA.key -days 365 -out rootCA.crt
   ```

4. **Generate a Private Key for Your Domain**
   - Create the private key for your domain:

   ```bash
   openssl genrsa -out host.key 2048
   ```

5. **Create a Certificate Signing Request (CSR)**
   - Generate the CSR:

   ```bash
   openssl req -new -key host.key -out host.csr
   ```

   - **Important:** Ensure that the _Common Name_ matches your domain name.

6. **Generate the Self-Signed Certificate**
   - Use the following command to create the self-signed certificate:

   ```bash
   openssl x509 -req -in host.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out host.crt -days 365
   ```

### Attaching Self-Signed SSL Certificates to Your Environment

Once the certificate is created, follow the usual steps for attaching custom SSL certificates:
1. **Adjust Environment Topology**: Ensure the environment supports custom SSL.
2. **Domain Name and A Record Settings**: Set up the domain to point to your public IP address.
3. **Upload Certificates to the Environment**: Upload the private key and certificate files.

When you visit the site via **https://**, you’ll see a warning about the untrusted certificate. You can proceed by clicking "Proceed Anyway."

![Self-Signed SSL Warning](#)

## Next Steps

- [Built-In SSL](https://docs.dewacloud.com/docs/built-in-ssl/)
- [Custom SSL](https://docs.dewacloud.com/docs/custom-ssl/)
- [Let’s Encrypt SSL](https://www.virtuozzo.com/company/blog/free-ssl-certificates-with-lets-encrypt/)
- [Custom Domains](https://docs.dewacloud.com/docs/custom-domains/)