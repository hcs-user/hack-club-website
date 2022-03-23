import { NavLink, Flex, Text, Box, Card } from 'theme-ui'
import Image from 'next/image'
import logo from '../Assets/logo.png'
import home_icon from '../Assets/home.svg'
import about_icon from '../Assets/about.svg'
import events_icon from '../Assets/events.png'
import team_icon from '../Assets/team.png'
import gallery_icon from '../Assets/gallery.png'
import { useState } from 'react'
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
        p={3}
        bg="sheet"
        sx={{
          position:'fixed',
          width:'100%',
          zIndex:5,
          display: 'flex', justifyContent: 'flex-end',
          borderBottom: '1px solid grey',
          alignItems: "center", fontSize: '18px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '50%',
            ml: '5%',
            fontSize: '28px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: "theme.util.gxText('sheet', 'primary')",
            '@media (max-width:426px)': {
              ml: 0,
              width: '100%',
              justifyContent: 'space-between',
              alignContent: 'center',
              padding: '0 12px'
            },
          }}
        >
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <Box onClick={() => setIsOpen(!isOpen)} sx={{
            display: "none", '@media (max-width:426px)': {
              display: 'block',
            },
          }}>Menu </Box>
        </Box>
        <Box id='nav-bar' sx={{
          display: (isOpen ? "block" : "none"),
          width: '120px',
          position: 'absolute',
          top: "12%",
          right: "10%",
          backgroundColor: 'sunken',
          borderRadius: '8px',textAlign:'center'
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
            width: '50%',
            padding: '0 15px',
            display: 'flex',
            justifyContent: 'space-evenly',
            transition: 'all 0.2s ease-in-out',
            '@media (max-width:426px)': {
              display: "none"
            },
          }}
        >
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Events</NavLink>
          <NavLink>Team</NavLink>
        </Box>
      </Box>
      <div >

      </div>
    </div >
  )
}
