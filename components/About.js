import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import { Box, Card, Container, Flex, Text } from 'theme-ui'
function About() {
  return (
    <Container
      id="about"
      p={4}
      mb={7}
      bg={'#1D1D1D'}
      display={'flex'}
      Flex={'wrap'}
      sx={{
        textAlign: 'center',
        minWidth: '100%',
        width: '100vh',
        minHeight: '80vh',
        paddingTop: '170px'
      }}
    >
      <Text
        variant="title"
        paddingLeft={540}
        sx={{ fontSize: '3 rem', color: 'primary', marginTop: '600px' }}
      >
        Who are we?
      </Text>
      <Box
        p={32}
        sx={{
          // paddingLeft: '60px',

          minWidth: '50%',
          width: '52%',
          textAlign: 'center'
        }}
      >
        <Text
          sx={{
            fontSize: ['1.3rem'],
            lineHeight: '1'
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum optio
          explicabo voluptatibus quae consequatur enim, dolore officiis nulla
          distinctio adipisci, cumque rerum odit dignissimos odio a, corporis
          obcaecati facere i
        </Text>
      </Box>
    </Container>
  )
}

export default About
