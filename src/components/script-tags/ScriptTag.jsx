import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

const ScriptTag = ({ children, clientIDPlaceholder = 'insert your client id here', ...props }) => {
  const [processedCode, setProcessedCode] = useState('');

  useEffect(() => {
    let code = children;
    // // if (user && user.Organization_Hash) {
    // //   code = code.replace(/\[client_id\]/g, user.Organization_Hash);
    // // } else {
    code = code.replace(/\[client_id\]/g, clientIDPlaceholder);
    // }
    setProcessedCode(code);
  }, [children]);

  const clientId = clientIDPlaceholder;
  const className = props.className ? props.className : 'language-html';
  return (
    <CodeBlock {...props} className={className}>
      {`<script type="text/javascript">
const clientId = "${clientId}"; 
//pid will always be the value below 
const pid = '48a021d87720f17403d730658979d7f60e9cec91937e82072c66f611748dd47d'; 
// Step 2: Create the puid object // Include additional properties as needed for tracking`}
      {processedCode}
      {`// Step 3: JSON stringify and encode the puid object
// This is necessary for properly formatting the URL
const encodedPuid = encodeURIComponent(JSON.stringify(puid));
// Step 4: Create the pixel URL
const pixelUrl = 'https://a.usbrowserspeed.com/cs?pid=' + pid + '&puid=' + encodedPuid;
// Step 5: Implement the pixel
// You can use an iframe or a script tag method. Here's an example using a script tag:
const script = document.createElement('script');
script.src = pixelUrl;
document.body.appendChild(script);
</script>`}
    </CodeBlock>
  );
};

export default ScriptTag;
