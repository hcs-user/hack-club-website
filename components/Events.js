import Image from 'next/image';
import React, { useState } from 'react';
import { MdClose, MdOutlineDateRange } from "react-icons/md";
import { Box, Button, Card, Container, Flex, Grid, Heading, Text } from 'theme-ui';
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
            <Container id="event" mb={6} sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
            }}>

                <Box >
                    <Text variant='title' sx={{ color: 'primary' }}>
                        Events
                    </Text>
                    {/* <Flex sx={{
                        // border: "1px solid red",
                        justifyContent: "center"
                    }}>
                        <Button variant='outlineLg' mr={4}>Upcoming</Button>
                        <Button variant='outlineLg' mr={4}>All</Button>
                        <Button variant='outlineLg' mr={4}>Past</Button>
                    </Flex> */}
                    <Grid gap={[1, 1, 4, 4]} columns={[1, 2, 2, 3, 4]}
                        sx={{
                            //  border:"1px solid red",
                            mt: 5,
                        }}
                    >
                        {
                            events && events.map(el => {
                                return <Card
                                    key={el.id} m={2} sx={{ height: "auto", minWidth: "240px" }} onClick={() => { setIsModalOpen(true); setId(el.id) }} >
                                    <Image src={el.event_logo}
                                        width={'100%'}
                                        height={'100%'}
                                        sx={{
                                            margin: 2,
                                        }}
                                    />
                                    <Flex marginLeft={["-50", null, "-15px"]} sx={{ flexDirection: "column", textAlign: "left", width: "max-content", marginBlockStart: 4, }}>
                                        <Flex sx={{ flexDirection: "column" }}>
                                            <Text
                                                sx={{
                                                    fontSize: [24]
                                                }}
                                            >
                                                {el.event_name}
                                            </Text>
                                            <Flex>
                                                <MdOutlineDateRange />
                                                <Text sx={{ fontSize: 14, mx: 1 }}>{el.event_date}</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Card>
                            })
                        }
                    </Grid>
                </Box>
            </Container>
        </>
    )
}