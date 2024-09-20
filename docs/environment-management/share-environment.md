---
sidebar_position: 2
slug: /share-environment
title: Share Environment
---
# Berbagi Environment

**Berbagi Environment** adalah kasus khusus dari fitur [kolaborasi akun](<https://docs.dewacloud.com/docs/account-collaboration/>) - ketika Anda ingin memberikan akses atau beberapa fungsi dari akun Anda kepada pengguna lain. Satu-satunya perbedaannya adalah Anda hanya perlu berbagi satu environment.

Cek ringkasan singkat fitur ini untuk pemahaman yang lebih baik:

  * _pemilik_ environment memiliki kontrol penuh atas environment
  * _kolaborator_ hanya dapat melakukan tindakan yang diizinkan oleh _pemilik_ (melalui [peran](<https://docs.dewacloud.com/docs/collaboration-roles-policies/>) yang ditetapkan)
  * hanya _pemilik_ yang dikenakan biaya untuk environment yang dibagikan

Untuk berbagi environment, pilih environment tersebut dan buka tab **Settings > Collaboration**. Di sini, Anda dapat melihat daftar semua kolaborator yang ada (jika ada) yang memiliki akses ke environment saat ini.

![environment collaboration settings](#)

:::tip Saat mengakses tab ini sebagai kolaborator, Anda hanya dapat memeriksa peran Anda sendiri untuk environment yang dibagikan saat ini. Namun, pemilik environment dapat membagikan akses dan kemungkinan manajemen melalui kebijakan _Collaboration_ (tidak dapat mengedit peran sendiri).
:::

1\. Tabel ini memberikan informasi rinci tentang akses ke environment saat ini. Anda dapat menemukan semua data yang diperlukan dalam empat kolom berikut:

  * **Name** \- menampilkan email anggota kolaborasi yang memiliki akses ke environment. Arahkan kursor untuk melihat opsi manajemen anggota saat ini (_Edit_ atau _Remove_ akses langsung).
  * **Roles** \- menampilkan peran akses yang tepat untuk environment saat ini per kolaborator. Arahkan kursor untuk daftar gabungan kebijakan dari semua peran.

![policies for all roles](#)

  * **Access Level** \- menunjukkan tingkat akses tertinggi untuk environment saat ini. Arahkan kursor untuk melihat lebih detail. Informasi tentang [algoritma tingkat akses](<https://docs.dewacloud.com/docs/collaboration-roles-policies/#roles-assigning-algorithm>) dapat ditemukan dengan mengarahkan kursor ke header kolom.

![collaboration access level](#)

  * **Status** \- memberikan status kolaborasi anggota (_active_, _pending acceptance_, _left_, _suspended_). Warna ikon di awal setiap entri juga mewakili status tersebut.

2\. Klik tombol **Add** di bagian atas panel alat untuk memberikan akses __langsung__ ke environment. Di sini, Anda perlu menyediakan data berikut:

  * _**Member**_ \- pilih anggota kolaborasi yang ada atau klik opsi **Invite Member** untuk memasukkan alamat email
  * _**Roles**_ \- pilih setidaknya satu peran dari daftar (jika diperlukan, klik opsi **Create New Role** untuk menambahkan peran baru)

![environment direct access dialog](#)

:::tip Saat mengundang anggota baru, alurnya mirip dengan yang dijelaskan dalam panduan _Create Collaboration_. Pengguna menerima email undangan dan dapat menerimanya atau menolaknya.
:::

3\. Anda dapat memilih catatan yang ada dalam daftar untuk **Edit** peran __langsung__ yang ditetapkan atau **Remove** akses __langsung__ ke environment saat ini.

![manage direct access](#)

**Catatan:** Setelah menghapus akses langsung, environment masih dapat tersedia untuk anggota melalui jenis akses lainnya, misalnya jika environment tersebut merupakan bagian dari grup yang dibagikan.

Anda dapat mengklik tombol **Account Collaboration** (ditampilkan hanya untuk pemilik environment) di bagian kanan atas panel alat untuk membuka **User Settings > Collaboration > Shared by Me** dan melakukan kustomisasi yang lebih kompleks.

## Baca Juga {#whats-next}

  * [Tinjauan Kolaborasi](<https://docs.dewacloud.com/docs/account-collaboration/>)
  * [Peran & Kebijakan Kolaborasi](<https://docs.dewacloud.com/docs/collaboration-roles-policies/>)
  * [Membuat Kolaborasi](<https://docs.dewacloud.com/docs/collaboration-create/>)
  * [Pengalaman Pengguna Kolaborasi](<https://docs.dewacloud.com/docs/collaboration-user-experience/>)