---
sidebar_position: 1
slug: /blue-green-deploy
title: Blue-Green Deploy
---
# Blue-Green Deployment with TD

With the help of [Traffic Distributor](<https://www.virtuozzo.com/application-platform-docs/traffic-distributor>), you are able to perform so-called
“invisible” updates using the blue-green deployment method, which will not
cause any downtime for your application. This possibility it’s truly essential
in the current reality of rapid development and fast growing concurrency, as
you need to constantly update your project for it to remain demanded, conquer
new users and, generally, not to fall behind your competitors. And if these
frequent maintenances will interrupt normal application work and its
availability, it will negatively affect your service appeal.

So let’s reveal how to get rid of such problems and apply blue-green updates
to your project by means of the proposed traffic routing solution.

1\. Let’s assume we have two environments (with the _Blue_ and _Green_
[aliases](<https://docs.dewacloud.com/docs/environment-aliases>) set for each of them for better differentiation) and Traffic
Distributor within a separate environment, intended to route traffic between them: ![blue-green deploy environments structure](#)

2\. In order to update application on backends to the latest version without
the whole project downtime, it should be done in turn. So, at first, let’s
prevent the traffic from being directed to one of our environments (e.g.
_Blue_) by [re-configuring the Traffic
Distributor](<https://docs.dewacloud.com/docs/traffic-distributor-installation#reconfigure>) add-on. ![route traffic to the Green environment only](#) For that, move the **Traffic ratio** slider to the _0 …
100_ position, in such a way ensuring that the first backend won’t be
accessed.  
Click **Apply** to proceed.

3\. Now, when all the incoming traffic is only processed by the second
(_Green_) environment, you can apply any changes to the _Blue_ one without any
haste, e.g. deploy and test a new application version: ![update Blue
environment, while Green processes requests](#)

4\. Now, as you need to update project on the second host, just repeat the
_2nd - 3rd_ steps above and switch environment roles (i.e. set the **Traffic
ratio** slider to the opposite position of _100 … 0_). This will allow the
_Blue_ project copy to process all requests and _Green_ \- to go on
maintanance. ![update Green environment, while Blue processes requests](#)

5\. Lastly, open the Distributor configuration frame once again and return the
preferable servers' weights to restore the original operability, e.g.:

![re-configure Traffic Distributor](#)

That’s it! As a result, your application was updated on both backends, whilst
your customers have continued to use the service without any interruption
during all these operations.

## What’s next?[![](#)](<https://www.virtuozzo.com/application-platform-docs/blue-green-deploy/#whats-next>)

  * [Traffic Distributor Overview](<https://docs.dewacloud.com/docs/traffic-distributor/>)
  * [Traffic Distributor Installation](<https://docs.dewacloud.com/docs/traffic-distributor-installation/>)
  * [Traffic Distributor Injection](<https://docs.dewacloud.com/docs/traffic-distributor-injection/>)
  * [Failover Protection](<https://docs.dewacloud.com/docs/failover-protection/>)
  * [A/B Testing](<https://docs.dewacloud.com/docs/ab-testing/>)