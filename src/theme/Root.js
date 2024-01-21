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

  //TODO: Check if user is authenticated and if so, try to silentily identify them
  const checkUserSession = async () => {
    console.log('checking user session');
    try {
      await getAccessTokenSilently({
        //   audience: 'https://dev-cfnhggg28yy650dx.us.auth0.com/api/v2/',
      });
      // User is silently authenticated
    } catch (error) {
      console.log(error);
      // Silent authentication failed, do nothing
    }
  };
  useEffect(() => {
    if (user) {
      mixpanel.identify(user.id);
    }
  }, [user, isAuthenticated]);
  return <>{children}</>;
};

export default function Root({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  useEffect(() => {
    mixpanel.init(customFields.MIX_PANEL_KEY);
  }, [customFields.MIX_PANEL_KEY]);

  return (
    <Auth0Provider
      domain="auth.cdpresolution.com"
      clientId="QPH5m83W3OsodidDrPFqhITJZUNBGY5y"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <WithUser>{children}</WithUser>
    </Auth0Provider>
  );
}
