---
sidebar_position: 18
---
import ScriptTag from '@site/src/components/script-tags/ScriptTag';

# WordPress Installation Guide

This guide is here to help you quickly set up and use Delivr.ai Resolution Pixel.

## Pre-requisites

To add Resolution Pixel in WordPress:

1. You need to create a **Resolution Pixel**. To learn how you can create a Resolution Pixel, see [Create a Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/create-a-pixel).
2. Have access to the **Resolution Pixel Javascript template code snippet**. You can find the Javascript template code snippet on [Install your Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/install-pixel#javascript-example).
3. Add your **Client ID** to the template Javascript code, see [Website Script](https://app.cdpresolution.com/administration/website-script) - Client ID to get your Client ID.

## Add Resolution Pixel Javascript Code Snippet to WordPress

You can install Resolution Pixel on:
* WordPress Page via a free plugin

### Install Resolution Pixel on WordPress Page via a Free Plugin

Follow these steps to add the Resolution Pixel Javascript code snippet to a WordPress Page via a free plugin:

1. Log in to **WordPress**.
2. From the WordPress Dashboard, click **Plugins → Add New**.
3. In the **Search bar**, search for **Header and Footer Scripts**. If there is an issue with the search, use this link to go directly to the plugin page [Header and Footer Script](https://wordpress.org/plugins/header-and-footer-scripts/). 
4. Click **Install**.
5. Once the installation completes, click **Activate**.
6. Return to the WordPress **Dashboard** and click **Pages**.
7. Click the page on which you want to add the Resolution Pixel to. The **Header and Footer Script** plugin will have added an **Insert Script to `<head>`** section to this page.
8. In **Insert Script to `<head>`**, paste the Resolution Pixel Javascript Code Snippet.
9. Save the changes.

**Note:** If the Header and Footer Script plugin doesn't work, you can also use the [Header Footer Code Manager – WordPress plugin](https://wordpress.org/plugins/header-footer-code-manager/) instead.
