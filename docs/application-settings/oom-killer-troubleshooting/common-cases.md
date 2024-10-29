---
sidebar_position: 2
slug: /oom-killer-common-cases
title: Common Cases
---
# OOM Killer Resolutions: Common Cases

Periksa tabel berikut untuk mendapatkan resolusi untuk beberapa proses umum yang dihentikan oleh alat OOM:

Process | Resolution  
---|---  
_adt_ | Restart container untuk memulihkan proses  
_cron_ | Restart container untuk memulihkan proses  
_crond_ | Restart container untuk memulihkan proses  
_expect_ | Bisa disebabkan oleh proses _git fetch_ , _git pull_ atau _git gc_ (mungkin, karena ukuran proyek yang besar atau koneksi yang lambat)  
_git_ | Inisiasi **Update from GIT** dengan tombol yang sesuai di sebelah proyek Anda di dashboard atau tunggu [auto-deploy](https://docs.dewacloud.com/docs/git-svn-auto-deploy/) berikutnya berjalan (jika diaktifkan) untuk memulihkan proses _git_ secara otomatis  
_git-remote-http_ | Bisa disebabkan oleh proses _git fetch_ , _git pull_ atau _git gc_ (mungkin, karena ukuran proyek yang besar atau koneksi yang lambat)  
_gitlab-projects_ | Bisa disebabkan oleh proses _git fetch_ , _git pull_ atau _git gc_ (mungkin, karena ukuran proyek yang besar atau koneksi yang lambat)  
_jem_ | Kemungkinan besar, salah satu operasi terakhir yang Anda lakukan melalui platform dashboard (misalnya deploy aplikasi, instalasi SSL, perubahan engine, dll.) belum selesai - cukup inisiasi ulang  
_nscd_ | Restart container untuk memulihkan proses  
_ssh_ | Restart container untuk memulihkan proses  
_sshd_ | Restart container untuk memulihkan proses  
_systemd_ | Restart container untuk memulihkan proses  
_systemd-journal_ | Restart container untuk memulihkan proses  
_taskrunner_ | Restart container untuk memulihkan proses  
  
## Baca Juga

  * [OOM Killer Troubleshooting](https://docs.dewacloud.com/docs/oom-killer-issues/)
  * [Memory Leak Processes](https://docs.dewacloud.com/docs/oom-killer-leak-risk-processes/)
  * [Non-Leaking Processes](https://docs.dewacloud.com/docs/oom-killer-non-leaking-processes/)
  * [Auto-Deploy of Git Updates](https://docs.dewacloud.com/docs/git-svn-auto-deploy/)