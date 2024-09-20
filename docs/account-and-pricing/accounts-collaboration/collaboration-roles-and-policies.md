---
sidebar_position: 2
slug: /collaboration-roles-and-policies
title: Collaboration Roles & Policies
---
# Collaboration Roles & Policies

The defining characteristic of the platform’s [collaboration feature](https://docs.dewacloud.com/docs/account-collaboration/) is its extreme flexibility. It is ensured through the _**roles and policies**_ mechanic, which provides an ability to share the exact instances and permissions needed for a particular use case. This guide covers all the specifics of roles and policies configuration and provision.

Let’s start by defining what roles and policies are:

  * **policies** are small API sets that allow _specific operations_
  * **roles** are a combination of policies that create the required _range of actions_

At the platform dashboard, these entities can be found and managed at the account **Settings > Shared by Me** section.

![account settings button](#)

1\. The **Policies** tab lists the actions that can be added to a role. By default, the platform provides a comprehensive list of _System_ policies that can be combined for a great variety of roles, covering most of the possible collaboration cases.

![account collaboration policies](#)

2\. The **Roles** tab allows you to create custom sets of actions that provide only the required permissions to the collaboration members.

![account collaboration roles](#)

When adding, editing, or copying a role, you need to provide the following data:

  * **Name** \- type any desired name for a role
  * **Description** \- provide custom description (optional)
  * **Policies** \- select actions allowed for a role; use _search_ to quickly locate required policies and _filter_ to review only selected ones
  * **Receive Load Alerts Notifications** \- enable to allow collaboration members with this role to receive load alert notifications about shared environments

![collaboration add role dialog](#)

No longer needed roles can be removed with the same-named button at the tools panel.

3\. You can create as many roles as you need. Here are some generic examples that can be configured by selecting the appropriate policies:

  * _viewer_ \- just view logs and files
  * _user_ \- simple actions like environment start/stop and containers restart
  * _developer_ \- access to most features with some restrictions (e.g. create, delete, migrate, clone environments, change environment groups, change owner)
  * _admin_ \- full access with the ability to create new environments, install JPS packages, and access via SSH

Obviously, these are just examples to give you an idea of the feature possibilities. You can create your own roles to suit your specific use case the best.

## Roles Assigning Algorithm{#roles-assigning-algorithm}

The platform utilizes a special _access level_ algorithm when determining the exact roles for a specific environment. Based on the priority (from higher to lower), the three available access levels are ordered in the following way:

  * _**direct**_ \- roles assigned directly to the environment. The “ _direct_ ” roles override any of the roles from the levels below.
  * _**shared env groups**_ \- mixed list of roles for all shared groups of the current environment. If a group does not have a specific role, the parent is checked. The nesting chain can be followed till the root _Env Groups_ category (i.e. default role for all groups).
  * _**base**_ \- default roles for all shared environments (roles assigned to the _Environments_ category). The “ _base_ ” roles are of the lowest priority and are applied only when there are no other roles.

:::warning
Only roles of the highest available access level are used.
:::

You can check the role and list of allowed policies for shared resources at the account **Settings > Shared with Me** section.

![collaboration Shared with Me tab](#)

In order to check your roles for the specific [shared environment](https://docs.dewacloud.com/docs/share-environment/), go to its **Settings > Collaboration** section.

![environment collaboration settings](#)

Let’s go through a few examples to better understand how roles are allocated.

__Example 1:__ Environment is not a part of any groups and not shared directly. The default role for all environments is - **Viewer**.

![third example precondition](#)

Let’s determine the access level. The environment is not shared _directly_ and is not a part of any _shared env group_. However, we have a _**base**_ role (**Viewer**) assigned to all environments.

![third example result](#)

_Result:_ Environment has the **Viewer** role.

__Example 2:__ Environment is shared with a **Viewer** role and belongs to the shared group with the **Admin** role. _Environment is a part of the categories circled in the image below._

![first example precondition](#)

According to the algorithm, the environment has roles from two access levels: _**direct**_ (**Viewer**) and _**shared env groups**_ (**Admin**). However, only roles of the higher access level apply. The _**direct**_ level has the highest priority, so roles of the _**shared env groups**_ level are ignored.

![first example result](#)

_Result:_ Only the **Viewer** role is assigned.

__Example 3:__ The target environment belongs to two groups. The first one has the **Developer** and **Accountant** role (and its parent has the **Admin** role), while the second one has no roles. The default role for all groups is - **Viewer**. _Environment is a part of the groups circled in the image below._

![second example precondition](#)

First, determine the access level. In our case, all roles are related to the shared groups and so are of the same _**shared env groups**_ level. Next, check the roles for each group. The first one has direct roles (**Developer** and **Accountant**), which are selected straight away - the parent role is ignored. The second group has no role, so the parent is checked. If all parent groups don’t have roles as well, the default group role (**Viewer**) is selected.

![second example result](#)

_Result:_ A combined list of policies from the **Developer**, **Accountant**, and **Viewer** roles.

## Baca Juga{#whats-next}

  * [Collaboration Overview](https://docs.dewacloud.com/docs/account-collaboration/)
  * [Create Collaboration](https://docs.dewacloud.com/docs/collaboration-create/)
  * [Collaboration User Experience](https://docs.dewacloud.com/docs/collaboration-user-experience/)
  * [Share Environment](https://docs.dewacloud.com/docs/share-environment/)