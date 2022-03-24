import React from 'react'
import { Box, Flex, Container, Button, Text, Heading } from "theme-ui"
import logo from '../Public/hero.gif'
import Image from 'next/image'
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
                flexDirection:'column',
                justifyContent:'center',
                alignItems:"center",
                textAlign:'center',
                minHeight:"100vh"
            }}>
                <Heading>Welcome To <br/>Hack Club SVIT</Heading>
            </Flex>
        </Container>
    )
}

export default Hero