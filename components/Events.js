import React from 'react'
import { Box, Card, Container, Flex, Text } from 'theme-ui'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@hackclub/theme';
import logo from '../public/logo.png'

// const logo = require('../assets/logo.png');

export default function Events() {

    return (
        <Container  id="event" p={2} mb={6} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Box >
                <Text sx={{ fontSize: "4rem", color: 'primary', fontWeight: 500 }}>Events </Text>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={3.4}
                    breakpoints={{
                        280: {
                            slidesPerView: 1.5,
                        },
                        620: {
                            slidesPerView: 2.4,
                        },
                        720: {
                            slidesPerView: 3.2,
                        },
                        960: {
                            slidesPerView: 4.2,
                        },
                        1150: {
                            slidesPerView: 4.4,
                        },
                    }}
                >
                    <Flex fontSize={'2rem'} sx={{ flexDirection: 'row', justifyContent: 'space-between', textAlign: 'center' }}>
                        <SwiperSlide>
                            <Card m={2} sx={{
                                height: "240px",
                                width: "200px",
                            }} >
                                <Image src={logo} />
                                <Text >HacktoberFest</Text>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card m={2} sx={{ height: "240px", width: "200px" }} >
                                <Image src={logo} />
                                <Text>Flutter BootCamp</Text>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card m={2} sx={{ height: "240px", width: "200px" }} >
                                <Image src={logo} />
                                <Text>Web-Dev BootCamp</Text></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card m={2} sx={{ height: "240px", width: "200px" }} >
                                <Image src={logo} />
                                <Text>Web-Dev BootCamp</Text></Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card m={2} sx={{ height: "240px", width: "200px" }} >
                                <Image src={logo} />
                                <Text>Web-Dev BootCamp</Text></Card>
                        </SwiperSlide>
                    </Flex>
                </Swiper>
            </Box>
        </Container>
    )
}
