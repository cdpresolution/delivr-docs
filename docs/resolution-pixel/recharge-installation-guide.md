---
sidebar_position: 10
---
import ScriptTag from '@site/src/components/script-tags/ScriptTag';

# Recharge Installation Guide

You can use Delivr.ai Resolution Pixel to track revenue and capture order information from contacts that land on your Recharge page.

## Pre-requisites

To add Resolution Pixel in Recharge:

1. You need to create a **Resolution Pixel**. To learn how you can create a Resolution Pixel, see [Create a Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/create-a-pixel).
2. Have access to the **Resolution Pixel Javascript template code snippet**. You can find the Javascript template code snippet on [Install your Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/install-pixel#javascript-example).
3. Add your **Client ID** to the template Javascript code, see [Website Script](https://app.cdpresolution.com/administration/website-script) - Client ID to get your Client ID.

## Add Resolution Pixel Javascript Code Snippet to Recharge

You can install Resolution Pixel on:
* Recharge Checkout

### Install Resolution Pixel on Recharge Checkout

Follow these steps to add the Resolution Pixel Javascript code snippet to Recharge:

1. Visit your **Recharge Dashboard**.
2. Go to **Storefront → Checkout**.
3. Scroll down to the **Thank you page**.
4. Add the Resolution Pixel Javascript Code Snippet below any of the existing code.
5. Add three more fields in the `const puid = { };` object of the code. The three new fields that you need to add are:
    * `order_number: '{{ order_number }}',`
    * `order_amount: '{{ total_price }}',`
    * `order_email: '{{ order_email }}',` 
6. Click **Save**.

The new script will look something like this:

<ScriptTag>
{`
const puid = {
  client_id: clientId,
  order_number: '{{ order_number }}',
  order_amount: '{{ total_price }}',
  order_email: '{{ order_email }}',
};
`}
</ScriptTag>

**Important:** If you are using custom revenue tracking variables, you need to insert those variables into the puid section instead of the puid variables shown above.

Once the Resolution Pixel is up and running you can track your order information, revenue, contacts, and ROI from Delivr.ai
