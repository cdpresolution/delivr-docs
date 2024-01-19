---
sidebar_position: 4
---

import ClientID from '@site/src/components/client-id/ClientID';
import FindClientID from '@site/src/components/client-id/FindClientID';
import CodeblockWithClientID from '@site/src/components/client-id/CodeblockWithClientID';

# Customer Segmentation

This guide will walk you through customizing and installing the pixel with a customer identifier to enhanced segmentation tracking and analytics.

### 1. **Define Custom Property**:

Decide on the custom property name and what it represents. For example, if you're tracking a customer's web site, you might name it `customer_id`

### 2. **Modify the PUID Object**:

- In the JavaScript setup, extend the **`puid`** object to include your custom property.
- For instance, if your custom property is a customer identifier like **`customer_id`**, your **`puid`** object would look something like this:

<FindClientID />

<CodeblockWithClientID className="language-js">
{`
const puid = {
  client_id: '[client_id]',
  purpose: 'website',
  partner: 'my_partner',
  customer_id: 'your_customer_id_here', // Add your custom property here
};
`}
</CodeblockWithClientID>

### 3. **Stringify and Encode PUID**:

After adding the custom property, the rest of the process remains the same as _[the pixel installation](/docs/resolution-pixel/install-pixel)_. Convert the **`puid`** object into a string and encode it for URL use.

### 4. **Create and Implement the Pixel URL**:

Continue with creating the pixel URL using the modified **`puid`** object and implement it on your website using a script or iframe tag.

### 5. **Example Implementation**:

- **Script Tag**: With the custom property added, your script tag for implementation would look like this:

  <CodeblockWithClientID className="language-html">
  {`
   <script>
      const clientId = '[client_id]';
      const pid = '48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d';
      const puid = {
        client_id: clientId,
        purpose: 'website',
        partner: 'my_partner',
        customer_id: 'your_customer_id_here', // Your custom property
      };
      const encodedPuid = encodeURIComponent(JSON.stringify(puid));
      const pixelUrl = 'https://a.usbrowserspeed.com/cs?pid=' + pid + '&puid=' + encodedPuid;
      const script = document.createElement('script');
      script.src = pixelUrl;
      document.body.appendChild(script);
    </script>
  `}
  </CodeblockWithClientID>

### 6. **Testing**:

After implementation, test the pixel to ensure it's capturing and segmenting data as expected.

By adding a custom property to the PUID object, you can segment your customers based on specific identifiers unique to your business needs.
