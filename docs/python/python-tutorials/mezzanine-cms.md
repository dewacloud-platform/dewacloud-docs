---
sidebar_position: 1
slug: /mezzanine-cms
title: Mezzanine CMS
---
# Mezzanine CMS: Python-Based Hosting with Jelastic PaaS

[![mezzanine cms](https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-e1538405188862.png)](http://mezzanine.jupo.org/) 
Mezzanine CMS (content management system) adalah solusi open source yang kuat dan mudah digunakan untuk manajemen konten dan blog. Dibangun di atas Django - framework pengembangan web berbasis Python - di bawah lisensi BSD. Fungsi default Mezzanine CMS memungkinkan mencakup sebagian besar kebutuhan umum. Pada saat yang sama, karena jumlah besar ekstensi pihak ketiga, widget, modul, dan tema, platform ini dapat dengan mudah disesuaikan untuk memenuhi kebutuhan spesifik pelanggan.

Mezzanine CMS memberikan manfaat bagi pengembang dan manajer konten:

  * Editor WYSIWYG dengan pengurutan halaman Drag-and-Drop dan pengeditan konten visual
  * penerbitan terjadwal
  * berbagai tema siap pakai
  * API yang kaya
  * dukungan out-of-the-box untuk Django internationalization, Twitter Bootstrap, Disqus, Akismet spam filter, Twitter feed, dan Google Analytics
  * integrasi bawaan dengan media sosial, mesin pencari, fungsi SEO, dan banyak modul lainnya

Jadi, hari ini kita akan membahas cara meng-host CMS seperti itu di Jelastic PaaS.

## Create Python Environment{#create-python-environment}

Untuk meng-host Mezzanine CMS, Anda memerlukan server aplikasi berbasis Python. Mari [buat](<https://docs.dewacloud.com/docs/setting-up-environment/>) environment baru dengan node Apache Python:

1\. Klik tombol **New Environment** di bagian atas dashboard untuk mengakses topology wizard.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/create-new-environment.png" alt="mezzanine cms" width="70%"/>

2\. Buka tab **Python**, di mana server aplikasi Apache Python yang diperlukan akan dipilih secara default.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/apache-python-application-server.png" alt="python cms" max-width="100%"/>

:::note
Mezzanine CMS belum mendukung **_Python 3.7_**, dan juga tidak mendukung **_Python 2.7_** setelah rilis _1.4_. Oleh karena itu, disarankan untuk memilih antara versi engine **_3.4-3.6_**.
:::

Jika diperlukan, konfigurasikan pengaturan lainnya (misalnya [cloudlet limit](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), [public IPs](<https://docs.dewacloud.com/docs/public-ip/>), [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.), ketik nama environment dan klik **Create**.

3\. Environment Anda akan muncul di dashboard dalam beberapa saat.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-environment.png" alt="mezzanine cms tutorial" max-width="100%"/>

Sekarang, Anda dapat melanjutkan ke deployment aplikasi Mezzanine CMS (secara otomatis dari archive yang sudah dikemas sebelumnya atau secara manual).

## Mezzanine CMS Automatic Deployment{#mezzanine-cms-automatic-deployment}

Anda dapat melakukan deployment Mezzanine CMS secara otomatis menggunakan archive deployment yang telah disiapkan khusus dengan versi aplikasi terbaru (yaitu _4.3.1_) yang sudah dikonfigurasi dengan database SQLite.

:::note
Jika mengonfigurasi archive deployment sendiri, pastikan paket Mezzanine CMS Anda berisi file berikut di root-nya:
  * file **_requirements.txt_** dengan nama semua modul Python yang diperlukan oleh aplikasi Anda, file ini akan dibaca oleh skrip deployment untuk menginstal modul-modul yang terdaftar melalui **_pip_** manager secara otomatis
  * file **_wsgi.py_** dengan skrip entry point untuk menjalankan aplikasi Anda di dalam virtual environment menggunakan _mod_wsgi_ untuk Apache
:::

1\. Tambahkan archive aplikasi ke [deployment manager](<https://docs.dewacloud.com/docs/deployment-manager/>) melalui tautan berikut:

[_https://download.jelastic.com/public.php?service=files&t=3d6fa1ed641a044c6a291bbeaa6c333c&download_](<https://download.jelastic.com/public.php?service=files&t=3d6fa1ed641a044c6a291bbeaa6c333c&download>)

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/upload-archive.png" alt="deploy mezzanine python" width="60%"/>

2\. [Deploy](<https://docs.dewacloud.com/docs/deployment-guide/#archive>) Mezzanine CMS ke dalam environment dengan server aplikasi Apache Python.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/deploy-mezzanine-cms.png" alt="python application deployment" width="60%"/>

3\. Setelah deployment berhasil, klik **Open in Browser** di sebelah environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/open-mezzanine-app-in-browser.png" alt="django-based cms" max-width="100%"/>

4\. Selesai, Mezzanine CMS Anda berjalan dalam beberapa menit!

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/application-welcome-page.png" alt="mezzanine sqlite" max-width="100%"/>

Mulailah bekerja dengan aplikasi Mezzanine CMS Anda (kredensial default untuk panel admin adalah - **_admin_** /**_default_**).

## Mezzanine CMS Manual Deployment{#mezzanine-cms-manual-deployment}

Proses deployment Mezzanine CMS dapat dibagi menjadi tiga langkah: instalasi, konfigurasi database, dan menjalankan aplikasi.

### Install Mezzanine CMS{#install-mezzanine-cms}

1\. Hubungkan ke server aplikasi Anda melalui [**Web SSH**](<https://docs.dewacloud.com/docs/web-ssh-client/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-cms-web-ssh.png" alt="mezzanine postgresql" max-width="100%"/>

2\. Praktik umum menjalankan aplikasi web Python di virtual environment yang terisolasi adalah dengan menggunakan alat **virtual environment**, yang memungkinkan pengelolaan ketergantungan proyek secara independen dan tanpa hak administrator.

Buat dan mulai virtual environment baru dengan perintah berikut:

```bash
virtualenv virtenv
source virtenv/bin/activate
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-web-ssh-session.png" alt="cloud cms" max-width="100%"/>

3\. Gunakan **_pip_** package manager untuk mengunduh Mezzanine content manager:

```bash
pip install mezzanine
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-web-ssh-duplicate-session.png" alt="python cms" max-width="100%"/>

:::note
Pada server dengan versi **_Python 2.7_**, Anda harus mendefinisikan versi Mezzanine yang sesuai secara eksplisit, yaitu _pip install mezzanine==1.4_.
:::

4\. Hapus aplikasi default di konteks **ROOT** dan instal proyek Mezzanine sebagai gantinya:

```bash
rm -rf ROOT
mezzanine-project ROOT
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/install-mezzanine-project.png" alt="mezzanine hosting" max-width="100%"/>

Sekarang, Anda perlu mengkonfigurasi database untuk aplikasi tersebut.

### Configure Database{#configure-database}

Anda memiliki dua opsi utama saat memilih database untuk Mezzanine CMS:

  * **_SQLite_** adalah solusi default yang diterapkan secara otomatis dan tidak memerlukan konfigurasi tambahan (data akan disimpan secara lokal di **_~/ROOT/db.sqlite3_**); ini cocok untuk tujuan _development_ dan _testing_
  * **_external SQL database_** (misalnya _MySQL_ atau _PostgreSQL_) adalah opsi yang lebih aman, yang menyediakan skalabilitas lebih besar; disarankan untuk lingkungan _production_

Jika opsi pertama sudah cukup bagi Anda, lewati bagian ini dan lanjutkan ke bagian **Run Mezzanine CMS**. Untuk penggunaan database eksternal, Anda dapat menemukan panduan langkah demi langkah yang diperlukan pada langkah-langkah berikut:

1\. Buat instance database yang diinginkan. Sebagai contoh, kami akan menambahkan server **MySQL** ke environment terpisah.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/add-mysql-environment.png" alt="mezzanine mysql" max-width="100%"/>

2\. Masuk ke panel admin database Anda dengan kredensial dari email yang sesuai (dikirim secara otomatis setelah pembuatan node DB).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/login-to-the-database.png" alt="content management system" max-width="100%"/>

3\. Beralih ke tab **User accounts** dan klik tautan _Add user account_ untuk membuat akun baru yang akan digunakan oleh aplikasi Mezzanine CMS untuk mengakses database.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/user-accounts-overview.png" alt="django-based cms" max-width="100%"/>

4\. Pada halaman yang terbuka, tentukan _User name_ /_Password_ yang diinginkan dan centang kotak _Create database with same name and grant all privileges_.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/add-native-mysql-user-account.png" alt="django-based cms" max-width="100%"/>

Gulir ke bawah dan klik **Go**.

5\. Kembali ke dashboard dan buka file **_/var/www/webroot/ROOT/ROOT/_****_local_settings.py_**. Temukan bagian **_DATABASES_** dan masukkan kredensial akses DB Anda:

```
DATABASES = {
  "default": {
    "ENGINE": "django.db.backends.mysql",
    "NAME": "mezzanine",
    "USER": "mezzanine",
    "PASSWORD": "passw0rd",
    "HOST": "node23132-mezzanine-db.jelastic.com",
    "PORT": "3306",
  }
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-local-settings.png" alt="mezzanine cms settings" max-width="100%"/>

Berikut ini:

  * **ENGINE** \- ganti dengan jenis database ke _django.db.backends.mysql_ (atau _django.db.backends.postgresql_psycopg2_ untuk database **PostgreSQL**)
  * **NAME**, **USER**, **PASSWORD** \- berikan data pada DB dan akun khusus (yang dibuat pada langkah sebelumnya)
  * **HOST** \- dapatkan nilai dari email yang sesuai
  * **PORT** \- atur port default _3306_ (atau _5432_ untuk **PostgreSQL**)

**Save** perubahan.

6\. Terakhir, Anda perlu menginstal MySQL connector untuk Python. Jalankan perintah berikut melalui **Web SSH**:

```bash
pip install mysqlclient
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/pip-install-mysqlclient.png" alt="mysql" max-width="100%"/>

:::note
Untuk menginstal Python connector untuk database **_PostgreSQL_**, dapatkan modul _psycopg2_ menggunakan **_pip_**:

```
PATH=$PATH:/usr/pgsql-9.6/bin/ pip install psycopg2
```
Jika diperlukan, modifikasi bagian **_pgsql-9.6_** sesuai dengan versi server PostgreSQL yang digunakan.
:::


### Start Mezzanine CMS{#start-mezzanine-cms}

Setelah DB Anda disiapkan, Anda perlu membuat skema database aplikasi.

1\. Masuk ke folder **~/ROOT** dan jalankan skrip **_manage.py_**.

```bash
cd ROOT
python manage.py createdb --noinput
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/create-db.png" alt="django framework" max-width="100%"/>

Penggunaan parameter _\--noinput_ secara otomatis membuat akun admin Mezzanine dengan kredensial **_admin_** /**_default_**.

2\. **_mod_wsgi_** digunakan untuk menjalankan aplikasi, jadi sesuaikan file **/var/www/webroot/ROOT/ROOT/****_wsgi.py_** sebagai berikut:

```python
import os,sys
virtenv = os.path.expanduser('~') + '/virtenv/'
virtualenv = os.path.join(virtenv, 'bin/activate_this.py')
try:
  if sys.version.split(' ')[0].split('.')[0] == '3':
    exec(compile(open(virtualenv, "rb").read(), virtualenv, 'exec'), dict(__file__=virtualenv))
  else:
    execfile(virtualenv, dict(__file__=virtualenv))
except IOError:
  pass
sys.path.append(os.path.expanduser('~'))
sys.path.append(os.path.expanduser('~') + '/ROOT/')
sys.path.append(os.path.expanduser('~') + '/ROOT/ROOT/')
os.environ['DJANGO_SETTINGS_MODULE'] = 'ROOT.settings'
from django.core.wsgi import get_wsgi_application
from mezzanine.utils.conf import real_project_name
application = get_wsgi_application()
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/run-mezzanine-application.png" alt="django framework" max-width="100%"/>

Jangan lupa untuk **Save** perubahan.

3\. Konfigurasikan symlink ke file dan juga kumpulkan konten statis dengan perintah berikut (jalankan dari folder **~/ROOT**):

```bash
ln -sfT ~/ROOT/ROOT/wsgi.py ~/ROOT/wsgi.py
python manage.py collectstatic
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/collect-a-static-content.png" alt="mezzanine cms" max-width="100%"/>

Sekarang, konten statis aplikasi disimpan di direktori **~/ROOT/static**.

4\. Buka file **/var/www/webroot/ROOT/ROOT/****_local_settings.py_** dan sesuaikan catatan _ALLOWED_HOSTS_ dengan menyediakan nama domain environment Anda:

```
ALLOWED_HOSTS = ["{envDomain}"]
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/adjust-the-allowed-hosts.png" alt="mezzanine settings" max-width="100%"/>

5\. Selesai! Klik tombol **Open in Browser** di sebelah environment Anda untuk mengakses Mezzanine CMS.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/open-mezzanine-in-browser.png" alt="install mezzanine" max-width="100%"/>

6\. Halaman sambutan aplikasi akan terbuka secara default.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/application-welcome-page.png" alt="python application deployment" max-width="100%"/>

Ikuti hyperlink _Log in to the admin interface_ untuk mengakses panel admin.

7\. Masuk dengan kredensial akun admin default (yaitu **admin** / **default**).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/mezzanine-cms/mezzanine-dashboard.png" alt="mezzanine mysql" max-width="100%"/>

:::tip
Untuk alasan keamanan, disarankan untuk segera mengganti kata sandi default Anda setelah pertama kali masuk.
:::