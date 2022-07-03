import React from 'react';
import { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, Button, Avatar, IconButton, SwipeableDrawer, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { categories } from '../data/categories';
import AmiraCutIcon from '../assets/amiraCutIcon.jpg';

const NavBar = () => {

  const [drawer, setDrawer] = useState(false);

  return (
    <>
    <CssBaseline />
    <AppBar position='sticky' sx={{width: '100%'}}  >
      <Container>
        <Toolbar>
          <IconButton
            onClick={() => setDrawer(true)}
            sx={{display:{xs:'block', sm:'none'}}}>
            <MenuIcon />
          </IconButton>
            {categories.map(category => (
                <Button key={category} 
                        variant='text'
                        sx={{display:{xs:'none', sm:'flex'}, padding:'0px', height:'2rem', margin:{xs:'10px'}}}
                        color='warning'>
                          <Link to={`/Categories/${category}`}
                                style={{textDecoration: 'none', padding:'5px', color:'orange'}}>
                                  {category} 
                          </Link>
                </Button>
            ))}
            <IconButton sx={{marginLeft: 'auto'}}>
              <Link to='/Home'>
                <Avatar srcSet={AmiraCutIcon} variant='rounded' sx={{width:'5rem'}}  />
                </Link>
            </IconButton>
        </Toolbar>
      </Container>

              {/* Drawer  */}

              <SwipeableDrawer
                anchor='left'
                open={drawer} 
                onClose={() => setDrawer(false)}
                onOpen={() => setDrawer(true)} >
                <IconButton sx={{marginLeft: 'auto'}} onClick={() => setDrawer(false)}>
                  <ChevronLeftIcon />
                </IconButton>
                <Divider />
                  {categories.map(category => (
                    <Button key={category} 
                            variant='text'
                            sx={{padding:'0px', height:'2rem', margin:{xs:'10px'}}}
                            onClick={() => setDrawer(false)}
                            color='warning'>
                              <Link to={`/Categories/${category}`}
                                    style={{textDecoration: 'none', padding:'5px', color:'orange'}}>
                                      {category} 
                              </Link>
                    </Button>
                  ))}
              </SwipeableDrawer>
    </AppBar>
    </>
  )
}

export default NavBar