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
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'swiper/css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// const logo = require('../assets/logo.png');

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function Gallery() {
    return <div>
        <Container mt={2} p={4} mb={2} backgroundColor={'sheet'} sx={{ height: 'max-content',
         borderRadius: '5px',
          textAlign: 'center',
           fontSize: '3rem',
           fontWeight:500 }}>

            <Text p={2} sx={{ borderRadius: '8px', color: 'primary' }}>A Glance AT Hack Club SVIT</Text>
            <Box>
               
            </Box>
        </Container>
    </div>;
}

export default Gallery;
