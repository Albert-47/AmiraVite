/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Box, Divider, IconButton } from '@mui/material';
import Brands from '../components/Brands';
import { cyan } from '@mui/material/colors';
import '../styles.css';
import MPProducts from '../components/MPProducts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container } from '@mui/system';

const mainColorLight= cyan[100];


const LandingScreen = () => {


  return (
    <>
         {/* Imagen de la tienda */}
         <Container>

          <Typography variant='h5'sx={{margin:'20px 0px 50px'}} >Somos la tienda que estabas buscando</Typography>
        <Box component='figure' sx={{borderRadius: '10px', bgcolor: mainColorLight , display: 'flex', justifyContent: 'center'}} >
        <img src='https://media.istockphoto.com/photos/clothes-shop-interior-picture-id901863672?k=20&m=901863672&s=170667a&w=0&h=eotKOl8L6c3zO5lvJG4xzFZ1c3hV1EHV2MzxDQiOjSs=' 
        alt='Tienda' styles={{width: 200}} className='storeImage' />
        </Box>

        {/* Marcas */}
        <Typography variant='h5' sx={{margin:'50px 0px 50px'}} >Con las mejores marcas</Typography>

        <Brands sx={{alignSelf: 'center'}} />

        <Typography variant='h5' sx={{margin:'50px 0px 50px'}} >Y la mayor variedad...</Typography>

        <MPProducts sx={{paddingBottom: 2}} />
        </Container>
        <Divider />
        <Box component='footer' sx={{bgcolor: cyan[50]}} >
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