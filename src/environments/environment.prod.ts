export const environment = {
  production: true,

  sso_api_username: '3n73ieh3amdlb1ker6596ir7lt',
  sso_api_pwd: '166mom5jssen9096pinu6iqp36q20m2ohnc7fb34smpeug71f78g',
  loginURL: 'https://demo-dale1.auth.us-west-2.amazoncognito.com/oauth2/authorize?identity_provider=demo-openId&redirect_uri=http://localhost:4200/callback&response_type=CODE&client_id=3n73ieh3amdlb1ker6596ir7lt&scope=comments/read%20openid',
  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://demo-dale1.auth.us-west-2.amazoncognito.com/oauth2/token',

  logout: 'https://demo-dale1.auth.us-west-2.amazoncognito.com/logout?' +
          'client_id=3n73ieh3amdlb1ker6596ir7lt&' +
          'logout_uri=http://localhost:4200/home',

  urlApi: 'https://896zleti3c.execute-api.us-west-2.amazonaws.com/dev'
};
