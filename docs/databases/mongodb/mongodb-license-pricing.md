---
sidebar_position: 4
slug: /mongodb-license
title: MongoDB License Pricing
---
# MongoDB License Pricing

:::warning
The availability of the service depends on the hosting provider - check the list of supported platforms.
:::

Historically, Virtuozzo Application Platform provided the MongoDB software stack as a certified container without any additional charges. However, due to license changes, MongoDB versions newer than **3.6.8** and **4.0.2** cannot be distributed freely and require an additional agreement.

If you want to use the latest versions of MongoDB with the Virtuozzo Application Platform, an additional **license fee** will be automatically applied. The exact amount can vary for different hosting providers, but you can always check the price via the [topology wizard](<https://docs.dewacloud.com/docs/setting-up-environment/>) (both before the installation and for existing environments). Once the environment topology is set up, choose the _hourly/daily/monthly_ estimated cost period, and hover over the price in the right part of the wizard:

:::tip
The Virtuozzo Application Platform provides a MongoDB Sandbox image for testing purposes. It is offered license-free but includes some restrictions compared to the production version.
:::

![license cost in wizard](#)

The MongoDB license price correlates to the number of dynamic cloudlets (scaling limit) provided for the MongoDB nodes.

__For example,__ for a replica set with 3 nodes with 32 cloudlets each and the license cost of 10$/month for 8 cloudlets (equivalent to per 1 GB of RAM):

* 3 * 32 = **96** (total cloudlets limit for MongoDB)

![mongodb nodes cloudlets](#)

* 10 / 8 = **1.25** (license cost for a single cloudlet of resources)
* 96 * 1.25 = **120** (total license cost)

![03-total license cost](#)

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [Upgrading to MongoDB 6/7](<https://docs.dewacloud.com/docs/updating-to-mongodb-7/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)