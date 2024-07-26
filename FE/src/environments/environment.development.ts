import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: false,
  appUrl: "http://localhost:5047",
  userKey: 'identityAppUser'
};
