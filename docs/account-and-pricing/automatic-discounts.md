---
sidebar_position: 13
slug: /automatic-discounts
title: Automatic Discounts
---
# Automatic Discounts

The platform can give you automatic discounts for your resource usage depending on the amount that you consume (so higher volume usage is automatically cheaper). The availability and the level of discount depends on your chosen hosting provider and the specific resource:

  * [RAM/CPU (cloudlets)](https://docs.dewacloud.com/docs/#ramcpu)
  * [disk space](https://docs.dewacloud.com/docs/#disk-space)
  * [traffic](https://docs.dewacloud.com/docs/#traffic)
  * [options (Public IP, SSL)](https://docs.dewacloud.com/docs/#options)
  * [software](https://docs.dewacloud.com/docs/#software)

## RAM/CPU{#ramcpu}

The platform measures RAM and CPU in cloudlets. One cloudlet is equivalent to 128 MiB RAM and 400MHz CPU.

Cloudlet consumption is considered across each individual environment (combining all servers within one environment, rather than per server within the environment). This makes it’s easy to get to the higher discount tiers and make some really big savings!

The platform offers two types of cloudlets: Reserved and Dynamic.

**Reserved cloudlets** are ‘consumed’ simply by configuring them within your environment (since you pay for Reserved cloudlets irrespective of your actual resource usage). So you can see the discount applied as you configure the environment using the topology wizard. The total of all Reserved cloudlets configured in your environment determine the discount tier applied.

**Dynamic cloudlet** consumption is calculated based on your usage each individual hour. The total of all Dynamic cloudlets consumed by your environment during one hour determines your discount tier for that hour.

If you use both types of cloudlets in your environment, you may have a different discount tier for each type.

![automatic discount scheme](#)

You can see the exact discount tiers and corresponding pricing inside your platform dashboard.

Navigate to **Balance > Quotas & Pricing** menu item.

![pricing RAM](#)

## Disk Space{#disk-space}

Disk space is charged hourly per GB of disk space used in your environment.

Your chosen hosting provider may include some disk space for free, or may provide discount tiers depending on the amount of disk consumption.

You can see the exact discount tiers, corresponding pricing, and any included free amount inside your platform dashboard. Navigate to **Balance > Quotas & Pricing** menu item.

![pricing disk](#)

## Traffic{#traffic}

Traffic usage is charged hourly per GB of **external** traffic used by your environment.

Your chosen hosting provider may include some free traffic usage, or may provide discount tiers depending on the amount of traffic consumption.

Since the amount of traffic can fluctuate so much, the discount tiers for traffic is set based on the total amount of (external) traffic used in the _previous_ month.

**Internal traffic** (traffic between servers within your environment, or between multiple environments at the same hosting provider) **is absolutely free**!

You can see the exact discount tiers, corresponding pricing, and any included free amount inside your platform dashboard. Navigate to **Balance > Quotas & Pricing** menu item.

![pricing traffic](#)

## Options{#options}

_**Built-In SSL**_ establishes a secure connection between your client and environment. The charge is taken hourly.

You can see the price (if any - it can be available for free) set by your chosen hosting provider inside your platform dashboard. Navigate to **Balance > Quotas & Pricing** menu item.

An _**external IP**_ address provides a direct access from outside of the cluster. The charge is taken hourly.

You can see the price set by your chosen hosting provider inside your platform dashboard. Navigate to **Balance > Quotas & Pricing** menu item.

![pricing options](#)

## Software{#software}

Most of the standard software stacks are free so that you pay only for the resources consumed. However, some additional software may require additional license fee. The charge is taken hourly.

The cost for using software stacks depends on your hosting service provider’s tariffs. Navigate to **Balance > Quotas & Pricing** menu item.

![pricing software](#)

## Baca Juga{#whats-next}

  * [Charged Resources](https://docs.dewacloud.com/docs/resource-consumption/)
  * [Pricing Model](https://docs.dewacloud.com/docs/pricing-model/)
  * [Billing Systems Overview](https://docs.dewacloud.com/docs/billing-system/)
  * [Hosters Pricing](https://docs.dewacloud.com/docs/pricing-pages/)
  * [PaaS vs Amazon Pricing](https://www.virtuozzo.com/company/blog/fair-pricing-model-jelastic-vs-amazon/)