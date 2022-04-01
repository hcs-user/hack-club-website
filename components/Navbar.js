import { NavLink, Flex, Text, Box, Card } from 'theme-ui'
import Image from 'next/image'
import { useState } from 'react'
import ColorSwitcher from './color-switcher';

const Navitem = ({ Link}) => {
  return (
    <NavLink>
      <Text sx={{
        fontSize: '1.5rem',
        fontWeight: "400",
        fontStyle: 'normal',
      }}>{Link}</Text></NavLink>
  )
}
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
  const Links = ['Home', 'About', 'Events', 'Gallery', 'Team'];
  // const Href = ['#Home', '#About', '#Events', '#Gallery', '#Team'];

  return (
    <div>
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          zIndex: 5,
          display: 'flex',
          justifyContent: 'flex-start',
          borderBottom: '1px solid',
          borderColor:'primary',
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
            src={'/new.png'}
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <ColorSwitcher />

          <Box onClick={() => setIsOpen(!isOpen)} sx={{
            display: "none", '@media (max-width:426px)': {
              display: 'block',
              marginRight: "15%"
            },
          }}>Menu </Box>
        </Box>
        <Box sx={{
          display: (isOpen ? "block" : "none"),
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: "100%",
          backgroundColor: 'sunken',
          textAlign: 'center'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: "100%", }}>
            {
              Links && Links.map((Link) => {
                return (
                  <Navitem Link={Link} />
                )
              })
            }
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
            '@media (max-width:426px)': {
              display: "none"
            },
          }}
        >
          {
            Links && Links.map((Link) => {
              return (
                <Navitem Link={Link} />
              )
            })
          }
        </Box>
      </Box>
      <div >

      </div>
    </div >
  )
}
