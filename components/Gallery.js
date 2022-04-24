import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
    Box, Container, Text
} from 'theme-ui';



function Gallery() {
    return <div>
        <Container id="gallery" mt={2} p={4} mb={2} backgroundColor={'sheet'} sx={{
            height: 'max-content',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: ['1.5rem', null, '3rem'],
            fontWeight: 500
        }}>

            <Text variant='title' p={2} sx={{ color: 'primary' }}>A Glance AT Hack Club SVIT</Text>
            <Box py={4}>
                <AwesomeSlider>
                    <div data-src="/3.webp" />
                    <div data-src="/2.jpg" />
                    <div data-src="/1.jpg" />
                    <div data-src="/4.jpg" />
                </AwesomeSlider>
            </Box>
        </Container>
    </div>;
}

export default Gallery;
