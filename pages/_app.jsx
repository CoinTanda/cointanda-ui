import React from 'react'
import dynamic from 'next/dynamic'
import App from 'next/app'
import { appWithTranslation } from '../i18n'

import 'assets/styles/index.css'
import 'assets/styles/layout.css'
import 'assets/styles/loader.css'
import 'assets/styles/pool.css'
import 'assets/styles/pool-toast.css'
import 'assets/styles/utils.css'
import 'assets/styles/animations.css'
import 'assets/styles/transitions.css'
import 'assets/styles/typography.css'
import 'assets/styles/bnc-onboard--custom.css'
import 'assets/styles/reach--custom.css'

import { ThemeProvider } from 'styled-components';

import { Layout } from 'components/ui/Layout/Layout'

import 'react-toastify/dist/ReactToastify.css'
import '@reach/tooltip/styles.css'
import 'themes/GlobalStyles/fonts-loading.css';
import { defaultTheme } from 'themes/defaultTheme';
import { GlobalStyles } from 'themes/GlobalStyles/GlobalStyles';

import { Meta } from 'components/ui/Meta/Meta';


const DynamicWalletContextProvider = dynamic(() =>
  import('lib/components/WalletContextProvider').then(mod => mod.WalletContextProvider),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return <>
    <DynamicWalletContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Layout>
          <Meta />
          <Component
            {...pageProps}
          />
        </Layout>
      </ThemeProvider>
    </DynamicWalletContextProvider>
  </>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(MyApp)