import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import styled from '@emotion/styled';

const Iconstyle = styled(ListItemIcon)`
  font-size: 25px;
`
const Icontext = styled(ListItemText)`
  padding: 5px 25px;
  font-weight: 700;
  font-size: 18px;
`
const Liststyle = styled(List)`
  margin-left:30px;
`
const HomeLogo = styled(FaHome)`
  color: #1da1f2;
`
const TwitterLogo = styled(FaTwitter)`
  color: #1da1f2;
  font-size: 40px;
  margin-top:20px;
`
const Drawers = () => {
  const [isDrewerOpen, setIsDrewerOpen] = useState(false);
  const datatext = [
    { 
      icon:<TwitterLogo />
    },
    { 
      text: 'Home',
      icon:<HomeLogo />,
    },
    { 
      text: 'Trending',
      icon:<FaHashtag />,
    },
    { 
      text: 'Notification',
      icon:<FaRegBell />
    },
    { 
      text: 'Messages',
      icon:<FaRegEnvelope />
    },
    { 
      text: 'Bookmark',
      icon:<FaRegBookmark />
    },
    { 
      text: 'List',
      icon:<FaClipboardList />
    },
    { 
      text: 'Profile',
      icon:<FaUserAlt />
    },
    { 
      text: 'More',
      icon:<FaMehBlank />
    },
  ];
  return (
    <>
      <IconButton sx={{display:{sm:"none"}}} size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrewerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={isDrewerOpen} onClose={() => setIsDrewerOpen(false)}>
        <Box width='45vw' role='presentation'>
          <Liststyle>
            {datatext.map((item, index) => {
              const {text,icon}=item;
              return(
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  {icon && <Iconstyle>{icon}</Iconstyle>}
                  <Icontext primary={text} />
                </ListItemButton>
              </ListItem>
              )
            })}
          </Liststyle>
          <Button style={{marginLeft:"35px",width:"30vw"}} variant="contained">Contained</Button>
        </Box>
      </Drawer>
    </>
  )
}

export default Drawers
