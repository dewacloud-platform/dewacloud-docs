---
sidebar_position: 7
slug: /subscription-products
title: Produk Berbasis Langganan
---
# Produk Berbasis Langganan

_Ketersediaan fitur ini tergantung pada pengaturan penyedia hosting tertentu._

Platform dapat menawarkan beberapa produk berdasarkan model langganan. Alurnya standar untuk implementasi layanan langganan modern – klien dikenakan biaya satu kali dan mendapatkan produk yang ditentukan untuk periode tertentu. Solusi ini memberikan alternatif harga tetap terhadap model [berbasis penggunaan](https://docs.dewacloud.com/docs/pricing-model/) default.  
Mari kita lihat bagaimana cara kerjanya.

## Pembelian Langganan{#purchasing-subscription}

1. Semua produk yang tersedia untuk pengguna ditampilkan dalam tab **Subscription Plans** yang didedikasikan pada [Marketplace](https://www.virtuozzo.com/application-platform-docs/marketplace/).

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/01-marketplace-subscription-plans.png" alt="Marketplace subscription plans" max-width="100%"/>

   Arahkan kursor ke paket yang diperlukan dari daftar dan klik **Install**.

2. Dalam jendela yang terbuka, Anda dapat melihat semua paket layanan yang dikonfigurasi untuk produk (beberapa opsi dapat tersedia).

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/02-selecting-subscription-plan.png" alt="selecting subscription plan" max-width="100%"/>

   Pilih paket yang diperlukan dan klik **Buy**.

3. Dalam pop-up, tentukan data berikut:
    - **Billing Period** – pilih periode dan opsi harga yang diinginkan dari daftar
    - **Quantity** – tetapkan jumlah total instans yang termasuk dalam langganan
    - **Auto Pay** – aktifkan perpanjangan otomatis langganan setelah periode awal

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/03-buying-subscription-plan.png" alt="buying subscription plan" max-width="100%"/>

   :::warning  
   Meskipun lingkungan langganan dibeli secara terpisah, mereka tetap akan dihentikan jika akun dinonaktifkan.
   :::

   Di bagian bawah bingkai, Anda dapat melihat jumlah total langganan yang dikonfigurasi.

4. Faktur akan dihasilkan segera setelah menekan tombol **Subscribe & Pay**.

   Setelah itu, langganan Anda akan ditambahkan ke bagian akun khusus, di mana Anda dapat [mengelola semua langganan Anda](#managing-subscriptions).

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/04-successfully-purchaced-subscription-plan.png" alt="successfully purchased subscription plan" max-width="100%"/>

   :::tip  
   Dalam jendela Marketplace awal, tombol **Buy** akan digantikan oleh tombol **Install**, yang memungkinkan Anda untuk segera memasang paket yang diperoleh (sama seperti solusi standar apa pun). Kemudian, setelah semua instalasi yang tersedia diterapkan, tombol akan berubah menjadi **Upgrade**.  
   :::

## Mengelola Langganan{#managing-subscriptions}

Seluruh **Langganan** ditambahkan ke bagian khusus di pengaturan akun. Pada awalnya, semua entri baru berada dalam status _Incomplete_, yang akan diperbarui segera setelah faktur yang sesuai terpenuhi (atau kedaluwarsa). Di sini, Anda dapat melihat semua detail langganan, membeli paket baru, memasang (menghapus) instans yang sesuai, dan melihat faktur.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/05-subscriptions-section.png" alt="subscriptions section" max-width="100%"/>

Tabel langganan menyediakan informasi berikut:
  - **Name** – menunjukkan nama produk dan paket tarif (perluas untuk melihat daftar instalasi)
  - **Usage** – menampilkan instans langganan yang terpasang dan total
  - **Status** – menunjukkan status langganan:
    - _Incomplete_ – selesaikan faktur untuk mulai menggunakan langganan
    - _Active_ – langganan siap digunakan (faktur terakhir dalam status “_paid_”)
    - _Unpaid_ – faktur terakhir masih perlu dibayar
    - _Canceled_ – Anda telah membatalkan langganan
  - **Payment** – menunjukkan informasi tentang pembayaran yang harus dibayar atau berikutnya (Anda dapat mengarahkan kursor dan klik **Pay** untuk menyelesaikan faktur yang harus dibayar)
  - **Cost** – menyediakan harga langganan/periode
  - **Auto Pay** – menampilkan apakah fitur pembayaran otomatis diaktifkan untuk langganan
  - **Created** – menampilkan tanggal pembuatan (arahkan kursor untuk melihat info tambahan tentang kapan langganan diaktifkan dan periode penagihan)

1. Mari kita bahas fungsionalitas dan spesifik yang tersedia:

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/06-subscriptions-tools-panel.png" alt="subscriptions tools panel" max-width="100%"/>

   Tombol-tombol pada panel alat memungkinkan Anda untuk:
    - **Buy** [langganan baru](#purchasing-subscription), yang akan dialihkan ke bagian Marketplace yang sesuai.
    - **Install** paket untuk langganan yang ada.
    - **Edit** langganan untuk mengubah jumlah pemasangan dan opsi _Auto Pay_.
    - **Refresh** informasi dalam daftar.

1.1 Jendela instalasi mirip dengan paket standar. Berikan semua parameter yang diperlukan dan klik tombol **Install**.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/07-subscription-item-installation.png" alt="subscription item installation" max-width="100%"/>

   :::note  
   Produk yang dipasang melalui langganan mungkin memiliki beberapa batasan karena sifat harga tetapnya (misalnya, penyesuaian topologi, kloning lingkungan, dan penghapusan).  
   :::

   Produk akan secara otomatis dibuat dalam satu menit.

1.2 Opsi **Edit** langganan memungkinkan memperbarui jumlah pemasangan untuk langganan yang ada. Harga per pemasangan dihitung sesuai dengan periode penagihan yang tersisa.
   - Pada saat _peningkatan_ (menambah jumlah pemasangan), platform akan secara otomatis menghasilkan faktur “_update quantity_” tambahan.
   - Dalam kasus _penurunan_ (tidak kurang dari jumlah instans yang ada), platform akan menghasilkan faktur pengembalian dana, dan saldo akun akan diisi ulang.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/09-edit-subscription-dialog.png" alt="edit subscription dialog" max-width="100%"/>

   Selain itu, Anda dapat menghidupkan/mematikan opsi **Auto Pay**.

   :::tip  
   Tombol **Edit** akan digantikan dengan **Discard Changes** sampai faktur yang sesuai terpenuhi.  
   :::

2. Arahkan kursor ke langganan untuk melihat opsi **Install** (seperti dijelaskan pada langkah sebelumnya) dan menu drop-down dengan opsi tambahan:
    - **Invoices** – beralih ke tab _Invoices_ yang difilter oleh langganan saat ini
    - **Edit Subscription** – membuka dialog _Edit Subscriptions_
    - **Enable/Disable Auto Pay** – mengubah status opsi _Auto Pay_ untuk langganan saat ini
    - **Cancel** (atau **Don’t Cancel**) – menghentikan langganan (atau membatalkan penghentian)

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/10-subscription-product-menu.png" alt="subscription product menu" max-width="100%"/>

2.1 Setelah membatalkan langganan, Anda masih dapat menggunakannya hingga akhir periode yang dibayar. Selama waktu ini, Anda dapat memilih **Don’t Cancel** dari menu yang sama. Setelah itu, langganan Anda akan dihapus dari daftar.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/11-cancel-subscription-confirmation.png" alt="cancel subscription confirmation" max-width="100%"/>

3. Arahkan kursor ke pemasangan dalam langganan Anda untuk mengakses tindakan berikut:
    - **Switch Subscription** – memungkinkan memindahkan pemasangan di antara paket langganan **dalam produk yang sama**
    - **Delete** – menghapus pemasangan yang dipilih dari akun

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/12-subscription-item-menu.png" alt="subscription item menu" max-width="100%"/>

3.1 Fungsi **Switch Subscription** bergantung pada konfigurasi penyedia hosting. Jika tersedia, Anda dapat memindahkan pemasangan Anda sebagai berikut:
    - **Current Subscription** dipilih secara otomatis berdasarkan pemasangan tempat opsi diklik.
    - Kotak **New Subscription** memungkinkan memilih langganan yang ada (atau membeli yang baru) dalam produk yang sama
    - **Passphrase** adalah kode konfirmasi untuk melakukan operasi.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/13-switch-subscription-dialog.png" alt="switch subscription dialog" max-width="100%"/>

3.2 Saat menghapus pemasangan, Anda akan diminta untuk konfirmasi.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/14-delete-subscription-item-confirmation.png" alt="delete subscription item confirmation" max-width="100%"/>

4. Tab **Invoices** memungkinkan meninjau semua pembayaran terkait langganan. Filter berdasarkan _subscription_, _status_, dan _number (ID)_ dapat membantu Anda menemukan faktur yang dibutuhkan.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/15-subscription-invoices.png" alt="subscription invoices" max-width="100%"/>

   Jika Anda memiliki faktur terbuka, Anda dapat **Pay** langsung dari panel ini.

   <img src="https://assets.dewacloud.com/dewacloud-docs/account-&-pricing/subscription-based-products/16-pay-subscription-invoice.png" alt="pay subscription invoice" max-width="100%"/>

Sekarang, Anda tahu semua informasi yang dibutuhkan tentang cara bekerja dengan langganan dan seharusnya siap untuk mulai menggunakan fitur ini sendiri.

## Baca Juga{#whats-next}

- [Harga Berbasis Penggunaan](https://docs.dewacloud.com/docs/pricing-model/)
- [Platform Marketplace](https://docs.dewacloud.com/docs/marketplace/)
- [Autentikasi Dua Faktor](https://docs.dewacloud.com/docs/two-factor-authentication/)
- [Personal Access Tokens](https://docs.dewacloud.com/docs/personal-access-tokens/)