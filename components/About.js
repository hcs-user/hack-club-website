import React from 'react'
import { Card, Container, Flex, Text, Box } from 'theme-ui'
function About() {
  return (
    <Container p={2} m={4}>
        <Text sx={{fontSize: "4rem"}}>About</Text>
        <Box>
            <Text sx={{fontSize: "1.5rem", lineHeight: "2"}}>Hack Club is an initiative for students by students. Hack Club is a place that lets you tinker, break, and rebuild. After all, you can't make an omelet without breaking a few eggs 🍳</Text>
        </Box>
    </Container>
  )
}

export default About