---
sidebar_position: 4
slug: /container-firewall
title: Container Firewall
---
# Container Firewall Rules Management

The platform’s **Container Firewall** feature provides a way to control the availability of your nodes both inside and outside the PaaS. It evaluates various parameters (such as the source of incoming requests, protocol, and target node port) to flexibly manage access to your containers by configuring the necessary connection rules.

![firewall and isolation illustration](#)

:::tip
For restricting access between environments within a single account, consider using the **Network Isolation** feature.
:::

## Container Firewall Management via Platform UI

Each node (excluding custom [Docker](<https://docs.dewacloud.com/docs/container-types/>) and [Windows](<https://www.virtuozzo.com/application-platform-docs/iis8/>) containers) is provisioned with firewall rules, which can be managed through a graphical user interface (GUI). Access this section by selecting **Settings** next to the required environment and clicking **Firewall**.

:::note
The availability of the **Container Firewall** UI depends on your hosting provider. Contact your platform support to request activation if you don’t see this feature.
:::

![firewall environment settings](#)

### Tabs Available:

- **Overview**: Displays general information about the firewall and allows you to change the firewall state (enabled by default for all containers).
- **Inbound Rules**: Manages incoming requests (requests not listed are denied by default).
- **Outbound Rules**: Controls outgoing connections (requests not listed are allowed by default).

### Default Firewall Rules

Upon creating a new container, the platform automatically populates the **Inbound** and **Outbound Rules** sections with necessary records to ensure container operability.

:::tip
Default rules are fetched based on the **EXPOSE** ports in the image’s dockerfile.
:::

![container firewall inbound rules](#)

Rules are structured as follows:

1. **Non-editable rules**: A gray-colored record with the highest priority allows platform infrastructure to manage operations, SSH access, and load balancing without public IP.
2. **Default and user-added rules**: These include rules for **SSH**, **HTTP**, **HTTPS**, and **FTP** connections.
3. **Final rule**: The last rule, non-editable and gray-colored, blocks any incoming connection not allowed by the previous rules.

### Adding Default Rules

To define custom ports opened via the container firewall during node creation, you can use the **OPEN_INBOUND_PORTS** environment variable.

1. Create a new environment, select the software stack, and navigate to **Variables**.
2. Add the variable in this format:
   
    ```bash
    "OPEN_INBOUND_PORTS": "port1, port2, ..., portN"
    ```

3. Check the firewall rules after creation to confirm the added ports.

### Rules Management

You can manage existing firewall rules and add new ones using the **Add**, **Edit**, **Remove**, **Disable**, **Enable**, and **Refresh** buttons.

![firewall rules management buttons](#)

Parameters for a new firewall rule include:

- **Nodes**: Select the environment layer.
- **Name**: Provide a name for the rule.
- **Protocol**: Choose **TCP**, **UDP**, or both.
- **Port Range**: Specify the port or range of ports to be opened/closed.
- **Source**: Choose the request source, which could be custom IPs, predefined ranges, or environment nodes.
- **Priority**: Assign a priority (lower values are applied first).
- **Action**: Set to allow or deny the request.

You can edit existing rules except for the **Nodes** field. Rules can be temporarily disabled or enabled using the appropriate buttons.

## Firewall Use Cases

### Restrict Access via User Interface

Here’s how to block access to a container from a specific IP address:

1. Access the **Firewall** settings for the desired environment and navigate to the **Inbound Rules** tab.
2. Click **Add** and configure the rule as follows:

    - **Nodes**: Select the container.
    - **Name**: Provide a rule name.
    - **Protocol**: Set to **TCP**.
    - **Port Range**: Leave blank to apply to all ports.
    - **Source**: Choose **Custom IP Address(es)** and enter the IP address.
    - **Priority**: Set an appropriate value (e.g., 900).
    - **Action**: Choose **Deny**.

3. Click **Add** to save and apply the rule. The blocked IP will receive a 403 Forbidden page when attempting to connect.

![prohibited connection](#)

### Restrict Access via SSH

Firewall rules can also be managed via [SSH Gate](<https://docs.dewacloud.com/docs/ssh-access/>).

1. Use **Web SSH** from the platform dashboard to access the node.
2. Verify that the container firewall is enabled by checking `/etc/jelastic/metainf.conf`:

    ```bash
    cat /etc/jelastic/metainf.conf
    ```

3. Edit the `/etc/sysconfig/iptables-custom` file and declare your firewall rules in the `iptables-save` format:

    ```bash
    -I INPUT -s 111.111.111.111 -p tcp -m state --state NEW -m tcp --dport 1111 -j DROP
    ```

4. Apply the custom firewall rules:

    ```bash
    sudo /usr/bin/jem firewall fwstart
    ```

5. Verify the firewall rules with:

    ```bash
    sudo jem firewall list {table} {options}
    ```

### Setting Rules via Platform API

The following API methods are available for managing firewall rules:

- **AddRule**: Create a new rule.
- **EditRule**: Edit an existing rule.
- **GetRules**: Retrieve firewall rules for an environment.
- **RemoveRule**: Delete a rule.
- **SetFirewallEnabled**: Enable the firewall.

These methods can be used for custom scripts and automation.

## What’s Next?

- [Network Isolation](<https://docs.dewacloud.com/docs/environment-isolation/>)
- [Shared Load Balancer](<https://docs.dewacloud.com/docs/shared-load-balancer/>)
- [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
- [Endpoints](<https://docs.dewacloud.com/docs/endpoints/>)