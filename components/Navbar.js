import { NavLink, Flex, Text, Box, Card } from 'theme-ui';
import Image from 'next/image';
import { useState } from 'react';
import ColorSwitcher from './color-switcher';
import { useRouter } from "next/router";

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
  const LinkItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Events", href: "/#event" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Team", href: "/#contact" },
  ];
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
            color: "theme.util.gxText('sheet', 'primary')",
            '@media (max-width:768px)': {
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
            display: "none", '@media (max-width:768px)': {
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
          left: 0,
          backgroundColor: 'sunken',
          textAlign: 'center'
        }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: "100%", }}>
            {
              LinkItems && LinkItems.map((Link) => {
                return (
                  <Navitem Link={Link.name} href={Link.href} />
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
            '@media (max-width:768px)': {
              display: "none"
            },
          }}
        >
          {/* {
            Links && Links.map((Link) => {
              return (
                <Navitem Link={Link} />
              )
            })
          } */}
          <NavLink href="#about">
            About
          </NavLink>
          <NavLink href="#event">
            Events
          </NavLink>
          <NavLink href="#gallery">
            Gallery
          </NavLink>
          {/* <NavLink href="#team">
            Team
          </NavLink> */}
        </Box>
      </Box>
      <div >
      </div>
    </div >
  )
}
