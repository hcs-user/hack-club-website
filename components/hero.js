import React from 'react'
import { FaDiscord } from "react-icons/fa"
import { Button, Container, Flex, Heading, Link, Text } from "theme-ui"
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
                            sx={{
                                fontSize: [5, 7],
                                color: 'white',
                                background: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                            Hack Club SVIT</Text></Heading>
                    <Link
                        href='https://discord.gg/KZZzD8a7PY'
                        target='_blank'
                        color='white'
                    >
                        <Flex sx={{
                            marginBlock: 4,
                            alignItems: "center", px: "4", borderRadius: "12px", py: "1",
                            background: "linear-gradient(-55deg, #E21143, #FFB03A)",
                        }}>
                            <FaDiscord fontSize='28' color='white' />
                            <Text sx={{ fontSize: 28, mx: 3 }}>Join Discord</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Container>

        </>
    )
}

export default Hero