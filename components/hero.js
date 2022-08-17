import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import { Button, Container, Flex, Heading, Link, Text } from 'theme-ui'
const Popup = () => {
  return (
    <Container sx={{ height: '50vh' }}>
      <Button>HI</Button>
    </Container>
  )
}
function Hero() {
  return (
    <>
      <Container
        sx={{
          backgroundImage:
            'linear-gradient(0deg, #2F2F2F, rgba(0, 0, 0, 0.8)), url(/new.jpg)',
          backgroundSize: 'cover',
          minHeight: '80vh',
          minWidth: '100%',
          opacity: '1'
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '115vh'
          }}
        >
          <Heading>
            {' '}
            {/* <Heading> sx={{
                        fontSize: [5, 7],
                        color: "primary"
                    }}>
                        Welcome To <br /> */}
            <Text
              sx={{
                fontSize: [5, 7],
                color: 'primary'
                // background: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                // WebkitBackgroundClip: 'text',
                // WebkitTextFillColor: 'transparent',
              }}
            >
              Hack Club SVIT
            </Text>
          </Heading>
          <Text
            sx={{
              fontSize: [2, 2, 2, 3],
              // border: "1px solid red",
              maxWidth: ['100%', '100%', '100%', '57%'],
              textAlign: ['center'],
              color: '#E9E9E9',
              my: 3,
              padding: 2
            }}
          >
            Just another group of people committed to helping people gain a
            headstart in their hacking journey
          </Text>
          <Link
            href="https://discord.gg/KZZzD8a7PY"
            target="_blank"
            color="white"
          >
            <Flex
              sx={{
                marginBlock: 5,
                alignItems: 'center',
                px: '3',
                borderRadius: '43px',
                py: '2',
                backgroundColor: 'primary'
              }}
            >
              {/* <FaDiscord fontSize="28" color="white" /> */}
              {/* <div data-src="/arrow-right.svg" /> */}
              <Text sx={{ fontSize: 23, mx: 3 }}>
                Check out our latest events
              </Text>
              <img src="./arrow-right.svg" />
              {/* <img src./public/akar-icons_arrow-right.svg></img> */}{' '}
            </Flex>
          </Link>
        </Flex>
      </Container>
    </>
  )
}

export default Hero
