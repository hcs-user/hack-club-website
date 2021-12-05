import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import Meta from '@hackclub/meta'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default ({
  name = 'Hack Club SVIT ',
  title = 'Hack Club SVIT',
  description = '',
  image = '',
  url = ''
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={name} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="msapplication-TileColor" content={theme.colors.primary} />
    <meta name="theme-color" content={theme.colors.primary} />
  </Head>
)
export default class App extends NextApp {
  render() {
    
    const { Component, pageProps } = this.props
    return (
      
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
