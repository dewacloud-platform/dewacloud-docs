---
sidebar_position: 2
slug: /charged-resources
title: Charged Resources
---
# Charged Resources

Resource consumption for each environment is charged to the account owner on an hourly basis.

  * [Primary Chargeable Resources](https://docs.dewacloud.com/docs/#primary-chargeable-resources)
  * [Provider-Dependent Charges](https://docs.dewacloud.com/docs/#provider-dependent-charges)
  * [Optional Extras](https://docs.dewacloud.com/docs/#optional-extras)

You can track resource usage (_CPU_ , _RAM_ , _Network_ , _Disk_) in real time via built-in [statistics monitoring](https://docs.dewacloud.com/docs/view-app-statistics/).

![01-statistics-monitoring.png](#)

:::note Resources consumed by environments provided based on the subscriptions are considered free of charge by default. :::

## Primary Chargeable Resources{#primary-chargeable-resources}

### RAM & CPU{#ram--cpu}

RAM & CPU are measured in a platform resource unit called a [Cloudlet](https://docs.dewacloud.com/docs/cloudlet/).  
One **Cloudlet** is equivalent to 128 MiB RAM and 400MHz CPU.

Resources are charged on an hourly basis:

  * **RAM** usage: the _peak_ RAM usage over the hour
  * **CPU** usage: the _average_ CPU usage over the hour

When calculating your cloudlet usage, we only consider the larger of RAM or CPU usage each hour (not both combined). E.g. if during one hour your average CPU usage is 2400MHz (6 cloudlets), and your peak RAM usage is 1024MiB (8 cloudlets), you pay for 8 cloudlets - not the combined total (14 cloudlets).

There are two types of cloudlets:

  * _Reserved cloudlets_ are reserved in advance (using the topology wizard).
  * _Dynamic cloudlets_ are scaled dynamically for your application.

:::warning You are not charged for the RAM used for disk cache and buffers. :::

More details about cloudlet charges and the differences between Reserved / Dynamic cloudlets can be found in the [Pricing System](https://docs.dewacloud.com/docs/pricing-model/) and [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts/#ramcpu) documents.

## Provider-Dependent Charges{#provider-dependent-charges}

The following resources are charged at some hosting providers, but others include a free amount.

### Disk Space{#disk-space}

**Disk Space** usage is measured in GB. Like all platform resources, you only pay for your actual consumption (you do not need to buy extra space “just in case” you need it). More details about charging disk space can be found in the [Pricing System](https://docs.dewacloud.com/docs/pricing-model/) and [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts/#disk-space) documents.

:::tip If facing a need to store data in a separate storage node, consider using Master or Compound data containers to lower disk space consumption and reduce overall environment cost. :::

### Traffic{#traffic}

**Traffic** usage is measured in GB. Only __external traffic__ is charged - the sum of incoming and outgoing traffic between your environment and the Internet. __Internal traffic__ is absolutely free - traffic within your environment or between environments within the same hosting provider. More details about charging traffic can be found in the [Pricing System](https://docs.dewacloud.com/docs/pricing-model/) and [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts/#traffic) documents.

## Optional Extras{#optional-extras}

With the platform, you can add the following optional services to your environment:

**Public IPv4** is an external IP address which is directly accessible from outside of the cluster. This allows you to form direct connections between the Internet and specific servers within your environment. Otherwise (without buying a Public IPv4 address), traffic is routed from the Internet to your environment via the platform resolver (SLB).

**Built-in SSL** is a protocol which establishes a secure connection between your client and your environment (some hosting providers offer this service free of charge).

More details about charges for optional services can be found in the [Pricing System](https://docs.dewacloud.com/docs/pricing-model/) and [Automatic Discounts](https://docs.dewacloud.com/docs/automatic-discounts/#options) documents.

## Baca Juga{#whats-next}

  * [Resource Consumption](https://docs.dewacloud.com/docs/resource-consumption/)
  * [Monitor Consumed Resources](https://docs.dewacloud.com/docs/monitoring-consumed-resources/)
  * [Pricing Model](https://docs.dewacloud.com/docs/pricing-model/)