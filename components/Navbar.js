import { NavLink, Flex, Text, Box, Card } from 'theme-ui'
import Image from 'next/image'
import logo from '../Public/logo.png'

import { useState } from 'react'
import ColorSwitcher from './color-switcher';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let COUNTER = 0;
  // const showNav = () => {
  //   // // COUNTER++;
  //   // const nav = document.getElementById('nav-bar');
  //   // if (COUNTER === 0) {
  //   //   nav.style.display = "block";
  //   //   COUNTER++;
  //   // }
  //   // else {
  //   //   nav.style.display = "none";
  //   //   COUNTER--;
  //   // }
  // }
  return (
    <div>
      <Box
        py={3}
        bg="white"
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 5,
          display: 'flex', justifyContent: 'flex-end',
          borderBottom: '1px solid grey',
          alignItems: "center", fontSize: '18px',
          backdropFilter:'blur(10px)',

        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '20%',
            ml: 6,
            fontSize: '28px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: "theme.util.gxText('sheet', 'primary')",
            '@media (max-width:426px)': {
              ml: 0,
              width: '100%',
              justifyContent: 'space-between',
              alignContent: 'center',
            },
          }}
        >
          <Image
            src={logo}
            width={90}
            height={90}
            alt="Picture of the author"
          />
        <ColorSwitcher/>

          <Box onClick={() => setIsOpen(!isOpen)} sx={{
            display: "none", '@media (max-width:426px)': {
              display: 'block',
            },
          }}>Menu </Box>
        </Box>
        <Box sx={{
          display: (isOpen ? "block" : "none"),
          margin: 1,
          width: '120px',
          position: 'absolute',
          top: "100%",
          right: "10%",
          backgroundColor: 'sunken',
          borderRadius: '8px', textAlign: 'center'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <NavLink m={2}>Home</NavLink>
            <NavLink m={2}>About</NavLink>
            <NavLink m={2}>Events</NavLink>
            <NavLink m={2}>Gallery</NavLink>
            <NavLink m={2}>Team</NavLink>
          </Box>
        </Box>
        <Box
          sx={{
            width: '80%',
            padding: '0 15px',
            display: 'flex',
            color: "primary",
            fontSize: "1.8rem",
            justifyContent: 'space-evenly',
            transition: 'all 0.2s ease-in-out',
            '@media (max-width:426px)': {
              display: "none"
            },
          }}
        >
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Team</NavLink>
        </Box>
      </Box>
      <div >

      </div>
    </div >
  )
}
