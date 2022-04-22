import { NavLink, Flex, Text, Box, Card } from 'theme-ui';
import Image from 'next/image';
import { useState } from 'react';
import ColorSwitcher from './color-switcher';
import router, { useRouter } from "next/router";

const Navitem = ({ Link, href }) => {
  const router = useRouter()
  return (
    <NavLink href={href}>
      <Text sx={{
        fontSize: '1.5rem',
        fontWeight: "400",
        fontStyle: 'normal',
      }}>{Link}</Text></NavLink>
  )
}
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Links = ['Home', 'About', 'Events', 'Gallery', 'Team'];
  const LinkItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#event" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Team", href: "/#contact" },
  ];
  const Navigate = () => {
    setIsOpen(false);
    router.push("/");
  }
  return (
    <div>
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 5,
          top: 0,
          display: 'flex',
          justifyContent: 'flex-start',
          borderBottom: '1px solid',
          borderColor: 'primary',
          alignItems: "center", fontSize: '18px',
          backdropFilter: 'blur(5px)',
          p: '2'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '30%',
            ml: 4,
            fontSize: '28px',
            justifyContent: 'space-between',
            alignItems: 'center',
            '@media (max-width:768px)': {
              ml: 0,
              width: '100%',
              justifyContent: 'space-around',
              alignContent: 'center',
            },
          }}
        >
          <Image
            src={'/new.png'}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <ColorSwitcher />

          <Box onClick={() => setIsOpen(!isOpen)} sx={{
            display: "none", '@media (max-width:768px)': {
              display: "block",
              width: "40px",
              minHeight: "40px",
              ml: 6,
              // border: "1px solid red"
            },
          }}>
            <Box sx={{
              position: "relative",
              width: (isOpen ? "20px" : "40px"),
              minHeight: "4px",
              background: "White",
              mt: "10px",
              transformOrigin: "left",
              transform: (isOpen ? "rotate(45deg)" : "rotate(0deg)"),
              transition: "all 0.2s ease"
            }}></Box>
            <Box sx={{
              position: "relative",
              width: (isOpen ? "20px" : "20px"),
              minHeight: "4px",
              background: "White",
              mt: "10px",
              transformOrigin: "left",
              transform: (isOpen ? "rotate(-45deg)" : "rotate(0deg)"),
              transition: "all 0.2s ease"

            }}></Box>
          </Box>
        </Box>
        <Box sx={{
          display: "block",
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: "100%",
          transition: "all 0.2s ease",
          left: (isOpen ? 0 : "-100%"),
          backgroundColor: 'sunken',
          textAlign: 'center'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: "100%", }}>

            <NavLink href='#about' onClick={Navigate}>
              About
            </NavLink>
            <NavLink href='#event' onClick={Navigate}>
              Events
            </NavLink>
            <NavLink href='#gallery' onClick={Navigate}>
              Gallery
            </NavLink>
            <NavLink onClick={() => { router.push('/team'); setIsOpen(false) }}>
              Team
            </NavLink>

          </Box>
        </Box>
        <Box
          sx={{
            width: '40%',
            padding: '0 15px',
            display: 'flex',
            color: "primary",
            fontSize: "1.1rem",
            justifyContent: 'space-evenly',
            transition: 'all 0.2s ease-in-out',
            '@media (max-width:768px)': {
              display: "none"
            },
          }}
        >
          <NavLink href="#about" onClick={() => router.push('/')}>
            About
          </NavLink>
          <NavLink href="#event" onClick={() => router.push('/')}>
            Events
          </NavLink>
          <NavLink href="#gallery" onClick={() => router.push('/')}>
            Gallery
          </NavLink>
          <NavLink onClick={() => router.push('/team')}>
            Team
          </NavLink>
        </Box>
      </Box>
      <div >
      </div>
    </div >
  )
}
