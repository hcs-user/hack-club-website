import React from 'react'
import { Box, Flex, Container, Button } from "theme-ui"
function Hero() {
    return (
        <Box m={0} bg="/hero.png" sx={{ height: '91vh', }}>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                    sx={{
                        width: 'inherit',
                        fontSize: '5rem',
                        height: '70vh',
                        display: 'flex',
                        // justifyContent:'center',
                        alignItems: 'center',
                        letterSpacing: '2px',
                        color: "accent",
                        fontWeight: 600,
                        '@media (max-width:426px)': {
                            justifyContent: "center",
                        },
                        
                    }}
                    css={{
                    }}
                >
                    Code
                    <br />
                    Collab
                    <br />
                    Conquer
                    <br />
                </Box>
                <Button sx={{
                    "variant": "buttons.cta",
                    "lineHeight": "title",
                    "fontSize": 3,
                    "px": 5,
                    "py": 4,
                    "my": "10",
                    '@media (max-width:426px)': {
                        display: "block",
                        position: "absolute",
                        "fontSize": 2,
                        "px": 3,
                        "py": 3,
                        "bottom": "15%",
                    },
                }}>Join Our Community</Button>
            </Container>
        </Box>
    )
}

export default Hero