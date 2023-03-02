import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from '@/services/msal';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  ) 
}
