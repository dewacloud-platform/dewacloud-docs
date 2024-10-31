---
sidebar_position: 2
slug: /win-vm
title: Windows Server VM
---

# Windows Server VM

Platform ini mengintegrasikan dukungan untuk virtual machines (VMs), yang memungkinkan menawarkan hosting Windows Server. Dalam panduan ini, kita akan menunjukkan cara membuat Windows VM server dan spesifikasi hosting VMs dibandingkan dengan container biasa yang digunakan di platform.

**Catatan:** Ketersediaan dan versi dari Windows VMs (misalnya, _Windows Server 2019_ atau _2022_) di platform tergantung pada pengaturan penyedia hosting layanan tertentu.

## Membuat Windows VM{#creating-windows-vm}

1. Klik tombol **New Environment** di bagian atas dashboard untuk membuka topology wizard. Perluas bagian VPS untuk menemukan Windows server (label _VM_ membantu memisahkan opsi dari container).

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/01-windows-vm-topology-wizard.png" alt="Windows VM topology wizard" max-width="100%"/>

2. Hanya sumber daya tetap yang tersedia untuk virtual machines, jadi ketika VM dipilih, bagian tengah wizard disesuaikan. Di sini, Anda dapat memilih dari beberapa rencana yang telah ditentukan menggunakan penggeser. Arahkan ke ikon harga untuk melihat semua tarif yang tersedia untuk VM.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/02-windows-vm-resource-plans.png" alt="Windows VM resource plans" max-width="100%"/>

Juga, perhatikan bahwa opsi _[horizontal scaling](https://docs.dewacloud.com/docs/horizontal-scaling/)_ dan _IPv6_ tidak tersedia untuk virtual machines.

3. Jika VM ditambahkan ke topologi, garis tambahan _**VM Resources**_ muncul di bagian kanan wizard (tepat di bawah informasi cloudlets untuk container).

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/03-vm-resources-and-cost.png" alt="VM resources and cost" max-width="100%"/>

Biaya dari _VM Resources_ selalu tetap terlepas dari konsumsi aktual dari VMs. Klik **Create** untuk melanjutkan pembuatan environment.

## Mengelola Windows VM{#managing-windows-vm}

1. VMs disorot dengan label khusus _**VM**_ dan ikon khusus di kolom **Usage** (karena ikon berbentuk cloudlet tidak sesuai).

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/04-vm-label-and-resources-icon.png" alt="VM label and resources icon" max-width="100%"/>

:::tip
Anda dapat mengarahkan kursor ke kolom Usage untuk melihat ikhtisar komprehensif tentang konsumsi saat ini atau merujuk ke node Statistics untuk analisis mendetail.
:::

2. Beberapa [ikon fungsi node](https://www.virtuozzo.com/application-platform-docs/dashboard-guide/#function-icons-for-each-instance) untuk VM sedikit berbeda dibandingkan dengan container. Opsi berikut tersedia:

- **Add-Ons** - menginstal modul pluggable yang tersedia (misalnya, _Env Start/Stop Scheduler_)
- **Restart Node(s)** - me-restart VM
- **Statistics** - menunjukkan konsumsi sumber daya VM secara real-time dan historis
- **Remote Desktop** - terhubung melalui RDP menggunakan web client dan mereset kata sandi RDP
- **Additionally** - daftar opsi tambahan, seperti informasi node

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/06-vm-function-icons.png" alt="VM function icons" max-width="100%"/>

**Catatan:** Opsi **[clone](https://www.virtuozzo.com/application-platform-docs/clone-environment/)** dan **[migration](https://www.virtuozzo.com/application-platform-docs/environment-regions-migration/)** secara otomatis dinonaktifkan untuk lingkungan dengan VMs.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/07-vm-clone-disabled.png" alt="VM clone disabled" max-width="100%"/>

Mari kita tinjau opsi-opsi ini secara terperinci.

3. **Statistics** dikumpulkan dengan cara yang sama seperti untuk container. Namun, CPU diukur dalam _%_ untuk VM (bukan _MHz_).

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/08-vm-statistics-monitoring.png" alt="VM statistics monitoring" max-width="100%"/>

4. Semua konfigurasi aktual dan manajemen aplikasi dilakukan melalui RDP. Gunakan menu **Remote Desktop** yang sesuai untuk:

- **Open in Browser** - terhubung ke Windows Server melalui RDP menggunakan Guacamole web client, yang memungkinkan mengelola server langsung di browser
- **Reset RDP Password** - mereset dan mengirim ulang kata sandi pengguna Administrator Windows
- **Info** - menampilkan instruksi singkat tentang koneksi remote desktop melalui klien RDP lokal
- **RDP link** - menunjukkan tautan untuk koneksi melalui klien RDP lokal

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/09-vm-node-remote-desktop-options.png" alt="VM node remote desktop options" max-width="100%"/>

5. Selain web client bawaan, Anda dapat terhubung menggunakan aplikasi RDP lokal yang Anda pilih. Terhubung ke VM berdasarkan entry point-nya:

- Jika dibuat __tanpa external IP__, [endpoint](https://docs.dewacloud.com/docs/endpoints/) dibuat secara otomatis dan dapat digunakan untuk koneksi RDP <img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/10-windows-vm-endpoint-for-rdp.png" alt="Windows VM endpoint for RDP" max-width="100%"/>
  
- Jika __public IP terpasang__, Anda dapat menggunakannya secara langsung sebagai host VM

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/11-windows-vm-remote-desktop-connection.png" alt="Windows VM remote desktop connection" max-width="100%"/>

Gunakan kredensial administrator dari email untuk melakukan autentikasi dan mulai mengelola Windows Server Anda.

6. _vCPU_ dan _Memory_ untuk VM ditagih sebagai satu tarif, sementara _Disk_, _Network_, dan _Options_ ditagih secara terpisah, sama seperti untuk container.

<img src="https://assets.dewacloud.com/dewacloud-docs/windows-&-.net/windows-server-vm/12-windows-vm-billing-history.png" alt="Windows VM billing history" max-width="100%"/>

Itu semua yang Anda butuhkan untuk mengelola Windows VM di platform. Lihat [dokumentasi resmi Microsoft](https://docs.microsoft.com/en-us/windows-server/) untuk informasi tentang manajemen server itu sendiri.

## Baca Juga{#whats-next}

- [.NET Core (Beta)](https://docs.dewacloud.com/docs/net-core/)
- [Windows RD Access](https://docs.dewacloud.com/docs/win-rdp-access/)
- [Windows Roles & Features](https://docs.dewacloud.com/docs/win-vps-roles-features/)