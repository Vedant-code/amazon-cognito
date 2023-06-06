import { withAuthenticator } from '@aws-amplify/ui-react';

const withAuth = (Component) => {
  return withAuthenticator(Component, {
    // Customize the authentication UI options here
  });
};

export default withAuth;
