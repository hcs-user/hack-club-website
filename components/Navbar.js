import { NavLink, Flex, Text, Box } from 'theme-ui'
import Image from 'next/image'
import logo from '../Assets/logo.png'
import home_icon from '../Assets/home.svg'
import about_icon from '../Assets/about.svg'
import events_icon from '../Assets/events.png'
import team_icon from '../Assets/team.png'
import gallery_icon from '../Assets/gallery.png'
export default function Navbar() {
  return (
    <div>
      <Box
        p={3}
        bg="sheet"
        sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: '18px' }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '50%',
            ml: '5%',
            fontSize: '28px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: "theme.util.gxText('sheet', 'primary')",
            '@media (max-width:426px)': {
              width: '100%',
              justifyContent: 'center',
              alignContent: 'center'
            },
          }}
        >
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Picture of the author"
          />
          HackClubSvit
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
        <Box sx={{
          display: "none",
          '@media (max-width:426px)': {
            display: "flex",
            position: "absolute",
            bg: "rgba(255,255,255,0.30)",
            height: "7vh",
            bottom: "0",
            position: "fixed",
            color: "accent",
            left: "2",
            right: "2",
            borderRadius: "10px"


          },

        }}>
          <Flex sx={{
            justifyContent: "space-around",
            width: "100vw",
            fontSize: "18px",
            paddingInline: "10px",
            fontSize: "13px",
            fontWeight: "500"
          }}>
            <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={home_icon}
                width={30}
                height={30}
                alt="Picture of the author"
              /><Text sx={{ fontSize: "15px" }}>Home</Text>
            </Flex>
            <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={about_icon}
                width={30}
                height={30}
                sx={{ color: "smoke" }}
                alt="Picture of the author"
              />About
            </Flex>
            <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={events_icon}
                width={30}
                height={30}
                sx={{ color: "smoke" }}
                alt="Picture of the author"
              />Events
            </Flex>
            <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={team_icon}
                width={30}
                height={30}
                sx={{ color: "smoke" }}
                alt="Picture of the author"
              />Team
            </Flex>
            <Flex sx={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={gallery_icon}
                width={30}
                height={30}
                sx={{ color: "smoke" }}
                alt="Picture of the author"
              />Gallery
            </Flex>
          </Flex>
        </Box>
      </div>
    </div >
  )
}
