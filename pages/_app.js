import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import { Container, ThemeProvider } from 'theme-ui'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Events from '../components/Events'
import About from '../components/About'
import Hero from '../components/hero'
import "../components/hero.css";

export default class App extends NextApp {
  render() {

    const { Component, pageProps } = this.props
    return (

      <ThemeProvider theme={theme}>
        
        <Component {...pageProps} />
        
      </ThemeProvider>
    )
  }
}
