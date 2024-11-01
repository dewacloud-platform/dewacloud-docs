---
sidebar_position: 4
slug: /create-env-api
title: CreateEnv Params
---
# Parameter untuk API CreateEnvironment

Pembuatan environment baru pada platform dapat diotomatisasi dengan berbagai cara, misalnya dengan bantuan [platform CLI](<https://docs.dewacloud.com/docs/cli/>), melalui permintaan [API](<https://docs.jelastic.com/api/>) langsung atau dengan menyatakan parameter yang sesuai melalui manifest [JPS](<https://docs.dewacloud.com/docs/packaging-standard/>). Dalam hal ini, meskipun mewakili operasi yang cukup sederhana, ini dapat mencakup sejumlah parameter berbeda untuk definisi topologi yang tepat.

Berikut ini kami memberikan deskripsi untuk semua pengaturan tersebut dengan contoh penggunaannya melalui CLI. Mereka dibagi menjadi 3 bagian utama sebagai array dari metode _~/jelastic/environment/control/createenvironment_, dinamai sesuai dengan denominasi array yang sesuai - dua yang umum dan daftar parameter khusus untuk pembuatan container Docker:

  * [env](#common-environment-configurations)
  * [nodes](#nodes-configurations)
  * [docker](#docker-based-environment-configurations)

## Konfigurasi Common Environment{#common-environment-configurations}

Parameter di bawah ini harus ditentukan dalam array _**env**_ (dari perintah CLI atau file JSON) dan mendefinisikan konfigurasi environment yang paling umum, seperti _programming language_, _name_, _region_, dan lainnya:

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_region_ | [Region environment](<https://docs.dewacloud.com/docs/environment-regions>) | string | Nama region yang dibutuhkan - tergantung pada pengaturan penyedia layanan hosting. | tidak  
_ishaenabled_ | [High Availability](<https://docs.dewacloud.com/docs/auto-clustering>) | boolean | _true_, _false_  
**Catatan:** Berlaku hanya untuk _Tomcat 6/7_, _Jetty6_, _TomEE_, _GlassFish3_ | tidak  
_engine_ | Versi programming language | string | _java6_, _java7_, _java8_, _php5.3_, _php5.4_, _php5.5_, dll. | ya (kecuali environment berbasis Docker)  
_displayName_ | [Alias environment](<https://docs.dewacloud.com/docs/environment-aliases>) | string | _my-env-alias_ | tidak  
_sslstate_ | [Built-In SSL](<https://docs.dewacloud.com/docs/built-in-ssl/>) | boolean | _true_, _false_ | tidak  
_shortdomain_ | Nama untuk environment yang akan dibuat | string | _my-cli-env_ | ya  
  
Contoh:

```    
env '{"region": "default_hn_group", "ishaenabled": "false", "engine": "java7", "displayName": "my-env-alias", "sslstate": "true", "shortdomain": "my-cli-env"}'   
```
  
## Konfigurasi Nodes{#nodes-configurations}

Dalam bagian _**nodes**_, penyesuaian yang lebih halus dapat dilakukan untuk mendefinisikan parameter server yang terdiri, seperti _type_, _amount_, jumlah cloudlet _reserved/dynamic_ yang dialokasikan, dan lainnya:

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_extip_ | [Public IP](<https://docs.dewacloud.com/docs/public-ip>) | boolean | _true_, _false_ | tidak  
_count_ | Jumlah nodes | integer | _1_, _2_, _3_, … | tidak  
_fixedCloudlets_ | Jumlah cloudlet tetap | integer | _1_, _2_, _3_, … | ya  
_flexibleCloudlets_ | Jumlah cloudlet fleksibel | integer | _1_, _2_, _3_, … tetapi tidak bisa kurang dari **fixedCloudlets** | ya  
_displayName_ | Nama [alias](<https://docs.dewacloud.com/docs/environment-aliases>) Node | string | _my-node-alias_ | tidak  
_nodeType_ | Jenis stack | string | _docker_, _tomcat6_, _tomcat7_, _tomee_, _mysql5_, _apache2_, _nginxphp_, dll. (lihat daftar lengkap nilai yang tersedia [di sini](<https://docs.dewacloud.com/docs/application-manifest#nodeTypeList>)) | ya  
_docker_ | Daftar pengaturan container Docker | array | cek bagian yang sesuai [di bawah](#docker-based-environment-configurations) | hanya untuk _docker_ **nodeType**  
  
Contoh:
```
nodes '[{"extip": "true", "count": "2", "fixedCloudlets": "16", "flexibleCloudlets": "32", "displayName": "my-node-alias", "nodeType": "docker", "docker": {...}}]'   
``` 
  
## Konfigurasi Docker-Based Environment{#docker-based-environment-configurations}

Subbagian _**docker**_ dimaksudkan untuk menyatakan parameter khusus container Docker yang diperlukan untuk deployment-nya.

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_cmd_ | Konfigurasi [Run command](<https://docs.dewacloud.com/docs/container-run-configuration/>) | string | _run.sh_ | tidak  
_image_ | Nama image Docker dengan versi tag (opsional) | string | _ubuntu_, _tutum/apache-php_, _jelastic/tomcat8:latest_, dll. | ya  
_nodeGroup_ | Layer environment tempat image seharusnya ditempatkan | string | _cp_ \- application server  
 _bl_ \- load balancer  
 _nosqldb_ \- noSQL database  
 _sqldb_ \- SQl database  
 _cache_ \- cache node  
 _storage_ \- storage node | tidak (jika tidak ditentukan, image akan ditambahkan ke layer _Extra_)  
_links_ | Parameter [Linking](<https://docs.dewacloud.com/docs/container-links>) | array | dijelaskan dalam daftar expandable di bawah ini | tidak  
_env_ | Daftar [environment variables](<https://docs.dewacloud.com/docs/container-variables>) | objek | dijelaskan dalam daftar expandable di bawah ini | tidak  
_registry_ | Kredensial untuk registri pribadi | array | dijelaskan dalam daftar expandable di bawah ini | tidak  
_volumes_ | Daftar [volumes](<https://docs.dewacloud.com/docs/container-volumes>) lokal | array | dijelaskan dalam daftar expandable di bawah ini | tidak  
_volumeMounts_ | Daftar direktori data [mounted](<https://docs.dewacloud.com/docs/mount-points>) | array | dijelaskan dalam daftar expandable di bawah ini | tidak  
_volumesFrom_ | Daftar node untuk menyalin pengaturan volume dari | array | dijelaskan dalam daftar expandable di bawah ini | tidak  
  
Contoh:
```
"docker": {"cmd": "run.sh", "image": "jelastic/tomcat8:latest", "nodeGroup": "cp", "links": [...], "env": {...}, "registry": {...}, "volumes": [...], "volumeMounts": {...}, "volumesFrom": [{...}]}   
```
  
  * linking configuration - untuk membangun koneksi antara container Docker dalam batasan satu environment

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_-_ | mendefinisikan layer/node yang seharusnya dihubungkan dengan instance saat ini dan menetapkan alias untuk bundel ini | string | _sqldb:DB_, _cp:alias_ | tidak  
  
Contoh:
```
"links": ["cp:alias", "sqldb:DB"]   
```
  
  
  * environment variables configuration - untuk menetapkan environment variables dalam container Docker

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_custom_variable_name_ | Menetapkan environment variables | string | _var1 value1_ (seluruh string setelah spasi pertama akan dianggap sebagai nilai, termasuk spasi dan tanda kutip) _var2=value1\value2\value3_ (untuk menetapkan beberapa nilai sekaligus, yaitu untuk membuat array; di sini, tanda kutip dan garis miring digunakan sebagai pemisah) | tidak  
  
Contoh:

```
"env": {"var1": "value1", "var2": "value1\value2\value3"}   
``` 
  
  * registry configuration - untuk koneksi ke registri pribadi

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
_password_ | Password untuk registri pribadi | string | _passw0rd_ | hanya jika Anda menggunakan registri pribadi  
_user_ | Nama pengguna dari registri pribadi | string | _admin_ | hanya jika Anda menggunakan registri pribadi  
_url_ | URL ke registri pribadi | string | _http://example.com/private-registry_ | hanya jika Anda menggunakan registri pribadi  
  
Contoh:

```    
"registry": {"password": "passw0rd", "user": "admin", "url": "http://example.com/private-registry"}   
```
  
  * local volumes - daftar volume yang akan dibuat dalam sistem file lokal dari container Docker

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
custom_path | Jalur volume lokal | string | _/my_custom_volume_ | tidak  
  
Contoh:
```
"volumes": ["/volume1", "/volume2", "/volume3"]   
```
  
  
  * mount points - serangkaian parameter yang menentukan folder dengan data yang diperlukan untuk dilampirkan dari server lain

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
local_path | Jalur lokal yang dirujuk data yang dipasang | array | _/mounted_data_ | ya  
sourcePath | Jalur ke direktori data yang diperlukan di server jarak jauh | string | _/required_data_  
jika tidak ditentukan, dinyatakan sama dengan _**local_path**_ (untuk server penyimpanan jarak jauh) | tidak  
sourceNodeId | Node ID dari container penyimpanan | integer | _459315_ | ya dalam hal tidak ada yang _**sourceNodeGroup**_ atau _**sourceHost**_ yang ditentukan  
sourceNodeGroup | Layer environment tertentu dalam environment saat ini | string | _cp_ \- application server  
 _bl_ \- load balancer  
 _nosqldb_ \- noSQL database  
 _sqldb_ \- SQl database  
 _cache_ \- cache node  
 _storage_ \- storage node | ya dalam hal tidak ada yang _**sourceNodeId**_ atau _**sourceHost**_ yang ditentukan  
sourceHost | IP Publik atau domain dari server Penyimpanan Data eksternal | string | _195.67.231.39_ | ya dalam hal tidak ada yang _**sourceNodeGroup**_ atau _**sourceNodeId**_ yang ditentukan  
readOnly | Menentukan hak _read only_ atau _read & write_ untuk client node | boolean | _true_ adalah _false_ secara default | tidak  
  
Contoh:

 ```   
"volumeMaunts": {"/data": {"sourcePath": "/exported", "sourceNodeId": "693215", "readOnly": "true"}}   
```
  
  
  * account volumes - daftar node di akun saat ini untuk volume yang akan diimpor

Nama | Deskripsi | Tipe | Contoh Nilai | Wajib  
---|---|---|---|---  
sourceNodeId | ID dari container penyimpanan | integer | _81725_ | ya, jika tidak ada yang _**sourceNodeGroup**_ yang ditentukan  
sourceNodeGroup | Layer environment tertentu dalam environment saat ini | string | _cp_ \- application server  
 _bl_ \- load balancer  
 _nosqldb_ \- noSQL database  
 _sqldb_ \- SQl database  
 _cache_ \- cache node  
 _storage_ \- storage node | ya, jika tidak ada yang _**sourceNodeId**_ yang ditentukan  
volumes | Daftar volume untuk diekspor | string | _/volume_  
Jika tidak ditentukan, semua volume pada node akan diekspor | tidak  
readOnly | Menentukan hak _read only_ atau _read & write_ untuk client node | boolean | _true_ (ditetapkan menjadi _false_ secara default) | tidak  
  
Contoh:

```   
"volumesFrom": [{"sourceNodeGroup": "cp", "volumes": ["/master", "/local"], "readOnly": "true"}]   
```
  
  

## Baca Juga{#whats-next}

  * [API Overview](<https://docs.dewacloud.com/docs/api-overview/>)
  * [API Methods](<https://docs.jelastic.com/api/>)
  * [Platform CLI](<https://docs.dewacloud.com/docs/cli/>)