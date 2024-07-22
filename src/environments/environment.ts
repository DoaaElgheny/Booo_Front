import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'PortalDemo',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44355/',
    redirectUri: baseUrl,
    clientId: 'PortalDemo_App',
    responseType: 'code',
    scope: 'offline_access PortalDemo',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44355',
      rootNamespace: 'PortalDemo',
    },
  },
} as Environment;
