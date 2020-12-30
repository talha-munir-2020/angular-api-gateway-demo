// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  sso_api_username: '4vbtgcl4iuhvj0tnr32lfpp1mr',
  sso_api_pwd: '49164d7b6bvsisv0k3vnp6gmu2r1obhs12g8jh75q83j9s4o9qb',
  loginURL: 'https://thirdparty-appdomain.auth.us-east-2.amazoncognito.com/login?client_id=4vbtgcl4iuhvj0tnr32lfpp1mr&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:4200/callback',
  redirectURL: 'http://localhost:4200/callback',

  cognitoTokenURL: 'https://thirdparty-appdomain.auth.us-east-2.amazoncognito.com/oauth2/token',

  logout: 'https://thirdparty-appdomain.auth.us-east-2.amazoncognito.com/logout?' +
          'client_id=4vbtgcl4iuhvj0tnr32lfpp1mr&' +
          'logout_uri=http://localhost:4200/home',

  urlApi: 'https://hb005l4dj5.execute-api.us-east-2.amazonaws.com/Dev'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
