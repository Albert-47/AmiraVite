import React from 'react';
import { CssBaseline, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const NavBar = () => {
  return (
    <>
    <CssBaseline />
    <AppBar position='static' sx={{width: '100%'}} color='default' >
      <Toolbar>
          {categories.map(category => (
              <Button key={category} 
                      variant='text'><Link to={`/Categories/${category}`}
                      style={{textDecoration: 'none'}}> {category} </Link>
              </Button>
          ))}
      </Toolbar>
    </AppBar>
    </>
  )
}

export default NavBar