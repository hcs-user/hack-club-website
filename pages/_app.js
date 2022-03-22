import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import Meta from '@hackclub/meta'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'

export default class App extends NextApp {
  render() {

    const { Component, pageProps } = this.props
    return (

      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Navbar />
        <Component {...pageProps} />
        {/* <Gallery></Gallery> */}
      </ThemeProvider>
    )
  }
}
