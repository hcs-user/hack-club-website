import Meta from '@hackclub/meta'
import Head from 'next/head'
import Link from 'next/link'
import Main from './Main'
const DocsPage = () => (
  <>
    <Head>
      <title>Hack Club SVIT</title>
      <Meta name="Hack Club SVIT" description="HacK Club SVIT Website" />
      <Meta name="theme-color" content="red"></Meta>
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
      }
    `}</style>
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
    <Link href="/">
      <Main />
    </Link>
    {/* 
    <Link href='team'>
      <Team />
    </Link> */}
  </>
)

export default DocsPage
