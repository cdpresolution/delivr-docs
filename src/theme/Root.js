import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

mixpanel.init('714358b0cdb37093c8d465d78fc49dbe', { debug: false, track_pageview: true, persistence: 'localStorage' });

//Wrapper for all pages to ensure user is identified
const WithUser = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, user } = useAuth0();

  const checkUserSession = async () => {
    if (!isAuthenticated) {
      try {
        await getAccessTokenSilently({
          audience: 'https://dev-cfnhggg28yy650dx.us.auth0.com/api/v2/',
        });
        // User is silently authenticated
      } catch (error) {
        // Silent authentication failed, do nothing
        // loginWithRedirect();
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
