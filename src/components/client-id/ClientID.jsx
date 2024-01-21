import { useAuth0 } from '@auth0/auth0-react';

const ClientID = ({ placeholder = '' }) => {
  // const { user } = useAuth0();
  // return user ? user?.Organization_Hash : placeholder;
  return placeholder;
};

export default ClientID;
