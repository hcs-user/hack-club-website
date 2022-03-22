import {
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import ColorSwitcher from '../components/color-switcher'
import Navbar from '../components/Navbar'
import Router from 'next/dist/server/router'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
const logo = require('../assets/logo.png');

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function Gallery() {
    return <div>
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "center",
            m: "auto"
        }}>
            <Container sx={{ maxHeight: "50vw !important", fontSize: "2rem", textAlign: 'center', borderRadius: "5px", padding: "20px" }} bg={'sheet'} b>
                <Text backgroundColor={'primary'} p={2} sx={{ borderRadius: "15px" }}>A Glance of Hack Club SVIT</Text>

                <Box mt={4}>
                    <Swiper
                        spaceBetween={10}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image src={logo} w={[60, 55, 80]} border={['1px solid red', '1px solid green', '1px solid blue']} h="auto" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image src={logo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={logo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={logo} />
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Container>
        </Flex>
    </div>;
}

export default Gallery;
