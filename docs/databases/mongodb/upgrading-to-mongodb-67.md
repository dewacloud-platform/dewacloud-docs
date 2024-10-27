---
sidebar_position: 3
slug: /upgrading-to-mongodb-67
title: Upgrading to MongoDB 6/7
---
# Upgrading to MongoDB 6/7

Due to significant architectural changes between **MongoDB 3/4** and **MongoDB 6/7**, the regular upgrade flow through [redeployment](<https://docs.dewacloud.com/docs/container-redeploy/>) is not possible. In this guide, we’ll show how such an upgrade can be done by leveraging the **Backup/Restore** add-on.

:::note
Upgrade from MongoDB 6 to 7 can be done via redeployment as usual (without the steps described in this guide). However, the downgrade is not supported.
:::

1\. Install the _**Backup/Restore**_ add-on for your legacy MongoDB instance. For example, locate it in the Marketplace or import it from [GitHub](<https://github.com/jelastic-jps/database-backup-addon>):

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-1.png" alt="backup add-on" width="100%"/>

2\. Go to the **Add-Ons** section for your legacy MongoDB database. Here, you can manually create a backup with the **Backup Now** button. We recommend doing it right before the restoration step to ensure no or minimal data loss.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-2.png" alt="backup legacy MongoDB" width="100%"/>

3\. Create a new environment with the MongoDB 6/7 instance (the same topology is recommended). Once created, install the _**Backup/Restore**_ add-on for it as well and click the **Restore** option.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-3.png" alt="restore on MongoDB 7" width="100%"/>

4\. Select to _restore from_ the environment with the legacy MongoDB instance and choose the latest _backup_ in the opened _**Restore Backup**_ form. Click the **Restore** button and confirm via pop-up.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-4.png" alt="restore backup" width="100%"/>

5\. Once the process is complete, connect to the new database via the admin panel or SSH to verify that your custom data is present.

<img src="https://assets.dewacloud.com/dewacloud-docs/databases/mongodb/upgrading-mongodb/upgrade-mongodb-5.png" alt="mongo express admin panel" width="100%"/>

That’s all! Now, you just need to reconfigure your applications to work with the new database (like updating connection string and credentials).

## Baca Juga{#whats-next}

  * [MongoDB Auto-Clustering](<https://docs.dewacloud.com/docs/mongodb-auto-clustering/>)
  * [MongoDB License Pricing](<https://docs.dewacloud.com/docs/mongodb-license/>)
  * [MongoDB Backup/Restore Add-On](<https://docs.dewacloud.com/docs/mongodb-backup-restore-addon/>)
  * [MongoDB Encryption in Transit Add-On](<https://docs.dewacloud.com/docs/mongodb-ssl-addon/>)
  * [MongoDB Remote Access](<https://docs.dewacloud.com/docs/remote-access-to-mongodb/>)
  * [MongoDB Dump Import/Export](<https://docs.dewacloud.com/docs/dump-import-export-to-mongodb/>)