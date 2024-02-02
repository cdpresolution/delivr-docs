---
sidebar_position: 13
---
import ScriptTag from '@site/src/components/script-tags/ScriptTag';

# Google Tag Manager Installation Guide

This guide is here to help you quickly set up and use Delivr.ai Resolution Pixel.

## Pre-requisites

To add Resolution Pixel in Google Tag Manager:

1. You need to create a **Resolution Pixel**. To learn how you can create a Resolution Pixel, see [Create a Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/create-a-pixel).
2. Have access to the **Resolution Pixel Javascript template code snippet**. You can find the Javascript template code snippet on [Install your Resolution Pixel | Delivr](https://docs.delivr.ai/docs/resolution-pixel/install-pixel#javascript-example).
3. Add your **Client ID** to the template Javascript code, see [Website Script](https://app.cdpresolution.com/administration/website-script) - Client ID to get your Client ID.

## Add Resolution Pixel Javascript Code Snippet to Google Tag Manager

You can install Resolution Pixel on:
* Google Tag Manager

### Install Resolution Pixel on Google Tag Manager

Follow these steps to add the Resolution Pixel Javascript code snippet to Google Tag Manager:

1. Log in to **Google Tag Manager** and click **New Tag**.
2. Give this tag an appropriate title.
3. In the **Tag Configuration** section, click the **Edit** icon.
4. In the **Custom** section, click **Custom HTML**.
5. In the **HTML** code block, paste the Resolution Pixel Javascript Code Snippet.
6. Scroll to the **Triggering** section and click the **Edit** icon. A side pop-up window will open.
7. In the Page View section, select the appropriate triggers.
    - If you are unsure which triggers to select, select the **All Pages** option.
    - For SPA/React websites, select **All Pages** and **All History Events** options.
    - You can also add custom triggers, see the next section for details.
8. In the top-right corner of the window, click **Save**.

## Configure Google Tag Manager

You can configure Google Tag Manager to change the behavior of how and when the Resolution Pixel starts working. You can:

* Suppress Klaviyo form submissions
* Fire the Resolution Pixel based on a timed trigger
* Fire the Resolution Pixel on a page immediately

### Suppress Klaviyo Form Submissions

To suppress a Klaviyo form submission:

1. Log in to **Google Tag Manager** and click the tag that contains the **Delivr Resolution Pixel**.
2. In the **Tag Configuration** section, click the **Edit** icon. A side pop-up window will open.
3. In the **Custom** section, click **Custom HTML**.
4. In the ** HTML** code block, paste the following code below the Resolution Pixel Javascript Code Snippet.

```
window.addEventListener("klaviyoForms", function(e) {
  if (e.detail.type == 'submit') {
    geq.suppress();
  }
});
```

5. In the top-right corner of the window, click **Save**.

**Important:** For this suppression script to work the **Triggering** of the Resolution Pixel must be set to **All pages**. If the tag that contains the Delivr Resolution Pixel is set to fire after a delay, you will need to create a separate tag for Klaviyo form submission suppression. The new tag must contain the same Delivr Resolution Pixel and the suppression script.

### Fire the Resolution Pixel based on a Timed Trigger

To fire the Resolution Pixel on a page based on a timed trigger:

1. Log in to **Google Tag Manager** and click select the tag that contains the **Delivr Resolution Pixel**.
2. Scroll to the **Triggering** section and click the **Edit** icon.
3. On the top-right corner of the screen, click the **Plus** sign to add a new trigger.
4. Click the **Trigger Configuration** card, and a side pop-up window will open.
5. Select the **Timer** trigger.
6. In **Event Name**, enter a name for the trigger.
7. In **Interval**, set the trigger to fire after a set amount of time.
8. In **Limit**, enter ‘1’ to make the Resolution Pixel once after the set time.
9. In **Enable this trigger when all conditions are true**, select **Page Path**, **equals**, and the path of your desired page respectively.
10. Click **Save**.

**Important:** A single timer trigger can’t run on multiple pages, you either need to create a new trigger for every page or use regex.

### Fire the Resolution Pixel on a Page Immediately

To fire the Resolution Pixel immediately on a single page or multiple pages — in the case that you have a site-wide timer trigger in place — you need to create a new trigger. To create a new trigger in order for it to fire on a page immediately:

1. Log in to **Google Tag Manager** and click select the tag that contains the **Delivr Resolution Pixel**.
2. Scroll to the **Triggering** section and click the **Edit** icon.
3. On the top-right corner of the screen, click the **Plus** sign to add a new trigger.
4. Click the **Trigger Configuration** card, and a side pop-up window will open.
5. Click **Page View**.
6. Provide a name for the **Page View** trigger.
7. In **This trigger fires on**, select **Some Page Views**.
8. In **Fire this trigger when an Event occurs and all of these conditions are true**, select the **Page Path**, **contains**, and the path of your desired page respectively.
9. Click the **Plus** icon to add more pages.
10. Click **Save**.

**Tip:** Following the same pattern of creating triggers, you can also prevent Resolution Pixel from firing when the traffic is from a referral source or even set you can even set the Resolution Pixel to fire after a specific number of pages have been viewed.
