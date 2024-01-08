# Installing the Delivr Resolution Pixel

## **Overview**

The Delivr Resolution Pixel allows you to track user interactions on your website efficiently. This guide will walk you through the process of installing and configuring the pixel using our **`delivr.resolution()`** function.

## **Quick Start Guide**

### **Step 1: Add the Library to Your Website**

Insert the following script tag in the **`<head>`** or **`<body>`** section of your HTML. This script loads the Delivr Resolution library asynchronously.

```html
<!-- Delivr Resolution Tag -->
<script async src="https://resolution.delivr.ai/tag.js"></script>
```

### **Step 2: Initialize the Pixel**

After adding the library, use the **`delivr.resolution()`** function to initialize the pixel. Replace **`'your_client_id_here'`** with your actual client ID.

```html
htmlCopy code
<script>
  delivr.resolution('init', { clientId: 'your_client_id_here' });
</script>
```

## **Advanced Configuration**

You can add additional configuration options to the **`delivr.resolution()`** function to further customize the tracking. For example, to track a specific campaign or partner:

```html
<script>
  delivr.resolution('init', {
    user_id: 'unique_user_identifier',
    campaign: 'summer_sale',
    partner: 'partner_name',
  });
</script>
```

## **Testing and Validation**

After installation, it's important to test and ensure that the pixel is working correctly:

- Check your website's source code to confirm that the script tag is correctly placed.
- Use browser developer tools to monitor network requests and verify that the pixel is firing.
- Check your Delivr Resolution dashboard to see if the data is being received and processed correctly.

## **Troubleshooting**

If you encounter issues:

- Ensure that the **`clientId`** and **`user_id`** are correctly set and match your system's identifiers.
- Verify that there are no JavaScript errors in the browser console.
- Check for any ad blockers or browser settings that might prevent the pixel from loading.

## **Conclusion**

By following these steps, you can successfully install and configure the Delivr Resolution Pixel on your website. This will enable you to track user interactions and gain valuable insights into user behavior.

For further assistance or advanced configurations, please refer to our detailed documentation or contact our support team.
