import React from 'react'
import { Card, Container, Flex, Text, Box } from 'theme-ui'
function About() {
  return (
    <Container p={2} mb={4} mt={4} bg={'sheet'} sx={{ borderRadius: "8px", textAlign: 'center' }}>
      <Text p={4} sx={{ fontSize: "4rem", color: "primary" }}>About</Text>
      <Box p={4} sx={{ textAlign: 'left' }}>
        <Text sx={{ fontSize: "1.5rem", lineHeight: "2" }}>Hack Club is an initiative for students by students. Hack Club is a place that lets you tinker, break, and rebuild. After all, you can't make an omelet without breaking a few eggs 🍳</Text>
      </Box>
      <Box sx={{ textAlign: 'center', fontSize: ['1.5rem', '2.5rem'], }}>
        We At <Text bg={'purple'} sx={{ padding: '1px', borderRadius: '5px', color: 'white', fontWeight: "700" }}>Hack club SVIT</Text>
        <Flex sx={{ mt: '2', flexDirection:['column','row'], alignItems: "center", justifyContent: 'space-evenly', fontSize: '1.5rem',textAlign:'left' }}>
          <Card m={2} sx={{
            padding:0
          }} >
            <h3>Coding Environment</h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum optio explicabo voluptatibus quae consequatur enim, dolore officiis nulla distinctio adipisci, cumque rerum odit dignissimos odio a, corporis obcaecati facere i</Card>
          <Card m={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sequi voluptatem fugiat laborum reprehenderit, soluta ipsam, error impedit doloribus illo quaerat? Optio sint voluptatibus fugiat delectus maxime aut quos eos!</Card>
          <Card m={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae perferendis eos dolor quis exercitationem neque ratione molestiae suscipit nam assumenda, itaque consequuntur vero error sapiente facere minus quod velit?</Card>

        </Flex>
      </Box>
    </Container >
  )
}

export default About