import Image from 'next/image'
import React from 'react'
import { Box, Container, Flex, Text } from 'theme-ui'
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
                                flexDirection: ['column', 'column', 'row'],
                                justifyContent: ['center', 'center', 'flex-start'],
                                alignItems: 'center',
                                flexWrap: ['nowrap', 'wrap', 'wrap'],
                                // border: '2px solid white',
                            }}>
                            {el.members.map((member) => (
                                <Box margin={4} sx={{
                                    width: 'max-content',
                                    minWidth: ["100%", "90%", "40%", "18%"],
                                    maxWidth: ['100%'],
                                    border: '2px solid #fc5c7d',
                                    borderRadius: 12,
                                    padding: 3,
                                    backgroundColor: 'sheet',
                                }}>
                                    <Flex sx={{
                                        flexDirection: ['row', 'column'],
                                        justifyContent: ['space-evenly'],
                                        alignItems: ['center', null]
                                    }}>

                                        <Image src={member.img}
                                            width={'100%'}
                                            height={'100%'}
                                            objectFit={'contain'}
                                            sx={{
                                                minWidth: "100%",
                                            }}
                                        />
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