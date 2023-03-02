import * as msal from '@azure/msal-browser';

const msalConfig = {
    auth: {
        clientId: '{CLIENT_ID}',
        authority: `https://login.microsoftonline.com/{TENANT_ID}`,
        redirectUri: '/'
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export { msalInstance }