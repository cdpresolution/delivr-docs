// src/components/DynamicCodeBlock.js

import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import CodeBlock from '@theme/CodeBlock';

const CodeblockWithClientID = ({ children, placeholder = 'insert your client id here', ...props }) => {
  const [processedCode, setProcessedCode] = useState('');
  // const { user } = useAuth0();

  useEffect(() => {
    let code = children;
    // // if (user && user.Organization_Hash) {
    // //   code = code.replace(/\[client_id\]/g, user.Organization_Hash);
    // // } else {
    code = code.replace(/\[client_id\]/g, placeholder);
    // }
    setProcessedCode(code);
  }, [children]);

  return <CodeBlock {...props}>{processedCode}</CodeBlock>;
};

export default CodeblockWithClientID;
