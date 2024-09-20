---
sidebar_position: 14
slug: /managing-timezone-settings
title: Managing Timezone Settings
---
# Managing Timezone Data

By default, all containers in the platform use UTC timezone. However, you can change this to any desired timezone using the _**[TimeZone Change](https://docs.dewacloud.com/docs/#timezone-add-on)**_ add-on. Alternatively, you can manually update the timezone for Java and PHP application servers.

## Using TimeZone Add-On

You can easily install the _TimeZone Change_ add-on to adjust the timezone of your environment:

### 1. Check the Current Timezone

To verify the current timezone, use the following command in the terminal:

```bash
date
```

By default, the result will show the UTC timezone.

![date before timezone change](#)

### 2. Install the Add-On

Navigate to the _TimeZone Change_ add-on repository on GitHub and import the _**manifest.jps**_ file through the platform dashboard:

```url
https://github.com/jelastic-jps/time-zone-change/blob/master/manifest.jps
```

![import timezone change add-on](#)

### 3. Set TimeZone

Choose the target _Environment_ and specify the desired _TimeZone Name_ (e.g., _America/New_York_) from the [List of time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

![install timezone change add-on](#)

### 4. Verify TimeZone Change

After installation, run the `date` command again to ensure the timezone has been updated.

![date after timezone change](#)

## Managing Timezone Rules for Java

### Updating Timezone Data

To ensure the timezone rules in your Java environment are up-to-date, use the built-in _TZUpdater_ tool:

1. Connect to your Java environment via SSH.
2. Check the current TZdata version:

```bash
java -jar /usr/java/utils/tzupdater.jar -V
```

3. If the data is outdated, update it with:

```bash
java -jar /usr/java/utils/tzupdater.jar -u
```

### Changing Timezone for Java

To change the timezone for a Java application server, follow these steps:

1. Edit the _variables.conf_ file (location varies by server):
   - For **Tomcat**: `/opt/tomcat/conf/variables.conf`
   - For **Jetty**: `/opt/jetty/etc/variables.conf`
   - For **GlassFish**: Admin panel > _Configurations > JVM Settings_

2. Add or modify the _-Duser.timezone_ variable with the required timezone:

```bash
-Duser.timezone=America/New_York
```

3. **Save** the changes and **Restart** the application server.

## Managing Timezone Rules for PHP

### Checking Timezone Data

To update the timezone for PHP servers (Apache, NGINX):

1. Open the _php.ini_ file from the configuration manager.
2. Uncomment the line for external timezone database (Olson):

```ini
extension=tzdb
```

3. Save and restart the server.

### Changing Timezone for PHP

To change the timezone for PHP:

1. Edit the _php.ini_ file and modify the `date.timezone` parameter:

```ini
date.timezone = Australia/Sydney
```

2. Save and restart the server. The timezone will now reflect the new settings.

## What's Next?

- [Managing Locale Settings](https://docs.dewacloud.com/docs/locale-settings/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Java Application Server Configuration](https://docs.dewacloud.com/docs/java-application-server-config/)
- [PHP Application Server Configuration](https://docs.dewacloud.com/docs/php-application-server-config/)