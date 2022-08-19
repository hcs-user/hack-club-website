import Image from 'next/image'
import React, { useState } from 'react'
import { MdClose, MdOutlineDateRange } from 'react-icons/md'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import {
    Box,
    Button,
    Card,
    Container,
    Flex,
    Grid,
    Heading,
    Text
} from 'theme-ui'
import events from '../events.json'
export default function Testimonial() {
    const [isModalOPen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    return (
        <>

            <Container
                id="event"
                backgroundColor={'#1D1D1D'}
                sx={{
                    textAlign: 'center',
                    height: 'max-content',
                    display: 'flex',
                    justifyContent: 'center',
                    minWidth: '100%',
                    paddingBlock: 20
                }}
            >
                <Box marginY={4}>
                    <Text
                        variant="title"
                        marginY={4}
                        sx={{
                            color: 'primary',
                            fontSize: ['2rem', '3rem'],
                            
                        }}
                    >
                        See what people have to say
                    </Text>
                    {/* <Flex sx={{
                        // border: "1px solid red",
                        justifyContent: "center"
                    }}>
                        <Button variant='outlineLg' mr={4}>Upcoming</Button>
                        <Button variant='outlineLg' mr={4}>All</Button>
                        <Button variant='outlineLg' mr={4}>Past</Button>
                    </Flex> */}
                    <div  className='tweet' >
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="HackClubSVIT"
                            options={{ height: 200 }}
                            theme={'dark'}
                        />
                    </div>
                </Box>
            </Container>
        </>
    )
}
