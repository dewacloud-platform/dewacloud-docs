---
sidebar_position: 5
slug: /endpoints
title: Endpoints
---
# Endpoints: A Direct Connection to the Cloud

The **Endpoints** feature enables TCP/UDP ports mapping via the Shared Load Balancer, allowing simplified collaboration between instances and third-party tools. This feature facilitates a direct connection to nodes without requiring a [Public IP](<https://www.virtuozzo.com/application-platform-docs/public-ipv4>), which helps in tasks like remote database management, direct app deployment from IDE, and accessing server admin panels.

### Key Advantages:
- Simplified instance collaboration with third-party tools.
- Cost savings by reducing the need for External IP addresses.
  
## Managing Endpoints

Endpoints can be managed from the **Settings** menu in your platform dashboard. To access, select **Settings** next to the desired environment and click **Endpoints**.

### Adding Endpoints

1. **Add a New Endpoint**: Click **Add** and fill out the **Add Endpoint** form:
   - **Node**: Select the node.
   - **Name**: Choose a name (either custom or from predefined options).
   - **Private Port**: Specify the local node port for mapping.
   - **Protocol**: Choose TCP or UDP.

The **Public Port** and **Access URL** will be automatically assigned by the platform. Click **Add** to finalize the creation.

**Preconfigured Options** (Examples):

| Connection Name | Private Port |
|-----------------|--------------|
| Remote Desktop  | 3389         |
| PowerShell      | 5986         |
| HTTP            | 80           |
| HTTPS           | 443          |
| MySQL           | 3306         |

### Editing or Removing Endpoints

To edit or remove an existing endpoint:
- **Edit**: Select the endpoint and modify its settings (except the node selection).
- **Remove**: Confirm your choice to delete the endpoint.

## Endpoints Use Cases

### Database Management

Endpoints simplify remote database access without the need for a Public IP. Below are examples of accessing a MySQL database through both terminal and third-party DB clients.

#### Connection via Terminal

Use the terminal on your local machine to connect to the database:

```bash
mysql -h {host} -P {port} -u {user} -p
```

- `{host}`: The endpoint Access URL without the port.
- `{port}`: The public port assigned to the endpoint.
- `{user}`: Database user (usually `root` by default).
- `{password}`: The password is prompted after entering the command.

#### Connection via Local Client (MySQL Workbench)

For a graphical interface, use a tool like MySQL Workbench:

1. **Create a New Connection**:
   - **Connection Method**: TCP/IP
   - **Hostname**: The endpoint Access URL (without the port).
   - **Port**: The public port assigned to the endpoint.
   - **Username**: Database user.
   - **Password**: Enter the password or store it in Keychain.

2. **Access the Database**: Double-click the connection to initiate and start working with the database.

### Multiple Development Stages on a Single App Server

Endpoints allow you to use a single app server for multiple environments, such as production and development.

1. **Add an Endpoint** for the Apache server and choose a private port (e.g., 81).
2. **Deploy your application twice** to different contexts (e.g., `/prod` and `/dev`).
3. **Modify Apache Configurations**:
   - Open the `httpd.conf` file and add a new listener for the private port:
   
   ```bash
   Listen 0.0.0.0:{port}
   ```

   - Create two **VirtualHost** sections, one for production and one for development.
4. **Restart Apache** and access the production environment through its normal URL, while using the endpoint Access URL to reach the development version.

This setup allows you to perform development tasks without impacting the production environment.

## What's Next?
- [Public IP](<https://docs.dewacloud.com/docs/public-ip/>)
- [Remote Access to MySQL](<https://docs.dewacloud.com/docs/remote-access-mysql/>)
- [Application Lifecycle](<https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/>)