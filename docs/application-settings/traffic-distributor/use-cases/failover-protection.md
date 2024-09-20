---
sidebar_position: 2
slug: /failover-protection
title: Failover Protection
---
# Failover Protection with Traffic Distributor

[Traffic Distributor](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor/>) provides advanced **failover protection** by utilizing an in-built _health check_ module that regularly tests backends for availability and automatically removes any unavailable ones from the routing process. This health check functionality is enabled by default, but it can be customized to meet specific requirements. Follow the steps below to adjust the behavior of the health check module.

## Steps to Configure Failover Protection

### 1. Access the Traffic Distributor Configuration File

1. Open the **Config** panel for NGINX by clicking the **Config** button.
2. Navigate to the `/etc/nginx/nginx-jelastic.conf` file in the **Root** directory.
   
   ![Traffic Distributor config files](#)

3. Double-click the file to open it for editing.

### 2. Configure the Health Check Module

1. Scroll down to approximately the 50th line in the configuration file to find the **check** module, which is located inside the **upstream common** section. This module controls the health check behavior. The configuration parameters are as follows:

    ```nginx
    check interval={interval} fall={fail_count} rise={rise_count} [timeout={timeout}] [default_down={true/false}] [port={port}] [type={type}]
    ```

   ![Traffic Distributor failover parameters](#)

   - **\{interval\}**: Time between consecutive check requests, in milliseconds.
   - **\{fail_count\}**: Number of consecutive failed checkups required to mark the server as unavailable.
   - **\{rise_count\}**: Number of successful checkups required to mark the server as available.
   - **\{timeout\}**: Timeout period (in milliseconds) for a backend to respond before the check is considered a failure.
   - **\{default_down\}**: Sets the initial state of the backends (true = down, false = up). By default, it's set to true.
   - **\{port\}**: The port to use for connecting to the backend. If set to 0, the default server port (based on the protocol) is used.
   - **\{type\}**: The protocol to use for the health check. Available options:
     - **tcp**: Basic TCP socket connection.
     - **ssl_hello**: Sends an SSL "Client Hello" message and expects a "Server Hello" response.
     - **http**: Sends an HTTP request and expects a response.
     - **mysql**: Connects to a MySQL server and expects a greeting message.
     - **ajp**: Sends an AJP Cping packet and expects a Cpong response.
     - **fastcgi**: Sends a FastCGI request and expects a response.

   In the example shown above, the health check runs every 3 seconds, and if the backend fails 3 consecutive checks, it is marked as "down" and removed from the routing. Once the server becomes available again, it is re-added after 3 consecutive successful checks.

### 3. Apply Configuration Changes

1. Once you've made your changes to the configuration, save the file.
2. To apply the changes without restarting the entire NGINX server (and thereby avoiding downtime), use the **Reload configuration** option in the Traffic Distributor add-on's menu.

   ![Traffic Distributor reload configuration](#)

3. Confirm the reload action via the pop-up window, and the new failover settings will be applied in a few seconds.

## What's Next?

- [Traffic Distributor Overview](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor/>)
- [Traffic Distributor Installation](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor-installation/>)
- [Traffic Distributor Integration](<https://docs.dewacloud.com/docs/traffic-distributor-integration/>)
- [Blue-Green Deploy](<https://www.virtuozzo.com/application-platform-docs/blue-green-deploy/>)
- [A/B Testing](<https://www.virtuozzo.com/application-platform-docs/ab-testing/>)