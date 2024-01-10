---
sidebar_position: 3
---

# Associating Resolutions to Users

## **Introduction**

This guide is designed to help you customize and install the Resolution Pixel on your website, specifically focusing on incorporating a **`user_id`** property. This will enable you to associate resolution data with individual users on your platform, enhancing user tracking and data segmentation.

## **Step-by-Step Implementation**

### **Step 1: Basic Pixel Installation**

Ensure that the basic Resolution Pixel is installed on your website. This involves embedding a provided code snippet into your website's HTML or template file, typically within the **`<head>`** or **`<body>`** tags.

See _[Install Your Resolution Pixel](/docs/resolution-pixel/install-pixel)_ for more information.

### **Step 2: Define the `user_id` Property**

Modify the Pixel setup to include a **`user_id`** property. This identifier should uniquely represent each user in your system.

To find your client Id, see _[getting your `client_id`](/docs/resolution-pixel/create-a-pixel#getting-your-client_id)_

```jsx
const puid = {
  client_id: 'your_client_id_here',
  purpose: 'website',
  partner: 'my_partner',
  user_id: 'unique_user_identifier', // Add the user_id property
};
```

### **Step 3: Stringify and Encode the PUID Object**

Convert the **`puid`** object, now containing the **`user_id`**, into a string format and encode it for URL compatibility.

```jsx
const encodedPuid = encodeURIComponent(JSON.stringify(puid));
```

### **Step 4: Create the Pixel URL**

Formulate the pixel URL using the provided **`pid`** value and the encoded **`puid`** string.

```jsx
const pixelUrl = `https://a.usbrowserspeed.com/cs?pid=48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d&puid=${encodedPuid}`;
```

### **Step 5: Implement the Pixel**

Embed the pixel into your website using a script tag. This script dynamically creates a script element with the pixel URL as its source and appends it to the document body.

```html
<script>
  const script = document.createElement('script');
  script.src = pixelUrl;
  document.body.appendChild(script);
</script>
```

## **Testing and Validation**

After implementation, test the pixel to ensure it's capturing and associating data with the correct **`user_id`**. Verify the data on your platform to confirm that user resolution data is being accurately tracked and segmented.

## **Conclusion**

By integrating the **`user_id`** property into your Resolution Pixel setup, you can effectively link resolution data to individual users, offering deeper insights and more personalized data analysis. This customization is crucial for platforms seeking to enhance user experience and data utilization.
