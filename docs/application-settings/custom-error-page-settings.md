---
sidebar_position: 13
slug: /custom-error-page-settings
title: Custom Error Page Settings
---
# Custom Error Page Settings via NGINX Balancer

When an error occurs within an environment (such as attempting to access a non-existing page), a default error page is displayed. You can customize this error page using the NGINX load balancer to provide more specific instructions or contact information for end-users. Here's how to set up a custom error page via the NGINX balancer:

### 1. Access NGINX Load Balancer Configuration

Log in to your platform dashboard, locate the NGINX load balancer in your environment, and click the **Config** button.

![NGINX balancer config button](#)

### 2. Upload Custom Error Page

In the configuration manager, navigate to the **/etc/nginx/conf.d** folder and either create or upload your custom error page.

![create custom error page](#)

### 3. Example Custom Error Page

For this guide, we are using the following _**error.html**_ file as an example:

![example custom page](#)

### 4. Edit NGINX Configuration

Navigate to the **/etc/nginx** directory and open the _**nginx-jelastic.conf**_ file. Copy its contents and paste them into the _**nginx.conf**_ file, replacing the _include /etc/nginx/nginx-jelastic.conf;_ line.

![edit nginx.conf file](#)

### 5. Update Error Page Settings

Find the _**server**_ section of the pasted configurations and replace the default _error_page_ settings with the following:

```bash
error_page 403 404 500 502 503 504 /error.html;
proxy_intercept_errors on;
```

![error page configurations](#)

### 6. Modify Location Section

Scroll down to the **location** sections and adjust the error page parameters:

```bash
location /error.html {
    root /etc/nginx/conf.d;
    internal;
}
location / {
    if ($cookie_SRVGROUP ~ group|common) {
        proxy_pass http://$cookie_SRVGROUP;
        error_page 403 404 500 502 503 504 = /error.html;
    }
    if ($cookie_SRVGROUP !~ group|common) {
        add_header Set-Cookie "SRVGROUP=$group; path=/";
    }
    proxy_pass http://default_upstream;
    add_header Set-Cookie "SRVGROUP=$group; path=/";
}
location @rescue {
    proxy_pass http://$cookie_SRVGROUP;
    error_page 500 502 503 504 = /error.html;
}
location @recycle {
    proxy_pass http://default_upstream;
    add_header Set-Cookie "SRVGROUP=$group; path=/";
}
```

![error page location settings](#)

### 7. Additional Settings for SSL (Optional)

If you are using [SSL](https://www.virtuozzo.com/application-platform-docs/secure-sockets-layer/) for secure connections, additional settings are required.

In the **/etc/nginx/conf.d/ssl.conf** file, add the following:

```bash
proxy_intercept_errors on;
location /error.html {
    root /etc/nginx/conf.d;
}
```

![configure ssl.conf file](#)

### 8. Adjust SSL Upstreams File

In the **/etc/nginx/conf.d/ssl.upstreams.inc** file, modify the following condition:

```bash
if ($cookie_SRVGROUP ~ group|common) {
    proxy_pass http://$cookie_SRVGROUP;
    error_page 403 404 /error.html;
    error_page 500 502 503 504 = @resque;
}
```

![adjust SSL upstreams file](#)

### 9. Restart NGINX Server

To apply the changes, **Restart** the NGINX server.

![restart NGINX balancer nodes](#)

### 10. Test Custom Error Page

Now, try accessing any non-existing page within your domain to see the custom error page in action.

![custom error page](#)

:::warning
If the environment or server with the custom error pages is not reachable, the platform-wide default error page will be displayed. These platform-wide error notifications cannot be modified.
:::

## What’s Next?

- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)
- [NGINX Balancer Configuration](https://docs.dewacloud.com/docs/nginx-balancer-config/)
- [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)