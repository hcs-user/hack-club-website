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
import Events from '../components/Events'
import Hero from '../components/hero'

export default class App extends NextApp {
  render() {

    const { Component, pageProps } = this.props
    return (

      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Navbar />
<<<<<<< Updated upstream
        <Component {...pageProps}/>
        {/* <Gallery></Gallery> */}
        <Events></Events>
=======
        <Component {...pageProps} />
        <Gallery></Gallery>
>>>>>>> Stashed changes
      </ThemeProvider>
    )
  }
}
