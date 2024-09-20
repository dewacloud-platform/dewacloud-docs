---
sidebar_position: 6
slug: /two-factor-authentication
title: Two-Factor Authentication
---
# Two-Factor Authentication

![two-factor authentication logo](#)

The platform allows configuring a **two-factor authentication** (2FA) to add an extra security layer for your account. With this feature enabled, in addition to username and password, you are required to enter the code randomly generated in the authenticator application on your phone to access PaaS account.

Below, we’ll go step-by-step on the two-factor authentication feature management:

  * [enable 2FA](https://docs.dewacloud.com/docs/#enable)
  * [manage recovery codes](https://docs.dewacloud.com/docs/#manage)
  * [deactivate 2FA](https://docs.dewacloud.com/docs/#disable)
  * [working with API](https://docs.dewacloud.com/docs/#api)

## Enable Two-Factor Authentication{#enable-two-factor-authentication}

In order to secure your account with the 2FA follow the next steps:

1\. Go to the **Settings** section by clicking on the same-named button at the top-right corner of the dashboard.

![account settings button](#)

2\. Within the opened frame, switch to the _**Account**_ tab and click **Set Up Two-Factor Authentication**.

![set up two-factor authentication button](#)

You need to confirm your password via the appeared pop-up to proceed.

3\. Next, you need to interconnect your PaaS account with the [Google Authenticator](https://support.google.com/accounts/answer/1066447) application on your mobile phone (if needed, follow the linked guide to help you with installation). Open the app on your device and add the account by either scanning the displayed QR code or manually typing the provided data.

![register authentication application](#)

As a result, you’ll see the six-digit code (automatically refreshed every 30 seconds), type it into the dashboard frame and click **Next** to verify.

4\. In the second step, you’ll see the recovery codes, which can be used as a one-time alternative to the generated authentication codes.

:::warning
Ensure your recovery codes are saved. Otherwise, in case of your phone unavailability, you won’t be able to connect to your account. Also, they are the only option to restore access upon device loss.
:::

![save recovery codes](#)

You need to tick the _I’ve saved the data_ checkbox (automatically checked after using the **Download** or **Copy** buttons) to be able to close this window by clicking **Done**.

5\. Now, to login into account, you’ll need to provide the login/password credentials (as usual) and enter a code from the authentication application on your device (or the recovery code).

![two-factor authentication log in](#)

That’s it! Your account is now protected with two-factor authentication.

## Manage Recovery Codes{#manage-recovery-codes}

On the accounts with already enabled 2FA, it is possible to view/regenerate recovery codes:

1\. Go to the **Settings > Account** section and click the **View Recovery Codes** button.

![view recovery codes button](#)

Confirm the password for your account to continue.

2\. Here, you can see your current recovery codes and, if necessary, **Download** /**Copy** them with the appropriate buttons.

![view and regenerate recovery codes](#)

If you ran out of the recovery codes (as each one can be used just once) or if you consider them compromised, click the link at the bottom of the frame (circled in the image above) to generate new ones.

3\. In the appeared pop-up, confirm the operation and, in a moment, you’ll get new codes.

![updated recovery codes](#)

Don’t forget to save the displayed recovery codes with the **Download** /**Copy** buttons, as the old ones won’t work anymore.

## Disable Two-Factor Authentication{#disable-two-factor-authentication}

If you need to disable the 2FA for your account, follow the next steps:

1\. Navigate to the _**Settings > Account**_ section and click the **Disable Two-Factor Authentication** button.

![disable two-factor authentication button](#)

:::tip
In case you want to disable/rebind two-factor authentication due to device loss, use one of the recovery codes to log into the dashboard.
:::

2\. Confirm your decision through the appropriate pop-up and provide a password in the next one.

![password confirmation  dialog](#)

That’s it! Your account is now accessible with just the login/password credentials.

## Using API with Two-Factor Authentication{#using-api-with-two-factor-authentication}

In order to get a valid session for the [API requests](https://www.virtuozzo.com/application-platform-api-docs/) on accounts with enabled 2FA, you need to call an additional _**Verify2FACode**_ method after the _**SignIn**_ one. In such a way, you’ll be able to provide a six-digit authentication code from the appropriate application on your device.

To avoid such complexity, it is recommended generating and using [personal access tokens](https://docs.dewacloud.com/docs/personal-access-tokens) in your API requests and custom automation scripts.

## Baca Juga{#whats-next}

  * [Account Registration](https://docs.dewacloud.com/docs/account/)
  * [Account Types](https://docs.dewacloud.com/docs/types-of-accounts/)
  * [Account Statuses](https://docs.dewacloud.com/docs/account-statuses/)
  * [Account Password Reset](https://docs.dewacloud.com/docs/account-password-reset/)
  * [Personal Access Tokens](https://docs.dewacloud.com/docs/personal-access-tokens/)
  * [Accounts Collaboration](https://docs.dewacloud.com/docs/account-collaboration/)