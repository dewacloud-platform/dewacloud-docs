---
sidebar_position: 4
slug: /what-are-system-containers
title: System Containers
---
# Apa Itu System Containers

**System container** (juga dikenal sebagai _operating system container_) adalah tipe container tertua. Ini adalah solusi yang berfokus pada sistem operasi (OS) yang berperilaku seperti sistem mandiri, yang tidak memerlukan perangkat lunak khusus atau custom image seperti Docker. System containers sangat mirip dengan virtual machines (VMs) tetapi dengan overhead yang sangat rendah dan manajemen yang mudah.

System container menjalankan sistem init yang lengkap (_systemd_, _SysVinit_, _Upstart_, _OpenRC_, dll.), yang memungkinkan penciptaan beberapa proses (misalnya _OpenSSH_, _crond_, atau _syslogd_) dalam satu container di bawah OS yang sama. System containers paling cocok untuk aplikasi monolitik tradisional atau legacy, karena mereka memungkinkan penggunaan kembali arsitektur, alat, dan konfigurasi yang diterapkan untuk VMs.

<img src="https://assets.dewacloud.com/dewacloud-docs/platform-overview/system-containers/services-in-application-and-system-containers.png" alt="services in application and system containers" max-width="100%"/>

Spesifikasi dari system containers memberikan beberapa keuntungan dan kekhususan:

* Ini dapat dianggap sebagai solusi _stateful_. System containers mendukung [live migration (melintasi host nodes, data centers, atau bahkan Clouds)](https://www.virtuozzo.com/company/blog/live-containers-migration-across-data-centers-aws-and-azure-integration/) dan tidak kehilangan data/status setelah reboot. Persistensi data semacam ini sangat cocok untuk menjalankan aplikasi dan layanan stateful yang hidup panjang (termasuk SQL, NoSQL, dan instance database in-memory).
* System containers hidup berdampingan secara harmonis dengan ekosistem Java dan tidak memerlukan penyesuaian khusus agar proses Java sadar bahwa mereka berjalan di dalam containers.
* System containers mendukung solusi yang ada untuk menerapkan hot redeployment tanpa perlu me-restart container atau runtime Java. Juga, mereka menyederhanakan dan mempercepat [clustering dari Java EE / Jakarta EE application servers](https://docs.dewacloud.com/docs/payara/).

Ada beberapa implementasi yang berbeda dari system containers: _BSD jails_, _Linux vServer_, _Solaris Zones_, _OpenVZ/Virtuozzo_, _LXC/LXD_. 

## Baca Juga{#whats-next}

* [Docker Standard Support](https://docs.dewacloud.com/docs/container-types)
* [Application Containers](https://docs.dewacloud.com/docs/what-are-application-containers)
* [Supported OS Distributions](https://docs.dewacloud.com/docs/container-image-requirements)
* [Container Redeploy](https://docs.dewacloud.com/docs/container-redeploy)