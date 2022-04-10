import React from 'react'
import { Box, Button, Card, Container, Flex, Grid, Link, Text } from 'theme-ui'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from '../public/logo.png'
import events from "../events.json"
import { MdOutlineDateRange } from "react-icons/md"
import { useState } from 'react';
export default function Events() {
    const [isModalOPen, setIsModalOpen] = useState(false);
    const [id, setId] = useState();
    return (
        <>
            <Box bg={'white'} sx={{
                position: "fixed",
                top: (isModalOPen ? "35%" : "-50%"),
                left: "35%",
                width: "35%",
                height: "45%",
                borderRadius: "5px",
                zIndex: "1",
                color: "black",
                transition: "all 0.2s ease-in-out"
            }}>
                <Text onClick={() => setIsModalOpen(false)}>Close</Text><br />
                <Text>ID is :{id}</Text>
            </Box>
            <Container id="event" p={2} mb={6} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <Box >
                    <Text sx={{ fontSize: "4rem", color: 'primary', fontWeight: 500 }}>
                        Events
                    </Text>
                    <Grid gap={4} columns={[1, 2, 3, 4]}>
                        {
                            events && events.map(el => {
                                return <Card key={el.id} m={2} sx={{ height: "auto", width: "200px" }} onClick={() => { setIsModalOpen(true); setId(el.id) }} >
                                    <Image src={logo} />
                                    <Box marginLeft={["-50", null, "-15px"]} sx={{ textAlign: "left", width: "max-content" }}>
                                        <Text>
                                            {el.event_name}
                                        </Text><br />
                                        <MdOutlineDateRange /><Text sx={{ fontSize: '14px' }}>{el.event_date}</Text>
                                    </Box>
                                </Card>
                            })
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    )


}