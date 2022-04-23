import Image from "next/image"
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Box, Container, Flex, Grid, Text } from 'theme-ui'
import team from "../components/data/team.json"
function Team() {
    return (
        <Container
            sx={{
                // border: "1px solid red",
                marginTop: 6,
                height: "max=content",
            }}
        >
            {
                team && team.map((el) =>
                (
                    <>
                        <Box sx={{
                            marginBlock: 4,
                        }}>
                            <Flex
                                sx={{
                                    fontSize: 40,
                                    color: 'blue',
                                    fontWeight: "650",
                                    justifyContent: ["center", "left"],
                                    width: "100%",
                                    textAlign: ["center", "center", "left"],
                                }}
                            >{el.team_name}
                            </Flex>
                            <Grid sx={{
                                gridTemplateColumns: ["repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"],
                                gridTemplateRows: "repeat(1,1fr)",
                                gap: 3,
                                // border:"1px solid red",
                                minWidth: ["65%", "80%"],
                                rowGap: 4,
                                paddingBlock: 4,
                                placeItems: "center",
                            }}>
                                {el.members.map((member) => (
                                    <Box
                                        sx={{
                                            minWidth: ["80%", "100%"],
                                            minHeight: "100%",
                                            // border: "2px solid #b74a62",
                                            borderRadius: 10,
                                            padding: 3,
                                            backgroundColor: "sheet",
                                            // background:"linear-gradient(60deg, #59c173, #a17fe0, #5d26c1)",
                                            textAlign: "center",
                                            // mt: -12,
                                        }}>
                                        <Image src={member.img}
                                            height={"110%"}
                                            width={"110%"}
                                            objectFit={'cover'}
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
                                                {member.name}
                                            </Text>
                                            <Text sx={{ fontWeight: "500", fontSize: 20 }}>
                                                {member.position}
                                            </Text>
                                            <Flex sx={{
                                                width: "30%",
                                                fontWeight: "500",
                                                fontSize: 21,
                                                justifyContent: "space-between",
                                                // border:"1px solid red",
                                                marginBlock: 2,
                                            }}>
                                                <BsGithub />
                                                <BsLinkedin />
                                            </Flex>
                                        </Flex>
                                    </Box>
                                ))}
                            </Grid>
                        </Box>
                    </>
                )
                )
            }
        </Container>

    )
}

export default Team