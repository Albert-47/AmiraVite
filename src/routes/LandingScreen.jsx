/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Box, Divider, IconButton, CssBaseline, Avatar } from '@mui/material';
import Brands from '../components/Brands';
import '../styles.js';
import MPProducts from '../components/MPProducts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container } from '@mui/system';
import AmiraLogo from '../assets/amiraIcon.jpg';



const LandingScreen = () => {


  return (
    <>
    <CssBaseline />
    <Box sx={{width: '100%', display:{xs:'none', sm: 'block'}}}>
      <img src={AmiraLogo} alt="Amira Logo" style={{width: '100%'}} /> 
    </Box>

      <Container>

        <Typography 
          variant='h2'
          sx={{margin:'20px 0px 50px', fontFamily: 'Merriweather, serif' }} 
          >
            Somos la tienda que estabas buscando
        </Typography>

        <Avatar
          variant='rounded'
          component='figure' 
          sx={{width:{xs: '20rem', sm:'35rem'}, height:{xs:'17rem', sm:'25rem'}, margin:'auto',}} >
           <img src='https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=170667a&w=0&h=eotKOl8L6c3zO5lvJG4xzFZ1c3hV1EHV2MzxDQiOjSs=' 
              alt='Tienda'
              className='storeImage' />
        </Avatar>

        {/* Marcas */}
        <Typography 
          variant='h2'
          sx={{margin:'50px 0px 50px'}}
           >
            Con las mejores marcas
        </Typography>

        <Brands sx={{alignSelf: 'center'}} />

        <Typography
          variant='h2'
          sx={{margin:'50px 0px 50px'}}
           >
            Y la mayor variedad...
        </Typography>

        <MPProducts sx={{paddingBottom: 2}} />

      </Container>

      <Divider />

      <Box component='footer' sx={{bgcolor: 'rgba(235,110,22,0.8519782913165266)'}} >
        <Typography variant='subtitle2' align='center' sx={{paddingTop:2}} >Visítanos! </Typography>
        <Typography variant='subtitle2' align='center' sx={{color: 'gray'}} >Los Guajiros, Pasillo Sambilito... Ustedes saben donde es... </Typography>
        <Typography variant='subtitle2' align='center' >... O contáctanos por nuestras redes: </Typography>
        <Box display='flex' justifyContent='center'>
          <IconButton onClick={()=>alert('SIIIIIIUUUUU')}>
          <FacebookIcon />
          </IconButton>
          <IconButton>
          <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  )
}

export default LandingScreen