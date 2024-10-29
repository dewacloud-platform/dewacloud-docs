---
sidebar_position: 13
slug: /custom-error-page
title: Custom Error Page Settings
---
# Custom Error Page Settings via NGINX Balancer

Saat terjadi kesalahan dalam suatu environment (seperti mencoba mengakses halaman yang tidak ada), halaman kesalahan default akan ditampilkan. Anda dapat menyesuaikan halaman kesalahan ini menggunakan NGINX load balancer untuk memberikan instruksi yang lebih spesifik atau informasi kontak untuk pengguna akhir. Berikut adalah cara mengatur halaman kesalahan kustom melalui NGINX balancer:

### 1. Akses Konfigurasi NGINX Load Balancer

Masuk ke dashboard platform Anda, temukan NGINX load balancer di environment Anda, dan klik tombol **Config**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/02-nginx-balancer-config-button.png" alt="NGINX balancer config button" max-width="100%"/>

### 2. Unggah Halaman Kesalahan Kustom

Dalam pengelola konfigurasi, navigasikan ke folder **/etc/nginx/conf.d** dan buat atau unggah halaman kesalahan kustom Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/03-create-custom-error-page.png" alt="create custom error page" max-width="100%"/>

### 3. Contoh Halaman Kesalahan Kustom

Untuk panduan ini, kami menggunakan file _**error.html**_ berikut sebagai contoh:

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/04-example-error-page.png" alt="example custom page" max-width="100%"/>

### 4. Edit Konfigurasi NGINX

Navigasikan ke direktori **/etc/nginx** dan buka file _**nginx-jelastic.conf**_. Salin isinya dan tempelkan ke dalam file _**nginx.conf**_, menggantikan baris _include /etc/nginx/nginx-jelastic.conf;_.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/05-edit-nginx-conf-file.png" alt="edit nginx.conf file" max-width="100%"/>

### 5. Perbarui Pengaturan Halaman Kesalahan

Temukan bagian _**server**_ dari konfigurasi yang ditempel dan ganti pengaturan _error_page_ default dengan yang berikut:

```bash
error_page 403 404 500 502 503 504 /error.html;
proxy_intercept_errors on;
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/06-error-page-configurations.png" alt="error page configurations" max-width="100%"/>

### 6. Modifikasi Bagian Lokasi

Gulir ke bawah ke bagian **location** dan sesuaikan parameter halaman kesalahan:

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

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/07-error-page-location-settings.png" alt="error page location settings" max-width="100%"/>

### 7. Pengaturan Tambahan untuk SSL (Opsional)

Jika Anda menggunakan [SSL](https://docs.dewacloud.com/docs/secure-sockets-layer/) untuk koneksi yang aman, pengaturan tambahan diperlukan.

Dalam file **/etc/nginx/conf.d/ssl.conf**, tambahkan yang berikut:

```bash
proxy_intercept_errors on;
location /error.html {
    root /etc/nginx/conf.d;
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/08-configure-ssl-conf-file.png" alt="configure ssl.conf file" max-width="100%"/>

### 8. Sesuaikan File SSL Upstreams

Dalam file **/etc/nginx/conf.d/ssl.upstreams.inc**, modifikasi kondisi berikut:

```bash
if ($cookie_SRVGROUP ~ group|common) {
    proxy_pass http://$cookie_SRVGROUP;
    error_page 403 404 /error.html;
    error_page 500 502 503 504 = @resque;
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/09-adjust-ssl-upstreams-file.png" alt="adjust SSL upstreams file" max-width="100%"/>

### 9. Mulai Ulang Server NGINX

Untuk menerapkan perubahan, **Restart** server NGINX.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/10-restart-nginx-balancer-nodes.png" alt="restart NGINX balancer nodes" max-width="100%"/>

### 10. Uji Halaman Kesalahan Kustom

Sekarang, coba akses halaman yang tidak ada dalam domain Anda untuk melihat halaman kesalahan kustom beraksi.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/custom-error-page-settings/11-custom-error-page.png" alt="custom error page" max-width="100%"/>

:::warning
Jika environment atau server dengan halaman kesalahan kustom tidak dapat dijangkau, halaman kesalahan default di seluruh platform akan ditampilkan. Notifikasi kesalahan di seluruh platform ini tidak dapat dimodifikasi.
:::

## Baca Juga

- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)
- [Application Lifecycle Management](https://docs.dewacloud.com/docs/application-lifecycle/)
- [NGINX Balancer Configuration](https://docs.dewacloud.com/docs/nginx-balancer-config/)
- [Secure Sockets Layer](https://docs.dewacloud.com/docs/secure-sockets-layer/)