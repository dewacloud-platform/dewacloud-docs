---
sidebar_position: 1
slug: /pricing-faq
title: Pricing FAQ
---
# Pricing FAQ

  * [What is charged?](https://docs.dewacloud.com/docs/#what-is-charged)
  * [Where can consumed resources be seen?](https://docs.dewacloud.com/docs/#consumed-resources)
  * [How much do resources cost?](https://docs.dewacloud.com/docs/#resource-cost)
  * [How to decrease the consumption?](https://docs.dewacloud.com/docs/#decrease-consumption)

## What is Charged?{#what-is-charged}

Resource consumption for each environment is charged to the account owner on an hourly basis. There are 3 types of charges:

  * **Primary** \- fees for the main platform resources (i.e. RAM & CPU), provided within cloudlets
  * **Provider-dependent** \- the ones that can be either payable or not, according to the chosen hosting provider settings
  * **Optional extras** \- charges for usage of some additional platform features

Detailed information on each of these types of charges can be found in the [Charged Resources](https://docs.dewacloud.com/docs/chargeable-resources/) document.

## Where the Consumed Resources Can be Seen?{#where-the-consumed-resources-can-be-seen}

The detailed information on the amount of consumed resources can be seen in different places at your dashboard, for example:

  * pricing widget at the **environment wizard** ’s right pane shows the approximate monthly spends, based on the stated amount of reserved cloudlets
  * the current resources consumption of every environment is displayed in the **Usage** column of your environments list. It includes the amount of occupied disk space (in MB) and currently used/overall amount of cloudlets
  * the total usage **Statistics** on all resources types (i.e. RAM, CPU, Storage, and Network Bandwidth) can be seen via the appropriate section for the desired node/set of the same-type nodes
  * finally, the **Billing History** section provides any information on all the payable resources, consumed during the stated period, and their costs.

The details on each of these options can be seen in the [Monitor Consumed Resources](https://docs.dewacloud.com/docs/monitoring-consumed-resources/) document.

## How Much do Resources Cost?{#how-much-do-resources-cost}

With the platform, you only pay for consumed resources. The resource pricing is set by your chosen hosting provider. You can find the exact cost for each resource unit by going to your hoster’s [Pricing page](https://docs.dewacloud.com/docs/pricing-pages/).

The prices can also be seen inside your platform dashboard.

Navigate to **Balance > Quotas & Pricing** menu item. Here you’ll see a set of tabs displaying pricing information for each kind of resource available in the platform.

![quotas and pricing](#)

Choose the one you are interested in to see the pricing and discount scale offered by your hosting provider. You can find more information about pricing and discount systems in the [Pricing System](https://docs.dewacloud.com/docs/pricing-model/) and [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts/) documents.

Note that the various software stacks are provided free of charge in the platform. You only pay for the resources consumed but not for the software itself.

## How to Decrease the Consumption?{#how-to-decrease-the-consumption}

To decrease your spending, you can _stop your environment_ when it is not needed. For example, if you happen to be using your environment as a test or dev one and you don’t use it on nights and weekends - you don’t have to pay for the resources that you don’t use.

![stop environment](#)

In such a way **RAM (Memory)** , **CPU** and **traffic** are _not_ going to be charged.

You are going to pay only for **disk space** that you use and for **public IP** and **SSL** if you purchased any.

Follow the links to get acquainted with useful tips on consuming platform resources in a smart way:

  * [Save Your Cloud Money!](https://www.virtuozzo.com/company/blog/save-your-cloud-money/)
  * [How to Manage the Application Lifecycle in PaaS](https://docs.dewacloud.com/docs/how-to-manage-application-lifecycle/)

## Baca Juga{#whats-next}

  * [Charged Resources](https://docs.dewacloud.com/docs/chargeable-resources/)
  * [Monitor Consumed Resources](https://docs.dewacloud.com/docs/monitoring-consumed-resources/)
  * [Hosters Pricing](https://docs.dewacloud.com/docs/pricing-pages/)