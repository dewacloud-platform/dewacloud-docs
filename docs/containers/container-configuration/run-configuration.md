---
sidebar_position: 6
slug: /container-run-configuration
title: Run Configuration
---

Tentu, berikut adalah terjemahan dan penyesuaian markdown sesuai dengan instruksi Anda:

# Run Configuration{#run-configuration}

Tab **CMD / Entry Point** terakhir berisi dua kolom input, di mana Anda dapat mengatur opsi run untuk container Anda:

  * _**Entry Point**_ \- mengkonfigurasi command yang akan dieksekusi selama peluncuran container
  * _**Run Command**_ \- mengatur default untuk peluncuran container 
    * _jika tidak ada entry point yang ditentukan_ \- command yang akan dijalankan
    * _jika entry point diberikan_ \- parameter tambahan untuk command

<img src="https://assets.dewacloud.com/dewacloud-docs/container/configuration/run-configuration/run-config-1.png" alt="cmd entrypoint layer settings" max-width="100%"/>

Menggunakan tombol panah terbalik, yang muncul saat memasukkan beberapa string custom di salah satu dari kolom ini, opsi run yang ditentukan dapat dengan mudah di-**Reset ke nilai default**.

:::note
Jika tidak ada run command yang dinyatakan dalam pengaturan template secara default, Anda harus mengatur opsi yang sesuai menggunakan frame ini. Jika tidak, tidak ada aplikasi/layanan yang akan dimulai saat peluncuran container.
:::

## Baca Juga{#whats-next}

  * [Container Configuration](<https://docs.dewacloud.com/docs/container-configuration/>) 
  * [Variables](<https://docs.dewacloud.com/docs/container-variables/>) 
  * [Links](<https://docs.dewacloud.com/docs/container-links/>) 
  * [Volumes](<https://docs.dewacloud.com/docs/container-volumes/>) 
  * [Ports](<https://docs.dewacloud.com/docs/container-ports/>) 