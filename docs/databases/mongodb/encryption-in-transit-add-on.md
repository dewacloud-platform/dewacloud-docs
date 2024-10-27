---
sidebar_position: 7
slug: /mongodb-ssl-addon
title: Encryption in Transit Add-On
---
# SSL/TLS Encryption in Transit for MongoDB

MongoDB database at the Virtuozzo Application Platform is provided with a built-in add-on that implements “**encryption in transit**”. The add-on is compatible with the standalone and clustered solutions, and its functionality ensures data protection with SSL/TLS encrypted connections during exchanges between servers. After installation, all related operations are handled automatically—data encryption before transmission, endpoints authentication, content decryption, and verification upon arrival.

## Add-On Installation[![](#)](<https://www.virtuozzo.com/application-platform-docs/mongodb-ssl-addon/#add-on-installation>)

The add-on can be installed on top of the **MongoDB** database nodes of _**6 and later**_ versions.

1\. In the platform dashboard, go to the Add-Ons section of the appropriate database layer and click **Install** for the _**MongoDB Encrypted Connection**_ solution.

:::tip
The add-on is also available from the Marketplace and can be imported from the appropriate GitHub repository.
:::

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-1.png" alt="SSL/TLS encryption add-on" width="70%"/>

2\. Within the opened installation window, select the target **Environment** and **Node Group(s)** (multiple layers can be selected if needed) where the add-on will be installed.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-2.png" alt="SSL add-on installation" width="90%"/>

Click **Install** to continue.

3\. Wait a minute, and your database will be configured to work over an encrypted connection.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-3.png" alt="SSL add-on installed" width="70%"/>

## Add-On Specifics[![](#)](<https://www.virtuozzo.com/application-platform-docs/mongodb-ssl-addon/#add-on-specifics>)

Below you can learn about the certificate generation process and its specifics:

* Certificates are generated with the _**/usr/local/sbin/selfcertgen**_ utility.
* Certificates of the PEM format are used in MongoDB.
* Certificates are self-signed and issued for the particular node’s hostname. It means that each node has its own set of certificates, and you must use the ones corresponding to the accessed node for authentication.
* Certificates are stored within the **/var/lib/jelastic/keys/SSL-TLS** folder (accessible via the _**keys**_ shortcut in the file manager). Two subfolders are present: 
  * _**server**_ – server certificates are used to provide TLS encryption for the connection to the MongoDB database.
  * _**client**_ – downloadable client certificates can be used to authenticate client connections to the database server.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-4.png" alt="MongoDB SSL certificates" width="100%"/>

**MongoDB configurations:**

* All the add-on configurations are provided via a separate _**/etc/mongod.conf**_ configuration file:

```yaml
net:
  tls:
    mode: allowTLS
    certificateKeyFile: /var/lib/jelastic/keys/SSL-TLS/server/server.pem
    CAFile: /var/lib/jelastic/keys/SSL-TLS/server/root.pem
    allowConnectionsWithoutCertificates: true
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-5.png" alt="MongoDB SSL configurations" width="100%"/>

* The config provides paths to server SSL files. Also, it includes the “_allowConnectionsWithoutCertificates: true_” option to make the usage of the secure connection optional. If removed, it will be impossible for the client to connect to this server using a plain non-encrypted connection.

## Add-On Configuration[![](#)](<https://www.virtuozzo.com/application-platform-docs/mongodb-ssl-addon/#add-on-configuration>)

The add-on can be found under the **Add-Ons** tab for the appropriate layer(s). You can use the following buttons to renew required certificates (if you think they are compromised or if accidentally removed):

* **Renew all certs** – generate all SSL certificates anew
* **Renew server certs** – generate server SSL certificates anew
* **Renew client certs** – generate client SSL certificates anew

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-6.png" alt="managing MongoDB SSL add-on" width="100%"/>

To remove the add-on from the layer (including custom configs and generated SSL certificates), expand the menu in the top-right corner of the panel and click **Uninstall**.

## Secure Connection to MongoDB[![](#)](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/#secure-connection-to-mongodb>)

Let’s check the secure connection to the MongoDB nodes by using the _**tls**_ and _**tlsCAFile**_ options in the connection string:

* _**–tls**_ – specifies the usage of TLS for this connection
* _**–host**_ – sets the database hostname or IP
* _**–tlsCAFile**_ – provides the path to the CA certificate file

```bash
mongosh --tls --host {hostName} --tlsCAFile={path/to/root.pem}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/encryption-in-transit-addon/encryption-in-transit-addon-7.png" alt="MongoDB SSL connection" width="100%"/>

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)