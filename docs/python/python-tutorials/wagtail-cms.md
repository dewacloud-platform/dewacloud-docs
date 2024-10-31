---
sidebar_position: 2
slug: /wagtail-cms
title: Wagtail CMS
---
# Deploy Wagtail Python-Based CMS into Jelastic PaaS

[<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wagtail-logo-e1539242515373.png" alt="content management system" width="40%"/>](https://wagtail.io/) 

Wagtail CMS (content management system) adalah CMS yang sederhana dan lincah berbasis [Django](<https://www.djangoproject.com/>), yang menawarkan antarmuka yang nyaman dan intuitif bagi editor untuk membuat dan menyusun konten situs web. Wagtail diterbitkan di bawah lisensi BSD, yang memberikan kebebasan sebanyak mungkin kepada Anda. Kinerja luar biasa dan optimisasi CMS ini memastikan pemuatan halaman dan pencarian yang sangat cepat. Dengan keuntungan dari Wagtail, Anda dapat menghabiskan lebih sedikit waktu untuk mengonfigurasi situs Anda dan lebih banyak waktu untuk menyempurnakan proyek Anda (menggunakan sejumlah besar alat di panel administrasi untuk bekerja dengan konten).

Artikel ini menjelaskan cara melakukan deployment Wagtail CMS ke dalam environment Python di Jelastic.

## Create Python Environment{#create-python-environment}

Untuk memulai, Anda perlu membuat environment dengan server aplikasi yang sesuai - server web Apache dengan engine Python.

1\. Untuk membuat **New Environment**, masuk ke dashboard Jelastic Anda dan klik tombol dengan nama yang sama di sudut kiri atas.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/create-new-environment-1.png" alt="content management system" width="70%"/>  
2\. Dalam topology wizard yang terbuka, beralih ke tab **Python** dan pilih versi Python yang diperlukan untuk node server aplikasi Apache yang dipilih secara otomatis.  
<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/python-application-server.png" alt="wagtail mariadb" width="100%"/>

**Note:** Versi terbaru Wagtail CMS hanya mendukung **_Python 3.x_**. Pada instance **_Python 2.7_**, jalankan versi aplikasi _1.13_.

Konfigurasikan semua pengaturan lain sesuai kebutuhan Anda (misalnya [cloudlet limit](<https://docs.dewacloud.com/docs/automatic-vertical-scaling/>), ruang disk, [region](<https://docs.dewacloud.com/docs/environment-regions/>), dll.), tetapkan nama domain yang diinginkan, dan klik tombol **Create**.

3\. Tunggu beberapa menit hingga environment Anda selesai dibuat.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/open-wagtail-cms-in-browser.png" alt="django framework" width="100%"/>

Sekarang, Anda siap memulai deployment aplikasi Wagtail CMS. Di bawah ini, kami akan menjelaskan bagaimana cara melakukan deployment secara otomatis menggunakan archive yang sudah dikemas sebelumnya dan secara manual dari awal.

## Wagtail CMS Automatic Deployment{#wagtail-cms-automatic-deployment}

Kami telah menyiapkan archive deployment dengan Wagtail CMS yang sudah dikonfigurasi dengan versi terbaru yang tersedia saat ini (yaitu _2.2_) dan database SQLite, yang dapat diinstal dalam hitungan menit tanpa memerlukan konfigurasi manual.

:::note
Jika mengonfigurasi archive deployment sendiri, pastikan paket Wagtail CMS Anda berisi file berikut di root-nya:
  * file **_requirements.txt_** dengan nama semua modul Python yang diperlukan oleh aplikasi Anda, file ini akan dibaca oleh skrip deployment untuk menginstal modul-modul yang terdaftar melalui **_pip_** manager secara otomatis
  * file **_wsgi.py_** dengan skrip entry point untuk menjalankan aplikasi Anda di dalam virtual environment menggunakan _mod_wsgi_ untuk Apache
:::

1\. Unggah paket aplikasi Wagtail CMS Anda ke [deployment manager](<https://docs.dewacloud.com/docs/deployment-manager/>) melalui tautan berikut:

```
https://download.jelastic.com/public.php?service=files&t=b01aabf6a7fb615884c27eb4101e5150&download
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wagtail-cms-deployment-manager.png" alt="wagtail hosting" width="60%"/>

2\. [Deploy archive ini](<https://docs.dewacloud.com/docs/deployment-guide/#archive>) ke dalam environment **_Python 3.x_** Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/deploy-the-archive-into-python-environment.png" alt="wagtail hosting" width="60%"/>
3\. Setelah operasi selesai, pilih tombol **Open in Browser** di sebelah environment Anda.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/open-wagtail-environment-in-browser.png" alt="django" width="100%"/>  
4\. Selesai! Sekarang Anda dapat menikmati bekerja dengan aplikasi Wagtail CMS Anda (kredensial default untuk panel admin adalah - **_admin / verysecurepasswordforadmin_**).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/welcome-to-wagtail-site.png" alt="django" width="100%"/>


## Wagtail CMS Manual Deployment{#wagtail-cms-manual-deployment}

Untuk deployment aplikasi Wagtail CMS secara manual, kami telah membagi prosesnya menjadi tiga langkah utama: instalasi aplikasi, konfigurasi database, dan menjalankan Wagtail CMS.

### Install Wagtail CMS{#install-wagtail-cms}

1\. Akses server aplikasi Apache Anda melalui SSH. Misalnya, kami akan menggunakan alat [**Web SSH**](<https://docs.dewacloud.com/docs/web-ssh-client/>).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/web-ssh-tool.png" alt="cloud cms" width="100%"/>  
2\. Praktik umum untuk menjalankan aplikasi web Python di virtual environment yang terisolasi adalah dengan menggunakan alat **virtual environment**. Alat ini memungkinkan Anda menyimpan ketergantungan yang diperlukan oleh berbagai proyek di tempat terpisah dan mengelolanya tanpa hak administrator.

Jadi, lakukan langkah berikut untuk membuat dan mengaktifkan virtual environment baru:

```bash
virtualenv virtenv 

source virtenv/bin/activate
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wagtail-web-ssh-session.png" alt="python cms" width="100%"/>

3\. Sekarang, unduh installer Wagtail CMS menggunakan package manager **_pip_** untuk Python:

```bash
pip install wagtail
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/pip-install-mysqlclient-1.png" alt="wagtail postgresql" width="100%"/>

:::note
**Note:** Jika menjalankan instance **_Python 2.7_**, Anda perlu menentukan versi aplikasi yang sesuai dalam perintah Anda secara eksplisit, yaitu _pip install wagtail==1.13_.
:::

4\. Kami akan menginstal aplikasi di konteks **ROOT**, jadi folder yang ada (dengan aplikasi default) harus dihapus terlebih dahulu:

```bash
rm -rf ROOT

wagtail start ROOT
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wagtail-start-root.png" alt="python hosting" width="100%"/>

Selanjutnya, Anda perlu memilih dan mengkonfigurasi database.

### Configure Database{#configure-database}

Seperti semua aplikasi berbasis Django, Wagtail CMS mendukung berbagai jenis database:

  * **_SQLite_** adalah opsi default, yang tidak memerlukan konfigurasi tambahan (data akan disimpan secara lokal di **_~/ROOT/db.sqlite3_**); cepat, sederhana, dan ringan, sangat cocok untuk tujuan _development_ dan _testing_
  * **_external database_** (misalnya _MySQL_ atau _PostgreSQL_) adalah solusi yang lebih cocok untuk lingkungan _production_; menyediakan tingkat keamanan dan skalabilitas yang memadai

Di bawah ini, kami akan memberikan panduan langkah demi langkah untuk menghubungkan database eksternal ke aplikasi Wagtail CMS Anda. Jika opsi pertama sudah cukup untuk keperluan Anda, lewati bagian ini dan lanjutkan ke **[Run Wagtail CMS](<#run-wagtail-cms>)** berikutnya.

1\. Buat instance database yang diinginkan. Misalnya, gunakan tombol **Change Environment Topology** untuk menambahkan server **MariaDB** ke environment Anda dengan Wagtail CMS yang terinstal.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/add-mariadb-to-the-environment.png" alt="wagtail hosting" width="100%"/>  
2\. Buka panel admin database dan masuk dengan kredensial dari email yang sesuai (dikirim secara otomatis setelah pembuatan node DB).

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/mariadb-admin-panel.png" alt="cloud cms" width="100%"/>  
3\. Navigasikan ke tab **User accounts** untuk membuat user yang akan mengakses database Wagtail CMS dengan mengklik tautan _Add user account_.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/user-accounts-overview-1.png" alt="django-based application" width="100%"/>  
4\. Pada halaman yang terbuka, tentukan _User name_ /_Password_ dan centang kotak _Create database with same name and grant all privileges_.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/create-new-database.png" alt="wagtail cms tutorial" width="100%"/>

Klik **Go** di bagian bawah halaman.

5\. Kembali ke dashboard dan buka file **_/var/www/webroot/ROOT/ROOT/settings/base.py_**. Temukan bagian **_DATABASES_** dan tambahkan kredensial akses DB dalam bagian yang sama (seperti yang ditunjukkan di bawah):

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'wagtail',
        'USER': 'wagtail',
        'PASSWORD': 'passw0rd',
        'HOST': 'node22551-wagtail.jelastic.com',
        'PORT': '3306',
    }
}
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/database-settings.png" alt="python hosting" width="100%"/>

Berikut ini:

  * **ENGINE** \- ubah menjadi _django.db.backends.mysql_

:::note
Untuk database **PostgreSQL**, gunakan nilai `django.db.backends.postgresql_psycopg2`.
:::

  * **NAME**, **USER**, **PASSWORD** \- masukkan data tentang DB dan akun yang dibuat pada langkah sebelumnya
  * **HOST** \- dapatkan nilai dari email yang sesuai
  * **PORT** \- atur port default _3306_ (atau _5432_ untuk **PostgreSQL**)

Jangan lupa untuk **Save** perubahan.

6\. Terakhir, instal MySQL connector untuk Python melalui Web SSH (dari folder **_~/ROOT_**):

```bash
pip install mysqlclient
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/pip-install-mysqlclient-1.png" alt="wagtail" width="100%"/>

:::note
Untuk menginstal Python connector untuk database **_PostgreSQL_**, dapatkan modul _psycopg2_ menggunakan **_pip_**:

```
PATH=$PATH:/usr/pgsql-9.6/bin/ pip install psycopg2
```

Jika diperlukan, modifikasi bagian **_pgsql-9.6_** sesuai dengan versi server PostgreSQL yang digunakan.
:::

### Run Wagtail CMS{#run-wagtail-cms}

Setelah DB Anda disiapkan, Anda perlu membuat skema database aplikasi.

1\. Masuk ke folder **~/ROOT** dan jalankan skrip **_manage.py_**.

```bash
cd ROOT
python manage.py migrate
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/python-manage.py-migrate.png" alt="wagtail sqlite" width="100%"/>

2\. Selanjutnya, atur kredensial admin untuk panel kontrol Wagtail CMS:

```bash
python manage.py createsuperuser
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wagtail-cms-control-panel.png" alt="wagtail sqlite" width="100%"/>

Dalam dialog, Anda perlu memberikan _Username_, _Email address_, dan _Password_ dengan konfirmasi.

3\. Untuk menjalankan aplikasi, kami menggunakan **_mod_wsgi_**, jadi handler _wsgi_ harus dibuat.

Masuk ke direktori **/var/www/webroot/ROOT** dan buat file **_wsgi.py_** dengan konten berikut:

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
os.environ['DJANGO_SETTINGS_MODULE'] = 'ROOT.settings.dev'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/wsgi-application.png" alt="wagtail" width="100%"/>

**Save** file yang baru dibuat.

4\. Selain itu, karena kami ingin melayani konten statis melalui server Apache Python kami, kami perlu mengumpulkan konten tersebut (jalankan dari folder **~/ROOT**):

_python manage.py collectstatic_

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/serve-apache-python.png" alt="python application deployment" width="100%"/>

Setelah melakukan tindakan ini, semua konten statis dari aplikasi saat ini disimpan di direktori **~/ROOT/static**.

5\. Selesai! Sekarang, Anda dapat mengklik tombol **Open in Browser** di sebelah environment Anda dengan Wagtail CMS.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/open-wagtail-cms-in-browser.png" alt="django framework" width="100%"/>  
6\. Hasilnya, Anda akan melihat halaman sambutan aplikasi.  
<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/welcome-to-wagtail-site.png" alt="django" width="100%"/>

Klik hyperlink **_here_** untuk mengakses panel admin.

7\. Masuk menggunakan kredensial yang ditentukan selama proses instalasi.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/sign-in-to-wagtail.png" alt="django-based cms" width="100%"/>

Sekarang, Anda dapat menggunakan fungsi panel admin untuk membuat halaman dan mengisinya dengan konten.

<img src="https://assets.dewacloud.com/dewacloud-docs/python/wagtail-cms/welcome-to-wagtail-cms.png" alt="django framework" width="100%"/>
