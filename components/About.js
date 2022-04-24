import React from 'react'
import { Box, Card, Container, Flex, Text } from 'theme-ui'
function About() {
  return (
    <Container
      id="about"
      p={2}
      mb={4}
      mt={[6, 4]}
      bg={'sheet'}
      sx={{
        borderRadius: "8px",
        textAlign: 'center'
      }}>
      <Text variant='title' p={4} sx={{ fontSize: "4rem", color: "primary" }}>About</Text>
      <Box p={4} sx={{ textAlign: 'justify' }}>
        <Text sx={{ fontSize: ["1.2rem", "1.8rem"], lineHeight: "2" }}>Hack Club is an initiative for students by students. Hack Club is a place that lets you tinker, break, and rebuild. After all, you can't make an omelet without breaking a few eggs 🍳</Text>
      </Box>
      <Box sx={{ textAlign: 'center', fontSize: ['2.2rem', '2.5rem'], }}>
        We At <Text bg={'purple'} sx={{
          padding: '1px',
          borderRadius: '5px',
          color: 'white',
          fontWeight: "700",
          background: "linear-gradient(to left, #59c173, #a17fe0, #5d26c1)",
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Hack club SVIT</Text>
        <Flex
          sx={{
            mt: '2',
            flexDirection: ['column', 'column', 'column', 'row'],
            alignItems: 'stretch',
            justifyContent: 'space-evenly',
            fontSize: '1.5rem',
            textAlign: 'left',
            padding: 2,
          }}>
          <Card m={2} sx={{
            background: "-webkit-linear-gradient(to left, #1cd8d2, #93edc7)",
            background: "linear-gradient(to left, #1cd8d2, #93edc7)",
            color: "black",
            textAlign: 'justify',
          }} >
            <h3>Coding Environment</h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum optio explicabo voluptatibus quae consequatur enim, dolore officiis nulla distinctio adipisci, cumque rerum odit dignissimos odio a, corporis obcaecati facere i</Card>
          <Card
            m={2}
            sx={{
              backgroundImage: "linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)",
              backgroundColor: "#f9ea8f",
              color: "black",
              textAlign: 'justify',
            }}
          >
            <h3>Coding Environment</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quam quia voluptate consectetur aspernatur. Aspernatur, excepturi facere. Aliquid odit deserunt quis itaque id, quia dicta iure officiis, ducimus doloribus cupiditate.
          </Card>
          <Card m={2}
            sx={{
              background: "linear-gradient(to right, #ff6e7f, #bfe9ff)",
              backgroundColor: "#f9ea8f",
              color: "black",
              textAlign: 'justify',
            }}
          >
            <h3>Coding Environment</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sequi voluptatem fugiat laborum reprehenderit, soluta ipsam, error impedit doloribus illo quaerat? Optio sint voluptatibus fugiat delectus maxime aut quos eos!</Card>

        </Flex>
      </Box>
    </Container >
  )
}

export default About