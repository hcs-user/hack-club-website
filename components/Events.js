import Image from 'next/image';
import React, { useState } from 'react';
import { MdClose, MdOutlineDateRange } from "react-icons/md";
import { Box, Card, Container, Grid, Heading, Text } from 'theme-ui';
import events from "../events.json";
export default function Events() {
    const [isModalOPen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(0);
    return (
        <>
            <Container>
                <Box bg={'aliceblue'} sx={{
                    position: "fixed",
                    top: (isModalOPen ? "15%" : "-100%"),
                    left: ["5%", "35%", "25%"],
                    width: ["100%", "50%"],
                    maxWidth: "90%",
                    height: "auto",
                    borderRadius: "5px",
                    padding: "25px",
                    zIndex: "1",
                    color: "black",
                    transition: "all 0.2s ease-in-out",
                }}>
                    <Heading sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "primary",
                    }}>
                        {events[id].event_name}
                        <div onClick={() => setIsModalOpen(false)}> <MdClose /></div>
                    </Heading><br />
                    <h3><MdOutlineDateRange /> Date:{events[id].event_date}</h3>
                    <br />
                    <h3>
                        What We have done in {events[id].event_name}
                    </h3>
                    <h4>
                        {events[id].desc}
                    </h4>
                </Box>
            </Container>
            <Container id="event" p={2} mb={6} sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Box >
                    <Text sx={{ fontSize: "4rem", color: 'primary', fontWeight: 500 }}>
                        Events
                    </Text>
                    <Grid gap={4} columns={[1, 2, 3, 4]}>
                        {
                            events && events.map(el => {
                                return <Card
                                    key={el.id} m={2} sx={{ height: "auto", minWidth: "240px" }} onClick={() => { setIsModalOpen(true); setId(el.id) }} >
                                    <Image src={el.event_logo}
                                        width={'100%'}
                                        height={'100%'}
                                    />
                                    <Box marginLeft={["-50", null, "-15px"]} sx={{ textAlign: "left", width: "max-content" }}>
                                        <Text
                                            sx={{
                                                fontSize: [20,]
                                            }}
                                        >
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