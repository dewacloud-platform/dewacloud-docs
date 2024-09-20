---
sidebar_position: 16
slug: /remote-debugging
title: Remote Debugging
---
# Remote Debugging

Remote debugging allows you to connect your IDE with an application running on the platform using Public IPs. Here's a step-by-step guide on setting up remote debugging for your Java application:

## How Does Remote Debugging Work?

Java's remote debugging is based on a listener binding mechanism:
- The application to be debugged attaches a socket and listens for debugging instructions.
- The debugger connects to the socket and sends instructions.

## Steps to Set Up Remote Debugging

### 1. Create Environment

1. Log into the platform dashboard.
2. Click **Create environment**.
3. Choose instances (e.g., **Tomcat**), set cloudlet limits, and enable **external IP**. Name the environment and click **Create**.

![create environment](#)

4. After the environment is created, click the **Additionally** button for the instance to see the **Public IP**.

![public IP](#)

### 2. Deploy an Application

1. Upload your Java package to the **Deployment Manager**.

![upload archive](#)

2. Deploy the application to the newly created environment.

For example, let's deploy a simple Java application:

```java
package com;

public class RemoteDebugger {
    public void start () {
        int a, b, c;
        a = 1;
        System.out.println("a = " + a);
        b = 2;
        System.out.println("b = " + b);
        c = 3;
        System.out.println("c = " + c);
    }
}
```

### 3. Configure Debugging in Your IDE

1. Open the application in your IDE (e.g., **NetBeans**) and create a new debugger (**Debug main project > Attach Debugger**).

![NetBeans attach debugger](#)

2. Select the type of connector, insert your **Public IP** address, and specify the port you want to listen to (e.g., port 5000).

![NetBeans debugger connection](#)

### 4. Configure Debugging on Tomcat

1. In the platform dashboard, click **Config** for **Tomcat**.

![Tomcat config](#)

2. Navigate to the `variables.conf` file and add the following arguments:

```bash
-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5000
```

This configuration tells JVM to:
- **-Xdebug**: Run the application in debug mode.
- **-Xrunjdwp**: Provide debug parameters (port 5000 in this case).

![configure Tomcat variables](#)

:::note Ensure the port number is the same in both `variables.conf` and your IDE debugger configuration. :::

3. Save the changes and **Restart** Tomcat.

### 5. Start Debugging

1. Set a breakpoint in your code (e.g., before the third variable initialization).

![NetBeans code break point](#)

2. Start the debugger from your IDE and verify the application behavior.

Check **Tomcat logs** to see the results:

![Tomcat logs before break point](#)

After hitting the breakpoint, the variables up to the breakpoint will be initialized.

### 6. Modify the Breakpoint

You can adjust the breakpoint further down the code to initialize all variables.

![NetBeans break point next line](#)
![Tomcat logs after break point](#)

### Remote Debugging for Jetty and GlassFish

#### Jetty
The instructions are the same for Jetty.

#### GlassFish
For **GlassFish**:
1. Log into the **GlassFish Admin Console** using credentials sent to your email.
2. Navigate to **gfcluster-config > JVM Settings > General tab > Debug options**.
3. Add **-Xdebug** and **-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5000** to the **JVM options**.
4. Save the changes and restart GlassFish.

![GlassFish JVM settings](#)

## What’s Next?

- [WebSockets](https://docs.dewacloud.com/docs/websockets/)
- [Email via External SMTP](https://docs.dewacloud.com/docs/email-via-external-smtp/)
- [Public IP](https://docs.dewacloud.com/docs/public-ip/)