import Image from "next/image"
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { Box, Container, Flex, Grid, Text } from 'theme-ui'
import team from "../components/data/team.json"
function Team() {
    return (
        <Container
            sx={{
                // border: "1px solid red",
                marginTop: 6,
                height: "max-content",
            }}
        >
            <Grid
                sx={{
                    gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"],
                    gap: 4,
                    padding: 4,
                    placeContent: "center",
                    placeItems: "center"
                }}
            >
                {
                    team && team.map((el) => {
                        {
                            return <Box
                                sx={{
                                    minWidth: ["90%", "100%"],
                                    minHeight: "100%",
                                    // border: "2px solid #b74a62",
                                    borderRadius: 10,
                                    padding: 3,
                                    backgroundColor: "sheet",
                                    // background:"linear-gradient(60deg, #59c173, #a17fe0, #5d26c1)",
                                    textAlign: "center",
                                    // mt: -12,
                                }}>
                                <Image src={el.img}
                                    height={"110%"}
                                    width={"110%"}
                                    objectFit={'cover'}
                                    objectPosition={'top'}
                                    className="image"
                                />
                                <Flex sx={{
                                    flexDirection: "column",
                                    // color: "white",
                                    // border:"1px solid red",
                                    alignItems: "center",
                                    minWidth: "100%",
                                    paddingBlockStart: 1,
                                }}>
                                    <Text sx={{ fontWeight: "600", fontSize: 24 }}>
                                        {el.name}
                                    </Text>
                                    <Flex sx={{
                                        width: ["40%", "30%", "45%"],
                                        fontWeight: "500",
                                        fontSize: 21,
                                        justifyContent: "space-between",
                                        // border:"1px solid red",
                                        marginBlock: 2,
                                        padding: 2,
                                    }}>
                                        <Link href={el.github}><BsGithub /></Link>
                                        <Link href={el.linkedin}><BsLinkedin /></Link>
                                    </Flex>
                                </Flex>
                            </Box>
                        }
                    })
                }
            </Grid>
        </Container >

    )
}

export default Team