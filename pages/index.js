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

    <Box bg="sheet" sx={{ height: '91vh', }}>
      <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: 'inherit',
            fontSize: '5rem',
            height: '70vh',
            display: 'flex',
            // justifyContent:'center',
            alignItems: 'center',
            letterSpacing: '2px',
            color: "accent",
            fontWeight: 600,
            '@media (max-width:426px)': {
              justifyContent: "center",
            },
          }}
          css={{  
          }}
        >
          Code
          <br />
          Collab
          <br />
          Create
          <br />
        </Box>
        <Button sx={{
          "variant": "buttons.cta",
          "lineHeight": "title",
          "fontSize": 3,
          "px": 5,
          "py": 4,
          "my": "10",
          '@media (max-width:426px)': {
            display: "block",
            position: "absolute",
            "fontSize": 2,
            "px": 3,
            "py": 3,
            "bottom": "15%",
          },
        }}>Join Our Community</Button>
      </Container>
    </Box>
  </>
)

export default DocsPage
