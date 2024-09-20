---
sidebar_position: 3
slug: /create-collaboration
title: Create Collaboration
---
# Create Collaboration

In order to create your own [collaboration](https://docs.dewacloud.com/docs/account-collaboration/), you just need a billing PaaS account (**primary account**) that will invite additional customers/users (**collaboration members**). You can perform most collaboration-related operations via the dedicated section at the account settings panel.

Click the **Settings** button in the top-right corner of the dashboard.

![account settings button](#)

Within the opened **User Settings** sections, you have the following two collaboration sub-sections:

  * _**Shared by Me**_ \- collaboration options for the primary account, it has three tabs: 
    * **Members** \- manages a list of collaboration members (invite new users, suspend or remove existing ones, customize shared environments, groups, roles, etc.)
    * **Roles** \- configures custom roles (list of allowed actions) from the available policies
    * **Policies** \- lists the actions that can be added to a role
  * _**Shared with Me**_ \- options for the collaboration members

![collaboration menu](#)

Now, follow the instructions below to set up a collaboration:

  * [sent collaboration invite](https://docs.dewacloud.com/docs/#send-collaboration-invite) (as primary account)
  * [accept collaboration invite](https://docs.dewacloud.com/docs/#accept-collaboration-invite) (as collaboration member)

## Send Collaboration Invite{#send-collaboration-invite}

Go to the account **Shared by Me** section on the _primary_ account (the one where environments are actually hosted).

1\. If you haven’t before, create at least one _**Role**_ at the appropriate tab.

Provide the following information within the _**Add Role**_ dialog:

  * **Name** \- type any desired name for a role
  * **Description** \- provide custom description (optional)
  * **Policies** \- select actions allowed for a role; use _search_ to quickly locate required actions and _filter_ to review only selected ones
  * **Receive Load Alerts Notifications** \- enable to allow collaboration members with this role to receive load alert notifications about shared items

![add collaboration role](#)

You can learn more about **[Roles & Policies](https://docs.dewacloud.com/docs/collaboration-roles-policies/)** at the dedicated guide.

2\. On the _**Members**_ tab, click the **Invite** button.

Fill in the fields of the opened _**Invite Member**_ dialog:

  * **Email** \- type in the address of the user you want to invite
  * **Display Name** \- provide a custom name for the invited user (optional)
  * **Shared Items** \- select separate items and categories (environments and groups) that you want to share with the member

![invite collaboration member](#)

:::note
you can assign several roles for a component - use Ctrl to select multiple options and Alt to replace all selected roles  
you can provide different roles for each (sub-)component  
hover over a role in the list to see a hint with all included policies  
if needed, you can Create New Role without closing the invite form  
you can manage environment group structure directly in the invite form - hover over the group and click the gear icon to select the required option (Add, Edit, Remove)  
to provide an ability to create environments at the account root (i.e. without any group), share the whole Environments category with a role that grants the appropriate permission  
if you need to share a single environment, it can be done from the appropriate environment configs
:::

3\. The invited member will appear in the list in the _**pending acceptance**_ state.

![collaboration pending acceptance](#)

Now, you wait for the member to [accept the invitation](https://docs.dewacloud.com/docs/#accept-collaboration-invite). Any change to the invitation will be displayed at the **Members** tab. Also, you’ll get the appropriate email notification about the user’s decision.

4\. If needed, you can select a collaboration member to perform the necessary adjustments:

  * **Edit** \- to change shared components and permissions at any time  
  :::warning
  If a collaboration member was logged in during the adjustments, they might need to refresh the dashboard to view new shared possibilities.
  :::
  * **Copy** \- to share the same permissions with another user
  * **Suspend / Activate** \- to temporarily stop / restore sharing
  * **Remove** \- to terminate sharing and delete info about shared components and permissions

![manage collaboration member](#)

:::tip
For convenience, terminated collaborations (including the case of members leaving on their own) are not removed entirely. The remaining record allows you to re-activate collaboration if necessary.
:::

## Accept Collaboration Invite{#accept-collaboration-invite}

Wait for the primary account to [send a collaboration invite](https://docs.dewacloud.com/docs/#send-collaboration-invite) for you.

1\. Check your email inbox for the invite. It should look as follows:

![collaboration invite email](#)

If interested, click the **View Invitation** button.

:::warning
If not registered at the platform, the account for the current email address will be created automatically.
:::

2\. After confirming via email, you will be redirected to the platform dashboard. Here, you’ll see a dialog window that provides options to accept or reject the invitation.

![join collaboration dialog](#)

You can close the dialog or cancel the operation to process it later at the account **Settings > Shared with Me** section.

![accept collaboration invite](#)

3\. Once accepted, the member’s dashboard will get and display new shared items.

![added to collaboration notification](#)

That’s it! All shared items are now available to the collaboration member (with defined permissions).

![shared environment](#)

Check out the **[Collaboration User Experience](https://docs.dewacloud.com/docs/collaboration-user-experience/)** guide to check the specifics of working in collaboration.

## Baca Juga{#whats-next}

  * [Collaboration Overview](https://docs.dewacloud.com/docs/account-collaboration/)
  * [Collaboration Roles & Policies](https://docs.dewacloud.com/docs/collaboration-roles-policies/)
  * [Collaboration User Experience](https://docs.dewacloud.com/docs/collaboration-user-experience/)
  * [Share Environment](https://docs.dewacloud.com/docs/share-environment/)