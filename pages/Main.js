import React from 'react'
import { Text } from 'theme-ui'
import About from '../components/About'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Hero from '../components/hero'
import Sponser from '../components/Sponser'
import Testimonial from '../components/Testimonial'
import Team from './team'
function Main() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Testimonial/>
      <Team />
      {/* <Events /> */}
      {/* <Sponser /> */}
    </>
  )
}

export default Main
