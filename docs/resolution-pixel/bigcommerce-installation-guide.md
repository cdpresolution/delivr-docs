---
sidebar_position: 7
---
import ScriptTag from '@site/src/components/script-tags/ScriptTag';

# BigCommerce Installation Guide

This guide is here to help you quickly set up and use Delivr.ai Resolution Pixel.

## Pre-requisites

To add Resolution Pixel in Shopify:

1. You need to create a **Resolution Pixel**. To learn how you can create a Resolution Pixel, see [Create a Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/create-a-pixel).
2. Have access to the **Resolution Pixel Javascript template code snippet**. You can find the Javascript template code snippet on [Install your Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/install-pixel#javascript-example).
3. Add your **Client ID** to the template Javascript code, see [Website Script](https://app.cdpresolution.com/administration/website-script) - Client ID to get your Client ID.

## Add Resolution Pixel Javascript Code Snippet to BigCommerce

You can install Resolution Pixel on:
* BigCommerce Theme
* BigCommerce Checkout

### Install Resolution Pixel on the BigCommerce Theme

Follow these steps to add the Resolution Pixel Javascript code snippet to BigCommerce Theme:

1. Visit your **BigCommerce Dashboard**.
2. Click **Storefront** on the left-hand side navigation panel.
3. Click **Script Manager → Create a Script**.
4. Enter a **Name** and **Description (optional)** for the script.
5. In **Placement**, select **Header**.
6. In **Location**, select **Storefront pages**.
7. In the **Script category**, select **Essential**.
8. In **Script Type**, select **Script**.
9. In Script contents, paste the Resolution Pixel Javascript Code Snippet.
10 Click **Save**.

### Install Resolution Pixel on the BigCommerce Checkout (Revenue Tracking)

Follow these steps to add the Resolution Pixel Javascript code snippet to BigCommerce Checkout:

1. From your **BigCommerce Dashboard**, go to **Setting → Advanced → Data Solutions**.
2. In Web Analytics, click **Connect** against the **Affiliate Conversion Tracking**.
3. Add the Javascript Code Snippet into the **Conversion Tracking Code** text box.
4. Add three more fields in the `const puid = { };` object of the code. The three new fields that you need to add are:
    * `order_number: '{{ ORDER_ID }}',`
    * `order_amount: '{{ ORDER_AMOUNT }}',`
    * `order_email: '{{ ORDER_EMAIL }}', ` 
5. Click **Connect**.

The new script will look something like this:

<ScriptTag>
{`
const puid = {
  client_id: clientId,
  order_number: '{{ ORDER_ID }}',
  order_amount: '{{ ORDER_AMOUNT }}',
  order_email: '{{ ORDER_EMAIL }}',
};
`}
</ScriptTag>

Once the Resolution Pixel is up and running you can track your order information, revenue, contacts, and ROI from Delivr.ai
