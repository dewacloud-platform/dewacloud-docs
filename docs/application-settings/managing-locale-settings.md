---
sidebar_position: 12
slug: /managing-locale-settings
title: Managing Locale Settings
---
# Managing Locale Settings

A **locale** is a set of language and cultural preferences that define rules for how your interface and applications should behave, including language for messages, character sets, and more. Below is a guide on how to view and change the locale settings on your containers.

### 1. View Current Locale Settings

By default, platform-managed templates use **English** as the primary language. You can view the current locale settings in a container using the following command (this can be executed via [Web SSH](https://docs.dewacloud.com/docs/web-ssh-client/)):

```bash
locale -a
```

This command will list all the currently supported locales in your container.

![container default locale settings](#)

### 2. Add New Language Support

To add support for a new language, use the **[localedef](http://man7.org/linux/man-pages/man1/localedef.1.html)** tool:

```bash
sudo localedef -i {language}_{country} -f {codeset} {language}_{country}.{codeset}
```

Where:
- **{language}_{country}**: Represents the language and country code. For example, `en_US` for U.S. English.
  
:::tip
To see a list of available locales for generation, run the following command:
```bash
ls /usr/share/i18n/locales
```
:::
  
- **{codeset}**: Specifies the character encoding, typically `UTF-8`.

![localedef to add new locale](#)

### 3. Verify New Locale

After adding the new locale, verify it by running:

```bash
locale -a
```

This will show an updated list with the newly added language.

![list locale settings](#)

Now, the new locale has been successfully added and is available for use by your applications.

## What’s Next?

- [Web SSH Access](https://docs.dewacloud.com/docs/web-ssh-client/)
- [OOM Killer Overview](https://docs.dewacloud.com/docs/oom-killer-troubleshooting/)
- [Custom Error Page Settings](https://docs.dewacloud.com/docs/custom-error-page/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)