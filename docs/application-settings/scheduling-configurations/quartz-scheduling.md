---
sidebar_position: 2
slug: /quartz
title: Quartz Scheduling
---

# Penjadwalan Tugas Menggunakan Quartz

**[Quartz](https://www.quartz-scheduler.org/)** adalah layanan penjadwalan tugas sumber terbuka yang dapat diintegrasikan dengan aplikasi Java apa pun. Quartz mendukung jadwal yang sederhana maupun kompleks untuk pelaksanaan tugas seperti pemeliharaan sistem, pekerjaan berulang, atau tindakan berbasis acara. Quartz sangat berguna untuk aplikasi yang memerlukan tugas terjadi pada waktu tertentu atau secara berkala.

Dalam panduan ini, kita akan membahas cara mengatur penjadwal tugas Quartz di cloud.

## Buat Environment

1. **Masuk ke dalam dashboard platform.**
2. Klik **Create environment**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/quartz-scheduling/01-create-environment.png" alt="create environment" width="40%"/>

3. Dalam jendela **Environment topology**, pilih **Tomcat** sebagai server aplikasi Anda dan konfigurasikan batas cloudlet. Beri nama lingkungan Anda (misalnya, _quartz_) dan klik **Create**.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/quartz-scheduling/02-environment-wizard.png" alt="environment wizard" max-width="100%"/>

Lingkungan Anda akan siap dalam satu menit.

## Buat Aplikasi

1. **Buat aplikasi web berbasis Maven** dan tambahkan ketergantungan berikut ke file `pom.xml` Anda untuk memasukkan perpustakaan Quartz:

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

2. **Bangun proyek Anda** untuk menyelesaikan ketergantungan.

3. **Buat kelas Java baru** untuk mendefinisikan pekerjaan Anda. Berikut adalah contoh pekerjaan sederhana yang menampilkan waktu server:

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

4. **Buat Servlet** yang menentukan kapan penjadwalan Quartz akan menjalankan tugas. Dalam contoh ini, tugas mencatat waktu server setiap menit. Berikut adalah kode `QuartzServlet.java`:

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

5. **Bangun proyek** menjadi file **WAR**.

## Deploy Aplikasi

1. **Pergi ke dashboard platform** dan unggah file **WAR** yang telah Anda buat.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/quartz-scheduling/03-upload-quartz-archive.png" alt="upload Quartz archive" width="40%"/>

2. **Deploy aplikasi** ke environment yang Anda buat sebelumnya.

<img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/quartz-scheduling/04-deploy-quartz-application.png" alt="deploy Quartz application" width="40%"/>

3. **Buka aplikasi Anda di browser**. Arahkan ke servlet Quartz (misalnya, `http://{env_name}.{hoster_domain}/quartz` berdasarkan pemetaan servlet) dan periksa log untuk melihat output eksekusi pekerjaan.

    <img src="https://assets.dewacloud.com/dewacloud-docs/application_settings/scheduling-configuration/quartz-scheduling/05-tomcat-log.png" alt="Tomcat log" max-width="100%"/>

Penjadwalan Quartz sekarang akan menjalankan pekerjaan Anda setiap menit, sesuai konfigurasi.

## Baca Juga

- [Setting Up a Cronjob](https://docs.dewacloud.com/docs/cron-job/)
- [Log Files](https://docs.dewacloud.com/docs/log-files/)
- [Configuration File Manager](https://docs.dewacloud.com/docs/configuration-file-manager/)