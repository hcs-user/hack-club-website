import React from 'react'
import { Box, Flex, Container, Button, Text, Heading, Card } from "theme-ui"
// import logo from '../Public/hero.gif'
import Image from 'next/image'
import theme from '@hackclub/theme'
import { themed } from '@theme-ui/mdx'
function Hero() {
    return (
        // <div className="hero">
        //     <Image src={logo}></Image>
        //     <h1>Welcome To <br/>Hack Club SVIt</h1>
        // </div>
        <Container sx={{
            backgroundImage: 'url(/hero.gif)',
            minHeight: '100vh',
            minWidth: '100%',
        }}>
            <Flex
                sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: "center",
                    textAlign: 'center',
                    
                    minHeight: "100vh"
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
    )
}

export default Hero