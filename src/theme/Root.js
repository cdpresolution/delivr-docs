import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

//Wrapper for all pages to ensure user is identified
const WithUser = ({ children }) => {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const checkUserSession = async () => {
    if (!isAuthenticated) {
      try {
        await getAccessTokenSilently({
          audience: customFields.AUTH0_AUDIENCE,
        });
        // User is silently authenticated
      } catch (error) {
        // Silent authentication failed, do nothing
      }
    }
  };
  useEffect(() => {
    if (user) {
      mixpanel.identify(user.id);
    } else {
      checkUserSession();
    }
  }, [user]);
  return <>{children}</>;
};

export default function Root({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffect(() => {
    mixpanel.init(customFields.MIX_PANEL_KEY);
  }, [customFields.MIX_PANEL_KEY]);
  return customFields.AUTH0_DOMAIN ? (
    <Auth0Provider
      domain={customFields.AUTH0_DOMAIN}
      clientId={customFields.AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: customFields.AUTH0_REDIRECT_URL,
      }}
    >
      <WithUser>{children}</WithUser>
    </Auth0Provider>
  ) : null;
}
