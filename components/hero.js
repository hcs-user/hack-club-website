import React from 'react'
import { useEffect } from 'react'
import { Box, Flex, Container, Button, Text, Heading, Card } from "theme-ui"
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
            <Container sx={{
                backgroundImage: 'linear-gradient(0deg, #1B1B1B, rgba(0, 0, 0, 0.8)), url(/new.jpg)',
                backgroundSize: 'cover',
                minHeight: '100vh',
                minWidth: '100%',
                opacity: "1",
            }}>
                <Flex
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: "center",
                        textAlign: 'center',
                        minHeight: "100vh",
                    }}>
                    <Heading sx={{
                        fontSize: [5, 7],
                        color: "primary"
                    }}>
                        Welcome To <br />
                        <Text
                            sx={{ fontSize: [5, 7], color: 'white', "-webkit-text-fill-color": "transparent", "-webkit-text-stroke-width": "3px" }}>
                            Hack Club SVIT</Text></Heading>
                    <Text color={'primary'} sx={{ fontSize: '2rem', fontWeight: '500', mt: "4" }}>Code Collabrate Conquer</Text>
                    <Button sx={{ position: "absolute", variant: "buttons.ctaLg", padding: "4", bottom: '5' }}>Join Our Community</Button>
                </Flex>
            </Container>

        </>
    )
}

export default Hero