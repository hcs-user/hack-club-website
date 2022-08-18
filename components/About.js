import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import { Box, Card, Container, Flex, Text } from 'theme-ui'
function About() {
  return (
    <Container
      id="about"
      p={4}
      bg={'#1D1D1D'}
      display={'flex'}
      Flex={'wrap'}
      sx={{
        textAlign: 'center',
        minWidth: '100%',
        // width: '100vh',
        minHeight: '80vh',
        paddingTop: '140px'
      }}
    >
      <Box
        px={40}
        sx={{
          paddingLeft: '35px',
          borderRadius: '40px',
          float: 'left'
        }}
      >
        <img src={'./2.jpg'} width={'300px'} height={'300px'} />
      </Box>
      <Text
        variant="title"
        // paddingLeft={540}
        // p={4}
        sx={{
          fontSize: ['2rem', '2.6rem'],
          color: 'primary',
          marginTop: '600px'
        }}
      >
        Who are we?
      </Text>

      <Box
        sx={{
          minWidth: '90%',
          marginTop: '40px',
          textAlign: 'center',
          color: '#E9E9E9'
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
