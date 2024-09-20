---
sidebar_position: 1
slug: /setting-up-cronjob
title: Setting Up Cronjob
---
# Setting Up Cronjob

**Cron** is a time-based job scheduler in Unix-like operating systems. It allows users to schedule jobs, such as scripts or commands, to run periodically at specific times or dates. With Cron, you can automate tasks like system maintenance, backups, log clearing, or running scripts.

Here’s how you can set up and manage Cron jobs on the platform.

## Create Environment

1. **Log into the Platform Dashboard**.
2. Click **Create environment**.

![create environment button](#)

3. In the **Environment topology** window, select the application server and database you want to use (e.g., _Tomcat_ and _MySQL_). Type the name of the environment and click **Create**.

![environment wizard](#)

Your environment with both Tomcat and MySQL nodes will be created within a minute.

## Upload Script

### Application Server

1. Click the **Config** button for your application server (e.g., Tomcat).

![Tomcat config button](#)

2. Upload the scripts you want to run to the appropriate folder:
   - **home** (for Java-based servers like Tomcat, TomEE, GlassFish, etc.)
   - The folder where your application is stored (for PHP servers).

![upload to home folder](#)

### Database

1. Click the **Config** button for your database (e.g., MySQL, MariaDB).

![MySQL config button](#)

2. Upload the scripts to the **scripts** folder.

![upload to scripts folder](#)

:::warning  
Make sure the script you want to run is executable. If not, use a built-in interpreter like Bash, Python, Perl, etc., depending on the script type.
:::

## Cron Event Scheduler

1. In the configuration tab, navigate to the **cron** folder and open the `{nodeName}` file.

![cron scheduler file](#)

2. Write the commands in the **crontab** format to schedule your tasks. The format for each cron job consists of six fields separated by spaces:

```bash
{minute} {hour} {day} {month} {day-of-week} {command-line-to-execute}
```

| Field            | Range of values                                         |
|------------------|---------------------------------------------------------|
| **minute**       | 0-59                                                    |
| **hour**         | 0-23                                                    |
| **day**          | 1-31                                                    |
| **month**        | 1-12                                                    |
| **day-of-week**  | 0-7 (0 and 7 = Sun, 1 = Mon, 2 = Tue, etc.)             |
| **command**      | Path to the script or command you want to execute       |

### Standards for Crontab Format:

- The fields must be in the exact order with no missing values.
- You can use an asterisk (`*`) to represent every possible value for a field. For example, `*` in the "hour" field means "run every hour."
- Use `/` to specify an interval. For example, `*/3` in the hour field means "run every three hours."
- Specify multiple values separated by commas. For example, `1,6,19` in the hour field means "run at 1:00, 6:00, and 19:00 hours."

### Example:
If your script is in the **home** folder of Tomcat and you want it to run every minute, the command could look like this:

```bash
*/1 * * * * /opt/tomcat/temp/test.sh
```

![script scheduled via cron](#)

:::tip  
If your script does not have executable permissions and you're using built-in interpreters like Bash, Python, Perl, etc., specify the interpreter explicitly:

```bash
*/1 * * * * /bin/bash /opt/tomcat/temp/test.sh
```

Common interpreters:
- `/bin/bash` for Bash
- `/usr/bin/python` for Python
- `/usr/bin/perl` for Perl
:::

3. **Make sure there’s a blank line after the last cronjob entry** to avoid issues.

4. **Save** the changes to apply the settings.

That’s it! You’ve successfully set up a Cron job.

## What’s Next?

- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Quartz Scheduling](https://docs.dewacloud.com/docs/quartz/)
- [Memcached System](https://docs.dewacloud.com/docs/memcached/)
