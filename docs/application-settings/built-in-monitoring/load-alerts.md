---
sidebar_position: 3
slug: /load-alerts
title: Load Alerts
---
# Load Alerts

When you create an environment, you set cloudlet limits for each node. These limits ensure that your resources are regulated and help to manage costs. However, if the limits are too low and your application traffic grows, this can lead to performance issues due to resource shortages.

To prevent such situations, you can configure **Load Alerts** to automatically notify you when resource consumption exceeds or falls below a defined threshold. These alerts provide email notifications about changes in your application's load, helping you to manage your environment proactively.

### Preconfigured Load Triggers

Starting from PaaS 4.6, new containers are automatically delivered with preconfigured load triggers, ensuring you receive notifications about resource usage by default. These can be customized or disabled if needed.

## Creating a Load Alert

To configure custom alerts, follow these steps:

1. **Open Environment Settings**:
   - Log into the platform dashboard and click the **Settings** button for the desired environment.

   ![load alerts 1](#)

2. **Navigate to Load Alerts**:
   - In the settings tab, go to **Monitoring > Load Alerts**.

   ![load alerts 2](#)

3. **Managing Alerts**:
   - You’ll see a list of preconfigured triggers (if available). These triggers monitor resources such as _RAM_, _CPU_, _Disk_, _Inodes_, and _Network Traffic_ and notify you when consumption approaches limits.

   ![load alerts 3](#)

   You can use the toolbar to:
   - **Add** new alerts
   - **Edit**, **Remove**, or **Enable/Disable** existing alerts
   - **Refresh** the alerts list

4. **Add New Alert**:
   - Click **Add** to create a new alert. In the **Add Alert** window, configure the following settings:
     - **Name**: Set a name for your alert.
     - **Nodes**: Choose the type of environment node to monitor.
     - **Whenever**: Select the resource to monitor (e.g., _Cloudlets_, _Memory_, _CPU_, _Network_, _Disk I/O_).
     - **Is**: Define the condition for triggering the alert (e.g., above or below a specific percentage or Mbps for network monitoring).
     - **For at least**: Set the time period during which the trigger should remain invoked before it activates.
     - **Notification frequency**: Set the time delay between repeated notifications.

   ![load alerts 4](#)

   Once configured, click **Add** to save the alert.

5. **Alert List**:
   - The newly created alert will appear in the list with the name you assigned. You can manage the alert using the provided options in the toolbar.

   ![load alerts 5](#)

6. **Email Notifications**:
   - When the resource usage exceeds the set threshold, you’ll receive an email notification with details about the load, recommendations, and a link to adjust scaling limits.

   ![load alert email notification](#)

## Viewing Trigger Execution History

To check the history of alert executions:

1. **Open Event History**:
   - Navigate to **Monitoring > Events History**. The _Load Alerts_ notification type will be selected by default.

   ![load alerts 7](#)

2. **Specify Time Period**:
   - Use the **Period** drop-down list to select the time interval for which you want to view alerts (_day_, _week_, _month_, or _custom_).

   ![load alerts 8](#)

3. **View Alerts**:
   - You’ll see a list of all activated alerts within the chosen time period, showing the date, alert name, node type, condition, and whether the alert was successful.

4. **Alert Details**:
   - Click an alert to view additional details, such as the resource usage at the time of activation and the action taken (e.g., sending a notification).

   ![load alerts 9](#)

This allows you to ensure that your application is properly monitored and to take action before any resource limits impact performance.

## What’s Next?

- [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
- [Statistics](https://docs.dewacloud.com/docs/view-app-statistics/)
- [Security of App with NGINX Balancer](https://docs.dewacloud.com/docs/nginx-balancer-security/)