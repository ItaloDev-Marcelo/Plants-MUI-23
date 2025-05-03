
import {Stack, List, ListItemButton, ListItemIcon, ListItem, Link, Button} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
export default function NavegationTab() {

  const [menu, setMenu]  = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(25);
 
  const controlNavbar = () => {
    if(window.scrollY  > lastScrollY) {
      setShow(false);
    }else  {
      setShow(true);
    }
    setLastScrollY(window.scrollY) 
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY])

    return (
      <Stack component='header' id='nav-header' sx={{display: show ? 'flex': 'none', 
        flexDirection: 'row',
      alignItems: 'center',
      alignContent: {lg: 'flex-end'},
       justifyContent: 'space-between'
       }} >
          <Link marginLeft={{xs: '.5em', lg: '3.5em'}} fontSize='1.2em'   href='index.html'>Plants</Link>
          <Button sx={{display: {xs:'block', lg:'none'}, position: 'relative', left: {xs: '5em'}}} 
          onClick={ () => setMenu(!menu)} startIcon={menu ? <CloseIcon/> : <MenuIcon/>} >
          </Button>
          <Stack component='nav' width='800px'  sx={{position: {xs:'absolute', lg: 'relative'},
           top: {xs: '5rem', lg: 0}, left: {xs: 0},
           display: {xs: menu ? 'block' : 'none', lg: 'block'},
           backgroundColor: {xs: '#D9E5E4', lg: 'transparent'},
           height: {xs: '100vh', lg: 'auto'}
           }}> 
              <List sx={{display: 'flex',
              paddingLeft: {xs: '1.2em'},
               flexDirection: {xs: 'column', lg: 'row'},
               alignItems: 'center',
                justifyContent: {xs: 'center', lg: 'space-between'}}}>
                  <ListItem>Home</ListItem>
                  <ListItem >Plant finder</ListItem>
                  <ListItem>Products</ListItem>
                  <ListItem>About us</ListItem>
                  <ListItem>Contact</ListItem>
                  <ListItem>My Plants</ListItem>
                  <ListItemButton>
                     <ListItemIcon>
                         <PersonIcon />
                     </ListItemIcon>
                  </ListItemButton>
                  <ListItemButton>
                     <ListItemIcon>
                          <ShoppingCartIcon/>
                     </ListItemIcon>
                  </ListItemButton>
              </List>
          </Stack>

      </Stack>  
    )
}