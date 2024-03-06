---
sidebar_position: 6
---
import ScriptTag from '@site/src/components/script-tags/ScriptTag';

# Shopify Store Installation Guide

In this section, we will show you how you can install the Delivr.ai Resolution Pixel on Shopify.

## Pre-requisites

To add Resolution Pixel in Shopify:

1. You need to create a **Resolution Pixel**. To learn how you can create a Resolution Pixel, see [Create a Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/create-a-pixel).
2. Have access to the **Resolution Pixel Javascript template code snippet**. You can find the Javascript template code snippet on [Install your Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/install-pixel#javascript-example).
3. Add your **Client ID** to the template Javascript code, see [Website Script](https://app.cdpresolution.com/administration/website-script) - Client ID to get your Client ID.

## Add Resolution Pixel Javascript Code Snippet to Shopify

You can install Resolution Pixel on:
* Shopify Theme
* Shopify Cart
* Shopify Checkout

### Install Resolution Pixel on the Shopify Theme

Follow these steps to add the Resolution Pixel Javascript code snippet to Shopify Theme:

1. Visit your Shopify **Dashboard**.
2. Click **Online Store** on the left-hand side navigation panel.
3. Click **Themes → Actions → Edit code**.
4. Click **theme.liquid** file under Layout, this will open a code editor.
5. Add the Javascript Code Snippet above the `<head>` tag in the code.
6. Click **Save**.

### Install Resolution Pixel on the Shopify Cart

Follow these steps to add the Resolution Pixel Javascript code snippet to Shopify Cart:

1. Visit your Shopify **Dashboard**.
2. Click **Online Store** on the left-hand side navigation panel.
3. Click **Themes → Actions → Edit code**.
4. Click **cart.liquid** file under Layout, this will open a code editor.
5. Add the Javascript Code Snippet above the `<head>` tag in the code.
6. Click **Save**.

If your site has Klaviyo forms or pop-ups, paste the following suppression script below the Resolution Pixel Javascript code snippet that you just added:

```
<script>
  window.addEventListener("klaviyoForms", function (e) {
    if (e.detail.type == "submit") {
      geq.suppress();
    }
  });
</script>
```

### Install Resolution Pixel on the Shopify Checkout (Revenue Tracking)

Follow these steps to add the Resolution Pixel Javascript code snippet to Shopify Checkout:

1. From Shopify **Settings**, go to **Checkout → Order status → Additional scripts** page.
2. Add the Javascript Code Snippet into the text box.
3. Add five more fields in the `const puid = { };` object of the code. The three new fields that you need to add are:
    * `order_number: '{{ order_number }}',`
    * `order_amount: '{{ total_price | money_without_currency }}',`
    * `order_email: '{{ order_email }}',`
    * `session_id: shopifySessionID,`
    * `cart_id: shopifyCartID,`
4. Click **Save**.

The new script will look something like this:

<ScriptTag>
{`
function getCookie(t){let e=document.cookie.split(";");for(let i=0;i<e.length;i++){let l=e[i].trim();if(l.startsWith(t+"="))return l.substring(t.length+1)}return"null"}
const shopifySessionID = getCookie('_shopify_s');
const shopifyCartID = getCookie('cart');
const puid = {
	client_id: clientId,
	order_number: '{{ order_number }}',
	order_amount: '{{ total_price | money_without_currency }}',
	order_email: '{{ order_email }}',
	session_id: shopifySessionID,
	cart_id: shopifyCartID,
};
`}
</ScriptTag>

Once the Resolution Pixel is up and running you can track your order information, revenue, contacts, and ROI from Delivr.ai
