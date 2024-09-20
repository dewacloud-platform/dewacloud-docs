---
sidebar_position: 4
slug: /collaboration-user-experience
title: Collaboration User Experience
---
# Collaboration User Experience

Once the [collaboration is established](https://docs.dewacloud.com/docs/collaboration-create/), its members can start working with shared environments. In this guide, we’ll go through all the peculiarities of the process.

1\. The shared environments can be easily distinguished from the regular ones via the dedicated icon and owner tag.

![shared environment](#)

2\. You can click the owner name label in the **Tags** column to quickly filter shared environments by _primary_ account.

![environments filtered by owner](#)

3\. At the **[Env Groups](https://docs.dewacloud.com/docs/environment-groups/) > Shared with Me** tab, you can see the complete list of shared environments and groups.

![shared environment groups](#)

:::warning
You cannot add shared environments to your personal groups.
:::

Also, the whole groups' tree can be seen when managing environment groups.

![managing environment groups](#)

4\. The management process for shared environments is the same as for regular ones. However, the primary account owner may restrict some of the options.

![restricted action for shared environment](#)

You can check the [role and list of allowed policies](https://docs.dewacloud.com/docs/collaboration-roles-policies/) for shared resources at the account **Settings > Shared with Me** section.

![shared roles and policies](#)

:::tip
You can check roles for the specific shared environment by going to the Settings > Collaboration section. By default, collaboration members can see only themselves and cannot manage rights. However, such a possibility can be shared by the environment owner through the role with the Collaboration policy.
:::

5\. The **Tasks** manager keeps track of all the actions performed with the shared environments and provides a custom icon for operations initiated by other accounts. Hover over this icon to view the email of the corresponding collaboration member.

![collaboration actions in tasks](#)

6\. If provided with the ability to create environments, you’ll see the _**Environment Owner**_ selection dialog after clicking the **New Environment** button at the top of the dashboard.

![select new environment owner](#)

Here, you can select an account and group to create your environment.

:::tip
If you have permission to install packages from the Marketplace, the Owner field will be added to the installation window.
:::

The limitations of the selected owner are automatically applied to the topology wizard or installation window (for [imported](https://docs.dewacloud.com/docs/environment-import/) and Marketplace packages).

![environment owner in wizard](#)

:::warning
By default, collaboration members cannot see the pricing information, and only resource data is provided in the topology wizard (as it is shown in the image above). However, the environment owner can share this possibility through the Cost Estimation / Billing History policy.  
Collaborators receive email notifications about actions (load alerts, auto-scaling, password reset, etc.) they initiated but not about actions taken by other collaborators or an account owner.
:::

When creating on behalf of a different account, the topology wizard shows the appropriate environment owner at the bottom-left corner.

## Baca Juga{#whats-next}

  * [Collaboration Overview](https://docs.dewacloud.com/docs/account-collaboration/)
  * [Collaboration Roles & Policies](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
  * [Create Collaboration](https://docs.dewacloud.com/docs/collaboration-create/)
  * [Share Environment](https://docs.dewacloud.com/docs/share-environment/)