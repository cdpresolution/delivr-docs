---
sidebar_position: 1
---

import FindClientID from '@site/src/components/client-id/FindClientID';

# Create a Resolution Pixel

This guide walks you through setting up your first resolution pixel. It also assumes you are logged into the [CDP resolution application](https://app.cdpresolution.com/).

1. From the left side navigation, click on the 'Administration'.
2. Click on 'Website Script'.
3. Click on the 'New Scripts' button.
4. Enter a value for the 'Purpose' input field.
5. Enter a value for the 'Partner' input field.
6. Enter a value for the 'Description' input field.
7. Click on the 'Save' button.
8. Congratulations on creating your first resolution pixel!

### Purpose Field

The **Purpose** field allows you to understand where the pixel is implemented and tracking visitors.

You can enter any value that is meaningful for your tracking purposes.

Example purposes:

- `website` - This indicates that this pixel tracks visitors on a main website.
- `thank you` - This indicates that this pixel tracks visitors on a dedicated thank you page.
- `landing` - This indicates that this pixel tracks visitors on a dedicated marketing landing page.

Again, you can put whatever you like here, just make sure it is meaningful for you to be able to track it later on.

### Partner Field

The **Partner** field allows you to further segment incoming traffic. This can be very useful if you have many different sources, such as customer websites.

You can enter any value that is meaningful for your tracking purposes.

Example partners:

- `Customer A` - This indicates that the incoming traffic is from 'Customer A'.
- `Customer B` - This indicates that the incoming traffic is from 'Customer B'.

Hopfully you can see how you might use this to associate to affiliate partners, customers, etcs.

## Getting your `client_id`

<FindClientID customLink=" within these docs. Or you can follow the steps below."/>

1. Navigate to the _[Website Script](https://app.cdpresolution.com/administration/website-script)_ page.
2. Click the copy icon next to the Client Id, above the table.
