import Head from 'next/head'
import { AppProps } from 'next/app'
import { useApollo } from 'utils/apollo'
import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { CartProvider } from 'hooks/use-cart'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { Provider as AuthProvider } from 'next-auth/client'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { WishlistProvider } from 'hooks/use-wishlist'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#06092B" />
                <meta
                  name="description"
                  content="All your favorite games in one place, WON is the best and most complete gaming platform."
                />
              </Head>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextNprogress
                color={theme.colors.primary}
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
                showOnShallow={true}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
