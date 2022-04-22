import Image from 'next/image'
import React from 'react'
import { Box, Card, Container, Flex, Grid, Heading, Text } from 'theme-ui'
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
                        <Flex
                            sx={{
                                fontSize: 40,
                                color: 'blue',
                                fontWeight: "600",
                                justifyContent: "center",
                            }}
                        >{el.team_name}
                        </Flex>
                        <Flex
                            sx={{
                                flexDirection: ['column', ['row']],
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                            {el.members.map((member) => (
                                <Box margin={4} sx={{
                                    width: ["90%"],
                                    border: '2px solid white',
                                    borderRadius: 12,
                                    padding: 3,
                                    paddingBlock: 12,
                                    backgroundColor: 'sheet',
                                }}>
                                    <Flex sx={{
                                        flexDirection: ['row', 'column'],
                                        justifyContent: ['space-around'],
                                        alignItems: ['center', null]
                                    }}>

                                        <Image src={member.img} width={'100%'} height={'100%'} objectFit={'contain'} />
                                        <Text
                                            sx={{
                                                fontSize: [28, 24],
                                                color: "primary",
                                                padding: 1,
                                            }}>
                                            <center>
                                                {member.name}<br />
                                                {member.position}
                                            </center>
                                        </Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Flex>
                    </>
                )
                )
            }



        </Container>

    )
}

export default Team