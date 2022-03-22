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

function Gallery() {
    return <div>
        <Container props="theme.layout={wide}"
            sx={{
                bg: "sheet",
                ml: "5%",
                mt: "2%",
                mb: "2%",
                height: "80vh",
                borderRadius: "10px",
                textAlign: "center",
                width: "15%",
                overflow: "auto",
                "::-webkit-scrollbar ": {
                    width: "8px",
                    

                },
                "::-webkit-scrollbar-track": {
                    // background:"background: rgba(61, 61, 61)"
                    background: "darken",

                },
                "::-webkit-scrollbar-thumb": {
                    background: "rgba(102, 102, 102, 0.637)",
                    borderRadius: "10px",
                },

            }}>

            <Card sx={{ height: "15%", mt: "8%", ':hover':{height:"16%",transform:"scale(1.1)",boxShadow:"0 0 10px 0.4px"}}}>Insights Of Events</Card>
            <Card sx={{ height: "22%", mt: "8%",':hover':{height:"22.2%",transform:"scale(1.1)",transition:"all 0.3s ease-in-out"} }}>HacktoberFest 2021</Card>
            <Card sx={{ height: "22%", mt: "8%",':hover':{height:"22.2%",transform:"scale(1.1)",transition:"all 0.3s ease-in-out"} }}>Flutter BootCamp</Card>
            <Card sx={{ height: "22%", mt: "8%",':hover':{height:"22.2%",transform:"scale(1.1)",transition:"all 0.3s ease-in-out"} }}>Web-Dev BootCamp</Card>
            <Card sx={{ height: "22%", mt: "8%",':hover':{height:"22.2%",transform:"scale(1.1)",transition:"all 0.3s ease-in-out"} }}>Web-Dev BootCamp</Card>
            <Card sx={{ height: "22%", mt: "8%",':hover':{height:"22.2%",transform:"scale(1.1)",transition:"all 0.3s ease-in-out"} }}>Web-Dev BootCamp</Card>
            <Card sx={{ height: "22%", mt: "8%",mb:"8%",':hover':{height:"22.2%",transition:"all 0.5s ease-in-out",boxShadow:"0 0 10px 0.4px"} }}>Web-Dev BootCamp</Card>
        </Container>
    </div>;
}

export default Gallery;
