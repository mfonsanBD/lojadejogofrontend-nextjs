import { ApolloProvider } from '@apollo/client'
import { StickyNote } from 'components/StickNote'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'
import { Provider as AuthProvider } from 'next-auth/client'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'
import SEO from '../../next-seo.config'

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
              <StickyNote>
                <p>Este site foi desenvolvido como projeto de estudo!</p>
              </StickyNote>
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
