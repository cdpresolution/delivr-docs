// src/components/FindClientID.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ClientID from './ClientID';
import LoginLink from '../session/LoginLink';

const defaultLink = (
  <>
    {' '}
    or see{' '}
    <a href="/docs/resolution-pixel/create-a-pixel#getting-your-client_id">
      <i>getting your Client ID</i>
    </a>
  </>
);

export default function FindClientID({ customLink = defaultLink }) {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
        <strong>Client ID:</strong>{' '}
        <code>
          <ClientID />
        </code>
      </>
    );
  }

  return (
    <>
      <LoginLink /> to view your Client ID
      {customLink}
    </>
  );
}
