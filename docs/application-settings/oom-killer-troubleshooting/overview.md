---
sidebar_position: 1
slug: /oom-killer-troubleshooting
title: Overview
---
# OOM Killer Issues Troubleshooting

Ketika menerima notifikasi [load alert](https://docs.dewacloud.com/docs/load-alerts) dari OOM killer melalui email, langkah selanjutnya yang harus Anda lakukan adalah menyelidiki penyebab utama masalah yang terjadi dan menerapkan solusi. Untuk membantu Anda, kami telah menganalisis masalah yang paling umum ditemui dan menentukan cara yang sangat efektif untuk memperbaikinya serta mencegah kemunculannya di masa depan. Tiga kelompok utama proses yang diuraikan di bawah ini:

  * **[Common Cases](https://docs.dewacloud.com/docs/oom-killer-common-cases)** \- proses yang dijalankan secara default pada container platform apa pun dan dapat dihentikan oleh alat OOM
  * **[Processes of High Risk](https://docs.dewacloud.com/docs/oom-killer-leak-risk-processes)** \- kemungkinan kebocoran memori, yang memerlukan tindakan khusus atau optimasi kode aplikasi; disortir berdasarkan tipe stack/bahasa pemrograman yang digunakan, di mana setiap bagian memberikan rekomendasi umum terkait engine, serta resolusi penghentian untuk proses tertentu
  * **[Non-Leaking Processes](https://docs.dewacloud.com/docs/oom-killer-non-leaking-processes)** \- operasi yang bisa dihentikan oleh OOM killer tetapi tidak mewakili penyebab utama masalah; solusi umum untuk semua masalah ini adalah dengan me-restart container untuk memulihkan proses terkait

Jadi, ambil nama proses yang Anda terima dalam notifikasi email dan cari dalam dokumen yang ditautkan di atas untuk menemukan solusi yang diperlukan.