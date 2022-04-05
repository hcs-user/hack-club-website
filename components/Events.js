import React from 'react'
import { Box, Button, Card, Container, Flex, Grid, Link, Text } from 'theme-ui'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../public/logo.png'
import events from "../events.json"
import { MdOutlineDateRange } from "react-icons/md"
export default function Events() {
    console.log(events);
    return (
        <Container id="event" p={2} mb={6} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Box >
                <Text sx={{ fontSize: "4rem", color: 'primary', fontWeight: 500 }}>
                    Events
                </Text>
                <Grid gap={4} columns={[1, null, 4]}>
                    {
                        events && events.map(el => {
                            return <Card m={2} sx={{ height: "auto", width: "200px" }} >
                                <Image src={logo} />
                                <Box marginLeft={["-50", null, "-15px"]} sx={{ textAlign: "left", width: "max-content" }}>
                                    <Text>{el.event_name}</Text><br />
                                    <MdOutlineDateRange /><Text sx={{ fontSize: '14px' }}>{el.event_date}</Text>
                                </Box>
                            </Card>
                        })
                    }
                </Grid>
            </Box>
        </Container>
    )

}