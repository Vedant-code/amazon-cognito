const awsmobile = {
  // Add your existing AWS configuration here

  oauth: {
    domain: 'YOUR_COGNITO_DOMAIN',
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: 'http://localhost:3000',
    redirectSignOut: 'http://localhost:3000',
    responseType: 'code',
    options: {
      AdvancedSecurityDataCollectionFlag: false,
    },
    // Add Google and Apple as identity providers
    federationTarget: 'COGNITO_USER_AND_IDENTITY_POOLS',
    identityProvider: 'Google',
    userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID',
    userPoolId: 'YOUR_USER_POOL_ID',
    clientId: 'YOUR_APP_CLIENT_ID',
    providerName: 'Google',
    authorizeScopes: 'profile email',
    // Add Apple as an identity provider
    federationProvider: 'Apple',
    attributeMapping: {
      email: 'email',
      name: 'name',
    },
  },
};

export default awsmobile;
