import React from 'react'
import { Card, Container, Flex, Text } from 'theme-ui'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
const logo = require('../assets/logo.png');

export default function Events() {

    return (
        <Container p={2} sx={{ textAlign: "center" }} >
            <Text sx={{ fontSize: "4rem" }}>Events </Text>
            <Swiper
                spaceBetween={40}
                slidesPerView={3.4}
                breakpoints={{
                    280: {
                        slidesPerView: 1.4,
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
                        <Card m={2} sx={{ height: "200px", width: "200px" }} >
                            <Image src={logo} />
                            <Text>HacktoberFest 2021</Text>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card m={2} sx={{ height: "200px", width: "200px" }} >
                            <Image src={logo} />
                            <Text>Flutter BootCamp</Text>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card m={2} sx={{ height: "200px", width: "200px" }} >Web-Dev BootCamp</Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card m={2} sx={{ height: "200px", width: "200px" }} >HI</Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card m={2} sx={{ height: "200px", width: "200px" }} >HI</Card>
                    </SwiperSlide>
                </Flex>
            </Swiper>
        </Container>
    )
}
