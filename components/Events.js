import React from 'react'
import { Card, Container } from 'theme-ui'
import Image from 'next/image'

const logo = require('../assets/logo.png');

export default function Events() {
    return (
        <Container
            sx={{
                bg: "sheet",
                ml: "10%",
                mt: "15%",
                mb: "15%",
                height: "50vh",
                borderRadius: "10px",
                textAlign: "center",
                width: "100%",
                overflow: "auto",
            }}>
            <Card
                sx={{
                    height: "30vh",
                    width: 100,
                    mt: "2%",
                    mb: "2%",
                    bg: "sheet",
                    ml: "5%",
                    flexDirection: ['row']
                }}>
                <Image src={logo} />
                <new>Events</new>
            </Card>
            <Card
                sx={{
                    height: "30vh",
                    width: 100,
                    mt: "2%",
                    mb: "2%",
                    bg: "sheet",
                    ml: "5%",
                    flexDirection: ['row']
                }}>
                <Image src={logo} />
                <new>Events</new>
            </Card>
            
        </Container>
    )
}

function Events() {
  return (
    <div>Events</div>
  )
}

