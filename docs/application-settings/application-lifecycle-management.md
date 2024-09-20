---
sidebar_position: 17
slug: /application-lifecycle-management
title: Application Lifecycle Management
---
# Managing Application Lifecycle

Effective application lifecycle management ensures that your project works as intended and meets users' needs throughout development, testing, and production stages. Even if your project is not very large, using separate development and test environments can help prevent any disruption to users. Below is a step-by-step guide to managing the lifecycle of an application on the platform.

![application lifecycle](#)

## Steps for Managing the Application Lifecycle

### 1. Create the Production Environment

1. Log into the platform dashboard.
2. Click **Create environment**.
3. Choose the application server (e.g., **GlassFish**), set the cloudlets limit, and name your environment (e.g., `prodenv`). Click **Create**.

![create environment](#)

Once the environment is created, it will be ready for your production application.

### 2. Create the Build Environment

1. Create another environment, choosing **Maven** as the build tool. Set the cloudlets limit and name the environment (e.g., `buildenv`).

![build environment wizard](#)

In just a couple of minutes, the environment will be ready for building your project.

### 3. Build and Deploy the Project

1. Add your project to **Maven**.
2. Navigate to the **Git** tab if using Git for version control. Provide project details such as the **Path**, **Branch**, **Login**, and **Password**. Specify the **Environment** and **Context** for deployment, then click **Add**.
3. Click **Build and Deploy** for the project.

![build and deploy](#)

### 4. Create the Database Environment

1. Create a new environment and select the database type (e.g., **MySQL**).
2. After the environment is created, open **MySQL** in the browser and use the credentials sent via email to create a database.

![database environment wizard](#)

### 5. Configure the Database Connection

1. In the dashboard, click **Config** next to the application server (e.g., **GlassFish**) in your production environment.
2. Create a configuration file (e.g., `mydb.cfg`) and add the database connection details:

```bash
host=jdbc:mysql://mysql{node_id}-{your_env_name}.{hoster_domain}/{db_name}
username={get in the email}
password={get in the email}
driver=com.mysql.jdbc.Driver
```

![database connection configs](#)

3. Upload the **MySQL connector** to the `lib` directory of **GlassFish** and restart the server.

### 6. Create the Test Environment

1. Clone your production environment to create an exact copy for testing (name it `testenv`).
2. Open the test environment in a browser to verify it.

![clone environment](#)

### 7. Upgrade the Application

1. Add the updated project to **Maven**.
2. Click **Build and Deploy** for the new project. The new project will be deployed to the specified context.
3. Bind a custom domain (e.g., `test.com`) to your test environment.

![bind test domain](#)

4. Open the new application in a browser to see the updates.

### 8. Swap Domains

After testing, you can swap domains between the test and production environments to deploy your changes without downtime. This allows for seamless updates.

1. In the environment settings, choose **Swap** to swap the domains between your production and test environments.

![swap domains](#)

Once swapped, your production domain (e.g., `production.com`) will reflect the updated application.

## What’s Next?

- [Application Configuration](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Clone Environment](https://docs.dewacloud.com/docs/clone-environment/)
- [Deploy Application](https://docs.dewacloud.com/docs/deployment-guide/)