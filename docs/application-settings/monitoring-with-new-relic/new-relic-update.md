---
sidebar_position: 2
slug: /new-relic-update
title: New Relic Update
---
# How to Update Installed New Relic Monitoring Add-on

To ensure your application is utilizing the latest features of **[New Relic](https://docs.dewacloud.com/docs/new-relic-installation)** monitoring, the platform provides a built-in update option for the New Relic add-on. This feature allows you to check for updates and apply them quickly without manual intervention. Here's how to update your New Relic agent in a few easy steps.

## New Relic Agent Update

1. **Access the Add-ons Section**:
   - Open the **Add-ons** section for the node where New Relic is installed by clicking the **Add-ons** button next to the node in your dashboard.

2. **Update the New Relic Agent**:
   - Find the New Relic add-on and click on the gear icon in the top corner.
   - From the drop-down list, select the **Update Agent** option.

   ![new relic update](#)

3. **Confirm Update**:
   - A dialog box will appear asking for confirmation. Click **Yes** to proceed with the update check.

   ![check new relic updates](#)

4. **Download and Install**:
   - The platform will automatically download and install the necessary files if updates are available.

   ![new relic update](#)

5. **Restart Application Server**:
   - After the update is complete, a notification will prompt you to restart the application server to apply the changes. Restart your node by clicking the **Restart** button next to your application server.

   ![restart nodes](#)

   :::note
   If your project is running on a single app server, restarting the node will cause temporary downtime. However, if your app server is **horizontally scaled**, the downtime will be minimized, as nodes will be restarted sequentially.
   :::

6. **Check the Updated Version**:
   - For **Java** servers, you can check the current version of the agent within the file located in the directory where the add-on files are stored.
   - For **PHP** servers, the version can be verified through the `phpinfo()` output.

By following these steps, you can ensure that your New Relic add-on is always up-to-date and ready to provide the latest monitoring features for your application.

## What's Next?

- [New Relic Monitoring Integration](https://docs.dewacloud.com/docs/new-relic-installation/)
- [Automatic Horizontal Scaling](https://docs.dewacloud.com/docs/automatic-horizontal-scaling/)
- [Marketplace](https://docs.dewacloud.com/docs/marketplace/)
- [JPS Collection](https://github.com/jelastic-jps)
- [Application Statistics](https://docs.dewacloud.com/docs/view-app-statistics/)