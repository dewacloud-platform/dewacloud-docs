---
sidebar_position: 1
slug: /log-files
title: Log Files
---
# View Log Files

Log files are essential for understanding what has happened within your environment, whether for development, testing, or troubleshooting. Follow these steps to access and view your node’s logs:

## Steps to View Logs

### 1. Log into the Platform Dashboard
Use your credentials to log into the platform dashboard.

### 2. Access Logs
Click the **Log** icon for the node you want to view logs for.

![log button](#)

### 3. View Logs
The logs tab will appear at the bottom of your dashboard. If your environment contains multiple [nodes of the same type](https://docs.dewacloud.com/docs/horizontal-scaling/), use the drop-down list to select the node whose logs you want to view.

![select node to view logs](#)

### 4. Manage Logs
You can:
- **Clear** the log
- **Refresh** the log
- Use **Prev** and **Next** buttons for navigation through larger logs

#### Auto-Refresh Feature
By default, the **Auto refresh** feature is enabled, refreshing the logs every 3 seconds. This is useful for real-time monitoring, such as during installation or updates. If you need to focus on specific log details, you can disable auto-refresh. To disable, uncheck **Auto refresh** in the **Refresh** drop-down list. You can enable it again the same way.

### 5. Delete Logs
To delete a log, hover over it and click the cross button, or select it and click **Delete** at the top tools panel.

![delete log files](#)

### 6. Download Logs via FTP
Logs can be downloaded using FTP. For more details on the installation and usage of FTP/FTPS, see the [FTP/FTPS Support](https://docs.dewacloud.com/docs/ftp-ftps-support/) document.

## Available Log Files by Node Type

| Node Type         | Available Log Files                |
|-------------------|------------------------------------|
| Tomcat 6, 7, TomEE| manager, localhost_access_log, catalina, host-manager, localhost |
| Jetty             | {date}, request                    |
| GlassFish         | {date}, request                    |
| MySQL, MariaDB    | mysqld                             |
| PostgreSQL        | postgresql-`day of week`           |
| CouchDB           | couch                              |
| MongoDB           | mongod                             |
| Apache            | access-log, dummy-host, error_log  |
| NGINX PHP         | error, access, php-fpm             |
| NGINX load balancer| tcp_access, error, error_log, access, localhost |
| Memcached         | memcached                          |
| Node.js           | node                               |

#### VCS Log Files
If you're using a remote GIT/SVN repository for deploying your application, a new `vcs_update` pull log file will be added to your **Maven** node (for Java) or **Apache/NGINX** application server (for PHP), containing details about the project's build and deployment process.

## What’s Next?
- [View Statistics](https://docs.dewacloud.com/docs/view-app-statistics/)
- [Load Alerts](https://docs.dewacloud.com/docs/load-alerts/)
- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)