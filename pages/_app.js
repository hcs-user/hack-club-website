import theme from '@hackclub/theme'
import '@hackclub/theme/fonts/reg-ital-bold.css'
import NextApp from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'theme-ui'
import Footer from '../components/Footer'
import "../components/main.css"
import Navbar from '../components/Navbar'
export default class App extends NextApp {
  render() {

    const { Component, pageProps } = this.props
    return (

      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}
