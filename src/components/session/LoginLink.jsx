import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function LoginLink() {
  const { loginWithRedirect } = useAuth0();

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        loginWithRedirect();
      }}
    >
      <strong>Log In</strong> <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
