---
sidebar_position: 2
slug: /quartz-scheduling
title: Quartz Scheduling
---
# Job Scheduling Using Quartz

**[Quartz](https://www.quartz-scheduler.org/)** is an open-source job scheduling service that can be integrated with any Java application. It supports both simple and complex schedules for executing tasks such as system maintenance, recurring jobs, or event-based actions. Quartz is particularly useful for applications that require tasks to occur at specific times or on a regular basis.

In this guide, we'll walk through setting up a Quartz job scheduler in the cloud.

## Create Environment

1. **Log in to the platform dashboard.**
2. Click **Create environment**.

![create environment](#)

3. In the **Environment topology** window, select **Tomcat** as your application server and configure the cloudlet limits. Give your environment a name (e.g., _quartz_) and click **Create**.

![environment wizard](#)

Your environment will be ready in a minute.

## Create Application

1. **Create a Maven-based web application** and add the following dependencies to your `pom.xml` file to include the Quartz libraries:

```xml
<!-- Quartz API -->
<dependency>
    <groupId>opensymphony</groupId>
    <artifactId>quartz</artifactId>
    <version>1.6.3</version>
</dependency>
<dependency>
    <groupId>commons-collections</groupId>
    <artifactId>commons-collections</artifactId>
    <version>3.2.1</version>
</dependency>
<dependency>
    <groupId>org.apache.directory.studio</groupId>
    <artifactId>org.apache.commons.logging</artifactId>
    <version>1.1.1</version>
</dependency>
```

2. **Build your project** to resolve the dependencies.

3. **Create a new Java class** to define your job. Here's an example of a simple job that displays the server time:

```java
package com;

import java.util.Date;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class HelloJob implements Job {
    public void execute(JobExecutionContext context) throws JobExecutionException {
        System.out.println("Server Time: " + new Date());
    }
}
```

4. **Create a Servlet** that specifies when the Quartz scheduler will run the job. In this example, the job logs the server time every minute. Here’s the `QuartzServlet.java` code:

```java
package com;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.quartz.CronTrigger;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.impl.StdSchedulerFactory;

public class QuartzServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            JobDetail job = new JobDetail();
            job.setName("dummyJobName");
            job.setJobClass(HelloJob.class);

            CronTrigger trigger = new CronTrigger();
            trigger.setName("TriggerName");
            trigger.setCronExpression("0 */1 * * * ?");

            Scheduler scheduler = new StdSchedulerFactory().getScheduler();
            scheduler.start();
            scheduler.scheduleJob(job, trigger);

        } catch (SchedulerException | ParseException ex) {
            Logger.getLogger(QuartzServlet.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            out.close();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    public String getServletInfo() {
        return "Quartz Scheduler Servlet";
    }
}
```

5. **Build the project** into a **WAR** file.

## Deploy Application

1. **Go to the platform dashboard** and upload the **WAR** file you’ve created.

![upload Quartz archive](#)

2. **Deploy the application** to the environment you created earlier.

![deploy Quartz application](#)

3. **Open your application in the browser**. Navigate to the Quartz servlet (e.g., `http://{env_name}.{hoster_domain}/quartz` based on the servlet mapping) and check the logs to see the job execution output.

![Tomcat log](#)

The Quartz scheduler will now run your job every minute, as configured.

## What’s Next?

- [Setting Up a Cronjob](https://docs.dewacloud.com/docs/cron-job/)
- [Log Files](https://docs.dewacloud.com/docs/view-log-files/)
- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)