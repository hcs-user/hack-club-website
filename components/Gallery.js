import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Box, Container, Text } from 'theme-ui'

function Gallery() {
  return (
    <div>
      <Container
        id="gallery"
        py={5}
        backgroundColor={'#2F2F2F'}
        sx={{
          height: 'fit-content',
          borderRadius: '1px',
          minWidth: '100%',
          textAlign: 'center',
          // fontSize: ['1.5rem', null, '3rem'],
          fontWeight: 500
        }}
      >
        <Text
          variant="title"
          mt={2}
          sx={{ color: 'primary', fontSize: [4, 5] }}
        >
          Have a look at our previous events
        </Text>
        <Box p={5}>
          <AwesomeSlider sx={{ borderRadius: '20px' }}>
            <div data-src="/3.webp" />
            <div data-src="/2.jpg" />
            <div data-src="/1.jpg" />
            <div data-src="/4.jpg" />
          </AwesomeSlider>
        </Box>
      </Container>
    </div>
  )
}

export default Gallery
