import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import ColorSwitcher from '../components/color-switcher'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import Events from '../components/Events'
import About from '../components/About'
import Hero from '../components/hero'
const DocsPage = () => (
  <>
    <Head>
      <title>Hack Club SVIT</title>
      <Meta name="Hack Club SVIT" description="HacK Club SVIT Website" />
    </Head>
    {/* <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="title" color="red">
          Hack Club SVIT
        </Heading>
        <Text as="p" variant="subtitle" mt={3}>
          <Link href="https://apacdirectory.hackclub.com/club/svit">Hack Club SVIT’s profile</Link> 
        </Text>
        <Text as="p" variant="subtitle" mt={3}>
          Stay Tuned...
          </Text>
     
      </Container>
    </Box> */}
    <Navbar />
    <Hero />
    <About />
    <Events />
    <Gallery />
  </>
)

export default DocsPage
