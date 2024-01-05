---
sidebar_position: 2
---

# Install your Resolution Pixel

This guide assumes you have _[created your first pixel](/docs/resolution-pixel/create-a-pixel)_.

## Simple Installation

1. Navigate to your [website scripts](https://app.cdpresolution.com/administration/website-script).
2. Click on the copy icon to copy the code snippet.
3. Access Your Website's Code: Open the file where you want to insert the snippet. This might be an HTML file (like index.html) or a template file if you're using a web framework.
4. Find the Right Spot: Decide where in your HTML structure the snippet should go. Common places are within the `<body>` tag for visible content or in the `<head>` for metadata/scripts.
5. Paste the Snippet: Copy the HTML snippet and paste it into the chosen location in your file. Be mindful of nesting and syntax.
6. Save and Test: Save the file. Test it in a browser to ensure it works as expected and doesn't break anything.

## Advanced Installation

### Javascript Example

If you are familar with Javascript, this section demonstrates how to set up the resolution pixel with necessary parameters and advanced customization.

```jsx
// Step 1: Define your client_id
// Replace 'your_client_id_here' with your actual CDP Resolution account client_id

const clientId = 'your_client_id_here';
//pid will always be the value below
const pid = '48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d**'**

// Step 2: Create the puid object
// Include additional properties as needed for tracking
const puid = {
  client_id: clientId,
  purpose: 'website',// replace with your value
  partner: 'my_partner',//replace with your value
  // Add other properties here, e.g., campaign: 'my_campaign'
};

// Step 3: JSON stringify and encode the puid object
// This is necessary for properly formatting the URL
const encodedPuid = encodeURIComponent(JSON.stringify(puid));

// Step 4: Create the pixel URL
// Replace [pid] with the provided 'pid' value
const pixelUrl = `https://a.usbrowserspeed.com/cs?pid=${pid}&puid=${encodedPuid}`;

// Step 5: Implement the pixel
// You can use an iframe or a script tag method. Here's an example using a script tag:
const script = document.createElement('script');
script.src = pixelUrl;
document.body.appendChild(script);

```

In this script:

1. **Define Your Client ID**: Replace **`'your_client_id_here'`** with your actual client ID.
2. **Set Up the PUID Object**: This object can include any additional properties you want to track.
3. **Stringify and Encode**: Convert the **`puid`** object into a properly formatted string for URL use.
4. **Create the Pixel URL**: Insert the provided **`pid`** value and the encoded **`puid`** string.
5. **Implement the Pixel**: This example uses a script tag to add the pixel to your website.

For more detailed instructions and parameter descriptions, see the Detailed Documentation section.

## Query Parameters

### **`pid`** (required)

- **Description**: Unique identifier for the CDP Resolution platform.
- **Value**: **`48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d`**

### **`puid`** (required)

- **Description**: A JSON object containing various properties.
- **Properties**:
  - **`client_id`** (required): Unique identifier for your CDP Resolution account.
  - **`purpose`** (required): Specifies where the pixel is implemented.
  - _Additional properties_: You can add custom properties for enhanced tracking (e.g., campaign tracking).

**Note**: The **`puid`** object must be JSON stringified and URL encoded.

## **Implementation Examples**

Replace `[client_id]` with your client_id and `[purpose]` with the intended purpose.

### Iframe Tag

```html
<iframe
  src="https://a.usbrowserspeed.com/cs?pid=48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d&puid=%7B%22client_id%22%3A%22%5Bclient_id%5D%22%2C%22purpose%22%3A%22[purpose]%22%7D"
  width="1"
  height="1"
  style="visibility:hidden;display:none;"
></iframe>
```

### Script Tag

```html
<script src="https://a.usbrowserspeed.com/cs?pid=48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d&puid=%7B%22client_id%22%3A%22%5Bclient_id%5D%22%2C%22purpose%22%3A%22[purpose]%22%7D"></script>
```
