import React from 'react'
import { Box, Container, Image, Text } from 'theme-ui'
const Sponser = () => {
    return (
        <Container
            sx={{
                marginBlock: "3rem",
                backgroundColor: 'sheet',
                borderRadius: "5px",
                minHeight: '20vh',
                padding: 4,
            }}
        >
            <Text sx={{
                background: "linear-gradient(to right, #00f260, #0575e6)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: "45px",
                fontWeight: "700"
            }}>Sponsored By</Text>
            <Box
                sx={{
                    borderRadius: 2,
                    // border: "1px solid red",
                    // maxWidth: '30%',
                    maxWidth: 'max-content',
                    height: 'auto',
                    padding: [1, 3],
                    display: 'flex', flexDirection: 'column'
                }}
            >
                <Text sx={{ display: 'block', fontSize: "30px", fontWeight: "600" }}>Swag Partner</Text>
                <Image src="/stickermule.svg" width={120} padding={2}></Image>
            </Box>
        </Container>
    )
}

export default Sponser