import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import { Box, Card, Container, Flex, Text } from 'theme-ui'
function About() {
  return (
    <Container
      id="about"
      bg={'#1D1D1D'}
      sx={{
        textAlign: 'center',
        minWidth: '100%',
        minHeight: "fit-content",
        paddingBlock:[48,null,64],
        display: "flex",
        flexDirection: ["column", "row"],
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      <Box sx={{ height: "auto", width: [250, null, 300], flex: 0.2 }}>
        <img src='/2.jpg' height={"100%"} width={"100%"} className="rounded"></img>
      </Box>
      <Box sx={{ flex: 0.5,display:'flex',flexDirection:"column" }} >
        <Text color='primary' sx={{ fontSize: 52 }}>Who are we</Text>
        <Text sx={{ fontSize: 24 }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum optio explicabo voluptatibus quae consequatur enim, dolore officiis nulla distinctio adipisci, cumque rerum odit dignissimos odio a, corporis obcaecati facere i</Text>
      </Box>
    </Container>
  )
}

export default About
